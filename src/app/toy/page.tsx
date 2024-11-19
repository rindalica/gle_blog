import Link from 'next/link';
import styles from './page.module.css';

export default function ToyPage() {
  return (
    <div className={styles.background}>
      <h1 className={styles.hello}>Hello</h1>
      <div className={styles.link_group}>
        <Link className={styles.link_menu_rec} href='/toy/menuRecommend'>
          메뉴 추천
        </Link>
        <Link className={styles.link_todo} href='/toy/todo'>
          To DO
        </Link>
      </div>
    </div>
  );
}
