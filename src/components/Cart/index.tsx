import styled from "styled-components"

const CartDiv = styled.div`
    width: 80px;
    height: 80px;
    background-color: #2D7AFA;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 24px;
    bottom: 24px;
    color: #fff;

    .material-symbols-outlined{
        font-size: 35px;
    }
   
`


const Cart = () =>{
    return (
        <>
            <div>
                meu carinho
            </div>
            <CartDiv>
                <span className="material-symbols-outlined">shopping_cart</span>    
            </CartDiv>
        </>
    )
}

export default Cart