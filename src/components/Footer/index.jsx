import { FooterSocial } from './FooterSocial';

import {
  FooterContainer,
  AreaFooter,
  UnList,
  List,
  DivNewsLatter,
  Paragraph,
  Div,
  Input,
  Button
} from './styles';

export function Footer() {

  return (
    <FooterContainer>
      <AreaFooter>
        <UnList>
          <List>Contato</List>
          <List>Termos de serviço</List>
          <List>Política de privacidade</List>
          <List>Cancelamento, troca e reembolso</List>
        </UnList>
        <DivNewsLatter>
          <Paragraph>NewsLatter</Paragraph>
          <Div>
            <Input placeholder="Digite seu e-mail" type="e-mail" />
            <Button>Inscrever</Button>
          </Div>
        </DivNewsLatter>

      </AreaFooter>
      <FooterSocial />
    </FooterContainer>
  );
}