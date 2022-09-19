import { useCart } from "../../Context/CartContext";
import {
  Tr,
  Container,
  H3,
  Table,
  Tbody,
  Td,
  Span,
  SpanSend,
  Input,
  Button,
} from "./styles";

export function MenuCart() {
  const { total, subTotal } = useCart();

  return (
    <Container>
      <H3>Resumo do Pedido</H3>
      <Table>
        <Tbody>
          <Tr>
            <Td>
              <Span>Subtotal:</Span>
            </Td>
            <Td>
              <Span>R$ {subTotal}</Span>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <SpanSend>Calcular Frete</SpanSend>
            </Td>
            <Td>
              <Input type="number" />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Span>Frete:</Span>
            </Td>
            <Td>
              <Span>Frete Gratis</Span>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Span>Total:</Span>
            </Td>
            <Td>
              <Span>R$ {total}</Span>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Button>Finalizar Compra</Button>
    </Container>
  );
}