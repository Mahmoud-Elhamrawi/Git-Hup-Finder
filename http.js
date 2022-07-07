class Github {
  constructor() {
    this.clien_id = `fe4769b5f6603de64870`;
    this.clien_secrt = `57998c5a83e87d98ec84c15061cf945ee8d3e919`;
    this.repos_count = 5;
    this.repos_sort ='created:asc';
  }

  async featchData(user) {
    const apiResponse = await fetch(`https://api.github.com/users/${user}?
     clien_id=${this.clien_id}&clien_secrt=${this.clien_secrt}`);
   


     const responsResponse = await fetch(`https://api.github.com/users/${user}/repos?
      per_page=${this.repos_count}&sort=${this.repos_sort}& clien_id=${this.clien_id}&clien_secrt=${this.clien_secrt}`);


   
     const profile = await apiResponse.json();
     const repos = await responsResponse.json();
    return {
        profile ,
        repos
    };
  }
}
