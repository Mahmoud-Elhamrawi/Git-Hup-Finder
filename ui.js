class Ui{
 constructor()
 {
     this.profile = document.getElementById("profile");
  
 }

 showReposInfo(repos){
     let ouput=''

   repos.forEach(function(repo)
   {
    ouput +=`
        <div class="card card-body mb-3">
        <div class="row">
         <div class="col-md-6">
          <a href="${repo.html_url}"  target="_blank">${repo.name}</a>
         </div>
         <div class="col-md-6">
         <span class="badge badge-danger">Watchers : ${repo.watchers} </span>
         <span class="badge badge-warning"> Stars : ${repo.stargazers_count} </span>
         <span class="badge badge-success">forks : ${repo.forks_count} </span>
         </div>
        </div>
        </div>
    `
   });
  
   document.getElementById("repos").innerHTML=ouput;
 }

 showUserInfo(user){
    this.profile.innerHTML=`
     <div class="card card-body mb-3">

      <div class="container">
       <div class="row">
        <div class="col-md-3">
         <img src="${user.avatar_url}" class="w-100 mb-2 rounded-circle">
          <a class="btn btn-info d-block mb-2" target="_blank"  href="${user.html_url}"> View Profile</a>
        </div>
        <div class="col-md-9">
         <span class="badge badge-primary mb-2">public Repos : ${user.public_repos} </span>
         <span class="badge badge-danger mb-2">public Gists : ${user.public_gists} </span>
         <span class="badge badge-warning mb-2">public followers : ${user.followers} </span>
         <span class="badge badge-success mb-2">public follwing : ${user.following} </span>
        <ul class="list-group">
         <li class="list-group-item">${user.company}</li>
         <li class="list-group-item">${user.blog}</li>
         <li class="list-group-item">${user.location}</li>
         <li class="list-group-item">${user.created_at}</li>
        </ul>
        </div>

       </div>
      </div>
      <h3 class="page-geading mb-2">latest Repos : <h3>
      <div id="repos"></div>


     </div>
    
    
    
    
    `
 }
 clearProfile()
 {
     this.profile.innerHTML=' ';
 }

 showAlert(text, className)
 {
     this.clearAlert();
     const div  = document.createElement('div');
     div.className= className ;
     div.appendChild(document.createTextNode(text));
     const containerSearch = document.querySelector(".containerSearch");
     const card  =document.querySelector(".card");
     containerSearch.insertBefore(div,card);
     setTimeout(()=>{ 
          this.clearAlert()       
    },3000)

    }
   clearAlert()
     {
         const alerts =document.querySelector(".alert");
         if(alerts){
            alerts.remove();

         }
    }
        

}