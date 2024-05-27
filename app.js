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

      this.fileName = file.name
      this.pdfUrl = URL.createObjectURL(file)
    },

    uploadDoc() {
      // only allow uploading if there is a file name
      if (this.fileName !== '') {
        this.documents.push(this.fileName)
        this.fileName = '' // reset the file name after uploading
      }
    },

    // remove the document from the documents array
    deleteDoc(index) {
      this.documents.splice(index, 1)
    },

    handleFileSelect(event) {
      const file = event.target.files[0]

      this.fileName = file.name
      this.pdfUrl = URL.createObjectURL(file)
    }
  }
})

// the app div wrap both the document upload list and the drop zone
app.mount('#app')
