document.addEventListener('DOMContentLoaded', function() {
    
    items.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = "translateY(-5px)";
            this.style.transition = "0.4s";
        });

        item.addEventListener('mouseout', function() {
            this.style.transform = "translateY(0)";
            this.style.transition = "0.4s";
        });
    });
});