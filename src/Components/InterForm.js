import React, { useRef } from 'react'

function InterForm() {

    let mat1InputRef=useRef();
    let mat2InputRef=useRef();
    let phyInputRef=useRef();
    let cheInputRef=useRef();
    let phylabInputRef=useRef();
    let chelabInputRef=useRef();

  return (
    <div>
        <form className="interform">
        <div>
        <label>First Name</label>
        <input type="text"></input>
        </div>
        <div>
        <label>Last Name</label>
        <input type="text"></input>
        </div>
        <div>
        <label>Maths1</label>
        <input ref={mat1InputRef} type="number"></input>
        </div>
        <div>
        <label>Maths2</label>
        <input ref={mat2InputRef} type="number"></input>
        </div>
        <div>
        <label>Physics</label>
        <input ref={phyInputRef} type="number"></input>
        </div>
        <div>
        <label>Chemistry</label>
        <input ref={cheInputRef} type="number"></input>
        </div>
        <div>
        <label>Physicslab</label>
        <input ref={phylabInputRef} type="number"></input>
        </div>
        <div>
        <label>Chemistrylab</label>
        <input ref={chelabInputRef} type="number"></input>
        </div>
        <div>
        <button type="button" onClick={()=>{

            let mat1Marks=Number(mat1InputRef.current.value);
            let mat2Marks=Number(mat2InputRef.current.value);
            let phyMarks=Number(phyInputRef.current.value);
            let cheMarks=Number(cheInputRef.current.value);
            let phylabMarks=Number(phylabInputRef.current.value);
            let chelabMarks=Number(chelabInputRef.current.value);
         
            
         let totalMarks=mat1Marks+mat2Marks+phyMarks+cheMarks+phylabMarks+
         chelabMarks;
            alert(totalMarks);
        }}>Calculate Result</button>
        </div>
        </form>
    </div>
  )
}

export default InterForm