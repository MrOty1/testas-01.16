const easterEgg = () => {
    let rngNumber = Math.floor(Math.random() * 10);
    if(rngNumber == Math.floor(Math.random() * 10)){
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank').focus();
        return
    }else{
        alert("Try Again!")
    }
}