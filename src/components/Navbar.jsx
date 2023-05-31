import { useContext, useEffect, useState } from "react";
import { NavContext } from "../context/NavContext";
import { motion } from "framer-motion";

// import Navbaritem from "./Navbaritem";
const Navbar = () => {
  const { activeLinkId } = useContext(NavContext);
  console.log(activeLinkId);
  const navLinks = ["Home", "Skills", "Projects", "Contact"];

  const [show, setShow] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== 'undefined'){
      if(window.scrollY > lastScrollY) {
        setShow(true)
      }
      else {
        setShow(false)
      }

      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window!== 'undefined'){
      window.addEventListener('scroll', controlNavbar)

      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase()}`;

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: "smooth" });
    };

    if (content === "Contact") {
      return (
        <button
          key={content}
          onClick={handleClickNav}
          className={`group relative rounded border-[1px] hover:border-merah px-5 py-2 overflow-hidden transition-all duration-300 ${
            activeLinkId === content
              ? "shadow-lg border-merah shadow-merah/50"
              : "text-white"
          }`}
        >
          <div
            className={`absolute h-full rounded-full w-[150%] top-0 transition-all ease-out duration-300  ${
              activeLinkId === content
                ? "bg-gradient-to-r from-red-400 to-merah opacity-100 -right-5"
                : "opacity-0 right-32"
            } `}
          ></div>
          <p className={`relative transition-colors duration-300 ${activeLinkId === content ? 'text-white' : 'group-hover:text-merah'}`}> {"Let's Talk"} </p>
          {activeLinkId === content && (
            <motion.div
              className="absolute top-[100%] left-0 w-0 h-[2px] opacity-0 rounded-[15px] bg-merah "
              layoutId="underline"
              transition={{ duration: 0.1 }}
            />
          )}
        </button>
      );
    } else {
      return (
        <button
          key={content}
          onClick={handleClickNav}
          className={`${
            activeLinkId === content ? "text-merah" : "text-white"
          } relative hover:text-merah transition-colors`}
        >
          {content}
          {activeLinkId === content && (
            <motion.div
              className="absolute top-[100%] left-0 w-full h-[2px] rounded-[15px] bg-merah "
              layoutId="underline"
              transition={{ duration: 0.2 }}
            />
          )}
        </button>
      );
    }
  };

  return (
    <nav className={`${show ? '-top-20 delay-500': 'top-0 delay-75'} w-full fixed hover:top-0 font-medium duration-500 text-md transition-all`}>
      <div className="items-center flex flex-row justify-between px-32 py-4">
        <img
          src="/src/assets/logo-with-text.svg"
          className="w-[12vw]"
          alt="logo"
        />
        <div className="items-center flex flex-row gap-10 text-white">
          {/* <Navbaritem route="home">Home</Navbaritem>
          <Navbaritem route="skills">Skills</Navbaritem>
          <Navbaritem route="project">Project</Navbaritem> */}
          {navLinks.map((nav) => renderNavLink(nav))}
          {/* <button
            className={`group relative rounded border-[1px] border-white hover:border-merah px-5 py-2 overflow-hidden shadow-lg shadow-red-500/0 transition duration-300 hover:shadow-merah/50 ${
              activeLinkId === "Contact" ? "border-merah shadow-merah/50" : ""
            } `}
            onClick={handleConnectButton}
          >
            <div
              className={`absolute h-full w-[150%] rounded-r-full bg-gradient-to-r from-red-400 to-merah items-center opacity-0 group-hover:opacity-100 flex justify-center transition-all ease-in-out duration-300 top-0 group-hover:-right-5 right-32 ${
                activeLinkId === "Contact" ? "-right-5 opacity-100" : ""
              } `}
            ></div>
            <span className="relative duration-300 transition-colors text-white">
              Contact me
            </span>
            {activeLinkId === "Contact" && (
              <motion.div
                className="absolute top-[100%] left-0 w-0 h-[2px] opacity-0 rounded-[15px] bg-merah "
                layoutId="underline"
                transition={{ duration: 0.1 }}
              />
            )}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
