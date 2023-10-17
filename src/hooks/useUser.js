import { createUserWithEmailAndPassword ,  updatePassword,  updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../firebase/config";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export const useUser = () => {
    const [pending , setPending] = useState(false);

    const addUser = async (email , password , displayName , addedData) => {
        setPending(true);

        try {
            const response = await createUserWithEmailAndPassword(auth , email , password);

            await updateProfile(response.user , {
                displayName : displayName
            });

            const documentRef = doc(db , "users" , response.user.uid);
            await setDoc(documentRef , addedData);
            
            setPending(false);
        } catch (error) {
            console.log(error.code);
            setPending(false);
        }
    };

    const updateUser = async (displayName , phone) => {
        setPending(true);

        try {
            await updateProfile(auth.currentUser , {
                displayName : displayName
            });
            await updateDoc(doc(db , "users" , auth.currentUser.uid) , {
                displayName : displayName,
                phone : phone
            });
            toast.success("Profile Updated Successfully");
            setPending(false);
        } catch (error) {
            console.log(error.code);
            setPending(false);
        }
    };

    const updateUserPassword = async (newPassword) => {
        setPending(true);

        try {
            await updatePassword(auth.currentUser , newPassword);
            toast.success("Password Updated Successfully");
            setPending(false);
        } catch (error) {
            switch (error.code) {
                case "auth/requires-recent-login":
                    toast.error("Please Log Out and Log In and Try Again");
                    setPending(false);
                break;
            
                default:
                    setPending(false);
                break;
            }
        }
    };

    return {
        pending,
        addUser,
        updateUser,
        updateUserPassword
    };
};