document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('error-message');

  // 👥 Lista de usuários autorizados
  const users = {
    dyuliano: '141219',
    admin: '123456',
    professor: 'senha123'
  };

  // 🧠 Manipula o envio do formulário de login
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      if (users[username] && users[username] === password) {
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = 'public/assets/disciplinas/index.html';  // Redireciona para a home
      } else {
        errorMessage.textContent = 'Usuário ou senha incorretos.';
      }
    });
  }

  // 🔒 Bloqueia acesso direto se não estiver logado
  const protectedPages = ['index.html', 'disciplinas.html', 'regimento-interno.html'];
  const currentPage = window.location.pathname.split('/').pop();

  if (protectedPages.includes(currentPage) && sessionStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html';
  }

  // 📚 Dados de disciplinas (simulação de API local)
  const mockData = {
    "disciplinas": [
      {
        "id": 1,
        "nome": "Matemática",
        "slug": "matematica",
        "descricao": "Estudo da disciplina: Matemática",
        "aulas": ["Funções", "Geometria", "Probabilidade"],
        "planejamento": "Plano de estudos para 12 semanas.",
        "flashcards": ["Teorema de Pitágoras", "Área do círculo", "Conjuntos"],
        "resumos": "Resumo de conceitos matemáticos fundamentais.",
        "apresentacao": "Apresentação interativa com gráficos e fórmulas."
      },
      {
        "id": 2,
        "nome": "História",
        "slug": "historia",
        "descricao": "Estudo da disciplina: História",
        "aulas": ["Idade Média", "Revolução Francesa", "Era Vargas"],
        "planejamento": "Plano semanal dividido por períodos históricos.",
        "flashcards": ["Feudalismo", "Iluminismo", "Ditadura Militar"],
        "resumos": "Resumo cronológico dos principais eventos.",
        "apresentacao": "Slides e imagens históricas para apoio visual."
      }
    ]
  };

  // 💡 Exemplo: uso dos dados mockados (substituir por fetch real depois)
  window.loadMockData = () => {
    console.log("Disciplinas simuladas:", mockData.disciplinas);
    // Aqui você poderia renderizar no HTML, ex:
    // document.getElementById('disciplinas-container').innerHTML = ...
  };
});

