import React from 'react'; // 👈 ЭТО ОБЯЗАТЕЛЬНО!
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div style={styles.page}>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.title}
      >
        ✈️ Английский для путешествий
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={styles.subtitle}
      >
        Реальный разговорный английский для уверенных путешествий без страха
      </motion.p>

      <div style={styles.container}>
        <Section title="🌍 О курсе">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? Этот курс научит вашего ребёнка живому английскому, который пригодится в отпуске, поездках и будущих путешествиях.
        </Section>

        <Section title="📌 Для кого курс">
          <ul>
            <li>4–5 класс</li>
            <li>6–8 класс</li>
          </ul>
        </Section>

        <Section title="📚 Программа курса">
          <ul>
            <li><strong>Аэропорт без стресса</strong> — регистрация, паспортный контроль, таможня</li>
            <li><strong>Отель</strong> — заселение, просьбы, Wi‑Fi</li>
            <li><strong>Кафе и рестораны</strong> — заказ еды, счёт, чаевые</li>
            <li><strong>Ориентирование</strong> — дорога, такси, аптека</li>
            <li><strong>Экстренные случаи</strong> — помощь, потеря вещей</li>
            <li><strong>Туризм и развлечения</strong> — билеты, экскурсии</li>
            <li><strong>Дружба в путешествиях</strong> — знакомства и диалоги</li>
            <li><strong>Дипломный проект</strong> — «Мой идеальный отпуск»</li>
          </ul>
        </Section>

        <Section title="✨ Почему курс особенный">
          <ul>
            <li>Фокус на живой разговорной речи</li>
            <li>Только реальные ситуации путешественника</li>
            <li>Ролевые игры, аудио, мини‑квесты</li>
            <li>Уровень A2–B1 за курс</li>
          </ul>
        </Section>

        <Section title="🕒 Расписание">
          <p>Четверг, 15:00 (МСК) — 4–5 класс</p>
          <p>Пятница, 15:30 (МСК) — 6–8 класс</p>
        </Section>

        <Section title="💳 Стоимость">
          <p>Полный курс (10 уроков): <strong>12 000 ₽</strong></p>
          <p>Абонемент: <strong>1 300 ₽ / урок</strong></p>
        </Section>

        <Section title="📢 Набор открыт">
          Группы до 6 детей. Места ограничены — запишитесь сейчас, и следующее путешествие станет первым, где ребёнок заговорит по‑английски уверенно.
        </Section>

        <div style={styles.ctaWrap}>
          <button style={styles.button}>🚀 Записаться на курс</button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, boxShadow: '0 0 60px rgba(34,211,238,0.35)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={styles.card}
    >
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.text}>{children}</div>
    </motion.section>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'radial-gradient(circle at top, #020617, #020617, #000)',
    color: '#e5e7eb',
    padding: '40px 20px',
    fontFamily: 'Inter, Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    fontSize: '3rem',
    color: '#67e8f9',
    marginBottom: 10
  },
  subtitle: {
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto 50px',
    color: '#fde68a'
  },
  container: {
    maxWidth: 900,
    margin: '0 auto',
    display: 'grid',
    gap: 24
  },
  card: {
    padding: '24px',
    borderRadius: 16,
    background: 'rgba(255,255,255,0.06)',
    backdropFilter: 'blur(14px)',
    boxShadow: '0 0 40px rgba(34,211,238,0.12)',
    border: '1px solid rgba(34,211,238,0.15)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  },
  sectionTitle: {
    color: '#22d3ee',
    marginBottom: 12
  },
  text: {
    lineHeight: 1.6
  },
  ctaWrap: {
    textAlign: 'center',
    marginTop: 40
  },
  button: {
    padding: '18px 36px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#020617',
    background: 'linear-gradient(90deg, #22d3ee, #fde68a)',
    border: 'none',
    borderRadius: 999,
    cursor: 'pointer',
    boxShadow: '0 0 40px rgba(34,211,238,0.4)'
  }
};
