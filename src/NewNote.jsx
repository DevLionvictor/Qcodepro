import React, {useState} from 'react';

function NewNote({codeValue}){
    return(
                    <div>
                        <div className="form-group">
                            <label>
                                Note
                            </label>
                            <textarea id="name" onChange={(e) =>codeValue(e.target.value)} placeholder="Type Your Notes">
                            </textarea>
                        </div>
                       
                        

                    </div>
    );
}
export default NewNote