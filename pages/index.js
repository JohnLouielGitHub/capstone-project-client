import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Men of Law Corporate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Logo.png" />
      </Head>

      <main>
        <hero className="d-block position-relative vh-100 h-100 mh-100 w-100">
          <Image
            style={{ zIndex: 1 }}
            src="https://previews.123rf.com/images/ijeab/ijeab1805/ijeab180500064/102335348-law-advice-and-legal-services-concept-lawyer-and-attorney-having-team-meeting-at-law-firm-.jpg"
            layout="fill"
          ></Image>
          {/* Home hero heading */}
          <div className="container-fluid position-absolute top-50 start-50 translate-middle w-100 overlay-dark p-5">
            <div className="container">
              <h1 className="display-1 fw-bold text-gold mb-24">
                We're here for you
              </h1>
              <p className="display-6 text-light mb-24">
                Online legal service that provides legal information and advice.
              </p>
              <button className="d-block btn home__hero-btn" type="button">
                Get Started
              </button>
            </div>
          </div>
          {/* Home hero button -> LW */}
          <div className="container-fluid position-absolute bottom-0 w-100 overlay-dark-1">
            <div className="container d-flex">
              <button
                className="col-4 d-block home__lex-btn d-flex justify-content-around align-items-center"
                type="button"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.0252 0.894195C20.8309 2.50378 19.0044 7.09406 21.1015 10.7305C22.5898 13.2939 24.687 14.3074 28.4077 14.3074C31.249 14.3074 32.0608 14.0093 34.0226 12.2805C35.9168 10.6113 36.3227 9.7767 36.3227 7.74982C36.3227 4.64988 34.6315 2.08648 31.8578 0.894195C29.2195 -0.17886 27.8665 -0.17886 25.0252 0.894195Z"
                    fill="#757676"
                  />
                  <path
                    d="M42.5462 0.715466C41.4638 1.66929 41.4638 9.65758 42.5462 10.6114C43.0197 11.0287 44.1698 11.3268 45.1845 11.3268C46.6728 11.3268 47.0787 11.6249 47.2817 12.9364L47.4846 14.4863L49.5817 12.9364C51.1377 11.7441 52.4907 11.3268 54.5878 11.3268C59.391 11.3268 59.9998 10.7306 59.9998 5.78267C59.9998 3.15965 59.6616 1.13276 59.188 0.715466C58.6468 0.238553 55.8055 9.63211e-05 50.8671 9.63211e-05C45.9287 9.63211e-05 43.0874 0.238553 42.5462 0.715466Z"
                    fill="#F8CF2C"
                  />
                  <path
                    d="M17.4483 18.0632C16.163 18.4805 14.5394 19.4939 13.7952 20.3881C12.5099 21.9381 12.4422 22.2361 13.3893 27.4226C13.9305 30.4033 14.2688 32.9667 14.0658 33.0859C13.9305 33.2648 11.1569 33.384 7.90968 33.384C2.83595 33.384 1.88885 33.5628 0.806458 34.6359C-0.478888 35.8282 -0.411238 36.007 2.3624 43.3992C6.08314 53.2951 6.35374 53.6528 10.8863 53.6528H14.5394L14.81 49.7183C15.0806 46.1414 15.2835 45.5453 17.2453 44.0549C19.4101 42.3261 19.4778 42.3261 28.2723 42.3261C33.143 42.3261 37.6756 42.6242 38.4197 42.9223C40.4492 43.9357 41.7346 46.7376 41.7346 50.3741V53.6528H45.32C48.026 53.6528 49.2437 53.3548 50.1231 52.5798C51.2732 51.4471 56.6175 38.0935 56.6175 36.3647C56.6175 34.159 54.3851 33.384 48.1613 33.384H42.2081L42.6817 30.9398C44.1023 23.2496 44.0347 21.4612 42.4111 19.9708C40.7198 18.3612 37.2697 17.2882 33.9548 17.2882C31.3165 17.2882 30.0988 19.3151 30.9783 22.4746C31.8577 25.813 31.7224 31.834 30.7753 32.6686C29.49 33.8013 26.3104 33.5628 25.4986 32.2513C24.6192 30.7014 24.6868 28.5553 25.7692 23.9053C26.9869 18.7785 26.2428 17.2882 22.4544 17.3478C20.9661 17.3478 18.7336 17.6459 17.4483 18.0632Z"
                    fill="#757676"
                  />
                  <path
                    d="M19.6804 46.678C19.5451 47.0953 19.4774 50.2548 19.5451 53.7125L19.748 59.9123L27.7984 60.0912C33.075 60.2104 36.1193 60.0316 36.7281 59.5547C37.9458 58.6604 38.0811 47.6914 36.8634 46.6184C35.6457 45.5453 20.1539 45.6049 19.6804 46.678Z"
                    fill="#F8CF2C"
                  />
                </svg>
                <div className="fw-bold">Consult</div>
              </button>
              <button
                className="col-4 d-block home__lex-btn d-flex justify-content-around align-items-center"
                type="button"
              >
                <svg
                  width="60"
                  height="47"
                  viewBox="0 0 60 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.1117 0.493805C53.026 0.691338 54.2452 1.28394 54.8039 1.77777C57.2422 3.95063 57.293 4.29631 57.293 23.3089C57.293 40.1979 57.2422 41.3337 56.277 42.8152C54.4484 45.7782 54.1944 45.8276 40.2761 46.0252C26.1038 46.1733 25.2402 46.0252 23.2592 42.8152C22.3448 41.3831 22.2432 40.2473 22.2432 29.5312V17.7779L30.9803 17.6792L39.7681 17.531L39.9205 8.74081L40.0221 -2.67029e-05L45.2541 0.0493584C48.0988 0.0987396 51.1974 0.296272 52.1117 0.493805Z"
                    fill="#F8CF2C"
                  />
                  <path
                    d="M3.77459 1.46559C0.20221 4.39684 0 5.51351 0 23.2406C0 39.0833 0.0674034 39.6417 1.55028 41.9448C4.17901 46.0625 4.17901 46.0625 29.9945 46.0625C61.4719 46.0625 59.989 46.9698 59.989 27.0792C59.989 8.1656 59.5172 7.67705 40.6442 7.67705H28.3768L26.5569 4.53642C25.6133 2.79163 24.2652 1.04684 23.5912 0.697876C22.9171 0.279129 18.5359 -3.8147e-05 13.9525 -3.8147e-05C6.47072 -3.8147e-05 5.39227 0.139545 3.77459 1.46559Z"
                    fill="#757676"
                  />
                </svg>
                <div className="fw-bold">Docs</div>
              </button>
              <button
                className="col-4 d-block home__lex-btn d-flex justify-content-around align-items-center"
                type="button"
              >
                <svg
                  width="60"
                  height="58"
                  viewBox="0 0 60 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0988 0.380571C11.1261 1.72748 8.66504 5.18576 8.66504 9.4449C8.66504 13.3036 10.1416 15.8882 13.5871 17.9996C14.8527 18.7641 15.5559 18.9097 17.6302 18.9097C20.4427 18.9097 22.1303 18.218 24.1343 16.2523C27.5094 12.8668 27.5797 6.56907 24.2749 2.89237C22.0248 0.453377 18.1224 -0.638712 15.0988 0.380571Z"
                    fill="#757676"
                  />
                  <path
                    d="M30.3918 10.6826C30.3215 10.8283 30.1105 11.5563 29.9699 12.248C29.8293 12.9396 29.3371 14.3229 28.8449 15.2694C27.9308 17.126 28.0362 17.4536 29.6886 18.3637C30.8137 18.9825 31.6926 18.9097 32.7825 18.0361C34.1536 16.9076 34.6458 17.8176 33.5208 19.3466C31.9036 21.5308 29.759 21.3123 28.1769 18.8733C27.5792 17.9633 27.2979 17.8176 27.087 18.1817C26.9464 18.4365 26.2784 19.0554 25.6807 19.5286C25.0479 20.0018 24.5205 20.5115 24.5205 20.6571C24.5205 20.7663 25.7159 20.9847 27.1573 21.0575C29.1964 21.2031 30.2863 21.4944 31.9739 22.4044L34.1888 23.5329L46.6697 23.5693C53.5254 23.5693 59.3615 23.5693 59.6428 23.5693C60.6975 23.4965 59.2209 18.6913 57.7091 17.308C56.5841 16.2887 54.8614 15.5243 53.1386 15.2694C51.4511 15.051 51.4159 15.0146 51.0644 12.9032C50.9237 11.8839 50.6073 11.3743 49.8338 10.9739C48.4627 10.2458 47.9353 10.2822 46.8806 11.2287C46.2829 11.8111 45.9665 12.5392 45.8611 13.5221L45.7556 14.9782H39.814H33.8724L33.5911 13.3765C33.4505 12.4664 33.1341 11.5563 32.888 11.3015C32.2903 10.719 30.6379 10.2822 30.3918 10.6826ZM48.6033 18.8005C49.0604 18.8005 49.9042 18.3637 50.5018 17.854L51.5917 16.9076V17.9997C51.5917 19.2374 50.8886 20.1474 49.5526 20.6571C47.5838 21.458 45.615 20.111 45.615 17.9633V16.9076L46.7048 17.854C47.3025 18.3637 48.1463 18.8005 48.6033 18.8005Z"
                    fill="#F8CF2C"
                  />
                  <path
                    d="M6.55588 24.8072C3.11045 26.1177 0.508806 29.03 0.0517595 32.1242C-0.159185 33.6896 0.297861 39.9145 1.00101 44.5377C1.84479 50.2894 3.98939 54.3302 7.04808 56.0047C8.41922 56.7692 9.01689 56.842 16.5054 56.9512C26.7011 57.1332 27.8613 56.9148 30.3223 54.3302C33.0997 51.4543 33.838 49.1245 34.9279 39.3685C35.631 32.9615 35.4552 31.2506 33.9083 28.7752C31.7989 25.4261 28.4589 24.0428 23.115 24.334L20.8649 24.4432L20.5485 26.0813C20.3727 26.9914 20.0915 27.9015 19.9157 28.1199C19.7047 28.3747 19.9157 30.9593 20.5134 35.0365C21.7439 43.9553 21.6384 47.5592 19.9508 51.0539C18.65 53.7113 17.8766 54.2209 16.8218 53.2381C16.2242 52.6556 15.2398 50.8355 14.3608 48.5421C13.7983 47.0495 13.8686 39.1501 14.5366 33.8716C15.064 29.6488 15.064 29.1392 14.5366 27.4646C14.2202 26.4454 13.9741 25.3169 13.9741 24.9528C13.9741 24.334 13.6928 24.2612 10.9154 24.2976C9.19268 24.2976 7.25902 24.516 6.55588 24.8072Z"
                    fill="#757676"
                  />
                  <path
                    d="M37.1779 27.4645C37.1779 27.6101 37.3888 28.0469 37.6349 28.3746C38.0216 28.9206 39.1818 28.9934 47.9009 29.0662L57.7449 29.1754L57.8504 40.1328C57.9207 51.0173 57.9207 51.0901 57.1121 52.3278C55.7409 54.4392 55.53 54.4756 44.6664 54.4756H34.7872L33.8028 55.6405L32.8535 56.8418L35.2794 56.951C36.6154 57.0238 41.5022 57.0238 46.143 56.951C53.5963 56.8418 54.7214 56.769 55.7761 56.1501C57.3582 55.2765 59.2567 53.1651 59.6082 51.9638C59.7489 51.4541 59.8543 45.7024 59.8543 39.1863V27.3553L48.5337 27.2461C42.2757 27.2097 37.1779 27.2825 37.1779 27.4645Z"
                    fill="#F8CF2C"
                  />
                  <path
                    d="M46.46 35.8737C46.3897 35.9465 46.3193 36.893 46.3193 37.9486C46.3193 40.3148 46.7412 40.6425 49.7999 40.6425C53.0696 40.6425 53.5618 40.3512 53.6672 38.1307C53.7024 36.8566 53.5969 36.2013 53.2805 36.0921C52.6477 35.9101 46.6358 35.6917 46.46 35.8737Z"
                    fill="#757676"
                  />
                  <path
                    d="M38.7246 36.4197C38.6191 36.7109 38.5137 37.7302 38.4785 38.7131L38.4082 40.4604H40.6934C42.9435 40.4604 42.9787 40.4604 43.1545 39.3684C43.26 38.7495 43.2951 37.7302 43.2248 37.075L43.0842 35.9101H41.0099C39.4981 35.9101 38.8653 36.0557 38.7246 36.4197Z"
                    fill="#757676"
                  />
                  <path
                    d="M37.7403 43.9914C37.6348 44.2462 37.4941 45.3383 37.3887 46.3576L37.2129 48.287H40.1309C41.713 48.287 43.1193 48.2142 43.1896 48.1414C43.26 48.0322 43.26 47.0129 43.1545 45.848L42.9787 43.7366L40.4122 43.6273C38.584 43.5545 37.8457 43.6637 37.7403 43.9914Z"
                    fill="#757676"
                  />
                  <path
                    d="M46.5654 43.8093C46.4248 43.9185 46.3193 45.0106 46.3193 46.1755V48.3232L49.9405 48.214L53.5266 48.1048L53.6321 46.3575C53.8078 43.8093 53.4563 43.5545 49.8351 43.5545C48.1827 43.5545 46.6709 43.6637 46.5654 43.8093Z"
                    fill="#757676"
                  />
                </svg>
                <div className="fw-bold">Works</div>
              </button>
            </div>
          </div>
        </hero>
        <lawfirmpractice>
          <div className="container-fluid bg-dark">
            <div className="container">
              <div className="home__section-banner row">
                <h2 className="col-4 display-6 border-end border-1 border-gold h-100 text-light fw-bold font-main py-5 m-0 my-auto">
                  Law Firm's Practices
                </h2>
                <p className="col-8 m-0 text-light my-auto">
                  We use AI to process millions of data points to generate
                  accurate answers, assist in a range of legal issues and
                  provide a clear path forward.
                </p>
              </div>
            </div>
          </div>
        </lawfirmpractice>
      </main>
    </div>
  );
}
