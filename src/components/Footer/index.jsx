import { FooterSocial } from "./FooterSocial";

import {
  FooterContainer,
  Section,
  Unlist,
  List,
  SectionNewsLatter,
  Title,
  Div,
  Input,
  Button,
} from "./styles";

export function Footer() {
  return (
    <>
      <FooterContainer>
        <Section>
          <Unlist>
            <List>Contato</List>
            <List>Termos de serviço</List>
            <List>Política de privacidade</List>
            <List>Cancelamento, troca e reembolso</List>
          </Unlist>
          <SectionNewsLatter>
            <Title>NewsLatter</Title>
            <Div>
              <Input placeholder="Digite seu e-mail" type="e-mail" />
              <Button>Inscrever</Button>
            </Div>
          </SectionNewsLatter>
        </Section>
      </FooterContainer>
      <hr />
      <FooterSocial />
    </>
  );
}
