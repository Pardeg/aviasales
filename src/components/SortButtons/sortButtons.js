import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const SortButtons = (props) => {
    const {onClick, checkByPrice, checkByTime} = props;
    return (
        <SortButtonsContainer>
            <StyledButtonLeft
                name="priceSort"
                onClick={onClick}
                checked={checkByPrice}>
                САМЫЙ ДЕШЕВЫЙ
            </StyledButtonLeft>
            <StyledButtonRight
                name="timeSort"
                onClick={onClick}
                checked={checkByTime}>
                САМЫЙ БЫСТРЫЙ
            </StyledButtonRight>
        </SortButtonsContainer>
    );
}

export default SortButtons;

SortButtons.propTypes = {
    onClick: PropTypes.func.isRequired,
    checkByTime: PropTypes.bool.isRequired,
    checkByPrice: PropTypes.bool.isRequired
};


const SortButtonsContainer = styled.div`
display:flex;
flex-direction: row;
box-sizing: border-box;
margin-bottom: 20px;
box-shadow: none;
`
const StyledButtonLeft = styled.button`
cursor:pointer;
height:50px;
width: 271px;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 12px;
color : ${props => props.checked ? '#FFFFFF' : '#4A4A4A'};
background-color: ${props => props.checked ? '#2196F3' : '#FFFFFF'};
border: 1px solid #DFE5EC;
border-radius: 5px 0 0 5px;
border-right: none;
`
const StyledButtonRight = styled.button`
cursor:pointer;
height:50px;
width: 271px;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 12px;
color : ${props => props.checked ? '#FFFFFF' : '#4A4A4A'};
background-color: ${props => props.checked ? '#2196F3' : '#FFFFFF'};
border-radius: 0 5px 5px 0;
border: 1px solid #DFE5EC;
border-left: none;
`