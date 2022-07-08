const doBlack = document.querySelectorAll('.nav-link');

doBlack.forEach(function(s,i){
    s.addEventListener('mouseover', function(){
        if(s.classList.contains('features-menu') || s.classList.contains('company-menu')){
            s.querySelector('.ul').style.visibility = 'visible';
            s.querySelector('.icons').src = "img/icon-arrow-down.svg";
            s.classList.add('mouseOver');
        }
        else s.classList.add('mouseOver');
    });

    s.addEventListener('mouseout',function(){
        if(s.classList.contains('features-menu') || s.classList.contains('company-menu')){
            s.querySelector('.ul').style.visibility = 'hidden';
            s.querySelector('.icons').src = "img/icon-arrow-up.svg";
            s.classList.remove('mouseOver');
        }
        else s.classList.remove('mouseOver');
    });
});