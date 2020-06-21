import React, { Component } from 'react';
import ClassListTemplate from 'components/ClassListTemplate';
import Form from 'components/Form';
import ClassItemList from 'components/ClassItemList';
import Palette from 'components/Palette';


const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class Todo extends Component {
  
  id=3

  state={
    input:'',
    classes:[
      {id:0, text:'창의적 종합설계', checked:false},
      {id:1, text:'프로세스 마이닝', checked:true},
      {id:2, text:'인공지능', checked:false}
    ],
    color: "#343a40"
  }

  handleChange = (e) => {
    this.setState({
      input:e.target.value
    });
  }

  handleCreate = () => {
    const { input, classes, color } = this.state;
    this.setState({
      input:'',
      classes: classes.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { classes } = this.state;

    const index = classes.findIndex(aclass => {return aclass.id === id;});
    const selected = classes[index];

    const nextClasses = [...classes];

    nextClasses[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      classes: nextClasses
    });
  }

  handelRemove = (id) => {
    const { classes } = this.state;
    this.setState({
      classes: classes.filter(aclass => {return aclass.id !== id;})
    });
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    });
  }

  render() {
    const { input, classes, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handelRemove,
      handleSelectColor
    } = this;

    return (
      <ClassListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={color}
        />
      )}
        palette={(
          <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>
        )}>
        <ClassItemList classes={classes} onToggle={handleToggle} onRemove={handelRemove}/>
      </ClassListTemplate>
    );
  };
};

export default Todo;