"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function profile() {
  const router = useRouter();
  const [data, setData] = useState("nothing")
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id)
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl">Profile</h1>
      <h2>{data === 'nothing'? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>

      <button className="bg-yellow-400 px-2 py-2 rounded-lg mb-2" onClick={getUserDetails}>
        getUserDetails
      </button>

      <button className="bg-green-400 px-2 py-2 rounded-lg" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
