import React, { useState } from "react";
import {
  Container,
  Section,
  Form,
  Div,
  H1,
  DivData,
  DivInput,
  Input,
  Button,
  Anchor,
  Loading,
} from "./styles";
import { AiOutlineLoading } from "react-icons/ai";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
  }
  return (
    <React.Fragment>
      <Container>
        <Section>
          <Form onSubmit={handleSubmit}>
            <Div>
              <H1>Login</H1>
              <DivData>
                <DivInput>
                  <Input placeholder="E-mail" type="e-mail" />
                  <Input placeholder="Password" type="password" />
                </DivInput>
                {isLoading ? (
                  <Button type="submit">
                    <Loading>
                      <AiOutlineLoading size={30}/>
                    </Loading>
                  </Button>
                ) : (
                  <Button type="submit">Sign in</Button>
                )}
                <Anchor to="/">Forgot your password?</Anchor>
              </DivData>
            </Div>
          </Form>
        </Section>
      </Container>
    </React.Fragment>
  );
}
