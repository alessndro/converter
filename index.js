/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Initlialize variables
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const resultLength = document.getElementById("result-length")
const resultVolume = document.getElementById("result-volume")
const resultMass = document.getElementById("result-mass")


// Get input from user when convert button clicked and render this amount
convertBtn.addEventListener("click", function()
{
    const amountToConvert = inputEl.value
    render(amountToConvert)
})

// Transform input in proper values for Length, Volume and Mass
function render(amount)
{    
     // Length 1 meter = 3.281 feet
     const amountMeterFeet = amount * 3.281
     const amountFeetMeter = amount / 3.281
     resultLength.textContent = `${amount} meters = ${amountMeterFeet.toFixed(3)} feet || ${amount} feet = ${amountFeetMeter.toFixed(3)} meters`
     
     
     // 1 liter = 0.264 gallon
     const amountLiterGallon = amount * 0.264
     const amountGallonLiter = amount / 0.264
     resultVolume.textContent = `${amount} liter = ${amountLiterGallon.toFixed(3)} Gallon || ${amount} Gallon = ${amountGallonLiter.toFixed(3)} Liter`
     
     // 1 kilogram = 2.204 pound
     const amountKiloPound = amount * 2.204
     const amountPoundKilo = amount / 2.204
     resultMass.textContent = `${amount} liter = ${amountKiloPound.toFixed(3)} Gallon || ${amount} Gallon = ${amountPoundKilo.toFixed(3)} Liter`
     
}
