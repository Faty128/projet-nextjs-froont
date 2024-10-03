import HeaderHotels from "../../components/HeaderHotels";
import Sidebar from "../../components/Sidebar";

export default function HotelsLayout({
  children,
}
) {
  return (
    <div className="d-flex">
      <Sidebar/>
      <div className="div_main">
        {children}  {/* Contenu des pages des hôtels */}
      </div>
    </div>
  );
}