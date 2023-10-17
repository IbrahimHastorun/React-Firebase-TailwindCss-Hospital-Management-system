import AddOperation from "./components/doctor/operations/AddOperation";
import AddPatient from "./components/AdminDoctorNurse/AddPatient";
import OperationLayout from "./components/doctor/operations/OperationLayout";
import Operations from "./components/doctor/operations/Operations";
import PatientLayout from "./components/AdminDoctorNurse/PatientLayout";
import Patients from "./components/AdminDoctorNurse/Patients";
import Page404 from "./components/Page404";
import AddDepartment from "./components/admin/departments/AddDepartment";
import DepartmentLayout from "./components/admin/departments/DepartmentLayout";
import Departments from "./components/admin/departments/Departments";
import AddDoctor from "./components/admin/doctors/AddDoctor";
import DoctorLayout from "./components/admin/doctors/DoctorLayout";
import Doctors from "./components/admin/doctors/Doctors";
import AddNurse from "./components/admin/nurses/AddNurse";
import NurseLayout from "./components/admin/nurses/NurseLayout";
import Nurses from "./components/admin/nurses/Nurses";
import HomeLayout from "./pages/HomeLayout";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import AppointmentLayout from "./components/doctor/appointments/AppointmentLayout";
import Appointments from "./components/doctor/appointments/Appointments";
import AddAppointment from "./components/doctor/appointments/AddAppointment";
import Labresults from "./components/nurse/labresults/Labresults";
import LabresultLayout from "./components/nurse/labresults/LabresultLayout";
import AddLabresult from "./components/nurse/labresults/AddLabresult";
import AddbedLayout from "./components/nurse/addbed/AddbedLayout";
import Beds from "./components/nurse/addbed/Beds";
import Addbed from "./components/nurse/addbed/Addbed";
import BedallocationLayout from "./components/DoctorNurse/BedallocationLayout";
import AddBedallocation from "./components/DoctorNurse/AddBedallocation";
import Bedallocation from "./components/DoctorNurse/Bedallocation";
import Profile from "./components/Profile";
import AuthRoute from "./components/AuthRoute";
import NoAuthRoute from "./components/NoAuthRoute";

const routes = [
    {
        path : "/",
        name : "home",
        element : <HomeLayout />,
        auth : true,
        children : [
            {
                index : true,
                name : "index",
                element : <Home />,
                auth : true
            },

            {
                path : "patients",
                name : "patients",
                element : <PatientLayout />,
                auth : true,
                children : [
                    {
                        index : true,
                        name : "index",
                        element : <Patients />,
                        auth : true
                    },

                    {
                        path : "add",
                        name : "add",
                        element : <AddPatient />,
                        auth : true
                    }
                ]
            },

            {
                path : "bedallocation",
                name : "bedallocation",
                element : <BedallocationLayout />,
                auth : true,
                children : [
                    {
                        index : true,
                        name : "index",
                        element : <Bedallocation />,
                        auth : true
                    },

                    {
                        path : "add",
                        name : "add",
                        element : <AddBedallocation />,
                        auth : true
                    }
                ]
            },

            {
                path : "profile",
                name : "profile",
                element : <Profile />,
                auth : true
            },

            {
                path : "admin/departments",
                name : "departments",
                element : <DepartmentLayout />,
                auth : true,
                children : [
                    {
                        index : true,
                        name : "index",
                        element : <Departments />,
                        auth : true
                    },

                    {
                        path : "add",
                        name : "add",
                        element : <AddDepartment />,
                        auth : true
                    }
                ]
            },

            {
                path : "admin/doctors",
                name : "doctors",
                element : <DoctorLayout />,
                auth : true,
                children : [
                    {
                        index : true,
                        name : "index",
                        element : <Doctors />,
                        auth : true
                    },

                    {
                        path : "add",
                        name : "add",
                        element : <AddDoctor />,
                        auth : true
                    }
                ]
            },

            {
                path : "admin/nurses",
                name : "nurses",
                element : <NurseLayout />,
                auth : true,
                children : [
                    {
                        index : true,
                        name : "index",
                        element : <Nurses />,
                        auth : true
                    },

                    {
                        path : "add",
                        name : "add",
                        element : <AddNurse />,
                        auth : true
                    }
                ]
            },

            {
                path : "admin/operations",
                name : "operations",
                element : <Operations deleteMode={false} />,
                auth : true
            },

            {
                path : "doctor/operations",
                name : "operations",
                element : <OperationLayout />,
                auth : true,
                children : [
                    {
                        index : true,
                        name : "index",
                        element : <Operations deleteMode={true} />,
                        auth : true
                    },

                    {
                        path : "add",
                        name : "add",
                        element : <AddOperation />,
                        auth : true
                    }
                ]
            },

            {
                path : "doctor/appointments",
                name : "appointments",
                element : <AppointmentLayout />,
                auth : true,
                children : [
                    {
                        index : true,
                        name : "index",
                        element : <Appointments />,
                        auth : true
                    },

                    {
                        path : "add",
                        name : "add",
                        element : <AddAppointment />,
                        auth : true
                    }
                ]
            },

            {
                path : "doctor/labresults",
                name : "labresults",
                element : <Labresults deleteMode={false} />,
                auth : true
            },

            {
                path : "nurse/labresults",
                name : "labresults",
                element : <LabresultLayout />,
                auth : true,
                children : [
                    {
                        index : true,
                        name : "index",
                        element : <Labresults deleteMode={true} />,
                        auth : true
                    },

                    {
                        path : "add",
                        name : "add",
                        element : <AddLabresult />,
                        auth : true
                    }
                ]
            },

            {
                path : "nurse/addbed",
                name : "addbed",
                element : <AddbedLayout />,
                auth : true,
                children : [
                    {
                        index : true,
                        name : "index",
                        element : <Beds />,
                        auth : true
                    },

                    {
                        path : "add",
                        name : "add",
                        element : <Addbed />,
                        auth : true
                    }
                ]
            }
        ]
    },

    {
        path : "/auth",
        name : "login",
        element : <Login />
    },

    {
        path : "*",
        name : "notFound",
        element : <Page404 />
    }
];

const authControl = (routes) => {
    routes.map((route) => {
        if (route.auth) {
            route.element = <AuthRoute>{route.element}</AuthRoute>
        }

        if (route.children) {
            route.children = authControl(route.children);
        }

        if (route.path === "/auth") {
            route.element = <NoAuthRoute>{route.element}</NoAuthRoute>
        }

        return route;
    });

    return routes;
};

export default authControl(routes);