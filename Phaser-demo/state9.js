
demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#990000";
        console.log('state9');

        addChangeStateEventListener();
    },
    update: function(){}
};