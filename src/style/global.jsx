import styled from 'styled-components'


export const Flex = styled.div`
  display: flex;
  ${props => props.theme.mediaMax.small`
    display: block;
  `};
`
export const Container = styled.div`
  padding: 5rem;
`

export const Button = styled.button`
  padding: 0.3rem 0.75rem 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.isActive ? '#ffd500' : '#6495ED'};
  color: #fff;
`
