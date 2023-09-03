//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
//import Quotediv from './Components/Quotediv';

function App() {
  return (
    <div className="App">
        <Navbar label1="Skin Care" label2="Body & Hand" label3="Hair" label4="Fragrance" label5="Home" label6="Kits & Travel" label7="Gifts" label8="Read" label8a="Shop" label9="Stores" label10="Facial Appointments" label11=" " label12="Login" label13="Cabinet" label14="Cart"/>
        <Body/>
        </div>
        
  );
}

export default App;
