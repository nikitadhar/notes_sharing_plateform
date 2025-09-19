import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div className=" h-screen">
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
