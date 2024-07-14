export const formatId = (episode) => {
    const id = episode.match(/\/episode\/(\d+)$/)[1];

    return id;
}