//vars for character divs
var character1 = $("#character1")
var character2 = $("#character2")
var character3 = $("#character3")
var character4 = $("#character4")

//vars for game state
var state = 0
var selectedchar = 0
var selectedenemy = 0

//vars for character stats
var charHealth = [0, 100, 100, 100, 100]
var charAtk = [0, 10, 10, 10, 10]
var charEA = [0, 5, 5, 5, 5]

//player health
var lifePoint = 1

//enemy health
var enemyPoint = 1

writeText("Select your character!")

//On Click events for all divs
character1.click(function(){
    if (state == 0) {
    character1.animate({left: '407px'});
    character2.animate({top: '300px', left: '407px'});
    character3.animate({top: '300px', left: '100px'});
    character4.animate({top: '300px', left: '714px'});
    selectedchar = 1
    state++
    lifePoint = charHealth[selectedchar]
    writeText("Select your enemy!")
    }    

    else if (state == 1 && selectedchar == 2) {
    character3.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 1
    enemyPoint = charHealth[selectedenemy]
    state++
    }
    
    else if (state == 1 && selectedchar == 3) {
    character2.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    character1.animate({left: '407px'});
    writeText("Fight!")
    selectedenemy = 1
    enemyPoint = charHealth[selectedenemy]
    state++
    }
    
    else if (state == 1 && selectedchar == 4) {
    character2.animate({top: '600px', left: '100px'});
    character3.animate({top: '600px', left: '325px'});
    character1.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 1
    enemyPoint = charHealth[selectedenemy]
    state++
    }

    else if (state == 3||4 && selectedchar != 1) {
    character1.animate({top: '300px', left: '407px'});
    writeText("Fight!")
    selectedenemy = 1
    enemyPoint = charHealth[selectedenemy]
    state++
    }
})

character2.click(function(){
    if (state == 0) {
    character2.animate({left: '407px'});
    character1.animate({top: '300px', left: '407px'});
    character3.animate({top: '300px', left: '100px'});
    character4.animate({top: '300px', left: '714px'});
    selectedchar = 2
    lifePoint = charHealth[selectedchar]
    state++
    writeText("Select your enemy!")
    }   

    else if (state == 1 && selectedchar == 1) {
    character3.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 2
    enemyPoint = charHealth[selectedenemy]
    state++
    }

    else if (state == 1 && selectedchar == 3) {
    character1.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 2
    enemyPoint = charHealth[selectedenemy]
    state++
    }

    else if (state == 1 && selectedchar == 4) {
    character1.animate({top: '600px', left: '100px'});
    character3.animate({top: '600px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 2
    enemyPoint = charHealth[selectedenemy]
    state++
    }

    else if (state == 3||4 && selectedchar != 2) {
    character2.animate({top: '300px', left: '407px'});
    writeText("Fight!")
    selectedenemy = 2
    enemyPoint = charHealth[selectedenemy]
    state++
    }
})

character3.click(function(){
    if (state == 0) {
    character3.animate({left: '407px', top: '50px'});
    character2.animate({top: '300px', left: '407px'});
    character1.animate({top: '300px', left: '100px'});
    character4.animate({top: '300px', left: '714px'});
    selectedchar = 3
    lifePoint = charHealth[selectedchar]
    state++
    writeText("Select your enemy!")
    }    

    else if (state == 1 && selectedchar == 2) {
    character1.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    character3.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 3
    enemyPoint = charHealth[selectedenemy]
    state++
    }
        
    else if (state == 1 && selectedchar == 1) {
    character2.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    character3.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 3
    enemyPoint = charHealth[selectedenemy]
    state++
    }
        
    else if (state == 1 && selectedchar == 4) {
    character1.animate({top: '600px', left: '100px'});
    character2.animate({top: '600px', left: '325px'});
    character3.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 3
    enemyPoint = charHealth[selectedenemy]
    state++
    }

    else if (state == 3||4 && selectedchar != 3) {
    character3.animate({top: '300px', left: '407px'});
    writeText("Fight!")
    selectedenemy = 3
    enemyPoint = charHealth[selectedenemy]
    state++
    }

})

character4.click(function(){
    if (state == 0) {
    character4.animate({left: '407px', top: '50px'});
    character2.animate({top: '300px', left: '407px'});
    character1.animate({top: '300px', left: '100px'});
    character3.animate({top: '300px', left: '714px'});
    selectedchar = 4
    lifePoint = charHealth[selectedchar]
    state++
    writeText("Select your enemy!")
    }

    else if (state == 1 && selectedchar == 2) {
    character3.animate({top: '600px', left: '100px'});
    character1.animate({top: '600px', left: '325px'});
    character4.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 4
    enemyPoint = charHealth[selectedenemy]
    state++
    }
            
    else if (state == 1 && selectedchar == 1) {
    character3.animate({top: '600px', left: '100px'});
    character2.animate({top: '600px', left: '325px'});
    character4.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 4
    enemyPoint = charHealth[selectedenemy]
    state++
    }
            
    else if (state == 1 && selectedchar == 3) {
    character1.animate({top: '600px', left: '100px'});
    character2.animate({top: '600px', left: '325px'});
    character4.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 4
    enemyPoint = charHealth[selectedenemy]
    state++
    }

    else if (state == 3||4 && selectedchar != 4) {
    character4.animate({top: '300px', left: '407px'});
    writeText("Fight!")
    selectedenemy = 4
    enemyPoint = charHealth[selectedenemy]
    state++
    }
})

//writes text to text div (debug?)
function writeText(text) {
    $("#textdisplay").text(text)
}

//enemy kill scripts
function killEnemy1() {
    if (state == 2 || state == 4) {
    character1.hide()
    character1.animate({top: '2000px', right: '2000px'})
    state++
    writeText("Enemy defeated!  Who to fight next?")
    }

    else if (state == 6) {
    character1.hide()
    character1.animate({top: '2000px', right: '2000px'})
    winGame()
    }

}

function killEnemy2() {
    if (state == 2 || state == 4) {
    character2.hide()
    character2.animate({top: '2000px', right: '2000px'})
    state++
    writeText("Enemy defeated!  Who to fight next?")
    }

    else if (state == 6) {
    character2.hide()
    character2.animate({top: '2000px', right: '2000px'})
    winGame()
    }

}

function killEnemy3() {
    if (state == 2 || state == 4) {
    character3.hide()
    character3.animate({top: '2000px', right: '2000px'})
    state++
    writeText("Enemy defeated!  Who to fight next?")
    }

    else if (state == 6) {
    character3.hide()
    character3.animate({top: '2000px', right: '2000px'})
    winGame()
    }
    
}


function killEnemy4() {
    if (state == 2 || state == 4) {
    character4.hide()
    character4.animate({top: '2000px', right: '2000px'})
    state++
    writeText("Enemy defeated!  Who to fight next?")
    }

    else if (state == 6) {
    character4.hide()
    character4.animate({top: '2000px', right: '2000px'})
    winGame()
    }

}

//kill buttons (debug/dev purpose only) 
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

//Attack button
$("#attack").click(function() {
    attack()
}) 

//Win the game
function winGame () {
    writeText("A winner is you!")
}

//Lose the game
function loseGame () {
    writeText ("You lose!")
}

//Attacking scripts
function attack() {
lifePoint = lifePoint - charEA[selectedenemy]
enemyPoint = enemyPoint - charAtk[selectedchar]
atkDisp()
}

//Attack Data display
function atkDisp() {
$("#attackdata").html(
    "Player Health: " + lifePoint + "<br>" +
    "Enemy Health: " + enemyPoint
    )
}

