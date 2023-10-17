import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";
import toast from "react-hot-toast";

export const useCollection = (collectionName , _condition , _orderBy) => {
    const [pending , setPending] = useState(false);
    const [documents , setDocuments] = useState(null);

    const condition = useRef(_condition).current;
    const orderBy = useRef(_orderBy).current;

    useEffect(() => {
        setPending(true);
        let collectionRef = collection(db , collectionName);

        if (condition) {
            collectionRef = query(collectionRef , where(...condition));
        }

        if (orderBy) {
            collectionRef = query(collectionRef , where(...orderBy));
        }

        const getDocument = onSnapshot(collectionRef , (docs) => {
            let docArray = [];

            docs.forEach((doc) => {
                docArray.push({...doc.data() , id : doc.id});
            });

            setDocuments(docArray);
            setPending(false);
        } , (error) => {
            toast.error("System Error Please Try Again Later");
            setPending(false);
        });


        return () => {
            getDocument();
        };
    }, [collectionName , condition , orderBy]);

    return {
        pending,
        documents
    };
};