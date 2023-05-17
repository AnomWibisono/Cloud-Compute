const Docker = require('dockerode');

// Membuat instance Dockerode
const docker = new Docker();

// Membuat kontainer baru
docker.createContainer({ Image: 'ubuntu', Cmd: ['echo', 'Hello World'] })
  .then((container) => {
    // Menjalankan kontainer
    return container.start();
  })
  .then((container) => {
    // Mengambil log dari kontainer
    return container.logs({ follow: true, stdout: true, stderr: true });
  })
  .then((stream) => {
    // Mengambil output log kontainer
    container.modem.demuxStream(stream, process.stdout, process.stderr);
    return container.wait();
  })
  .then((data) => {
    // Menampilkan kode exit dari kontainer
    console.log('Exit code:', data.StatusCode);
    // Menghapus kontainer setelah selesai
    return container.remove();
  })
  .catch((err) => {
    // Menangani kesalahan
    console.error(err);
  });