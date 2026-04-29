import { useState } from "react";

const FAQ = ({ config }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = config?.faqs || [];

  return (
    <section style={{ padding: '80px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="badge-accent" style={{ marginBottom: '16px', display: 'inline-block' }}>Butuh Bantuan?</span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '12px', fontWeight: '800' }}>Pertanyaan <span className="text-gradient">Populer</span></h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '500' }}>Segala hal yang perlu Anda ketahui tentang FrozzyBite</p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="glass"
            style={{ 
              borderRadius: '24px', 
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              border: openIndex === index ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
              boxShadow: openIndex === index ? '0 20px 40px -10px rgba(6, 182, 212, 0.2)' : 'var(--shadow-sm)',
              transform: openIndex === index ? 'scale(1.02)' : 'scale(1)'
            }}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              style={{
                width: '100%',
                padding: '24px 32px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-heading)',
                fontWeight: '800',
                fontSize: '1.1rem'
              }}
            >
              <span>{faq.q}</span>
              <span style={{ 
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: openIndex === index ? 'var(--primary)' : 'var(--glass-bg)',
                color: openIndex === index ? 'white' : 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem', 
                transition: 'all 0.3s ease',
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            
            <div style={{ 
              maxHeight: openIndex === index ? '300px' : '0',
              overflow: 'hidden',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              opacity: openIndex === index ? 1 : 0
            }}>
              <div style={{ 
                padding: '0 32px 32px', 
                color: 'var(--text-muted)', 
                fontSize: '1rem',
                lineHeight: '1.7',
                fontWeight: '500'
              }}>
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
