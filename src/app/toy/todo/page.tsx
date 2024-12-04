'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { client } from '@/service/sanity';

type Todo = {
  _id?: string;
  contents: string;
  completed: boolean;
};

export default function ToyPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [deletedTodo, setDeletedTodo] = useState('');

  // 데이터를 서버에서 초기화
  const fetchTodos = async () => {
    const query = `*[_type == "todo"]`;
    const data = await client.fetch(query);
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const enterkey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleAddTodo = async () => {
    if (!inputValue.trim()) return;
    setLoading(true);

    try {
      await client.create({
        _type: 'todo',
        contents: inputValue,
        completed: false,
      });
      await fetchTodos(); // 서버에서 데이터를 다시 가져옵니다.
    } catch (error) {
      console.error('Failed to add todo:', error);
    } finally {
      setInputValue('');
      setLoading(false);
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = async (id: string) => {
    setLoading(true);
    try {
      await client.delete(id); // 문서가 존재하면 삭제
      await fetchTodos(); // 서버에서 데이터를 다시 가져옵니다.
    } catch (error) {
      console.error('Failed to delete todo:', error);
    } finally {
      setLoading(false);
    }
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
          <button onClick={handleAddTodo}>+</button>
        </div>
        <ul className={styles.list}>
          {todos.map((todo) => (
            <li
              key={todo._id}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              <span onClick={() => toggleTodo(todo?._id || '')}>
                - {todo.contents}
              </span>
              <button
                onClick={() => {
                  // handleDeleteTodo(todo._id || '');
                  setModalOpen(true);
                  setDeletedTodo(todo._id || '');
                }}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <span>삭제하시겠습니까?</span>
          <div className={styles.btn_box}>
            <button
              onClick={() => {
                handleDeleteTodo(deletedTodo);
                setModalOpen(false);
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
            >
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
