Ques:A student will not be allowed to sit in the exam if his/her attendance is less than 75%. if he/she has medical causes reduce attendance criteria to 60%. 
Ask the user if he/she has a medical cause or not ( 'Y' or 'N' ) and print accordingly. You were given a total no classes and total classes attended by the student.
Solu:
function checkTheAttdence(Tc,Ac,M){
  let per= Ac/Tc*100
//   console.log(per)
  if(M =='Y'){
    if(per>60){
      return console.log("True")
    }
    else{
      return console.log("False")
    }
  }
  else if(M =='N') {
      if(per>75){
        return console.log("True")
      }
      else{
        return console.log("False")
      }
    }
  else{
      return console.log("Entered a wrong key")
    }
}
var Totalclass=prompt("Enter the Total Class held:",100)
var Attendedclass=prompt("Enter the Classes Attended:",100)
var medical=prompt("Are you have medical cause : Y/N")

checkTheAttdence(Totalclass,Attendedclass,medical)
