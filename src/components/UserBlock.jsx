import { useContext, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Flex } from "../style/global";
import { LightGrey, BlueBold } from "../style/text";
import { GlobalState } from '../store/globalState/context';
import { ReactComponent as Pen } from "../assets/pen.svg";


const Wrapper = styled.div `
  display: flex;
  background-color: #def4fa;
  margin: 3rem 0;
  border-radius: 3px;
  padding: 1rem;
  position: relative;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 1rem 0;
`

const PenStyled = styled(Pen)`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
`

export default function UserBlock() {

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
            <Wrapper>
              <PenStyled alt='edit' />
              <Col>
                <Row>
                  <LightGrey small>Country:&nbsp;</LightGrey>
                  <BlueBold small>{clientToDisplay[0].country && clientToDisplay[0].country}</BlueBold>
                </Row>
                <Row>
                  <LightGrey small>City:&nbsp;</LightGrey>
                  <BlueBold small>{clientToDisplay[0].city && clientToDisplay[0].city}</BlueBold>
                </Row>
              </Col>

              <Col>
                <Row>
                  <LightGrey small>Contact person:&nbsp;</LightGrey>
                  <BlueBold small>{clientToDisplay[0].contact && clientToDisplay[0].contact}</BlueBold>
                </Row>
                <Row>
                  <LightGrey small>Email address:&nbsp;</LightGrey>
                  <BlueBold small>{clientToDisplay[0].email && clientToDisplay[0].email}</BlueBold>
                </Row>
                <Row>
                  <LightGrey small>Phone number:&nbsp;</LightGrey>
                  <BlueBold small>{clientToDisplay[0].phone && clientToDisplay[0].phone}</BlueBold>
                </Row>
              </Col>

              <Col>
                <Row>
                  <LightGrey small>Secondary contact person:&nbsp;</LightGrey>
                  <BlueBold small>{clientToDisplay[0]["secondary-contact"] && clientToDisplay[0]["secondary-contact"]}</BlueBold>
                </Row>
                <Row>
                  <LightGrey small>Email address:&nbsp;</LightGrey>
                  <BlueBold small>{clientToDisplay[0]["secondary-email"] && clientToDisplay[0]["secondary-email"]}</BlueBold>
                </Row>
                <Row>
                  <LightGrey small>Phone number:&nbsp;</LightGrey>
                  <BlueBold small>{clientToDisplay[0]["secondary-phone"] && clientToDisplay[0]["secondary-phone"]}</BlueBold>
                </Row>
              </Col>

            </Wrapper>
          )
        }
      </>
  )
}
