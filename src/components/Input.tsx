import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface IProps {
    name: string;
    label?: string;
    type: string;
}

const Input = ({name, label, type}: IProps): JSX.Element => {
    return (
        <>
            {label && <label>{label}</label>}
            <SInput name={name} type={type}/>
        </>
    );
};

const SInput = styled.input<any>`
    padding: 15px;
    border: none;
    border-radius: 4px;
    background-color: ${colors.grey};
    color: white;
`;

export default Input;