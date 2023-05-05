import { useContext, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Chevron } from "../assets/chevron-left.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";
import { LightGrey, BlueBold } from "../style/text";
import { Button } from "../style/global";
import { GlobalState } from '../store/globalState/context';


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  & > div {
    padding: 0 0.5rem 0 0;
  }
`

const RightPostion = styled.div`
  position: absolute;
  right: 5rem;
  display: flex;
  align-items: center;
`

const IconsStyled = {
  'width': '1rem',
  'height': '1.3rem',
  'transform': 'translate(0px, 3px)',
}

const Text = styled.span `
  padding: 5px;
`

export default function Header() {

  const clients = useContext(GlobalState);
  const [ clientToDisplay, setClientToDisplay ] = useState([])

  // Select a client to display by id
  const getClientToDisplayById = (id) => {
    const newClient = clients.filter(client => client.id === id);
    setClientToDisplay(newClient)
  }

  useLayoutEffect(() => {
    getClientToDisplayById(1)
  }, [])


    return(
      <Wrapper>
        {
          clientToDisplay && clientToDisplay.length !== 0 && (
            <>
              <div><Chevron style={IconsStyled} alt="arrow-left" /></div>
              <div><LightGrey>Client : </LightGrey></div>
              <div><BlueBold>{clientToDisplay[0].name}</BlueBold></div>
            </>
          )
        }
        <RightPostion>
          <Button>
            <Plus style={IconsStyled} alt="add" />
            <Text>New plan</Text>
          </Button>
        </RightPostion>
      </Wrapper>
  )
}
