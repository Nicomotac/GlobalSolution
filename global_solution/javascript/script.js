document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const bot = document.getElementById('chatbot-icon');
  if (bot) {
    bot.addEventListener('click', () => {
      alert('Clique na opção "Chat" para ir até o Dr. José');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('chatForm');
      const input = document.getElementById('chatInput');
      const btn = document.getElementById('sendBtn');
      const chatWindow = document.getElementById('chatWindow');

      input.addEventListener('input', () => {
        btn.disabled = input.value.trim() === '';
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();

      })})