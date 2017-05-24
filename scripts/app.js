angular
    .module("eCommerce",["ngMaterial"])
    .config(function($mdThemingProvider){
        $mdThemingProvider.theme("default")
            .primaryPalette('teal')
            .accentPalette('orange');
    })

    .directive(helloWorld,function () {

        return{
            tepmplate:"i am a directive"
        }
        
    });