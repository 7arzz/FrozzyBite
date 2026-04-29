const Navbar = ({ cartCount, config, theme, toggleTheme }) => {
  return (
    <nav className="glass" style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000, 
      padding: '16px 0',
      marginBottom: '20px',
      background: 'var(--navbar-bg)',
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            background: 'var(--primary)',
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            boxShadow: '0 4px 10px rgba(6, 182, 212, 0.3)'
          }}>
            {config.logo}
          </div>
          <h2 style={{ fontSize: '1.4rem', margin: 0, fontWeight: '800' }}>
            {config.businessName.replace('Bite', '')}
            <span className="text-gradient">Bite</span>
          </h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <a href="#cart" className="glass" style={{ 
            position: 'relative', 
            textDecoration: 'none', 
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '16px',
            fontSize: '1.2rem',
            transition: 'all 0.3s ease'
          }}>
            🛒
            {cartCount > 0 && (
              <span style={{ 
                position: 'absolute', 
                top: '-5px', 
                right: '-5px', 
                background: 'var(--accent)', 
                color: 'white', 
                fontSize: '0.7rem', 
                fontWeight: '800',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 8px rgba(244, 63, 94, 0.3)',
                border: '2px solid var(--text-main)'
              }}>
                {cartCount}
              </span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
