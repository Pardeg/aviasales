import styled from "styled-components";

export const StyledContainer = styled.div`
display: flex:
flex-direction: column;
`
export const Ticket = styled.div`
font-family: 'Open Sans';
display: flex;
flex-direction: row;
justify-content: space-between;
width: 502px;
height:184px;
padding: 20px;
background-color: #FFFFFF;
margin-bottom: 20px;
font-weight: 600;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
border-radius: 5px;
`
export const FirstTicketColumn = styled.div`
display:flex;
flex-direction:column;
align-items: left;
`
export const Price = styled.p`
font-size: 24px;
color:#2196F3;
`
export const GreyText = styled.span`
display: flex;
justify-content: flex-start;
font-size: 12px;
color: #A0B0B9;
margin-bottom: 3px;
`
export const BlackText = styled.span`
font-size: 14px;
margin-bottom: 10px;
`
export const SecondColumn = styled.div`
display: flex;
flex-direction: column;
`
export const FirdColumn = styled.div`
display: flex;
flex-direction: column;
`
export const ColumnTwoHeader = styled.span`
display: flex;
justify-content: flex-start;
font-size: 12px;
color: #A0B0B9;
margin-top: 75px;
margin-bottom: 3px;
`
export const Img = styled.img`
margin-top:20px;
margin-bottom:20px;
`