import  React, {useEffect, useState} from "react";
import NewContact from "./NewContact";
import NewLink from "./NewLink";
import NewNote from "./NewNote";

function New({codeData, codeSession, displayState}){
    const [type, setType] = useState('note');
    const [bgColor, setBgColor] = useState('black');
    const [fgColor, setFgColor] = useState('white');
    const [codeValue, setCodeValue] = useState(3);
    const [size, setSize] = useState(200);
    useEffect(()=>{
        codeSession({
            ...codeSession,
            title : "Hi Scan My " +type,
            value : codeValue,
            size : size,
            bgColor : bgColor,
            fgColor : fgColor,
            

        })
     

    }, [fgColor, bgColor, codeValue, size, type])
    
    const code={
        Type:"code",
        DataType: "contact",
    }
    const NewForm = () =>{
        let Output= <NewNote codeValue={setCodeValue} />;
        switch (type) {
            case 'note':
               Output = <NewNote codeValue={setCodeValue}/>;
              break;
            case 'contact':
                Output = <NewContact codeValue={setCodeValue}/>;
              break;
            case 'link':
                Output =<NewLink codeValue={setCodeValue}/>;
              break;
            default:
                Output = <NewNote codeValue={setCodeValue}/>;
          }
          return Output;
              

    }
     

    return (
        <div className="NewBox">
                <h2> New Code</h2>
               
                
                <select id="dataType" defaultValue="link" onChange={(e) => setType(e.target.value)}>
                    <option value="note">Note</option>
                    <option value="contact">Contact</option>
                    <option value="link">Link</option>
                    
                    
                </select>
            
                  {NewForm()}

                <p className="hint"> {codeValue} </p>
                <h2>Style Settings </h2>
               <div className="flex justify-spaced">
                         <label>BG Color: </label>
                        <input type="color" onChange={(e) => setBgColor(e.target.value)} className="colorPicker"/>
                </div>
                <div className="flex justify-spaced">
                         <label>FG Color: </label>
                        <input type="color" onChange={(e) => setFgColor(e.target.value)} className="colorPicker"/>
                </div>
                
                <div className="flex justify-spaced">
                         <label>Size: </label>
                        <input type="number" max="200" onChange={(e) => setSize(e.target.value)} />
                </div>
                <button className="mobile-only" onClick={() =>displayState(true)}>Generate</button>
               

        </div>
    );
}

export default New;