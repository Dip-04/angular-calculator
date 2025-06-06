import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [NgFor],
  templateUrl: './app.html',  
  styleUrls: ['./app.css']
})

export class App {
  input: string = '';

  handleClick(value: string) {
    if (value === '=') {
      try {
        this.input = eval(this.input).toString();
      } catch {
        this.input = 'Error';
      }
    } else if (value === 'C') {
      this.input = '';
    } else {
      this.input += value;
    }
  }
}
