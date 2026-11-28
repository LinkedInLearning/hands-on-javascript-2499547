import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Story from './Story.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Story />
  </StrictMode>
);
