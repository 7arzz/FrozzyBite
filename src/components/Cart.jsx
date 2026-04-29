import { useState } from "react";

const Cart = ({ cart, total, addToCart, removeFromCart, clearCart, config }) => {
  const [name, setName] = useState("");
  const [isOrdering, setIsOrdering] = useState(false);

  const handleCheckout = () => {
    if (!name) {
      alert("Mohon masukkan nama Anda untuk melanjutkan.");
      return;
    }
    if (cart.length === 0) {
      alert("Keranjang masih kosong.");
      return;
    }

    setIsOrdering(true);

    // Simulate a small delay for "Processing" feel
    setTimeout(() => {
      const cartItems = cart
        .map((item) => `- ${item.name} (x${item.qty})`)
        .join("%0A");

      const message = `Halo FrozzyBite 👋%0ASaya ingin memesan frozen food:%0A%0A${cartItems}%0A%0A━━━━━━━━━━━━━━━%0A*Total Pesanan:* Rp ${total.toLocaleString("id-ID")}%0A*Atas Nama:* ${name}%0A━━━━━━━━━━━━━━━%0A%0ASaya akan mengambil pesanan di lokasi. Mohon konfirmasi ketersediaannya. Terima kasih!`;

      const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${message}`;
      window.open(whatsappUrl, "_blank");
      setIsOrdering(false);
    }, 1000);
  };

  if (cart.length === 0) {
    return (
      <section className="fade-in-up" style={{ paddingBottom: "100px" }}>
        <div
          className="glass-card"
          style={{
            padding: "80px 40px",
            borderRadius: "40px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "5rem", marginBottom: "32px" }} className="float">🛒</div>
          <h3 style={{ fontSize: '2rem', marginBottom: '16px', fontWeight: '800' }}>Keranjang Masih Kosong</h3>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: "40px",
              fontSize: '1.1rem',
              fontWeight: '500'
            }}
          >
            Pilih menu lezat kami untuk mulai mengisi keranjangmu!
          </p>
          <a
            href="#menu"
            className="btn btn-primary"
            style={{ textDecoration: "none", padding: '20px 48px' }}
          >
            Mulai Belanja Sekarang
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="fade-in-up" style={{ paddingBottom: "100px" }}>
      <div
        className="glass-card"
        style={{
          padding: "40px",
          borderRadius: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "40px",
            borderBottom: '1px solid var(--glass-border)',
            paddingBottom: '20px'
          }}
        >
          <div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: '800' }}>Detail <span className="text-gradient">Pesanan</span></h2>
            <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Tinjau pesananmu sebelum checkout</p>
          </div>
          <button
            onClick={clearCart}
            style={{
              background: 'rgba(244, 63, 94, 0.1)',
              border: "none",
              color: "var(--accent)",
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: "0.85rem",
              cursor: "pointer",
              fontWeight: "800",
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'white'; }}
            onMouseOut={(e) => { e.target.style.background = 'rgba(244, 63, 94, 0.1)'; e.target.style.color = 'var(--accent)'; }}
          >
            Bersihkan
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: "40px" }}>
          {cart.map((item) => (
            <div
              key={item.id}
              className="glass"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                borderRadius: "24px",
                border: "1px solid var(--glass-border)",
              }}
            >
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.15rem", marginBottom: "6px", fontWeight: '800' }}>
                    {item.name}
                  </h4>
                  <p
                    style={{
                      color: "var(--primary)",
                      fontWeight: "900",
                      fontSize: "1rem",
                    }}
                  >
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "var(--card-bg)",
                  padding: "8px",
                  borderRadius: "100px",
                  border: "2px solid var(--glass-border)",
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <button
                  onClick={() => removeFromCart(item)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "none",
                    background: "var(--glass-bg)",
                    color: "var(--text-main)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: '800',
                    fontSize: '1.2rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.background = 'var(--glass-border)'}
                  onMouseOut={(e) => e.target.style.background = 'var(--glass-bg)'}
                >
                  −
                </button>
                <span
                  style={{
                    fontWeight: "900",
                    minWidth: "28px",
                    textAlign: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.qty}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "none",
                    background: "var(--primary)",
                    color: "white",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: '800',
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
            padding: "32px",
            borderRadius: "32px",
            color: "white",
            marginBottom: "40px",
            boxShadow: "0 20px 40px -10px rgba(6, 182, 212, 0.4)",
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.1, fontSize: '8rem', transform: 'translate(20%, -20%)' }}>❄️</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              opacity: "0.9",
              marginBottom: "12px",
              fontSize: "1.1rem",
              fontWeight: '600'
            }}
          >
            <span>Subtotal</span>
            <span>Rp {total.toLocaleString("id-ID")}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              opacity: "0.9",
              marginBottom: "24px",
              fontSize: "1.1rem",
              fontWeight: '600'
            }}
          >
            <span>Pengiriman</span>
            <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px' }}>Self-Pickup</span>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              paddingTop: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "white", fontSize: '1.3rem', fontWeight: '800' }}>Total Pembayaran</h3>
            <h2 style={{ color: "white", fontSize: "2.5rem", fontWeight: '900', letterSpacing: '-0.02em' }}>
              Rp {total.toLocaleString("id-ID")}
            </h2>
          </div>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "16px",
              fontWeight: "800",
              fontSize: "1.1rem",
              color: 'var(--text-main)'
            }}
          >
            👤 Nama Lengkap Anda
          </label>
          <input
            type="text"
            placeholder="Siapa nama Anda?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: '20px 28px',
              borderRadius: '20px'
            }}
          />
        </div>

        <button
          className="btn-secondary"
          onClick={handleCheckout}
          disabled={isOrdering}
          style={{
            width: "100%",
            padding: "24px",
            fontSize: "1.25rem",
            fontWeight: '800',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {isOrdering ? (
            <>🔄 Memproses...</>
          ) : (
            <>📱 Pesan via WhatsApp Sekarang</>
          )}
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "32px",
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            fontWeight: '500'
          }}
        >
          *Setelah klik, Anda akan diarahkan ke WhatsApp untuk konfirmasi pesanan.
        </p>
      </div>
    </section>
  );
};

export default Cart;
