(function () {
    'use strict';


    // Theme toggle with persistence
    const themeBtn = document.getElementById('toggle-theme');
    function setTheme(name) {
        document.documentElement.dataset.theme = name;
        themeBtn.setAttribute('aria-pressed', String(name !== 'light'));
        localStorage.setItem('theme', name);
    }
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);


    themeBtn.addEventListener('click', () => {
        const current = document.documentElement.dataset.theme || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
    });
    // Simple SPA: scroll to sections when clicking nav (degrades gracefully)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const el = document.querySelector(href);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    el.focus({ preventScroll: true });
                }
            }
        });
    });

    // Accessible form validation
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');


    function showFeedback(msg, isError) {
        feedback.className = isError ? 'error' : 'success';
        feedback.textContent = msg;
        // ensure the message is announced to screen readers
        feedback.setAttribute('aria-live', isError ? 'assertive' : 'polite');
        if (!feedback.classList.contains('sr-only')) {
            feedback.classList.remove('sr-only');
        }
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const name = (data.get('name') || '').trim();
        const email = (data.get('email') || '').trim();
        const message = (data.get('message') || '').trim();


        const errors = [];
        if (name.length < 2) errors.push('O nome deve ter ao menos 2 caracteres.');
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push('E-mail inválido.');
        if (message.length < 10) errors.push('A mensagem deve ter ao menos 10 caracteres.');


        // Remove previous error highlight
        form.querySelectorAll('input,textarea').forEach(el => el.removeAttribute('aria-invalid'));


        if (errors.length) {
            showFeedback('Corrija os erros: ' + errors.join(' '), true);
            // Mark invalid inputs for screen readers
            if (name.length < 2) document.getElementById('name').setAttribute('aria-invalid', 'true');
            if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) document.getElementById('email').setAttribute('aria-invalid', 'true');
            if (message.length < 10) document.getElementById('message').setAttribute('aria-invalid', 'true');
            return;
        }


        // Simula envio (substitua por fetch para enviar ao servidor)
        showFeedback('Enviando...', false);
        setTimeout(() => {
            showFeedback('Mensagem enviada com sucesso! Obrigado.', false);
            form.reset();
        }, 700);
    });


    // Keyboard navigation enhancement: allow Enter on focused article to open (example)
    document.querySelectorAll('article').forEach(a => {
        a.setAttribute('tabindex', '0');
        a.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                a.classList.toggle('expanded');
            }
        })
    });


})();