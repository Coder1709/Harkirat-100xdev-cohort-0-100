const express = require ( "express");
const app = express();

var users = [ {
    name : "Arpit",
    kidneys : [ {
        healthy : false
    }
]
}];

app.get("/" ,function(req,res) {

    const kidneys = users[0].kidneys;


    let numberofkidney = kidneys.length;

    let numberofHealthyKidney = 0;

    for ( let i = 0 ; i < numberofkidney  ; i++ ) {
        if ( kidneys[i].healthy){
            numberofHealthyKidney = numberofHealthyKidney+1;

        }
    }
    
    let numberofUnHealthyKidney = numberofkidney-numberofHealthyKidney;

    res.json ({
        
        numberofkidney,
        numberofHealthyKidney,
        numberofUnHealthyKidney

    })

});


app.listen(3000);


