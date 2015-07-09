var Comp0 = React.createClass({


    handleClick:function() {
        var x = 27;
        var y = u ;
        var z = x + y;
        console.log(z);
    },
    render: function () {
        var x = 66;
        var y = 909 ;
        var z = x + y;
        console.log(z);
        return (
            <div>
                <h1 onClick={this.handleClick}>COMP 0 Bitchesdfsdfs </h1>
                <div className="red" > <p> hellofsdf  </p> </div>

            </div>
        );
    }
});
module.exports = Comp0;