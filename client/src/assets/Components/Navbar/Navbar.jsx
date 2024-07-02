import logo from "./Logo/White Modern Home Painting . Colorful Home Icon Logo.png";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "./../Hook/UseAuth";
import { useEffect, useState } from "react";
const Navbar = () => {
  const { user, logOut } = UseAuth();
  // console.log(user.email);
  const [theme, setTheme] = useState("light");
  //Toggle Dark Theme :
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    // add custom data-theme attribute
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const [hovered, setHovered] = useState(false);
  return (
    <div
      className=" raleway  pt-4"
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="navbar bg-base-100">
        <div className="w-1/2 justify-start md:justify-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to="/">
                <a>Home</a>
              </NavLink>
              <NavLink to="/all-art-items">
                <a>All Art & Craft Items</a>
              </NavLink>
              {user?.email ? (
                <NavLink to="/add-craft-item">
                  <a>Add Craft Item</a>
                </NavLink>
              ) : (
                ""
              )}
              {user?.email ? (
                <NavLink to={`/my-art-list/${user.email}`}>
                  <a>My Art & Craft List</a>
                </NavLink>
              ) : (
                ""
              )}
            </ul>
          </div>
          <Link
            to="/"
            className="cursor-pointer inter flex gap-4 items-center "
          >
            <div>
              <img
                className="hidden md:flex md:size-24 rounded-xl dark:size-2"
                src={logo}
                alt=""
              />
            </div>
            <div>
              <h2 className="font-bold text-xl md:text-2xl">
                Paint <span className="text-[#BE042F]">Home</span>
              </h2>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-8 menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl text-[#BE042F] font-semibold"
                  : "font-bold"
              }
            >
              <button className="px-8 py-3  text-lg">Home</button>
            </NavLink>
            <NavLink
              to="/all-art-items"
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl text-[#BE042F] font-semibold"
                  : "font-bold"
              }
            >
              <button className="px-8 py-3  text-xl">
                All Art & Craft Items
              </button>
            </NavLink>

            {user?.email ? (
              <NavLink
                to="/add-craft-item"
                className={({ isActive }) =>
                  isActive
                    ? "rounded-xl text-[#BE042F] font-semibold"
                    : "font-bold"
                }
              >
                <button className="px-8 py-3  text-xl">Add Craft Item</button>
              </NavLink>
            ) : (
              ""
            )}
            {user?.email ? (
              <NavLink
                to={`/my-art-list/${user.email}`}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-xl text-[#BE042F] font-semibold"
                    : "font-bold"
                }
              >
                <button className="px-8 py-3  text-xl">
                  My Art & Craft List
                </button>
              </NavLink>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              onChange={handleToggle}
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <div className="md:navbar-end">
            {user?.email ? (
              <div className="flex items-center gap-4">
                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="w-10 relative rounded-full"
                >
                  <img
                    className="rounded-full cursor-pointer transition hover:scale-95"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-1/439011287_2066347377098548_8157686076250003447_n.jpg?stp=c0.18.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFoPHVS4MuUjKpaqCTRTXs49jcT3sWeuaL2NxPexZ65ouVvTeRM_qclM__aZCXcZCV-WlHLC1H49ESy2oFGMoYx&_nc_ohc=fwLCvDv5ouYQ7kNvgGPcPZ-&_nc_ht=scontent.fdac5-1.fna&oh=00_AfAZqQ9GY6Jj47JFOexgHg38333lX7HfIspbscIrYzc7xA&oe=6633E1CB"
                    }
                    alt={user.displayName}
                  />
                  {hovered && (
                    <div className="absolute -left-28 top-10 transition transform  bg-opacity-70 p-2 text-sm font-bold  rounded">
                      <div className=" font bold">{user.displayName}</div>
                    </div>
                  )}
                </div>

                <div className="flex  font-bold">
                  <button
                    onClick={logOut}
                    className="btn btn-sm hover:scale-125 transition  btn-secondary"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/log_in"
                className="mr-4 md:mr-0 px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white  font-semibold lg:text-lg bg-[#EB6753] "
              >
                Log In{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
