'use client';

import { useEffect } from 'react';

export function ElevenLabsWidget() {
  useEffect(() => {
    // Add script dynamically
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <elevenlabs-convai agent-id="IHOXnABzT6ZKd697RkzA"></elevenlabs-convai>
  );
} 