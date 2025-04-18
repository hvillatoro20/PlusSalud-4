// Función para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Efecto de scroll en el header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Animaciones al hacer scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Ejecutar al cargar y al hacer scroll
    fadeInOnScroll();
    window.addEventListener('scroll', fadeInOnScroll);
    
    // Validación del formulario de contacto
    const formContacto = document.getElementById('formContacto');
    
    if (formContacto) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar campos
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const telefono = document.getElementById('telefono');
            const servicio = document.getElementById('servicio');
            const mensaje = document.getElementById('mensaje');
            
            let isValid = true;
            
            // Validar nombre
            if (nombre.value.trim() === '') {
                nombre.style.borderColor = 'red';
                isValid = false;
            } else {
                nombre.style.borderColor = '#e9ecef';
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.style.borderColor = 'red';
                isValid = false;
            } else {
                email.style.borderColor = '#e9ecef';
            }
            
            // Validar teléfono (al menos 8 dígitos)
            const phoneRegex = /^\d{8,}$/;
            if (!phoneRegex.test(telefono.value.replace(/\D/g, ''))) {
                telefono.style.borderColor = 'red';
                isValid = false;
            } else {
                telefono.style.borderColor = '#e9ecef';
            }
            
            // Validar servicio
            if (servicio.value === '') {
                servicio.style.borderColor = 'red';
                isValid = false;
            } else {
                servicio.style.borderColor = '#e9ecef';
            }
            
            // Validar mensaje
            if (mensaje.value.trim() === '') {
                mensaje.style.borderColor = 'red';
                isValid = false;
            } else {
                mensaje.style.borderColor = '#e9ecef';
            }
            
            // Si todo es válido, enviar formulario (simulado)
            if (isValid) {
                // Aquí normalmente harías una petición AJAX o fetch
                alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
                formContacto.reset();
            }
        });
    }
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Actualizar año en el footer
    const yearElement = document.querySelector('.footer-bottom p:first-child');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2023', currentYear);
    }
});