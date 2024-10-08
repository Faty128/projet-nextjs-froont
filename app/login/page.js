"use client"; // Indique que ce fichier est un composant client
import "../globals.css";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await axios.post('https://simple-crud-app-backend-fotn.onrender.com/api/auth/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Accéder à la réponse avec Axios
      console.log('Token:', response.data.token);

      // Stocker le token dans le localStorage
      localStorage.setItem('token', response.data.token);

      // Afficher un toast de succès
      toast.success('Connexion réussie !');

      // Redirige vers le dashboard après une connexion réussie
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      toast.error('Échec de la connexion. Vérifiez vos identifiants.'); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login_bodyy">
      <div style={{ margin: 'auto', padding: '0.5rem'}}>
        <div className='login_top'>
          <Image 
            src="/images/Link → SVG.png" 
            alt="Link-svg"
            width={25} 
            height={25} 
            className='img_link'
          />
          <p className='login_name'>RED PRODUCT</p>
        </div>

        {loading && <div className="loader"></div>} 

        <form onSubmit={handleSubmit} className='pagelogin'>
          <h1 className='titree'>Connectez-vous en tant que Admin</h1>
          
          <div className='div_form'>
            <label>Email :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='div_form'>
            <label>Mot de passe :</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='div_form'>
            <label className='div_label'>
              <input
                type="checkbox"
                onChange={(e) => console.log(e.target.checked)} // Gère l'état de la case à cocher si nécessaire
              />
              <p>Garder moi connecté</p>
            </label>
          </div>
          <button type="submit" disabled={loading}> {/* Désactiver le bouton pendant le chargement */}
            {loading ? 'Chargement...' : 'Se connecter'} {/* Afficher le texte en fonction du chargement */}
          </button>
        </form>
        
        <div className='div_link'>
          <p className='div_link2'>
            <Link href="/forgot-password">Mot de passe oublié ?</Link>
          </p>
          <p className='div_link2'> 
            Vous n'avez pas de compte ? <Link href="/register">S'inscrire</Link>
          </p>
        </div>
      </div>
      <ToastContainer /> {/* Ajouter le ToastContainer ici */}
    </div>
  );
};

export default LoginPage;
