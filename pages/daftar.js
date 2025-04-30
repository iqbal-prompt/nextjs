import { Button, Input } from "../components/UIComponents"

export default function Daftar() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w=[85%] flex flex-col gap-6 w-100">
            <h1 className="text-4xl text-center font-bold">Daftar disini</h1>
                <Input placeholder="Nama kamu"/>
                <Input placeholder="Buat password"/>
                <Button text="Daftar"/>
            </div>
        </div> 
    );
}