import { useState, useMemo, useEffect } from "react";
import { products, config } from "./data/data";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Promotions from "./components/Promotions";
import FAQ from "./components/FAQ";

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [snowflakes, setSnowflakes] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Handle Theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  // Generate snowflakes
  useEffect(() => {
    const flakes = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw",
      duration: Math.random() * 10 + 10 + "s",
      delay: Math.random() * 5 + "s",
      size: Math.random() * 10 + 10 + "px"
    }));
    setSnowflakes(flakes);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const name = product.name || "";
      const category = product.category || "";
      const matchesSearch = name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item,
        ),
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const cartCount = cart.reduce((count, item) => count + item.qty, 0);

  return (
    <div className="app-wrapper">
      {/* Snow background */}
      {snowflakes.map(flake => (
        <div 
          key={flake.id} 
          className="snowflake" 
          style={{ 
            left: flake.left, 
            animationDuration: flake.duration, 
            animationDelay: flake.delay,
            fontSize: flake.size
          }}
        >
          ❄️
        </div>
      ))}

      <Navbar cartCount={cartCount} config={config} theme={theme} toggleTheme={toggleTheme} />
      <Header config={config} />
      
      <main className="container">
        {config.promotion.text && <Promotions config={config} />}

        {/* Why Us Section */}
        <section className="fade-in-up" style={{ padding: '60px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '24px', opacity: 0.8 }}>Mengapa FrozzyBite?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            <div className="glass" style={{ padding: '20px 10px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '2rem' }}>🛡️</span>
              <h4 style={{ fontSize: '0.8rem', fontWeight: '700' }}>Higienis</h4>
              <p style={{ fontSize: '0.65rem', opacity: 0.7 }}>Proses bersih & halal</p>
            </div>
            <div className="glass" style={{ padding: '20px 10px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '2rem' }}>🥘</span>
              <h4 style={{ fontSize: '0.8rem', fontWeight: '700' }}>Siap Masak</h4>
              <p style={{ fontSize: '0.65rem', opacity: 0.7 }}>Praktis & bumbu meresap</p>
            </div>
            <div className="glass" style={{ padding: '20px 10px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '2rem' }}>❄️</span>
              <h4 style={{ fontSize: '0.8rem', fontWeight: '700' }}>Premium</h4>
              <p style={{ fontSize: '0.65rem', opacity: 0.7 }}>Bahan baku pilihan</p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section style={{ padding: '20px 0' }}>
          <div className="search-container fade-in-up" style={{ position: 'relative', marginBottom: '40px' }}>
            <span style={{ 
              position: 'absolute', 
              left: '24px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              fontSize: '1.4rem', 
              opacity: 0.6,
              zIndex: 1
            }}>🔍</span>
            <input 
              type="text" 
              placeholder="Cari nugget, sosis, atau dimsum..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass search-input-premium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="float-hover"
                style={{ 
                  position: 'absolute', 
                  right: '24px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  background: 'var(--primary)', 
                  border: 'none', 
                  cursor: 'pointer',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
                  zIndex: 1
                }}
              >
                ✕
              </button>
            )}
          </div>
        </section>

        <Menu products={filteredProducts} addToCart={addToCart} />

        {/* Testimonials */}
        <section style={{ padding: '60px 0' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Apa Kata Mereka?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {config.testimonials.map((t, i) => (
              <div key={i} className="glass fade-in-up" style={{ padding: '24px', borderRadius: 'var(--radius-md)', animationDelay: `${i * 0.1}s` }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                  {Array.from({ length: t.rating }).map((_, star) => (
                    <span key={star} style={{ fontSize: '0.8rem' }}>⭐</span>
                  ))}
                </div>
                <p style={{ fontSize: '0.95rem', marginBottom: '16px', fontStyle: 'italic', opacity: 0.9 }}>"{t.text}"</p>
                <div style={{ fontWeight: '700', fontSize: '0.85rem' }}>— {t.name}</div>
              </div>
            ))}
          </div>
        </section>

        <FAQ config={config} />

        <div id="cart">
          <Cart 
            cart={cart} 
            total={getTotal()} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            config={config}
          />
        </div>
      </main>

      {/* Floating Action Button */}
      <div style={{ position: 'fixed', bottom: '30px', right: '20px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 1001 }}>
        {cartCount > 0 && (
          <a 
            href="#cart"
            style={{ 
              background: 'var(--primary)', 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              boxShadow: '0 10px 20px rgba(14, 165, 233, 0.4)',
              textDecoration: 'none',
              fontSize: '1.5rem',
              color: 'white',
              position: 'relative'
            }}
          >
            🛒
            <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'var(--accent)', fontSize: '0.7rem', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>{cartCount}</span>
          </a>
        )}
        <a 
          href={`https://wa.me/${config.whatsappNumber}`} 
          target="_blank" 
          rel="noreferrer"
          style={{ 
            background: '#25D366', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 10px 20px rgba(37, 211, 102, 0.4)',
            textDecoration: 'none',
            fontSize: '2rem'
          }}
        >
          💬
        </a>
      </div>

      <Footer config={config} />
    </div>
  );
}

export default App;
