import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _newTaskEventEmitter: EventEmitter<Task> = new EventEmitter();

  private _idTaskEventEmitter = new EventEmitter();

  private _findTaskByIdEventEmitter = new EventEmitter();

  private _selectTaskEventEmitter = new EventEmitter();

  constructor() { }

  get selectTaskEventEmitter() {
    return this._selectTaskEventEmitter;
  }
  
  get findTaskByIdEventEmitter() {
    return this._findTaskByIdEventEmitter
  }

  get newTaskEventEmitter(): EventEmitter<Task> {
    return this._newTaskEventEmitter;
  }

  get idTaskEventEmitter(): EventEmitter<number>{
    return this._idTaskEventEmitter;
  }

}
