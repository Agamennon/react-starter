var Button = require('./button.jsx');

var Comp1 = React.createClass({
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
                <h1 onClick={this.handleClick}>COMP 1 Bitchesdfsdfs </h1>
                <div className="red" > <p> hellofsdf  </p> </div>
                <Button kind='primary'>Radium Button</Button>
            </div>
        );
    }
});
module.exports = Comp1;