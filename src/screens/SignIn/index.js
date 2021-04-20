import React from 'react';
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from "@react-navigation/native";


export default () => {
    
    return (
        <Container>
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}