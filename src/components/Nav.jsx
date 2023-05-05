import styled from 'styled-components';
import { Flex } from '../style/global';
import logo from '../images/logo.jpg';
import { ReactComponent as Question } from "../images/question.svg";
import { ReactComponent as User } from "../images/user.svg";
import LangageSelector from './LangageSelector';


const HeaderStyled = styled.nav`
  background-color: ${props => props.theme.darkBlue};
  width: 100%;
  color: white;
  padding: 5px 10px;
  list-style-type: none;
`;

const List = styled.ul`
  justify-content: center;
`

const Wrapper = styled(Flex) `
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
`

const ImgStyled = styled.img`
  width: 8rem;
  flex: 1;
  order: 1;
`

const IconWrapper = styled.div`
  margin: 0 2rem;
`

const IconQuestion = styled(Question)`
  width: 3rem;
  height: 2.5rem;
`

const IconUser = styled(User)`
  width: 3rem;
  height: 2.5rem;
`

const StyledRight = styled.li`
  flex: 1;
  display: inline-flex;
  position: absolute;
  right: 1%;
  top: 2%;
  align-items: center;
`

export default function Header() {

    return(
      <>
        <HeaderStyled>
          <Wrapper>
              <ImgStyled src={logo} alt='logo' />
              <StyledRight>
                <IconWrapper>
                  <IconQuestion alt='question' />
                  <IconUser alt='user' />
                </IconWrapper>
                <LangageSelector />
              </StyledRight>
          </Wrapper>
        </HeaderStyled>
      </>
  )
}
