const getPhotos = async ( query ) => {
    const clientId = '5Bw2ylhtMCNatonFTj7G9rqKVYLqbbSsBh8YmfsEbvA';
    const urlRandom = `https://api.unsplash.com/photos/random/?client_id=${ clientId }&`;
    const urlSearch = `https://api.unsplash.com/search/photos/?client_id=${ clientId }&`;
    let url = '';
    if ( query.trim() === '' ) {
        url = `${ urlRandom }count=30`;
    } else {
        url = `${ urlSearch }&per_page=30&query=${ query }`;
    }
    const resp = await fetch( url );
    const data = await resp.json();
    let dataQuery = '';
    if ( query.trim() === '' ) {
        dataQuery = data;
    } else {
        dataQuery = data.results;
    }
    const photos = dataQuery.map( (photo) => {
        const time = new Date().toISOString();
        return (
            {
                id: photo.id,
                width: photo.width,
                height: photo.height,
                likes: photo.likes,
                date: time,
                description: photo.alt_description,
                urlFull: photo.urls.full,
                urlThumb: photo.urls.thumb,
            }
        )
    } );
    return photos;
};

export default getPhotos;