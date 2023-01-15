const notepadUl = document.querySelector(".notepad__ul");
const newtaskInput = document.querySelector(".notepad__input");
const newtaskBtn = document.querySelector(".notepad__btn--plus");

newtaskBtn.addEventListener("click", () => {
	const inputValue = newtaskInput.value;
	if (inputValue !== "") {
		const li_item = document.createElement("div");
		li_item.classList.add("notepad__li-item");

		const taskContent = document.createElement("p");
		taskContent.classList.add("notepad__task-content");
		taskContent.textContent = inputValue;

		const checkBtn = document.createElement("i");
		checkBtn.classList.add(
			"notepad__btn",
			"notepad__btn--check",
			"fa-sharp",
			"fa-solid",
			"fa-check"
		);

		const delBtn = document.createElement("i");
		delBtn.classList.add(
			"notepad__btn",
			"notepad__btn--del",
			"fa-sharp",
			"fa-solid",
			"fa-xmark"
		);

		// APPENDING
		li_item.append(taskContent, checkBtn, delBtn);
		notepadUl.append(li_item);
	} else {
		//IF INPUT IS EMPTY
		alert("zrob to");
	}
});

notepadUl.addEventListener("click", e => {
	if (e.target.matches(".notepad__btn--check")) {
		e.target
			.closest(".notepad__li-item")
			.classList.toggle("notepad__li-item--completed");
	} else if (e.target.matches(".notepad__btn--del")) {
		e.target.closest(".notepad__li-item").remove();
	}
});
