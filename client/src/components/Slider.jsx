import styled from "styled-components"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: lightgray;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <MdKeyboardArrowLeft/>
        </Arrow>
        <Wrapper>
            
        </Wrapper>
        <Arrow direction="right">
            <MdKeyboardArrowRight/>
        </Arrow>
    </Container>
  )
}
export default Slider