import { useState } from 'react';
import { useNavigate } from 'react-router';

import {
    FormContainer,
    Title,
    Form,
    Label,
    InputGroup,
    Input,
    Button,
} from '../signupform/style'

export default function LoginForm () {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function login() {
    const user = {
      name: name,
      password: password
    }
    navigate('/drinklist', {state: {user: user}})
  }

  return (
    <FormContainer>
      <Title>Login</Title>
      <Form onSubmit={() => login()}>

        <InputGroup>
          <Label htmlFor="name">Username</Label>
          <Input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.value)}
            placeholder="Insira seu username"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.value)}
            placeholder="Insira sua senha"
            required
          />
        </InputGroup>

        <Button type="submit">
            Entrar
        </Button>
      </Form>
    </FormContainer>
  );
};


