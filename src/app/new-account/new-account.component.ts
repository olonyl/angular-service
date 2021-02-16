import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LogginService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [
    LogginService
  ]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private logginService: LogginService, private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status) => alert('new status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
