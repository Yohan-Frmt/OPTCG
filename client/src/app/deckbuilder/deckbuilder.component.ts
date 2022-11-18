import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { DeckbuilderService } from "./deckbuilder.service";
import { AlertService } from "../shared/services/alert.service";
import { ICard, ICardRarity, IDeckVisibility, IUser } from "../shared/models";
import { CardService } from "../shared/services/card.service";
import { AuthenticationService } from "../core/authentication/services/authentication.service";
import { DeckbuilderManager } from "../shared/models/deckbuilder/manager.builder";
import { Observable } from "rxjs";
import * as CKE from "@ckeditor/ckeditor5-build-decoupled-document";
import { DeckService } from "../shared/services/deck.service";
import { Router } from "@angular/router";

@Component({
  selector: "deckbuilder",
  templateUrl: "./deckbuilder.component.html",
  styleUrls: ["./deckbuilder.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeckbuilderComponent implements OnInit {
  public user: IUser | null;
  public manager: DeckbuilderManager;
  public name: string = "";
  public visibility: string = "------------";
  public editor = CKE;
  public description: string = "Coucou c'est moi";
  public showDescription: boolean = false;
  public cards!: Observable<ICard[]>;
  public visibilities!: Observable<IDeckVisibility[]>;
  public step!: string | void;
  public moreCharts: boolean = false;
  public isZoomed: boolean = false;
  public imgCardZoomed!: string | undefined;

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _router: Router,
    private readonly _alert: AlertService,
    private readonly _card: CardService,
    private readonly _deck: DeckService,
    private readonly _deckbuilder: DeckbuilderService
  ) {
    this.user = this._authentication.currentUserValue();
    this.manager = this._deckbuilder.manager;
    this.cards = this._card.cardsQuery([["Leader", "rarities"]]);
    this.visibilities = this._deck.visibilities;
  }

  ngOnInit(): void {
    this.manager.initChart(document.getElementById("cardTypes") as HTMLCanvasElement);
    this.manager.initChart(document.getElementById("cardColors") as HTMLCanvasElement);
    this.manager.initChart(document.getElementById("cardCounters") as HTMLCanvasElement);
    this.manager.initChart(document.getElementById("cardAttributes") as HTMLCanvasElement);
    this.manager.initChart(document.getElementById("cardCosts") as HTMLCanvasElement);
    this.manager.initChart(document.getElementById("cardRarities") as HTMLCanvasElement);
    this.manager.initChart(document.getElementById("cardPowers") as HTMLCanvasElement);
  }

  public onClick = (card: ICard) => {
    if (card.rarities.some((rarity: ICardRarity) => rarity.abbr === "L")) {
      this.manager.setLeader(card);
      this.cards = this._card.cardsQuery([
        ["!Leader", "types"],
        [card.colors.map((c) => c.en_name).join(), "colors"]
      ]);
    } else {
      this.manager.addCard(card);
    }
    this.manager.updateChart();
  };

  public onRightClick = (card: ICard) => {
    this.manager.removeCard(card);
    this.manager.updateChart();
    return false;
  };

  public onSubmit = () => {
    this._deckbuilder.create(this.name, this.manager.deck.parse(), this.visibility, this.description).subscribe({
      next: (deck) => {
        this._alert.success(deck.name + " created");
        this._router.navigate(["/decks", deck.id]);
      },
      error: (error) => {
        this._alert.error(error);
      }
    });
  };

  public zoomCard(value: boolean, card?: ICard): void {
    this.isZoomed = value;
    this.imgCardZoomed = "/assets/images/cards/" + card?.serial_number.split("-")[0] + "/" + card?.images[0].path;
  }

  public displayCharts = () => (this.moreCharts = !this.moreCharts);
  public displayDescription = (opened: boolean) => this.showDescription = opened;
  public OnEditorReady = (editor: CKE.Editor) => {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  };
}
