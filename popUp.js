document.addEventListener('DOMContentLoaded', function(){
    var checkPage = document.getElementById('searchThisPage');
    checkPage.addEventListener('click', function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tab){
        	chrome.tabs.executeScript(tab[0].id, {file: "content.js"}, function(){
        		chrome.tabs.sendMessage(tab[0].id, {type: "test_main"}, function(response) {
        	        console.log(response);
        	        document.getElementById('Results').innerHTML = response.results;		 
            	});		        		
    		});
        });
    }, false);
}, false);