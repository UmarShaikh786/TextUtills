import React,{useState}from 'react'

export default function TextForm(props) {
  function handelOnClickUpper(){
    const newvalue=text.toUpperCase();
    setText(newvalue)
    
  }
  function handelOnClickLower(){
    const newvalue=text.toLowerCase();
    setText(newvalue)
    
  }
  function handelOnChange(event){
    
    setText(event.target.value);
  }

  
  const[text,setText]=useState('Enter The TExt');


  return(
    <>    <div className="container">
          
        <div className="mb-3">
        <h3 className="h3">{props.heading}</h3>
        <textarea className="form-control" value={text} onChange={handelOnChange} id="exampleFormControlTextarea1" rows="3"/>
        </div>
        <button className="btn btn-primary" onClick={handelOnClickUpper} >Convert TO UpperCase</button>
        <button className="btn btn-primary ms-2 " onClick={handelOnClickLower} >Convert TO LowerCase</button>
          </div>
          <div className="container">
        <h2 className="h2">Your Text Summery</h2>
        <p>{text.split(" ").length} Words  {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minuts Read</p>
        <h2 className="h2">Preview</h2>
        <p className='' style={{color: "red"}}>{text}</p>
          </div>
          </>
      
  );
    
}
