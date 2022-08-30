module.exports = {
    HOST:"localhost",

    USER :"postgres",

    PASSWORD:"bisma1234",

    DB:'postgres',

    dialect :"postgres",
    
    pool : {
        max:9,
        min:0,
        acquire :30000,
        idle: 10000
    }
}