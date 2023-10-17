import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const PatientLayout = () => {
    const [patients , setPatients] = useState(true);
    const [add , setAdd] = useState(false);

    return (
        <>
            <Link onClick={() => { setPatients(true); setAdd(false); }} to="/patients" className={`p-2 text-lg ${patients && "bg-gray-300"}`}>Patients</Link>
            <Link onClick={() => { setPatients(false); setAdd(true); }} to="/patients/add" className={`p-2 text-lg ${add && "bg-gray-300"}`}>Add Patient</Link>

            <div className="mt-1 p-7 border-t-4 border-t-gray-300 bg-gray-200">
                <Outlet />
            </div>
        </>
    );
}

export default PatientLayout;