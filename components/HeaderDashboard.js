// app/components/HeaderDashboard.js
export default function HeaderDashboard() {
  return (
    <header className="mb-4 header-dashboard">
      <h5 className="text-dark fw-bold">Bienvenue sur RED Product</h5>
      <p className="mb-2 text-muted">Votre tableau de bord pour gérer les produits, hôtels et utilisateurs.</p>
      {/* Si tu souhaites ajouter des actions comme un bouton de profil, tu peux le décommenter */}
      {/* <button className="btn btn-secondary">Profil</button> */}
    </header>
  );
}
