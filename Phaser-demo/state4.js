
demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#339966";
        console.log('state4');

        addChangeStateEventListener();
    },
    update: function(){}
};