document.querySelectorAll('.project-card button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.backgroundColor = '#28a745';
        this.innerText = 'Visited';
    });
});
