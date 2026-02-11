import { Link } from "react-router-dom";

const ChallengeCard = ({ challenge }) => {
  const {
    _id,
    title,
    category,
    description,
    duration,
    participants,
    imageUrl,
    startDate,
    featured,
  } = challenge || {};

  return (
    <article className="group relative overflow-hidden rounded-3xl bg-base-100 shadow-md hover:shadow-2xl transition-all duration-500">
      {/* Image */}
      <div className="relative h-72 md:h-80 lg:h-96">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />

        {/* Dark overlay gradient (bottom heavy like sample) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Top meta row */}
        <div className="absolute left-5 top-5 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-black/35 px-4 py-2 text-xs font-semibold text-primary backdrop-blur">
            {category}
          </span>

          {startDate && (
            <span className="text-xs font-semibold text-primary/90 drop-shadow">
              {startDate}
            </span>
          )}

          {featured && (
            <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-bold text-[#0f3d23]">
              Featured
            </span>
          )}
        </div>

        {/* Title + Description */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white drop-shadow-sm line-clamp-2">
            {title}
          </h3>

          <p className="mt-2 text-sm md:text-base text-white/80 line-clamp-2 max-w-2xl">
            {description}
          </p>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                ⏳ {duration} days
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                👥 {participants || 0} joined
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Link
                to={`/challenges/${_id}`}
                className="btn btn-outline btn-sm border-primary text-primary hover:bg-primary hover:text-[#0f3d23]"
              >
                Details
              </Link>

              <Link
                to={`/challenges/${_id}`}
              className="btn btn-primary btn-sm">
                Join
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* subtle border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5 group-hover:ring-primary/40 transition-all duration-500" />
    </article>
  );
};

export default ChallengeCard;
