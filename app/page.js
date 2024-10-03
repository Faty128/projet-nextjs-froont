"use client";

import { children, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirige vers la page de connexion
    router.push('/login');

  }, [router]);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, padding: '20px' }}>
      {/* {children} */}
    {/* <Sidebar/ >
    <Navbar/ > */}
    </div>
    </div>
  );
}
