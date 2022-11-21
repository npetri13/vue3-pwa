<template>
    <span   class="px-2 py-1 text-xs font-bold text-white rounded-full cursor-pointer select-none bg-lime-800"
            @click="clicked"
    >
    {{ btcString }}
    </span>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"

interface BTCRate {
  code: string
  description: string
  rate: string
  rate_float: number
  symbol: string
}

const btcString = ref<string>("")
let timer: number = 0
let pairs: BTCRate[]

const clicked = () => {
    let obj = pairs.shift()
    if (obj) { pairs.push(obj) }
    refreshString()
}
const refreshString = () => {
    let sym: string = "$"
    let cp = pairs[0]

    if (cp.code == 'USD') { sym = "$" }
    else if (cp.code == 'EUR') { sym = "€" }
    else if (cp.code == 'GBP') { sym = "£" }

    btcString.value = `${sym} ${cp.rate_float.toFixed(2)} (BTC)`
}

const refreshData = () => {

    fetch("https://api.coindesk.com/v1/bpi/currentprice.json",{ cache: "reload" })
    .then(res => res.json())
    .then(json  => {
        let { USD: _usd, EUR: _eur, GBP: _gbp }: {USD: BTCRate, EUR: BTCRate, GBP: BTCRate} = json.bpi
        pairs = []; pairs.push(_usd, _eur, _gbp)        
        console.log(json.bpi.USD)
        refreshString()
    })
    .catch(err => console.warn(err))
}

onMounted(() => {
    refreshData()
    timer = setInterval(() => { refreshData() }, 30_000)
})

onUnmounted(() => { clearInterval(timer) })
</script>