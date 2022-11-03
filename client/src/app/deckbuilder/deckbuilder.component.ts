import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { DeckbuilderService } from "./deckbuilder.service";
import { AlertService } from "../shared/services/alert.service";
import { ICard, ICardRarity, IUser } from "../shared/models";
import { CardService } from "../shared/services/card.service";
import { AuthenticationService } from "../core/authentication/services/authentication.service";
import { DeckbuilderManager } from "../shared/models/deckbuilder/manager.builder";
import { Observable } from "rxjs";

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
  public description;
  public showDescription: boolean = false;
  public cards!: Observable<ICard[]>;
  public step!: string | void;
  public moreCharts: boolean = false;

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
    private readonly _card: CardService,
    private readonly _deckbuilder: DeckbuilderService
  ) {
    this.user = this._authentication.currentUserValue();
    this.manager = this._deckbuilder.manager;
    this.cards = this._card.cardsQuery([["Leader", "rarities"]]);
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
    this._deckbuilder.create(this.name, this.manager.deck.parse(), "Public", "").subscribe({
      next: async (deck) => {
        console.log(deck);
        this._alert.success(deck.name + " created");
      },
      error: (error) => {
        this._alert.error(error);
      }
    });
  };

  public displayCharts = () => (this.moreCharts = !this.moreCharts);
  public displayDescription = () => (this.showDescription = !this.showDescription);
}
