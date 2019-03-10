var character1 = $("#character1")
var character2 = $("#character2")
var character3 = $("#character3")
var character4 = $("#character4")

var status = 0
var selectedchar = 0
var selectedenemy = 0

writeText("Select your character!")

//On Click events for all divs
character1.click(function(){
    if (status==0) {
    character1.animate({left: '407px'});
    character2.animate({top: '300px', left: '407px'});
    character3.animate({top: '300px', left: '100px'});
    character4.animate({top: '300px', left: '714px'});
    selectedchar = 1
    status++
    writeText("Select your enemy!")
    }    

    else if (status == 1 && selectedchar == 2) {
    character3.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 1
    status++
    }
    
    else if (status == 1 && selectedchar == 3) {
    character2.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    character1.animate({left: '407px'});
    writeText("Fight!")
    selectedenemy = 1
    status++
    }
    
    else if (status == 1 && selectedchar == 4) {
    character2.animate({top: '600px', left: '100px'});
    character3.animate({top: '600px', left: '325px'});
    character1.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 1
    status++
    }


})

character2.click(function(){
    if (status==0) {
    character2.animate({left: '407px'});
    character1.animate({top: '300px', left: '407px'});
    character3.animate({top: '300px', left: '100px'});
    character4.animate({top: '300px', left: '714px'});
    selectedchar = 2
    status++
    writeText("Select your enemy!")
    }   

    else if (status == 1 && selectedchar == 1) {
    character3.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 2
    status++
    }

    else if (status == 1 && selectedchar == 3) {
    character1.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 2
    status++
    }

    else if (status == 1 && selectedchar == 4) {
    character1.animate({top: '600px', left: '100px'});
    character3.animate({top: '600px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 2
    status++
    }
})

character3.click(function(){
    if (status==0) {
    character3.animate({left: '407px', top: '50px'});
    character2.animate({top: '300px', left: '407px'});
    character1.animate({top: '300px', left: '100px'});
    character4.animate({top: '300px', left: '714px'});
    selectedchar = 3
    status++
    writeText("Select your enemy!")
    }    

    else if (status == 1 && selectedchar == 2) {
    character1.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    character3.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 3
    status++
    }
        
    else if (status == 1 && selectedchar == 1) {
    character2.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    character3.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 3
    status++
    }
        
    else if (status == 1 && selectedchar == 4) {
    character1.animate({top: '600px', left: '100px'});
    character2.animate({top: '600px', left: '325px'});
    character3.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 3
    status++
    }

})

character4.click(function(){
    if (status==0) {
    character4.animate({left: '407px', top: '50px'});
    character2.animate({top: '300px', left: '407px'});
    character1.animate({top: '300px', left: '100px'});
    character3.animate({top: '300px', left: '714px'});
    selectedchar = 4
    status++
    writeText("Select your enemy!")
    }

    else if (status == 1 && selectedchar == 2) {
    character3.animate({top: '600px', left: '100px'});
    character1.animate({top: '600px', left: '325px'});
    character4.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 4
    status++
    }
            
    else if (status == 1 && selectedchar == 1) {
    character3.animate({top: '600px', left: '100px'});
    character2.animate({top: '600px', left: '325px'});
    character4.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 4
    status++
    }
            
    else if (status == 1 && selectedchar == 3) {
    character1.animate({top: '600px', left: '100px'});
    character2.animate({top: '600px', left: '325px'});
    character4.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 4
    status++
    }

})

//writes text to text div (debug?)
function writeText(text) {
    $("#textdisplay").text(text)
}

//debug buttons to kill enemies
function killEnemy1() {
    character1.hide()
    character1.animate({top: '2000px', right: '2000px'})
}

function killEnemy2() {
    character2.hide()
    character2.animate({top: '2000px', right: '2000px'})
}

function killEnemy3() {
    character3.hide()
    character3.animate({top: '2000px', right: '2000px'})
}

function killEnemy4() {
    character4.hide()
    character4.animate({top: '2000px', right: '2000px'})
}

//kill button scripts
$("#killbtn1").click(function() {
    killEnemy1()
})

$("#killbtn2").click(function() {
    killEnemy2()
})

$("#killbtn3").click(function() {
    killEnemy3()
})

$("#killbtn4").click(function() {
    killEnemy4()
})