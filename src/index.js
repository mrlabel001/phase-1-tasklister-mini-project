let btn = document.querySelector("#create")
btn.addEventListener("submit", (e)=> {
  e.preventDefault()
  let list = e.target.new.value;
  let p = document.createElement("p")
  let container = document.querySelector("#list")
  p.textContent = list
  container.appendChild(p)
  btn.reset()
})
