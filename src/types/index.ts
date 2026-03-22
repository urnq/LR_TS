
export interface Source {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}

export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface NewsResponse {
    status: string;
    totalResults?: number;
    articles?: Article[];
    sources?: Source[];
}

export interface LoaderOptions {
    apiKey?: string;
    [key: string]: string | undefined;
}

export interface RequestParams {
    endpoint: string;
    options?: Record<string, string | number>;
}

export type SourcesCallback = (data: { sources?: Source[] }) => void;
export type NewsCallback = (data: { articles?: Article[] }) => void;
export type GenericCallback<T = NewsResponse> = (data: T) => void;