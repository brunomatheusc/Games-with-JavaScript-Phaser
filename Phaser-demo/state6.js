
demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#ccccff";
        console.log('state6');

        addChangeStateEventListener();
    },
    update: function(){}
};