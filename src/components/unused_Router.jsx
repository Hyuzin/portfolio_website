import { BrowserRouter ,Outlet, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./Navbar";

export const Router = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
