
const refs = {
    form: document.querySelector(".form"),
    inputName: document.querySelector("input[data-input-name]"),
    inputMessage: document.querySelector("textarea[data-input-textarea]")
}

const loadUserMessage = () => {
    const sevedMessage = localStorage.getItem("user-message-save")
    if (sevedMessage) {
        refs.inputMessage.value = sevedMessage
    }
}
loadUserMessage();

const handlerSubmit = (event) => {
    console.log(event.target.elements.input)
    event.preventDefault();

    const formData = new FormData(event.target);
    const submitObj = {};
    //в форм дата есть фнутренний метод forEch (его так назвали ето не тот форич) который вернет значение(input.value) и ключь (input.name)
    formData.forEach((value, key) => {
        console.log(`message send! ${key}: ${value}`)
        submitObj[key] = value;      // обект который можно после отправить на бекенд содержит все данные с формы!
    })
    console.log(submitObj)
    localStorage.removeItem("user-message-save");
    event.currentTarget.reset();
}

const handlerInputMessage = (event) => {
    const message = event.target.value;
    localStorage.setItem("user-message-save", message)
}




refs.form.addEventListener("submit", handlerSubmit);
refs.inputMessage.addEventListener("input", handlerInputMessage)