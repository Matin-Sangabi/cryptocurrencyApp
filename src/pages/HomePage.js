import { Link } from "react-router-dom";

const HomePage = () => {
    return ( 
        <>
            <h1 className="text-xl text-center">Opp's This Page Not Completerd</h1>
            <p className="text-center">See Dashboard</p>
            <Link className="text-center flex justify-center text-blue-800 py-2 border-b" to={"/dashboard"}>Go To dashboard page</Link>
        </>
     );
}
 
export default HomePage;