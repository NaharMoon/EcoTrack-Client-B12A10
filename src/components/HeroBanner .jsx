import { Link } from "react-router-dom";
import heroBg from "../assets/hero_banner_bg.jpg"; // path ঠিক করো

const HeroBanner = () => {
  return (
    <section className="w-full pt-6">
      <div className="relative overflow-hidden border-y border-secondary/25 shadow-lg">
        {/* height control */}
        <div className="relative h-[520px] lg:h-[620px]">
          {/* Background */}
          <img
            src={heroBg}
            alt="EcoTrack hero background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral/90 via-neutral/60 to-transparent" />

          {/* Subtle glow */}
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

          {/* Content (centered container) */}
          <div className="relative h-full">
            <div className="max-w-7xl mx-auto px-5 lg:px-10 h-full flex items-center">
              <div className="max-w-3xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-base-100/10 border border-base-100/15 text-base-100">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold tracking-wide">
                    EcoTrack • Climate Action
                  </span>
                </div>

                {/* Title */}
                <h1 className="mt-5 text-3xl lg:text-6xl font-heading font-extrabold leading-tight text-primary">
                  LET&apos;S SAVE THE EARTH <br className="hidden lg:block" />
                  TOGETHER
                </h1>

                {/* Subtitle */}
                <p className="mt-4 max-w-2xl text-base lg:text-lg text-base-100/80 leading-relaxed">
                  Environment safety is our responsibility. <br className="hidden lg:block" />
                  Let’s save our planet for a good future.
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/challenges" className="btn btn-primary">
                    View Challenges
                  </Link>

                  <Link to="/my-activities" className="btn btn-outline">
                    My Activities
                  </Link>

                  <a href="#featured" className="btn btn-neutral bg-[#679917]">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient strip (nice separation) */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
