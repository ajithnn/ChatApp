chat.directive('playAudio', ['$document',
    function ($document) {
        return {
            restrict: 'A',
            transclude: true,
            link: function (scope, elem, attrs) {
                scope.$watch(function () {
                    return attrs.playAudio;
                }, function (n, o) {                    
                    if (attrs.playAudio == "Yes") {                        
                        $(elem[0]).get(0).play();
                    }
                });
            }
        };
                }]);