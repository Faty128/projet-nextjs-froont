"use client"; // Indique que ce fichier est un composant client
import "../globals.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://simple-crud-app-backend-fotn.onrender.com/auth/forgot-password",
        {
          email,
        }
      );

      toast.success(
        "Des instructions de réinitialisation du mot de passe ont été envoyées à votre e-mail."
      );
      setEmail("");
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : "Échec de l'envoi des instructions.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="body">
      <div style={{ maxWidth: "400px", margin: "auto", padding: "25px" }}>
        <div className="login_top">
          <Image
            src="/images/Link → SVG.png"
            alt="Link-svg"
            width={25}
            height={25}
            className="img_link"
          />
          <p className="login_name">RED PRODUCT</p>
        </div>
        <form onSubmit={handleSubmit} className="pagelogin">
          <h1 className="titree">Mot de passe oublié</h1>
          <p className="div_link2">
            Entrez votre adresse e-mail ci-dessous et nous vous enverrons des
            instructions sur la façon de modifier votre mot de passe.
          </p>
          <div className="div_form">
            <label>Votre e-mail :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
        {message && <p>{message}</p>}
        <ToastContainer />

        <div className="div_link">
          <p>
            Revenir à la <Link href="/login">connexion</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
