import { Button, FlexBox, Input } from "../components/UIComponents"
export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" w-[85%] flex flex-col gap-6 max-w-100">
      <h1 className="text-center font-bold text-4xl">Login disini</h1>
          <Input placeholder="Masukkan username"/>
          <Input placeholder="Masukkan sandi" type="password"/>
          <Button text="Login"/>
      </div>
    </div>
  );
}