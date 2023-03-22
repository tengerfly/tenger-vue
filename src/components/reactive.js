import { isObject } from '@/shared/index'
export const reactive = function(target){
    if(!isObject) {
        return target
    }
    console.log('target', target)
    return target
}
