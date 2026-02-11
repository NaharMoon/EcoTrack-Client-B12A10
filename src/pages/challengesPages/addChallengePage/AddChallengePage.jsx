import { useContext, useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";
const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const AddChallengePage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const categories = useMemo(
    () => [
      "Waste Reduction",
      "Energy Conservation",
      "Water Conservation",
      "Sustainable Transport",
      "Green Living",
      "Eco Awareness",
      "Recycling",
      "Tree Planting",
    ],
    []
  );

  const [loading, setLoading] = useState(false);
  const [imgPreview, setImgPreview] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    category: categories[0],
    description: "",
    duration: 7,
    target: "",
    impactMetric: "",
    startDate: "",
    endDate: "",
    imageUrl: "",
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const finalValue =
      type === "checkbox"
        ? checked
        : name === "duration"
        ? Number(value)
        : value;

    setFormData((prev) => ({ ...prev, [name]: finalValue }));

    if (name === "imageUrl") {
      setImgPreview(value);
    }
  };

  const validate = () => {
    if (!formData.title.trim()) return "Title is required.";
    if (!formData.category) return "Category is required.";
    if (!formData.description.trim()) return "Description is required.";
    if (!formData.duration || formData.duration < 1)
      return "Duration must be at least 1 day.";
    if (!formData.target.trim()) return "Target is required.";
    if (!formData.impactMetric.trim()) return "Impact metric is required.";
    if (!formData.startDate) return "Start date is required.";
    if (!formData.endDate) return "End date is required.";
    if (formData.endDate < formData.startDate)
      return "End date cannot be earlier than start date.";
    if (!formData.imageUrl.trim()) return "Image URL is required.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    const payload = {
      title: formData.title.trim(),
      category: formData.category,
      description: formData.description.trim(),
      duration: Number(formData.duration),
      target: formData.target.trim(),
      impactMetric: formData.impactMetric.trim(),
      startDate: formData.startDate,
      endDate: formData.endDate,
      imageUrl: formData.imageUrl.trim(),
      participants: 0,
      createdBy: user?.email || "anonymous@ecotrack.com",
      featured: !!formData.featured,
    };

    try {
      setLoading(true);

      const res = await fetch(`${API}/api/challenges`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        console.log("Server error:", data);
        toast.error("Failed to add challenge. Check console.");
        return;
      }

      toast.success("✅ Challenge added successfully!");
      navigate("/challenges");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0f3d23] via-[#14532d] to-[#0f3d23]">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-primary font-semibold tracking-wide">
                EcoTrack • Admin
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
                Add New Challenge
              </h1>
              <p className="text-white/75 mt-2 max-w-2xl">
                Create engaging eco challenges for the community. Keep it clear,
                measurable, and inspiring.
              </p>
            </div>

            <div className="flex gap-3">
              <Link to="/challenges" className="btn btn-outline">
                Back
              </Link>
              <div className="badge badge-primary badge-outline p-4 text-white/90 border-white/25">
                Created by: {user?.email || "Guest"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Card */}
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="text-xl font-bold text-secondary">
                  Challenge Details
                </h2>
                <p className="text-base-content/70 -mt-1">
                  Fill all fields carefully. These will be shown on the
                  challenges page & details page.
                </p>

                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Title */}
                    <div className="form-control md:col-span-2">
                      <label className="label">
                        <span className="label-text font-semibold">Title</span>
                      </label>
                      <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        type="text"
                        placeholder="e.g., Plastic-Free Week"
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Category */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Category
                        </span>
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Duration */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Duration (days)
                        </span>
                      </label>
                      <input
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        type="number"
                        min={1}
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Target */}
                    <div className="form-control md:col-span-2">
                      <label className="label">
                        <span className="label-text font-semibold">Target</span>
                      </label>
                      <input
                        name="target"
                        value={formData.target}
                        onChange={handleChange}
                        type="text"
                        placeholder="e.g., Reduce plastic waste"
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Impact Metric */}
                    <div className="form-control md:col-span-2">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Impact Metric
                        </span>
                      </label>
                      <input
                        name="impactMetric"
                        value={formData.impactMetric}
                        onChange={handleChange}
                        type="text"
                        placeholder='e.g., "kg plastic saved" / "km walked"'
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Start Date */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Start Date
                        </span>
                      </label>
                      <input
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        type="date"
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* End Date */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">End Date</span>
                      </label>
                      <input
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        type="date"
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Image URL */}
                    <div className="form-control md:col-span-2">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Image URL
                        </span>
                      </label>
                      <input
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        type="text"
                        placeholder="Paste ImageBB / any image URL"
                        className="input input-bordered w-full"
                      />
                      <label className="label">
                        <span className="label-text-alt text-base-content/60">
                          Tip: Use a clean eco image (good lighting, minimal
                          text).
                        </span>
                      </label>
                    </div>

                    {/* Description */}
                    <div className="form-control md:col-span-2">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Short Description
                        </span>
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full min-h-[140px]"
                        placeholder="Write a short, clear description..."
                      />
                    </div>

                    {/* Featured */}
                    <div className="form-control md:col-span-2">
                      <label className="label cursor-pointer justify-start gap-3">
                        <input
                          type="checkbox"
                          name="featured"
                          checked={formData.featured}
                          onChange={handleChange}
                          className="checkbox checkbox-primary"
                        />
                        <span className="label-text font-semibold">
                          Mark as Featured (for homepage carousel)
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="submit"
                      className="btn btn-primary px-10"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="loading loading-spinner loading-sm" />
                      ) : (
                        "Add Challenge"
                      )}
                    </button>

                    <button
                      type="button"
                      className="btn btn-neutral px-10"
                      onClick={() => {
                        setFormData({
                          title: "",
                          category: categories[0],
                          description: "",
                          duration: 7,
                          target: "",
                          impactMetric: "",
                          startDate: "",
                          endDate: "",
                          imageUrl: "",
                          featured: false,
                        });
                        setImgPreview("");
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Preview Card */}
          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-xl border border-base-300 sticky top-24">
              <div className="card-body">
                <h3 className="text-lg font-bold text-secondary">
                  Preview (Card Look)
                </h3>
                <p className="text-base-content/70 text-sm">
                  This is how it may feel on listing pages.
                </p>

                <div className="mt-4 rounded-2xl overflow-hidden border border-base-300">
                  <div className="relative h-44">
                    <img
                      src={
                        imgPreview ||
                        "https://i.ibb.co.com/4RwjrJ8M/card-img1.jpg"
                      }
                      alt="preview"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://i.ibb.co.com/4RwjrJ8M/card-img1.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="inline-flex items-center gap-2 bg-primary/90 text-[#0f3d23] font-semibold text-xs px-3 py-1 rounded-full">
                        {formData.category}
                      </div>
                      <h4 className="mt-2 text-white font-extrabold leading-snug line-clamp-2">
                        {formData.title || "Challenge Title will appear here"}
                      </h4>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-sm text-base-content/70 line-clamp-3">
                      {formData.description ||
                        "Short description will appear here. Keep it clear and inspiring."}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="badge badge-outline">
                        ⏳ {formData.duration || 0} days
                      </div>
                      <div className="badge badge-outline">👥 0 joined</div>
                      <div className="badge badge-outline">
                        📌 {formData.impactMetric || "impact metric"}
                      </div>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <button className="btn btn-primary btn-sm flex-1">
                        Details
                      </button>
                      <button className="btn btn-outline btn-sm flex-1">
                        Join
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-5 p-4 rounded-2xl bg-base-200 border border-base-300">
                  <p className="text-sm text-base-content/75">
                    ✅ Recommended:
                    <span className="font-semibold">
                      {" "}
                      Simple title + measurable target
                    </span>{" "}
                    + clean image.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End preview */}
        </div>
      </div>
    </div>
  );
};

export default AddChallengePage;
