import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooDirective } from 'src/directive/foo.directive';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FooDirective],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
