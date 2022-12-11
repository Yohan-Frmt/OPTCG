import { Deck } from "./deck.builder";
import Chart, { ChartDataset } from "chart.js/auto";
import { ICard } from "../../shared/models";

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
        name: "Standard",
        deck: this.deck
      }
    ];
    this._activeFormat = this._format[format];
    this._chartArray = ["pie", "doughnut"];
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

  private _cardAttributes!: Chart;

  get cardAttributes(): Chart {
    return this._cardAttributes;
  }

  set cardAttributes(value: Chart) {
    this._cardAttributes = value;
  }

  private _cardCosts!: Chart;

  get cardCosts(): Chart {
    return this._cardCosts;
  }

  set cardCosts(value: Chart) {
    this._cardCosts = value;
  }

  private _cardRarities!: Chart;

  get cardRarities(): Chart {
    return this._cardRarities;
  }

  set cardRarities(value: Chart) {
    this._cardRarities = value;
  }

  private _cardPowers!: Chart;

  get cardPowers(): Chart {
    return this._cardPowers;
  }

  set cardPowers(value: Chart) {
    this._cardPowers = value;
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

  public clearDeck = (): void => {
    this.deck.removeAllCardsFromDeck();
  };

  public initCharts = (charts: HTMLCollectionOf<Element>) => {
    for (const chart of charts) this.initChart(chart);
  };
  public initChart = (element: Element) => {
    const canvas = element as HTMLCanvasElement;
    const pieOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          display: false
        },
        x: {
          display: false
        }
      }
    };
    const barOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          display: true,
          ticks: {
            stepSize: 1
          }
        },
        x: {
          display: true,
          ticks: {
            stepSize: 1,
            autoSkip: false
          }
        }
      }
    };
    switch (element.id) {
      case "cardColors":
        this.cardColors = new Chart(canvas, {
          type: "pie",
          data: {
            labels: ["Red", "Blue", "Green", "Purple", "Black", "Yellow"],
            datasets: [
              {
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: ["#b8051a", "#016fb5", "#198b63", "#8c1b7d", "#201c18", "#d8c94c"],
                borderWidth: 2,
                borderColor: "#0F1416",
                label: "Colors"
              }
            ]
          },
          options: pieOptions
        });
        break;
      case "cardTypes":
        this.cardTypes = new Chart(canvas, {
          type: "pie",
          data: {
            labels: ["Characters", "Events", "Stages"],
            datasets: [
              {
                data: [0, 0, 0],
                backgroundColor: ["#f4f2f3", "#c4a04e", "#002454"],
                borderWidth: 2,
                borderColor: "#0F1416",
                label: "Cards"
              }
            ]
          },
          options: pieOptions
        });
        break;
      case "cardCounters":
        this.cardCounters = new Chart(canvas, {
          type: "pie",
          data: {
            labels: ["0", "+1000", "+2000"],
            datasets: [
              {
                data: [0, 0, 0],
                backgroundColor: ["#ACD4FF", "#7575FF", "#434391"],
                borderWidth: 2,
                borderColor: "#0F1416",
                label: "Cards"
              }
            ]
          },
          options: pieOptions
        });
        break;
      case "cardAttributes":
        this.cardAttributes = new Chart(canvas, {
          type: "pie",
          data: {
            labels: ["Ranged", "Slash", "Special", "Strike", "Wisdom"],
            datasets: [
              {
                data: [0, 0, 0, 0, 0],
                backgroundColor: ["#b94144", "#58a6be", "#9e4185", "#cfa82a", "#0da277"],
                borderWidth: 2,
                borderColor: "#0F1416",
                label: "Cards"
              }
            ]
          },
          options: pieOptions
        });
        break;
      case "cardCosts":
        this.cardCosts = new Chart(canvas, {
          type: "bar",
          data: {
            labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [
              {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "#ACD4FF",
                borderWidth: 2,
                borderColor: "#0F1416",
                label: "Cards"
              }
            ]
          },
          options: barOptions
        });
        break;
      case "cardRarities":
        this.cardRarities = new Chart(canvas, {
          type: "pie",
          data: {
            labels: ["C", "UC", "R", "SR", "SEC", "P"],
            datasets: [
              {
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: ["#8494AD", "#B1CEFA", "#9561AD", "#DA98FA", "#FAEFA6", "#FAA498"],
                borderWidth: 2,
                borderColor: "#0F1416",
                label: "Cards"
              }
            ]
          },
          options: pieOptions
        });
        break;
      case "cardPowers":
        this.cardPowers = new Chart(canvas, {
          type: "bar",
          data: {
            labels: ["0", "1k", "2k", "3k", "4k", "5k", "6k", "7k", "8k", "9k", "10k", "11k", "12k", "13k", "14k", "15k"],
            datasets: [
              {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "#F76C6A",
                borderWidth: 2,
                borderColor: "#0F1416",
                label: "Cards"
              }
            ]
          },
          options: barOptions
        });
        break;
    }
  };

  public updateChart = () => {
    this.cardTypes.data.datasets.forEach((dataset: ChartDataset) => {
      dataset.data = [
        this.activeFormat.deck.getNumberOfCardsByType("Character"),
        this.activeFormat.deck.getNumberOfCardsByType("Event"),
        this.activeFormat.deck.getNumberOfCardsByType("Stage")
      ];
    });

    this.cardColors.data.datasets.forEach((dataset: ChartDataset) => {
      dataset.data = [
        this.activeFormat.deck.getNumberOfCardsByColor("Red"),
        this.activeFormat.deck.getNumberOfCardsByColor("Blue"),
        this.activeFormat.deck.getNumberOfCardsByColor("Green"),
        this.activeFormat.deck.getNumberOfCardsByColor("Purple")
      ];
    });

    this.cardCounters.data.datasets.forEach((dataset: ChartDataset) => {
      dataset.data = [
        this.activeFormat.deck.getNumberOfCardsByCounter(0),
        this.activeFormat.deck.getNumberOfCardsByCounter(1000),
        this.activeFormat.deck.getNumberOfCardsByCounter(2000)
      ];
    });

    this.cardAttributes.data.datasets.forEach((dataset: ChartDataset) => {
      dataset.data = [
        this.activeFormat.deck.getNumberOfCardsByAttributes("Ranged"),
        this.activeFormat.deck.getNumberOfCardsByAttributes("Slash"),
        this.activeFormat.deck.getNumberOfCardsByAttributes("Special"),
        this.activeFormat.deck.getNumberOfCardsByAttributes("Strike"),
        this.activeFormat.deck.getNumberOfCardsByAttributes("Wisdom")
      ];
    });

    this.cardCosts.data.datasets.forEach((dataset: ChartDataset) => {
      dataset.data = [];
      for (let i = 0; i < 11; i++) {
        dataset.data.push(this.activeFormat.deck.getNumberOfCardsByCosts(i));
      }
    });

    this.cardRarities.data.datasets.forEach((dataset: ChartDataset) => {
      dataset.data = [
        this.activeFormat.deck.getNumberOfCardsByRarity("C"),
        this.activeFormat.deck.getNumberOfCardsByRarity("UC"),
        this.activeFormat.deck.getNumberOfCardsByRarity("R"),
        this.activeFormat.deck.getNumberOfCardsByRarity("SR"),
        this.activeFormat.deck.getNumberOfCardsByRarity("SEC"),
        this.activeFormat.deck.getNumberOfCardsByRarity("P")
      ];
    });

    this.cardPowers.data.datasets.forEach((dataset: ChartDataset) => {
      dataset.data = [];
      for (let i = 0; i < 16000; i = i + 1000) {
        dataset.data.push(this.activeFormat.deck.getNumberOfCardsByPowers(i));
      }
    });

    this.cardTypes.update();
    this.cardColors.update();
    this.cardCounters.update();
    this.cardAttributes.update();
    this.cardCosts.update();
    this.cardRarities.update();
    this.cardPowers.update();
  };
}
