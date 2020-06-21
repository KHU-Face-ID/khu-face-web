import React, {Component} from 'react';
import ClassItem from './ClassItem';

class ClassItemList extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.classes !== nextProps.classes;
    }

    render() {
        const { classes, onToggle, onRemove } = this.props;

        const classList = classes.map(
            ({id, text, checked, color}) => (
                <ClassItem
                    id={id}
                    text={text}
                    checked={checked}
                    color={color}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );

        return (
            <div>
                {classList}
            </div>
        );
    }
}

export default ClassItemList;