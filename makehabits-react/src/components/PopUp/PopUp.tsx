import Modal from 'react-bootstrap/Modal';
import './PopUp.css';
import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const PopUp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>



      <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
        
        
        <Modal show={show} onHide={handleClose}>

          <article className={"card"}>
        <section className={"date"}>
            <time dateTime="23th feb">
            <span>23</span><span>feb</span>
            </time>
        </section>
        <section className={"card-cont"}>
            <small>dj music event</small>
            <h3>live in sydney</h3>
            <div className={"even-date"}>
            
            <time>
            <span>wednesday 28 december 2014</span>
            <span>08:55pm to 12:00 am</span>
            </time>
            </div>
            <div className={"even-info"}>
            <input className={"input-description"} placeholder='Go run with my homies' />


            </div>
            <button  onClick={handleClose}>
            Save Activities
            </button>
        </section>
        </article>

        </Modal>

    </>
    
  );
}

export default PopUp;
{/*                     

<Modal.Header closeButton>
    <Modal.Title>
    <img className={"card-logo"} src={logoUser} alt="holi"/>    
    <span> Create Activity</span>
    </Modal.Title>
    </Modal.Header>
    <div className={"d-flex m-2"}>
        <svg width="140" height="122" viewBox="0 0 140 122" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M35.1243 121.579C24.63 120.941 19.1437 117.711 16.3258 114.125C16.8659 105.397 18.4307 94.5248 22.8283 84.6583C25.3494 79.0083 28.9272 73.8934 33.3162 70.1337C38.115 65.652 42.5492 62.2036 47.0169 59.3601C55.8356 53.7816 63.5721 51.3515 66.0205 50.4966C68.4969 49.6807 72.9373 48.1469 78.3104 46.439C83.6664 44.8725 90.1537 42.6055 95.6912 39.8338C107.044 34.5319 116.454 28.5487 116.439 28.5465C116.458 28.5487 106.397 33.3112 94.7071 37.2643C88.8087 39.4117 82.7824 40.8235 77.1575 41.9355C71.6221 43.1515 66.9471 44.3896 64.3726 45.2401C59.5586 46.9567 30.7161 54.8392 15.9842 81.2622C12.6519 88.0112 10.562 94.9927 9.20856 101.535C5.87837 99.9292 1.7327 96.8223 0.603418 91.072C-1.36481 81.0533 -0.26969 50.9904 31.6277 34.2903C63.5273 17.5922 99.1412 20.9296 116.185 16.0323C133.226 11.1349 140 0 140 0C140 0 125.798 113.34 35.1243 121.579Z" fill="#E343D3"/> </svg>
        <Stack gap={3}>
            <svg xmlns="http://www.w3.org/2000/svg" width="429" height="79" viewBox="0 0 429 79" fill="none"> <path d="M2.35551 18.6319C-2.93404 10.6554 2.78534 0 12.3564 0H416.501C426.82 0 432.327 12.1606 425.52 19.9157L415.279 31.5843C411.304 36.113 411.304 42.887 415.279 47.4157L425.52 59.0843C432.327 66.8394 426.82 79 416.501 79H12.3564C2.78533 79 -2.93404 68.3446 2.35551 60.3681L11.796 46.1319C14.4615 42.1124 14.4615 36.8876 11.796 32.8681L2.35551 18.6319Z" fill="#CC7CAC"/> </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="429" height="79" viewBox="0 0 429 79" fill="none"> <path d="M2.35551 18.6319C-2.93404 10.6554 2.78534 0 12.3564 0H416.501C426.82 0 432.327 12.1606 425.52 19.9157L415.279 31.5843C411.304 36.113 411.304 42.887 415.279 47.4157L425.52 59.0843C432.327 66.8394 426.82 79 416.501 79H12.3564C2.78533 79 -2.93404 68.3446 2.35551 60.3681L11.796 46.1319C14.4615 42.1124 14.4615 36.8876 11.796 32.8681L2.35551 18.6319Z" fill="#CC7CAC"/> </svg>
        </Stack>
    </div>
    { <Modal.Footer> 
    <div>
        <Button variant="outline-primary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
            Save Changes
        </Button>
    </div>
        </Modal.Footer>  */}




/*         <article className={"card fl-left"}>
        <section className={"date"}>
            <time dateTime="23th feb">
            <span>23</span><span>feb</span>
            </time>
        </section>
        <section className={"card-cont"}>
            <small>dj music event</small>
            <h3>live in sydney</h3>
            <div className={"even-date"}>
            <i className={"fa fa-calendar"}></i>
            <time>
            <span>wednesday 28 december 2014</span>
            <span>08:55pm to 12:00 am</span>
            </time>
            </div>
            <div className={"even-info"}>
            <i className={"fa fa-map-marker"}></i>
            <p>
                nexen square for people australia, sydney
            </p>
            </div>
            <a href="#">tickets</a>
        </section>
        </article> */