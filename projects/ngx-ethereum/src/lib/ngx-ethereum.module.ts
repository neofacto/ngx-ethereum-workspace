import { NgModule } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { ShortAddressPipe } from './pipes/short-address.pipe';

@NgModule({
  declarations: [ShortAddressPipe, AccountComponent],
  imports: [],
  exports: [],
})
export class NgxEthereumModule {}
