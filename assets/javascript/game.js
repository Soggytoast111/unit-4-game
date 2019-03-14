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

//Character Select Arrays
var chararray = [0, character1, character2, character3, character4]

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
    atkshow()
    }
    
    else if (state == 1 && selectedchar == 3) {
    character2.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    character1.animate({left: '407px'});
    writeText("Fight!")
    selectedenemy = 1
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    }
    
    else if (state == 1 && selectedchar == 4) {
    character2.animate({top: '600px', left: '100px'});
    character3.animate({top: '600px', left: '325px'});
    character1.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 1
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    }

    else if (state == 3|| state == 5  && selectedchar != 1) {
    character1.animate({top: '300px', left: '407px'});
    writeText("Fight!")
    selectedenemy = 1
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
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
    atkshow()
    }

    else if (state == 1 && selectedchar == 3) {
    character1.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 2
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    }

    else if (state == 1 && selectedchar == 4) {
    character1.animate({top: '600px', left: '100px'});
    character3.animate({top: '600px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 2
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    }

    else if (state == 3|| state == 5  && selectedchar != 2) {
    character2.animate({top: '300px', left: '407px'});
    writeText("Fight!")
    selectedenemy = 2
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
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
    atkshow()
    }
        
    else if (state == 1 && selectedchar == 1) {
    character2.animate({top: '600px', left: '100px'});
    character4.animate({top: '600px', left: '325px'});
    character3.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 3
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    }
        
    else if (state == 1 && selectedchar == 4) {
    character1.animate({top: '600px', left: '100px'});
    character2.animate({top: '600px', left: '325px'});
    character3.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 3
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    }

    else if (state == 3|| state == 5  && selectedchar != 3) {
    character3.animate({top: '300px', left: '407px'});
    writeText("Fight!")
    selectedenemy = 3
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
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
    atkshow()
    }
            
    else if (state == 1 && selectedchar == 1) {
    character3.animate({top: '600px', left: '100px'});
    character2.animate({top: '600px', left: '325px'});
    character4.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 4
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    }
            
    else if (state == 1 && selectedchar == 3) {
    character1.animate({top: '600px', left: '100px'});
    character2.animate({top: '600px', left: '325px'});
    character4.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 4
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    }

    else if (state == 3|| state == 5 && selectedchar != 4) {
    character4.animate({top: '300px', left: '407px'});
    writeText("Fight!")
    selectedenemy = 4
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
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

//Attack Button (The real one!)
$("#attack1").click(function() {
    attackanimation();
    setTimeout(function() {damageanimation();}, 500)
    setTimeout(function() {defanimation();}, 1250)
    setTimeout(function() {hitanimation();}, 1750)
    attack()
    atkDisp()
})

//kill buttons (debug/dev purpose only) 
$("#killbtn1").click(function() {
    killEnemy1()
    atkhide()
})

$("#killbtn2").click(function() {
    killEnemy2()
    atkhide()
})

$("#killbtn3").click(function() {
    killEnemy3()
    atkhide()
})

$("#killbtn4").click(function() {
    killEnemy4()
    atkhide()
})

//Attack button
$("#attack").click(function() {
    attack()
}) 

//Hit button
$("#hitanimation").click(function(){
hitanimation()
})

//Atkanim button
$("#atkanimation").click(function(){
    attackanimation()
    })

//Defanim button
$("#defanimation").click(function(){
    defanimation()
    })

//Damage button
$("#damageanimation").click(function(){
    damageanimation()
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


//Hit (player)animation
function hitanimation() {
    chararray[selectedchar].animate({left: '+=32px'}, 75, function (){
        chararray[selectedchar].animate({left: '-=58px'}, 75, function (){
            chararray[selectedchar].animate({left: '+=32px'}, 75, function() {
                chararray[selectedchar].animate({left: '-=13px'}, 75, function () {
                    chararray[selectedchar].animate({left: '+=10px'}, 75, function () {
                        chararray[selectedchar].animate({left: '-=4px'}, 75, function () {
                            chararray[selectedchar].animate({left: '+=2px'}, 75, function () {
                                chararray[selectedchar].animate({left: '-=1px'}, 75, )

                            })

                        })
                    })})})})})}

//Hit (enemy) animation
function damageanimation() {
    chararray[selectedenemy].animate({left: '+=32px'}, 75, function (){
        chararray[selectedenemy].animate({left: '-=58px'}, 75, function (){
            chararray[selectedenemy].animate({left: '+=32px'}, 75, function() {
                chararray[selectedenemy].animate({left: '-=13px'}, 75, function () {
                    chararray[selectedenemy].animate({left: '+=10px'}, 75, function () {
                        chararray[selectedenemy].animate({left: '-=4px'}, 75, function () {
                            chararray[selectedenemy].animate({left: '+=2px'}, 75, function () {
                                chararray[selectedenemy].animate({left: '-=1px'}, 75, )

                            })

                        })
                    })})})})})}


//Attack animation
function attackanimation() {
    chararray[selectedchar].animate({top: '-=20px',}, 60, function() {
        chararray[selectedchar].animate({top: '+=100px'}, 75, function(){
            chararray[selectedchar].animate({top: '-=80px'}, 200)
})})}

//Defend animation
function defanimation() {
    chararray[selectedenemy].animate({top: '+=20px',}, 60, function() {
        chararray[selectedenemy].animate({top: '-=100px'}, 75, function(){
            chararray[selectedenemy].animate({top: '+=80px'}, 200)
})})}

//Animate Attack Button

function atkshow() {
    $("#attack1").animate({left: '657px'}, "fast")
}

function atkhide() {
    $("#attack1").animate({left: '2000'}, "fast")
}