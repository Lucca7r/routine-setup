const form = document.querySelector("form")
const lucSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = lucSetup.dayExists(today)

  if (dayExists) {
    alert("🛑Dia ja incluso🛑")
    return
  }

  alert("✅Adicionado com sucesso✅")
  lucSetup.addDay(today)
}

function save() {
  localStorage.setItem("lucSetup@habits", JSON.stringify(lucSetup.data))
}

const data = JSON.parse(localStorage.getItem("lucSetup@habits")) || {}
lucSetup.setData(data)
lucSetup.load()
