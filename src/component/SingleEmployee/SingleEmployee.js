import React from 'react';
import { useEffect,useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {useParams} from "react-router-dom";




const SingleEmployee = () => {
    let {id}=useParams();





const [employeesDetail,setemployeesDetail]=useState([])
const [singleEmployee, setSingleEmployee] = useState({});



useEffect(() => {
   fetch('/employeeDetails.JSON')
   .then(res=>res.json())
   .then(data=>setemployeesDetail(data.employee))
}, []);

 console.log(employeesDetail);

 useEffect(() => {
    const foundEmployee = employeesDetail.find(
      (employee) => employee.login.id === id
    );
    setSingleEmployee(foundEmployee);
  }, [employeesDetail]);

console.log(singleEmployee);
return (
    <div>
      <h1>{id}</h1>
      <h2>This is sigle employee {singleEmployee?.name}</h2>
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={singleEmployee?.picture?.thumbnail} />
            </Card>
          </Col>
          <Col md={5}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{singleEmployee?.name}</Card.Title>
                <Card.Text>
                     <b> Email : {singleEmployee?.email}</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default SingleEmployee;