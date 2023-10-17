 
import React, {useState} from 'react';
function NewLink({codeValue}){
    return(
                    <div>
                        <div className="form-group">
                            <label>
                                Url
                            </label>
                            <input id="name" onChange={(e) =>codeValue(e.target.value)} placeholder="eg, https://..." />
                             
                        </div>
                       
                        

                    </div>
    );
}
export default NewLink