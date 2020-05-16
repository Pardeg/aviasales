import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const SortButtonsContainer = styled.div`
display:flex;
flex-direction: row;
box-sizing: border-box;
margin-bottom: 20px;
`
const StyledButton = styled.button`
cursor:pointer;
height:50px;
width: 271px;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 12px;
color : ${props => props.checked ? '#FFFFFF' : '#4A4A4A'};
background-color: ${props => props.checked ? '#2196F3' : '#FFFFFF'};
border: ${props => props.checked ? 'none' : '1px solid #DFE5E'};
border-radius: 5px;
`
const SortButtons = (props) => {
    const {sortByPrice, sortByTime, checkByPrice, checkByTime} = props;
    return (
        <SortButtonsContainer>
            <StyledButton
                onClick={sortByPrice}
                checked={checkByPrice}>
                САМЫЙ ДЕШЕВЫЙ
            </StyledButton>
            <StyledButton
                onClick={sortByTime}
                checked={checkByTime}>
                САМЫЙ БЫСТРЫЙ
            </StyledButton>
        </SortButtonsContainer>
    )
}

export default SortButtons;

SortButtons.propTypes = {
    sortByPrice: PropTypes.func,
    sortByTime: PropTypes.func,
    checkSortByTime: PropTypes.bool,
    checkSortByPrice: PropTypes.bool
};

SortButtons.defaultProps = {
    sortByPrice: null,
    sortByTime: null,
    checkSortByPrice: false,
    checkSortByTime: false
};