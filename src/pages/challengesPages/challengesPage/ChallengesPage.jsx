import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import ChallengeCard from "../../../components/ui/ChallengeCard";
import ChallengeSearchBar from "../../../components/ChallengeSearchBar";


const ChallengesPage = () => {
  const loadedChallenges = useLoaderData();
  const [challenges, setChallenges] = useState(loadedChallenges || []);

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // ✅ SearchBar থেকে আসা categories দিয়ে fetch হবে
  const handleSearch = async (categoriesText) => {
    // categoriesText example: "Water Conservation, Energy Saving"
    const categories = categoriesText
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean)
      .join(",");

    const url = categories
      ? `${API}/api/challenges?categories=${encodeURIComponent(categories)}`
      : `${API}/api/challenges`;

    const res = await fetch(url);
    const data = await res.json();
    setChallenges(Array.isArray(data) ? data : []);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 my-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-5">
        <div>
          <h2 className="text-4xl lg:text-4xl font-heading font-extrabold text-secondary">
            <span className="text-primary">All</span> Challenges
          </h2>
          <p className="mt-2 text-base-content/70 max-w-2xl">
            Explore eco challenges, join missions, and track your impact step by step.
          </p>
        </div>

        <Link to="/challenges-add" className="flex gap-2">
          <button className="btn btn-outline">Add New Challenge</button>
        </Link>
      </div>

      {/* ✅ Search bar component */}
      <ChallengeSearchBar onSearch={handleSearch} />

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges?.map((challenge) => (
          <ChallengeCard key={challenge._id} challenge={challenge} />
        ))}
      </div>
    </section>
  );
};

export default ChallengesPage;
