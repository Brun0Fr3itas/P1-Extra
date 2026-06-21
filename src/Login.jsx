import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import githubLogo from './assets/github-logo.png';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #0d1117;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background-color: #0d1117;
  color: #c9d1d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 90px;
`;

const LoginBox = styled.div`
  width: 100%;
  max-width: 340px;
  text-align: center;
`;

const Logo = styled.img`
  width: 64px;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.65rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  text-align: left;
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
`;

const ForgotLink = styled.a`
  color: #58a6ff;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 10px 12px;
  color: #c9d1d9;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #58a6ff;
    box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.3);
  }
`;

const Button = styled.button`
  background-color: #238636;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;

  &:hover:not(:disabled) {
    background-color: #2ea44f;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  padding: 12px;
  border-radius: 6px;
  margin-top: 10px;
  font-size: 0.95rem;

  ${({ type }) => type === 'error' && `
    background-color: rgba(248, 81, 73, 0.15);
    color: #f87171;
    border: 1px solid #f87171;
  `}
`;

const Divider = styled.div`
  margin: 24px 0 16px;
  color: #8b949e;
  font-size: 0.9rem;
  position: relative;
  text-align: center;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #30363d;
    z-index: 1;
  }

  &::after {
    content: 'or';
    background-color: #0d1117;
    padding: 0 16px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SocialButton = styled.button`
  background-color: #21262d;
  color: #c9d1d9;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #30363d;
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

const Signup = styled.div`
  margin-top: 2rem;
  font-size: 0.95rem;

  a {
    color: #58a6ff;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

const Passkey = styled.div`
  margin-top: 1rem;
  font-size: 0.95rem;

  a {
    color: #58a6ff;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

const FooterBottom = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
  background-color: #161b22;
  border-top: 1px solid #21262d;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px 24px;
  font-size: 0.82rem;
  color: #8b949e;

  a {
    color: #8b949e;
    text-decoration: none;
    &:hover {
      color: #58a6ff;
      text-decoration: underline;
    }
  }
`;

export default function GitHubLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const correctUser = "Bruno";
  const correctPass = "1234";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });
  };

  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => {
      if (username === correctUser && password === correctPass) {
        setMessage({ type: 'success', text: 'Login realizado com sucesso!' });
        alert("Bem-vindo ao GitHub!");
      } else {
        setMessage({ type: 'error', text: 'Incorrect username or password. ❌' });
      }
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoading, username, password]);

  const handleSocialLogin = (provider) => {
    alert(`Continuing with ${provider}`);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <LoginBox>
          <Logo src={githubLogo} alt="GitHub" />

          <Title>Sign in to GitHub</Title>

          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Username or email address</Label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                required
              />
            </InputGroup>

            <InputGroup>
              <LabelRow>
                <Label>Password</Label>
                <ForgotLink href="#">Forgot password?</ForgotLink>
              </LabelRow>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </InputGroup>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>

            {message.text && (
              <Message type={message.type}>
                {message.text}
              </Message>
            )}
          </Form>

          <SocialButtons>
            <SocialButton onClick={() => handleSocialLogin('Google')}>
              <img src="src\assets\google-logo-search-new-svgrepo-com.svg" alt="Google" />
              Continue with Google
            </SocialButton>
            <SocialButton onClick={() => handleSocialLogin('Apple')}>
              <img src="/src/assets/Apple_logo_white.svg.png" alt="Apple" />
              Continue with Apple
            </SocialButton>
          </SocialButtons>

          <Signup>
            New to GitHub? <a href="#">Create an account</a>
          </Signup>

          <Passkey>
            <a href="#">Sign in with a passkey</a>
          </Passkey>
        </LoginBox>

        <FooterBottom>
          <FooterLinks>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Docs</a>
            <a href="#">Contact GitHub Support</a>
            <a href="#">Manage cookies</a>
            <a href="#">Do not share my personal information</a>
          </FooterLinks>
        </FooterBottom>
      </Container>
    </>
  );
}