import { Button, FlexBox, Input } from "../components/UIComponents"
export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" w-[85%] flex flex-row gap-5 max-w-800">
          <Input placeholder="Masukkan username"/>
          <Input placeholder="Masukkan sandi" type="password"/>
          <Button text="Login"/>
      </div>
    </div>
  );
}