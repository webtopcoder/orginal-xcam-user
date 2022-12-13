import { IPerformer, IPerformerGallery } from 'src/interfaces';

export interface IPhoto {
  _id?: string;
  performerId?: string;
  galleryId?: string;
  fileId?: string;
  photo?: IPhotoMetaData;
  type?: string;
  title?: string;
  description?: string;
  status?: 'draft'| 'active'| 'inactive';
  processing?: boolean;
  token?: number;
  performer?: IPerformer;
  gallery?: IPerformerGallery;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IPhotoMetaData {
  thumbnails: string[];
  url: string;
  width: number;
  height: number;
  mimeType: string;
}
