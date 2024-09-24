let total_balance = 5500
let  amount_noakhali = 0.00;
let  amount_feni = 0.00;
let  amount_quota = 0.00;

//Toggle button for donation and history section
document.querySelector(".history-container").classList.add('hidden')
//donation listener
document.querySelector("#donation-display").addEventListener('click',function(e) {
    document.querySelector(".cards-container").classList.remove('hidden')
    document.querySelector(".history-container").classList.add('hidden')

    //changing button styles
    document.querySelector("#donation-display").classList = ""
    document.querySelector("#donation-display").classList.add("btn", "bg-green", "mr-5", "text-xl", "font-semibold")

    document.querySelector("#history-display").classList = ""
    document.querySelector("#history-display").classList.add("btn","bg-transparent", "border", "border-[#111111]", "border-opacity-30", "font-medium")

})


//history listener
document.querySelector("#history-display").addEventListener('click',function(e) {
    document.querySelector(".history-container").classList.remove('hidden')
    document.querySelector(".cards-container").classList.add('hidden')

    //adding buttons styles
    
    document.querySelector("#history-display").classList = ""
    document.querySelector("#history-display").classList.add("btn", "bg-green", "ml-5", "text-xl", "font-semibold")

    document.querySelector("#donation-display").classList = ""
    document.querySelector("#donation-display").classList.add( "btn", "bg-transparent", "border", "border-[#111111]", "border-opacity-30", "font-medium")
})


//Event listerner for Noakhali donation
document.querySelector("#noakhali-submit").addEventListener('click',function(e) {
    e.preventDefault()
    addDonation("card-noakhali")
    
})
//Event listerner for feni donation
document.querySelector("#feni-submit").addEventListener('click',function(e) {
    e.preventDefault()
    addDonation("card-feni")
})
//Event listerner for quota movement
document.querySelector("#quota-submit").addEventListener('click',function(e) {
    e.preventDefault()
    addDonation("card-quota")
})