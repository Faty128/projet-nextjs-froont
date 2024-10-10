import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="d-flex ">
  
      <Sidebar />
      <div className="div_main1">
        {children} {/* Contenu des pages du dashboard */}
      </div>
    </div>
  );
}
