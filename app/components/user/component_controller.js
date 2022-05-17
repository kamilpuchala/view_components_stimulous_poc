import {Controller} from "stimulus"

export default class extends Controller {
  static targets = [ "userList" ]

  remove(event) {
  	console.log('koko')
    let confirmed = confirm('Are you sure?')

    if(!confirmed) {
      event.preventDefault()
    }
  }
}