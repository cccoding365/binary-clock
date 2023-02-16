import { ref as h, onMounted as S, openBlock as c, createElementBlock as a, createElementVNode as x, Fragment as v, renderList as f, unref as g, normalizeClass as D, toDisplayString as k, createCommentVNode as b } from "vue";
const M = (n, e) => {
  const r = n.__vccOpts || n;
  for (const [d, o] of e)
    r[d] = o;
  return r;
}, $ = { class: "projectBox" }, C = { class: "container" }, E = { class: "timeBox" }, T = {
  key: 0,
  class: "decimalTime"
}, j = { name: "BinaryClock" }, I = /* @__PURE__ */ Object.assign(j, {
  props: { showSeconds: Boolean, showDec: Boolean },
  setup(n) {
    const e = n;
    let r = h(
      e.showSeconds ? [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]] : [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    ), d = h("");
    S(() => {
      w();
    });
    const o = (t) => (t + "").padStart(2, "0"), s = (t) => t.toString(2).padStart(4, 0), w = () => {
      setInterval(() => {
        let t = new Date().getHours(), i = new Date().getMinutes(), l = new Date().getSeconds(), _ = s(Math.floor(t / 10)), u = s(t % 10), m = s(Math.floor(i / 10)), p = s(i % 10), y = s(Math.floor(l / 10)), B = s(l % 10);
        d.value = e.showSeconds ? `${o(t)} : ${o(i)} : ${o(l)}` : `${o(t)} : ${o(i)}`, r.value = e.showSeconds ? [[..._], [...u], [...m], [...p], [...y], [...B]] : [[..._], [...u], [...m], [...p]];
      }, 1e3);
    };
    return (t, i) => (c(), a("div", $, [
      x("div", C, [
        (c(!0), a(v, null, f(g(r), (l) => (c(), a("div", E, [
          (c(!0), a(v, null, f(l, (_) => (c(), a("div", {
            class: D(["timePoint", { active: _ == 1 }])
          }, null, 2))), 256))
        ]))), 256))
      ]),
      e.showDec ? (c(), a("div", T, k(g(d)), 1)) : b("", !0)
    ]));
  }
}), N = /* @__PURE__ */ M(I, [["__scopeId", "data-v-34d26e7c"]]), O = [N], z = {
  install(n) {
    O.forEach((e) => {
      n.component(e.name, e);
    });
  }
};
export {
  z as default
};
