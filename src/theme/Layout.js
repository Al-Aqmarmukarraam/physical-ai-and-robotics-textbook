import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import AIChatWrapper from '../components/AIChatWidget/AIChatWrapper';

export default function Layout(props) {
  return (
    <OriginalLayout {...props}>
      <AIChatWrapper>
        {props.children}
      </AIChatWrapper>
    </OriginalLayout>
  );
}