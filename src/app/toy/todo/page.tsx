'use client';

import React, { useState } from 'react';
import styles from './pga.module.css';
import Link from 'next/link';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function ToyPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (!inputValue.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Link className={styles.link_home} href='/toy'>
          🏠
        </Link>
        <h1 className={styles.title}>To-Do List</h1>
        <div className={styles.inputBox}>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Add a new task...'
          />
          <button onClick={addTodo}>+</button>
        </div>
        <ul className={styles.list}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              <span onClick={() => toggleTodo(todo.id)}>- {todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
