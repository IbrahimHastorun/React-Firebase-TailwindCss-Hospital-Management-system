import { useCollection } from "../../hooks/useCollection";
import { useGetCurrentUserInfo } from "../../hooks/useGetCurrentUserInfo";
import AdminHome from "./AdminHome";
import DoctorHome from "./DoctorHome";
import NurseHome from "./NurseHome";


const Home = () => {
    const { currentUserInfo } = useGetCurrentUserInfo();
    const { documents } = useCollection("patients");
    const bedAllocationData = useCollection("bedallocation");

    return (
        <div className="grid grid-cols-4 gap-5">
            {currentUserInfo && currentUserInfo.role === "admin" && <AdminHome patients={documents} bedAllocationData={bedAllocationData} />}
            {currentUserInfo && currentUserInfo.role === "doctor" && <DoctorHome patients={documents} bedAllocationData={bedAllocationData} />}
            {currentUserInfo && currentUserInfo.role === "nurse" && <NurseHome patients={documents} bedAllocationData={bedAllocationData} />}
        </div>
    );
}

export default Home;