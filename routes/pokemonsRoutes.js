// const express = require('express');

// // creates our router
// const router = express.Router()

// // Load our controller and its route logic
// const pokemonController = require('../controllers/pokemonController')

// // I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// // Index, New, Delete, Update, Create, Edit, Show

// // setup an 'index' route for fruits, attach it to router along with the controller logic
// router.get('/', pokemonController.index)

// // Setup a "new" route for creating fruit
// router.get('/new', pokemonController.new)

// // Setup a "clear" route for removing all data from fruits collection
// router.delete('/clear', pokemonController.clear)

// // Setup a "delete" route for removing a specific fruit
// router.delete('/:id', pokemonController.delete)

// // Setup a "update" route for updating a specific fruit
// router.put('/:id', pokemonController.update)

// // Setup a "seed" route for repopulating our database
// router.post('/seed', pokemonController.seed)

// // Setup a "create" route for adding fruit data
// router.post('/', pokemonController.create)

// // Setup a "edit" route for editing a fruit
// router.get('/:id/edit', pokemonController.edit)

// // setup a 'show' route for fruits, attach it to router along with the controller logic
// router.get('/:id', pokemonController.show)

// module.exports = router


const express = require('express')

const router = express.Router()

const pokemonsController = require('../controllers/pokemonsController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for pokemonss, attach it to router along with the controller logic
router.get('/', pokemonsController.index)

// Setup a "new" route for creating pokemons
router.get('/new', pokemonsController.new)

router.delete('/clear', pokemonsController.clear)

// Setup a "delete" route for removing a specific pokemons
router.delete('/:id', pokemonsController.delete)

// Setup a "update" route for updating a specific pokemons
router.put('/:id', pokemonsController.update)

router.post('/seed', pokemonsController.seed)

// Setup a "create" route for adding pokemons data
router.post('/', pokemonsController.create)

// Setup a "edit" route for editing a pokemons
router.get('/:id/edit', pokemonsController.edit)

// Setup an "show" route for pokemonss, attach it to router along with the controller logic
router.get('/:id', pokemonsController.show)


module.exports = router;