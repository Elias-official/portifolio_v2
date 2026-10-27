import dashboardImage from './assets/dashboard.png'
import passwordSecurityImage from './assets/password-security.png'
import hashGeneratorImage from './assets/hash.png'
import imparOuParImage from './assets/par.png'
import radarCulturalImage from './assets/radar-cultural.png'
import AlunoProjeto from './assets/AlunoProjeto.png'

export const projects = [
  {
    title: "Dashboard Acadêmico",
    description:
      "Aplicação Full Stack desenvolvida com React e Flask para visualização e gerenciamento de dados acadêmicos através de uma API REST.",
    github:
      "https://github.com/Elias-official/Projeto-da-Faculdade",
    demo: "",
    image: dashboardImage,
    technologies: ["React", "Flask", "APIs REST", "MySQL"],
  },

  {
    title: "Password Security Flask",
    description:
      "Ferramenta web para geração e validação de hashes, explorando conceitos de segurança de senhas e criptografia.",
    github:
      "https://github.com/Elias-official/password-security-flask",
    demo: "",
    image: passwordSecurityImage,
    technologies: ["Flask", "Python"],
  },

  {
    title: "Hash Generator",
    description:
      "Ferramenta para geração de hashes e experimentação com conceitos de segurança.",
    github:
      "https://github.com/Elias-official/Password-Security-Hash-Generator",
    demo: "",
    image: hashGeneratorImage,
    technologies: ["Python"],
  },

  {
    title: "Ímpar ou Par",
    description:
      "Projeto web desenvolvido para praticar lógica de programação, interação com usuários e manipulação do DOM.",
    github:
      "https://github.com/Elias-official/Projeto-de-Impar-e-Par",
    demo: "https://elias-official.github.io/Projeto-de-Impar-e-Par/",
    image: imparOuParImage,
    technologies: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Radar Cultural",
    description:
      "Projeto baseado em streaming de filmes e jogos, utilizando Javascript, HTML e CSS para criar uma interface interativa.",
    github:
      "https://github.com/Elias-official/Radar-Cultural",
    demo: "https://elias-official.github.io/Radar-Cultural/",
    image: radarCulturalImage,
    technologies: ["HTML", "CSS", "JavaScript"],
  },

  {
  title: "Sistema de Cadastro de Alunos",
  description:
    "Projeto acadêmico desenvolvido em Java para praticar Programação Orientada a Objetos, utilizando herança, encapsulamento e polimorfismo. Permite cadastrar, listar e buscar alunos e professores.",
  github: "https://github.com/Elias-official/Sistema-de-Cadastro-de-Alunos-com-Heranca-e-Polimorfismo-Java",
  image: AlunoProjeto,
  technologies: [
    "Java",
    "POO",
    "Herança",
    "Polimorfismo",
    "ArrayList"
  ],
  },
];
