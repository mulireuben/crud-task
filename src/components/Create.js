import React from "react";
import {Button, Checkbox, Form} from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";


function Create(){         
    const[Name,setName]=useState('');
    const[Email,setEmail]=useState('');
    const[isChecked,setisChecked]=useState(false);
    const postData=()=>{
        console.log(Name);
        console.log(Email);
        console.log(Checkbox);

        axios.post("https://jsonplaceholder.typicode.com/comments",{Name,Email,isChecked})
    .then(Response=>console.log(Response.data))  
    }
    return(
    <div>
    <Form className="create-form">
        <Form.Field>
            <label>Name </label>
            <input placeholder="name" onChange={(e)=>setName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Email </label>
            <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Field>
         <Form.Field>
            <Checkbox label="i agree to the terms and conditions" checked={isChecked} onChange={(e)=>setisChecked(!isChecked)}/>
         </Form.Field>
         <Button onClick={postData} type="submit">Submit</Button>
    </Form>
    </div>)
    }
export default Create;