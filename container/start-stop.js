const Docker = require('dockerode');

// Create a Docker client
const docker = new Docker();

let container; // Global variable to hold the container object

function startContainer(image, command) {
  // Create a container
  docker.createContainer({
    Image: image,
    Cmd: command.split(' '),
  }, function (err, createdContainer) {
    if (err) {
      console.error('Error creating container:', err);
      return;
    }

    // Assign the created container to the global variable
    container = createdContainer;

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

function stopContainer() {
  if (container) {
    // Stop the container
    container.stop(function (err) {
      if (err) {
        console.error('Error stopping container:', err);
        return;
      }

      console.log('Container stopped:', container.id);
    });
  } else {
    console.log('No container running.');
  }
}

// Usage example
const image = 'your-docker-image';
const command = 'your-command';

startContainer(image, command);

// Wait for some time, then stop the container
setTimeout(stopContainer, 5000);
