import { useEffect, useState } from "react";
import { Link } from "react-router";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const FeaturedChallenges = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${API}/api/challenges/featured?limit=4`);
                const data = await res.json();
                setItems(Array.isArray(data) ? data : []);
            } catch (e) {
                setItems([]);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    if (loading) return <p className="opacity-70">Loading featured...</p>;

    return (
        <>
            <div id="featured" className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-4xl text-center mb-4 text-secondary font-semibold">Featured Challenges</h2>
                <div className="mb-6">
                    <p className="text-sm opacity-70">Latest highlighted challenges</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {items.map((c) => (
                        <Link key={c._id} to={`http://localhost:5175/challenges/${c._id}`}>
                            <div key={c._id} className="card bg-base-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-1000">
                                <figure className="h-36">
                                    <img className="h-full w-full object-cover hover:scale-105" src={c.imageUrl} alt={c.title} />
                                </figure>
                                <div className="card-body p-4">
                                    <h3 className="font-semibold leading-snug">{c.title}</h3>
                                    <p className="text-sm opacity-70">{c.category}</p>
                                    <p className="text-xs opacity-60 mt-1">Duration: {c.duration} days</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FeaturedChallenges;
