"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [14],
  {
    86885: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var r = t(61706),
        a = t(45813),
        s = t(35250),
        o = t(61432),
        i = t(70079),
        c = t(48240),
        u = t(12762),
        l = t(98943),
        d = t(33264),
        p = t(66285),
        f = t(74516),
        m = t(35e3),
        v = t(69858),
        h = t(77507);
      function x(e) {
        var n = e.isOpen,
          t = e.onClose,
          x = (0, i.useRef)(null),
          g = (0, u.WS)(),
          b = (0, i.useState)(!1),
          y = b[0],
          w = b[1],
          j = (0, o.useRouter)(),
          P = (0, i.useCallback)(
            function () {
              g(l.s6.closeAccountPaymentModal), t();
            },
            [t, g]
          ),
          k = (0, i.useCallback)(
            (0, r.Z)(function () {
              var e;
              return (0, a.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    w(!0), g(l.s6.clickAccountPaymentCheckout), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]), [4, d.ZP.submitCheckoutForm()]
                    );
                  case 2:
                    return (e = n.sent()), j.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      f.m.warning(
                        "The payments page encountered an error. Please try again. If the problem continues, please email support@openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return w(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [j, g, w]
          ),
          S = (0, i.useCallback)(
            (0, r.Z)(function () {
              var e;
              return (0, a.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    w(!0), g(l.s6.clickAccountCustomerPortal), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, d.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = n.sent()), j.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      f.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please email support@openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return w(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [j, g, w]
          ),
          Z = (0, p.mA)(function (e) {
            var n;
            return null === (n = e.accountPlan) || void 0 === n
              ? void 0
              : n.hasCustomerObject;
          });
        return (0, s.jsxs)(m.x, {
          isOpen: n,
          onClose: t,
          focusRef: x,
          children: [
            (0, s.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",
              children: [
                (0, s.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your Account",
                }),
                (0, s.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: P,
                  children: (0, s.jsx)(c.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "grid sm:grid-cols-2",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "relative order-2 col-span-1 border-t border-r-0 dark:border-gray-700 sm:order-1 sm:border-t-0 sm:border-r",
                  children: (0, s.jsx)(v.Oi, {
                    rowElements: [
                      (0, s.jsx)(
                        v.Cu,
                        { text: "Free Plan" },
                        "row-free-plan-name"
                      ),
                      (0, s.jsx)(
                        v.hi,
                        {
                          variant: "disabled",
                          disabled: !0,
                          text: h.S.free.callToAction.active,
                        },
                        "row-free-plan-button"
                      ),
                      (0, s.jsx)(
                        v.G,
                        { variant: "secondary", text: h.S.free.demandAccess },
                        "row-free-plan-demand"
                      ),
                      (0, s.jsx)(
                        v.G,
                        { variant: "secondary", text: h.S.free.responseSpeed },
                        "row-free-plan-speed"
                      ),
                      (0, s.jsx)(
                        v.G,
                        {
                          className: "sm:pb-2",
                          variant: "secondary",
                          text: h.S.free.modelFeatures,
                        },
                        "row-free-plan-updates"
                      ),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "relative order-1 col-span-1 sm:order-2",
                  children: (0, s.jsx)(v.Oi, {
                    rowElements: [
                      (0, s.jsx)(
                        v.Cu,
                        {
                          text: h.S.plus.name,
                          children: (0, s.jsx)("span", {
                            className: "font-semibold text-gray-500",
                            children: h.S.plus.costInDollars,
                          }),
                        },
                        "row-plus-plan-title"
                      ),
                      (0, s.jsx)(
                        v.hi,
                        {
                          variant: "primary",
                          disabled: y,
                          isLoading: y,
                          ref: x,
                          onClick: k,
                          text: h.S.plus.callToAction.inactivePayment,
                        },
                        "row-plus-plan-button"
                      ),
                      (0, s.jsx)(
                        v.G,
                        { variant: "primary", text: h.S.plus.demandAccess },
                        "row-plus-plan-demand"
                      ),
                      (0, s.jsx)(
                        v.G,
                        { variant: "primary", text: h.S.plus.responseSpeed },
                        "row-plus-plan-speed"
                      ),
                      (0, s.jsx)(
                        v.G,
                        {
                          className: "sm:pb-2",
                          variant: "primary",
                          text: h.S.plus.modelFeatures,
                        },
                        "row-plus-plan-updates"
                      ),
                      Z &&
                        (0, s.jsx)(
                          v.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: y,
                            text: h.S.manageSubscription.callToAction,
                            onClick: S,
                          },
                          "row-plus-plan-manage"
                        ),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    35e3: function (e, n, t) {
      t.d(n, {
        x: function () {
          return c;
        },
      });
      var r = t(14806),
        a = t(35250),
        s = t(34303),
        o = t(73925);
      function i() {
        var e = (0, r.Z)([
          "flex grow items-center justify-center bg-white dark:bg-gray-900 rounded-md flex flex-col items-start overflow-hidden border shadow-md dark:border-gray-700",
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      var c = function (e) {
          var n = e.children,
            t = e.isOpen,
            r = e.onClose,
            s = e.focusRef;
          return (0, a.jsx)(o.Z, {
            size: "fullscreen",
            isOpen: t,
            onModalClose: r,
            type: "success",
            title: "",
            className: "bg-transparent dark:bg-transparent",
            initialFocusRef: s,
            children: (0, a.jsx)("div", {
              className: "flex h-full flex-col items-center justify-start",
              children: (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(u, { children: n }),
              }),
            }),
          });
        },
        u = s.Z.div(i());
    },
    69858: function (e, n, t) {
      t.d(n, {
        Cu: function () {
          return m;
        },
        G: function () {
          return x;
        },
        Oi: function () {
          return f;
        },
        hi: function () {
          return h;
        },
        nR: function () {
          return g;
        },
      });
      var r = t(14806),
        a = t(35250),
        s = t(19841),
        o = t(48240),
        i = t(34303),
        c = t(39690),
        u = t(79876);
      function l() {
        var e = (0, r.Z)([
          "p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = (0, r.Z)([
          "gap-2 flex flex-row justify-start items-center text-sm",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = (0, r.Z)([
          "text-xl font-semibold justify-between items-center flex",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      var f = function (e) {
          var n = e.rowElements;
          return (0, a.jsx)(b, {
            children: n.map(function (e) {
              return e;
            }),
          });
        },
        m = function (e) {
          var n = e.className,
            t = e.text,
            r = e.children;
          return (0, a.jsxs)(w, {
            className: n,
            children: [(0, a.jsx)("span", { children: t }), r],
          });
        },
        v = {
          "primary-disabled":
            "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
          primary: "border-none py-3 font-semibold",
          disabled:
            "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100",
        },
        h = function (e) {
          var n = e.isLoading,
            t = e.disabled,
            r = e.onClick,
            i = (e.className, e.variant),
            l = void 0 === i ? "primary" : i,
            d = e.text,
            p = e.ref;
          return (0, a.jsxs)(c.z, {
            disabled: void 0 !== t && t,
            onClick: r,
            openNewTab: !0,
            ref: p,
            as: "button",
            className: (0, s.Z)(v[l]),
            children: [
              (0, a.jsx)("span", {
                className: (0, s.Z)({
                  "text-gray-700": "primary-disabled" === l,
                  "text-white": "primary" === l,
                }),
                children: d,
              }),
              void 0 !== n &&
                n &&
                (0, a.jsx)(u.ZP, { className: "animate-spin", icon: o.dAq }),
            ],
          });
        },
        x = function (e) {
          var n = e.variant,
            t = void 0 === n ? "primary" : n,
            r = e.className,
            i = e.text;
          return (0, a.jsxs)(y, {
            className: r,
            children: [
              (0, a.jsx)(u.ZP, {
                icon: o._rq,
                className: (0, s.Z)("h-5 w-5", {
                  "text-green-700": "primary" == t,
                  "text-gray-400": "secondary" == t,
                }),
              }),
              (0, a.jsx)("span", { children: i }),
            ],
          });
        },
        g = function (e) {
          var n = e.className,
            t = e.text,
            r = e.isLoading,
            s = e.onClick;
          return (0, a.jsx)(y, {
            className: n,
            children: (0, a.jsxs)("button", {
              onClick: s,
              className: "flex flex-row items-center space-x-1 underline",
              children: [
                (0, a.jsx)("span", { children: t }),
                r &&
                  (0, a.jsx)(u.ZP, { className: "animate-spin", icon: o.dAq }),
              ],
            }),
          });
        },
        b = i.Z.div(l()),
        y = i.Z.div(d()),
        w = i.Z.div(p());
    },
    77507: function (e, n, t) {
      t.d(n, {
        S: function () {
          return r;
        },
      });
      var r = {
        free: {
          name: "Free Plan",
          callToAction: {
            active: "Your Current Plan",
            inactive: "Your Current Plan",
          },
          costInDollars: "",
          demandAccess: "Available when demand is low",
          responseSpeed: "Standard response speed",
          modelFeatures: "Regular model updates",
        },
        plus: {
          name: "ChatGPT Plus",
          callToAction: {
            active: "Your current plan",
            inactive: "I'm Interested",
            inactivePayment: "Upgrade plan",
          },
          costInDollars: "USD $20/mo",
          demandAccess: "Available even when demand is high",
          responseSpeed: "Faster response speed",
          modelFeatures: "Priority access to new features",
        },
        manageSubscription: { callToAction: "Manage my subscription" },
      };
    },
    85087: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(87762),
        a = t(70079),
        s = t(82018),
        o = t(33264),
        i = t(66285),
        c = t(27252);
      function u() {
        var e = (0, s.kP)(),
          n = e.session,
          t = e.loading,
          u = (0, i.mA)(function (e) {
            return e.hasBeenSet;
          }),
          l = (0, c.g)(function (e) {
            return e.updateFlagValue;
          }),
          d = (0, r.a)(
            ["account-status"],
            function () {
              return o.ZP.getAccountStatus(null == n ? void 0 : n.accessToken);
            },
            {
              enabled: !t && Boolean(null == n ? void 0 : n.accessToken),
              onError: function () {
                console.error("Unable to load account");
              },
              onSuccess: function (e) {
                var n;
                m(e),
                  l(
                    "highlightPlusUpgrade",
                    !(null === (n = e.account_plan) || void 0 === n
                      ? void 0
                      : n.is_paid_subscription_active)
                  );
              },
            }
          ),
          p = d.data,
          f = d.isLoading,
          m = (0, i.mA)(function (e) {
            return {
              accountPlan: e.accountPlan,
              updateAccountPlanWithResponse: e.updateAccountPlanWithResponse,
            };
          }).updateAccountPlanWithResponse;
        return (0, a.useMemo)(
          function () {
            return { accountStatusResponse: p, isLoading: !u && f };
          },
          [p, u, f]
        );
      }
    },
    49690: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(27215),
        a = t(70079),
        s = t(12762),
        o = t(98943),
        i = t(82018),
        c = t(33264),
        u = t(66285);
      function l(e, n, t, l, d) {
        var p =
            !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
          f = (0, u.mA)(function (e) {
            return e.features;
          }),
          m = (0, i.kP)().session,
          v = (0, s.WS)(t);
        (0, a.useEffect)(
          function () {
            p && (f && n.id && s.ZP.setUser(n, f, l, d), v(o.s6.pageLoad));
          },
          [f, n.id, p]
        ),
          (0, a.useEffect)(
            function () {
              if (null == m ? void 0 : m.accessToken)
                c.ZP.setAccessToken(m.accessToken);
              else if (m && !(null == m ? void 0 : m.error)) {
                var e;
                null === r.default ||
                  void 0 === r.default ||
                  r.default.captureMessage(
                    "Missing access token for User: "
                      .concat(
                        null == m
                          ? void 0
                          : null === (e = m.user) || void 0 === e
                          ? void 0
                          : e.id,
                        " ("
                      )
                      .concat(null == m ? void 0 : m.accessToken, ")")
                  );
              }
              (null == m ? void 0 : m.error) === "RefreshAccessTokenError" &&
                (null === r.default ||
                  void 0 === r.default ||
                  r.default.captureException(m.error),
                window._oaiHandleSessionExpired("page load", m.error));
            },
            [m, n.id]
          ),
          (0, a.useEffect)(
            function () {
              document.title = e;
            },
            [e]
          );
      }
    },
    66285: function (e, n, t) {
      t.d(n, {
        hz: function () {
          return l;
        },
        mA: function () {
          return c;
        },
        nR: function () {
          return u;
        },
      });
      var r = t(31501),
        a = t(61079),
        s = t(70079),
        o = t(59268),
        i = { lastUpdated: Date.now(), hasBeenSet: !1 },
        c = (0, o.ZP)()(function (e) {
          return (0, a.Z)((0, r.Z)({}, i), {
            updateAccountPlanWithResponse: function (n) {
              var t, r, a, s, o;
              e({
                accountPlan: {
                  hasPaidSubscription:
                    (null == n
                      ? void 0
                      : null === (t = n.account_plan) || void 0 === t
                      ? void 0
                      : t.is_paid_subscription_active) || !1,
                  subscriptionPlan:
                    (null == n
                      ? void 0
                      : null === (r = n.account_plan) || void 0 === r
                      ? void 0
                      : r.subscription_plan) || "chatgptplusfreeplan",
                  accountUserRole:
                    (null == n
                      ? void 0
                      : null === (a = n.account_plan) || void 0 === a
                      ? void 0
                      : a.account_user_role) || "account-owner",
                  wasPaidCustomer:
                    (null == n
                      ? void 0
                      : null === (s = n.account_plan) || void 0 === s
                      ? void 0
                      : s.was_paid_customer) || !1,
                  hasCustomerObject:
                    (null == n
                      ? void 0
                      : null === (o = n.account_plan) || void 0 === o
                      ? void 0
                      : o.has_customer_object) || !1,
                },
                features: (null == n ? void 0 : n.features) || [],
                hasBeenSet: !0,
              });
            },
          });
        }),
        u = function () {
          return c(function (e) {
            var n;
            return null === (n = e.accountPlan) || void 0 === n
              ? void 0
              : n.hasPaidSubscription;
          });
        },
        l = function () {
          var e = c(function (e) {
            return e.features;
          });
          return (0, s.useMemo)(
            function () {
              return new Set(e);
            },
            [e]
          );
        };
    },
    27252: function (e, n, t) {
      t.d(n, {
        g: function () {
          return c;
        },
      });
      var r = t(33861),
        a = t(31501),
        s = t(61079),
        o = t(59268),
        i = {
          flags: {
            isUserInCanPayGroup: !1,
            highlightPlusUpgrade: !1,
            failwhaleBypassEnabled: !1,
          },
        },
        c = (0, o.ZP)()(function (e, n) {
          return (0, s.Z)((0, a.Z)({}, i), {
            updateFlagValue: function (t, o) {
              var i = n().flags;
              e({ flags: (0, s.Z)((0, a.Z)({}, i), (0, r.Z)({}, t, o)) });
            },
          });
        });
    },
    82018: function (e, n, t) {
      t.d(n, {
        kP: function () {
          return p;
        },
        w7: function () {
          return u;
        },
      });
      var r = t(61706),
        a = t(31501),
        s = t(45813),
        o = t(87762),
        i = t(44928),
        c = t(61432);
      function u(e) {
        (0, i.signOut)(
          (0, a.Z)(
            { callbackUrl: window.location.origin + "/api/auth/logout" },
            e
          )
        );
      }
      function l() {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = (0, r.Z)(function () {
          var e, n;
          return (0, s.__generator)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, fetch("/api/auth/session")];
              case 1:
                return [4, e.sent().json()];
              case 2:
                if (Object.keys((n = e.sent())).length) return [2, n];
                return [2, null];
            }
          });
        })).apply(this, arguments);
      }
      function p(e) {
        var n = e || {},
          t = n.required,
          r = n.redirectTo,
          a = n.queryConfig,
          s = (0, c.useRouter)(),
          i = (0, o.a)(["session"], l, {
            onSettled: function (e, n) {
              (null == a ? void 0 : a.onSettled) &&
                (null == a || a.onSettled(e, n)),
                !e && t && s.push(r);
            },
          });
        return {
          session: (null == i ? void 0 : i.data) || null,
          loading: (null == i ? void 0 : i.status) === "loading",
        };
      }
    },
  },
]);
