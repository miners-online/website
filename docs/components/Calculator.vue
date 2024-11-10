<template>
  <div class="bg-background flex items-center justify-center p-4">
    <Card class="w-full max-w-md">
      <CardHeader>
        <CardTitle class="text-2xl font-bold">Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="bg-secondary p-4 rounded-md mb-4 text-right">
          <p class="text-sm text-secondary-foreground opacity-70">{{ calculation }}</p>
          <p class="text-3xl font-bold text-secondary-foreground">{{ display }}</p>
        </div>
        <div class="grid grid-cols-4 gap-2">
          <Button @click="clear" variant="destructive" class="col-span-2">C</Button>
          <Button @click="backspace" variant="secondary" class="col-span-1"><-</Button>
          <Button @click="setOperation('%')" variant="secondary">%</Button>
          <Button @click="appendNumber('7')" variant="outline">7</Button>
          <Button @click="appendNumber('8')" variant="outline">8</Button>
          <Button @click="appendNumber('9')" variant="outline">9</Button>
          <Button @click="setOperation('/')" variant="secondary">/</Button>
          <Button @click="appendNumber('4')" variant="outline">4</Button>
          <Button @click="appendNumber('5')" variant="outline">5</Button>
          <Button @click="appendNumber('6')" variant="outline">6</Button>
          <Button @click="setOperation('*')" variant="secondary">×</Button>
          <Button @click="appendNumber('1')" variant="outline">1</Button>
          <Button @click="appendNumber('2')" variant="outline">2</Button>
          <Button @click="appendNumber('3')" variant="outline">3</Button>
          <Button @click="setOperation('-')" variant="secondary">-</Button>
          <Button @click="setOperation('!')" variant="outline" class="col-span-1">!</Button>
          <Button @click="appendNumber('0')" variant="outline">0</Button>
          <Button @click="appendDecimal" variant="outline">.</Button>
          <Button @click="calculate" variant="default">=</Button>
          <Button @click="setOperation('+')" variant="secondary">+</Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from 'shadcn-docs-nuxt/components/ui/button/Button.vue';
import Card from 'shadcn-docs-nuxt/components/content/Card.vue';
import CardHeader from 'shadcn-docs-nuxt/components/ui/card/CardHeader.vue';
import CardTitle from 'shadcn-docs-nuxt/components/ui/card/CardTitle.vue';
import CardContent from 'shadcn-docs-nuxt/components/ui/card/CardContent.vue';

const currentNumber = ref<string>('')
const previousNumber = ref<string>('')
const operation = ref('')
const calculationPerformed = ref(false)

const appendNumber = (number: string) => {
  if (calculationPerformed.value) {
    currentNumber.value = number
    calculationPerformed.value = false
  } else {
    currentNumber.value += number
  }
}

const appendDecimal = () => {
  if (calculationPerformed.value) {
    currentNumber.value = '0.'
    calculationPerformed.value = false
  } else if (!currentNumber.value.includes('.')) {
    currentNumber.value += currentNumber.value ? '.' : '0.'
  }
}

const setOperation = (op: string) => {
  if (currentNumber.value !== '') {
    if (previousNumber.value !== '') {
      calculate()
    }
    previousNumber.value = currentNumber.value
    currentNumber.value = ''
  }
  operation.value = op
}

const calculate = () => {
  if (previousNumber.value !== '' && currentNumber.value !== '') {
    const prev = parseFloat(previousNumber.value)
    const current = parseFloat(currentNumber.value)
    let result

    switch (operation.value) {
      case '+':
        result = prev + current
        break
      case '-':
        result = prev - current
        break
      case '*':
        result = prev * current
        break
      case '%':
        result = prev % current
        break
      case '!':
        result = !current
        break
      case '/':
        if (current !== 0) {
          result = prev / current
        } else {
          currentNumber.value = 'Error'
          previousNumber.value = ''
          operation.value = ''
          calculationPerformed.value = true
          return
        }
        break
      default:
        return
    }

    currentNumber.value = result.toString()
    previousNumber.value = ''
    operation.value = ''
    calculationPerformed.value = true
  }
}

const clear = () => {
  currentNumber.value = ''
  previousNumber.value = ''
  operation.value = ''
  calculationPerformed.value = false
}

const backspace = () => {
  currentNumber.value = currentNumber.value.slice(0, -1)
}

const display = computed(() => {
  return currentNumber.value || '0'
})

const calculation = computed(() => {
  if (previousNumber.value && operation.value) {
    return `${previousNumber.value} ${operation.value} ${currentNumber.value}`
  }
  return ''
})
</script>