// import Sidebar from '@/components/Sidebar';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import de Bootstrap

export default function RootLayout({
  children,
}
) {
  return (
    <html lang="fr">
      <body>
        <div className="d-flex">
          {/* <Sidebar />   */}
          {/* Barre latérale commune */}
          <div className="flex-grow-1 div_container row col-md-3">
            <main className=''>{children}</main>  {/* Le contenu des layouts spécifiques */}
          </div>
        </div>
      </body>
    </html>
  );
}