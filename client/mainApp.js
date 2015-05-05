var chat = angular.module('chatApp', ['ngRoute','ngSanitize'])

.config(['$routeProvider','$locationProvider','$sceProvider',function ($routeProvider, $locationProvider,$sceProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/Templates/login.html',
            controller : 'loginController'
        })
        .when('/chat', {
            templateUrl: '/static/Templates/chat.html',
            controller : 'chatboxController'
        })
	.otherwise({

	redirectTo: '/'

      });

    $sceProvider.enabled(false);

    var icons = {},
        reverseIcons = {},
        i, j, hex, name, dataItem, row, column, totalColumns;

    for (j = 0; j < Config.EmojiCategories.length; j++)
    {
        totalColumns = Config.EmojiCategorySpritesheetDimens[j][1];
        for (i = 0; i < Config.EmojiCategories[j].length; i++)
        {
            dataItem = Config.Emoji[Config.EmojiCategories[j][i]];
            name = dataItem[1][0];
            row = Math.floor(i / totalColumns);
            column = (i % totalColumns);
            icons[':' + name + ':'] = [j, row, column,
                ':' + name + ':'
            ];
            reverseIcons[name] = dataItem[0];
        }
    }

    $.emojiarea.spritesheetPath = '/static/assets/emoji/img/emojisprite_!.png';
    $.emojiarea.spritesheetDimens = Config.EmojiCategorySpritesheetDimens;
    $.emojiarea.iconSize = 20;
    $.emojiarea.icons = icons;
    $.emojiarea.reverseIcons = reverseIcons;
}]);
