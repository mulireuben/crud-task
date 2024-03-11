import React from "react";
import {Button, Checkbox, Form} from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";


function Create(){         
    const[firstName,setfirstName]=useState('');
    const[lastName,setlastName]=useState('');
    const[isChecked,setisChecked]=useState(false);
    const postData=()=>{
        console.log(firstName);
        console.log(lastName);
        console.log(Checkbox);

        axios.post("https://jsonplaceholder.typicode.com/comments",{firstName,lastName,isChecked})
    .then(Response=>console.log(Response.data))  
    }
    return(
    <div>
    <Form className="create-form">
        <Form.Field>
            <label>First Name </label>
            <input placeholder="First Name" onChange={(e)=>setfirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Last Name </label>
            <input placeholder="Last Name" onChange={(e)=>setlastName(e.target.value)}/>
        </Form.Field>
         <Form.Field>
            <Checkbox label="i agree to the terms and conditions" checked={isChecked} onChange={(e)=>setisChecked(!isChecked)}/>
         </Form.Field>
         <Button onClick={postData} type="submit">Submit</Button>
    </Form>
    </div>)
    }
export default Create;