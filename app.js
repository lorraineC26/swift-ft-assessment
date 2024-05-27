const app = Vue.createApp({
  data() {
    return { documents: [], fileName: '', pdfUrl: null }
  },
  methods: {
    handleDragOver(event) {
      event.preventDefault()
      console.log('Drag over event:', event) // Check if dragover event is captured
    },

    handleDrop(event) {
      event.preventDefault()
      const file = event.dataTransfer.files[0]
      console.log('File dropped:', file.name) // debugging
      this.fileName = file.name
      this.pdfUrl = URL.createObjectURL(file)
    },

    uploadDoc() {
      this.documents.push(this.fileName)
      this.fileName = ''
    }


  }
})

app.mount('#user-docs')
