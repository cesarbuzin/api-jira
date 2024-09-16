// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { matches } from 'lodash';

@Component({
  selector: 'app-profile-one',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './profile-one.component.html',
  styleUrls: ['./profile-one.component.scss']
})
export default class ProfileOneComponent {
  // private Method
  infoList = [
    {
      icon: 'email',
      user: 'Email',
      text: 'demo@sample.com'
    },
    {
      icon: 'phonelink_ring',
      user: 'Phone',
      text: '(+99) 9999 999 999'
    },
    {
      icon: 'pin_drop',
      user: 'Location',
      text: 'Melbourne'
    }
  ];

  social = [
    {
      total: '37',
      user: 'Mails'
    },
    {
      total: '2749',
      user: 'Followers'
    },
    {
      total: '678',
      user: 'Following'
    }
  ];

  taskList = [
    {
      title: 'Full Name',
      name: 'John Doe'
    },
    {
      title: 'Fathers Name',
      name: 'Mr. Deepen Handgun'
    },
    {
      title: 'Address',
      name: 'Street 110-B Kalians Bag, Dewan, M.P. INDIA'
    },
    {
      title: 'Zip Code',
      name: '12345'
    },
    {
      title: 'Phone',
      name: '+0 123456789 , +0 123456789'
    },
    {
      title: 'Email',
      name: 'support@example.com'
    },
    {
      title: 'Website',
      name: 'http://example.com'
    }
  ];

  education = [
    {
      year: '2014-2017',
      course: 'Master Degree',
      title: 'Master Degree in Computer Application',
      text: 'University of Oxford, England'
    },
    {
      year: '2011-2013',
      course: 'Bechelor',
      title: 'Bachelor Degree in Computer Engineering',
      text: 'Imperial College London'
    },
    {
      year: '2009-2011',
      course: 'School',
      title: 'Higher Secondry Education',
      text: 'School of London, England'
    }
  ];

  socialMedia = [
    {
      media: 'Facebook',
      icon: 'fab fa-facebook-f',
      bgColor: 'bg-facebook'
    },
    {
      media: 'Twitter',
      icon: 'fab fa-twitter',
      bgColor: 'bg-twitter'
    },
    {
      media: 'Google Plus',
      icon: 'fab fa-google-plus-g',
      bgColor: 'bg-googlePlus'
    }
  ];

  deviceList = [
    {
      icon: 'icon-monitor',
      color: 'text-success',
      status: 'Current Active',
      title: 'Cett Desktop',
      describe: '| 4351 Deans Lane, Elmsford'
    },
    {
      icon: 'icon-tablet',
      color: 'text-muted',
      status: 'Active 5 days ago',
      title: 'Imoon Tablet',
      describe: '| 4185 Michigan Avenue, SHIPPINGPORT'
    },
    {
      icon: 'icon-smartphone',
      color: 'text-muted',
      status: 'Current ActivActive 1 month ago',
      title: 'Asbs Mobile',
      describe: '| 3462 Fairfax Drive, Montclair'
    }
  ];

  activityRelated = [
    {
      activity: 'have new notifications'
    },
    {
      activity: "You're sent a direct message"
    },
    {
      activity: 'Someone adds you as a connection'
    }
  ];

  activityRelated2 = [
    {
      activity: 'Upon new order'
    },
    {
      activity: 'New membership approval'
    },
    {
      activity: 'Member registration'
    }
  ];

  activityRelated3 = [
    {
      activity: 'News about PCT-themes products and feature updates'
    },
    {
      activity: 'Tips on getting more out of PCT-themes'
    },
    {
      activity: 'Things you missed since you last logged into PCT-themes'
    },
    {
      activity: 'News about products and other services'
    },
    {
      activity: 'Tips and Document business products'
    }
  ];

  settings = [
    {
      title: 'Secure Browsing',
      text: "Browsing Securely ( https ) when it's necessary"
    },
    {
      title: 'Login Notifications',
      text: 'Notify when login attemped from outher place'
    },
    {
      title: 'Login Approvals',
      text: 'Approvals is not required when login from unrecognized devices.'
    }
  ];

  sessions = [
    {
      title: 'Cett Desktop',
      describe: '| 4351 Deans Lane, Elmsford'
    },
    {
      title: 'Imoon Tablet',
      describe: '| 4185 Michigan Avenue, SHIPPINGPORT'
    }
  ];

  pwForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pwForm = fb.group({
      pw: fb.control('', [Validators.required]),
      check: fb.control('', [Validators.required])
    });

    const pwControl = this.pwForm.get('pw');
    const checkControl = this.pwForm.get('check');

    if (pwControl && checkControl) {
      this.pwForm.addValidators(matchValidator(pwControl, checkControl));
    }
  }
}

function matchValidator(control: AbstractControl, controlTwo: AbstractControl): ValidatorFn {
  return () => {
    if (control.value !== controlTwo.value) return { match_error: 'Password does not match' };
    return matches;
  };
}
