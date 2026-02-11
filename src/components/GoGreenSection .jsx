import whyGoGreenImg from "../assets/why_go_green.jpg"; // <-- path ঠিক করো

const GoGreenSection = () => {
  const points = [
    {
      title: "Cleaner air & healthier life",
      desc: "Eco-friendly habits reduce pollution and improve overall well-being.",
      color: "bg-primary", // yellow
    },
    {
      title: "Save money by saving energy",
      desc: "Less electricity and water use means lower monthly bills.",
      color: "bg-secondary", // green
    },
    {
      title: "Reduce waste, protect nature",
      desc: "Recycling and reusing keep the environment cleaner and safer.",
      color: "bg-accent", // soft green
    },
    {
      title: "Build habits that inspire others",
      desc: "Small actions can motivate friends and family to join the change.",
      color: "bg-primary", // yellow again
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-secondary tracking-wide">
            WHY GO GREEN?
          </p>

          <h2 className="mt-2 text-3xl lg:text-5xl font-heading font-extrabold text-base-content">
            Go Green, <span className="text-primary">Live Clean</span>
          </h2>

          <p className="mt-4 text-base lg:text-lg text-base-content/70 max-w-xl">
            Sustainable living is not about perfection—it's about choosing better
            habits that create real impact over time.
          </p>

          {/* Bullet Points */}
          <div className="mt-8 space-y-5">
            {points.map((p, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition-all duration-300 p-5"
              >
                {/* colorful vertical bar */}
                <div
                  className={`absolute left-0 top-0 h-full w-2 rounded-l-2xl ${p.color}`}
                />

                <div className="pl-4 flex gap-4">
                  {/* Check icon */}
                  <div className="mt-1">
                    <div className="h-9 w-9 rounded-full bg-secondary/15 flex items-center justify-center border border-secondary/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 text-secondary"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 6L9 17l-5-5"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-bold text-base-content">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm lg:text-base text-base-content/70">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent" />
              </div>
            ))}
          </div>

          {/* CTA (optional) */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#featured" className="btn btn-primary">
              Start a Challenge
            </a>
            <a href="/challenges" className="btn btn-outline">
              Browse Challenges
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-2xl" />
          <img
            src={whyGoGreenImg}
            alt="Why go green"
            className="relative w-full h-[360px] lg:h-[520px] object-cover rounded-3xl border border-base-300 shadow-xl"
          />

          {/* badge */}
          <div className="absolute bottom-5 left-5 rounded-full bg-neutral/80 text-white px-4 py-2 text-sm font-semibold border border-white/10 backdrop-blur">
            Better habits • Better planet
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoGreenSection;
