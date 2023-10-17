import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";
import toast from "react-hot-toast";

const AddBedallocation = () => {
    const [patient , setPatient] = useState("");
    const [bedName , setBedName] = useState("");
    const [allomentDate , setAllomentDate] = useState("");
    const [dischargeDate , setDischargeDate] = useState("");

    const navigate = useNavigate();
    const patientData = useCollection("patients");
    const bedNameData = useCollection("beds");
    const { pending , addDocument } = useFirestore("bedallocation");

    const submitHandle = async (e) => {
        e.preventDefault();

        if (patient !== "" && bedName !== "" && allomentDate !== "" && dischargeDate !== "") {
            const addedData = {
                patient : patient,
                bedName : bedName,
                allomentDate : allomentDate,
                dischargeDate : dischargeDate
            };
            await addDocument(addedData);
            toast.success("Bed Allocation Added Successfully");
            navigate("/bedallocation");
        } else {
            toast.error("Please Enter All Required Information");
        }
    };
 
    return (
        <div className="mx-[20%] p-3 bg-purple-300 rounded-lg shadow-xl">
            <h2 className="text-2xl pl-3 font-bold pb-1 border-b-4 border-gray-500">Add Bed Allocation</h2>
            <form onSubmit={submitHandle} className="py-5 pl-3 flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1">Patient <span className="text-red-500">*</span></label>
                    <select onChange={(e) => { setPatient(e.target.value); }} className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl">
                        {patientData && patientData.documents && patientData.documents.map((document) => (
                            <option key={document.id} value={document.displayName}>{document.displayName}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1">Bed Name <span className="text-red-500">*</span></label>
                    <select onChange={(e) => { setBedName(e.target.value); }} className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl">
                        {bedNameData && bedNameData.documents && bedNameData.documents.map((document) => (
                            <option key={document.id} value={document.bedName}>{document.bedName}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="allomentdate">Alloment Date <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setAllomentDate(e.target.value); }} value={allomentDate} type="date" id="allomentdate" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="dischargedate">Discharge Date <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setDischargeDate(e.target.value); }} value={dischargeDate} type="date" id="dischargedate" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" />
                </div>

                {!pending && <button className="text-white font-semibold bg-purple-700 p-2 w-1/4 transition-all rounded hover:bg-purple-500">Add Bed Allocation</button>}
                {pending && <button className="text-white font-semibold bg-purple-500 p-2 w-1/4 rounded">Waiting</button>}
            </form>
        </div>
    );
}

export default AddBedallocation;