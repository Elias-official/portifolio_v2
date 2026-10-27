import styles from './Leadership.module.css';
import { experiences } from './ArrayLeadership';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Leadership() {
    return (
        <section
            id = "leadership"
            className={styles.leadership}
        >
            <motion.span 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >EXPERIÊNCIA E LIDERANÇA</motion.span>

            <motion.h2 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >Experiência</motion.h2>

            <motion.div 
              className={styles.leadershipList}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
            {experiences.map((experience) => (
                <motion.div
                  className={styles.card}
                  key={experience.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                <img
                    src={experience.image}
                    alt={experience.title}
                    className={styles.image}
                />

                <h2>{experience.title}</h2>

                <h3>{experience.role}</h3>

                <p>{experience.description}</p>

                <div className={styles.skillsList}>
                    {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                    ))}
                </div>

                <a
                    href={experience.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    Ver comunidade
                </a>
                </motion.div>
            ))}
            </motion.div>
        </section>
    )
}