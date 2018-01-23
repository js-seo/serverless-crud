const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:3000/'

describe('Post', function() {
  let postId
  it('Successful creation', function(done) {
    axios.post('post', {
      title: 'My post',
      content: 'Hello world!',
    }).then((res) => {
      console.log(res.data)
      postId = res.data.id
      done()
    }).catch(done)
  })

  it('Successful retrieval', function(done) {
    axios.get(`post/${postId}`)
      .then((res) => {
        console.log(res.data)
        done()
      }).catch(done)
  })

  it('Successful update', function(done) {
    axios.put(`post/${postId}`, {
      title: 'Your post',
      content: 'Bye world!',
    }).then((res) => {
      console.log(res.data)
      done()
    }).catch(done)
  })

  it('Successful listing', function(done) {
    axios.get('post/list')
      .then((res) => {
        console.log(res.data)
        done()
      }).catch(done)
  })

  it('Successful deletion', function(done) {
    axios.delete(`post/${postId}`)
      .then((res) => {
        console.log(res.data)
        done()
      }).catch(done)
  })
})
