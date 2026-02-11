import ecoCity from "../assets/ui-removebg-preview.png"; // <-- তোমার assets path অনুযায়ী ঠিক করো

const StatsSection = () => {
  const leftStats = [
    { label: "Challenges", value: "40+" },
    { label: "Participants", value: "5k+" },
  ];

  const rightStats = [
    { label: "CO₂ Saved", value: "12t+" },
    { label: "Waste Reduced", value: "800kg+" },
  ];

  const StatCard = ({ label, value }) => (
    <div className="rounded-xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition-all duration-300 px-5 py-4">
      <p className="text-xs text-base-content/60 tracking-wide">{label}</p>
      <p className="mt-1 text-2xl font-bold text-primary">{value}</p>
      <div className="mt-3 h-0.75 w-10 rounded-full bg-secondary/40" />
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 my-10">
      <div className="relative">
        {/* subtle separators (top & bottom) */}
        <div className="absolute left-0 right-0 -top-3 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
        <div className="absolute left-0 right-0 -bottom-3 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
          {/* Left cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {leftStats.map((s) => (
              <StatCard key={s.label} label={s.label} value={s.value} />
            ))}
          </div>

          {/* Center image */}
          <div className="relative flex justify-center">
            {/* glow behind */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="h-60 w-60 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute h-52 w-52 rounded-full bg-secondary/20 blur-2xl" />
            </div>

            <div className="relative flex flex-col items-center">
              {/* rings */}
              <div className="absolute -inset-3 rounded-full border border-secondary/30" />
              <div className="absolute -inset-8 rounded-full border border-secondary/10" />

              <img
                src={ecoCity}
                alt="Eco city"
                className="w-64 h-64 object-contain drop-shadow-xl"
              />

              <p className="mt-2 text-center text-sm font-semibold text-primary">
                Small habits → Big impact
              </p>
            </div>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {rightStats.map((s) => (
              <StatCard key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
