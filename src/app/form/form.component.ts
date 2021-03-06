import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() input: string;
  constructor() {}

  ngOnInit() {}
}
