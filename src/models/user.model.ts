import { Model } from '@cocker/core/model'

class User extends Model {
  private username
  private password

  private user

  public translate(data) {
    this.user = data.user
  }

  public convert() {
    return {
      username: this.username,
      password: this.password

    }
  }
}