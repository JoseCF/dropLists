import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})
export class CdkDragDropConnectedSortingExample {
  todo = [
    'CAMPO 1',
    'CAMPO 2',
    'CAMPO 3',
    'CAMPO 4'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  done2 = [
    
  ];

  sourceFields=['SourceField1','SourceField2','SourceField3','SourceField4','SourceField5','SourceField6',
  'SourceField7','SourceField8','SourceField9','SourceField10','SourceField11','SourceField12']

  ontology = {
    fields:[
        {name:"PRUEBA 1", assignedFields:[]},
        {name:"PRUEBA 2", assignedFields:[]},
        {name:"PRUEBA 3", assignedFields:[]},
        {name:"PRUEBA 4", assignedFields:[]},
        {name:"PRUEBA 5", assignedFields:[]},
        {name:"PRUEBA 6", assignedFields:[]},
        {name:"PRUEBA 7", assignedFields:[]},
        {name:"PRUEBA 8", assignedFields:[]},
        {name:"PRUEBA 9", assignedFields:[]},
        {name:"PRUEBA 10", assignedFields:[]},
        {name:"PRUEBA 11", assignedFields:[]},
        ]
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      console.log("En el mismo contenedor")
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("A otro contenedor")
      console.log("event.previousContainer.data",event.previousContainer.data)
      console.log("event.container.data",event.container.data)
      console.log("event.previousIndex",event.previousIndex)
      console.log("event.currentIndex",event.currentIndex)

      //event.container.data.push(event.previousContainer.data[event.previousIndex]);

      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */