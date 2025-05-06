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
        credentials: 'include',
        headers: {
            Cookie: context.req.headers.cookie || ""
        },
    });

    const data = await res.json();

    if(!res.ok || !data.success) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },   
        }
    }

    return {
        props: {
            user: data.email || "email",
        }
    }
}