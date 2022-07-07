let myHttp  = new Github;
let myUi= new Ui;




let searchInpit = document.getElementById("searchInput");
searchInpit.addEventListener("keyup",(e)=>{
   
     const inputValue =  e.target.value;
     if(inputValue !=='')
     {
        // console.log(inputValue);
        myHttp.featchData(inputValue).then((data)=>{
                 console.log(data.profile);
              if(data.profile.message === 'Not Found')
              {
                  //alert
                    myUi.showAlert('User Not Found' , 'alert alert-danger');
    
                }else{

               // show profile
                myUi.showUserInfo(data.profile)     
                myUi.showReposInfo(data.repos)     
        }


        })
     }else{
       //clear
       myUi.clearProfile();
     }
})


//get Date 
let  d = new Date;
let y = d.getFullYear()
document.querySelector("footer span").innerHTML=y