document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;

            var hexNav = document.getElementById('hexNav');
            var menuBtn = document.getElementById('menuBtn');
            if (hexNav && menuBtn) {
                menuBtn.onclick = function() {
                    hexNav.classList.toggle('active');
                };
            }
        });
});