// import HeaderDashboard from '@/components/HeaderDashboard';
// import Sidebar from '@/components/Sidebar';

import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="d-flex">
      {/* <HeaderDashboard />   */}
      {/* Header spécifique au dashboard */}
      <Sidebar />
      <div className="div_main">
        {/* Barre latérale commune */}
        {children} {/* Contenu des pages du dashboard */}
      </div>
    </div>
  );
}
