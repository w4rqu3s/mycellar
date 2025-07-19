import React, {useState} from 'react';
import { useNavigate } from 'react-router';

import {
    Container,
    ContentWrapper,
    Logo,
    LogoIcon,
    LogoText,
    LogoSubtext,
    ButtonGrid,
    ActionButton,
    ButtonIcon,
    ButtonText,
    ButtonSubtext
} from './style'

export default function HomeGrid() {
    
    const navigate = useNavigate();

  return (
    <Container>
      <ContentWrapper>

        <Logo>
          <LogoIcon>🍷</LogoIcon>
          <LogoText>Adega Manager</LogoText>
          <LogoSubtext>Gerencie sua coleção de bebidas</LogoSubtext>
        </Logo>

        <ButtonGrid>
          <ActionButton className="primary" onClick={() => navigate('/login')}>
            <ButtonIcon>🔑</ButtonIcon>
            <ButtonText>Entrar</ButtonText>
            <ButtonSubtext>Acesse sua conta</ButtonSubtext>
          </ActionButton>

          <ActionButton className="secondary" onClick={() => navigate('/signup')}>
            <ButtonIcon>✨</ButtonIcon>
            <ButtonText>Cadastrar</ButtonText>
            <ButtonSubtext>Crie sua conta</ButtonSubtext>
          </ActionButton>
        </ButtonGrid>

      </ContentWrapper>
    </Container>
  );
};


