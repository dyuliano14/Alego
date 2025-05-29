document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('error-message');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Credenciais básicas (substitua por um sistema mais seguro em produção)
      if (username === 'dyuliano' && password === '141219') {
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
      } else {
        errorMessage.textContent = 'Usuário ou senha incorretos.';
      }
    });
  }

  // Verifica se o usuário está logado
  if (sessionStorage.getItem('loggedIn') !== 'true' && window.location.pathname !== '/login.html') {
    window.location.href = 'login.html';
  }
});

{
  "disciplinas": [
    {
      "id": 1,
      "nome": "Matemática",
      "slug": "matematica",
      "descricao": "Estudo da disciplina: Matemática",
      "aulas": [...],
      "planejamento": "...",
      "flashcards": [...],
      "resumos": "...",
      "apresentacao": "..."
    },
    ...
  ]
}
