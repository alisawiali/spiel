let main = document.getElementById('main');
let turn = 'x';


let squeres = [];
function end(num1,num2,num3){
    main.innerHTML = `${squeres[num1]} winner`;
    document.getElementById('item'+num1).style.backgroundColor = '#222';
    document.getElementById('item'+ num2).style.backgroundColor = '#222';
    document.getElementById('item'+ num3).style.backgroundColor = '#222';
    setInterval(function(){main.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);
}
function winner(){

        for( let i = 1; i < 10; i++){
            squeres [i] = document.getElementById('item' + i) .innerHTML;
        }
        if(squeres[1] == squeres[2] && squeres[2] == squeres[3] && squeres[1] != '')
        {
        
        end(1,2,3);
        }
        else if(squeres[4] == squeres[5] && squeres[5] == squeres[6] && squeres[5] != '')
        {
            end(4,5,6);
        }
        else if(squeres[7] == squeres[8] && squeres[8] == squeres[9] && squeres[7] != '')
        {
            end(7,8,9);
        }
        else if(squeres[1] == squeres[4] && squeres[4] == squeres[7] && squeres[1] != '')
        {
            end(1,4,7);
        }
        else if(squeres[2] == squeres[5] && squeres[5] == squeres[8] && squeres[2] != '')
        {
            end(2,5,8);
        }
        else if(squeres[3] == squeres[6] && squeres[6] == squeres[9] && squeres[3] != '')
        {
            end(3,6,9);
        }
        else if(squeres[1] == squeres[5] && squeres[5] == squeres[9] && squeres[1] != '')
        {
            end(1,5,9);
        }
        else if(squeres[3] == squeres[5] && squeres[5] == squeres[9] && squeres[3] != '')
        {
            end(3,5,9);
        }
}


function game(id){
    let element = document.getElementById(id);
    if(turn === 'o' &&  element.innerHTML == '')
    {
        element.innerHTML = 'o';
        turn ='x';
        main.innerHTML ='x';
    }
    else if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML = 'x';
        turn = 'o'
        main.innerHTML = 'o';
    }

winner()

}