
import './style/app.scss';

import Comp1 from './comp1.jsx';
import Comp2 from './comp2.jsx';

export class App extends React.Component {
    render () {
        return (
            <div>
                <h1>App</h1>
                <Comp1/>
                <Comp2/>
            </div>
        )
    }
}

React.render(<App/>,document.body);