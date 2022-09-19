import React from "react";
import { Container, Section, Form, Div, H1, DivData, DivInput, Input, Button, Anchor } from "./styles";

export function Login() {
  return (
    <React.Fragment>
      <Container>
        <Section>
          <Form>
            <Div>
              <H1>Login</H1>
              <DivData>
                <DivInput>
                <Input placeholder="E-mail" type="e-mail" />
                <Input placeholder="Password" type="password" />
                </DivInput>
                <Button type="submit">Sign in</Button>
                <Anchor>Forgot your password?</Anchor>
              </DivData>
            </Div>
          </Form>
        </Section>
      </Container>
    </React.Fragment>
  );
}
