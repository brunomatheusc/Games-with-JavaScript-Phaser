
demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#cc3399";
        console.log('state5');

        addChangeStateEventListener();
    },
    update: function(){}
};