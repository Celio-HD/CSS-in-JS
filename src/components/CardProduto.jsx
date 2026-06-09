import styled from 'styled-components';

// Card do produto com visual
const Card = styled.article`
  width: 100%;
  max-width: 320px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  padding: 24px;
`;

// Estilo do nome do produto.
const ProdutoNome = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 12px;
  color: #212529;
`;

// Estilo do preço do produto.
const ProdutoPreco = styled.p`
  font-size: 1.25rem;
  margin: 0 0 20px;
  color: #495057;
`;

// Botão principal.
const AdicionarBotao = styled.button`
  width: 100%;
  padding: 14px 16px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.adicionado ? '#198754' : '#6c757d')};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.adicionado ? '#146c43' : '#5c636a')};
  }
`;

// Componente principal do card.
function CardProduto({ produto }) {
  return (
    <Card>
      <ProdutoNome>{produto.nome}</ProdutoNome>
      <ProdutoPreco>{produto.preco}</ProdutoPreco>
      <AdicionarBotao adicionado={produto.adicionado}>
        Adicionar ao carrinho
      </AdicionarBotao>
    </Card>
  );
}

export default CardProduto;
