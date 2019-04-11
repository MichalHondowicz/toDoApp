import React, {Component} from 'react';
import Todos from './components/Todos'
import './App.css'
import Header from './components/layout/Header'

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Take out trash',
                completed: true
            },
            {
                id: 2,
                title: 'Take a walk',
                completed: false
            },
            {
                id: 3,
                title: 'Do shopping',
                completed: false
            }
        ]
    };

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    };

    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
    };

    render() {
        return (
            <div className="App">
                <Header/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </div>
        );
    }
}

export default App;
