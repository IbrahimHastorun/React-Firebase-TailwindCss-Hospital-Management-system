import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AddbedLayout = () => {
    const [addbed , setAddbed] = useState(true);
    const [add , setAdd] = useState(false);

    return (
        <>
            <Link onClick={() => { setAddbed(true); setAdd(false); }} to="/nurse/addbed" className={`p-2 text-lg ${addbed && "bg-gray-300"}`}>Beds</Link>
            <Link onClick={() => { setAddbed(false); setAdd(true); }} to="/nurse/addbed/add" className={`p-2 text-lg ${add && "bg-gray-300"}`}>Add Bed</Link>

            <div className="mt-1 p-7 border-t-4 border-t-gray-300 bg-gray-200">
                <Outlet />
            </div>
        </>
    );
}

export default AddbedLayout;