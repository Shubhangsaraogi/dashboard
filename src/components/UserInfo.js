"use client";

import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";
import Dashboard from "./Dashboard";
import Login from "./Login";

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
       <>
       <Dashboard/>
       
       </>
    );
  } else {
    return <Login />;
  }
}
