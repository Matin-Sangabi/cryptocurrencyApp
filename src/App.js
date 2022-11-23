import SideBar from "./components/Menu/sideBar";
import {Route , Routes} from 'react-router-dom';
import Header from "./components/Menu/header";
const App = () => {
  return ( 
    <div className="w-full h-screen bg-blue-100">
    <Header/>
      <SideBar/>
    </div>
   );
}
 
export default App;