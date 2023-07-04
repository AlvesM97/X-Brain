import styles from './PaginaPadrao.module.css';
import { Outlet } from 'react-router';

export default function DefaultPage() {
  return (
    <div className={styles.container}>
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
    </div>
  )
}