import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ChatComponent],
  template: '<app-chat></app-chat>',
  styles: []
})
export class AppComponent {
  title = 'ai-chatbot';
}
