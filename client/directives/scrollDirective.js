chat.directive('scrollBottom', ['$document',
    function ($document) {
            return {
                restrict: 'A',
                link: function (scope, elem, attrs) {
                    scope.$watch(
                        function () {
                            return elem[0].childNodes.length;
                        },
                        function (newValue, oldValue) {
                            if (newValue !== oldValue) {
                                $(elem).scrollTop($(elem)[0].scrollHeight);
                            }
                        }
                    );
                    }
            };
                }]);