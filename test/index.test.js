const { expect } = require('chai')
const HttpError = require('../index')

describe('HttpError', () => {
  let code = null
  let message = null
  let statusCode = null

  beforeEach(() => {
    code = 'WRONG'
    message = 'Error description message'
    statusCode = 404
  })

  function sut () {
    return new HttpError(code, message, statusCode)
  }

  it('should be a subclass of Error', () => {
    expect(sut()).to.be.an.instanceOf(Error)
  })

  it('should set proper error name', () => {
    const error = sut()
    expect(error.name).to.equal('HttpError')
  })

  it('should set given error code', () => {
    const error = sut()
    expect(error.code).to.equal(code)
  })

  it('should set given error message', () => {
    const error = sut()
    expect(error.message).to.equal(message)
  })

  it('should set given http status code', () => {
    statusCode = 404
    const error = sut()
    expect(error.status).to.equal(404)
  })

  it('should throw an error with code, message and statusCode', () => {
    try {
      throw sut()
    } catch (err) {
      expect(err).to.deep.include({
        name: 'HttpError',
        code: 'WRONG',
        message: 'Error description message',
        status: 404
      })
    }
  })

  describe('defaults', () => {
    beforeEach(() => {
      code = undefined
      message = undefined
      statusCode = undefined
    })

    it('should set http 400 status code', () => {
      const error = sut()
      expect(error.status).to.equal(400)
    })

    it('should have empty string for code', () => {
      const error = sut()
      expect(error.code).to.equal('')
    })

    it('should have empty string for message', () => {
      const error = sut()
      expect(error.message).to.equal('')
    })
  })
})
