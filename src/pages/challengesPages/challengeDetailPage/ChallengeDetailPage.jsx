import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import JoinChallengeButton from "../../../components/ui/JoinChallengeButton";

const ChallengeDetailsPage = () => {
  const loaderData = useLoaderData();

  // ✅ state বানালাম যেন UI instantly update করা যায়
  const [challengeDetails, setChallengeDetails] = useState(loaderData);

  // ✅ যদি loaderData route change এ নতুন আসে, state sync রাখবে
  useEffect(() => {
    setChallengeDetails(loaderData);
  }, [loaderData]);

  const {
    _id,
    title,
    category,
    description,
    duration,
    participants,
    impactMetric,
    startDate,
    endDate,
    imageUrl,
  } = challengeDetails || {};

  return (
    <div className="bg-gradient-to-br from-base-200 via-base-100 to-base-200 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d23]/90 via-black/50 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4">
          <span className="inline-block bg-primary text-[#0f3d23] px-4 py-2 rounded-full font-semibold text-sm shadow-md">
            {category}
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            {title}
          </h1>

          <p className="mt-3 text-white/80 max-w-2xl text-lg">
            Make a difference by joining this eco challenge.
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-base-300">
          {/* Info Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <InfoCard label="Duration" value={`${duration} days`} />
            <InfoCard label="Participants" value={`${participants || 0}+`} />
            <InfoCard label="Impact" value={impactMetric} />
            <InfoCard label="Timeline" value={`${startDate} → ${endDate}`} />
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Challenge Description
            </h2>
            <p className="text-base-content/80 leading-relaxed text-lg">
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <JoinChallengeButton
              challengeId={_id}
              onJoined={() => {
                // ✅ safe update (participants undefined হলেও কাজ করবে)
                setChallengeDetails((prev) => ({
                  ...prev,
                  participants: (prev?.participants || 0) + 1,
                }));
              }}
            />

            <Link to="/challenges" className="btn btn-outline px-8">
              Back to Challenges
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;

/* Info Card Component */
const InfoCard = ({ label, value }) => {
  return (
    <div className="bg-gradient-to-br from-base-100 to-base-200 rounded-2xl p-5 text-center shadow-md border border-base-300 hover:shadow-lg transition">
      <p className="text-sm text-base-content/60">{label}</p>
      <p className="mt-2 text-xl font-bold text-primary">{value}</p>
    </div>
  );
};
