import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly _storage: Storage;
  [name: string]: unknown;
  length!: number;

  constructor() {
    this._storage = window.localStorage;
  }

  public clear(): void {
    this._storage.clear();
  }

  public getItem(key: string): string | null {
    return this._storage.getItem(key);
  }

  public key(index: number): string | null {
    return this._storage.key(index);
  }

  public removeItem(key: string): void {
    return this._storage.removeItem(key);
  }

  public setItem(key: string, value: string): void {
    return this._storage.setItem(key, value);
  }
}
