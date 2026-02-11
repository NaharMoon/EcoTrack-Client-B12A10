import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import ProgressUpdateModal from "../../../components/ProgressUpdateModal";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const MyActivities = () => {
  const { user } = useContext(AuthContext);
  const userId = user?.email;

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const load = async () => {
      try {
        setLoading(true);
        setError("");

        // 1) joined list
        const res = await fetch(
          `${API}/api/user-challenges?userId=${encodeURIComponent(userId)}`
        );
        const joined = await res.json();

        // 2) each challenge details fetch করে title আনবো (minimal)
        const enriched = await Promise.all(
          (joined || []).map(async (item) => {
            try {
              const cRes = await fetch(`${API}/api/challenges/${item.challengeId}`);
              const challenge = await cRes.json();
              return { ...item, challenge };
            } catch {
              return { ...item, challenge: null };
            }
          })
        );

        setActivities(enriched);
      } catch (e) {
        setError("Failed to load activities");
        setActivities([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [userId]);

  const refetchActivities = async () => {
    const res = await fetch(`${API}/api/user-challenges?userId=${user.email}`);
    const data = await res.json();
    setActivities(data);
  };


  const badgeClass = (status) => {
    if (status === "Completed") return "badge badge-success";
    if (status === "In Progress") return "badge badge-info";
    return "badge badge-ghost";
  };

  const formatDate = (d) => {
    try {
      return new Date(d).toLocaleDateString();
    } catch {
      return "";
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">My Activities</h2>
          <p className="text-sm opacity-70">Joined challenges</p>
        </div>
        <div className="text-sm opacity-70">
          Total: <span className="font-medium">{activities.length}</span>
        </div>
      </div>

      {!loading && error && (
        <div className="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      )}

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="card bg-base-100 border shadow-sm">
              <div className="card-body space-y-3">
                <div className="skeleton h-5 w-2/3" />
                <div className="skeleton h-4 w-1/3" />
                <div className="skeleton h-3 w-full" />
                <div className="skeleton h-10 w-28" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && activities.length === 0 && (
        <div className="p-10 border rounded-2xl bg-base-100 text-center shadow-sm">
          <h3 className="text-lg font-semibold">No activities found</h3>
          <p className="text-sm opacity-70 mt-1">
            You haven’t joined any challenge yet.
          </p>
        </div>
      )}

      {!loading && !error && activities.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activities.map((a) => (
            <div
              key={a._id}
              className="card bg-base-100 border border-primary shadow-sm hover:shadow-md transition"
            >
              <div className="card-body">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {/* ✅ Title show */}
                    <h3 className="text-lg font-semibold leading-snug">
                      {a?.challenge?.title || "Challenge"}
                    </h3>
                    <p className="text-sm opacity-70">
                      {a?.challenge?.category ? a.challenge.category : "EcoTrack Activity"}
                    </p>
                  </div>

                  <span className={badgeClass(a.status)}>
                    {a.status}
                  </span>
                </div>

                <div className="mt-3">
                  <div className="flex justify-between text-sm">
                    <span className="opacity-70">Progress</span>
                    <span className="font-medium">{a.progress ?? 0}%</span>
                  </div>
                  <progress
                    className="progress progress-success w-full mt-1"
                    value={a.progress ?? 0}
                    max="100"
                  />
                </div>

                <div className="mt-4 flex justify-between text-sm opacity-70">
                  <span>Joined</span>
                  <span>{formatDate(a.joinDate)}</span>
                </div>

                {/* ✅ Details button */}
                <div className="mt-4 flex justify-between">
                  <Link
                    to={`/challenges/${a.challengeId}`}
                    className="btn btn-sm btn-outline"
                  >
                    View Details
                  </Link>
                  {/* // card এর ভিতরে */}
                  <ProgressUpdateModal
                    userChallengeId={a._id}          // userChallenges doc id
                    currentProgress={a.progress}
                    currentStatus={a.status}
                    onUpdated={() => refetchActivities()}  // parent function: আবার GET call করবে
                  />
                </div>

                {/* (optional tiny) */}
                <p className="mt-2 text-xs opacity-50 font-mono break-all">
                  ID: {a.challengeId}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyActivities;
