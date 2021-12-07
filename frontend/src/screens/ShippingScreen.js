import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

function ShippingScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Dostava</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='address'>
                    <Form.Label>Addresa</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Addresa...'
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>Grad</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Grad...'
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>Poštanski broj</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Poštanski broj...'
                        value={postalCode ? postalCode : ''}
                        onChange={(e) => setPostalCode(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Država</Form.Label>
                    <select class="form-control" value={country ? country : ''} onChange={(e) => setCountry(e.target.value)}>
                        <option value="Hrvatska">Hrvatska</option>
                        <option value="Slovenija">Slovenija</option>
                        <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
                        <option value="Italija">Italija</option>
                    </select>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Dalje
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
