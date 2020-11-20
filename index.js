const getRandomMotivation = () => {

    const motivation = ["Najljepsi/sa si", "Imas prelijep glas", "Izgledas naspavano", "Ne dozvoli drugima da te sputavaju"];
    const index = Math.floor(Math.random() * motivation.length )
    console.log(index);
    return motivation[index];
    
}

module.exports = getRandomMotivation;