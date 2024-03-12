import { Table } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import axios from "axios";
import{Link} from "react-router-dom";

 
export default function Read() {
    const [APIData, setAPIData] = useState([]);
    //fetch the data from an api
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {setAPIData(response.data);console.log(APIData)
            //set the response data to a state
        })
        .catch((err)=>{console.log(err)})},[])
        //imort a table from the semantic ui and map the data obtained into the table rows
        //link the update button with a link to direct yu to the update page
        //create afunction set data and link it with our  upgrade button
        //pas data as a parameter to the function
        return( 
        <div> 
            <Table singleLine >     
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell> Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
        
                        {APIData.map((data, index)=>(
                                
                        <Table.Row key={index}>
                            <Table.Cell>{data.name}</Table.Cell>
                            <Table.Cell>{data.email}</Table.Cell>
                            <Link to="/update">
                            <Table.Cell>
                                <button onClick={()=>setAPIData(data)}>Update</button>
                            
                            </Table.Cell>
                            </Link>
                            
                        </Table.Row>)
                        
                        )}
                </Table.Body>
            </Table>
        </div>
    )

        }