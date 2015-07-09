
export class Comp2 extends React.Component {

    constructor(props) {
        super(props);
    //    this.handleClick = this.handleClick.bind(this);
        //this.styles = sty;
    }

        handleClick () {
        var x = 27;
        var y = 400000 ;
        var z = x + y;
        console.log(z);
    }

    render () {
        var x = 66;
        var y = 90 ;
        var z = x + y;
        console.log(z);
        return (
            <div>
                <h1  onClick={this.handleClick}>SUPER CALENDARasdasd asdasd!!!!</h1>
                <div> hello Calendar </div>
            </div>
        );
    }

}
module.hot.accept();

/*

export class Comp2 extends React.Component {

    constructor(props) {
        super(props);
    //    this.handleClick = this.handleClick.bind(this);
        //this.styles = sty;
    }

    handleClick () {
        var x = 27;
        var y = 3133 ;
        var z = x + y;
        console.log(z);
    };

    render(){

        return (
            <div >
                 <span>haahah</span>
                <button onClick={this.handleClick}>Testtt</button>
            </div>
        )
    }
}
 module.hot.accept();

*/


