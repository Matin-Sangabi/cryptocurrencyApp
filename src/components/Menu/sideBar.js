import { NavLink } from "react-router-dom";
import Links, { LinkAction } from "../../utils/menu";


const SideBar = () => {
  return (
    <section className="hidden w-0 md:block  fixed left-0 top-0 p-2 md:w-40 xl:w-56 h-full border-l-2 border-gray-600">
      <div className="pt-20 px-2 w-full h-full flex flex-col items-start">
        <ul className="flex flex-col gap-y-4">
          {Links.map((link, i) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "py-3 px-2 xl:px-6  md:text-base xl:text-lg transition-all ease-linear duration-500  bg-blue-800 text-slate-100 before:w-1 before:h-12  before:bg-blue-800 before:absolute before:rounded-r-3xl before:left-0 md:w-32 xl:w-44   flex items-center xl:gap-x-4 gap-x-2 rounded-md"
                    : "py-3 px-2 xl:px-6  md:text-xlg xl:transition-all ease-linear duration-500 text-slate-600  hover:border-b hover:border-blue-800  hover:text-blue-800  md:w-32 xl:w-44 flex items-center gap-x-2 xl:gap-x-4 rounded-md"
                }
                key={i}
                to={link.path}
              >
                <span className="text-2xl">{link.icon()}</span>
                <span className="font-sans font-normal">{link.name}</span>
              </NavLink>
            );
          })}
        </ul>
        <div className="flex-1 flex items-end justify-end">
          <ul className="flex flex-col gap-y-6">
            {LinkAction.map((action, i) => {
              return (
                <NavLink key={i} className='p-2 flex items-center gap-3 text-slate-600' to={action.path}>
                  <span className="text-lg">{action.icon()}</span>
                  <span className="text-lg font-normal">{action.name}</span>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
