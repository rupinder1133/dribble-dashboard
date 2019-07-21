import React from 'react';
import Dashboard from "./pages/dashboard/Dashboard";
import styles from './app.module.scss';
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";

const App = () => {
  return (
      <div className={styles.appContainer}>
        <NavBar />
        <div className={styles.mainContent}>
          <Header />
          <main>
            <Dashboard />
          </main>
        </div>
      </div>
  )
};

export default App;
