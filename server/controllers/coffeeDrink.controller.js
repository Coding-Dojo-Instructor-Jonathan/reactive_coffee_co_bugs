const CoffeeDrinkController = {
    "create": async (req, res) => {
        try {
            const newDrink = await CoffeeDrink.create(req.body)

            res.json(newDrink)
        } catch(error) {
            console.log(error)
            res.status(400).json(error)
        }
    },
    "getAll": async (req, res) => {
        try {
            const allDrinks = await CoffeeDrink.find()

            res.json(allDrinks)
        } catch(error) {
            console.log(error);
            res.status(400).json(error)
        }
    },
    "getOne": async (req, res) => {
        try {
            const drink = await CoffeeDrink.findById(req.params.id)

            res.json(drink)
        } catch(error) {
            console.log(error);
            res.status(400).json(error)
        }
    },
    "updateOne": async (req, res) => {
        try {
            const options = {
                "new": true,
                "runValidators": true
            }

            const updatedDrink = await CoffeeDrink.findByIdAndUpdate(req.params.id, req.body, options)

            res.json(updatedDrink)
        } catch(error) {
            console.log(error);
            res.status(400).json(error)
        }
    },
    "delete": async (req, res) => {
        try {
            const deletedDrink = await CoffeeDrink.findByIdAndDelete()

            res.json(deletedDrink)
        } catch(error) {
            console.log(error);
            res.status(400).json(error)
        }
    }
}

export default CoffeeDrinkController