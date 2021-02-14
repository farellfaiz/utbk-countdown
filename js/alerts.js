// Swal.fire({
//    title: 'Error!',
//    text: 'Do you want to continue',
//    icon: 'error',
//    confirmButtonText: 'Cool'
// })

document.querySelector(".pomodoro").addEventListener('click', function() {
    Swal.fire({
            title: 'Pomodoro Timer',
            width: '50%',
            html: '<iframe src="/pomodoro" title="W3Schools Free Online Web Tutorials" height="500px" style="border-radius:10px;"></iframe>',
            confirmButtonText: 'Open in New Tab',
            confirmButtonColor: '#183059',
            showDenyButton: true,
            denyButtonColor: '#111',
            denyButtonText: 'Minimize',
        })
        .then(function(result) {
            if (result.isConfirmed) {
                window.location = "/pomodoro";
            }
        })
});