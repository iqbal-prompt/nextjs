"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button, Input } from "../components/UIComponents"
import Link from "next/link"

export default function Page() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    const handleLogin = async () => {
        console.log("Allohuakbarr")
        const res = await fetch("https://vjb0sm07-4000.asse.devtunnels.ms/api/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })

        const data = await res.json()
        
        if(res.ok && data.success) {
          router.push('/dashboard');
          alert("Login Berhasil" + data.success);
          console.log("Login Berhasil");
          
        } else {
          console.log("Gagal login....")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-[85%] flex flex-col gap-6 max-w-[330px]">
                <h1 className="text-center font-bold text-3xl">Login disini</h1>
                <Input placeholder="Masukkan username" onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder="Masukkan sandi" type="password" onChange={(e) => setPassword(e.target.value)} />
                <Button text="Login" onClick={handleLogin} />
                <div className="text-center">
                    <Link href="/daftar">
                        <span className="font-bold text-blue-400 hover:underline">Daftar disini</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
