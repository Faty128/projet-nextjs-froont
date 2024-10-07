import { FaUserCircle, FaSearch } from "react-icons/fa"; 
import { FaArrowRightFromBracket } from "react-icons/fa6"; 
import { MdOutlineNotifications } from "react-icons/md"; 
import { useRouter } from 'next/navigation'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useState } from 'react'; 

export default function Navbar() { 
    const router = useRouter(); 
    const [loading, setLoading] = useState(false); // État de chargement
    const [searchTerm, setSearchTerm] = useState(''); // État pour le terme de recherche
    const data = ['hôtels', 'formulaires', 'message', 'utilisateurs', 'email', 'entités', '']; // Remplacez par vos données réelles

    const handleLogout = async () => { 
        setLoading(true); // Démarrer le chargement 
        localStorage.removeItem('token'); 
        toast.success('Déconnexion réussie !'); 
        await new Promise(resolve => setTimeout(resolve, 1500)); // Délai de 1,5 seconde 
        setLoading(false); // Terminer le chargement 
        router.push('/login'); 
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <nav className="navbar fixed-top shadow-sm">
            <div className="container-fluid">
               <div>
               <a className="navbar-brand" href="#">
                    Dashboard
                </a>
               </div>
                <form className="d-flex ms-auto search">
                    <div className="search_icon" style={{ paddingLeft: "-0.2rem", fontSize: '1.2rem' }}>
                        <FaSearch />
                    </div>
                    <input
                        className="form me-2"
                        type="search"
                        placeholder="Rechercher"
                        aria-label="Search"
                        style={{ paddingLeft: "2.9rem" }}
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </form>

                {searchTerm && (
                    <div className="search-results">
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <div key={index} className="search-item">
                                    {item}
                                </div>
                            ))
                        ) : (
                            <div className="no-results">Aucun résultat trouvé</div>
                        )}
                    </div>
                )}

                <div className="d-flex align-items-center">
                    <div className="position-relative me-3">
                        <MdOutlineNotifications style={{ fontSize: "1.6rem" }} />
                        <span className="badge" style={{ position: 'absolute', top: '-9px', right: '-10px', backgroundColor: 'orange', color: 'white', borderRadius: '35%', padding: '0.2rem 0.4rem', fontSize: '0.8rem' }}>
                            3
                        </span>
                    </div>
                    <img src="/images/List → Item → Link.png" alt="" />
                    <FaArrowRightFromBracket
                        className="ms-3"
                        style={{ fontSize: "1.5rem", cursor: 'pointer' }}
                        onClick={handleLogout}
                    />
                </div>
            </div>
            <ToastContainer />
        </nav>
    );
}