const Item = React.createClass({
    render() {
        "use strict";
        return <li>{this.props.name}</li>
    }
})

const Comp = React.createClass({
    render() {
        "use strict";
        return <ul>
            {this.props.data.map(item => <Item name={item}/>)}
        </ul>
    }
})

const list = [
    'A',
    'B',
    'C',
    'D'
]
ReactDOM.render(<Comp data={list}/>, document.getElementById('root'))










