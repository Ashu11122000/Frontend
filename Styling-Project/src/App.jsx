import logo from '../assets/logo.png';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  padding: 2rem;
`;

const StyledImage = styled.img`
  width: 6rem;
  height: 6rem;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  color: #ffffff;
`;

const StyledText = styled.p`
  color: #ccc;
  font-size: 1rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledImage src={logo} alt="A canvas" />
      <StyledTitle>ReactArt</StyledTitle>
      <StyledText>A community of artists and art-lovers.</StyledText>
    </StyledHeader>
  );
}