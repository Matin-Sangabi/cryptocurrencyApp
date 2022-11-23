import { MdDashboard } from "react-icons/md";
import { IoPieChartSharp ,IoNewspaper ,IoChatbubbles ,IoTrendingUp ,IoLogOutOutline , IoSettingsSharp } from "react-icons/io5";
import { AiOutlineTransaction } from "react-icons/ai";

const Links = [
  { name: "Dashboard", path: "/dashboard", icon: () => MdDashboard() },
  { name: "Charts", path: "/charts", icon: () => IoPieChartSharp() },
  { name: "News", path: "/news", icon: () => IoNewspaper() },
  { name: "Chats", path: "/chats", icon: () => IoChatbubbles() },
  { name: "Transactions", path: "/transaction", icon: () => AiOutlineTransaction() },
  { name: "Trends", path: "/trends", icon: () =>IoTrendingUp() },
];

export const LinkAction = [
    {name: 'Settings' , path : '/setting' , icon : () => IoSettingsSharp()},
    {name: 'Log Out' , path : '/Logout' , icon : () => IoLogOutOutline()},
]
export default Links;