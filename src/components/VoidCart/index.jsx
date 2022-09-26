import { 
  Container,
  Content,
  H1,
  Paragraph,
  Anchor
} from "./styles";
export function VoidCart() {

  return (
    <Container>
      <Content>
        <H1>Sem itens no carrinho!</H1>
        <Paragraph>
          Volte para a página <Anchor to="/">Home</Anchor> e adicione itens ao carrinho.
        </Paragraph>
      </Content>
    </Container>
  );
}
