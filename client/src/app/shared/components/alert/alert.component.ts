import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { Alert } from '../../models/alert.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id = 'default';
  @Input() fade = true;

  public alerts: Alert[] = [];
  public alertSub!: Subscription;
  public routeSub!: Subscription;

  constructor(
    private readonly _router: Router,
    private readonly _alert: AlertService,
  ) {}

  ngOnInit(): void {
    this.alertSub = this._alert.onAlert(this.id).subscribe((alert) => {
      if (!alert.message) {
        this.alerts = this.alerts.filter((x) => x.keep);
        this.alerts.forEach((x) => delete x.keep);
        return;
      }
      this.alerts.push(alert);
      if (alert.autoClose) {
        setTimeout(() => this.remove(alert), 3000);
      }
    });
    this.routeSub = this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) this._alert.clear(this.id);
    });
  }

  ngOnDestroy(): void {
    this.alertSub.unsubscribe();
    this.routeSub.unsubscribe();
  }

  remove(alert: Alert) {
    if (!this.alerts.includes(alert)) return;
    if (this.fade) {
      alert.fade = true;
      setTimeout(() => {
        this.alerts = this.alerts.filter((x) => x !== alert);
      }, 250);
    } else {
      this.alerts = this.alerts.filter((x) => x !== alert);
    }
  }
}
