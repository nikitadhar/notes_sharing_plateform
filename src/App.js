import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import Header from './Header';

function App() {
  return (
    <div className=" h-screen">
      <Header/>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
