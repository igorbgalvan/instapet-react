import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #ffe3a1
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #efbb40;
    margin-left: 10px;
`;


export default ({IconSvg, placeholder}) => {

    return (
        <InputArea>
            <IconSvg  width="24" height="24" fill="#efbb40" />
            <Input 
                placeholder = {placeholder}
                placeholderTextColor="#8f6500"
            
            />
        </InputArea>
    );
}