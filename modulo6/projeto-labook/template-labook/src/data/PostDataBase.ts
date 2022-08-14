import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase{
    private static TABLE_NAME = "labook_posts";

    async create({id, photo, description, type, authorId}:any): Promise <void>{
        await UserDataBase.connection
        .insert({
            id,
            photo,
            description,
            type,
            author_id: authorId
        })
        .into(UserDataBase.TABLE_NAME);
        
    }
}