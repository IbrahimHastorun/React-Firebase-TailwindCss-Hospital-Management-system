import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCollection } from "../../../hooks/useCollection";
import { useFirestore } from "../../../hooks/useFirestore";
import { useGetCurrentUserInfo } from "../../../hooks/useGetCurrentUserInfo";
import toast from "react-hot-toast";

const AddAppointment = () => {
    const [patient , setPatient] = useState("");
    const [date , setDate] = useState("");
    const [time , setTime] = useState("");

    const navigate = useNavigate();
    const { currentUserInfo } = useGetCurrentUserInfo();
    const { documents } = useCollection("patients");
    const { pending , addDocument } = useFirestore("appointments");

    const submitHandle = async (e) => {
        e.preventDefault();

        if (patient !== "" && date !== "" && time !== "") {
            const addedData = {
                patient : patient,
                doctor : currentUserInfo.displayName,
                date : date,
                time : time
            };
            await addDocument(addedData);
            toast.success("Appointment Added Successfully");
            navigate("/doctor/appointments");
        } else {
            toast.error("Please Enter All Required Information");
        }
    };

    return (
        <div className="mx-[20%] p-3 bg-purple-300 rounded-lg shadow-xl">
            <h2 className="text-2xl pl-3 font-bold pb-1 border-b-4 border-gray-500">Add Appointment</h2>
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
                    <label className="text-lg font-medium pl-1" htmlFor="date">Date <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setDate(e.target.value); }} value={date} type="date" id="date" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1">Time <span className="text-red-500">*</span></label>
                    <select onChange={(e) => { setTime(e.target.value); }} value={time} className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl">
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 AM">12:00 AM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                    </select>
                </div>

                {!pending && <button className="text-white font-semibold bg-purple-700 p-2 w-1/4 transition-all rounded hover:bg-purple-500">Add Appointment</button>}
                {pending && <button className="text-white font-semibold bg-purple-500 p-2 w-1/4 rounded">Waiting</button>}
            </form>
        </div>
    );
}

export default AddAppointment;