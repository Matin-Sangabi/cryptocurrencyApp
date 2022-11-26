import ButtonNavigation from "../components/Menu/buttomNavigation";
import Header from "../components/Menu/header";
import MobileHeader from "../components/Menu/mobileHeader";
import SideBar from "../components/Menu/sideBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MobileHeader/>
      <SideBar />
      <div className="pt-10 md:pt-20 ml-0 md:ml-36 xl:ml-48 px-4">
        {children}
      </div>
      <ButtonNavigation/>
    </>
  );
};

export default Layout;
