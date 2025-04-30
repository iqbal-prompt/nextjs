import { Button, Input } from "../components/UIComponents"
import Link from "next/link"

export default function Daftar() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-[85%] flex flex-col gap-6 max-w-[330px]">
            <h1 className="text-3xl text-center font-bold">Daftar disini</h1>
                <Input placeholder="Nama kamu"/>
                <Input placeholder="Buat password"/>
                <Button text="Daftar"/>
                <div className="text-center">
                    <Link href="/">
                        <span className="font-bold text-blue-400 hover:underline">Login disini</span>
                    </Link>
                </div>
            </div>
        </div> 
    );
}