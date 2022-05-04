export const saveFavorites = (dataNew) => {
    const dataFavorite = JSON.parse(localStorage.getItem('favorites'))

    const data = dataFavorite.find((dt) => (dt.idCarrera === dataNew.idCarrera))
    if (data === undefined) {
        alert(' agregado a favoritos')
        if (dataFavorite == null) {
            localStorage.setItem('favorites', JSON.stringify([dataNew]))
        } else {
            dataFavorite.push(dataNew)
            localStorage.setItem('favorites', JSON.stringify(dataFavorite))
        }
    } else {
        alert('esta carrera ya esta en favoritos')
    }
}

export const getFavorites = () => {
    const dataFavorite = JSON.parse(localStorage.getItem('favorites'))
    return dataFavorite
}

export const deleteAllFavorites = (id) => {
    // alert('carrera borrada')
    // const data = dataFavorite.findIndex((dt)=>(dt.idCarrera === id))
    const dataFavorite = JSON.parse(localStorage.getItem('favorites'))
    const dataDelete = dataFavorite.filter((item) => item.idCarrera !== id)
    localStorage.setItem('favorites', JSON.stringify(dataDelete))
}