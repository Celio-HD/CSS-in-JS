import styled from 'styled-components';
import CardProduto from './components/CardProduto';

// Container principal da aplicação
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: #f8f9fa;
`;

function App() {
  // Dados estáticos do produto usados no CardProduto
  const produto = {
    nome: 'Camiseta Estilosa',
    preco: 'R$ 79,90',
    adicionado: false,
  };

  return (
    <AppContainer>
      <CardProduto produto={produto} />
    </AppContainer>
  );
}

export default App;
