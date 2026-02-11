import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API}/api/events?limit=4`);
        const data = await res.json();
        setEvents(Array.isArray(data) ? data : []);
      } catch (e) {
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const formatDate = (d) => {
    try {
      return new Date(d).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 my-16">
      {/* Header */}
          <h2 className="text-4xl text-center font-heading font-bold text-primary mb-4">
            Upcoming Events
          </h2>
      <div className="flex justify-between gap-3 mb-6">
        <div>
          <p className="text-sm text-center opacity-70">Join and take action together</p>
        </div>

        <div className="badge badge-outline border-primary text-primary">
          {events.length} Events
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="card bg-base-100 border shadow-sm">
              <div className="card-body space-y-3">
                <div className="skeleton h-5 w-3/4" />
                <div className="skeleton h-4 w-1/2" />
                <div className="skeleton h-3 w-full" />
                <div className="skeleton h-10 w-full" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty */}
      {!loading && events.length === 0 && (
        <div className="p-10 border rounded-2xl bg-base-100 text-center shadow-sm">
          <p className="opacity-70">No events found.</p>
        </div>
      )}

      {/* Cards */}
      {!loading && events.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((e, idx) => (
            <div
              key={e._id}
              className={[
                "card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden",
                // ✅ zigzag effect (only md+ / lg+)
                idx % 2 === 1 ? "md:mt-8" : "",
              ].join(" ")}
            >
              {/* Header: eco green gradient + yellow accent line */}
              <div className="relative p-4 bg-gradient-to-r from-secondary to-[#14532d] text-secondary-content">
                <div className="absolute top-0 left-0 h-1 w-full bg-primary" />
                <p className="text-xs opacity-90">{formatDate(e.date)}</p>
                <h3 className="text-lg font-semibold leading-snug mt-1">
                  {e.title}
                </h3>
              </div>

              <div className="card-body p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm opacity-80 flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                    {e.location}
                  </p>

                  <span className="badge bg-secondary/10 text-secondary border-0">
                    Event
                  </span>
                </div>

                {/* description (fallback if line-clamp not available) */}
                <p className="text-sm mt-3 max-h-12 overflow-hidden">
                  {e.description}
                </p>

                <div className="mt-4 flex items-center justify-between text-xs opacity-70">
                  <span className="flex items-center gap-2">
                    <span className="text-secondary">👥</span>
                    {e.currentParticipants || 0}/{e.maxParticipants || 0}
                  </span>

                  <span className="text-primary font-medium">
                    Spots left:{" "}
                    {(e.maxParticipants || 0) - (e.currentParticipants || 0)}
                  </span>
                </div>

                <button className="btn btn-primary btn-sm mt-5 w-full rounded-xl">
                 On Going
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default UpcomingEvents;
