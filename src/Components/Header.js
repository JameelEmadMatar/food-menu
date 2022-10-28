import React from 'react'
import {Row,Col} from 'react-bootstrap'
const Header = () => {
  return (
    <Row>
        <Col sm="12" className='justify-content-center text-center'>
            <div className='title mx-3 p-2'>قائمة الطعام</div>
            <div className='d-flex justify-content-center'>
                <p className='underline'></p>
            </div>
        </Col>
    </Row>
  )
}

export default Header