import React from 'react'
import {Row,Button,Col} from 'react-bootstrap'
const Category = ({filterByCat,allCategory}) => {
    const onFilter = (cat)=>{
        filterByCat(cat)
    }
  return (
    <Row>
      <Col sm="12" className='d-flex justify-content-center p-2 my-2'>
      {
            allCategory.length >= 1 ? (allCategory.map((item) => {
                return(
                    <div>
                        <Button onClick ={() => onFilter(item)} className="btn-success mx-1">{item}</Button>
                    </div>
                )
            })) : <h1>لا يوجد تصنيفات</h1>
        }
      </Col>
    </Row>
  )
}
export default Category