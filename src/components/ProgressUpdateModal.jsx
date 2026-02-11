import { useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ProgressUpdateModal = ({ userChallengeId, currentProgress, currentStatus, onUpdated }) => {
  const [status, setStatus] = useState(currentStatus || "Not Started");
  const [progress, setProgress] = useState(currentProgress ?? 0);
  const [saving, setSaving] = useState(false);

  const modalId = `progress_modal_${userChallengeId}`;

  const handleSave = async () => {
    try {
      setSaving(true);

      const res = await fetch(`${API}/api/user-challenges/progress/${userChallengeId}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status, progress }),
      });

      if (!res.ok) return;

      // parent কে বলবে যেন data refetch করে
      onUpdated?.();

      // close modal
      document.getElementById(modalId)?.close();
    } catch (e) {
      // ignore minimal
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        className="btn btn-sm btn-nutral"
        onClick={() => document.getElementById(modalId)?.showModal()}
      >
        Update Progress
      </button>

      {/* DaisyUI modal */}
      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-secondary">Update Progress</h3>
          <p className="text-sm opacity-70 mt-1">
            Select a stage and progress percentage.
          </p>

          <div className="mt-5 space-y-4">
            {/* status dropdown */}
            <div>
              <label className="label">
                <span className="label-text">Stage</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={status}
                onChange={(e) => {
                  const s = e.target.value;
                  setStatus(s);

                  // optional: auto progress mapping (simple)
                  if (s === "Not Started") setProgress(0);
                  if (s === "") setProgress((p) => (p < 10 ? 10 : p));
                  if (s === "Completed") setProgress(100);
                }}
              >
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>

            {/* progress dropdown (simple preset) */}
            <div>
              <label className="label">
                <span className="label-text">Progress (%)</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                disabled={status === "Completed"}
              >
                {[0, 10, 25, 50, 75, 90, 100].map((p) => (
                  <option key={p} value={p}>
                    {p}%
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-ghost">Cancel</button>
            </form>
            <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ProgressUpdateModal;
