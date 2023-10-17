import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirestore } from "../../../hooks/useFirestore";
import toast from "react-hot-toast";

const Addbed = () => {
    const [bedName, setBedName] = useState("");

    const navigate = useNavigate();
    const { pending , addDocument } = useFirestore("beds");

    const submitHandle = async (e) => {
        e.preventDefault();
        
        if (bedName !== "") {
            const addedData = {
                bedName : bedName
            };
            await addDocument(addedData);
            toast.success("Bed Added Successfully");
            navigate("/nurse/addbed");
        } else {
            toast.error("Please Enter All Required Information");
        }
    };

    return (
        <div className="mx-[20%] p-3 bg-purple-300 rounded-lg shadow-xl">
            <h2 className="text-2xl pl-3 font-bold pb-1 border-b-4 border-gray-500">Add Bed</h2>
            <form onSubmit={submitHandle} className="py-5 pl-3 flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                    <label className="text-lg font-medium pl-1" htmlFor="bed">Bed Name  <span className="text-red-500">*</span></label>
                    <input onChange={(e) => { setBedName(e.target.value); }} value={bedName} type="text" id="bed" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Bed Name" />
                </div>

                {!pending && <button className="text-white font-semibold bg-purple-700 p-2 w-1/4 transition-all rounded hover:bg-purple-500">Add Bed</button>}
                {pending && <button className="text-white font-semibold bg-purple-500 p-2 w-1/4 rounded">Waiting</button>}
            </form>
        </div>
    );
}

export default Addbed;