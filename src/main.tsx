import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

AOS.init({
  once: true,
  duration: 900,
  easing: 'ease-out-cubic',
});

createRoot(document.getElementById("root")!).render(<App />);
