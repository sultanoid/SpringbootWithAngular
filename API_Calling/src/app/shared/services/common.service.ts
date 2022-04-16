import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { UIInfo } from '../models/ui-info.model';
import { ConfirmationDialog } from '../models/confirmation-dialog.model';
import { ConfirmDialogComponent } from '../components/confirmation-dialog.component';

@Injectable()
export class CommonService {
  private _defaultData: UIInfo = {
    title: '',
    formId: '',
    goBackPath: '/',
    refreshPath: '/',
  };

  private _dataSource$ = new BehaviorSubject<UIInfo>(this._defaultData);
  private _serviceModalData$ = new BehaviorSubject<any>({});

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  get uiInfo(): Observable<UIInfo> {
    return this._dataSource$.asObservable();
  }

  get serviceModalData(): Observable<any> {
    return this._dataSource$.asObservable();
  }

  setUiInfo(info: UIInfo): void {
    this._dataSource$.next(info);
  }

  setServiceModalData(obj: any): void {
    this._serviceModalData$.next(obj);
  }

  showSuccessMsg(msg: string, duration = 2000): void {
    this.snackBar.open(msg, '', {
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['snackbar-container', 'success'],
    });
  }

  showErrorMsg(msg: string, duration = 10000): void {
    let bot = this.snackBar.open(msg, '❌', {
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['snackbar-container', 'danger'],
    });
    bot.onAction().subscribe(() => {
      bot.dismiss();
    });
  }

  showDialog(data: ConfirmationDialog, callback: Function): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: true,
      minWidth: '550px',
      data,
    });
    dialogRef.afterClosed().subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        if (callback) {
          callback();
        }
      }
    });
  }
  removeEmptyProperties = (obj: any) => {
    for (const prop in obj) {
      if (obj[prop] === null || obj[prop] === undefined || obj[prop] === '') {
        delete obj[prop];
      }
    }
  };

  validateMessage(text: any) {
    const messagelist = [
      {
        text: 'robotName',
        value: 'Robot Name is required',
      },
      {
        text: 'absUsername',
        value: 'ABS Username is required',
      },
      {
        text: 'absPass',
        value: 'ABS Password is required',
      },
      {
        text: 'nidUsername',
        value: 'NID Username is required',
      },
      {
        text: 'nidPass',
        value: 'NID Password is required',
      },
      {
        text: 'exHouseName',
        value: 'Exchange House Name is required',
      },
      {
        text: 'exHouseUsername',
        value: 'Exchange House Username is required',
      },
      {
        text: 'exHousePass',
        value: 'Exchange House Password is required',
      },
      {
        text: 'exHouseAdditionalField1',
        value: 'Exchange House Additional Field is required',
      },
    ];

    if (!messagelist.find((item) => item.text === text)) {
      return 'Please check all field';
    }
    return messagelist.find((item) => item.text === text).value;
  }
}
