import styles from './Hero.module.css'
import { motion } from 'framer-motion'
import perfilImage from './assets/perfil.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
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

export function Hero() {
    return (
    <section 
        id="home" 
        className={styles.hero}
        >
                <motion.div 
                  className={styles.content}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                     <motion.img 
                       src= {perfilImage} 
                       alt="Elias" 
                       className={styles.image}
                       variants={itemVariants}
                     />
                     <motion.div className={styles.text} variants={itemVariants}>
                         <motion.span variants={itemVariants}>Estudante de Análise e Desenvolvimento de Sistemas</motion.span>
                         <motion.h1 variants={itemVariants}>Elias Teixeira</motion.h1>

                         <motion.h2 variants={itemVariants}>
                                Desenvolvedor de Software em Formação
                         </motion.h2>

                         <motion.p variants={itemVariants}>
                             São Bernardo do Campo – SP · Java · Python · APIs · Bancos de dados
                         </motion.p>

                         <motion.div className={styles.buttons} variants={containerVariants}>
                             <motion.a
                                 href="#projects"
                                 className={styles.cta}
                                 variants={itemVariants}
                                 whileHover={{ scale: 1.03 }}
                                 whileTap={{ scale: 0.98 }}
                             >Ver projetos</motion.a>

                             <motion.a
                                 href="#contact"
                                 className={styles.ctaPrimary}
                                 variants={itemVariants}
                                 whileHover={{ scale: 1.03 }}
                                 whileTap={{ scale: 0.98 }}
                             >Contato</motion.a>
                         </motion.div>
                     </motion.div>
                </motion.div>
        </section>
        )
    }