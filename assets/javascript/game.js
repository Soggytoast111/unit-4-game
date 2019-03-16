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
var charHealth = [0, 750, 500, 300, 500]
var charAtk = [0, 25, 20, 5, 1]
var charEA = [0, 20, 25, 17, 1]
var attackgrow = [0, 2, 3, 10, 2]


//player attack
var playerattack = 1

//player health
var lifePoint = 1

//enemy health
var enemyPoint = 1

//Character Select Arrays
var chararray = [0, character1, character2, character3, character4]

writeText("Select your character!")
healthint()
atkinit()
definit()

//On Click events for all divs
character1.click(function(){
    if (state == 0) {
    character1.animate({left: '407px'});
    character2.animate({top: '400px', left: '407px'});
    character3.animate({top: '400px', left: '100px'});
    character4.animate({top: '400px', left: '714px'});
    selectedchar = 1
    setplayerattack()
    state++
    lifePoint = charHealth[selectedchar]
    writeText("Select your enemy!")
    playcharsound("king","chosen")
    }    

    else if (state == 1 && selectedchar == 2) {
    character3.animate({top: '700px', left: '100px'});
    character4.animate({top: '700px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 1
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("king","chosen")
    }
    
    else if (state == 1 && selectedchar == 3) {
    character2.animate({top: '700px', left: '100px'});
    character4.animate({top: '700px', left: '325px'});
    character1.animate({left: '407px'});
    writeText("Fight!")
    selectedenemy = 1
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("king","chosen")
    }
    
    else if (state == 1 && selectedchar == 4) {
    character2.animate({top: '700px', left: '100px'});
    character3.animate({top: '700px', left: '325px'});
    character1.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 1
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("king","chosen")
    }

    else if (state == 3|| state == 5  && selectedchar != 1) {
    character1.animate({top: '400px', left: '407px'});
    writeText("Fight!")
    selectedenemy = 1
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("king","chosen")
    }
})

character2.click(function(){
    if (state == 0) {
    character2.animate({left: '407px'});
    character1.animate({top: '400px', left: '407px'});
    character3.animate({top: '400px', left: '100px'});
    character4.animate({top: '400px', left: '714px'});
    selectedchar = 2
    setplayerattack()
    lifePoint = charHealth[selectedchar]
    state++
    writeText("Select your enemy!")
    playcharsound("trump","chosen")
    }   

    else if (state == 1 && selectedchar == 1) {
    character3.animate({top: '700px', left: '100px'});
    character4.animate({top: '700px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 2
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("trump","chosen")
    }

    else if (state == 1 && selectedchar == 3) {
    character1.animate({top: '700px', left: '100px'});
    character4.animate({top: '700px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 2
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("trump","chosen")
    }

    else if (state == 1 && selectedchar == 4) {
    character1.animate({top: '700px', left: '100px'});
    character3.animate({top: '700px', left: '325px'});
    writeText("Fight!")
    selectedenemy = 2
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("trump","chosen")
    }

    else if (state == 3|| state == 5  && selectedchar != 2) {
    character2.animate({top: '400px', left: '407px'});
    writeText("Fight!")
    selectedenemy = 2
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("trump","chosen")
    }
})

character3.click(function(){
    if (state == 0) {
    character3.animate({left: '407px', top: '150px'});
    character2.animate({top: '400px', left: '407px'});
    character1.animate({top: '400px', left: '100px'});
    character4.animate({top: '400px', left: '714px'});
    selectedchar = 3
    setplayerattack()
    lifePoint = charHealth[selectedchar]
    state++
    writeText("Select your enemy!")
    playcharsound("squid","chosen")
    }    

    else if (state == 1 && selectedchar == 2) {
    character1.animate({top: '700px', left: '100px'});
    character4.animate({top: '700px', left: '325px'});
    character3.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 3
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("squid","chosen")
    }
        
    else if (state == 1 && selectedchar == 1) {
    character2.animate({top: '700px', left: '100px'});
    character4.animate({top: '700px', left: '325px'});
    character3.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 3
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("squid","chosen")
    }
        
    else if (state == 1 && selectedchar == 4) {
    character1.animate({top: '700px', left: '100px'});
    character2.animate({top: '700px', left: '325px'});
    character3.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 3
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("squid","chosen")
    }

    else if (state == 3|| state == 5  && selectedchar != 3) {
    character3.animate({top: '400px', left: '407px'});
    writeText("Fight!")
    selectedenemy = 3
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("squid","chosen")
    }

})

character4.click(function(){
    if (state == 0) {
    character4.animate({left: '407px', top: '150px'});
    character2.animate({top: '400px', left: '407px'});
    character1.animate({top: '400px', left: '100px'});
    character3.animate({top: '400px', left: '714px'});
    selectedchar = 4
    setplayerattack()
    lifePoint = charHealth[selectedchar]
    state++
    writeText("Select your enemy!")
    playcharsound("neg","chosen")
    }

    else if (state == 1 && selectedchar == 2) {
    character3.animate({top: '700px', left: '100px'});
    character1.animate({top: '700px', left: '325px'});
    character4.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 4
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("neg","chosen")
    }
            
    else if (state == 1 && selectedchar == 1) {
    character3.animate({top: '700px', left: '100px'});
    character2.animate({top: '700px', left: '325px'});
    character4.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 4
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("neg","chosen")
    }
            
    else if (state == 1 && selectedchar == 3) {
    character1.animate({top: '700px', left: '100px'});
    character2.animate({top: '700px', left: '325px'});
    character4.animate({left: '407px'})
    writeText("Fight!")
    selectedenemy = 4
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("neg","chosen")
    }

    else if (state == 3|| state == 5 && selectedchar != 4) {
    character4.animate({top: '400px', left: '407px'});
    writeText("Fight!")
    selectedenemy = 4
    enemyPoint = charHealth[selectedenemy]
    state++
    atkshow()
    playcharsound("neg","chosen")
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
    playcharsound("king", "die")
    writeText("Enemy defeated!  Who to fight next?")
    }

    else if (state == 6) {
    character1.hide()
    character1.animate({top: '2000px', right: '2000px'})
    playcharsound("king", "die")
    winGame()
    }

}

function killEnemy2() {
    if (state == 2 || state == 4) {
    character2.hide()
    character2.animate({top: '2000px', right: '2000px'})
    state++
    playcharsound("trump", "die")
    writeText("Enemy defeated!  Who to fight next?")
    }

    else if (state == 6) {
    character2.hide()
    character2.animate({top: '2000px', right: '2000px'})
    playcharsound("trump", "die")
    winGame()
    }

}

function killEnemy3() {
    if (state == 2 || state == 4) {
    character3.hide()
    character3.animate({top: '2000px', right: '2000px'})
    state++
    playcharsound("squid", "die")
    writeText("Enemy defeated!  Who to fight next?")
    }

    else if (state == 6) {
    character3.hide()
    character3.animate({top: '2000px', right: '2000px'})
    playcharsound("squid", "die")
    winGame()
    }
    
}


function killEnemy4() {
    if (state == 2 || state == 4) {
    character4.hide()
    character4.animate({top: '2000px', right: '2000px'})
    state++
    playcharsound("neg", "die")
    writeText("Enemy defeated!  Who to fight next?")
    }

    else if (state == 6) {
    character4.hide()
    character4.animate({top: '2000px', right: '2000px'})
    playcharsound("neg", "die")
    winGame()
    }

}
var disable = 0

//Attack Button (The real one!)
$("#attack1").click(function() {
    if (disable == 0){
        disable = 1
        attackanimation();
        playcharsound(charpickarray[selectedchar], "attack")
        setTimeout(function() {damageanimation();}, 500)
        setTimeout(function() {playatksound();}, 50)
        setTimeout(function() {defanimation();}, 1250)
        setTimeout(function() {playatksound();}, 1250)
        setTimeout(function() {hitanimation();}, 1750)
        setTimeout(function() {disable=0}, 3000)
        attack()
        atkDisp()
        setTimeout(function() {atkcalc();}, 1750)
        atkgrow()
        if (enemyPoint <=0) {
            killarray[selectedenemy]()
            setTimeout(function() {document.getElementById("atksound").pause()}, 55)
            setTimeout(function() {document.getElementById("atksound").pause()}, 1755)
        }

        else if (lifePoint <=0) {
            loseGame ()
        }
    }

})

//kill buttons (debug/dev purpose only) 

var killarray = [0, killEnemy1, killEnemy2, killEnemy3, killEnemy4]
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
var charfix = [0, "king", "trump", "squid", "neg"]

function winGame () {
    writeText("A winner is you!")
    playcharsound(charfix[selectedchar], "win")
    document.getElementById("music").pause()
    document.getElementById("music").src = "assets/Sounds/music/win.mp3"
    document.getElementById("music").play()
    $("#reset").show()
}

//Lose the game
function loseGame () {
    writeText ("You lose!")
    playcharsound(charfix[selectedchar], "die")
    document.getElementById("music").pause()
    document.getElementById("music").src = "assets/Sounds/music/death.mp3"
    document.getElementById("music").play()
}

//Attacking scripts
function attack() {
lifePoint = lifePoint - charEA[selectedenemy]
enemyPoint = enemyPoint - playerattack
setTimeout(function() {atkDisp();}, 1750)
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


//music
var musicarray = ["assets/Sounds/music/music1.mp3", "assets/Sounds/music/music2.mp3"]
var musicstate = 0

function playmusic() {
    var rand = Math.floor(Math.random() * musicarray.length);
    document.getElementById("music").src = musicarray[rand]
    document.getElementById("music").play()
    musicstate=1
}

$("#bodycontainer").click(function() {
    if (musicstate==0) {
        playmusic()
    }
})

//atk sounds
var atksounds = ["assets/Sounds/atk/attack.mp3", "assets/Sounds/atk/attack2.mp3"]

function playatksound() {
    var rand = Math.floor(Math.random() * atksounds.length);
    document.getElementById("atksound").src = atksounds[rand]
    document.getElementById("atksound").play()
}

//char sounds
function playcharsound(char, type) {
    document.getElementById("charsound").src = "assets/Sounds/"+char+"/"+type+".mp3"
    document.getElementById("charsound").play()
}

var charpickarray = [0, "king", "trump", "squid", "neg"]


//Initialize heath
function healthint() {
    $("#kingheart").html(charHealth[1])
    $("#trumpheart").html(charHealth[2])
    $("#squidheart").html(charHealth[3])
    $("#negheart").html(charHealth[4])
}

var heartarray = [0, $("#kingheart"), $("#trumpheart"), $("#squidheart"), $("#negheart")]

function atkcalc() {
    heartarray[selectedchar].html(lifePoint)
    heartarray[selectedenemy].html(enemyPoint)
}

//Initialize attacks
function atkinit() {
    $("#kinga").html(charAtk[1])
    $("#trumpa").html(charAtk[2])
    $("#squida").html(charAtk[3])
    $("#nega").html(charAtk[4])
}

function definit() {
    $("#kingd").html(charEA[1])
    $("#trumpd").html(charEA[2])
    $("#squidd").html(charEA[3])
    $("#negd").html(charEA[4])
}

var atkarray = [0, $("#kinga"), $("#trumpa"), $("#squida"), $("#nega")]
function atkgrow() {
    playerattack = playerattack + attackgrow[selectedchar]
    atkarray[selectedchar].html(playerattack)
}

function setplayerattack() {
    playerattack = charAtk[selectedchar]
}



$("#reset").click(function(){
    healthint()
    atkinit()
    definit()
    state = 0
    selectedchar = 0
    selectedenemy = 0
    character1.show()
    character1.animate({top: '150px', left: '100px'})
    character2.show()
    character2.animate({top: '150px', left: '550px'})
    character3.show()
    character3.animate({top: '400px', left: '100px'})
    character4.show()
    character4.animate({top: '400px', left: '550px'})
    playmusic()
    $("#reset").hide()
})