import { useState } from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";
import toast from "react-hot-toast";

const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    
    const { pending , login } = useCurrentUser();

    const submitHandle = async (e) => {
        e.preventDefault();

        if (email !== "" && password !== "") {
            await login(email , password);
        } else {
            toast.error("Please Enter All Required Information");
        }
    };

    return (
        <div className="bg-login-backgroundImage bg-no-repeat bg-cover h-screen flex items-center justify-center">
            <div className="p-10 bg-gray-800 rounded-md">
                <div className="flex items-center flex-col gap-y-3 mb-6">
                    <h1 className="text-4xl text-white">Moon Hospital Management Panel</h1>
                    <span className="text-gray-500 text-xl">by İbrahim Hastorun</span>
                </div>

                <form onSubmit={submitHandle} className="flex flex-col gap-y-4">
                    <input onChange={(e) => { setEmail(e.target.value); }} value={email} type="email" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="example@gmail.com" />
                    <input onChange={(e) => { setPassword(e.target.value); }} value={password} type="password" className="p-2 bg-white text-gray-500 w-full outline-none rounded text-xl" placeholder="Password" />
                    {!pending && <button className="text-white font-semibold bg-purple-700 p-2 w-2/4 transition-all rounded hover:bg-purple-500">Login</button>}
                    {pending && <button disabled={true} className="text-white font-semibold bg-purple-500 p-2 w-2/4 rounded">Waiting</button>}
                </form>
            </div>
        </div>
    );
}

export default Login;