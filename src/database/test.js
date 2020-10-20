const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');
Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        id:1,
        lat: "-23.4984164",
        lng: "-47.446044",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "39532091",
        images: [
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e68a141d-6024-4e5e-add0-72cd5ab60c88/dcj2x3a-cc7f1d76-d46c-4cfe-84c3-97179ebbb684.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTY4YTE0MWQtNjAyNC00ZTVlLWFkZDAtNzJjZDVhYjYwYzg4XC9kY2oyeDNhLWNjN2YxZDc2LWQ0NmMtNGNmZS04NGMzLTk3MTc5ZWJiYjY4NC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._eWXgNyg8dKo1rgZgJHzIH9R69Md2Wah9UqGAxCuHt0",

            "https://pbs.twimg.com/media/EKE09fQWkAEXwVL.jpg"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de Visitas Das 8h até 18h",
        open_on_weekends: "0"
    })


    //consultar dados da tabela
    const  selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)


    //consultar somente um orfanato pelo id
    const orphanage = await db.all("SELECT * FROM orphanages WHERE id = 3")
    console.log(orphanage)

    //deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanage WHERE id = '4'"))

}) 