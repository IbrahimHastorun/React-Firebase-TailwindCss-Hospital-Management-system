import { useCollection } from "../../../hooks/useCollection";

const Doctors = () => {
    const {pending , documents } = useCollection("users" , ["role" , "==" , "doctor"]);
    let order = 0;

    return (
        <table className="w-full">
            <thead>
                <tr className="bg-purple-700 w-full text-white">
                    <th className="p-3 text-lg">#</th>
                    <th className="p-3 text-lg">Name</th>
                    <th className="p-3 text-lg">Department</th>
                    <th className="p-3 text-lg">Phone</th>
                    <th className="p-3 text-lg">Email</th>
                </tr>
            </thead>

            <tbody>
                {pending && <tr><td colSpan="5" className="text-center p-3 bg-white text-2xl">Loading...</td></tr>}
                {documents && documents.length === 0 && <tr><td colSpan="5" className="text-center p-3 bg-white text-2xl shadow-lg">No Doctor to Show</td></tr>}
                {documents && documents.map((document) => {
                    order++;
                    return (
                        <tr key={document.id} className="text-center bg-white border-b-2 hover:bg-gray-300">
                            <td className="p-3 text-lg">{order}</td>
                            <td className="p-3 text-lg">{document.displayName}</td>
                            <td className="p-3 text-lg">{document.department}</td>
                            <td className="p-3 text-lg">{document.phone}</td>
                            <td className="p-3 text-lg">{document.email}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Doctors;