export interface NewsDB{
    id:string,
    title:string,
    description:string,
    published_at:string,
    author:string,
}

export class News{
    constructor(
       private id:string,
       private title:string,
       private description:string,
       private publishedAt:string,
       private author:string
    ) {}
    public getId(): string {
        return this.id;
      }
    
      public getTitle(): string {
        return this.title;
      }
    
      public setTitle(title: string) {
        this.title = title;
      }
    
      public getDescription(): string {
        return this.description;
      }
    
      public setDescription(description: string) {
        this.description = description;
      }
    
      public getPublishedAt(): string {
        return this.publishedAt;
      }
    
      public getAuthor(): string {
        return this.author;
      }
    
      public setAuthor(author: string) {
        this.author = author;
      }
      public  toDBModel():NewsDB{
        return {
          id: this.id,
          title: this.title,
          description: this.description,
          published_at: this.publishedAt,
          author:this.author
        }
      }
}




