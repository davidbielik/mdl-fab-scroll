(function() {
    angular
        .module('mdl-fab-scroll', [])
        .run(function($timeout, $rootScope) {
            init();
            $timeout(function(){
                // var $rootScope = angular.element(document.body).injector().get('$rootScope');
                $rootScope.$on('$routeChangeSuccess', init);
            });


            function init(){
                $timeout(function(){
                    var lastPosition; // used to tell if user scrolled up or down
                    var timeout; // timeout to show
                    var position; // current position
                    var hideClass = 'mdl-fab-scroll-hide';
                    var container = document.querySelector('.mdl-layout__content');
                    container = angular.element(container);
                    container.on('scroll', onScroll);

                    function onScroll(event){
                        position = event.target.scrollTop || 0;

                        if (position >= lastPosition){
                            $timeout(hide);
                            $timeout(show, 2e3);
                        } else {
                            $timeout.cancel(timeout);
                            $timeout(show);
                        }
                        lastPosition = position;
                    }

                    function hide(){
                        angular.element(document.body).addClass(hideClass);
                    }
                    function show(){
                        angular.element(document.body).removeClass(hideClass);
                    }
                });
            }
        });




    var css = document.createElement('style');
    css.innerHTML = '.mdl-fab-scroll {transition-property: transform;}body.mdl-fab-scroll-hide .mdl-fab-scroll {animation: transform 3s;transform: scale(0,0) rotate(360deg)}';
    document.body.appendChild(css);
})();