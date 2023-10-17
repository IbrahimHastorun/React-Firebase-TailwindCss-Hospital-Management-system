import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";
import toast from "react-hot-toast";
import { serverTimestamp } from "firebase/firestore";

const AddPatient = () => {
    const [displayName , setDisplayName] = useState("");
    const [phone , setPhone] = useState("");
    const [gender , setGender] = useState("");
    const [age , setAge] = useState("");
    const [bloodGroup , setBloodGroup] = useState("");

    const navigate = useNavigate();
    const { pending , addDocument } = useFirestore("patients");

    const submitHandle = async (e) => {
        e.preventDefault();

        if (displayName !== "" && phone !== "" && gender !== "" && age !== "" && bloodGroup !== "") {
            const addedData = {
                displayName : displayName,
                phone : phone,
                gender : gender,
                age : age,
                bloodGroup : bloodGroup,
                date : serverTimestamp()
            };
            await addDocument(addedData);
            toast.success("Patient Added Successfully");
            navigate("/patients");
        } else {
            toast.error("Please Enter All Required Information");
        }
    };

    return (
        <div className="mx-[20%] p-3 bg-purple-300 rounded-lg shadow-xl">
            <h2 className="text-2xl pl-3 font-bold pb-1 border-b-4 border-gray-500">Add Patient</h2>
            <form onSubmit={submitHandle} className="py-5 pl-3 flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="patients">Patients Name Surname<span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setDisplayName(e.target.value); }} value={displayName} type="text" id="patients" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Patients Name Surname" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="phone">Phone <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setPhone(e.target.value); }} value={phone} type="text" id="phone" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Phone" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1">Gender <span className="text-red-500">*</span></label>
                    <select onChange={(e) => { setGender(e.target.value); }} className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl">
                        <option value="woman">Woman</option>
                        <option value="male">Male</option>
                    </select>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="age">Age <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setAge(e.target.value); }} value={age} type="number" min="1" max="99" id="age" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Age" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1">Blood Group <span className="text-red-500">*</span></label>
                    <select onChange={(e) => { setBloodGroup(e.target.value); }} className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl">
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="0+">0+</option>
                        <option value="0-">0-</option>
                    </select>
                </div>

                {!pending && <button className="text-white font-semibold bg-purple-700 p-2 w-1/4 transition-all rounded hover:bg-purple-500">Add Patient</button>}
                {pending && <button className="text-white font-semibold bg-purple-500 p-2 w-1/4 rounded">Waiting</button>}
            </form>
        </div>
    );
}

export default AddPatient;