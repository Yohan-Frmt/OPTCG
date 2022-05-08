import { Component } from '@angular/core';
import {ITest, TestService} from "./services/test.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'app';
  public titleTest: Observable<ITest> = this.ts.getTest();
  constructor(private readonly ts: TestService) {}
}
