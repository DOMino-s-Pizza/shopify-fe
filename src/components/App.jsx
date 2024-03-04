import React, { useState, useEffect } from 'react';
import Overview from './productDetails/Overview.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers.jsx';
import bridge from './bridge';

function App() {
  const [productId, setProductId] = useState(0);
  // FOR TESTING
  // ------------------------------------------
  // const [results, setResults] = useState(null);

  // useEffect(() => {
  //   console.log(`api key = ${process.env.GIT_API_KEY}`);
  //   bridge.listReviews(40355)
  //   .then(results => {
  //     setResults(results);
  //   bridge.reviewsMeta(40355)
  //   bridge.questionsAnswers(40355)
  //   .then(results => {
  //     setResults(results.data);
  //     // setResults(results);
  //     console.log(results.data)
  //   });
  // }, [productId]);

  // useEffect(() => console.log(JSON.stringify(results)), [results]);
  // ------------------------------------------

  // SETTING STATE FOR PRODUCTID
  useEffect(() => {
    bridge.listProducts()
      .then((results) => setProductId(results.data[0].id));
  }, []);

  return (
    <div>
      HELLO =D
      <Overview bridge={bridge} />
      {/* removed states and hooks */}
      <RelatedItems productId={productId} bridge={bridge} setProductId={setProductId} />
      <QuestionsAnswers bridge={bridge} />
      <RatingsAndReviews productId={40345} bridge={bridge} />
    </div>
  );
}

export default App;
