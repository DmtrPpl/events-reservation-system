import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./sidebar.css";

import { ReactComponent as Chevron } from "./assets/chevron.svg";
//import { ReactComponent as Analytics } from "./assets/analytics.svg";
import { ReactComponent as Venues } from "./assets/venues.svg";
import { ReactComponent as Funds } from "./assets/funds.svg";
//import { ReactComponent as Performance } from "./assets/performance.svg";
import { ReactComponent as Help } from "./assets/help.svg";
import { ReactComponent as Settings } from "./assets/settings.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Events } from "./assets/events.svg";
//import { ReactComponent as Computer } from "./assets/computer.svg";
//import { ReactComponent as Portfolio } from "./assets/portfolio.svg";
//import { ReactComponent as Reports } from "./assets/reports.svg";
//import { ReactComponent as Projects } from "./assets/projects.svg";
import { ReactComponent as Artists } from "./assets/artists.svg";
import profile from "./assets/profile.jpg";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(localStorage.getItem("collapsed") === "true");
  const [activeLink, setActiveLink] = useState(localStorage.getItem("activeLink") || "");

  const toggleCollapsed = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    localStorage.setItem("collapsed", newCollapsed.toString());
  };

  const sidebarLinksTop = [
    {
      title: "Home",
      path: "/home",
      icon: <Funds />,
    },
    {
      title: "Events",
      path: "/events",
      icon: <Events />,
    },
    {
      title: "Venues",
      path: "/venues",
      icon: <Venues />,
    },
    {
      title: "Artists",
      path: "/artists",
      icon: <Artists />,
    },
  ];

  const sidebarLinksBottom = [
    {
      title: "Help",
      path: "help",
      icon: <Help />,
    },
    {
      title: "Settings",
      path: "settings",
      icon: <Settings />,
    },
  ];

  const handleLinkClick = (hrefLinkClick) => {
    return () => {
      setActiveLink(hrefLinkClick);
      localStorage.setItem("activeLink", hrefLinkClick);
    };
  };

  useEffect(() => {
    if (collapsed) {
      document.body.classList.add("collapsed");
    } else {
      document.body.classList.remove("collapsed");
    }
  }, [collapsed]);
//Eventure, Enrollify
  return (
    <div>
      <nav>
        <div className="sidebar-top">
          <Link to="/home" className="logo__wrapper">
            <Logo className="logo" />
            <h1 className="hide">Ticketize</h1>
          </Link>
          <div className="expand-btn" onClick={toggleCollapsed}>
            <Chevron />
          </div>
        </div>
        <div className="sidebar-links">
          <ul>
            {sidebarLinksTop.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path} 
                  title={link.title}
                  className={`tooltip ${activeLink === link.path ? "active" : ""}`}
                  onClick={handleLinkClick(link.path)}
                >
                  {link.icon}
                  <span className="link hide">{link.title}</span>
                  <span className="tooltip__content">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-bottom">
          <div className="sidebar-links">
            <ul>
              {sidebarLinksBottom.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path} 
                    title={link.title}
                    className={`tooltip ${activeLink === link.path ? "active" : ""}`}
                    onClick={handleLinkClick(link.path)}
                  >
                    {link.icon}
                    <span className="link hide">{link.title}</span>
                    <span className="tooltip__content">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar__profile">
            <div className="avatar__wrapper">
              <img className="avatar" src={profile} alt="Profile" />
              <div className="online__status"></div>
            </div>
            <div className="avatar__name hide">
              <div className="user-name">Dmytro Popil</div>
              <div className="email">example@gmail.com</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
