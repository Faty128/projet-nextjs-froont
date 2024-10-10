"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import StatsCard from "../../components/StatsCard";
import HeaderDashboard from "../../components/HeaderDashboard";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { title } from "process";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          "https://simple-crud-app-backend-fotn.onrender.com/api/dashboard/stats"
        );
        setStats(response.data); // Les données se trouvent directement dans response.data
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des statistiques:",
          error
        );
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mb-4">
        <HeaderDashboard />
        <div className="row p-4 g-4">
          <div className="col-md-4">
            <div className="card-categories">
              <div className="div_categorie">
                <div>
                  <img src="/images/span.w-48.png" alt="img_formulaire" />
                </div>
                <div>
                  <h6> {stats.forms || 0} Formulaires</h6>
                  Je ne sais pas quoi mettre
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-categories">
              <div className="div_categorie">
                <div>
                  <img src="/images/span.w-48 (1).png" alt="img_messages" />
                </div>
                <div>
                  <h6>{stats.messages || 0} Messages</h6>
                  Je ne sais pas quoi mettre
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-categories">
              <div className="div_categorie">
                <div>
                  <img src="/images/span.w-48 (2).png" alt="imgçutilisateurs" />
                </div>
                <div>
                  <h6>{stats.users || 0} Utilisateurs</h6>
                  Je ne sais pas quoi mettre
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-4 g-4">
          <div className="col-md-4">
            <Link href="/hotels" className="text-decoration-none text-dark">
              <div className="card-categories">
                <div className="div_categorie">
                  <div>
                    <img src="/images/span.w-48 (3).png" />
                  </div>
                  <div>
                    <h6>{stats.hotels || 0} Hôtels</h6>
                    les hôtels que nous avons..
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <div className="card-categories">
              <div className="div_categorie">
                <div>
                  <img src="/images/span.w-48 (4).png" alt="email-img" />
                </div>
                <div>
                  <h6>{stats.emails || 0} Emails</h6>
                  Je ne sais pas quoi mettre
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-categories">
              <div className="div_categorie">
                <div>
                  <img src="/images/span.w-48 (5).png" alt="img_entités" />
                </div>
                <div>
                  <h6>{stats.entités || 0} Entités </h6>
                  Je ne sais pas quoi mettre
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
