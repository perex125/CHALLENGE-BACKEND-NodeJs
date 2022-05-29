import Movie from "../models/Movie.js"

const getMovie = async (req, res) => {
    const {idMovie} =  req.params

    const movie = await Movie.findOne({where:{id: idMovie}})


    if(movie === null) {
        const error = new Error("Pelicula no encontrado")
        return res.status(404).json({ messaje: error.message})
    }

    try {
        res.status(200).json(movie)
    } catch (error) {
        console.log(error);
    }
}

const getMovies = async (req, res) => {

    //TODO - agregar filtros


    const movies = await Movie.findAll({attributes: ['id', 'titulo', 'imagen']})

    if(movies.length === 0) {
        const error = new Error("No hay peliculas cargados")
        return res.status(404).json({ messaje: error.message})
    }

    res.json(movies)
}

const addMovie = async (req, res) => {
    const movie = req.body
    
    if(movie.titulo==="" && movie.imagen==="" && movie.calificacion===""){
        const error = new Error("Todos los campos son requeridos")
        return res.status(400).json({ messaje: error.message})
    }

    try {
        const newMovie = await Movie.create(req.body)
        res.status(200).json(newMovie)
    } catch (error) {
        console.log(error);
    }
    

}

const editMovie = async (req, res) => {
    const {idMovie} =  req.params

    const movie = await Movie.update(req.body, {where:{id: idMovie}})

    if(movie[0]===0) {
        const error = new Error("No se pudo actualizar")
        return res.status(403).json({ message: error.message})
    } 
    const movieEdit = await Movie.findAll({where: {id: idMovie}})

    try {
        res.status(200).json(movieEdit)
    } catch (error) {
        console.log(error);
    }
}

const deleteMovie = async (req, res) => {
    const {idMovie} =  req.params

    const movie = await Movie.findOne({where:{id: idMovie}})

    if(movie === null) {
        const error = new Error("Pelicula no encontrado")
        return res.status(404).json({ messaje: error.message})
    }

    try {
        await Movie.destroy({where:{id:idMovie}})
        res.status(200).json({message:"Pelicula eliminada"})
    } catch (error) {
        console.log(error);
    }
}

export {
    getMovie,
    getMovies,
    addMovie,
    editMovie,
    deleteMovie
}