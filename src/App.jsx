import React, {useState } from 'react';
import logo from './logo.png';
import './App.css';
import New from './New'
import Code from './Code';

function App() {
  const [displayCode, setDisplayCode] =useState(true);
  const [codeData, setcodeData] = useState({
    title: 'Hi Scam Me',
    value: 'Welcome Thanks for scanning me. i was Built by Vincent Victor COntact him on whatsapp +234',
    bgColor:'black',
    fgColor:'white',
    size:200
    });

console.log(displayCode);
  return (
    <div className="App">
      {displayCode == true ? <div className="closeBut" onClick={() =>setDisplayCode(false)}>X Close</div> : ''}
      <header className="header">
        <div className="logo-box">
     
        
        <h3 className="logo-title">QCodePro</h3>
       
       </div>

        
       
      </header>
      <div className="App-body">
        <div className="grid card">
            <div className="g-7">
            <New codeData={codeData} codeSession={setcodeData} dCodeData={displayCode} displayState={setDisplayCode} />
            </div>
            <div className= {displayCode == true ? 'g-3 CodeCard' : 'g-3'}>
              <Code codeData={codeData} displayCode={displayCode} />   
            </div>
        </div>
         
      </div>
      <div className="foot">Made by <a href="https:vincentvictor.website">Vincent Victor </a></div>
    </div>
  );
}

export default App;
