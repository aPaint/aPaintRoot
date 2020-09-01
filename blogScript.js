let blogCount = 9;

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


function shiftR(letter){

    document.getElementsByClassName(letter+'blogRight')[0].disabled=true;


    var enter = document.getElementsByClassName(letter +'F0')[0];
    var leftF = document.getElementsByClassName(letter +'lCurr')[0];
    var mainF = document.getElementsByClassName(letter +'mCurr')[0];
    var rightF = document.getElementsByClassName(letter +'rCurr')[0];


    var hICount = blogCount - 3;
    var hItems = [];
    // rightF.classList.add('hF'+String(hiddenItems))

    for(let i=0; i<hICount; i++){
        var keyID = letter + 'F'+String(i)

        //console.log(keyID)
        
        // console.log(keyID)

        var hItem = document.getElementsByClassName(keyID)[0];
        hItems.push(hItem);
    }

    for(let j=1; j<hItems.length; j++){
        var oldID = letter + 'F' + String(j)

        var newID = shiftID(oldID,false,hICount-1,letter);

        hItems[j].classList.remove(oldID);

        hItems[j].classList.add(newID)
    }



    enter.classList.add('leftIn','LsideFeature','sideFeature');

    leftF.classList.add('left2center','mainFeature',letter+'featureColor');

    mainF.classList.add('center2right','RsideFeature','sideFeature');

    rightF.classList.add('rightOut');

    setTimeout(()=>{
        enter.classList.remove(letter+'F0','hFeat');
        enter.classList.add(letter +'lCurr');

        leftF.classList.remove(letter +'lCurr','LsideFeature','sideFeature');
        leftF.classList.add(letter+'mCurr');

        mainF.classList.remove(letter +'mCurr',letter+'featureColor','mainFeature');
        mainF.classList.add(letter +'rCurr');

        rightF.classList.remove(letter +'rCurr','RsideFeature','sideFeature')
        rightF.classList.add('hFeat',letter+'F'+String(hICount-1))
    },100)

    setTimeout(()=>{
        enter.classList.remove('leftIn');
        leftF.classList.remove('left2center');
        mainF.classList.remove('center2right');
        rightF.classList.remove('rightOut')
        
        document.getElementsByClassName(letter+'blogRight')[0].disabled=false;

    },400)

}



function shiftL(letter){

    document.getElementsByClassName(letter+'blogLeft')[0].disabled=true;

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

    for(let j=0; j<hItems.length-1; j++){
        var oldID = letter+ 'F' + String(j)

        var newID = shiftID(oldID,true,hICount-1,letter);

        hItems[j].classList.remove(oldID);

        hItems[j].classList.add(newID)
    }



    enter.classList.add('RightIn','RsideFeature','sideFeature');

    rightF.classList.add('right2center','mainFeature',letter+'featureColor');

    mainF.classList.add('center2left','LsideFeature','sideFeature');

    leftF.classList.add('leftOut');

    setTimeout(()=>{
        enter.classList.remove(letter + 'F'+String(hICount-1),'hFeat');
        enter.classList.add(letter +'rCurr');

        rightF.classList.remove(letter +'rCurr','RsideFeature','sideFeature');
        rightF.classList.add(letter +'mCurr');

        mainF.classList.remove(letter +'mCurr',letter+'featureColor','mainFeature');
        mainF.classList.add(letter +'lCurr');

        leftF.classList.remove(letter +'lCurr','LsideFeature','sideFeature')
        leftF.classList.add('hFeat',letter+'F0')
    },100)

    setTimeout(()=>{
        enter.classList.remove('rightIn');
        rightF.classList.remove('right2center');
        mainF.classList.remove('center2left');
        leftF.classList.remove('leftOut')
        
        document.getElementsByClassName(letter+'blogLeft')[0].disabled=false;

    },400)

}