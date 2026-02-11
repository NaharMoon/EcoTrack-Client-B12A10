import { useState } from "react";

const ChallengeSearchBar = ({ onSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Water Conservation",
    "Energy Saving",
    "Waste Management",
    "Plastic Reduction",
    "Green Living"
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onSearch(value); // 🔥 change হলেই filter apply
  };

  return (
    <div className="mt-6 bg-base-100 border border-base-300 rounded-2xl p-4 shadow-sm">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h4 className="font-semibold text-secondary">
            Filter by Category
          </h4>
          <p className="text-xs opacity-70">
            Select a category to filter challenges
          </p>
        </div>

        <select
          className="select select-bordered w-full md:w-64"
          value={selectedCategory}
          onChange={handleChange}
        >
          <option value="">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ChallengeSearchBar;
