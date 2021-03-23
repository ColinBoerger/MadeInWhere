function checkText(text){
    //TODO update this to have a more complex method
    var madeInChinaWords = ["China", "made in china", "chinese","chrome"];
    var madeInChinaCompanies = ["alibaba"];
    for(let i = 0; i < madeInChinaWords.length; i++){
        let word = madeInChinaWords[i];
        if(text.match(word)){
            return true;
        }
    }
}

function test_main(){
    var queue = [document.body];
    var word = "China";
    while(curr = queue.pop()){
        if(checkText(curr.textContent)){
            //alert("Product potentially made in china");
            console.log(curr.textContent);
            return {results:true, method:"test_main" };
        }
        for (var i = 0; i < curr.childNodes.length; ++i) {
            switch (curr.childNodes[i].nodeType) {
                case Node.TEXT_NODE : // 3
                    if (checkText(curr.childNodes[i].textContent)) {
                        //alert("Product potentially Made in China");
                        console.log(curr.childNodes[i].textContent);
                        console.log(curr);
                        return {results:true, method:"test_main" };
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
    return {results:false, method:"test_main" };
}

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
            let tosend = test_main();
            sendResponse(tosend); //same as innerText
    }
);