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
    LinkText,
} from './style'

export default function SignupForm () {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
    
  function signup() {
    const user = {
      name: name,
      email: email,
      password: password
    }
    navigate('/drinklist', {state: {user: user}})
  }

  return (
    <FormContainer>
      <Title>Criar Conta</Title>
      <Form onSubmit={() => signup()}>
        <InputGroup>
          <Label htmlFor="name">Nome Completo</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.value)}
            placeholder="Crie um username"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.value)}
            placeholder="seu@email.com"
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
            placeholder="Crie uma senha segura"
            required
          />
        </InputGroup>

        <Button type="submit">
            Criar Conta
        </Button>
      </Form>

      <LinkText>
        Já tem uma conta?{' '}
        <a onClick={(e) => navigate('/login')}>
            Faça login aqui
        </a>
      </LinkText>
    </FormContainer>
  );
};


