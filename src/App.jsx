import { motion } from 'framer-motion'

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #020617, #0f172a, #020617)',
      color: 'white',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', color: '#67e8f9', fontSize: '3rem' }}
      >
        ✈️ Английский для путешествий
      </motion.h1>

      <div style={{ maxWidth: 900, margin: '40px auto', display: 'grid', gap: 24 }}>
        <section style={card}>
          <h2>🌍 О курсе</h2>
          <p>Практический английский для уверенного общения в поездках.</p>
        </section>

        <section style={card}>
          <h2>📌 Для кого</h2>
          <p>4–5 класс · 6–8 класс</p>
        </section>

        <section style={card}>
          <h2>✨ Преимущества</h2>
          <p>Ролевые игры · реальные диалоги · уровень A2–B1</p>
        </section>

        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <button style={button}>🚀 Записаться на курс</button>
        </div>
      </div>
    </div>
  )
}

const card = {
  background: 'rgba(30,41,59,0.7)',
  padding: 24,
  borderRadius: 16,
  boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
}

const button = {
  padding: '16px 40px',
  fontSize: '18px',
  borderRadius: 40,
  border: 'none',
  cursor: 'pointer',
  background: 'linear-gradient(90deg,#22d3ee,#fb923c)',
  color: '#020617',
  fontWeight: 'bold'
}
