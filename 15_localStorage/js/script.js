  const addItems = document.querySelector('.add-items');
  const checkAll = document.querySelector("#checkAll");
  const uncheckAll = document.querySelector("#uncheckAll");
  const clear = document.querySelector("#clear");
  const itemsList = document.querySelector('.plates');
  let items = JSON.parse(localStorage.getItem("items")) || [];

  function addItem(event) {
      event.preventDefault();
      const text = (this.querySelector("[name=item]")).value;
      const item = {
          text: text,
          done: false
      }

      items.push(item);
      populateList(items, itemsList);
      localStorage.setItem("items", JSON.stringify(items))
      this.reset();
  }

  function populateList(plates = [], platesList) {
      platesList.innerHTML = plates.map((plate, i) => {
          return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
          </li>`
      }).join("");

  }

  function checkAllItems() {
      items.forEach(item => item.done = "true");
      populateList(items, itemsList);
      localStorage.setItem("items", JSON.stringify(items));
  }

  function uncheckAllItems() {
      items.forEach(item => item.done = "false");
      populateList(items, itemsList);
      localStorage.setItem("items", JSON.stringify(items));
  }

  function clearList() {
      localStorage.clear();
      items = [];
      populateList([], itemsList);
  }

  function toggleDone(event) {
      if (!event.target.matches("input")) return; // skip this unless it is an input 
      const el = event.target;
      const index = el.dataset.index;
      items[index].done = !items[index].done;
      localStorage.setItem("items", JSON.stringify(items))
      populateList(items, itemsList);
  }



  addItems.addEventListener("submit", addItem);
  checkAll.addEventListener("click", checkAllItems);
  uncheckAll.addEventListener("click", uncheckAllItems);
  clear.addEventListener("click", clearList);
  itemsList.addEventListener("click", toggleDone);

  populateList(items, itemsList);