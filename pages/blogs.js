import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Blogs() {
  return (
    <div>
      <Head>
        <title>Men of Law Corporate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" src="/Logo.png" />
      </Head>

      <main>
        <hero className="d-block position-relative vh-100 h-100 mh-100 w-100">
          <Image
          className="object-fit"
            style={{ zIndex: -1 }}
            src="https://previews.123rf.com/images/ijeab/ijeab1805/ijeab180500064/102335348-law-advice-and-legal-services-concept-lawyer-and-attorney-having-team-meeting-at-law-firm-.jpg"
            layout="fill"
            alt="blogs-page-banner-image"
          ></Image>
          {/* Blogs hero heading */}
          <div>
            <div className="position-absolute bottom-0 w-100">
              <div className="container-fluid w-100 overlay-dark p-5 ">
                <div className="container">
                  <h1 className="display-1 fw-bold text-white">
                    Every Day Law
                  </h1>
                </div>
              </div>
              <div className="container-fluid bg-dark py-5">
                <div className="container">
                  <div className="row d-flex flex-wrap justify-content-center align-items-center">
                    <div className="col-md-6 col-4 display-6 text-gold">
                      Blogs
                    </div>
                    <div className="col-md-6 col-8">
                      <div className="d-flex flex-end">
                        <div className="form-search w-100 d-flex">
                          <input
                            className="search-bar h-100 bg-white border-0"
                            type="text"
                            placeholder="Search..."
                          />
                          <button
                            className="search-btn mb-0 d-block bg-gray border-0 "
                            type="button"
                          >
                            <svg
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.0524 0.0179844C9.00831 0.194904 5.77069 1.84026 3.53602 4.33482C1.65327 6.44017 0.544739 9.05858 0.333589 11.8716C-0.000730634 16.4184 2.09317 20.753 5.89386 23.3006C9.62417 25.8306 13.6008 26.3082 17.7358 24.7337C18.4045 24.486 19.0027 24.3267 19.0731 24.3621C19.1435 24.4152 20.1816 25.4413 21.3782 26.6798C24.5982 29.9351 25.4604 30.4128 27.3959 29.9351C28.9971 29.5636 30.3696 27.7944 30.352 26.1313C30.3344 25.0167 29.6658 24.0614 27.0088 21.3722L24.3694 18.7184L24.8093 17.6392C25.6363 15.5515 25.8299 14.4723 25.7243 12.2608C25.6539 10.5801 25.5484 9.96087 25.0909 8.74012C23.8064 5.21942 21.6421 2.74255 18.4397 1.15027C16.9792 0.4249 14.0231 -0.10586 12.0524 0.0179844ZM15.6595 2.35332C18.4221 3.02562 21.2902 5.32557 22.5043 7.85552C23.4721 9.87241 23.7184 11.1285 23.6128 13.4108C23.5072 15.7108 23.1377 16.8607 21.9412 18.683C20.5336 20.8237 18.8092 22.0445 15.8355 23.0706C14.8149 23.4245 14.3046 23.4952 12.7562 23.4598C10.7151 23.4245 9.65936 23.1591 7.89978 22.2037C5.7179 21.0183 3.85275 18.8245 2.93777 16.3477C2.35711 14.7731 2.19874 11.9601 2.62104 10.3147C3.90553 5.2725 8.26929 1.89333 13.2841 2.08794C14.1111 2.12333 15.1844 2.24717 15.6595 2.35332Z"
                                fill="#F8FFFE"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </hero>
        <blogsection
          id="home__blog-section"
          className="bg-gray w-100"
          style={{ zIndex: 10 }}
        >
          <div className="container mt-6">
            <div className="row home__blog mb-6">
              <div className="col-12 col-md-6 position-relative">
                <Image
                className="object-fit"
                  src="https://previews.123rf.com/images/pe3check/pe3check1711/pe3check171100127/89322764-general-data-protection-regulation-gdpr-on-mobile-phone.jpg"
                  layout="fill"
                  alt="blog-image"
                ></Image>
              </div>
              <div className="col-12 col-md-6">
                <h3 className="text-gold fw-bold font-main">
                  Chat Privacy Policy
                </h3>
                <div className="bg-line mb-1"></div>
                <span className="text-dark fw-bold font-main">
                  Author | January 28, 2021
                </span>
                <p className="fw-bold text-white mt-3">
                  At LawServe, we believe that every person deserves access to
                  justice. That&apos;s why we offer safe, affordable advice about any
                  issue you may have without any hidden agenda. At LawServe, we
                  believe that every person deserves access to justice. That&apos;s
                  why we offer safe, affordable advice about any issue you may
                  have without any hidden agenda.
                  <br></br>
                  <br></br>
                  At LawServe, we believe that every person deserves access to
                  justice. That&apos;s why we offer safe, affordable advice about any
                  issue you may have without any hidden agenda. At LawServe, we
                  believe that every person deserves access to justice. That&apos;s
                  why we offer safe, affordable advice about any issue you may
                  have without any hidden agenda.
                </p>
                <div className="d-flex flex-wrap justify-content-between">
                <Link passHref href="/blog">
                    <button
                    className="col-md-6 col-12 mb-3 mb-md-0 btn"
                    type="button"
                  >
                    Read More
                  </button>
                    </Link>

                  <div className="col-md-6 col-12 mb-3 mb-md-0 ps-3 fw-bold text-dark font-main d-flex justify-content-around align-items-center">
                    Share:
                    <Link
                      to="route"
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref href="https://www.instagram.com/"
                    >
                      <span className="social-icon">
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.2468 2.88376C20.5023 2.88376 21.007 2.89976 22.6885 2.97709C27.0078 3.17442 29.0253 5.23176 29.2219 9.53576C29.2989 11.2224 29.3135 11.7291 29.3135 16.0011C29.3135 20.2744 29.2976 20.7798 29.2219 22.4664C29.024 26.7664 27.0118 28.8278 22.6885 29.0251C21.007 29.1024 20.505 29.1184 16.2468 29.1184C11.9913 29.1184 11.4866 29.1024 9.80645 29.0251C5.47656 28.8264 3.46968 26.7598 3.2731 22.4651C3.19607 20.7784 3.18013 20.2731 3.18013 15.9998C3.18013 11.7278 3.1974 11.2224 3.2731 9.53442C3.471 5.23176 5.4832 3.17309 9.80645 2.97576C11.4879 2.89976 11.9913 2.88376 16.2468 2.88376ZM16.2468 -0.000244141C11.9183 -0.000244141 11.3764 0.0184225 9.67628 0.0957559C3.88805 0.362423 0.671188 3.58642 0.405551 9.40242C0.327188 11.1104 0.308594 11.6544 0.308594 15.9998C0.308594 20.3451 0.327188 20.8904 0.404223 22.5971C0.66986 28.4078 3.88141 31.6371 9.67496 31.9038C11.3764 31.9811 11.9183 31.9998 16.2468 31.9998C20.5754 31.9998 21.1186 31.9811 22.8187 31.9038C28.6016 31.6371 31.8264 28.4131 32.0881 22.5971C32.1664 20.8904 32.185 20.3451 32.185 15.9998C32.185 11.6544 32.1664 11.1104 32.0894 9.40376C31.8291 3.59842 28.6136 0.363756 22.82 0.0970892C21.1186 0.0184225 20.5754 -0.000244141 16.2468 -0.000244141V-0.000244141ZM16.2468 7.78376C11.727 7.78376 8.06254 11.4624 8.06254 15.9998C8.06254 20.5371 11.727 24.2171 16.2468 24.2171C20.7666 24.2171 24.4311 20.5384 24.4311 15.9998C24.4311 11.4624 20.7666 7.78376 16.2468 7.78376ZM16.2468 21.3331C13.3129 21.3331 10.9341 18.9464 10.9341 15.9998C10.9341 13.0544 13.3129 10.6664 16.2468 10.6664C19.1808 10.6664 21.5596 13.0544 21.5596 15.9998C21.5596 18.9464 19.1808 21.3331 16.2468 21.3331ZM24.7552 5.53976C23.6979 5.53976 22.8413 6.39976 22.8413 7.45976C22.8413 8.51976 23.6979 9.37976 24.7552 9.37976C25.8111 9.37976 26.6664 8.51976 26.6664 7.45976C26.6664 6.39976 25.8111 5.53976 24.7552 5.53976Z" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      to="route"
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref href="https://www.linkedin.com/"
                    >
                      <span className="social-icon">
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.73839 4.66634C6.73839 6.50767 5.2641 7.99967 3.44449 7.99967C1.62487 7.99967 0.150587 6.50767 0.150587 4.66634C0.150587 2.82634 1.62487 1.33301 3.44449 1.33301C5.2641 1.33301 6.73839 2.82634 6.73839 4.66634ZM6.76495 10.6663H0.124023V31.9997H6.76495V10.6663ZM17.3665 10.6663H10.7681V31.9997H17.3679V20.801C17.3679 14.5743 25.3755 14.065 25.3755 20.801V31.9997H32.0005V18.4917C32.0005 7.98501 20.1504 8.36767 17.3665 13.5397V10.6663Z" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      to="route"
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref href="https://facebook.com"
                    >
                      <span className="social-icon">
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.8908 10.6664H8.90625V15.9998H12.8908V31.9998H19.5317V15.9998H24.369L24.8445 10.6664H19.5317V8.44376C19.5317 7.17042 19.7867 6.66642 21.0127 6.66642H24.8445V-0.000244141H19.7867C15.0106 -0.000244141 12.8908 2.11042 12.8908 6.15309V10.6664Z" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      to="route"
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref href="https://twitter.com/"
                    >
                      <span className="social-icon">
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M32.6294 6.07574C31.4566 6.5984 30.1961 6.9504 28.8733 7.10907C30.224 6.29707 31.2613 5.0104 31.7488 3.47707C30.4857 4.22907 29.0858 4.77574 27.5956 5.0704C26.4042 3.7944 24.7028 2.99707 22.8221 2.99707C18.5998 2.99707 15.4971 6.95174 16.4508 11.0571C11.0171 10.7837 6.19849 8.1704 2.97233 4.1984C1.25897 7.14907 2.08377 11.0091 4.99515 12.9637C3.92464 12.9291 2.91522 12.6344 2.03463 12.1424C1.96291 15.1837 4.13449 18.0291 7.27963 18.6624C6.3592 18.9131 5.35111 18.9717 4.32575 18.7744C5.15719 21.3824 7.57183 23.2797 10.4354 23.3331C7.68606 25.4971 4.22215 26.4637 0.75293 26.0531C3.64705 27.9157 7.08572 29.0024 10.7781 29.0024C22.9203 29.0024 29.7804 18.7077 29.366 9.4744C30.6437 8.54774 31.7528 7.39174 32.6294 6.07574Z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row home__blog mb-6">
              <div className="col-12 col-md-6 position-relative">
                <Image
                className="object-fit"
                  src="https://previews.123rf.com/images/adiruch/adiruch1804/adiruch180400460/99704263-businessman-shaking-hands-judge-gavel-with-justice-lawyers-trust-promise-win-the-case.jpg"
                  layout="fill"
                  alt="blog-image"
                ></Image>
              </div>
              <div className="col-12 col-md-6">
                <h3 className="text-gold fw-bold font-main">
                  Senior Deputy Arrest Case
                </h3>
                <div className="bg-line mb-1"></div>
                <span className="text-dark fw-bold font-main">
                  Author | March 2, 2021
                </span>
                <p className="fw-bold text-white mt-3">
                  At LawServe, we believe that every person deserves access to
                  justice. That&apos;s why we offer safe, affordable advice about any
                  issue you may have without any hidden agenda. At LawServe, we
                  believe that every person deserves access to justice. That&apos;s
                  why we offer safe, affordable advice about any issue you may
                  have without any hidden agenda.
                  <br></br>
                  <br></br>
                  At LawServe, we believe that every person deserves access to
                  justice. That&apos;s why we offer safe, affordable advice about any
                  issue you may have without any hidden agenda. At LawServe, we
                  believe that every person deserves access to justice. That&apos;s
                  why we offer safe, affordable advice about any issue you may
                  have without any hidden agenda.
                </p>
                <div className="d-flex flex-wrap justify-content-between">
                <Link passHref href="/blog">
                  <button
                    className="col-md-6 col-12 mb-3 mb-md-0 btn"
                    type="button"
                  >
                    Read More
                  </button>
                  </Link>
                  <div className="col-md-6 col-12 mb-3 mb-md-0 ps-3 fw-bold text-dark font-main d-flex justify-content-around align-items-center">
                    Share:
                    <Link
                      to="route"
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref href="https://www.instagram.com/"
                    >
                      <span className="social-icon">
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.2468 2.88376C20.5023 2.88376 21.007 2.89976 22.6885 2.97709C27.0078 3.17442 29.0253 5.23176 29.2219 9.53576C29.2989 11.2224 29.3135 11.7291 29.3135 16.0011C29.3135 20.2744 29.2976 20.7798 29.2219 22.4664C29.024 26.7664 27.0118 28.8278 22.6885 29.0251C21.007 29.1024 20.505 29.1184 16.2468 29.1184C11.9913 29.1184 11.4866 29.1024 9.80645 29.0251C5.47656 28.8264 3.46968 26.7598 3.2731 22.4651C3.19607 20.7784 3.18013 20.2731 3.18013 15.9998C3.18013 11.7278 3.1974 11.2224 3.2731 9.53442C3.471 5.23176 5.4832 3.17309 9.80645 2.97576C11.4879 2.89976 11.9913 2.88376 16.2468 2.88376ZM16.2468 -0.000244141C11.9183 -0.000244141 11.3764 0.0184225 9.67628 0.0957559C3.88805 0.362423 0.671188 3.58642 0.405551 9.40242C0.327188 11.1104 0.308594 11.6544 0.308594 15.9998C0.308594 20.3451 0.327188 20.8904 0.404223 22.5971C0.66986 28.4078 3.88141 31.6371 9.67496 31.9038C11.3764 31.9811 11.9183 31.9998 16.2468 31.9998C20.5754 31.9998 21.1186 31.9811 22.8187 31.9038C28.6016 31.6371 31.8264 28.4131 32.0881 22.5971C32.1664 20.8904 32.185 20.3451 32.185 15.9998C32.185 11.6544 32.1664 11.1104 32.0894 9.40376C31.8291 3.59842 28.6136 0.363756 22.82 0.0970892C21.1186 0.0184225 20.5754 -0.000244141 16.2468 -0.000244141V-0.000244141ZM16.2468 7.78376C11.727 7.78376 8.06254 11.4624 8.06254 15.9998C8.06254 20.5371 11.727 24.2171 16.2468 24.2171C20.7666 24.2171 24.4311 20.5384 24.4311 15.9998C24.4311 11.4624 20.7666 7.78376 16.2468 7.78376ZM16.2468 21.3331C13.3129 21.3331 10.9341 18.9464 10.9341 15.9998C10.9341 13.0544 13.3129 10.6664 16.2468 10.6664C19.1808 10.6664 21.5596 13.0544 21.5596 15.9998C21.5596 18.9464 19.1808 21.3331 16.2468 21.3331ZM24.7552 5.53976C23.6979 5.53976 22.8413 6.39976 22.8413 7.45976C22.8413 8.51976 23.6979 9.37976 24.7552 9.37976C25.8111 9.37976 26.6664 8.51976 26.6664 7.45976C26.6664 6.39976 25.8111 5.53976 24.7552 5.53976Z" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      to="route"
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref href="https://www.linkedin.com/"
                    >
                      <span className="social-icon">
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.73839 4.66634C6.73839 6.50767 5.2641 7.99967 3.44449 7.99967C1.62487 7.99967 0.150587 6.50767 0.150587 4.66634C0.150587 2.82634 1.62487 1.33301 3.44449 1.33301C5.2641 1.33301 6.73839 2.82634 6.73839 4.66634ZM6.76495 10.6663H0.124023V31.9997H6.76495V10.6663ZM17.3665 10.6663H10.7681V31.9997H17.3679V20.801C17.3679 14.5743 25.3755 14.065 25.3755 20.801V31.9997H32.0005V18.4917C32.0005 7.98501 20.1504 8.36767 17.3665 13.5397V10.6663Z" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      to="route"
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref href="https://facebook.com"
                    >
                      <span className="social-icon">
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.8908 10.6664H8.90625V15.9998H12.8908V31.9998H19.5317V15.9998H24.369L24.8445 10.6664H19.5317V8.44376C19.5317 7.17042 19.7867 6.66642 21.0127 6.66642H24.8445V-0.000244141H19.7867C15.0106 -0.000244141 12.8908 2.11042 12.8908 6.15309V10.6664Z" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      to="route"
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref href="https://twitter.com/"
                    >
                      <span className="social-icon">
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M32.6294 6.07574C31.4566 6.5984 30.1961 6.9504 28.8733 7.10907C30.224 6.29707 31.2613 5.0104 31.7488 3.47707C30.4857 4.22907 29.0858 4.77574 27.5956 5.0704C26.4042 3.7944 24.7028 2.99707 22.8221 2.99707C18.5998 2.99707 15.4971 6.95174 16.4508 11.0571C11.0171 10.7837 6.19849 8.1704 2.97233 4.1984C1.25897 7.14907 2.08377 11.0091 4.99515 12.9637C3.92464 12.9291 2.91522 12.6344 2.03463 12.1424C1.96291 15.1837 4.13449 18.0291 7.27963 18.6624C6.3592 18.9131 5.35111 18.9717 4.32575 18.7744C5.15719 21.3824 7.57183 23.2797 10.4354 23.3331C7.68606 25.4971 4.22215 26.4637 0.75293 26.0531C3.64705 27.9157 7.08572 29.0024 10.7781 29.0024C22.9203 29.0024 29.7804 18.7077 29.366 9.4744C30.6437 8.54774 31.7528 7.39174 32.6294 6.07574Z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row home__blog mb-6">
              <div className="col-12 col-md-6 position-relative ">
                <Image
                className="object-fit"
                  src="https://previews.123rf.com/images/antoniodiaz/antoniodiaz1602/antoniodiaz160200219/52580751-flat-lay-of-a-lawyer-s-wooden-desk-with-a-computer-a-notepad-a-contract-and-some-glasses.jpg"
                  layout="fill"
                  alt="blog-image"
                ></Image>
              </div>
              <div className="col-12 col-md-6">
                <h3 className="text-gold fw-bold font-main">Loan Business</h3>
                <div className="bg-line mb-1"></div>
                <span className="text-dark fw-bold font-main">
                  Author | April 15, 2021
                </span>
                <p className="fw-bold text-white mt-3">
                  At LawServe, we believe that every person deserves access to
                  justice. That&apos;s why we offer safe, affordable advice about any
                  issue you may have without any hidden agenda. At LawServe, we
                  believe that every person deserves access to justice. That&apos;s
                  why we offer safe, affordable advice about any issue you may
                  have without any hidden agenda.
                  <br></br>
                  <br></br>
                  At LawServe, we believe that every person deserves access to
                  justice. That&apos;s why we offer safe, affordable advice about any
                  issue you may have without any hidden agenda. At LawServe, we
                  believe that every person deserves access to justice. That&apos;s
                  why we offer safe, affordable advice about any issue you may
                  have without any hidden agenda.
                </p>
                <div className="d-flex flex-wrap justify-content-between">
                <Link passHref href="/blog">
                  <button
                    className="col-md-6 col-12 mb-3 mb-md-0 btn"
                    type="button"
                  >
                    Read More
                  </button>
                  </Link>
                  <div className="col-md-6 col-12 mb-3 mb-md-0 ps-3 fw-bold text-dark font-main d-flex justify-content-around align-items-center">
                    Share:
                    <Link
                      to="route"
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref href="https://www.instagram.com/"
                    >
                      <span className="social-icon">
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.2468 2.88376C20.5023 2.88376 21.007 2.89976 22.6885 2.97709C27.0078 3.17442 29.0253 5.23176 29.2219 9.53576C29.2989 11.2224 29.3135 11.7291 29.3135 16.0011C29.3135 20.2744 29.2976 20.7798 29.2219 22.4664C29.024 26.7664 27.0118 28.8278 22.6885 29.0251C21.007 29.1024 20.505 29.1184 16.2468 29.1184C11.9913 29.1184 11.4866 29.1024 9.80645 29.0251C5.47656 28.8264 3.46968 26.7598 3.2731 22.4651C3.19607 20.7784 3.18013 20.2731 3.18013 15.9998C3.18013 11.7278 3.1974 11.2224 3.2731 9.53442C3.471 5.23176 5.4832 3.17309 9.80645 2.97576C11.4879 2.89976 11.9913 2.88376 16.2468 2.88376ZM16.2468 -0.000244141C11.9183 -0.000244141 11.3764 0.0184225 9.67628 0.0957559C3.88805 0.362423 0.671188 3.58642 0.405551 9.40242C0.327188 11.1104 0.308594 11.6544 0.308594 15.9998C0.308594 20.3451 0.327188 20.8904 0.404223 22.5971C0.66986 28.4078 3.88141 31.6371 9.67496 31.9038C11.3764 31.9811 11.9183 31.9998 16.2468 31.9998C20.5754 31.9998 21.1186 31.9811 22.8187 31.9038C28.6016 31.6371 31.8264 28.4131 32.0881 22.5971C32.1664 20.8904 32.185 20.3451 32.185 15.9998C32.185 11.6544 32.1664 11.1104 32.0894 9.40376C31.8291 3.59842 28.6136 0.363756 22.82 0.0970892C21.1186 0.0184225 20.5754 -0.000244141 16.2468 -0.000244141V-0.000244141ZM16.2468 7.78376C11.727 7.78376 8.06254 11.4624 8.06254 15.9998C8.06254 20.5371 11.727 24.2171 16.2468 24.2171C20.7666 24.2171 24.4311 20.5384 24.4311 15.9998C24.4311 11.4624 20.7666 7.78376 16.2468 7.78376ZM16.2468 21.3331C13.3129 21.3331 10.9341 18.9464 10.9341 15.9998C10.9341 13.0544 13.3129 10.6664 16.2468 10.6664C19.1808 10.6664 21.5596 13.0544 21.5596 15.9998C21.5596 18.9464 19.1808 21.3331 16.2468 21.3331ZM24.7552 5.53976C23.6979 5.53976 22.8413 6.39976 22.8413 7.45976C22.8413 8.51976 23.6979 9.37976 24.7552 9.37976C25.8111 9.37976 26.6664 8.51976 26.6664 7.45976C26.6664 6.39976 25.8111 5.53976 24.7552 5.53976Z" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      to="route"
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref href="https://www.linkedin.com/"
                    >
                      <span className="social-icon">
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.73839 4.66634C6.73839 6.50767 5.2641 7.99967 3.44449 7.99967C1.62487 7.99967 0.150587 6.50767 0.150587 4.66634C0.150587 2.82634 1.62487 1.33301 3.44449 1.33301C5.2641 1.33301 6.73839 2.82634 6.73839 4.66634ZM6.76495 10.6663H0.124023V31.9997H6.76495V10.6663ZM17.3665 10.6663H10.7681V31.9997H17.3679V20.801C17.3679 14.5743 25.3755 14.065 25.3755 20.801V31.9997H32.0005V18.4917C32.0005 7.98501 20.1504 8.36767 17.3665 13.5397V10.6663Z" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      to="route"
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref href="https://facebook.com"
                    >
                      <span className="social-icon">
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.8908 10.6664H8.90625V15.9998H12.8908V31.9998H19.5317V15.9998H24.369L24.8445 10.6664H19.5317V8.44376C19.5317 7.17042 19.7867 6.66642 21.0127 6.66642H24.8445V-0.000244141H19.7867C15.0106 -0.000244141 12.8908 2.11042 12.8908 6.15309V10.6664Z" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      to="route"
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref href="https://twitter.com/"
                    >
                      <span className="social-icon">
                        <svg
                          width="33"
                          height="32"
                          viewBox="0 0 33 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M32.6294 6.07574C31.4566 6.5984 30.1961 6.9504 28.8733 7.10907C30.224 6.29707 31.2613 5.0104 31.7488 3.47707C30.4857 4.22907 29.0858 4.77574 27.5956 5.0704C26.4042 3.7944 24.7028 2.99707 22.8221 2.99707C18.5998 2.99707 15.4971 6.95174 16.4508 11.0571C11.0171 10.7837 6.19849 8.1704 2.97233 4.1984C1.25897 7.14907 2.08377 11.0091 4.99515 12.9637C3.92464 12.9291 2.91522 12.6344 2.03463 12.1424C1.96291 15.1837 4.13449 18.0291 7.27963 18.6624C6.3592 18.9131 5.35111 18.9717 4.32575 18.7744C5.15719 21.3824 7.57183 23.2797 10.4354 23.3331C7.68606 25.4971 4.22215 26.4637 0.75293 26.0531C3.64705 27.9157 7.08572 29.0024 10.7781 29.0024C22.9203 29.0024 29.7804 18.7077 29.366 9.4744C30.6437 8.54774 31.7528 7.39174 32.6294 6.07574Z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-divider w-100 bg-dark mb-6 d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-6 d-flex align-items-center ">
                  <span className="text-white">
                    Showing:<span className="text-gold">&nbsp; 3 &nbsp;</span>
                    out of
                    <span className="text-gray">&nbsp; 3 &nbsp;</span> Entries.
                  </span>
                </div>
                <div className="col-6 text-white d-flex justify-content-around align-items-center">
                  <svg
                    width="20"
                    height="32"
                    viewBox="0 0 20 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.11013 14.7514L15.3505 0.511215C15.6799 0.181592 16.1196 0 16.5884 0C17.0572 0 17.4969 0.181592 17.8262 0.511215L18.8749 1.55966C19.5573 2.24284 19.5573 3.35321 18.8749 4.03535L6.91691 15.9934L18.8882 27.9646C19.2176 28.2943 19.3994 28.7337 19.3994 29.2022C19.3994 29.6713 19.2176 30.1107 18.8882 30.4406L17.8395 31.4888C17.5099 31.8184 17.0705 32 16.6016 32C16.1328 32 15.6932 31.8184 15.3638 31.4888L1.11013 17.2356C0.779985 16.905 0.598654 16.4635 0.599695 15.9941C0.598654 15.523 0.779985 15.0818 1.11013 14.7514Z"
                      fill="#F8FFFE"
                    />
                  </svg>
                  
                  <span className="page-numbers display-7 font-main fw-bold">
                    <span className="text-white mx-3">1</span>
                    <span className="text-gray mx-3">2</span>
                    <span className="text-gray mx-3">3</span>
                  </span>

                  <svg
                    width="20"
                    height="32"
                    viewBox="0 0 20 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8899 14.7514L4.64946 0.511215C4.3201 0.181592 3.88043 0 3.41162 0C2.94281 0 2.50314 0.181592 2.17378 0.511215L1.12507 1.55966C0.442669 2.24284 0.442669 3.35321 1.12507 4.03535L13.0831 15.9934L1.1118 27.9646C0.782438 28.2943 0.600586 28.7337 0.600586 29.2022C0.600586 29.6713 0.782438 30.1107 1.1118 30.4406L2.16051 31.4888C2.49013 31.8184 2.92954 32 3.39835 32C3.86716 32 4.30683 31.8184 4.6362 31.4888L18.8899 17.2356C19.22 16.905 19.4013 16.4635 19.4003 15.9941C19.4013 15.523 19.22 15.0818 18.8899 14.7514Z"
                      fill="#F8FFFE"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </blogsection>
      </main>
    </div>
  );
}
