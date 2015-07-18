
//import './style/app.scss';
//import React from 'react';
import { Router, Route, Link} from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import Home from './home.jsx';
import Comp1 from './comp1.jsx';
import Comp2 from './comp2.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/">hello home</Link></li>
                    <li><Link to="/comp1">comp 1</Link></li>
                    <li><Link to="/comp2">comp 2</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

var NotFound = React.createClass({
    render() {
        return <h2>Not found</h2>;
    }
});

React.render((
    <Router history={history}>
        <Route component={App}>
            <Route path="/" component={Home}/>
            <Route path="comp1" component={Comp1}/>
            <Route path="comp2" component={Comp2}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
), document.body);


/*
 var App = React.createClass({
 render () {
 return (
 <div>
 <h1>App</h1>
 {/!* change the <a>s to <Links>s *!/}
 <ul>
 <li><Link to="/comp2">Comp2</Link></li>
 </ul>

 {/!*
 next we replace `<Child>` with `this.props.children`
 the router will figure out the children for us
 *!/}
 {this.props.children}
 </div>
 )
 }
 });
 */



/*
 var DefaultRoute = Router.DefaultRoute;
 var Route = Router.Route;
 var RouteHandler = Router.RouteHandler;
 var Link = Router.Link;
 require('./style/app.scss');


 var App = React.createClass({
 render: function () {
 return (
 <div>

 <ul>
 <li><Link to='/'>comp0</Link></li>
 <li><Link to='/comp1'>comp1</Link></li>
 <li><Link to='/comp2'>comp2</Link></li>
 </ul>

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

 */
