import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionFiveComponent } from './components/section-five/section-five.component';
import { SectionFourComponent } from './components/section-four/section-four.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionSevenComponent } from './components/section-seven/section-seven.component';
import { SectionSixComponent } from './components/section-six/section-six.component';
import { SectionThreeeComponent } from './components/section-threee/section-threee.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SectionFiveComponent,
    SectionFourComponent,
    SectionOneComponent,
    SectionSevenComponent,
    SectionSixComponent,
    SectionThreeeComponent,
    SectionTwoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hyocee';
}
