import styled from 'styled-components';
import logo from '../assets/logo.png';

function highlight(strings, value) {
  return `${strings[0]}${value}${strings[1]}`;
}

const description = 'artists and art-lovers';
const outputText = highlight`A community of ${description}.`;

const StyledHeader = styled.header`
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #111827, #1f2937);

  h1 {
    color: white;
    font-size: 3rem;
    margin: 1rem 0 0.5rem;
    letter-spacing: 2px;
    transition: color 0.3s ease;

    &:hover {
      color: #c084fc;
    }
  }

  p {
    color: #d1d5db;
    font-size: 1.1rem;
    margin: 0;
  }

  img {
    width: 120px;
    height: auto;
    border-radius: 12px;
    transition: transform 0.4s ease;
  }

  img:hover {
    transform: rotate(5deg) scale(1.05);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1rem;
    }

    img {
      width: 90px;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;

    h1 {
      font-size: 1.8rem;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>{outputText}</p>
    </StyledHeader>
  );
}