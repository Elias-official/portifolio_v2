import { motion } from 'framer-motion';
import styles from './Education.module.css';

const education = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Metodista de São Paulo',
    period: '2026–2028',
    detail: 'Cursando o 2º semestre',
  },
  {
    title: 'Ensino Médio',
    institution: 'Escola Estadual João Ramalho',
    period: 'Concluído em 2025',
  },
];

export function Education() {
  return (
    <section id="education" className={styles.education}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        FORMAÇÃO E IDIOMAS
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Formação acadêmica
      </motion.h2>

      <div className={styles.content}>
        <div className={styles.educationList}>
          {education.map((item) => (
            <article className={styles.card} key={item.title}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              {item.detail && <p>{item.detail}</p>}
            </article>
          ))}
        </div>

        <div className={styles.details}>
          <article className={styles.card}>
            <h3>Curso profissionalizante</h3>
            <p>Grau Técnico · 2025</p>
            <ul>
              <li>Lógica de Programação</li>
              <li>Pacote Office: Excel, Word e Access</li>
            </ul>
          </article>

          <article className={styles.card}>
            <h3>Idiomas</h3>
            <p>Inglês</p>
            <ul>
              <li>Leitura intermediária</li>
              <li>Escrita básica</li>
              <li>Conversação básica</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
