import Header from "../components/Menu/header";
import SideBar from "../components/Menu/sideBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="pt-20 ml-64 px-4">
        {children}
      </div>
    </>
  );
};

export default Layout;
