import { MdLocalPolice } from "react-icons/md";
import { FaUserDoctor , FaUserNurse } from "react-icons/fa6";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useGetCurrentUserInfo } from "../hooks/useGetCurrentUserInfo";

const Navbar = () => {
    const { pending , logout } = useCurrentUser();
    const { currentUserInfo } = useGetCurrentUserInfo();

    return (
        <div className="p-3 bg-white flex items-center justify-between">
            {currentUserInfo && currentUserInfo.role === "admin" && <h2 className="flex items-center gap-x-1 text-purple-700 text-3xl"><MdLocalPolice size={"35px"} /> Admin</h2>}
            {currentUserInfo && currentUserInfo.role === "doctor" && <h2 className="flex items-center gap-x-1 text-purple-700 text-3xl"><FaUserDoctor size={"35px"} /> Doctor</h2>}
            {currentUserInfo && currentUserInfo.role === "nurse" && <h2 className="flex items-center gap-x-1 text-purple-700 text-3xl"><FaUserNurse size={"35px"} /> Nurse</h2>}
        
            <div className="flex items-center gap-x-2">
                <p className="text-xl">{currentUserInfo && currentUserInfo.displayName}</p>
                {!pending && <button onClick={logout} className="text-white font-semibold bg-purple-700 py-1 px-2 transition-all rounded hover:bg-purple-500">Logout</button>}
                {pending && <button disabled={true} className="text-white font-semibold bg-purple-500 py-1 px-2 rounded">Waiting</button>}
            </div>
        </div>
    );
}

export default Navbar;