
import DropdownUserLib from "../../Lib/AntLib/DropdownUserLib/DropdownUserLib";

import "./NavBar.scss";

const NavBar = ({ previousWeek, nextWeek }) => {
  return (
    <header className="header">
      <div className="header--weekview">
        <div className="weekview--logo">
          <div className="logo-wrapper">
          <svg width="75" height="67" viewBox="0 0 75 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d_463_346)"> <path d="M4 27H71V52C71 55.866 67.866 59 64 59H11C7.13401 59 4 55.866 4 52V27Z" fill="#FAA4BD"/> <path d="M32.2686 53C30.6945 52.8899 29.8715 52.3318 29.4489 51.7125C29.5299 50.2049 29.7646 48.327 30.4242 46.6228C30.8024 45.6469 31.3391 44.7634 31.9974 44.114C32.7173 43.3399 33.3824 42.7443 34.0525 42.2531C35.3753 41.2896 36.5358 40.8698 36.9031 40.7222C37.2745 40.5812 37.9406 40.3163 38.7466 40.0213C39.55 39.7507 40.5231 39.3591 41.3537 38.8804C43.0566 37.9646 44.4681 36.9311 44.4659 36.9308C44.4687 36.9311 42.9596 37.7538 41.2061 38.4366C40.3213 38.8075 39.4174 39.0513 38.5736 39.2434C37.7433 39.4534 37.0421 39.6673 36.6559 39.8142C35.9338 40.1107 31.6074 41.4722 29.3976 46.0362C28.8978 47.2019 28.5843 48.4078 28.3813 49.5378C27.8818 49.2605 27.2599 48.7239 27.0905 47.7306C26.7953 46.0001 26.9595 40.8074 31.7442 37.9229C36.5291 35.0387 41.8712 35.6151 44.4277 34.7692C46.984 33.9233 48 32 48 32C48 32 45.8696 51.5769 32.2686 53Z" fill="white"/> <path d="M4 11.02C4 8.81085 5.79086 7.01999 8 7.01999H67C69.2091 7.01999 71 8.81085 71 11.02V27H4V11.02Z" fill="#533B4D"/> <path d="M31.25 23.1429V17.0729H31.1L31.2 16.1429H32.76L33.24 19.9129L33.73 16.1429H35.26V23.1429H34.31V17.7029L33.57 22.1429H32.92L32.2 17.8229V23.1429H31.25ZM36.5129 23.1429H35.5629L36.1029 17.0729H35.9229L36.0229 16.1429H37.8529L38.4729 23.1429H37.5229L37.4129 21.9429H36.6229L36.5129 23.1429ZM36.7029 21.0129H37.3329L37.0229 17.5329L36.7029 21.0129ZM38.8184 23.1429V17.0729H38.6684L38.7684 16.1429H39.7684V18.0929L40.6384 16.1429H41.6884L40.4284 18.9629L41.7884 23.1429H40.7384L39.7684 20.1629V23.1429H38.8184ZM44.261 22.2129L44.181 23.1429H41.991V17.0729H41.841L41.941 16.1429H44.261L44.161 17.0729H42.941V19.1729H44.061L43.961 20.1029H42.941V22.2129H44.261Z" fill="white"/> <ellipse cx="12.5" cy="11.5714" rx="3.5" ry="3.42857" fill="white"/> <ellipse cx="63.5" cy="11" rx="3.5" ry="4" fill="white"/> <path d="M10.5 3.4434C10.5 2.37009 11.3701 1.5 12.4434 1.5C13.5167 1.5 14.3868 2.37009 14.3868 3.4434V7.22222V12.1035C14.3868 12.7678 14.0475 13.3861 13.4871 13.7428C12.8503 14.1482 12.0365 14.1482 11.3997 13.7428C10.8393 13.3861 10.5 12.7678 10.5 12.1035V10.3333V7.22222V4.11111V3.4434Z" fill="#FAA4BD" stroke="url(#paint0_linear_463_346)"/> <path d="M61.5 2.4434C61.5 1.37009 62.3701 0.5 63.4434 0.5C64.5167 0.5 65.3868 1.37009 65.3868 2.4434V6.22222V11.1035C65.3868 11.7678 65.0475 12.3861 64.4871 12.7428C63.8503 13.1482 63.0365 13.1482 62.3997 12.7428C61.8393 12.3861 61.5 11.7678 61.5 11.1035V9.33333V6.22222V3.11111V2.4434Z" fill="#FAA4BD" stroke="url(#paint1_linear_463_346)"/> </g> <defs> <filter id="filter0_d_463_346" x="0" y="0" width="75" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_463_346"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_463_346" result="shape"/> </filter> <linearGradient id="paint0_linear_463_346" x1="12.4434" y1="1" x2="12.4434" y2="15" gradientUnits="userSpaceOnUse"> <stop stop-color="#FAA4BD"/> <stop offset="0.255208" stop-color="#533B42" stop-opacity="0"/> <stop offset="0.723958" stop-color="#533B4D" stop-opacity="0.3"/> </linearGradient> <linearGradient id="paint1_linear_463_346" x1="63.4434" y1="0" x2="63.4434" y2="14" gradientUnits="userSpaceOnUse"> <stop stop-color="#FAA4BD"/> <stop offset="0.255208" stop-color="#533B42" stop-opacity="0"/> <stop offset="0.723958" stop-color="#533B4D" stop-opacity="0.3"/> </linearGradient> </defs> </svg>

            </div>
          <h1>MAKE HABITS</h1>
        </div>

        <div className="weekview-slider">
          <div className="schedule"> My Schedule</div>
          <div className="slider">
            <span>02-07 March</span>
            <div className="slider__buttons">
              <button onClick={previousWeek}>
                {" "}
                <span className="back">
                  <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg" > {" "} <path d="M7.33331 1.16666L1.49998 7.58332L7.33331 14" stroke="#7D8DA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />{" "}
                  </svg>
                </span>
              </button>
              <button onClick={nextWeek}>
                <span className="next"> <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg" > {" "} <path d="M1.66669 13.8333L7.50002 7.41668L1.66669 1.00001" stroke="#7D8DA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />{" "} </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header--user">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" > <path d="M160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v22q81 17 130.5 83.5T720-564v304h80v60H160Zm320-302Zm0 422q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM300-260h360v-304q0-75-52.5-127.5T480-744q-75 0-127.5 52.5T300-564v304Z" /> </svg>
        <DropdownUserLib />
      </div>
    </header>
  );
};

export default NavBar;
