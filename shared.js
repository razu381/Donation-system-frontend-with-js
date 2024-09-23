function addDonation(cardId){
    let amount = parseFloat(document.querySelector(`${cardId} .input`).value) 
    if(amount > 0 && !isNaN(amount) && amount <= total_balance){
        amount_noakhali += amount;
        document.querySelector(`${cardId} .local-money-field #amount`).innerText = amount_noakhali

        total_balance -= amount;
        document.querySelector(`header .total-money-field #total-amount`).innerText = total_balance
        //show the success modal
        document.querySelector("#donation_success_modal").showModal()
        displayHistory(cardId)
        document.querySelector(`${cardId} .input`).value = ""

    }else{
        document.querySelector("#donation_fail_modal").showModal()
        return
    }
    
}


function displayHistory(cardId){
    let amount = parseFloat(document.querySelector(`${cardId} .input`).value)
    let title = document.querySelector(`${cardId} .donation-title`).innerText

    const currentDate = new Date();
    const bdFormat = currentDate.toLocaleString('en-US', {
    timeZone: 'Asia/Dhaka',
    timeZoneName: 'short',
    hour12: true
    });

    let div = document.createElement('div')
    div.classList.add("border", "border-black", "border-opacity-10","p-8", "rounded-2xl", "mb-6")
    div.innerHTML = `<h1>${amount} Taka is Donated for ${title}</h1>
                <p class="font-light text-base">
                     Date : ${bdFormat}
                </p>`
    

    document.querySelector(".history-container").appendChild(div)
}