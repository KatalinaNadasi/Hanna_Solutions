import styled from 'styled-components';
import { ReactComponent as Question } from "../images/question.svg";


const Select = styled.select`
  background: transparent;
  border: none;
  color: #fff;
  outline: none;
`

const Option = styled.option`
  background: #a299ae;
  color: #fff;
`

export default function LangageSelector() {

    return(
      <Select>
        <option value="en">EN</option>
        <option value="be">BR</option>
        <option value="fr">FR</option>
      </Select>
  )
}
