import LOGO from "./../../assets/logo2.svg";
import { FaBell } from "react-icons/fa";
import { IoSearchOutline, IoSettingsSharp } from "react-icons/io5";

const MobileHeader = () => {
  return (
    <div className="w-full pt-8 px-4 flex items-center justify-between md:hidden">
      <div className="flex items-center gap-x-2">
        <div className="w-8">
          <img src={LOGO} alt="logo" />
        </div>
        <div className="italic font-semibold text-slate-900 text-sm">
          CRYPTO
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <span className="text-lg text-slate-700">
          <IoSearchOutline />
        </span>
        <span className="text-lg text-slate-700">
          <IoSettingsSharp />
        </span>
        <div className="relative flex items-center justify-center cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-red-600 absolute right-0 top-px ring-2 ring-slate-100"></span>
          <span className="text-slate-700 text-xl">
            <FaBell />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
