// src/app/chat.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private user1MessageSource = new Subject<string>();
  user1MessageReceived$ = this.user1MessageSource.asObservable();

  private user2MessageSource = new Subject<string>();
  user2MessageReceived$ = this.user2MessageSource.asObservable();

  sendMessageFromUser1(message: string) {
    this.user2MessageSource.next(message);
  }

  sendMessageFromUser2(message: string) {
    this.user1MessageSource.next(message);
  }

}
