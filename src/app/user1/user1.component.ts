import { Component } from '@angular/core';
import { ChatService } from './../service/chat.service';
@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component {
  message: string = '';
  receivedMessages: string[] = [];

  constructor(private chatService: ChatService) {
    this.chatService.user1MessageReceived$.subscribe((message) => {
      this.receivedMessages.push(message);
    });
  }

  sendMessage() {
    if (this.message) {
      this.chatService.sendMessageFromUser1(`User 1: ${this.message}`);
      this.message = '';
    }
  }
}
