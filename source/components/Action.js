import React from 'react';

//EXEMPLO DE STATE FUNCIONAL COMPONENT
const Action = ((props)=> {
    return(
        <div>
            <button className="big-button" 
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What Should I Do??
            </button>
        </div>
    );
});
/*
class Action extends React.Component{
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}>
                    What Should I Do??
                </button>
            </div>
        );
    }
}
*/

export default Action;