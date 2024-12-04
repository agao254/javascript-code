let distance = 450;
let fuel =100;
let distancecondition = distance <=200 && distance >=100;
let engineisfunctioning =true;
console.log (distancecondition);

if (!engineisfunctioning|| distance > 250)
{
    console.log('you wont make it')
}


else if (distancecondition && fuel >=100)
{
    console.log('you will make it');
}
else if (distance < 100 && fuel >=25)

    {
        console.log ('you will make it')

    }
