import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<ConfirmationPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IConfirmationPopupData) {
  }

  ngOnInit() {
  }

  public reject() {
    this.matDialogRef.close(false);
  }
  public confirm() {
    this.matDialogRef.close(true);
  }
}

interface IConfirmationPopupData {
  action: string;
}
