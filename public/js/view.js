// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("view.js can be seen.");

$(function () {
    $(".change-devoured").on("click", function (event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function () {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newDevoured = {
        text: $("#bn").val().trim(),
        devoured: $("[name=devoured]:checked").val()
      };
  
      if ((newDevoured.text === "") || (newDevoured.text.length < 3)) {
        alert("Please enter a burger name")
      }
      else {
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newDevoured
        }).then(
          function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      }
  
    });
  });
  