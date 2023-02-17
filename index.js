// Re-render the entire list of bookmarks any time a bookmark is added or removed.
// Use map to map the bookmark array to DOM elements.



//selectin DOM elements 
const bookmarkLink = document.querySelector("#bookmarkURL");
const bookmarkTitle = document.querySelector("#bookmarkTitle");
const addBtn = document.querySelector("#addBtn");

document.querySelector("#input").appendChild(addBtn);

// const renderBookmarks = () => {
//     const  = bookmarkArr.map(createBookmarkElement);
//     bookmarks.replaceChildren(...bookmarkElements);
//   };

addBtn.addEventListener("click", () => {
 //get text input
    const link = bookmarkURL.value;
    const name = bookmarkTitle.value;
   
    if (!link || !name) {
        console.log("no input");
        return;
      }
  //push link and name onto the array
      bookmarkArr.push({ link, name });
      render();
    });
   
//create remove button

// todo 5. removeBtn event listener: remove bookmark from array <ul> and rerender the list when clicked
// removeBtn.addEventListener("click", function(){
//     // remove object from array (slice/pop)
//     bookmarkArr.pop()
//     // remove list item from <ul>

//     // rerender list
// })

