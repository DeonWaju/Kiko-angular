import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: String[] = ["lero insane", 'E19', 'li@man.pl']
  info2: String[] = ["roy sane", 'E04', 'rs@man.pl']
  info3: String[] = ["eroy ane", 'E92', 'ea@man.pl']

  getInfo1(): String[] {
    return this.info1
  }

  getInfo2(): String[] {
    return this.info2
  }

  getInfo3(): String[] {
    return this.info3
  }

  constructor() { }
}
