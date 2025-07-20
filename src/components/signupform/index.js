import React, { useState } from 'react';
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

  const navigate = useNavigate();
    

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <FormContainer>
      <Title>Criar Conta</Title>
      <Form onSubmit={() => navigate('/drinklist')}>
        <InputGroup>
          <Label htmlFor="name">Nome Completo</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
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


