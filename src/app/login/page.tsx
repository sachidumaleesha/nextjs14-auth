"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {

  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try{
        setLoading(true)
        const response = await axios.post('/api/users/login', user)
        console.log("Login Success", response.data)
        toast.success("Login Success")
        router.push('/profile')
    }
    catch(error:any){
        console.log("Login Failed", error.message)
        toast.error(error.message)
    }
    finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1>{loading ? "Processing" : "Login"}</h1>
      <hr />

      {/* email */}
      <label htmlFor="email">email</label>
      <input
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      {/* password */}
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button onClick={onLogin}>{buttonDisabled ? "No Login" : "Login"}</button>
      <Link href="/signup">Singup</Link>
    </div>
  );
}
