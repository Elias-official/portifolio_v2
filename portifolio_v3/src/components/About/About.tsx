import styles from './About.module.css';
import { motion } from 'framer-motion';
import avatarImage from './assets/avatar.png';

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

export function About() {
    return (
    <section id="about" className={styles.about}>
        <motion.div 
          className={styles.container}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >

            <motion.div className={styles.image} variants={itemVariants}>
                <div className={styles.placeholder}>
                    <img src={avatarImage} alt="Elias" className={styles.avatar} />
                </div>
            </motion.div>
            <motion.div className={styles.content} variants={containerVariants}>
                <motion.span variants={itemVariants}>PERFIL PROFISSIONAL</motion.span>

                <motion.h2 variants={itemVariants}>Sobre mim</motion.h2>

                <motion.p variants={itemVariants}>
                    Estudante de Análise e Desenvolvimento de Sistemas na Universidade Metodista de São Paulo, com conhecimentos em programação, desenvolvimento web, APIs REST e bancos de dados. Tenho experiência prática em projetos acadêmicos e pessoais com Python, Flask, JavaScript e MySQL.
                </motion.p>

                <motion.p variants={itemVariants}>
                    Tenho familiaridade com conceitos de frontend e backend, com maior interesse em lógica de programação, integração entre sistemas e manipulação de dados. Busco aprimorar minhas habilidades técnicas por meio de desafios práticos e oportunidades de aprendizado.
                </motion.p>

                <motion.div className={styles.objective} variants={itemVariants}>
                    <h3>Objetivo profissional</h3>
                    <p>
                        Busco uma oportunidade de estágio em desenvolvimento de software para aplicar meus conhecimentos, aprender boas práticas e contribuir com soluções em equipe. Tenho interesse em interfaces e backend, especialmente em lógica de programação, APIs e bancos de dados.
                    </p>
                </motion.div>
                
            </motion.div>
        </motion.div>
    </section>
    )

}