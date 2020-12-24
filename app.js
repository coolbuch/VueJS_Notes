const app = Vue.createApp({
    components: {
        'note': Note
    },
    data() {
        return {
            notes: [],
            id: 0,
            noteText: "",
            isFlex: false,
        }
    },
    methods: {
        addNote() {
            this.notes.push({
                id: this.id,
                noteText: this.noteText,
            });
            this.id++;
            this.noteText = "";
            this.saveNotes();
        },
        saveNotes() {
            localStorage.setItem('notes', JSON.stringify(this.notes));
            localStorage.setItem('id', this.id);
        },
        deleteNotes() {
            localStorage.removeItem('notes');
            localStorage.removeItem('id');
            this.notes.length = 0;
            this.id = 0;
        },
        loadNotes() {
            if (localStorage.getItem('notes')) {
                this.notes = JSON.parse(localStorage.getItem('notes'));
                this.id = localStorage.getItem('id');
            }
        },
        deleteNote(id) {
            this.notes = this.notes.filter(note => note.id != id);
            this.saveNotes();
        },
    },
    mounted() {
        this.loadNotes();
    }
})

app.mount('#app')