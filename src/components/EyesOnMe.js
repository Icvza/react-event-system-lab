// Code EyesOnMe Component Here
import React, {Component} from 'react'


export default class EyesOnMe extends Component{
    render(){
        
        handleFocus = () => console.log('Good!')

        handleBlur = () => console.log('Hey! Eyes on me!')
        return(
            <div>
                <button
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                >
                   soemthing 
                </button>
            </div>
        )
    }

}