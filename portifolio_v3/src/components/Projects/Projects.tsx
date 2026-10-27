import styles from './Projects.module.css';
import { projects } from './ArrayProjects';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from 'framer-motion';

const languages = ['Java', 'Python', 'JavaScript', 'HTML', 'CSS'];
const languageUsage = languages.map((language) => ({
  name: language,
  count: projects.filter((project) => project.technologies.includes(language)).length,
}));
const maxLanguageUsage = Math.max(...languageUsage.map(({ count }) => count), 1);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Projects() {
  return (
    <section
      id="projects"
      className={styles.projects}
    >
      <motion.span 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >PROJETOS</motion.span>

      <motion.h2 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >Projetos em Destaque</motion.h2>

      <motion.div
        className={styles.languageOverview}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.languageHeader}>
          <div>
            <span className={styles.eyebrow}>TECNOLOGIAS NOS PROJETOS</span>
            <h3>Linguagens que já usei</h3>
          </div>
          <p>Contagem baseada nos projetos publicados neste portfólio.</p>
        </div>

        <div className={styles.languageList}>
          {languageUsage.map(({ name, count }, index) => (
            <div className={styles.languageRow} key={name}>
              <div className={styles.languageLabel}>
                <span className={name === 'Java' ? styles.javaLabel : undefined}>{name}</span>
                <span>{count} {count === 1 ? 'projeto' : 'projetos'}</span>
              </div>
              <div
                className={styles.languageTrack}
                role="progressbar"
                aria-label={`${name}: ${count} ${count === 1 ? 'projeto publicado' : 'projetos publicados'}`}
                aria-valuemin={0}
                aria-valuemax={maxLanguageUsage}
                aria-valuenow={count}
              >
                <motion.div
                  className={`${styles.languageBar} ${name === 'Java' ? styles.javaBar : ''}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(count / maxLanguageUsage) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.javaFocus}>
          <span className={styles.javaMark}>Java</span>
          <p>
            Java também é um dos meus focos atuais de estudo, e estou preparando
            novos projetos para compartilhar por aqui.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className={styles.projectGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((project) => (
          <motion.div
            className={styles.card}
            key={project.title}
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <img
                src={project.image}
                alt={project.title}
                className={styles.image}
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink />
                  Ver Projeto
                </a>
              )}
            <div className={styles.technologies}>
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}