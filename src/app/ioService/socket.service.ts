import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  readonly uri: string = "ws://localhost:3000";
  private socket: any;
  public response: boolean;
  private status = new BehaviorSubject<boolean>(false);
  currentStatus = this.status.asObservable();
  constructor() {
    this.socket = io(this.uri);
  }

  sendMessage(data) {
    if (this.socket.connected == true) {
      this.socket.emit("message", data);
      this.response = true;
    } else {
      this.socket.emit("join", {
        room: "Room1",
      });
      this.response = false;
    }

    // return this.response;
  }

  joinRoom(data) {
    this.socket.emit("join", data);
  }

  leaveRoom(data) {
    this.socket.emit("leave", data);
  }

  getMessages() {
    const observable = new Observable((observer) => {
      this.socket.on("new message", (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }
  // pusher

  DataUserStatusPusher(data: boolean) {
    this.status.next(data);
    setTimeout(() => {
      this.status.next(!data);
    }, 2000);
  }
}
