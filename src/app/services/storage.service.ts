import { Injectable } from '@angular/core';
import { Message, ChatHistory } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly STORAGE_KEY = 'chatbot-history';

  constructor() {}

  saveMessages(messages: Message[]): void {
    const chatHistory: ChatHistory = {
      messages: messages,
      lastUpdated: new Date()
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(chatHistory));
  }

  loadMessages(): Message[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        const chatHistory: ChatHistory = JSON.parse(stored);
        // Convert string dates back to Date objects
        return chatHistory.messages.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
      } catch (error) {
        console.error('Error parsing stored messages:', error);
        return [];
      }
    }
    return [];
  }

  clearMessages(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  hasStoredMessages(): boolean {
    return localStorage.getItem(this.STORAGE_KEY) !== null;
  }
}
