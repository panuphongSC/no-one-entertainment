import { useEffect, useState } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import './App.scss';

function App() {

  const [youtubeData, setYoutubeData] = useState({});
  const [youtubeDataSPD, setYoutubeDataSPD] = useState({});
  const [youtubeDataCL, setYoutubeDataCL] = useState({});
  const [subscribers, setSubscribers] = useState();
  const [subscribersSPD, setSubscribersSPD] = useState();
  const [subscribersCL, setSubscribersCL] = useState();

  const getProfileEung = () => {
    fetch('https://api.socialcounts.org/youtube-live-subscriber-count/search/u.u%20eung')
    .then(response => response.json())
    .then(data => setYoutubeData(data.items[0]))
    .catch(error => console.log(error))
  }

  const getProfileSPD = () => {
    fetch('https://api.socialcounts.org/youtube-live-subscriber-count/search/SpriteDer%20SPD')
    .then(response => response.json())
    .then(data => setYoutubeDataSPD(data.items[0]))
    .catch(error => console.log(error))
  }

  const getProfileCreamLike = () => {
    fetch('https://api.socialcounts.org/youtube-live-subscriber-count/search/CreamLike')
    .then(response => response.json())
    .then(data => setYoutubeDataCL(data.items[0]))
    .catch(error => console.log(error))
  }

  const fetchDataEung = async () => {
    await fetch('https://api.socialcounts.org/youtube-live-subscriber-count/UCi26j0zxFoRNpE5a4DBP7RA')
        .then(response => response.json())
        .then(data => setSubscribers(data.est_sub))
        .catch(error => console.log(error))
    setTimeout(fetchDataEung, 5000);
  };

  const fetchDataSPD = async () => {
    await fetch('https://api.socialcounts.org/youtube-live-subscriber-count/UCiHQ5AywCFKF6q-C5dIguVQ')
        .then(response => response.json())
        .then(data => setSubscribersSPD(data.est_sub))
        .catch(error => console.log(error))
    setTimeout(fetchDataSPD, 5000);
  };

  const fetchDataCreamLike = async () => {
    await fetch('https://api.socialcounts.org/youtube-live-subscriber-count/UCyMtgFdVBkxCs7bi2jwcemQ')
        .then(response => response.json())
        .then(data => setSubscribersCL(data.est_sub))
        .catch(error => console.log(error))
    setTimeout(fetchDataCreamLike, 5000);
  };

  useEffect(() => {
    getProfileEung();
    getProfileSPD();
    getProfileCreamLike();
    fetchDataEung();
    fetchDataSPD();
    fetchDataCreamLike()
  }, []);

  const numberWithCommas = (x) => {
    // console.log(x);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <div className="uu-bg">
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <h1 className='head-title'>No1 Entertainment</h1>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Img variant="top" src={youtubeDataSPD.banner} alt={youtubeDataSPD.title} />
                <Card.Body>
                  <div className='avatar-box'>
                    <img src={youtubeDataSPD.avatar} alt={youtubeDataSPD.title} />
                  </div>
                  <h2 className='channel-name'>
                    {youtubeDataSPD.title}
                  </h2>
                  <span>
                    ยอดผู้ติดตาม <br /><span className='channel-subscriber'>{subscribersSPD ? numberWithCommas(subscribersSPD) : 0}</span>
                  </span><br />
                  <span>
                    นับถอยหลังสู่เป้าหมาย <span className='channel-subscriber'>20M</span> ผู้ติดตาม<br/>
                    {
                      parseInt(subscribersSPD) >= 20000000 ? (<>
                        <span className='channel-subscriber'>Congratulations</span>
                      </>) : (<>
                        <span className='channel-subscriber'>{ numberWithCommas(20000000 - parseInt(subscribersSPD)) }</span>
                      </>)
                    }
                  </span>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Img variant="top" src={youtubeData.banner} alt={youtubeData.title} />
                <Card.Body>
                  <div className='avatar-box'>
                    <img src={youtubeData.avatar} alt={youtubeData.title} />
                  </div>
                  <h2 className='channel-name'>
                    {youtubeData.title}
                  </h2>
                  <span>
                    ยอดผู้ติดตาม <br /><span className='channel-subscriber'>{ subscribers ? numberWithCommas(subscribers) : 0}</span>
                  </span><br />
                  <span>
                    นับถอยหลังสู่เป้าหมาย <span className='channel-subscriber'>1M</span> ผู้ติดตาม<br/>
                    {
                      parseInt(subscribers) >= 1000000 ? (<>
                        <span className='channel-subscriber'>Congratulations</span>
                      </>) : (<>
                        <span className='channel-subscriber'>{ numberWithCommas(1000000 - parseInt(subscribers)) }</span>
                      </>)
                    }
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card className="text-center">
                <Card.Img variant="top" src={youtubeDataCL.banner} alt={youtubeDataCL.title} />
                <Card.Body>
                  <div className='avatar-box'>
                    <img src={youtubeDataCL.avatar} alt={youtubeDataCL.title} />
                  </div>
                  <h2 className='channel-name'>
                    {youtubeDataCL.title}
                  </h2>
                  <span>
                    ยอดผู้ติดตาม <br /><span className='channel-subscriber'>{subscribersCL ? numberWithCommas(subscribersCL) : 0}</span>
                  </span><br />
                  <span>
                    นับถอยหลังสู่เป้าหมาย <span className='channel-subscriber'>1M</span> ผู้ติดตาม<br/>
                    {
                      parseInt(subscribersCL) >= 1000000 ? (<>
                        <span className='channel-subscriber'>Congratulations</span>
                      </>) : (<>
                        <span className='channel-subscriber'>{ numberWithCommas(1000000 - parseInt(subscribersCL)) }</span>
                      </>)
                    }
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        
        {/* <h1>SpriteDer SPD 15M Roadmap { 15000000 - parseInt(subscribersSPD) } Subscribers</h1>
        <h1>U.U eung 1M Roadmap { 1000000 - parseInt(subscribers) } Subscribers</h1>
        <h1>CreamLike 500K Roadmap { 500000 - parseInt(subscribersCL) } Subscribers goto 1M Roadmap { 1000000 - parseInt(subscribersCL) } Subscribers</h1> */}
      </div>
    </>
  );
}

export default App;
