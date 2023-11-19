import styled from "styled-components"

const HeaderStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items:center ;
    background-color: #2D7AFA;
    height: 88px;
    font-weight: bold;
    color: #fff;
     
`
 
const Header = ()=>{
    return(
        <HeaderStyles>
            MKS STORE              
        </HeaderStyles>
         
    )
}

export default Header