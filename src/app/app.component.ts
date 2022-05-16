import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooDirective } from 'src/directive/foo.directive';
import { TodoComponent } from './module/todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class AppComponent {
  title = 'ng14';
}
