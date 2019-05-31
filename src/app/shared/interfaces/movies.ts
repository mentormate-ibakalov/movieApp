
export class Movie {
    "vote_count": number;
    "id": number;
    "video": boolean;
    "vote_average": number;
    "title": string;
    "popularity": number;
    "poster_path": string;
    "original_language": string;
    "original_title": string;
    "genre_ids": number[];
    "backdrop_path": string;
    "adult": boolean;
    "overview": string;
    "release_date": string
}

export class Movies {
    "page": number;
    "title"?: string;
    "total_results": number;
    "total_pages": number;
    "results": Movie[];
}