import styled from "styled-components";
import checked from '../../images/Checkbox.svg';
import notChecked from '../../images/Form.svg';

export const StopsControlContainer = styled.div`
display: flex;
Width:232px;
height: 252px;
margin-right: 20px;
margin-top: 190px;
padding-left: 20px;
padding-right: 20px;
border-radius: 5px;
flex-direction: column;
justify-content: start;
box-sizing: border-box;
background-color:#FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`
export const StyledInput = styled.input`
display: none;
`
export const StopsHeader = styled.p`
font-size: 12px;
height: 13px;
font-weight: 600;
`
export const StyledLabel = styled.label`
display: flex;
align-items: center;
margin-bottom: 20px;
font-size: 13px;
font-weight: 600;
cursor: pointer;
vertical-align: center;
&:before {
content: "";
display:inline-block;
width: 20px;
height: 20px;
margin-right: 10px;
background-image: ${props=>(props.checked? `url(${checked})`:`url(${notChecked})`)};
background-position: center;
background-repeat: no-repeat;
}
`
