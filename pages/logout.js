import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Logout() {
    const router = useRouter();
    useEffect(() =>{
        const doLogout = async () => {
            await fetch("https://vjb0sm07-4000.asse.devtunnels.ms/api/logout", {
                method: 'POST',
                credentials: 'include'
            });
            router.push("/");
        };
        doLogout();
    }, [router]); 
}