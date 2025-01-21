const rickrollis = (number) => {
    let rngNumber = (Math.floor(Math.random() * 10));
    if(rngNumber === 5){
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank').focus();
        return
    }else{
        alert("Try Again!")
    }
    console.log(rngNumber)
}