
import {Route , Routes} from 'react-router-dom';
import DashboardPage from "./pages/dashboard";
const App = () => {
  return ( 
    <div className="w-full h-screen bg-blue-100">
      <Routes>
        <Route element ={<DashboardPage/>} path="dashboard"/>
      </Routes>
    </div>
   );
}
 
export default App;