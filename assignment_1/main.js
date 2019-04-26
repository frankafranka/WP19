// declaring variable i as nothing for loops in further code
var i;


//  locating filename
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf("/")+1);

function changeTitle() {
    // 4.1 change title per webpage


    if (filename == "index.html") {
        // 4.1 change title of the webpage
        document.title = "Webprogramming (LIX019P05) - Index";
    }

    if (filename == "second.html") {
        // 4.1 change title of webpage
        document.title = "Webprogramming (LIX019P05) - Second";
    }
}

// 4.2.1 add new <article> to main  column
function newArticle() {
    var article1 = document.createElement("ARTICLE");
    article1.setAttribute("id", "myArticle");
    document.getElementsByClassName("col-md-12")[0].appendChild(article1);

    // 4.2.2 add heading to new article
    var heading = document.createElement("H1");
    var txt1 = document.createTextNode("This is my second article");
    heading.appendChild(txt1);
    document.getElementById("myArticle").appendChild(heading);

    // 4.2.3 add paragraph to new article
    var para = document.createElement("P");
    para.setAttribute("id", "secondPara");
    var txt2 = document.createTextNode("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere");
    para.appendChild(txt2);
    document.getElementById("myArticle").appendChild(para);
}

// 4.3 change href attribute to google.com
function changeHref() {
    var right_href = document.getElementById("links").firstElementChild.lastElementChild.previousElementSibling.firstChild;
    right_href.setAttribute("href", "https://google.com");
}

// 4.4 add attribute to  open in new window
function addNewWindow() {
    var right_href = document.getElementById("links").firstElementChild.lastElementChild.previousElementSibling.firstChild;
    right_href.setAttribute("target", "_blank");
}

// 4.5 change color to red for all nav-items
function changeColor() {
    var navItems = document.getElementsByClassName("nav-item");
    for (i = 0; i < navItems.length; i++) {
        navItems[i].style.color="red";}
}

// 4.6 add array from wp19-check.php to second paragraph of index.html
function addArray() {
    // create object wpList
    var wpList = {
        week1: "Assignment 1 ",
        week2: "No lecture",
        week3: "Assignment 2",
        week4: "-",
        week5: "Assignment 3",
        week6: "-",
        week7: "Guest Lecture"
    };

    // printing the list to the html: first  creating a list of all entries,  then printing it one by one with for-loop
    var entryList = Object.entries(wpList);
    var wp19List = [];
    for (i = 0; i < entryList.length; i++) {
        wp19List.push(entryList[i]);
    }

    var secpar = document.getElementById("secondPara");
    var joinedWp19List = wp19List.join("  ***  ");
    var textBlockList = document.createTextNode(joinedWp19List);
    secpar.appendChild(textBlockList);

}

// 4.7 adding a sidebar
function addSidebar() {
    //4.7.1 changing class of main column
    var mainColumn = document.getElementsByClassName("col-md-12")[0];
    mainColumn.setAttribute("class", "col-md-8");

    // 4.7.2 adding a new div as second element of body
    var body = document.getElementsByTagName("body")[0];
    var div = document.createElement("div");
    div.setAttribute("class", "col-md-4");
    body.insertBefore(div, body.childNodes[2]);

    // 4.7.3 adding a heading to the new column
    var sidebarHeading = document.createElement("H1");
    var sidebarText = document.createTextNode("Sidebar");
    sidebarHeading.appendChild(sidebarText);
    div.appendChild(sidebarHeading)
}

// this is main function to call all the function with one eventlistener
function main(){
    if (filename == "index.html"){
        newArticle()
        addArray()
    }
    if (filename == "second.html"){
        addSidebar()
    }

    // functions that apply to both pages:
    changeTitle()
    changeHref()
    addNewWindow()
    changeColor()
}

// this makes sure that all the functions will be executed when the page is loaded
window.addEventListener('load', main()); {  console.log('Document Object Model has been loaded.')}