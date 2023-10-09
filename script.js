
const btn=document.getElementById('toggbtn')
const bod=document.getElementsByClassName('bod');
const nav=document.getElementsByClassName('nv');
const btt =document.getElementsByClassName('bt')
function darkmod(){

    for(const body of bod){

        if(body.classList.contains('lightmode')){
            for(const body of bod){
                body.classList.remove('lightmode')
                body.classList.add('darkmode')
                localStorage.setItem('theme','dark')
            }
        }
        else{
            for(const body of bod){
                body.classList.remove('darkmode')
                body.classList.add('lightmode')
                localStorage.setItem('theme','theme')
             }
        }
    }

    for(const nv of nav){
        if(nv.classList.contains('navbar-light')){
            for(const nv of nav){
                nv.classList.remove('navbar-light')
                nv.classList.add('navbar-dark','bg-dark')
            }
        }
        else{
            nv.classList.remove('navbar-dark','bg-dark')
            nv.classList.add('navbar-light')
        }
    }
    for(const btn of btt ){
        if(btn.classList.contains('but')){
            btn.classList.remove('but')
            btn.classList.add('butd')
        }
        else{
            btn.classList.add('but')
            btn.classList.remove('butd')
        }
    }


    
    
}
btn.addEventListener('change',darkmod);

const savthem=localStorage.getItem('theme')

if(savthem==='dark'){
    for(const body of bod){
        body.classList.remove('lightmode')
        body.classList.add('darkmode')
       
    }
    for(const nv of nav){
        nv.classList.remove('navbar-light')
        nv.classList.add('navbar-dark','bg-dark')
    }
    for(const btn of btt){
        btn.classList.remove('but')
        btn.classList.add('butd')
    }
    
}
else{
    for(const body of bod){
        body.classList.remove('darkmode')
        body.classList.add('lightmode')
        
     }
     for(const nv of nav ){
        nv.classList.remove('navbar-dark','bg-dark')
        nv.classList.add('navbar-light')
     }
     for(const btn of btt){
        btn.classList.add('but')
            btn.classList.remove('butd')
    }
}










// for (const par of body) {
    //     par.classList.add('bg-dark', 'text-white');
    // }