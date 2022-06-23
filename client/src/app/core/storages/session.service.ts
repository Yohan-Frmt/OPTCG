import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService implements Storage {
  private readonly _storage: Storage;

  constructor() {
    this._storage = window.sessionStorage;
  }

  get length(): number {
    return this._storage.length;
  }

  clear(): void {
    this._storage.clear();
  }

  getItem(key: string): string | null {
    return this._storage.getItem(key);
  }

  key(index: number): string | null {
    return this._storage.key(index);
  }

  removeItem(key: string): void {
    this._storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this._storage.setItem(key, value);
  }
}
