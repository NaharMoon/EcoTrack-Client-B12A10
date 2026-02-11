// import { FaUsers, FaClock, FaLeaf, FaBolt } from "react-icons/fa";

// const ChallengeCard = ({
//   challenge = {
//     title: "7-Day Plastic-Free Challenge",
//     category: "Waste",
//     difficulty: "Medium",
//     durationDays: 7,
//     participants: 1240,
//     impact: "Plastic reduced ~3kg",
//     cover:
//       "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1200&auto=format&fit=crop",
//     description:
//       "Avoid single-use plastics for 7 days and adopt greener habits.",
//     joined: false,
//     progress: 0,
//   },
//   onViewDetails = () => {},
//   onJoin = () => {},
// }) => {
//   return (
//     <div className="group">
//       <div className="card bg-white shadow-lg border border-[#1f7a5a]/30 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
//         {/* Image */}
//         <figure className="relative h-44 overflow-hidden">
//           <img
//             src={challenge.cover}
//             alt={challenge.title}
//             className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />

//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d2e]/80 via-[#0f3d2e]/20 to-transparent" />

//           {/* Badges */}
//           <div className="absolute top-3 left-3 flex gap-2">
//             <span className="badge bg-[#1f7a5a] text-white border-none">
//               {challenge.category}
//             </span>
//             <span className="badge bg-[#facc15] text-[#0f3d2e] border-none">
//               <FaBolt className="mr-1" />
//               {challenge.difficulty}
//             </span>
//           </div>
//         </figure>

//         {/* Body */}
//         <div className="card-body p-5">
//           <h2 className="card-title text-[#0f3d2e] leading-snug">
//             {challenge.title}
//           </h2>

//           <p className="text-sm text-[#0b2e22]/80 line-clamp-2">
//             {challenge.description}
//           </p>

//           {/* Meta info */}
//           <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
//             <div className="flex items-center gap-2 text-[#0b2e22]/80">
//               <FaClock className="text-[#1f7a5a]" />
//               {challenge.durationDays} days
//             </div>

//             <div className="flex items-center gap-2 text-[#0b2e22]/80">
//               <FaUsers className="text-[#1f7a5a]" />
//               {challenge.participants.toLocaleString()}
//             </div>

//             <div className="col-span-2 flex items-center gap-2 font-medium">
//               <FaLeaf className="text-[#1f7a5a]" />
//               <span className="text-[#0b2e22]/80">
//                 Impact:
//               </span>
//               <span className="text-[#0f3d2e]">
//                 {challenge.impact}
//               </span>
//             </div>
//           </div>

//           {/* Progress (if joined) */}
//           {challenge.joined && (
//             <div className="mt-4">
//               <div className="flex justify-between text-xs text-[#0b2e22]/70 mb-1">
//                 <span>Progress</span>
//                 <span className="font-semibold">{challenge.progress}%</span>
//               </div>
//               <progress
//                 className="progress progress-warning w-full"
//                 value={challenge.progress}
//                 max="100"
//               />
//             </div>
//           )}

//           {/* Actions */}
//           <div className="card-actions mt-6 justify-between">
//             <button
//               onClick={() => onViewDetails(challenge)}
//               className="btn btn-ghost btn-sm text-[#0f3d2e]"
//             >
//               View Details
//             </button>

//             {challenge.joined ? (
//               <button
//                 className="btn btn-sm bg-[#1f7a5a] text-white border-none cursor-default"
//                 disabled
//               >
//                 Joined
//               </button>
//             ) : (
//               <button
//                 onClick={() => onJoin(challenge)}
//                 className="btn btn-sm bg-[#facc15] text-[#0f3d2e] hover:bg-yellow-400 border-none"
//               >
//                 Join
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChallengeCard;
