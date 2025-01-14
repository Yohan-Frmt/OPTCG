import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from "@angular/core";
import { DeckbuilderService } from "./deckbuilder.service";
import { AlertService } from "../shared/services/alert.service";
import { ICard, IDeck, IDeckVisibility, IUser } from "../shared/models";
import { CardService } from "../shared/services/card.service";
import { AuthenticationService } from "../core/authentication/services/authentication.service";
import { DeckbuilderManager } from "./builder/manager.builder";
import { Observable } from "rxjs";
import * as CKE from "@ckeditor/ckeditor5-build-decoupled-document";
import { DeckService } from "../shared/services/deck.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "deckbuilder",
  templateUrl: "./deckbuilder.component.html",
  styleUrls: ["./deckbuilder.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeckbuilderComponent implements OnInit, OnDestroy, AfterContentInit {
  public user: IUser | null;
  public manager: DeckbuilderManager;
  public name: string = "";
  public deckCode: string = "";
  public visibility: string = "------------";
  public deckId: string | null;
  public editor = CKE;
  public description: string = "Coucou c'est moi";
  public showDescription: boolean = false;
  public showImport: boolean = false;
  public cards!: Observable<ICard[]>;
  public visibilities!: Observable<IDeckVisibility[]>;
  public step!: string | void;
  public moreCharts: boolean = false;
  public isZoomed: boolean = false;
  public imgCardZoomed!: string | undefined;

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _detection: ChangeDetectorRef,
    private readonly _alert: AlertService,
    private readonly _card: CardService,
    private readonly _deck: DeckService,
    private readonly _deckbuilder: DeckbuilderService
  ) {
    this.user = this._authentication.currentUserValue();
    this.manager = this._deckbuilder.manager;
    this.cards = this._deckbuilder.cards;
    this.visibilities = this._deck.visibilities;
    this.deckId = this._route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.manager.initCharts(document.getElementsByClassName("chart"));
  }

  ngOnDestroy() {
    this.manager.clearDeck();
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
    if (this.deckId) {
      this._deck.getDeck(this.deckId).subscribe({
        next: async (deck: IDeck) => {
          await this.importDeck(deck.content);
          this.name = deck.name;
          this.visibility = (deck.visibility as IDeckVisibility).en_name;
          this.description = deck.description;
        }
      });
    }
  }

  public onClick = (card: ICard) => {
    this._deckbuilder.addCard(card);
    this.cards = this._deckbuilder.cards;
  };

  public onRightClick = (card: ICard) => {
    this._deckbuilder.removeCard(card);
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
  public displayImport = (imported: boolean) => this.showImport = imported;
  public OnEditorReady = (editor: CKE.Editor) => {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  };
  public importDeck = async (deckCode: string) => {
    this.displayImport(false);
    this.manager.clearDeck();
    await this._deckbuilder.import(deckCode);
    this.deckCode = "";
    this._detection.detectChanges();
  };
}
