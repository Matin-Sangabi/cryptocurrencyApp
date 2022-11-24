import LOGO from "./../../assets/logo2.svg";
import { useLocation } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
const Header = () => {
  const { pathname } = useLocation();
  const pathStr = pathname.split("/")[1];
  const PathName = pathStr.charAt(0).toUpperCase() + pathStr.slice(1);
  return (
    <header className="w-full py-4 px-6 fixed top-0 left-0">
      <nav className="w-full flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <div className="flex items-center gap-x-2 w-64">
            <div className="w-12">
              <img src={LOGO} alt="logo" />
            </div>
            <div className="italic font-semibold text-slate-900 text-xl">
              CRYPTO
            </div>
          </div>
          <div className="px-4">
            <h1 className="text-4xl font-semibold text-slate-900 tracking-wider">
              {PathName}
            </h1>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="flex items-center gap-x-4">
          <div className="w-80 relative">
            <span className="text-slate-500 absolute top-2 text-2xl stroke-2 left-1"><IoSearchOutline/></span>
            <input type="text" className="py-2 px-8 bg-blue-50 rounded-xl w-full ring-2 ring-blue-50 border-none transition-all ease-in-out duration-300 outline-none focus:ring focus:ring-blue-500 " placeholder="Search"/>
          </div>
            <div className="relative flex items-center justify-center cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-red-600 absolute right-1 top-1 ring-2 ring-slate-100"></span>
              <span className="text-slate-500 text-2xl">
                <FaBell />
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="w-8 h-8 rounded-full bg-blue-200 ring-2 ring-blue-400"></span>
              <span className="text-sm text-slate-900 font-semibold">
                Matin Sangabi
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
