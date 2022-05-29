import Character from "../models/Character.js"

const getCharacter = async (req, res) => {
    const {idCharacter} =  req.params

    const character = await Character.findOne({where:{id: idCharacter}})


    if(character === null) {
        const error = new Error("Personaje no encontrado")
        return res.status(404).json({ messaje: error.message})
    }

    try {
        res.status(200).json(character)
    } catch (error) {
        console.log(error);
    }
}

const getCharacters = async (req, res) => {
    //TODO - agregar filtros


    const characters = await Character.findAll({attributes: ['id', 'nombre', 'imagen']})

    if(characters.length === 0) {
        const error = new Error("No hay personajes cargados")
        return res.status(404).json({ messaje: error.message})
    }

    res.json(characters)
}

const addCharacter = async (req, res) => {
    const character = req.body
    
    if(character.nombre==="" && character.imagen===""){
        const error = new Error("Todos los campos son requeridos")
        return res.status(400).json({ messaje: error.message})
    }

    try {
        const newCharacter = await Character.create(req.body)
        res.status(200).json(newCharacter)
    } catch (error) {
        console.log(error);
    }
    
}

const editCharacter = async (req, res) => {
    const {idCharacter} =  req.params

    const character = await Character.update(req.body, {where:{id: idCharacter}})

    if(character[0]===0) {
        const error = new Error("No se pudo actualizar")
        return res.status(403).json({ message: error.message})
    } 
    const characterEdit = await Character.findAll({where: {id: idCharacter}})

    try {
        res.status(200).json(characterEdit)
    } catch (error) {
        console.log(error);
    }
}

const deleteCharacter = async (req, res) => {
    const {idCharacter} =  req.params

    const character = await Character.findOne({where:{id: idCharacter}})

    if(character === null) {
        const error = new Error("Personaje no encontrado")
        return res.status(404).json({ messaje: error.message})
    }

    try {
        await Character.destroy({where:{id:idCharacter}})
        res.status(200).json({message:"Personaje eliminada"})
    } catch (error) {
        console.log(error);
    }
}

export {
    getCharacter,
    getCharacters,
    addCharacter,
    editCharacter,
    deleteCharacter
}