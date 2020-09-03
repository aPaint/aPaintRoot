function shiftID(id, add, itemCount, letter){

    let idArr = id.split('F');
    let idNum = parseInt(idArr[1])

    let idFinal;

    if(add==true){
        if(idNum + 1 <= itemCount){
            idNum++;
        }
        else{
            idNum = 0;
        }

        idFinal = letter + 'F' + String(idNum);
    }else{
        if(idNum - 1 < 0){
            idNum = itemCount;
        }
        else{
            idNum--;
        }

        idFinal = letter + 'F' + String(idNum);
    }
    return idFinal
}


function shiftR(letter, blogCount){

    document.getElementsByClassName(letter+'blogLeft')[0].disabled=true;
    document.getElementsByClassName(letter+'blogRight')[0].disabled=true;

    document.getElementsByClassName('blogArticles')[0].classList.add('disablePE');

    var enter = document.getElementsByClassName(letter +'F0')[0];
    var leftF = document.getElementsByClassName(letter +'lCurr')[0];
    var mainF = document.getElementsByClassName(letter +'mCurr')[0];
    var rightF = document.getElementsByClassName(letter +'rCurr')[0];


    var hICount = blogCount - 3;
    var hItems = [];
    // rightF.classList.add('hF'+String(hiddenItems))

    for(let i=0; i<hICount; i++){
        var keyID = letter + 'F'+String(i)

        var hItem = document.getElementsByClassName(keyID)[0];
        hItems.push(hItem);
    }

    if(blogCount > 3){
        for(let j=1; j<hItems.length; j++){
            var oldID = letter + 'F' + String(j)
    
            var newID = shiftID(oldID,false,hICount-1,letter);
    
            hItems[j].classList.remove(oldID);
    
            hItems[j].classList.add(newID)
        }
    
    }

    if(blogCount > 3){
        enter.classList.add('leftIn','LsideFeature','sideFeature');
        
        rightF.classList.add('rightOut');
    }else{
        rightF.classList.add('rightBlinkLeft','LsideFeature','sideFeature');
    }



    leftF.classList.add('left2center','mainFeature',letter+'featureColor');

    mainF.classList.add('center2right','RsideFeature','sideFeature');


    setTimeout(()=>{

        if(blogCount > 3){
            enter.classList.remove(letter+'F0','hFeat');
            enter.classList.add(letter +'lCurr');

            rightF.classList.remove(letter +'rCurr','RsideFeature','sideFeature')
            rightF.classList.add('hFeat',letter+'F'+String(hICount-1))
        }else{
            rightF.classList.remove(letter +'rCurr','RsideFeature')
            rightF.classList.add(letter +'lCurr');
        }


        leftF.classList.remove(letter +'lCurr','LsideFeature','sideFeature');
        leftF.classList.add(letter+'mCurr');

        mainF.classList.remove(letter +'mCurr',letter+'featureColor','mainFeature');
        mainF.classList.add(letter +'rCurr');


    },100)

    setTimeout(()=>{

        if(blogCount > 3){
            enter.classList.remove('leftIn');
            rightF.classList.remove('rightOut')
        }else{
            rightF.classList.remove('rightBlinkLeft')
        }


        leftF.classList.remove('left2center');
        mainF.classList.remove('center2right');

        
        document.getElementsByClassName(letter+'blogRight')[0].disabled=false;
        document.getElementsByClassName(letter+'blogLeft')[0].disabled=false;

    },500)

    setTimeout(()=>{
        document.getElementsByClassName('blogArticles')[0].classList.remove('disablePE');
    },600)

}



function shiftL(letter, blogCount){


    document.getElementsByClassName(letter+'blogLeft')[0].disabled=true;
    document.getElementsByClassName(letter+'blogRight')[0].disabled=true;

    document.getElementsByClassName('blogArticles')[0].classList.add('disablePE');

    var hICount = blogCount - 3;

    var enter = document.getElementsByClassName(letter+'F'+String(hICount-1))[0];
    var leftF = document.getElementsByClassName(letter +'lCurr')[0];
    var mainF = document.getElementsByClassName(letter +'mCurr')[0];
    var rightF = document.getElementsByClassName(letter +'rCurr')[0];

    
    var hItems = [];
    // rightF.classList.add('hF'+String(hiddenItems))

    for(let i=0; i<hICount; i++){
        var keyID = letter+'F'+String(i)

        //console.log(keyID)
        
        // console.log(keyID)

        var hItem = document.getElementsByClassName(keyID)[0];
        hItems.push(hItem);
    }


    if(blogCount > 3){
        for(let j=0; j<hItems.length-1; j++){
            var oldID = letter+ 'F' + String(j)
    
            var newID = shiftID(oldID,true,hICount-1,letter);
    
            hItems[j].classList.remove(oldID);
    
            hItems[j].classList.add(newID)
        }
    }


    if(blogCount > 3){

        enter.classList.add('rightIn','RsideFeature','sideFeature');
        leftF.classList.add('leftOut');
        
    }else{

        leftF.classList.add('leftBlinkRight','RsideFeature','sideFeature');

    }

    rightF.classList.add('right2center','mainFeature',letter+'featureColor');
    mainF.classList.add('center2left','LsideFeature','sideFeature');



    setTimeout(()=>{

        if(blogCount > 3){
            enter.classList.remove(letter + 'F'+String(hICount-1),'hFeat');
            enter.classList.add(letter +'rCurr');

            leftF.classList.remove(letter +'lCurr','LsideFeature','sideFeature')
            leftF.classList.add('hFeat',letter+'F0')
        }else{
            leftF.classList.remove(letter +'lCurr','LsideFeature');
            leftF.classList.add(letter +'rCurr');
        }

        rightF.classList.remove(letter +'rCurr','RsideFeature','sideFeature');
        rightF.classList.add(letter +'mCurr');

        mainF.classList.remove(letter +'mCurr',letter+'featureColor','mainFeature');
        mainF.classList.add(letter +'lCurr');


    },100)

    setTimeout(()=>{

        if(blogCount > 3){
            enter.classList.remove('rightIn');
            leftF.classList.remove('leftOut');
        }else{
            leftF.classList.remove('leftBlinkRight');
        }


        rightF.classList.remove('right2center');
        mainF.classList.remove('center2left');
        
        
        document.getElementsByClassName(letter+'blogLeft')[0].disabled=false;
        document.getElementsByClassName(letter+'blogRight')[0].disabled=false;


    },500)

    setTimeout(()=>{
        document.getElementsByClassName('blogArticles')[0].classList.remove('disablePE');
    },600)

}


function addClicking(e,markers){    

    let el;

    if(e.classList.contains(markers[0]+'itemImg') || e.classList.contains(markers[0]+'itemTitle') || e.classList.contains(markers[0]+'itemDate') ){
        el = e.parentElement.parentElement;
    }else if(e.classList.contains(markers[0]+'item')){
        el = e.parentElement;
    }else{
        el = e;
    }


    if(el.classList.contains('LsideFeature')){
        shiftR(markers[0],markers[1])
    }else if(el.classList.contains('RsideFeature')){
        shiftL(markers[0],markers[1])
    }


}





document.addEventListener('swiped-left', function(e) {
   

    classList = e.target.classList[0].substring(1);
    fullClass = e.target.classList[0];

    blogNum = document.getElementsByClassName(e.target.classList[0].charAt(0)+'blogLeft')[0].value;

    if((classList == "itemTitle")||(classList == "itemImg")||(classList == "itemDate")||(classList == "featureColor")){

        console.log(blogNum)

        shiftL(e.target.classList[0].charAt(0),blogNum)

    }else if(fullClass=='mainFeature'){
        shiftL(e.target.classList[1].charAt(0),blogNum)
    }



});


document.addEventListener('swiped-right', function(e) {
   

    classList = e.target.classList[0].substring(1);
    fullClass = e.target.classList[0];

    blogNum = document.getElementsByClassName(e.target.classList[0].charAt(0)+'blogLeft')[0].value;

    if((classList == "itemTitle")||(classList == "itemImg")||(classList == "itemDate")||(classList == "featureColor")){

        console.log(blogNum)

        shiftR(e.target.classList[0].charAt(0),blogNum)

    }else if(fullClass=='mainFeature'){
        shiftR(e.target.classList[1].charAt(0),blogNum)
    }



});