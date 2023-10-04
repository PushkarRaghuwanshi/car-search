import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className=" w-full flex flex-col min-h-screen bg-[#dcdde6]">
      <Navbar></Navbar>
      <Cards></Cards>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
