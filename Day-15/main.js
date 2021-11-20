var complete_status = document.querySelector('.complete-status')
var file_input = document.querySelector('.file-input')

file_input.addEventListener('change', (e) => {
    document.querySelector('.file_name').innerHTML =
        e.target.files[0].name
    document.querySelector('.upload').classList.add('upload-remove')
    document.querySelector('.file_name').classList.add('file_name_show')
})

const upload_button = document.querySelector('.upload-button')
const file_drop = document.querySelector('.file-drop')
const syncing = document.querySelector('.syncing')
const completed = document.querySelector('.done')
var uploading = false;
upload_button.addEventListener('click', (e) => {
    if (file_input.files.length == 1 && !uploading) {
        uploading = true
        complete_status.classList.add('active')
        file_drop.classList.add('disable')
        syncing.classList.add('active')
        completed.classList.add('active')
        upload_button.innerHTML = 'Uploading....'
        timeoutid = window.setTimeout(complete_upload, 2100)
    } else if (uploading) {
        uploading = false;
        complete_status.classList.remove('active')
        file_drop.classList.remove('disable')
        syncing.classList.remove('active')
        completed.classList.remove('active')
        upload_button.innerHTML = 'Upload file'
        document.querySelector('.upload').classList.remove('upload-remove')
        document.querySelector('.file_name').classList.remove('file_name_show')
    }
})

function complete_upload() {
    upload_button.innerHTML = 'Done'
}