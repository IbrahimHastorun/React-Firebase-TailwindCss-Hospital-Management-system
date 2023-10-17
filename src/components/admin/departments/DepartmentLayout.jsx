import { useState } from "react";
import { Link ,  Outlet } from "react-router-dom";

const DepartmentLayout = () => {
    const [departments , setDepartments] = useState(true);
    const [add , setAdd] = useState(false);

    return (
        <>
            <Link onClick={() => { setDepartments(true); setAdd(false); }} to="/admin/departments" className={`p-2 text-lg ${departments && "bg-gray-300"}`}>Departments</Link>
            <Link onClick={() => { setDepartments(false); setAdd(true); }} to="/admin/departments/add" className={`p-2 text-lg ${add && "bg-gray-300"}`}>Add Department</Link>

            <div className="mt-1 p-7 border-t-4 border-t-gray-300 bg-gray-200">
                <Outlet />
            </div>
        </>
    );
}

export default DepartmentLayout;