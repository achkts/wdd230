document.getElementById("timestamp").value = new Date().getTime();

document.getElementById("membership").addEventListener("input", (e) => {
    const desc = document.getElementById("membershipDesc");
   const selected = e.target.value
   if(selected === "Non Profit" ) {
    desc.textContent = "Free Billboard placments"
   } else if(selected === "Bronze" ) {
    desc.textContent = "Billboard placements - $30"
   } else if(selected === "Silver" ) {
    desc.textContent = " Billboard placements - $50"
   } else if(selected === "Gold" ) {
    desc.textContent = "Billboard placements - $100"
   } else {
    desc.textContent = ""
   }

})