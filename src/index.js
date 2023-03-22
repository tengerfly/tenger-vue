import { reactive } from './components/reactive';

const target = reactive({
    a: 1,
    b: 2
})
console.log('target', target)