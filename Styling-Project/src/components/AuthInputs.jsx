import { useState } from 'react';
import styled from 'styled-components';

const AuthContainer = styled.div`
  padding: 2rem;
  max-width: 30rem;
  margin: 3rem auto;
  background: #1f1f1f;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

  h2 {
    color: white;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    margin: 2rem 1rem;
    padding: 1.5rem;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    margin: 0;
  }

  label {
    display: block;
    color: white;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.85rem;
  border: 1px solid ${({ invalid }) => (invalid ? '#ef4444' : '#ccc')};
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${({ invalid }) => (invalid ? '#ffe6e6' : '#ffffff')};
  transition: all 0.3s ease;
  box-sizing: border-box;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
  }

  &:hover {
    border-color: #8b5cf6;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.95rem;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const TextButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  &:hover {
    color: #c4b5fd;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Button = styled.button`
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.85rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #7c3aed;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #6b7280;
    cursor: not-allowed;
  }
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <AuthContainer>
      <h2>Login</h2>

      <Controls>
        <p>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            invalid={emailNotValid}
            value={enteredEmail}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>

        <p>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            invalid={passwordNotValid}
            value={enteredPassword}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </Controls>

      <Actions>
        <TextButton type="button">Create a new account</TextButton>
        <Button onClick={handleLogin}>Sign In</Button>
      </Actions>
    </AuthContainer>
  );
}