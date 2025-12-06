import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './AIChatWidget.module.css';

const AIChatModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'assistant', content: 'Hello! I\'m your AI assistant for the Physical AI & Humanoid Robotics textbook. Ask me anything about the content!' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response (in a real implementation, this would call an API)
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'assistant',
        content: 'Thank you for your question about the textbook content. In a full implementation, I would analyze the relevant chapters and provide a detailed answer based on the book\'s material. This is a placeholder response to demonstrate the AI chat functionality.'
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>🤖 AI Assistant</h3>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close chat">
            ×
          </button>
        </div>

        <div className={styles.chatContainer}>
          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={clsx(
                  styles.message,
                  message.type === 'user' ? styles.userMessage : styles.assistantMessage
                )}
              >
                <div className={styles.messageContent}>
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={clsx(styles.message, styles.assistantMessage)}>
                <div className={styles.messageContent}>
                  <div className={styles.typingIndicator}>
                    <div className={styles.typingDot}></div>
                    <div className={styles.typingDot}></div>
                    <div className={styles.typingDot}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <form className={styles.inputForm} onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask a question about the textbook content..."
            className={styles.inputField}
            disabled={isLoading}
            aria-label="Type your question"
          />
          <button
            type="submit"
            className={clsx(styles.submitButton, isLoading ? styles.submitButtonDisabled : '')}
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send message"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChatModal;