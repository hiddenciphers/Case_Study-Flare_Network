
function onYouTubePlayerAPIReady(a){configuration.click(configuration.find(".youtube-video"),function(){new YT.Player("player_"+this.dataset.embed,{height:"",width:"",videoId:this.dataset.embed,events:{onReady:b}});
function b(c){c.target.playVideo()}this.innerHTML=""})}window.addEventListener("load",function(){onYouTubePlayerAPIReady()});