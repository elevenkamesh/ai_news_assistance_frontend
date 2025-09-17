import { API_CONFIG } from '../config/api';

export interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export interface ChatResponse {
  status: boolean;
  data: {
    sessionId: string;
    answer?: string;
    history?: Message[];
    cleared?: boolean;
  };
}

// Send a message to the chat API
export const sendMessage = async (question: string, sessionId: string): Promise<ChatResponse> => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CHAT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question,
      sessionId,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

// Get chat history for a session
export const getChatHistory = async (sessionId: string): Promise<ChatResponse> => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.HISTORY}/${sessionId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

// Clear chat history for a session
export const clearChatHistory = async (sessionId: string): Promise<ChatResponse> => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.HISTORY}/${sessionId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};