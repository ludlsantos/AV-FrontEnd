document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('#slide-out');
    var instances = M.Sidenav.init(elems, {
        edge: 'left',
        inDuration: 100  
    });
});

