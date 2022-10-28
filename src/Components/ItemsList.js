import React from 'react'
import {Row,Card,Col} from 'react-bootstrap'
const ItemsList = ({itData}) => {
  return (
    <Row>
        {
            itData.length >= 1 ? (itData.map( (item) => {
                return (
                    <Col sm="12">
                        <Card key ={item.id} className="d-flex flex-row my-2 color-body">
                            <Card.Img className="w-25" variant="top" src={item.imgUrl} />
                            <Card.Body className="m-2">
                            <Card.Title className='fw-bold mb-3'>
                                <div className='d-flex justify-content-between'>
                                    <div className='item-title'>{item.title}</div>
                                    <div className='item-price'>{item.price}</div>
                                </div>
                            </Card.Title>
                            <Card.Text className="py-2">
                                <div className="item-description">
                                    {item.description}
                                </div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })) : <h3 className='text-center'>لا يوجد أصناف حاليا</h3>
        }
    </Row>
  )
}

export default ItemsList
