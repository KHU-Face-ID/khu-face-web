import React, { Component } from 'react';
import './ClassItem.css';

class ClassItem extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked !== nextProps.checked;
    }


    render(){
        const { text, checked, id, color, onToggle, onRemove } = this.props;

        return (
            <div className="class-item" onClick={() => onToggle(id)}>
                <div className='remove' onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}
                }>X</div>
                <div style={{ color }} className={`class-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        )
    }
}

export default ClassItem;