document.addEventListener('DOMContentLoaded', function() {
    let prank = document.querySelector('.prank');
    let prankap = document.querySelector('.prankap');

    prank.addEventListener('click', function() {
        prankap.style.display = 'block';
    });

    prankap.addEventListener('click', function() {
        prankap.style.display = 'none';
    });
});