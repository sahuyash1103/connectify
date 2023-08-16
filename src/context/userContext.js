"use client";
import { createContext } from "react";

import { usePathname, useRouter } from "next/navigation";
import { getUserData } from "@/utils/http-service";
import { useState, useEffect } from "react";

export const UserContext = createContext({});

export const StateProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    getUserData().then((res) => {
      if (res?.status === 200) setUserData(res?.data);
      else {
        console.log("[server]: ", res?.data);
        if (pathname === "/login" || pathname === "/signup") return;
        router.push("/login");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
