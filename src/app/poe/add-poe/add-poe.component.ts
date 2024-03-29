import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoeService } from '../services/poe.service';
import { Router } from '@angular/router';
import { Poe } from '../poe_types/poe_types';

@Component({
  selector: 'app-add-poe',
  templateUrl: './add-poe.component.html',
  styleUrl: './add-poe.component.scss',
})
export class AddPoeComponent {
  public poeForm: FormGroup = new FormGroup({});

  constructor(
    private _formBuilder: FormBuilder,
    private _poeService: PoeService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.poeForm = this._formBuilder.group({
      label: ['', [Validators.required, Validators.minLength(3)]],
      duration: ['', [Validators.required, Validators.pattern('^[1-9]d*$')]],
    });
  }

  onSubmit(): void {
    this._poeService
      .add(this.poeForm.value)
      .subscribe((poe: Poe) => this._router.navigate(['/poe']));
  }
}
