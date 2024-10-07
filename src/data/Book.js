class Book{
    constructor(name,author){
        this.name=name
        this.author=author
        this.read=false
    }

    gettitle(){
            return this.name
    }
    getauthor(){
            return this.author
    }

    isread(){
        return this.read
    }
    markasread(){
     this.read=true
    }
  
}