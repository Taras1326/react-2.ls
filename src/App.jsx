
import './App.css'
import { Section } from './components/Section'
import { Titel } from './components/Titel/Titel'
import data from "./data.json"

// const title = "hello world"
// const text = "GOOd BOOY"

// function App() {
// // const {name, age, city} = data

//   return (
//     <>

//     <Section>
//       </Titel>
//     </Section>

//     {/* <h1>{title}</h1>
//     <p>{text}</p>
//     <div>
//       <h2>Ім'я: {data.name}</h2>
//       <p>вік:{data.age}</p>
//       <p>Пошта: {data.email}</p>
//     </div> */}

    
//     </>
//   );
// }

function App() {
  const {name, age, city} = data

  return (
    <>
      <Section>
        <Titel />
      </Section>
    </>

    
  );
}

export default App
