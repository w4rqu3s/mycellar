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

  const navigate = useNavigate();
    

  const [formData, setFormData] = useState({
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
      <Title>Login</Title>
      <Form onSubmit={() => navigate('/drinklist')}>

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


