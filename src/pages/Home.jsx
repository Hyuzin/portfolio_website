import { useNav } from "../hooks/useNav";

const Home = () => {
  const homeRef = useNav("Home");

  return (
    <>
      <div
        id="home"
        className="flex items-center w-full h-screen px-32 bg-gradient-to-r from-darkbgr to-darkbg "
      >
        <div ref={homeRef} className="text-white text-[36px] font-opensans">
          <div className="w-[65%] ">
            <p className="text-[96px] font-montserrat font-medium">
              Libran <span className="text-merah">Dev.</span>
            </p>
            <p>
              <span className="">Hello!</span> i’m, M Libran Restu Wibawa and I am a{" "}
              <span className="bg-darkbgr">front end web developer.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
