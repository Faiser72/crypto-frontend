import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { Router } from "@angular/router";
import {
  MatSlideToggleChange,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material";

//for popup forgotpassword
export interface DialogData {
  email: any;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  one = "primary";
  activeId: string;
  email: any; //for forgot password

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();

  constructor(public router: Router, public dialog: MatDialog) {}

  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    this.darkModeSwitched.emit(checked);
  }

  ngOnInit() {}

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }

  themes0() {
    this.one = "primary";
  }

  themes1() {
    this.one = "accent";
  }

  themes2() {
    this.one = "dark";
  }

  themes3() {
    this.one = "warn";
  }

  themes(): string {
    return this.one;
  }

  doLogout() {}

  // smooth Scrolls starts

  toHome() {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    this.activeId = "home";
  }

  toAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    this.activeId = "about";
  }

  toWhitePaper() {
    document
      .getElementById("whitepaper")
      .scrollIntoView({ behavior: "smooth" });
    this.activeId = "whitePaper";
  }

  toMain() {
    document.getElementById("mains").scrollIntoView({ behavior: "smooth" });
    this.activeId = "mains";
  }

  // smooth Scrolls ends

  //for popup forgotpassword
  openDialog(): void {
    const dialogRef = this.dialog.open(SignUpDialog, {
      width: "500px",

      data: { email: this.email },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //console.log('The dialog was closed');
      this.email = result;
    });
    this.activeId = "signUp";
  }
}

//PopUp of forgot password
@Component({
  selector: "signup",
  templateUrl: "signup.html",
  styleUrls: ["./header.component.scss"],
})
export class SignUpDialog {
  constructor(
    public dialogRef: MatDialogRef<SignUpDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
