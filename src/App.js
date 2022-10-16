import { Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import IndexTh from './pages/thai/index';
import IndexCh from './pages/chinese/index';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/th" element={<IndexTh />} />
        <Route path='/ch' element={<IndexCh />} />
      </Routes>

    </>
    
  
    
    
  );
}

export default App;
