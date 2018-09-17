import { Model } from '@cocker/core/model'

class User extends Model {
  private username
  private password

  

  translate() {

  }

  convert() {
    return {
      username: this.username,
      password: this.password

    }
  }
}