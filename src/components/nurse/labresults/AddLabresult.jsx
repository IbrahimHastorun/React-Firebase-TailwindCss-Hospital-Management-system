import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCollection } from "../../../hooks/useCollection";
import { useFirestore } from "../../../hooks/useFirestore";
import toast from "react-hot-toast";

const AddLabresult = () => {
    const [patient , setPatient] = useState("");
    const [bloodPressure , setBloodPressure] = useState("");
    const [temperature , setTemperature] = useState("");
    const [pulse , setPulse] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const navigate = useNavigate();
    const { documents } = useCollection("patients");
    const { pending , addDocument } = useFirestore("labresults");

    const submitHandle = async (e) => {
        e.preventDefault();

        if (patient !== "" && bloodPressure !== "" && temperature !== "" && pulse !== "" && weight !== "" && height !== "") {
            const addedData = {
                patient : patient,
                bloodPressure : bloodPressure,
                temperature : temperature,
                pulse : pulse,
                weight : weight,
                height : height
            };
            await addDocument(addedData);
            toast.success("Lab. Results Added Successfully");
            navigate("/nurse/labresults");
        } else {
            toast.error("Please Enter All Required Information");
        }
    };

    
    return (
        <div className="mx-[20%] p-3 bg-purple-300 rounded-lg shadow-xl">
            <h2 className="text-2xl pl-3 font-bold pb-1 border-b-4 border-gray-500">Add Lab. Result</h2>
            <form onSubmit={submitHandle} className="py-5 pl-3 flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1">Patient <span className="text-red-500">*</span></label>
                    <select onChange={(e) => { setPatient(e.target.value); }} className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl">
                        {documents && documents.map((document) => (
                            <option key={document.id} value={document.displayName}>{document.displayName}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="blood">Blood Pressure  <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setBloodPressure(e.target.value); }} value={bloodPressure} type="text" id="blood" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Blood Pressure" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="temperature">Temperature (Degree)  <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setTemperature(e.target.value); }} value={temperature} type="text" id="temperature" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Temperature" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="pulse">Pulse  <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setPulse(e.target.value); }} value={pulse} type="text" id="pulse" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Pulse" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="weight">Weight (kg)  <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setWeight(e.target.value); }} value={weight} type="text" id="weight" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Weight" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="height">Height (cm)  <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setHeight(e.target.value); }} value={height} type="text" id="height" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Height" />
                </div>

               {!pending && <button className="text-white font-semibold bg-purple-700 p-2 w-1/4 transition-all rounded hover:bg-purple-500">Add Lab. Result</button>}
               {pending && <button className="text-white font-semibold bg-purple-500 p-2 w-1/4 rounded">Waiting</button>}
            </form>
        </div>
    );
}

export default AddLabresult;