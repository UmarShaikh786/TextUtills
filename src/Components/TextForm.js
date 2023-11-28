
import React,{useState}from 'react'

export default function TextForm(props) {


  let mystyle={
    color:props.mode==='Dark'?'white':'black',
    backgroundColor:props.mode==='Dark'?'black':'white',
    borderColor:props.mode==='Dark'?'white':'black'
  }
  
  function handelOnClickUpper(){
    const newvalue=text.toUpperCase();
    setText(newvalue)
    props.showalert(": Converted to UpperCase..","success")
  }

  function handelCopyText(){
    const textclip=document.getElementById("mybox");
    textclip.select();
    navigator.clipboard.writeText(textclip.value)
    
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
        <h3 className="h3 mt-4" style={mystyle}>{props.heading}</h3>
        <textarea className="form-control " value={text} onChange={handelOnChange} placeholder="Enter the text Here..." id="mybox" rows="3" style={mystyle}/>
       
        
        <button  disabled={text.length===0} className="btn btn-primary m-2 " onClick={handelOnClickUpper} >Convert TO UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handelOnClickLower} >Convert TO LowerCase</button>
        <button disabled={text.length===0} className="btn btn-danger m-2 " onClick={handelOnClearText} >Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary m-2 " onClick={handelCopyText} >Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handelRemoveSpace} >Remove Space</button>
        </div>
          </div>
          <div className="container" style={mystyle}>
        <hr className=""></hr>
        <h2 className="h2 mt-2 ">Your Text Summery</h2>
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} Words  {text.length} Characters</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minuts to Read</p>
        <hr className=""></hr>
        <h2 className="h2">Preview</h2>
        <p className='' >{text.length>0?text:'No Text is previewing'}</p>
          </div>
          </>
      
  );
    
}
