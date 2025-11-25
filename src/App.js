import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import { ToastConfig } from './modules/ToastConfig';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className=" h-screen">
      <RecoilRoot>
       <ToastConfig />
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
