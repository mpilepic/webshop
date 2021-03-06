import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <Card style={{ height: 'auto' }} className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img  src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title style={{ height: '3rem' }} as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} recenzija`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text as="h3">
                    {product.price} kn
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
