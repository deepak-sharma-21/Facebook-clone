import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import styles from '../components/friends.module.css'
import { Link, Outlet } from 'react-router-dom';

export const Friends = () => {
  const {logout} = useContext(AuthContext);
  return (<>
    <div className={styles.sidebar}>
      <section>
        <h1>Friends</h1>
      </section>
      <div>
      <Link to='/friends'>
      <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzMReuh}></span></span>
        Home</Link>
      </div>
      <div>
        <Link to='/friends/requests'>
          <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzMReu}></span></span>
          Friend requests
          <span className={styles.arrowsection}><span className={styles.arrow}></span></span>
        </Link>
      </div>

      <div>
        <Link to='/friends/suggestions'>
        <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzMRe}></span></span>
          Suggestions
          <span className={styles.arrowsection2}><span className={styles.arrow}></span></span>
        </Link>
      </div>

      <div>
        <Link to='/friends/list'>
        <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzMR}></span></span>
          All Friends
          <span className={styles.arrowsection3}><span className={styles.arrow}></span></span>
          </Link>
      </div>
      <div>
        <Link to='/friends/birthdays'>
        <span className={styles.iconsection}><span className={styles.csssprite2Uq6nzM}></span></span>
          Birthdays</Link>
      </div>
    </div>
    <div className={styles.content}>
    </div>
    
    <button onClick={()=>logout()}>Logout</button>
  </>)
}
