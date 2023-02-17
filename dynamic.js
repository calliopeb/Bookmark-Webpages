//get the `addButton`
//add event listener -> create a new bookmark

//create Bookmark
class Bookmark {
    constructor(bookmarkURL, bookmarkTitle) {
        this.bookmarkURL = bookmarkURL;
        this.bookmarkTitle = bookmarkTitle;
    }
}
//create and empty array where we can add bookmarks too, using let because we will be adding
let bookmarkArr = []


function addBookmark(){
    //create the area to store the list of bookmarks
    let bookmarkList = document.createElement("ul");
    //place it in the div created in HTML 
    document.getElementById("container").appendChild(bookmarkList); 


    const bookmarkedDisplay = document.createElement("li");
    bookmarkedDisplay.innerText = (`${bookmarkTitle.value} ${bookmarkURL.value}`)
    //create an instance where book are being added to the list

    //create an instance were books are being removed from the list

    bookmarkList.append(bookmarkedDisplay)
  
    return bookmarkList;

}
function render () {
    this.addBookmark();
}

//create test bookmark to test if this is running
// let website2 = new Bookmark(`https://app.slack.com/client/T024FPYBQ/C04KN2FFX3K`, `Class Slack`)
// bookmarkArr.push(website2);
// render(); 


//i) push the name & link to you array
//ii) rerender the bookmark list

//render function 
//i) create a list item for each bookmark that contains things like a link, remove button
//ii) adding and event listening to the remove button that removes an item from the bookmark array AND RERENDER


// let createBookmark = browser.bookmarks.create({
//     title: "",
//     url: "",
//   });