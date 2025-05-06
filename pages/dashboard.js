import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://vjb0sm07-4000.asse.devtunnels.ms/api/protected", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.email);
        } else {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
        window.location.href = "/";
      });
  }, []);

  return (
    <div>
      INI ADALAH HALAMAN DASHBOARD
      <br />
      {user ? `Selamat datang ${user}` : "Memuat..."}
    </div>
  );
}
