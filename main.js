const notepadUl = document.querySelector(".notepad__ul");
const newtaskInput = document.querySelector(".notepad__input");
const newtaskBtn = document.querySelector(".notepad__btn--plus");
const warning = document.querySelector(".warning");

newtaskBtn.addEventListener("click", () => {
	const inputValue = newtaskInput.value;
	const liItems = document.querySelectorAll(".notepad__li-item");

	if (liItems.length >= 14) {
		warning.textContent = "You already have the maximum number of tasks";
	} else if (inputValue.length > 32) {
		warning.textContent =
			"The length of the task name cannot exceed 32 characters";
	} else if (inputValue !== "") {
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

		//reset to default
		newtaskInput.value = "";
		warning.textContent = "";
	} else {
		warning.textContent = "Enter the content of the task";
	}
});

notepadUl.addEventListener("click", e => {
	if (e.target.matches(".notepad__btn--check")) {
		e.target
			.closest(".notepad__li-item")
			.classList.toggle("notepad__li-item--completed");
	} else if (e.target.matches(".notepad__btn--del")) {
		let popupDel = `Are you sure you want to delete task:\n${
			e.target.closest(".notepad__li-item").firstChild.textContent
		}`;
		if (confirm(popupDel) == true) {
			e.target.closest(".notepad__li-item").remove();
		} else {
			return;
		}
	}
});
