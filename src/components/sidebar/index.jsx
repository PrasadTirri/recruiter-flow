import React, { useState } from "react";
import "./styles.css";

import { logo } from "../../assets";
import { Link } from "react-router-dom";

// Define sidebar items
const sidebarItems = [
  {
    name: "dashboard",
    label: "Dashboard",
    icon: "fas fa-gauge",
    link: "/dashboard",
  },
  {
    name: "postjob",
    label: "Job Requirements",
    icon: "fas fa-file",
    link: "/job-requirements",
  },
  {
    name: "profiles",
    label: "Profiles",
    icon: "fas fa-users",
    link: "/profiles",
  },
  {
    name: "jobslist",
    label: "Jobs List",
    icon: "fas fa-user-graduate",
    link: "/job-list",
  },
  {
    name: "settings",
    label: "Settings",
    icon: "fas fa-cog",
    link: "#",
    submenu: [
      { name: "submenu1", label: "Change Password", link: "/change-password" },
      { name: "submenu2", label: "Account", link: "/account" },
    ],
  },
];

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("dashboard");
  const [openSubmenu, setOpenSubmenu] = useState("");

  const handleLinkClick = (itemName, hasSubmenu) => {
    setActiveLink(itemName);
    if (hasSubmenu) {
      setOpenSubmenu(openSubmenu === itemName ? "" : itemName); // Toggle submenu
    } else {
      setOpenSubmenu(""); // Close any open submenu if item without submenu is clicked
    }
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 sidebarWrapper"
      style={{ width: "280px", height: "100vh" }}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none"
      >
        <span className="fs-4">
          {" "}
          <img src={logo} alt="" className="mx-2" />
          Recruiter Flow
        </span>
      </Link>
      <div className="searchInputWrapper  my-3">
        <i className="fa fa-search mx-2"></i>
        <input className="searchInput" type="text" placeholder="Search" />
      </div>

      <ul className="nav nav-pills flex-column mb-auto">
        {sidebarItems.map((item) => (
          <React.Fragment key={item.name}>
            <li className="nav-item">
              <Link
                to={item.link}
                className={`nav-link ${
                  activeLink === item.name ? "active" : ""
                }`}
                onClick={() => handleLinkClick(item.name, !!item.submenu)}
              >
                <i className={`${item.icon} mx-2`}></i>
                {item.label}
                {item.submenu && (
                  <i
                    className={`fas fa-chevron-right ${
                      openSubmenu === item.name ? "rotate-90" : ""
                    }`}
                    style={{ float: "right" }}
                  ></i>
                )}
              </Link>
            </li>
            {item.submenu && openSubmenu === item.name && (
              <ul className="nav flex-column ms-3">
                {item.submenu.map((subItem) => (
                  <li className="nav-item" key={subItem.name}>
                    <Link
                      to={subItem.link}
                      className="nav-link "
                      onClick={() => setActiveLink(subItem.name)}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>

      <div className="dropdown pb-4">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="hugenerd"
            width="30"
            height="30"
            className="rounded-circle"
          />
          <span className="d-none d-sm-inline mx-3">John Doe</span>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              Account
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
