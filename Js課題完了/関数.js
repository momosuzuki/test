function question1(hankei,pi=3.14){
    return(hankei*hankei*pi);
}

document.write("問1<br>");
document.write(question1(5)+"<br>");
document.write(question1(7)+"<br>");
document.write(question1(10)+"<br>");

document.write("<br>");
document.write("<br>");
document.write("問2<br>");

function question2(otona,kodomo){
    return(500*otona+200*kodomo);
}
document.write(question2(2,4)
               +"円です。<br>");
document.write(question2(1,5)+"円です。<br>");
document.write(question2(3,7)+"円です。<br>");