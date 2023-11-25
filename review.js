let review = {
    userName:"mike",
    bodyText:"This is the best book ever!",
    rating:6,
showRating: function(){
   let star=''
    for (let i = 0; i < this.rating; i++) {
       star+="*"
      }
    return star
},

showHTML : function(){
    let html=`<div class="review">`
html+=`<h2>${this.userName}</h2>`
html+=`<p>${this.bodyText}</p>`
html+=`<p>${this.rating}</p>`
html+=`<p>${this.showRating()}</p>`
    html+=`</div>`
    return html
}
}
let html =review.showHTML()
container.innerHTML=html