const Header = ({ config }) => {
  return (
    <header
      className="fade-in-up"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          zIndex: -1,
          filter: 'blur(40px)'
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
          zIndex: -1,
          filter: 'blur(40px)'
        }}
      />

      <div
        className="container"
        style={{
          paddingTop: "60px",
          paddingBottom: "40px",
          textAlign: "center",
        }}
      >
        <div className="logo-container float" style={{ marginBottom: "32px" }}>
          <div
            style={{
              width: "140px",
              height: "140px",
              margin: "0 auto",
              background: "var(--card-bg)",
              borderRadius: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "var(--shadow-premium)",
              fontSize: "4.5rem",
              border: "2px solid var(--glass-border)",
              backdropFilter: "blur(24px)",
              transform: 'rotate(-5deg)'
            }}
          >
            {config.logo}
          </div>
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 24px",
            background: "rgba(6, 182, 212, 0.1)",
            borderRadius: "50px",
            fontSize: "0.9rem",
            fontWeight: "800",
            color: "var(--primary)",
            marginBottom: "32px",
            border: "1px solid rgba(6, 182, 212, 0.2)",
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          <span>📍</span> {config.location.replace('📍 ', '')}
        </div>

        <h1
          style={{ 
            fontSize: "clamp(2.5rem, 8vw, 4rem)", 
            lineHeight: "1", 
            marginBottom: "24px",
            fontWeight: '800'
          }}
        >
          Level Up <span className="text-gradient">Stok Makanmu</span> <br />
          <span style={{ opacity: 0.8, fontSize: '0.8em' }}>dengan {config.businessName}</span>
        </h1>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "1.2rem",
            maxWidth: "550px",
            margin: "0 auto 48px",
            lineHeight: "1.7",
            fontWeight: '500'
          }}
        >
          {config.description}
        </p>

        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center", gap: "20px" }}>
          <a
            href="#menu"
            className="btn btn-primary"
            style={{ padding: "20px 48px", textDecoration: "none" }}
          >
            🔥 Lihat Menu Spesial
          </a>
          <a
            href="#cart"
            className="btn glass"
            style={{
              padding: "20px 48px",
              textDecoration: "none",
              background: "var(--card-bg)"
            }}
          >
            🛒 Cek Keranjang
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
