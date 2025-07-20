import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #374151;
  font-size: 0.875rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
`;

export const Button = styled.button`
  background: #7c3aed;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 1rem;
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
  cursor: pointer;

  a {
    color: #7c3aed;
    text-decoration: none;
    font-weight: 500;
  }
`;



