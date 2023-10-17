import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const NurseLayout = () => {
    const [nurses , setNurses] = useState(true);
    const [add , setAdd] = useState(false);

    return (
        <>
            <Link onClick={() => { setNurses(true); setAdd(false); }} to="/admin/nurses" className={`p-2 text-lg ${nurses && "bg-gray-300"}`}>Nurses</Link>
            <Link onClick={() => { setNurses(false); setAdd(true); }} to="/admin/nurses/add" className={`p-2 text-lg ${add && "bg-gray-300"}`}>Add Nurse</Link>

            <div className="mt-1 p-7 border-t-4 border-t-gray-300 bg-gray-200">
                <Outlet />
            </div>
        </>
    );
}

export default NurseLayout;