import { createContext, useState } from "react";

// this is to open the modals dynamically
// this one decides which modal is that.
// and to open a modal we have to provide all these values.
interface PopupFields {
  value: boolean;
  type: string;
  identifer: {
    folderId: string;
    cardId: string;
  };
}

// this is to open and close the modals with the help of 'isOpen'
interface ModalContextType {
  isOpen: PopupFields;
  openModal: (value: PopupFields) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider({ children }: { children: any }) {
  const initialPopupFields: PopupFields = {
    value: false,
    type: "",
    identifer: {
      folderId: "",
      cardId: "",
    },
  };

  // if we don't use spread-operator, we can access like this 'isOpen.initialPopupFields.value', 'isOpen.initialPopupFields.type' ...
  // if we use, we can access like 'isOpen.value', 'isOpen.type' ...
  const [isOpen, setIsOpen] = useState<PopupFields>({ ...initialPopupFields });

  const openModal = (value: PopupFields) => {
    setIsOpen(value);
  };

  const closeModal = () => {
    setIsOpen({ ...initialPopupFields });
  };

  const makeAvailableGlobally: ModalContextType = {
    isOpen: isOpen,
    openModal: openModal,
    closeModal: closeModal,
  };

  return (
    <ModalContext.Provider value={makeAvailableGlobally}>
      {children}
    </ModalContext.Provider>
  );
}
