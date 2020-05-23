import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  readonly uri: string = "ws://localhost:81/event";
  private socket: any;
  public response: boolean;
  private status = new BehaviorSubject<boolean>(false);
  currentStatus = this.status.asObservable();
  constructor() {
    this.socket = io(this.uri);
  }

  sendMessage(data) {
    let DTO = { room: "Room1", user: "User X", msg: data }
    if (this.socket.connected == true) {
      this.socket.emit("sendMessage", DTO);
      this.response = true;
    } else {
      this.socket.emit("joinRoom", {
        room: "Room1",
      });
      this.response = false;
    }

    return this.response;
  }

  joinRoom(data) {
    this.socket.emit("joinRoom", data);
  }

  leaveRoom(data) {
    this.socket.emit("leaveRoom", data);
  }

  getMessages() {
    const observable = new Observable((observer) => {
      this.socket.on("getResponse", (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }

  getRoomStatus() {
    const observable = new Observable((observer) => {
      this.socket.on("roomCreated", (data) => {
        console.log("roomCreated", data);

        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }


  // DataUserStatusPusher(data: boolean) {
  //   this.status.next(data);
  //   setTimeout(() => {
  //     this.status.next(!data);
  //   }, 2000);
  // }
}
