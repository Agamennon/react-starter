


export default class Comp1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick (){
        var x = 10;
        var y = x + 5;
        console.log('hello y = '+y);
    }
    render() {
        var t = 5;
        var u = 5;
        var p = t+u;
        return (<p onClick={this.handleClick}>I am Comp1!</p>);
    }
}

