// import { Link } from "react-router-dom";

import { Link } from "react-router";


const HeroCarousel = ({ featured = [] }) => {
  // fallback demo data (তুমি চাইলে বাদ দিতে পারো)
  const slides =
    featured.length > 0
      ? featured
      : [
          {
            _id: "1",
            title: "7-Day Plastic-Free Challenge",
            subtitle: "Cut single-use plastic & track impact",
            image:
              "https://i.ibb.co.com/h1d3CDTX/carousal5.jpg",
            tag: "Waste",
          },
          {
            _id: "2",
            title: "Bike to Campus Week",
            subtitle: "Save CO₂ and stay healthy",
            image:
              "https://i.ibb.co.com/R8qFvfx/carousal3.jpg",
            tag: "Transport",
          },
          {
            _id: "3",
            title: "Zero-Waste Kitchen Challenge",
            subtitle: "Reduce food waste with simple habits",
            image:
              "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop",
            tag: "Lifestyle",
          },
        ];

  return (
    <section className="max-w-7xl mx-auto px-4 pt-6">
      <div className="relative rounded-3xl overflow-hidden border border-[#1f7a5a]/30 shadow-xl">
        <div className="carousel w-full">
          {slides.map((item, idx) => {
            const id = `slide${idx + 1}`;
            const prev = `#slide${idx === 0 ? slides.length : idx}`;
            const next = `#slide${idx === slides.length - 1 ? 1 : idx + 2}`;

            return (
              <div
                id={id}
                key={item._id}
                className="carousel-item relative w-full"
              >
                {/* Background image */}
                <div className="relative w-full h-[420px] lg:h-[520px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d2e]/90 via-[#0f3d2e]/55 to-black/10" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="px-7 lg:px-12 max-w-2xl">
                      <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[#1f7a5a]/25 border border-[#1f7a5a]/40 text-white/90 text-sm">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#facc15]" />
                        Featured • {item.tag}
                      </div>

                      <h1 className="mt-4 text-3xl lg:text-5xl font-extrabold leading-tight text-[#facc15]">
                        {item.title}
                      </h1>

                      <p className="mt-3 text-white/80 text-base lg:text-lg">
                        {item.subtitle}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          to={`/challenges/${item._id}`}
                          className="btn border-none bg-[#facc15] text-[#0f3d2e] hover:bg-yellow-400"
                        >
                          View Challenge
                        </Link>

                        <Link
                          to="/challenges"
                          className="btn btn-outline border-[#facc15] text-[#facc15] hover:bg-[#facc15] hover:text-[#0f3d2e]"
                        >
                          Browse Challenges
                        </Link>
                      </div>

                      {/* small note */}
                      <p className="mt-4 text-xs text-white/60">
                        Join → Track progress → Share eco tips
                      </p>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="absolute left-5 right-5 bottom-6 flex justify-between">
                    <a
                      href={prev}
                      className="btn btn-circle bg-white/10 border border-white/20 text-white hover:bg-[#facc15] hover:text-[#0f3d2e] hover:border-none"
                      aria-label="Previous slide"
                    >
                      ❮
                    </a>
                    <a
                      href={next}
                      className="btn btn-circle bg-white/10 border border-white/20 text-white hover:bg-[#facc15] hover:text-[#0f3d2e] hover:border-none"
                      aria-label="Next slide"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom glow strip */}
        <div className="h-2 w-full bg-gradient-to-r from-[#1f7a5a] via-[#facc15] to-[#1f7a5a]" />
      </div>
    </section>
  );
};

export default HeroCarousel;
