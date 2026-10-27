import { useState } from "react";
import styles from "./Navbar.module.css";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { motion } from "framer-motion";

const links = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'skills', label: 'Conhecimentos' },
  { id: 'projects', label: 'Projetos' },
  { id: 'leadership', label: 'Experiência' },
  { id: 'education', label: 'Formação' },
  { id: 'contact', label: 'Contato' },
]

export function Navbar() {
    const activeSection = useScrollSpy()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLinkClick = () => {
      setMenuOpen(false)
    }

    return (
        <header className={styles.navbar}>
            <motion.div 
              className={styles.logo}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
                EliasJr.dev
            </motion.div>

            <button 
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
            >
              <motion.span 
                className={styles.line1}
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              />
              <motion.span 
                className={styles.line2}
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span 
                className={styles.line3}
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              />
            </button>

            <nav id="primary-navigation" className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
              <ul>
                {links.map((link) => (
                  <li key={link.id}>
                    <motion.a 
                      href={`#${link.id}`}
                      className={activeSection === link.id ? styles.active : ''}
                      whileHover={{ color: '#3b82f6' }}
                      onClick={handleLinkClick}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                      {activeSection === link.id && (
                        <motion.span 
                          className={styles.underline}
                          layoutId="underline"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
        </header>
    )
}