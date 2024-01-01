import { useState } from "react"

function App() {
  const [Tap , setTap] = useState('')
  const [list , setlist] = useState(['hello', 'my'])
  const addElement = (elem)=>{
    const newArray = [...list, elem]
    setlist(newArray)
    setTap('')
  }
  const handleOnChange = (event)=>{
    setTap(event.target.value)
  }

  const handleKeyEnter = (event)=>{
    if (event.key == 'Enter' && Tap !== ''){
      addElement(Tap)
      console.log(list);
    }
  }
  
  return (
    <>
      <main className="container">
        <section className="row ">
          <input onKeyDown={handleKeyEnter} className="col s10" type="text" placeholder="Enter new Tap" onChange={handleOnChange} value={Tap}/>
          <button disabled={Tap === '' ? true : false} className="col s2 waves-effect waves-light btn" onClick={()=>addElement(Tap)}>Добавить</button>
        </section>
        <section>
          <ul>
            {list.map((el, index) => <li key={index}>{el}</li>)}
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
