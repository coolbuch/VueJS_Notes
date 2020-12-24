const Note = {
    template: `
    <div class="card m-2 w-30">
        <div class="card-body d-flex flex-row">
            <div class="input-group-text">
                <input v-model="isDisabled" type="checkbox">
            </div>
            <div style="margin-left: 10px">
                <p class="card-text"> {{ this.noteText }} </p>
            </div>
        </div>
        <div class="card-footer">
            <div class="d-flex justify-content-between">
                <button v-if="isDisabled" type="button" class="btn btn-danger m-1 disabled">
                    Удалить
                </button>
                <button v-else @click="deleteNote" type="button" class="btn btn-danger m-1">
                    Удалить
                </button>
            </div>
        </div>
    </div>
    `,
    props: ['note'],
    data() {
        return {
            id: this.note.id,
            noteText: this.note.noteText,
            isDisabled: false,
        }
    },
    methods: {
        deleteNote() {
            this.$emit('delete-note', this.id);
        }
    },
}