'use client'
import './styles/sidebar.css'; // CSS personnalisé
import { MdDashboard } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from 'react';
import Link from 'next/link'; // Importation de Link

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('dashboard'); // État pour le lien actif

  // const { isCollapsedSidebar, toggleSidebarCollapseHandler } = useContext(SidebarContext);
  const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(false);

  const toggleSidebarCollapseHandler = () => {
    setIsCollapsedSidebar((prev) => !prev);
  }

  return (
    <div className='sidebar_wrapper  '>
            <button className='close_icone' onClick={toggleSidebarCollapseHandler}><MdKeyboardArrowLeft /></button>

    <aside className=" text-white sidebar" data-collapse={isCollapsedSidebar}>
      <div className='d-flex'>
        <img src="/images/Link → SVG.png" alt="red-product" style={{ marginLeft: '-1rem' }} />
        <h6 className="text-center div_redproduct">RED PRODUCT</h6>
      </div>
      <div className='div_princ mt-3'>Principal</div>
      <div className='sidebar_dashboard'>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/dashboard" className={`nav-link d-flex mt-3 ${activeLink === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveLink('dashboard')}>
              <MdDashboard style={{ fontSize: '2rem', marginLeft: '-1rem' }} />
              <p style={{ marginLeft: '1rem', paddingTop: '0.3rem' }}>Dashboard</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/hotels" className={`nav-link d-flex ${activeLink === 'hotels' ? 'active' : ''}`} onClick={() => setActiveLink('hotels')}>
              <img src="/images/gaming-control 1.png" alt="logo-hotel" className='logo_hotel' />
              <p style={{  marginLeft: '0.6rem', paddingTop: '0.3rem', fontSize: '11.5px' }}>Liste des hôtels</p>
            </Link>
          </li>
        </ul>
        <div className="Profil_muhmd">
          <div>
            <img src="/images/List → Item → Link.png" alt="profil_img" />
          </div>
          <div className='div_personel'>
            <div>
              <p style={{ fontSize: '6px', marginTop: '0.7rem' }}>Mouhamet Badiane</p>
            </div>
            <div style={{ marginTop: '-1rem' }}>
              <span className="text-success" style={{ fontSize: '13px' }}>en ligne</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
    </div>

  );
}
