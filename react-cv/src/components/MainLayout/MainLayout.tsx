import { Outlet } from 'react-router';
import cls from './MainLayout.module.css';
import { Header } from '../Header';
import { Suspense } from 'react';
import { Loader } from '../Loader';
import Footer from '../Footer/Footer';

function MainLayout() {
  return (
    <>
      <div className={cls.mainLayout}>
        <Header />
        <div className={cls.mainWrapper}>
          <main className={cls.main}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainLayout;