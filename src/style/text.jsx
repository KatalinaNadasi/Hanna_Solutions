import styled from 'styled-components'


export const LightGrey = styled.p`
  font-size: ${props => props.small ? '0.8rem' : '1.1rem'};
  letter-spacing: 0.3px;
  color: grey;
`

export const BlueBold = styled(LightGrey)`
  color: ${props => props.theme.darkBlue};
  font-weight: bold;
`
