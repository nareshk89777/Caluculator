import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./calculator.css"
const Calculator = () => {
  const [input, setinput] = useState("");
  const [result, setresult] = useState("");

  const evaluate = () => {
    setresult(eval(input));
  }
  const Handler = (e) => {
    setinput(e.target.value)
  }
  const styleObj = {
    padding: "10px 5px",
    color: "green",
    justifycontent: "space between",
    flex: "center",
    margin: "15px"
  }
  const cls = () => {
    setinput("")
    setresult("")
  }
  return <div className='body'>
    <h1>Enter Numbers</h1>
    <input type="text" value={input} name='input' onChange={Handler} /><br /><br />
    <Button variant="primary" onClick={evaluate}>Result</Button><br/><hr style={{display:"visible"}}/>
    <h2 style={{color:"rgb(8,54,125)",backgroundColor:"teal" ,width:"auto"}}>{result}</h2>
    <div style={styleObj}>
      <div style={{ margin: '10px' }}>
        <Button variant="primary" onClick={() => { return setinput(input + "1") }}>1</Button>
        <Button variant="secondary" className="mx-2" onClick={() => { return setinput(input + "2") }}>2</Button>
        <Button variant="success" onClick={() => { return setinput(input + "3") }}>3</Button>
      </div>
      <div style={{ margin: '10px' }}>
        <Button variant="primary" onClick={() => { return setinput(input + "4") }}>4</Button>
        <Button variant="secondary" className="mx-2" onClick={() => { return setinput(input + "5") }}>5</Button>
        <Button variant="success" onClick={() => { return setinput(input + "6") }}>6</Button>
        
      </div>
      <div style={{ margin: '10px' }}>
        <Button variant="primary" onClick={() => { return setinput(input + "7") }}>7</Button>
        <Button variant="secondary" className="mx-2" onClick={() => { return setinput(input + "8") }}>8</Button>
        <Button variant="success" onClick={() => { return setinput(input + "9") }}>9</Button>
      </div>
      <div>
      <Button variant="success" onClick={() => { return setinput(input + "0") }}>0</Button>
      </div>
      <div style={{ margin: '10px' }}>
        <Button variant="primary" onClick={() => { return setinput(input + "+") }}>+</Button>
        <Button variant="secondary" className="mx-2" onClick={() => { return setinput(input + "-") }}>-</Button>
        <Button variant="success" onClick={() => { return setinput(input + "*") }}>X</Button>
        <div style={{ margin: '10px' ,display:"flex",alignItems:"center",justifyContent:"center" ,padding:"10px"}} >
          <Button variant="success" onClick={() => { return setinput(input + "/") }}>/</Button>
        </div>
        <Button variant="success" onClick={cls}>Clear</Button>
      </div>
    </div>
  </div>;
};

export default Calculator;
