'use client';

import React, { useState, useEffect } from 'react';
import styles from './pga.module.css';
import Link from 'next/link';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '@/service/localStorageUtils';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// 키 이름 설정
const STORAGE_KEY = process.env.NEXT_PUBLIC_TODO_STORAGE_KEY as string;

export default function ToyPage() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');

  // 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    const storedData = loadFromLocalStorage(STORAGE_KEY);
    setTodos(storedData);
  }, []);

  // 데이터가 변경될 때 로컬 스토리지에 저장
  useEffect(() => {
    saveToLocalStorage(STORAGE_KEY, todos);
  }, [todos]);

  const enterkey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = () => {
    if (!inputValue.trim()) return;
    const newData = [
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ];
    setTodos(newData);
    saveToLocalStorage(STORAGE_KEY, newData);
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
            onKeyDown={enterkey}
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
                cursor: 'pointer',
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
