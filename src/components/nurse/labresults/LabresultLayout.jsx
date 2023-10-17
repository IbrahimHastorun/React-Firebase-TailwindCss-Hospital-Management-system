import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const LabresultLayout = () => {
    const [labresults , setLabresults] = useState(true);
    const [add , setAdd] = useState(false);

    return (
        <>
            <Link onClick={() => { setLabresults(true); setAdd(false); }} to="/nurse/labresults" className={`p-2 text-lg ${labresults && "bg-gray-300"}`}>Lab. Results</Link>
            <Link onClick={() => { setLabresults(false); setAdd(true); }} to="/nurse/labresults/add" className={`p-2 text-lg ${add && "bg-gray-300"}`}>Add Lab. Result</Link>

            <div className="mt-1 p-7 border-t-4 border-t-gray-300 bg-gray-200">
                <Outlet />
            </div>
        </>
    );
}

export default LabresultLayout;