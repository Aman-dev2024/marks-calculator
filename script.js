function displayTotal(){
    const english= Number(document.getElementById('english').value);
    const math=Number(document.getElementById('math').value);
    const physics=Number(document.getElementById('physics').value);
    const chemistry=Number(document.getElementById('chemistry').value);
    const cs=Number(document.getElementById('cs').value);

    const total=english+math+physics+chemistry+cs;
    document.getElementById("total").textContent=
    "Total is " + total;
}

function displayPercentage(){
    const english= Number(document.getElementById('english').value);
    const math=Number(document.getElementById('math').value);
    const physics=Number(document.getElementById('physics').value);
    const chemistry=Number(document.getElementById('chemistry').value);
    const cs=Number(document.getElementById('cs').value);

    const total=english+math+physics+chemistry+cs;
    const percentage=(total/500)*100;

    document.getElementById("percentage").textContent="Percentage is " + percentage;
}


function displayGrade(){
    const english= Number(document.getElementById('english').value);
    const math=Number(document.getElementById('math').value);
    const physics=Number(document.getElementById('physics').value);
    const chemistry=Number(document.getElementById('chemistry').value);
    const cs=Number(document.getElementById('cs').value);


    function grade(){
    const total=english+math+physics+chemistry+cs;

    if(total>=90){
        return 'A';
    }
    else if(total>=75){
        return 'B';
    }
    else if(total>=60){
        return 'C';
    }
    else if(total>=40){
        return 'D';
    }
    else if(total>=35){
        return 'E';
    }
    else{
        return 'F'
    }
}
    grade();

    document.getElementById('grade').textContent=grade();
}