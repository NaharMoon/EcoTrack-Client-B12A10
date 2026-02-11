import howItWorksImg from "../assets/how_it_works.jpg"; // <-- path ঠিক করো

const HowItWorks = () => {
  const steps = [
    {
      step: "Step 01",
      title: "Join a Challenge",
      desc: "Pick a mission that fits your lifestyle and hit Join to start your eco journey.",
      color: "bg-primary", // eco yellow
    },
    {
      step: "Step 02",
      title: "Track Your Progress",
      desc: "Log your activities daily and see your progress grow with simple measurable actions.",
      color: "bg-secondary", // green
    },
    {
      step: "Step 03",
      title: "Share Tips & Inspire",
      desc: "Share what worked for you, motivate others, and build a greener community together.",
      color: "bg-accent", // soft green
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-secondary/10 blur-2xl" />
          <img
            src={howItWorksImg}
            alt="How it works"
            className="relative w-full object-cover rounded-3xl border border-base-300 shadow-xl"
          />
          {/* small badge */}
          <div className="absolute top-5 left-5 rounded-full bg-neutral/80 text-white px-4 py-2 text-sm font-semibold border border-white/10 backdrop-blur">
            Simple steps • Real impact
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <p className="text-sm font-semibold text-secondary tracking-wide">
            HOW IT WORKS
          </p>

          <h2 className="mt-2 text-3xl lg:text-5xl font-heading font-extrabold text-base-content">
            Start Green in <span className="text-primary">3 Easy Steps</span>
          </h2>

          <p className="mt-4 text-base lg:text-lg text-base-content/70 max-w-xl">
            EcoTrack helps you turn small daily actions into measurable impact—
            without making things complicated.
          </p>

          {/* Steps */}
          <div className="mt-8 space-y-5">
            {steps.map((s) => (
              <div
                key={s.step}
                className="group relative rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition-all duration-300 p-5"
              >
                {/* vertical colorful bar */}
                <div
                  className={`absolute left-0 top-0 h-full w-2 rounded-l-2xl ${s.color}`}
                />

                <div className="pl-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold tracking-widest text-base-content/60">
                      {s.step}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-base-content/30" />
                    <span className="text-xs font-semibold text-secondary">
                      EcoTrack Flow
                    </span>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-base-content">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm lg:text-base text-base-content/70">
                    {s.desc}
                  </p>
                </div>

                {/* subtle hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent" />
              </div>
            ))}
          </div>

          {/* CTA (optional) */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#featured" className="btn btn-primary">
              Explore Challenges
            </a>
            <a href="/challenges" className="btn btn-outline">
              View All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
