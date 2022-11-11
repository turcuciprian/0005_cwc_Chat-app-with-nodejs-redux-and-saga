import './App.css';
import { useRoutes } from 'react-router-dom'
import { routes } from './routes/path';
import { AuthProvider } from './routes/auth';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
  },[])
  const element = useRoutes(routes)
  return (
    <AuthProvider>
      <div className="App bg-500-red">
        {element}
      </div>
    </AuthProvider>
  );
}

export default App;
