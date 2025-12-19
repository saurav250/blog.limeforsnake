document.addEventListener('mousemove', function(e) {
    // Create the star element
    let star = document.createElement('div');
    star.classList.add('star')
    // Position the star at mouse coordinates
    // We add scrollX/Y so it works even if you scroll down
    star.style.left = e.pageX + 'px';
    star.style.top = e.pageY + 'px'
    // Randomize size slightly for natural look
    let size = Math.random() * 12 + 5; 
    star.style.width = size + 'px';
    star.style.height = size + 'px'
    // Add to body
    document.body.appendChild(star)
    setTimeout(function() {
        star.remove();
    }, 800);
});