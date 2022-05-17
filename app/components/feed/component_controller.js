import {Controller} from "stimulus"
import consumer from "channels/consumer";

export default class extends Controller {
   static targets = ["micropostList"]

  connect() {
    consumer.subscriptions.create("MicropostFeedChannel",
      {
        received: (data) => {
          $(this.micropostListTarget).prepend(data.content)
        }
     })
  }

  remove(event) {
    let confirmed = confirm('Are you sure?')

    if(!confirmed) {
      event.preventDefault()
    }
  }
}