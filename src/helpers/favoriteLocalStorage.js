import Swal from "sweetalert2"

export const saveFavorites = (dataNew) => {
    const dataFavorite = JSON.parse(localStorage.getItem('favorites'))

    const data = dataFavorite.find((dt) => (dt.idCarrera === dataNew.idCarrera))
    if (data === undefined) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregada con Exito',
            showConfirmButton: false,
            timer: 1500
          })        
        if (dataFavorite == null) {
            localStorage.setItem('favorites', JSON.stringify([dataNew]))
        } else {
            dataFavorite.push(dataNew)
            localStorage.setItem('favorites', JSON.stringify(dataFavorite))
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ya fue Agregada',
        })
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