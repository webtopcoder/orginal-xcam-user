import { UploadFile } from 'src/interfaces';
import { IPerformer } from './performer';

export interface ISchedule {
  mon: ValueSchedule;
  tue: ValueSchedule;
  wed: ValueSchedule;
  thu: ValueSchedule;
  fri: ValueSchedule;
  sat: ValueSchedule;
  sun: ValueSchedule;
}

export interface ValueSchedule {
  start: string;
  end: string;
  closed: boolean;
}

export const PRODUCT_TYPE = {
  PHYSICAL: 'physical',
  DIGITAL: 'digital'
};

export const PRODUCT_STATUS = {
  // DRAFT: 'draft',
  ACTIVE: 'active',
  INACTIVE: 'inactive'
};

export declare type PRODUCT_STATUS_TYPE = 'active' | 'inactive' | 'draft';
export declare type PRODUCT_TYPE_TYPE = 'digital' | 'physical';

export interface ICreatePerformerProductPayload {
  image?: UploadFile;
  digitalFile?: UploadFile;
  name: string;
  description?: string;
  status?: PRODUCT_STATUS_TYPE;
  type?: PRODUCT_TYPE_TYPE;
  token?: number;
  stock?: number;
  performerId?: string;
}

export interface IUpdatePerformerProductPayload {
  image?: UploadFile;
  digitalFile?: UploadFile;
  name: string;
  description?: string;
  status?: PRODUCT_STATUS_TYPE;
  type?: PRODUCT_TYPE_TYPE;
  token?: number;
  stock?: number;
  performerId?: string;
}

export interface IProduct {
  _id?: string;
  createdAt?: Date;
  image?: string;
  isBought?: boolean;
  digitalFile?: string;
  name?: string;
  description?: string;
  publish?: boolean;
  status?: PRODUCT_STATUS_TYPE;
  type?: PRODUCT_TYPE_TYPE;
  token?: number;
  stock?: number;
  performerId?: string;
}

export interface IVideo {
  _id?: string;
  performerId?: string;
  fileId?: string;
  type?: string;
  title?: string;
  isBought?: boolean;
  description?: any;
  status?: string;
  processing?: boolean;
  thumbnailId?: string;
  token?: number;
  thumbnail?: string;
  video?: IFile;
  trailer?: IFile;
  trailerId?: string;
  performer?: IPerformer;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
  thumbnailFile?: any;
  videoFIle?: any;
  trailerFile?: any;
  isSaleVideo?: boolean;
}

export interface IFile {
  _id?: string;
  duration?: number;
  thumbnails?: string[];
  url: string;
  height?: number;
  width?: number;
}

export interface IPerformerVideoPayload {
  _id?: string;
  performerId?: string;
  fileId?: string;
  type?: string;
  title?: string;
  description?: string;
  status?: string;
  processing?: boolean;
  thumbnailId?: string;
  token?: number;
  thumbnail?: UploadFile;
  video?: UploadFile;
  trailer?: UploadFile;
  trailerId?: string;
  performer?: any;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isSaleVideo?: boolean;
}

export interface IPerformerPhotoPayload {
  title?: string;
  description?: string;
  status?: 'draft' | 'active' | 'inactive';
  token?: number;
  performerId?: string;
  galleryId?: string;
  photo?: UploadFile;
}

export interface IPerformerPhoto {
  createdAt: Date;
  createdBy: string;
  fileId: string;
  gallery: Partial<IPerformerGallery>;
  galleryId: string;
  performer: IPerformer;
  performerId: string;
  photo: IFile;
  description: string;
  processing: boolean;
  status: 'draft' | 'active' | 'inactive';
  title: string;
  token: number;
  updatedAt: Date;
  updatedBy: string;
  _id: string;
}

export interface IPerformerGallery {
  createdAt: Date;
  createdBy: string;
  description: string;
  name: string;
  isBought?: boolean;
  performer: IPerformer;
  performerId: string;
  photos: [];
  status: 'draft' | 'active' | 'inactive';
  token: number;
  updatedAt: Date;
  updatedBy: string;
  coverPhotoId: string;
  coverPhoto: IFile;
  numOfItems: number;
  _id: string;
  isSale: boolean;
}
