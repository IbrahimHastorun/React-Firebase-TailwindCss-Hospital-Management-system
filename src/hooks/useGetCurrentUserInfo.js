import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export const useGetCurrentUserInfo = () => {
    const [currentUserInfo , setCurrentUserInfo] = useState("");

    const { currentUser } = useAuthContext();

    useEffect(() => {
        const documentRef = doc(db , "users" , currentUser.uid);

        const getCurrentUserInfo = onSnapshot(documentRef , (doc) => {
            setCurrentUserInfo({...doc.data() , id : doc.id});
        });

        return () => {
            getCurrentUserInfo();
        };
    }, [currentUser.uid]);

    return {
        currentUserInfo
    };
};