import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const DoctorLayout = () => {
    const [doctors , setDoctors] = useState(true);
    const [add , setAdd] = useState(false);

    return (
        <>
            <Link onClick={() => { setDoctors(true); setAdd(false); }} to="/admin/doctors" className={`p-2 text-lg ${doctors && "bg-gray-300"}`}>Doctors</Link>
            <Link onClick={() => { setDoctors(false); setAdd(true); }} to="/admin/doctors/add" className={`p-2 text-lg ${add && "bg-gray-300"}`}>Add Doctor</Link>

            <div className="mt-1 p-7 border-t-4 border-t-gray-300 bg-gray-200">
                <Outlet />
            </div>
        </>
    );
}

export default DoctorLayout;