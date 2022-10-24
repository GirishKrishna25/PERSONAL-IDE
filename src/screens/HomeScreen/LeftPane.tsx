import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";

const LeftPane = () => {
  const { openModal } = useContext(ModalContext)!;

  return (
    <StyledLeftPane>
      <ContentContainer>
        <Logo src="/logo.png" alt="" />
        <MainHeading>
          <span>Code</span> Deck
        </MainHeading>
        <SubHeading>Code. Compile. Debug.</SubHeading>
        <AddNewButton
          onClick={() => {
            openModal({
              value: true,
              type: "5",
              identifer: {
                folderId: "",
                cardId: "",
              },
            });
          }}
        >
          <span>+</span> Create New Playground
        </AddNewButton>
      </ContentContainer>
    </StyledLeftPane>
  );
};
export default LeftPane;

// when we add elements into the right-pane scroll-bar comes into play
// and it effects the left-pane too.
// we don't want to have a scroll-bar to our left-pane
// so we use this.
const StyledLeftPane = styled.div`
  background: #221f20;
  width: 40%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
`;

const ContentContainer = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 165px;
  margin-bottom: 1rem;
`;

const MainHeading = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  color: white;
  margin-bottom: 0.75rem;

  span {
    font-weight: 700;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  color: white;
  opacity: 75%;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

// if we use 'button' element instead of 'anchor' element we can't apply flexbox.
const AddNewButton = styled.a`
  text-decoration: none;
  padding: 0.25rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: white;
  border-radius: 2rem;
  cursor: pointer;

  span {
    font-weight: 700;
    font-size: 2rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;
