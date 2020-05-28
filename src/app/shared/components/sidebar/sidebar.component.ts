import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  currentUserName = "person";
  currentUserAvatar = "img";
  constructor() {}

  ngOnInit() {}
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  isExpanded = true;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
