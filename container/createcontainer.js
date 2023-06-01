const Docker = require('dockerode');

// Create a Docker client
const docker = new Docker();

function createContainer() {
  // Get user input values
  const image = document.getElementById('image').value;
  const command = document.getElementById('command').value;

  // Create a container
  docker.createContainer({
    Image: image,
    Cmd: command.split(' '),  // Split the command string into an array of arguments
  }, function (err, container) {
    if (err) {
      console.error('Error creating container:', err);
      return;
    }

    // Start the container
    container.start(function (err) {
      if (err) {
        console.error('Error starting container:', err);
        return;
      }

      console.log('Container started:', container.id);
    });
  });
}