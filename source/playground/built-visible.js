//EXERCICIO COM COMPONENT STATE
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) =>{
            return {
                visible: !prevState.visible
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Exercicio de JSX</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visible ? 'esconde': 'aparece'}
                </button>
                {this.state.visible && (<div><p>Aqui estou eu</p></div>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
//-----//
