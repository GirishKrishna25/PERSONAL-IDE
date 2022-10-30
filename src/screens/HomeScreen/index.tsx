import { useContext } from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import styled from "styled-components";
import Modal from "../../components/Modal";
import { ModalContext } from "../../context/ModalContext";

const HomeScreen = () => {
  const ModalFeatures = useContext(ModalContext)!;
  const isOpen = ModalFeatures.isOpen;

  return (
    <HomeScreenContainer>
      <LeftPane />
      <RightPane />
      {isOpen.value === true ? <Modal /> : <></>}
    </HomeScreenContainer>
  );
};
export default HomeScreen;

const HomeScreenContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
