import {createRoot} from 'react-dom/client'
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import 'antd/dist/antd.min.css';
import './global.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
