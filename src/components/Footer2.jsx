import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaLeaf, FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";
import Swal from "sweetalert2";

const Footer = () => {
  return (
    <footer className="mt-16">
      {/* Top wave / glow strip */}
      <div className="h-2 w-full bg-gradient-to-r from-[#1f7a5a] via-[#facc15] to-[#1f7a5a]" />

      {/* Main footer */}
      {/* className="bg-[#0f3d23] text-white" */}
      <div className="bg-[#0f3d23] text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          {/* top row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-[#1f7a5a]/30 border border-[#1f7a5a]/40">
                  <FaLeaf className="text-[#facc15]" />
                </span>
                <h3 className="text-xl font-bold text-[#facc15]">EcoTrack</h3>
              </div>

              <p className="mt-4 text-sm text-white/75 leading-relaxed">
                Track your daily eco-actions, join community challenges, and
                turn small habits into measurable impact.
              </p>

              {/* Newsletter */}
              <div className="mt-5">
                <p className="text-sm font-semibold text-white/90">
                  Get eco tips weekly
                </p>
                <form
                onSubmit={(e)=> {
                  e.preventDefault();
                  // toast("Subscription Currently Unavailable!");
                  e.target.email.value = "";
                  Swal.fire("Subscription Currently Unavailable!");
                }} 
                className="mt-2 flex gap-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="input input-bordered w-full bg-white/5 border-[#1f7a5a]/50 placeholder:text-white/40 focus:outline-none focus:border-[#facc15]"
                  />
                  <button className="btn border-none bg-[#facc15] text-[#0f3d2e] hover:bg-yellow-400">
                    Join
                  </button>
                </form>
                <p className="mt-2 text-xs text-white/50">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold text-[#facc15]">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li>
                  <a className="link link-hover hover:text-[#facc15]">
                    Home
                  </a>
                </li>
                <li>
                  <a className="link link-hover hover:text-[#facc15]">
                    Challenges
                  </a>
                </li>
                <li>
                  <a className="link link-hover hover:text-[#facc15]">
                    My Activities
                  </a>
                </li>
                <li>
                  <a className="link link-hover hover:text-[#facc15]">
                    Events
                  </a>
                </li>
                <li>
                  <a className="link link-hover hover:text-[#facc15]">
                    Tips & Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-base font-semibold text-[#facc15]">
                Support
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li>
                  <a className="link link-hover hover:text-[#facc15]">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="link link-hover hover:text-[#facc15]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="link link-hover hover:text-[#facc15]">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="link link-hover hover:text-[#facc15]">
                    Report an Issue
                  </a>
                </li>
              </ul>

              {/* mini stats pill */}
              <div className="mt-6 rounded-2xl border border-[#1f7a5a]/40 bg-white/5 p-4">
                <p className="text-xs text-white/60">Community impact</p>
                <p className="text-lg font-bold text-[#facc15]">+12,480 kg</p>
                <p className="text-xs text-white/60">waste reduced</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base font-semibold text-[#facc15]">
                Contact
              </h4>

              <div className="mt-4 space-y-3 text-sm text-white/75">
                <p className="flex items-center gap-2">
                  <FaLocationDot className="text-[#facc15]" />
                  Khulna, Bangladesh
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-[#facc15]" />
                  support@ecotrack.com
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-[#facc15]" />
                  +880 1XXXXXXXXX
                </p>
              </div>

              {/* Social icons */}
              <div className="mt-6 flex gap-3">
                <a className="btn btn-sm btn-circle bg-white/5 border border-[#1f7a5a]/50 hover:bg-[#facc15] hover:text-[#0f3d2e] hover:border-none">
                  <FaFacebookF />
                </a>
                <a className="btn btn-sm btn-circle bg-white/5 border border-[#1f7a5a]/50 hover:bg-[#facc15] hover:text-[#0f3d2e] hover:border-none">
                  <FaXTwitter />
                </a>
                <a className="btn btn-sm btn-circle bg-white/5 border border-[#1f7a5a]/50 hover:bg-[#facc15] hover:text-[#0f3d2e] hover:border-none">
                  <FaLinkedinIn />
                </a>
                <a className="btn btn-sm btn-circle bg-white/5 border border-[#1f7a5a]/50 hover:bg-[#facc15] hover:text-[#0f3d2e] hover:border-none">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="mt-12 h-px w-full bg-[#1f7a5a]/40" />

          {/* bottom row */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} EcoTrack — Built for a greener tomorrow.
            </p>

            <div className="flex items-center gap-2 text-xs text-white/55">
              <span className="inline-block w-2 h-2 rounded-full bg-[#facc15]" />
              <span>Deep Green • Eco Yellow Theme</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
