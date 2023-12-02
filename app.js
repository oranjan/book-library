const bookTitle=document.getElementById("book-title")
const bookAuthor=document.getElementById("book-author")
const publicationYear=document.getElementById("publication-year")
const addBookButton=document.getElementById("add-book-button")
const bookList=document.getElementById("book-list")

addBookButton.addEventListener("click",()=>{
const Title= bookTitle.value
const Author=bookAuthor.value
const Year= publicationYear.value
 if(!Title || !Author||  !Year  ){
    alert("Fill the complete form")
    return
 }
 const newBook = document.createElement("li");
 newBook.className=`
 d-flex justify-content-between alert alert-light align-items-center
 `
newBook.innerHTML=`
<strong>${Title} </strong>
<p>by ${Author}, year:${Year}</p>
<button id="remove-book" type="button" onclick=removeBook(event) class="btn btn-danger">Remove</button>
`
bookList.appendChild(newBook)// li put inside ul
bookTitle.value=""
bookAuthor.value=""
publicationYear.value=""

})



function removeBook(event){
const bookToBeRemoved=event.target.parentNode
bookToBeRemoved.remove()


}