class Library{
    constructor(){
        this.books=[]
    }
    addbook(book){
        // this.books.push(book)
        this.books.push(book)
        
       }
       getbok(){
        return this.books
       }

       bookcount(){
        return this.books.length
       }

       removbook(index){
        if(index>=0 && index<this.books.length){
            this.books.splice(index,1)

        }

       }
}