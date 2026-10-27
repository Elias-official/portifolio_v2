document.addEventListener('DOMContentLoaded', function () {
	const header = document.querySelector('.site-header');
	if (!header) return;

	function onScroll() {
		if (window.scrollY > 10) {
			header.classList.add('scrolled');
		} else {
			header.classList.remove('scrolled');
		}
	}

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
});

const Menutoglle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (Menutoglle) {
    Menutoglle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        Menutoglle.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            Menutoglle.classList.remove('active');
        });
    });    
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver(function(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			observer.unobserve(entry.target);
		}
	});
}, observerOptions);

document.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el));

// ========================
// 5. FILTRO DE PROJETOS
// ========================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.projeto-card');

filterButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		// Remover classe active de todos
		filterButtons.forEach(b => b.classList.remove('active'));
		// Adicionar ao clicado
		btn.classList.add('active');

		const filter = btn.getAttribute('data-filter');
		projectCards.forEach(card => {
			if (filter === 'all' || card.getAttribute('data-category') === filter) {
				card.style.display = 'block';
				setTimeout(() => card.classList.add('visible'), 10);
			} else {
				card.style.display = 'none';
				card.classList.remove('visible');
			}
		});
	});
});

// ========================
// 6. MODAL DOS PROJETOS
// ========================
const projectData = {
	radar: {
		title: 'Radar Cultural',
		description: `
			<h3>Sobre o Projeto</h3>
			<p>A Radar Cultural é uma aplicação desenvolvida em HTML, CSS e JavaScript que funciona como um streaming de filmes e séries.</p>
			
			<h4>Recursos</h4>
			<ul>
				<li>Sistema de login e cadastro</li>
				<li>Pesquisa de filmes e séries</li>
				<li>Autenticação com localStorage</li>
				<li>Interface moderna e responsiva</li>
				<li>Manipulação dinâmica de DOM</li>
			</ul>
			
			<h4>Tecnologias</h4>
			<p>HTML5 | CSS3 | JavaScript | localStorage</p>
			
			<h4>Links</h4>
			<p>
				<a href="https://github.com/Elias-official/Radar-Cultural" target="_blank">Github</a> | 
				<a href="https://elias-official.github.io/Radar-Cultural/" target="_blank">Ver ao vivo</a>
			</p>
		`
	},
	impar: {
		title: 'Impor e Par - Game',
		description: `
			<h3>Sobre o Projeto</h3>
			<p>Um jogo interativo baseado na lógica clássica de "Par ou Ímpar", desenvolvido com HTML, CSS e JavaScript.</p>
			
			<h4>Recursos</h4>
			<ul>
				<li>Geração de números aleatórios</li>
				<li>Sistema de níveis progressivos</li>
				<li>Sistema de XP e progressão</li>
				<li>Armazenamento de dados no navegador</li>
				<li>Jogabilidade viciante</li>
			</ul>
			
			<h4>Tecnologias</h4>
			<p>HTML5 | CSS3 | JavaScript | localStorage</p>
			
			<h4>Links</h4>
			<p>
				<a href="https://github.com/Elias-official/Projetos" target="_blank">Github</a> | 
				<a href="https://elias-official.github.io/Projetos/" target="_blank">Jogar</a>
			</p>
		`
	}
};

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.btn-saiba-mais').forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		const projectId = btn.getAttribute('data-project');
		const project = projectData[projectId];
		
		if (project) {
			modalTitle.textContent = project.title;
			modalBody.innerHTML = project.description;
			modal.classList.add('active');
		}
	});
});

if (modalClose) {
	modalClose.addEventListener('click', () => {
		modal.classList.remove('active');
	});
}

modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.classList.remove('active');
	}
});

// ========================
// 7. CONTADOR ANIMADO
// ========================
const statNumbers = document.querySelectorAll('.stat-number');

const counterObserver = new IntersectionObserver(function(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
			animateCounter(entry.target);
			entry.target.classList.add('counted');
			counterObserver.unobserve(entry.target);
		}
	});
}, { threshold: 0.3 });

statNumbers.forEach(stat => counterObserver.observe(stat));

function animateCounter(element) {
	const target = parseInt(element.getAttribute('data-target'));
	const duration = 2000; // 2 segundos
	const start = 0;
	const startTime = Date.now();

	function update() {
		const elapsed = Date.now() - startTime;
		const progress = Math.min(elapsed / duration, 1);
		const current = Math.floor(start + (target - start) * progress);
		
		element.textContent = current;
		
		if (progress < 1) {
			requestAnimationFrame(update);
		} else {
			element.textContent = target;
		}
	}

	update();
}

// ========================
// 8. VALIDAÇÃO DO FORMULÁRIO
// ========================
const EMAILJS_SERVICE_ID = 'service_xxx';
const EMAILJS_TEMPLATE_ID = 'template_xxx';
const EMAILJS_PUBLIC_KEY = 'your_public_key';

if (typeof emailjs !== 'undefined') {
	emailjs.init(EMAILJS_PUBLIC_KEY);
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
	contactForm.addEventListener('submit', function(e) {
		e.preventDefault();
		
		const name = document.getElementById('name').value.trim();
		const email = document.getElementById('email').value.trim();
		const message = document.getElementById('message').value.trim();

		// Validações
		if (name.length < 3) {
			showFormMessage('Por favor, digite seu nome completo', 'error');
			return;
		}

		if (!isValidEmail(email)) {
			showFormMessage('Por favor, digite um email válido', 'error');
			return;
		}

		if (message.length < 10) {
			showFormMessage('A mensagem deve ter no mínimo 10 caracteres', 'error');
			return;
		}

		showFormMessage('⏳ Enviando mensagem...', 'info');

		const templateParams = {
			from_name: name,
			reply_to: email,
			message: message
		};

		if (typeof emailjs === 'undefined') {
			showFormMessage('Erro ao carregar EmailJS. Tente novamente mais tarde.', 'error');
			return;
		}

		emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
			.then(() => {
				showFormMessage('✅ Mensagem enviada com sucesso!', 'success');
				contactForm.reset();
			}, (error) => {
				console.error('EmailJS error:', error);
				showFormMessage('Erro ao enviar a mensagem. Tente novamente.', 'error');
			});
	});
}

function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(message, type) {
	const formMessage = document.getElementById('formMessage');
	formMessage.textContent = message;
	formMessage.className = `form-message ${type}`;
}

// ========================
// 9. EFEITO PARALLAX
// ========================
window.addEventListener('scroll', () => {
	const scrolled = window.pageYOffset;
	const parallaxElements = document.querySelectorAll('[data-parallax]');
	
	parallaxElements.forEach(el => {
		const speed = el.getAttribute('data-parallax') || 0.5;
		el.style.transform = `translateY(${scrolled * speed}px)`;
	});
});

console.log('✅ Portfólio carregado com sucesso!');
