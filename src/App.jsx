import { useState } from "react";
import { styled } from "styled-components";

const StyleLi = styled.li({
  border: "1px solid #000",
  padding: "10px",
  margin: "5px 0",
  borderRadius: "5px",
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

function App() {
  const [Tap, setTap] = useState("");
  const [list, setlist] = useState(["hello", "my"]);
  const addElement = (elem) => {
    const newArray = [...list, elem];
    setlist(newArray);
    setTap("");
  };
  const handleOnChange = (event) => {
    setTap(event.target.value);
  };

  const handleKeyEnter = (event) => {
    if (event.key == "Enter" && Tap !== "") {
      addElement(Tap);
    }
  };
  const handleDel = (index)=>{
    const newArray = [...list]
    newArray.splice(index, 1);
    setlist(newArray)
  }

  return (
    <>
      <main className="container">
        <section className="row ">
          <input
            onKeyDown={handleKeyEnter}
            className="col s10"
            type="text"
            placeholder="Enter new Tap"
            onChange={handleOnChange}
            value={Tap}
          />
          <button
            disabled={Tap === "" ? true : false}
            className="col s2 waves-effect waves-light btn"
            onClick={() => addElement(Tap)}
          >
            Добавить
          </button>
        </section>
        <section>
          <ul>
            {list.map((el, index) => (
              <StyleLi key={index}>
                <span className="">{el}</span>
                <span onClick={()=>handleDel(index)} className="btn red lighten-2">del</span>
              </StyleLi>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
