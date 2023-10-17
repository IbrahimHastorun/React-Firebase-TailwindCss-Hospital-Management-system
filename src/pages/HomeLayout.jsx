import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const HomeLayout = () => {
    return (
        <div className="flex">
            <div className="basis-1/6"><Sidebar /></div>

            <div className="basis-5/6">
                <Navbar />
                <div id="home-layout-outlet" className="my-3 mx-2 bg-white rounded-md p-4"><Outlet /></div>
            </div>
        </div>
    )
}

export default HomeLayout