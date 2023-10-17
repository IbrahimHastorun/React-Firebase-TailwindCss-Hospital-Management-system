import { useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddDepartment = () => {
    const [departmentName , setDepartmentName] = useState("");

    const navigate = useNavigate();
    const { pending , addDocument } = useFirestore("departments");

    const submitHandle = async (e) => {
        e.preventDefault();

        if (departmentName !== "") {
            const addedData = {
                departmentName : departmentName
            };
            await addDocument(addedData);
            toast.success("Department Added Successfully");
            navigate("/admin/departments");
        } else {
            toast.error("Please Enter All Required Information");
        }
    };

    return (
        <div className="mx-[20%] p-3 bg-purple-300 rounded-lg shadow-xl">
            <h2 className="text-2xl pl-3 font-bold pb-1 border-b-4 border-gray-500">Add Department</h2>
            <form onSubmit={submitHandle} className="py-5 pl-3 flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="department">Department Name <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setDepartmentName(e.target.value); }} value={departmentName} type="text" id="department" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Department Name" />
                </div>

                {!pending && <button className="text-white font-semibold bg-purple-700 p-2 w-1/4 transition-all rounded hover:bg-purple-500">Add Department</button>}
                {pending && <button className="text-white font-semibold bg-purple-500 p-2 w-1/4 rounded">Waiting</button>}
            </form>
        </div>
    );
}

export default AddDepartment;