var navistatus=0;

function opennavi(){
    if(!navistatus){
        //For accessing using class use '.'
        //for accessing using id use '#'
        $('.maindiv').css('width', '100%')
        $('li').css('display', 'block')
        $('h1').css('display', 'block')
        navistatus=1
    }
    else{
        $('.maindiv').css('width', '0')
        $('li').css('display', 'none')
        $('h1').css('display', 'none')
        navistatus=0

    }
}