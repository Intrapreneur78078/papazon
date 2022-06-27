import styled from "styled-components";
import { BsCart, BsSearch } from "react-icons/bs"

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`  
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
  flex:1;
  text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const Badge = styled.div`
    position: relative;
	background-color: #590bb3;
	top: -30px;
	right: -10px;
	border: 1px solid #590bb3;
	padding: 1px;
	color: #fff;
	font-size: 10px;
	border-radius: 50%;
    text-align: center;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/>
                <BsSearch style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
        </Left>
        <Center>
            <Logo>PAPAZON.</Logo>
        </Center>
        <Right>
            <MenuItem>SIGN UP</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
            <div>
                <BsCart style={{fontSize:"20px"}}/>
                <Badge>4</Badge>
            </div>
            </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
