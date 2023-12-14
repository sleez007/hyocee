import { Component } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-section-four',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './section-four.component.html',
  styleUrl: './section-four.component.scss',
})
export class SectionFourComponent {}
