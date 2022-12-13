export interface IBanner {
  _id: string;
  title: string;
  description?: string;
  status?: string;
  href: string;
  position?: string;
  photo?: { url: string; thumbnails: string[] };
  type: string;
  contentHTML: string;
}

export interface IBannerSearch {
  position?: string;
  status?: string;
}
