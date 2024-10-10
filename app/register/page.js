"use client"; // Indique que ce fichier est un composant client
import '../globals.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; 
import Image from 'next/image';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const page = () => {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false); 
  const router = useRouter(); 


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  if (!termsAccepted) {
    toast.error("Vous devez accepter les termes et la politique !");
    return;
  }

  try {
    const response = await axios.post('https://simple-crud-app-backend-fotn.onrender.com/api/auth/register', {
      name,
      email,
      password,
      termsAccepted,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    toast.success('Inscription réussie !');

    // Rediriger vers la page de connexion après une inscription réussie
    router.push('/login');
  } catch (error) {
    console.error(error);
    toast.error('Échec de l\'inscription. Veuillez réessayer.');
  }finally {
    setLoading(false);
  }
};


  return (
    <div className='login_bodyy'>
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '10px' }}>
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
        <h1 className='titree'>Inscrivez-vous en tant que Admin</h1>
        <div className='div_form'>
          <label>Nom :</label>
          <input
            type="text" // Change ici pour "text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Change ici pour utiliser setName
            required
          />
        </div>
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
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)} // Met à jour l'état
            />
            <p>Accepter les termes et la politique</p>
          </label>
        </div>
        <button disabled={loading}> {/* Désactiver le bouton pendant le chargement */}
        {loading ? 'Chargement...' : 'S\' inscrire'} {/* Afficher le texte en fonction du chargement */}</button>
      </form>
      <div className='div_link'> 
        <p className='div_link2'>
          Vous avez déjà un compte ? <Link href="/">Se connecter</Link>
        </p>
      </div>
    </div>
    <ToastContainer />
    </div>
  );
};

export default page;
