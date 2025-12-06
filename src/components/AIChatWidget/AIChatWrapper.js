import React, { useState } from 'react';
import AIChatButton from './AIChatButton';
import AIChatModal from './AIChatModal';

const AIChatWrapper = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {children}
      <AIChatButton onClick={handleOpenModal} />
      <AIChatModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default AIChatWrapper;