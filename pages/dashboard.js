import React from "react";

export default function Dashboard({ user }) {
  return (
    <div>
      INI ADALAH HALAMAN DASHBOARD
      <br />
      {user ? `Selamat datang ${user}` : "Memuat..."}
    </div>
  );
}

export async function getServerSideProps(context) {
  // Ambil cookie dari request header
  const token = context.req.cookies.token || "";

  // Kirim request ke backend untuk memeriksa token
  const res = await fetch("https://vjb0sm07-4000.asse.devtunnels.ms/api/protected", {
    method: "GET",
    headers: {
      Cookie: `token=${token}`,
    },
  });

  const data = await res.json();

  // Jika token tidak valid, redirect ke halaman login
  if (!res.ok || !data.success) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // Kirim data email pengguna ke halaman
  return {
    props: {
      user: data.email || "email", // Data email pengguna
    },
  };
}
