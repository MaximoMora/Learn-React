import './App.css';
import Event from './EventComponent';
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';

function App() {

  var turu = {
    age: 18,
    height: 183
  }

  return (
    <div className="App">
      <header className="App-header">


        <FirstComponent/>

        <SecondComponent/>

        <ThirdComponent name="max" tututu = {turu}/>

        <Event/>
    
      </header>

      
    </div>
  );
}

export default App;
