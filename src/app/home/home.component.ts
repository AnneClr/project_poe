import { Component } from '@angular/core';
import { InternService } from './services/intern.service';
import { Intern } from './types/intern.type';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  /**
   * @var Array<Intern>
   * Array of Intern to be displayed
   */

  interns: Array<Intern> = [];

  constructor(private _service: InternService) {}

  ngOnInit(): void {
    this._service
      .findAll()
      .pipe(take(1))
      .subscribe((interns: Intern[]) => (this.interns = interns));
  }
}
