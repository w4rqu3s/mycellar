import DrinkCard from '../drinkcard';

import {
  Container,
  Header,
  Title,
  AddButton,
  EmptyState,
  EmptyIcon,
  EmptyText,
  Grid
} from '../drinkslist/style'

export default function WannaBuyList ({drinks = []}) {

  
  return (
    <Container>
      <Header>
        <Title>Lista de Desejos ({drinks.length} bebidas)</Title>
          <AddButton onClick={() => console.log('Não Implementado')}>
            + Adicionar Bebida
          </AddButton>
      </Header>

      {drinks.length === 0 ? (
        <EmptyState>
          <EmptyIcon>🍷</EmptyIcon>
          <EmptyText>Sua lista está vazia</EmptyText>
        </EmptyState>
      ) : (
        <Grid>
          {drinks.map(drink => (
            <DrinkCard drink={drink} moveToCellar={true}/>
          ))}
        </Grid>
      )}
    </Container>
  );
};

