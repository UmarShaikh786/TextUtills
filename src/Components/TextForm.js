
import React,{useState}from 'react'

export default function TextForm(props) {
  function handelOnClickUpper(){
    const newvalue=text.toUpperCase();
    setText(newvalue)
    props.showalert(": Converted to UpperCase..","success")
  }

  function handelCopyText(){
    const textclip=document.getElementById("mybox");
    textclip.select();
    navigator.clipboard.readText(textclip.value)
    props.showalert(": Copied to Clipboard..","success")
  }
  function handelOnClearText(){
    const newvalue=""
    setText(newvalue)
    props.showalert(": Cleared all text..","success")
  }
  function handelOnClickLower(){
    const newvalue=text.toLowerCase();
    setText(newvalue)    
    props.showalert(": Converted to LowerCase..","success")
  }
  function handelRemoveSpace(){
    const newvalue=text.split(/[ ]+/)
    setText(newvalue.join(" "));    
    props.showalert(": Removed Extra Spaces..","success")
  }
  function handelOnChange(event){
    
    setText(event.target.value);
    
  }

  
  const[text,setText]=useState("");

  return(
    <>  
      <div className="container" >
          
        <div className="mb-3" >
        <h3 className="h3 mt-4" style={{color:props.mode==='Light'?'black':'white'}}>{props.heading}</h3>
        <textarea className="form-control border border-black" value={text} onChange={handelOnChange} placeholder="Enter The Text"id="mybox" rows="3" style={{backgroundColor:props.mode==='Light'?'white':'black' ,color:props.mode==='Light'?'black':'white'}}/>
       
        
        <button className="btn btn-primary m-2 " onClick={text.length>0?handelOnClickUpper:null} >Convert TO UpperCase</button>
        <button className="btn btn-primary m-2" onClick={text.length>0?handelOnClickLower:null} >Convert TO LowerCase</button>
        <button className="btn btn-danger m-2 " onClick={text.length>0?handelOnClearText:null} >Clear Text</button>
        <button className="btn btn-primary m-2 " onClick={text.length>0?handelCopyText:null} >Copy Text</button>
        <button className="btn btn-primary m-2" onClick={text.length>0?handelRemoveSpace:null} >Remove Space</button>
        </div>
          </div>
          <div className="container" style={{color:props.mode==='Light'?'black':'white'}}>
        <hr className=""></hr>
        <h2 className="h2 mt-2 ">Your Text Summery</h2>
        <p>{text.split(`${text.length>0?' ':''}`).length} Words  {text.length} Characters</p>
        <p>{text.length>0?0.008*text.split(" ").length:"No"} Minuts to Read</p>
        <hr className=""></hr>
        <h2 className="h2">Preview</h2>
        <p className='' >{text.length>0?text:'Enter The text above the TextBox'}</p>
          </div>
          </>
      
  );
    
}
