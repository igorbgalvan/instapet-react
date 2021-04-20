import React from 'react';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold

} from "./styles";
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from "@react-navigation/native";

import SignInput from '../../components/SignInput'

import AppLogo from '../../assets/Logo_3.svg';
import EmailIcon from '../../assets/email.svg';
import PassIcon from '../../assets/cadeado.svg';

export default () => {

    return (
        <Container>
            <AppLogo width="100%" height="160" />

            <InputArea>
                <SignInput IconSvg={EmailIcon} placeholder="Digite seu email" />
                <SignInput IconSvg={PassIcon} placeholder="Digite sua senha"/>

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}