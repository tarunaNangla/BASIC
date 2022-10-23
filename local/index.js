function func()
{
    // console.log("hello")

    let name=document.querySelector("input").value;
    console.log(name)
   

    let p=document.createElement("p");
    p.innerText=name;

    document.querySelector("body").append(p)

}