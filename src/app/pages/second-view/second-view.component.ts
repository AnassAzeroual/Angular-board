import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/ioService/socket.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.scss']
})
export class SecondViewComponent implements OnInit {

  board: any = {
    items: [
      {
        name: "zone1",
        container: ["A"]
      }, {
        name: "zone2",
        container: ["B"]
      }
      , {
        name: "zone3",
        container: ["C"]
      }
      , {
        name: "zone4",
        container: []
      }
      , {
        name: "zone5",
        container: []
      }
      , {
        name: "zone6",
        container: []
      }
      , {
        name: "zone7",
        container: []
      }
      , {
        name: "zone4",
        container: []
      }
      , {
        name: "zone5",
        container: []
      }
      , {
        name: "zone6",
        container: []
      }
      , {
        name: "zone7",
        container: []
      }
      , {
        name: "zone4",
        container: []
      }
      , {
        name: "zone5",
        container: []
      }
      , {
        name: "zone6",
        container: []
      }
      , {
        name: "zone7",
        container: []
      }
      , {
        name: "zone4",
        container: []
      }
      , {
        name: "zone5",
        container: []
      }
      , {
        name: "zone6",
        container: []
      }
      , {
        name: "zone7",
        container: []
      }
      , {
        name: "zone4",
        container: []
      }
      , {
        name: "zone5",
        container: []
      }
      , {
        name: "zone6",
        container: []
      }
      , {
        name: "zone7",
        container: []
      }
      , {
        name: "zone4",
        container: []
      }
      , {
        name: "zone5",
        container: []
      }
      , {
        name: "zone6",
        container: []
      }
      , {
        name: "zone7",
        container: []
      }
      , {
        name: "zone4",
        container: []
      }
      , {
        name: "zone5",
        container: []
      }
      , {
        name: "zone6",
        container: []
      }
      , {
        name: "zone7",
        container: []
      }
      , {
        name: "zone4",
        container: []
      }
      , {
        name: "zone5",
        container: []
      }
      , {
        name: "zone6",
        container: []
      }
      , {
        name: "zone7",
        container: []
      }
    ]
  }
  // mainPrcentage = 80;
  // mainRestofprcent = 100;
  // diffRes = this.mainRestofprcent - this.mainPrcentage
  // mainstyle: any = {
  //   'color': 'white',
  //   'display': 'grid',
  //   'grid-template-columns': `
  //   ${this.diffRes}% 
  //   ${this.mainRestofprcent - Number(this.diffRes)}%`,
  //   'grid-gap': '1em',
  //   'height': ' 100%'
  // }

  frams = 10;
  zonestyle: any = {
    'color': 'white',
    'display': 'grid',
    'padding': '10px',
    'grid-gap': '1em',
    'grid-template-columns': `repeat(${this.frams}, 1fr)`,
    'grid-auto-rows': '70px',
  }

  constructor(private io: SocketService) {
    this.io.joinRoom({
      room: "Room1",
    });
    // tslint:disable-next-line: no-shadowed-variable
    this.io.getMessages().subscribe((data) => {
      // this.board = data['response'];
    });
  }

  ngOnInit() { }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousContainer.data);
    console.log(event.container.data);
    console.log(event.previousIndex);
    console.log(event.currentIndex);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    else {
      if (event.container.data.length == 0) {

        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }
  }
}
