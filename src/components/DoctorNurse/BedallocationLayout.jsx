import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const BedallocationLayout = () => {
    const [bedallocation , setBedallocation] = useState(true);
    const [add , setAdd] = useState(false);

    return (
        <>
            <Link onClick={() => { setBedallocation(true); setAdd(false); }} to="/bedallocation" className={`p-2 text-lg ${bedallocation && "bg-gray-300"}`}>Bed Allocations</Link>
            <Link onClick={() => { setBedallocation(false); setAdd(true); }} to="/bedallocation/add" className={`p-2 text-lg ${add && "bg-gray-300"}`}>Add Bed Allocation</Link>

            <div className="mt-1 p-7 border-t-4 border-t-gray-300 bg-gray-200">
                <Outlet />
            </div>
        </>
    );
}

export default BedallocationLayout;