// Angular import
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-profile-two',
  standalone: true,
  imports: [CommonModule, SharedModule, MatStepperModule, MatNativeDateModule, HttpClientModule],
  templateUrl: './profile-two.component.html',
  styleUrls: ['./profile-two.component.scss']
})
export default class ProfileTwoComponent {
  // private Props
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });

  isLinear = false;

  // Constructor
  constructor(private _formBuilder: FormBuilder) {}

  //private Method
  inputData = [
    {
      title: 'First Name',
      value: 'Schorl'
    },
    {
      title: 'Last Name',
      value: 'Delaney'
    },
    {
      title: 'Email Address',
      value: 'demo@company.com'
    },
    {
      title: 'Phone Number',
      value: '000-00-00000'
    },
    {
      title: 'Company Name',
      value: 'company.ltd'
    },
    {
      title: 'Site Information',
      value: 'www.company.com'
    }
  ];

  billData = [
    {
      title: 'Block No#',
      value: '16657'
    },
    {
      title: 'Apartment Name',
      value: 'Dardan Ranch'
    },
    {
      title: 'Street Line 1',
      value: 'Nathaniel Ports'
    },
    {
      title: 'Street Line 2',
      value: 'nr. Oran Walks'
    }
  ];

  payments = [
    {
      title: 'Name on Card',
      value: 'Selena Litten'
    },
    {
      title: 'Card Number',
      value: '4012 8888 8888 1881'
    },
    {
      title: 'Expiry Date',
      value: '10/22'
    },
    {
      title: 'CCV Code',
      value: '123'
    }
  ];

  passwords = [
    {
      title: 'New Password',
      value: 'Enter New Password'
    },
    {
      title: 'Confirm Password',
      value: 'Enter Confirm password'
    }
  ];
}
