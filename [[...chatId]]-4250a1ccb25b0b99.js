(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6],
  {
    49529: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/chat/[[...chatId]]",
        function () {
          return t(34491);
        },
      ]);
    },
    34491: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return ag;
          },
          default: function () {
            return av;
          },
        });
      var r,
        a,
        o,
        i = t(35250),
        s = t(91530),
        l = t.n(s),
        u = t(61432),
        c = t(70079),
        d = t(73925),
        f = t(96424),
        m = t.n(f),
        h = t(12762),
        g = t(98943),
        v = t(62676),
        p = t(66285),
        x = t(79876),
        b = t(44819),
        y = "oai/apps/hasSeenReleaseAnnouncement",
        j = "2023-03-12";
      function w(e) {
        var n = e.hasSeenOnboardingDate;
        e.isUserPaid;
        var t = (0, c.useState)(!1),
          r = t[0],
          a = t[1],
          o = (0, p.hz)(),
          s = (0, u.useRouter)();
        (0, c.useEffect)(
          function () {
            a(function () {
              return (
                !Boolean(v.m.getItem("".concat(y, "/").concat(j))) &&
                !!n &&
                n < new Date(j)
              );
            });
          },
          [n]
        );
        var l = (0, c.useCallback)(function () {
            v.m.setItem("".concat(y, "/").concat(j), !0), a(!1);
          }, []),
          f = (0, c.useCallback)(
            function () {
              l(),
                s.replace("/chat?model=".concat(b.f_), void 0, { shallow: !0 });
            },
            [l, s]
          ),
          m = (0, h.WS)();
        return ((0, c.useEffect)(
          function () {
            r && m(g.s6.announcementViewed, { content: j });
          },
          [r, m]
        ),
        o.has("model_preview"))
          ? (0, i.jsx)(d.Z, {
              size: "small",
              isOpen: r,
              onModalClose: l,
              type: "success",
              title: "",
              theme: "dark",
              fullBleed: !0,
              primaryButton: (0, i.jsx)(d.m, {
                title: "Try GPT-4",
                color: "light",
                onClick: f,
              }),
              secondaryButton: (0, i.jsx)(d.m, {
                title: "Maybe later",
                color: "dark",
                onClick: l,
                className: "border-gray-800 hover:border-gray-700",
              }),
              className: "sm:max-w-[480px]",
              children: (0, i.jsx)(C, {}),
            })
          : null;
      }
      var C = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(m(), {
                src: "/images/gpt-4-motif.svg",
                alt: "Gpt-4 announcement banner",
                width: "480",
                height: "160",
                className: "mt-3.5",
              }),
              (0, i.jsx)("div", {
                className: "m-4 mb-6 flex flex-col gap-6 sm:m-6",
                children: (0, i.jsxs)("div", {
                  className: "prose prose-invert text-base",
                  children: [
                    (0, i.jsx)("h2", { children: "Introducing GPT-4" }),
                    (0, i.jsxs)("p", {
                      children: [
                        "Our latest model,",
                        " ",
                        (0, i.jsx)("a", {
                          href: "https://openai.com/product/gpt-4",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "GPT-4",
                        }),
                        ", is now available to Plus subscribers.",
                      ],
                    }),
                    (0, i.jsx)("p", {
                      children: "GPT-4 has enhanced capabilities in:",
                    }),
                    (0, i.jsxs)("ul", {
                      children: [
                        (0, i.jsx)("li", { children: "Advanced reasoning" }),
                        (0, i.jsx)("li", { children: "Complex instructions" }),
                        (0, i.jsx)("li", { children: "More creativity" }),
                      ],
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "To give every Plus subscriber a chance to try the model, we'll dynamically adjust the cap for GPT-4 usage based on demand.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        k = t(61706),
        Z = t(33861),
        N = t(31501),
        M = t(61079),
        S = t(89874),
        P = t(14806),
        I = t(64705),
        T = t(25769),
        R = t(45813),
        F = t(87093),
        _ = t(6128),
        D = t(19841),
        q = t(26649),
        L = t.n(q),
        A = t(11253),
        E = t.n(A),
        U = t(48240),
        B = t(34303),
        O = t(82018),
        z = t(36613),
        G = t(68619),
        V = t(33264),
        $ = "dfw_message_feedback",
        H = {
          AD: "Andorra",
          AE: "United Arab Emirates",
          AG: "Antigua and Barbuda",
          AI: "Anguilla",
          AL: "Albania",
          AM: "Armenia",
          AO: "Angola",
          AQ: "Antarctica",
          AR: "Argentina",
          AS: "American Samoa",
          AT: "Austria",
          AU: "Australia",
          AW: "Aruba",
          AX: "\xc5land Islands",
          AZ: "Azerbaijan",
          BA: "Bosnia and Herzegovina",
          BB: "Barbados",
          BD: "Bangladesh",
          BE: "Belgium",
          BF: "Burkina Faso",
          BG: "Bulgaria",
          BJ: "Benin",
          BL: "Saint Barth\xe9lemy",
          BM: "Bermuda",
          BN: "Brunei",
          BO: "Bolivia",
          BQ: "Caribbean Netherlands",
          BR: "Brazil",
          BS: "The Bahamas",
          BT: "Bhutan",
          BV: "Bouvet Island",
          BW: "Botswana",
          BZ: "Belize",
          CA: "Canada",
          CC: "Cocos (Keeling) Islands",
          CG: "The Republic of the Congo",
          CH: "Switzerland",
          CI: "Ivory Coast",
          CK: "Cook Islands",
          CL: "Chile",
          CO: "Colombia",
          CR: "Costa Rica",
          CV: "Cape Verde",
          CW: "Cura\xe7ao",
          CX: "Christmas Island",
          CY: "Cyprus",
          CZ: "Czech Republic",
          DE: "Germany",
          DJ: "Djibouti",
          DK: "Denmark",
          DM: "Dominica",
          DO: "Dominican Republic",
          DZ: "Algeria",
          EC: "Ecuador",
          EE: "Estonia",
          EH: "Western Sahara",
          ES: "Spain",
          FI: "Finland",
          FJ: "Fiji",
          FK: "Falkland Islands",
          FM: "Micronesia",
          FO: "Faroe Islands",
          FR: "France",
          GA: "Gabon",
          GB: "United Kingdom",
          GD: "Grenada",
          GE: "Georgia",
          GF: "French Guiana",
          GG: "Guernsey",
          GH: "Ghana",
          GI: "Gibraltar",
          GL: "Greenland",
          GM: "Gambia",
          GN: "Guinea",
          GP: "Guadeloupe",
          GR: "Greece",
          GS: "South Georgia and the South Sandwich Islands",
          GT: "Guatemala",
          GU: "Guam",
          GW: "Guinea-Bissau",
          GY: "Guyana",
          HM: "Heard Island and McDonald Islands",
          HN: "Honduras",
          HR: "Croatia",
          HT: "Haiti",
          HU: "Hungary",
          ID: "Indonesia",
          IE: "Ireland",
          IL: "Israel",
          IM: "Isle of Man",
          IO: "British Indian Ocean Territory",
          IQ: "Iraq",
          IS: "Iceland",
          IT: "Italy",
          JE: "Jersey",
          JM: "Jamaica",
          JO: "Jordan",
          JP: "Japan",
          KE: "Kenya",
          KG: "Kyrgyzstan",
          KI: "Kiribati",
          KM: "Comoros",
          KN: "Saint Kitts and Nevis",
          KR: "South Korea",
          KW: "Kuwait",
          KY: "Cayman Islands",
          KZ: "Kazakhstan",
          LB: "Lebanon",
          LC: "Saint Lucia",
          LI: "Liechtenstein",
          LK: "Sri Lanka",
          LR: "Liberia",
          LS: "Lesotho",
          LT: "Lithuania",
          LU: "Luxembourg",
          LV: "Latvia",
          MA: "Morocco",
          MC: "Monaco",
          MD: "Moldova",
          ME: "Montenegro",
          MF: "Saint Martin",
          MG: "Madagascar",
          MH: "The Marshall Islands",
          MK: "North Macedonia",
          ML: "Mali",
          MM: "Myanmar",
          MN: "Mongolia",
          MP: "The Northern Mariana Islands",
          MQ: "Martinique",
          MR: "Mauritania",
          MS: "Montserrat",
          MT: "Malta",
          MU: "Mauritius",
          MV: "Maldives",
          MW: "Malawi",
          MX: "Mexico",
          MY: "Malaysia",
          MZ: "Mozambique",
          NA: "Namibia",
          NC: "New Caledonia",
          NE: "Niger",
          NF: "Norfolk Island",
          NG: "Nigeria",
          NI: "Nicaragua",
          NL: "Netherlands",
          NO: "Norway",
          NP: "Nepal",
          NR: "Nauru",
          NU: "Niue",
          NZ: "New Zealand",
          OM: "Oman",
          PA: "Panama",
          PE: "Peru",
          PF: "French Polynesia",
          PG: "Papua New Guinea",
          PH: "Philippines",
          PK: "Pakistan",
          PL: "Poland",
          PM: "Saint Pierre and Miquelon",
          PN: "Pitcairn",
          PR: "Puerto Rico",
          PS: "Palestine",
          PT: "Portugal",
          PW: "Palau",
          PY: "Paraguay",
          QA: "Qatar",
          RE: "Reunion",
          RO: "Romania",
          RS: "Serbia",
          RW: "Rwanda",
          SB: "Solomon Islands",
          SC: "The Seychelles",
          SE: "Sweden",
          SG: "Singapore",
          SH: "Saint Helena, Ascension and Tristan da Cunha",
          SI: "Slovenia",
          SJ: "Svalbard and Jan Mayen",
          SK: "Slovakia",
          SL: "Sierra Leone",
          SM: "San Marino",
          SN: "Senegal",
          SR: "Suriname",
          ST: "Sao Tome and Principe",
          SV: "El Salvador",
          SX: "Sint Maarten",
          TC: "Turks and Caicos Islands",
          TF: "French Southern Territories",
          TG: "Togo",
          TH: "Thailand",
          TK: "Tokelau",
          TL: "Timor-Leste",
          TN: "Tunisia",
          TO: "Tonga",
          TR: "Turkey",
          TT: "Trinidad and Tobago",
          TV: "Tuvalu",
          TW: "Taiwan",
          TZ: "Tanzania",
          UA: "Ukraine",
          UG: "Uganda",
          UM: "The United States Minor Outlying Islands",
          US: "The United States",
          UY: "Uruguay",
          VA: "Vatican City",
          VC: "Saint Vincent and the Grenadines",
          VG: "British Virgin Islands",
          VI: "U.S. Virgin Islands",
          VN: "Vietnam",
          VU: "Vanuatu",
          WF: "Wallis and Futuna",
          WS: "Samoa",
          YT: "Mayotte",
          ZA: "South Africa",
          ZM: "Zambia",
          ZW: "Zimbabwe",
        },
        J = t(27252),
        W = {
          id: "chat",
          name: "ChatGPT",
          href: "/chat",
          theme: { icon: "openai", color: "#10a37f", activeColor: "#1a7f64" },
        },
        K = t(11699),
        Y = t(80836),
        Q = t(2827),
        X = t(39690);
      function ee(e) {
        var n = e.id,
          t = e.label;
        return (0, i.jsxs)("div", {
          className: "form-check",
          children: [
            (0, i.jsx)("input", {
              className:
                "form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
              type: "checkbox",
              value: "",
              id: n,
            }),
            (0, i.jsx)("label", {
              className:
                "form-check-label inline-block text-gray-800 dark:text-gray-100",
              htmlFor: n,
              children: t,
            }),
          ],
        });
      }
      var en = t(97374),
        et = t.n(en),
        er = t(23119),
        ea = t(95182),
        eo = t.n(ea);
      function ei() {
        var e = (0, P.Z)(["text-xs flex items-center justify-center gap-1"]);
        return (
          (ei = function () {
            return e;
          }),
          e
        );
      }
      function es() {
        var e = (0, P.Z)([
          "dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400",
        ]);
        return (
          (es = function () {
            return e;
          }),
          e
        );
      }
      function el() {
        var e = (0, P.Z)(["flex-grow flex-shrink-0"]);
        return (
          (el = function () {
            return e;
          }),
          e
        );
      }
      function eu(e) {
        var n = e.currentPage,
          t = e.onChangeIndex,
          r = e.length,
          a = e.className,
          o = function (e) {
            t(eo()(n + e, 0, r - 1));
          };
        return (0, i.jsxs)(ec, {
          className: a,
          children: [
            (0, i.jsx)(ed, {
              onClick: function () {
                return o(-1);
              },
              disabled: 0 === n,
              children: (0, i.jsx)(x.ZP, { size: "xsmall", icon: U.YFh }),
            }),
            (0, i.jsx)(ef, { children: "".concat(n + 1, " / ").concat(r) }),
            (0, i.jsx)(ed, {
              onClick: function () {
                return o(1);
              },
              disabled: n === r - 1,
              children: (0, i.jsx)(x.ZP, { size: "xsmall", icon: U.Tfp }),
            }),
          ],
        });
      }
      var ec = B.Z.div(ei()),
        ed = B.Z.button(es()),
        ef = B.Z.span(el()),
        em = t(99847);
      function eh() {
        var e = (0, P.Z)(["text-center mt-2 flex justify-center"]);
        return (
          (eh = function () {
            return e;
          }),
          e
        );
      }
      var eg = B.Z.div(eh());
      function ev(e) {
        var n = e.initialText,
          t = e.role,
          r = e.threadId,
          a = e.currentLeaf,
          o = e.onUpdateNode,
          s = e.onChangeItemInView,
          l = e.onExitEdit,
          u = e.onDeleteNode,
          d = e.onRequestCompletion,
          f = e.onCreateEditNode,
          m = e.disabled,
          v = (0, h.WS)(),
          p = (0, c.useId)(),
          x = "".concat(a, "-").concat(p),
          b = (0, c.useState)(n || ""),
          y = b[0],
          j = b[1],
          w = (0, c.useRef)(null);
        (0, c.useEffect)(function () {
          f(a, x);
        }, []);
        var C = (0, c.useCallback)(function (e) {
            j(e.currentTarget.value);
          }, []),
          k = (0, c.useCallback)(
            function () {
              o(x, y), s(x), d(G.Os.Next, x, { eventSource: "mouse" }, !0), l();
            },
            [o, x, y, s, d, l]
          ),
          Z = (0, c.useCallback)(
            function () {
              u(x),
                s(a),
                l(),
                v(
                  t === G.uU.User
                    ? g.s6.cancelEditPrompt
                    : g.s6.cancelEditCompletion,
                  { threadId: r }
                );
            },
            [x, a, v, s, u, l, t, r]
          );
        return (
          (0, c.useEffect)(
            function () {
              var e = w.current,
                n = function (e) {
                  "Enter" === e.key && e.metaKey
                    ? k()
                    : "Escape" === e.key && Z();
                };
              return (
                e && e.addEventListener("keydown", n),
                function () {
                  e && e.removeEventListener("keydown", n);
                }
              );
            },
            [Z, k]
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(Q.ZP, {
                ref: w,
                value: y,
                onChange: C,
                className:
                  "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0",
              }),
              (0, i.jsxs)(eg, {
                children: [
                  (0, i.jsx)(X.z, {
                    as: "button",
                    onClick: k,
                    className: "mr-2",
                    disabled: m,
                    children: "Save & Submit",
                  }),
                  (0, i.jsx)(X.z, {
                    as: "button",
                    color: "neutral",
                    onClick: Z,
                    children: "Cancel",
                  }),
                ],
              }),
            ],
          })
        );
      }
      var ep = t(77434),
        ex = t(47635);
      function eb() {
        var e = (0, P.Z)(["text-sm dark:text-gray-700\n", ""]);
        return (
          (eb = function () {
            return e;
          }),
          e
        );
      }
      function ey() {
        var e = (0, P.Z)(["text-xs text-gray-500 line-clamp-3"]);
        return (
          (ey = function () {
            return e;
          }),
          e
        );
      }
      function ej() {
        var e = (0, P.Z)(["relative w-full overflow-hidden pt-[75%]"]);
        return (
          (ej = function () {
            return e;
          }),
          e
        );
      }
      function ew(e) {
        var n = e.title,
          t = e.description,
          r = e.url,
          a = e.imageUrl,
          o = e.className,
          s = e.metadataTitle,
          l = e.iconUrl,
          u = e.mini,
          d = Boolean(a),
          f = !(void 0 !== u && u) && !d,
          m = (0, h.WS)(),
          v = (0, c.useCallback)(
            function () {
              m(g.s6.carouselCardClick, { content: r });
            },
            [m, r]
          );
        return (0, i.jsxs)(r ? "a" : "div", {
          className: (0, D.Z)(
            "block w-full overflow-hidden rounded-lg bg-white shadow-sm shadow-gray-500",
            o
          ),
          href: r,
          target: r ? "_blank" : "",
          onClick: v,
          children: [
            d &&
              (0, i.jsx)(eM, {
                children: (0, i.jsx)("div", {
                  className: "absolute inset-0",
                  children: (0, i.jsx)("img", {
                    src: a,
                    alt: "image of ".concat(n),
                    className: "h-full w-full object-cover",
                  }),
                }),
              }),
            f && (0, i.jsx)(ek, { title: n, description: t }),
            (0, i.jsxs)("div", {
              className: "flex flex-col gap-2 p-3",
              children: [
                !f && (0, i.jsx)(eZ, { $clamp: d, children: n }),
                (0, i.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    l &&
                      (0, i.jsx)("img", {
                        src: l,
                        alt: "Logo for ".concat(s),
                        className: "h-6 w-6 rounded-md",
                      }),
                    s && (0, i.jsx)(eN, { children: s }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var eC = "43px",
        ek = function (e) {
          var n = e.title,
            t = e.description;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(eM, {
                children: (0, i.jsxs)("div", {
                  className: "absolute inset-0 flex flex-col gap-2 p-3",
                  children: [
                    n && (0, i.jsx)(eZ, { $clamp: !1, children: n }),
                    t && (0, i.jsx)(eN, { children: t }),
                  ],
                }),
              }),
              (0, i.jsx)("div", { className: "m-1 min-h-[".concat(eC, "]") }),
            ],
          });
        },
        eZ = B.Z.div(eb(), function (e) {
          return e.$clamp && "line-clamp-2 min-h-[".concat(eC, "]");
        }),
        eN = B.Z.div(ey()),
        eM = B.Z.div(ej()),
        eS = t(36025),
        eP = t(41135),
        eI = t(68483),
        eT = t.n(eI);
      function eR(e) {
        var n = e.disabled,
          t = e.onClick,
          r = e.left,
          a = e.children;
        return (0, i.jsx)("button", {
          disabled: n,
          onClick: t,
          "aria-disabled": n,
          className: (0, D.Z)(
            "absolute top-full flex h-10 w-10 translate-y-1/4 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white shadow-sm transition-opacity hover:bg-gray-100 disabled:cursor-auto disabled:opacity-20 disabled:hover:bg-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:disabled:hover:bg-gray-700 lg:top-1/2 lg:h-8 lg:w-8 lg:-translate-y-1/2",
            void 0 !== r && r
              ? "left-1/2 -translate-x-3/4 lg:-left-2 lg:-translate-x-full"
              : "left-1/2 translate-x-3/4 lg:left-auto lg:-right-2 lg:translate-x-full"
          ),
          children: a,
        });
      }
      var eF = t(794),
        e_ = function (e) {
          var n = e.x,
            t = e.children,
            r = e.className;
          return (0, i.jsx)(eF.E.div, {
            className: (0, D.Z)(
              "h-full w-3/4 flex-none px-[1px] pr-4 sm:w-2/5 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4",
              r
            ),
            style: { x: n },
            children: t,
          });
        },
        eD = { type: "spring", bounce: 0 },
        eq = (0, c.forwardRef)(function (e, n) {
          return (0,
          i.jsx)("div", { ref: n, className: (0, D.Z)("relative flex h-full w-full", e.className), children: e.children });
        });
      eq.displayName = "CarouselContainer";
      var eL =
          ((r = {}),
          (0, Z.Z)(r, K._G.Small, 3 / 4),
          (0, Z.Z)(r, K._G.Medium, 0.4),
          (0, Z.Z)(r, K._G.Large, 0.5),
          (0, Z.Z)(r, K._G.XLarge, 0.5),
          (0, Z.Z)(r, K._G.Full, 1 / 3),
          r),
        eA =
          ((a = {}),
          (0, Z.Z)(a, K._G.Small, 1),
          (0, Z.Z)(a, K._G.Medium, 2),
          (0, Z.Z)(a, K._G.Large, 2),
          (0, Z.Z)(a, K._G.XLarge, 2),
          (0, Z.Z)(a, K._G.Full, 3),
          a);
      function eE(e) {
        var n = e.children,
          t = e.loop,
          r = void 0 === t || t,
          a = e.className,
          o = (0, eS.c)(0),
          s = (0, c.useRef)(null),
          l = (0, c.useState)(0),
          u = l[0],
          d = l[1],
          f = (0, K.dQ)(),
          m = eA[f] || 1,
          h = c.Children.count(n) > m,
          g = c.Children.toArray(n),
          v = (0, c.useCallback)(
            function () {
              var e;
              return (
                -u *
                ((null === (e = s.current) || void 0 === e
                  ? void 0
                  : e.clientWidth) || 0) *
                (eL[f] || 1)
              );
            },
            [f, u]
          ),
          p = function (e, n) {
            var t,
              r =
                (null === (t = s.current) || void 0 === t
                  ? void 0
                  : t.clientWidth) || 0,
              a = n.offset;
            a.x > r / 4 ? j() : a.x < -r / 4 ? y() : (0, eP.j)(o, v(), eD);
          },
          b = (0, c.useCallback)(
            function (e) {
              var n = m * e;
              r
                ? d(function (e) {
                    return ((e + n) % g.length) - 1;
                  })
                : d(function (e) {
                    return eo()(e + n, 0, g.length - 1);
                  });
            },
            [g.length, r, m]
          ),
          y = (0, c.useCallback)(
            function () {
              b(1);
            },
            [b]
          ),
          j = (0, c.useCallback)(
            function () {
              b(-1);
            },
            [b]
          ),
          w = (0, c.useMemo)(
            function () {
              if (r) return [!0, !0];
              var e = u < g.length - m;
              return [u > 0, e];
            },
            [g.length, u, r, m]
          ),
          C = w[0],
          k = w[1];
        return (
          (0, c.useEffect)(
            function () {
              return (0, eP.j)(o, v(), eD).stop;
            },
            [v, u, o]
          ),
          (0, i.jsxs)("div", {
            className: (0, D.Z)(
              "relative h-full w-full",
              a,
              h && "mb-16 lg:mb-4"
            ),
            children: [
              (0, i.jsx)(eq, {
                ref: s,
                children: g.map(function (e, n) {
                  return (0,
                  i.jsx)(e_, { onDragEnd: p, x: o, i: n, className: (0, D.Z)("transition-opacity", !eT()(n, u, u + m) && "opacity-50"), children: e }, n);
                }),
              }),
              h &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(eR, {
                      onClick: j,
                      left: !0,
                      disabled: !C,
                      children: (0, i.jsx)(x.ZP, { icon: U.YFh }),
                    }),
                    (0, i.jsx)(eR, {
                      onClick: y,
                      disabled: !k,
                      children: (0, i.jsx)(x.ZP, { icon: U.Tfp }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var eU = t(500),
        eB = t(62588);
      function eO() {
        var e = (0, c.useContext)(eU.A),
          n = (0, eB.Z)().installedPlugins;
        return (0, c.useMemo)(
          function () {
            return n.filter(function (n) {
              return e.has(n.id);
            });
          },
          [e, n]
        );
      }
      var ez = new Set([
          "og:site_name",
          "og:title",
          "og:description",
          "og:image",
          "og:url",
        ]),
        eG = {
          "og:site_name": "metadataTitle",
          "og:title": "title",
          "og:description": "description",
          "og:image": "imageUrl",
          "og:url": "url",
        },
        eV =
          /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        e$ = new Set(["airbnb.com", "inst.cr"]),
        eH = c.memo(function (e) {
          var n,
            t,
            r,
            a,
            o = e.urlsToOpengraphTags,
            s = eO(),
            l =
              ((n = { urls: Array.from(o.keys()) }),
              (t = n.urls),
              (r = (0, O.kP)().session),
              (a = (0, ep.h)({
                queries: t.map(function (e) {
                  return {
                    queryKey: ["opengraph", e],
                    queryFn: (0, k.Z)(function () {
                      return (0, R.__generator)(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [4, V.ZP.getPageMetadata({ url: e })];
                          case 1:
                            return [2, n.sent()];
                        }
                      });
                    }),
                    enabled: Boolean(e && (null == r ? void 0 : r.accessToken)),
                    retry: !1,
                  };
                }),
              })),
              (0, c.useMemo)(
                function () {
                  return a
                    .map(function (e, n) {
                      var r,
                        a = e.data,
                        o = e.isError,
                        i = e.isLoading,
                        s = t[n];
                      if (o || i) return null;
                      var l = a.tags.reduce(function (e, n) {
                          return ez.has(n.type) && (e[eG[n.type]] = n.value), e;
                        }, {}),
                        u = s.split(/[#?]/)[0],
                        c =
                          null === (r = l.url) || void 0 === r
                            ? void 0
                            : r.endsWith("/login"),
                        d = l.url && "/" === new URL(l.url || "").pathname;
                      return u !== l.url && (c || d) ? null : ((l.url = s), l);
                    })
                    .filter(Boolean);
                },
                [a, t]
              )),
            u = (0, c.useMemo)(
              function () {
                return !l.some(function (e) {
                  return Boolean(null == e ? void 0 : e.imageUrl);
                });
              },
              [l]
            ),
            d = (0, c.useMemo)(
              function () {
                return s.reduce(function (e, n) {
                  return e.set(n.domain, n.manifest.logo_url), e;
                }, new Map());
              },
              [s]
            ),
            f = (0, c.useMemo)(
              function () {
                return 0 === l.length
                  ? null
                  : l.map(function (e) {
                      if (e) {
                        var n = o.get(e.url),
                          t = (n && d.get(n)) || "";
                        return (0, i.jsx)(
                          ew,
                          {
                            title: e.title,
                            description: e.description,
                            url: e.url,
                            imageUrl: e.imageUrl,
                            metadataTitle: n,
                            iconUrl: t,
                            mini: u,
                          },
                          e.url
                        );
                      }
                    });
              },
              [l, u, d, o]
            );
          return 0 === l.length
            ? null
            : (0, i.jsx)(eE, { loop: !1, children: f });
        }),
        eJ = t(75310);
      function eW() {
        var e = (0, P.Z)([
          "\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n",
          "\n",
          "\n",
          "\n",
        ]);
        return (
          (eW = function () {
            return e;
          }),
          e
        );
      }
      var eK = c.memo(function (e) {
        var n,
          t = e.message,
          r = e.isEditing,
          a = e.format,
          o = e.isCompletionInProgress,
          s = e.className,
          l = e.onSandboxLinkClick,
          u = e.isCompletion,
          c = (0, S.Z)(e, [
            "message",
            "isEditing",
            "format",
            "isCompletionInProgress",
            "className",
            "onSandboxLinkClick",
            "isCompletion",
          ]);
        return r
          ? (0, i.jsx)(
              ev,
              (0, N.Z)(
                {
                  currentLeaf: t.nodeId,
                  initialText: Y.Cv.getTextFromMessage(t.message),
                  role: Y.Cv.getRoleFromMessage(t.message),
                },
                c
              )
            )
          : (0, i.jsx)(eY, {
              text: Y.Cv.getTextFromMessage(t.message),
              errCode: t.errCode,
              err: t.err,
              flag: t.errType,
              isCompletionInProgress: o,
              format: a,
              className: s,
              citations:
                null === (n = t.message.metadata) || void 0 === n
                  ? void 0
                  : n.citations,
              isCompletion: u,
              onSandboxLinkClick: l,
              id: t.nodeId,
              onRequestMoreCompletions: c.onRequestMoreCompletions,
              threadId: c.threadId,
            });
      });
      function eY(e) {
        var n,
          t,
          r,
          a,
          o,
          s,
          l,
          u,
          d,
          f,
          m = e.citations,
          h = e.className,
          g = e.err,
          v = e.errCode,
          x = e.flag,
          y = e.format,
          j = e.isCompletionInProgress,
          w = e.size,
          C = e.text,
          k = e.onSandboxLinkClick,
          Z = e.isCompletion,
          N = e.id,
          M = e.onRequestMoreCompletions,
          S = e.threadId,
          P = v === z.Dd,
          I = (0, p.hz)(),
          T =
            ((t = (n = { text: C, isCompletionInProgress: j }).text),
            (r = n.isCompletionInProgress),
            (o = (a = (0, p.hz)()).has("tools3")),
            (s = a.has("tools3_dev")),
            (l = eO()),
            (u = (0, c.useMemo)(
              function () {
                return Array.from(l).reduce(function (e, n) {
                  var t = ex.get(n.domain);
                  return t && e.set(t, n.domain), e;
                }, new Map());
              },
              [l]
            )),
            (d = (0, c.useMemo)(
              function () {
                if (r) return !1;
                var e = t.match(eV);
                return new Set(e);
              },
              [r, t]
            )),
            (f = (0, c.useMemo)(
              function () {
                if (d) {
                  var e = Array.from(d).reduce(function (e, n) {
                    var t = ex.get(new URL(n).hostname),
                      r = u.get(t);
                    return (r || (s && e$.has(t))) && e.set(n, r || t), e;
                  }, new Map());
                  return e.size > 0 && e;
                }
              },
              [s, u, d]
            )),
            !!o && f),
          R = (0, c.useMemo)(
            function () {
              switch (v) {
                case z.Dd:
                  return (0, i.jsx)(e1, {
                    $flag: x,
                    children: (0, i.jsx)(e0, {}),
                  });
                case b.uU:
                  if (I.has("model_preview"))
                    return (0, i.jsx)(eX, {
                      id: N,
                      onRequestMoreCompletions: M,
                      flag: x,
                      threadId: S,
                    });
                  return (0, i.jsx)(e1, { $flag: x, children: g });
                default:
                  return (0, i.jsx)(e1, { $flag: x, children: g });
              }
            },
            [g, v, I, x, N, M, S]
          );
        return (0, i.jsxs)("div", {
          className: (0, D.Z)(
            h,
            "flex flex-col items-start gap-4 whitespace-pre-wrap",
            "danger" === x && "flex flex-row gap-2 text-red-500",
            "warning" === x && "text-orange-500"
          ),
          children: [
            (g && !C) || P || !y
              ? "danger" === x && P
                ? null
                : C
              : (0, i.jsx)(eJ.Z, {
                  size: void 0 === w ? "medium" : w,
                  className: (0, D.Z)(
                    "danger" !== x && j && "result-streaming",
                    "danger" === x && "text-red-500",
                    "warning" === x && "text-orange-500"
                  ),
                  onSandboxLinkClick: k,
                  children: "" === C ? "&#8203;" : (0, em.Qd)(C, m),
                }),
            Z && T && T.size > 0 && (0, i.jsx)(eH, { urlsToOpengraphTags: T }),
            x && R,
          ],
        });
      }
      function eQ(e) {
        var n = e && new Date(e),
          t = n && new Date(n);
        return t
          ? "after "
              .concat(t.getHours() % 12 || 12, ":")
              .concat(10 > t.getMinutes() ? "0" : "")
              .concat(t.getMinutes(), " ")
              .concat(t.getHours() >= 12 ? "PM" : "AM")
          : "later";
      }
      function eX(e) {
        var n = e.id,
          t = e.onRequestMoreCompletions,
          r = e.flag,
          a = e.threadId,
          o = (0, u.useRouter)(),
          s = (0, b.CS)(function (e) {
            return e.isoDate;
          }),
          l = eQ(s),
          d = (0, c.useCallback)(
            function () {
              t(n, { eventSource: "mouse" }, !0, !1);
            },
            [n, t]
          ),
          f = (0, c.useCallback)(
            function () {
              a ? (0, b.m0)(a) : o.replace("/chat", void 0, { shallow: !0 }),
                t(n, { eventSource: "mouse" }, !0, !0);
            },
            [n, t, o, a]
          ),
          m = s
            ? (0, i.jsxs)("span", {
                children: [
                  "You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again ".concat(
                    l,
                    "."
                  ),
                  " ",
                  (0, i.jsx)("a", {
                    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "underline",
                    children: "Learn more",
                  }),
                ],
              })
            : "You previously reached your usage cap for GPT-4, but you can now try sending your message again";
        return (0, i.jsx)(e1, {
          $flag: Boolean(s) && r,
          children: (0, i.jsxs)("div", {
            className: "flex items-center gap-6",
            children: [
              m,
              !s &&
                (0, i.jsx)(X.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: d,
                  children: "Try again",
                }),
              s &&
                (0, i.jsx)(X.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: f,
                  children: "Use default model",
                }),
            ],
          }),
        });
      }
      function e0() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            "This content may violate our",
            " ",
            (0, i.jsx)("a", {
              target: "_blank",
              href: "https://platform.openai.com/docs/usage-policies/content-policy",
              rel: "noreferrer",
              className: "bold underline",
              children: "content policy",
            }),
            ". If you believe this to be in error, please",
            " ",
            (0, i.jsx)("a", {
              target: "_blank",
              href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
              rel: "noreferrer",
              className: "bold underline",
              children: "submit your feedback",
            }),
            " ",
            "— your input will aid our research in this area.",
          ],
        });
      }
      var e1 = B.Z.div(
        eW(),
        function (e) {
          return "warning" === e.$flag && "border-orange-500 bg-orange-500/10";
        },
        function (e) {
          return "danger" === e.$flag && "border-red-500 bg-red-500/10";
        },
        function (e) {
          return !e.$flag && "border-green-500 bg-green-500/10";
        }
      );
      function e2(e) {
        var n = e.messages,
          t = e.isCompletionInProgress,
          r = e.isCompletion,
          a = n.reduce(function (e, n) {
            return n.err ? e : e + Y.Cv.getTextFromMessage(n.message);
          }, ""),
          o = n.filter(function (e) {
            return e.errCode === z.Dd;
          }),
          s = o.some(function (e) {
            return "danger" === e.errType;
          });
        return (0, i.jsx)(eY, {
          text: a,
          format: !0,
          isCompletion: r,
          flag: o.length > 0 && (s ? "danger" : "warning"),
          isCompletionInProgress: t,
          showContentPolicyViolation: o.length > 0,
        });
      }
      function e3() {
        var e = (0, P.Z)([""]);
        return (
          (e3 = function () {
            return e;
          }),
          e
        );
      }
      function e4() {
        var e = (0, P.Z)(["flex flex-grow flex-col gap-3"]);
        return (
          (e4 = function () {
            return e;
          }),
          e
        );
      }
      function e6() {
        var e = (0, P.Z)([
          "text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0",
        ]);
        return (
          (e6 = function () {
            return e;
          }),
          e
        );
      }
      function e5() {
        var e = (0, P.Z)(["w-[30px] flex flex-col relative items-end"]);
        return (
          (e5 = function () {
            return e;
          }),
          e
        );
      }
      function e8() {
        var e = (0, P.Z)([
          "p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400",
        ]);
        return (
          (e8 = function () {
            return e;
          }),
          e
        );
      }
      function e7() {
        var e = (0, P.Z)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ]);
        return (
          (e7 = function () {
            return e;
          }),
          e
        );
      }
      function e9() {
        var e = (0, P.Z)([
          "text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs",
        ]);
        return (
          (e9 = function () {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = (0, P.Z)([
          "text-left xl:pl-[55px] lg:pl-[55px] md:pl-[70px] sm:pl-[60px] text-gray-700 dark:text-gray-300 font-bold",
        ]);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      var nn,
        nt = et()(
          function () {
            return t.e(328).then(t.bind(t, 63328));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [63328];
              },
            },
            ssr: !1,
          }
        ),
        nr = et()(
          function () {
            return t.e(736).then(t.bind(t, 98736));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [98736];
              },
            },
            ssr: !1,
          }
        ),
        na = et()(
          function () {
            return t.e(24).then(t.bind(t, 6024));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6024];
              },
            },
            ssr: !1,
          }
        ),
        no = et()(
          function () {
            return t.e(672).then(t.bind(t, 37672));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [37672];
              },
            },
            ssr: !1,
          }
        ),
        ni = et()(
          function () {
            return t.e(201).then(t.bind(t, 20201));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [20201];
              },
            },
            ssr: !1,
          }
        );
      function ns(e) {
        var n, t;
        return (
          !(null === (n = e.message.recipient) || void 0 === n
            ? void 0
            : n.includes(".")) &&
          (null === (t = e.message.recipient) || void 0 === t
            ? void 0
            : t.slice(2, 3)) === "n"
        );
      }
      function nl(e) {
        var n, t, r;
        return (
          !(null === (n = e.message.recipient) || void 0 === n
            ? void 0
            : n.includes(".")) &&
          ((null === (t = e.message.recipient) || void 0 === t
            ? void 0
            : t.slice(2, 3)) === "o" ||
            (null === (r = e.message.recipient) || void 0 === r
              ? void 0
              : r.slice(2, 3)) === "s")
        );
      }
      function nu(e) {
        var n, t;
        return !(
          "o" !== e.message.content.content_type.slice(1, 2) &&
          ((null === (n = e.message.recipient) || void 0 === n
            ? void 0
            : n.includes(".")) ||
            (null === (t = e.message.recipient) || void 0 === t
              ? void 0
              : t.slice(2, 3)) !== "t" ||
            "text" !== e.message.content.content_type)
        );
      }
      function nc(e) {
        return "e" === e.message.content.content_type.slice(2, 3);
      }
      function nd(e) {
        var n,
          t,
          r =
            (null === (n = e.message.author) || void 0 === n
              ? void 0
              : n.name) ||
            (null === (t = e.message.user) || void 0 === t ? void 0 : t.name);
        return (
          !(null == r ? void 0 : r.includes(".")) &&
          ((null == r ? void 0 : r.slice(2, 3)) === "n" ||
            (null == r ? void 0 : r.slice(2, 3)) === "o" ||
            (null == r ? void 0 : r.slice(2, 3)) === "s")
        );
      }
      function nf(e) {
        var n;
        return (
          Y.Cv.getRoleFromMessage(e.message) === G.uU.Assistant &&
          (null === (n = e.message.recipient) || void 0 === n
            ? void 0
            : n.includes("."))
        );
      }
      function nm(e) {
        return (
          Y.Cv.getRoleFromMessage(e.message) === G.uU.Tool && !nd(e) && !nc(e)
        );
      }
      ((nn = o || (o = {}))[(nn.Text = 0)] = "Text"),
        (nn[(nn.MultiText = 1)] = "MultiText"),
        (nn[(nn.SB = 2)] = "SB"),
        (nn[(nn.B = 3)] = "B"),
        (nn[(nn.C = 4)] = "C"),
        (nn[(nn.CEO = 5)] = "CEO"),
        (nn[(nn.P = 6)] = "P");
      var nh = c.memo(function (e) {
          var n = e.turn,
            t = e.threadId,
            r = e.treeRef,
            a = e.onChangeItemInView,
            s = e.onChangeRating,
            l = e.onRequestMoreCompletions,
            u = e.onDeleteNode,
            d = e.onRequestCompletion,
            f = e.onUpdateNode,
            m = e.onSandboxLinkClick,
            v = e.activeRequests,
            y = e.inlineFeedbackDisplay,
            j = void 0 !== y && y,
            w = e.modelBackend,
            C = n.role,
            k = n.messages,
            Z = n.variantIds,
            M = (0, c.useState)(k),
            S = M[0],
            P = M[1],
            I = W.theme,
            T = I.color,
            R = I.icon,
            F = I.activeColor,
            _ = (0, O.kP)().session,
            q = (0, K.lj)(),
            L = (0, h.WS)(),
            A = (0, c.useState)(!1),
            B = A[0],
            z = A[1],
            V = (0, c.useMemo)(
              function () {
                return Z.findIndex(function (e) {
                  return e === S[0].nodeId;
                });
              },
              [Z, S]
            ),
            $ = C !== G.uU.User,
            H = S[S.length - 1],
            J = (0, c.useState)(H.rating),
            Q = J[0],
            X = J[1],
            ee = (0, p.hz)(),
            en = (0, eB.Z)().installedPlugins,
            et = (0, c.useCallback)(
              function () {
                1 === S.length &&
                  (L(C === G.uU.User ? g.s6.editPrompt : g.s6.editCompletion, {
                    id: S[0].message.id,
                    threadId: t,
                  }),
                  z(!0));
              },
              [S, L, C, t]
            ),
            ea = (0, c.useCallback)(function () {
              z(!1);
            }, []),
            eo = (0, c.useCallback)(
              function (e) {
                s(H.nodeId, H.message.id, e), X(e);
              },
              [H, s]
            );
          (0, c.useEffect)(
            function () {
              X(H.rating);
            },
            [H]
          ),
            (0, c.useEffect)(
              function () {
                P(k);
              },
              [k]
            );
          var ei = (0, c.useMemo)(
              function () {
                return Y.Cv.getRequestIdFromConversationTurn(n);
              },
              [n]
            ),
            es = "CompletionUpdated:".concat(S[S.length - 1].nodeId),
            el = (0, c.useCallback)(
              function (e, n) {
                var t = n.nodeId;
                P(function (e) {
                  var n = [],
                    a = !0,
                    o = !1,
                    i = void 0;
                  try {
                    for (
                      var s, l = e[Symbol.iterator]();
                      !(a = (s = l.next()).done);
                      a = !0
                    ) {
                      var u = s.value;
                      if (u.nodeId === t) {
                        var c = r.current.getNode(t);
                        n.push(
                          (0, N.Z)(
                            {
                              nodeId: t,
                              parentId: c.parentId,
                              message: c.message,
                            },
                            c.metadata
                          )
                        );
                      } else n.push(u);
                    }
                  } catch (d) {
                    (o = !0), (i = d);
                  } finally {
                    try {
                      a || null == l.return || l.return();
                    } finally {
                      if (o) throw i;
                    }
                  }
                  return n;
                });
              },
              [r]
            );
          (0, c.useEffect)(
            function () {
              var e = E().subscribe(es, el);
              return function () {
                E().unsubscribe(e);
              };
            },
            [el, es]
          );
          var ec = (0, c.useMemo)(
              function () {
                return v.has(ei);
              },
              [v, ei]
            ),
            ed = (0, c.useMemo)(
              function () {
                var e = !0,
                  n = !1,
                  t = void 0;
                try {
                  for (
                    var r, a = S[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var o = r.value;
                    if (o.errType) return o.errType;
                  }
                } catch (i) {
                  (n = !0), (t = i);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (n) throw t;
                  }
                }
                return !1;
              },
              [S]
            ),
            ef = (0, c.useMemo)(
              function () {
                if ($) {
                  var e,
                    n,
                    t =
                      null ===
                        (e = r.current.getParentPromptNode(S[0].nodeId)) ||
                      void 0 === e
                        ? void 0
                        : e.parentId,
                    a =
                      t &&
                      (null === (n = r.current.getNode(t).message.metadata) ||
                      void 0 === n
                        ? void 0
                        : n.model_slug),
                    o =
                      (null == S ? void 0 : S[0]) &&
                      Y.Cv.getModelFromMessage(
                        null == S ? void 0 : S[0].message
                      );
                  if (o && a && o !== a)
                    return "The previous model used in this conversation is unavailable. We've switched you to the latest default model";
                }
                return null;
              },
              [$, S, r]
            ),
            em = (0, c.useMemo)(
              function () {
                if (!ee.has("tools") && !ee.has("tools2") && !ee.has("tools3"))
                  return { avatarIcon: R, avatarColor: T };
                if (ec && S.length > 0) {
                  var e = S[S.length - 1];
                  if (ns(e) || nl(e) || nd(e))
                    return { avatarIcon: "s", avatarColor: F };
                  if (nu(e) || nc(e))
                    return { avatarIcon: "c", avatarColor: F };
                  if (nf(e) || nm(e)) {
                    var n = nf(e) ? e.message.recipient : e.message.author.name,
                      t = null == n ? void 0 : n.split(".")[0],
                      r = en.find(function (e) {
                        return e.manifest.name_for_model === t;
                      });
                    return r
                      ? { avatarPlugin: r }
                      : { avatarIcon: "p", avatarColor: F };
                  } else if (
                    Y.Cv.getIsTextTypeFromMessage(e.message) &&
                    (Y.Cv.getTextFromMessage(e.message).length > 0 ||
                      S.length > 1)
                  )
                    return { avatarIcon: "t", avatarColor: F };
                }
                return { avatarIcon: R, avatarColor: T };
              },
              [ee, ec, S, R, T, F, en]
            ),
            eh = em.avatarIcon,
            eg = em.avatarColor,
            ev = em.avatarPlugin,
            ep = (0, c.useCallback)(
              function (e, n) {
                var t = r.current.getParentId(e);
                r.current.addNode(n, "", t, G.Jq.Prompt);
              },
              [r]
            ),
            ex = (0, c.useMemo)(
              function () {
                var e = [];
                return (
                  S.forEach(function (n, t) {
                    var r = null == S ? void 0 : S[t - 1],
                      a =
                        r &&
                        (Y.Cv.getIsIncompleteFromMessage(r.message) ||
                          Y.Cv.getIsContinuedFromMessage(r.message)),
                      i = Y.Cv.getIsContinuedFromMessage(n.message),
                      s =
                        Y.Cv.getIsTextTypeFromMessage(n.message) &&
                        Y.Cv.getTextFromMessage(n.message);
                    if (a && i && s) {
                      var l = e.pop();
                      (null == l ? void 0 : l.type) === o.MultiText
                        ? (l.messages.push(n), e.push(l))
                        : (null == l ? void 0 : l.type) === o.Text &&
                          e.push({
                            type: o.MultiText,
                            messages: [l.message, n],
                          });
                    } else if (ns(n) || nl(n) || nd(n)) {
                      var u = e[e.length - 1];
                      (null == u ? void 0 : u.type) === o.SB ||
                      (null == u ? void 0 : u.type) === o.B
                        ? u.messages.push(n)
                        : e.push({ type: ns(n) ? o.SB : o.B, messages: [n] });
                    } else if (nf(n) || nm(n)) {
                      var c = e[e.length - 1];
                      nm(n) && (null == c ? void 0 : c.type) === o.P
                        ? c.messages.push(n)
                        : e.push({ type: o.P, messages: [n] });
                    } else {
                      var d = o.Text;
                      nu(n) ? (d = o.C) : nc(n) && (d = o.CEO),
                        e.push({ type: d, message: n });
                    }
                  }),
                  e.map(function (n, r) {
                    var s = r === e.length - 1;
                    switch (n.type) {
                      case o.Text:
                        return (0,
                        i.jsx)(eK, { className: "min-h-[20px]", message: n.message, isEditing: B, format: $, isCompletionInProgress: s && ec, onCreateEditNode: ep, threadId: t, onUpdateNode: f, onDeleteNode: u, onChangeItemInView: a, onRequestCompletion: d, onExitEdit: ea, disabled: 0 !== v.size, onSandboxLinkClick: m, isCompletion: $, onRequestMoreCompletions: l }, n.message.nodeId);
                      case o.MultiText:
                        return (0,
                        i.jsx)(e2, { messages: n.messages, isCompletionInProgress: s && ec, isCompletion: $ }, r);
                      case o.SB:
                        if (!ee.has("tools")) return null;
                        return (0,
                        i.jsx)(nt, { messages: n.messages }, n.messages[0].nodeId);
                      case o.B:
                        if (!ee.has("tools")) return null;
                        return (0,
                        i.jsx)(nr, { messages: n.messages, isComplete: !s }, n.messages[0].nodeId);
                      case o.C:
                        if (!ee.has("tools2")) return null;
                        var c = e[r + 1],
                          h = c && c.type === o.CEO ? c.message : void 0;
                        return (0,
                        i.jsx)(na, { message: n.message, outputMessage: h }, n.message.nodeId);
                      case o.CEO:
                        if (!ee.has("tools2")) return null;
                        return (0,
                        i.jsx)(no, { message: n.message, isCollapsed: !1 }, n.message.nodeId);
                      case o.P:
                        if (!ee.has("tools3")) return null;
                        return (0,
                        i.jsx)(ni, { messages: n.messages }, n.messages[0].nodeId);
                      default:
                        return null;
                    }
                  })
                );
              },
              [S, B, $, ec, ep, t, f, u, a, d, ea, v.size, m, l, ee]
            ),
            eb = (0, c.useMemo)(
              function () {
                return (
                  ($ &&
                    (null == S ? void 0 : S[0]) &&
                    Y.Cv.getModelFromMessage(
                      null == S ? void 0 : S[0].message
                    )) ||
                  w
                );
              },
              [$, S, w]
            );
          return (0, i.jsxs)(ng, {
            className: (0, D.Z)(
              "group",
              "w-full text-gray-800 dark:text-gray-100",
              j ? "" : "border-b border-black/10 dark:border-gray-900/50",
              $ ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"
            ),
            children: [
              ef && (0, i.jsx)(nj, { children: ef }),
              (0, i.jsxs)(np, {
                className: (0, D.Z)(j ? "" : "m-auto"),
                children: [
                  (0, i.jsxs)(nx, {
                    children: [
                      $
                        ? ev
                          ? (0, i.jsx)(er.Ph, {
                              plugin: ev,
                              notice: ed || void 0,
                            })
                          : (0, i.jsx)(er.k$, {
                              background:
                                ee.has("model_preview") && eb === b.f_
                                  ? "black"
                                  : eg || "",
                              iconName: eh,
                              notice: ed || void 0,
                            })
                        : (0, i.jsx)(er.Yt, {
                            user: null == _ ? void 0 : _.user,
                            notice: ed || void 0,
                          }),
                      Z.length > 1 &&
                        !q &&
                        !j &&
                        (0, i.jsx)(eu, {
                          currentPage: V,
                          onChangeIndex: function (e) {
                            return a(Z[e]);
                          },
                          length: Z.length,
                          className:
                            "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible",
                        }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]",
                    children: [
                      (0, i.jsx)(nv, { children: ex }),
                      !$ &&
                        !j &&
                        1 === S.length &&
                        !B &&
                        (0, i.jsx)(ny, {
                          $hidden: 0 !== v.size,
                          children: (0, i.jsx)(nb, {
                            onClick: et,
                            className: "md:invisible md:group-hover:visible",
                            children: (0, i.jsx)(x.ZP, { icon: U.vPQ }),
                          }),
                        }),
                      (0, i.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                          Z.length > 1 &&
                            q &&
                            !j &&
                            (0, i.jsx)(eu, {
                              currentPage: V,
                              onChangeIndex: function (e) {
                                return a(Z[e]);
                              },
                              length: Z.length,
                              className: "self-center pt-2",
                            }),
                          $ &&
                            !j &&
                            (0, i.jsxs)(ny, {
                              $hidden: ec,
                              children: [
                                "thumbsDown" !== Q &&
                                  (0, i.jsx)(
                                    nb,
                                    {
                                      onClick: function () {
                                        return eo("thumbsUp");
                                      },
                                      disabled: "thumbsUp" === Q,
                                      className: (0, D.Z)(
                                        "thumbsUp" === Q &&
                                          "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"
                                      ),
                                      children: (0, i.jsx)(x.ZP, {
                                        icon: U.fmn,
                                      }),
                                    },
                                    "thumbsUp:".concat(H.nodeId)
                                  ),
                                "thumbsUp" !== Q &&
                                  (0, i.jsx)(
                                    nb,
                                    {
                                      onClick: function () {
                                        return eo("thumbsDown");
                                      },
                                      disabled: "thumbsDown" === Q,
                                      className: (0, D.Z)(
                                        "thumbsDown" === Q &&
                                          "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"
                                      ),
                                      children: (0, i.jsx)(x.ZP, {
                                        icon: U.oLd,
                                      }),
                                    },
                                    "thumbsDown:".concat(H.nodeId)
                                  ),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        ng = B.Z.div(e3()),
        nv = B.Z.div(e4()),
        np = B.Z.div(e6()),
        nx = B.Z.div(e5()),
        nb = B.Z.button(e8()),
        ny = B.Z.div(e7(), function (e) {
          return e.$hidden ? "invisible" : "visible";
        }),
        nj = B.Z.div(e9());
      function nw() {
        var e = (0, P.Z)(["mb-2 mt-auto ml-auto mr-auto"]);
        return (
          (nw = function () {
            return e;
          }),
          e
        );
      }
      function nC() {
        var e = (0, P.Z)([
          "relative box-border rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col",
        ]);
        return (
          (nC = function () {
            return e;
          }),
          e
        );
      }
      function nk(e) {
        var n,
          t,
          r,
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e
            ? void 0
            : null === (n = e.messages) || void 0 === n
            ? void 0
            : n.length) === 1 &&
          !(null == e
            ? void 0
            : null === (t = e.messages) || void 0 === t
            ? void 0
            : t.some(function (e) {
                return "error" in e;
              })) &&
          (!a ||
            !(
              (null == e
                ? void 0
                : null === (r = e.messages) || void 0 === r
                ? void 0
                : r.length) === 1 &&
              Y.Cv.getTextFromMessage(
                null == e ? void 0 : e.messages[0].message
              ).length < 20
            ))
        );
      }
      function nZ(e) {
        var n,
          t,
          r,
          a,
          o,
          s = e.treeRef,
          l = e.ratingModalNodeId,
          u = e.ratingModalOpen,
          f = e.setRatingModalOpen,
          m = e.handleSubmitFeedback,
          h = e.handleChangeFeedbackComparisonRating,
          g = e.setCurrentLeafId,
          v = e.feedbackTextareaRef,
          x = e.threadIdRef,
          b = e.activeRequests,
          y = e.modelBackend,
          j = e.onChangeItemInView,
          w = e.onChangeRating,
          C = e.onRequestMoreCompletions,
          k = e.onDeleteNode,
          Z = e.onRequestCompletion,
          N = e.onUpdateNode,
          M = e.onSandboxLinkClick,
          S = (0, c.useRef)(0.5 > Math.random() ? "left" : "right"),
          P =
            null === (n = s.current) || void 0 === n
              ? void 0
              : n.getConversationTurns(l || "root"),
          I = P[P.length - 1],
          T = (0, c.useState)("critique"),
          R = T[0],
          F = T[1],
          _ = (0, K.lj)(),
          q = (0, p.hz)().has($) && nk(I, !0) && !_,
          L =
            null == P
              ? void 0
              : P[(null == P ? void 0 : P.length) - 1].variantIds,
          A = null == L ? void 0 : L[(null == L ? void 0 : L.length) - 1],
          E = (a = (r =
            null === (t = s.current) || void 0 === t
              ? void 0
              : t.getConversationTurns(A))[r.length - 1]).messages[
            a.messages.length - 1
          ].nodeId,
          B =
            null === (o = s.current) || void 0 === o
              ? void 0
              : o.getConversationTurns(E),
          O = (0, c.useMemo)(
            function () {
              var e =
                null == B ? void 0 : B[(null == B ? void 0 : B.length) - 1];
              return q && nk(e) && nk(I);
            },
            [q, B, I]
          ),
          z = (0, c.useRef)(Date.now()),
          G = (0, c.useRef)(-1),
          V = (0, c.useRef)(Date.now()),
          H = (0, c.useRef)(Date.now());
        (0, c.useEffect)(
          function () {
            "compare" === R && (G.current = Date.now());
          },
          [R]
        );
        var J = P[P.length - 2],
          W = B[B.length - 1],
          en = (0, c.useMemo)(
            function () {
              return W && Y.Cv.getRequestIdFromConversationTurn(W);
            },
            [W]
          ),
          et = (0, c.useMemo)(
            function () {
              return b.has(en);
            },
            [b, en]
          );
        (0, c.useMemo)(
          function () {
            et || (H.current = Date.now());
          },
          [et]
        );
        var er = I.messages,
          ea = er[er.length - 1],
          eo = ea.message.id,
          ei = ea.nodeId,
          es = s.current.getLeafFromNode(ei),
          el = W.messages,
          eu = el[el.length - 1],
          ec = eu.message.id,
          ed = eu.nodeId,
          ef = s.current.getLeafFromNode(ed),
          em =
            "critique" === R
              ? (0, i.jsx)(d.m, {
                  title: "Submit feedback",
                  onClick: function () {
                    m(), O ? F("compare") : f(void 0);
                  },
                })
              : null,
          eh = "left" === S.current ? W : I,
          eg = "left" === S.current ? I : W,
          ev = "left" === S.current ? "new" : "original",
          ep = "left" === S.current ? "original" : "new",
          ex = "left" === S.current ? "New Answer" : "Original Answer",
          eb = "left" === S.current ? "Original Answer" : "New Answer",
          ey =
            "left" === S.current
              ? "New answer is better"
              : "Original answer is better",
          ej =
            "left" === S.current
              ? "Original answer is better"
              : "New answer is better",
          ew = (0, c.useCallback)(
            function (e) {
              h(
                eo,
                ec,
                "left" === e ? ev : "right" === e ? ep : "same",
                S.current,
                z.current,
                G.current,
                V.current,
                H.current
              ),
                g(e === S.current ? ef.id : es.id),
                f(void 0);
            },
            [eo, ec, ev, ep, ef.id, es.id, g, f, h]
          ),
          eC = !et && null != H.current && O;
        return (0, i.jsxs)(
          d.Z,
          {
            isOpen: !0,
            onModalClose: function () {
              return f(void 0);
            },
            closeButton: (0, i.jsx)(X.z, {
              as: "button",
              color: "neutral",
              onClick: function () {
                return f(void 0);
              },
              children: (0, i.jsx)(U.q5L, {}),
            }),
            type:
              "critique" === R
                ? "thumbsUp" === u
                  ? "success"
                  : "danger"
                : "success",
            icon:
              "critique" === R ? ("thumbsUp" === u ? U.fmn : U.oLd) : void 0,
            title:
              "critique" === R
                ? "Provide additional feedback"
                : "Pick the best answer to improve the model",
            primaryButton: em,
            size: "larger",
            children: [
              "critique" === R &&
                (0, i.jsxs)("form", {
                  ref: v,
                  children: [
                    (0, i.jsx)(Q.ZP, {
                      id: "feedback-other",
                      placeholder:
                        "thumbsUp" === u
                          ? "What do you like about the response?"
                          : "What was the issue with the response? How could it be improved?",
                      rows: 3,
                      className:
                        "mt-4 mb-1 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                    }),
                    "thumbsDown" === u &&
                      (0, i.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, i.jsx)(ee, {
                            id: "feedback-harmful",
                            label: "This is harmful / unsafe",
                          }),
                          (0, i.jsx)(ee, {
                            id: "feedback-false",
                            label: "This isn't true",
                          }),
                          (0, i.jsx)(ee, {
                            id: "feedback-not-helpful",
                            label: "This isn't helpful",
                          }),
                        ],
                      }),
                  ],
                }),
              "compare" === R &&
                B &&
                x.current &&
                (0, i.jsxs)("div", {
                  className: (0, D.Z)("w-full"),
                  children: [
                    (0, i.jsx)("p", {
                      className: (0, D.Z)("mt-3 mb-7"),
                      children:
                        "The conversation will continue with the answer you choose.",
                    }),
                    (0, i.jsx)("div", {
                      className: (0, D.Z)("mb-5 box-border rounded-md border"),
                      children: (0, i.jsx)("div", {
                        className: (0, D.Z)("ml-5"),
                        children: (0, i.jsx)(nh, {
                          modelBackend: y,
                          turn: J,
                          threadId: x.current,
                          treeRef: s,
                          onChangeItemInView: j,
                          onChangeRating: w,
                          onRequestMoreCompletions: C,
                          onDeleteNode: k,
                          onRequestCompletion: Z,
                          onUpdateNode: N,
                          onSandboxLinkClick: M,
                          activeRequests: b,
                          inlineFeedbackDisplay: !0,
                        }),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: (0, D.Z)(),
                      children: [
                        (0, i.jsxs)("div", {
                          className: (0, D.Z)(
                            "mb-2 grid w-full grid-cols-2 gap-5"
                          ),
                          children: [
                            (0, i.jsx)("div", {
                              children: (0, i.jsx)("p", {
                                className: (0, D.Z)("font-semibold"),
                                children: ex,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              children: (0, i.jsx)("p", {
                                className: (0, D.Z)("font-semibold"),
                                children: eb,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: (0, D.Z)(
                            "mb-5 grid w-full grid-cols-2 gap-5"
                          ),
                          children: [
                            (0, i.jsxs)(nM, {
                              children: [
                                (0, i.jsx)("div", {
                                  className: (0, D.Z)("ml-5"),
                                  children: (0, i.jsx)(nh, {
                                    modelBackend: y,
                                    turn: eh,
                                    threadId: x.current,
                                    treeRef: s,
                                    onChangeItemInView: j,
                                    onChangeRating: w,
                                    onDeleteNode: k,
                                    onRequestMoreCompletions: C,
                                    onRequestCompletion: Z,
                                    onUpdateNode: N,
                                    onSandboxLinkClick: M,
                                    activeRequests: b,
                                    inlineFeedbackDisplay: !0,
                                  }),
                                }),
                                (0, i.jsx)(nN, {
                                  children: (0, i.jsx)(d.m, {
                                    disabled: !eC,
                                    title: ey,
                                    onClick: function () {
                                      return ew("left");
                                    },
                                    color: "dark",
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsxs)(nM, {
                              children: [
                                (0, i.jsx)("div", {
                                  className: (0, D.Z)("ml-5"),
                                  children: (0, i.jsx)(nh, {
                                    modelBackend: y,
                                    turn: eg,
                                    threadId: x.current,
                                    treeRef: s,
                                    onChangeItemInView: j,
                                    onChangeRating: w,
                                    onDeleteNode: k,
                                    onRequestMoreCompletions: C,
                                    onRequestCompletion: Z,
                                    onUpdateNode: N,
                                    onSandboxLinkClick: M,
                                    activeRequests: b,
                                    inlineFeedbackDisplay: !0,
                                  }),
                                }),
                                (0, i.jsx)(nN, {
                                  children: (0, i.jsx)(d.m, {
                                    disabled: !eC,
                                    title: ej,
                                    onClick: function () {
                                      return ew("right");
                                    },
                                    color: "dark",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: (0, D.Z)("grid w-full"),
                          children: (0, i.jsxs)("div", {
                            className: (0, D.Z)("mb-2 text-right"),
                            children: [
                              (0, i.jsx)(d.m, {
                                disabled: !eC,
                                title: "Neither answer is better",
                                color: "primary",
                                onClick: function () {
                                  return ew("same");
                                },
                                className: (0, D.Z)("mr-2"),
                              }),
                              (0, i.jsx)(d.m, {
                                title: "Skip this step",
                                onClick: function () {
                                  return f(void 0);
                                },
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          },
          "RatingModal-".concat(l)
        );
      }
      B.Z.div(ne());
      var nN = B.Z.div(nw()),
        nM = B.Z.div(nC()),
        nS = t(35025),
        nP = t(42928),
        nI = t(60612);
      function nT(e) {
        var n = e.text,
          t = e.onDone,
          r = (0, nI.Z)(),
          a = (0, c.useState)(!0),
          o = a[0],
          s = a[1],
          l = (0, c.useState)(0),
          u = l[0],
          d = l[1],
          f = (0, c.useMemo)(
            function () {
              return new nR().humanTypingDelaysQuertyDistance(n);
            },
            [n]
          );
        return (
          (0, c.useEffect)(
            function () {
              n &&
                o &&
                (s(!0),
                f.forEach(function (e, n) {
                  setTimeout(function () {
                    r() &&
                      (d(n), n === f.length - 1 && (s(!1), null == t || t()));
                  }, e);
                }));
            },
            [f, r, o, t, n]
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [n.substring(0, u + 1), o && "▋"],
          })
        );
      }
      var nR = (function () {
          function e() {
            (0, nS.Z)(this, e);
          }
          var n = e.prototype;
          return (
            (n.qwertyDistance = function (e, n) {
              var t,
                r,
                a,
                o = {
                  q: [0, 0],
                  w: [1, 0],
                  e: [2, 0],
                  r: [3, 0],
                  t: [4, 0],
                  y: [5, 0],
                  u: [6, 0],
                  i: [7, 0],
                  o: [8, 0],
                  p: [9, 0],
                  a: [0, 1],
                  s: [1, 1],
                  d: [2, 1],
                  f: [3, 1],
                  g: [4, 1],
                  h: [5, 1],
                  j: [6, 1],
                  k: [7, 1],
                  l: [8, 1],
                  z: [0, 2],
                  x: [1, 2],
                  c: [2, 2],
                  v: [3, 2],
                  b: [4, 2],
                  n: [5, 2],
                  m: [6, 2],
                },
                i = (0, nP.Z)(
                  null !== (t = o[e.toLowerCase()]) && void 0 !== t
                    ? t
                    : [0, 0],
                  2
                ),
                s = i[0],
                l = i[1],
                u = (0, nP.Z)(
                  null !== (r = o[n.toLowerCase()]) && void 0 !== r
                    ? r
                    : [0, 0],
                  2
                );
              return Math.abs(s - u[0]) + Math.abs(l - u[1]);
            }),
            (n.humanTypingDelaysQuertyDistance = function (e) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 100,
                  r = 0,
                  a = [],
                  o = 0;
                o < e.length;
                ++o
              ) {
                var i = void 0;
                if (o > 0) {
                  var s = this.qwertyDistance(e[o - 1], e[o]);
                  i =
                    0 === s
                      ? this.getRandomInt(n, Math.floor(t / 2))
                      : 1 === s
                      ? this.getRandomInt(n, Math.floor((2 * t) / 3))
                      : this.getRandomInt(n, t);
                } else i = this.getRandomInt(n, t);
                a.push(i + r), (r += i);
              }
              return a;
            }),
            (n.getRandomInt = function (e, n) {
              return Math.floor(Math.random() * (n - e + 1)) + e;
            }),
            e
          );
        })(),
        nF = t(1744);
      function n_() {
        var e = (0, P.Z)(["flex flex-col gap-2 text-gray-100 text-sm\n", ""]);
        return (
          (n_ = function () {
            return e;
          }),
          e
        );
      }
      function nD() {
        var e = (0, P.Z)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
          "\n",
        ]);
        return (
          (nD = function () {
            return e;
          }),
          e
        );
      }
      function nq() {
        var e = (0, P.Z)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ]);
        return (
          (nq = function () {
            return e;
          }),
          e
        );
      }
      function nL() {
        var e = (0, P.Z)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (nL = function () {
            return e;
          }),
          e
        );
      }
      function nA() {
        var e = (0, P.Z)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative ",
        ]);
        return (
          (nA = function () {
            return e;
          }),
          e
        );
      }
      function nE() {
        var e = (0, P.Z)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ]);
        return (
          (nE = function () {
            return e;
          }),
          e
        );
      }
      function nU() {
        var e = (0, P.Z)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
        return (
          (nU = function () {
            return e;
          }),
          e
        );
      }
      function nB() {
        var e = (0, P.Z)(["p-1 hover:text-white"]);
        return (
          (nB = function () {
            return e;
          }),
          e
        );
      }
      var nO = W.href;
      function nz(e) {
        var n = e.items,
          t = e.activeId,
          r = e.onNextPage,
          a = e.hasNextPage,
          o = e.onNewThread,
          s = e.onRefetchHistory,
          l = e.onUpdateUserModifiedTitle,
          u = e.userModifiedTitle,
          d = e.newChatName,
          f = e.isLoading,
          m = e.isError,
          h = (0, c.useRef)(null),
          g = (0, c.useState)(!1),
          v = g[0],
          p = g[1],
          x = (0, c.useCallback)(
            function () {
              p(!0), s();
            },
            [s]
          ),
          b = 0 === n.length;
        return (
          (0, c.useEffect)(function () {
            h.current && h.current.scrollIntoView();
          }, []),
          (0, i.jsxs)(nG, {
            $centered: f || (m && b),
            children: [
              b &&
                !f &&
                !m &&
                (0, i.jsx)("div", {
                  className: "p-3 text-center italic text-gray-500",
                  children:
                    "Your history will show up here. Not seeing what you expected? Try logging out and back in.",
                }),
              b && f && (0, i.jsx)(nF.Z, { className: "m-auto" }),
              b &&
                m &&
                (0, i.jsxs)("div", {
                  className: "p-3 italic text-gray-500",
                  children: [
                    "Unable to load history",
                    !v &&
                      (0, i.jsx)(X.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: x,
                        children: "Retry",
                      }),
                  ],
                }),
              n.map(function (e) {
                var n = t === e.id;
                return (0,
                i.jsx)(nV, { id: e.id, title: e.title, newChatName: n ? d : void 0, userModifiedTitle: n ? u : "", onUpdateUserModifiedTitle: l, active: n, forwardRef: n ? h : void 0, onNewThread: o, onRefetchHistory: s }, "Entry-".concat(e.id));
              }),
              a &&
                (0, i.jsx)(X.z, {
                  as: "button",
                  onClick: r,
                  color: "dark",
                  className: "m-auto mb-2",
                  size: "small",
                  children: "Show more",
                }),
            ],
          })
        );
      }
      var nG = B.Z.div(n_(), function (e) {
        return e.$centered && "h-full justify-center items-center";
      });
      function nV(e) {
        var n = e.id,
          t = e.title,
          r = e.active,
          a = e.onNewThread,
          o = e.onRefetchHistory,
          s = e.onUpdateUserModifiedTitle,
          d = e.newChatName,
          f = e.userModifiedTitle,
          m = e.forwardRef,
          v = (0, K.lj)(),
          p = (0, h.WS)(),
          b = (0, u.useRouter)(),
          y = (0, c.useState)(!1),
          j = y[0],
          w = y[1],
          C = (0, c.useRef)(null),
          k = (0, c.useState)(!1),
          Z = k[0],
          N = k[1],
          M = (0, c.useState)(),
          S = M[0],
          P = M[1],
          I = (0, c.useCallback)(
            function (e) {
              var r, a;
              if (
                (null == e || e.preventDefault(),
                w(!1),
                (null === (r = C.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = C.current) || void 0 === a
                    ? void 0
                    : a.value) !== t)
              ) {
                var i = C.current.value;
                V.ZP.patchConversation(n, { title: i }),
                  s(i),
                  p(g.s6.renameThread, { threadId: n, content: i }),
                  o();
              }
            },
            [p, n, o, s, t]
          ),
          T = (0, c.useCallback)(
            function (e) {
              "Enter" === e.key && I();
            },
            [I]
          ),
          R = (0, c.useCallback)(
            function () {
              V.ZP.patchConversation(n, { is_visible: !1 }).then(function () {
                o();
              }),
                b.asPath === nO ? a() : b.replace({ pathname: nO });
            },
            [n, a, o, b]
          ),
          F = (0, c.useCallback)(
            function (e) {
              e.preventDefault(),
                p(g.s6.loadThread, { threadId: n }),
                b.push({ pathname: b.pathname, query: { chatId: n } }, void 0, {
                  shallow: !0,
                });
            },
            [p, n, b]
          ),
          _ = f || (r && d) || t;
        if (
          ((0, c.useEffect)(
            function () {
              r && d && d !== S && P(d);
            },
            [r, d, _, S, f]
          ),
          j)
        )
          return (0, i.jsxs)(nH, {
            $active: r,
            children: [
              (0, i.jsx)(x.ZP, { icon: U.IC0, className: "flex-shrink-0" }),
              (0, i.jsx)(nJ, {
                ref: C,
                type: "text",
                defaultValue: _,
                autoFocus: !0,
                onKeyDown: T,
                className: "mr-0",
                onBlur: I,
              }),
              (0, i.jsxs)(nY, {
                $active: !0,
                children: [
                  (0, i.jsx)(nQ, {
                    onClick: I,
                    children: (0, i.jsx)(x.ZP, { icon: U.UgA }),
                  }),
                  (0, i.jsx)(nQ, {
                    onClick: function (e) {
                      e.preventDefault(), w(!1);
                    },
                    children: (0, i.jsx)(x.ZP, { icon: U.q5L }),
                  }),
                ],
              }),
            ],
          });
        var q = S && r && !v && !f,
          L = 'Delete "'.concat(_, '"?');
        return (0, i.jsxs)(n$, {
          onClick: r ? l() : F,
          $active: r,
          className: (0, D.Z)("group", q && "animate-flash"),
          ref: m,
          children: [
            (0, i.jsx)(x.ZP, { icon: Z ? U.Ybf : U.IC0 }),
            (0, i.jsxs)(nW, {
              children: [
                q ? (0, i.jsx)(nT, { text: _, onDone: o }) : Z ? L : _,
                (!S || !r) && (0, i.jsx)(nK, { $active: r }),
              ],
            }),
            Z &&
              (0, i.jsxs)(nY, {
                $active: !0,
                children: [
                  (0, i.jsx)(nQ, {
                    onClick: R,
                    children: (0, i.jsx)(x.ZP, { icon: U.UgA }),
                  }),
                  (0, i.jsx)(nQ, {
                    onClick: function () {
                      N(!1);
                    },
                    children: (0, i.jsx)(x.ZP, { icon: U.q5L }),
                  }),
                ],
              }),
            r &&
              !Z &&
              (0, i.jsxs)(nY, {
                $active: r,
                children: [
                  (0, i.jsx)(nQ, {
                    onClick: function (e) {
                      e.preventDefault(), w(!0);
                    },
                    children: (0, i.jsx)(x.ZP, { icon: U.Nte }),
                  }),
                  (0, i.jsx)(nQ, {
                    onClick: function () {
                      return N(!0);
                    },
                    children: (0, i.jsx)(x.ZP, { icon: U.Ybf }),
                  }),
                ],
              }),
          ],
        });
      }
      var n$ = B.Z.a(nD(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-800 hover:bg-gray-800"
            : "hover:pr-4";
        }),
        nH = B.Z.div(nq(), function (e) {
          return e.$active && "pr-14 bg-gray-800 hover:bg-gray-800";
        }),
        nJ = B.Z.input(nL()),
        nW = B.Z.div(nA()),
        nK = B.Z.div(nE(), function (e) {
          return e.$active
            ? "from-gray-800"
            : "from-gray-900 group-hover:from-[#2A2B32]";
        }),
        nY = B.Z.div(nU(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible";
        }),
        nQ = B.Z.button(nB()),
        nX = t(40638),
        n0 = t(29634),
        n1 = t(15762),
        n2 = t(54721),
        n3 = t.n(n2);
      function n4() {
        var e = (0, P.Z)([
          "flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm",
        ]);
        return (
          (n4 = function () {
            return e;
          }),
          e
        );
      }
      function n6() {
        var e = (0, P.Z)([
          "flex-col flex-1 overflow-y-auto border-b border-white/20\n",
          "",
        ]);
        return (
          (n6 = function () {
            return e;
          }),
          e
        );
      }
      var n5 = B.Z.a(n4()),
        n8 = B.Z.div(n6(), function (e) {
          return e.$offsetScrollbar && "-mr-2";
        }),
        n7 = W.href;
      function n9(e) {
        var n = e.onClickAccountPayment,
          t = e.showAccountPaymentMenuItem,
          r = e.onClickCustomerPortal,
          a = e.showCustomerPortalMenuItem,
          o = e.onDeleteHistory,
          s = e.showDeleteHistory,
          l = e.onNewThread,
          d = e.onOpenDebugPanel,
          f = e.settings,
          m = e.children,
          v = (0, h.WS)(),
          b = (0, n1.F)(),
          y = b.theme,
          j = b.setTheme,
          w = (0, nI.Z)(),
          C = (0, p.hz)(),
          k = (0, u.useRouter)(),
          Z = (0, c.useRef)(null),
          N = (0, c.useState)(!1),
          M = N[0],
          S = N[1],
          P = (0, c.useState)(!1),
          I = P[0],
          T = P[1],
          R = (0, c.useMemo)(
            function () {
              var e;
              return (
                null === (e = k.query.chatId) || void 0 === e ? void 0 : e[0]
              )
                ? (0, i.jsx)(
                    n3(),
                    {
                      href: n7,
                      children: (0, i.jsxs)(n5, {
                        className: "mb-2 flex-shrink-0 border border-white/20",
                        children: [
                          (0, i.jsx)(x.ZP, { icon: U.OvN }),
                          "New chat",
                        ],
                      }),
                    },
                    "Page-reset"
                  )
                : (0, i.jsxs)(n5, {
                    onClick: l,
                    className: "mb-2 flex-shrink-0 border border-white/20",
                    children: [(0, i.jsx)(x.ZP, { icon: U.OvN }), "New chat"],
                  });
            },
            [l, k.query.chatId]
          ),
          F = (0, c.useCallback)(
            function () {
              v(g.s6.clickFaqLink);
            },
            [v]
          );
        (0, c.useEffect)(
          function () {
            if (Z.current) {
              var e;
              S(
                (e = Z.current).scrollHeight > e.clientHeight ||
                  e.scrollWidth > e.clientWidth
              );
            }
          },
          [m]
        );
        var _ = (0, J.g)(function (e) {
            return e.flags.highlightPlusUpgrade;
          }),
          D = (0, c.useCallback)(
            function () {
              T(!1), o();
            },
            [o]
          );
        return (0, i.jsx)("div", {
          className:
            "scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20",
          children: (0, i.jsxs)("nav", {
            className: "flex h-full flex-1 flex-col space-y-1 p-2",
            children: [
              R,
              (0, i.jsx)(n8, { ref: Z, $offsetScrollbar: M, children: m }),
              s &&
                (0, i.jsxs)(n5, {
                  onClick: function () {
                    return I ? D() : T(!0);
                  },
                  children: [
                    (0, i.jsx)(x.ZP, { icon: I ? U.UgA : U.Ybf }),
                    I ? "Confirm clear conversations" : "Clear conversations",
                  ],
                }),
              C.has("debug") &&
                (0, i.jsxs)(n5, {
                  onClick: function () {
                    return d(!0);
                  },
                  children: [(0, i.jsx)(x.ZP, { icon: U.cDN }), "Debug"],
                }),
              t &&
                n &&
                (0, i.jsx)(n5, {
                  onClick: n,
                  children: (0, i.jsxs)("span", {
                    className: "flex w-full flex-row justify-between",
                    children: [
                      (0, i.jsxs)("span", {
                        className: "gold-new-button flex items-center gap-3",
                        children: [
                          (0, i.jsx)(x.ZP, { icon: U.fzv }),
                          "Upgrade to Plus",
                        ],
                      }),
                      _ &&
                        (0, i.jsx)("span", {
                          className:
                            "rounded-md bg-yellow-200 py-0.5 px-1.5 text-xs font-medium uppercase text-gray-800",
                          children: "NEW",
                        }),
                    ],
                  }),
                }),
              w() &&
                (0, i.jsxs)(n5, {
                  onClick: function () {
                    return j("dark" === y ? "light" : "dark");
                  },
                  children: [
                    (0, i.jsx)(x.ZP, { icon: "dark" === y ? U.kXG : U.wOW }),
                    "dark" === y ? "Light" : "Dark",
                    " mode",
                  ],
                }),
              a &&
                r &&
                (0, i.jsxs)(n5, {
                  onClick: r,
                  children: [(0, i.jsx)(x.ZP, { icon: U.fzv }), "My account"],
                }),
              (0, i.jsxs)(n5, {
                href: "https://help.openai.com/en/collections/3742473-chatgpt",
                target: "_blank",
                onClick: F,
                children: [(0, i.jsx)(x.ZP, { icon: U.AlO }), "Updates & FAQ"],
              }),
              f,
              (0, i.jsxs)(n5, {
                onClick: function () {
                  v(g.s6.clickLogOut, { eventSource: "mouse" }), (0, O.w7)();
                },
                children: [(0, i.jsx)(x.ZP, { icon: U.xqh }), "Log out"],
              }),
            ],
          }),
        });
      }
      var te = function (e) {
          var n = e.onClickAccountPayment,
            t = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            o = e.onDeleteHistory,
            s = e.showDeleteHistory,
            l = e.onNewThread,
            u = e.onOpenDebugPanel,
            c = e.settings,
            d = e.children;
          return (0, i.jsx)("div", {
            className:
              "dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col",
            children: (0, i.jsx)("div", {
              className: "flex h-full min-h-0 flex-col ",
              children: (0, i.jsx)(n9, {
                onClickAccountPayment: n,
                showAccountPaymentMenuItem: t,
                onClickCustomerPortal: r,
                showCustomerPortalMenuItem: a,
                onDeleteHistory: o,
                showDeleteHistory: s,
                onNewThread: l,
                onOpenDebugPanel: u,
                settings: c,
                children: d,
              }),
            }),
          });
        },
        tn = function (e) {
          var n = e.onClickAccountPayment,
            t = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            o = e.onDeleteHistory,
            s = e.onSidebarOpen,
            l = e.sidebarOpen,
            u = e.showDeleteHistory,
            d = e.onNewThread,
            f = e.onOpenDebugPanel,
            m = e.children,
            h = e.settings;
          return (0, i.jsx)(nX.u.Root, {
            show: l,
            as: c.Fragment,
            children: (0, i.jsxs)(n0.V, {
              as: "div",
              className: "relative z-40 md:hidden",
              onClose: s,
              children: [
                (0, i.jsx)(nX.u.Child, {
                  as: c.Fragment,
                  enter: "transition-opacity ease-linear duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "transition-opacity ease-linear duration-300",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, i.jsx)("div", {
                    className: "fixed inset-0 bg-gray-600 bg-opacity-75",
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "fixed inset-0 z-40 flex",
                  children: [
                    (0, i.jsx)(nX.u.Child, {
                      as: c.Fragment,
                      enter: "transition ease-in-out duration-300 transform",
                      enterFrom: "-translate-x-full",
                      enterTo: "translate-x-0",
                      leave: "transition ease-in-out duration-300 transform",
                      leaveFrom: "translate-x-0",
                      leaveTo: "-translate-x-full",
                      children: (0, i.jsxs)(n0.V.Panel, {
                        className:
                          "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                        children: [
                          (0, i.jsx)(nX.u.Child, {
                            as: c.Fragment,
                            enter: "ease-in-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in-out duration-300",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, i.jsx)("div", {
                              className: "absolute top-0 right-0 -mr-12 pt-2",
                              children: (0, i.jsxs)("button", {
                                type: "button",
                                className:
                                  "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                onClick: function () {
                                  return s(!1);
                                },
                                children: [
                                  (0, i.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close sidebar",
                                  }),
                                  (0, i.jsx)(x.ZP, {
                                    icon: U.q5L,
                                    size: "medium",
                                    className: "text-white",
                                    "aria-hidden": "true",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, i.jsx)(n9, {
                            onClickAccountPayment: n,
                            showAccountPaymentMenuItem: t,
                            onClickCustomerPortal: r,
                            showCustomerPortalMenuItem: a,
                            onDeleteHistory: o,
                            showDeleteHistory: u,
                            onNewThread: d,
                            onOpenDebugPanel: f,
                            settings: h,
                            children: m,
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", { className: "w-14 flex-shrink-0" }),
                  ],
                }),
              ],
            }),
          });
        },
        tt = function (e) {
          var n = e.onSidebarOpen,
            t = e.onNewThread,
            r = e.title,
            a = e.newChatName,
            o = (0, c.useState)(),
            s = o[0],
            l = o[1],
            d = (0, u.useRouter)(),
            f = (0, c.useMemo)(
              function () {
                var e;
                return (
                  null === (e = d.query.chatId) || void 0 === e ? void 0 : e[0]
                )
                  ? (0, i.jsx)(
                      n3(),
                      {
                        href: n7,
                        children: (0, i.jsx)("button", {
                          type: "button",
                          className: "px-3",
                          children: (0, i.jsx)(x.ZP, {
                            icon: U.OvN,
                            size: "medium",
                          }),
                        }),
                      },
                      "Page-reset"
                    )
                  : (0, i.jsx)("button", {
                      type: "button",
                      className: "px-3",
                      onClick: t,
                      children: (0, i.jsx)(x.ZP, {
                        icon: U.OvN,
                        size: "medium",
                      }),
                    });
              },
              [t, d.query.chatId]
            );
          return (
            (0, c.useEffect)(
              function () {
                a !== s && l(a);
              },
              [a, s]
            ),
            (0, i.jsxs)("div", {
              className:
                "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
              children: [
                (0, i.jsxs)("button", {
                  type: "button",
                  className:
                    "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                  onClick: function () {
                    return n(!0);
                  },
                  children: [
                    (0, i.jsx)("span", {
                      className: "sr-only",
                      children: "Open sidebar",
                    }),
                    (0, i.jsx)(x.ZP, {
                      icon: U.cur,
                      "aria-hidden": "true",
                      size: "medium",
                    }),
                  ],
                }),
                (0, i.jsx)("h1", {
                  className: "flex-1 text-center text-base font-normal",
                  children:
                    s && a ? (0, i.jsx)(nT, { text: a }) : r || "New chat",
                }),
                f,
              ],
            })
          );
        };
      function tr() {
        var e = (0, P.Z)(["flex flex-row gap-2 mb-4"]);
        return (
          (tr = function () {
            return e;
          }),
          e
        );
      }
      function ta() {
        var e = (0, P.Z)([
          "bg-gray-200 rounded-md text-gray-500 text-xs flex flex-row items-center gap-1 px-2 py-1",
        ]);
        return (
          (ta = function () {
            return e;
          }),
          e
        );
      }
      function to() {
        var e = (0, P.Z)(["flex items-center gap-1"]);
        return (
          (to = function () {
            return e;
          }),
          e
        );
      }
      function ti() {
        var e = (0, P.Z)([""]);
        return (
          (ti = function () {
            return e;
          }),
          e
        );
      }
      var ts = function (e) {
          var n = e.urls,
            t = e.onRemoveUrl,
            r = e.clickable,
            a = e.className;
          return 0 === n.size
            ? null
            : (0, i.jsx)(tl, {
                className: a,
                children: Array.from(n).map(function (e) {
                  return (0, i.jsxs)(
                    tu,
                    {
                      children: [
                        (0, i.jsx)(U.XKb, {}),
                        (0, i.jsxs)(
                          tc,
                          (0, M.Z)(
                            (0, N.Z)(
                              {},
                              r
                                ? { href: e, target: "_blank", disabled: !1 }
                                : { disabled: !0 }
                            ),
                            {
                              children: [
                                new URL(e).hostname,
                                r && (0, i.jsx)(U.AlO, {}),
                              ],
                            }
                          )
                        ),
                        t &&
                          (0, i.jsx)(td, {
                            onClick: function () {
                              return t(e);
                            },
                            children: (0, i.jsx)(U.q5L, {}),
                          }),
                      ],
                    },
                    e
                  );
                }),
              });
        },
        tl = B.Z.div(tr()),
        tu = B.Z.div(ta()),
        tc = B.Z.a(to()),
        td = B.Z.button(ti()),
        tf = c.memo(ts);
      function tm() {
        var e = (0, P.Z)([
          "\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n",
          "\n",
        ]);
        return (
          (tm = function () {
            return e;
          }),
          e
        );
      }
      function th() {
        var e = (0, P.Z)([
          "\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n",
          "",
        ]);
        return (
          (th = function () {
            return e;
          }),
          e
        );
      }
      function tg() {
        var e = (0, P.Z)([
          "flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center",
        ]);
        return (
          (tg = function () {
            return e;
          }),
          e
        );
      }
      var tv = et()(
        function () {
          return t.e(949).then(t.bind(t, 93949));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [93949];
            },
          },
          ssr: !1,
        }
      );
      function tp(e) {
        var n = e.onAbortCompletion,
          t = e.onCreateNewCompletion,
          r = e.onUpdateArtifactStatus,
          a = e.onRequestMoreCompletions,
          o = e.onContinueGenerating,
          s = e.onFileUpload,
          l = e.canUpload,
          u = e.artifact,
          d = e.currentLeafId,
          f = e.currentRequestId,
          m = e.threadId,
          v = e.isCompletionInProgress,
          p = e.className,
          b = e.placeholder,
          y = e.currentPrompt,
          j = e.onChangeCurrentPrompt,
          w = e.clearOnSubmit,
          C = void 0 === w || w,
          Z = e.disabled,
          S = void 0 !== Z && Z,
          P = e.shouldRetry,
          I = e.canPause,
          T = void 0 !== I && I,
          F = e.canContinue,
          _ = void 0 !== F && F,
          q = "root" === d,
          L = (0, K.lj)(),
          A = (0, h.WS)(),
          E = (0, c.useContext)(eU.g).serviceStatus,
          B = (0, c.useMemo)(function () {
            return new Set([]);
          }, []),
          O = (0, c.useRef)(null),
          z = (0, c.useState)(""),
          G = z[0],
          V = z[1],
          $ = (0, c.useCallback)(
            function (e) {
              r({ state: "pasted", url: e, id: e, contents: "" }), V("");
            },
            [r]
          ),
          H = (0, c.useCallback)(
            function (e) {
              j(e.currentTarget.value);
            },
            [j]
          ),
          J = (0, c.useCallback)(
            function (e) {
              if ((null == e || e.preventDefault(), !S)) {
                var n,
                  a,
                  o =
                    null === (n = O.current) || void 0 === n ? void 0 : n.value,
                  i = "".concat(
                    null === (a = O.current) || void 0 === a
                      ? void 0
                      : a.dataset.id,
                    "-nextPrompt"
                  );
                if (o || (null == u ? void 0 : u.url)) {
                  var s = (null == u ? void 0 : u.url) || "";
                  (null == u ? void 0 : u.state) === "pasted" &&
                    r(function (e) {
                      return (0, M.Z)((0, N.Z)({}, e), { state: "static" });
                    });
                  var l =
                    (null == u ? void 0 : u.state) === "pasted"
                      ? { artifacts: [null == u ? void 0 : u.url] }
                      : {};
                  t(
                    i,
                    (0, N.Z)({ value: o || "" }, l),
                    { eventSource: e ? "mouse" : "keyboard" },
                    s
                  ),
                    C && j(""),
                    V(""),
                    (0, Q.SI)(1, O.current);
                }
              }
            },
            [
              null == u ? void 0 : u.state,
              null == u ? void 0 : u.url,
              C,
              S,
              t,
              r,
              j,
            ]
          ),
          W = (0, c.useCallback)(
            (0, k.Z)(function () {
              var e, n, t, r;
              return (0, R.__generator)(this, function (a) {
                switch (a.label) {
                  case 0:
                    if (!B.has("link") || "root" !== d) return [2];
                    return [4, navigator.clipboard.readText()];
                  case 1:
                    return (
                      (n = a.sent()),
                      (t = /^https?:\/\/[^\s]+/g),
                      (r =
                        null === (e = n.match(t)) || void 0 === e
                          ? void 0
                          : e[0]) && V(r),
                      [2]
                    );
                }
              });
            }),
            [B, d]
          ),
          Y = (0, c.useCallback)(
            function () {
              r(null);
            },
            [r]
          ),
          ee = (0, c.useCallback)(
            function () {
              n("", f), a(d, { eventSource: "mouse" });
            },
            [d, f, n, a]
          ),
          en = (0, c.useCallback)(
            function () {
              n("", f),
                A(g.s6.pauseCompletion, { threadId: m, eventSource: "mouse" });
            },
            [f, m, A, n]
          ),
          et = (0, c.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return !S;
                  },
                  handler: function (e) {
                    L ||
                      e.shiftKey ||
                      e.isComposing ||
                      (e.preventDefault(), v || J());
                  },
                },
                Escape: {
                  validator: function () {
                    return T && v;
                  },
                  handler: function () {
                    n("", f),
                      A(g.s6.pauseCompletion, {
                        threadId: m,
                        eventSource: "keyboard",
                      });
                  },
                },
              };
            },
            [S, L, v, J, T, n, f, A, m]
          );
        (0, c.useEffect)(
          function () {
            var e = O.current,
              n = function (e) {
                var n;
                (null === (n = et[e.key]) || void 0 === n
                  ? void 0
                  : n.validator(e)) && et[e.key].handler(e);
              };
            return (
              e && e.addEventListener("keydown", n),
              function () {
                e && e.removeEventListener("keydown", n);
              }
            );
          },
          [et]
        ),
          (0, c.useEffect)(
            function () {
              var e = O.current,
                n = function (n) {
                  !(null == e ? void 0 : e.value) &&
                    G &&
                    q &&
                    (n.preventDefault(), $(G));
                };
              return (
                B.has("link") && e && q && e.addEventListener("paste", n),
                function () {
                  e && e.removeEventListener("paste", n);
                }
              );
            },
            [$, d, q, r, G, B]
          ),
          (0, c.useEffect)(
            function () {
              return (
                window.addEventListener("focus", W),
                function () {
                  window.removeEventListener("focus", W);
                }
              );
            },
            [W]
          ),
          (0, c.useEffect)(function () {
            var e;
            null === (e = O.current) || void 0 === e || e.focus();
          }, []);
        var er = !q && !v && !(null == E ? void 0 : E.oof),
          ea = (0, c.useCallback)(
            function () {
              o(d);
            },
            [d, o]
          ),
          eo = (0, c.useMemo)(
            function () {
              return (0, i.jsxs)(tj, {
                className: (0, D.Z)(P && "m-auto flex-col items-center"),
                children: [
                  P &&
                    (0, i.jsx)("span", {
                      className: "mb-3 block text-xs md:mb-auto",
                      children: "There was an error generating a response",
                    }),
                  er &&
                    (0, i.jsxs)(X.z, {
                      as: "button",
                      color: P ? "primary" : "neutral",
                      onClick: ee,
                      className: (0, D.Z)(P ? "m-auto" : "border-0 md:border"),
                      children: [
                        (0, i.jsx)(x.ZP, {
                          icon: U.Qxo,
                          size: L ? "small" : "xsmall",
                        }),
                        (!L || P) && "Regenerate response",
                      ],
                    }),
                  _ &&
                    (0, i.jsxs)(X.z, {
                      as: "button",
                      color: "neutral",
                      onClick: ea,
                      className: "border-0 md:border",
                      children: [
                        (0, i.jsx)(x.ZP, {
                          icon: U.lV_,
                          className: "-rotate-180",
                          size: L ? "small" : "xsmall",
                        }),
                        !L && "Continue generating",
                      ],
                    }),
                  T &&
                    v &&
                    (0, i.jsxs)(X.z, {
                      as: "button",
                      color: "neutral",
                      onClick: en,
                      className: "border-0 md:border",
                      children: [
                        (0, i.jsx)(x.ZP, {
                          icon: U.jxP,
                          size: L ? "small" : "xsmall",
                        }),
                        !L && "Stop generating",
                      ],
                    }),
                  l &&
                    !v &&
                    !q &&
                    (0, i.jsx)(tv, { mini: L, threadId: m, onFileUpload: s }),
                ],
              });
            },
            [_, T, er, en, ee, ea, v, L, P, l, q, m, s]
          );
        return (0, i.jsx)("form", {
          className: p,
          onSubmit: J,
          children: (0, i.jsxs)("div", {
            className: "relative flex h-full flex-1 md:flex-col",
            children: [
              !L && eo,
              !P &&
                (0, i.jsxs)(tb, {
                  $disabled: P,
                  children: [
                    (null == u ? void 0 : u.state) === "pasted" &&
                      (0, i.jsx)(tf, {
                        urls: new Set([u.url]),
                        onRemoveUrl: Y,
                        className: "ml-2",
                      }),
                    (0, i.jsx)(Q.ZP, {
                      tabIndex: 0,
                      onFocus: W,
                      value: y,
                      "data-id": d,
                      ref: O,
                      style: { maxHeight: "200px" },
                      rows: 1,
                      onChange: H,
                      placeholder: b,
                      className:
                        "m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0",
                      disabled: P,
                    }),
                    (0, i.jsx)(ty, {
                      disabled: v || P || S,
                      $nudgeBottom: v,
                      children: v
                        ? (0, i.jsx)("div", {
                            className: "text-2xl",
                            children: (0, i.jsx)(tx, {}),
                          })
                        : (0, i.jsx)(x.ZP, {
                            icon: U.LbG,
                            size: "small",
                            className: "mr-1",
                          }),
                    }),
                  ],
                }),
              L && eo,
            ],
          }),
        });
      }
      function tx() {
        var e = (0, c.useState)(0),
          n = e[0],
          t = e[1];
        (0, c.useEffect)(function () {
          var e = setInterval(function () {
            t(function (e) {
              return (e + 1) % 3;
            });
          }, 350);
          return function () {
            return clearInterval(e);
          };
        }, []);
        for (var r = [], a = 0; a < 3; a++)
          r.push(
            (0, i.jsx)(
              "span",
              { className: a <= n ? "" : "invisible", children: "\xb7" },
              a
            )
          );
        return (0, i.jsx)(i.Fragment, { children: r });
      }
      var tb = B.Z.div(tm(), function (e) {
          return e.$disabled && "bg-gray-100";
        }),
        ty = B.Z.button(th(), function (e) {
          return e.$nudgeBottom && "disabled:bottom-0.5 md:disabled:bottom-1";
        }),
        tj = B.Z.div(tg()),
        tw = t(46275);
      function tC(e) {
        var n = e.children,
          t = e.title,
          r = e.icon,
          a = e.sidebarOpen,
          o = e.onSidebarOpen;
        return (0, i.jsx)(nX.u.Root, {
          show: a,
          as: c.Fragment,
          children: (0, i.jsxs)(n0.V, {
            as: "div",
            className: "relative z-10",
            onClose: o,
            children: [
              (0, i.jsx)("div", { className: "fixed inset-0" }),
              (0, i.jsx)("div", {
                className: "fixed inset-0 overflow-hidden",
                children: (0, i.jsx)("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: (0, i.jsx)("div", {
                    className:
                      "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                    children: (0, i.jsx)(nX.u.Child, {
                      as: c.Fragment,
                      enter:
                        "transform transition ease-in-out duration-100 sm:duration-300",
                      enterFrom: "translate-x-full",
                      enterTo: "translate-x-0",
                      leave:
                        "transform transition ease-in-out duration-300 sm:duration-500",
                      leaveFrom: "translate-x-0",
                      leaveTo: "translate-x-full",
                      children: (0, i.jsx)(n0.V.Panel, {
                        className:
                          "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                        children: (0, i.jsxs)("div", {
                          className:
                            "flex h-full flex-col overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                          children: [
                            (0, i.jsx)("div", {
                              className: "",
                              children: (0, i.jsxs)("div", {
                                className: "flex items-start justify-between",
                                children: [
                                  (0, i.jsxs)(n0.V.Title, {
                                    className:
                                      "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                                    children: [
                                      (0, i.jsx)(x.ZP, { icon: r }),
                                      t,
                                    ],
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "mr-2 mt-2 flex h-7 items-center",
                                    children: (0, i.jsxs)("button", {
                                      type: "button",
                                      className:
                                        "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                                      onClick: function () {
                                        return o(!1);
                                      },
                                      children: [
                                        (0, i.jsx)("span", {
                                          className: "sr-only",
                                          children: "Close panel",
                                        }),
                                        (0, i.jsx)(x.ZP, {
                                          icon: U.q5L,
                                          size: "medium",
                                          "aria-hidden": "true",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "relative flex-1",
                              children: n,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var tk = t(1215);
      function tZ() {
        var e = (0, P.Z)([
          "bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase",
        ]);
        return (
          (tZ = function () {
            return e;
          }),
          e
        );
      }
      var tN = B.Z.span(tZ()),
        tM = t(36284),
        tS = t(87762),
        tP = { textareaDisclaimer: "", modelSwitcherDisclaimer: "" };
      function tI() {
        var e = (0, p.hz)(),
          n = eQ(
            (0, b.CS)(function (e) {
              return e.isoDate;
            })
          ),
          t = (0, tS.a)(
            ["modelMessageCap"],
            function () {
              return V.ZP.getModelMessageCap();
            },
            { enabled: e.has("model_preview") }
          ).data;
        return (0, c.useMemo)(
          function () {
            var e = (null == t ? void 0 : t.message_cap) || 0,
              r = (null == t ? void 0 : t.message_cap_window) || 1;
            if (!t || !r || !e) return tP;
            var a = (function (e) {
              if (e < 60) return e < 2 ? "minute" : "".concat(e, " minutes");
              var n = Math.floor(e / 60);
              if (n < 24) return n < 2 ? "hour" : "".concat(n, " hours");
              var t = Math.floor(n / 24);
              if (t < 7) return t < 2 ? "day" : "".concat(t, " days");
            })(r);
            return a
              ? {
                  textareaDisclaimer: ""
                    .concat(e, " messages every ")
                    .concat(a),
                  modelSwitcherDisclaimer:
                    "You've reached the GPT-4 cap that's currently "
                      .concat(e, " messages every ")
                      .concat(
                        a,
                        ", which gives all Plus users a chance to try the model.\n\nPlease check back "
                      )
                      .concat(n, "."),
                }
              : tP;
          },
          [t, n]
        );
      }
      var tT = et()(
        function () {
          return t.e(693).then(t.bind(t, 64693));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [64693];
            },
          },
          ssr: !1,
        }
      );
      function tR(e) {
        var n,
          t = e.onChangeModelSetting,
          r = e.availableModels,
          a = e.modelBackend,
          o = (0, p.hz)(),
          s = (0, c.useMemo)(
            function () {
              return r.find(function (e) {
                return e.id === a;
              });
            },
            [r, a]
          );
        return (0, i.jsxs)("div", {
          className: "flex items-center justify-center gap-2",
          children: [
            (0, i.jsx)(tF, {
              onChangeModelSetting: t,
              availableModels: r,
              modelBackend: a,
            }),
            o.has("tools3") &&
              (null == s
                ? void 0
                : null === (n = s.enabledTools) || void 0 === n
                ? void 0
                : n.includes("tools3")) &&
              (0, i.jsx)(tT, {}),
          ],
        });
      }
      function tF(e) {
        var n = e.onChangeModelSetting,
          t = e.availableModels,
          r = e.modelBackend,
          a = (0, b.BT)(),
          o = (0, h.WS)(),
          s = tI(),
          l = (0, c.useCallback)(
            function (e) {
              e.id !== a &&
                (n(b.G3.Model, e.id), o(g.s6.toggleModel, { model: e.id }));
            },
            [a, o, n]
          ),
          u = "".concat(s.modelSwitcherDisclaimer),
          d = t.map(function (e) {
            return {
              value: e,
              title: e.title,
              description: e.id === a ? u : e.description,
              tags: e.tags,
              disabled: e.id === a,
            };
          }),
          f =
            d.find(function (e) {
              return e.value.id === r;
            }) || d[0];
        return (0, i.jsx)(tM.ZP, {
          name: "Model",
          selectedOption: f,
          options: d,
          onChange: l,
        });
      }
      var t_ = function (e) {
          var n,
            t = e.modelBackend,
            r = e.availableModels,
            a =
              r.find(function (e) {
                return e.id === t;
              }) || r[0],
            o = a.tags
              .filter(function (e) {
                return tM.D2.includes(e);
              })
              .map(function (e) {
                return (0, tM.Vp)(e);
              }),
            s = eO();
          if (s.length > 0) {
            var l = s.map(function (e, n) {
              return (0,
              i.jsx)("img", { src: e.manifest.logo_url, alt: "".concat(e.manifest.name_for_human, " logo"), className: "h-4 w-4 rounded-sm" }, n);
            });
            n = (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", { children: "Enabled plugins:" }),
                l,
              ],
            });
          }
          return (0, i.jsxs)("div", {
            className:
              "flex w-full items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
            children: [
              "Model: ",
              a.title,
              o,
              n
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("span", { className: "px-1", children: "•" }),
                      n,
                    ],
                  })
                : null,
            ],
          });
        },
        tD = t(75318);
      function tq() {
        var e = (0, P.Z)([
          "text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (tq = function () {
            return e;
          }),
          e
        );
      }
      function tL() {
        var e = (0, P.Z)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (tL = function () {
            return e;
          }),
          e
        );
      }
      function tA() {
        var e = (0, P.Z)(["md:flex items-start text-center gap-3.5"]);
        return (
          (tA = function () {
            return e;
          }),
          e
        );
      }
      function tE() {
        var e = (0, P.Z)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
        return (
          (tE = function () {
            return e;
          }),
          e
        );
      }
      function tU() {
        var e = (0, P.Z)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ]);
        return (
          (tU = function () {
            return e;
          }),
          e
        );
      }
      function tB() {
        var e = (0, P.Z)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
        return (
          (tB = function () {
            return e;
          }),
          e
        );
      }
      function tO() {
        var e = (0, P.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
        return (
          (tO = function () {
            return e;
          }),
          e
        );
      }
      function tz() {
        var e = (0, P.Z)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (tz = function () {
            return e;
          }),
          e
        );
      }
      function tG() {
        var e = (0, P.Z)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ]);
        return (
          (tG = function () {
            return e;
          }),
          e
        );
      }
      var tV = B.Z.div(tq()),
        t$ = B.Z.h1(tL()),
        tH = B.Z.div(tA()),
        tJ = B.Z.div(tE()),
        tW = B.Z.h2(tU()),
        tK = B.Z.ul(tB()),
        tY = B.Z.li(tO());
      B.Z.li(tz());
      var tQ = B.Z.button(tG());
      function tX(e) {
        var n = e.text,
          t = e.onChangeCurrentPrompt,
          r = (0, c.useCallback)(
            function () {
              t(n);
            },
            [n, t]
          );
        return (0, i.jsxs)(tQ, { onClick: r, children: ['"', n, '" →'] });
      }
      function t0(e) {
        var n = e.onChangeCurrentPrompt,
          t = (0, p.nR)();
        return (0, i.jsxs)(tV, {
          children: [
            (0, i.jsxs)(t$, {
              children: ["ChatGPT", t && (0, i.jsx)(tN, { children: "Plus" })],
            }),
            (0, i.jsxs)(tH, {
              children: [
                (0, i.jsxs)(tJ, {
                  children: [
                    (0, i.jsxs)(tW, {
                      children: [
                        (0, i.jsx)(x.ZP, { icon: U.kXG, size: "medium" }),
                        "Examples",
                      ],
                    }),
                    (0, i.jsxs)(tK, {
                      children: [
                        (0, i.jsx)(tX, {
                          text: "Explain quantum computing in simple terms",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, i.jsx)(tX, {
                          text: "Got any creative ideas for a 10 year old’s birthday?",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, i.jsx)(tX, {
                          text: "How do I make an HTTP request in Javascript?",
                          onChangeCurrentPrompt: n,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(tJ, {
                  children: [
                    (0, i.jsxs)(tW, {
                      children: [
                        (0, i.jsx)(x.ZP, { icon: tD.Z, size: "medium" }),
                        "Capabilities",
                      ],
                    }),
                    (0, i.jsxs)(tK, {
                      children: [
                        (0, i.jsx)(tY, {
                          children:
                            "Remembers what user said earlier in the conversation",
                        }),
                        (0, i.jsx)(tY, {
                          children:
                            "Allows user to provide follow-up corrections",
                        }),
                        (0, i.jsx)(tY, {
                          children: "Trained to decline inappropriate requests",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(tJ, {
                  children: [
                    (0, i.jsxs)(tW, {
                      children: [
                        (0, i.jsx)(x.ZP, { icon: U.BJv, size: "medium" }),
                        "Limitations",
                      ],
                    }),
                    (0, i.jsxs)(tK, {
                      children: [
                        (0, i.jsx)(tY, {
                          children:
                            "May occasionally generate incorrect information",
                        }),
                        (0, i.jsx)(tY, {
                          children:
                            "May occasionally produce harmful instructions or biased content",
                        }),
                        (0, i.jsx)(tY, {
                          children:
                            "Limited knowledge of world and events after 2021",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function t1() {
        var e = (0, P.Z)([
          "flex flex-col items-center text-sm  dark:bg-gray-800",
        ]);
        return (
          (t1 = function () {
            return e;
          }),
          e
        );
      }
      function t2() {
        var e = (0, P.Z)(["w-full h-32 md:h-48 flex-shrink-0"]);
        return (
          (t2 = function () {
            return e;
          }),
          e
        );
      }
      function t3() {
        var e = (0, P.Z)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ]);
        return (
          (t3 = function () {
            return e;
          }),
          e
        );
      }
      function t4() {
        var e = (0, P.Z)(["px-2 py-10 relative w-full flex flex-col h-full"]);
        return (
          (t4 = function () {
            return e;
          }),
          e
        );
      }
      function t6() {
        var e = (0, P.Z)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ]);
        return (
          (t6 = function () {
            return e;
          }),
          e
        );
      }
      function t5(e) {
        var n = e.conversationTurns,
          t = e.onChangeItemInView,
          r = e.onRequestMoreCompletions,
          a = e.onUpdateNode,
          o = e.onChangeRating,
          s = e.onDeleteNode,
          l = e.onRequestCompletion,
          u = e.onChangeCurrentPrompt,
          d = e.onSandboxLinkClick,
          f = e.threadId,
          m = e.treeRef,
          h = e.activeRequests,
          g = e.isProcessingArtifact,
          v = e.isLoading,
          y = e.onChangeModelSetting,
          j = e.availableModels,
          w = e.currentThreadModel,
          C = e.canShowThreadSettings,
          k = (0, tk.useScrollToBottom)(),
          Z = (0, nP.Z)((0, tk.useSticky)(), 1)[0],
          N = (0, nI.Z)(),
          M = n.length < 2,
          S = C && M && !v,
          P = (0, p.nR)(),
          I = (0, c.useState)(!1),
          T = I[0],
          R = I[1],
          F = (0, b.ZP)(j, w, f).modelBackend;
        return (
          (0, c.useEffect)(
            function () {
              v
                ? setTimeout(function () {
                    N() && R(!0);
                  }, 1e3)
                : R(!1);
            },
            [v, N]
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [
              S &&
                (0, i.jsxs)(re, {
                  children: [
                    (0, i.jsx)(tR, {
                      onChangeModelSetting: y,
                      availableModels: j,
                      modelBackend: F,
                    }),
                    (0, i.jsxs)(rn, {
                      children: [
                        "ChatGPT",
                        P && (0, i.jsx)(tN, { children: "Plus" }),
                      ],
                    }),
                  ],
                }),
              (0, i.jsxs)(t8, {
                children: [
                  M && !v && !C && (0, i.jsx)(t0, { onChangeCurrentPrompt: u }),
                  T && v && (0, i.jsx)(nF.Z, { className: "mx-auto mt-4" }),
                  !M &&
                    !v &&
                    C &&
                    (0, i.jsx)(t_, { availableModels: j, modelBackend: F }),
                  n.map(function (e, n) {
                    return e.role === G.uU.Unknown || e.role === G.uU.System
                      ? null
                      : (0, i.jsx)(
                          nh,
                          {
                            turn: e,
                            threadId: f,
                            treeRef: m,
                            onChangeItemInView: t,
                            onChangeRating: o,
                            onRequestMoreCompletions: r,
                            onDeleteNode: s,
                            onRequestCompletion: l,
                            onUpdateNode: a,
                            onSandboxLinkClick: d,
                            activeRequests: h,
                            modelBackend: F,
                          },
                          n
                        );
                  }),
                  !S && (0, i.jsx)(t7, {}),
                ],
              }),
              g && (0, i.jsx)(nF.Z, { className: "mx-auto mt-4" }),
              !Z &&
                (0, i.jsx)(t9, {
                  onClick: k,
                  children: (0, i.jsx)(x.ZP, { icon: U.tv1, className: "m-1" }),
                }),
            ],
          })
        );
      }
      var t8 = B.Z.div(t1()),
        t7 = B.Z.div(t2()),
        t9 = B.Z.button(t3()),
        re = B.Z.div(t4()),
        rn = B.Z.h1(t6()),
        rt = et()(
          function () {
            return Promise.resolve().then(t.bind(t, 1215));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1215];
              },
            },
            ssr: !1,
          }
        );
      function rr(e) {
        var n = e.children;
        return (0, i.jsx)(rt, {
          className: (0, D.Z)("h-full dark:bg-gray-800"),
          followButtonClassName: "scroll-convo",
          initialScrollBehavior: "auto",
          children: n,
        });
      }
      function ra() {
        var e = (0, P.Z)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ]);
        return (
          (ra = function () {
            return e;
          }),
          e
        );
      }
      function ro() {
        var e = (0, P.Z)(["w-10 text-2xl text-center"]);
        return (
          (ro = function () {
            return e;
          }),
          e
        );
      }
      function ri() {
        var e = (0, P.Z)(["flex-1 leading-5"]);
        return (
          (ri = function () {
            return e;
          }),
          e
        );
      }
      function rs() {
        var e = (0, P.Z)(["flex gap-4 mt-6"]);
        return (
          (rs = function () {
            return e;
          }),
          e
        );
      }
      function rl(e) {
        var n = e.icon,
          t = e.children;
        return (0, i.jsxs)(ru, {
          children: [
            (0, i.jsx)(rc, { children: n }),
            (0, i.jsx)(rd, { children: t }),
          ],
        });
      }
      var ru = B.Z.div(ra()),
        rc = B.Z.div(ro()),
        rd = B.Z.div(ri());
      function rf(e) {
        var n = e.onBack,
          t = e.onNext,
          r = e.onSubmit;
        return (0, i.jsxs)(rm, {
          children: [
            n &&
              (0, i.jsx)(X.z, {
                as: "button",
                color: "neutral",
                onClick: n,
                children: "Back",
              }),
            t &&
              (0, i.jsx)(X.z, {
                as: "button",
                onClick: t,
                color: "neutral",
                className: "ml-auto",
                children: "Next",
              }),
            r &&
              (0, i.jsx)(X.z, {
                as: "button",
                onClick: r,
                color: "primary",
                className: "ml-auto",
                children: "Done",
              }),
          ],
        });
      }
      var rm = B.Z.div(rs());
      function rh() {
        var e = (0, P.Z)(["prose dark:prose-invert"]);
        return (
          (rh = function () {
            return e;
          }),
          e
        );
      }
      function rg() {
        var e = (0, P.Z)(["!mt-4 font-normal !mb-2"]);
        return (
          (rg = function () {
            return e;
          }),
          e
        );
      }
      function rv() {
        var e = (0, P.Z)(["mb-4"]);
        return (
          (rv = function () {
            return e;
          }),
          e
        );
      }
      function rp() {
        var e = (0, P.Z)(["w-full h-[1px] bg-gray-300 opacity-20"]);
        return (
          (rp = function () {
            return e;
          }),
          e
        );
      }
      function rx() {
        var e = (0, P.Z)(["flex gap-4 flex-col text-sm"]);
        return (
          (rx = function () {
            return e;
          }),
          e
        );
      }
      var rb = "oai/apps/hasSeenOnboarding",
        ry = W.id,
        rj = W.name,
        rw = function () {
          var e = (0, c.useCallback)(function () {
              v.m.setItem(
                "".concat(rb, "/").concat(ry),
                new Date().toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              );
            }, []),
            n = (0, c.useState)(null),
            t = n[0],
            r = n[1];
          (0, c.useEffect)(
            function () {
              r(v.m.getItem("".concat(rb, "/").concat(ry)));
            },
            [r]
          );
          var a = (0, c.useCallback)(
            function () {
              return t ? new Date(!0 === t ? "2022-12-14" : t) : t;
            },
            [t]
          );
          return (0, c.useMemo)(
            function () {
              return { setHasSeenOnboarding: e, getHasSeenOnboardingDate: a };
            },
            [a, e]
          );
        };
      function rC(e) {
        var n = e.onClose,
          t = rw().setHasSeenOnboarding,
          r = (0, c.useState)(0),
          a = r[0],
          o = r[1],
          s = (0, c.useCallback)(
            function () {
              n(!0), t();
            },
            [n, t]
          );
        return (0, i.jsxs)(rS, {
          children: [
            0 === a && (0, i.jsx)(rZ, { onChangePage: o }),
            1 === a && (0, i.jsx)(rN, { onChangePage: o }),
            2 === a && (0, i.jsx)(rM, { onChangePage: o, onSubmit: s }),
          ],
        });
      }
      var rk = function () {
          return "chat" === ry
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    className: "mb-5",
                    children: (0, i.jsx)(rP, {
                      children: (0, i.jsx)("b", { children: rj }),
                    }),
                  }),
                  (0, i.jsx)(rT, {}),
                ],
              })
            : (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)(rP, {
                    children: [
                      "Welcome to ",
                      (0, i.jsx)("b", { children: rj }),
                    ],
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Here are a few things to keep in mind before we get started:",
                  }),
                  (0, i.jsx)(rT, {}),
                ],
              });
        },
        rZ = function (e) {
          var n = e.onChangePage;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(rk, {}),
              (0, i.jsx)(rI, { children: "This is a free research preview." }),
              (0, i.jsxs)(rR, {
                children: [
                  (0, i.jsx)(rl, {
                    icon: "\uD83D\uDD2C",
                    children:
                      "Our goal is to get external feedback in order to improve our systems and make them safer.",
                  }),
                  (0, i.jsx)(rl, {
                    icon: "\uD83D\uDEA8",
                    children:
                      "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
                  }),
                ],
              }),
              (0, i.jsx)(rf, {
                onNext: function () {
                  return n(1);
                },
              }),
            ],
          });
        },
        rN = function (e) {
          var n = e.onChangePage;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(rk, {}),
              (0, i.jsx)(rI, { children: "How we collect data" }),
              (0, i.jsxs)(rR, {
                children: [
                  (0, i.jsx)(rl, {
                    icon: "\uD83E\uDDBE",
                    children:
                      "Conversations may be reviewed by our AI trainers to improve our systems.",
                  }),
                  (0, i.jsx)(rl, {
                    icon: "\uD83D\uDD10",
                    children:
                      "Please don't share any sensitive information in your conversations.",
                  }),
                ],
              }),
              (0, i.jsx)(rf, {
                onBack: function () {
                  return n(0);
                },
                onNext: function () {
                  return n(2);
                },
              }),
            ],
          });
        },
        rM = function (e) {
          var n = e.onChangePage,
            t = e.onSubmit,
            r = (0, c.useRef)(null);
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(rk, {}),
              (0, i.jsx)(rI, { children: "We'd love your feedback!" }),
              (0, i.jsxs)(rR, {
                children: [
                  (0, i.jsx)(rl, {
                    icon: "\uD83D\uDC4D",
                    children:
                      "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
                  }),
                  (0, i.jsxs)(rl, {
                    icon: "\uD83D\uDCAC",
                    children: [
                      "Share your feedback in our",
                      " ",
                      (0, i.jsx)("a", {
                        href: "https://discord.gg/openai",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Discord server",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(rf, {
                onBack: function () {
                  return n(1);
                },
                onSubmit: function () {
                  return null == t ? void 0 : t(r);
                },
              }),
            ],
          });
        },
        rS = B.Z.div(rh()),
        rP = B.Z.h2(rg()),
        rI = B.Z.h4(rv()),
        rT = B.Z.div(rp()),
        rR = B.Z.div(rx()),
        rF = t(24058),
        r_ = t(74516),
        rD = t(35e3),
        rq = t(69858),
        rL = t(77507);
      function rA(e) {
        var n = e.isOpen,
          t = e.onClose,
          r = (0, c.useRef)(null),
          a = (0, h.WS)(),
          o = (0, c.useState)(!1),
          s = o[0],
          l = o[1],
          d = (0, u.useRouter)(),
          f = (0, c.useCallback)(
            function () {
              a(g.s6.closeAccountPaymentModal), t();
            },
            [t, a]
          ),
          m = (0, c.useCallback)(
            (0, k.Z)(function () {
              var e;
              return (0, R.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    l(!0), a(g.s6.clickAccountCustomerPortal), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, V.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = n.sent()), d.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      r_.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please email support@openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return l(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [d, a, l]
          );
        return (0, i.jsxs)(rD.x, {
          isOpen: n,
          onClose: t,
          focusRef: r,
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",
              children: [
                (0, i.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your Account",
                }),
                (0, i.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: f,
                  children: (0, i.jsx)(U.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "grid",
              children: (0, i.jsx)("div", {
                className: "relative order-1 col-span-1 sm:order-2",
                children: (0, i.jsx)(rq.Oi, {
                  rowElements: [
                    (0, i.jsx)(
                      rq.Cu,
                      {
                        text: rL.S.plus.name,
                        children: (0, i.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: rL.S.plus.costInDollars,
                        }),
                      },
                      "row-plus-plan-name"
                    ),
                    (0, i.jsx)(
                      rq.hi,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        ref: r,
                        text: rL.S.plus.callToAction.active,
                      },
                      "row-plus-plan-button"
                    ),
                    (0, i.jsx)(
                      rq.G,
                      { text: rL.S.plus.demandAccess },
                      "row-plus-plan-demand"
                    ),
                    (0, i.jsx)(
                      rq.G,
                      { text: rL.S.plus.responseSpeed },
                      "row-plus-plan-speed"
                    ),
                    (0, i.jsx)(
                      rq.G,
                      { className: "sm:pb-1", text: rL.S.plus.modelFeatures },
                      "row-plus-plan-feathers"
                    ),
                    (0, i.jsx)(
                      rq.nR,
                      {
                        className: "sm:pb-1",
                        isLoading: s,
                        text: rL.S.manageSubscription.callToAction,
                        onClick: m,
                      },
                      "row-plus-plan-manage"
                    ),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var rE = t(86885),
        rU = t(59268),
        rB = { showAccountPaymentModal: !1 },
        rO = (0, rU.ZP)()(function (e) {
          return (0, M.Z)((0, N.Z)({}, rB), {
            setShowAccountPaymentModal: function (n) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : l();
              e({ showAccountPaymentModal: n }), t && t();
            },
          });
        }),
        rz = t(35873),
        rG = t(77064);
      function rV() {
        var e = (0, P.Z)([
          "h-[37px] py-2.5 px-6 text-xs uppercase text-gray-700 font-medium border-y relative",
        ]);
        return (
          (rV = function () {
            return e;
          }),
          e
        );
      }
      function r$() {
        var e = (0, P.Z)([
          "relative py-1 px-6 text-xs uppercase text-gray-700 font-medium bg-gray-100 border-y",
        ]);
        return (
          (r$ = function () {
            return e;
          }),
          e
        );
      }
      B.Z.h3(rV());
      var rH = B.Z.h3(r$());
      function rJ() {
        var e = (0, P.Z)(["overflow-y-auto h-full"]);
        return (
          (rJ = function () {
            return e;
          }),
          e
        );
      }
      function rW() {
        var e = (0, P.Z)(["whitespace-pre-wrap text-sm"]);
        return (
          (rW = function () {
            return e;
          }),
          e
        );
      }
      function rK() {
        var e = (0, P.Z)([
          "px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-black/10 border-gray-200",
        ]);
        return (
          (rK = function () {
            return e;
          }),
          e
        );
      }
      function rY() {
        var e = (0, P.Z)(["absolute top-1/2 -translate-y-1/2 right-6"]);
        return (
          (rY = function () {
            return e;
          }),
          e
        );
      }
      function rQ(e) {
        var n = e.treeRef,
          t = e.currentLeafId,
          r = (0, c.useState)(),
          a = r[0],
          o = r[1],
          s = (0, c.useMemo)(
            function () {
              return n.current
                .getBranchFromLeaf(t)
                .filter(function (e) {
                  return e.type !== G.Jq.Root;
                })
                .map(function (e) {
                  return e.message;
                });
            },
            [n, t]
          ),
          l = (0, c.useCallback)(function () {
            o(void 0);
          }, []),
          u = (0, c.useCallback)(
            function () {
              navigator.clipboard.writeText(n.current.getTextFromThread(t));
            },
            [n, t]
          ),
          f = s.map(function (e, n) {
            var t = Y.Cv.getRoleFromMessage(e),
              r = Y.Cv.getNameFromMessage(e);
            return (0, i.jsxs)(
              r1,
              {
                role: "button",
                onClick: function () {
                  return o(n);
                },
                children: [
                  (0, i.jsxs)("div", {
                    className: "text-xs font-medium uppercase text-gray-400",
                    children: [
                      t,
                      t !== r && " (".concat(r, ")"),
                      " -> ",
                      Y.Cv.getRecipientFromMessage(e),
                    ],
                  }),
                  (0, i.jsx)("div", { children: Y.Cv.getTextFromMessage(e) }),
                ],
              },
              e.id
            );
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(rX, {
              children: [
                (0, i.jsxs)(rH, {
                  children: [
                    "Conversation messages",
                    (0, i.jsx)(r2, {
                      children: (0, i.jsx)(rG.$, {
                        label: (0, i.jsx)(rG.u, {
                          text: "Copy conversation text to clipboard",
                        }),
                        children: (0, i.jsx)(rz.Z, { onCopy: u }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(r0, { children: f }),
              ],
            }),
            void 0 !== a &&
              (0, i.jsx)(
                d.Z,
                {
                  isOpen: !0,
                  onModalClose: l,
                  type: "success",
                  children: (0, i.jsx)("pre", {
                    className:
                      "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                    children: JSON.stringify(s[a], null, 2),
                  }),
                },
                "DebugMessageModal-".concat(a)
              ),
          ],
        });
      }
      var rX = B.Z.div(rJ()),
        r0 = B.Z.pre(rW()),
        r1 = B.Z.div(rK()),
        r2 = B.Z.div(rY()),
        r3 = t(85087),
        r4 = t(30331);
      function r6() {
        var e = (0, O.kP)(),
          n = e.session,
          t = e.loading,
          r = (0, tS.a)(
            ["models"],
            function () {
              return V.ZP.getModels(n.accessToken);
            },
            {
              enabled: Boolean(!t && (null == n ? void 0 : n.accessToken)),
              placeholderData: {
                models: [
                  {
                    slug: "text-davinci-002-render",
                    max_tokens: 4097,
                    title: "Default",
                    description: "",
                    tags: [],
                  },
                ],
              },
              onError: function (e) {
                try {
                  r4.Tb(e);
                } catch (n) {}
              },
            }
          ).data;
        return (0, c.useMemo)(
          function () {
            var e;
            return {
              availableModels: r
                ? (e = r.models).map(function (e) {
                    return {
                      id: e.slug,
                      maxTokens: e.max_tokens,
                      title: e.title,
                      description: e.description,
                      tags: e.tags,
                      enabledTools: e.enabled_tools,
                      properties: e.qualitative_properties,
                    };
                  })
                : [],
            };
          },
          [r]
        );
      }
      var r5 = t(62906);
      t(49674);
      var r8 = t(44675);
      "".concat(r8.env.INTERNAL_API_URL, "/api");
      var r7 = t(89678),
        r9 = t.n(r7),
        ae = t(34388),
        an = t(39400),
        at = [
          /\bnigger\w*/i,
          /\bfaggot\w*/i,
          /\bkike\w*/i,
          /\bdykes?\b/i,
          /\bwetbacks?\b/i,
          /\bchinks?\b/i,
          /\bgooks?\b/i,
          /\bpakis?\b/i,
          /\binjuns?\b/i,
          /\btrannys?\b/i,
          /\btrannies\b/i,
          /\bspicks?\b/i,
          /\bshemales?\b/i,
        ];
      function ar() {
        var e = (0, P.Z)(["overflow-hidden w-full h-full relative"]);
        return (
          (ar = function () {
            return e;
          }),
          e
        );
      }
      function aa() {
        var e = (0, P.Z)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (aa = function () {
            return e;
          }),
          e
        );
      }
      function ao() {
        var e = (0, P.Z)(["grow flex-1 overflow-hidden"]);
        return (
          (ao = function () {
            return e;
          }),
          e
        );
      }
      function ai() {
        var e = (0, P.Z)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2",
        ]);
        return (
          (ai = function () {
            return e;
          }),
          e
        );
      }
      var as = "oai/apps/hasSeenHistoryRestored",
        al = W.href,
        au = function (e) {
          var n,
            r,
            a,
            o,
            s,
            f,
            m,
            y,
            j,
            w,
            C,
            P,
            q,
            A,
            B,
            H,
            W,
            Q,
            X,
            ee,
            en,
            et,
            er,
            ea,
            eo,
            ei,
            es,
            el,
            eu,
            ec,
            ed,
            ef,
            em,
            eh,
            eg,
            ev,
            ep,
            ex,
            eb,
            ey,
            ej,
            ew,
            eC = e.initialData,
            ek = e.isLoading,
            eZ = (0, p.hz)(),
            eN = (0, u.useRouter)(),
            eM = (0, K.lj)(),
            eS = (0, h.WS)(),
            eP = eZ.has("disable_history"),
            eI = eZ.has($) && !eM,
            eT =
              ((a = (0, r5.NL)()),
              (0, c.useCallback)(
                function (e) {
                  a.removeQueries(["conversation", e]);
                },
                [a]
              )),
            eR = (0, c.useState)(),
            eF = eR[0],
            e_ = eR[1],
            eD = (0, c.useState)(),
            eq = eD[0],
            eL = eD[1],
            eA = (0, c.useState)(),
            eE = eA[0],
            eU = eA[1],
            eB = (0, c.useRef)(null),
            eO = (0, c.useRef)(eC.threadId || ""),
            ez = (0, r3.Z)(),
            eG = ez.accountStatusResponse,
            eV = ez.isLoading,
            e$ = (0, p.nR)(),
            eH = (0, J.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            eJ = (0, O.kP)().session,
            eW = null == eJ ? void 0 : eJ.accessToken,
            eK =
              ((s = (o = {
                enabled: !eP && Boolean(eW) && !eV,
                accessToken: eW,
              }).enabled),
              (f = o.accessToken),
              (j = (y = (0, an.N)({
                queryKey: ["conversations"],
                queryFn: function (e) {
                  var n = e.pageParam;
                  return V.ZP.getConversations(n || 0, 20, f);
                },
                getNextPageParam: function (e) {
                  var n = e.offset + e.limit;
                  return n < e.total ? n : void 0;
                },
                enabled: s,
              })).data),
              (w = y.fetchNextPage),
              (C = y.hasNextPage),
              (P = y.refetch),
              (q = y.isInitialLoading),
              (A = y.isError),
              (0, c.useMemo)(
                function () {
                  return {
                    conversations:
                      null == j
                        ? void 0
                        : j.pages.reduce(function (e, n) {
                            if (n) {
                              var t = n.items;
                              e.push.apply(e, (0, I.Z)(void 0 === t ? [] : t));
                            }
                            return e;
                          }, []),
                    hasNextPage: C,
                    fetchNextPage: w,
                    refetch: function () {
                      return s && P();
                    },
                    isLoading: q,
                    isError: s && A,
                  };
                },
                [null == j ? void 0 : j.pages, s, w, C, A, q, P]
              )),
            eY = eK.conversations,
            eQ = eK.hasNextPage,
            eX = eK.fetchNextPage,
            e0 = eK.refetch,
            e1 = eK.isLoading,
            e2 = eK.isError,
            e3 = (0, c.useState)(!1),
            e4 = e3[0],
            e6 = e3[1],
            e5 =
              ((H = (B = {
                exempt: !1,
                onRestrictedTermFound: (0, c.useCallback)(
                  function (e) {
                    e6(!0),
                      eS(g.s6.promptUsedRestrictedWords, {
                        threadId: eO.current,
                        content: e,
                      });
                  },
                  [eS]
                ),
              }).exempt),
              (W = B.onRestrictedTermFound),
              (X = (Q = (0, c.useState)(!1))[0]),
              (ee = Q[1]),
              {
                hasRestrictedTerms: X,
                checkRestrictedTerms: (0, c.useCallback)(
                  function (e) {
                    var n;
                    return (at.some(function (t) {
                      var r = t.exec(e);
                      return r && (n = r[0]), r;
                    }),
                    !H && n)
                      ? (ee(!0), null == W || W(n), !0)
                      : (ee(!1), !1);
                  },
                  [H, W]
                ),
              }),
            e8 = e5.hasRestrictedTerms,
            e7 = e5.checkRestrictedTerms,
            e9 = (0, c.useState)(!0),
            ne = e9[0],
            nn = e9[1],
            nt = (0, c.useState)(!1),
            nr = nt[0],
            na = nt[1],
            no = (0, c.useState)(!1),
            ni = no[0],
            ns = no[1],
            nl = (0, c.useState)(!1),
            nu = nl[0],
            nc = nl[1],
            nd = r6().availableModels,
            nf = (0, rF.p0)(),
            nm = (0, b.ZP)(nd, eC.lastModelUsed, eO.current),
            nh = nm.temperature,
            ng = nm.modelBackend,
            nv = nm.onChangeModelSetting,
            np = (0, c.useMemo)(
              function () {
                return nd.find(function (e) {
                  return e.id === ng;
                });
              },
              [nd, ng]
            ),
            nx = (0, c.useRef)(new Y.Cv(eC.thread)),
            nb = (0, c.useState)(eC.currentLeafId),
            ny = nb[0],
            nj = nb[1],
            nw = (0, c.useState)(!1),
            nC = nw[0],
            nN = nw[1],
            nM = (0, c.useState)(null),
            nS = nM[0],
            nP = nM[1],
            nI = (0, c.useState)({}),
            nT = nI[0],
            nR = nI[1],
            nF = (0, c.useState)(new Set()),
            n_ = nF[0],
            nD = nF[1],
            nq = (0, c.useCallback)(function (e) {
              nR(function (n) {
                return n[e], (0, S.Z)(n, [e].map(T.Z));
              });
            }, []),
            nL = (0, c.useCallback)(
              function () {
                e0(), nU(""), nN(!1), eS(g.s6.newThread);
              },
              [eS, e0]
            ),
            nA = (0, c.useState)(""),
            nE = nA[0],
            nU = nA[1],
            nB = (0, c.useState)(""),
            nO = nB[0],
            nG = nB[1],
            nV = nO || nE || eC.title,
            n$ = (0, c.useCallback)(
              function (e) {
                V.ZP.generateTitle(eO.current, e, ng)
                  .then(function (e) {
                    var n = e.title;
                    nU(n),
                      eS(g.s6.renameThread, {
                        threadId: eO.current,
                        content: n,
                        model: ng,
                      });
                  })
                  .catch(function (e) {
                    console.error(e);
                  });
              },
              [eS, ng]
            ),
            nH =
              ((en = eO),
              (el =
                eZ.has("tools3") &&
                (null == np
                  ? void 0
                  : null === (n = np.enabledTools) || void 0 === n
                  ? void 0
                  : n.includes("tools3"))
                  ? nf.map(function (e) {
                      return e.id;
                    })
                  : void 0),
              (eu = (0, p.hz)()),
              (ec = (0, c.useId)()),
              (ed = (0, h.WS)()),
              (ef = (0, b.CS)(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (em = (0, b.CS)(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (eh = (0, c.useRef)(0)),
              (eg = (0, c.useRef)({})),
              (ev = (0, c.useRef)()),
              (0, c.useEffect)(
                function () {
                  function e() {
                    return (e = (0, k.Z)(function () {
                      return (0, R.__generator)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [4, t.e(554).then(t.bind(t, 76554))];
                          case 1:
                            return (ev.current = e.sent()), [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  eu.has("tools3_dev") &&
                    (function () {
                      e.apply(this, arguments);
                    })();
                },
                [eu]
              ),
              (ep = (0, c.useCallback)(
                function (e, n, t, r) {
                  var a,
                    o = r.eventSource,
                    i = function () {
                      setTimeout(function () {
                        nq(t),
                          nD(function (e) {
                            var n = new Set(e);
                            return n.delete(t), n;
                          }),
                          delete eg.current[t];
                      }, 0);
                    },
                    s = nx.current,
                    l = t,
                    u = s.getParentId(l),
                    c = "CompletionUpdated:".concat(t),
                    d = "CompletionUpdated:".concat(u),
                    f = n === G.Os.Continue,
                    m = !0,
                    h = !1,
                    v = s.getMessage(l),
                    p = s.getIsBlockedFromNode(u),
                    x = !1,
                    y = !1,
                    j = r9()(
                      function () {
                        p ||
                          x ||
                          (s.updateNodeMessage(l, v),
                          E().publish(c, { nodeId: l }));
                      },
                      50,
                      { leading: !0, maxWait: 50 }
                    );
                  function w(e, n, t) {
                    return C.apply(this, arguments);
                  }
                  function C() {
                    return (C = (0, k.Z)(function (e, n, t) {
                      var r,
                        a,
                        o,
                        i,
                        l,
                        u = arguments;
                      return (0, R.__generator)(this, function (f) {
                        switch (f.label) {
                          case 0:
                            (r = u.length > 3 && void 0 !== u[3] && u[3]),
                              (f.label = 1);
                          case 1:
                            return (
                              f.trys.push([1, 3, , 4]),
                              [
                                4,
                                (0, z._I)(t, !1, en.current, s.getMessageId(n)),
                              ]
                            );
                          case 2:
                            return (
                              (o = (a = f.sent()).isBlocked),
                              (i = a.isFlagged),
                              (o || i) && (y = !0),
                              o
                                ? ((x = !0),
                                  r || (p = !0),
                                  s.updateNode(n, {
                                    message: {
                                      content: { parts: { $set: [""] } },
                                    },
                                    metadata: { $set: z.sK },
                                  }),
                                  E().publish(r ? c : d, { nodeId: n }),
                                  ed(
                                    r
                                      ? g.s6.completionBlockedByModeration
                                      : g.s6.promptBlockedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : i
                                ? (s.updateNode(n, {
                                    metadata: { $set: z.Mf },
                                  }),
                                  E().publish(r ? c : d, { nodeId: n }),
                                  ed(
                                    r
                                      ? g.s6.completionFlaggedByModeration
                                      : g.s6.promptFlaggedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : r &&
                                  p &&
                                  (s.updateNodeMessage(n, v),
                                  E().publish(c, { nodeId: n })),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (l = f.sent()),
                              (x = !0),
                              s.updateNode(n, {
                                metadata: {
                                  $set: {
                                    err: "An error occured",
                                    errType: "danger",
                                  },
                                },
                              }),
                              ed(g.s6.moderationError, {
                                threadId: e,
                                content: JSON.stringify(l || ""),
                              }),
                              E().publish(r ? c : d, { nodeId: n }),
                              E().publish("UnrecoverableError"),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  return (
                    (a = (0, k.Z)(function (r) {
                      var a,
                        d,
                        C,
                        k,
                        Z,
                        N,
                        M,
                        S,
                        P,
                        I,
                        T,
                        F,
                        _,
                        D,
                        q,
                        L,
                        A,
                        U,
                        B;
                      return (0, R.__generator)(this, function (R) {
                        switch (R.label) {
                          case 0:
                            if (
                              ((a = r.err),
                              (d = r.finish_reason),
                              (C = r.message),
                              (k = r.threadId),
                              (a || !C) && !d)
                            )
                              return (
                                a && console.error(a),
                                (Z =
                                  (null == a ? void 0 : a.message) ||
                                  "Something went wrong"),
                                s.updateNode(l, {
                                  message: { $set: v },
                                  metadata: {
                                    $set: {
                                      err: Z,
                                      errType: "danger",
                                      errCode: ((0, ae.T)(a) && a.code) || "",
                                    },
                                  },
                                }),
                                E().publish(c, { nodeId: l }),
                                i(),
                                (0, ae.T)(a) &&
                                  (null == a ? void 0 : a.code) === b.uU &&
                                  (null == a ? void 0 : a.clearsIn) &&
                                  (ef(
                                    new Date(
                                      Date.now() + 1e3 * a.clearsIn
                                    ).toISOString()
                                  ),
                                  setTimeout(function () {
                                    em();
                                  }, 1e3 * a.clearsIn)),
                                [2]
                              );
                            if (m && s.isFirstCompletion) {
                              if (
                                (null == C
                                  ? void 0
                                  : null === (N = C.author) || void 0 === N
                                  ? void 0
                                  : N.role) === G.uU.System
                              )
                                return s.appendSystemMessageToRoot(C), [2];
                              if (
                                (null == C
                                  ? void 0
                                  : null === (M = C.author) || void 0 === M
                                  ? void 0
                                  : M.role) === G.uU.User
                              )
                                return [2];
                            }
                            if (
                              (m
                                ? ((m = !1),
                                  (h = s.isFirstCompletion),
                                  k && (en.current = k),
                                  s.updateNodeMessage(l, C),
                                  h && nL(),
                                  f ||
                                    w(
                                      en.current,
                                      u,
                                      s.getTextFromLastNTurns(u, 1),
                                      !1
                                    ),
                                  ed(g.s6.generateCompletion, {
                                    id: t,
                                    threadId: k,
                                    completionType: n,
                                    eventSource: o,
                                    model: e,
                                  }),
                                  E().publish("PublishAborter", {
                                    id: t,
                                    aborter: eg.current[t],
                                  }))
                                : C &&
                                  !f &&
                                  C.id !== s.getMessageId(l) &&
                                  (j.flush(),
                                  s.addNode(C.id, C, l, G.Jq.Completion),
                                  nj((l = C.id)),
                                  (c = "CompletionUpdated:".concat(l))),
                              C && (v = C),
                              j(),
                              "stop" !== d ||
                                (p ||
                                  x ||
                                  (j.flush(), !y && h && n$(s.getMessageId(l))),
                                (S = Y.Cv.getTextFromMessage(v)),
                                (P =
                                  s.getTextFromLastNTurns(u, 2) + "\n\n" + S),
                                w(en.current, l, P, !0),
                                x || E().publish(c, { nodeId: l }),
                                i(),
                                !eu.has("tools3_dev")))
                            )
                              return [3, 3];
                            if ((I = ev.current)) return [3, 1];
                            return (
                              console.error("Error loading tools3"), [3, 3]
                            );
                          case 1:
                            if (!(T = I.getLocalhostPluginHttpApiCallData(v)))
                              return [3, 3];
                            return [4, I.makeLocalhostPluginHttpApiCall(T)];
                          case 2:
                            (F = R.sent()),
                              (_ = l),
                              (D = !0),
                              (q = !1),
                              (L = void 0);
                            try {
                              for (
                                A = F[Symbol.iterator]();
                                !(D = (U = A.next()).done);
                                D = !0
                              )
                                (B = U.value),
                                  s.addNode(B.id, B, _, G.Jq.Completion),
                                  (_ = B.id);
                            } catch (O) {
                              (q = !0), (L = O);
                            } finally {
                              try {
                                D || null == A.return || A.return();
                              } finally {
                                if (q) throw L;
                              }
                            }
                            nj(_), eb(e, G.Os.Next, _, {}), (R.label = 3);
                          case 3:
                            return [2];
                        }
                      });
                    })),
                    function (e) {
                      return a.apply(this, arguments);
                    }
                  );
                },
                [ed, nL, n$, nq, nD, nj, en, nx]
              )),
              (eb = (0, c.useCallback)(
                ((ex = (0, k.Z)(function (e, n, t, r) {
                  var a,
                    o,
                    i,
                    s,
                    l,
                    u,
                    c,
                    d,
                    f,
                    m = arguments;
                  return (0, R.__generator)(this, function (h) {
                    switch (h.label) {
                      case 0:
                        return (
                          (a = !(m.length > 4) || void 0 === m[4] || m[4]),
                          (o = nx.current),
                          (i = "request-".concat(ec, "-").concat(eh.current++)),
                          nD(function (e) {
                            var n = new Set(e);
                            return n.add(i), n;
                          }),
                          o.addNode(i, "", t, G.Jq.Completion),
                          a && nj(i),
                          (l = []),
                          (u = o.getNode(t)),
                          n === G.Os.Next || n === G.Os.Variant
                            ? ((s =
                                (null ===
                                  (c = (d = o.getNode(u.parentId)).message) ||
                                void 0 === c
                                  ? void 0
                                  : c.id) || d.id),
                              l.push(u.message))
                            : (s = u.message.id),
                          [
                            4,
                            V.ZP.publicApiCompletionStream(
                              {
                                model: e,
                                completionType: n,
                                threadId: en.current || void 0,
                                parentMessageId: s,
                                messages: l,
                                enabledPluginIds: el,
                              },
                              ep(e, n, i, r)
                            ),
                          ]
                        );
                      case 1:
                        return (f = h.sent()), (eg.current[i] = f), [2];
                    }
                  });
                })),
                function (e, n, t, r) {
                  return ex.apply(this, arguments);
                }),
                [nx, ec, nD, nj, en, el, ep]
              ))),
            nJ = (0, c.useCallback)(
              function () {
                eN.replace({ pathname: eN.basePath, query: {} }, void 0, {
                  shallow: !0,
                });
              },
              [eN]
            ),
            nW = (0, c.useCallback)(
              function () {
                if (ny) {
                  var e = nx.current.getBranchFromLeaf(ny);
                  nR(function (n) {
                    var t = (0, N.Z)({}, n);
                    return (
                      e.forEach(function (e) {
                        e.id in t && (t[e.id].abort(), delete t[e.id]);
                      }),
                      t
                    );
                  }),
                    nD(function (n) {
                      var t = new Set(n);
                      return (
                        e.forEach(function (e) {
                          t.delete(e.id);
                        }),
                        t
                      );
                    });
                }
              },
              [ny]
            ),
            nK = (0, c.useCallback)(
              ((ey = (0, k.Z)(function (e, n, t, r) {
                var a,
                  o,
                  i = arguments;
                return (0, R.__generator)(this, function (s) {
                  return (
                    (a = !(i.length > 4) || void 0 === i[4] || i[4]),
                    (o = i.length > 5 ? i[5] : void 0),
                    r && nW(),
                    (e !== G.Os.Continue &&
                      e7(nx.current.getTextFromNode(n))) ||
                      (eT(eO.current),
                      nH(
                        o
                          ? (0, b.xt)(eZ.has("priority_driven_models_list"), nd)
                          : ng,
                        e,
                        n,
                        t,
                        a
                      )),
                    [2]
                  );
                });
              })),
              function (e, n, t, r) {
                return ey.apply(this, arguments);
              }),
              [e7, eT, nH, eZ, nd, ng, nW]
            ),
            nY = (0, c.useCallback)(function (e, n, t, r) {
              nx.current.addNode(e, r, n, G.Jq.Prompt);
            }, []),
            nQ = (0, c.useCallback)(
              function (e, n, t) {
                var r = n.value;
                nY(e, ny, G.Jq.Prompt, r), nK(G.Os.Next, e, t, !0);
              },
              [ny, nY, nK]
            ),
            nX = (0, c.useMemo)(
              function () {
                var e,
                  n,
                  t = nx.current.getNode(ny),
                  r = t.type === G.Jq.Prompt,
                  a =
                    (null === (e = t.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (n = t.metadata) || void 0 === n
                      ? void 0
                      : n.errCode) !== z.Dd;
                return Boolean(r || a) && 0 === n_.size;
              },
              [n_.size, ny]
            ),
            n0 = (0, b.CS)(function (e) {
              return e.isoDate;
            }),
            n1 = (0, c.useMemo)(
              function () {
                var e,
                  n =
                    (null === (e = nx.current.getNode(ny).metadata) ||
                    void 0 === e
                      ? void 0
                      : e.errCode) === b.uU;
                return nX && n && n0;
              },
              [ny, nX, n0]
            ),
            n2 = (0, c.useCallback)(
              function (e, n) {
                var t,
                  r =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  a = arguments.length > 3 ? arguments[3] : void 0;
                (t = nX
                  ? nx.current.getLastValidNode(e).id
                  : nx.current.getParentPromptNode(e).id),
                  nK(G.Os.Variant, t, n, !1, r, a);
              },
              [nK, nX]
            ),
            n3 = (0, c.useCallback)(
              function (e) {
                nK(G.Os.Continue, e, { eventSource: "mouse" }, !1);
              },
              [nK]
            ),
            n4 = (0, c.useCallback)(
              function (e) {
                nx.current.addNode(e.id, e, ny, G.Jq.System),
                  nK(G.Os.Next, e.id, {}, !0);
              },
              [nK, ny]
            ),
            n6 = !!(
              eZ.has("tools2") &&
              (null == np
                ? void 0
                : null === (r = np.enabledTools) || void 0 === r
                ? void 0
                : r.includes("tools2"))
            ),
            n8 = (0, c.useCallback)(
              ((ej = (0, k.Z)(function (e) {
                var n;
                return (0, R.__generator)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!n6) return [3, 3];
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        (n = e.currentTarget.href),
                        [4, t.e(949).then(t.bind(t, 93949))]
                      );
                    case 1:
                      return [
                        4,
                        r.sent().handleSandboxLinkClick(eZ, np, eO)(n),
                      ];
                    case 2:
                      r.sent(), (r.label = 3);
                    case 3:
                      return [2];
                  }
                });
              })),
              function (e) {
                return ej.apply(this, arguments);
              }),
              [eZ, np, eO, n6]
            ),
            n7 = (0, c.useCallback)(
              function (e) {
                nj(nx.current.getLeafFromNode(e).id), eS(g.s6.changeNode);
              },
              [eS, nj]
            ),
            n9 = (0, c.useCallback)(function (e, n) {
              nx.current.updateNodeText(e, n);
            }, []),
            tr = (0, c.useCallback)(
              function (e, n, t) {
                eS(g.s6.thumbRating, {
                  id: n,
                  threadId: eO.current,
                  rating: t,
                  model: ng,
                }),
                  eO.current &&
                    V.ZP.submitMessageFeedback({
                      message_id: n,
                      conversation_id: eO.current,
                      rating: t,
                    }),
                  eL(e),
                  eU(n),
                  e_(t);
                var r = nx.current.getMetadata(e);
                if (
                  (nx.current.updateNode(e, {
                    metadata: {
                      $set: (0, M.Z)((0, N.Z)({}, r), { rating: t }),
                    },
                  }),
                  "thumbsDown" === t && eI)
                ) {
                  var a,
                    o =
                      null === (a = nx.current) || void 0 === a
                        ? void 0
                        : a.getConversationTurns(e || "root");
                  nk(o[o.length - 1]) && n2(e, { eventSource: "mouse" }, !1);
                }
              },
              [eS, ng, n2, eI]
            ),
            ta = (0, c.useCallback)(
              function () {
                var e,
                  n =
                    null === (e = eB.current) || void 0 === e
                      ? void 0
                      : e.elements,
                  t = (0, I.Z)(n || [])
                    .filter(function (e) {
                      return e.checked;
                    })
                    .map(function (e) {
                      return e.id;
                    }),
                  r = (null == n ? void 0 : n["feedback-other"].value) || "";
                eF &&
                  eq &&
                  (r || t.length > 0) &&
                  (eS(g.s6.reportResult, {
                    id: eE,
                    threadId: eO.current,
                    content: r,
                    model: ng,
                    rating: eF,
                    tags: t,
                  }),
                  eO.current &&
                    eE &&
                    V.ZP.submitMessageFeedback({
                      message_id: eE,
                      conversation_id: eO.current,
                      rating: eF,
                      text: r,
                      tags: t.map(function (e) {
                        return e.replace("feedback-", "");
                      }),
                    }));
              },
              [eS, ng, eq, eE, eF]
            ),
            to = (0, c.useCallback)(
              ((ew = (0, k.Z)(function (e, n, t, r, a, o, i, s) {
                var l, u, c, d;
                return (0, R.__generator)(this, function (f) {
                  switch (f.label) {
                    case 0:
                      if (
                        ((u =
                          null === (l = eB.current) || void 0 === l
                            ? void 0
                            : l.elements),
                        (c = (0, I.Z)(u || [])
                          .filter(function (e) {
                            return e.checked;
                          })
                          .map(function (e) {
                            return e.id;
                          })),
                        (d =
                          (null == u ? void 0 : u["feedback-other"].value) ||
                          ""),
                        !(eF && eq))
                      )
                        return [3, 2];
                      return [
                        4,
                        V.ZP.submitMessageComparisonFeedback({
                          feedback_version: "1.0",
                          original_message_id: e,
                          new_message_id: n,
                          rating: eF,
                          conversation_id: eO.current,
                          text: d,
                          tags: c.map(function (e) {
                            return e.replace("feedback-", "");
                          }),
                          completion_comparison_rating: t,
                          new_completion_placement: r,
                          feedback_start_time: a,
                          compare_step_start_time: o,
                          new_completion_load_start_time: i,
                          new_completion_load_end_time: s,
                        }),
                      ];
                    case 1:
                      f.sent(), (f.label = 2);
                    case 2:
                      return [2];
                  }
                });
              })),
              function (e, n, t, r, a, o, i, s) {
                return ew.apply(this, arguments);
              }),
              [eF, eq]
            ),
            ti = (0, c.useCallback)(function (e) {
              nx.current.deleteNode(e);
            }, []),
            ts = (0, c.useCallback)(
              function (e) {
                switch (null == e ? void 0 : e.state) {
                  case "pending":
                    nY("artifact", "root", G.Jq.Prompt, e.url),
                      nY(
                        "artifact-summary",
                        "artifact",
                        G.Jq.Completion,
                        "loading..."
                      ),
                      nj("artifact"),
                      nP(e);
                    break;
                  case "success":
                    n9("artifact-summary", e.contents),
                      nj("artifact-summary"),
                      nP(e);
                    break;
                  default:
                    nP(e);
                }
              },
              [nY, n9, nj]
            ),
            tl = (0, c.useCallback)(function () {
              nc(function (e) {
                return "debug" !== e && "debug";
              });
            }, []),
            tu = (0, c.useCallback)(
              function () {
                eS(g.s6.clickSidebarAccountPortalMenuItem), ns(!0);
              },
              [eS, ns]
            ),
            tc = (0, c.useCallback)(
              function () {
                ns(!1);
              },
              [ns]
            ),
            td = rO(function (e) {
              return {
                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                showAccountPaymentModal: e.showAccountPaymentModal,
              };
            }),
            tf = td.showAccountPaymentModal,
            tm = td.setShowAccountPaymentModal,
            th = (0, c.useCallback)(
              function () {
                tm(!0, function () {
                  eS(g.s6.clickSidebarAccountPaymentMenuItem);
                });
              },
              [eS, tm]
            ),
            tg = (0, c.useCallback)(
              function () {
                tm(!1);
              },
              [tm]
            ),
            tv = (0, c.useCallback)(function () {
              nc(function (e) {
                return "navigation" !== e && "navigation";
              });
            }, []),
            tx = (0, c.useCallback)(
              function (e, n) {
                if (nx.current.isFirstCompletion) {
                  var t,
                    r = nx.current.getParent(n);
                  (null === (t = r.metadata) || void 0 === t
                    ? void 0
                    : t.errCode) !== z.Dd &&
                    setTimeout(function () {
                      n$(r.message.id);
                    }, 500);
                }
                nR(function (e) {
                  var t = e[n],
                    r = (0, S.Z)(e, [n].map(T.Z));
                  return null == t || t.abort(), r;
                }),
                  nD(function (e) {
                    var t = new Set(e);
                    return t.delete(n), t;
                  });
              },
              [n$]
            ),
            tb = (0, c.useCallback)(function (e, n) {
              var t = n.id,
                r = n.aborter;
              r &&
                nR(function (e) {
                  return (0, M.Z)((0, N.Z)({}, e), (0, Z.Z)({}, t, r));
                });
            }, []),
            ty = (0, c.useCallback)(
              function () {
                nR(function (e) {
                  return (
                    Object.values(e).forEach(function (e) {
                      return e.abort();
                    }),
                    {}
                  );
                }),
                  nD(new Set()),
                  nj("root"),
                  nP(null),
                  (nx.current = new Y.Cv()),
                  (eO.current = ""),
                  nN(!0),
                  e0(),
                  ng === b.f_ && eN.replace("/chat", void 0, { shallow: !0 });
              },
              [ng, e0, eN]
            ),
            tj = (0, c.useCallback)(
              function () {
                V.ZP.deleteConversations().then(function () {
                  e0();
                }),
                  eN.asPath !== al ? eN.replace({ pathname: al }) : ty();
              },
              [ty, e0, eN]
            ),
            tk = (0, c.useCallback)(function () {
              na(!0);
            }, []);
          (0, c.useEffect)(
            function () {
              var e = E().subscribe("AbortCompletion", tx),
                n = E().subscribe("PublishAborter", tb),
                t = E().subscribe("UnrecoverableError", tk);
              return function () {
                E().unsubscribe(e), E().unsubscribe(n), E().unsubscribe(t);
              };
            },
            [tx, tb, tk]
          );
          var tZ = (0, c.useMemo)(
              function () {
                return nx.current.getConversationTurns(ny || "root");
              },
              [ny]
            ),
            tN = (0, c.useMemo)(
              function () {
                return 0 === tZ.length
                  ? ny
                  : Y.Cv.getRequestIdFromConversationTurn(tZ[tZ.length - 1]);
              },
              [tZ, ny]
            ),
            tM = (0, c.useState)(""),
            tS = tM[0],
            tP = tM[1],
            tT = (0, c.useCallback)(function () {
              nn(!0), v.m.setItem("oai/librarian/hasSeenWarning", "true");
            }, []),
            tR = (0, c.useCallback)(function () {
              e6(!1);
            }, []),
            tF = (0, c.useMemo)(
              function () {
                return eZ.has("debug") ? new Set([b.G3.Model]) : new Set();
              },
              [eZ]
            ),
            t_ = (0, c.useMemo)(
              function () {
                return (
                  !!eZ.has("can_continue") &&
                  !nT[ny] &&
                  nx.current.isMessageIncomplete(ny)
                );
              },
              [nT, ny, eZ]
            ),
            tD = void 0 !== e$ && e$,
            tq = (0, rw().getHasSeenOnboardingDate)(),
            tL = tq && new Date("2023-01-11") > tq && !localStorage.getItem(as);
          (0, c.useEffect)(
            function () {
              tL &&
                (r_.m.success(
                  "Your previously unavailable conversation history has been restored! Your previous conversations can now be viewed and continued as normal. We apologize for any inconvenience caused by the recent outage. Thank you for your patience and understanding.",
                  { hasCloseButton: !0, duration: 0 }
                ),
                localStorage.setItem(as, "true"));
            },
            [tL]
          );
          var tA = (0, c.useMemo)(
              function () {
                return (0, i.jsx)(nz, {
                  items: eY || [],
                  activeId: nC ? "" : eO.current,
                  hasNextPage: Boolean(eQ),
                  onNextPage: eX,
                  onNewThread: ty,
                  onRefetchHistory: e0,
                  onUpdateUserModifiedTitle: nG,
                  userModifiedTitle: nO,
                  newChatName: nE,
                  isLoading: e1,
                  isError: e2,
                });
              },
              [eY, nC, eQ, eX, ty, e0, nO, nE, e1, e2]
            ),
            tE = tZ.length < 2,
            tU = tI();
          return (0, i.jsxs)(ac, {
            children: [
              (0, i.jsx)(L(), {
                children: (0, i.jsx)("title", { children: nV }),
              }),
              !ne &&
                (0, i.jsx)(
                  d.Z,
                  {
                    isOpen: !0,
                    onModalClose: tT,
                    icon: _.Z,
                    title:
                      "Do not share sensitive materials with this application",
                    primaryButton: (0, i.jsx)(d.m, {
                      onClick: tT,
                      title: "Acknowledge",
                    }),
                    type: "danger",
                  },
                  "OnboardingModal"
                ),
              e8 &&
                e4 &&
                (0, i.jsx)(
                  d.Z,
                  {
                    isOpen: !0,
                    onModalClose: tR,
                    icon: U.U0j,
                    title: "This prompt may violate our content policy.",
                    primaryButton: (0, i.jsx)(d.m, {
                      onClick: tR,
                      title: "Acknowledge",
                    }),
                    type: "danger",
                  },
                  "RestrictedTerms"
                ),
              Boolean(eF) &&
                (0, i.jsx)(nZ, {
                  treeRef: nx,
                  ratingModalNodeId: eq,
                  ratingModalOpen: eF,
                  setRatingModalOpen: e_,
                  handleSubmitFeedback: ta,
                  setCurrentLeafId: nj,
                  handleChangeFeedbackComparisonRating: to,
                  modelBackend: ng,
                  feedbackTextareaRef: eB,
                  threadIdRef: eO,
                  activeRequests: n_,
                  onChangeItemInView: n7,
                  onRequestMoreCompletions: n2,
                  onUpdateNode: n9,
                  onChangeRating: tr,
                  onDeleteNode: ti,
                  onRequestCompletion: nK,
                  onSandboxLinkClick: n8,
                }),
              (0, i.jsxs)("div", {
                className: "flex h-full flex-1 flex-col md:pl-[260px]",
                children: [
                  eM &&
                    (0, i.jsx)(tt, {
                      onNewThread: ty,
                      onSidebarOpen: tv,
                      title: eC.title,
                      newChatName: nE,
                    }),
                  (0, i.jsxs)(ad, {
                    className: "flex-1 ",
                    children: [
                      (0, i.jsx)(af, {
                        children: (0, i.jsx)(rr, {
                          children: (0, i.jsx)(t5, {
                            isLoading: ek || (eV && !eG),
                            onChangeItemInView: n7,
                            onRequestMoreCompletions: n2,
                            onUpdateNode: n9,
                            onChangeRating: tr,
                            onDeleteNode: ti,
                            onRequestCompletion: nK,
                            onChangeCurrentPrompt: tP,
                            onSandboxLinkClick: n8,
                            threadId: eO.current,
                            treeRef: nx,
                            conversationTurns: tZ,
                            activeRequests: n_,
                            isProcessingArtifact:
                              (null == nS ? void 0 : nS.state) === "pending",
                            onChangeModelSetting: nv,
                            availableModels: nd,
                            currentThreadModel: eC.lastModelUsed,
                            canShowThreadSettings:
                              eZ.has("model_switcher") && nd.length > 1,
                          }),
                        }),
                      }),
                      (0, i.jsxs)(am, {
                        children: [
                          eZ.has("model_preview") &&
                            tE &&
                            ng === b.f_ &&
                            (0, i.jsxs)("div", {
                              className:
                                "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:m-auto lg:max-w-3xl",
                              children: [
                                "GPT-4 currently has a cap of",
                                " ",
                                (0, i.jsx)("b", {
                                  children: tU.textareaDisclaimer,
                                }),
                              ],
                            }),
                          !n1 &&
                            (0, i.jsx)(tp, {
                              currentLeafId: ny,
                              currentRequestId: tN,
                              threadId: eO.current,
                              currentPrompt: tS,
                              onChangeCurrentPrompt: tP,
                              onRequestMoreCompletions: n2,
                              onCreateNewCompletion: nQ,
                              onAbortCompletion: tx,
                              onContinueGenerating: n3,
                              onFileUpload: n4,
                              canUpload: n6,
                              isCompletionInProgress: n_.has(tN),
                              onUpdateArtifactStatus: ts,
                              artifact: nS,
                              className: (0, D.Z)(
                                "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-3xl"
                              ),
                              shouldRetry: nX,
                              canContinue: t_,
                              disabled: !nd.length,
                              canPause: Boolean(nT[tN]),
                            }),
                          !e$ &&
                            (0, i.jsxs)("div", {
                              className:
                                "px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6",
                              children: [
                                (0, i.jsx)("a", {
                                  href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  className: "underline",
                                  children: "ChatGPT Mar 14 Version",
                                }),
                                ". Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.",
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              eM &&
                (0, i.jsx)(tn, {
                  onSidebarOpen: tv,
                  sidebarOpen: "navigation" === nu,
                  onClickAccountPayment: th,
                  showAccountPaymentMenuItem: !tD && eH,
                  onClickCustomerPortal: tu,
                  showCustomerPortalMenuItem: tD,
                  onDeleteHistory: tj,
                  showDeleteHistory: Boolean(null == eY ? void 0 : eY.length),
                  onNewThread: ty,
                  onOpenDebugPanel: tl,
                  children: tA,
                }),
              !eM &&
                (0, i.jsx)(te, {
                  onClickAccountPayment: th,
                  showAccountPaymentMenuItem: !tD && eH,
                  onClickCustomerPortal: tu,
                  showCustomerPortalMenuItem: tD,
                  onDeleteHistory: tj,
                  showDeleteHistory: Boolean(null == eY ? void 0 : eY.length),
                  onNewThread: ty,
                  onOpenDebugPanel: tl,
                  settings:
                    tF.size > 0 &&
                    (0, i.jsx)(tw.ZP, {
                      temperature: nh,
                      onRestoreDefaults: nJ,
                      onChangeModelSetting: nv,
                      position: "top-right",
                      modelSettings: tF,
                      features: eZ,
                      children: (0, i.jsxs)(F.J.Button, {
                        as: n5,
                        children: [
                          (0, i.jsx)(x.ZP, { icon: U.nbt }),
                          "Settings",
                        ],
                      }),
                    }),
                  children: tA,
                }),
              (0, i.jsx)(tC, {
                icon: U.cDN,
                title: "Debug",
                sidebarOpen: "debug" === nu,
                onSidebarOpen: tv,
                children: (0, i.jsx)(rQ, { treeRef: nx, currentLeafId: ny }),
              }),
              eH && (0, i.jsx)(rE.Z, { isOpen: tf, onClose: tg }),
              tD && (0, i.jsx)(rA, { isOpen: ni, onClose: tc }),
              nr &&
                (0, i.jsx)(
                  d.Z,
                  {
                    onModalClose: l(),
                    isOpen: !0,
                    icon: _.Z,
                    title: "Something went wrong",
                    description:
                      "We're sorry, but something went wrong. Please try again later.",
                    primaryButton: (0, i.jsx)(d.m, {
                      onClick: function () {
                        ty(), na(!1);
                      },
                      title: "Reset thread",
                    }),
                    type: "danger",
                  },
                  "UnrecoverableErrorModal"
                ),
            ],
          });
        },
        ac = B.Z.div(ar()),
        ad = B.Z.main(aa()),
        af = B.Z.div(ao()),
        am = B.Z.div(ai()),
        ah = t(49690),
        ag = !0;
      function av(e) {
        var n,
          t,
          r,
          a,
          o,
          s,
          f,
          m,
          v,
          x,
          y,
          j,
          C,
          k,
          Z = e.user,
          P = e.isUserInCanPayGroup,
          I = e.serviceStatus,
          T = e.userCountry,
          R = (0, c.useState)(!1),
          F = R[0],
          _ = R[1],
          D = (0, u.useRouter)(),
          q = rw().getHasSeenOnboardingDate,
          L = (0, p.nR)(),
          A =
            ((a = (r = {
              threadId:
                (null === (n = D.query.chatId) || void 0 === n
                  ? void 0
                  : n[0]) || "",
            }).threadId),
            (o = (0, u.useRouter)()),
            (s = (0, O.kP)().session),
            (f = r6().availableModels),
            (m = (0, rF.p0)()),
            (v = (0, b.ZP)(f, null, a).modelBackend),
            (x = (0, c.useMemo)(
              function () {
                return f.find(function (e) {
                  return e.id === v;
                });
              },
              [f, v]
            )),
            (j = (y = (0, tS.a)(
              ["conversation", a],
              function () {
                return V.ZP.getConversation(
                  a,
                  null == s ? void 0 : s.accessToken
                );
              },
              {
                enabled: Boolean(a && (null == s ? void 0 : s.accessToken)),
                onError: function () {
                  o.replace("/chat"),
                    r_.m.danger("Unable to load conversation ".concat(a));
                },
              }
            )).data),
            (C = y.isLoading),
            (k = (0, c.useMemo)(
              function () {
                if (j) {
                  var e,
                    n,
                    t,
                    r,
                    a,
                    i,
                    s,
                    l,
                    u =
                      ((a =
                        null ===
                          (r = Object.values(j.mapping).find(function (e) {
                            return null === e.parent;
                          })) || void 0 === r
                          ? void 0
                          : r.id),
                      (i = new Set()),
                      (s = new Set()),
                      (j.moderation_results || []).forEach(function (e) {
                        e.blocked
                          ? s.add(e.message_id)
                          : e.flagged && i.add(e.message_id);
                      }),
                      {
                        rootId: a,
                        mapping: Object.keys(j.mapping).reduce(function (e, n) {
                          var t,
                            r = j.mapping[n],
                            a = r.parent,
                            o = r.children,
                            l = (0, S.Z)(r, ["parent", "children"]),
                            u =
                              j.mapping[n].message || Y.Cv.createRootMessage();
                          return (
                            s.has(u.id)
                              ? (t = z.sK)
                              : i.has(u.id) && (t = z.Mf),
                            (e[n] = (0, N.Z)(
                              (0, M.Z)((0, N.Z)({}, l), {
                                message: u,
                                children: o || [],
                                parentId: a || "",
                                type: Y.uV[Y.Cv.getRoleFromMessage(u)],
                              }),
                              t && { metadata: t }
                            )),
                            e
                          );
                        }, {}),
                        currentLeafId: j.current_node,
                      });
                  return {
                    thread: u.mapping || Y.Cv.createTree(),
                    currentLeafId: u.currentLeafId || u.rootId || "root",
                    threadId:
                      null === (l = o.query.chatId) || void 0 === l
                        ? void 0
                        : l[0],
                    title: j.title || null,
                    lastModelUsed: (function e(n, t) {
                      var r,
                        a,
                        o = n[t];
                      return (
                        null == o
                          ? void 0
                          : null === (r = o.message) || void 0 === r
                          ? void 0
                          : null === (a = r.metadata) || void 0 === a
                          ? void 0
                          : a.model_slug
                      )
                        ? o.message.metadata.model_slug
                        : (null == o ? void 0 : o.parentId)
                        ? e(n, o.parentId)
                        : (console.log("No model found in conversation tree"),
                          null);
                    })(u.mapping, u.currentLeafId),
                    pluginIds: j.plugin_ids || [],
                  };
                }
                return (
                  (n = (
                    null == x
                      ? void 0
                      : null === (e = x.enabledTools) || void 0 === e
                      ? void 0
                      : e.includes("tools3")
                  )
                    ? m.map(function (e) {
                        return e.id;
                      })
                    : []),
                  {
                    thread: Y.Cv.createTree(),
                    currentLeafId: "root",
                    threadId: null,
                    title: "New chat",
                    lastModelUsed: null,
                    pluginIds: n || [],
                  }
                );
              },
              [j, x, m, o.query.chatId]
            )),
            (0, c.useMemo)(
              function () {
                return { threadData: k, isLoading: Boolean(a && C) };
              },
              [C, k, a]
            )),
          E = A.threadData,
          U = A.isLoading,
          B = (0, r3.Z)(),
          G = B.accountStatusResponse,
          $ = B.isLoading,
          W = (0, J.g)(function (e) {
            return e.updateFlagValue;
          }),
          K = T ? H[T] : void 0;
        (0, c.useEffect)(
          function () {
            void 0 !== P && W("isUserInCanPayGroup", P);
          },
          [W, P]
        ),
          (0, c.useEffect)(
            function () {
              (null == I ? void 0 : I.type) &&
                void 0 !== L &&
                !L &&
                r_.m.warning(I.message, { hasCloseButton: !0, duration: 5 });
            },
            [L, null == I ? void 0 : I.message, null == I ? void 0 : I.type]
          );
        var Q = (0, c.useMemo)(function () {
            return { app: g.VY, origin: "chat" };
          }, []),
          X = (0, p.mA)(function (e) {
            return {
              accountPlan: e.accountPlan,
              updateAccountPlanWithResponse: e.updateAccountPlanWithResponse,
            };
          }),
          ee = X.accountPlan,
          en = X.updateAccountPlanWithResponse;
        (0, ah.Z)("ChatGPT", Z, Q, null == G ? void 0 : G.account_plan, {}, !$),
          (0, c.useEffect)(
            function () {
              if (!$ && G) {
                var e;
                (null == ee ? void 0 : ee.hasPaidSubscription) !==
                  (null === (e = G.account_plan) || void 0 === e
                    ? void 0
                    : e.is_paid_subscription_active) &&
                  G &&
                  en(G);
              }
            },
            [$, en, G, ee]
          ),
          (0, c.useEffect)(
            function () {
              _(!q());
            },
            [q]
          );
        var et = (0, c.useMemo)(
          function () {
            return new Set((null == E ? void 0 : E.pluginIds) || []);
          },
          [null == E ? void 0 : E.pluginIds]
        );
        return (0, i.jsx)(h.Af.Provider, {
          value: Q,
          children: (0, i.jsxs)(eU.A.Provider, {
            value: et,
            children: [
              (0, i.jsx)(d.Z, {
                isOpen: F,
                onModalClose: l(),
                type: "success",
                title: "",
                primaryButton: void 0,
                children: (0, i.jsx)(rC, {
                  onClose: function () {
                    return _(!1);
                  },
                }),
              }),
              !$ &&
                G &&
                (0, i.jsx)(w, {
                  userCountry: K,
                  isUserPaid:
                    null === (t = G.account_plan) || void 0 === t
                      ? void 0
                      : t.is_paid_subscription_active,
                  hasSeenOnboardingDate: q(),
                }),
              (0, i.jsx)(
                au,
                { initialData: E, isLoading: U },
                E.threadId || "new"
              ),
            ],
          }),
        });
      }
    },
    68619: function (e, n, t) {
      "use strict";
      var r, a, o, i, s, l, u, c, d, f;
      t.d(n, {
        Jq: function () {
          return s;
        },
        Os: function () {
          return o;
        },
        uU: function () {
          return i;
        },
      }),
        ((l = r || (r = {})).Default = "default"),
        (l.Dark = "dark"),
        ((u = a || (a = {})).Retrieval = "retrieval"),
        ((c = o || (o = {})).Next = "next"),
        (c.Variant = "variant"),
        (c.Continue = "continue"),
        ((d = i || (i = {})).Unknown = "unknown"),
        (d.User = "user"),
        (d.Assistant = "assistant"),
        (d.System = "system"),
        (d.Critic = "critic"),
        (d.Tool = "tool"),
        ((f = s || (s = {})).Root = "root"),
        (f.System = "system"),
        (f.Prompt = "prompt"),
        (f.Completion = "completion");
    },
    23119: function (e, n, t) {
      "use strict";
      t.d(n, {
        Ph: function () {
          return x;
        },
        Yt: function () {
          return j;
        },
        k$: function () {
          return p;
        },
      });
      var r = t(14806),
        a = t(35250),
        o = t(19841),
        i = t(96424),
        s = t.n(i),
        l = t(48240),
        u = t(34303),
        c = t(79876);
      function d() {
        var e = (0, r.Z)([
          "relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, r.Z)([
          "\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = (0, r.Z)([
          "bg-[#5436DA] rounded-sm text-white flex justify-center items-center relative tracking-widest",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = (0, r.Z)(["relative flex"]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      var g = u.Z.div(d()),
        v = u.Z.span(
          f(),
          function (e) {
            return "warning" === e.$type && "bg-orange-500 text-white";
          },
          function (e) {
            return "danger" === e.$type && "bg-red-500 text-white";
          }
        ),
        p = function (e) {
          var n = e.iconName,
            t = e.background,
            r = e.notice,
            o = c.nI;
          switch (n) {
            case "globe":
              o = l.RsK;
              break;
            case "terminal":
              o = l.cDN;
              break;
            case "t":
              o = l.RUS;
              break;
            case "s":
              o = l.jRj;
              break;
            case "c":
              o = l.CFv;
              break;
            case "p":
              o = l.yG;
          }
          return (0, a.jsxs)(g, {
            style: { backgroundColor: t },
            children: [
              (0, a.jsx)(c.ZP, { icon: o, size: "medium" }),
              r && (0, a.jsx)(v, { $type: r, children: "!" }),
            ],
          });
        },
        x = function (e) {
          var n = e.plugin,
            t = e.notice;
          return (0, a.jsxs)(g, {
            className: "p-0",
            children: [
              (0, a.jsx)("img", {
                src: n.manifest.logo_url,
                alt: "".concat(n.manifest.name_for_human, " logo"),
                className: "h-full w-full rounded-sm",
              }),
              t && (0, a.jsx)(v, { $type: t, children: "!" }),
            ],
          });
        },
        b = u.Z.div(m()),
        y = u.Z.div(h()),
        j = function (e) {
          var n = e.user,
            t = e.size,
            r = void 0 === t ? "small" : t,
            i = e.notice,
            u = i && (0, a.jsx)(v, { $type: i, children: "!" });
          if (null == n ? void 0 : n.picture)
            return (0, a.jsxs)(y, {
              children: [
                (0, a.jsx)(s(), {
                  src: n.picture,
                  alt: n.name,
                  width: "small" === r ? 30 : 38,
                  height: "small" === r ? 30 : 38,
                  className: "rounded-sm",
                }),
                u,
              ],
            });
          var d = ((null == n ? void 0 : n.name) || "")
            .split(" ")
            .map(function (e) {
              return e[0];
            })
            .join("");
          return (0, a.jsxs)(b, {
            className: (0, o.Z)(
              "small" === r ? "h-8 w-8 text-xs" : "h-10 w-10 text-lg"
            ),
            children: [
              d || (0, a.jsx)(c.ZP, { icon: l.fzv, size: "medium" }),
              u,
            ],
          });
        };
    },
    35873: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var r = t(14806),
        a = t(35250),
        o = t(70079),
        i = t(48240),
        s = t(34303),
        l = t(60612),
        u = t(79876);
      function c() {
        var e = (0, r.Z)(["flex ml-auto gap-2"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function d(e) {
        var n = e.text,
          t = e.onCopy,
          r = (0, o.useState)(!1),
          s = r[0],
          c = r[1],
          d = (0, l.Z)(),
          m = (0, o.useCallback)(
            function () {
              t(),
                c(!0),
                setTimeout(function () {
                  d() && c(!1);
                }, 2e3);
            },
            [d, t]
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            !s &&
              (0, a.jsxs)(f, {
                onClick: m,
                children: [(0, a.jsx)(u.ZP, { icon: i.j4u }), n],
              }),
            s &&
              (0, a.jsxs)(f, {
                children: [(0, a.jsx)(u.ZP, { icon: i.UgA }), n && "Copied!"],
              }),
          ],
        });
      }
      var f = s.Z.button(c());
    },
    36284: function (e, n, t) {
      "use strict";
      t.d(n, {
        D2: function () {
          return M;
        },
        YA: function () {
          return P;
        },
        Vp: function () {
          return D;
        },
        ZP: function () {
          return S;
        },
      });
      var r = t(14806),
        a = t(35250),
        o = t(35888),
        i = t(40638),
        s = t(57526),
        l = t(19841),
        u = t(70079),
        c = t(99581),
        d = t(48240),
        f = t(34303),
        m = t(11699),
        h = t(79876),
        g = t(42928),
        v = t(30892),
        p = t.n(v),
        x = t(7361),
        b = t.n(x);
      function y(e) {
        var n = e.values,
          t = e.className,
          r = Object.keys(n),
          o = Object.values(n);
        return (0, a.jsxs)("div", {
          className: (0, l.Z)("flex w-full items-stretch gap-2", t),
          children: [
            (0, a.jsx)("div", {
              className:
                "flex w-1/2 flex-col justify-between gap-1 text-sm text-gray-600 dark:text-gray-300",
              children: r.map(function (e, n) {
                return (0, a.jsx)("span", { children: p()(e) }, n);
              }),
            }),
            (0, a.jsx)("div", {
              className: "my-1.5 flex flex-1 flex-col justify-between gap-2",
              children: o.map(function (e, n) {
                var t = (0, g.Z)(e, 2),
                  r = t[0],
                  o = t[1];
                return (0, a.jsx)(j, { num: r, max: o }, n);
              }),
            }),
          ],
        });
      }
      function j(e) {
        var n = e.num,
          t = e.max,
          r = (0, u.useMemo)(
            function () {
              var e = b()(Array(t), !1);
              return b()(e, !0, 0, n);
            },
            [t, n]
          );
        return (0, a.jsx)("div", {
          className: "flex w-full gap-1",
          children: r.map(function (e, n) {
            return (0,
            a.jsx)("div", { className: (0, l.Z)("h-2 w-full rounded-lg", e ? "bg-green-600" : "bg-gray-200 dark:bg-gray-600"), children: e }, n);
          }),
        });
      }
      var w = t(1744);
      function C() {
        var e = (0, r.Z)([
          "rounded bg-white ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-white/20",
        ]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = (0, r.Z)([
          "absolute z-10 mt-2 max-h-60 w-full overflow-auto text-base focus:outline-none dark:last:border-0 sm:text-xs md:w-[100%]",
        ]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      function Z() {
        var e = (0, r.Z)([
          "absolute z-10 -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = (0, r.Z)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      var M = ["confidential", "plus"];
      function S(e) {
        var n = e.name,
          t = e.selectedOption,
          r = e.options,
          i = e.actions,
          s = e.onChange,
          l = e.onAction,
          c = e.dropdownRef,
          d = e.isLoading,
          f = (0, u.useCallback)(
            function (e) {
              "string" == typeof e ? null == l || l(e) : s(e);
            },
            [s, l]
          );
        return (0, a.jsx)(o.R, {
          value: t.value,
          onChange: f,
          children: function (e) {
            var o = e.open;
            return (0, a.jsx)(I, {
              ref: c,
              name: n,
              selectedLabel: (0, a.jsxs)(a.Fragment, {
                children: [
                  t.title,
                  t.tags.map(function (e) {
                    return D(e);
                  }),
                ],
              }),
              open: o,
              options: r,
              actions: i,
              isLoading: d,
            });
          },
        });
      }
      function P(e) {
        var n = e.name,
          t = e.selectedOptions,
          r = e.selectedLabel,
          i = e.options,
          s = e.actions,
          l = e.onChange,
          c = e.onAction,
          d = e.dropdownRef,
          f = e.isLoading,
          m = (0, u.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return "string" == typeof e;
                })
              ) {
                var n = e.find(function (e) {
                  return "string" == typeof e;
                });
                null == c || c(n);
              } else l(e);
            },
            [l, c]
          );
        return (0, a.jsx)(o.R, {
          value: t.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: m,
          children: function (e) {
            var o = e.open;
            return (0, a.jsx)(I, {
              ref: d,
              name: n,
              selectedLabel: r || "".concat(t.length, " selected"),
              open: o,
              options: i,
              actions: s,
              multiple: !0,
              isLoading: f,
            });
          },
        });
      }
      var I = (0, u.forwardRef)(function (e, n) {
        var t = e.name,
          r = e.selectedLabel,
          f = e.open,
          g = e.options,
          v = e.actions,
          p = e.multiple,
          x = e.isLoading,
          b = (0, u.useRef)(null),
          y = (0, u.useRef)(null),
          j = (0, m.dD)();
        (0, u.useImperativeHandle)(
          n,
          function () {
            return {
              open: function () {
                if (!f) {
                  var e;
                  null === (e = b.current) || void 0 === e || e.click();
                }
              },
              close: function () {
                if (f) {
                  var e;
                  null === (e = b.current) || void 0 === e || e.click();
                }
              },
            };
          },
          [f]
        );
        var C = x
          ? (0, a.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, a.jsx)(w.Z, {}),
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                g.map(function (e, n) {
                  return (0, a.jsx)(
                    T,
                    {
                      value: e.value,
                      disabled: e.disabled,
                      children: function (n) {
                        var t = n.selected,
                          r = n.active;
                        return (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-center gap-1 truncate",
                              children: [
                                e.imageUrl &&
                                  (0, a.jsx)("img", {
                                    src: e.imageUrl,
                                    className: "h-6 w-6 rounded",
                                    alt: "".concat(e.title, " logo"),
                                  }),
                                (0, a.jsxs)("span", {
                                  className: (0, l.Z)(
                                    t && "font-semibold",
                                    "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
                                  ),
                                  children: [
                                    e.title,
                                    e.tags.map(function (e) {
                                      return D(e);
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            p && !e.disabled
                              ? (0, a.jsx)(F, { selected: t })
                              : t && (0, a.jsx)(R, { icon: d.UgA }),
                            e.disabled &&
                              (0, a.jsx)(R, {
                                icon: s.Z,
                                className: "text-red-700 dark:text-red-500",
                              }),
                            r &&
                              !j &&
                              (0, c.createPortal)(
                                (0, a.jsx)(_, { option: e, dropdownRef: y }),
                                document.body
                              ),
                          ],
                        });
                      },
                    },
                    n
                  );
                }),
                null == v
                  ? void 0
                  : v.map(function (e, n) {
                      return (0, a.jsx)(
                        T,
                        {
                          value: e.id,
                          children: function () {
                            return (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)("div", {
                                  className: "text-gray-800 dark:text-gray-100",
                                  children: e.label,
                                }),
                                (0, a.jsx)(R, { icon: e.icon }),
                              ],
                            });
                          },
                        },
                        n
                      );
                    }),
              ],
            });
        return (0,
        a.jsx)(a.Fragment, { children: (0, a.jsxs)("div", { className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4", children: [(0, a.jsxs)(o.R.Button, { ref: b, className: "relative flex w-full cursor-default flex-col rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm", children: [(0, a.jsx)(o.R.Label, { className: "block text-xs text-gray-700 dark:text-gray-500", children: t }), (0, a.jsx)("span", { className: "inline-flex w-full truncate", children: (0, a.jsx)("span", { className: "flex h-6 items-center gap-1 truncate", children: r }) }), (0, a.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: (0, a.jsx)(h.ZP, { icon: d.bTu, className: " text-gray-400", "aria-hidden": "true" }) })] }), (0, a.jsx)(i.u, { show: f, as: u.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, a.jsx)(L, { $as: o.R.Options, ref: y, children: C }) })] }) });
      });
      function T(e) {
        var n = e.value,
          t = e.disabled,
          r = e.children;
        return (0, a.jsx)(o.R.Option, {
          className: function (e) {
            var n = e.active;
            return (0, l.Z)(
              n && !t ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              "relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-gray-100 pl-3 pr-9 last:border-0 dark:border-white/20",
              t &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
            );
          },
          value: n,
          children: r,
        });
      }
      function R(e) {
        var n = e.icon,
          t = e.className;
        return (0, a.jsx)(E, {
          children: (0, a.jsx)(h.ZP, {
            icon: n,
            className: (0, l.Z)("h-5 w-5", t),
            "aria-hidden": "true",
          }),
        });
      }
      function F(e) {
        var n = e.selected;
        return (0, a.jsx)(E, {
          children: (0, a.jsx)("div", {
            className:
              "flex h-6 w-6 items-center justify-center rounded border border-black/10 dark:border-white/20",
            "aria-hidden": "true",
            children:
              n && (0, a.jsx)(h.ZP, { icon: d.UgA, className: "h-4 w-4" }),
          }),
        });
      }
      function _(e) {
        var n = e.option,
          t = e.dropdownRef,
          r = (0, u.useState)(),
          o = r[0],
          i = r[1];
        (0, u.useEffect)(
          function () {
            var e = function () {
              if (t.current) {
                var e,
                  n = t.current.getBoundingClientRect(),
                  r = n.top;
                i({ top: r, left: n.left - 260, minHeight: n.height });
              }
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [t]
        );
        var l = (0, u.useMemo)(
          function () {
            return n.value.properties
              ? (0, a.jsx)(y, {
                  values: n.value.properties,
                  className: "mt-auto",
                })
              : null;
          },
          [n.value.properties]
        );
        return o
          ? (0, a.jsxs)(A, {
              style: {
                width: 260,
                minHeight: o.minHeight,
                top: o.top,
                left: o.left,
              },
              children: [
                n.disabled &&
                  (0, a.jsx)(h.ZP, {
                    icon: s.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500",
                  }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    n.title,
                    " ",
                    n.tags.map(function (e) {
                      return D(e);
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "whitespace-pre-line text-xs",
                  children: n.description,
                }),
                !n.disabled && l,
              ],
            })
          : null;
      }
      var D = function (e) {
          return (
            M.includes(e) &&
            (0, a.jsx)(
              "span",
              {
                className: (0, l.Z)(
                  "py-0.25 rounded px-1 text-[10px] font-semibold uppercase",
                  "confidential" === e && "bg-red-200 text-red-800",
                  "plus" === e && "bg-yellow-200 text-yellow-900"
                ),
                children: e,
              },
              e
            )
          );
        },
        q = f.Z.div(C()),
        L = (0, f.Z)(q)(k()),
        A = (0, f.Z)(q)(Z()),
        E = f.Z.span(N());
    },
    46275: function (e, n, t) {
      "use strict";
      t.d(n, {
        bG: function () {
          return x;
        },
        ZP: function () {
          return b;
        },
      });
      var r = t(14806),
        a = t(35250),
        o = t(87093),
        i = t(40638),
        s = t(19841),
        l = t(70079),
        u = t(34303),
        c = t(62676),
        d = t(39690),
        f = t(6004);
      function m(e) {
        var n = e.onChange,
          t = e.enabled,
          r = e.size,
          o = e.Icon,
          i = (0, l.useCallback)(
            function () {
              n(!t);
            },
            [t, n]
          ),
          u = !t && "translate-x-0";
        return (0, a.jsxs)(f.r, {
          checked: t,
          onChange: i,
          className: (0, s.Z)(
            t ? "!bg-indigo-600" : "!bg-gray-200",
            "relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0",
            "large" === r ? "h-6 w-11" : "h-4 w-8"
          ),
          children: [
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Use setting",
            }),
            (0, a.jsxs)("span", {
              className: (0, s.Z)(
                "pointer-events-none relative inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                t && "large" === r ? "translate-x-5" : u,
                t && "small" === r ? "translate-x-4" : u,
                "large" === r ? "h-5 w-5" : "h-3 w-3"
              ),
              children: [
                (0, a.jsx)("span", {
                  className: (0, s.Z)(
                    t
                      ? "opacity-0 duration-100 ease-out"
                      : "opacity-100 duration-200 ease-in",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ),
                  "aria-hidden": "true",
                }),
                (0, a.jsx)("span", {
                  className: (0, s.Z)(
                    t
                      ? "opacity-100 duration-200 ease-in"
                      : "opacity-0 duration-100 ease-out",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ),
                  "aria-hidden": "true",
                  children:
                    o &&
                    (0, a.jsx)(o, { className: "h-3 w-3 text-indigo-600" }),
                }),
              ],
            }),
          ],
        });
      }
      var h = t(44819);
      function g() {
        var e = (0, r.Z)([
          "block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 outline-none border-none",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = (0, r.Z)(["mt-1 outline-none border-0"]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = (0, r.Z)(["text-right"]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      var x = "oai/apps/autoexpandCode";
      function b(e) {
        var n = e.children,
          t = e.temperature,
          r = e.onRestoreDefaults,
          u = e.onChangeModelSetting,
          f = e.position,
          g = e.modelSettings,
          v = e.features,
          p = (0, l.useState)(Boolean(c.m.getItem(x))),
          b = p[0],
          C = p[1],
          k = (0, l.useCallback)(
            function (e) {
              u(h.G3.Temperature, e.target.value);
            },
            [u]
          ),
          Z = (0, l.useCallback)(function (e) {
            C(e), c.m.setItem(x, e);
          }, []);
        return (0, a.jsxs)(o.J, {
          className: "relative",
          children: [
            n,
            (0, a.jsx)(i.u, {
              as: l.Fragment,
              enter: "transition ease-out duration-200",
              enterFrom: (0, s.Z)(
                "opacity-0",
                "top-right" === f ? "translate-x-1" : "translate-y-1"
              ),
              enterTo: (0, s.Z)(
                "opacity-100",
                "top-right" === f ? "translate-x-0" : "translate-y-0"
              ),
              leave: "transition ease-in duration-150",
              leaveFrom: (0, s.Z)(
                "opacity-100",
                "top-right" === f ? "translate-x-0" : "translate-y-0"
              ),
              leaveTo: (0, s.Z)(
                "opacity-0",
                "top-right" === f ? "translate-x-1" : "translate-y-1"
              ),
              children: (0, a.jsx)(o.J.Panel, {
                className: (0, s.Z)(
                  "absolute z-20 mt-3 w-screen max-w-xs px-2 sm:px-0",
                  "bottom-center" === f && "right-0 top-6",
                  "bottom-right" === f && "left-2 top-8",
                  "top-right" === f &&
                    "left-full top-1/2 ml-6 -translate-y-full"
                ),
                children: (0, a.jsx)("div", {
                  className:
                    "overflow-hidden rounded-lg text-left text-sm shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600",
                  children: (0, a.jsxs)("div", {
                    className:
                      "relative grid gap-6 bg-white px-2 py-1 dark:bg-gray-800 sm:gap-4 sm:p-4",
                    children: [
                      g.has(h.G3.Temperature) &&
                        (0, a.jsxs)("div", {
                          className:
                            "rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600",
                          children: [
                            (0, a.jsx)("label", {
                              htmlFor: "temperature",
                              className:
                                "block text-xs font-medium text-gray-800",
                              children: "Temperature",
                            }),
                            (0, a.jsxs)("div", {
                              className: "mt-1",
                              children: [
                                (0, a.jsx)(y, {
                                  type: "number",
                                  name: "temperature",
                                  id: "temperature",
                                  onChange: k,
                                  value: t,
                                  className: "form-input",
                                }),
                                (0, a.jsx)(j, {
                                  name: "temperature",
                                  type: "range",
                                  min: "0",
                                  max: "1",
                                  value: t,
                                  className: "range w-full",
                                  step: "0.05",
                                  onChange: k,
                                }),
                              ],
                            }),
                          ],
                        }),
                      v.has("tools2") &&
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2 text-white",
                          children: [
                            (0, a.jsx)("div", { children: "Auto-expand code" }),
                            (0, a.jsx)(m, {
                              size: "small",
                              enabled: b,
                              onChange: Z,
                            }),
                          ],
                        }),
                      (0, a.jsx)(w, {
                        children: (0, a.jsx)(d.z, {
                          as: "button",
                          color: "neutral",
                          onClick: r,
                          children: "Restore defaults",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
      var y = u.Z.input(g()),
        j = u.Z.input(v()),
        w = u.Z.div(p());
    },
    77064: function (e, n, t) {
      "use strict";
      t.d(n, {
        $: function () {
          return h;
        },
        u: function () {
          return m;
        },
      });
      var r = t(31501),
        a = t(61079),
        o = t(14806),
        i = t(35250),
        s = t(19841),
        l = t(70079),
        u = t(65921),
        c = t(34303);
      function d() {
        var e = (0, o.Z)([
          '\nbefore:absolute before:w-2 before:h-2 before:visible before:content-[""] before:bg-gray-100 before:border-b before:border-r before:border-black/10\n',
          "\n",
          "\n",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, o.Z)(["absolute w-2 h-2 -z-10"]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function m(e) {
        var n = e.text,
          t = e.children;
        return (0, i.jsx)("div", {
          className:
            "tooltip-label flex items-center whitespace-pre-wrap py-1 px-2 text-center text-sm font-medium normal-case text-gray-700",
          "data-content": n,
          children: t,
        });
      }
      var h = function (e) {
          var n = e.children,
            t = e.label,
            o = e.enterDelay,
            c = void 0 === o ? 0 : o,
            d = e.leaveDelay,
            f = void 0 === d ? 50 : d,
            m = e.placement,
            h = void 0 === m ? "bottom" : m,
            g = e.offset,
            p = e.withArrow,
            x = e.interactive,
            b = void 0 !== x && x,
            y = e.wide,
            j = (0, l.useState)(!1),
            w = j[0],
            C = j[1],
            k = (0, l.useState)(null),
            Z = k[0],
            N = k[1],
            M = (0, l.useState)(null),
            S = M[0],
            P = M[1],
            I = (0, l.useState)(null),
            T = I[0],
            R = I[1],
            F = (0, u.D)(Z, S, {
              placement: h,
              modifiers: [
                {
                  name: "offset",
                  options: { offset: void 0 === g ? [0, 14] : g },
                },
                { name: "arrow", options: { element: T } },
              ],
            }),
            _ = F.styles,
            D = F.attributes,
            q = F.forceUpdate,
            L = (0, l.useRef)(),
            A = (0, l.useRef)(),
            E = (0, l.useCallback)(
              function () {
                null == q || q(),
                  A.current && clearTimeout(A.current),
                  (L.current = setTimeout(function () {
                    return C(!0);
                  }, c));
              },
              [c, q]
            ),
            U = (0, l.useCallback)(
              function () {
                L.current && clearTimeout(L.current),
                  (A.current = setTimeout(function () {
                    return C(!1);
                  }, f));
              },
              [f]
            );
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("span", {
                ref: N,
                onMouseEnter: E,
                onMouseLeave: U,
                children: n,
              }),
              (0, i.jsxs)(
                "div",
                (0, a.Z)((0, r.Z)({ ref: P, style: _.popper }, D.popper), {
                  className: (0, s.Z)(
                    "relative z-10 m-0 rounded p-1 transition-opacity",
                    w ? "opacity-100" : "pointer-events-none opacity-0",
                    void 0 !== y && y ? "max-w-sm" : "max-w-xs",
                    "border border-black/10 bg-gray-100"
                  ),
                  onMouseEnter: b ? E : void 0,
                  onMouseLeave: b ? U : void 0,
                  children: [
                    t,
                    (void 0 === p || p) &&
                      (0, i.jsx)(v, { ref: R, style: _.arrow, $placement: h }),
                  ],
                })
              ),
            ],
          });
        },
        g = c.Z.div(
          d(),
          function (e) {
            return (
              "bottom" === e.$placement &&
              "before:rotate-45 before:-top-7 before:-translate-y-1/2 before:-translate-x-1/2"
            );
          },
          function (e) {
            return "top" === e.$placement && "before:top-0 before:rotate-45";
          }
        ),
        v = (0, c.Z)(g)(f());
    },
    75310: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return Y;
        },
      });
      var r = t(31501),
        a = t(61079),
        o = t(89874),
        i = t(35250),
        s = t(19841),
        l = t(15762),
        u = t(70079),
        c = t(45306),
        d = t(9871),
        f = t(66285),
        m = t(60612),
        h = t(61110),
        g = t(55975),
        v = t(46050),
        p = t(29874),
        x = t(8449),
        b = t(15472);
      function y(e, n, t) {}
      function j(e, n) {}
      let w = {
          tokenize: function (e, n, t) {
            let r = this,
              a = this.events[this.events.length - 1],
              o =
                a && a[1].type === b.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              i = [];
            return function (n) {
              return (
                n !== g.q.backslash && y("expected `\\`", n),
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function n(r) {
                  return (y("sequenceOpen", r),
                  r === g.q.backslash ||
                    (r === g.q.leftSquareBracket && i[0] === g.q.backslash))
                    ? (e.consume(r), i.push(r), n)
                    : (e.exit("mathFlowFenceSequence"),
                      i.length < 2 ? t(r) : (0, v.f)(e, s, b.V.whitespace)(r));
                })(n)
              );
            };
            function s(n) {
              return (y("metaOpen", n), n === g.q.eof || (0, p.Ch)(n))
                ? l(n)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(b.V.chunkString, {
                    contentType: x._.contentTypeString,
                  }),
                  (function n(r) {
                    return (y("meta", r), r === g.q.eof || (0, p.Ch)(r))
                      ? (e.exit(b.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === g.q.rightSquareBracket
                      ? t(r)
                      : (e.consume(r), n);
                  })(n));
            }
            function l(t) {
              return (
                y("openAfter", t),
                e.exit("mathFlowFence"),
                r.interrupt
                  ? n(t)
                  : (function n(t) {
                      return (y("contentStart", t), t === g.q.eof)
                        ? u(t)
                        : (0, p.Ch)(t)
                        ? e.attempt(
                            C,
                            e.attempt(
                              { tokenize: c, partial: !0 },
                              u,
                              o ? (0, v.f)(e, n, b.V.linePrefix, o + 1) : n
                            ),
                            u
                          )(t)
                        : (e.enter("mathFlowValue"),
                          (function t(r) {
                            return (y("contentContinue", r),
                            r === g.q.eof || (0, p.Ch)(r))
                              ? (e.exit("mathFlowValue"), n(r))
                              : (e.consume(r), t);
                          })(t));
                    })(t)
              );
            }
            function u(t) {
              return y("after", t), e.exit("mathFlow"), n(t);
            }
            function c(e, n, t) {
              let r = [];
              return (0, v.f)(
                e,
                function (n) {
                  return (
                    y("closingPrefixAfter", n),
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function n(o) {
                      return (y("closingSequence", o),
                      (o === g.q.backslash && 0 === r.length) ||
                        (o === g.q.rightSquareBracket &&
                          r[0] === g.q.backslash))
                        ? (e.consume(o), r.push(o), n)
                        : r < i
                        ? t(o)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, v.f)(e, a, b.V.whitespace)(o));
                    })(n)
                  );
                },
                b.V.linePrefix,
                x._.tabSize
              );
              function a(r) {
                return (y("closingSequenceEnd", r),
                r === g.q.eof || (0, p.Ch)(r))
                  ? (e.exit("mathFlowFence"), n(r))
                  : t(r);
              }
            }
          },
          concrete: !0,
        },
        C = {
          tokenize: function (e, n, t) {
            let r = this;
            return function (n) {
              return (
                e.enter(b.V.lineEnding), e.consume(n), e.exit(b.V.lineEnding), a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        k = {
          tokenize: function (e, n, t) {
            let r = this,
              a = r.events[r.events.length - 1],
              o =
                a && a[1].type === b.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              i = 0;
            return function (n) {
              return (
                n !== g.q.dollarSign && y("expected `$`", n),
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function n(r) {
                  return (y("sequenceOpen", r), r === g.q.dollarSign)
                    ? (e.consume(r), i++, n)
                    : (e.exit("mathFlowFenceSequence"),
                      i < 2 ? t(r) : (0, v.f)(e, s, b.V.whitespace)(r));
                })(n)
              );
            };
            function s(n) {
              return (y("metaOpen", n), n === g.q.eof || (0, p.Ch)(n))
                ? l(n)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(b.V.chunkString, {
                    contentType: x._.contentTypeString,
                  }),
                  (function n(r) {
                    return (y("meta", r), r === g.q.eof || (0, p.Ch)(r))
                      ? (e.exit(b.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === g.q.dollarSign
                      ? t(r)
                      : (e.consume(r), n);
                  })(n));
            }
            function l(t) {
              return (
                y("openAfter", t),
                e.exit("mathFlowFence"),
                r.interrupt
                  ? n(t)
                  : (function n(t) {
                      return (y("contentStart", t), t === g.q.eof)
                        ? u(t)
                        : (0, p.Ch)(t)
                        ? e.attempt(
                            Z,
                            e.attempt(
                              { tokenize: c, partial: !0 },
                              u,
                              o ? (0, v.f)(e, n, b.V.linePrefix, o + 1) : n
                            ),
                            u
                          )(t)
                        : (e.enter("mathFlowValue"),
                          (function t(r) {
                            return (y("contentContinue", r),
                            r === g.q.eof || (0, p.Ch)(r))
                              ? (e.exit("mathFlowValue"), n(r))
                              : (e.consume(r), t);
                          })(t));
                    })(t)
              );
            }
            function u(t) {
              return y("after", t), e.exit("mathFlow"), n(t);
            }
            function c(e, n, t) {
              let r = 0;
              return (0, v.f)(
                e,
                function (n) {
                  return (
                    y("closingPrefixAfter", n),
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function n(o) {
                      return (y("closingSequence", o), o === g.q.dollarSign)
                        ? (e.consume(o), r++, n)
                        : r < i
                        ? t(o)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, v.f)(e, a, b.V.whitespace)(o));
                    })(n)
                  );
                },
                b.V.linePrefix,
                x._.tabSize
              );
              function a(r) {
                return (y("closingSequenceEnd", r),
                r === g.q.eof || (0, p.Ch)(r))
                  ? (e.exit("mathFlowFence"), n(r))
                  : t(r);
              }
            }
          },
          concrete: !0,
        },
        Z = {
          tokenize: function (e, n, t) {
            let r = this;
            return function (n) {
              return (
                (0, p.Ch)(n) && y("expected eol", n),
                e.enter(b.V.lineEnding),
                e.consume(n),
                e.exit(b.V.lineEnding),
                a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? t(e) : n(e);
            }
          },
          partial: !0,
        };
      function N(e) {
        let n = e.length - 4,
          t = 3,
          r,
          a;
        if (
          (e[t][1].type === b.V.lineEnding || "space" === e[t][1].type) &&
          (e[n][1].type === b.V.lineEnding || "space" === e[n][1].type)
        ) {
          for (r = t; ++r < n; )
            if ("mathTextData" === e[r][1].type) {
              (e[n][1].type = "mathTextPadding"),
                (e[t][1].type = "mathTextPadding"),
                (t += 2),
                (n -= 2);
              break;
            }
        }
        for (r = t - 1, n++; ++r <= n; )
          void 0 === a
            ? r !== n && e[r][1].type !== b.V.lineEnding && (a = r)
            : (r === n || e[r][1].type === b.V.lineEnding) &&
              ((e[a][1].type = "mathTextData"),
              r !== a + 2 &&
                ((e[a][1].end = e[r - 1][1].end),
                e.splice(a + 2, r - a - 2),
                (n -= r - a - 2),
                (r = a + 2)),
              (a = void 0));
        return e;
      }
      function M(e) {
        return (
          e !== g.q.backslash ||
          this.events[this.events.length - 1][1].type === b.V.characterEscape
        );
      }
      var S = t(93362),
        P = t(45369),
        I = t(42426),
        T = t(65028),
        R = t(88366),
        F = t(99847),
        _ = t(14806),
        D = t(34303),
        q = t(35873);
      function L() {
        var e = (0, _.Z)(["bg-black mb-4 rounded-md"]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = (0, _.Z)([
          "flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans",
        ]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = (0, _.Z)([""]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      function U() {
        var e = (0, _.Z)(["p-4 overflow-y-auto"]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      function B() {
        var e = (0, _.Z)(["!whitespace-pre"]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      var O = D.Z.div(L()),
        z = D.Z.div(A()),
        G = D.Z.span(E()),
        V = D.Z.div(U()),
        $ = D.Z.code(B());
      function H(e) {
        var n = e.children,
          t = e.className,
          r = e.language,
          a = e.content,
          o = (0, u.useCallback)(
            function () {
              navigator.clipboard.writeText(a);
            },
            [a]
          );
        return (0, i.jsxs)(O, {
          children: [
            (0, i.jsxs)(z, {
              children: [
                r && (0, i.jsx)(G, { children: r }),
                (0, i.jsx)(q.Z, { text: "Copy code", onCopy: o }),
              ],
            }),
            (0, i.jsx)(V, {
              children: (0, i.jsx)($, { className: t, children: n }),
            }),
          ],
        });
      }
      var J = [
          T.Z,
          [
            function () {
              let e = this.data();
              function n(n, t) {
                let r = e[n] ? e[n] : (e[n] = []);
                r.push(t);
              }
              n("micromarkExtensions", {
                flow: { [g.q.dollarSign]: k, [g.q.backslash]: w },
                text: {
                  [g.q.backslash]: {
                    tokenize: function (e, n, t) {
                      let r = [],
                        a = [],
                        o,
                        i = this;
                      return function (n) {
                        return (
                          y("start", n),
                          n !== g.q.backslash && j("expected `\\`", n),
                          M.call(i, i.previous) &&
                            j("expected correct previous", i.previous),
                          e.enter("mathText"),
                          e.enter("mathTextSequence"),
                          (function n(a) {
                            return (y("openingSequence", a, r.join(",")),
                            (a === g.q.backslash && 0 === r.length) ||
                              (a === g.q.leftParenthesis && 1 === r.length))
                              ? (e.consume(a), r.push(a), n)
                              : r.length < 2
                              ? t(a)
                              : (e.exit("mathTextSequence"), s(a));
                          })(n)
                        );
                      };
                      function s(i) {
                        return (y("gap", i), i === g.q.eof)
                          ? t(i)
                          : i === g.q.backslash
                          ? ((o = e.enter("mathTextSequence")),
                            (a = []),
                            (function t(i) {
                              return (y("closingSequence", i, r.join(",")),
                              (i === g.q.backslash && 0 === a.length) ||
                                (i === g.q.rightParenthesis && 1 === a.length))
                                ? (e.consume(i), a.push(i), t)
                                : a.length === r.length
                                ? (e.exit("mathTextSequence"),
                                  e.exit("mathText"),
                                  n(i))
                                : ((o.type = "mathTextData"), l(i));
                            })(i))
                          : i === g.q.space
                          ? (e.enter("space"), e.consume(i), e.exit("space"), s)
                          : (0, p.Ch)(i)
                          ? (e.enter(b.V.lineEnding),
                            e.consume(i),
                            e.exit(b.V.lineEnding),
                            s)
                          : (e.enter("mathTextData"), l(i));
                      }
                      function l(n) {
                        return (y("data", n),
                        n === g.q.eof ||
                          n === g.q.space ||
                          n === g.q.backslash ||
                          (0, p.Ch)(n))
                          ? (e.exit("mathTextData"), s(n))
                          : (e.consume(n), l);
                      }
                    },
                    resolve: N,
                    previous: M,
                  },
                },
              }),
                n("fromMarkdownExtensions", (0, h.N)()),
                n("toMarkdownExtensions", (0, h.O)());
            },
            { singleDollarTextMath: !1 },
          ],
        ],
        W = [
          [
            S.Z,
            {
              detect: !0,
              subset: [
                "python",
                "javascript",
                "java",
                "go",
                "bash",
                "c",
                "cpp",
                "csharp",
                "css",
                "diff",
                "graphql",
                "json",
                "kotlin",
                "less",
                "lua",
                "makefile",
                "markdown",
                "objectivec",
                "perl",
                "php",
                "php-template",
                "plaintext",
                "python-repl",
                "r",
                "ruby",
                "rust",
                "scss",
                "shell",
                "sql",
                "swift",
                "typescript",
                "vbnet",
                "wasm",
                "xml",
                "yaml",
              ],
              ignoreMissing: !0,
            },
          ],
          P.Z,
          [I.Z, { newlines: !0 }],
        ],
        K = {
          code: function (e) {
            var n = e.inline,
              t = e.node,
              s = e.className,
              l = e.children,
              u = (0, o.Z)(e, ["inline", "node", "className", "children"]);
            if (n) {
              var c = (0, R.B)(t),
                d = (0, F.T$)(c);
              return d
                ? (0, i.jsx)(F.s8, { displayInfo: d })
                : (0, i.jsx)(
                    "code",
                    (0, a.Z)((0, r.Z)({ className: s }, u), { children: l })
                  );
            }
            var f,
              m =
                null ===
                  (f =
                    null == s
                      ? void 0
                      : s.split(" ").filter(function (e) {
                          return e.startsWith("language-");
                        })) || void 0 === f
                  ? void 0
                  : f[0],
              h = m ? m.split("-")[1] : "";
            return (0, i.jsx)(H, {
              language: h,
              className: s,
              content: (0, R.B)(t),
              children: l,
            });
          },
        };
      function Y(e) {
        var n = e.size,
          h = e.children,
          g = e.className,
          v = e.onSandboxLinkClick,
          p = (0, l.F)().theme,
          x = (0, f.hz)().has("tools2"),
          b = (0, u.useState)(""),
          y = b[0],
          j = b[1],
          w = (0, m.Z)();
        (0, u.useEffect)(
          function () {
            x &&
              w() &&
              t
                .e(949)
                .then(t.bind(t, 93949))
                .then(function (e) {
                  return j(e.SANDBOX_LINK_PREFIX);
                });
          },
          [x, j, w]
        );
        var C = (0, u.useMemo)(
            function () {
              return (0, a.Z)((0, r.Z)({}, K), {
                a: function (e) {
                  var n = e.node,
                    t = (0, o.Z)(e, ["node"]),
                    s = n.properties.href;
                  return v && x && s.startsWith(y)
                    ? (0, i.jsx)("a", (0, a.Z)((0, r.Z)({}, t), { onClick: v }))
                    : (0, i.jsx)("a", (0, r.Z)({}, t));
                },
              });
            },
            [v, y, x]
          ),
          k = (0, u.useCallback)(
            function (e) {
              return e.startsWith(y) ? e : (0, d.A)(e);
            },
            [y]
          );
        return (0, i.jsx)(c.D, {
          rehypePlugins: W,
          remarkPlugins: J,
          linkTarget: "_new",
          className: (0, s.Z)(
            g,
            "markdown prose w-full break-words dark:prose-invert",
            "dark" === p ? "dark" : "light",
            "small" === (void 0 === n ? "medium" : n) && "prose-xs"
          ),
          transformLinkUri: k,
          components: C,
          children: h,
        });
      }
    },
    24058: function (e, n, t) {
      "use strict";
      t.d(n, {
        dT: function () {
          return d;
        },
        p0: function () {
          return c;
        },
        wu: function () {
          return f;
        },
      });
      var r = t(64705),
        a = t(70079),
        o = t(59268),
        i = t(62676),
        s = t(62588),
        l = "oai/enabledPluginIds",
        u = (0, o.ZP)(function () {
          return { enabledPluginIds: new Set(i.m.getItem(l)) };
        });
      function c() {
        var e = (0, s.Z)().installedPlugins,
          n = u().enabledPluginIds;
        return (0, a.useMemo)(
          function () {
            return e.filter(function (e) {
              return n.has(e.id);
            });
          },
          [n, e]
        );
      }
      function d(e) {
        u.setState(function () {
          return i.m.setItem(l, e), { enabledPluginIds: new Set(e) };
        });
      }
      function f(e) {
        u.setState(function (n) {
          var t = (0, r.Z)(n.enabledPluginIds).concat([e]);
          return i.m.setItem(l, t), { enabledPluginIds: new Set(t) };
        });
      }
    },
    62588: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(87762),
        a = t(70079),
        o = t(82018),
        i = t(33264),
        s = t(66285);
      function l() {
        var e = (0, o.kP)().session,
          n = (0, s.hz)(),
          t = (0, r.a)(
            ["installedAip"],
            function () {
              return i.ZP.getPlugins({
                offset: 0,
                limit: 20,
                isInstalled: !0,
                accessToken: null == e ? void 0 : e.accessToken,
              });
            },
            {
              enabled:
                n.has("tools3") && !!(null == e ? void 0 : e.accessToken),
              onError: function (e) {
                console.error(e);
              },
            }
          ),
          l = t.data,
          u = t.isLoading;
        return (0, a.useMemo)(
          function () {
            return { installedPlugins: l ? l.items : [], isLoading: u };
          },
          [l, u]
        );
      }
    },
    44819: function (e, n, t) {
      "use strict";
      t.d(n, {
        BT: function () {
          return b;
        },
        CS: function () {
          return x;
        },
        G3: function () {
          return r;
        },
        ZP: function () {
          return j;
        },
        f_: function () {
          return h;
        },
        m0: function () {
          return p;
        },
        uU: function () {
          return g;
        },
        xt: function () {
          return y;
        },
      });
      var r,
        a,
        o = t(33861),
        i = t(31501),
        s = t(61079),
        l = t(64705),
        u = t(61432),
        c = t(70079),
        d = t(59268),
        f = t(13751),
        m = t(66285);
      ((a = r || (r = {})).Model = "model"),
        (a.Temperature = "temperature"),
        (a.Context = "context");
      var h = "gpt-4",
        g = "model_cap_exceeded",
        v = (0, d.ZP)(function () {
          return { threadIds: new Set() };
        });
      function p(e) {
        v.setState(function (n) {
          return { threadIds: new Set((0, l.Z)(n.threadIds).concat([e])) };
        });
      }
      var x = (0, d.ZP)()(
        (0, f.tJ)(
          function (e) {
            return {
              isoDate: "",
              setCapTimeout: function (n) {
                e(function () {
                  return { isoDate: n };
                });
              },
              clearCapTimeout: function () {
                e(function () {
                  return { isoDate: "" };
                });
              },
            };
          },
          { name: "oai/apps/capExpiresAt" }
        )
      );
      function b() {
        var e = x(function (e) {
            return e.isoDate;
          }),
          n = x(function (e) {
            return e.clearCapTimeout;
          }),
          t = Date.now(),
          r = e && new Date(e).getTime();
        return e && r && r <= t ? (n(), null) : e ? h : null;
      }
      function y(e, n) {
        var t;
        return e
          ? n[0].id
          : (null ===
              (t = n.find(function (e) {
                var n;
                return (n = e.id).includes("text-davinci");
              })) || void 0 === t
              ? void 0
              : t.id) || n[0].id;
      }
      function j(e, n, t) {
        var a,
          l,
          d = (0, u.useRouter)(),
          f = d.query,
          h = n || decodeURIComponent(f[r.Model] || ""),
          g = (0, m.hz)(),
          p = v().threadIds,
          x = (0, c.useMemo)(
            function () {
              if (0 !== e.length) {
                var n,
                  r = p.has(t),
                  a =
                    null ===
                      (n = e.find(function (e) {
                        return e.id === h;
                      })) || void 0 === n
                      ? void 0
                      : n.id,
                  o = (!r && a) || y(g.has("priority_driven_models_list"), e);
                return e.find(function (e) {
                  return e.id === o;
                });
              }
            },
            [e, g, h, t, p]
          ),
          b = parseFloat(f[r.Temperature] || "1"),
          j = (0, c.useCallback)(
            function (e, n) {
              d.replace(
                {
                  pathname: d.basePath,
                  query: (0, s.Z)(
                    (0, i.Z)({}, f),
                    (0, o.Z)({}, e, encodeURIComponent(n))
                  ),
                },
                void 0,
                { shallow: !0 }
              );
            },
            [f, d]
          );
        return (0, c.useMemo)(
          function () {
            return {
              temperature: b,
              modelBackend: (null == x ? void 0 : x.id) || "",
              onChangeModelSetting: j,
            };
          },
          [j, null == x ? void 0 : x.id, b]
        );
      }
    },
    99847: function (e, n, t) {
      "use strict";
      t.d(n, {
        Op: function () {
          return g;
        },
        s8: function () {
          return h;
        },
        T$: function () {
          return m;
        },
        Qd: function () {
          return f;
        },
      });
      var r = t(35250),
        a = t(48240),
        o = t(96424),
        i = t.n(o);
      function s(e) {
        var n,
          t = e.url;
        try {
          n = new URL(t);
        } catch (a) {
          return console.error(a), null;
        }
        return (0, r.jsx)(i(), {
          src: "https://icons.duckduckgo.com/ip3/".concat(n.hostname, ".ico"),
          alt: "Favicon",
          width: 16,
          height: 16,
        });
      }
      var l = t(79876),
        u = t(77064),
        c = "&#8203;",
        d = "oaicite:";
      function f(e, n) {
        if (!n) return e;
        for (var t = n.length - 1; t >= 0; t--) {
          var r = n[t],
            a = r.start_ix,
            o = r.end_ix,
            i = r.metadata,
            s = r.invalid_reason,
            l = { index: t };
          i ? (l.metadata = i) : s && (l.invalid_reason = s),
            (e =
              e.slice(0, a) +
              ""
                .concat(c, "`")
                .concat(d)
                .concat(JSON.stringify(l), "`")
                .concat(c) +
              e.slice(o));
        }
        return e;
      }
      function m(e) {
        if (!e.startsWith(d)) return null;
        try {
          return JSON.parse(e.slice(d.length));
        } catch (n) {
          return { index: -1 };
        }
      }
      function h(e) {
        var n,
          t = e.displayInfo;
        return (0, r.jsx)(u.$, {
          label: (0, r.jsx)(g, {
            pageInfo: t.metadata,
            invalidReason: t.invalid_reason,
          }),
          placement: "top",
          offset: [0, 3],
          leaveDelay: 150,
          withArrow: !1,
          interactive: !0,
          wide: !0,
          children: (0, r.jsx)("a", {
            href: null === (n = t.metadata) || void 0 === n ? void 0 : n.url,
            target: "_blank",
            rel: "noreferrer",
            className: "text-green-600 !no-underline",
            children: (0, r.jsx)("sup", { children: t.index + 1 }),
          }),
        });
      }
      function g(e) {
        var n = e.pageInfo,
          t = e.invalidReason;
        return (0, r.jsx)("a", {
          href: null == n ? void 0 : n.url,
          target: "_blank",
          rel: "noreferrer",
          className: "!no-underline",
          children: (0, r.jsx)(u.u, {
            children: n
              ? (0, r.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, r.jsx)("div", {
                      className: "flex shrink-0 items-center justify-center",
                      children: (0, r.jsx)(s, { url: n.url }),
                    }),
                    (0, r.jsx)("div", {
                      className: "max-w-xs truncate text-xs",
                      children: n.title,
                    }),
                    (0, r.jsx)("div", {
                      className: "shrink-0",
                      children: (0, r.jsx)(l.ZP, {
                        icon: a.AlO,
                        size: "xsmall",
                      }),
                    }),
                  ],
                })
              : (0, r.jsx)("div", {
                  className: "text-red-500",
                  children: t || "Invalid citation",
                }),
          }),
        });
      }
    },
    11699: function (e, n, t) {
      "use strict";
      t.d(n, {
        _G: function () {
          return r;
        },
        dD: function () {
          return c;
        },
        dQ: function () {
          return f;
        },
        lj: function () {
          return d;
        },
      });
      var r,
        a,
        o,
        i = t(33861),
        s = t(70079);
      ((o = r || (r = {})).Small = "small"),
        (o.Medium = "medium"),
        (o.Large = "large"),
        (o.XLarge = "xlarge"),
        (o.Full = "full");
      var l =
        ((a = {}),
        (0, i.Z)(a, r.Small, 640),
        (0, i.Z)(a, r.Medium, 768),
        (0, i.Z)(a, r.Large, 1024),
        (0, i.Z)(a, r.XLarge, 1280),
        (0, i.Z)(a, r.Full, 1536),
        a);
      function u(e) {
        var n = function () {
            o(t(e));
          },
          t = function (e) {
            return window.matchMedia(e).matches;
          },
          r = (0, s.useState)(t(e)),
          a = r[0],
          o = r[1];
        return (
          (0, s.useEffect)(
            function () {
              var t = window.matchMedia(e);
              return (
                n(),
                t.addListener
                  ? t.addListener(n)
                  : t.addEventListener("change", n),
                function () {
                  t.removeListener
                    ? t.removeListener(n)
                    : t.removeEventListener("change", n);
                }
              );
            },
            [e]
          ),
          a
        );
      }
      function c() {
        return u("(max-width: ".concat(l[r.Small], "px)"));
      }
      function d() {
        return u("(max-width: ".concat(l[r.Medium], "px)"));
      }
      function f() {
        var e = c(),
          n = d(),
          t = u("(max-width: ".concat(l[r.Large], "px)")),
          a = u("(max-width: ".concat(l[r.XLarge], "px)"));
        return e ? r.Small : n ? r.Medium : t ? r.Large : a ? r.XLarge : r.Full;
      }
    },
    80836: function (e, n, t) {
      "use strict";
      t.d(n, {
        Cv: function () {
          return k;
        },
        uV: function () {
          return j;
        },
      });
      var r,
        a,
        o = t(35025),
        i = t(33468),
        s = t(37495),
        l = t(75106),
        u = t(43905),
        c = t(33861),
        d = t(31501),
        f = t(89874),
        m = t(64705),
        h = t(25769),
        g = t(84251),
        v = t.n(g),
        p = t(8844),
        x = t(36613),
        b = t(68619),
        y =
          ((r = {}),
          (0, c.Z)(r, b.Jq.Root, b.uU.Unknown),
          (0, c.Z)(r, b.Jq.Prompt, b.uU.User),
          (0, c.Z)(r, b.Jq.Completion, b.uU.Assistant),
          (0, c.Z)(r, b.Jq.System, b.uU.System),
          r),
        j =
          ((a = {}),
          (0, c.Z)(a, b.uU.Unknown, b.Jq.Root),
          (0, c.Z)(a, b.uU.System, b.Jq.System),
          (0, c.Z)(a, b.uU.User, b.Jq.Prompt),
          (0, c.Z)(a, b.uU.Assistant, b.Jq.Completion),
          (0, c.Z)(a, b.uU.Critic, b.Jq.Completion),
          (0, c.Z)(a, b.uU.Tool, b.Jq.Completion),
          a),
        w = new WeakMap(),
        C = new WeakMap(),
        k = (function () {
          function e(n) {
            (0, o.Z)(this, e),
              (0, s.Z)(this, w, { writable: !0, value: void 0 }),
              (0, s.Z)(this, C, { writable: !0, value: void 0 }),
              (0, l.Z)(this, w, n || e.createTree());
            var t = Object.values((0, i.Z)(this, w)).find(function (e) {
              return e.type === b.Jq.Root;
            });
            (0, l.Z)(this, C, (null == t ? void 0 : t.id) || "root");
          }
          var n = e.prototype;
          return (
            (n.getNode = function (e) {
              return (0, i.Z)(this, w)[e];
            }),
            (n.getMessage = function (e) {
              return (0, i.Z)(this, w)[e].message;
            }),
            (n.getMessageId = function (e) {
              return (0, i.Z)(this, w)[e].message.id;
            }),
            (n.getMetadata = function (e) {
              return (0, i.Z)(this, w)[e].metadata;
            }),
            (n.getLeafFromNode = function (e) {
              for (var n = (0, i.Z)(this, w)[e]; ; ) {
                if (0 === n.children.length) return n;
                n = (0, i.Z)(this, w)[n.children.values().next().value];
              }
            }),
            (n.getParent = function (e) {
              var n = (0, i.Z)(this, w)[e].parentId;
              return (0, i.Z)(this, w)[n];
            }),
            (n.getParentId = function (e) {
              var n;
              return (
                (null === (n = this.getParent(e)) || void 0 === n
                  ? void 0
                  : n.id) || "root"
              );
            }),
            (n.getBranchFromLeaf = function (e) {
              for (
                var n = [], t = (0, i.Z)(this, w)[e];
                n.push(t), "root" !== t.type;

              )
                t = (0, i.Z)(this, w)[t.parentId];
              return n.reverse();
            }),
            (n.getChildrenFromNode = function (e) {
              var n = this,
                t = (0, i.Z)(this, w)[e];
              return t
                ? Array.from(t.children).map(function (e) {
                    return (0, i.Z)(n, w)[e];
                  })
                : [];
            }),
            (n.getFirstPrompt = function () {
              for (var e, n = this.getNode((0, i.Z)(this, C)); ; ) {
                if (!n) return;
                if (n.type === b.Jq.Prompt) return n;
                n = (0, i.Z)(this, w)[
                  null === (e = n.children) || void 0 === e ? void 0 : e[0]
                ];
              }
            }),
            (n.isMessageIncomplete = function (n) {
              var t = this.getMessage(n);
              return e.getIsIncompleteFromMessage(t);
            }),
            (n.addNodeToEnd = function (e, n) {
              if (!(0, i.Z)(this, w)[e]) return (0, c.Z)({}, n.id, n);
              (0, l.Z)(
                this,
                w,
                v()(
                  (0, i.Z)(this, w),
                  (0, c.Z)({ $merge: (0, c.Z)({}, n.id, n) }, e, {
                    children: {
                      $apply: function (e) {
                        return Array.from(new Set((0, m.Z)(e).concat([n.id])));
                      },
                    },
                  })
                )
              );
            }),
            (n.appendSystemMessageToRoot = function (e) {
              var n,
                t,
                r =
                  null === (n = this.getFirstPrompt()) || void 0 === n
                    ? void 0
                    : n.parentId;
              if (r) {
                var a = this.getNode(r),
                  o = this.getNode(a.children[0]),
                  s = {
                    id: e.id,
                    children: a.children,
                    parentId: a.id,
                    message: e,
                  };
                (0, l.Z)(
                  this,
                  w,
                  v()(
                    (0, i.Z)(this, w),
                    ((t = { $merge: (0, c.Z)({}, s.id, s) }),
                    (0, c.Z)(t, a.id, { children: { $set: [s.id] } }),
                    (0, c.Z)(t, o.id, { parentId: { $set: s.id } }),
                    t)
                  )
                );
              }
            }),
            (n.addNode = function (e, n, t, r, a) {
              var o =
                  "string" == typeof n
                    ? {
                        id: (0, p.Z)(),
                        author: { role: y[r] },
                        role: y[r],
                        content: { content_type: "text", parts: [n] },
                      }
                    : n,
                i = (0, d.Z)(
                  { id: e, children: [], parentId: t, type: r, message: o },
                  a ? { metadata: a } : {}
                );
              this.addNodeToEnd(t, i);
            }),
            (n.updateNode = function (e, n) {
              (0, l.Z)(this, w, v()((0, i.Z)(this, w), (0, c.Z)({}, e, n)));
            }),
            (n.updateNodeMessage = function (e, n) {
              (0, l.Z)(
                this,
                w,
                v()(
                  (0, i.Z)(this, w),
                  (0, c.Z)({}, e, { message: { $set: n } })
                )
              );
            }),
            (n.updateNodeText = function (e, n) {
              (0, l.Z)(
                this,
                w,
                v()(
                  (0, i.Z)(this, w),
                  (0, c.Z)({}, e, {
                    message: { content: { parts: { $set: [n] } } },
                  })
                )
              );
            }),
            (n.deleteNode = function (e) {
              var n = (0, i.Z)(this, w),
                t = n[e],
                r = (0, f.Z)(n, [e].map(h.Z)),
                a = t.parentId;
              (0, l.Z)(
                this,
                w,
                v()(
                  r,
                  (0, c.Z)({}, a, {
                    children: {
                      $apply: function (n) {
                        return n.filter(function (n) {
                          return n !== e;
                        });
                      },
                    },
                  })
                )
              );
            }),
            (n.getTextFromNode = function (n) {
              return e.getTextFromMessage(this.getMessage(n));
            }),
            (n.getIsBlockedFromNode = function (e) {
              var n,
                t,
                r = this.getNode(e);
              return (
                r &&
                (null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errCode) === x.Dd &&
                (null === (t = r.metadata) || void 0 === t
                  ? void 0
                  : t.errType) === "danger"
              );
            }),
            (n.getTextFromThread = function (n) {
              return this.getBranchFromLeaf(n)
                .filter(function (e) {
                  return e.type !== b.Jq.Root && e.type !== b.Jq.System;
                })
                .map(function (n) {
                  return e.getTextFromMessage(n.message);
                })
                .join("\n\n");
            }),
            (n.getTextFromLastNTurns = function (n, t) {
              var r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                a = function (n) {
                  var t = n.message,
                    r = e.getMessageType(t),
                    a = n.message.author.role === b.uU.System,
                    o = n.message.author.role === b.uU.Tool;
                  return (
                    a ||
                    (o &&
                      !(
                        "code" === r ||
                        "execution_output" === r ||
                        "system_error" === r
                      ))
                  );
                };
              return this.getConversationTurns(n, a)
                .slice(-t)
                .map(function (n) {
                  var t = n.messages
                    .map(function (n) {
                      return e.getTextFromMessage(n.message);
                    })
                    .filter(function (e) {
                      return "" !== e;
                    })
                    .join("\n");
                  return r ? "[".concat(n.role, "]\n").concat(t) : t;
                })
                .join("\n");
            }),
            (n.getConversationTurns = function (n, t) {
              var r = this,
                a = [];
              return (
                this.getBranchFromLeaf(n).forEach(function (n) {
                  var o = n.id,
                    s = n.parentId,
                    l = n.message,
                    u = n.metadata;
                  if (null == t || !t(n)) {
                    var c = a[a.length - 1];
                    (null == c ? void 0 : c.role) === e.getRoleFromMessage(l) ||
                    e.getRoleFromMessage(l) === b.uU.Tool
                      ? a[a.length - 1].messages.push(
                          (0, d.Z)({ nodeId: o, parentId: s, message: l }, u)
                        )
                      : a.push({
                          role: e.getRoleFromMessage(l),
                          messages: [
                            (0, d.Z)({ nodeId: o, parentId: s, message: l }, u),
                          ],
                          variantIds: s
                            ? Array.from((0, i.Z)(r, w)[s].children)
                            : [o],
                        });
                  }
                }),
                a
              );
            }),
            (n.getLastValidNode = function (e) {
              for (
                var n, t = this.getNode(e);
                t &&
                t &&
                (null === (n = t.metadata) || void 0 === n ? void 0 : n.err);

              )
                t = this.getNode(t.parentId);
              return t;
            }),
            (n.getParentPromptNode = function (e) {
              for (
                var n, t, r = this.getNode(e);
                r &&
                r &&
                (null === (n = r.message) || void 0 === n
                  ? void 0
                  : null === (t = n.author) || void 0 === t
                  ? void 0
                  : t.role) !== b.uU.User;

              )
                r = this.getNode(r.parentId);
              return r;
            }),
            (e.createTree = function () {
              return {
                root: {
                  id: "root",
                  children: [],
                  parentId: "",
                  type: b.Jq.Root,
                  message: e.createRootMessage(),
                },
              };
            }),
            (e.createRootMessage = function () {
              return {
                id: (0, p.Z)(),
                author: { role: y[b.Jq.Root] },
                role: y[b.Jq.Root],
                content: { content_type: "text", parts: [] },
              };
            }),
            (e.getIsIncompleteFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : null === (t = n.finish_details) || void 0 === t
                  ? void 0
                  : t.type) === "max_tokens"
              );
            }),
            (e.getWasInterruptedFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : null === (t = n.finish_details) || void 0 === t
                  ? void 0
                  : t.type) === "interrupted"
              );
            }),
            (e.getIsContinuedFromMessage = function (e) {
              var n;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : n.message_type) === "continue"
              );
            }),
            (e.getModelFromMessage = function (e) {
              var n;
              return null === (n = e.metadata) || void 0 === n
                ? void 0
                : n.model_slug;
            }),
            (e.getTextFromMessage = function (e) {
              if (e.content.content_type.startsWith("tether_b"))
                return e.content.text;
              switch (e.content.content_type) {
                case "text":
                  return e.content.parts.join("");
                case "code":
                case "execution_output":
                case "system_error":
                  return e.content.text;
                case "system_message":
                  var n = e.content.text,
                    t = !0,
                    r = !1,
                    a = void 0;
                  try {
                    for (
                      var o,
                        i = Object.values(e.content.tools_section)[
                          Symbol.iterator
                        ]();
                      !(t = (o = i.next()).done);
                      t = !0
                    ) {
                      var s = o.value;
                      n += "\n\n".concat(s);
                    }
                  } catch (l) {
                    (r = !0), (a = l);
                  } finally {
                    try {
                      t || null == i.return || i.return();
                    } finally {
                      if (r) throw a;
                    }
                  }
                  return n;
                default:
                  return "";
              }
            }),
            (e.getMessageType = function (e) {
              return e.content.content_type;
            }),
            (e.getIsTextTypeFromMessage = function (n) {
              return "text" === e.getMessageType(n);
            }),
            (e.getRequestIdFromConversationTurn = function (e) {
              var n = e.messages[e.messages.length - 1];
              return this.getIsContinuedFromMessage(n.message)
                ? n.nodeId
                : e.messages[0].nodeId;
            }),
            (e.getRoleFromMessage = function (e) {
              var n;
              return (
                (null === (n = e.author) || void 0 === n ? void 0 : n.role) ||
                e.role
              );
            }),
            (e.getNameFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.author) || void 0 === n ? void 0 : n.name) ||
                (null === (t = e.author) || void 0 === t ? void 0 : t.role) ||
                e.role
              );
            }),
            (e.getRecipientFromMessage = function (e) {
              return e.recipient || "";
            }),
            (0, u.Z)(e, [
              {
                key: "isFirstCompletion",
                get: function () {
                  var e = this.getFirstPrompt();
                  if (e) {
                    var n = (0, i.Z)(this, w)[e.children[0]];
                    if (n && 0 === n.children.length) return !0;
                  }
                  return !1;
                },
              },
            ]),
            e
          );
        })();
    },
    60612: function (e, n, t) {
      "use strict";
      var r = t(70079);
      n.Z = function () {
        var e = (0, r.useRef)(!1);
        return (
          (0, r.useEffect)(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          (0, r.useCallback)(function () {
            return e.current;
          }, [])
        );
      };
    },
    62676: function (e, n, t) {
      "use strict";
      t.d(n, {
        m: function () {
          return o;
        },
      });
      var r = t(35025);
      t(70079);
      var a = window.localStorage,
        o = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (e.setItem = function (e, n) {
              if (!a) throw Error("You cannot set localStorage server-side");
              a.setItem(e, JSON.stringify(n));
            }),
            (e.getItem = function (e) {
              if (a) {
                var n = a.getItem(e);
                return "string" == typeof n ? JSON.parse(n) : n;
              }
              return null;
            }),
            (e.removeItem = function (e) {
              if (a) return a.removeItem(e);
            }),
            e
          );
        })();
    },
    36613: function (e, n, t) {
      "use strict";
      t.d(n, {
        Dd: function () {
          return i;
        },
        Mf: function () {
          return s;
        },
        _I: function () {
          return u;
        },
        sK: function () {
          return l;
        },
      });
      var r = t(95182),
        a = t.n(r),
        o = t(33264),
        i = "content_policy",
        s = { errType: "warning", errCode: i },
        l = {
          err: "Contents may violate our content policy",
          errType: "danger",
          errCode: i,
        };
      function u(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = a()(e.length, 0, 4e3),
          s = a()(e.length - i, 0, e.length - 1),
          l = n ? e.substring(s, e.length) : e;
        return l
          ? o.ZP.runModerationApi(l, t, r)
              .then(function (e) {
                var n, t;
                return {
                  isBlocked: Boolean(e.blocked),
                  isFlagged: Boolean(e.flagged),
                };
              })
              .catch(function (e) {
                return (
                  console.error(e), { isBlocked: !1, isFlagged: !1, error: e }
                );
              })
          : Promise.resolve({ isBlocked: !1, isFlagged: !1 });
      }
    },
  },
  function (e) {
    e.O(0, [960, 762, 424, 174, 368, 264, 14, 774, 888, 179], function () {
      return e((e.s = 49529));
    }),
      (_N_E = e.O());
  },
]);
