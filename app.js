const app = Vue.createApp({
  //  returns the initial state
  data() {
    return { documents: [], fileName: '', pdfUrl: null }
  },

  methods: {
    handleDrop(event) {
      // prevent the browser from opening the file
      event.preventDefault()

      const file = event.dataTransfer.files[0]

      // debugging
      console.log('File dropped:', file.name)

      this.fileName = file.name
      this.pdfUrl = URL.createObjectURL(file)
    },

    uploadDoc() {
      // debugging
      console.log('Uploading doc:', this.fileName)

      // only allow uploading if there is a file name
      if (this.fileName !== '') {
        this.documents.push(this.fileName)
        this.fileName = ''; // reset the file name after uploading
      }
    }
  }
})

// the app div wrap both the document upload list and the drop zone
app.mount('#app')
