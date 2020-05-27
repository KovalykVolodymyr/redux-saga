import { CREATE_POST } from "./types"
import { showAlert } from "./action"

const spamWords = ['php','spam', 'Jjava']

export function spamWordsMiddleware({dispatch}){

  return function (next) {
    return function(action){
      if(action.type === CREATE_POST){
        const found  = spamWords.filter(word => action.payload.title.includes(word))
        if(found.length){
          return dispatch (showAlert('This post is spam'))
        }
      }
      return next(action)
    }
  }
}