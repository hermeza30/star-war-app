import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SpinnerService {
  private spinnerSubject: Subject<boolean> = new Subject();
  public spinnerObs$ = this.spinnerSubject.asObservable();

  public showSpinner(): void {
    this.spinnerSubject.next(true);
  }
  public hideSpinner(): void {
    this.spinnerSubject.next(false);
  }
}
