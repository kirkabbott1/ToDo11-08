$(function() {
  updateList();
  $('#form').submit(function(event) {
    event.preventDefault();
    $.post('/add_task', $('#form').serialize(), function(task){
      $('#task-list').append('<li>' + task.description + '</li>');
      console.log('this happened');
    });
  })
  function updateList(callback){
      $.get('/tasks', function(task) {
        task.forEach(function(task){
          $('#task-list').append('<li>' + task.description + '</li>');
        })
      })
  };
  // updateList(function(data){
  //   console.log(data);
  // })
});
