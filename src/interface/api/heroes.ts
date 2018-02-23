import { IHeroModel } from '../models/heroes';

export interface IHeroSearchReq {
  keyword: string;
}

export interface IHeroSearchRes {
  heroes: any[];
}

export interface IHeroEditReq {
  id: number;
  name: string;
}

export interface IHeroShortcutAddReq {
  id: number;
  shortcuts: string[];
}

// tslint:disable-next-line:no-empty-interface
export interface IHeroShortcutAddRes {

}

export type IHeroEditRes = IHeroModel;
