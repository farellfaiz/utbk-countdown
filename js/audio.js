var rainSound = document.getElementById("rain");
var librarySound = document.getElementById("library")

function rain() {
    if (rainSound.paused) {
        rainSound.play();
        const RainToast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        RainToast.fire({
            icon: 'success',
            title: 'Playing rain ambience sound.'
        })
    } else {
        rainSound.pause();
    }
};

function library() {
    if (librarySound.paused) {
        librarySound.play();
        const LibraryToast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        LibraryToast.fire({
            icon: 'success',
            title: 'Playing library ambience sound.'
        })
    } else {
        librarySound.pause();
    }
};