import React, {useState, useEffect} from 'react';
function NewContact({codeValue}){
    const [name, setName] = useState('Victor');
    const [phone, setPhone] = useState('+2348142337936');
    const [email, setEmail] = useState('dev.victorvincent@gmail.com');
    let value;
    function setVal(){
        value ="Name:"+name+", Phone:"+phone+", Email:"+email+"";
        codeValue(value);
    }
    useEffect(() => {
        
        setVal();
        //console.log(phone);
        // Perform actions based on the changes in variable1 and variable2
    
        // Cleanup function (if necessary)
        return () => {
          // Code to run when the component unmounts or when variable1/variable2 changes
        };
      }, [name, phone, email]); // Specify the variables as dependencies
    
    //console.log(value);
    
        return(
                    <div>
                        <div className="form-group">
                            <label>
                                Name
                            </label>
                            <input id="name" onChange={(e) => setName(e.target.value)} placeholder="Contact Name"/>
                        </div>
                        <div className="form-group">
                            <label>
                                Phone
                            </label>
                            <input id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Phone"/>
                        </div>
                        <div className="form-group">
                            <label>
                                Mobile
                                </label>
                            
                        <input id="Email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"/>
                        </div>

                    </div>
    );
}
export default NewContact