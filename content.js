var queue = [document.body];
var word = "China";
while(curr = queue.pop()){
    if(!curr.textContent.match(word)){
        continue;
    }
    for (var i = 0; i < curr.childNodes.length; ++i) {
        console.log("Here")
        switch (curr.childNodes[i].nodeType) {
            case Node.TEXT_NODE : // 3
                if (curr.childNodes[i].textContent.match(word)) {
                    alert("Product potentially Made in China");
                    console.log(curr);
                    return;
                    //TODO Insert logic to search for where a product is made
                    // you might want to end your search here.
                }
                break;
            case Node.ELEMENT_NODE : // 1
                queue.push(curr.childNodes[i]);
                break;
        }
    }
}
