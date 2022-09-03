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

  private _pie!: Chart;

  get pie(): Chart {
    return this._pie;
  }

  set pie(value: Chart) {
    this._pie = value;
  }

  private _doughnut!: Chart;

  get doughnut(): Chart {
    return this._doughnut;
  }

  set doughnut(value: Chart) {
    this._doughnut = value;
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
      case 'pie':
        this.pie = new Chart(element, {
          type: 'pie',
          data: {
            labels: ['Red', 'Blue', 'Green', 'Purple'],
            datasets: [
              {
                data: [0, 0, 0, 0],
                backgroundColor: ['red', 'blue', 'green', 'purple'],
                borderWidth: 4,
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
      case 'doughnut':
        this.doughnut = new Chart(element, {
          type: 'pie',
          data: {
            labels: ['Characters', 'Events', 'Stages'],
            datasets: [
              {
                data: [0, 0, 0],
                backgroundColor: ['#FF6311', '#36A211', '#E32626'],
                borderWidth: 4,
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
    }
  };

  public updateChart = () => {
    this.doughnut.data.datasets.forEach((dataset: ChartDataset) => {
      dataset.data = [
        this.activeFormat.deck.getNumberOfCardsByType('Character'),
        this.activeFormat.deck.getNumberOfCardsByType('Event'),
        this.activeFormat.deck.getNumberOfCardsByType('Stage'),
      ];
    });

    this.pie.data.datasets.forEach((dataset: ChartDataset) => {
      dataset.data = [
        this.activeFormat.deck.getNumberOfCardsByColor('Red'),
        this.activeFormat.deck.getNumberOfCardsByColor('Blue'),
        this.activeFormat.deck.getNumberOfCardsByColor('Green'),
        this.activeFormat.deck.getNumberOfCardsByColor('Purple'),
      ];
    });

    this.doughnut.update();
    this.pie.update();
  };
}
