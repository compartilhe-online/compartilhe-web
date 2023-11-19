import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo_icon_30 from "../../assets/images/logo-icon-30.png";
import logo_dark from "../../assets/images/logo-dark.png";
import logo_light from "../../assets/images/logo-light.png";
import image from "../../assets/images/user/profile.jpeg";

import { AiOutlineUser, LiaSignOutAltSolid } from "../../assets/icons/icons";
import { IoSettingsOutline } from "react-icons/io5";
import { showLoading } from "react-global-loading";

import UserProfile from "../../services/profile";

export default function Navbar({ sticky }) {
  const [isMenu, setisMenu] = useState(false);
  const [isDropdown, openDropdown] = useState(true);
  const [auth, setAuth] = useState(null);
  const [profile, setProfile] = useState({});

  const [navbarSticky, setNavbarSticky] = useState(sticky);
  window.addEventListener("scroll", windowScroll);
  function windowScroll() {
    setNavbarSticky(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );
  }

  function handleLogout() {
    localStorage.clear();
    window.location.reload(false);
  }

  function handleProfile() {
    const prof = JSON.parse(localStorage.getItem("profile")) || null;
    if (prof) {
      setProfile(prof);
    } else {
      UserProfile().then((e) => {
        if (e) {
          setProfile(e.data);
        }
      });
    }
  }

  function getClosest(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  }

  function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  }
  const toggleMenu = () => {
    setisMenu(!isMenu);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  useEffect(() => {
    showLoading(true);

    const jwt = JSON.parse(localStorage.getItem("jwt")) || null;
    if (jwt) {
      setAuth(true);
      handleProfile();
    }

    window.scrollTo(0, 0);
    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.classList.remove("dark");
    activateMenu();
    showLoading(false);
  }, [auth]);
  return (
    <nav
      id="topnav"
      className={
        sticky
          ? "nav-sticky"
          : `${navbarSticky ? "nav-sticky" : " defaultscroll"}`
      }
    >
      <div className="container relative">
        <Link className="logo ps-0" to="/home">
          <img src={logo_icon_30} className="inline-block sm:hidden" alt="" />
          <div className="sm:block hidden">
            <img
              src={logo_dark}
              className="inline-block dark:hidden"
              alt=""
              height="30%"
            />
            <img
              src={logo_light}
              className="hidden dark:inline-block"
              alt=""
              height="30%"
            />
          </div>
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            <Link
              to="#"
              className={`navbar-toggle ${isMenu ? "open" : ""}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>

        <ul className="buy-button list-none space-x-1 mb-0">
          {!auth ? (
            <>
              <li className="inline-block mb-0">
                <li>
                  <Link to="/auth-signup">
                    <input
                      className="mr-5 py-1 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                      value="Inscrever-se"
                      style={{ width: "150px" }}
                    />
                  </Link>
                </li>
              </li>
              <li className="inline-block mb-0">
                <li>
                  <Link to="/auth-login">
                    <input
                      type="submit"
                      className="ml-5 py-1 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                      value="Login"
                      style={{ width: "150px" }}
                    />
                  </Link>
                </li>
              </li>
            </>
          ) : null}

          {auth ? (
            <>
              <li className="inline-block mb-0">
                <li>
                  <Link to="/create-campaign">
                    <input
                      className="mr-5 py-1 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                      value="Criar campanha"
                      style={{ width: "180px" }}
                    />
                  </Link>
                </li>
              </li>
              <li className="dropdown inline-block relative ps-1">
                <button
                  onClick={() => openDropdown(!isDropdown)}
                  data-dropdown-toggle="dropdown"
                  className="dropdown-toggle h-9 w-9  items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white inline-flex"
                  type="button"
                >
                  <img
                    src={profile.photo || image}
                    className="rounded-full"
                    alt=""
                  />
                </button>

                <div
                  className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800  ${
                    isDropdown ? "hidden" : "block"
                  }`}
                >
                  <div className="relative">
                    <div className="py-8 bg-gradient-to-tr from-indigo-600 to-red-600"></div>
                    <div className="absolute px-4 -bottom-7 start-0">
                      <div className="flex items-end">
                        <img
                          src={profile.photo || image}
                          className="rounded-full w-10 h-w-10 shadow dark:shadow-gray-700"
                          alt=""
                        />

                        <span className="font-semibold text-[15px] ms-1">
                          {profile.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 px-4"></div>

                  <div className="mt-4 px-4"></div>

                  <ul className="py-2 text-start">
                    <li>
                      <Link
                        to={"/profile/" + profile.id}
                        className="flex items-center text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"
                      >
                        <AiOutlineUser className="me-1" />
                        Meu Perfil
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/profile-edit"
                        className="flex items-center text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"
                      >
                        <IoSettingsOutline className="me-1" />
                        Configurações
                      </Link>
                    </li>
                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="flex items-center text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"
                      >
                        <LiaSignOutAltSolid className="me-1 h-4 w-4" /> Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          ) : null}
        </ul>

        <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
          <ul className="navigation-menu justify-start">
            <li>
              <Link to="/home" className="sub-menu-item">
                Início
              </Link>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <Link to="#!">Campanhas</Link>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <Link to="/explore-campaign" className="sub-menu-item">
                    Financiamento coletivo
                  </Link>
                </li>
                <li>
                  <Link to="/explore-campaign" className="sub-menu-item">
                    Pedidos de ajuda
                  </Link>
                </li>
                <li>
                  <Link to="/explore-campaign" className="sub-menu-item">
                    Ofertas de ajuda
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about" className="sub-menu-item">
                Quem somos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="sub-menu-item">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
