const checker = phrase => {
    if(!phrase) throw "Error: No phrase was provided.";
    if (!phrase.replace(/\s/g, '').length) throw "Error: Phrase only contains spaces";
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let reverseString = "";
    let forwardString = "";

    for(let i = phrase.length; i >= 0; i-- ){
        let letter = phrase.charAt(i).toLowerCase();
        if(alphabet.includes(letter)) {
            reverseString = reverseString + letter;
        }    
    }

    for(let i = 0; i <= phrase.length; i++ ){
        let letter = phrase.charAt(i).toLowerCase();
        if(alphabet.includes(letter)) {
            forwardString = forwardString + letter;
        }    
    }

    return reverseString === forwardString;
}

const container = document.getElementById("error_container");
container.style.display = "none";        //hides the element by default

document.addEventListener("submit", event => {
    event.preventDefault();         //stops the page from refreshing
    const phrase = document.getElementsByName("phrase")[0].value;     //its a list so gets 0 list value
    try {
        const boolean = checker(phrase);
        const x = document.createElement("li");
    
        if(boolean){
            x.className = "is-palindrome"
        } else {
            x.className = "not-palindrome"
        }   
        const t = document.createTextNode(phrase);
        x.appendChild(t);
        document.getElementById("attempts").appendChild(x);
        container.innerHTML = ""              //sets no text
        container.style.display = "none"      //hides the element entirely     
    } catch (error) {
        container.style.display = "inline"     //shows the element with error
        container.innerHTML = error
    }
})