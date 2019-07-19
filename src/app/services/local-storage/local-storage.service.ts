import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public get(key: string): any {
    const item = localStorage.getItem(key);

    try {
      return JSON.parse(item);
    } catch (e) {
      return item;
    }
  }

  public set(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
