import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from './../service/chat.service';
@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component {
  message: string = '';
  receivedMessages: string[] = [];

  constructor(private chatService: ChatService) {
    this.chatService.user2MessageReceived$.subscribe((message) => {
      this.receivedMessages.push(message);
    });
  }
  sendMessage() {
    if (this.message) {
      this.chatService.sendMessageFromUser2(`User 2: ${this.message}`);
      this.message = '';
    }
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
