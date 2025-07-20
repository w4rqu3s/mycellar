import React, { useState } from 'react';

import DrinkCard from '../drinkcard';

import {
  Container,
  Header,
  Title,
  AddButton,
  EmptyState,
  EmptyIcon,
  EmptyText,
  EmptySubtext,
  Grid
} from './style'

export default function DrinksList ({drinks = []}) {

  
  return (
    <Container>
      <Header>
        <Title>Minha Adega ({drinks.length} bebidas)</Title>
          <AddButton onClick={() => console.log('Não Implementado')}>
            + Adicionar Bebida
          </AddButton>
      </Header>

      {drinks.length === 0 ? (
        <EmptyState>
          <EmptyIcon>🍷</EmptyIcon>
          <EmptyText>Sua adega está vazia</EmptyText>
          <EmptySubtext>Comece adicionando suas primeiras bebidas à coleção</EmptySubtext>
        </EmptyState>
      ) : (
        <Grid>
          {drinks.map(drink => (
            <DrinkCard drink={drink} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

