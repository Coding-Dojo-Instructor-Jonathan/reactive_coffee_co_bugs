// define what a coffee drink should look like in our database
import {model, Schema} from "mongoose"

const CoffeeDrinkSchema = new Schema(
    {
        "name": {
            "type": String,
            "minlength": [5, "Drink name must be at least 5 characters long!"],
        },
        "description": {
            "type": String,
            "minlength": [10, "Drink description must be at least 10 characters long!"],
            "default": "A really good cup of JOE."
        },
        "price": {
            "type": Number,
            "min": [1, "Price must be at least $1.00!"]
        },
        "coffeeBean": {
            "type": String,
        },
        "inStock": {
            "type": Boolean,
            "default": false
        }
    }
)

const CoffeeDrink = model("CoffeeDrink", CoffeeDrinkSchema)

export default CoffeeDrink