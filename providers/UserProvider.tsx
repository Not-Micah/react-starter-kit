"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { Auth, User } from "firebase/auth";

import { initializeFirebase, getUserAuth } from "@/utils/databaseFunctions";
import { getUser } from "@/utils/userFunctions";

// Context Type Definition
type UserContextType = {
  user: User | null | undefined;
  userData: DocumentData | null | undefined;
};

// Creating User Context
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [key: string]: any;
}

export const UserContextProvider = ({ children, ...props }: Props) => {
  const app = initializeFirebase();
  const auth = getUserAuth(true);
  
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [userData, setUserData] = useState<DocumentData | null | undefined>(
    undefined
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      setUser(firebaseUser);
      setUserData(firebaseUser ? await getUser(firebaseUser.uid) : null);
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <UserContext.Provider value={{ user, userData }} {...props}>
      {children}
    </UserContext.Provider>
  );
};

// Hook For Accessing User Context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUser must be used within a UserContextProvider");
  return context;
};
