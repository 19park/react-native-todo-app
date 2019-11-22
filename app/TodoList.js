import React from 'react';
import {View} from 'react-native';
import Todo from './Todo';

const TodoList = ({todos, toggleComplete, deleteTodo, type}) => {
    const getVisibleTodos = (todo, type) => {
        switch (type) {
            case '전체':
                return todos;
            case '대기':
                return todos.filter(t => !t.complete);
            case '완료':
                return todos.filter(t => t.complete);
        }
    }
    todos = getVisibleTodos(todos, type)
    todos = todos.map((todo, i) => {
        return (
            <Todo
                key={todo.todoIndex}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
            />
        );
    });
    return (
        <View>
            {todos}
        </View>
    );
};

export default TodoList;
