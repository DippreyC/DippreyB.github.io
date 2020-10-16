let myLibrary = [];



function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function(){
        return title+" "+author +" " +pages;
    }
}

const poop = new Book("Poop", "caine",200);
myLibrary.push(poop);
myLibrary.push(poop);
myLibrary.push(poop);
myLibrary.push(poop);
myLibrary.push(poop);

console.log(myLibrary);

let populateLibrary = function() {
    myLibrary.forEach( (book) => {

        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card")
        
        bookCard.innerHTML = `<img src="http://placeimg.com/640/360/any">
                            <div class="book-info">
                              <div>Title: ${book.title}</div>
                              <div>Author: ${book.author}</div>
                              <div>Pages: ${book.pages}</div>
                            </div>`

        const parent = document.querySelector("#library");
        parent.appendChild(bookCard);

    });
}

