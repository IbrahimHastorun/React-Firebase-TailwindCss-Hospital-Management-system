import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useGetCurrentUserInfo } from "../hooks/useGetCurrentUserInfo";
import { useUser } from "../hooks/useUser";
import toast from "react-hot-toast";

const Profile = () => {
    const { currentUserInfo } = useGetCurrentUserInfo();
    
    const [displayName , setDisplayName] = useState("");
    const [phone , setPhone] = useState("");
    const [password , setPassword] = useState("");
    const [passwordAgain , setPasswordAgain] = useState("");

    const { pending , updateUser , updateUserPassword } = useUser();

    const submitHandle = async (e) => {
        e.preventDefault();

        if (displayName === "") {
            setDisplayName(currentUserInfo.displayName);
        }

        if (phone === "") {
            setPhone(currentUserInfo.phone);
        }

        await updateUser(displayName , phone);
    };

    const submitPasswordUpdate = async (e) => {
        e.preventDefault();

        if (password !== "" && passwordAgain !== "") {
            if (password === passwordAgain) {
                await updateUserPassword(password);
                setPassword("");
                setPasswordAgain("");
            } else {
                toast.error("Make sure that the entered passwords are equal");
            }
        } else {
            toast.error("Please Enter All Required Information");
        }
    };

    return (
        <div className="flex flex-col gap-y-8">
            <div className="mx-[20%] p-3 bg-purple-300 rounded-lg shadow-xl">
                <h2 className="text-2xl pl-3 font-bold pb-1 border-b-4 border-gray-500 flex items-center gap-x-1"><FiSettings size={"30px"} /> Update Profile</h2>
                <form onSubmit={submitHandle} className="py-5 pl-3 flex flex-col gap-y-5">
                    <div className="flex items-center gap-x-2">
                        <label className="text-lg font-medium pl-1 basis-1/6" htmlFor="name">Name : </label>
                        <input onChange={(e) => { setDisplayName(e.target.value); }} value={displayName === "" ? currentUserInfo && currentUserInfo.displayName : displayName} type="text" id="name" className="p-2 bg-white basis-5/6 text-gray-500 outline-none rounded text-xl" placeholder="Name" />
                    </div>

                    <div className="flex items-center gap-x-2">
                        <label className="text-lg font-medium pl-1 basis-1/6" htmlFor="phone">Phone : </label>
                        <input onChange={(e) => { setPhone(e.target.value); }} value={phone === "" ? currentUserInfo && currentUserInfo.phone : phone} type="text" id="phone" className="p-2 bg-white basis-5/6 text-gray-500 outline-none rounded text-xl" placeholder="Phone" />
                    </div>

                    {!pending && <button className="text-white font-semibold bg-purple-700 p-2 w-1/4 transition-all rounded hover:bg-purple-500">Update Profile</button>}
                    {pending && <button className="text-white font-semibold bg-purple-500 p-2 w-1/4 rounded">Waiting</button>}
                </form>
            </div>

            <div className="mx-[20%] p-3 bg-purple-300 rounded-lg shadow-xl">
                <h2 className="text-2xl pl-3 font-bold pb-1 border-b-4 border-gray-500 flex items-center gap-x-1"><RiLockPasswordFill size={"30px"} /> Change Password</h2>
                <form onSubmit={submitPasswordUpdate} className="py-5 pl-3 flex flex-col gap-y-5">
                    <div className="flex items-center gap-x-2">
                        <label className="text-lg font-medium pl-1 basis-1/4" htmlFor="newpass">New Password : </label>
                        <input onChange={(e) => { setPassword(e.target.value); }} value={password} type="password" id="newpass" className="p-2 bg-white basis-3/4 text-gray-500 outline-none rounded text-xl" placeholder="New Password" />
                    </div>

                    <div className="flex items-center gap-x-2">
                        <label className="text-lg font-medium pl-1 basis-1/4" htmlFor="newpassagain">New Password Again : </label> 
                        <input onChange={(e) => { setPasswordAgain(e.target.value); }} value={passwordAgain} type="password" id="newpassagain" className="p-2 bg-white basis-3/4 text-gray-500 outline-none rounded text-xl" placeholder="New Password Again" />
                    </div>

                    {!pending && <button className="text-white font-semibold bg-purple-700 p-2 w-1/4 transition-all rounded hover:bg-purple-500">Change Password</button>}
                    {pending && <button className="text-white font-semibold bg-purple-500 p-2 w-1/4 rounded">Waiting</button>}
                </form>
            </div>
        </div>
    );
}

export default Profile;