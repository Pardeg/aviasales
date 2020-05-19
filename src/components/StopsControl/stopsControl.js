import React from "react";
import PropTypes from 'prop-types';
import {StopsControlContainer, StopsHeader, StyledInput, StyledLabel} from "./styledStopsControl";

const StopsControl = (props) => {
    const {onChange, checked} = props;
    const stopsControlData = [
        {checkedValue: checked.allStops, name: 'allStops', value: 'allStops', text: 'Все'},
        {checkedValue: checked.withoutStops, name: 'withoutStops', value: '0', text: 'Без пересадок'},
        {checkedValue: checked.oneStop, name: 'oneStop', value: '1', text: '1 пересадка'},
        {checkedValue: checked.twoStops, name: 'twoStops', value: '2', text: '2 пересадки'},
        {checkedValue: checked.threeStops, name: 'threeStops', value: '3', text: '3 пересадки'},
    ];
    const stopsControlRender = (data) => {
        return data.map((el, n) => {
            const {checkedValue, name, value, text} = el;
            return (
                <StyledLabel checked={checkedValue}
                             key={n}
                >
                    <StyledInput type="checkbox"
                                 name={name}
                                 value={value}
                                 onChange={onChange}
                   />
                    {text}
                </StyledLabel>
            );
        });
    }
    return (
        <StopsControlContainer>
            <StopsHeader>
                КОЛИЧЕСТВО ПЕРЕСАДОК
            </StopsHeader>
            {stopsControlRender(stopsControlData)}
        </StopsControlContainer>
    );
}
export default StopsControl;

StopsControl.propTypes = {
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.object.isRequired
}

