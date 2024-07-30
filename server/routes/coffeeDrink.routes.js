import CoffeeDrinkController from "../controllers/coffeeDrink.controller.js"
import { Router } from "express"

const coffeeDrinkRouter = Router()

Router.route("/coffee")
    .post(CoffeeDrinkController.create)
    .get(CoffeeDrinkController.getAll)

Router.route("/coffee/:id")
    .get(CoffeeDrinkController.getOne)
    .put(CoffeeDrinkController.update)
    .delete(CoffeeDrinkController.delete)

export default coffeeDrinkRouter