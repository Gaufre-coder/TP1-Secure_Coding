import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import { User } from '...'

chai.use(chaiAsPromised)

describe('User', function () {
  before(async function () {
    // TODO: initialise the datasource (database connection)
  })
    
  beforeEach(async function () {
    // TODO: drop the content of the user table between each it().
  })

  describe('validations', function () {
    it('should create a new User in database')

    it('should raise error if email is missing', async function () {
      // hint to check if a promise fails with chai + chai-as-promise:
      // await chai.expect(promise).to.eventually.be.rejectedWith(QueryFailedError, "message")
    })
  })
})