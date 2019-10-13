import React from 'react';
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native';


class App extends React.Component {
  
  state = {
    text: "",
    todo: []
  }

  addTodo = () => {
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }

  deleteTodo = (t) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }

  renderTodos = () =>{
    return this.state.todo.map(t=> {
      return (
        <TouchableOpacity key={t}>
          <Text style={styles.todo} onPress={()=>{this.deleteTodo(t)}}>
            {t} 🍔🍕🍟
          </Text>
        </TouchableOpacity>
      )
    })
  }

  render(){
    return(
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>Notes App ✔️</Text>
          <TextInput 
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          <Button 
            title="Add Todo"
            color="red"
            onPress={this.addTodo}
            style={styles.button}
          />
          <View style={{marginTop: 100}}/>
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  wholeStyle: {
    backgroundColor: "#0288D1",
    flex:1
  },
  viewStyle: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  inputStyle:{
    height: 40,
    marginBottom: 15,
    borderColor: "white",
    borderWidth: 1,
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  header:{
    marginBottom: 20,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  todo: {
    fontSize: 24,
    color: 'white'
  },
  button: {
    color: 'green'
  }
}

export default App;
