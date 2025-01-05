export interface Image {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
    portfolio_url: string | null;
  };
}

export interface ResponseData {
  total: number;
  total_pages: number;
  results: Image[];
}