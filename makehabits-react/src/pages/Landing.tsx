import './Landing.scss';
import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import logoUser from '../assets/logo-user.png';
const Landing = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    
    <div className="container-fluid text-center text-light">
        <div className="row vh-100">
        
            <header style={{backgroundColor: "lightcoral"}} className="col-9 border border-white">
                <nav className={"d-flex landing--navbar justify-content-between"}>
                    <div className={"d-flex align-items-center logo"}>
                        <svg className={"logo--svg"} width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect y="1" width="22" height="22" rx="4" fill="#BFABCB"/> <path d="M0 5C0 2.79086 1.79086 1 4 1H18C20.2091 1 22 2.79086 22 5V9H0V5Z" fill="#8D89A6"/> <g clipPath="url(#clip0_15_81)"> <path d="M8.50888 20.1679C7.75928 20.1146 7.3674 19.8444 7.16613 19.5445C7.20471 18.8145 7.31648 17.9053 7.63059 17.0801C7.81067 16.6076 8.06623 16.1799 8.37973 15.8654C8.7225 15.4906 9.03923 15.2022 9.35835 14.9644C9.98826 14.4979 10.5409 14.2946 10.7157 14.2231C10.8926 14.1549 11.2098 14.0266 11.5936 13.8838C11.9762 13.7528 12.4396 13.5632 12.8351 13.3314C13.646 12.888 14.3181 12.3876 14.3171 12.3874C14.3184 12.3876 13.5998 12.7859 12.7648 13.1165C12.3435 13.2961 11.913 13.4142 11.5112 13.5072C11.1159 13.6088 10.7819 13.7124 10.598 13.7835C10.2542 13.9271 8.19401 14.5863 7.14173 16.7961C6.90371 17.3606 6.75443 17.9444 6.65775 18.4915C6.41988 18.3573 6.12376 18.0974 6.0431 17.6165C5.90251 16.7787 5.98074 14.2644 8.25912 12.8678C10.5377 11.4713 13.0815 11.7504 14.2989 11.3408C15.5162 10.9312 16 10 16 10C16 10 14.9855 19.4788 8.50888 20.1679Z" fill="white"/> </g> <path d="M7.6 4.5V6.01H7.885V4.5H8.36V8H7.885V6.475H7.6V8H7.125V4.965H7.05L7.1 4.5H7.6ZM8.98496 8H8.50996L8.77996 4.965H8.68996L8.73996 4.5H9.65496L9.96496 8H9.48996L9.43496 7.4H9.03996L8.98496 8ZM9.07996 6.935H9.39496L9.23996 5.195L9.07996 6.935ZM10.1127 8.035V4.965H10.0377L10.0877 4.5H10.8777C11.0177 4.5 11.131 4.54333 11.2177 4.63C11.3044 4.71333 11.3477 4.825 11.3477 4.965V6.015C11.3477 6.06167 11.341 6.10667 11.3277 6.15C11.4077 6.23667 11.4477 6.34667 11.4477 6.48V7.57C11.4477 7.71 11.3944 7.82333 11.2877 7.91C11.1844 7.99333 11.0627 8.035 10.9227 8.035H10.1127ZM10.8477 4.965H10.5877V6.015H10.8477C10.8644 6.015 10.8727 6.00667 10.8727 5.99V4.99C10.8727 4.97333 10.8644 4.965 10.8477 4.965ZM10.9477 6.48H10.5877V7.57H10.9477C10.9644 7.57 10.9727 7.56167 10.9727 7.545V6.505C10.9727 6.48833 10.9644 6.48 10.9477 6.48ZM11.6709 8V4.965H11.5959L11.6459 4.5H12.1459V8H11.6709ZM12.2953 4.965V4.5H13.6703V4.965H13.2203V8H12.7453V4.965H12.2953ZM14.2986 7V7.53C14.2986 7.54667 14.307 7.555 14.3236 7.555H14.5236C14.5403 7.555 14.5486 7.54667 14.5486 7.53V6.63L14.1536 6.455C14.1236 6.445 14.082 6.42833 14.0286 6.405C13.9753 6.37833 13.927 6.34 13.8836 6.29C13.8436 6.24 13.8236 6.17167 13.8236 6.085V4.945C13.8236 4.805 13.867 4.69333 13.9536 4.61C14.0403 4.52333 14.1536 4.48 14.2936 4.48H14.5536C14.6936 4.48 14.807 4.52333 14.8936 4.61C14.9803 4.69333 15.0236 4.805 15.0236 4.945V5.685L14.5486 5.645V4.97C14.5486 4.95333 14.5403 4.945 14.5236 4.945H14.3236C14.307 4.945 14.2986 4.95333 14.2986 4.97V6.015L14.6936 6.19C14.7236 6.20333 14.7653 6.22167 14.8186 6.245C14.872 6.26833 14.9186 6.305 14.9586 6.355C15.002 6.405 15.0236 6.47333 15.0236 6.56V7.555C15.0236 7.695 14.9803 7.80833 14.8936 7.895C14.807 7.97833 14.6936 8.02 14.5536 8.02H14.2936C14.1536 8.02 14.0403 7.97833 13.9536 7.895C13.867 7.80833 13.8236 7.695 13.8236 7.555V7H14.2986Z" fill="white"/> <circle cx="4.5" cy="3.5" r="1.5" fill="white"/> <circle cx="18.5" cy="3.5" r="1.5" fill="white"/> <path d="M3.5 1C3.5 0.447715 3.94772 0 4.5 0C5.05228 0 5.5 0.447715 5.5 1V2V3.38197C5.5 3.76074 5.286 4.107 4.94721 4.27639C4.66569 4.41716 4.33431 4.41716 4.05279 4.27639C3.714 4.107 3.5 3.76074 3.5 3.38197V3V2V1Z" fill="#F2D5F8"/> <path d="M3.5 1C3.5 0.447715 3.94772 0 4.5 0C5.05228 0 5.5 0.447715 5.5 1V2V3.38197C5.5 3.76074 5.286 4.107 4.94721 4.27639C4.66569 4.41716 4.33431 4.41716 4.05279 4.27639C3.714 4.107 3.5 3.76074 3.5 3.38197V3V2V1Z" stroke="black"/> <path d="M17.5 1C17.5 0.447715 17.9477 0 18.5 0C19.0523 0 19.5 0.447715 19.5 1V2V3.38197C19.5 3.76074 19.286 4.107 18.9472 4.27639C18.6657 4.41716 18.3343 4.41716 18.0528 4.27639C17.714 4.107 17.5 3.76074 17.5 3.38197V3V2V1Z" fill="#F2D5F8"/> <path d="M17.5 1C17.5 0.447715 17.9477 0 18.5 0C19.0523 0 19.5 0.447715 19.5 1V2V3.38197C19.5 3.76074 19.286 4.107 18.9472 4.27639C18.6657 4.41716 18.3343 4.41716 18.0528 4.27639C17.714 4.107 17.5 3.76074 17.5 3.38197V3V2V1Z" stroke="black"/> <defs> <clipPath id="clip0_15_81"> <rect width="10" height="10.1679" fill="white" transform="translate(6 10)"/> </clipPath> </defs> </svg>
                        <div className={"logo--title"}>MAKE HABITS</div>
                    </div>

                    <div className={"nav--schedule"}>
                        <div className={"d-flex"}><span>My Schedule</span></div>
                        <div className={"d-flex align-items-center"}>
                            <span className={""}> 02 - 08 March</span>
                            <div className={"d-flex ps-3 gap-1"}>
                                <button className={"button-arrow"}> A</button>
                                <button className={"button-arrow"}> B</button>
                            </div>
                        </div>
                    
                    {/* 
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.33333 1.16666L1.5 7.58332L7.33333 14" stroke="#7D8DA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                          
                            
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.66666 13.8333L7.5 7.41668L1.66666 1.00001" stroke="#7D8DA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                            </button> */}
                    
                    </div>
                </nav>

                <div className={"landing--calendar"}>
                    <div>
                        
                    </div>

                </div>
            </header>



            <div style={{backgroundColor: "blue"}} className="landing--sidebar col-3 border border-white ">
                 
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.5 11H16.5" stroke="#0177FB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M11 16.5V5.5" stroke="#0177FB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                
            <span>New Activity</span>
                        <Button variant="primary" onClick={handleShow}>
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                        <article className={"card fl-left"}>
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
                        </article>
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
                        </Modal>
            </div>
            
        </div>
    </div>
    );
};

export default Landing;


 /*  SIDEBAR LEFT */ 
/* 
    <div style={{backgroundColor: "pink"}} className="col-2 ">
  <div style={{backgroundColor: "pink"}} className="col-12 p-3 d-flex flex-row justify-content-between align-items-center sidebar-card">
      <div className={"d-flex landing landing-logo justify-content-center align-items-center "}>
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect y="1" width="22" height="22" rx="4" fill="#BFABCB"/> <path d="M0 5C0 2.79086 1.79086 1 4 1H18C20.2091 1 22 2.79086 22 5V9H0V5Z" fill="#8D89A6"/> <g clipPath="url(#clip0_15_81)"> <path d="M8.50888 20.1679C7.75928 20.1146 7.3674 19.8444 7.16613 19.5445C7.20471 18.8145 7.31648 17.9053 7.63059 17.0801C7.81067 16.6076 8.06623 16.1799 8.37973 15.8654C8.7225 15.4906 9.03923 15.2022 9.35835 14.9644C9.98826 14.4979 10.5409 14.2946 10.7157 14.2231C10.8926 14.1549 11.2098 14.0266 11.5936 13.8838C11.9762 13.7528 12.4396 13.5632 12.8351 13.3314C13.646 12.888 14.3181 12.3876 14.3171 12.3874C14.3184 12.3876 13.5998 12.7859 12.7648 13.1165C12.3435 13.2961 11.913 13.4142 11.5112 13.5072C11.1159 13.6088 10.7819 13.7124 10.598 13.7835C10.2542 13.9271 8.19401 14.5863 7.14173 16.7961C6.90371 17.3606 6.75443 17.9444 6.65775 18.4915C6.41988 18.3573 6.12376 18.0974 6.0431 17.6165C5.90251 16.7787 5.98074 14.2644 8.25912 12.8678C10.5377 11.4713 13.0815 11.7504 14.2989 11.3408C15.5162 10.9312 16 10 16 10C16 10 14.9855 19.4788 8.50888 20.1679Z" fill="white"/> </g> <path d="M7.6 4.5V6.01H7.885V4.5H8.36V8H7.885V6.475H7.6V8H7.125V4.965H7.05L7.1 4.5H7.6ZM8.98496 8H8.50996L8.77996 4.965H8.68996L8.73996 4.5H9.65496L9.96496 8H9.48996L9.43496 7.4H9.03996L8.98496 8ZM9.07996 6.935H9.39496L9.23996 5.195L9.07996 6.935ZM10.1127 8.035V4.965H10.0377L10.0877 4.5H10.8777C11.0177 4.5 11.131 4.54333 11.2177 4.63C11.3044 4.71333 11.3477 4.825 11.3477 4.965V6.015C11.3477 6.06167 11.341 6.10667 11.3277 6.15C11.4077 6.23667 11.4477 6.34667 11.4477 6.48V7.57C11.4477 7.71 11.3944 7.82333 11.2877 7.91C11.1844 7.99333 11.0627 8.035 10.9227 8.035H10.1127ZM10.8477 4.965H10.5877V6.015H10.8477C10.8644 6.015 10.8727 6.00667 10.8727 5.99V4.99C10.8727 4.97333 10.8644 4.965 10.8477 4.965ZM10.9477 6.48H10.5877V7.57H10.9477C10.9644 7.57 10.9727 7.56167 10.9727 7.545V6.505C10.9727 6.48833 10.9644 6.48 10.9477 6.48ZM11.6709 8V4.965H11.5959L11.6459 4.5H12.1459V8H11.6709ZM12.2953 4.965V4.5H13.6703V4.965H13.2203V8H12.7453V4.965H12.2953ZM14.2986 7V7.53C14.2986 7.54667 14.307 7.555 14.3236 7.555H14.5236C14.5403 7.555 14.5486 7.54667 14.5486 7.53V6.63L14.1536 6.455C14.1236 6.445 14.082 6.42833 14.0286 6.405C13.9753 6.37833 13.927 6.34 13.8836 6.29C13.8436 6.24 13.8236 6.17167 13.8236 6.085V4.945C13.8236 4.805 13.867 4.69333 13.9536 4.61C14.0403 4.52333 14.1536 4.48 14.2936 4.48H14.5536C14.6936 4.48 14.807 4.52333 14.8936 4.61C14.9803 4.69333 15.0236 4.805 15.0236 4.945V5.685L14.5486 5.645V4.97C14.5486 4.95333 14.5403 4.945 14.5236 4.945H14.3236C14.307 4.945 14.2986 4.95333 14.2986 4.97V6.015L14.6936 6.19C14.7236 6.20333 14.7653 6.22167 14.8186 6.245C14.872 6.26833 14.9186 6.305 14.9586 6.355C15.002 6.405 15.0236 6.47333 15.0236 6.56V7.555C15.0236 7.695 14.9803 7.80833 14.8936 7.895C14.807 7.97833 14.6936 8.02 14.5536 8.02H14.2936C14.1536 8.02 14.0403 7.97833 13.9536 7.895C13.867 7.80833 13.8236 7.695 13.8236 7.555V7H14.2986Z" fill="white"/> <circle cx="4.5" cy="3.5" r="1.5" fill="white"/> <circle cx="18.5" cy="3.5" r="1.5" fill="white"/> <path d="M3.5 1C3.5 0.447715 3.94772 0 4.5 0C5.05228 0 5.5 0.447715 5.5 1V2V3.38197C5.5 3.76074 5.286 4.107 4.94721 4.27639C4.66569 4.41716 4.33431 4.41716 4.05279 4.27639C3.714 4.107 3.5 3.76074 3.5 3.38197V3V2V1Z" fill="#F2D5F8"/> <path d="M3.5 1C3.5 0.447715 3.94772 0 4.5 0C5.05228 0 5.5 0.447715 5.5 1V2V3.38197C5.5 3.76074 5.286 4.107 4.94721 4.27639C4.66569 4.41716 4.33431 4.41716 4.05279 4.27639C3.714 4.107 3.5 3.76074 3.5 3.38197V3V2V1Z" stroke="black"/> <path d="M17.5 1C17.5 0.447715 17.9477 0 18.5 0C19.0523 0 19.5 0.447715 19.5 1V2V3.38197C19.5 3.76074 19.286 4.107 18.9472 4.27639C18.6657 4.41716 18.3343 4.41716 18.0528 4.27639C17.714 4.107 17.5 3.76074 17.5 3.38197V3V2V1Z" fill="#F2D5F8"/> <path d="M17.5 1C17.5 0.447715 17.9477 0 18.5 0C19.0523 0 19.5 0.447715 19.5 1V2V3.38197C19.5 3.76074 19.286 4.107 18.9472 4.27639C18.6657 4.41716 18.3343 4.41716 18.0528 4.27639C17.714 4.107 17.5 3.76074 17.5 3.38197V3V2V1Z" stroke="black"/> <defs> <clipPath id="clip0_15_81"> <rect width="10" height="10.1679" fill="white" transform="translate(6 10)"/> </clipPath> </defs> </svg>
      </div>
      <div className={"landing-title"}>Make Habits</div>
  </div>
  <div className={"d-flex justify-content-evenly align-items-center sidebar-card p-3"}>
      <div className={""}>
          <img className={"card-logo"} src={logoUser} alt="holi"/>
      </div>
      <div className={""} >
          <div className={"card-title"}>Victor Jamet</div>
          <div className={"card-subtitle"}>Pro Member</div>
      </div>
  </div>
  <ul>
      <li className={"dashboard"}>
          <a href="">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2693 23.9805H13.7128C13.3199 23.9805 13.0013 23.662 13.0013 23.2686V11.2309C13.0013 10.8375 13.3199 10.5189 13.7128 10.5189H23.2693C23.6625 10.5189 23.981 10.8375 23.981 11.2309V23.2686C23.9813 23.662 23.6625 23.9805 23.2693 23.9805ZM14.4242 22.5569H22.5576V11.9425H14.4242V22.5569Z" fill="black"/>
                  <path d="M23.2693 8.82963H13.7128C13.3199 8.82963 13.0013 8.51109 13.0013 8.11796V1.69191C13.0013 1.29852 13.3199 0.97998 13.7128 0.97998H23.2693C23.6625 0.97998 23.981 1.29852 23.981 1.69191V8.11821C23.9813 8.51109 23.6625 8.82963 23.2693 8.82963ZM14.4242 7.40628H22.5576V2.40333H14.4242V7.40628Z" fill="black"/>
                  <path d="M10.6001 13.3534H1.69266C1.29953 13.3534 0.980988 13.0348 0.980988 12.6417V1.69191C0.980988 1.29852 1.29953 0.97998 1.69266 0.97998H10.6001C10.9933 0.97998 11.3118 1.29852 11.3118 1.69191V12.6419C11.3118 13.0348 10.9933 13.3534 10.6001 13.3534ZM2.40409 11.93H9.88819V2.40334H2.40409V11.93Z" fill="black"/>
                  <path d="M10.6001 23.9805H1.69266C1.29953 23.9805 0.980988 23.662 0.980988 23.2686V15.7546C0.980988 15.3615 1.29953 15.0429 1.69266 15.0429H10.6001C10.9933 15.0429 11.3118 15.3615 11.3118 15.7546V23.2688C11.3118 23.662 10.9933 23.9805 10.6001 23.9805ZM2.40409 22.5569H9.88819V16.4663H2.40409V22.5569Z" fill="black"/>
              </svg>
              <span>Dashboard</span>
          </a>
      </li>
      <li className={"schedule"}>
          <a href="">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#0177FB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.50999" stroke="#0177FB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>
          <span>Schedule</span>
          </a>
      </li>
      <li>
          <a href="">
              <span>Activities</span>

          </a>
      </li>
      <li>
          <a href="">
              <span>Places</span>
          </a>
      </li>
  </ul>
</div> */


/* SIDEBAR CSS */
/* 



div svg{
    max-width: 32px;
} 
.landing-logo{
    padding: 0.25rem;
}
.landing-title{
    font-size: 17px;
    font-weight: 500;
}
.sidebar-card{
    border-bottom: 2px solid #DFE5F1;
    border-radius: 1px;
}
.card-logo{
    width: 32px;
    height: 32px;
    border-radius: 30px;
}
.card-title{
    color: black;
    font-weight: 700;
}
.card-subtitle{
    font-size: 14px;
    color: #A5B4CB;
    font-weight: 500;
}

.rotate{
    transform: rotate(180deg);
}
.hola{
    display: inline-block;
    gap: 1rem;
}
.nobreak{
    white-space: nowrap; 
}
.button-arrow{
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background-color: hsla(217, 19%, 57%, 0.1);
    border: none !important;
}
.arrow{
    width: 13px;
    
}

.arrow path{
    color: #7D8DA6;
}
 */