import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navbaritem = ({ route, children }) => {
  const routes = useLocation();
  const hashRoute = routes.hash === `#${route}`;

  const navigate = useNavigate();

  console.log(routes.hash)

  const clicked = () => {
    navigate(`#${route}`);
  };

  return (
    <Link
      to={route}
      smooth={true}
      className={`cursor-pointer ${
        hashRoute ? "text-merah" : "text-white"
      } hover:text-merah`}
      spy={true}
      duration={500}
      onClick={clicked}
      hashSpy={true}
      activeClass='text-merah'
    >
      <motion.div className="relative">
        {children}
        {hashRoute && (
          <motion.div
            className="absolute top-[100%] left-0 w-full h-[2px] rounded-[15px] bg-white "
            layoutId="underline"
          />
        )}
      </motion.div>
    </Link>
  );
};

export default Navbaritem;
