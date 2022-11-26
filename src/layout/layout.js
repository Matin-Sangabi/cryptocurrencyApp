import Header from "../components/Menu/header";
import SideBar from "../components/Menu/sideBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="pt-20 ml-0 md:ml-36 xl:ml-48 px-4">
        {children}
      </div>
    </>
  );
};

export default Layout;
