import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-third-view',
  templateUrl: './third-view.component.html',
  styleUrls: ['./third-view.component.scss']
})
export class ThirdViewComponent implements OnInit {
  listOfElements: any = {
    conatiner: [
      {
        class: 'black',
        item: ['assets/chess/1a-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/1b-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/3a-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/4a-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/5a-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/3a-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/1b-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/1a-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/6a-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/6a-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/6a-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/6a-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/6a-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/6a-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/6a-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/6a-removebg-preview.png']
      },
      {
        class: 'black',
        item: []
      },
      {
        class: 'white',
        item: []
      },
      {
        class: 'black',
        item: []
      },
      {
        class: 'white',
        item: []
      },
      {
        class: 'black',
        item: []
      },
      {
        class: 'white',
        item: []
      },
      {
        class: 'black',
        item: []
      },
      {
        class: 'white',
        item: []
      },
      {
        class: 'white',
        item: []
      },
      {
        class: 'black',
        item: []
      },
      {
        class: 'white',
        item: []
      },
      {
        class: 'black',
        item: []
      },
      {
        class: 'white',
        item: []
      },
      {
        class: 'black',
        item: []
      },
      {
        class: 'white',
        item: []
      },
      {
        class: 'black',
        item: []
      },
      {
        class: 'black',
        item: []
      },
      {
        class: 'white',
        item: []
      },
      {
        class: 'black',
        item: []
      },
      {
        class: 'white',
        item: []
      },
      {
        class: 'black',
        item: []
      },
      {
        class: 'white',
        item: []
      },
      {
        class: 'black',
        item: []
      },
      {
        class: 'white',
        item: []
      },
      {
        class: 'white',
        item: ['assets/chess/1b-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/1b-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/1b-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/1b-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/1b-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/1b-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/1b-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/1b-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/2b-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/3b-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/4b-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/5b-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/6b-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/4b-removebg-preview.png']
      },
      {
        class: 'black',
        item: ['assets/chess/3b-removebg-preview.png']
      },
      {
        class: 'white',
        item: ['assets/chess/2b-removebg-preview.png']
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }
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
