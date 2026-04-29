const Footer = ({ config }) => {
  return (
    <footer style={{ 
      marginTop: 'auto', 
      padding: '80px 0 40px', 
      textAlign: 'center', 
      borderTop: '1px solid var(--glass-border)',
      background: 'var(--navbar-bg)',
      backdropFilter: 'blur(30px)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Footer background glow */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
        zIndex: -1,
        filter: 'blur(50px)'
      }} />

      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '16px', fontWeight: '800' }}>
            {config.businessName.replace('Bite', '')}<span className="text-gradient">Bite</span> {config.logo}
          </h3>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '1.1rem', 
            marginBottom: '32px', 
            maxWidth: '500px', 
            margin: '0 auto 32px',
            lineHeight: '1.7',
            fontWeight: '500'
          }}>
            {config.description}
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
            {config.socials.map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                className="glass"
                style={{ 
                  width: '56px',
                  height: '56px',
                  borderRadius: '18px',
                  fontSize: '1.6rem', 
                  textDecoration: 'none', 
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  boxShadow: 'var(--shadow-sm)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) rotate(8deg)';
                  e.currentTarget.style.background = 'var(--primary)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotate(0)';
                  e.currentTarget.style.background = 'var(--glass-bg)';
                  e.currentTarget.style.color = 'var(--text-main)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid var(--glass-border)', 
          paddingTop: '32px', 
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '600' }}>
            {config.location}
          </p>
          <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: '500' }}>
            &copy; {new Date().getFullYear()} {config.businessName}. Crafted for Freshness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
