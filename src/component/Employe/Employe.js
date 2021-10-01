import React from 'react';
import { useEffect,useState } from 'react';
import { Table,Image, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Employe = () => {

const [emplyees,setemplyees]=useState([])

useEffect(() => {
    
 fetch('./employeeData.json')
 .then(res=>res.json())
.then(data=>setemplyees(data))

}, []);

console.log(emplyees);

    return (

        <Container>
            
        <Table responsive="sm">
    <thead>
      <tr>
        
        <th>id</th>
        <th>image</th>
        <th>name</th>
        <th>designation</th>
        <th>Table heading</th>
        
      </tr>
    </thead>
    <tbody>
      

        {
            emplyees.map(emplyees=>(
        <tr>
        <td>{emplyees?.id}</td>
        <td><Image style={{ width: '50px' }} src={emplyees?.image} thumbnail  /></td>
        <td>{emplyees?.name}</td>
        <td>{emplyees?.designation}</td>
        <td>
            <NavLink
            to={`/Employe/${emplyees?.id}`}
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            >
                 Details
            </NavLink>
           
        
            </td>
        
        </tr>


            ))
        }
      
     
    </tbody>
  </Table>
        </Container>
    );
};

export default Employe;