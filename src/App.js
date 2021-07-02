import { useState } from 'react';
import Home from './components/Home/Home';
import Dropdown from './components/Navbar/Dropdown/Dropdown';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar toggle={toggle}></Navbar>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <Home></Home>
    </div>
  );
}

export default App;
