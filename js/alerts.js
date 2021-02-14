const CompatibilityToast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 7000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

CompatibilityToast.fire({
    icon: 'warning',
    title: 'This site runs better in desktop/landscape mode.'
})

document.querySelector(".pomodoro").addEventListener('click', function() {
    Swal.fire({
            title: 'Pomodoro Timer',
            width: '50%',
            html: '<iframe src="/pomodoro" title="Pomodoro Timer" height="500px" style="border-radius:10px;"></iframe>' +
                '<br><br><a href="/pomodoro" target="_blank" style="color:black;text-decoration:none;">Open in <b>New Tab</b></a>',
            showCloseButton: true,
            showConfirmButton: false,
        })
        .then(function(result) {
            if (result.isConfirmed) {
                window.location = "/pomodoro";
            }
        })
});

document.querySelector(".info").addEventListener('click', function() {
    Swal.fire({
        title: '<strong>Info</strong>',
        icon: 'info',
        html: '<div style="text-align:left;">' +

            '<p><b>Features</b>:</p>' +
            '<ul style="margin-top:-15px;">' +
            '<li>Pomodoro Timer <a</li>' +
            '<li>Rain Ambience Sound</li>' +
            '<li>Library Ambience Sound</li>' +
            '<li>Learning Source</li></ul>' +

            '<p><b>Credits</b>:</p>' +
            '<ul style="margin-top:-15px;">' +
            '<li>Sweet Alert 2</li>' +
            '<li>Font Awesome</li>' +
            '<li>Rainymood.com</li>' +
            '<li>New Bliss</li>' +
            '<li>Divlo</li></ul>' +

            '</div>',
        showCloseButton: false,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Mantab!',
    })
});

document.querySelector(".learn").addEventListener('click', function() {
    Swal.fire({
        title: '<strong>Learning Source</strong>',
        icon: 'question',
        html: '<div style="text-align:left;">' +

            '<div style="line-height:30px; background-color: #363636; color: white; padding: 6px 10px; border-radius: 3px; font-size:14px; text-align:center;"><a target="_blank" href="mailto:farellfaiz@wargati.ga" style="color: white;"><b>Contact me</b></a> for suggestions or to add yours.</div>' +

            '<p><b>Try Out</b>:</p>' +
            '<ul style="margin-top:-15px;">' +
            '<li>Eduka<a target="_blank" href="https://ptn.edukasystem.com/"><span style="margin-left:7px;color:black;text-decoration:none;;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li>' +
            '<li>Pahamify<a target="_blank" href="https://tryout.pahamify.com/home"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li>' +
            '<li>Olle<a target="_blank" href="https://www.olle.co.id/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li>' +
            '<li>Masukkampus<a target="_blank" href="https://utbk.masukkampus.com/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li>' +
            '<li>SainsIn<a target="_blank" href="https://sainsin.id/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li>' +
            '<li>Cerebrum<a target="_blank" href="https://app.cerebrum.id/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li>' +
            '<li>Schoolpad<a target="_blank" href="https://schoolpad.id/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li></ul>' +

            '<p><b>Youtube</b>:</p>' +
            '<ul style="margin-top:-15px;">' +
            '<li>Zenius<a target="_blank" href="https://www.youtube.com/user/ZeniusEduChannel"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li>' +
            '<li>Team Tanpa Les Indonesia<a target="_blank" href="https://www.youtube.com/channel/UCeGu7w5LDZV6Bf4Olz1wVfg"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li>' +
            '<li>Belajar Bersama Pak Luhut<a target="_blank" href="https://www.youtube.com/channel/UCmDRYzK0sh2OSdfWk0FDyQw"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li>' +
            '<li>Privat Al Faiz<a target="_blank" href="https://www.youtube.com/channel/UCAe69wlClVVHexL0l0gdHKQ"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li>' +
            '<li>Pak Franzz<a target="_blank" href="https://www.youtube.com/channel/UCIzs_mAx7jXvNVjBaPeqEAw"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li>' +
            '<li>aco!<a target="_blank" href="https://www.youtube.com/channel/UCnWIF4KcdRkTUDvxDHlvYNg"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li>' +
            '<li>Miracle Sitompul<a target="_blank" href="https://www.youtube.com/channel/UCSVZngs-UH5bZK8NlPo1mBg"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li></ul>' +

            '<p><b>Others</b>:</p>' +
            '<ul style="margin-top:-15px;">' +
            '<li>acomarcho&apos;s Github<a target="_blank" href="https://acomarcho.github.io/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/>' +
            '<ul><li>Kitab Numerik</li><li>Kuantitatif ala UTBK</li><li>Kuis Kata Baku</li><li>etc</li></li></ul></li>' +
            '<li>Warga Tiga 2021<a target="_blank" href="https://2021.wargati.ga/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li>' +
            '<li>UTBK Countdown&apos;s Repository<a target="_blank" href="https://github.com/farellfaiz/utbk-countdown/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li></li></ul>' +

            '</div>',
        showCloseButton: true,
        showConfirmButton: false,
    })
});