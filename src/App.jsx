import { useState } from "react";
import { styled } from "styled-components";

const StyleLi = styled.li({
  border: "1px solid #000",
  padding: "10px",
  margin: "5px 0",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const StyleMain = styled.main({
  maxWidth: "800px",
  margin: "20px auto",
  padding: "20px",
  background: "#fff",
  borderRadius: "5px",
});


function App() {
  const [Tap, setTap] = useState("");
  const [list, setlist] = useState(["hello", "my"]);
  const [disabled, setDisabled] = useState(true);
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
  const handleDel = (index) => {
    const newArray = [...list];
    newArray.splice(index, 1);
    setlist(newArray);
  };

  const handleUP = (index)=>{
    let newArray = [... list]
    if(index === 0){
        console.log(index);
    }else{
      let el = newArray[index]
      newArray.splice(index, 1)
      newArray.splice(index-1, 0 , el)
      // console.log(newArray);
      setlist(newArray)
    }
  }

  const handleDawn = (index)=>{
    let newArray = [... list]
    if(index === newArray.length){
        console.log(index);
    }else{
      let el = newArray[index]
      newArray.splice(index, 1)
      newArray.splice(index+1, 0 , el)
      // console.log(newArray);
      setlist(newArray)
    }
  }

  return (
    <>
      <StyleMain className="z-depth-3">
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
            Create
          </button>
        </section>
        <section>
          <ul>
            {list.map((el, index) => (
              <StyleLi key={index}>
                <span className="">{el}</span>
                <div style={{display: 'flex'}}>
                  <div style={{display: 'flex', alignItems: 'center',marginRight: '10px'}}>
                    <div className={`arrow_down ${index === list.length-1? 'disabled': ''}`} onClick={()=> index === list.length-1?console.log(): handleDawn(index)}></div>
                    <div className={`arrow_up ${index === 0? 'disabledup': ''}`} onClick={()=>index === 0? console.log(): handleUP(index)}></div>
                  </div>
                  
                  <span
                    onClick={() => handleDel(index)}
                    className="btn red lighten-2"
                  >
                    del
                  </span>
                </div>
              </StyleLi>
            ))}
          </ul>
        </section>
      </StyleMain>
    </>
  );
}

export default App;
