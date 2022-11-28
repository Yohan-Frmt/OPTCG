import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../core/authentication/services/authentication.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ICard, IUser } from "../../shared/models";
import { CardService } from "../../shared/services/card.service";
import { Observable } from "rxjs";
import { TCardCodeAndCount } from "../../deckbuilder/builder/encoder/types";

@Component({
  selector: "card-details",
  templateUrl: "./card-details.component.html",
  styleUrls: ["./card-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDetailsComponent implements OnInit {
  public user: IUser | null;
  public card!: Observable<ICard>;
  public commonUsedCard!: Observable<TCardCodeAndCount[]>;
  public serialNumber: string = "";
  public imageNumber: number = 0;

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _card: CardService,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) {
    this.user = this._authentication.currentUserValue();
    this.serialNumber = this._route.snapshot.paramMap.get("serial")!;
    this.card = this._card.getCard(this.serialNumber);
    this.commonUsedCard = this._card.getAssociatedCard(this.serialNumber);
  }

  ngOnInit() {
    this._route.params.subscribe(({ serial }) => {
      this.card = this._card.getCard(serial);
      this.commonUsedCard = this._card.getAssociatedCard(serial);
    });
  }

  public previousImage = (): void => {
    if (this.imageNumber !== 0) this.imageNumber--;
  };

  public nextImage = (max: number): void => {
    if (this.imageNumber !== max - 1) this.imageNumber++;
  };

  public changeCard = (serial: string) => {
    this._router.navigate(["/cards", serial]);
  };
}
