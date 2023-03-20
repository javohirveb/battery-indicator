navigator.getBattery().then(battery => {
   let percentage = document.querySelector(".percentage")
   let percent = document.querySelector(".percent")
   let isCharging = document.querySelector(".isCharging")
   let dichargeTimeEl = document.getElementById('dischargeTime');

   function updateAllBatteryInfo() {
      updateLevelInfo()
      updateChargeInfo()
      updateDisChargingTime()
   }

   updateAllBatteryInfo()

   function updateLevelInfo() {
      if (battery.level * 100 <= 100 && battery.level * 100 > 70) {
         percentage.style.background = 'green'
      } else if (battery.level * 100 <= 70 && battery.level * 100 > 40) {
         percentage.style.background = 'yellow'
      } else if (battery.level * 100 <= 40 && battery.level * 100 > 15) {
         percentage.style.background = 'rgb(251, 96, 0)'
      } else {
         percentage.style.background = 'red'
      }

      percentage.style.width = battery.level * 100 + "%"
      percent.innerHTML = battery.level * 100 + "%"
   }

   function updateChargeInfo() {
      isCharging.innerHTML = battery.charging ? "Your device charging..." : ""
   }

   function updateDisChargingTime() {
      dichargeTimeEl.textContent = `${Math.trunc(battery.dischargingTime / 3600)} hour ${Math.trunc(Math.trunc(battery.dischargingTime % 3600) / 60)} minute`;
   }

   battery.addEventListener('levelchange', () => {
      updateLevelInfo()
   })

   battery.addEventListener('chargingchange', () => {
      updateChargeInfo()
   })

   battery.addEventListener('dischargingtimechange', () => {
      updateDisChargingTime()
   })
})
