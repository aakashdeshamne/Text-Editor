
import './App.css';                     
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
      <>
      
<Navbar title="Textutils" abouttext="About us"/>
<div className="container my-3">
<TextForm heading="Enter the your text here"/>
</div>
</>
  );
}

export default App;
