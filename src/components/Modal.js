import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { ProductConsumer } from "../context";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, price, title } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                    >
                      <h5>item added to the cart</h5>
                      <img src={img} alt="product" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : $ {price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={closeModal}>
                          shop
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer yellow onClick={closeModal}>
                          Go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
