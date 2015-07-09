
require('./style/app.scss');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Comp0 = require('./comp0.jsx');
var Comp1 = require('./comp1.jsx');
import {Comp2} from './comp2.jsx';


var App = React.createClass({
    render: function () {


        return (
            <div>
                <div >
                    <li><Link to="comp0">comp0</Link></li>
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
        <DefaultRoute name="comp0"  handler={Comp0}/>
    </Route>
);


Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});

