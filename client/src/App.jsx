import {Routes , Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>
    </>
  );
}
