'use client'
import Link from 'next/link';
import styles from './styles/breadcrumb.module.css'
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  return (
    <nav className={styles.nav}>
        <div className={styles.breadcrumbItem}>
          <Link href="/">
            home
          </Link>
        </div>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const label = segment.charAt(0).toUpperCase() + segment.slice(1);
          return (
            <div key={label + index} className={styles.breadcrumbItem}>
              <Link href={href}>
                {`> ${label}`}
              </Link>
            </div>
          );
        })}
    </nav>
  );
};

export default Breadcrumb;
