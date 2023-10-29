import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClipboard, faExpand } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
})
export class CardComponent implements OnInit {
  @Input() public img: string = '';
  @Input() public title: string = '';
  @Input() public description: string = '';
  @Input() public alt: string = '';

  public btnClipboard = faClipboard;
  public btnView = faExpand;
  constructor() {}

  ngOnInit(): void {}
}
