import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";
import toast from "react-hot-toast";

export const useFirestore = (collectionName) => {
    const [pending , setPending] = useState(false);

    const collectionRef = collection(db , collectionName);

    const addDocument = async (addedData) => {
        setPending(true);

        try {
            await addDoc(collectionRef , addedData);
            setPending(false);
        } catch (error) {
            toast.error("System Error Please Try Again Later");
            setPending(false);
        }
    };

    const deleteDocument = async (docId) => {
        setPending(true);

        try {
            await deleteDoc(doc(db , collectionName , docId));
            setPending(false);
        } catch (error) {
            toast.error("System Error Please Try Again Later");
            setPending(false);
        }
    };

    return {
        pending,
        addDocument,
        deleteDocument
    };
};