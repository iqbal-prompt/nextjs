import { Button, FlexBox, Input } from "../components/UIComponents"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" w-[85%] flex flex-col gap-6 max-w-[330px]">
      <h1 className="text-center font-bold text-4xl">Login disini</h1>
          <Input placeholder="Masukkan username"/>
          <Input placeholder="Masukkan sandi" type="password"/>
          <Button text="Login"/>
          <div className="text-center">
            <Link href="/daftar">
              <span className="font-bold text-blue-400 hover:underline">Daftar disini</span>
            </Link>
          </div>
      </div>
    </div>
  );
}