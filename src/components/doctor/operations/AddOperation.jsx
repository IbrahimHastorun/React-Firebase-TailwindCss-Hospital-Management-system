import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUserInfo } from "../../../hooks/useGetCurrentUserInfo";
import { useCollection } from "../../../hooks/useCollection";
import { useFirestore } from "../../../hooks/useFirestore";
import toast from "react-hot-toast";

const AddOperation = () => {
    const [operationName , setOperationName] = useState("");
    const [patient , setPatient] = useState("");
    const [date , setDate] = useState("");
    const [status , setStatus] = useState("");

    const navigate = useNavigate();
    const { currentUserInfo } = useGetCurrentUserInfo();
    const { documents } = useCollection("patients");
    const { pending , addDocument } = useFirestore("operations");

    const submitHandle = async (e) => {
        e.preventDefault();

        if (operationName !== "" && patient !== "" && date !== "" && status !== "") {
            const addedData = {
                operationName : operationName,
                patient : patient,
                doctor : currentUserInfo.displayName,
                date : date,
                status : status
            };
            await addDocument(addedData);
            toast.success("Operation Added Successfully");
            navigate("/doctor/operations");
        } else {
            toast.error("Please Enter All Required Information");
        }
    };

    return (
        <div className="mx-[20%] p-3 bg-purple-300 rounded-lg shadow-xl">
            <h2 className="text-2xl pl-3 font-bold pb-1 border-b-4 border-gray-500">Add Operation</h2>
            <form onSubmit={submitHandle} className="py-5 pl-3 flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1">Operation Name <span className="text-red-500">*</span></label>
                    <select onChange={(e) => { setOperationName(e.target.value); }} className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl">
                        <option value="Cardiac surgery">Cardiac surgery</option>
                        <option value="Colorectal surgery">Colorectal surgery</option>
                        <option value="Trauma surgery">Trauma surgery</option>
                        <option value="Ent">Ent</option>
                        <option value="General Surgeon">General Surgeon</option>
                        <option value="Neurosurgeon">Neurosurgeon</option>
                    </select>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1">Patient <span className="text-red-500">*</span></label>
                    <select onChange={(e) => { setPatient(e.target.value) }} className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl">
                        {documents && documents.map((document) => (
                            <option key={document.id} value={document.displayName}>{document.displayName}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="date">Date <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setDate(e.target.value); }} value={date} type="date" id="date" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1">Outcome Status <span className="text-red-500">*</span></label>
                    <select onChange={(e) => { setStatus(e.target.value) }} className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl">
                        <option value="Successful">Successful</option>
                        <option value="Failed">Failed</option>
                    </select>
                </div>

                {!pending && <button className="text-white font-semibold bg-purple-700 p-2 w-1/4 transition-all rounded hover:bg-purple-500">Add Operation</button>}
                {pending && <button className="text-white font-semibold bg-purple-500 p-2 w-1/4 rounded">Waiting</button>}
            </form>
        </div>
    );
}

export default AddOperation;