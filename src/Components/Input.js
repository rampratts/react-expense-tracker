import React from 'react';
import './Input.css';

class Input extends React.Component {
    liftUp = e => {
        this.props.onChange(e.target.value);
    }

    render() {
        return(
            <React.Fragment>
                <input
                 className='text-input'
                 placeholder={this.props.placeholder}
                 type={this.props.type ? `${this.props.type}` : 'text'} 
                 value={this.props.value}
                 id={this.props.id}
                 onChange={this.liftUp}    
                />
            </React.Fragment>
        );
    }
}

export default Input;