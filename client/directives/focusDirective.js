chat.directive('focusBox', ['$document',
    function ($document) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                $(elem).on("change", function () {
                    $(elem).focus();
                });
            }
        };
                }]);