(function() {
    'use strict';

    var books = document.querySelector('#books');

    books.addEventListener('click', function(e) {
        if (e.target) {
            if (e.target.matches('a#book4')) {
                console.log(e.target.innerText, 'was clicked - Buy it: http://www.amazon.com/The-Alchemist-Paulo-Coelho/dp/0061122416');
            } else {
                console.log(e.target.innerText, 'was clicked (with event delegation)');
            }
        }
    }, false);
})();