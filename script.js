var numer_text = 1;


function click_ball(){
if(numer_text == 1){
    numer_text = 2;
    from_1_to_2();
}
else{
    numer_text = 1;
    from_2_to_1();
}

}


function from_1_to_2(){
    var text_list = document.getElementsByClassName('text');
    for(var index = 0; index < text_list.length; index++){
        text_list[index].classList.add('hide');
    }
    var text_list = document.getElementsByClassName('text2');
    for(var index = 0; index < text_list.length; index++){
        text_list[index].classList.add('show');
    }

    document.getElementsByClassName('s1')[0].classList.add('s1t2');
    document.getElementsByClassName('s2')[0].classList.add('s2t2');
    document.getElementsByClassName('s3')[0].classList.add('s3t2');
    document.getElementsByClassName('s4')[0].classList.add('s4t2');
}
function from_2_to_1(){
    
}