import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const OperationLayout = () => {
    const [operations , setOperations] = useState(true);
    const [add , setAdd] = useState(false);

    return (
        <>
            <Link onClick={() => { setOperations(true); setAdd(false); }} to="/doctor/operations" className={`p-2 text-lg ${operations && "bg-gray-300"}`}>Operations</Link>
            <Link onClick={() => { setOperations(false); setAdd(true); }} to="/doctor/operations/add" className={`p-2 text-lg ${add && "bg-gray-300"}`}>Add Operation</Link>

            <div className="mt-1 p-7 border-t-4 border-t-gray-300 bg-gray-200">
                <Outlet />
            </div>
        </>
    );
}

export default OperationLayout