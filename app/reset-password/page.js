"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation"; // Importer useSearchParams
import axios from "axios";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPasswordPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      toast.error("Token is missing. Please check the URL.");
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;

    try {
      const response = await axios.post(
        `https://simple-crud-app-backend-fotn.onrender.com/api/auth/reset-password/${token}`,
        { newPassword }
      );
      toast.success(response.data.message);
      router.push("/login");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to reset password.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="body">
      <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
        <div className="login_top pt-4">
          <Image
            src="/images/Link → SVG.png"
            alt="Link-svg"
            width={25}
            height={25}
            className="img_link"
          />
          <p className="login_name">RED PRODUCT</p>
        </div>
        <form onSubmit={handleSubmit} className="pagelogin mt-4">
          <div className="div_form">
            <label>Nouveau mot de passe :</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>
          <button className="mt-4" type="submit">Réinitialiser</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

const Wrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ResetPasswordPage />
  </Suspense>
);

export default Wrapper;
