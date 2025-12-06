import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './AIChatWidget.module.css';

const AIChatButton = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
    onClick();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className={clsx(styles.aiChatButton, 'button button--primary')}
      onClick={handleClick}
      aria-label="Open AI Assistant"
    >
      <span className={styles.buttonText}>🤖 Ask AI</span>
    </button>
  );
};

export default AIChatButton;