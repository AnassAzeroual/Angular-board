import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDragEnd,
} from "@angular/cdk/drag-drop";
import { SocketService } from "../../ioService/socket.service";


@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
})

export class MainViewComponent implements OnInit {





  board: any =
    {
      columns: [
        {
          id: 2020,
          name: "Ideas",
          tasks: ["Some random idea", "This is another random idea", "build an awesome application"]
        }, {
          id: 2021,
          name: "Research",
          tasks: ["Lorem ipsum", "foo", "This was in the 'Research' column"]
        }, {
          id: 2022,
          name: "Todo",
          tasks: ["Get to work", "Pick up groceries", "Go home", "Fall asleep"]
        }, {
          id: 2023,
          name: "Done",
          tasks: ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"]
        }
      ]
    }


  obj: CdkDragDrop<string[]>



  constructor(private io: SocketService) {
    this.io.joinRoom({
      room: "Room1",
    });
    // tslint:disable-next-line: no-shadowed-variable
    this.io.getMessages().subscribe((data) => {
      // this.board = data['msg'];
      // console.log(data);
      console.log("res event io", data['msg']);

      // this.drop(data['msg']);
    });
  }

  ngOnInit() { }

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer.id === event.container.id) {
      let params = {
        previousContainerID: event.previousContainer.id,
        containerID: event.container.id,
        containerData: event.container.data,
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
      }
      this.io.sendMessage(params)

      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      let params2 = {
        oldZoneId: event.previousContainer.id,
        newZoneId: event.container.id,
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex
      }
      this.io.sendMessage(params2)

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  positions(e) {
    console.log(e.distance)
  }

}
