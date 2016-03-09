console.log('main.js loaded!');



var $form,// id for the form: #new-todo
    $todoTask,// id for the task input: #todo-task
    $todoBootsyLevel,// id for bootsy level selector: #todo-bootsy-level
    $personalTodo,// id for my life column: #personal-todo
    $bootsyTodo;// id for bootsy column: #bootsy-todo

$(function() {
  $form            = $('#new-todo');
  $todoTask        = $('#todo-task');
  $todoBootsyLevel = $('#todo-bootsy-level');
  $personalTodo    = $('#personal-todo');
  $bootsyTodo      = $('#bootsy-todo');

  // part 1
  $form.on('submit', function(evt) {
    evt.preventDefault();

    var task        = $todoTask.val();
    var bootsyLevel = $todoBootsyLevel.val();

    // console.log({ task: task, bootsyLevel: bootsyLevel });

    // part 2
    var newTodo = { task: task, bootsyLevel: bootsyLevel };

    $.ajax({
      method: "POST",
      url:    "/api/todos",
      data:   newTodo
    }).then(
      function(todo) {
      console.log("Success: ", todo);

      // Clear the form
      $todoTask.val("");
      $todoBootsyLevel.val("");

      return todo;
    },
      function(err) {
        console.log("Failed: ", err);
      }// Welcome to Part 3
    ).then(
      function(todo) {
        // Compile renderer from template:
        var renderTodo = _.template(`
          <li id="todo-<%= _id %>" class="todo-item bootsy<%= bootsyLevel %>">
            <%= task %>
            <input type="checkbox" name="todo[completed]" <%= completed ? "checked" : "" %> />
            <span class="remove-item">X</span>
          </li>
          `);

        // Render the todo:
        var todoHTML = renderTodo(todo);

        // check the HTML
        console.log(todoHTML);

        // Append it to the page
        $bootsyTodo.append(todoHTML);
      }
    )
  })
})







