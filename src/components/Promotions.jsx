const Promotions = ({ config }) => {
  return (
    <div className="promo-banner fade-in-up" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      gap: '4px',
      padding: '20px',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid rgba(255,255,255,0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ 
          fontSize: '1.5rem',
          animation: 'pulse-soft 2s ease-in-out infinite'
        }}>🎁</span>
        <span style={{ fontSize: '1.1rem', fontWeight: '800', letterSpacing: '-0.02em' }}>{config.promotion.text}</span>
      </div>
      {config.promotion.subtext && (
        <span style={{ 
          fontSize: '0.75rem', 
          opacity: 0.9, 
          fontWeight: '600', 
          background: 'rgba(255,255,255,0.2)', 
          padding: '2px 10px', 
          borderRadius: '10px',
          marginTop: '4px'
        }}>{config.promotion.subtext}</span>
      )}
    </div>
  );
};

export default Promotions;
