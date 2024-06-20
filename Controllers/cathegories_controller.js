import Category from "../models/cathegories.js";

async function create(req, res){
    try {
    const nuevaCategoria = await Category.create({
        name: req.body.name,
        description: req.body.description
    });
    res.json(nuevaCategoria);
} catch(err){
    res.status(500).json("Error del servidor")
}
};

async function list(req, res){
   try {
    const listaCategorias = await Category.find();
    res.json(listaCategorias);   
} catch(err){
    res.status(500).json("Error del servidor");
}
};

async function find(req, res){
    try{
        const categoriaId = req.params.id;
        const findCategory = await Category.findById(categoriaId);
        res.status(200).json(findCategory);
    } catch(err){
        res.status(500).json("Error del servidor");
    }
};

async function update(req, res){
    try {
        let categoriaEncontrada = await Category.findById(req.params.id);

        categoriaEncontrada.name = req.body.name || categoriaEncontrada.name;
        categoriaEncontrada.description = req.body.description || categoriaEncontrada.description;

        await categoriaEncontrada.save();
        res.json(categoriaEncontrada);
        

    }catch(err){
        res.status(500).json("Error del servidor");
    }
};

async function destroy(req, res){
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.json("Diseño eliminado");
    }catch(err){
        res.status(500).json("Error del servidor")
    }
}

export default {
    create: create,
    list: list,
    find: find,
    update: update,
    destroy: destroy
};