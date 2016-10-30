(function() {
    angular
        .module('mdl-fab-scroll', [])
        .run(function() {
            setTimeout(function() {
                var lastPosition;
                var hideClass = 'mdl-fab-scroll-hide';
                var container = document.querySelector('.mdl-layout__content');
                container = angular.element(container);
                container.on('scroll', function(event) {
                    var position = event.target.scrollTop || 0;
                    angular.element(document.body)[position > lastPosition ? 'addClass' : 'removeClass'](hideClass);
                    lastPosition = position;
                });
            }, 0);
        });

    var css = document.createElement('style');
    css.innerHTML = '.mdl-button--fab {transition-property: transform;}body.mdl-fab-scroll-hide .mdl-button--fab {animation: transform 3s;transform: scale(0,0) rotate(360deg)}';
    document.body.appendChild(css);
})();