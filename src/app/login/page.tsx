'use client'
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function LoginPage() {

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async() => {

    }

    return(
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1>Login</h1>
            <hr />

            {/* email */}
            <label htmlFor="email">email</label>
            <input type="text" id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="email"/>

            {/* password */}
            <label htmlFor="password">password</label>
            <input type="password" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="password"/>

            <button onClick={onLogin}>Login</button>
            <Link href='/signup'>Singup</Link>
        </div>
    )
}  