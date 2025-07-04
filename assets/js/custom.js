document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.project-img-link').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - 90,
                    behavior: 'smooth'
                });
            }
        });
    });
});