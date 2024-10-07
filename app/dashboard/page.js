'use client'
import { useEffect, useState } from "react";
import axios from 'axios';
import StatsCard from '../../components/StatsCard';
import HeaderDashboard from "../../components/HeaderDashboard";
import Navbar from "../../components/Navbar";
import Link from 'next/link'; // Importer Link

export default function Dashboard() { 
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('https://simple-crud-app-backend-fotn.onrender.com/api/dashboard/stats');
        setStats(response.data); // Les données se trouvent directement dans response.data
      } catch (error) {
        console.error('Erreur lors de la récupération des statistiques:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-4 ">
        <HeaderDashboard />
        <div className="row text-center">
          <StatsCard title="Formulaires" count={stats.forms || 0} text="Je ne sais pas quoi mettre" icon="/images/span.w-48.png" />
          <StatsCard title="Messages" count={stats.messages || 0} icon="/images/span.w-48 (1).png" text="Je ne sais pas quoi mettre" />
          <StatsCard title="Utilisateurs" count={stats.users || 0} icon="/images/span.w-48 (2).png" text="Je ne sais pas quoi mettre" />
          <Link href="/hotels" className="">
            <StatsCard title="Hôtels" count={stats.hotels || 0} icon="/images/span.w-48 (3).png" text="Je ne sais pas quoi mettre" />
          </Link>          
          <StatsCard title="Emails" count={stats.emails || 0} icon="/images/span.w-48 (4).png" text="Je ne sais pas quoi mettre" />
          <StatsCard title="Entités" count={stats.entités || 0} icon="/images/span.w-48 (5).png" text="Je ne sais pas quoi mettre" />
        </div>
      </div>
    </>
  );
}
