
class InnerGanres<Object> {
    id: number;
    name: string;
}

class Genres {
    InnerGanres:object
}

class InnerSpokenLang<Object> {
    "iso_3166_1": string;
    "name": string;
}


class ProductionCountries {
    InnerProductionCountries;
}
class SpokenLang {
    InnerSpokenLang:object
}


export class SingleMovie {
    "adult": boolean;
    "backdrop_path": string;
    "belongs_to_collection": any;
    "budget": number;
    "release_date": string;
    "revenue": number;
    "runtime": number;
    "status": string;
    "tagline": string;
    "title": string;
    "video": false;
    "vote_average": number;
    "vote_count": number
    "genres": Genres[];
    "production_countries": ProductionCountries[];
    "spoken_languages": SpokenLang[];
}


