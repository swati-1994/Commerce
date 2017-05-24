angular
    .module("eCommerce",["ngMaterial"])
    .config(function($mdThemingProvider){
        $mdThemingProvider.theme("default")
            .primaryPalette('teal')
            .accentPalette('orange');
    })

    .directive(helloWorld,function () {

        return{
            template:"i am a directive"
        }
        
    });