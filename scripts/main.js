 // Projects data
    const projetos = [
      {
        nome: "Lista de Compras Inteligente",
        img: "assets/imagens/proj/lista-de-compras.jpg",
        link: "https://github.com/Erick-Lim-Souza/Lista_de_Compras",
        demo: "https://lista-de-compras-six-brown.vercel.app/",
        descricao: "Lista de compras com localStorage, modo escuro e funcionalidades avançadas",
        tech: ["HTML", "CSS", "JavaScript", "LocalStorage"]
      },
      {
        nome: "Calculadora de Juros",
        img: "assets/imagens/proj/calculadora-de-juros.jpg",
        link: "https://github.com/Erick-Lim-Souza/Calculadora-de-juros-simples-e-compostos.git",
        demo: "https://calculadoradejurossc.netlify.app/",
        descricao: "Calculadora avançada para juros simples e compostos com gráficos",
        tech: ["HTML", "CSS", "JavaScript", "Chart.js"]
      },
      {
        nome: "Portfólio Dra. Gilcy Kelly",
        img: "assets/imagens/proj/portifolio-dra-gilcy-kelly.jpg",
        link: "#",
        demo: "https://dragilcykellyfarmaceutica.netlify.app/",
        descricao: "Website profissional para farmacêutica especialista em saúde",
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"]
      },
      {
        nome: "Previsão do Tempo",
        img: "assets/imagens/proj/previsao-do-tempo.jpg",
        link: "https://github.com/Erick-Lim-Souza/PreviClima-app-de-previsao-do-tempo.git",
        demo: "https://prevclima.netlify.app/",
        descricao: "Aplicação para consultar a previsão do tempo em qualquer local",
        tech: ["HTML", "CSS", "JavaScript", "API"]
      },
      {
        nome: "To-Do List Avançada",
        img: "assets/imagens/proj/1111.jpg",
        link: "https://github.com/Erick-Lim-Souza/To-Do-List-Avancada.git",
        demo: "https://to-do-list-avancada.vercel.app/",
        descricao: "Lista de tarefas com categorias, filtros e armazenamento local",
        tech: ["HTML", "CSS", "JavaScript", "LocalStorage"]
      },
      {
        nome: "Green Monster Nutri 💚",
        img: "assets/imagens/proj/green-monster.jpg",
        link: "https://github.com/Erick-Lim-Souza/GREEN-MONSTER-RECEITAS",
        demo: "https://green-monster-nutri.netlify.app/", 
        descricao: "Plataforma de nutrição, receitas e dicas de saúde e bem-estar",
        tech: ["HTML", "CSS", "JavaScript", "LocalStorage"]
      }
    ];

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    let isDark = false;

    themeToggle.addEventListener('click', () => {
      isDark = !isDark;
      document.documentElement.classList.toggle('dark-mode', isDark);
      themeToggle.textContent = isDark ? '☀️' : '🌙';
    });


    const artigos = [
        {
        titulo: "Bend: A linguagem brasileira que pensa diferente",
        resumo: "Conheça a linguagem criada por Victor Taelin que desafia a lógica tradicional da programação.",
        autor: "Erick de Lima Souza",
        data: "19/02/2025 11:15",
        link: "https://www.dio.me/articles/bend-a-revolucao-br-na-programacao-paralela-rapida-poderosa-e-feita-para-o-futuro"
      },
  {
    titulo: "OpenAI: Muito Além do ChatGPT",
    resumo: "Um mergulho no ecossistema da OpenAI, passando por ChatGPT, Whisper, DALL·E, Codex e Sora.",
    autor: "Erick de Lima Souza",
    data: "16/02/2025 22:23",
    link: "https://www.dio.me/articles/openai-muito-alem-do-chatgpt"
  }
];

function renderArtigos() {
  const container = document.getElementById('articles-container');
  artigos.forEach((artigo, index) => {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="project-content">
        <h3 class="project-title">${artigo.titulo}</h3>
        <p class="project-description">${artigo.resumo}</p>
        <p class="project-description"><strong>Autor:</strong> ${artigo.autor}</p>
        <p class="project-description"><strong>Data:</strong> ${artigo.data}</p>
        <div class="project-links">
          <a href="${artigo.link}" target="_blank" class="project-link secondary">
            <i data-lucide="external-link"></i> Ler artigo completo
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}




    // Render projects
    function renderProjects() {
      const container = document.getElementById('projects-container');
      
      projetos.forEach((projeto, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
          <img src="${projeto.img}" alt="${projeto.nome}" class="project-img">
          <div class="project-content">
            <h3 class="project-title">${projeto.nome}</h3>
            <p class="project-description">${projeto.descricao}</p>
            <div class="project-tech">
              ${projeto.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
              ${projeto.link !== '#' ? `<a href="${projeto.link}" target="_blank" class="project-link">
                <i data-lucide="github"></i> Código
              </a>` : ''}
              ${projeto.demo !== '#' ? `<a href="${projeto.demo}" target="_blank" class="project-link secondary">
                <i data-lucide="external-link"></i> Demo
              </a>` : ''}
            </div>
          </div>
        `;
        
        container.appendChild(projectCard);
      });
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      // Set current year
      document.getElementById('current-year').textContent = new Date().getFullYear();
      
      // Render projects
      renderProjects();
      renderArtigos();
      
      // Initialize Lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
      
      // Observe elements for animation
      document.querySelectorAll('.fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
      });
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = scrollTop;
    });
