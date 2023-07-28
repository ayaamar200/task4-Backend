    var hbs = require ('hbs')

    const express = require('express')
    const app = express()
    const port = process.env.PORT || 3000

    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')    
    app.use (express.static (publicDirectory))

    const viewsDirectory = path.join (__dirname , "../temp1/views" )
    app.set( "views" , viewsDirectory)

    const partialsPath = path.join (__dirname , "../temp1/partials")
    hbs.registerPartials(partialsPath) 

    app.set('view engine', 'hbs');

    app.get('/' , (req , res) => {
        res.render('index' , {
            title: " Weather Forecast Api ",
            desc : "Hey Friend , This is a Weather Forecast api Website ",
            // homeimg: "images/sun.png"
        })
    })

    app.get('/check' , (req , res) => {
        res.render('check' , {
            title : "Today's Weather",
            desc: "See the weather any time of any place in the world..",
            longtitude : 29.871903452398,
            latitude: 26.4941838299718 ,
            Stutas: "Clear ",
            country : "Egypt",
            Temperature : 33.6
        })
    })

//  اخر حاجة فى الكود
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
