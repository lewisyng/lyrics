const API_KEY = "9bb621d525msha28c1f0ad3457f6p1f2a54jsn1a23a77edc53";

export const getArtist = async (artist) => {
    const data = await fetch(`https://genius.p.rapidapi.com/search?q=${artist}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "genius.p.rapidapi.com",
            "x-rapidapi-key": API_KEY,
        }
    });

    return data;
}