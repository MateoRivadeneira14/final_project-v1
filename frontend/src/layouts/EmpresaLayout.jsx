
import RoleBasedSidebar from '../components/RoleBasedSidebar';
import Navbar from '../components/Navbar';

export default function EmpresaLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar fijo */}
      <RoleBasedSidebar />

      {/* Contenedor principal */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 bg-white overflow-y-auto">{children}</main>
        <footer className="bg-indigo-600 text-white text-center py-3 text-sm">
          © 2025 UNIBRIDGE. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}
