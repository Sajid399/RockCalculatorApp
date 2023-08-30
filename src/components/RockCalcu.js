import React, { useState } from 'react'

function RockCalcu() {

        const [inputA , setIputA] = useState('');
        const [inputB , setIputB] = useState('');
        const [result , setResult] = useState('');

        const CalculateResult = () => {
            const a = parseFloat(inputA);
            const b = parseFloat(inputB);

            const c = Math.round(350 * Math.pow(b, 1/3));
             setResult(`${c} m Critical OverBurden \n ${c < a ? "Squeezing the Ground" : "None Squeezing the Ground"}`);
             setIputA('');
             setIputB('');
    }
   

  return (
    <div className="container border" id="div1">
    <h1 className="heading">Tunnel Rock Calculator</h1>
    <input
      type="number"
      className="form-control"
      placeholder="Actual Overburden(m):-"
      value={inputA}
      onChange={(e) => setIputA(e.target.value)}
    /><br/><br/>
    <input
      type="number"
      className="form-control"
      placeholder="Q-Value:-"
      value={inputB}
      onChange={(e) => setIputB(e.target.value)}
    /><br/><br/>
    <button
      className="bt btn-info form-control"
      onClick={CalculateResult}
    >Calculate</button><br/><br/>
    <p>The Calculated Value:</p>
    <p><b>{result}</b></p>
  </div>
  )
}

export default RockCalcu
