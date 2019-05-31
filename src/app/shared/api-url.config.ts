export const APIURL: Object = {
    'root': 'https://api.themoviedb.org',
    'api_key': '?api_key=c0d3a72ba266c69461f962633c4f8be3',
    'URLS': {
        'popular-movies': '/3/movie/popular',
        'latest-movies': '/3/movie/latest',
        'upcoming-movies': '/3/movie/upcoming',
        'now-playing-movies': '/3/movie/now_playing',
        'single-movie': '/3/movie',
        'search-movie': '/3/search/movie',
        'login-user': '',
        'user-account': '/3/account',
        'favorite-movies': '/3/account/account_id/favorite/movies',
        'add-favorite-movies': '/3/account/account_id/favorite'
    }
}

// https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=c0d3a72ba266c69461f962633c4f8be3&session_id=4179bafbbdcdc6dca8c4bf02f199c74848fc045d




// first
// {
//     "success": true,
//     "expires_at": "2019-05-21 15:11:08 UTC",
//     "request_token": "c1341de2796f1e4a26a73f5b4e0068d13cfdcb96"
//   }

// second
// authentication-callback: https://api.themoviedb.org/3/authentication/session/new?api_key=c0d3a72ba266c69461f962633c4f8be3&request_token=c1341de2796f1e4a26a73f5b4e0068d13cfdcb96

// third
// 4179bafbbdcdc6dca8c4bf02f199c74848fc045d