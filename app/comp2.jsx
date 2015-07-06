var Comp2 = React.createClass({

    handleClick:function() {
        var x = 27;
        var y = 40 ;
        var z = x + y;
        console.log(z);
    },


    render: function () {
        var x = 66;
        var y = 90 ;
        var z = x + y;
        console.log(z);
        return (
            <div>
                <h1  onClick={this.handleClick}>Comp2</h1>
                <div> <p> this is working !!! </p> </div>
            </div>
        );
    }
});

module.exports = Comp2;