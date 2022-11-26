import Links from "../../utils/menu";
import { NavLink } from "react-router-dom";
import { IoTerminal } from "react-icons/io5";
import { MdLinkedCamera } from "react-icons/md";
const ButtonNavigation = () => {
  return (
    <div className="block md:hidden fixed bottom-2 left-0 w-full ">
      <div className="mx-3  py-2 rounded-xl px-2 bg-opacity-70 bg-blue-300   flex items-center justify-between">
        {Links.map((link, i) => {
          return (
            <NavLink key={i} to={link.path} className={({isActive}) => `flex  items-center gap-x-2 p-2 text-slate-600 flex-auto transition-all ease-in-out duration-500  ${isActive ? 'bg-blue-800 text-slate-100  rounded-lg group is-active ' : ''}`}>
              <span className="text-xl">{link.icon()}</span>
              <span className="hidden group-[.is-active]:block">{link.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonNavigation;
