const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('header-2');

if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
    
}
if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

        var Mainimg = document.getElementById("mainimg");
        var Smallimg  = document.getElementsByClassName("small-img");
        var Imgsp  = document.getElementsByClassName("imgsp");
        var Proname = document.getElementById("pro-name");
        var Namesp  = document.getElementsByClassName("namesp");
        var Pricesp  = document.getElementsByClassName("Pricesp");
        var Proprice = document.getElementById("pro-price");

        Smallimg[0].onclick = function(){
            Mainimg.src = Smallimg[0].src;
        }
        
        Smallimg[1].onclick = function(){
            Mainimg.src = Smallimg[1].src;
        }
        
        Smallimg[2].onclick = function(){
            Mainimg.src = Smallimg[2].src;
        }
        
        Smallimg[3].onclick = function(){
            Mainimg.src = Smallimg[3].src;
        }

        Imgsp[0].onclick = function(){
            Mainimg.src = Imgsp[0].src,
            Proname.textContent = Namesp[0].textContent,
            Proprice.textContent = Pricesp[0].textContent
            this.scrollTop;
            
        }

        Imgsp[1].onclick = function(){
            Mainimg.src = Imgsp[1].src,
            Proname.textContent = Namesp[1].textContent,
            Proprice.textContent = Pricesp[1].textContent;
        }

        Imgsp[2].onclick = function(){
            Mainimg.src = Imgsp[2].src,
            Proname.textContent = Namesp[2].textContent,
            Proprice.textContent = Pricesp[2].textContent;
        }

        Imgsp[3].onclick = function(){
            Mainimg.src = Imgsp[3].src,
            Proname.textContent = Namesp[3].textContent,
            Proprice.textContent = Pricesp[3].textContent;
        }

        
        
        
        



        
       
