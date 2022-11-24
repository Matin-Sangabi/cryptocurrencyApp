import { NavLink } from "react-router-dom";
import Links, { LinkAction } from "../../utils/menu";


const SideBar = () => {
  return (
    <section className="fixed left-0 top-0 p-2 w-64 h-full border-l-2 border-gray-600">
      <div className="pt-24 pb-14  px-6 w-full h-full flex flex-col items-start">
        <ul className="flex flex-col gap-y-4">
          {Links.map((link, i) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "py-3 px-6  text-lg transition-all ease-linear duration-500  bg-blue-800 text-slate-100 before:w-1 before:h-14  before:bg-blue-800 before:absolute before:rounded-r-3xl before:left-0 w-52   flex items-center gap-x-4 rounded-md"
                    : "py-3 px-6 text-xlg transition-all ease-linear duration-500 text-slate-600  hover:bg-blue-800 hover:before:w-1 hover:before:h-12  hover:before:bg-blue-800 hover:before:absolute hover:before:rounded-r-2xl hover:before:left-0 hover:text-slate-100 w-52 flex items-center gap-x-4 rounded-md"
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
