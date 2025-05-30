import { describe, it, expect } from 'vitest'
import { _makePostDetailRequest } from './postService'



const mocked_fetch = () => {
    return
}


describe('Details Request', () => {
    it('is made correctly', () => {
        const expectedResult =`
  query {
  post(id:"42"){
    title
    author {
      name
    }
    picture{url}
    content{json}
  }
}
`
        const queryToBeTested = _makePostDetailRequest(42)
        expect(queryToBeTested).toEqual(expectedResult)
    })
})