const form= document.getElementById('form')

const lib=new Library()


form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const bookname=document.getElementById("name").value
    const bookauthor=document.getElementById("author").value

    if(bookname && bookauthor){
        const addedbook=new   Book(bookname,bookauthor)

        // added book into library
        lib.addbook(addedbook)

        renderlibrary()

        // remove eneter value here
        document.getElementById('name').value=''
        document.getElementById('author').value=''
    }
    

})

function markbookasread(index){
    lib.getbok()[index].markasread()
    renderlibrary()
}

function removebook(index){
   lib.removbook(index)
   renderlibrary()

}

function renderlibrary(){
    const renderlib=document.getElementById('booklib')

    const bookcount =document.getElementById('bookcount')


    bookcount.textContent=lib.bookcount()

    // reset library
    renderlib.innerHTML=""
    
    lib.getbok().forEach((book,index)=>{
        renderlib.innerHTML +=`<li class="p-3 bg-orange-200 flex justify-between">
           <div class="${book.isread() ? 'line-through' :''}"> ${book.gettitle()} by ${book.getauthor()}
            </div>

            <div>
                <button class="px-2 py-2 bg-green-600 text-sm font-semibold" onclick="markbookasread(${index})">Mark as Read</button>

                <button class="px-2 py-2  bg-red-600 text-sm font-semibold" onclick="removebook(${index})">Remove</button>
            </div>
        </li>
`
    })
}