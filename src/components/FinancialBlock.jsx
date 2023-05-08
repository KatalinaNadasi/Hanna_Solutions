import { useContext, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { LightGrey, BlueBold } from "../style/text";
import { Flex, Button } from "../style/global";
import { GlobalState } from '../store/globalState/context';
import { ReactComponent as Plus } from "../assets/plus.svg";
import { ReactComponent as Copy } from "../assets/copy.svg";
import { ReactComponent as Trash } from "../assets/trash.svg";

const Title = styled(LightGrey) `
  font-size: 0.9rem;
  padding: 10px 0;
`

const Separator = styled.hr`
  border: 1px solid #ededed;
  width: 100%;
`

const Block = styled.div`
  width: 20%;
  height: 10rem;
  border: 1px ${props => props.dotted ? 'dotted' : 'solid'} #d3D3D3;
  text-align: ${props => props.dotted && 'center'};
  margin: 50px 0;
  border-radius: 5px;
  position: relative;
  padding: ${props => props.dotted ? '0' : '20px 25px'};
  margin: 2rem 2rem 2rem 0;

  ${props => props.theme.mediaMax.small`
    width: 100%;
    height: 12rem;
  `};
`

const PlusStyled = styled(Plus)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`
const Wrapper = styled.div `
  position: absolute;
  top: 30%;
  left: 38%;
`

const IconWrapper = styled.div `
  position: absolute;
  top: 10px;
  right: 10px;
`

const CopyStyled = styled(Copy) `
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  fill: black;
  margin: 0 15px;
`

const TrashStyled = styled(Trash) `
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  fill: crimson;
`

const margin = {
  'margin': '3px',
}

export default function FinancialBlock() {

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
      <>
        {
          clientToDisplay && clientToDisplay.length !== 0 && (
            <>
              <Title>
                Financial plan
              </Title>
              <Separator />
              <Flex>
                <Block dotted>
                  <Wrapper>
                    <PlusStyled alt="add" />
                    <LightGrey small>New plan</LightGrey>
                  </Wrapper>
                </Block>
                <Block>
                  <IconWrapper>
                    <CopyStyled alt="copy" />
                    <TrashStyled alt="delete" />
                  </IconWrapper>
                  <BlueBold style={margin}>
                    {clientToDisplay[0].financial && clientToDisplay[0].financial.name}
                  </BlueBold>
                  <LightGrey small style={margin}>
                    Modified&nbsp;
                    {clientToDisplay[0].financial && clientToDisplay[0].financial.modified}
                  </LightGrey>
                  <LightGrey small style={margin}>
                    Created&nbsp;
                    {clientToDisplay[0].financial && clientToDisplay[0].financial.created}
                  </LightGrey>
                  <Button isActive style={margin}>Follow up is active</Button>
                </Block>
              </Flex>
            </>
          )
        }
      </>
  )
}
