import { useState } from 'react';
import Navbar from './components/navbar';
import Newsboard from './components/newsboard';

function App() {
  const [category, setcategory] = useState("general");

  return (
    <div>
      <Navbar setcategory={setcategory} />  
      <Newsboard category={category} />
    </div>
  );
}

export default App;
