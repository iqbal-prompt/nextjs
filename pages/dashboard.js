import React from "react";  

export default function Dashboard({ user }) {
    return (
        <div className="">
            INI ADALAH HALAMAN DASHBOARD<br></br>
            selamat datang {user}
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch("https://vjb0sm07-4000.asse.devtunnels.ms/api/protected", {
        method: 'GET',
        headers: {
            Cookie: context.req.headers.cookie || ""
        },
    });
    console.log(res);
    if(!res.ok) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },   
        }
    }
    const data = await res.json();
    return {
        props: {
            user: data.email || "email",
        }
    }
}