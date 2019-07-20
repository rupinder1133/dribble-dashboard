import React from 'react';
import Dashboard from "./pages/dashboard/Dashboard";
import styles from './app.module.css';
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";

const App = () => {
  return (
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.mainContent}>
          <NavBar />
          <main>
            <Dashboard />
          </main>
        </div>
      </div>
  )
};

export default App;
