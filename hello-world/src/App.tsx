import {useState} from 'react';
import { Header } from './components/Header'
import { Footer } from './components/Footer';

const App = () => {

  const [name, setName] = useState('Taylor');  
  const [age, setAge] = useState(90);  
  const [bg, setBg] = useState('#FF0000');
  const [count, setCount] = useState(0);

  const [list, setList] = useState([
    "O rato roeu a roupa do rei de roma.",
    "Quem com ferro fere, com ferro será ferido",
    "Mais vale um na mão do que dois voando"
  ])


  const handle20 = () => {
    setAge(20);
    setBg("#00FF00");
  }

  const handle90 = () => {
    setAge(90);
    setBg("#FF0000");
  }

  return (
    <div style={{backgroundColor: bg}}>

      {age === 90 &&
      <button onClick={handle20}>Tenho 20 anos</button>      
      }

      {age === 20 &&
      <button onClick={handle90}>Tenho 90 anos</button>
      }

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {age > 30 && "Eu sou maior de 30 anos!"}
      <hr/>

      <ul>
        {list.map((frase, index)=> (
          <li key={index}>{frase}</li>
        ))}
      </ul>

      <Footer></Footer>
    </div>
  )
};

export default App;