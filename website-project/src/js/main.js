document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;

            // Hex menu toggle logic
            var hexNav = document.getElementById('hexNav');
            var menuBtn = document.getElementById('menuBtn');
            if (hexNav && menuBtn) {
                menuBtn.onclick = function() {
                    hexNav.classList.toggle('active');
                    menuBtn.classList.toggle('active');
                };
            }
        });
});