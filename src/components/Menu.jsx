const Menu = ({ products, addToCart }) => {
  if (products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0' }} className="fade-in-up">
        <div style={{ fontSize: '5rem', marginBottom: '24px' }} className="float">❄️</div>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: '800' }}>Yah, Menunya Tidak Ditemukan...</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Coba ketik kata kunci lain ya!</p>
      </div>
    );
  }

  return (
    <section id="menu" style={{ paddingBottom: '80px' }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-end', 
        justifyContent: 'space-between', 
        marginBottom: '40px',
        borderBottom: '1px solid var(--glass-border)',
        paddingBottom: '20px'
      }}>
        <div>
          <span className="badge badge-accent" style={{ marginBottom: '12px', display: 'inline-block' }}>Fresh Frozen</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px', fontWeight: '800' }}>Katalog <span className="text-gradient">Lezat</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '500' }}>Higienis, Tanpa Pengawet, & Siap Masak</p>
        </div>
        <div className="glass" style={{ 
          padding: '10px 20px', 
          borderRadius: '16px', 
          fontSize: '0.9rem', 
          fontWeight: '800',
          color: 'var(--primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', display: 'inline-block' }}></span>
          {products.length} Menu Tersedia
        </div>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '32px' 
      }}>
        {products.map((product) => (
          <div key={product.id} className="card glass-card fade-in-up" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                loading="lazy"
                onMouseOver={(e) => e.target.style.transform = 'scale(1.15) rotate(2deg)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {product.bestSeller && (
                  <span className="badge-accent" style={{ 
                    padding: '6px 12px', 
                    borderRadius: '12px', 
                    fontSize: '0.7rem', 
                    fontWeight: '900',
                    boxShadow: '0 8px 16px rgba(244, 63, 94, 0.4)'
                  }}>BEST SELLER</span>
                )}
                <span className="glass" style={{ 
                  padding: '6px 12px', 
                  borderRadius: '12px', 
                  fontSize: '0.7rem', 
                  fontWeight: '800',
                  background: 'rgba(255,255,255,0.9)',
                  color: '#0f172a'
                }}>{product.category}</span>
              </div>
              <div style={{ 
                position: 'absolute', 
                bottom: '12px', 
                left: '12px',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                padding: '4px 12px',
                borderRadius: '8px',
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                ⭐ 4.9 | 100+ terjual
              </div>
            </div>
            
            <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', fontWeight: '800', lineHeight: '1.2' }}>
                {product.name}
              </h3>
              
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px', lineBreak: 'anywhere', fontWeight: '500' }}>
                {product.description.length > 70 ? product.description.substring(0, 70) + '...' : product.description}
              </p>

              <div style={{ marginTop: 'auto' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'baseline', 
                  marginBottom: '20px',
                  padding: '12px',
                  background: 'rgba(6, 182, 212, 0.05)',
                  borderRadius: '16px'
                }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', opacity: 0.6 }}>Harga</span>
                  <p style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '1.5rem' }}>
                    Rp {product.price.toLocaleString('id-ID')}
                  </p>
                </div>
                <button 
                  className="btn btn-primary" 
                  onClick={() => addToCart(product)}
                  style={{ width: '100%', padding: '16px' }}
                >
                  <span style={{ fontSize: '1.2rem' }}>🛒</span> Tambahkan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
