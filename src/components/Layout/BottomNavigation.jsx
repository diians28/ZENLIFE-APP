const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="max-w-lg mx-auto px-4">
        <div className="flex justify-between py-3">
          <NavItem icon="🏠" label="Inicio" path="/" />
          <NavItem icon="💭" label="Chat" path="/chat" />
          <NavItem icon="📚" label="Recursos" path="/recursos" />
          <NavItem icon="🔔" label="Recordatorios" path="/recordatorios" />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, path }) => (
  <a href={path} className="flex flex-col items-center">
    <span className="text-2xl">{icon}</span>
    <span className="text-xs text-gray-600">{label}</span>
  </a>
); 