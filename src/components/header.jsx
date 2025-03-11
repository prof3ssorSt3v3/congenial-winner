//rafce, rfce
import { useState } from 'react';
import styles from './header.module.css';

export default function Header({ action, strKeyword }) {
  const [keyword, setKeyword] = useState(strKeyword);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>The Awesome Site</h1>
      <form action={action}>
        <input name="search" type="search" value={keyword} onChange={(ev) => setKeyword(ev.target.value.toLowerCase())} />
        <button>Send</button>
      </form>
    </header>
  );
}
