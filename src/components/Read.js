import { Table } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import axios from "axios";

 
export default function Read() {
    const [APIData, setAPIData] = useState([]);
    //fetch the data from an api
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/1`)
        .then((response) =>{setAPIData(response.data);//console.log(response)
        })
    }, [])
    return ( 
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{APIData.FirstName}</Table.Cell>
                        <Table.Cell>{APIData.lastName}</Table.Cell>
                        <Table.Cell>
                            <input type="checkbox" checked={APIData.checked} readOnly />
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )

}