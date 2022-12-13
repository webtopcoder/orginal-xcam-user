import { IPerformer } from 'src/interfaces';

export interface IFavourite {
  _id: string;
  favoriteId: string;
  ownerId: string;
  performer: IPerformer;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
