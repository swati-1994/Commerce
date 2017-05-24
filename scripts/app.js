angular
    .module("eCommerce",[ngMaterial])

    .directive('helloWorld',function () {

        return{
            template:"i am a directive"
        }
        
    });