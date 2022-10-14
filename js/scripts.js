/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    //alert('dom loaded')
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        document.body.classList.toggle('sb-sidenav-toggled');
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            //document.body.scrollTop = document.documentElement.scrollTop = 0;
            document.body.classList.toggle('sb-sidenav-toggled');
            //localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }


    document.querySelectorAll('#sidebar-wrapper a')
        .forEach(link => link.addEventListener('click', event => {
                    //alert('selected')
                    document.body.classList.toggle('sb-sidenav-toggled');
    }));

});

function toggleSidebar(event, id) {
//alert('toggleSidebar' + event);
//event.preventDefault();
//document.body.classList.toggle('sb-sidenav-toggled');
//document.getElementById(id).scrollIntoView();
}
