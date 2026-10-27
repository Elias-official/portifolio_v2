import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord, FaLink } from "react-icons/fa";
import { motion } from 'framer-motion';

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

export function Contact() {
    return (
        <section
            id = "contact"
            className={styles.contact}
        >
            <motion.span 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >CONTATO</motion.span>

            <motion.h2 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >Entre em contato</motion.h2>

            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
                Atualmente estou em busca de oportunidades de estágio
                e sempre aberto para colaborar em projetos, trocar
                experiências e expandir minha rede de contatos na área
                de tecnologia.
            </motion.p>

            <motion.div 
              className={styles.links}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
                <motion.a
                  href="mailto:eliastsjunior52@gmail.com"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                <FaEnvelope />
                Email
                </motion.a>

                <motion.a
                  href="tel:+5511954554872"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                (11) 95455-4872
                </motion.a>

                <motion.a
                  href="https://github.com/Elias-official"
                  target="_blank"
                  rel="noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                <FaGithub />
                GitHub
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/elias-junioroficial/"
                  target="_blank"
                  rel="noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                <FaLinkedin />
                LinkedIn
                </motion.a>

                <motion.a
                  href="https://linktr.ee/eliasjr_"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Linktree do Elias"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                <FaLink />
                Linktree
                </motion.a>

                <motion.p 
                  className={styles.discord}
                  variants={itemVariants}
                >
                <FaDiscord />
                .sadiko._
                </motion.p>
            </motion.div>

            <motion.div 
              className={styles.footer}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
                <p>@ 2026 Elias Junior</p>
            </motion.div>    
        </section>
    )
}