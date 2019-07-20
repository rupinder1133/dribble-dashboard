import React from 'react';
import Dashboard from "./pages/dashboard/Dashboard";
import styles from './app.module.css';

const App = () => {
  return (
      <div className={styles.appContainer}>
        <main>
          <Dashboard />
        </main>
      </div>
  )
};

export default App;
