window.addEventListener('scroll', function() {
    var whatsappBar = document.getElementById('whatsappBar');
    if (window.scrollY > 200) { // Ajuste este valor conforme necessário
        whatsappBar.classList.add('show');
    } else {
        whatsappBar.classList.remove('show');
    }
});
