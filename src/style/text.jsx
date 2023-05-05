import styled from 'styled-components'


export const LightGrey = styled.p`
  font-size: ${props => props.small ? '0.6rem' : '1.1rem'};
  color: grey;
`

export const BlueBold = styled.p`
  font-size: ${props => props.small ? '0.6rem' : '1.1rem'};
  color: ${props => props.theme.darkBlue};
  font-weight: bold;
`
