import { Component, OnInit } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";
import { bounce } from "ng-animate";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  animations: [
    trigger("bounce", [
      transition(
        "* => *",
        useAnimation(bounce, {
          // Set the duration to 5seconds and delay to 2seconds
          params: { timing: 5 },
        })
      ),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  bounce: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  routeToLogin() {
    this.router.navigate(["/login"]);
  }
}
