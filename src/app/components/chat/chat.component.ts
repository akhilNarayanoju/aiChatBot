import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from '../message/message.component';
import { Message } from '../../models/message.model';
import { GeminiService } from '../../services/gemini.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule, MessageComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  messages: Message[] = [];
  userInput: string = '';
  isLoading: boolean = false;
  error: string = '';

  constructor(
    private geminiService: GeminiService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    // Load previous chat history
    this.messages = this.storageService.loadMessages();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  sendMessage(): void {
    if (!this.userInput.trim() || this.isLoading) {
      return;
    }

    // Create user message
    const userMessage: Message = {
      id: this.generateId(),
      content: this.userInput.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    this.messages.push(userMessage);
    const prompt = this.userInput;
    this.userInput = '';
    this.isLoading = true;
    this.error = '';

    // Call Gemini API
    this.geminiService.generateResponse(prompt).subscribe({
      next: (response) => {
        const aiMessage: Message = {
          id: this.generateId(),
          content: response,
          sender: 'ai',
          timestamp: new Date()
        };
        this.messages.push(aiMessage);
        this.storageService.saveMessages(this.messages);
        this.isLoading = false;
      },
      error: (error) => {
        this.error = error.message || 'Something went wrong. Please try again.';
        this.isLoading = false;
        console.error('Error:', error);
      }
    });
  }

  clearChat(): void {
    if (confirm('Are you sure you want to clear all messages?')) {
      this.messages = [];
      this.storageService.clearMessages();
      this.error = '';
    }
  }

  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  private scrollToBottom(): void {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop =
          this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error('Scroll error:', err);
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
