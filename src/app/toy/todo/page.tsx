'use client';

import React, { useState, useEffect, Suspense } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { client } from '@/service/sanity';
import Loading from '@/app/loading';
import { log } from 'console';

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
    const query = `*[_type == "todo"] | order(_createdAt desc)`; //업데이트 순으로 정렬 (최신이 먼저오도록))
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
    setInputValue('');
    setLoading(true);

    try {
      await client.create({
        _type: 'todo',
        contents: inputValue,
        completed: false,
      });
      await fetchTodos(); // 서버에서 데이터를 다시 가져옴
    } catch (error) {
      console.error('Failed to add todo:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    await client
      .patch(id)
      .set({ completed: !completed }) //필드 값 수정
      .commit(); // 서버에 변경 사항 적용

    await fetchTodos(); // 서버에서 데이터를 다시 가져옴
  };

  const handleDeleteTodo = async (id: string) => {
    setLoading(true);
    try {
      await client.delete(id); // 문서가 존재하면 삭제
      await fetchTodos(); // 서버에서 데이터를 다시 가져옴.
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
        {loading ? (
          <Loading />
        ) : (
          <ul className={styles.list}>
            {todos.map((todo) => (
              <li
                key={todo._id}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#888' : 'initial',
                  cursor: 'pointer',
                }}
              >
                <span
                  onClick={() => toggleTodo(todo?._id || '', todo.completed)}
                >
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
        )}
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
