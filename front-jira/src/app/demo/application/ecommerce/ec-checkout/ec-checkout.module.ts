// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project Import
import { EcCheckoutRoutingModule } from './ec-checkout-routing.module';
import { EcCheckoutComponent } from './ec-checkout.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { BillingComponent } from './billing/billing.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { SweetAlert2Module, SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [EcCheckoutComponent, CartDetailComponent, BillingComponent, PaymentDetailComponent],
  imports: [CommonModule, EcCheckoutRoutingModule, SharedModule, SweetAlert2Module.forRoot()],
  providers: [SweetAlert2LoaderService]
})
export class EcCheckoutModule {}
