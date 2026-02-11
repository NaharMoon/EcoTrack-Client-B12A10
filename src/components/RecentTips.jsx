import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const RecentTips = () => {
    const [tips, setTips] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTips = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${API}/api/tips?limit=5`);
                const data = await res.json();
                setTips(Array.isArray(data) ? data : []);
            } catch (e) {
                setTips([]);
            } finally {
                setLoading(false);
            }
        };

        loadTips();
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
        <section className="px-4 py-10">
            {/* ✅ Narrow wrapper */}
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <h2 className="text-4xl text-center font-heading font-bold text-neutral">
                    Recent Tips
                    <p className="text-sm text-center opacity-70">
                        Quick eco-friendly actions you can try today
                    </p>
                </h2>
                <div className="flex items-end justify-between gap-3 mb-5">
                    <div>
                    </div>

                    <div className="badge badge-outline border-primary text-primary">
                        {tips.length} tips
                    </div>
                </div>

                {/* Body container */}
                <div className="relative bg-base-100 border border-base-300 rounded-2xl shadow-sm overflow-hidden">
                    {/* ✅ left vertical gradient bar */}
                    <div className="absolute left-0 top-0 h-full w-5 bg-gradient-to-b from-secondary via-accent to-primary" />

                    <div className="p-6 pl-7">
                        {loading ? (
                            <div className="space-y-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="skeleton h-4 w-2/3" />
                                        <div className="skeleton h-3 w-1/3" />
                                    </div>
                                ))}
                            </div>
                        ) : tips.length === 0 ? (
                            <div className="py-10 text-center">
                                <p className="opacity-70">No tips found.</p>
                            </div>
                        ) : (
                            <ul className="space-y-5">
                                {tips.map((t, idx) => (
                                    <li key={t._id} className="flex gap-4">
                                        {/* ✅ bullet/step */}
                                        <div className="mt-1 flex flex-col items-center">
                                            <div className="h-7 w-7 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-bold shadow-sm">
                                                {idx + 1}
                                            </div>
                                            {/* connector line (except last) */}
                                            {idx !== tips.length - 1 && (
                                                <div className="w-px flex-1 bg-base-300 mt-2" />
                                            )}
                                        </div>

                                        {/* content */}
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-3">
                                                <h3 className="font-semibold text-base leading-snug">
                                                    {t.title}
                                                </h3>

                                                {/* upvotes small pill */}
                                                <span className="badge bg-secondary/10 text-secondary border-0">
                                                    ▲ {t.upvotes || 0}
                                                </span>
                                            </div>

                                            <p className="text-sm opacity-70 mt-1">
                                                {t.category} •{" "}
                                                <span className="font-medium">{t.authorName}</span>{" "}
                                                • {formatDate(t.createdAt)}
                                            </p>

                                            {/* tiny preview (compact) */}
                                            <p className="text-sm mt-2 max-h-10 overflow-hidden">
                                                {/* {t.content} */}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* ✅ subtle bottom glow */}
                    <div className="h-10 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10" />
                </div>
            </div>
        </section>
    );
};

export default RecentTips;
