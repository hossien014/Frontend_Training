
window.onresize=()=>{
      
      let platform ="(موبایل)";
       if( innerWidth>=992){
            platform="(کامپیوتر)"
      }
      else if( innerWidth>=578){
            platform="(تبلت)"
      }
     
      document.querySelector("#pixel-size").textContent=innerWidth + platform;

}

window.onload=()=>{
      
      document.querySelector("#pixel-size").textContent=innerWidth;
}


