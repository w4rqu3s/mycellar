import { 
    Container,
    DrinkImage,
    DrinkInfo,
    DrinkName,
    DrinkDetails,
    DetailRow,
    DetailValue,
    DetailLabel,
    ActionButton,
    Actions,
    TypeBadge
} from "./style";

export default function DrinkCard({drink={}, moveToCellar=false}) {

    const icons = {
      'Vinho Tinto': '🍷',
      'Vinho Branco': '🥂',
      'Vinho Rosé': '🌹',
      'Espumante': '🍾',
      'Champagne': '🍾',
      'Whisky': '🥃',
      'Vodka': '🍸',
      'Gin': '🍸',
      'Rum': '🥃',
      'Cachaça': '🥃',
      'Licor': '🍯',
      'Cerveja': '🍺'
    };
    
    function getDrinkIcon(type) {
        return icons[type] || '🍷';
    };
    

    return (
        <Container>
            <DrinkImage>
                    {getDrinkIcon(drink.type)}
            </DrinkImage>
                <DrinkInfo>
                    <DrinkName>{drink.name}</DrinkName>
                    <DrinkDetails>
                    <DetailRow>
                        <DetailLabel>Tipo:</DetailLabel>
                        <TypeBadge>{drink.type}</TypeBadge>
                    </DetailRow>
                    <DetailRow>
                        <DetailLabel>Ano:</DetailLabel>
                        <DetailValue>{drink.year}</DetailValue>
                     </DetailRow>
                    <DetailRow>
                        <DetailLabel>Quantidade:</DetailLabel>
                        <DetailValue>{drink.quantity}</DetailValue>
                    </DetailRow>
                    <DetailRow>
                        <DetailLabel>Preço:</DetailLabel>
                        <DetailValue>{drink.price}</DetailValue>
                    </DetailRow>
                    </DrinkDetails>
                    <Actions>
                    <ActionButton onClick={() => console.log('Não Implementado')}>
                        Editar
                    </ActionButton>
                    { moveToCellar &&(
                        <ActionButton>
                            → Mover à Adega!
                        </ActionButton>)
                    }
                    <ActionButton 
                        className="danger" 
                        onClick={() => console.log('Não Implementado')}
                    >
                        Excluir
                    </ActionButton>
                    </Actions>
                </DrinkInfo>
            </Container>
    );
}