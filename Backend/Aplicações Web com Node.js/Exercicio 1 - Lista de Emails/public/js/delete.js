const deleteButtons = document.querySelectorAll('.delete-button')

deleteButtons.forEach(button =>{
    button.addEventListener('click', function () {
        const email = this.getAttribute('data-email')

        fetch('/deletar', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email})
        }).then(response => response.json())
        .then(data => {
            alert(data.message)
            this.closest('li').remove()
        })
        .catch(error => console.error('Erro:', error))
    })
})