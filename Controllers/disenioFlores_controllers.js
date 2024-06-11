import DisenioFlores from "../models/disenioFlores.js";

async function create(req, res){
    try {
    const nuevoDisenio = await DisenioFlores.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        genre: req.body.genre,
        size: req.body.size,
        stock: req.body.stock,
        color: req.body.color,
        review: req.body.review

    });
    res.json(nuevoDisenio);
} catch(err){
    res.status(404).json("Error del servidor")
}
};

async function list(req, res){
   try {
    const listaDisenios = await DisenioFlores.find();
    res.json(listaDisenios);   
} catch(err){
    res.status(404).json("Error del servidor");
}
};

async function find(req, res){
    try{
        const disenioId = req.params.id;
        const findDisenio = await DisenioFlores.findById(disenioId);
        res.status(200).json(findDisenio);
    } catch(err){
        res.status(404).json("Error del servidor");
    }
};

async function update(req, res){
    try {
        let disenioEncontrado = await DisenioFlores.findById(req.params.id);

        disenioEncontrado.name = req.body.name || disenioEncontrado.name;
        disenioEncontrado.price = req.body.price || disenioEncontrado.price;
        disenioEncontrado.description = req.body.description || disenioEncontrado.description;
        disenioEncontrado.genre = req.body.genre || disenioEncontrado.genre;
        disenioEncontrado.size = req.body.size || disenioEncontrado.size;
        disenioEncontrado.stock = req.body.stock || disenioEncontrado.stock;
        disenioEncontrado.color = req.body.color || disenioEncontrado.color;
        disenioEncontrado.review = req.body.review || disenioEncontrado.review;

        await disenioEncontrado.save();
        res.json(disenioEncontrado);
        

    }catch(err){
        res.status(404).json("Error del servidor");
    }
};
async function destroy(req, res){
    try {
        await DisenioFlores.findByIdAndDelete(req.params.id);
        res.json("Diseño eliminado");
    }catch(err){
        res.status(404).json("Error del servidor")
    }
}

export default {
    create: create,
    list: list,
    find: find,
    update: update,
    destroy: destroy
};