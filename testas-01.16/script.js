const rickrollis = (number) => {
    let rngNumber = (Math.floor(Math.random() * 10));
    if(rngNumber === 5){
        return window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }else{
        alert("Try Again!")
    }
    console.log(rngNumber)
}