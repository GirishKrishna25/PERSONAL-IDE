import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavbarContent
        onClick={() => {
          navigate("/");
        }}
      >
        <Logo src="/logo.png" alt="" />
        <MainHeading>
          <span>personal</span>IDE
        </MainHeading>
      </NavbarContent>
    </NavbarContainer>
  );
};
export default Navbar;

const NavbarContainer = styled.div`
  height: 4.5rem;
  background: #241f21;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavbarContent = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: transparent;
`;

const Logo = styled.img`
  width: 45px;
`;

const MainHeading = styled.h1`
  font-size: 1.9rem;
  font-weight: 400;
  color: white;

  span {
    font-weight: 700;
  }
`;
