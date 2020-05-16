import React from "react";
import {StopsControlContainer, StopsHeader, StyledInput, StyledLabel} from "./styledStopsControl";
import PropTypes from 'prop-types';

const StopsControl = (props) => {
    const {onChange, checked} = props;
    return (
        <StopsControlContainer>
            <StopsHeader>
                КОЛИЧЕСТВО ПЕРЕСАДОК
            </StopsHeader>
            <StyledLabel checked={checked[4]}>
                <StyledInput type="checkbox"
                             name="allTickets"
                             value={4}
                             onChange={onChange}/>
                Все
            </StyledLabel>
            <StyledLabel checked={checked[0]}>
                <StyledInput type="checkbox"
                             name="withoutStops"
                             value={0}
                             onChange={onChange}/>
                Без пересадок
            </StyledLabel>
            <StyledLabel checked={checked[1]}>
                <StyledInput type="checkbox"
                             name="oneStop"
                             value={1}
                             onChange={onChange}/>
                1 пересадка
            </StyledLabel>
            <StyledLabel checked={checked[2]}>
                <StyledInput type="checkbox"
                             name="twoStops"
                             value={2}
                             onChange={onChange}/>
                2 пересадки
            </StyledLabel>
            <StyledLabel checked={checked[3]}>
                <StyledInput type="checkbox"
                             name="threeStops"
                             value={3}
                             onChange={onChange}/>
                3 пересадки
            </StyledLabel>
        </StopsControlContainer>
    );
}
export default StopsControl;

StopsControl.propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool
}

StopsControl.defaultProps = {
    onChange: null,
    checked: false
}