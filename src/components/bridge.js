import axios from 'axios';

const bridge = {
  listProducts: (page = null, count = null) => axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/',
    headers: { Authorization: process.env.GIT_API_KEY },
    params: { page, count },
  }),
  productInformation: (productId) => axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/`,
    headers: { Authorization: process.env.GIT_API_KEY },
  }),
  productStyles: (productId) => axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles/`,
    headers: { Authorization: process.env.GIT_API_KEY },
  }),
  relatedProducts: (productId) => axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/related/`,
    headers: { Authorization: process.env.GIT_API_KEY },
  }),
  listReviews: (productId, page = null, count = null, sort = null) => axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
    headers: { Authorization: process.env.GIT_API_KEY },
    params: {
      product_id: productId,
      page,
      count,
      sort,
    },
  }),
  reviewsMeta: (productId) => axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/',
    headers: { Authorization: process.env.GIT_API_KEY },
    params: { product_id: productId },
  }),
  // addReview still needs work!!!
  // addReview: (productId, rating = 0, summary = '', body = '', recommend = false,
  // name = '', email = '', photos = '', characteristics = {}) => axios({
  //   method: 'post',
  //   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews`,
  //   headers: {Authorization: process.env.GIT_API_KEY},
  //   params: {productId, rating, summary, body, recommend, name, email, photos, characteristics}
  // }),
  markReviewHelpful: (reviewId) => axios({
    method: 'put',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews',
    headers: { Authorization: process.env.GIT_API_KEY },
    params: { reviewId },
  }),
  questions: (productid, count = 50) => axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/`,
    headers: {'Authorization': process.env.GIT_API_KEY},
    params: {product_id: productid, count}
  }),
  answers: (questionid, count = 100) => axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionid}/answers`,
    headers: {'Authorization': process.env.GIT_API_KEY},
    params: {question_id: questionid, count}
  }),
  putQuestionHelpful: (questionid) => axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionid}/helpful`,
    headers: {'Authorization': process.env.GIT_API_KEY},
    params: {question_id: questionid}
  }),
  postQuestion: (data) => axios({
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`,
    headers: {'Authorization': process.env.GIT_API_KEY},
    responseType: 'json',
    params: {
      body: data.body,
      name: data.name,
      email: data.email,
      product_id: data.productid}
  })

};

export default bridge;
