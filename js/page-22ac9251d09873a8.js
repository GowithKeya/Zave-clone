(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    7914: function (e, a, t) {
      Promise.resolve().then(t.bind(t, 5383));
    },
    5383: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return C;
          },
        });
      var s = t(7437),
        l = t(4522),
        i = t.n(l),
        n = t(2265),
        r = t(4307),
        d = t(7138),
        o = (e) => {
          let { appLink: a } = e;
          return (0, s.jsx)("header", {
            className:
              "sticky top-0 z-50 px-4 py-2 bg-vampire-black/30 backdrop-blur-md ",
            children: (0, s.jsxs)("div", {
              className: "container mx-auto flex items-center justify-between",
              children: [
                (0, s.jsx)("div", {
                  className: "flex items-center",
                  children: (0, s.jsx)(d.default, {
                    href: "/",
                    children: (0, s.jsx)("img", {
                      className: "h-11 sm:h-12",
                      src: "/zave-logo.svg",
                      alt: "Zave Logo",
                    }),
                  }),
                }),
                (0, s.jsxs)("a", {
                  className:
                    "px-4 sm:px-10 py-3 sm:py-4 flex items-center space-x-2 bg-white text-black text-sm sm:text-base rounded-lg",
                  href: a,
                  children: [
                    (0, s.jsx)("img", {
                      src: "/download-icon.svg",
                      alt: "",
                      className: "w-4 sm:w-5",
                    }),
                    (0, s.jsx)("span", {
                      className: "hidden sm:inline",
                      children: "Download Zave",
                    }),
                    (0, s.jsx)("span", {
                      className: "sm:hidden",
                      children: "Download",
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      let m = [
        { name: "Home", href: "/" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & condition", href: "/terms-and-conditions" },
        {
          name: "Refund and Cancellation Policy",
          href: "/refund-and-cancellation-policy",
        },
      ];
      var c = (e) => {
        let {} = e;
        return (0, s.jsx)("footer", {
          className: "text-white py-12 px-4 sm:px-6 lg:px-8",
          children: (0, s.jsxs)("div", {
            className: "max-w-7xl mx-auto",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "flex flex-col md:flex-row items-start md:justify-between",
                children: [
                  (0, s.jsxs)("div", {
                    className: "mb-8 md:mb-0",
                    children: [
                      (0, s.jsx)("h2", {
                        className: "text-3xl font-semibold mb-2",
                        children: "Start Zaving today",
                      }),
                      (0, s.jsxs)("p", {
                        className: "text-lg flex flex-wrap items-center",
                        children: [
                          "Made with ",
                          (0, s.jsx)("img", {
                            className:
                              "inline-block mx-2 h-6 animate-[heartbeat_1s_infinite]",
                            src: "/love.svg",
                            alt: "Love icon",
                            "aria-hidden": "true",
                          }),
                          " in India!",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("img", {
                    className: "h-12",
                    src: "/startup-india.svg",
                    alt: "Startup India",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8 mt-12",
                children: [
                  (0, s.jsxs)("nav", {
                    children: [
                      (0, s.jsx)("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "Product",
                      }),
                      (0, s.jsx)("ul", {
                        className: "space-y-2",
                        children: m.map((e) =>
                          (0, s.jsx)(
                            "li",
                            {
                              children: (0, s.jsx)(d.default, {
                                href: e.href,
                                className:
                                  "text-gray-400 hover:text-white transition-colors",
                                children: e.name,
                              }),
                            },
                            e.name
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "md:col-span-2 md:text-right",
                    children: [
                      (0, s.jsx)("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "Contact Us",
                      }),
                      (0, s.jsxs)("address", {
                        className: "not-italic",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-gray-400 mb-2",
                            children: "Zave Orbit Pvt Ltd",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-gray-400",
                            children: "F NO 401, Navya Niketan, Mahadevapura",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-gray-400",
                            children: "Bengaluru, Karnataka, 560048",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-gray-400",
                            children: "+91 9833462547",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-gray-400 mt-2",
                            children: "mail@zave.app",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-start md:justify-between md:items-center gap-y-4 gap-y-0",
                children: [
                  (0, s.jsx)("img", {
                    src: "/zave-logo.svg",
                    alt: "Zave Logo",
                    className: "h-10",
                  }),
                  (0, s.jsx)("p", {
                    className: "text-gray-400 text-sm",
                    children:
                      "\xa9 2024 Zave Orbit Pvt Ltd. All rights reserved.",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      let x = "Live Now",
        h = "Check us out on Appstore & Playstore",
        p = "Download Zave",
        g = "/download-icon.svg",
        u = "/hero-image.png",
        f = "Zave App Screenshot",
        y = [
          [
            { name: "Myntra", image: "/myntra.png" },
            { name: "Uber", image: "/uber.png" },
            { name: "Ajio", image: "/ajio.png" },
            { name: "Zomato", image: "/zomato.png" },
          ],
          [
            { name: "BigBasket", image: "/bbnow.png" },
            { name: "Nykaa", image: "/nykaa.png" },
            { name: "Flipkart", image: "/flipkart.png" },
            { name: "MMT", image: "/amazon.png" },
          ],
          [
            { name: "Amazon", image: "/mmt.png" },
            { name: "Myntra", image: "/croma.png" },
            { name: "BookMyShow", image: "/bms.png" },
            { name: "WestSide", image: "/westside.png" },
          ],
        ],
        b = "/all-brands.png",
        v = "All Brands",
        j = "Explore discounts on all 300+ brands",
        w = "Download Zave",
        N = {
          default: [
            {
              title: "You're hungry so you buy a cheese burger",
              image: "/work-lg-1.png",
            },
            {
              title: "You pay ₹144 for that burger using UPI",
              image: "/work-lg-2.png",
            },
            {
              title:
                "Zave will round off the amount to closest 10s, here it's ₹150",
              image: "/work-lg-3.png",
            },
            {
              title: "We'll save ₹6 in your Zave Wallet",
              image: "/work-lg-4.png",
            },
            {
              title:
                "Use this wallet to get amazing discounts from 300+ brands like Zomato, Uber, Amazon, and more",
              image: "/work-lg-5.png",
            },
          ],
          android: [
            {
              title: "You're hungry so you buy a cheese burger",
              image: "/work-android-1.png",
            },
            {
              title: "You pay ₹144 for that burger using UPI",
              image: "/work-android-2.png",
            },
            {
              title:
                "Zave will round off the amount to closest 10s, here it's ₹150",
              image: "/work-android-3.png",
            },
            {
              title: "We'll save ₹6 in your Zave Wallet",
              image: "/work-android-4.png",
            },
            {
              title:
                "Use this wallet to get amazing discounts from 300+ brands like Zomato, Uber, Amazon, and more",
              image: "/work-android-5.png",
            },
          ],
          ios: [
            {
              title: "Set a daily savings deposit between ₹30 to ₹100",
              image: "/work-ios-1.png",
            },
            {
              title:
                "Zave auto-saves that amount in your wallet at the end of the day",
              image: "/work-ios-2.png",
            },
            {
              title:
                "Use your Zave wallet for amazing discounts on your next purchase",
              image: "/work-ios-3.png",
            },
          ],
        },
        k = [
          { image: "feature-withdraw-anytime.svg", title: "Withdraw anytime" },
          { image: "feature-safe-and-secure.svg", title: "Safe and Secure" },
          {
            image: "feature-cash-reward.svg",
            subtitle: "~10% Monthly",
            title: "Earn Cash Rewards",
          },
          {
            image: "feature-pause-savings.svg",
            title: "Pause savings anytime",
          },
        ],
        Z = [
          [
            {
              id: 2,
              text: "Got good discount on Nykaa, i used this app to order for my friends as well, already a fungirly in front of my friends \uD83E\uDEE3",
              author: "Yashasvi (YJ)",
              image: "/yashasvi.png",
            },
            {
              id: 3,
              text: "really appreciate that they changed the concept from large purchases to every day brands fatafat, proud to be one of the very early user. support person was super helpful too, good luck team.",
              author: "Shivani",
              image: "/shivani.png",
            },
            {
              id: 5,
              text: "So in love that I am designing a fan version of the app, means just the UI \uD83D\uDE02\uD83D\uDE02",
              author: "Sanchith",
              image: "/sanchith.png",
            },
          ],
          [
            {
              id: 7,
              text: "Was able to make the transaction successfully using the Zave app. Thank you for getting this resolved  promptly. Had a great experience. Wishing you a great success with the app \uD83D\uDE04",
              author: "Maria",
              image: "/maria.png",
            },
            {
              id: 6,
              text: "there was a time when if you want to buy something your elder brother/sisters are more exited for you and they help you to buy that after so long time I felt same like that Hiren⁩ and ⁨Shivang both help me every time you connected me even today I offer day you try to provide me the card as soon as possible thank you Zave team it will be a wonderful experience…. ❤️",
              author: "Prajwal",
              image: "/prajwal.png",
            },
            {
              id: 8,
              text: "An excellent app for shopping. It offers a wide range of brands to choose from, covering all my needs. Although the discounts have decreased slightly since its launch, it still provides better deals than others.",
              author: "Himanshu",
              image: "/himanshu.png",
            },
          ],
          [
            {
              id: 1,
              text: "I felt skeptical about the concept of saving first and then getting discount but now i've been using this almost every alternative day \uD83E\uDD2F",
              author: "Rahul Gaur",
              image: "/rahul-gaur.png",
            },
            {
              id: 4,
              text: "Must app for frequent buyers. Provides good discounts & cashbacks which is 100% redeemable. Loved this app.",
              author: "Srikanth Reddy",
              image: "/srikanth-reddy.png",
            },
          ],
        ],
        z = [
          {
            question: "How Zave works?",
            answer:
              "Zave is a daily savings app that automatically saves ₹30 to ₹100 for you each day via UPI auto-debit. Your accumulated savings are stored in a Zave wallet, which you can use to purchase discounted vouchers from over 300 partner brands.",
          },
          {
            question: "What is daily savings or daily deposit?",
            answer:
              "Daily savings or daily deposit is a method for you to save small amounts separately in your Zave wallet. You can keep this growing and later use it to shop from Zave-partnered brands at discounts.",
          },
          {
            question: "What are the other benefits of daily savings?",
            answer:
              "Every day you Auto-save the set amount in your Zave wallet, and you get a chance to play a game and win the Zave cash reward. This Zave cash reward is 100% redeemable for shopping from our partnered brands.",
          },
          {
            question: "What is UPI Auto?",
            answer:
              "UPI Auto, UPI AutoPay, or UPI Automatic is a feature that helps you save automatically in your Zave wallet. Once you set a fixed or maximum daily amount, the system will handle the savings process for you.",
          },
          {
            question: "Can we club this discounts with other offers?",
            answer:
              "Most of the brands such as Zomato, Amazon, and Uber let you club the existing offers. Although a few brands such as MakeMyTrip don't allow you to club the existing offers.",
          },
          {
            question: "How can I reachout to the support team?",
            answer:
              "You can reach out to us at [support@zave.app](mailto:support@zave.app), via the chatbox in the app, or through the chat feature at the bottom of our website.",
          },
        ],
        D = [
          { src: "/team-member-1.png", alt: "Team Member 1" },
          { src: "/team-member-2.png", alt: "Team Member 2" },
          { src: "/team-member-3.png", alt: "Team Member 3" },
        ],
        S = "/zave-qr.png",
        A = "Zave QR Code",
        P = "Download Zave",
        E = "Save up & Get discount",
        I = {
          src: "/zave-rating.png",
          alt: "Zave Rating",
          text: "4.5 • 25 reviews",
        },
        M = [
          {
            src: "/download-google-play.png",
            alt: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.zave.penny",
          },
          {
            src: "/download-app-store.png",
            alt: "App Store",
            href: "https://apps.apple.com/in/app/zave-save-up-get-discounts/id6502867888",
          },
        ],
        U = "/hero-image.png",
        q = "Zave App Screenshot";
      function C() {
        let [e, a] = (0, n.useState)(M[0].href),
          [t, l] = (0, n.useState)(null),
          [d, m] = (0, n.useState)("default");
        return (
          (0, n.useEffect)(() => {
            {
              var e;
              let t =
                  (null === (e = r.Z.OS) || void 0 === e
                    ? void 0
                    : e.toLowerCase()) || "",
                s = {
                  android: "android",
                  win: "default",
                  ios: "ios",
                  mac: "default",
                  linux: "default",
                  default: "default",
                },
                l = s[Object.keys(s).find((e) => t.includes(e))] || s.default;
              m(l), a(M["ios" === l ? 1 : 0].href);
            }
          }, []),
          (0, s.jsxs)("main", {
            className: "".concat(i().className, " text-white"),
            children: [
              (0, s.jsx)(o, { appLink: e }),
              (0, s.jsx)("section", {
                className:
                  "hero container mx-auto px-4 md:px-0 py-8 md:py-24 border-b border-t border-zinc-700 md:border-zinc-900",
                children: (0, s.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row md:justify-between items-center ",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "md:w-7/12",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "hidden md:inline-flex items-center space-x-2 bg-eerie-black rounded-full pl-2.5 pr-4 py-2 mb-6",
                          children: [
                            (0, s.jsxs)("span", {
                              className:
                                "pl-2.5 pr-2 py-0.5 inline-flex items-center space-x-2 bg-charleston-green border border-zinc-700 rounded-full",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "text-sm",
                                  children: x,
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "w-3 h-3 bg-green-500 rounded-full",
                                }),
                              ],
                            }),
                            (0, s.jsx)("span", {
                              className: "text-sm",
                              children: h,
                            }),
                          ],
                        }),
                        (0, s.jsx)("h1", {
                          className:
                            "mb-4 md:mb-6 text-3xl md:text-5.5xl font-semibold leading-tight",
                          children: "MAKE YOUR EVERYDAY SPENDING, WELL-SPENT.",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "mb-8 md:mb-12 md:pr-16 text-xl md:text-4xl font-light text-gray-400",
                          children:
                            "Start saving small everyday & get discounts on 300+ brands: over & above existing offers \uD83D\uDCB8",
                        }),
                        (0, s.jsxs)("a", {
                          className:
                            "hidden px-16 py-5 md:inline-flex items-center bg-white space-x-3 text-xl text-black rounded-xl",
                          href: e,
                          children: [
                            (0, s.jsx)("img", {
                              src: g,
                              alt: "",
                              className: "w-6",
                            }),
                            (0, s.jsx)("span", { children: p }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "md:w-5/12 flex md:justify-end",
                      children: (0, s.jsx)("img", {
                        className: "w-96 md:mx-8",
                        src: u,
                        alt: f,
                      }),
                    }),
                    (0, s.jsxs)("a", {
                      className:
                        "md:hidden mt-12 w-full py-5 flex justify-center items-center bg-white space-x-3 text-xl text-black rounded-xl",
                      href: e,
                      children: [
                        (0, s.jsx)("img", {
                          src: g,
                          alt: "",
                          className: "w-6",
                        }),
                        (0, s.jsx)("span", { children: p }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("section", {
                className: "brands px-4 md:px-0 py-8 md:py-24",
                children: (0, s.jsxs)("div", {
                  className:
                    "container mx-auto flex flex-col gap-y-12 md:gap-y-0 md:gap-x-32 md:flex-row md:justify-between items-center",
                  children: [
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("h2", {
                          className: "mb-6 text-4xl text-center font-semibold",
                          children: "Select a brand to try out \uD83D\uDC47",
                        }),
                        (0, s.jsx)("div", {
                          className: "flex flex-col gap-y-2 md:gap-y-6",
                          children: y.map((e) =>
                            (0, s.jsx)(
                              "div",
                              {
                                className:
                                  "flex justify-between items-center md:gap-x-6",
                                children: e.map((e) =>
                                  (0, s.jsx)(
                                    "div",
                                    {
                                      className:
                                        "h-20 w-20 md:h-32 md:w-32 flex items-center justify-center",
                                      children: (0, s.jsx)("img", {
                                        className:
                                          "h-20 w-20 md:h-32 md:w-32 border border-zinc-800 rounded-2xl",
                                        src: e.image,
                                        alt: e.name,
                                      }),
                                    },
                                    e.name
                                  )
                                ),
                              },
                              e[0].name
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "p-6 md:p-10 flex flex-col justify-between items-center gap-y-6 bg-charleston-green rounded-3xl",
                      children: [
                        (0, s.jsx)("img", {
                          className: "w-full",
                          src: b,
                          alt: v,
                        }),
                        (0, s.jsx)("h2", {
                          className:
                            "text-2xl md:text-4xl text-center font-semibold",
                          children: j,
                        }),
                        (0, s.jsx)("button", {
                          className:
                            "py-3 md:py-4 px-10 md:px-12 flex items-center justify-center bg-pink-500 text-white text-lg md:text-xl font-semibold rounded-full",
                          children: w,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("section", {
                className:
                  "how-it-works z-10 px-4 md:px-0 py-8 md:py-24 bg-chinese-black",
                children: (0, s.jsxs)("div", {
                  className:
                    "container mx-auto flex flex-col md:flex-row md:justify-between",
                  children: [
                    (0, s.jsx)("div", {
                      className: "h-auto",
                      children: (0, s.jsx)("div", {
                        className: "md:sticky md:top-32",
                        children: (0, s.jsx)("h2", {
                          className:
                            "text-4xl md:text-6xl text-center md:text-left font-semibold mb-6",
                          children: "How Zave Works?",
                        }),
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex flex-col gap-y-12 md:gap-y-20",
                      children: N[d].map((e, a) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "md:sticky md:top-32 z-10 px-7 py-7 md:px-8 md:py-8 bg-charleston-green rounded-3xl ".concat(
                                a % 2 == 1 ? "-rotate-3" : "rotate-3",
                                " "
                              ),
                            children: [
                              (0, s.jsx)("img", {
                                className:
                                  "h-96 md:h-80 md:w-120 mb-6 border rounded-2xl",
                                src: e.image,
                                alt: e.title,
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "md:w-120 text-2xl md:text-3xl font-medium md:font-semibold leading-tight",
                                children: e.title,
                              }),
                            ],
                          },
                          e.title
                        )
                      ),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("section", {
                className:
                  "features px-4 md:px-0 pt-8 pb-12 md:py-24 sm:px-6 lg:px-8 flex flex-col items-center bg-woodsmoke-black",
                children: (0, s.jsxs)("div", {
                  className:
                    "w-full flex flex-col md:flex-row items-center justify-between gap-x-14",
                  children: [
                    (0, s.jsx)("h2", {
                      className:
                        "md:w-96 mb-12 text-4xl md:text-6xl text-center md:text-left font-bold",
                      children: "Why people trust us?",
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-12 gap-y-8",
                      children: k.map((e, a) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className: "flex flex-col items-center text-center",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-2 md:mb-4 bg-indigo-600 rounded-lg",
                                children: (0, s.jsx)("img", {
                                  className: "w-16 h-16 md:w-20 md:h-20",
                                  src: e.image,
                                  alt: e.title,
                                }),
                              }),
                              (0, s.jsx)("h3", {
                                className:
                                  "w-40 md:w-40 px-2 text-xl md:text-xl md:font-semibold",
                                children: e.title,
                              }),
                              e.subtitle &&
                                (0, s.jsx)("p", {
                                  className:
                                    "text-sm md:text-base text-gray-400",
                                  children: e.subtitle,
                                }),
                            ],
                          },
                          a
                        )
                      ),
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)("section", {
                className:
                  "testimonials pb-8 pt-8 px-4 md:px-0 md:py-20 flex flex-col items-center",
                children: [
                  (0, s.jsx)("h2", {
                    className:
                      "md:w-2/3 text-4xl md:text-5xl text-center font-semibold leading-tight",
                    children:
                      "Don't take our word for it, the response speaks for itself!",
                  }),
                  (0, s.jsx)("span", {
                    className: "w-56 my-8 md:my-12 border-b border-zinc-800",
                  }),
                  (0, s.jsx)("div", {
                    className: "flex flex-col items-center gap-y-8 md:gap-y-16",
                    children: Z.map((e) =>
                      (0, s.jsx)(
                        "div",
                        {
                          className:
                            "flex flex-col md:flex-row gap-x-16 gap-y-6 md:gap-y-16",
                          children: e.map((e) =>
                            (0, s.jsxs)(
                              "article",
                              {
                                className:
                                  "md:w-80 pb-6 md:pb-0 border-b md:border-none border-zinc-800",
                                children: [
                                  (0, s.jsx)("blockquote", {
                                    className:
                                      "text-xl md:text-2xl font-light mb-4",
                                    children: e.text,
                                  }),
                                  (0, s.jsxs)("footer", {
                                    className: "flex items-center gap-x-3",
                                    children: [
                                      (0, s.jsx)("img", {
                                        className: "h-10 w-10 rounded-full",
                                        src: e.image,
                                        alt: e.author,
                                      }),
                                      (0, s.jsx)("cite", {
                                        className:
                                          "text-base text-zinc-400 not-italic",
                                        children: e.author,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.author
                            )
                          ),
                        },
                        e[0].author
                      )
                    ),
                  }),
                ],
              }),
              (0, s.jsx)("section", {
                className:
                  "faqs pb-8 pt-8 px-4 md:px-0 md:py-20 bg-woodsmoke-black",
                children: (0, s.jsxs)("div", {
                  className:
                    "container mx-auto flex flex-col items-center justify-between gap-y-16 md:gap-y-24",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "md:w-2/3 flex flex-col items-center justify-between gap-y-8 md:gap-y-12",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "w-full text-center",
                          children: [
                            (0, s.jsx)("h2", {
                              className:
                                "mb-2 md:mb-4 text-4xl md:text-5xl font-semibold leading-tight",
                              children: "Got questions?",
                            }),
                            (0, s.jsx)("p", {
                              className: "text-xl text-gray-400",
                              children: "No worries, we've got the answers.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "w-full",
                          children: z.map((e, a) =>
                            (0, s.jsxs)(
                              "div",
                              {
                                className: "border-b border-gray-700",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      "w-full pt-6 pb-6 flex justify-between items-center text-left cursor-pointer",
                                    onClick: () =>
                                      l((e) => (e === a ? null : a)),
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: "text-lg font-medium",
                                        children: e.question,
                                      }),
                                      (0, s.jsx)("img", {
                                        className:
                                          "h-6 w-6 transition-transform duration-300 ".concat(
                                            t === a ? "rotate-180" : ""
                                          ),
                                        src:
                                          t === a
                                            ? "/faq-close.svg"
                                            : "/faq-open.svg",
                                        alt: "Toggle FAQ",
                                      }),
                                    ],
                                  }),
                                  t === a &&
                                    (0, s.jsx)("p", {
                                      className:
                                        "pb-6 text-lg md:text-base text-gray-400",
                                      children: e.answer,
                                    }),
                                ],
                              },
                              a
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "w-full px-6 py-6 md:px-8 md:py-10 bg-shark-black text-center rounded-lg",
                      children: [
                        (0, s.jsx)("div", {
                          className: "mb-6 flex justify-center items-center",
                          children: D.map((e, a) =>
                            (0, s.jsx)(
                              "img",
                              {
                                src: e.src,
                                alt: e.alt,
                                className: "h-"
                                  .concat(1 === a ? "20" : "16", " ")
                                  .concat(0 !== a ? "-ml-3" : "-mr-3", " ")
                                  .concat(
                                    1 === a ? "z-10" : "",
                                    " border-2 border-white rounded-full"
                                  ),
                              },
                              a
                            )
                          ),
                        }),
                        (0, s.jsxs)("div", {
                          className: "mb-8 flex flex-col gap-y-1.5",
                          children: [
                            (0, s.jsx)("h2", {
                              className:
                                "mb-1 md:mb-0 text-2xl md:text-3xl font-semibold",
                              children: "Still have questions?",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-lg md:text-xl font-light text-gray-400",
                              children:
                                "Can't find the answer you're looking for? Chat with our team directly.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("button", {
                          className:
                            "bg-white text-black font-semibold py-3 px-6 rounded",
                          children: "Chat now",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("section", {
                className: "faqs pb-8 pt-8 px-4 md:px-0 md:py-20",
                children: (0, s.jsx)("div", {
                  className:
                    "container mx-auto flex flex-col items-center justify-between gap-y-16 md:gap-y-24",
                  children: (0, s.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-between gap-y-12",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "md:w-4/5 text-center",
                        children: [
                          (0, s.jsx)("h2", {
                            className:
                              "mb-4 text-4xl md:text-5xl font-semibold leading-tight",
                            children: "Get refreshing savings experience!",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "md:px-36 text-lg md:text-2xl text-gray-400",
                            children:
                              "We designed Zave for young India to help them save & earn discounts to encourage good money behaviour.",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col md:flex-row items-center gap-y-12",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-y-6",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "px-6 py-6 hidden md:flex gap-x-6 bg-charleston-green rounded-3xl",
                                children: [
                                  (0, s.jsx)("img", {
                                    className: "h-28 md:h-48",
                                    src: S,
                                    alt: A,
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-col justify-between md:w-80 text-left",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        children: [
                                          (0, s.jsx)("h3", {
                                            className:
                                              "text-2xl md:text-3xl font-semibold",
                                            children: P,
                                          }),
                                          (0, s.jsx)("p", {
                                            className:
                                              "text-lg text-gray-400 mb-2",
                                            children: E,
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex flex-col md:flex-row items-center gap-x-3",
                                        children: [
                                          (0, s.jsx)("img", {
                                            src: I.src,
                                            alt: I.alt,
                                            className: "h-6",
                                          }),
                                          (0, s.jsx)("span", {
                                            className: "text-lg text-gray-400",
                                            children: I.text,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "md:hidden flex flex-col items-center gap-y-4",
                                children: [
                                  (0, s.jsxs)("a", {
                                    className:
                                      "px-12 py-5 flex justify-center items-center bg-white gap-x-3 text-xl text-black rounded-xl",
                                    href: e,
                                    children: [
                                      (0, s.jsx)("img", {
                                        src: g,
                                        alt: "",
                                        className: "w-6",
                                      }),
                                      (0, s.jsx)("span", { children: p }),
                                    ],
                                  }),
                                  (0, s.jsx)("p", {
                                    children:
                                      "Available for both Android & iOS",
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: "flex justify-center space-x-4",
                                children: M.map((e, a) =>
                                  (0, s.jsx)(
                                    "a",
                                    {
                                      className:
                                        "px-2 py-2 md:px-0 md:py-0 border border-zinc-700 rounded-lg",
                                      href: e.href,
                                      children: (0, s.jsx)("img", {
                                        src: e.src,
                                        alt: e.alt,
                                        className: "h-12 md:h-16",
                                      }),
                                    },
                                    a
                                  )
                                ),
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "md:w-5/12 flex md:justify-end",
                            children: (0, s.jsx)("img", {
                              className: "w-72 md:mx-8",
                              src: U,
                              alt: q,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, s.jsx)(c, {}),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [366, 424, 233, 971, 23, 744], function () {
      return e((e.s = 7914));
    }),
      (_N_E = e.O());
  },
]);
