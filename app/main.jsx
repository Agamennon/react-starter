
require('./app.scss');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Comp1 = require('./comp1.jsx');
var Comp2 = require('./comp2.jsx');


var App = React.createClass({
    render: function () {


        return (
            <div>
                <div >
                    <li><Link to="comp1">comp1</Link></li>
                    <li><Link to="comp2">comp2</Link></li>
                </div>
                <div>
                    <RouteHandler {...this.props}/>
                </div>
            </div>

        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="comp1"  handler={Comp1}/>
        <Route name="comp2"  handler={Comp2}/>
    </Route>
);


Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});


/*



var Comp1 = React.createClass({

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
                <h1  onClick={this.handleClick}>This is csdfsdfsss</h1>
                <div> <p> hello tosadasdasdao </p> </div>
            </div>
        );
    }
});
React.render(<Comp1/>, document.body);
*/
