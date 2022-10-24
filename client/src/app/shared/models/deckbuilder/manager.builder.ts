import { Deck } from './deck.builder';
import Chart, { ChartDataset } from 'chart.js/auto';
import { ICard } from '../card/card.model';

interface IFormat {
  readonly name: string;
  readonly deck: Deck;
}

export class DeckbuilderManager {
  constructor(format: number) {
    switch (format) {
      case 0:
        this.deck = new Deck(50, 50);
    }
    this._format = [
      {
        name: 'Standard',
        deck: this.deck,
      },
    ];
    this._activeFormat = this._format[format];
    this._chartArray = ['pie', 'doughnut'];
  }

  private _chartArray: string[];

  get chartArray(): string[] {
    return this._chartArray;
  }

  set chartArray(value: string[]) {
    this._chartArray = value;
  }

  private _cardColors!: Chart;

  get cardColors(): Chart {
    return this._cardColors;
  }

  set cardColors(value: Chart) {
    this._cardColors = value;
  }

  private _cardTypes!: Chart;

  get cardTypes(): Chart {
    return this._cardTypes;
  }

  set cardTypes(value: Chart) {
    this._cardTypes = value;
  }

  private _cardCounters!: Chart;

  get cardCounters(): Chart {
    return this._cardCounters;
  }

  set cardCounters(value: Chart) {
    this._cardCounters = value;
  }

  private _ctx!: HTMLCanvasElement;

  get ctx(): HTMLCanvasElement {
    return this._ctx;
  }

  set ctx(value: HTMLCanvasElement) {
    this._ctx = value;
  }

  private _format: IFormat[];

  get format(): IFormat[] {
    return this._format;
  }

  set format(value: IFormat[]) {
    this._format = value;
  }

  private _deck!: Deck;

  get deck(): Deck {
    return this._deck;
  }

  set deck(value: Deck) {
    this._deck = value;
  }

  private _activeFormat: IFormat;

  get activeFormat(): IFormat {
    return this._activeFormat;
  }

  set activeFormat(value: IFormat) {
    this._activeFormat = value;
  }

  public setLeader = (card: ICard): void => {
    this.activeFormat.deck.setLeader(card);
  };

  public addCard = (card: ICard): void => {
    this.activeFormat.deck.addCardToDeck(card);
  };

  public removeCard = (card: ICard): void => {
    this.activeFormat.deck.removeCardFromDeck(card);
  };

  public initChart = (element: HTMLCanvasElement) => {
    switch (element.id) {
      case 'cardColors':
        this.cardColors = new Chart(element, {
          type: 'pie',
          data: {
            labels: ['Red', 'Blue', 'Green', 'Purple'],
            datasets: [
              {
                data: [0, 0, 0, 0],
                backgroundColor: ['#b8051a', '#016fb5', '#198b63', '#8c1b7d'],
                borderWidth: 2,
                borderColor: '#0F1416',
                label: 'Colors',
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                display: false,
              },
              x: {
                display: false,
              },
            },
          },
        });
        break;
      case 'cardTypes':
        this.cardTypes = new Chart(element, {
          type: 'pie',
          data: {
            labels: ['Characters', 'Events', 'Stages'],
            datasets: [
              {
                data: [0, 0, 0],
                backgroundColor: ['#f4f2f3', '#c4a04e', '#002454'],
                borderWidth: 2,
                borderColor: '#0F1416',
                label: 'Cards',
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                display: false,
              },
              x: {
                display: false,
              },
            },
          },
        });
      break;
      case 'cardCounters':
        this.cardCounters = new Chart(element, {
          type: 'pie',
          data: {
            labels: ['0', '+1000', '+2000'],
            datasets: [
              {
                data: [0, 0, 0],
                backgroundColor: ['#b8051a', '#016fb5', '#198b63'],
                borderWidth: 2,
                borderColor: '#0F1416',
                label: 'Colors',
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                display: false,
              },
              x: {
                display: false,
              },
            },
          },
        });
      break;
    }
  };

  public updateChart = () => {
    this.cardTypes.data.datasets.forEach((dataset: ChartDataset) => {
      dataset.data = [
        this.activeFormat.deck.getNumberOfCardsByType('Character'),
        this.activeFormat.deck.getNumberOfCardsByType('Event'),
        this.activeFormat.deck.getNumberOfCardsByType('Stage'),
      ];
    });

    this.cardColors.data.datasets.forEach((dataset: ChartDataset) => {
      dataset.data = [
        this.activeFormat.deck.getNumberOfCardsByColor('Red'),
        this.activeFormat.deck.getNumberOfCardsByColor('Blue'),
        this.activeFormat.deck.getNumberOfCardsByColor('Green'),
        this.activeFormat.deck.getNumberOfCardsByColor('Purple'),
      ];
    });

    this.cardCounters.data.datasets.forEach((dataset: ChartDataset) => {
      dataset.data = [
        this.activeFormat.deck.getNumberOfCardsByCounter(0),
        this.activeFormat.deck.getNumberOfCardsByCounter(1000),
        this.activeFormat.deck.getNumberOfCardsByCounter(2000),
      ];
    });

    this.cardTypes.update();
    this.cardColors.update();
    this.cardCounters.update();
  };
}
