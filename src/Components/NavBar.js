import React, { useState } from 'react'
import {Row,Navbar,Container,Nav,Form,Button} from 'react-bootstrap'
import {useEffect} from 'react';
const NavBar = ({filterBySearch}) => {
  const [searchValue,setSearchValue] = useState("")
  const onSearch = ()=>{
    filterBySearch(searchValue)
    setSearchValue("")
}
// Delete Enter Effect
useEffect(() => {
  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };
  document.addEventListener('keydown', keyDownHandler);
}, []);


  return (
    <Row className='NavBarW'>
      <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">
            <div className='text-success'>
                مطعم جديد
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث"
              className="mx-2"
              onChange = {(e) => setSearchValue(e.target.value)}
              value = {searchValue}
              onKeyPress = {(e) => e.preventdefault()}
            />
            <Button onClick ={() => onSearch()} className="fw-bold" variant="outline-success">بحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}
export default NavBar