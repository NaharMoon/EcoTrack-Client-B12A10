import React, { useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const JoinChallengeButton = ({ challengeId, onJoined }) => {
    const { user } = useContext(AuthContext);
    const [joined, setJoined] = useState(false);
    const [loading, setLoading] = useState(false);

    // ✅ already joined কিনা check
    useEffect(() => {
        if (!user?.email || !challengeId) return;

        fetch(
            `${API}/api/user-challenges/check?userId=${user.email}&challengeId=${challengeId}`
        )
            .then((res) => res.json())
            .then((data) => setJoined(data.joined))
            .catch(() => { });
    }, [user, challengeId]);

    const handleJoin = async () => {
        if (!user?.email) {
            toast.error("Please login to join!");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(
                `${API}/api/challenges/join/${challengeId}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId: user.email }),
                }
            );

            const data = await res.json();

            if (res.status === 409) {
                toast.info("You already joined!");
                setJoined(true);
                return;
            }

            if (!res.ok) {
                toast.error(data?.message || "Join failed!");
                return;
            }

            toast.success("Joined successfully!");
            setJoined(true);
            onJoined?.();
        } catch (err) {
            toast.error("Network error!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleJoin}
            disabled={loading || joined}
            className={`btn btn-primary px-8 ${joined ? "opacity-70" : ""}`}
        >
            {joined ? "Joined ✅" : loading ? "Joining..." : "Join Challenge"}
        </button>
    );
};

export default JoinChallengeButton;
