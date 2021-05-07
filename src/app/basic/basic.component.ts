import { Component } from "@angular/core";

@Component({
    templateUrl: './basic.component.html'
})
export class BasicComponent{
    title = 'Course Manager';  
    name: string = 'John';
}