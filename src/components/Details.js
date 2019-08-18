import React, { Component } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ProductConsumer } from '../context'
import { ButtonContainer } from './Button';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id, company, title, img, info, price, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                            {/* title */}
                            <div className="col-10 mx-auto text-center text-blue text-slanted my-5">
                                <h1>{title}</h1>
                            </div>
                            {/* end title */}
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/* product text */}
                                <div className="col-2 mx-auto col-md-6 my-3 text-capitalized">
                                    <h2>Model: {title}</h2>
                                    <h4 className="text-title text uppercase mt-3 mb-2 text-muted">made by : <span>{company}</span>
                                    </h4>
                                    <h4 className="text-blue"><strong>price: <span>৳</span>{price}</strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about products</p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* Buttons */}
                                    <Link to="/product" className="nav-link">
                                        <ButtonContainer>Back to Products</ButtonContainer>
                                        <ButtonContainer 
                                        cart
                                        disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                        {inCart?'inCart':'Add to Cart'}</ButtonContainer>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
