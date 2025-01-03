export interface Image {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string | null;
    description: string | null;
    likes: number;
    user: {
      name: string;
    };
  }