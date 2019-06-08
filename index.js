function shoppingList() {
  const mainList = $(".shopping-list");
  const shoppingForm = "#js-shopping-list-form";
  $(shoppingForm).submit(function() {
    event.preventDefault();
    let submitValue = $("input").val();
    const newItem = `<li>
    <span class="shopping-item">${submitValue}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
    mainList.append(newItem);
    $("input").val("");
  });
}

function addDelete() {
  const itemCheck = ".shopping-item-toggle";
  const itemDelete = ".shopping-item-delete";
  $(document).on("click", itemCheck, function(event) {
    let li = $("li");
    $(event.target)
      .closest("li")
      .find(".shopping-item")
      .toggleClass("shopping-item__checked");
  });

  $(document).on("click", itemDelete, function() {
    let li = $("li");
    $(event.target)
      .closest("li")
      .remove();
  });
}

shoppingList();
addDelete();
