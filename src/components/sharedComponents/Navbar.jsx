import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  const navClass = ({ isActive }) => (isActive ? "nav-item active" : "nav-item");

  const commonLinks = (
    <>
      <li>
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/challenges" className={navClass}>
          All Challenges
        </NavLink>
      </li>
    </>
  );

  const privateLinks = user ? (
    <>
      <li>
        <NavLink to="/my-activities" className={navClass}>
          My Activities
        </NavLink>
      </li>
    </>
  ) : null;

  return (
    <header className="sticky top-0 z-50">
      {/* Top glow line */}
      <div className="h-0.75 w-full bg-linear-to-r from-secondary via-primary to-secondary" />

      {/* Glassy navbar */}
      <div className="bg-base-100/70 backdrop-blur-md border-b border-base-300">
        <div className="navbar max-w-7xl mx-auto px-4">
          {/* Left */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10M4 18h16" />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-64 rounded-2xl bg-base-100 p-2 shadow-xl border border-base-300"
              >
                {commonLinks}
                {privateLinks}

                <div className="mt-2 border-t border-base-300 pt-2">
                  {!user ? (
                    <>
                      <li>
                        <NavLink to="/auth/login" className={navClass}>
                          Login
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/auth/register" className={navClass}>
                          Register
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <li>
                      <button onClick={handleSignOut} className="nav-item w-full text-left">
                        Logout
                      </button>
                    </li>
                  )}
                </div>
              </ul>
            </div>

            {/* Brand */}
            <Link to="/" className="flex items-center gap-2">
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral text-neutral-content shadow-md">
                <span className="text-xl">🌿</span>
                {/* small glow */}
                <span className="absolute -bottom-3 -right-3 h-10 w-10 rounded-full bg-primary/20 blur-2xl" />
              </span>

              <div className="leading-tight">
                <p className="text-xl font-extrabold tracking-tight text-base-content">
                  Eco<span className="text-primary">Track</span>
                </p>
                <p className="text-xs text-base-content/60 -mt-0.5">
                  Track impact • Join challenges
                </p>
              </div>
            </Link>
          </div>

          {/* Center (Desktop Links) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-1">
              {commonLinks}
              {privateLinks}
            </ul>
          </div>

          {/* Right */}
          <div className="navbar-end gap-2">
            {!user ? (
              <div className="hidden sm:flex items-center gap-2">
                <Link to="/auth/login" className="btn btn-outline btn-sm">
                  Login
                </Link>
                <Link to="/auth/register" className="btn btn-primary btn-sm">
                  Register
                </Link>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost px-2 hover:bg-secondary/10">
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="w-10 rounded-full ring-2 ring-primary/50 ring-offset-2 ring-offset-base-100">
                        {user?.photoURL ?
                          <img className=""
                            src={
                              user?.photoURL
                            }
                            alt=""
                            referrerPolicy="no-referrer"
                          /> :
                          <div className="w-8 rounded-full bg-secondary"></div>
                        }
                      </div>
                    </div>

                    <div className="hidden md:block text-left">
                      <p className="text-sm font-semibold leading-4">
                        {user?.displayName || "User"}
                      </p>
                      <p className="text-xs text-base-content/60 leading-4">
                        {user?.email || ""}
                      </p>
                    </div>

                    <span className="hidden md:inline text-base-content/60">▾</span>
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-3 w-70 rounded-2xl bg-base-100 p-2 shadow-xl border border-base-300"
                >
                  <li className="px-2 py-2">
                    <div className="rounded-xl bg-secondary/10 border border-secondary/20 p-3">
                      <p className="font-semibold">{user?.displayName || "User"}</p>
                      <p className="text-xs text-base-content/60">{user?.email || ""}</p>
                    </div>
                  </li>

                  <li>
                    <NavLink to="/profile" className={navClass}>
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/my-activities" className={navClass}>
                      My Activities
                    </NavLink>
                  </li>

                  <div className="mt-2 border-t border-base-300 pt-2">
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="btn btn-neutral btn-sm w-full"
                      >
                        Logout
                      </button>
                    </li>
                  </div>
                </ul>
              </div>
            )}

            {/* Mobile: show auth buttons if not logged in */}
            {!user && (
              <div className="sm:hidden">
                <Link to="/auth/login" className="btn btn-primary btn-sm">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
