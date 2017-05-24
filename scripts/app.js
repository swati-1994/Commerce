angular
    .module("eCommerce",[])

    .directive(helloWorld,function () {

        return{
            template:"i am a directive"
        }
        
    });