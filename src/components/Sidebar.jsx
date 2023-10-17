import { NavLink } from "react-router-dom";
import { HiOutlineUsers ,  HiOutlineBuildingOffice2} from "react-icons/hi2";
import { MdOutlineDashboardCustomize , MdOutlineAddBusiness } from "react-icons/md";
import { FaUserDoctor , FaBed } from "react-icons/fa6";
import { LiaUserNurseSolid } from "react-icons/lia"
import { IoBandageOutline , IoSettingsSharp } from "react-icons/io5";
import { RiFilePaperLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useGetCurrentUserInfo } from "../hooks/useGetCurrentUserInfo";

const Sidebar = () => {
    const { currentUserInfo } = useGetCurrentUserInfo();

    return (
        <div className="bg-gray-300 h-screen py-3">
            <h3 className="px-5 pb-5 text-4xl text-purple-700">Moon Hospital</h3>
        
            <div id="sidebar" className="flex flex-col gap-y-4 px-5">
                <NavLink to="/" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><MdOutlineDashboardCustomize size={"25px"} /> Dashboard</NavLink>
                <NavLink to="/patients" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><HiOutlineUsers size={"25px"} /> Patients</NavLink>
                {currentUserInfo && currentUserInfo.role === "admin" && <NavLink to="/admin/departments" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><HiOutlineBuildingOffice2 size={"25px"} /> Departments</NavLink>}
                {currentUserInfo && currentUserInfo.role === "admin" && <NavLink to="/admin/doctors" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><FaUserDoctor size={"25px"} /> Doctors</NavLink>}
                {currentUserInfo && currentUserInfo.role === "admin" && <NavLink to="/admin/nurses" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><LiaUserNurseSolid size={"25px"} /> Nurses</NavLink>}
                {currentUserInfo && currentUserInfo.role === "admin" && <NavLink to="/admin/operations" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><IoBandageOutline size={"25px"} /> Operations</NavLink>}
                {currentUserInfo && currentUserInfo.role === "doctor" && <NavLink to="/doctor/appointments" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><AiOutlineClockCircle size={"25px"} /> Appointments</NavLink>}
                {currentUserInfo && currentUserInfo.role === "doctor" && <NavLink to="/doctor/operations" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><IoBandageOutline size={"25px"} /> Operations</NavLink>}
                {currentUserInfo && currentUserInfo.role === "doctor" && <NavLink to="/doctor/labresults" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><RiFilePaperLine size={"25px"} /> Lab. Results</NavLink>}
                {currentUserInfo && currentUserInfo.role === "nurse" && <NavLink to="/nurse/labresults" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><RiFilePaperLine size={"25px"} /> Lab. Results</NavLink>}
                {currentUserInfo && currentUserInfo.role === "nurse" && <NavLink to="/nurse/addbed" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><MdOutlineAddBusiness size={"25px"} /> Add Bed</NavLink>}
                {currentUserInfo && (currentUserInfo.role === "doctor" || currentUserInfo.role === "nurse") && <NavLink to="/bedallocation" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><FaBed size={"25px"} /> Bed Allocation</NavLink>}
                <NavLink to="/profile" className="flex items-center gap-x-2 px-2 py-1 bg-white text-black text-lg rounded-md shadow-xl transition-all hover:bg-purple-700 hover:text-white"><IoSettingsSharp size={"25px"} /> Profile</NavLink>
            </div>
        </div>
    );
}

export default Sidebar;