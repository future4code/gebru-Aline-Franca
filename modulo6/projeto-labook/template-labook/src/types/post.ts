export type post = {
   id: string,
   photo: string,
   description: string,
   type: POST_TYPES,
   createdAt: Date,
   authorId: string
}

enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }