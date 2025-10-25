export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isLoading?: boolean;
}

export interface ChatHistory {
  messages: Message[];
  lastUpdated: Date;
}
