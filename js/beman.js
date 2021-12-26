const inputHeight = document.querySelector("#height") ;  // dom 제어 
const inputWeight = document.querySelector("#weight") ;  // html에 있는 이름 찾아오기 
const btnResult = document.querySelector("#btnResult") ;

const btnReset = document.querySelector("#btnReset") ;
const result = document.querySelector("#result") ;
const bemando = document.querySelector("#beman") ;
const txtResult = document.querySelector("#txtResult") ;
const txtResultNum = document.querySelector("#txtResult .num") ;
const txtResultTxt = document.querySelector("#txtResult .txt") ;

function showAlertTxt( msg , beman) {

    txtResult.style.display ="flex"  ; // 속성
    txtResultNum.textContent = beman ; 
    txtResultTxt.textContent = msg ;
    bemando.value =  beman ; 
    result.value = msg ;
  //  btnReset.style.display ="flex" ;
    btnReset.style.display ="block" ;
}
// callback 함수 
btnReset.addEventListener("click",function() {
    inputHeight.value ="";
    inputWeight.value ="";
    txtResult.style.display ="none"  ; // 속성
    txtResultNum.textContent = "" ; 
    txtResultTxt.textContent = "" ;
    bemando.value  ="" ;
    result.value  ="" ;
    btnReset.style.display ="none" ;
  }  ) ;

// callback 함수 
btnResult.addEventListener("click",function() {
    
    let myHeight = inputHeight.value ;
    let  myWeight =  inputWeight.value ; 


    // 정규표현식을 숫자 입력이 안되면 걸러야 합니다.

    if(myHeight === "" )  {
         alert("키를 입력해야합니당.") ;
         inputHeight.focus();
         return ;
    }

    
    if(myWeight === "" )  {
        alert("몸무게를 입력해야합니당.") ;
        inputWeight.focus() ;

        return ;

   }   
 

   var meterHeight = myHeight /100 ; 
   var beman = myWeight /jaegob (meterHeight    );
   
   // beman =math.round(beman) ;
 
   
   beman = Math.round(beman) ;
 
//   result.value = beman  ;

   

   if(beman <18.5) {
            showAlertTxt( "저체중...." , beman)   ;
 
  
    }else if(beman <23 ) {
       
        showAlertTxt( "정상입니다.....", beman)   ;

    }else if(beman <25 ) {
        showAlertTxt( "과체중이넹....", beman)   ;
 
    }else{
        showAlertTxt( "살아야되....", beman)   ;
    }

    
    
    // txtResult.num.value = beman ;

    // console.log("비만도" + beman) ;
        
        

} ) ;

// 내장객체 
// mdn document 
function dubae( num ) {
        
    //console.log( num * 2 );
    return num*2 ;
}


function jaegob(num) {

   // console.log( num*num ) ;
   return num*num ;

}

 

const now = new Date() ;

console.log(now) ;
console.log(now.getHours() + ":" +now.getMinutes()  + ":" + now.getSeconds() ) ;
 



 