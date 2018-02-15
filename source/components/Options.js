import React from 'react';
import Option from './Option';

const Options = ((props) =>{
    return(
        //MÉTODO PARA IMPRIMIR OS ELEMENTOS DO ARRAY DENTRO DE UM COMPONENTE//
        <div>
            <button
                className="button button--link"            
                onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {props.options.map((options) =>(
                <Option  
                    key={options} 
                    optionText={options} 
                    handleDeleteOption = {props.handleDeleteOption}    
                    />
                ))
            }
        </div>
        //----//
    );
});
/*
class Options extends React.Component{
    render(){
        return (
            //MÉTODO PARA IMPRIMIR OS ELEMENTOS DO ARRAY DENTRO DE UM COMPONENTE//
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.map((options) =><Option  key={options} optionText={options} />)}
            </div>
            //----//
        );
    }
}
*/

export default Options;