const fs = require('fs')

fs.readdir('./material-icons', (err, files) => {
  files.forEach(file => {

    let oldFileName = file
    oldFileName = oldFileName.replace(/_/g, '-')
    oldFileName = oldFileName.replace('svg', 'vue')

    fs.readFile(`./material-icons/${file}`, 'utf8', (err, res) => {
      fs.writeFile(`./vue-icons/icon-${oldFileName}`, `
        <template lang="html">
          ${res}
        </template>

        <script>
          export default {
            name: 'icon-${oldFileName.replace('.vue', '')}'
          }
        </script>
      `)
    })
  })
})
