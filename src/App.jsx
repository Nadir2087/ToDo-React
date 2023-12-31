import { useState } from "react"

function App() {
  const [Tap , setTap] = useState('')
  const [list , setlist] = useState(['hello', 'my'])
  const addElement = (elem)=>{
    const newArray = [...list, elem]
    setlist(newArray)
    setTap('')
  }
  
  // let list = ['Lorem ipsum dolor sit amet.', "Lorem ipsum dolor sit amet." ,"Lorem ipsum dolor sit amet." ,"Lorem ipsum dolor sit amet."]
  return (
    <>
      <main className="container">
        <section className="row ">
          <input className="col s10" type="text" placeholder="Enter new Tap" onChange={(event)=>setTap(event.target.value)} value={Tap}/>
          <button className="waves-effect waves-light btn" onClick={()=>addElement(Tap)}>Добавить</button>
        </section>
        <section>
          <ul>
            {/* {list.map((lis, index)=> (<li key={index}>{lis}</li>))} */}
            {list.map((el, index) => <li key={index}>{el}</li>)}
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
