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
    title: 'This site is designed for desktop (PC/Laptop).'
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
        html: '<div style="line-height:30px; background-color: #363636; color: white; padding: 6px 10px; border-radius: 3px; font-size:14px; text-align:center;"><a target="_blank" href="mailto:farellfaiz@wargati.ga" style="color: white;"><b>Contact me</b></a> for suggestions or to <a target="_blank" href="https://github.com/farellfaiz/utbk-countdown/" style="color:white;">contribute</a>.</div>' +
            '<div style="text-align:left;">' +

            '<p><b>Features</b>:</p>' +
            '<ul style="margin-top:-15px;">' +
            '<li>Pomodoro Timer <a</li>' +
            '<li>Rain Ambience Sound</li>' +
            '<li>Library Ambience Sound</li>' +
            '<li>Learning Source</li>' +
            '<ul><li>Try Out</li><li>Youtube</li><li>Website & others</li></ul></li></ul>' +

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

            '<p><b>Tools & Guides</b>:</p>' +
            '<ul style="margin-top:-15px;">' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Learning Roadmap/Walktrough<div><a target="_blank" href="http://bit.ly/Panduan-UTBK"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Learning Tracker (Saintek)<div><a target="_blank" href="https://docs.google.com/spreadsheets/d/18ndA-BwX6cmSHLkm3PZnJh4Vbx9YamyydeyRcxu_55w/copy"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Learning Tracker (Soshum)<div><a target="_blank" href="https://docs.google.com/spreadsheets/d/17f6PvEWU4wwQ6knlRtNnyBJ_Cx0eM6G5wmJS2wbGl8M/copy"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '</ul>' +

            '<p><b>Try Out</b>:</p>' +
            '<ul style="margin-top:-15px;margin-bottom:2px;width:90%">' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Eduka <div><p style="margin:0;border: 1px #363636 solid; padding:2px 8px; background-color:#363636; pointer: default; margin-left:3px; color:#fff; display:inline-block; font-size:8px; border-radius: 2px;font-style:montserrat;font-weight:600;">Free*</p> <a target="_blank" href="https://ptn.edukasystem.com/"><span style="margin-left:7px;color:black;text-decoration:none;;color:black;text-decoration:none; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Pahamify <div><p style="margin:0;border: 1px #363636 solid; padding:2px 8px; background-color:#363636; pointer: default; margin-left:3px; color:#fff; display:inline-block; font-size:8px; border-radius: 2px;font-style:montserrat;font-weight:600;">Free*</p> <a target="_blank" href="https://tryout.pahamify.com/home"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Olle <div><p style="margin:0;border: 1px #363636 solid; padding:2px 8px; background-color:#363636; pointer: default; margin-left:3px; color:#fff; display:inline-block; font-size:8px; border-radius: 2px;font-style:montserrat;font-weight:600;">Free*</p> <a target="_blank" href="https://www.olle.co.id/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">SiapPTN <div><p style="margin:0;border: 1px #363636 solid; padding:2px 8px; background-color:#363636; pointer: default; margin-left:3px; color:#fff; display:inline-block; font-size:8px; border-radius: 2px;font-style:montserrat;font-weight:600;">Free*</p> <a target="_blank" href="https://siapptn.com/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Akademis.id <div><p style="margin:0;border: 1px #363636 solid; padding:2px 8px; background-color:#363636; pointer: default; margin-left:3px; color:#fff; display:inline-block; font-size:8px; border-radius: 2px;font-style:montserrat;font-weight:600;">Free*</p> <a target="_blank" href="https://akademis.id/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Cerebrum <div><p style="margin:0;border: 1px #363636 solid; padding:2px 8px; background-color:#363636; pointer: default; margin-left:3px; color:#fff; display:inline-block; font-size:8px; border-radius: 2px;font-style:montserrat;font-weight:600;">Free*</p> <a target="_blank" href="https://app.cerebrum.id/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">CoLearn <div><span style="margin:0;border: 1px #363636 solid; padding:2px 8px; background-color:#fff; pointer: default; margin-left:3px; color:#363636; display:inline-block; font-size:8px; border-radius: 2px;font-style:montserrat;font-weight:600;">Free</span> <a target="_blank" href="https://tryout.colearn.id/#/dashboard"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Schoolpad <div><span style="margin:0;border: 1px #363636 solid; padding:2px 8px; background-color:#fff; pointer: default; margin-left:3px; color:#363636; display:inline-block; font-size:8px; border-radius: 2px;font-style:montserrat;font-weight:600;">Free</span> <a target="_blank" href="https://schoolpad.id/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Utron.id <div><p style="margin:0;border: 1px #363636 solid; padding:2px 8px; background-color:#fff; pointer: default; margin-left:3px; color:#363636; display:inline-block; font-size:8px; border-radius: 2px;font-style:montserrat;font-weight:600;">Free</p> <a target="_blank" href="https://utron.id/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Masukkampus<div><a target="_blank" href="https://utbk.masukkampus.com/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">SainsIn<div><a target="_blank" href="https://sainsin.id/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Oksigen Education<div><a target="_blank" href="https://oksigenedu.com/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></li></div></ul></div>' +

            '<div style="text-align:left;margin-bottom: 20px">' +
            '<p style="text-align:left;margin:0;margin-left:15px;border: 1px #363636 solid; padding:2px 8px; background-color:#363636; pointer: default; margin-left:3px; color:#fff;font-size:8px; display:inline-block; border-radius: 2px;font-style:montserrat;font-weight:600;">Free*</p> <p style="font-size:8px; display:inline-block;margin:0;">Ada TO gratis bersyarat, biasanya disuruh follow sama share.</p><br>' +
            '<p style="margin:0;border: 1px #363636 solid; padding:2px 8px; background-color:#fff; pointer: default; margin-left:3px; color:#363636;font-size:8px; display:inline-block; border-radius: 2px;font-style:montserrat;font-weight:600;">Free</p> <p style="font-size:8px; display:inline-block;margin:0;">Ada TO gratis, ga perlu syarat-syaratan.</p>' +
            '</div>' +

            '<div style="text-align:left;>"' +
            '<p><b>Youtube</b>:</p>' +
            '<ul style="margin-top:-15px;">' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">aco!<div><a target="_blank" href="https://www.youtube.com/channel/UCnWIF4KcdRkTUDvxDHlvYNg"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Belajar Bersama Pak Luhut<div><a target="_blank" href="https://www.youtube.com/channel/UCmDRYzK0sh2OSdfWk0FDyQw"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Bermatematika<div><a target="_blank" href="https://www.youtube.com/channel/UCZRnBDXeDb45B5sVTEPXJmQ"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Bimbel Smarrt<div><a target="_blank" href="https://www.youtube.com/channel/UCf15e27Abruh_4LwjhS_14Q"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">BIG Course<div><a target="_blank" href="https://www.youtube.com/channel/UC-a0gsRujUDEdro2k3AGaCg"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">C.H.E Channel (Soshum)<div><a target="_blank" href="https://www.youtube.com/c/PencariIlmu/featured"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">m4th-lab<div><a target="_blank" href="https://www.youtube.com/channel/UCl67Jeayu8eJVY2y5FuKSUw"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Miracle Sitompul<div><a target="_blank" href="https://www.youtube.com/channel/UCSVZngs-UH5bZK8NlPo1mBg"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Pak Wisnu Fisika<div><a target="_blank" href="https://www.youtube.com/c/PakWisnu/featured"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Pembahasan 100 Soal PK 2020<div><a target="_blank" href="https://www.youtube.com/playlist?list=PLqJm-ybfL2wfr07WCWX1eaT9D2uzjpFlU"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Privat Al Faiz<div><a target="_blank" href="https://www.youtube.com/channel/UCAe69wlClVVHexL0l0gdHKQ"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Pak Franzz<div><a target="_blank" href="https://www.youtube.com/channel/UCIzs_mAx7jXvNVjBaPeqEAw"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Team Tanpa Les Indonesia<div><a target="_blank" href="https://www.youtube.com/channel/UCeGu7w5LDZV6Bf4Olz1wVfg"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Zero Tutorial Matematika<div><a target="_blank" href="https://www.youtube.com/channel/UCTy72DqisRCpxEzQOu4hT6g"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Zenius<div><a target="_blank" href="https://www.youtube.com/user/ZeniusEduChannel"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li></ul>' +
            '</div>' +

            '<div style="text-align:left;>"' +
            '<p><b>Websites & others</b>:</p>' +
            '<ul style="margin-top:-15px;">' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">acomarcho&apos;s Github<div><a target="_blank" href="https://acomarcho.github.io/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></div></div><a/>' +
            '<ul><li>Kitab Numerik</li><li>Kuantitatif ala UTBK</li><li>Kuis Kata Baku</li><li>etc</li></li></ul></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Bimbingan Alumni UI<div><a target="_blank" href="https://www.bimbinganalumniui.com/edukasi"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Defantri<div><a target="_blank" href="https://www.defantri.com/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">English Club<div><a target="_blank" href="https://www.englishclub.com/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">English 4U<div><a target="_blank" href="https://www.english-4u.de/index.htm"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">m4th-lab.net<div><a target="_blank" href="https://m4th-lab.net/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between;">Wardaya College<div><a target="_blank" href="https://www.wardayacollege.com/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li></ul>' +
            '<ul style="list-style-type: circle;">' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between; list-style-type: circle;">Drive Tutor 3&apos;2020<div><a target="_blank" href="https://drive.google.com/drive/folders/1NC0J1pfUff8MrAGTO1bUYP4hzGBpfHY0"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between; list-style-type: circle;">Warga Tiga 2021<div><a target="_blank" href="https://2021.wargati.ga/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></li>' +
            '<li><div style="display:flex; align-items:center; justify-content:space-between; list-style-type: circle;">UTBK Countdown&apos;s Repository<div><a target="_blank" href="https://github.com/farellfaiz/utbk-countdown/"><span style="margin-left:7px;color:black;text-decoration:none;; font-size:13px;" class="fa fa-external-link"></span><a/></div></div></li></ul>' +

            '</div>',
        showCloseButton: true,
        showConfirmButton: false,
    })
});