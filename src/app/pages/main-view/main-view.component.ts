import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { SocketService } from "../../ioService/socket.service";


@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
})

export class MainViewComponent implements OnInit {

  board: any = {
    name: "Test Board Drop Zone",
    columns: [{
      name: "Ideas",
      tasks: ["Some random idea", "This is another random idea", "build an awesome application"]
    }, {
      name: "Research",
      tasks: ["Lorem ipsum", "foo", "This was in the 'Research' column"]
    }, {
      name: "Todo",
      tasks: ["Get to work", "Pick up groceries", "Go home", "Fall asleep"]
    }, {
      name: "Done",
      tasks: ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"]
    }]
  }

  constructor(private io: SocketService) {
    this.io.joinRoom({
      room: "Room1",
    });
    // tslint:disable-next-line: no-shadowed-variable
    this.io.getMessages().subscribe((data) => {
      this.board = data['msg'];
      console.log(data);

    });
  }

  ngOnInit() { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.io.sendMessage(this.board)

  }

}
