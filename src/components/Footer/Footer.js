import React from 'react';
import { Link } from 'react-router-dom';

import MarvelLogo from '../../assets/marvel-logo.png';
import {
  FooterSection,
  FooterNavigation,
  FooterColumn,
  FooterColumnItem,
  MediaSection,
  MediaColumn,
  MediaColumnItem,
  FooterLogo,
} from './styles';
import { Wrapper } from '../shared';
import { Dropdown } from './Dropdown';

export const Footer = () => (
  <FooterSection>
    <Wrapper>
      <FooterNavigation>
        <FooterColumn>
          <Dropdown title="comics">
            <FooterColumnItem>
              <Link to="/release-calendar">Release calendar</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/marvel-unlimited">Marvel unlimited</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/digital-shop/redeem">Redeem Digital Copy</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/digital-shop/catalog">Shop Digital Comics</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/subcriptions">Print Subscriptions</Link>
            </FooterColumnItem>
          </Dropdown>
        </FooterColumn>
        <FooterColumn>
          <Dropdown title="characters">
            <FooterColumnItem>
              <Link to="/series/spiderman">Spider-Man</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/serioes/avengers">Avengers</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/series/ironman">Iron Man</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/series/doctor-strange">Doctor Strange</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/series/captain-america">Captain America</Link>
            </FooterColumnItem>
          </Dropdown>
        </FooterColumn>
        <FooterColumn>
          <Dropdown title="characters">
            <FooterColumnItem>
              <Link to="/marvel-hq">Marvel HQ</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/kids-games">Kids Games</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/kids-videos">Kids Videos</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/kids-activities">Kids Activities</Link>
            </FooterColumnItem>
          </Dropdown>
        </FooterColumn>
        <FooterColumn>
          <Dropdown title="marvel">
            <FooterColumnItem>
              <Link to="/signup">Sign up</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/marvel-mastercard">Marvel Mastercard</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/marvel-insider">Marvel Insider</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/faq">Help/FAQs</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/preferences">Email Preferences</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/about">About Marvel</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/advertisement">Ad</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/internships">Internships</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/careers">Careers</Link>
            </FooterColumnItem>
          </Dropdown>
        </FooterColumn>
        <FooterColumn>
          <Dropdown title="insider">
            <FooterColumnItem>
              <Link to="/join">Join Today</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/">Home</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/activities">Activites</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/rewards">Rewards</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/member-profile">Member Profile</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/faqa">FAQa</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link to="/terms-of-use">Marvel Insider Terms of Use</Link>
            </FooterColumnItem>
          </Dropdown>
        </FooterColumn>
      </FooterNavigation>
      <MediaSection>
        <FooterLogo src={MarvelLogo} />
        <h2 hidden>Social Profiles</h2>
        <MediaColumn>
          <MediaColumnItem>
            <a href="http://www.facebook.com/Marvel">
              <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <desc>Created with Sketch.</desc>
                <defs />
                <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="1Home" transform="translate(-1124.000000, -2484.000000)" fillRule="nonzero">
                    <g id="Group-16" transform="translate(0.000000, 2266.000000)">
                      <g id="Group-14" transform="translate(1124.000000, 85.000000)">
                        <g id="logo-facebook" transform="translate(0.000000, 133.000000)">
                          <path
                            d="M23,24 C23.552285,24 24,23.552285 24,23 L24,1 C24,0.447715 23.552285,0 23,0 L1,0 C0.447715,0 0,0.447715 0,1 L0,23 C0,23.552285 0.447715,24 1,24 L23,24 Z"
                            id="White_4_"
                            fill="#39579A"
                          />
                          <path
                            d="M12.759585,24 L12.759585,14.5 L9.5,14.5 L9.5,11 L12.759585,11 L12.759585,8.41269 C12.759585,5.312805 14.65289,3.62486 17.4182,3.62486 C18.74281,3.62486 19.881245,3.72348 20.21302,3.76756 L20.21302,7.00712 L18.29513,7.00799 C16.7912,7.00799 16.5,7.722635 16.5,8.771325 L16.5,11 L20,11 L19.5,14.5 L16.5,14.5 L16.5,24 L12.759585,24 Z"
                            id="White_2_"
                            fill="#FFFFFF"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </MediaColumnItem>
          <MediaColumnItem>
            <a href="https://plus.google.com/+marvel/posts">
              <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <desc>Created with Sketch.</desc>
                <defs />
                <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="1Home" transform="translate(-1164.000000, -2484.000000)">
                    <g id="Group-16" transform="translate(0.000000, 2266.000000)">
                      <g id="Group-14" transform="translate(1124.000000, 85.000000)">
                        <g id="Group-10" transform="translate(40.000000, 133.000000)">
                          <rect id="Rectangle-3-Copy-3" fill="#DE4D3B" x="0" y="0" width="24" height="24" />
                          <g
                            id="logo-google-plus"
                            transform="translate(4.000000, 6.000000)"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                          >
                            <polygon
                              id="Shape"
                              points="16.4571429 5.14285714 15.0857143 5.14285714 15.0857143 3.77142857 13.7142857 3.77142857 13.7142857 5.14285714 12.3428571 5.14285714 12.3428571 6.51428571 13.7142857 6.51428571 13.7142857 7.88571429 15.0857143 7.88571429 15.0857143 6.51428571 16.4571429 6.51428571"
                            />
                            <path
                              d="M11.3324091,5.145912 L6.17142857,5.14285714 L6.17142857,7.2 L9.120744,7.2 C8.96157943,8.07066171 8.089704,9.65888571 5.82857143,9.65888571 C3.83851886,9.65888571 2.21484343,8.01022629 2.21484343,5.97857143 C2.21484343,3.94691314 3.83851886,2.29825371 5.82857143,2.29825371 C6.96098057,2.29825371 7.71868114,2.781192 8.15168914,3.19749943 L9.73372114,1.67377029 C8.71786971,0.724512 7.40227543,0.150003429 5.82857143,0.150003429 C2.606208,0.150003429 0,2.756208 0,5.97857486 C0,9.20093486 2.606208,11.8071463 5.82857143,11.8071463 C9.83848114,11.8071463 11.9039349,8.478864 11.3324091,5.145912 Z"
                              id="Shape"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </MediaColumnItem>
          <MediaColumnItem>
            <a href="https://twitter.com/#!/marvel">
              <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <desc>Created with Sketch.</desc>
                <defs />
                <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="1Home" transform="translate(-1204.000000, -2484.000000)">
                    <g id="Group-16" transform="translate(0.000000, 2266.000000)">
                      <g id="Group-14" transform="translate(1124.000000, 85.000000)">
                        <g id="Group-13" transform="translate(80.000000, 133.000000)">
                          <rect id="Rectangle-3-Copy-2" fill="#69ACE0" x="0" y="0" width="24" height="24" />
                          <g
                            id="logo-twitter"
                            transform="translate(4.000000, 5.000000)"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                          >
                            <path
                              d="M17,1.81099938 C16.374531,2.08838979 15.7023723,2.27590688 14.9968085,2.360195 C15.7169427,1.92856146 16.2699669,1.24504104 16.5303537,0.430595833 C15.8564879,0.830290625 15.1100604,1.12055146 14.3155938,1.27698333 C13.6793829,0.599108333 12.7729358,0.175553333 11.769826,0.175553333 C9.84356667,0.175553333 8.28196792,1.73715563 8.28196792,3.66323083 C8.28196792,3.93661563 8.31281583,4.20276833 8.37226271,4.45805875 C5.47362104,4.31262021 2.90368146,2.92408854 1.18346563,0.813956458 C0.883245625,1.32908833 0.711272917,1.92819667 0.711272917,2.56738604 C0.711272917,3.77739292 1.32702,4.84493625 2.26285229,5.47040521 C1.69113167,5.45231083 1.15334729,5.29539375 0.683091875,5.03415333 C0.6828475,5.04872729 0.682794375,5.06330479 0.682794375,5.07799917 C0.682794375,6.76788417 1.88502021,8.1775525 3.48056938,8.49793875 C3.18787896,8.577605 2.8797575,8.62023958 2.56168396,8.62023958 C2.33693688,8.62023958 2.11844792,8.59837688 1.90548396,8.55769021 C2.34932208,9.94331063 3.6373625,10.9517081 5.16356583,10.9798856 C3.96989667,11.9152965 2.46604125,12.4728717 0.831994167,12.4728717 C0.550470625,12.4728681 0.272835833,12.4563533 0,12.4241667 C1.54350792,13.4137367 3.37679146,13.9911098 5.34640437,13.9911098 C11.7616873,13.9911098 15.2697648,8.6765875 15.2697648,4.06765729 C15.2697648,3.91644938 15.2663683,3.76603479 15.2596852,3.61647021 C15.9410806,3.12472042 16.5324221,2.51042542 17,1.81099938 Z"
                              id="Shape"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </MediaColumnItem>
          <MediaColumnItem>
            <a href="http://marvelentertainment.tumblr.com/">
              <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <desc>Created with Sketch.</desc>
                <defs />
                <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="1Home" transform="translate(-1244.000000, -2484.000000)" fillRule="nonzero">
                    <g id="Group-16" transform="translate(0.000000, 2266.000000)">
                      <g id="Group-14" transform="translate(1124.000000, 85.000000)">
                        <g id="logo-tumblr" transform="translate(120.000000, 133.000000)">
                          <path
                            d="M22,24 L2,24 C0.89543,24 0,23.10457 0,22 L0,2 C0,0.89543 0.89543,0 2,0 L22,0 C23.10457,0 24,0.89543 24,2 L24,22 C24,23.10457 23.10457,24 22,24 Z"
                            id="Shape"
                            fill="#35465D"
                          />
                          <path
                            d="M15.78,16.00785 C15.501675,16.140375 14.969245,16.2561 14.572275,16.266375 C13.374,16.29855 13.141875,15.4248 13.1316,14.790525 L13.1316,10.13085 L16.137445,10.13085 L16.137445,7.864725 L13.14255,7.864725 L13.14255,4.051395 C13.14255,4.051395 10.985625,4.051395 10.9497,4.051395 C10.91385,4.051395 10.85085,4.083255 10.842075,4.163455 C10.7139,5.330565 10.167445,7.37879 7.896975,8.19728 L7.896975,10.130855 L9.4116,10.130855 L9.4116,15.02198 C9.4116,16.69628 10.647225,19.075205 13.907925,19.019555 C15.008025,19.000505 16.229695,18.53978 16.5,18.142805 L15.78,16.00785 Z"
                            id="Shape"
                            fill="#FFFFFF"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </MediaColumnItem>
          <MediaColumnItem>
            <a href="http://www.youtube.com/marvel">
              <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <desc>Created with Sketch.</desc>
                <defs>
                  <linearGradient x1="50%" y1="108.487843%" x2="50%" y2="50%" id="linearGradient-1">
                    <stop stopColor="#89291E" offset="0%" />
                    <stop stopColor="#DC2217" offset="100%" />
                  </linearGradient>
                </defs>
                <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="1Home" transform="translate(-1284.000000, -2484.000000)">
                    <g id="Group-16" transform="translate(0.000000, 2266.000000)">
                      <g id="Group-14" transform="translate(1124.000000, 85.000000)">
                        <g id="Group-12" transform="translate(160.000000, 133.000000)">
                          <rect
                            id="Rectangle-3-Copy"
                            fill="url(#linearGradient-1)"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <g id="logo-youtube" transform="translate(3.000000, 5.000000)" fillRule="nonzero">
                            <path
                              d="M17.8202513,2.77612125 C17.8202513,2.77612125 17.6443575,1.53571875 17.1046837,0.98948625 C16.4202113,0.2725575 15.6529838,0.26900625 15.3011437,0.22704 C12.782295,0.0449625 9.00391125,0.0449625 9.00391125,0.0449625 L8.99608875,0.0449625 C8.99608875,0.0449625 5.21778,0.0449625 2.6988525,0.22704 C2.34699,0.26900625 1.58003625,0.2725575 0.8953125,0.98948625 C0.35563125,1.53571875 0.18001125,2.77612125 0.18001125,2.77612125 C0.18001125,2.77612125 0,4.232745 0,5.689365 L0,7.05495375 C0,8.51155875 0.180015,9.9681825 0.180015,9.9681825 C0.180015,9.9681825 0.355635,11.2085925 0.89531625,11.7548212 C1.58004,12.47175 2.47946625,12.4490812 2.8800675,12.52422 C4.32010125,12.6623062 9.000015,12.7050375 9.000015,12.7050375 C9.000015,12.7050375 12.7822987,12.6993412 15.3011475,12.5172675 C15.6529838,12.4752937 16.420215,12.47175 17.1046875,11.7548212 C17.6443613,11.2085887 17.820255,9.9681825 17.820255,9.9681825 C17.820255,9.9681825 18,8.51155875 18,7.05495375 L18,5.689365 C18,4.232745 17.8202513,2.77612125 17.8202513,2.77612125 Z"
                              id="Shape"
                              fill="#FFFFFF"
                            />
                            <polygon
                              id="Shape"
                              fill="#DC2217"
                              points="7.14171375 8.70979125 7.14088875 3.6522675 12.0045713 6.18984"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </MediaColumnItem>
          <MediaColumnItem>
            <a href="http://pinterest.com/marvelofficial/">
              <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <desc>Created with Sketch.</desc>
                <defs />
                <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="1Home" transform="translate(-1324.000000, -2484.000000)">
                    <g id="Group-16" transform="translate(0.000000, 2266.000000)">
                      <g id="Group-14" transform="translate(1124.000000, 85.000000)">
                        <g id="Group-11" transform="translate(200.000000, 133.000000)">
                          <g id="logo-pinterest" transform="translate(4.000000, 2.000000)">
                            <g id="Group-9" />
                          </g>
                          <rect id="Rectangle-3" fill="#FFFFFF" x="0" y="0" width="24" height="24" />
                          <path
                            d="M22,11.9999458 C22,17.522825 17.522825,21.9998917 12,21.9998917 C6.477175,21.9998917 2,17.522825 2,11.9999458 C2,6.47712083 6.477175,2 12,2 C17.522825,2 22,6.47712083 22,11.9999458"
                            id="Shape"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                          />
                          <path
                            d="M12.061175,3 C7.05684167,3 3,7.05684167 3,12.061175 C3,15.8999208 5.38828333,19.1787083 8.75901667,20.4989792 C8.6797625,19.7820458 8.6082875,18.6823667 8.79050417,17.8997333 C8.95510833,17.1925583 9.8530375,13.3956917 9.8530375,13.3956917 C9.8530375,13.3956917 9.58197083,12.8529167 9.58197083,12.0504042 C9.58197083,10.7904667 10.3122458,9.84982083 11.2215333,9.84982083 C11.9945792,9.84982083 12.3680458,10.4302333 12.3680458,11.1262167 C12.3680458,11.90365 11.8730458,13.0659625 11.6175625,14.1431792 C11.4040958,15.0450792 12.0698583,15.7805583 12.9593875,15.7805583 C14.5699042,15.7805583 15.807825,14.082425 15.807825,11.6311875 C15.807825,9.461675 14.2488917,7.9447625 12.0229208,7.9447625 C9.44474167,7.9447625 7.93141667,9.8785625 7.93141667,11.8770708 C7.93141667,12.6558458 8.231425,13.490975 8.60574583,13.944925 C8.67974167,14.0346208 8.69063333,14.1132792 8.66860417,14.2048 C8.59979583,14.4910375 8.44694167,15.1064875 8.41692917,15.2324125 C8.3773875,15.3982958 8.28559167,15.4334458 8.11392083,15.3536042 C6.98215417,14.8267958 6.27464167,13.1722708 6.27464167,11.8432625 C6.27464167,8.98490417 8.35140417,6.35995417 12.2616917,6.35995417 C15.4049917,6.35995417 17.8478125,8.5998 17.8478125,11.5932542 C17.8478125,14.7160875 15.8787708,17.2293208 13.1457958,17.2293208 C12.2276583,17.2293208 11.3644458,16.752325 11.0689917,16.1888542 C11.0689917,16.1888542 10.6146667,17.918925 10.5045083,18.3428708 C10.299875,19.1299375 9.747675,20.1165167 9.3782875,20.7183292 C10.2261375,20.9807958 11.1270917,21.1224083 12.0611833,21.1224083 C17.0655708,21.1224083 21.1224083,17.0655708 21.1224083,12.0611833 C21.1224,7.05684167 17.0655667,3 12.061175,3 Z"
                            id="Shape"
                            fill="#BD081C"
                            fillRule="nonzero"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </MediaColumnItem>
        </MediaColumn>
      </MediaSection>
    </Wrapper>
  </FooterSection>
);
