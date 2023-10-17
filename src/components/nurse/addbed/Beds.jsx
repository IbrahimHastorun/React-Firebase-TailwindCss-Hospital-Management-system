import { BsFillTrash3Fill } from "react-icons/bs";
import { useCollection } from "../../../hooks/useCollection";
import { useFirestore } from "../../../hooks/useFirestore";
import toast from "react-hot-toast";

const Beds = () => {
    const { pending , documents } = useCollection("beds");
    const { deleteDocument } = useFirestore("beds");
    let order = 0;

    const clickHandle = async (docId) => {
        await deleteDocument(docId);
        toast.success("Bed Deleted Successfully");
    };

    return (
        <table className="w-full">
            <thead>
                <tr className="bg-purple-700 w-full text-white">
                    <th className="p-3 text-lg">#</th>
                    <th className="p-3 text-lg">Bed Name</th>
                    <th className="p-3 text-lg">Options</th>
                </tr>
            </thead>

            <tbody>
                {pending && <tr><td colSpan="3" className="text-center p-3 bg-white text-2xl">Loading...</td></tr>}
                {documents && documents.length === 0 && <tr><td colSpan="3" className="text-center p-3 bg-white text-2xl shadow-lg">No Bed to Show</td></tr>}
                {documents && documents.map((document) => {
                    order++;
                    return (
                        <tr key={document.id} className="text-center bg-white border-b-2 hover:bg-gray-300">
                            <td className="p-3 text-lg">{order}</td>
                            <td className="p-3 text-lg">{document.bedName}</td>
                            <td className="p-3 text-lg flex justify-center"><button onClick={() => { clickHandle(document.id) }} className="py-1 px-3 rounded-md bg-red-600 text-white text-lg flex items-center gap-x-1"><BsFillTrash3Fill /> Sil</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Beds;