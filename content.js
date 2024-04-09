var caller; 
var flag = true;
function something(){
    const elements = document.querySelectorAll('div[class="DraftEditor-editorContainer"]');
    elements.forEach((input)=>{
        const button = document.createElement('button');
        button.classList.add("tweetcp");
        button.textContent = 'TCP';
        button.setAttribute('style',"background-color: #603FEF;border:none;border-radius: 10px;color: white;font-size: 0.5em");
        input.parentNode.insertBefore(button, input.nextSibling);
        
        button.addEventListener('click', () => {
            console.log('Button clicked!');

            const tweetText = document.querySelectorAll('div[data-testid="tweetText"]');
            const toPasteTweet = document.querySelectorAll('div[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]');
            toPasteTweet.forEach((paste)=>{
                paste.innerHTML = tweetText[0].innerHTML;
            })
        });
        flag = false;
        flag===false?clearInterval(caller):null;
    })
}
if(flag){
    caller = setInterval(something,2000);
}
