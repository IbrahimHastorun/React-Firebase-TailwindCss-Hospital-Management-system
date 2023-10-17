import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AppointmentLayout = () => {
    const [appointments , setAppointments] = useState(true);
    const [add , setAdd] = useState(false);

    return (
        <>
            <Link onClick={() => { setAppointments(true); setAdd(false); }} to="/doctor/appointments" className={`p-2 text-lg ${appointments && "bg-gray-300"}`}>Appointments</Link>
            <Link onClick={() => { setAppointments(false); setAdd(true); }} to="/doctor/appointments/add" className={`p-2 text-lg ${add && "bg-gray-300"}`}>Add Appointment</Link>

            <div className="mt-1 p-7 border-t-4 border-t-gray-300 bg-gray-200">
                <Outlet />
            </div>
        </>
    );
}

export default AppointmentLayout;