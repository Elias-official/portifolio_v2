import styles from './Skills.module.css';
import { motion } from 'framer-motion';


const groups = [
  { title: 'Linguagens', items: ['Java', 'Python', 'SQL', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Desenvolvimento', items: ['Flask', 'APIs REST', 'HTTP', 'Integração entre sistemas'] },
  { title: 'Bancos de dados', items: ['MySQL', 'SQLite', 'CRUD', 'JOIN', 'Modelagem de dados'] },
  { title: 'Programação', items: ['Programação Orientada a Objetos', 'Classes e objetos', 'Herança e polimorfismo', 'Estruturas de decisão e repetição'] },
  { title: 'Ferramentas', items: ['Git', 'GitHub', 'IntelliJ IDEA', 'PyCharm', 'VS Code'] },
  { title: 'Em aprofundamento', items: ['Java', 'Python', 'React', 'TypeScript'] },
]

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

export function Skills() {
    return (
    <section 
        id = "skills"
        className={styles.Skills}
        >
        <motion.div 
          className={styles.header}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
            <span>CONHECIMENTOS TÉCNICOS</span>
        </motion.div>

        <motion.div 
          className={styles.skillsList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
            {groups.map((g) => (
                <motion.div 
                  key={g.title} 
                  className={styles.group}
                  variants={itemVariants}
                >
                    <h3>{g.title}:</h3>
                    <ul>
                        {g.items.map((it) => (
                            <li key={it}>{it}</li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </motion.div>
    </section>
    )
}