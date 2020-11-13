const SIR_model = require('./sir_translate')

// document.onkeydown = function(e) {
//     switch (e.keyCode) {
//         case 65:
//             document.getElementById('A').onplay()
//             break
//         default:
//             console.log("Key not found")
//     }
// }

document.getElementById("sub_button").onclick = () => {
    var name = document.getElementById("entrybox").value
    // console.log(name)
    document.getElementById("output").innerHTML = "hello " + name
}


document.getElementById("submit_SIR").onclick = () => {
    var s = document.getElementById("s").value
    var i = document.getElementById("i").value
    var r = document.getElementById("r").value
    var beta = document.getElementById("beta").value
    var gamma = document.getElementById("gamma").value

    // assuming time is 50
    let sim_1 = new SIR_model(s,i,r,beta,gamma,50)
    let result = sim_1.main_function()
    console.log(result)

}