export class Comp2 extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        //this.styles = sty;
    }

    handleClick () {
        var x = 27;
        var y = 31 ;
        var z = x + y;
        console.log(z);
    };

    render(){

        return (
            <div >
                <button onClick={this.handleClick}>Testtt</button>
            </div>
        )
    }
}
