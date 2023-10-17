import { useState } from "react";
import { useCollection } from "../../../hooks/useCollection";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";
import toast from "react-hot-toast";

const AddDoctor = () => {
    const [displayName , setDisplayName] = useState("");
    const [department , setDepartment] = useState("");
    const [phone , setPhone] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const navigate = useNavigate();
    const { documents } = useCollection("departments");
    const { pending , addUser } = useUser();

    const submitHandle = async (e) => {
        e.preventDefault();

        if (displayName !== "" && department !== "" && phone !== "" && email !== "" && password !== "") {
            const addedData = {
                displayName : displayName,
                department : department,
                role : "doctor",
                phone : phone,
                email : email
            };
            await addUser(email , password , displayName , addedData);
            toast.success("Doctor Added Successfully");
            navigate("/admin/doctors");
        } else {
            toast.error("Please Enter All Required Information");
        }
    };

    return (
        <div className="mx-[20%] p-3 bg-purple-300 rounded-lg shadow-xl">
            <h2 className="text-2xl pl-3 font-bold pb-1 border-b-4 border-gray-500">Add Doctor</h2>
            <form onSubmit={submitHandle} className="py-5 pl-3 flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="doctor">Doctor Name Surname<span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setDisplayName(e.target.value); }} value={displayName} type="text" id="doctor" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Doctor Name Surname" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1">Department <span className="text-red-500">*</span></label>
                    <select onChange={(e) => { setDepartment(e.target.value); }} className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl cursor-pointer">
                        {documents && documents.map((document) => (
                            <option key={document.id} value={document.departmentName}>{document.departmentName}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="phone">Phone <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setPhone(e.target.value); }} value={phone} type="text" id="phone" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Phone" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="email">Email <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setEmail(e.target.value); }} value={email} type="email" id="email" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Email" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="password">Password <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setPassword(e.target.value); }} value={password} type="password" id="password" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Password" />
                </div>

                {!pending && <button className="text-white font-semibold bg-purple-700 p-2 w-1/4 transition-all rounded hover:bg-purple-500">Add Doctor</button>}
                {pending && <button className="text-white font-semibold bg-purple-500 p-2 w-1/4 rounded">Waiting</button>}
            </form>
        </div>
    );
}

export default AddDoctor;