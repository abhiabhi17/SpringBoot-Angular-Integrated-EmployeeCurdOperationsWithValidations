import { EventEmitter, Injectable } from "@angular/core";
@Injectable()
export class DataService
{

    DataEmitter = new EventEmitter<string>();
       
    raiseDataEmitter(data:string)
    {
        this.DataEmitter.emit(data);
    }

}