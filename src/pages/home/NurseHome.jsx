import labResultImg from "../../img/labresultimg.jpeg";
import patientImg from "../../img/patinetimg.jpeg";
import bedImg from "../../img/bedimg.jpeg";
import { useCollection } from "../../hooks/useCollection";

const NurseHome = ({ patients , bedAllocationData }) => {
    const { documents } = useCollection("labresults");

    return (
        <>
            <div className="pl-3 pt-3 pb-5 pr-5 border border-b-4 rounded border-b-purple-700 shadow-lg flex items-center">
                <div className="flex-1 flex flex-col gap-y-1">
                    <strong className="text-2xl text-purple-700">{documents && documents.length}</strong>
                    <p className="text-xl text-purple-400">Lab. Result</p>
                </div>
                <div className="flex-1">
                    <img src={labResultImg} alt="" />
                </div>
            </div>

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

export default NurseHome;