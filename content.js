var caller; 
var flag = true;
function something(){
    const elements = document.querySelectorAll('div[class="DraftEditor-editorContainer"]');
    elements.forEach((input)=>{
        const button = document.createElement('button');
        button.textContent = 'Click Me';
        input.parentNode.insertBefore(button, input.nextSibling);
        
        button.addEventListener('click', () => {
            console.log('Button clicked!');

            const tweetText = document.querySelectorAll('div[data-testid="tweetText"]');
            tweetText.forEach((e)=>{
                console.log(e.innerHTML);
            })
        });
        flag = false;
        flag===false?clearInterval(caller):null;
    })
    
}
if(flag){
    caller = setInterval(something,2000);
}
