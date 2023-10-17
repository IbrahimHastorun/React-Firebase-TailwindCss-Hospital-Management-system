import patientImg from "../../img/patinetimg.jpeg";
import doctorImg from "../../img/doctorimg.jpeg";
import nurseImg from "../../img/nurseimg.jpeg";
import bedImg from "../../img/bedimg.jpeg";
import { useCollection } from "../../hooks/useCollection";

const AdminHome = ({ patients , bedAllocationData }) => {
    const doctorData = useCollection("users" , ["role" , "==" , "doctor"]);
    const nurseData = useCollection("users" , ["role" , "==" , "nurse"]);

    return (
        <>
            <div className="pl-3 pt-3 pb-5 pr-5 border border-b-4 rounded border-b-purple-700 shadow-lg flex items-center">
                <div className="flex-1 flex flex-col gap-y-1">
                    <strong className="text-2xl text-purple-700">{patients && patients.length}</strong>
                    <p className="text-xl text-purple-400">Patient</p>
                </div>
                <div className="flex-1">
                    <img src={patientImg} alt="" />
                </div>
            </div>

            <div className="pl-3 pt-3 pb-5 pr-5 border border-b-4 rounded border-b-purple-700 shadow-lg flex items-center">
                <div className="flex-1 flex flex-col gap-y-1">
                    <strong className="text-2xl text-purple-700">{doctorData && doctorData.documents && doctorData.documents.length}</strong>
                    <p className="text-xl text-purple-400">Doctor</p>
                </div>
                <div className="flex-1">
                    <img src={doctorImg} alt="" />
                </div>
            </div>

            <div className="pl-3 pt-3 pb-5 pr-5 border border-b-4 rounded border-b-purple-700 shadow-lg flex items-center">
                <div className="flex-1 flex flex-col gap-y-1">
                    <strong className="text-2xl text-purple-700">{nurseData && nurseData.documents && nurseData.documents.length}</strong>
                    <p className="text-xl text-purple-400">Nurse</p>
                </div>
                <div className="flex-1">
                    <img src={nurseImg} alt="" />
                </div>
            </div>

            <div className="pl-3 pt-3 pb-5 pr-5 border border-b-4 rounded border-b-purple-700 shadow-lg flex items-center">
                <div className="flex-1 flex flex-col gap-y-1">
                    <strong className="text-2xl text-purple-700">{bedAllocationData && bedAllocationData.documents && bedAllocationData.documents.length}</strong>
                    <p className="text-xl text-purple-400">Bed</p>
                </div>
                <div className="flex-1">
                    <img src={bedImg} alt="" />
                </div>
            </div>
        </>
    );
}

export default AdminHome;