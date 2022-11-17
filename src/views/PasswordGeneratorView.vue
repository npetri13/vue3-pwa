<template>
  <div class="flex flex-col h-full">
    <div class="flex items-center justify-center h-full">
      
      <div class="flex flex-col">
        <div class="p-5 rounded shadow-xl shadow-slate-400 bg-slate-900 w-[300px]">

          <div class="p-2 my-2 font-bold text-center text-gray-100">Password Generator</div>

          <OutputField :output="password" />
          
          <div class="my-3">
            <div class="inline-flex items-center justify-start text-sm text-white gap-x-3 px-2.5 py-0.5 rounded-full bg-slate-800">
              <div>Password Length</div>
              <div>{{ passwordLength }}</div>
            </div>
            <RangeField v-model="passwordLength" :min=5 :max=12 />
            <div class="my-2">
              <CheckBox name="uppercase" v-model="includeUppercase">Include Uppercase</CheckBox>
              <CheckBox name="numbers" v-model="includeNumbers">Include Numbers</CheckBox>
              <CheckBox name="symbols" v-model="includeSymbols">Include Symbols</CheckBox>
              <StrengthField :value="password"/>
            </div>
          </div>
        </div>
        <div class="mt-4 text-xs text-slate-600">This is small app is inspired by 
          <a href="https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh" target="_blank">frontendmentor.io</a>.</div>
      </div>



    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import RangeField from '@/components/passwordgeneratorview/RangeField.vue'
import CheckBox from '@/components/passwordgeneratorview/CheckBox.vue'
import StrengthField from '@/components/passwordgeneratorview/StrengthField.vue'
import OutputField from '@/components/passwordgeneratorview/OutputField.vue'

const emit = defineEmits(['newTitle'])
onMounted(() => {
  emit('newTitle', 'Password Generator')
})

const passwordLength = ref<number>(6);
const includeUppercase = ref<boolean>(true)
const includeNumbers = ref<boolean>(false)
const includeSymbols = ref<boolean>(false)

const password = ref<string>("")

const ch: string[] = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(',')
const chu: string[] = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(',')
const sym: string[] = ",!,§,$,%,&,/,(,),=,?,*,+,~,#,;,:,.,-,_".split(',')
const num: string[] = "0,1,2,3,4,5,6,7,8,9".split(',')

let seed: string[] = ch

onMounted(() => {
  generateSeed()
  password.value = generatePassword()
})

watch(passwordLength, () => { password.value = generatePassword() })
watch([includeUppercase, includeNumbers, includeSymbols], () => {
  generateSeed()
  password.value = generatePassword()
})

const generatePassword = (): string => {
  let s: string = ""
  for (let i = 0; i < passwordLength.value; i++)
  {
    s += seed[Math.floor(Math.random() * seed.length)]
  }
  return s
}

const generateSeed = (): void =>  {
  seed = ch
  if (includeUppercase.value) { seed = seed.concat(chu) }
  if (includeNumbers.value) { seed = seed.concat(num) }
  if (includeSymbols.value) { seed = seed.concat(sym) }
}

</script>
