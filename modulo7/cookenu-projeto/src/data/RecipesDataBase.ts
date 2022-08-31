import { Recipes } from "../models/recipes";
import { BaseDatabase } from "./BaseDataBase";
import { CustomError } from "../error/CustomError";

export class RecipesDataBase extends BaseDatabase {
   
    public insertRecipe = async (recipe: Recipes)=>{
        try {
            await RecipesDataBase.connection
            .insert({
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                creationDate: recipe.creationDate
                
            }).into("cookenu_recipes");
        } catch (error:any) {
           throw new CustomError(400, error.sqlMessage);
            
        }
    }
}