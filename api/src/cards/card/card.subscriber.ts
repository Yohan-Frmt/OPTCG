import { DataSource, EntitySubscriberInterface, EventSubscriber, LoadEvent } from "typeorm";
import { Card } from "./card.entity";

@EventSubscriber()
export class CardSubscriber implements EntitySubscriberInterface<Card> {

  constructor(private readonly _dataSource: DataSource) {
    _dataSource.subscribers.push(this);
  }

  public listenTo = (): Function | string => Card;

  public async afterLoad(entity: Card, event?: LoadEvent<Card>) {
    const data = await this._dataSource.query(`
        SELECT DISTINCT CARD.*
        FROM (SELECT SERIAL_NUMBER,
                     LAG(SERIAL_NUMBER) OVER (ORDER BY SERIAL_NUMBER) AS PREV, LEAD(SERIAL_NUMBER) OVER (ORDER BY SERIAL_NUMBER) AS NEXT
              FROM CARD) CARD
        WHERE SERIAL_NUMBER = $1`, [entity.serial_number]);
    entity.images = entity.images?.sort((a, b) => a.path >= b.path ? 1 : -1);
    entity.prev = data[0].prev;
    entity.next = data[0].next;
  }
}
