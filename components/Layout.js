import Navbar from "./Navbar";
import Footer from "./Footer";

import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
