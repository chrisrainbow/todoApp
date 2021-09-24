const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input")


const generateTemplate = newtodo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">${newtodo}<i class="far fa-trash-alt delete"></i></li>`
    list.innerHTML += html;
}





//My Attempt 
// search.addEventListener("submit", e => {
//     e.preventDefault()
// })

search.addEventListener("keyup", () => {
const term = search.value.trim();
filterTodos(term);



     });


const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term.toLowerCase()))
        .forEach((todo) => todo.classList.add("d-none"))
    
     Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term.toLowerCase()))
        .forEach((todo) => todo.classList.remove("d-none"))
};







list.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        console.log(e.target.parentElement.remove())
    };

})


addForm.addEventListener("submit", e => {
    e.preventDefault()
    const newtodo = addForm.add.value.trim();
    let Regexp = /([A-Za-z].*)/;

    //or newtodo.length
    if (Regexp.test(newtodo)) {
        generateTemplate(newtodo);
        addForm.reset();
    } else {
        console.log("error!")
    }


})