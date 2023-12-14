import { Component } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-section-five',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './section-five.component.html',
  styleUrl: './section-five.component.scss',
})
export class SectionFiveComponent {}
