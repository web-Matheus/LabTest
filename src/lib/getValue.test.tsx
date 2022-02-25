import {getValue} from './getValue'

describe('getValue',()=>{
    it('should respect ',()=>{
        expect(getValue(-10,-5,10)).toBe(-5)
    })
})