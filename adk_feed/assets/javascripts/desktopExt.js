function MarkerClusterer(n, t, i) { var r, u;
    this.extend(MarkerClusterer, google.maps.OverlayView);
    this.map_ = n;
    this.markers_ = [];
    this.clusters_ = [];
    this.sizes = [53, 56, 66, 78, 90];
    this.styles_ = [];
    this.favstyles_ = [];
    this.ready_ = !1;
    r = i || {};
    this.gridSize_ = r.gridSize || 60;
    this.minClusterSize_ = r.minimumClusterSize || 2;
    this.clickFunction_ = r.onclick || null;
    this.mouseEnterFunction_ = r.onmouseenter || null;
    this.mouseExitFunction_ = r.onmouseexit || null;
    this.maxZoom_ = r.maxZoom || null;
    this.styles_ = r.styles || [];
    this.favstyles_ = r.favstyles || [];
    this.imagePath_ = r.imagePath || this.MARKER_CLUSTER_IMAGE_PATH_;
    this.imageExtension_ = r.imageExtension || this.MARKER_CLUSTER_IMAGE_EXTENSION_;
    this.zoomOnClick_ = !0;
    r.zoomOnClick != undefined && (this.zoomOnClick_ = r.zoomOnClick);
    this.averageCenter_ = !1;
    r.averageCenter != undefined && (this.averageCenter_ = r.averageCenter);
    this.setupStyles_();
    this.setMap(n);
    this.prevZoom_ = this.map_.getZoom();
    u = this;
    google.maps.event.addListener(this.map_, "idle", function() { u.redraw() });
    t && (t.length || Object.keys(t).length) && this.addMarkers(t, !1) }

function Cluster(n) { this.markerClusterer_ = n;
    this.map_ = n.getMap();
    this.gridSize_ = n.getGridSize();
    this.minClusterSize_ = n.getMinClusterSize();
    this.averageCenter_ = n.isAverageCenter();
    this.center_ = null;
    this.markers_ = [];
    this.bounds_ = null;
    this.clusterIcon_ = new ClusterIcon(this, n.getStyles(), n.getFavStyles(), n.getGridSize());
    this.favouriteCount = 0 }

function ClusterIcon(n, t, i, r) { n.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);
    this.styles_ = t;
    this.padding_ = r || 0;
    this.cluster_ = n;
    this.favstyles_ = i;
    this.center_ = null;
    this.map_ = n.getMap();
    this.div_ = null;
    this.sums_ = null;
    this.visible_ = !1;
    this.setMap(this.map_) }
var activeLightBoxCount, YT, YTConfig;
(function(n, t) {
    function gt(n) { var t = n.length,
            r = i.type(n); return i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || "function" !== r && (0 === t || "number" == typeof t && t > 0 && t - 1 in n) }

    function te(n) { var t = ni[n] = {}; return i.each(n.match(s) || [], function(n, i) { t[i] = !0 }), t }

    function ur(n, r, u, f) { if (i.acceptData(n)) { var h, o, c = i.expando,
                l = n.nodeType,
                s = l ? i.cache : n,
                e = l ? n[c] : n[c] && c; if (e && s[e] && (f || s[e].data) || u !== t || "string" != typeof r) return e || (e = l ? n[c] = b.pop() || i.guid++ : c), s[e] || (s[e] = l ? {} : { toJSON: i.noop }), ("object" == typeof r || "function" == typeof r) && (f ? s[e] = i.extend(s[e], r) : s[e].data = i.extend(s[e].data, r)), o = s[e], f || (o.data || (o.data = {}), o = o.data), u !== t && (o[i.camelCase(r)] = u), "string" == typeof r ? (h = o[r], null == h && (h = o[i.camelCase(r)])) : h = o, h } }

    function fr(n, t, r) { if (i.acceptData(n)) { var e, o, s = n.nodeType,
                u = s ? i.cache : n,
                f = s ? n[i.expando] : i.expando; if (u[f]) { if (t && (e = r ? u[f] : u[f].data)) { for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t), t = (t in e) ? [t] : t.split(" ")), o = t.length; o--;) delete e[t[o]]; if (r ? !ti(e) : !i.isEmptyObject(e)) return }(r || (delete u[f].data, ti(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null) } } }

    function er(n, r, u) { if (u === t && 1 === n.nodeType) { var f = "data-" + r.replace(rr, "-$1").toLowerCase(); if (u = n.getAttribute(f), "string" == typeof u) { try { u = "true" === u ? !0 : "false" === u ? !1 : "null" === u ? null : +u + "" === u ? +u : ir.test(u) ? i.parseJSON(u) : u } catch (e) {} i.data(n, r, u) } else u = t } return u }

    function ti(n) { var t; for (t in n)
            if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return !1; return !0 }

    function ct() { return !0 }

    function g() { return !1 }

    function cr() { try { return r.activeElement } catch (n) {} }

    function ar(n, t) { do n = n[t]; while (n && 1 !== n.nodeType); return n }

    function fi(n, t, r) { if (i.isFunction(t)) return i.grep(n, function(n, i) { return !!t.call(n, i, n) !== r }); if (t.nodeType) return i.grep(n, function(n) { return n === t !== r }); if ("string" == typeof t) { if (oe.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n) } return i.grep(n, function(n) { return i.inArray(n, t) >= 0 !== r }) }

    function vr(n) { var i = yr.split("|"),
            t = n.createDocumentFragment(); if (t.createElement)
            while (i.length) t.createElement(i.pop()); return t }

    function gr(n, t) { return i.nodeName(n, "table") && i.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n }

    function nu(n) { return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type, n }

    function tu(n) { var t = ye.exec(n.type); return t ? n.type = t[1] : n.removeAttribute("type"), n }

    function hi(n, t) { for (var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval")) }

    function iu(n, t) { if (1 === t.nodeType && i.hasData(n)) { var u, f, o, s = i._data(n),
                r = i._data(t, s),
                e = s.events; if (e) { delete r.handle;
                r.events = {}; for (u in e)
                    for (f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f]) } r.data && (r.data = i.extend({}, r.data)) } }

    function be(n, t) { var r, f, u; if (1 === t.nodeType) { if (r = t.nodeName.toLowerCase(), !i.support.noCloneEvent && t[i.expando]) { u = i._data(t); for (f in u.events) i.removeEvent(t, f, u.handle);
                t.removeAttribute(i.expando) } "script" === r && t.text !== n.text ? (nu(t).text = n.text, tu(t)) : "object" === r ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === r && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === r ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === r || "textarea" === r) && (t.defaultValue = n.defaultValue) } }

    function u(n, r) { var s, e, h = 0,
            f = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(r || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(r || "*") : t; if (!f)
            for (f = [], s = n.childNodes || n; null != (e = s[h]); h++) !r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r)); return r === t || r && i.nodeName(n, r) ? i.merge([n], f) : f }

    function ke(n) { oi.test(n.type) && (n.defaultChecked = n.checked) }

    function ou(n, t) { if (t in n) return t; for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = eu.length; i--;)
            if (t = eu[i] + r, t in n) return t; return u }

    function ut(n, t) { return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n) }

    function su(n, t) { for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++) r = n[u], r.style && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || "none" !== f || (r.style.display = ""), "" === r.style.display && ut(r) && (e[u] = i._data(r, "olddisplay", au(r.nodeName)))) : e[u] || (o = ut(r), (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display")))); for (u = 0; s > u; u++) r = n[u], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none")); return n }

    function hu(n, t, i) { var r = to.exec(t); return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t }

    function cu(n, t, r, u, f) { for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + p[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + p[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f), "padding" !== r && (o += i.css(n, "border" + p[e] + "Width", !0, f))); return o }

    function lu(n, t, r) { var e = !0,
            u = "width" === t ? n.offsetWidth : n.offsetHeight,
            f = v(n),
            o = i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f); if (0 >= u || null == u) { if (u = y(n, t, f), (0 > u || null == u) && (u = n.style[t]), lt.test(u)) return u;
            e = o && (i.support.boxSizingReliable || u === n.style[t]);
            u = parseFloat(u) || 0 } return u + cu(n, t, r || (o ? "border" : "content"), e, f) + "px" }

    function au(n) { var u = r,
            t = uu[n]; return t || (t = vu(n, u), "none" !== t && t || (rt = (rt || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(u.documentElement), u = (rt[0].contentWindow || rt[0].contentDocument).document, u.write("<!doctype html><html><body>"), u.close(), t = vu(n, u), rt.detach()), uu[n] = t), t }

    function vu(n, t) { var r = i(t.createElement(n)).appendTo(t.body),
            u = i.css(r[0], "display"); return r.remove(), u }

    function li(n, t, r, u) { var f; if (i.isArray(t)) i.each(t, function(t, i) { r || fo.test(n) ? u(n, i) : li(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u) });
        else if (r || "object" !== i.type(t)) u(n, t);
        else
            for (f in t) li(n + "[" + f + "]", t[f], r, u) }

    function gu(n) { return function(t, r) { "string" != typeof t && (r = t, t = "*"); var u, f = 0,
                e = t.toLowerCase().match(s) || []; if (i.isFunction(r))
                while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r) } }

    function nf(n, r, u, f) {
        function o(h) { var c; return e[h] = !0, i.each(n[h] || [], function(n, i) { var h = i(r, u, f); return "string" != typeof h || s || e[h] ? s ? !(c = h) : t : (r.dataTypes.unshift(h), o(h), !1) }), c } var e = {},
            s = n === yi; return o(r.dataTypes[0]) || !e["*"] && o("*") }

    function pi(n, r) { var f, u, e = i.ajaxSettings.flatOptions || {}; for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]); return f && i.extend(!0, n, f), n }

    function ao(n, i, r) { for (var s, o, f, e, h = n.contents, u = n.dataTypes;
            "*" === u[0];) u.shift(), o === t && (o = n.mimeType || i.getResponseHeader("Content-Type")); if (o)
            for (e in h)
                if (h[e] && h[e].test(o)) { u.unshift(e); break } if (u[0] in r) f = u[0];
        else { for (e in r) { if (!u[0] || n.converters[e + " " + u[0]]) { f = e; break } s || (s = e) } f = f || s } return f ? (f !== u[0] && u.unshift(f), r[f]) : t }

    function vo(n, t, i, r) { var h, u, f, s, e, o = {},
            c = n.dataTypes.slice(); if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f]; for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                if ("*" === u) u = e;
                else if ("*" !== e && e !== u) { if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) { f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1])); break } if (f !== !0)
                if (f && n.throws) t = f(t);
                else try { t = f(t) } catch (l) { return { state: "parsererror", error: f ? l : "No conversion from " + e + " to " + u } } } return { state: "success", data: t } }

    function rf() { try { return new n.XMLHttpRequest } catch (t) {} }

    function yo() { try { return new n.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

    function ff() { return setTimeout(function() { it = t }), it = i.now() }

    function ef(n, t, i) { for (var u, f = (ft[t] || []).concat(ft["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n)) return u }

    function of (n, t, r) { var h, e, o = 0,
            l = pt.length,
            f = i.Deferred().always(function() { delete c.elem }),
            c = function() { if (e) return !1; for (var s = it || ff(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i); return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1) },
            u = f.promise({ elem: n, props: i.extend({}, t), opts: i.extend(!0, { specialEasing: {} }, r), originalProperties: t, originalOptions: r, startTime: it || ff(), duration: r.duration, tweens: [], createTween: function(t, r) { var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(f), f }, stop: function(t) { var i = 0,
                        r = t ? u.tweens.length : 0; if (e) return this; for (e = !0; r > i; i++) u.tweens[i].run(1); return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this } }),
            s = u.props; for (bo(s, u.opts.specialEasing); l > o; o++)
            if (h = pt[o].call(u, n, s, u.opts)) return h; return i.map(s, ef, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, { elem: n, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) }

    function bo(n, t) { var r, f, e, u, o; for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) { u = o.expand(u);
                delete n[f]; for (r in u) r in n || (n[r] = u[r], t[r] = e) } else t[f] = e }

    function ko(n, t, r) { var u, a, v, c, e, y, s = this,
            l = {},
            o = n.style,
            h = n.nodeType && ut(n),
            f = i._data(n, "fxshow");
        r.queue || (e = i._queueHooks(n, "fx"), null == e.unqueued && (e.unqueued = 0, y = e.empty.fire, e.empty.fire = function() { e.unqueued || y() }), e.unqueued++, s.always(function() { s.always(function() { e.unqueued--;
                i.queue(n, "fx").length || e.empty.fire() }) }));
        1 === n.nodeType && ("height" in t || "width" in t) && (r.overflow = [o.overflow, o.overflowX, o.overflowY], "inline" === i.css(n, "display") && "none" === i.css(n, "float") && (i.support.inlineBlockNeedsLayout && "inline" !== au(n.nodeName) ? o.zoom = 1 : o.display = "inline-block"));
        r.overflow && (o.overflow = "hidden", i.support.shrinkWrapBlocks || s.always(function() { o.overflow = r.overflow[0];
            o.overflowX = r.overflow[1];
            o.overflowY = r.overflow[2] })); for (u in t)
            if (a = t[u], po.exec(a)) { if (delete t[u], v = v || "toggle" === a, a === (h ? "hide" : "show")) continue;
                l[u] = f && f[u] || i.style(n, u) } if (!i.isEmptyObject(l)) { f ? "hidden" in f && (h = f.hidden) : f = i._data(n, "fxshow", {});
            v && (f.hidden = !h);
            h ? i(n).show() : s.done(function() { i(n).hide() });
            s.done(function() { var t;
                i._removeData(n, "fxshow"); for (t in l) i.style(n, t, l[t]) }); for (u in l) c = ef(h ? f[u] : 0, u, s), u in f || (f[u] = c.start, h && (c.end = c.start, c.start = "width" === u || "height" === u ? 1 : 0)) } }

    function f(n, t, i, r, u) { return new f.prototype.init(n, t, i, r, u) }

    function wt(n, t) { var r, i = { height: n },
            u = 0; for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = p[u], i["margin" + r] = i["padding" + r] = n; return t && (i.opacity = i.width = n), i }

    function sf(n) { return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1 } var et, bi, o = typeof t,
        hf = n.location,
        r = n.document,
        ki = r.documentElement,
        cf = n.jQuery,
        lf = n.$,
        ot = {},
        b = [],
        bt = "1.10.2",
        di = b.concat,
        kt = b.push,
        l = b.slice,
        gi = b.indexOf,
        af = ot.toString,
        k = ot.hasOwnProperty,
        dt = bt.trim,
        i = function(n, t) { return new i.fn.init(n, t, bi) },
        st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        s = /\S+/g,
        vf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        yf = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        nr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pf = /^[\],:{}\s]*$/,
        wf = /(?:^|:|,)(?:\s*\[)+/g,
        bf = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        kf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        df = /^-ms-/,
        gf = /-([\da-z])/gi,
        ne = function(n, t) { return t.toUpperCase() },
        h = function(n) {
            (r.addEventListener || "load" === n.type || "complete" === r.readyState) && (tr(), i.ready()) },
        tr = function() { r.addEventListener ? (r.removeEventListener("DOMContentLoaded", h, !1), n.removeEventListener("load", h, !1)) : (r.detachEvent("onreadystatechange", h), n.detachEvent("onload", h)) },
        ni, ir, rr, wi, at, nt, tt, tf, vt;
    i.fn = i.prototype = { jquery: bt, constructor: i, init: function(n, u, f) { var e, o; if (!n) return this; if ("string" == typeof n) { if (e = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : yf.exec(n), !e || !e[1] && u) return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n); if (e[1]) { if (u = u instanceof i ? u[0] : u, i.merge(this, i.parseHTML(e[1], u && u.nodeType ? u.ownerDocument || u : r, !0)), nr.test(e[1]) && i.isPlainObject(u))
                        for (e in u) i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]); return this } if (o = r.getElementById(e[2]), o && o.parentNode) { if (o.id !== e[2]) return f.find(n);
                    this.length = 1;
                    this[0] = o } return this.context = r, this.selector = n, this } return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this)) }, selector: "", length: 0, toArray: function() { return l.call(this) }, get: function(n) { return null == n ? this.toArray() : 0 > n ? this[this.length + n] : this[n] }, pushStack: function(n) { var t = i.merge(this.constructor(), n); return t.prevObject = this, t.context = this.context, t }, each: function(n, t) { return i.each(this, n, t) }, ready: function(n) { return i.ready.promise().done(n), this }, slice: function() { return this.pushStack(l.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(n) { var i = this.length,
                t = +n + (0 > n ? i : 0); return this.pushStack(t >= 0 && i > t ? [this[t]] : []) }, map: function(n) { return this.pushStack(i.map(this, function(t, i) { return n.call(t, i, t) })) }, end: function() { return this.prevObject || this.constructor(null) }, push: kt, sort: [].sort, splice: [].splice };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function() { var u, o, r, e, s, h, n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            c = !1; for ("boolean" == typeof n && (c = n, n = arguments[1] || {}, f = 2), "object" == typeof n || i.isFunction(n) || (n = {}), l === f && (n = this, --f); l > f; f++)
            if (null != (s = arguments[f]))
                for (e in s) u = n[e], r = s[e], n !== r && (c && r && (i.isPlainObject(r) || (o = i.isArray(r))) ? (o ? (o = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r)); return n };
    i.extend({ expando: "jQuery" + (bt + Math.random()).replace(/\D/g, ""), noConflict: function(t) { return n.$ === i && (n.$ = lf), t && n.jQuery === i && (n.jQuery = cf), i }, isReady: !1, readyWait: 1, holdReady: function(n) { n ? i.readyWait++ : i.ready(!0) }, ready: function(n) { if (n === !0 ? !--i.readyWait : !i.isReady) { if (!r.body) return setTimeout(i.ready);
                i.isReady = !0;
                n !== !0 && --i.readyWait > 0 || (et.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready")) } }, isFunction: function(n) { return "function" === i.type(n) }, isArray: Array.isArray || function(n) { return "array" === i.type(n) }, isWindow: function(n) { return null != n && n == n.window }, isNumeric: function(n) { return !isNaN(parseFloat(n)) && isFinite(n) }, type: function(n) { return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ot[af.call(n)] || "object" : typeof n }, isPlainObject: function(n) { var r; if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return !1; try { if (n.constructor && !k.call(n, "constructor") && !k.call(n.constructor.prototype, "isPrototypeOf")) return !1 } catch (u) { return !1 } if (i.support.ownLast)
                for (r in n) return k.call(n, r); for (r in n); return r === t || k.call(n, r) }, isEmptyObject: function(n) { var t; for (t in n) return !1; return !0 }, error: function(n) { throw Error(n); }, parseHTML: function(n, t, u) { if (!n || "string" != typeof n) return null; "boolean" == typeof t && (u = t, t = !1);
            t = t || r; var f = nr.exec(n),
                e = !u && []; return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && i(e).remove(), i.merge([], f.childNodes)) }, parseJSON: function(r) { return n.JSON && n.JSON.parse ? n.JSON.parse(r) : null === r ? r : "string" == typeof r && (r = i.trim(r), r && pf.test(r.replace(bf, "@").replace(kf, "]").replace(wf, ""))) ? Function("return " + r)() : (i.error("Invalid JSON: " + r), t) }, parseXML: function(r) { var u, f; if (!r || "string" != typeof r) return null; try { n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r)) } catch (e) { u = t } return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r), u }, noop: function() {}, globalEval: function(t) { t && i.trim(t) && (n.execScript || function(t) { n.eval.call(n, t) })(t) }, camelCase: function(n) { return n.replace(df, "ms-").replace(gf, ne) }, nodeName: function(n, t) { return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase() }, each: function(n, t, i) { var u, r = 0,
                f = n.length,
                e = gt(n); if (i) { if (e) { for (; f > r; r++)
                        if (u = t.apply(n[r], i), u === !1) break } else
                    for (r in n)
                        if (u = t.apply(n[r], i), u === !1) break } else if (e) { for (; f > r; r++)
                    if (u = t.call(n[r], r, n[r]), u === !1) break } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]), u === !1) break; return n }, trim: dt && !dt.call("﻿ ") ? function(n) { return null == n ? "" : dt.call(n) } : function(n) { return null == n ? "" : (n + "").replace(vf, "") }, makeArray: function(n, t) { var r = t || []; return null != n && (gt(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : kt.call(r, n)), r }, inArray: function(n, t, i) { var r; if (t) { if (gi) return gi.call(t, n, i); for (r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
                    if (i in t && t[i] === n) return i } return -1 }, merge: function(n, i) { var f = i.length,
                u = n.length,
                r = 0; if ("number" == typeof f)
                for (; f > r; r++) n[u++] = i[r];
            else
                while (i[r] !== t) n[u++] = i[r++]; return n.length = u, n }, grep: function(n, t, i) { var u, f = [],
                r = 0,
                e = n.length; for (i = !!i; e > r; r++) u = !!t(n[r], r), i !== u && f.push(n[r]); return f }, map: function(n, t, i) { var u, r = 0,
                e = n.length,
                o = gt(n),
                f = []; if (o)
                for (; e > r; r++) u = t(n[r], r, i), null != u && (f[f.length] = u);
            else
                for (r in n) u = t(n[r], r, i), null != u && (f[f.length] = u); return di.apply([], f) }, guid: 1, proxy: function(n, r) { var f, u, e; return "string" == typeof r && (e = n[r], r = n, n = e), i.isFunction(n) ? (f = l.call(arguments, 2), u = function() { return n.apply(r || this, f.concat(l.call(arguments))) }, u.guid = n.guid = n.guid || i.guid++, u) : t }, access: function(n, r, u, f, e, o, s) { var h = 0,
                l = n.length,
                c = null == u; if ("object" === i.type(u)) { e = !0; for (h in u) i.access(n, r, h, u[h], !0, o, s) } else if (f !== t && (e = !0, i.isFunction(f) || (s = !0), c && (s ? (r.call(n, f), r = null) : (c = r, r = function(n, t, r) { return c.call(i(n), r) })), r))
                for (; l > h; h++) r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u))); return e ? n : c ? r.call(n) : l ? r(n[0], u) : o }, now: function() { return (new Date).getTime() }, swap: function(n, t, i, r) { var f, u, e = {}; for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []); for (u in t) n.style[u] = e[u]; return f } });
    i.ready.promise = function(t) { if (!et)
            if (et = i.Deferred(), "complete" === r.readyState) setTimeout(i.ready);
            else if (r.addEventListener) r.addEventListener("DOMContentLoaded", h, !1), n.addEventListener("load", h, !1);
        else { r.attachEvent("onreadystatechange", h);
            n.attachEvent("onload", h); var u = !1; try { u = null == n.frameElement && r.documentElement } catch (e) {} u && u.doScroll && function f() { if (!i.isReady) { try { u.doScroll("left") } catch (n) { return setTimeout(f, 50) } tr();
                    i.ready() } }() } return et.promise(t) };
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) { ot["[object " + t + "]"] = t.toLowerCase() });
    bi = i(r),
        function(n, t) {
            function u(n, t, i, r) { var p, u, f, l, w, a, k, c, g, d; if ((t ? t.ownerDocument || t : y) !== s && nt(t), t = t || s, i = i || [], !n || "string" != typeof n) return i; if (1 !== (l = t.nodeType) && 9 !== l) return []; if (v && !r) { if (p = or.exec(n))
                        if (f = p[1]) { if (9 === l) { if (u = t.getElementById(f), !u || !u.parentNode) return i; if (u.id === f) return i.push(u), i } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && ot(t, u) && u.id === f) return i.push(u), i } else { if (p[2]) return b.apply(i, t.getElementsByTagName(n)), i; if ((f = p[3]) && e.getElementsByClassName && t.getElementsByClassName) return b.apply(i, t.getElementsByClassName(f)), i } if (e.qsa && (!h || !h.test(n))) { if (c = k = o, g = t, d = 9 === l && n, 1 === l && "object" !== t.nodeName.toLowerCase()) { for (a = pt(n), (k = t.getAttribute("id")) ? c = k.replace(cr, "\\$&") : t.setAttribute("id", c), c = "[id='" + c + "'] ", w = a.length; w--;) a[w] = c + wt(a[w]);
                            g = ti.test(n) && t.parentNode || t;
                            d = a.join(",") } if (d) try { return b.apply(i, g.querySelectorAll(d)), i } catch (tt) {} finally { k || t.removeAttribute("id") } } } return pr(n.replace(vt, "$1"), t, i, r) }

            function ri() {
                function n(i, u) { return t.push(i += " ") > r.cacheLength && delete n[t.shift()], n[i] = u } var t = []; return n }

            function c(n) { return n[o] = !0, n }

            function l(n) { var t = s.createElement("div"); try { return !!n(t) } catch (i) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t);
                    t = null } }

            function ui(n, t) { for (var u = n.split("|"), i = n.length; i--;) r.attrHandle[u[i]] = t }

            function bi(n, t) { var i = t && n,
                    r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || vi) - (~n.sourceIndex || vi); if (r) return r; if (i)
                    while (i = i.nextSibling)
                        if (i === t) return -1; return n ? 1 : -1 }

            function lr(n) { return function(t) { var i = t.nodeName.toLowerCase(); return "input" === i && t.type === n } }

            function ar(n) { return function(t) { var i = t.nodeName.toLowerCase(); return ("input" === i || "button" === i) && t.type === n } }

            function rt(n) { return c(function(t) { return t = +t, c(function(i, r) { for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u])) }) }) }

            function ki() {}

            function pt(n, t) { var e, f, s, o, i, h, c, l = li[n + " "]; if (l) return t ? 0 : l.slice(0); for (i = n, h = [], c = r.preFilter; i;) {
                    (!e || (f = ir.exec(i))) && (f && (i = i.slice(f[0].length) || i), h.push(s = []));
                    e = !1;
                    (f = rr.exec(i)) && (e = f.shift(), s.push({ value: e, type: f[0].replace(vt, " ") }), i = i.slice(e.length)); for (o in r.filter)(f = yt[o].exec(i)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({ value: e, type: o, matches: f }), i = i.slice(e.length)); if (!e) break } return t ? i.length : i ? u.error(n) : li(n, h).slice(0) }

            function wt(n) { for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value; return i }

            function fi(n, t, i) { var r = t.dir,
                    u = i && "parentNode" === r,
                    f = di++; return t.first ? function(t, i, f) { while (t = t[r])
                        if (1 === t.nodeType || u) return n(t, i, f) } : function(t, i, e) { var h, s, c, l = p + " " + f; if (e) { while (t = t[r])
                            if ((1 === t.nodeType || u) && n(t, i, e)) return !0 } else
                        while (t = t[r])
                            if (1 === t.nodeType || u)
                                if (c = t[o] || (t[o] = {}), (s = c[r]) && s[0] === l) { if ((h = s[1]) === !0 || h === ht) return h === !0 } else if (s = c[r] = [l], s[1] = n(t, i, e) || ht, s[1] === !0) return !0 } }

            function ei(n) { return n.length > 1 ? function(t, i, r) { for (var u = n.length; u--;)
                        if (!n[u](t, i, r)) return !1; return !0 } : n[0] }

            function bt(n, t, i, r, u) { for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f)); return o }

            function oi(n, t, i, r, u, f) { return r && !r[o] && (r = oi(r)), u && !u[o] && (u = oi(u, f)), c(function(f, e, o, s) { var l, c, a, p = [],
                        y = [],
                        w = e.length,
                        k = f || yr(t || "*", o.nodeType ? [o] : o, []),
                        v = !n || !f && t ? k : bt(k, p, n, o, s),
                        h = i ? u || (f ? n : w || r) ? [] : e : v; if (i && i(v, h, o, s), r)
                        for (l = bt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a)); if (f) { if (u || n) { if (u) { for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                u(null, h = [], l, s) } for (c = h.length; c--;)(a = h[c]) && (l = u ? it.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a)) } } else h = bt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h) }) }

            function si(n) { for (var s, u, i, e = n.length, h = r.relative[n[0].type], c = h || r.relative[" "], t = h ? 1 : 0, l = fi(function(n) { return n === s }, c, !0), a = fi(function(n) { return it.call(s, n) > -1 }, c, !0), f = [function(n, t, i) { return !h && (i || t !== lt) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i)) }]; e > t; t++)
                    if (u = r.relative[n[t].type]) f = [fi(ei(f), u)];
                    else { if (u = r.filter[n[t].type].apply(null, n[t].matches), u[o]) { for (i = ++t; e > i; i++)
                                if (r.relative[n[i].type]) break; return oi(t > 1 && ei(f), t > 1 && wt(n.slice(0, t - 1).concat({ value: " " === n[t - 2].type ? "*" : "" })).replace(vt, "$1"), u, i > t && si(n.slice(t, i)), e > i && si(n = n.slice(i)), e > i && wt(n)) } f.push(u) } return ei(f) }

            function vr(n, t) { var f = 0,
                    i = t.length > 0,
                    e = n.length > 0,
                    o = function(o, h, c, l, a) { var y, g, k, w = [],
                            d = 0,
                            v = "0",
                            nt = o && [],
                            tt = null != a,
                            it = lt,
                            ut = o || e && r.find.TAG("*", a && h.parentNode || h),
                            rt = p += null == it ? 1 : Math.random() || .1; for (tt && (lt = h !== s && h, ht = f); null != (y = ut[v]); v++) { if (e && y) { for (g = 0; k = n[g++];)
                                    if (k(y, h, c)) { l.push(y); break } tt && (p = rt, ht = ++f) } i && ((y = !k && y) && d--, o && nt.push(y)) } if (d += v, i && v !== d) { for (g = 0; k = t[g++];) k(nt, w, h, c); if (o) { if (d > 0)
                                    while (v--) nt[v] || w[v] || (w[v] = nr.call(l));
                                w = bt(w) } b.apply(l, w);
                            tt && !o && w.length > 0 && d + t.length > 1 && u.uniqueSort(l) } return tt && (p = rt, lt = it), nt }; return i ? c(o) : o }

            function yr(n, t, i) { for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i); return i }

            function pr(n, t, i, u) { var s, f, o, c, l, h = pt(n); if (!u && 1 === h.length) { if (f = h[0] = h[0].slice(0), f.length > 2 && "ID" === (o = f[0]).type && e.getById && 9 === t.nodeType && v && r.relative[f[1].type]) { if (t = (r.find.ID(o.matches[0].replace(k, d), t) || [])[0], !t) return i;
                        n = n.slice(f.shift().value.length) } for (s = yt.needsContext.test(n) ? 0 : f.length; s--;) { if (o = f[s], r.relative[c = o.type]) break; if ((l = r.find[c]) && (u = l(o.matches[0].replace(k, d), ti.test(f[0].type) && t.parentNode || t))) { if (f.splice(s, 1), n = u.length && wt(f), !n) return b.apply(i, u), i; break } } } return kt(n, h)(u, t, !v, i, ti.test(n)), i } var ut, e, ht, r, ct, hi, kt, lt, g, nt, s, a, v, h, tt, at, ot, o = "sizzle" + -new Date,
                y = n.document,
                p = 0,
                di = 0,
                ci = ri(),
                li = ri(),
                ai = ri(),
                ft = !1,
                dt = function(n, t) { return n === t ? (ft = !0, 0) : 0 },
                st = typeof t,
                vi = -2147483648,
                gi = {}.hasOwnProperty,
                w = [],
                nr = w.pop,
                tr = w.push,
                b = w.push,
                yi = w.slice,
                it = w.indexOf || function(n) { for (var t = 0, i = this.length; i > t; t++)
                        if (this[t] === n) return t; return -1 },
                gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                f = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                pi = et.replace("w", "w#"),
                wi = "\\[" + f + "*(" + et + ")" + f + "*(?:([*^$|!~]?=)" + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + pi + ")|)|)" + f + "*\\]",
                ni = ":(" + et + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + wi.replace(3, 8) + ")*)|.*)\\)|)",
                vt = RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"),
                ir = RegExp("^" + f + "*," + f + "*"),
                rr = RegExp("^" + f + "*([>+~]|" + f + ")" + f + "*"),
                ti = RegExp(f + "*[+~]"),
                ur = RegExp("=" + f + "*([^\\]'\"]*)" + f + "*\\]", "g"),
                fr = RegExp(ni),
                er = RegExp("^" + pi + "$"),
                yt = { ID: RegExp("^#(" + et + ")"), CLASS: RegExp("^\\.(" + et + ")"), TAG: RegExp("^(" + et.replace("w", "w*") + ")"), ATTR: RegExp("^" + wi), PSEUDO: RegExp("^" + ni), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"), bool: RegExp("^(?:" + gt + ")$", "i"), needsContext: RegExp("^" + f + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)", "i") },
                ii = /^[^{]+\{\s*\[native \w/,
                or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                sr = /^(?:input|select|textarea|button)$/i,
                hr = /^h\d$/i,
                cr = /'|\\/g,
                k = RegExp("\\\\([\\da-f]{1,6}" + f + "?|(" + f + ")|.)", "ig"),
                d = function(n, t, i) { var r = "0x" + t - 65536; return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r) }; try { b.apply(w = yi.call(y.childNodes), y.childNodes);
                w[y.childNodes.length].nodeType } catch (wr) { b = { apply: w.length ? function(n, t) { tr.apply(n, yi.call(t)) } : function(n, t) { for (var i = n.length, r = 0; n[i++] = t[r++];);
                        n.length = i - 1 } } } hi = u.isXML = function(n) { var t = n && (n.ownerDocument || n).documentElement; return t ? "HTML" !== t.nodeName : !1 };
            e = u.support = {};
            nt = u.setDocument = function(n) { var i = n ? n.ownerDocument || n : y,
                    u = i.defaultView; return i !== s && 9 === i.nodeType && i.documentElement ? (s = i, a = i.documentElement, v = !hi(i), u && u.attachEvent && u !== u.top && u.attachEvent("onbeforeunload", function() { nt() }), e.attributes = l(function(n) { return n.className = "i", !n.getAttribute("className") }), e.getElementsByTagName = l(function(n) { return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length }), e.getElementsByClassName = l(function(n) { return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild.className = "i", 2 === n.getElementsByClassName("i").length }), e.getById = l(function(n) { return a.appendChild(n).id = o, !i.getElementsByName || !i.getElementsByName(o).length }), e.getById ? (r.find.ID = function(n, t) { if (typeof t.getElementById !== st && v) { var i = t.getElementById(n); return i && i.parentNode ? [i] : [] } }, r.filter.ID = function(n) { var t = n.replace(k, d); return function(n) { return n.getAttribute("id") === t } }) : (delete r.find.ID, r.filter.ID = function(n) { var t = n.replace(k, d); return function(n) { var i = typeof n.getAttributeNode !== st && n.getAttributeNode("id"); return i && i.value === t } }), r.find.TAG = e.getElementsByTagName ? function(n, i) { return typeof i.getElementsByTagName !== st ? i.getElementsByTagName(n) : t } : function(n, t) { var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n); if ("*" === n) { while (i = u[f++]) 1 === i.nodeType && r.push(i); return r } return u }, r.find.CLASS = e.getElementsByClassName && function(n, i) { return typeof i.getElementsByClassName !== st && v ? i.getElementsByClassName(n) : t }, tt = [], h = [], (e.qsa = ii.test(i.querySelectorAll)) && (l(function(n) { n.innerHTML = "<select><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[selected]").length || h.push("\\[" + f + "*(?:value|" + gt + ")");
                    n.querySelectorAll(":checked").length || h.push(":checked") }), l(function(n) { var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("t", "");
                    n.querySelectorAll("[t^='']").length && h.push("[*^$]=" + f + "*(?:''|\"\")");
                    n.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    h.push(",.*:") })), (e.matchesSelector = ii.test(at = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && l(function(n) { e.disconnectedMatch = at.call(n, "div");
                    at.call(n, "[s!='']:x");
                    tt.push("!=", ni) }), h = h.length && RegExp(h.join("|")), tt = tt.length && RegExp(tt.join("|")), ot = ii.test(a.contains) || a.compareDocumentPosition ? function(n, t) { var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode; return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i))) } : function(n, t) { if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0; return !1 }, dt = a.compareDocumentPosition ? function(n, t) { if (n === t) return ft = !0, 0; var r = t.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(t); return r ? 1 & r || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || ot(y, n) ? -1 : t === i || ot(y, t) ? 1 : g ? it.call(g, n) - it.call(g, t) : 0 : 4 & r ? -1 : 1 : n.compareDocumentPosition ? -1 : 1 } : function(n, t) { var r, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t]; if (n === t) return ft = !0, 0; if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : g ? it.call(g, n) - it.call(g, t) : 0; if (o === s) return bi(n, t); for (r = n; r = r.parentNode;) f.unshift(r); for (r = t; r = r.parentNode;) e.unshift(r); while (f[u] === e[u]) u++; return u ? bi(f[u], e[u]) : f[u] === y ? -1 : e[u] === y ? 1 : 0 }, i) : s };
            u.matches = function(n, t) { return u(n, null, null, t) };
            u.matchesSelector = function(n, t) { if ((n.ownerDocument || n) !== s && nt(n), t = t.replace(ur, "='$1']"), !(!e.matchesSelector || !v || tt && tt.test(t) || h && h.test(t))) try { var i = at.call(n, t); if (i || e.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i } catch (r) {}
                return u(t, s, null, [n]).length > 0 };
            u.contains = function(n, t) { return (n.ownerDocument || n) !== s && nt(n), ot(n, t) };
            u.attr = function(n, i) {
                (n.ownerDocument || n) !== s && nt(n); var f = r.attrHandle[i.toLowerCase()],
                    u = f && gi.call(r.attrHandle, i.toLowerCase()) ? f(n, i, !v) : t; return u === t ? e.attributes || !v ? n.getAttribute(i) : (u = n.getAttributeNode(i)) && u.specified ? u.value : null : u };
            u.error = function(n) { throw Error("Syntax error, unrecognized expression: " + n); };
            u.uniqueSort = function(n) { var r, u = [],
                    t = 0,
                    i = 0; if (ft = !e.detectDuplicates, g = !e.sortStable && n.slice(0), n.sort(dt), ft) { while (r = n[i++]) r === n[i] && (t = u.push(i)); while (t--) n.splice(u[t], 1) } return n };
            ct = u.getText = function(n) { var r, i = "",
                    u = 0,
                    t = n.nodeType; if (t) { if (1 === t || 9 === t || 11 === t) { if ("string" == typeof n.textContent) return n.textContent; for (n = n.firstChild; n; n = n.nextSibling) i += ct(n) } else if (3 === t || 4 === t) return n.nodeValue } else
                    for (; r = n[u]; u++) i += ct(r); return i };
            r = u.selectors = { cacheLength: 50, createPseudo: c, match: yt, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(n) { return n[1] = n[1].replace(k, d), n[3] = (n[4] || n[5] || "").replace(k, d), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4) }, CHILD: function(n) { return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n }, PSEUDO: function(n) { var r, i = !n[5] && n[2]; return yt.CHILD.test(n[0]) ? null : (n[3] && n[4] !== t ? n[2] = n[4] : i && fr.test(i) && (r = pt(i, !0)) && (r = i.indexOf(")", i.length - r) - i.length) && (n[0] = n[0].slice(0, r), n[2] = i.slice(0, r)), n.slice(0, 3)) } }, filter: { TAG: function(n) { var t = n.replace(k, d).toLowerCase(); return "*" === n ? function() { return !0 } : function(n) { return n.nodeName && n.nodeName.toLowerCase() === t } }, CLASS: function(n) { var t = ci[n + " "]; return t || (t = RegExp("(^|" + f + ")" + n + "(" + f + "|$)")) && ci(n, function(n) { return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== st && n.getAttribute("class") || "") }) }, ATTR: function(n, t, i) { return function(r) { var f = u.attr(r, n); return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0 } }, CHILD: function(n, t, i, r, u) { var s = "nth" !== n.slice(0, 3),
                            e = "last" !== n.slice(-4),
                            f = "of-type" === t; return 1 === r && 0 === u ? function(n) { return !!n.parentNode } : function(t, i, h) { var a, k, c, l, v, w, b = s !== e ? "nextSibling" : "previousSibling",
                                y = t.parentNode,
                                g = f && t.nodeName.toLowerCase(),
                                d = !h && !f; if (y) { if (s) { while (b) { for (c = t; c = c[b];)
                                            if (f ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                        w = b = "only" === n && !w && "nextSibling" } return !0 } if (w = [e ? y.firstChild : y.lastChild], e && d) { for (k = y[o] || (y[o] = {}), a = k[n] || [], v = a[0] === p && a[1], l = a[0] === p && a[2], c = v && y.childNodes[v]; c = ++v && c && c[b] || (l = v = 0) || w.pop();)
                                        if (1 === c.nodeType && ++l && c === t) { k[n] = [p, v, l]; break } } else if (d && (a = (t[o] || (t[o] = {}))[n]) && a[0] === p) l = a[1];
                                else
                                    while (c = ++v && c && c[b] || (l = v = 0) || w.pop())
                                        if ((f ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[o] || (c[o] = {}))[n] = [p, l]), c === t)) break; return l -= u, l === r || 0 == l % r && l / r >= 0 } } }, PSEUDO: function(n, t) { var f, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n); return i[o] ? i(t) : i.length > 1 ? (f = [n, n, "", t], r.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, r) { for (var u, f = i(n, t), e = f.length; e--;) u = it.call(n, f[e]), n[u] = !(r[u] = f[e]) }) : function(n) { return i(n, 0, f) }) : i } }, pseudos: { not: c(function(n) { var i = [],
                            r = [],
                            t = kt(n.replace(vt, "$1")); return t[o] ? c(function(n, i, r, u) { for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e)) }) : function(n, u, f) { return i[0] = n, t(i, null, f, r), !r.pop() } }), has: c(function(n) { return function(t) { return u(n, t).length > 0 } }), contains: c(function(n) { return function(t) { return (t.textContent || t.innerText || ct(t)).indexOf(n) > -1 } }), lang: c(function(n) { return er.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(k, d).toLowerCase(),
                            function(t) { var i;
                                do
                                    if (i = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function(t) { var i = n.location && n.location.hash; return i && i.slice(1) === t.id }, root: function(n) { return n === a }, focus: function(n) { return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex) }, enabled: function(n) { return n.disabled === !1 }, disabled: function(n) { return n.disabled === !0 }, checked: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && !!n.checked || "option" === t && !!n.selected }, selected: function(n) { return n.parentNode && n.parentNode.selectedIndex, n.selected === !0 }, empty: function(n) { for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeName > "@" || 3 === n.nodeType || 4 === n.nodeType) return !1; return !0 }, parent: function(n) { return !r.pseudos.empty(n) }, header: function(n) { return hr.test(n.nodeName) }, input: function(n) { return sr.test(n.nodeName) }, button: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && "button" === n.type || "button" === t }, text: function(n) { var t; return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || t.toLowerCase() === n.type) }, first: rt(function() { return [0] }), last: rt(function(n, t) { return [t - 1] }), eq: rt(function(n, t, i) { return [0 > i ? i + t : i] }), even: rt(function(n, t) { for (var i = 0; t > i; i += 2) n.push(i); return n }), odd: rt(function(n, t) { for (var i = 1; t > i; i += 2) n.push(i); return n }), lt: rt(function(n, t, i) { for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r); return n }), gt: rt(function(n, t, i) { for (var r = 0 > i ? i + t : i; t > ++r;) n.push(r); return n }) } };
            r.pseudos.nth = r.pseudos.eq; for (ut in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[ut] = lr(ut); for (ut in { submit: !0, reset: !0 }) r.pseudos[ut] = ar(ut);
            ki.prototype = r.filters = r.pseudos;
            r.setFilters = new ki;
            kt = u.compile = function(n, t) { var r, u = [],
                    f = [],
                    i = ai[n + " "]; if (!i) { for (t || (t = pt(n)), r = t.length; r--;) i = si(t[r]), i[o] ? u.push(i) : f.push(i);
                    i = ai(n, vr(f, u)) } return i };
            e.sortStable = o.split("").sort(dt).join("") === o;
            e.detectDuplicates = ft;
            nt();
            e.sortDetached = l(function(n) { return 1 & n.compareDocumentPosition(s.createElement("div")) });
            l(function(n) { return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href") }) || ui("type|href|height|width", function(n, i, r) { return r ? t : n.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2) });
            e.attributes && l(function(n) { return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value") }) || ui("value", function(n, i, r) { return r || "input" !== n.nodeName.toLowerCase() ? t : n.defaultValue });
            l(function(n) { return null == n.getAttribute("disabled") }) || ui(gt, function(n, i, r) { var u; return r ? t : (u = n.getAttributeNode(i)) && u.specified ? u.value : n[i] === !0 ? i.toLowerCase() : null });
            i.find = u;
            i.expr = u.selectors;
            i.expr[":"] = i.expr.pseudos;
            i.unique = u.uniqueSort;
            i.text = u.getText;
            i.isXMLDoc = u.isXML;
            i.contains = u.contains }(n);
    ni = {};
    i.Callbacks = function(n) { n = "string" == typeof n ? ni[n] || te(n) : i.extend({}, n); var s, f, c, e, o, l, r = [],
            u = !n.once && [],
            a = function(t) { for (f = n.memory && t, c = !0, o = l || 0, l = 0, e = r.length, s = !0; r && e > o; o++)
                    if (r[o].apply(t[0], t[1]) === !1 && n.stopOnFalse) { f = !1; break } s = !1;
                r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable()) },
            h = { add: function() { if (r) { var t = r.length;
                        (function u(t) { i.each(t, function(t, f) { var e = i.type(f); "function" === e ? n.unique && h.has(f) || r.push(f) : f && f.length && "string" !== e && u(f) }) })(arguments);
                        s ? e = r.length : f && (l = t, a(f)) } return this }, remove: function() { return r && i.each(arguments, function(n, t) { for (var u;
                            (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), s && (e >= u && e--, o >= u && o--) }), this }, has: function(n) { return n ? i.inArray(n, r) > -1 : !(!r || !r.length) }, empty: function() { return r = [], e = 0, this }, disable: function() { return r = u = f = t, this }, disabled: function() { return !r }, lock: function() { return u = t, f || h.disable(), this }, locked: function() { return !u }, fireWith: function(n, t) { return !r || c && !u || (t = t || [], t = [n, t.slice ? t.slice() : t], s ? u.push(t) : a(t)), this }, fire: function() { return h.fireWith(this, arguments), this }, fired: function() { return !!c } }; return h };
    i.extend({ Deferred: function(n) { var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = { state: function() { return f }, always: function() { return t.done(arguments).fail(arguments), this }, then: function() { var n = arguments; return i.Deferred(function(f) { i.each(u, function(u, e) { var s = e[0],
                                    o = i.isFunction(n[u]) && n[u];
                                t[e[1]](function() { var n = o && o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [n] : arguments) }) });
                            n = null }).promise() }, promise: function(n) { return null != n ? i.extend(n, r) : r } },
                t = {}; return r.pipe = r.then, i.each(u, function(n, i) { var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() { f = o }, u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() { return t[i[0] + "With"](this === t ? r : this, arguments), this };
                t[i[0] + "With"] = e.fireWith }), r.promise(t), n && n.call(t, t), t }, when: function(n) { var t = 0,
                u = l.call(arguments),
                r = u.length,
                e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                f = 1 === e ? n : i.Deferred(),
                h = function(n, t, i) { return function(r) { t[n] = this;
                        i[n] = arguments.length > 1 ? l.call(arguments) : r;
                        i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i) } },
                o, c, s; if (r > 1)
                for (o = Array(r), c = Array(r), s = Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e; return e || f.resolveWith(s, u), f.promise() } });
    i.support = function(t) { var a, e, f, h, c, l, v, y, s, u = r.createElement("div"); if (u.setAttribute("className", "t"), u.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", a = u.getElementsByTagName("*") || [], e = u.getElementsByTagName("a")[0], !e || !e.style || !a.length) return t;
        h = r.createElement("select");
        l = h.appendChild(r.createElement("option"));
        f = u.getElementsByTagName("input")[0];
        e.style.cssText = "top:1px;float:left;opacity:.5";
        t.getSetAttribute = "t" !== u.className;
        t.leadingWhitespace = 3 === u.firstChild.nodeType;
        t.tbody = !u.getElementsByTagName("tbody").length;
        t.htmlSerialize = !!u.getElementsByTagName("link").length;
        t.style = /top/.test(e.getAttribute("style"));
        t.hrefNormalized = "/a" === e.getAttribute("href");
        t.opacity = /^0.5/.test(e.style.opacity);
        t.cssFloat = !!e.style.cssFloat;
        t.checkOn = !!f.value;
        t.optSelected = l.selected;
        t.enctype = !!r.createElement("form").enctype;
        t.html5Clone = "<:nav><\/:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML;
        t.inlineBlockNeedsLayout = !1;
        t.shrinkWrapBlocks = !1;
        t.pixelPosition = !1;
        t.deleteExpando = !0;
        t.noCloneEvent = !0;
        t.reliableMarginRight = !0;
        t.boxSizingReliable = !0;
        f.checked = !0;
        t.noCloneChecked = f.cloneNode(!0).checked;
        h.disabled = !0;
        t.optDisabled = !l.disabled; try { delete u.test } catch (p) { t.deleteExpando = !1 } f = r.createElement("input");
        f.setAttribute("value", "");
        t.input = "" === f.getAttribute("value");
        f.value = "t";
        f.setAttribute("type", "radio");
        t.radioValue = "t" === f.value;
        f.setAttribute("checked", "t");
        f.setAttribute("name", "t");
        c = r.createDocumentFragment();
        c.appendChild(f);
        t.appendChecked = f.checked;
        t.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
        u.attachEvent && (u.attachEvent("onclick", function() { t.noCloneEvent = !1 }), u.cloneNode(!0).click()); for (s in { submit: !0, change: !0, focusin: !0 }) u.setAttribute(v = "on" + s, "t"), t[s + "Bubbles"] = v in n || u.attributes[v].expando === !1;
        u.style.backgroundClip = "content-box";
        u.cloneNode(!0).style.backgroundClip = "";
        t.clearCloneStyle = "content-box" === u.style.backgroundClip; for (s in i(t)) break; return t.ownLast = "0" !== s, i(function() { var h, e, f, c = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                s = r.getElementsByTagName("body")[0];
            s && (h = r.createElement("div"), h.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(h).appendChild(u), u.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", f = u.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", y = 0 === f[0].offsetHeight, f[0].style.display = "", f[1].style.display = "none", t.reliableHiddenOffsets = y && 0 === f[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", i.swap(s, null != s.style.zoom ? { zoom: 1 } : {}, function() { t.boxSizing = 4 === u.offsetWidth }), n.getComputedStyle && (t.pixelPosition = "1%" !== (n.getComputedStyle(u, null) || {}).top, t.boxSizingReliable = "4px" === (n.getComputedStyle(u, null) || { width: "4px" }).width, e = u.appendChild(r.createElement("div")), e.style.cssText = u.style.cssText = c, e.style.marginRight = e.style.width = "0", u.style.width = "1px", t.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null) || {}).marginRight)), typeof u.style.zoom !== o && (u.innerHTML = "", u.style.cssText = c + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.innerHTML = "<div><\/div>", u.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== u.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(h), h = u = f = e = null) }), a = h = c = l = e = f = null, t }({});
    ir = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    rr = /([A-Z])/g;
    i.extend({ cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(n) { return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ti(n) }, data: function(n, t, i) { return ur(n, t, i) }, removeData: function(n, t) { return fr(n, t) }, _data: function(n, t, i) { return ur(n, t, i, !0) }, _removeData: function(n, t) { return fr(n, t, !0) }, acceptData: function(n) { if (n.nodeType && 1 !== n.nodeType && 9 !== n.nodeType) return !1; var t = n.nodeName && i.noData[n.nodeName.toLowerCase()]; return !t || t !== !0 && n.getAttribute("classid") === t } });
    i.fn.extend({ data: function(n, r) { var e, f, o = null,
                s = 0,
                u = this[0]; if (n === t) { if (this.length && (o = i.data(u), 1 === u.nodeType && !i._data(u, "parsedAttrs"))) { for (e = u.attributes; e.length > s; s++) f = e[s].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), er(u, f, o[f]));
                    i._data(u, "parsedAttrs", !0) } return o } return "object" == typeof n ? this.each(function() { i.data(this, n) }) : arguments.length > 1 ? this.each(function() { i.data(this, n, r) }) : u ? er(u, n, i.data(u, n)) : null }, removeData: function(n) { return this.each(function() { i.removeData(this, n) }) } });
    i.extend({ queue: function(n, r, u) { var f; return n ? (r = (r || "fx") + "queue", f = i._data(n, r), u && (!f || i.isArray(u) ? f = i._data(n, r, i.makeArray(u)) : f.push(u)), f || []) : t }, dequeue: function(n, t) { t = t || "fx"; var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() { i.dequeue(n, t) }; "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));!e && f && f.empty.fire() }, _queueHooks: function(n, t) { var r = t + "queueHooks"; return i._data(n, r) || i._data(n, r, { empty: i.Callbacks("once memory").add(function() { i._removeData(n, t + "queue");
                    i._removeData(n, r) }) }) } });
    i.fn.extend({ queue: function(n, r) { var u = 2; return "string" != typeof n && (r = n, n = "fx", u--), u > arguments.length ? i.queue(this[0], n) : r === t ? this : this.each(function() { var t = i.queue(this, n, r);
                i._queueHooks(this, n); "fx" === n && "inprogress" !== t[0] && i.dequeue(this, n) }) }, dequeue: function(n) { return this.each(function() { i.dequeue(this, n) }) }, delay: function(n, t) { return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) { var r = setTimeout(t, n);
                i.stop = function() { clearTimeout(r) } }) }, clearQueue: function(n) { return this.queue(n || "fx", []) }, promise: function(n, r) { var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {--e || o.resolveWith(f, [f]) }; for ("string" != typeof n && (r = n, n = t), n = n || "fx"; s--;) u = i._data(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h)); return h(), o.promise(r) } }); var d, or, ii = /[\t\r\n\f]/g,
        ie = /\r/g,
        re = /^(?:input|select|textarea|button|object)$/i,
        ue = /^(?:a|area)$/i,
        ri = /^(?:checked|selected)$/i,
        a = i.support.getSetAttribute,
        ht = i.support.input;
    i.fn.extend({ attr: function(n, t) { return i.access(this, i.attr, n, t, arguments.length > 1) }, removeAttr: function(n) { return this.each(function() { i.removeAttr(this, n) }) }, prop: function(n, t) { return i.access(this, i.prop, n, t, arguments.length > 1) }, removeProp: function(n) { return n = i.propFix[n] || n, this.each(function() { try { this[n] = t;
                    delete this[n] } catch (i) {} }) }, addClass: function(n) { var e, t, r, u, o, f = 0,
                h = this.length,
                c = "string" == typeof n && n; if (i.isFunction(n)) return this.each(function(t) { i(this).addClass(n.call(this, t, this.className)) }); if (c)
                for (e = (n || "").match(s) || []; h > f; f++)
                    if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ii, " ") : " ")) { for (o = 0; u = e[o++];) 0 > r.indexOf(" " + u + " ") && (r += u + " ");
                        t.className = i.trim(r) } return this }, removeClass: function(n) { var e, t, r, u, o, f = 0,
                h = this.length,
                c = 0 === arguments.length || "string" == typeof n && n; if (i.isFunction(n)) return this.each(function(t) { i(this).removeClass(n.call(this, t, this.className)) }); if (c)
                for (e = (n || "").match(s) || []; h > f; f++)
                    if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ii, " ") : "")) { for (o = 0; u = e[o++];)
                            while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                        t.className = n ? i.trim(r) : "" } return this }, toggleClass: function(n, t) { var r = typeof n; return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) { i(this).toggleClass(n.call(this, r, this.className, t), t) }) : this.each(function() { if ("string" === r)
                    for (var t, f = 0, u = i(this), e = n.match(s) || []; t = e[f++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else(r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "") }) }, hasClass: function(n) { for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(ii, " ").indexOf(i) >= 0) return !0; return !1 }, val: function(n) { var u, r, e, f = this[0]; return arguments.length ? (e = i.isFunction(n), this.each(function(u) { var f;
                1 === this.nodeType && (f = e ? n.call(this, u, i(this).val()) : n, null == f ? f = "" : "number" == typeof f ? f += "" : i.isArray(f) && (f = i.map(f, function(n) { return null == n ? "" : n + "" })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f)) })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t ? u : (u = f.value, "string" == typeof u ? u.replace(ie, "") : null == u ? "" : u)) : void 0 } });
    i.extend({ valHooks: { option: { get: function(n) { var t = i.find.attr(n, "value"); return null != t ? t : n.text } }, select: { get: function(n) { for (var e, t, o = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, s = u ? null : [], h = u ? r + 1 : o.length, f = 0 > r ? h : u ? r : 0; h > f; f++)
                        if (t = o[f], !(!t.selected && f !== r || (i.support.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) { if (e = i(t).val(), u) return e;
                            s.push(e) } return s }, set: function(n, t) { for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i(r).val(), e) >= 0) && (u = !0); return u || (n.selectedIndex = -1), e } } }, attr: function(n, r, u) { var f, e, s = n.nodeType; if (n && 3 !== s && 8 !== s && 2 !== s) return typeof n.getAttribute === o ? i.prop(n, r, u) : (1 === s && i.isXMLDoc(n) || (r = r.toLowerCase(), f = i.attrHooks[r] || (i.expr.match.bool.test(r) ? or : d)), u === t ? f && "get" in f && null !== (e = f.get(n, r)) ? e : (e = i.find.attr(n, r), null == e ? t : e) : null !== u ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""), u) : (i.removeAttr(n, r), t)) }, removeAttr: function(n, t) { var r, u, e = 0,
                f = t && t.match(s); if (f && 1 === n.nodeType)
                while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) ? ht && a || !ri.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(a ? r : u) }, attrHooks: { type: { set: function(n, t) { if (!i.support.radioValue && "radio" === t && i.nodeName(n, "input")) { var r = n.value; return n.setAttribute("type", t), r && (n.value = r), t } } } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function(n, r, u) { var e, f, s, o = n.nodeType; if (n && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && null !== (e = f.get(n, r)) ? e : n[r] }, propHooks: { tabIndex: { get: function(n) { var t = i.find.attr(n, "tabindex"); return t ? parseInt(t, 10) : re.test(n.nodeName) || ue.test(n.nodeName) && n.href ? 0 : -1 } } } });
    or = { set: function(n, t, r) { return t === !1 ? i.removeAttr(n, r) : ht && a || !ri.test(r) ? n.setAttribute(!a && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r } };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, r) { var u = i.expr.attrHandle[r] || i.find.attr;
        i.expr.attrHandle[r] = ht && a || !ri.test(r) ? function(n, r, f) { var e = i.expr.attrHandle[r],
                o = f ? t : (i.expr.attrHandle[r] = t) != u(n, r, f) ? r.toLowerCase() : null; return i.expr.attrHandle[r] = e, o } : function(n, r, u) { return u ? t : n[i.camelCase("default-" + r)] ? r.toLowerCase() : null } });
    ht && a || (i.attrHooks.value = { set: function(n, r, u) { return i.nodeName(n, "input") ? (n.defaultValue = r, t) : d && d.set(n, r, u) } });
    a || (d = { set: function(n, i, r) { var u = n.getAttributeNode(r); return u || n.setAttributeNode(u = n.ownerDocument.createAttribute(r)), u.value = i += "", "value" === r || i === n.getAttribute(r) ? i : t } }, i.expr.attrHandle.id = i.expr.attrHandle.name = i.expr.attrHandle.coords = function(n, i, r) { var u; return r ? t : (u = n.getAttributeNode(i)) && "" !== u.value ? u.value : null }, i.valHooks.button = { get: function(n, i) { var r = n.getAttributeNode(i); return r && r.specified ? r.value : t }, set: d.set }, i.attrHooks.contenteditable = { set: function(n, t, i) { d.set(n, "" === t ? !1 : t, i) } }, i.each(["width", "height"], function(n, r) { i.attrHooks[r] = { set: function(n, i) { return "" === i ? (n.setAttribute(r, "auto"), i) : t } } }));
    i.support.hrefNormalized || i.each(["href", "src"], function(n, t) { i.propHooks[t] = { get: function(n) { return n.getAttribute(t, 4) } } });
    i.support.style || (i.attrHooks.style = { get: function(n) { return n.style.cssText || t }, set: function(n, t) { return n.style.cssText = t + "" } });
    i.support.optSelected || (i.propHooks.selected = { get: function(n) { var t = n.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { i.propFix[this.toLowerCase()] = this });
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.each(["radio", "checkbox"], function() { i.valHooks[this] = { set: function(n, r) { return i.isArray(r) ? n.checked = i.inArray(i(n).val(), r) >= 0 : t } };
        i.support.checkOn || (i.valHooks[this].get = function(n) { return null === n.getAttribute("value") ? "on" : n.value }) }); var ui = /^(?:input|select|textarea)$/i,
        fe = /^key/,
        ee = /^(?:mouse|contextmenu)|click/,
        sr = /^(?:focusinfocus|focusoutblur)$/,
        hr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = { global: {}, add: function(n, r, u, f, e) { var b, p, k, w, c, l, a, v, h, d, g, y = i._data(n); if (y) { for (u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), (p = y.events) || (p = y.events = {}), (l = y.handle) || (l = y.handle = function(n) { return typeof i === o || n && i.event.triggered === n.type ? t : i.event.dispatch.apply(l.elem, arguments) }, l.elem = n), r = (r || "").match(s) || [""], k = r.length; k--;) b = hr.exec(r[k]) || [], h = g = b[1], d = (b[2] || "").split(".").sort(), h && (c = i.event.special[h] || {}, h = (e ? c.delegateType : c.bindType) || h, c = i.event.special[h] || {}, a = i.extend({ type: h, origType: g, data: f, handler: u, guid: u.guid, selector: e, needsContext: e && i.expr.match.needsContext.test(e), namespace: d.join(".") }, w), (v = p[h]) || (v = p[h] = [], v.delegateCount = 0, c.setup && c.setup.call(n, f, d, l) !== !1 || (n.addEventListener ? n.addEventListener(h, l, !1) : n.attachEvent && n.attachEvent("on" + h, l))), c.add && (c.add.call(n, a), a.handler.guid || (a.handler.guid = u.guid)), e ? v.splice(v.delegateCount++, 0, a) : v.push(a), i.event.global[h] = !0);
                n = null } }, remove: function(n, t, r, u, f) { var y, o, h, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n); if (v && (a = v.events)) { for (t = (t || "").match(s) || [""], p = t.length; p--;)
                    if (h = hr.exec(t[p]) || [], e = k = h[1], w = (h[2] || "").split(".").sort(), e) { for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], h = h[2] && RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], !f && k !== o.origType || r && r.guid !== o.guid || h && !h.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                        b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e]) } else
                        for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events")) } }, trigger: function(u, f, e, o) { var a, v, s, w, l, c, b, p = [e || r],
                h = k.call(u, "type") ? u.type : u,
                y = k.call(u, "namespace") ? u.namespace.split(".") : []; if (s = c = e = e || r, 3 !== e.nodeType && 8 !== e.nodeType && !sr.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."), h = y.shift(), y.sort()), v = 0 > h.indexOf(":") && "on" + h, u = u[i.expando] ? u : new i.Event(h, "object" == typeof u && u), u.isTrigger = o ? 2 : 3, u.namespace = y.join("."), u.namespace_re = u.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u.result = t, u.target || (u.target = e), f = null == f ? [u] : i.makeArray(f, [u]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) { if (!o && !l.noBubble && !i.isWindow(e)) { for (w = l.delegateType || h, sr.test(w + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (e.ownerDocument || r) && p.push(c.defaultView || c.parentWindow || n) } for (b = 0;
                    (s = p[b++]) && !u.isPropagationStopped();) u.type = b > 1 ? w : l.bindType || h, a = (i._data(s, "events") || {})[u.type] && i._data(s, "handle"), a && a.apply(s, f), a = v && s[v], a && i.acceptData(s) && a.apply && a.apply(s, f) === !1 && u.preventDefault(); if (u.type = h, !o && !u.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), f) === !1) && i.acceptData(e) && v && e[h] && !i.isWindow(e)) { c = e[v];
                    c && (e[v] = null);
                    i.event.triggered = h; try { e[h]() } catch (d) {} i.event.triggered = t;
                    c && (e[v] = c) } return u.result } }, dispatch: function(n) { n = i.event.fix(n); var o, e, r, u, s, h = [],
                c = l.call(arguments),
                a = (i._data(this, "events") || {})[n.type] || [],
                f = i.event.special[n.type] || {}; if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) { for (h = i.event.handlers.call(this, n, a), o = 0;
                    (u = h[o++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = u.elem, s = 0;
                        (r = u.handlers[s++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(r.namespace)) && (n.handleObj = r, n.data = r.data, e = ((i.event.special[r.origType] || {}).handle || r.handler).apply(u.elem, c), e !== t && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation())); return f.postDispatch && f.postDispatch.call(this, n), n.result } }, handlers: function(n, r) { var e, o, f, s, c = [],
                h = r.delegateCount,
                u = n.target; if (h && u.nodeType && (!n.button || "click" !== n.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== n.type)) { for (f = [], s = 0; h > s; s++) o = r[s], e = o.selector + " ", f[e] === t && (f[e] = o.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [u]).length), f[e] && f.push(o);
                        f.length && c.push({ elem: u, handlers: f }) } return r.length > h && c.push({ elem: this, handlers: r.slice(h) }), c }, fix: function(n) { if (n[i.expando]) return n; var e, o, s, u = n.type,
                f = n,
                t = this.fixHooks[u]; for (t || (this.fixHooks[u] = t = ee.test(u) ? this.mouseHooks : fe.test(u) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o]; return n.target || (n.target = f.srcElement || r), 3 === n.target.nodeType && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(n, t) { return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(n, i) { var u, o, f, e = i.button,
                    s = i.fromElement; return null == n.pageX && null != i.clientX && (o = n.target.ownerDocument || r, f = o.documentElement, u = o.body, n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0), n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)), !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), n.which || e === t || (n.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0), n } }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== cr() && this.focus) try { return this.focus(), !1 } catch (n) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === cr() && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, click: { trigger: function() { return i.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t }, _default: function(n) { return i.nodeName(n.target, "a") } }, beforeunload: { postDispatch: function(n) { n.result !== t && (n.originalEvent.returnValue = n.result) } } }, simulate: function(n, t, r, u) { var f = i.extend(new i.Event, r, { type: n, isSimulated: !0, originalEvent: {} });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault() } };
    i.removeEvent = r.removeEventListener ? function(n, t, i) { n.removeEventListener && n.removeEventListener(t, i, !1) } : function(n, t, i) { var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i)) };
    i.Event = function(n, r) { return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ct : g) : this.type = n, r && i.extend(this, r), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0, t) : new i.Event(n, r) };
    i.Event.prototype = { isDefaultPrevented: g, isPropagationStopped: g, isImmediatePropagationStopped: g, preventDefault: function() { var n = this.originalEvent;
            this.isDefaultPrevented = ct;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1) }, stopPropagation: function() { var n = this.originalEvent;
            this.isPropagationStopped = ct;
            n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0) }, stopImmediatePropagation: function() { this.isImmediatePropagationStopped = ct;
            this.stopPropagation() } };
    i.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(n, t) { i.event.special[n] = { delegateType: t, bindType: t, handle: function(n) { var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj; return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u } } });
    i.support.submitBubbles || (i.event.special.submit = { setup: function() { return i.nodeName(this, "form") ? !1 : (i.event.add(this, "click._submit keypress._submit", function(n) { var u = n.target,
                    r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !i._data(r, "submitBubbles") && (i.event.add(r, "submit._submit", function(n) { n._submit_bubble = !0 }), i._data(r, "submitBubbles", !0)) }), t) }, postDispatch: function(n) { n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0)) }, teardown: function() { return i.nodeName(this, "form") ? !1 : (i.event.remove(this, "._submit"), t) } });
    i.support.changeBubbles || (i.event.special.change = { setup: function() { return ui.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) { "checked" === n.originalEvent.propertyName && (this._just_changed = !0) }), i.event.add(this, "click._change", function(n) { this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0) })), !1) : (i.event.add(this, "beforeactivate._change", function(n) { var t = n.target;
                ui.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {!this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0) }), i._data(t, "changeBubbles", !0)) }), t) }, handle: function(n) { var i = n.target; return this !== i || n.isSimulated || n.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? n.handleObj.handler.apply(this, arguments) : t }, teardown: function() { return i.event.remove(this, "._change"), !ui.test(this.nodeName) } });
    i.support.focusinBubbles || i.each({ focus: "focusin", blur: "focusout" }, function(n, t) { var u = 0,
            f = function(n) { i.event.simulate(t, n.target, i.event.fix(n), !0) };
        i.event.special[t] = { setup: function() { 0 == u++ && r.addEventListener(n, f, !0) }, teardown: function() { 0 == --u && r.removeEventListener(n, f, !0) } } });
    i.fn.extend({ on: function(n, r, u, f, e) { var s, o; if ("object" == typeof n) { "string" != typeof r && (u = u || r, r = t); for (s in n) this.on(s, r, u, n[s], e); return this } if (null == u && null == f ? (f = r, u = r = t) : null == f && ("string" == typeof r ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = g;
            else if (!f) return this; return 1 === e && (o = f, f = function(n) { return i().off(n), o.apply(this, arguments) }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function() { i.event.add(this, n, f, u, r) }) }, one: function(n, t, i, r) { return this.on(n, t, i, r, 1) }, off: function(n, r, u) { var f, e; if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this; if ("object" == typeof n) { for (e in n) this.off(e, r, n[e]); return this } return (r === !1 || "function" == typeof r) && (u = r, r = t), u === !1 && (u = g), this.each(function() { i.event.remove(this, n, u, r) }) }, trigger: function(n, t) { return this.each(function() { i.event.trigger(n, t, this) }) }, triggerHandler: function(n, r) { var u = this[0]; return u ? i.event.trigger(n, r, u, !0) : t } }); var oe = /^.[^:#\[\.,]*$/,
        se = /^(?:parents|prev(?:Until|All))/,
        lr = i.expr.match.needsContext,
        he = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({ find: function(n) { var t, r = [],
                u = this,
                f = u.length; if ("string" != typeof n) return this.pushStack(i(n).filter(function() { for (t = 0; f > t; t++)
                    if (i.contains(u[t], this)) return !0 })); for (t = 0; f > t; t++) i.find(n, u[t], r); return r = this.pushStack(f > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r }, has: function(n) { var t, r = i(n, this),
                u = r.length; return this.filter(function() { for (t = 0; u > t; t++)
                    if (i.contains(this, r[t])) return !0 }) }, not: function(n) { return this.pushStack(fi(this, n || [], !0)) }, filter: function(n) { return this.pushStack(fi(this, n || [], !1)) }, is: function(n) { return !!fi(this, "string" == typeof n && lr.test(n) ? i(n) : n || [], !1).length }, closest: function(n, t) { for (var r, f = 0, o = this.length, u = [], e = lr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (11 > r.nodeType && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) { r = u.push(r); break } return this.pushStack(u.length > 1 ? i.unique(u) : u) }, index: function(n) { return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(n, t) { var r = "string" == typeof n ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                u = i.merge(this.get(), r); return this.pushStack(i.unique(u)) }, addBack: function(n) { return this.add(null == n ? this.prevObject : this.prevObject.filter(n)) } });
    i.each({ parent: function(n) { var t = n.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(n) { return i.dir(n, "parentNode") }, parentsUntil: function(n, t, r) { return i.dir(n, "parentNode", r) }, next: function(n) { return ar(n, "nextSibling") }, prev: function(n) { return ar(n, "previousSibling") }, nextAll: function(n) { return i.dir(n, "nextSibling") }, prevAll: function(n) { return i.dir(n, "previousSibling") }, nextUntil: function(n, t, r) { return i.dir(n, "nextSibling", r) }, prevUntil: function(n, t, r) { return i.dir(n, "previousSibling", r) }, siblings: function(n) { return i.sibling((n.parentNode || {}).firstChild, n) }, children: function(n) { return i.sibling(n.firstChild) }, contents: function(n) { return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes) } }, function(n, t) { i.fn[n] = function(r, u) { var f = i.map(this, t, r); return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (he[n] || (f = i.unique(f)), se.test(n) && (f = f.reverse())), this.pushStack(f) } });
    i.extend({ filter: function(n, t, r) { var u = t[0]; return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) { return 1 === n.nodeType })) }, dir: function(n, r, u) { for (var e = [], f = n[r]; f && 9 !== f.nodeType && (u === t || 1 !== f.nodeType || !i(f).is(u));) 1 === f.nodeType && e.push(f), f = f[r]; return e }, sibling: function(n, t) { for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n); return i } }); var yr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ce = / jQuery\d+="(?:null|\d+)"/g,
        pr = RegExp("<(?:" + yr + ")[\\s/>]", "i"),
        ei = /^\s+/,
        wr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        br = /<([\w:]+)/,
        kr = /<tbody/i,
        le = /<|&#?\w+;/,
        ae = /<(?:script|style|link)/i,
        oi = /^(?:checkbox|radio)$/i,
        ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dr = /^$|\/(?:java|ecma)script/i,
        ye = /^true\/(.*)/,
        pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        e = { option: [1, "<select multiple='multiple'>", "<\/select>"], legend: [1, "<fieldset>", "<\/fieldset>"], area: [1, "<map>", "<\/map>"], param: [1, "<object>", "<\/object>"], thead: [1, "<table>", "<\/table>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"], td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"], _default: i.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"] },
        we = vr(r),
        si = we.appendChild(r.createElement("div"));
    e.optgroup = e.option;
    e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
    e.th = e.td;
    i.fn.extend({ text: function(n) { return i.access(this, function(n) { return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n)) }, null, n, arguments.length) }, append: function() { return this.domManip(arguments, function(n) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = gr(this, n);
                    t.appendChild(n) } }) }, prepend: function() { return this.domManip(arguments, function(n) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = gr(this, n);
                    t.insertBefore(n, t.firstChild) } }) }, before: function() { return this.domManip(arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this) }) }, after: function() { return this.domManip(arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this.nextSibling) }) }, remove: function(n, t) { for (var r, e = n ? i.filter(n, this) : this, f = 0; null != (r = e[f]); f++) t || 1 !== r.nodeType || i.cleanData(u(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && hi(u(r, "script")), r.parentNode.removeChild(r)); return this }, empty: function() { for (var n, t = 0; null != (n = this[t]); t++) { for (1 === n.nodeType && i.cleanData(u(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0) } return this }, clone: function(n, t) { return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() { return i.clone(this, n, t) }) }, html: function(n) { return i.access(this, function(n) { var r = this[0] || {},
                    f = 0,
                    o = this.length; if (n === t) return 1 === r.nodeType ? r.innerHTML.replace(ce, "") : t; if (!("string" != typeof n || ae.test(n) || !i.support.htmlSerialize && pr.test(n) || !i.support.leadingWhitespace && ei.test(n) || e[(br.exec(n) || ["", ""])[1].toLowerCase()])) { n = n.replace(wr, "<$1><\/$2>"); try { for (; o > f; f++) r = this[f] || {}, 1 === r.nodeType && (i.cleanData(u(r, !1)), r.innerHTML = n);
                        r = 0 } catch (s) {} } r && this.empty().append(n) }, null, n, arguments.length) }, replaceWith: function() { var t = i.map(this, function(n) { return [n.nextSibling, n.parentNode] }),
                n = 0; return this.domManip(arguments, function(r) { var u = t[n++],
                    f = t[n++];
                f && (u && u.parentNode !== f && (u = this.nextSibling), i(this).remove(), f.insertBefore(r, u)) }, !0), n ? this : this.remove() }, detach: function(n) { return this.remove(n, !0) }, domManip: function(n, t, r) { n = di.apply([], n); var h, f, c, o, v, s, e = 0,
                l = this.length,
                p = this,
                w = l - 1,
                a = n[0],
                y = i.isFunction(a); if (y || !(1 >= l || "string" != typeof a || i.support.checkClone) && ve.test(a)) return this.each(function(i) { var u = p.eq(i);
                y && (n[0] = a.call(this, i, u.html()));
                u.domManip(n, t, r) }); if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, !r && this), h = s.firstChild, 1 === s.childNodes.length && (s = h), h)) { for (o = i.map(u(s, "script"), nu), c = o.length; l > e; e++) f = s, e !== w && (f = i.clone(f, !0, !0), c && i.merge(o, u(f, "script"))), t.call(this[e], f, e); if (c)
                    for (v = o[o.length - 1].ownerDocument, i.map(o, tu), e = 0; c > e; e++) f = o[e], dr.test(f.type || "") && !i._data(f, "globalEval") && i.contains(v, f) && (f.src ? i._evalUrl(f.src) : i.globalEval((f.text || f.textContent || f.innerHTML || "").replace(pe, "")));
                s = h = null } return this } });
    i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(n, t) { i.fn[n] = function(n) { for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), kt.apply(f, u.get()); return this.pushStack(f) } });
    i.extend({ clone: function(n, t, r) { var f, h, o, e, s, c = i.contains(n.ownerDocument, n); if (i.support.html5Clone || i.isXMLDoc(n) || !pr.test("<" + n.nodeName + ">") ? o = n.cloneNode(!0) : (si.innerHTML = n.outerHTML, si.removeChild(o = si.firstChild)), !(i.support.noCloneEvent && i.support.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = u(o), s = u(n), e = 0; null != (h = s[e]); ++e) f[e] && be(h, f[e]); if (t)
                if (r)
                    for (s = s || u(n), f = f || u(o), e = 0; null != (h = s[e]); e++) iu(h, f[e]);
                else iu(n, o); return f = u(o, "script"), f.length > 0 && hi(f, !c && u(n, "script")), f = s = h = null, o }, buildFragment: function(n, t, r, f) { for (var h, o, w, s, y, p, l, b = n.length, a = vr(t), c = [], v = 0; b > v; v++)
                if (o = n[v], o || 0 === o)
                    if ("object" === i.type(o)) i.merge(c, o.nodeType ? [o] : o);
                    else if (le.test(o)) { for (s = s || a.appendChild(t.createElement("div")), y = (br.exec(o) || ["", ""])[1].toLowerCase(), l = e[y] || e._default, s.innerHTML = l[1] + o.replace(wr, "<$1><\/$2>") + l[2], h = l[0]; h--;) s = s.lastChild; if (!i.support.leadingWhitespace && ei.test(o) && c.push(t.createTextNode(ei.exec(o)[0])), !i.support.tbody)
                    for (o = "table" !== y || kr.test(o) ? "<table>" !== l[1] || kr.test(o) ? 0 : s : s.firstChild, h = o && o.childNodes.length; h--;) i.nodeName(p = o.childNodes[h], "tbody") && !p.childNodes.length && o.removeChild(p); for (i.merge(c, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = a.lastChild } else c.push(t.createTextNode(o)); for (s && a.removeChild(s), i.support.appendChecked || i.grep(u(c, "input"), ke), v = 0; o = c[v++];)
                if ((!f || -1 === i.inArray(o, f)) && (w = i.contains(o.ownerDocument, o), s = u(a.appendChild(o), "script"), w && hi(s), r))
                    for (h = 0; o = s[h++];) dr.test(o.type || "") && r.push(o); return s = null, a }, cleanData: function(n, t) { for (var r, f, u, e, c = 0, s = i.expando, h = i.cache, l = i.support.deleteExpando, a = i.event.special; null != (r = n[c]); c++)
                if ((t || i.acceptData(r)) && (u = r[s], e = u && h[u])) { if (e.events)
                        for (f in e.events) a[f] ? i.event.remove(r, f) : i.removeEvent(r, f, e.handle);
                    h[u] && (delete h[u], l ? delete r[s] : typeof r.removeAttribute !== o ? r.removeAttribute(s) : r[s] = null, b.push(u)) } }, _evalUrl: function(n) { return i.ajax({ url: n, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) } });
    i.fn.extend({ wrapAll: function(n) { if (i.isFunction(n)) return this.each(function(t) { i(this).wrapAll(n.call(this, t)) }); if (this[0]) { var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() { for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild; return n }).append(this) } return this }, wrapInner: function(n) { return i.isFunction(n) ? this.each(function(t) { i(this).wrapInner(n.call(this, t)) }) : this.each(function() { var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n) }) }, wrap: function(n) { var t = i.isFunction(n); return this.each(function(r) { i(this).wrapAll(t ? n.call(this, r) : n) }) }, unwrap: function() { return this.parent().each(function() { i.nodeName(this, "body") || i(this).replaceWith(this.childNodes) }).end() } }); var rt, v, y, ci = /alpha\([^)]*\)/i,
        de = /opacity\s*=\s*([^)]*)/,
        ge = /^(top|right|bottom|left)$/,
        no = /^(none|table(?!-c[ea]).+)/,
        ru = /^margin/,
        to = RegExp("^(" + st + ")(.*)$", "i"),
        lt = RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"),
        io = RegExp("^([+-])=(" + st + ")", "i"),
        uu = { BODY: "block" },
        ro = { position: "absolute", visibility: "hidden", display: "block" },
        fu = { letterSpacing: 0, fontWeight: 400 },
        p = ["Top", "Right", "Bottom", "Left"],
        eu = ["Webkit", "O", "Moz", "ms"];
    i.fn.extend({ css: function(n, r) { return i.access(this, function(n, r, u) { var e, o, s = {},
                    f = 0; if (i.isArray(r)) { for (o = v(n), e = r.length; e > f; f++) s[r[f]] = i.css(n, r[f], !1, o); return s } return u !== t ? i.style(n, r, u) : i.css(n, r) }, n, r, arguments.length > 1) }, show: function() { return su(this, !0) }, hide: function() { return su(this) }, toggle: function(n) { return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() { ut(this) ? i(this).show() : i(this).hide() }) } });
    i.extend({ cssHooks: { opacity: { get: function(n, t) { if (t) { var i = y(n, "opacity"); return "" === i ? "1" : i } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: i.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function(n, r, u, f) { if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) { var o, s, e, h = i.camelCase(r),
                    c = n.style; if (r = i.cssProps[h] || (i.cssProps[h] = ou(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u === t) return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r]; if (s = typeof u, "string" === s && (o = io.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), !(null == u || "number" === s && isNaN(u) || ("number" !== s || i.cssNumber[h] || (u += "px"), i.support.clearCloneStyle || "" !== u || 0 !== r.indexOf("background") || (c[r] = "inherit"), e && "set" in e && (u = e.set(n, u, f)) === t))) try { c[r] = u } catch (l) {} } }, css: function(n, r, u, f) { var h, e, o, s = i.camelCase(r); return r = i.cssProps[s] || (i.cssProps[s] = ou(n.style, s)), o = i.cssHooks[r] || i.cssHooks[s], o && "get" in o && (e = o.get(n, !0, u)), e === t && (e = y(n, r, f)), "normal" === e && r in fu && (e = fu[r]), "" === u || u ? (h = parseFloat(e), u === !0 || i.isNumeric(h) ? h || 0 : e) : e } });
    n.getComputedStyle ? (v = function(t) { return n.getComputedStyle(t, null) }, y = function(n, r, u) { var s, h, c, o = u || v(n),
            e = o ? o.getPropertyValue(r) || o[r] : t,
            f = n.style; return o && ("" !== e || i.contains(n.ownerDocument, n) || (e = i.style(n, r)), lt.test(e) && ru.test(r) && (s = f.width, h = f.minWidth, c = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = o.width, f.width = s, f.minWidth = h, f.maxWidth = c)), e }) : r.documentElement.currentStyle && (v = function(n) { return n.currentStyle }, y = function(n, i, r) { var s, e, o, h = r || v(n),
            u = h ? h[i] : t,
            f = n.style; return null == u && f && f[i] && (u = f[i]), lt.test(u) && !ge.test(i) && (s = f.left, e = n.runtimeStyle, o = e && e.left, o && (e.left = n.currentStyle.left), f.left = "fontSize" === i ? "1em" : u, u = f.pixelLeft + "px", f.left = s, o && (e.left = o)), "" === u ? "auto" : u });
    i.each(["height", "width"], function(n, r) { i.cssHooks[r] = { get: function(n, u, f) { return u ? 0 === n.offsetWidth && no.test(i.css(n, "display")) ? i.swap(n, ro, function() { return lu(n, r, f) }) : lu(n, r, f) : t }, set: function(n, t, u) { var f = u && v(n); return hu(n, t, u ? cu(n, r, u, i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f), f) : 0) } } });
    i.support.opacity || (i.cssHooks.opacity = { get: function(n, t) { return de.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function(n, t) { var r = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                f = u && u.filter || r.filter || "";
            r.zoom = 1;
            (t >= 1 || "" === t) && "" === i.trim(f.replace(ci, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || u && !u.filter) || (r.filter = ci.test(f) ? f.replace(ci, e) : f + " " + e) } });
    i(function() { i.support.reliableMarginRight || (i.cssHooks.marginRight = { get: function(n, r) { return r ? i.swap(n, { display: "inline-block" }, y, [n, "marginRight"]) : t } });!i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, r) { i.cssHooks[r] = { get: function(n, u) { return u ? (u = y(n, r), lt.test(u) ? i(n).position()[r] + "px" : u) : t } } }) });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) { return 0 >= n.offsetWidth && 0 >= n.offsetHeight || !i.support.reliableHiddenOffsets && "none" === (n.style && n.style.display || i.css(n, "display")) }, i.expr.filters.visible = function(n) { return !i.expr.filters.hidden(n) });
    i.each({ margin: "", padding: "", border: "Width" }, function(n, t) { i.cssHooks[n + t] = { expand: function(i) { for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + p[r] + t] = u[r] || u[r - 2] || u[0]; return f } };
        ru.test(n) || (i.cssHooks[n + t].set = hu) }); var uo = /%20/g,
        fo = /\[\]$/,
        yu = /\r?\n/g,
        eo = /^(?:submit|button|image|reset|file)$/i,
        oo = /^(?:input|select|textarea|keygen)/i;
    i.fn.extend({ serialize: function() { return i.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var n = i.prop(this, "elements"); return n ? i.makeArray(n) : this }).filter(function() { var n = this.type; return this.name && !i(this).is(":disabled") && oo.test(this.nodeName) && !eo.test(n) && (this.checked || !oi.test(n)) }).map(function(n, t) { var r = i(this).val(); return null == r ? null : i.isArray(r) ? i.map(r, function(n) { return { name: t.name, value: n.replace(yu, "\r\n") } }) : { name: t.name, value: r.replace(yu, "\r\n") } }).get() } });
    i.param = function(n, r) { var u, f = [],
            e = function(n, t) { t = i.isFunction(t) ? t() : null == t ? "" : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t) }; if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() { e(this.name, this.value) });
        else
            for (u in n) li(u, n[u], r, e); return f.join("&").replace(uo, "+") };
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) { i.fn[t] = function(n, i) { return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t) } });
    i.fn.extend({ hover: function(n, t) { return this.mouseenter(n).mouseleave(t || n) }, bind: function(n, t, i) { return this.on(n, null, t, i) }, unbind: function(n, t) { return this.off(n, null, t) }, delegate: function(n, t, i, r) { return this.on(t, n, i, r) }, undelegate: function(n, t, i) { return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i) } }); var w, c, ai = i.now(),
        vi = /\?/,
        so = /#.*$/,
        pu = /([?&])_=[^&]*/,
        ho = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        co = /^(?:GET|HEAD)$/,
        lo = /^\/\//,
        wu = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        bu = i.fn.load,
        ku = {},
        yi = {},
        du = "*/".concat("*"); try { c = hf.href } catch (go) { c = r.createElement("a");
        c.href = "";
        c = c.href } w = wu.exec(c.toLowerCase()) || [];
    i.fn.load = function(n, r, u) { if ("string" != typeof n && bu) return bu.apply(this, arguments); var f, s, h, e = this,
            o = n.indexOf(" "); return o >= 0 && (f = n.slice(o, n.length), n = n.slice(0, o)), i.isFunction(r) ? (u = r, r = t) : r && "object" == typeof r && (h = "POST"), e.length > 0 && i.ajax({ url: n, type: h, dataType: "html", data: r }).done(function(n) { s = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n) }).complete(u && function(n, t) { e.each(u, s || [n.responseText, t, n]) }), this };
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) { i.fn[t] = function(n) { return this.on(t, n) } });
    i.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: c, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(w[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": du, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": i.parseJSON, "text xml": i.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(n, t) { return t ? pi(pi(n, i.ajaxSettings), t) : pi(i.ajaxSettings, n) }, ajaxPrefilter: gu(ku), ajaxTransport: gu(yi), ajax: function(n, r) {
            function k(n, r, s, c) { var a, rt, k, p, w, l = r;
                2 !== o && (o = 2, g && clearTimeout(g), y = t, d = c || "", f.readyState = n > 0 ? 4 : 0, a = n >= 200 && 300 > n || 304 === n, s && (p = ao(u, f, s)), p = vo(u, p, f, a), a ? (u.ifModified && (w = f.getResponseHeader("Last-Modified"), w && (i.lastModified[e] = w), w = f.getResponseHeader("etag"), w && (i.etag[e] = w)), 204 === n || "HEAD" === u.type ? l = "nocontent" : 304 === n ? l = "notmodified" : (l = p.state, rt = p.data, k = p.error, a = !k)) : (k = l, (n || !l) && (l = "error", 0 > n && (n = 0))), f.status = n, f.statusText = (r || l) + "", a ? tt.resolveWith(h, [rt, l, f]) : tt.rejectWith(h, [f, l, k]), f.statusCode(b), b = t, v && nt.trigger(a ? "ajaxSuccess" : "ajaxError", [f, u, a ? rt : k]), it.fireWith(h, [f, l]), v && (nt.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop"))) } "object" == typeof n && (r = n, n = t);
            r = r || {}; var l, a, e, d, g, v, y, p, u = i.ajaxSetup({}, r),
                h = u.context || u,
                nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                b = u.statusCode || {},
                rt = {},
                ut = {},
                o = 0,
                ft = "canceled",
                f = { readyState: 0, getResponseHeader: function(n) { var t; if (2 === o) { if (!p)
                                for (p = {}; t = ho.exec(d);) p[t[1].toLowerCase()] = t[2];
                            t = p[n.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function() { return 2 === o ? d : null }, setRequestHeader: function(n, t) { var i = n.toLowerCase(); return o || (n = ut[i] = ut[i] || n, rt[n] = t), this }, overrideMimeType: function(n) { return o || (u.mimeType = n), this }, statusCode: function(n) { var t; if (n)
                            if (2 > o)
                                for (t in n) b[t] = [b[t], n[t]];
                            else f.always(n[f.status]); return this }, abort: function(n) { var t = n || ft; return y && y.abort(t), k(0, t), this } }; if (tt.promise(f).complete = it.add, f.success = f.done, f.error = f.fail, u.url = ((n || u.url || c) + "").replace(so, "").replace(lo, w[1] + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [""], null == u.crossDomain && (l = wu.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === w[1] && l[2] === w[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (w[3] || ("http:" === w[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), nf(ku, u, r, f), 2 === o) return f;
            v = u.global;
            v && 0 == i.active++ && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !co.test(u.type);
            e = u.url;
            u.hasContent || (u.data && (e = u.url += (vi.test(e) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = pu.test(e) ? e.replace(pu, "$1_=" + ai++) : e + (vi.test(e) ? "&" : "?") + "_=" + ai++));
            u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]), i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + du + "; q=0.01" : "") : u.accepts["*"]); for (a in u.headers) f.setRequestHeader(a, u.headers[a]); if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || 2 === o)) return f.abort();
            ft = "abort"; for (a in { success: 1, error: 1, complete: 1 }) f[a](u[a]); if (y = nf(yi, u, r, f)) { f.readyState = 1;
                v && nt.trigger("ajaxSend", [f, u]);
                u.async && u.timeout > 0 && (g = setTimeout(function() { f.abort("timeout") }, u.timeout)); try { o = 1;
                    y.send(rt, k) } catch (et) { if (!(2 > o)) throw et;
                    k(-1, et) } } else k(-1, "No Transport"); return f }, getJSON: function(n, t, r) { return i.get(n, t, r, "json") }, getScript: function(n, r) { return i.get(n, t, r, "script") } });
    i.each(["get", "post"], function(n, r) { i[r] = function(n, u, f, e) { return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({ url: n, type: r, dataType: e, data: u, success: f }) } });
    i.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(n) { return i.globalEval(n), n } } });
    i.ajaxPrefilter("script", function(n) { n.cache === t && (n.cache = !1);
        n.crossDomain && (n.type = "GET", n.global = !1) });
    i.ajaxTransport("script", function(n) { if (n.crossDomain) { var u, f = r.head || i("head")[0] || r.documentElement; return { send: function(t, i) { u = r.createElement("script");
                    u.async = !0;
                    n.scriptCharset && (u.charset = n.scriptCharset);
                    u.src = n.url;
                    u.onload = u.onreadystatechange = function(n, t) {
                        (t || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, u.parentNode && u.parentNode.removeChild(u), u = null, t || i(200, "success")) };
                    f.insertBefore(u, f.firstChild) }, abort: function() { u && u.onload(t, !0) } } } });
    wi = [];
    at = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var n = wi.pop() || i.expando + "_" + ai++; return this[n] = !0, n } });
    i.ajaxPrefilter("json jsonp", function(r, u, f) { var e, s, o, h = r.jsonp !== !1 && (at.test(r.url) ? "url" : "string" == typeof r.data && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && at.test(r.data) && "data"); return h || "jsonp" === r.dataTypes[0] ? (e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, h ? r[h] = r[h].replace(at, "$1" + e) : r.jsonp !== !1 && (r.url += (vi.test(r.url) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function() { return o || i.error(e + " was not called"), o[0] }, r.dataTypes[0] = "json", s = n[e], n[e] = function() { o = arguments }, f.always(function() { n[e] = s;
            r[e] && (r.jsonpCallback = u.jsonpCallback, wi.push(e));
            o && i.isFunction(s) && s(o[0]);
            o = s = t }), "script") : t });
    tf = 0;
    vt = n.ActiveXObject && function() { var n; for (n in nt) nt[n](t, !0) };
    i.ajaxSettings.xhr = n.ActiveXObject ? function() { return !this.isLocal && rf() || yo() } : rf;
    tt = i.ajaxSettings.xhr();
    i.support.cors = !!tt && "withCredentials" in tt;
    tt = i.support.ajax = !!tt;
    tt && i.ajaxTransport(function(r) { if (!r.crossDomain || i.support.cors) { var u; return { send: function(f, e) { var h, s, o = r.xhr(); if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
                        for (s in r.xhrFields) o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
                    r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest"); try { for (s in f) o.setRequestHeader(s, f[s]) } catch (c) {} o.send(r.hasContent && r.data || null);
                    u = function(n, f) { var s, a, l, c; try { if (u && (f || 4 === o.readyState))
                                if (u = t, h && (o.onreadystatechange = i.noop, vt && delete nt[h]), f) 4 !== o.readyState && o.abort();
                                else { c = {};
                                    s = o.status;
                                    a = o.getAllResponseHeaders(); "string" == typeof o.responseText && (c.text = o.responseText); try { l = o.statusText } catch (y) { l = "" } s || !r.isLocal || r.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404 } } catch (v) { f || e(-1, v) } c && e(s, l, c, a) };
                    r.async ? 4 === o.readyState ? setTimeout(u) : (h = ++tf, vt && (nt || (nt = {}, i(n).unload(vt)), nt[h] = u), o.onreadystatechange = u) : u() }, abort: function() { u && u(t, !0) } } } }); var it, yt, po = /^(?:toggle|show|hide)$/,
        uf = RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"),
        wo = /queueHooks$/,
        pt = [ko],
        ft = { "*": [function(n, t) { var f = this.createTween(n, t),
                    s = f.cur(),
                    r = uf.exec(t),
                    e = r && r[3] || (i.cssNumber[n] ? "" : "px"),
                    u = (i.cssNumber[n] || "px" !== e && +s) && uf.exec(i.css(f.elem, n)),
                    o = 1,
                    h = 20; if (u && u[3] !== e) { e = e || u[3];
                    r = r || [];
                    u = +s || 1;
                    do o = o || ".5", u /= o, i.style(f.elem, n, u + e); while (o !== (o = f.cur() / s) && 1 !== o && --h) } return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]), f }] };
    i.Animation = i.extend( of , { tweener: function(n, t) { i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" "); for (var r, u = 0, f = n.length; f > u; u++) r = n[u], ft[r] = ft[r] || [], ft[r].unshift(t) }, prefilter: function(n, t) { t ? pt.unshift(n) : pt.push(n) } });
    i.Tween = f;
    f.prototype = { constructor: f, init: function(n, t, r, u, f, e) { this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px") }, cur: function() { var n = f.propHooks[this.prop]; return n && n.get ? n.get(this) : f.propHooks._default.get(this) }, run: function(n) { var r, t = f.propHooks[this.prop]; return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : f.propHooks._default.set(this), this } };
    f.prototype.init.prototype = f.prototype;
    f.propHooks = { _default: { get: function(n) { var t; return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop] }, set: function(n) { i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now } } };
    f.propHooks.scrollTop = f.propHooks.scrollLeft = { set: function(n) { n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now) } };
    i.each(["toggle", "show", "hide"], function(n, t) { var r = i.fn[t];
        i.fn[t] = function(n, i, u) { return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(wt(t, !0), n, i, u) } });
    i.fn.extend({ fadeTo: function(n, t, i, r) { return this.filter(ut).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r) }, animate: function(n, t, r, u) { var o = i.isEmptyObject(n),
                e = i.speed(t, r, u),
                f = function() { var t = of (this, i.extend({}, n), e);
                    (o || i._data(this, "finish")) && t.stop(!0) }; return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f) }, stop: function(n, r, u) { var f = function(n) { var t = n.stop;
                delete n.stop;
                t(u) }; return "string" != typeof n && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function() { var o = !0,
                    t = null != n && n + "queueHooks",
                    e = i.timers,
                    r = i._data(this); if (t) r[t] && r[t].stop && f(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && wo.test(t) && f(r[t]); for (t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(u), o = !1, e.splice(t, 1));
                (o || !u) && i.dequeue(this, n) }) }, finish: function(n) { return n !== !1 && (n = n || "fx"), this.each(function() { var t, f = i._data(this),
                    r = f[n + "queue"],
                    e = f[n + "queueHooks"],
                    u = i.timers,
                    o = r ? r.length : 0; for (f.finish = !0, i.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1)); for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish }) } });
    i.each({ slideDown: wt("show"), slideUp: wt("hide"), slideToggle: wt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(n, t) { i.fn[n] = function(n, i, r) { return this.animate(t, n, i, r) } });
    i.speed = function(n, t, r) { var u = n && "object" == typeof n ? i.extend({}, n) : { complete: r || !r && t || i.isFunction(n) && n, duration: n, easing: r && t || t && !i.isFunction(t) && t }; return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() { i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue) }, u };
    i.easing = { linear: function(n) { return n }, swing: function(n) { return .5 - Math.cos(n * Math.PI) / 2 } };
    i.timers = [];
    i.fx = f.prototype.init;
    i.fx.tick = function() { var u, n = i.timers,
            r = 0; for (it = i.now(); n.length > r; r++) u = n[r], u() || n[r] !== u || n.splice(r--, 1);
        n.length || i.fx.stop();
        it = t };
    i.fx.timer = function(n) { n() && i.timers.push(n) && i.fx.start() };
    i.fx.interval = 13;
    i.fx.start = function() { yt || (yt = setInterval(i.fx.tick, i.fx.interval)) };
    i.fx.stop = function() { clearInterval(yt);
        yt = null };
    i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    i.fx.step = {};
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) { return i.grep(i.timers, function(t) { return n === t.elem }).length });
    i.fn.offset = function(n) { if (arguments.length) return n === t ? this : this.each(function(t) { i.offset.setOffset(this, n, t) }); var r, e, f = { top: 0, left: 0 },
            u = this[0],
            s = u && u.ownerDocument; if (s) return r = s.documentElement, i.contains(r, u) ? (typeof u.getBoundingClientRect !== o && (f = u.getBoundingClientRect()), e = sf(s), { top: f.top + (e.pageYOffset || r.scrollTop) - (r.clientTop || 0), left: f.left + (e.pageXOffset || r.scrollLeft) - (r.clientLeft || 0) }) : f };
    i.offset = { setOffset: function(n, t, r) { var f = i.css(n, "position"); "static" === f && (n.style.position = "relative"); var e = i(n),
                o = e.offset(),
                l = i.css(n, "top"),
                a = i.css(n, "left"),
                v = ("absolute" === f || "fixed" === f) && i.inArray("auto", [l, a]) > -1,
                u = {},
                s = {},
                h, c;
            v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0);
            i.isFunction(t) && (t = t.call(n, r, o));
            null != t.top && (u.top = t.top - o.top + h);
            null != t.left && (u.left = t.left - o.left + c); "using" in t ? t.using.call(n, u) : e.css(u) } };
    i.fn.extend({ position: function() { if (this[0]) { var n, r, t = { top: 0, left: 0 },
                    u = this[0]; return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), { top: r.top - t.top - i.css(u, "marginTop", !0), left: r.left - t.left - i.css(u, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var n = this.offsetParent || ki; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent; return n || ki }) } });
    i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(n, r) { var u = /Y/.test(r);
        i.fn[n] = function(f) { return i.access(this, function(n, f, e) { var o = sf(n); return e === t ? o ? r in o ? o[r] : o.document.documentElement[f] : n[f] : (o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e, t) }, n, f, arguments.length, null) } });
    i.each({ Height: "height", Width: "width" }, function(n, r) { i.each({ padding: "inner" + n, content: r, "": "outer" + n }, function(u, f) { i.fn[f] = function(f, e) { var o = arguments.length && (u || "boolean" != typeof f),
                    s = u || (f === !0 || e === !0 ? "margin" : "border"); return i.access(this, function(r, u, f) { var e; return i.isWindow(r) ? r.document.documentElement["client" + n] : 9 === r.nodeType ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, s) : i.style(r, u, f, s) }, r, o ? f : t, o, null) } }) });
    i.fn.size = function() { return this.length };
    i.fn.andSelf = i.fn.addBack; "object" == typeof module && module && "object" == typeof module.exports ? module.exports = i : (n.jQuery = n.$ = i, "function" == typeof define && define.amd && define("jquery", [], function() { return i })) })(window),
function(n) { "function" == typeof define && define.amd ? define(["jquery"], n) : n(jQuery) }(function(n) {
    function b(n) { for (var t = n.css("visibility");
            "inherit" === t;) n = n.parent(), t = n.css("visibility"); return "hidden" !== t }

    function k(n) { for (var t, i; n.length && n[0] !== document;) { if (t = n.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(n.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            n = n.parent() } return 0 }

    function c() { this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._datepickerShowing = !1;
        this._inDialog = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" };
        this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 };
        n.extend(this._defaults, this.regional[""]);
        this.regional.en = n.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = n.extend(!0, {}, this.regional.en);
        this.dpDiv = l(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) }

    function l(t) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return t.on("mouseout", i, function() { n(this).removeClass("ui-state-hover"); - 1 !== this.className.indexOf("ui-datepicker-prev") && n(this).removeClass("ui-datepicker-prev-hover"); - 1 !== this.className.indexOf("ui-datepicker-next") && n(this).removeClass("ui-datepicker-next-hover") }).on("mouseover", i, a) }

    function a() { n.datepicker._isDisabledDatepicker(i.inline ? i.dpDiv.parent()[0] : i.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && n(this).addClass("ui-datepicker-next-hover")) }

    function u(t, i) { n.extend(t, i); for (var r in i) null == i[r] && (t[r] = i[r]); return t }

    function t(n) { return function() { var t = this.element.val();
            n.apply(this, arguments);
            this._refresh();
            t !== this.element.val() && this._trigger("change") } } var v, o, r, f, y, i, w;
    n.ui = n.ui || {};
    n.ui.version = "1.12.1";
    v = 0;
    o = Array.prototype.slice;
    n.cleanData = function(t) { return function(i) { for (var r, u, f = 0; null != (u = i[f]); f++) try { r = n._data(u, "events");
                r && r.remove && n(u).triggerHandler("remove") } catch (e) {} t(i) } }(n.cleanData);
    n.widget = function(t, i, r) { var f, u, o, h = {},
            e = t.split(".")[0],
            s; return t = t.split(".")[1], s = e + "-" + t, r || (r = i, i = n.Widget), n.isArray(r) && (r = n.extend.apply(null, [{}].concat(r))), n.expr[":"][s.toLowerCase()] = function(t) { return !!n.data(t, s) }, n[e] = n[e] || {}, f = n[e][t], u = n[e][t] = function(n, t) { return this._createWidget ? (arguments.length && this._createWidget(n, t), void 0) : new u(n, t) }, n.extend(u, f, { version: r.version, _proto: n.extend({}, r), _childConstructors: [] }), o = new i, o.options = n.widget.extend({}, o.options), n.each(r, function(t, r) { return n.isFunction(r) ? (h[t] = function() {
                function n() { return i.prototype[t].apply(this, arguments) }

                function u(n) { return i.prototype[t].apply(this, n) } return function() { var t, i = this._super,
                        f = this._superApply; return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t } }(), void 0) : (h[t] = r, void 0) }), u.prototype = n.widget.extend(o, { widgetEventPrefix: f ? o.widgetEventPrefix || t : t }, h, { constructor: u, namespace: e, widgetName: t, widgetFullName: s }), f ? (n.each(f._childConstructors, function(t, i) { var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto) }), delete f._childConstructors) : i._childConstructors.push(u), n.widget.bridge(t, u), u };
    n.widget.extend = function(t) { for (var i, r, f = o.call(arguments, 1), u = 0, e = f.length; e > u; u++)
            for (i in f[u]) r = f[u][i], f[u].hasOwnProperty(i) && void 0 !== r && (t[i] = n.isPlainObject(r) ? n.isPlainObject(t[i]) ? n.widget.extend({}, t[i], r) : n.widget.extend({}, r) : r); return t };
    n.widget.bridge = function(t, i) { var r = i.prototype.widgetFullName || t;
        n.fn[t] = function(u) { var s = "string" == typeof u,
                e = o.call(arguments, 1),
                f = this; return s ? this.length || "instance" !== u ? this.each(function() { var i, o = n.data(this, r); return "instance" === u ? (f = o, !1) : o ? n.isFunction(o[u]) && "_" !== u.charAt(0) ? (i = o[u].apply(o, e), i !== o && void 0 !== i ? (f = i && i.jquery ? f.pushStack(i.get()) : i, !1) : void 0) : n.error("no such method '" + u + "' for " + t + " widget instance") : n.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + u + "'") }) : f = void 0 : (e.length && (u = n.widget.extend.apply(null, [u].concat(e))), this.each(function() { var t = n.data(this, r);
                t ? (t.option(u || {}), t._init && t._init()) : n.data(this, r, new i(u, this)) })), f } };
    n.Widget = function() {};
    n.Widget._childConstructors = [];
    n.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: !1, create: null }, _createWidget: function(t, i) { i = n(i || this.defaultElement || this)[0];
            this.element = n(i);
            this.uuid = v++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = n();
            this.hoverable = n();
            this.focusable = n();
            this.classesElementLookup = {};
            i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(n) { n.target === i && this.destroy() } }), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
            this._create();
            this.options.disabled && this._setOptionDisabled(this.options.disabled);
            this._trigger("create", null, this._getCreateEventData());
            this._init() }, _getCreateOptions: function() { return {} }, _getCreateEventData: n.noop, _create: n.noop, _init: n.noop, destroy: function() { var t = this;
            this._destroy();
            n.each(this.classesElementLookup, function(n, i) { t._removeClass(i, n) });
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
            this.bindings.off(this.eventNamespace) }, _destroy: n.noop, widget: function() { return this.element }, option: function(t, i) { var r, u, f, e = t; if (0 === arguments.length) return n.widget.extend({}, this.options); if ("string" == typeof t)
                if (e = {}, r = t.split("."), t = r.shift(), r.length) { for (u = e[t] = n.widget.extend({}, this.options[t]), f = 0; r.length - 1 > f; f++) u[r[f]] = u[r[f]] || {}, u = u[r[f]]; if (t = r.pop(), 1 === arguments.length) return void 0 === u[t] ? null : u[t];
                    u[t] = i } else { if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    e[t] = i } return this._setOptions(e), this }, _setOptions: function(n) { var t; for (t in n) this._setOption(t, n[t]); return this }, _setOption: function(n, t) { return "classes" === n && this._setOptionClasses(t), this.options[n] = t, "disabled" === n && this._setOptionDisabled(t), this }, _setOptionClasses: function(t) { var i, u, r; for (i in t) r = this.classesElementLookup[i], t[i] !== this.options.classes[i] && r && r.length && (u = n(r.get()), this._removeClass(r, i), u.addClass(this._classes({ element: u, keys: i, classes: t, add: !0 }))) }, _setOptionDisabled: function(n) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!n);
            n && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) }, enable: function() { return this._setOptions({ disabled: !1 }) }, disable: function() { return this._setOptions({ disabled: !0 }) }, _classes: function(t) {
            function r(r, f) { for (var o, e = 0; r.length > e; e++) o = u.classesElementLookup[r[e]] || n(), o = t.add ? n(n.unique(o.get().concat(t.element.get()))) : n(o.not(t.element).get()), u.classesElementLookup[r[e]] = o, i.push(r[e]), f && t.classes[r[e]] && i.push(t.classes[r[e]]) } var i = [],
                u = this; return t = n.extend({ element: this.element, classes: this.options.classes || {} }, t), this._on(t.element, { remove: "_untrackClassesElement" }), t.keys && r(t.keys.match(/\S+/g) || [], !0), t.extra && r(t.extra.match(/\S+/g) || []), i.join(" ") }, _untrackClassesElement: function(t) { var i = this;
            n.each(i.classesElementLookup, function(r, u) {-1 !== n.inArray(t.target, u) && (i.classesElementLookup[r] = n(u.not(t.target).get())) }) }, _removeClass: function(n, t, i) { return this._toggleClass(n, t, i, !1) }, _addClass: function(n, t, i) { return this._toggleClass(n, t, i, !0) }, _toggleClass: function(n, t, i, r) { r = "boolean" == typeof r ? r : i; var u = "string" == typeof n || null === n,
                f = { extra: u ? t : i, keys: u ? n : t, element: u ? this.element : n, add: r }; return f.element.toggleClass(this._classes(f), r), this }, _on: function(t, i, r) { var f, u = this; "boolean" != typeof t && (r = i, i = t, t = !1);
            r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
            n.each(r, function(r, e) {
                function o() { if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? u[e] : e).apply(u, arguments) } "string" != typeof e && (o.guid = e.guid = e.guid || o.guid || n.guid++); var s = r.match(/^([\w:-]*)\s*(.*)$/),
                    h = s[1] + u.eventNamespace,
                    c = s[2];
                c ? f.on(h, c, o) : i.on(h, o) }) }, _off: function(t, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            t.off(i).off(i);
            this.bindings = n(this.bindings.not(t).get());
            this.focusable = n(this.focusable.not(t).get());
            this.hoverable = n(this.hoverable.not(t).get()) }, _delay: function(n, t) {
            function r() { return ("string" == typeof n ? i[n] : n).apply(i, arguments) } var i = this; return setTimeout(r, t || 0) }, _hoverable: function(t) { this.hoverable = this.hoverable.add(t);
            this._on(t, { mouseenter: function(t) { this._addClass(n(t.currentTarget), null, "ui-state-hover") }, mouseleave: function(t) { this._removeClass(n(t.currentTarget), null, "ui-state-hover") } }) }, _focusable: function(t) { this.focusable = this.focusable.add(t);
            this._on(t, { focusin: function(t) { this._addClass(n(t.currentTarget), null, "ui-state-focus") }, focusout: function(t) { this._removeClass(n(t.currentTarget), null, "ui-state-focus") } }) }, _trigger: function(t, i, r) { var u, f, e = this.options[t]; if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent)
                for (u in f) u in i || (i[u] = f[u]); return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented()) } };
    n.each({ show: "fadeIn", hide: "fadeOut" }, function(t, i) { n.Widget.prototype["_" + t] = function(r, u, f) { "string" == typeof u && (u = { effect: u }); var o, e = u ? u === !0 || "number" == typeof u ? i : u.effect || i : t;
            u = u || {}; "number" == typeof u && (u = { duration: u });
            o = !n.isEmptyObject(u);
            u.complete = f;
            u.delay && r.delay(u.delay);
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) { n(this)[t]();
                f && f.call(r[0]);
                i() }) } });
    n.widget,
        function() {
            function f(n, t, i) { return [parseFloat(n[0]) * (c.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (c.test(n[1]) ? i / 100 : 1)] }

            function i(t, i) { return parseInt(n.css(t, i), 10) || 0 }

            function l(t) { var i = t[0]; return 9 === i.nodeType ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } } : n.isWindow(i) ? { width: t.width(), height: t.height(), offset: { top: t.scrollTop(), left: t.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() } } var u, r = Math.max,
                t = Math.abs,
                e = /left|center|right/,
                o = /top|center|bottom/,
                s = /[\+\-]\d+(\.[\d]+)?%?/,
                h = /^\w+/,
                c = /%$/,
                a = n.fn.position;
            n.position = { scrollbarWidth: function() { if (void 0 !== u) return u; var r, i, t = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
                        f = t.children()[0]; return n("body").append(t), r = f.offsetWidth, t.css("overflow", "scroll"), i = f.offsetWidth, r === i && (i = t[0].clientWidth), t.remove(), u = r - i }, getScrollInfo: function(t) { var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        u = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                        f = "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight; return { width: f ? n.position.scrollbarWidth() : 0, height: u ? n.position.scrollbarWidth() : 0 } }, getWithinInfo: function(t) { var i = n(t || window),
                        r = n.isWindow(i[0]),
                        u = !!i[0] && 9 === i[0].nodeType,
                        f = !r && !u; return { element: i, isWindow: r, isDocument: u, offset: f ? n(t).offset() : { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight() } } };
            n.fn.position = function(u) { if (!u || !u.of) return a.apply(this, arguments);
                u = n.extend({}, u); var w, c, v, p, y, k, d = n(u.of),
                    nt = n.position.getWithinInfo(u.within),
                    tt = n.position.getScrollInfo(nt),
                    b = (u.collision || "flip").split(" "),
                    g = {}; return k = l(d), d[0].preventDefault && (u.at = "left top"), c = k.width, v = k.height, p = k.offset, y = n.extend({}, p), n.each(["my", "at"], function() { var t, i, n = (u[this] || "").split(" ");
                    1 === n.length && (n = e.test(n[0]) ? n.concat(["center"]) : o.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
                    n[0] = e.test(n[0]) ? n[0] : "center";
                    n[1] = o.test(n[1]) ? n[1] : "center";
                    t = s.exec(n[0]);
                    i = s.exec(n[1]);
                    g[this] = [t ? t[0] : 0, i ? i[0] : 0];
                    u[this] = [h.exec(n[0])[0], h.exec(n[1])[0]] }), 1 === b.length && (b[1] = b[0]), "right" === u.at[0] ? y.left += c : "center" === u.at[0] && (y.left += c / 2), "bottom" === u.at[1] ? y.top += v : "center" === u.at[1] && (y.top += v / 2), w = f(g.at, c, v), y.left += w[0], y.top += w[1], this.each(function() { var a, k, o = n(this),
                        s = o.outerWidth(),
                        h = o.outerHeight(),
                        it = i(this, "marginLeft"),
                        rt = i(this, "marginTop"),
                        ut = s + it + i(this, "marginRight") + tt.width,
                        ft = h + rt + i(this, "marginBottom") + tt.height,
                        e = n.extend({}, y),
                        l = f(g.my, o.outerWidth(), o.outerHeight()); "right" === u.my[0] ? e.left -= s : "center" === u.my[0] && (e.left -= s / 2); "bottom" === u.my[1] ? e.top -= h : "center" === u.my[1] && (e.top -= h / 2);
                    e.left += l[0];
                    e.top += l[1];
                    a = { marginLeft: it, marginTop: rt };
                    n.each(["left", "top"], function(t, i) { n.ui.position[b[t]] && n.ui.position[b[t]][i](e, { targetWidth: c, targetHeight: v, elemWidth: s, elemHeight: h, collisionPosition: a, collisionWidth: ut, collisionHeight: ft, offset: [w[0] + l[0], w[1] + l[1]], my: u.my, at: u.at, within: nt, elem: o }) });
                    u.using && (k = function(n) { var i = p.left - e.left,
                            a = i + c - s,
                            f = p.top - e.top,
                            y = f + v - h,
                            l = { target: { element: d, left: p.left, top: p.top, width: c, height: v }, element: { element: o, left: e.left, top: e.top, width: s, height: h }, horizontal: 0 > a ? "left" : i > 0 ? "right" : "center", vertical: 0 > y ? "top" : f > 0 ? "bottom" : "middle" };
                        s > c && c > t(i + a) && (l.horizontal = "center");
                        h > v && v > t(f + y) && (l.vertical = "middle");
                        l.important = r(t(i), t(a)) > r(t(f), t(y)) ? "horizontal" : "vertical";
                        u.using.call(this, n, l) });
                    o.offset(n.extend(e, { using: k })) }) };
            n.ui.position = { fit: { left: function(n, t) { var h, e = t.within,
                            u = e.isWindow ? e.scrollLeft : e.offset.left,
                            o = e.width,
                            s = n.left - t.collisionPosition.marginLeft,
                            i = u - s,
                            f = s + t.collisionWidth - o - u;
                        t.collisionWidth > o ? i > 0 && 0 >= f ? (h = n.left + i + t.collisionWidth - o - u, n.left += i - h) : n.left = f > 0 && 0 >= i ? u : i > f ? u + o - t.collisionWidth : u : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = r(n.left - s, n.left) }, top: function(n, t) { var h, o = t.within,
                            u = o.isWindow ? o.scrollTop : o.offset.top,
                            e = t.within.height,
                            s = n.top - t.collisionPosition.marginTop,
                            i = u - s,
                            f = s + t.collisionHeight - e - u;
                        t.collisionHeight > e ? i > 0 && 0 >= f ? (h = n.top + i + t.collisionHeight - e - u, n.top += i - h) : n.top = f > 0 && 0 >= i ? u : i > f ? u + e - t.collisionHeight : u : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = r(n.top - s, n.top) } }, flip: { left: function(n, i) { var o, s, r = i.within,
                            y = r.offset.left + r.scrollLeft,
                            c = r.width,
                            h = r.isWindow ? r.scrollLeft : r.offset.left,
                            l = n.left - i.collisionPosition.marginLeft,
                            a = l - h,
                            v = l + i.collisionWidth - c - h,
                            u = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0,
                            f = "left" === i.at[0] ? i.targetWidth : "right" === i.at[0] ? -i.targetWidth : 0,
                            e = -2 * i.offset[0];
                        0 > a ? (o = n.left + u + f + e + i.collisionWidth - c - y, (0 > o || t(a) > o) && (n.left += u + f + e)) : v > 0 && (s = n.left - i.collisionPosition.marginLeft + u + f + e - h, (s > 0 || v > t(s)) && (n.left += u + f + e)) }, top: function(n, i) { var o, s, r = i.within,
                            y = r.offset.top + r.scrollTop,
                            c = r.height,
                            h = r.isWindow ? r.scrollTop : r.offset.top,
                            l = n.top - i.collisionPosition.marginTop,
                            a = l - h,
                            v = l + i.collisionHeight - c - h,
                            p = "top" === i.my[1],
                            u = p ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0,
                            f = "top" === i.at[1] ? i.targetHeight : "bottom" === i.at[1] ? -i.targetHeight : 0,
                            e = -2 * i.offset[1];
                        0 > a ? (s = n.top + u + f + e + i.collisionHeight - c - y, (0 > s || t(a) > s) && (n.top += u + f + e)) : v > 0 && (o = n.top - i.collisionPosition.marginTop + u + f + e - h, (o > 0 || v > t(o)) && (n.top += u + f + e)) } }, flipfit: { left: function() { n.ui.position.flip.left.apply(this, arguments);
                        n.ui.position.fit.left.apply(this, arguments) }, top: function() { n.ui.position.flip.top.apply(this, arguments);
                        n.ui.position.fit.top.apply(this, arguments) } } } }();
    n.ui.position;
    n.extend(n.expr[":"], { data: n.expr.createPseudo ? n.expr.createPseudo(function(t) { return function(i) { return !!n.data(i, t) } }) : function(t, i, r) { return !!n.data(t, r[3]) } });
    n.fn.extend({ disableSelection: function() { var n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.on(n + ".ui-disableSelection", function(n) { n.preventDefault() }) } }(), enableSelection: function() { return this.off(".ui-disableSelection") } });
    n.ui.focusable = function(t, i) { var u, f, e, r, o, s = t.nodeName.toLowerCase(); return "area" === s ? (u = t.parentNode, f = u.name, t.href && f && "map" === u.nodeName.toLowerCase() ? (e = n("img[usemap='#" + f + "']"), e.length > 0 && e.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(s) ? (r = !t.disabled, r && (o = n(t).closest("fieldset")[0], o && (r = !o.disabled))) : r = "a" === s ? t.href || i : i, r && n(t).is(":visible") && b(n(t))) };
    n.extend(n.expr[":"], { focusable: function(t) { return n.ui.focusable(t, null != n.attr(t, "tabindex")) } });
    n.ui.focusable;
    n.fn.form = function() { return "string" == typeof this[0].form ? this.closest("form") : n(this[0].form) };
    n.ui.formResetMixin = { _formResetHandler: function() { var t = n(this);
            setTimeout(function() { var i = t.data("ui-form-reset-instances");
                n.each(i, function() { this.refresh() }) }) }, _bindFormResetHandler: function() { if (this.form = this.element.form(), this.form.length) { var n = this.form.data("ui-form-reset-instances") || [];
                n.length || this.form.on("reset.ui-form-reset", this._formResetHandler);
                n.push(this);
                this.form.data("ui-form-reset-instances", n) } }, _unbindFormResetHandler: function() { if (this.form.length) { var t = this.form.data("ui-form-reset-instances");
                t.splice(n.inArray(this, t), 1);
                t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset") } } }; "1.7" === n.fn.jquery.substring(0, 3) && (n.each(["Width", "Height"], function(t, i) {
        function r(t, i, r, u) { return n.each(e, function() { i -= parseFloat(n.css(t, "padding" + this)) || 0;
                r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0);
                u && (i -= parseFloat(n.css(t, "margin" + this)) || 0) }), i } var e = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            u = i.toLowerCase(),
            f = { innerWidth: n.fn.innerWidth, innerHeight: n.fn.innerHeight, outerWidth: n.fn.outerWidth, outerHeight: n.fn.outerHeight };
        n.fn["inner" + i] = function(t) { return void 0 === t ? f["inner" + i].call(this) : this.each(function() { n(this).css(u, r(this, t) + "px") }) };
        n.fn["outer" + i] = function(t, e) { return "number" != typeof t ? f["outer" + i].call(this, t) : this.each(function() { n(this).css(u, r(this, t, !0, e) + "px") }) } }), n.fn.addBack = function(n) { return this.add(null == n ? this.prevObject : this.prevObject.filter(n)) });
    n.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 };
    n.ui.escapeSelector = function() { var n = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g; return function(t) { return t.replace(n, "\\$1") } }();
    n.fn.labels = function() { var t, r, u, i, f; return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (i = this.eq(0).parents("label"), u = this.attr("id"), u && (t = this.eq(0).parents().last(), f = t.add(t.length ? t.siblings() : this.siblings()), r = "label[for='" + n.ui.escapeSelector(u) + "']", i = i.add(f.find(r).addBack(r))), this.pushStack(i)) };
    n.fn.scrollParent = function(t) { var i = this.css("position"),
            u = "absolute" === i,
            f = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            r = this.parents().filter(function() { var t = n(this); return u && "static" === t.css("position") ? !1 : f.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")) }).eq(0); return "fixed" !== i && r.length ? r : n(this[0].ownerDocument || document) };
    n.extend(n.expr[":"], { tabbable: function(t) { var i = n.attr(t, "tabindex"),
                r = null != i; return (!r || i >= 0) && n.ui.focusable(t, r) } });
    n.fn.extend({ uniqueId: function() { var n = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++n) }) } }(), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && n(this).removeAttr("id") }) } });
    n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    r = !1;
    n(document).on("mouseup", function() { r = !1 });
    n.widget("ui.mouse", { version: "1.12.1", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function() { var t = this;
            this.element.on("mousedown." + this.widgetName, function(n) { return t._mouseDown(n) }).on("click." + this.widgetName, function(i) { if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent")) return (n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) });
            this.started = !1 }, _mouseDestroy: function() { this.element.off("." + this.widgetName);
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function(t) { if (!r) { this._mouseMoved = !1;
                this._mouseStarted && this._mouseUp(t);
                this._mouseDownEvent = t; var i = this,
                    u = 1 === t.which,
                    f = "string" == typeof this.options.cancel && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1; return u && !f && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(n) { return i._mouseMove(n) }, this._mouseUpDelegate = function(n) { return i._mouseUp(n) }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), r = !0, !0)) : !0 } }, _mouseMove: function(t) { if (this._mouseMoved) { if (n.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t); if (!t.which)
                    if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(t) } return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) }, _mouseUp: function(t) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t));
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer);
            this.ignoreMissingWhich = !1;
            r = !1;
            t.preventDefault() }, _mouseDistanceMet: function(n) { return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance }, _mouseDelayMet: function() { return this.mouseDelayMet }, _mouseStart: function() {}, _mouseDrag: function() {}, _mouseStop: function() {}, _mouseCapture: function() { return !0 } });
    n.ui.plugin = { add: function(t, i, r) { var u, f = n.ui[t].prototype; for (u in r) f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]]) }, call: function(n, t, i, r) { var u, f = n.plugins[t]; if (f && (r || n.element[0].parentNode && 11 !== n.element[0].parentNode.nodeType))
                for (u = 0; f.length > u; u++) n.options[f[u][0]] && f[u][1].apply(n.element, i) } };
    n.ui.safeActiveElement = function(n) { var t; try { t = n.activeElement } catch (i) { t = n.body } return t || (t = n.body), t.nodeName || (t = n.body), t };
    n.ui.safeBlur = function(t) { t && "body" !== t.nodeName.toLowerCase() && n(t).trigger("blur") };
    n.widget("ui.draggable", n.ui.mouse, { version: "1.12.1", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function() { "original" === this.options.helper && this._setPositionRelative();
            this.options.addClasses && this._addClass("ui-draggable");
            this._setHandleClassName();
            this._mouseInit() }, _setOption: function(n, t) { this._super(n, t); "handle" === n && (this._removeHandleClassName(), this._setHandleClassName()) }, _destroy: function() { return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0) }, _mouseCapture: function(t) { var i = this.options; return this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blurActiveElement(t), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1) }, _blockFrames: function(t) { this.iframeBlocks = this.document.find(t).map(function() { var t = n(this); return n("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0] }) }, _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _blurActiveElement: function(t) { var i = n.ui.safeActiveElement(this.document[0]),
                r = n(t.target);
            r.closest(i).length || n.ui.safeBlur(i) }, _mouseStart: function(t) { var i = this.options; return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() { return "fixed" === n(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0) }, _refreshOffsets: function(n) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() };
            this.offset.click = { left: n.pageX - this.offset.left, top: n.pageY - this.offset.top } }, _mouseDrag: function(t, i) { if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) { var r = this._uiHash(); if (this._trigger("drag", t, r) === !1) return this._mouseUp(new n.Event("mouseup", t)), !1;
                this.position = r.position } return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1 }, _mouseStop: function(t) { var r = this,
                i = !1; return n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() { r._trigger("stop", t) !== !1 && r._clear() }) : this._trigger("stop", t) !== !1 && this._clear(), !1 }, _mouseUp: function(t) { return this._unblockFrames(), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), n.ui.mouse.prototype._mouseUp.call(this, t) }, cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new n.Event("mouseup", { target: this.element[0] })) : this._clear(), this }, _getHandle: function(t) { return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0 }, _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this._addClass(this.handleElement, "ui-draggable-handle") }, _removeHandleClassName: function() { this._removeClass(this.handleElement, "ui-draggable-handle") }, _createHelper: function(t) { var r = this.options,
                u = n.isFunction(r.helper),
                i = u ? n(r.helper.apply(this.element[0], [t])) : "clone" === r.helper ? this.element.clone().removeAttr("id") : this.element; return i.parents("body").length || i.appendTo("parent" === r.appendTo ? this.element[0].parentNode : r.appendTo), u && i[0] === this.element[0] && this._setPositionRelative(), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i }, _setPositionRelative: function() { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") }, _adjustOffsetFromHelper: function(t) { "string" == typeof t && (t = t.split(" "));
            n.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }); "left" in t && (this.offset.click.left = t.left + this.margins.left); "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left); "top" in t && (this.offset.click.top = t.top + this.margins.top); "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) }, _isRootNode: function(n) { return /(html|body)/i.test(n.tagName) || n === this.document[0] }, _getParentOffset: function() { var t = this.offsetParent.offset(),
                i = this.document[0]; return "absolute" === this.cssPosition && this.scrollParent[0] !== i && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function() { if ("relative" !== this.cssPosition) return { top: 0, left: 0 }; var n = this.element.position(),
                t = this._isRootNode(this.scrollParent[0]); return { top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()), left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft()) } }, _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } }, _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function() { var f, t, i, r = this.options,
                u = this.document[0]; return this.relativeContainer = null, r.containment ? "window" === r.containment ? (this.containment = [n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, n(window).scrollLeft() + n(window).width() - this.helperProportions.width - this.margins.left, n(window).scrollTop() + (n(window).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === r.containment ? (this.containment = [0, 0, n(u).width() - this.helperProportions.width - this.margins.left, (n(u).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : r.containment.constructor === Array ? (this.containment = r.containment, void 0) : ("parent" === r.containment && (r.containment = this.helper[0].parentNode), t = n(r.containment), i = t[0], i && (f = /(scroll|auto)/.test(t.css("overflow")), this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (f ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = t), void 0) : (this.containment = null, void 0) }, _convertPositionTo: function(n, t) { t || (t = this.position); var i = "absolute" === n ? 1 : -1,
                r = this._isRootNode(this.scrollParent[0]); return { top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * i, left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * i } }, _generatePosition: function(n, t) { var i, s, u, f, r = this.options,
                h = this._isRootNode(this.scrollParent[0]),
                e = n.pageX,
                o = n.pageY; return h && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, n.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left), n.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top), n.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left), n.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, o = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u, f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, e = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f), "y" === r.axis && (e = this.originalPageX), "x" === r.axis && (o = this.originalPageY)), { top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top), left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left) } }, _clear: function() { this._removeClass(this.helper, "ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy() }, _trigger: function(t, i, r) { return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), r.offset = this.positionAbs), n.Widget.prototype._trigger.call(this, t, i, r) }, plugins: {}, _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } } });
    n.ui.plugin.add("draggable", "connectToSortable", { start: function(t, i, r) { var u = n.extend({}, i, { item: r.element });
            r.sortables = [];
            n(r.options.connectToSortable).each(function() { var i = n(this).sortable("instance");
                i && !i.options.disabled && (r.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, u)) }) }, stop: function(t, i, r) { var u = n.extend({}, i, { item: r.element });
            r.cancelHelperRemoval = !1;
            n.each(r.sortables, function() { var n = this;
                n.isOver ? (n.isOver = 0, r.cancelHelperRemoval = !0, n.cancelHelperRemoval = !1, n._storedCSS = { position: n.placeholder.css("position"), top: n.placeholder.css("top"), left: n.placeholder.css("left") }, n._mouseStop(t), n.options.helper = n.options._helper) : (n.cancelHelperRemoval = !0, n._trigger("deactivate", t, u)) }) }, drag: function(t, i, r) { n.each(r.sortables, function() { var f = !1,
                    u = this;
                u.positionAbs = r.positionAbs;
                u.helperProportions = r.helperProportions;
                u.offset.click = r.offset.click;
                u._intersectsWith(u.containerCache) && (f = !0, n.each(r.sortables, function() { return this.positionAbs = r.positionAbs, this.helperProportions = r.helperProportions, this.offset.click = r.offset.click, this !== u && this._intersectsWith(this.containerCache) && n.contains(u.element[0], this.element[0]) && (f = !1), f }));
                f ? (u.isOver || (u.isOver = 1, r._parent = i.helper.parent(), u.currentItem = i.helper.appendTo(u.element).data("ui-sortable-item", !0), u.options._helper = u.options.helper, u.options.helper = function() { return i.helper[0] }, t.target = u.currentItem[0], u._mouseCapture(t, !0), u._mouseStart(t, !0, !0), u.offset.click.top = r.offset.click.top, u.offset.click.left = r.offset.click.left, u.offset.parent.left -= r.offset.parent.left - u.offset.parent.left, u.offset.parent.top -= r.offset.parent.top - u.offset.parent.top, r._trigger("toSortable", t), r.dropped = u.element, n.each(r.sortables, function() { this.refreshPositions() }), r.currentItem = r.element, u.fromOutside = r), u.currentItem && (u._mouseDrag(t), i.position = u.position)) : u.isOver && (u.isOver = 0, u.cancelHelperRemoval = !0, u.options._revert = u.options.revert, u.options.revert = !1, u._trigger("out", t, u._uiHash(u)), u._mouseStop(t, !0), u.options.revert = u.options._revert, u.options.helper = u.options._helper, u.placeholder && u.placeholder.remove(), i.helper.appendTo(r._parent), r._refreshOffsets(t), i.position = r._generatePosition(t, !0), r._trigger("fromSortable", t), r.dropped = !1, n.each(r.sortables, function() { this.refreshPositions() })) }) } });
    n.ui.plugin.add("draggable", "cursor", { start: function(t, i, r) { var u = n("body"),
                f = r.options;
            u.css("cursor") && (f._cursor = u.css("cursor"));
            u.css("cursor", f.cursor) }, stop: function(t, i, r) { var u = r.options;
            u._cursor && n("body").css("cursor", u._cursor) } });
    n.ui.plugin.add("draggable", "opacity", { start: function(t, i, r) { var u = n(i.helper),
                f = r.options;
            u.css("opacity") && (f._opacity = u.css("opacity"));
            u.css("opacity", f.opacity) }, stop: function(t, i, r) { var u = r.options;
            u._opacity && n(i.helper).css("opacity", u._opacity) } });
    n.ui.plugin.add("draggable", "scroll", { start: function(n, t, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1));
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) }, drag: function(t, i, r) { var u = r.options,
                o = !1,
                e = r.scrollParentNotHidden[0],
                f = r.document[0];
            e !== f && "HTML" !== e.tagName ? (u.axis && "x" === u.axis || (r.overflowOffset.top + e.offsetHeight - t.pageY < u.scrollSensitivity ? e.scrollTop = o = e.scrollTop + u.scrollSpeed : t.pageY - r.overflowOffset.top < u.scrollSensitivity && (e.scrollTop = o = e.scrollTop - u.scrollSpeed)), u.axis && "y" === u.axis || (r.overflowOffset.left + e.offsetWidth - t.pageX < u.scrollSensitivity ? e.scrollLeft = o = e.scrollLeft + u.scrollSpeed : t.pageX - r.overflowOffset.left < u.scrollSensitivity && (e.scrollLeft = o = e.scrollLeft - u.scrollSpeed))) : (u.axis && "x" === u.axis || (t.pageY - n(f).scrollTop() < u.scrollSensitivity ? o = n(f).scrollTop(n(f).scrollTop() - u.scrollSpeed) : n(window).height() - (t.pageY - n(f).scrollTop()) < u.scrollSensitivity && (o = n(f).scrollTop(n(f).scrollTop() + u.scrollSpeed))), u.axis && "y" === u.axis || (t.pageX - n(f).scrollLeft() < u.scrollSensitivity ? o = n(f).scrollLeft(n(f).scrollLeft() - u.scrollSpeed) : n(window).width() - (t.pageX - n(f).scrollLeft()) < u.scrollSensitivity && (o = n(f).scrollLeft(n(f).scrollLeft() + u.scrollSpeed))));
            o !== !1 && n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t) } });
    n.ui.plugin.add("draggable", "snap", { start: function(t, i, r) { var u = r.options;
            r.snapElements = [];
            n(u.snap.constructor !== String ? u.snap.items || ":data(ui-draggable)" : u.snap).each(function() { var t = n(this),
                    i = t.offset();
                this !== r.element[0] && r.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: i.top, left: i.left }) }) }, drag: function(t, i, r) { for (var e, o, s, h, c, a, l, v, w, b = r.options, f = b.snapTolerance, y = i.offset.left, k = y + r.helperProportions.width, p = i.offset.top, d = p + r.helperProportions.height, u = r.snapElements.length - 1; u >= 0; u--) c = r.snapElements[u].left - r.margins.left, a = c + r.snapElements[u].width, l = r.snapElements[u].top - r.margins.top, v = l + r.snapElements[u].height, c - f > k || y > a + f || l - f > d || p > v + f || !n.contains(r.snapElements[u].item.ownerDocument, r.snapElements[u].item) ? (r.snapElements[u].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), { snapItem: r.snapElements[u].item })), r.snapElements[u].snapping = !1) : ("inner" !== b.snapMode && (e = f >= Math.abs(l - d), o = f >= Math.abs(v - p), s = f >= Math.abs(c - k), h = f >= Math.abs(a - y), e && (i.position.top = r._convertPositionTo("relative", { top: l - r.helperProportions.height, left: 0 }).top), o && (i.position.top = r._convertPositionTo("relative", { top: v, left: 0 }).top), s && (i.position.left = r._convertPositionTo("relative", { top: 0, left: c - r.helperProportions.width }).left), h && (i.position.left = r._convertPositionTo("relative", { top: 0, left: a }).left)), w = e || o || s || h, "outer" !== b.snapMode && (e = f >= Math.abs(l - p), o = f >= Math.abs(v - d), s = f >= Math.abs(c - y), h = f >= Math.abs(a - k), e && (i.position.top = r._convertPositionTo("relative", { top: l, left: 0 }).top), o && (i.position.top = r._convertPositionTo("relative", { top: v - r.helperProportions.height, left: 0 }).top), s && (i.position.left = r._convertPositionTo("relative", { top: 0, left: c }).left), h && (i.position.left = r._convertPositionTo("relative", { top: 0, left: a - r.helperProportions.width }).left)), !r.snapElements[u].snapping && (e || o || s || h || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), { snapItem: r.snapElements[u].item })), r.snapElements[u].snapping = e || o || s || h || w) } });
    n.ui.plugin.add("draggable", "stack", { start: function(t, i, r) { var f, e = r.options,
                u = n.makeArray(n(e.stack)).sort(function(t, i) { return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0) });
            u.length && (f = parseInt(n(u[0]).css("zIndex"), 10) || 0, n(u).each(function(t) { n(this).css("zIndex", f + t) }), this.css("zIndex", f + u.length)) } });
    n.ui.plugin.add("draggable", "zIndex", { start: function(t, i, r) { var u = n(i.helper),
                f = r.options;
            u.css("zIndex") && (f._zIndex = u.css("zIndex"));
            u.css("zIndex", f.zIndex) }, stop: function(t, i, r) { var u = r.options;
            u._zIndex && n(i.helper).css("zIndex", u._zIndex) } });
    n.ui.draggable;
    n.widget("ui.droppable", { version: "1.12.1", widgetEventPrefix: "drop", options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function() { var t, i = this.options,
                r = i.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = n.isFunction(r) ? r : function(n) { return n.is(r) };
            this.proportions = function() { return arguments.length ? (t = arguments[0], void 0) : t ? t : t = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight } };
            this._addToManager(i.scope);
            i.addClasses && this._addClass("ui-droppable") }, _addToManager: function(t) { n.ui.ddmanager.droppables[t] = n.ui.ddmanager.droppables[t] || [];
            n.ui.ddmanager.droppables[t].push(this) }, _splice: function(n) { for (var t = 0; n.length > t; t++) n[t] === this && n.splice(t, 1) }, _destroy: function() { var t = n.ui.ddmanager.droppables[this.options.scope];
            this._splice(t) }, _setOption: function(t, i) { if ("accept" === t) this.accept = n.isFunction(i) ? i : function(n) { return n.is(i) };
            else if ("scope" === t) { var r = n.ui.ddmanager.droppables[this.options.scope];
                this._splice(r);
                this._addToManager(i) } this._super(t, i) }, _activate: function(t) { var i = n.ui.ddmanager.current;
            this._addActiveClass();
            i && this._trigger("activate", t, this.ui(i)) }, _deactivate: function(t) { var i = n.ui.ddmanager.current;
            this._removeActiveClass();
            i && this._trigger("deactivate", t, this.ui(i)) }, _over: function(t) { var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", t, this.ui(i))) }, _out: function(t) { var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", t, this.ui(i))) }, _drop: function(t, i) { var r = i || n.ui.ddmanager.current,
                u = !1; return r && (r.currentItem || r.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var i = n(this).droppable("instance"); if (i.options.greedy && !i.options.disabled && i.options.scope === r.options.scope && i.accept.call(i.element[0], r.currentItem || r.element) && f(r, n.extend(i, { offset: i.element.offset() }), i.options.tolerance, t)) return (u = !0, !1) }), u ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", t, this.ui(r)), this.element) : !1) : !1 }, ui: function(n) { return { draggable: n.currentItem || n.element, helper: n.helper, position: n.position, offset: n.positionAbs } }, _addHoverClass: function() { this._addClass("ui-droppable-hover") }, _removeHoverClass: function() { this._removeClass("ui-droppable-hover") }, _addActiveClass: function() { this._addClass("ui-droppable-active") }, _removeActiveClass: function() { this._removeClass("ui-droppable-active") } });
    f = n.ui.intersect = function() {
        function n(n, t, i) { return n >= t && t + i > n } return function(t, i, r, u) { if (!i.offset) return !1; var o = (t.positionAbs || t.position.absolute).left + t.margins.left,
                s = (t.positionAbs || t.position.absolute).top + t.margins.top,
                h = o + t.helperProportions.width,
                c = s + t.helperProportions.height,
                f = i.offset.left,
                e = i.offset.top,
                l = f + i.proportions().width,
                a = e + i.proportions().height; switch (r) {
                case "fit":
                    return o >= f && l >= h && s >= e && a >= c;
                case "intersect":
                    return o + t.helperProportions.width / 2 > f && l > h - t.helperProportions.width / 2 && s + t.helperProportions.height / 2 > e && a > c - t.helperProportions.height / 2;
                case "pointer":
                    return n(u.pageY, e, i.proportions().height) && n(u.pageX, f, i.proportions().width);
                case "touch":
                    return (s >= e && a >= s || c >= e && a >= c || e > s && c > a) && (o >= f && l >= o || h >= f && l >= h || f > o && h > l);
                default:
                    return !1 } } }();
    n.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function(t, i) { var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [],
                o = i ? i.type : null,
                e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            n: for (r = 0; u.length > r; r++)
                if (!(u[r].options.disabled || t && !u[r].accept.call(u[r].element[0], t.currentItem || t.element))) { for (f = 0; e.length > f; f++)
                        if (e[f] === u[r].element[0]) { u[r].proportions().height = 0; continue n } u[r].visible = "none" !== u[r].element.css("display");
                    u[r].visible && ("mousedown" === o && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions({ width: u[r].element[0].offsetWidth, height: u[r].element[0].offsetHeight })) } }, drop: function(t, i) { var r = !1; return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() { this.options && (!this.options.disabled && this.visible && f(t, this, this.options.tolerance, i) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), r }, dragStart: function(t, i) { t.element.parentsUntil("body").on("scroll.droppable", function() { t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i) }) }, drag: function(t, i) { t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
            n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() { if (!this.options.disabled && !this.greedyChild && this.visible) { var r, o, e, s = f(t, this, this.options.tolerance, i),
                        u = !s && this.isover ? "isout" : s && !this.isover ? "isover" : null;
                    u && (this.options.greedy && (o = this.options.scope, e = this.element.parents(":data(ui-droppable)").filter(function() { return n(this).droppable("instance").options.scope === o }), e.length && (r = n(e[0]).droppable("instance"), r.greedyChild = "isover" === u)), r && "isover" === u && (r.isover = !1, r.isout = !0, r._out.call(r, i)), this[u] = !0, this["isout" === u ? "isover" : "isout"] = !1, this["isover" === u ? "_over" : "_out"].call(this, i), r && "isout" === u && (r.isout = !1, r.isover = !0, r._over.call(r, i))) } }) }, dragStop: function(t, i) { t.element.parentsUntil("body").off("scroll.droppable");
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i) } };
    n.uiBackCompat !== !1 && n.widget("ui.droppable", n.ui.droppable, { options: { hoverClass: !1, activeClass: !1 }, _addActiveClass: function() { this._super();
            this.options.activeClass && this.element.addClass(this.options.activeClass) }, _removeActiveClass: function() { this._super();
            this.options.activeClass && this.element.removeClass(this.options.activeClass) }, _addHoverClass: function() { this._super();
            this.options.hoverClass && this.element.addClass(this.options.hoverClass) }, _removeHoverClass: function() { this._super();
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass) } });
    n.ui.droppable;
    n.widget("ui.resizable", n.ui.mouse, { version: "1.12.1", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function(n) { return parseFloat(n) || 0 }, _isNumber: function(n) { return !isNaN(parseFloat(n)) }, _hasScroll: function(t, i) { if ("hidden" === n(t).css("overflow")) return !1; var r = i && "left" === i ? "scrollLeft" : "scrollTop",
                u = !1; return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u) }, _create: function() { var r, t = this.options,
                i = this;
            this._addClass("ui-resizable");
            n.extend(this, { _aspectRatio: !!t.aspectRatio, aspectRatio: t.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null });
            this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, r = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(r), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(r), this._proportionallyResize());
            this._setupHandles();
            t.autoHide && n(this.element).on("mouseenter", function() { t.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show()) }).on("mouseleave", function() { t.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide()) });
            this._mouseInit() }, _destroy: function() { this._mouseDestroy(); var t, i = function(t) { n(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({ position: t.css("position"), width: t.outerWidth(), height: t.outerHeight(), top: t.css("top"), left: t.css("left") }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this }, _setOption: function(n, t) { switch (this._super(n, t), n) {
                case "handles":
                    this._removeHandles();
                    this._setupHandles() } }, _setupHandles: function() { var i, r, u, o, t, f = this.options,
                e = this; if (this.handles = f.handles || (n(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = n(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), u = this.handles.split(","), this.handles = {}, r = 0; u.length > r; r++) i = n.trim(u[r]), o = "ui-resizable-" + i, t = n("<div>"), this._addClass(t, "ui-resizable-handle " + o), t.css({ zIndex: f.zIndex }), this.handles[i] = ".ui-resizable-" + i, this.element.append(t);
            this._renderAxis = function(t) { var i, r, u, f;
                t = t || this.element; for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = n(this.handles[i]), this._on(this.handles[i], { mousedown: e._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (r = n(this.handles[i], this.element), f = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(), u = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(u, f), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]) };
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();
            this._handles.on("mouseover", function() { e.resizing || (this.className && (t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), e.axis = t && t[1] ? t[1] : "se") });
            f.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide")) }, _removeHandles: function() { this._handles.remove() }, _mouseCapture: function(t) { var r, i, u = !1; for (r in this.handles) i = n(this.handles[r])[0], (i === t.target || n.contains(i, t.target)) && (u = !0); return !this.options.disabled && u }, _mouseStart: function(t) { var u, f, e, r = this.options,
                i = this.element; return this.resizing = !0, this._renderProxy(), u = this._num(this.helper.css("left")), f = this._num(this.helper.css("top")), r.containment && (u += n(r.containment).scrollLeft() || 0, f += n(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: u, top: f }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: i.width(), height: i.height() }, this.originalSize = this._helper ? { width: i.outerWidth(), height: i.outerHeight() } : { width: i.width(), height: i.height() }, this.sizeDiff = { width: i.outerWidth() - i.width(), height: i.outerHeight() - i.height() }, this.originalPosition = { left: u, top: f }, this.originalMousePosition = { left: t.pageX, top: t.pageY }, this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0 }, _mouseDrag: function(t) { var i, r, u = this.originalMousePosition,
                e = this.axis,
                o = t.pageX - u.left || 0,
                s = t.pageY - u.top || 0,
                f = this._change[e]; return this._updatePrevProperties(), f ? (i = f.apply(this, [t, o, s]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), r = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), n.isEmptyObject(r) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1 }, _mouseStop: function(t) { this.resizing = !1; var r, u, f, e, o, s, h, c = this.options,
                i = this; return this._helper && (r = this._proportionallyResizeElements, u = r.length && /textarea/i.test(r[0].nodeName), f = u && this._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, e = u ? 0 : i.sizeDiff.width, o = { width: i.helper.width() - e, height: i.helper.height() - f }, s = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null, h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null, c.animate || this.element.css(n.extend(o, { top: h, left: s })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !c.animate && this._proportionallyResize()), n("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1 }, _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left };
            this.prevSize = { width: this.size.width, height: this.size.height } }, _applyChanges: function() { var n = {}; return this.position.top !== this.prevPosition.top && (n.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (n.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (n.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (n.height = this.size.height + "px"), this.helper.css(n), n }, _updateVirtualBoundaries: function(n) { var r, u, f, e, t, i = this.options;
            t = { minWidth: this._isNumber(i.minWidth) ? i.minWidth : 0, maxWidth: this._isNumber(i.maxWidth) ? i.maxWidth : 1 / 0, minHeight: this._isNumber(i.minHeight) ? i.minHeight : 0, maxHeight: this._isNumber(i.maxHeight) ? i.maxHeight : 1 / 0 };
            (this._aspectRatio || n) && (r = t.minHeight * this.aspectRatio, f = t.minWidth / this.aspectRatio, u = t.maxHeight * this.aspectRatio, e = t.maxWidth / this.aspectRatio, r > t.minWidth && (t.minWidth = r), f > t.minHeight && (t.minHeight = f), t.maxWidth > u && (t.maxWidth = u), t.maxHeight > e && (t.maxHeight = e));
            this._vBoundaries = t }, _updateCache: function(n) { this.offset = this.helper.offset();
            this._isNumber(n.left) && (this.position.left = n.left);
            this._isNumber(n.top) && (this.position.top = n.top);
            this._isNumber(n.height) && (this.size.height = n.height);
            this._isNumber(n.width) && (this.size.width = n.width) }, _updateRatio: function(n) { var t = this.position,
                i = this.size,
                r = this.axis; return this._isNumber(n.height) ? n.width = n.height * this.aspectRatio : this._isNumber(n.width) && (n.height = n.width / this.aspectRatio), "sw" === r && (n.left = t.left + (i.width - n.width), n.top = null), "nw" === r && (n.top = t.top + (i.height - n.height), n.left = t.left + (i.width - n.width)), n }, _respectSize: function(n) { var t = this._vBoundaries,
                i = this.axis,
                r = this._isNumber(n.width) && t.maxWidth && t.maxWidth < n.width,
                u = this._isNumber(n.height) && t.maxHeight && t.maxHeight < n.height,
                f = this._isNumber(n.width) && t.minWidth && t.minWidth > n.width,
                e = this._isNumber(n.height) && t.minHeight && t.minHeight > n.height,
                o = this.originalPosition.left + this.originalSize.width,
                s = this.originalPosition.top + this.originalSize.height,
                h = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i); return f && (n.width = t.minWidth), e && (n.height = t.minHeight), r && (n.width = t.maxWidth), u && (n.height = t.maxHeight), f && h && (n.left = o - t.minWidth), r && h && (n.left = o - t.maxWidth), e && c && (n.top = s - t.minHeight), u && c && (n.top = s - t.maxHeight), n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null, n }, _getPaddingPlusBorderDimensions: function(n) { for (var t = 0, i = [], r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")]; 4 > t; t++) i[t] = parseFloat(r[t]) || 0, i[t] += parseFloat(u[t]) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } }, _proportionallyResize: function() { if (this._proportionallyResizeElements.length)
                for (var n, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) n = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(n)), n.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 }) }, _renderProxy: function() { var t = this.element,
                i = this.options;
            this.elementOffset = t.offset();
            this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element }, _change: { e: function(n, t) { return { width: this.originalSize.width + t } }, w: function(n, t) { var i = this.originalSize,
                    r = this.originalPosition; return { left: r.left + t, width: i.width - t } }, n: function(n, t, i) { var r = this.originalSize,
                    u = this.originalPosition; return { top: u.top + i, height: r.height - i } }, s: function(n, t, i) { return { height: this.originalSize.height + i } }, se: function(t, i, r) { return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r])) }, sw: function(t, i, r) { return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r])) }, ne: function(t, i, r) { return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r])) }, nw: function(t, i, r) { return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r])) } }, _propagate: function(t, i) { n.ui.plugin.call(this, t, [i, this.ui()]); "resize" !== t && this._trigger(t, i, this.ui()) }, plugins: {}, ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } } });
    n.ui.plugin.add("resizable", "animate", { stop: function(t) { var i = n(this).resizable("instance"),
                u = i.options,
                r = i._proportionallyResizeElements,
                f = r.length && /textarea/i.test(r[0].nodeName),
                s = f && i._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
                h = f ? 0 : i.sizeDiff.width,
                c = { width: i.size.width - h, height: i.size.height - s },
                e = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                o = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(n.extend(c, o && e ? { top: o, left: e } : {}), { duration: u.animateDuration, easing: u.animateEasing, step: function() { var u = { width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left")) };
                    r && r.length && n(r[0]).css({ width: u.width, height: u.height });
                    i._updateCache(u);
                    i._propagate("resize", t) } }) } });
    n.ui.plugin.add("resizable", "containment", { start: function() { var r, f, e, o, s, h, c, t = n(this).resizable("instance"),
                l = t.options,
                a = t.element,
                u = l.containment,
                i = u instanceof n ? u.get(0) : /parent/.test(u) ? a.parent().get(0) : u;
            i && (t.containerElement = n(i), /document/.test(u) || u === document ? (t.containerOffset = { left: 0, top: 0 }, t.containerPosition = { left: 0, top: 0 }, t.parentData = { element: n(document), left: 0, top: 0, width: n(document).width(), height: n(document).height() || document.body.parentNode.scrollHeight }) : (r = n(i), f = [], n(["Top", "Right", "Left", "Bottom"]).each(function(n, i) { f[n] = t._num(r.css("padding" + i)) }), t.containerOffset = r.offset(), t.containerPosition = r.position(), t.containerSize = { height: r.innerHeight() - f[3], width: r.innerWidth() - f[1] }, e = t.containerOffset, o = t.containerSize.height, s = t.containerSize.width, h = t._hasScroll(i, "left") ? i.scrollWidth : s, c = t._hasScroll(i) ? i.scrollHeight : o, t.parentData = { element: i, left: e.left, top: e.top, width: h, height: c })) }, resize: function(t) { var o, s, h, c, i = n(this).resizable("instance"),
                v = i.options,
                r = i.containerOffset,
                l = i.position,
                f = i._aspectRatio || t.shiftKey,
                e = { top: 0, left: 0 },
                a = i.containerElement,
                u = !0;
            a[0] !== document && /static/.test(a.css("position")) && (e = r);
            l.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - e.left), f && (i.size.height = i.size.width / i.aspectRatio, u = !1), i.position.left = v.helper ? r.left : 0);
            l.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), f && (i.size.width = i.size.height * i.aspectRatio, u = !1), i.position.top = i._helper ? r.top : 0);
            h = i.containerElement.get(0) === i.element.parent().get(0);
            c = /relative|absolute/.test(i.containerElement.css("position"));
            h && c ? (i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top) : (i.offset.left = i.element.offset().left, i.offset.top = i.element.offset().top);
            o = Math.abs(i.sizeDiff.width + (i._helper ? i.offset.left - e.left : i.offset.left - r.left));
            s = Math.abs(i.sizeDiff.height + (i._helper ? i.offset.top - e.top : i.offset.top - r.top));
            o + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - o, f && (i.size.height = i.size.width / i.aspectRatio, u = !1));
            s + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - s, f && (i.size.width = i.size.height * i.aspectRatio, u = !1));
            u || (i.position.left = i.prevPosition.left, i.position.top = i.prevPosition.top, i.size.width = i.prevSize.width, i.size.height = i.prevSize.height) }, stop: function() { var t = n(this).resizable("instance"),
                r = t.options,
                u = t.containerOffset,
                f = t.containerPosition,
                e = t.containerElement,
                i = n(t.helper),
                o = i.offset(),
                s = i.outerWidth() - t.sizeDiff.width,
                h = i.outerHeight() - t.sizeDiff.height;
            t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({ left: o.left - f.left - u.left, width: s, height: h });
            t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({ left: o.left - f.left - u.left, width: s, height: h }) } });
    n.ui.plugin.add("resizable", "alsoResize", { start: function() { var t = n(this).resizable("instance"),
                i = t.options;
            n(i.alsoResize).each(function() { var t = n(this);
                t.data("ui-resizable-alsoresize", { width: parseFloat(t.width()), height: parseFloat(t.height()), left: parseFloat(t.css("left")), top: parseFloat(t.css("top")) }) }) }, resize: function(t, i) { var r = n(this).resizable("instance"),
                e = r.options,
                u = r.originalSize,
                f = r.originalPosition,
                o = { height: r.size.height - u.height || 0, width: r.size.width - u.width || 0, top: r.position.top - f.top || 0, left: r.position.left - f.left || 0 };
            n(e.alsoResize).each(function() { var t = n(this),
                    u = n(this).data("ui-resizable-alsoresize"),
                    r = {},
                    f = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                n.each(f, function(n, t) { var i = (u[t] || 0) + (o[t] || 0);
                    i && i >= 0 && (r[t] = i || null) });
                t.css(r) }) }, stop: function() { n(this).removeData("ui-resizable-alsoresize") } });
    n.ui.plugin.add("resizable", "ghost", { start: function() { var t = n(this).resizable("instance"),
                i = t.size;
            t.ghost = t.originalElement.clone();
            t.ghost.css({ opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 });
            t._addClass(t.ghost, "ui-resizable-ghost");
            n.uiBackCompat !== !1 && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost);
            t.ghost.appendTo(t.helper) }, resize: function() { var t = n(this).resizable("instance");
            t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width }) }, stop: function() { var t = n(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0)) } });
    n.ui.plugin.add("resizable", "grid", { resize: function() { var h, t = n(this).resizable("instance"),
                i = t.options,
                y = t.size,
                o = t.originalSize,
                s = t.originalPosition,
                c = t.axis,
                l = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                f = l[0] || 1,
                e = l[1] || 1,
                a = Math.round((y.width - o.width) / f) * f,
                v = Math.round((y.height - o.height) / e) * e,
                r = o.width + a,
                u = o.height + v,
                p = i.maxWidth && r > i.maxWidth,
                w = i.maxHeight && u > i.maxHeight,
                b = i.minWidth && i.minWidth > r,
                k = i.minHeight && i.minHeight > u;
            i.grid = l;
            b && (r += f);
            k && (u += e);
            p && (r -= f);
            w && (u -= e); /^(se|s|e)$/.test(c) ? (t.size.width = r, t.size.height = u) : /^(ne)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.top = s.top - v) : /^(sw)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.left = s.left - a) : ((0 >= u - e || 0 >= r - f) && (h = t._getPaddingPlusBorderDimensions(this)), u - e > 0 ? (t.size.height = u, t.position.top = s.top - v) : (u = e - h.height, t.size.height = u, t.position.top = s.top + o.height - u), r - f > 0 ? (t.size.width = r, t.position.left = s.left - a) : (r = f - h.width, t.size.width = r, t.position.left = s.left + o.width - r)) } });
    n.ui.resizable;
    n.widget("ui.selectable", n.ui.mouse, { version: "1.12.1", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function() { var t = this;
            this._addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function() { t.elementPos = n(t.element[0]).offset();
                t.selectees = n(t.options.filter, t.element[0]);
                t._addClass(t.selectees, "ui-selectee");
                t.selectees.each(function() { var i = n(this),
                        u = i.offset(),
                        r = { left: u.left - t.elementPos.left, top: u.top - t.elementPos.top };
                    n.data(this, "selectable-item", { element: this, $element: i, left: r.left, top: r.top, right: r.left + i.outerWidth(), bottom: r.top + i.outerHeight(), startselected: !1, selected: i.hasClass("ui-selected"), selecting: i.hasClass("ui-selecting"), unselecting: i.hasClass("ui-unselecting") }) }) };
            this.refresh();
            this._mouseInit();
            this.helper = n("<div>");
            this._addClass(this.helper, "ui-selectable-helper") }, _destroy: function() { this.selectees.removeData("selectable-item");
            this._mouseDestroy() }, _mouseStart: function(t) { var i = this,
                r = this.options;
            this.opos = [t.pageX, t.pageY];
            this.elementPos = n(this.element[0]).offset();
            this.options.disabled || (this.selectees = n(r.filter, this.element[0]), this._trigger("start", t), n(r.appendTo).append(this.helper), this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() { var r = n.data(this, "selectable-item");
                r.startselected = !0;
                t.metaKey || t.ctrlKey || (i._removeClass(r.$element, "ui-selected"), r.selected = !1, i._addClass(r.$element, "ui-unselecting"), r.unselecting = !0, i._trigger("unselecting", t, { unselecting: r.element })) }), n(t.target).parents().addBack().each(function() { var u, r = n.data(this, "selectable-item"); if (r) return (u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"), i._removeClass(r.$element, u ? "ui-unselecting" : "ui-selected")._addClass(r.$element, u ? "ui-selecting" : "ui-unselecting"), r.unselecting = !u, r.selecting = u, r.selected = u, u ? i._trigger("selecting", t, { selecting: r.element }) : i._trigger("unselecting", t, { unselecting: r.element }), !1) })) }, _mouseDrag: function(t) { if (this.dragged = !0, !this.options.disabled) { var o, i = this,
                    s = this.options,
                    r = this.opos[0],
                    u = this.opos[1],
                    f = t.pageX,
                    e = t.pageY; return r > f && (o = f, f = r, r = o), u > e && (o = e, e = u, u = o), this.helper.css({ left: r, top: u, width: f - r, height: e - u }), this.selectees.each(function() { var o = n.data(this, "selectable-item"),
                        c = !1,
                        h = {};
                    o && o.element !== i.element[0] && (h.left = o.left + i.elementPos.left, h.right = o.right + i.elementPos.left, h.top = o.top + i.elementPos.top, h.bottom = o.bottom + i.elementPos.top, "touch" === s.tolerance ? c = !(h.left > f || r > h.right || h.top > e || u > h.bottom) : "fit" === s.tolerance && (c = h.left > r && f > h.right && h.top > u && e > h.bottom), c ? (o.selected && (i._removeClass(o.$element, "ui-selected"), o.selected = !1), o.unselecting && (i._removeClass(o.$element, "ui-unselecting"), o.unselecting = !1), o.selecting || (i._addClass(o.$element, "ui-selecting"), o.selecting = !0, i._trigger("selecting", t, { selecting: o.element }))) : (o.selecting && ((t.metaKey || t.ctrlKey) && o.startselected ? (i._removeClass(o.$element, "ui-selecting"), o.selecting = !1, i._addClass(o.$element, "ui-selected"), o.selected = !0) : (i._removeClass(o.$element, "ui-selecting"), o.selecting = !1, o.startselected && (i._addClass(o.$element, "ui-unselecting"), o.unselecting = !0), i._trigger("unselecting", t, { unselecting: o.element }))), o.selected && (t.metaKey || t.ctrlKey || o.startselected || (i._removeClass(o.$element, "ui-selected"), o.selected = !1, i._addClass(o.$element, "ui-unselecting"), o.unselecting = !0, i._trigger("unselecting", t, { unselecting: o.element }))))) }), !1 } }, _mouseStop: function(t) { var i = this; return this.dragged = !1, n(".ui-unselecting", this.element[0]).each(function() { var r = n.data(this, "selectable-item");
                i._removeClass(r.$element, "ui-unselecting");
                r.unselecting = !1;
                r.startselected = !1;
                i._trigger("unselected", t, { unselected: r.element }) }), n(".ui-selecting", this.element[0]).each(function() { var r = n.data(this, "selectable-item");
                i._removeClass(r.$element, "ui-selecting")._addClass(r.$element, "ui-selected");
                r.selecting = !1;
                r.selected = !0;
                r.startselected = !0;
                i._trigger("selected", t, { selected: r.element }) }), this._trigger("stop", t), this.helper.remove(), !1 } });
    n.widget("ui.sortable", n.ui.mouse, { version: "1.12.1", widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function(n, t, i) { return n >= t && t + i > n }, _isFloating: function(n) { return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display")) }, _create: function() { this.containerCache = {};
            this._addClass("ui-sortable");
            this.refresh();
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = !0 }, _setOption: function(n, t) { this._super(n, t); "handle" === n && this._setHandleClassName() }, _setHandleClassName: function() { var t = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
            n.each(this.items, function() { t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle") }) }, _destroy: function() { this._mouseDestroy(); for (var n = this.items.length - 1; n >= 0; n--) this.items[n].item.removeData(this.widgetName + "-item"); return this }, _mouseCapture: function(t, i) { var r = null,
                f = !1,
                u = this; return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), n(t.target).parents().each(function() { if (n.data(this, u.widgetName + "-item") === u) return (r = n(this), !1) }), n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)), r ? !this.options.handle || i || (n(this.options.handle, r).find("*").addBack().each(function() { this === t.target && (f = !0) }), f) ? (this.currentItem = r, this._removeCurrentsFromItems(), !0) : !1 : !1) }, _mouseStart: function(t, i, r) { var f, e, u = this.options; if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, n.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && "auto" !== u.cursor && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", u.cursor), this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }<\/style>").appendTo(e)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r)
                for (f = this.containers.length - 1; f >= 0; f--) this.containers[f]._trigger("activate", t, this._uiHash(this)); return n.ui.ddmanager && (n.ui.ddmanager.current = this), n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(t), !0 }, _mouseDrag: function(t) { var e, u, f, o, i = this.options,
                r = !1; for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - this.document.scrollTop() < i.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - i.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < i.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + i.scrollSpeed)), t.pageX - this.document.scrollLeft() < i.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - i.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < i.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--)
                if (u = this.items[e], f = u.item[0], o = this._intersectsWithPointer(u), o && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && ("semi-dynamic" === this.options.type ? !n.contains(this.element[0], f) : !0)) { if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(u)) break;
                    this._rearrange(t, u);
                    this._trigger("change", t, this._uiHash()); break } return this._contactContainers(t), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1 }, _mouseStop: function(t, i) { if (t) { if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) { var e = this,
                        f = this.placeholder.offset(),
                        r = this.options.axis,
                        u = {};
                    r && "x" !== r || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft));
                    r && "y" !== r || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function() { e._clear(t) }) } else this._clear(t, i); return !1 } }, cancel: function() { if (this.dragging) { this._mouseUp(new n.Event("mouseup", { target: null })); "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show(); for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)), this }, serialize: function(t) { var r = this._getItemsAsjQuery(t && t.connected),
                i = []; return t = t || {}, n(r).each(function() { var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2])) }), !i.length && t.key && i.push(t.key + "="), i.join("&") }, toArray: function(t) { var r = this._getItemsAsjQuery(t && t.connected),
                i = []; return t = t || {}, r.each(function() { i.push(n(t.item || this).attr(t.attribute || "id") || "") }), i }, _intersectsWith: function(n) { var t = this.positionAbs.left,
                h = t + this.helperProportions.width,
                i = this.positionAbs.top,
                c = i + this.helperProportions.height,
                r = n.left,
                f = r + n.width,
                u = n.top,
                e = u + n.height,
                o = this.offset.click.top,
                s = this.offset.click.left,
                l = "x" === this.options.axis || i + o > u && e > i + o,
                a = "y" === this.options.axis || t + s > r && f > t + s,
                v = l && a; return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? v : t + this.helperProportions.width / 2 > r && f > h - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > u && e > c - this.helperProportions.height / 2 }, _intersectsWithPointer: function(n) { var t, i, r = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top, n.height),
                u = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left, n.width),
                f = r && u; return f ? (t = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1)) : !1 }, _intersectsWithSides: function(n) { var r = this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height),
                u = this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width),
                t = this._getDragVerticalDirection(),
                i = this._getDragHorizontalDirection(); return this.floating && i ? "right" === i && u || "left" === i && !u : t && ("down" === t && r || "up" === t && !r) }, _getDragVerticalDirection: function() { var n = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== n && (n > 0 ? "down" : "up") }, _getDragHorizontalDirection: function() { var n = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== n && (n > 0 ? "right" : "left") }, refresh: function(n) { return this._refreshItems(n), this._setHandleClassName(), this.refreshPositions(), this }, _connectWith: function() { var n = this.options; return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith }, _getItemsAsjQuery: function(t) {
            function h() { s.push(this) } var r, u, e, i, s = [],
                f = [],
                o = this._connectWith(); if (o && t)
                for (r = o.length - 1; r >= 0; r--)
                    for (e = n(o[r], this.document[0]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]); for (f.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = f.length - 1; r >= 0; r--) f[r][0].each(h); return n(s) }, _removeCurrentsFromItems: function() { var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = n.grep(this.items, function(n) { for (var i = 0; t.length > i; i++)
                    if (t[i] === n.item[0]) return !1; return !0 }) }, _refreshItems: function(t) { this.items = [];
            this.containers = [this]; var r, u, e, i, o, s, h, l, a = this.items,
                f = [
                    [n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : n(this.options.items, this.element), this]
                ],
                c = this._connectWith(); if (c && this.ready)
                for (r = c.length - 1; r >= 0; r--)
                    for (e = n(c[r], this.document[0]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, { item: this.currentItem }) : n(i.options.items, i.element), i]), this.containers.push(i)); for (r = f.length - 1; r >= 0; r--)
                for (o = f[r][1], s = f[r][0], u = 0, l = s.length; l > u; u++) h = n(s[u]), h.data(this.widgetName + "-item", o), a.push({ item: h, instance: o, width: 0, height: 0, left: 0, top: 0 }) }, refreshPositions: function(t) { this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1;
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()); for (var r, f, u, i = this.items.length - 1; i >= 0; i--) r = this.items[i], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0] || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top); if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) u = this.containers[i].element.offset(), this.containers[i].containerCache.left = u.left, this.containers[i].containerCache.top = u.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight(); return this }, _createPlaceholder: function(t) { t = t || this; var r, i = t.options;
            i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder, i.placeholder = { element: function() { var u = t.currentItem[0].nodeName.toLowerCase(),
                        i = n("<" + u + ">", t.document[0]); return t._addClass(i, "ui-sortable-placeholder", r || t.currentItem[0].className)._removeClass(i, "ui-sortable-helper"), "tbody" === u ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), n("<tr>", t.document[0]).appendTo(i)) : "tr" === u ? t._createTrPlaceholder(t.currentItem, i) : "img" === u && i.attr("src", t.currentItem.attr("src")), r || i.css("visibility", "hidden"), i }, update: function(n, u) {
                    (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10))) } });
            t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem));
            t.currentItem.after(t.placeholder);
            i.placeholder.update(t, t.placeholder) }, _createTrPlaceholder: function(t, i) { var r = this;
            t.children().each(function() { n("<td>&#160;<\/td>", r.document[0]).attr("colspan", n(this).attr("colspan") || 1).appendTo(i) }) }, _contactContainers: function(t) { for (var u, c, f, a, v, o, l, s, h, e = null, i = null, r = this.containers.length - 1; r >= 0; r--)
                if (!n.contains(this.currentItem[0], this.containers[r].element[0]))
                    if (this._intersectsWith(this.containers[r].containerCache)) { if (e && n.contains(this.containers[r].element[0], e.element[0])) continue;
                        e = this.containers[r];
                        i = r } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)), this.containers[r].containerCache.over = 0); if (e)
                if (1 === this.containers.length) this.containers[i].containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1);
                else { for (c = 1e4, f = null, s = e.floating || this._isFloating(this.currentItem), a = s ? "left" : "top", v = s ? "width" : "height", h = s ? "pageX" : "pageY", u = this.items.length - 1; u >= 0; u--) n.contains(this.containers[i].element[0], this.items[u].item[0]) && this.items[u].item[0] !== this.currentItem[0] && (o = this.items[u].item.offset()[a], l = !1, t[h] - o > this.items[u][v] / 2 && (l = !0), c > Math.abs(t[h] - o) && (c = Math.abs(t[h] - o), f = this.items[u], this.direction = l ? "up" : "down")); if (!f && !this.options.dropOnEmpty) return; if (this.currentContainer === this.containers[i]) return this.currentContainer.containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
                    f ? this._rearrange(t, f, null, !0) : this._rearrange(t, null, this.containers[i].element, !0);
                    this._trigger("change", t, this._uiHash());
                    this.containers[i]._trigger("change", t, this._uiHash(this));
                    this.currentContainer = this.containers[i];
                    this.options.placeholder.update(this.currentContainer, this.placeholder);
                    this.containers[i]._trigger("over", t, this._uiHash(this));
                    this.containers[i].containerCache.over = 1 } }, _createHelper: function(t) { var r = this.options,
                i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === r.helper ? this.currentItem.clone() : this.currentItem; return i.parents("body").length || n("parent" !== r.appendTo ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()), i }, _adjustOffsetFromHelper: function(t) { "string" == typeof t && (t = t.split(" "));
            n.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }); "left" in t && (this.offset.click.left = t.left + this.margins.left); "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left); "top" in t && (this.offset.click.top = t.top + this.margins.top); "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) }, _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var t = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && n.ui.ie) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function() { if ("relative" === this.cssPosition) { var n = this.currentItem.position(); return { top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } }, _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } }, _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function() { var t, r, u, i = this.options; "parent" === i.containment && (i.containment = this.helper[0].parentNode);
            ("document" === i.containment || "window" === i.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === i.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === i.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]); /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0], r = n(i.containment).offset(), u = "hidden" !== n(t).css("overflow"), this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) }, _convertPositionTo: function(t, i) { i || (i = this.position); var r = "absolute" === t ? 1 : -1,
                u = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                f = /(html|body)/i.test(u[0].tagName); return { top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r, left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r } }, _generatePosition: function(t) { var r, u, i = this.options,
                f = t.pageX,
                e = t.pageY,
                o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(o[0].tagName); return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)), { top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()), left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft()) } }, _rearrange: function(n, t, i, r) { i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1; var u = this.counter;
            this._delay(function() { u === this.counter && this.refreshPositions(!r) }) }, _clear: function(n, t) {
            function u(n, t, i) { return function(r) { i._trigger(n, r, t._uiHash(t)) } } this.reverting = !1; var i, r = []; if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) { for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS);
                this._removeClass(this.currentItem, "ui-sortable-helper") } else this.currentItem.show(); for (this.fromOutside && !t && r.push(function(n) { this._trigger("receive", n, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push(function(n) { this._trigger("update", n, this._uiHash()) }), this !== this.currentContainer && (t || (r.push(function(n) { this._trigger("remove", n, this._uiHash()) }), r.push(function(n) { return function(t) { n._trigger("receive", t, this._uiHash(this)) } }.call(this, this.currentContainer)), r.push(function(n) { return function(t) { n._trigger("update", t, this._uiHash(this)) } }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || r.push(u("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(u("out", this, this.containers[i])), this.containers[i].containerCache.over = 0); if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", n, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) { for (i = 0; r.length > i; i++) r[i].call(this, n);
                this._trigger("stop", n, this._uiHash()) } return this.fromOutside = !1, !this.cancelHelperRemoval }, _trigger: function() { n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() }, _uiHash: function(t) { var i = t || this; return { helper: i.helper, placeholder: i.placeholder || n([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: t ? t.element : null } } });
    n.widget("ui.accordion", { version: "1.12.1", options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: !1, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function() { var t = this.options;
            this.prevShow = this.prevHide = n();
            this._addClass("ui-accordion", "ui-widget ui-helper-reset");
            this.element.attr("role", "tablist");
            t.collapsible || t.active !== !1 && null != t.active || (t.active = 0);
            this._processPanels();
            0 > t.active && (t.active += this.headers.length);
            this._refresh() }, _getCreateEventData: function() { return { header: this.active, panel: this.active.length ? this.active.next() : n() } }, _createIcons: function() { var i, r, t = this.options.icons;
            t && (i = n("<span>"), this._addClass(i, "ui-accordion-header-icon", "ui-icon " + t.header), i.prependTo(this.headers), r = this.active.children(".ui-accordion-header-icon"), this._removeClass(r, t.header)._addClass(r, null, t.activeHeader)._addClass(this.headers, "ui-accordion-icons")) }, _destroyIcons: function() { this._removeClass(this.headers, "ui-accordion-icons");
            this.headers.children(".ui-accordion-header-icon").remove() }, _destroy: function() { var n;
            this.element.removeAttr("role");
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
            this._destroyIcons();
            n = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(); "content" !== this.options.heightStyle && n.css("height", "") }, _setOption: function(n, t) { return "active" === n ? (this._activate(t), void 0) : ("event" === n && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(n, t), "collapsible" !== n || t || this.options.active !== !1 || this._activate(0), "icons" === n && (this._destroyIcons(), t && this._createIcons()), void 0) }, _setOptionDisabled: function(n) { this._super(n);
            this.element.attr("aria-disabled", n);
            this._toggleClass(null, "ui-state-disabled", !!n);
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!n) }, _keydown: function(t) { if (!t.altKey && !t.ctrlKey) { var i = n.ui.keyCode,
                    u = this.headers.length,
                    f = this.headers.index(t.target),
                    r = !1; switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        r = this.headers[(f + 1) % u]; break;
                    case i.LEFT:
                    case i.UP:
                        r = this.headers[(f - 1 + u) % u]; break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(t); break;
                    case i.HOME:
                        r = this.headers[0]; break;
                    case i.END:
                        r = this.headers[u - 1] } r && (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), n(r).trigger("focus"), t.preventDefault()) } }, _panelKeyDown: function(t) { t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().trigger("focus") }, refresh: function() { var t = this.options;
            this._processPanels();
            t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = n()) : t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active);
            this._destroyIcons();
            this._refresh() }, _processPanels: function() { var t = this.headers,
                n = this.panels;
            this.headers = this.element.find(this.options.header);
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default");
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content");
            n && (this._off(t.not(this.headers)), this._off(n.not(this.panels))) }, _refresh: function() { var t, i = this.options,
                r = i.heightStyle,
                u = this.element.parent();
            this.active = this._findActive(i.active);
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed");
            this._addClass(this.active.next(), "ui-accordion-content-active");
            this.active.next().show();
            this.headers.attr("role", "tab").each(function() { var t = n(this),
                    r = t.uniqueId().attr("id"),
                    i = t.next(),
                    u = i.uniqueId().attr("id");
                t.attr("aria-controls", u);
                i.attr("aria-labelledby", r) }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide();
            this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0);
            this._createIcons();
            this._setupEvents(i.event); "fill" === r ? (t = u.height(), this.element.siblings(":visible").each(function() { var i = n(this),
                    r = i.css("position"); "absolute" !== r && "fixed" !== r && (t -= i.outerHeight(!0)) }), this.headers.each(function() { t -= n(this).outerHeight(!0) }), this.headers.next().each(function() { n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height())) }).css("overflow", "auto")) : "auto" === r && (t = 0, this.headers.next().each(function() { var i = n(this).is(":visible");
                i || n(this).show();
                t = Math.max(t, n(this).css("height", "").height());
                i || n(this).hide() }).height(t)) }, _activate: function(t) { var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: n.noop })) }, _findActive: function(t) { return "number" == typeof t ? this.headers.eq(t) : n() }, _setupEvents: function(t) { var i = { keydown: "_keydown" };
            t && n.each(t.split(" "), function(n, t) { i[t] = "_eventHandler" });
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, i);
            this._on(this.headers.next(), { keydown: "_panelKeyDown" });
            this._hoverable(this.headers);
            this._focusable(this.headers) }, _eventHandler: function(t) { var e, o, i = this.options,
                u = this.active,
                r = n(t.currentTarget),
                f = r[0] === u[0],
                s = f && i.collapsible,
                c = s ? n() : r.next(),
                l = u.next(),
                h = { oldHeader: u, oldPanel: l, newHeader: s ? n() : r, newPanel: c };
            t.preventDefault();
            f && !i.collapsible || this._trigger("beforeActivate", t, h) === !1 || (i.active = s ? !1 : this.headers.index(r), this.active = f ? n() : r, this._toggle(h), this._removeClass(u, "ui-accordion-header-active", "ui-state-active"), i.icons && (e = u.children(".ui-accordion-header-icon"), this._removeClass(e, null, i.icons.activeHeader)._addClass(e, null, i.icons.header)), f || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), i.icons && (o = r.children(".ui-accordion-header-icon"), this._removeClass(o, null, i.icons.header)._addClass(o, null, i.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active"))) }, _toggle: function(t) { var r = t.newPanel,
                i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = r;
            this.prevHide = i;
            this.options.animate ? this._animate(r, i, t) : (i.hide(), r.show(), this._toggleComplete(t));
            i.attr({ "aria-hidden": "true" });
            i.prev().attr({ "aria-selected": "false", "aria-expanded": "false" });
            r.length && i.length ? i.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : r.length && this.headers.filter(function() { return 0 === parseInt(n(this).attr("tabIndex"), 10) }).attr("tabIndex", -1);
            r.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _animate: function(n, t, i) { var h, r, u, c = this,
                o = 0,
                l = n.css("box-sizing"),
                a = n.length && (!t.length || n.index() < t.index()),
                e = this.options.animate || {},
                f = a && e.down || e,
                s = function() { c._toggleComplete(i) }; return "number" == typeof f && (u = f), "string" == typeof f && (r = f), r = r || f.easing || e.easing, u = u || f.duration || e.duration, t.length ? n.length ? (h = n.show().outerHeight(), t.animate(this.hideProps, { duration: u, easing: r, step: function(n, t) { t.now = Math.round(n) } }), n.hide().animate(this.showProps, { duration: u, easing: r, complete: s, step: function(n, i) { i.now = Math.round(n); "height" !== i.prop ? "content-box" === l && (o += i.now) : "content" !== c.options.heightStyle && (i.now = Math.round(h - t.outerHeight() - o), o = 0) } }), void 0) : t.animate(this.hideProps, u, r, s) : n.animate(this.showProps, u, r, s) }, _toggleComplete: function(n) { var t = n.oldPanel,
                i = t.prev();
            this._removeClass(t, "ui-accordion-content-active");
            this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed");
            t.length && (t.parent()[0].className = t.parent()[0].className);
            this._trigger("activate", null, n) } });
    n.widget("ui.menu", { version: "1.12.1", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function() { this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 });
            this._addClass("ui-menu", "ui-widget ui-widget-content");
            this._on({ "mousedown .ui-menu-item": function(n) { n.preventDefault() }, "click .ui-menu-item": function(t) { var i = n(t.target),
                        r = n(n.ui.safeActiveElement(this.document[0]));!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && r.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))) }, "mouseenter .ui-menu-item": function(t) { if (!this.previousFilter) { var r = n(t.target).closest(".ui-menu-item"),
                            i = n(t.currentTarget);
                        r[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i)) } }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function(n, t) { var i = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(n, i) }, blur: function(t) { this._delay(function() { var i = !n.contains(this.element[0], n.ui.safeActiveElement(this.document[0]));
                        i && this.collapseAll(t) }) }, keydown: "_keydown" });
            this.refresh();
            this._on(this.document, { click: function(n) { this._closeOnDocumentClick(n) && this.collapseAll(n);
                    this.mouseHandled = !1 } }) }, _destroy: function() { var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                i = t.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
            i.children().each(function() { var t = n(this);
                t.data("ui-menu-submenu-caret") && t.remove() }) }, _keydown: function(t) { var i, u, r, f, e = !0; switch (t.keyCode) {
                case n.ui.keyCode.PAGE_UP:
                    this.previousPage(t); break;
                case n.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t); break;
                case n.ui.keyCode.HOME:
                    this._move("first", "first", t); break;
                case n.ui.keyCode.END:
                    this._move("last", "last", t); break;
                case n.ui.keyCode.UP:
                    this.previous(t); break;
                case n.ui.keyCode.DOWN:
                    this.next(t); break;
                case n.ui.keyCode.LEFT:
                    this.collapse(t); break;
                case n.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t); break;
                case n.ui.keyCode.ENTER:
                case n.ui.keyCode.SPACE:
                    this._activate(t); break;
                case n.ui.keyCode.ESCAPE:
                    this.collapse(t); break;
                default:
                    e = !1;
                    u = this.previousFilter || "";
                    f = !1;
                    r = t.keyCode >= 96 && 105 >= t.keyCode ? "" + (t.keyCode - 96) : String.fromCharCode(t.keyCode);
                    clearTimeout(this.filterTimer);
                    r === u ? f = !0 : r = u + r;
                    i = this._filterMenuItems(r);
                    i = f && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i;
                    i.length || (r = String.fromCharCode(t.keyCode), i = this._filterMenuItems(r));
                    i.length ? (this.focus(t, i), this.previousFilter = r, this.filterTimer = this._delay(function() { delete this.previousFilter }, 1e3)) : delete this.previousFilter } e && t.preventDefault() }, _activate: function(n) { this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(n) : this.select(n)) }, refresh: function() { var u, t, f, i, e, r = this,
                s = this.options.icons.submenu,
                o = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
            f = o.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() { var t = n(this),
                    i = t.prev(),
                    u = n("<span>").data("ui-menu-submenu-caret", !0);
                r._addClass(u, "ui-menu-icon", "ui-icon " + s);
                i.attr("aria-haspopup", "true").prepend(u);
                t.attr("aria-labelledby", i.attr("id")) });
            this._addClass(f, "ui-menu", "ui-widget ui-widget-content ui-front");
            u = o.add(this.element);
            t = u.find(this.options.items);
            t.not(".ui-menu-item").each(function() { var t = n(this);
                r._isDivider(t) && r._addClass(t, "ui-menu-divider", "ui-widget-content") });
            i = t.not(".ui-menu-item, .ui-menu-divider");
            e = i.children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() });
            this._addClass(i, "ui-menu-item")._addClass(e, "ui-menu-item-wrapper");
            t.filter(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !n.contains(this.element[0], this.active[0]) && this.blur() }, _itemRole: function() { return { menu: "menuitem", listbox: "option" } [this.options.role] }, _setOption: function(n, t) { if ("icons" === n) { var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu) } this._super(n, t) }, _setOptionDisabled: function(n) { this._super(n);
            this.element.attr("aria-disabled", n + "");
            this._toggleClass(null, "ui-state-disabled", !!n) }, focus: function(n, t) { var i, r, u;
            this.blur(n, n && "focus" === n.type);
            this._scrollIntoView(t);
            this.active = t.first();
            r = this.active.children(".ui-menu-item-wrapper");
            this._addClass(r, null, "ui-state-active");
            this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
            u = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
            this._addClass(u, null, "ui-state-active");
            n && "keydown" === n.type ? this._close() : this.timer = this._delay(function() { this._close() }, this.delay);
            i = t.children(".ui-menu");
            i.length && n && /^mouse/.test(n.type) && this._startOpening(i);
            this.activeMenu = t.parent();
            this._trigger("focus", n, { item: t }) }, _scrollIntoView: function(t) { var e, o, i, r, u, f;
            this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.outerHeight(), 0 > i ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f)) }, blur: function(n, t) { t || clearTimeout(this.timer);
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", n, { item: this.active }), this.active = null) }, _startOpening: function(n) { clearTimeout(this.timer); "true" === n.attr("aria-hidden") && (this.timer = this._delay(function() { this._close();
                this._open(n) }, this.delay)) }, _open: function(t) { var i = n.extend({ of: this.active }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i) }, collapseAll: function(t, i) { clearTimeout(this.timer);
            this.timer = this._delay(function() { var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element);
                this._close(r);
                this.blur(t);
                this._removeClass(r.find(".ui-state-active"), null, "ui-state-active");
                this.activeMenu = r }, this.delay) }, _close: function(n) { n || (n = this.active ? this.active.parent() : this.element);
            n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false") }, _closeOnDocumentClick: function(t) { return !n(t.target).closest(".ui-menu").length }, _isDivider: function(n) { return !/[^\-\u2014\u2013\s]/.test(n.text()) }, collapse: function(n) { var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(n, t)) }, expand: function(n) { var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()), this._delay(function() { this.focus(n, t) })) }, next: function(n) { this._move("next", "first", n) }, previous: function(n) { this._move("prev", "last", n) }, isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length }, isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length }, _move: function(n, t, i) { var r;
            this.active && (r = "first" === n || "last" === n ? this.active["first" === n ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0));
            r && r.length && this.active || (r = this.activeMenu.find(this.options.items)[t]());
            this.focus(i, r) }, nextPage: function(t) { var i, r, u; return this.active ? (this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() { return i = n(this), 0 > i.offset().top - r - u }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0) }, previousPage: function(t) { var i, r, u; return this.active ? (this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() { return i = n(this), i.offset().top - r + u > 0 }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0) }, _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") }, select: function(t) { this.active = this.active || n(t.target).closest(".ui-menu-item"); var i = { item: this.active };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0);
            this._trigger("select", t, i) }, _filterMenuItems: function(t) { var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                r = RegExp("^" + i, "i"); return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() { return r.test(n.trim(n(this).children(".ui-menu-item-wrapper").text())) }) } });
    n.widget("ui.autocomplete", { version: "1.12.1", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function() { var t, i, r, u = this.element[0].nodeName.toLowerCase(),
                f = "textarea" === u,
                e = "input" === u;
            this.isMultiLine = f || !e && this._isContentEditable(this.element);
            this.valueMethod = this.element[f || e ? "val" : "text"];
            this.isNewMenu = !0;
            this._addClass("ui-autocomplete-input");
            this.element.attr("autocomplete", "off");
            this._on(this.element, { keydown: function(u) { if (this.element.prop("readOnly")) return t = !0, r = !0, i = !0, void 0;
                    t = !1;
                    r = !1;
                    i = !1; var f = n.ui.keyCode; switch (u.keyCode) {
                        case f.PAGE_UP:
                            t = !0;
                            this._move("previousPage", u); break;
                        case f.PAGE_DOWN:
                            t = !0;
                            this._move("nextPage", u); break;
                        case f.UP:
                            t = !0;
                            this._keyEvent("previous", u); break;
                        case f.DOWN:
                            t = !0;
                            this._keyEvent("next", u); break;
                        case f.ENTER:
                            this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u)); break;
                        case f.TAB:
                            this.menu.active && this.menu.select(u); break;
                        case f.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(u), u.preventDefault()); break;
                        default:
                            i = !0;
                            this._searchTimeout(u) } }, keypress: function(r) { if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault(), void 0; if (!i) { var u = n.ui.keyCode; switch (r.keyCode) {
                            case u.PAGE_UP:
                                this._move("previousPage", r); break;
                            case u.PAGE_DOWN:
                                this._move("nextPage", r); break;
                            case u.UP:
                                this._keyEvent("previous", r); break;
                            case u.DOWN:
                                this._keyEvent("next", r) } } }, input: function(n) { return r ? (r = !1, n.preventDefault(), void 0) : (this._searchTimeout(n), void 0) }, focus: function() { this.selectedItem = null;
                    this.previous = this._value() }, blur: function(n) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(n), this._change(n), void 0) } });
            this._initSource();
            this.menu = n("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance");
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
            this._on(this.menu.element, { mousedown: function(t) { t.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function() { delete this.cancelBlur;
                        this.element[0] !== n.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus") }) }, menufocus: function(t, i) { var r, u; return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function() { n(t.target).trigger(t.originalEvent) }), void 0) : (u = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, { item: u }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(u.value), r = i.item.attr("aria-label") || u.value, r && n.trim(r).length && (this.liveRegion.children().hide(), n("<div>").text(r).appendTo(this.liveRegion)), void 0) }, menuselect: function(t, i) { var r = i.item.data("ui-autocomplete-item"),
                        u = this.previous;
                    this.element[0] !== n.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = u, this._delay(function() { this.previous = u;
                        this.selectedItem = r }));!1 !== this._trigger("select", t, { item: r }) && this._value(r.value);
                    this.term = this._value();
                    this.close(t);
                    this.selectedItem = r } });
            this.liveRegion = n("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) }, _destroy: function() { clearTimeout(this.searching);
            this.element.removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove() }, _setOption: function(n, t) { this._super(n, t); "source" === n && this._initSource(); "appendTo" === n && this.menu.element.appendTo(this._appendTo()); "disabled" === n && t && this.xhr && this.xhr.abort() }, _isEventTargetInWidget: function(t) { var i = this.menu.element[0]; return t.target === this.element[0] || t.target === i || n.contains(i, t.target) }, _closeOnClickOutside: function(n) { this._isEventTargetInWidget(n) || this.close() }, _appendTo: function() { var t = this.options.appendTo; return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t }, _initSource: function() { var i, r, t = this;
            n.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, r) { r(n.ui.autocomplete.filter(i, t.term)) }) : "string" == typeof this.options.source ? (r = this.options.source, this.source = function(i, u) { t.xhr && t.xhr.abort();
                t.xhr = n.ajax({ url: r, data: i, dataType: "json", success: function(n) { u(n) }, error: function() { u([]) } }) }) : this.source = this.options.source }, _searchTimeout: function(n) { clearTimeout(this.searching);
            this.searching = this._delay(function() { var t = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                t && (!t || i || r) || (this.selectedItem = null, this.search(null, n)) }, this.options.delay) }, search: function(n, t) { return n = null != n ? n : this._value(), this.term = this._value(), n.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(n) : void 0 }, _search: function(n) { this.pending++;
            this._addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({ term: n }, this._response()) }, _response: function() { var t = ++this.requestIndex; return n.proxy(function(n) { t === this.requestIndex && this.__response(n);
                this.pending--;
                this.pending || this._removeClass("ui-autocomplete-loading") }, this) }, __response: function(n) { n && (n = this._normalize(n));
            this._trigger("response", null, { content: n });!this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close() }, close: function(n) { this.cancelSearch = !0;
            this._close(n) }, _close: function(n) { this._off(this.document, "mousedown");
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n)) }, _change: function(n) { this.previous !== this._value() && this._trigger("change", n, { item: this.selectedItem }) }, _normalize: function(t) { return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) { return "string" == typeof t ? { label: t, value: t } : n.extend({}, t, { label: t.label || t.value, value: t.value || t.label }) }) }, _suggest: function(t) { var i = this.menu.element.empty();
            this._renderMenu(i, t);
            this.isNewMenu = !0;
            this.menu.refresh();
            i.show();
            this._resizeMenu();
            i.position(n.extend({ of: this.element }, this.options.position));
            this.options.autoFocus && this.menu.next();
            this._on(this.document, { mousedown: "_closeOnClickOutside" }) }, _resizeMenu: function() { var n = this.menu.element;
            n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth())) }, _renderMenu: function(t, i) { var r = this;
            n.each(i, function(n, i) { r._renderItemData(t, i) }) }, _renderItemData: function(n, t) { return this._renderItem(n, t).data("ui-autocomplete-item", t) }, _renderItem: function(t, i) { return n("<li>").append(n("<div>").text(i.label)).appendTo(t) }, _move: function(n, t) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[n](t), void 0) : (this.search(null, t), void 0) }, widget: function() { return this.menu.element }, _value: function() { return this.valueMethod.apply(this.element, arguments) }, _keyEvent: function(n, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault()) }, _isContentEditable: function(n) { if (!n.length) return !1; var t = n.prop("contentEditable"); return "inherit" === t ? this._isContentEditable(n.parent()) : "true" === t } });
    n.extend(n.ui.autocomplete, { escapeRegex: function(n) { return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function(t, i) { var r = RegExp(n.ui.autocomplete.escapeRegex(i), "i"); return n.grep(t, function(n) { return r.test(n.label || n.value || n) }) } });
    n.widget("ui.autocomplete", n.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function(n) { return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } }, __response: function(t) { var i;
            this._superApply(arguments);
            this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), n("<div>").text(i).appendTo(this.liveRegion)) } });
    n.ui.autocomplete;
    y = /ui-corner-([a-z]){2,6}/g;
    n.widget("ui.controlgroup", { version: "1.12.1", defaultElement: "<div>", options: { direction: "horizontal", disabled: null, onlyVisible: !0, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } }, _create: function() { this._enhance() }, _enhance: function() { this.element.attr("role", "toolbar");
            this.refresh() }, _destroy: function() { this._callChildMethod("destroy");
            this.childWidgets.removeData("ui-controlgroup-data");
            this.element.removeAttr("role");
            this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap() }, _initWidgets: function() { var t = this,
                i = [];
            n.each(this.options.items, function(r, u) { var f, e = {}; if (u) return "controlgroupLabel" === r ? (f = t.element.find(u), f.each(function() { var t = n(this);
                    t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'><\/span>") }), t._addClass(f, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(f.get()), void 0) : (n.fn[r] && (e = t["_" + r + "Options"] ? t["_" + r + "Options"]("middle") : { classes: {} }, t.element.find(u).each(function() { var u = n(this),
                        f = u[r]("instance"),
                        o = n.widget.extend({}, e),
                        s; "button" === r && u.parent(".ui-spinner").length || (f || (f = u[r]()[r]("instance")), f && (o.classes = t._resolveClassesValues(o.classes, f)), u[r](o), s = u[r]("widget"), n.data(s[0], "ui-controlgroup-data", f ? f : u[r]("instance")), i.push(s[0])) })), void 0) });
            this.childWidgets = n(n.unique(i));
            this._addClass(this.childWidgets, "ui-controlgroup-item") }, _callChildMethod: function(t) { this.childWidgets.each(function() { var r = n(this),
                    i = r.data("ui-controlgroup-data");
                i && i[t] && i[t]() }) }, _updateCornerClass: function(n, t) { var i = this._buildSimpleOptions(t, "label").classes.label;
            this._removeClass(n, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all");
            this._addClass(n, null, i) }, _buildSimpleOptions: function(n, t) { var i = "vertical" === this.options.direction,
                r = { classes: {} }; return r.classes[t] = { middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all" } [n], r }, _spinnerOptions: function(n) { var t = this._buildSimpleOptions(n, "ui-spinner"); return t.classes["ui-spinner-up"] = "", t.classes["ui-spinner-down"] = "", t }, _buttonOptions: function(n) { return this._buildSimpleOptions(n, "ui-button") }, _checkboxradioOptions: function(n) { return this._buildSimpleOptions(n, "ui-checkboxradio-label") }, _selectmenuOptions: function(n) { var t = "vertical" === this.options.direction; return { width: t ? "auto" : !1, classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (t ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (t ? "top" : "left") }, last: { "ui-selectmenu-button-open": t ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (t ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } } [n] } }, _resolveClassesValues: function(t, i) { var r = {}; return n.each(t, function(u) { var f = i.options.classes[u] || "";
                f = n.trim(f.replace(y, ""));
                r[u] = (f + " " + t[u]).replace(/\s+/g, " ") }), r }, _setOption: function(n, t) { return "direction" === n && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(n, t), "disabled" === n ? (this._callChildMethod(t ? "disable" : "enable"), void 0) : (this.refresh(), void 0) }, refresh: function() { var t, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction); "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix");
            this._initWidgets();
            t = this.childWidgets;
            this.options.onlyVisible && (t = t.filter(":visible"));
            t.length && (n.each(["first", "last"], function(n, r) { var u = t[r]().data("ui-controlgroup-data"),
                    f;
                u && i["_" + u.widgetName + "Options"] ? (f = i["_" + u.widgetName + "Options"](1 === t.length ? "only" : r), f.classes = i._resolveClassesValues(f.classes, u), u.element[u.widgetName](f)) : i._updateCornerClass(t[r](), r) }), this._callChildMethod("refresh")) } });
    n.widget("ui.checkboxradio", [n.ui.formResetMixin, { version: "1.12.1", options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } }, _getCreateOptions: function() { var t, i, u = this,
                r = this._super() || {}; return this._readType(), i = this.element.labels(), this.label = n(i[i.length - 1]), this.label.length || n.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() { u.originalLabel += 3 === this.nodeType ? n(this).text() : this.outerHTML }), this.originalLabel && (r.label = this.originalLabel), t = this.element[0].disabled, null != t && (r.disabled = t), r }, _create: function() { var n = this.element[0].checked;
            this._bindFormResetHandler();
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled);
            this._setOption("disabled", this.options.disabled);
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"); "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label");
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel);
            this._enhance();
            n && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover"));
            this._on({ change: "_toggleClasses", focus: function() { this._addClass(this.label, null, "ui-state-focus ui-visual-focus") }, blur: function() { this._removeClass(this.label, null, "ui-state-focus ui-visual-focus") } }) }, _readType: function() { var t = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type; "input" === t && /radio|checkbox/.test(this.type) || n.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type) }, _enhance: function() { this._updateIcon(this.element[0].checked) }, widget: function() { return this.label }, _getRadioGroup: function() { var t, i = this.element[0].name,
                r = "input[name='" + n.ui.escapeSelector(i) + "']"; return i ? (t = this.form.length ? n(this.form[0].elements).filter(r) : n(r).filter(function() { return 0 === n(this).form().length }), t.not(this.element)) : n([]) }, _toggleClasses: function() { var t = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t);
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t); "radio" === this.type && this._getRadioGroup().each(function() { var t = n(this).checkboxradio("instance");
                t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active") }) }, _destroy: function() { this._unbindFormResetHandler();
            this.icon && (this.icon.remove(), this.iconSpace.remove()) }, _setOption: function(n, t) { if ("label" !== n || t) return (this._super(n, t), "disabled" === n ? (this._toggleClass(this.label, null, "ui-state-disabled", t), this.element[0].disabled = t, void 0) : (this.refresh(), void 0)) }, _updateIcon: function(t) { var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = n("<span>"), this.iconSpace = n("<span> <\/span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon) }, _updateLabel: function() { var n = this.label.contents().not(this.element[0]);
            this.icon && (n = n.not(this.icon[0]));
            this.iconSpace && (n = n.not(this.iconSpace[0]));
            n.remove();
            this.label.append(this.options.label) }, refresh: function() { var n = this.element[0].checked,
                t = this.element[0].disabled;
            this._updateIcon(n);
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", n);
            null !== this.options.label && this._updateLabel();
            t !== this.options.disabled && this._setOptions({ disabled: t }) } }]);
    n.ui.checkboxradio;
    n.widget("ui.button", { version: "1.12.1", defaultElement: "<button>", options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 }, _getCreateOptions: function() { var n, t = this._super() || {}; return this.isInput = this.element.is("input"), n = this.element[0].disabled, null != n && (t.disabled = n), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (t.label = this.originalLabel), t }, _create: function() {!this.option.showLabel & !this.options.icon && (this.options.showLabel = !0);
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1);
            this.hasTitle = !!this.element.attr("title");
            this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label));
            this._addClass("ui-button", "ui-widget");
            this._setOption("disabled", this.options.disabled);
            this._enhance();
            this.element.is("a") && this._on({ keyup: function(t) { t.keyCode === n.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click")) } }) }, _enhance: function() { this.element.is("button") || this.element.attr("role", "button");
            this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip()) }, _updateTooltip: function() { this.title = this.element.attr("title");
            this.options.showLabel || this.title || this.element.attr("title", this.options.label) }, _updateIcon: function(t, i) { var u = "iconPosition" !== t,
                r = u ? this.options.iconPosition : i,
                f = "top" === r || "bottom" === r;
            this.icon ? u && this._removeClass(this.icon, null, this.options.icon) : (this.icon = n("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only"));
            u && this._addClass(this.icon, null, i);
            this._attachIcon(r);
            f ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = n("<span> <\/span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(r)) }, _destroy: function() { this.element.removeAttr("role");
            this.icon && this.icon.remove();
            this.iconSpace && this.iconSpace.remove();
            this.hasTitle || this.element.removeAttr("title") }, _attachIconSpace: function(n) { this.icon[/^(?:end|bottom)/.test(n) ? "before" : "after"](this.iconSpace) }, _attachIcon: function(n) { this.element[/^(?:end|bottom)/.test(n) ? "append" : "prepend"](this.icon) }, _setOptions: function(n) { var t = void 0 === n.showLabel ? this.options.showLabel : n.showLabel,
                i = void 0 === n.icon ? this.options.icon : n.icon;
            t || i || (n.showLabel = !0);
            this._super(n) }, _setOption: function(n, t) { "icon" === n && (t ? this._updateIcon(n, t) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())); "iconPosition" === n && this._updateIcon(n, t); "showLabel" === n && (this._toggleClass("ui-button-icon-only", null, !t), this._updateTooltip()); "label" === n && (this.isInput ? this.element.val(t) : (this.element.html(t), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition))));
            this._super(n, t); "disabled" === n && (this._toggleClass(null, "ui-state-disabled", t), this.element[0].disabled = t, t && this.element.blur()) }, refresh: function() { var n = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            n !== this.options.disabled && this._setOptions({ disabled: n });
            this._updateTooltip() } });
    n.uiBackCompat !== !1 && (n.widget("ui.button", n.ui.button, { options: { text: !0, icons: { primary: null, secondary: null } }, _create: function() { this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text);!this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel);
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end");
            this._super() }, _setOption: function(n, t) { return "text" === n ? (this._super("showLabel", t), void 0) : ("showLabel" === n && (this.options.text = t), "icon" === n && (this.options.icons.primary = t), "icons" === n && (t.primary ? (this._super("icon", t.primary), this._super("iconPosition", "beginning")) : t.secondary && (this._super("icon", t.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0) } }), n.fn.button = function(t) { return function() { return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? t.apply(this, arguments) : (n.ui.checkboxradio || n.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments)) } }(n.fn.button), n.fn.buttonset = function() { return n.ui.controlgroup || n.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments)) });
    n.ui.button;
    n.extend(n.ui, { datepicker: { version: "1.12.1" } });
    n.extend(c.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function() { return this.dpDiv }, setDefaults: function(n) { return u(this._defaults, n || {}), this }, _attachDatepicker: function(t, i) { var r, f, u;
            r = t.nodeName.toLowerCase();
            f = "div" === r || "span" === r;
            t.id || (this.uuid += 1, t.id = "dp" + this.uuid);
            u = this._newInst(n(t), f);
            u.settings = n.extend({}, i || {}); "input" === r ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u) }, _newInst: function(t, i) { var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: r, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? l(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv } }, _connectDatepicker: function(t, i) { var r = n(t);
            i.append = n([]);
            i.trigger = n([]);
            r.hasClass(this.markerClassName) || (this._attachments(r, i), r.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), n.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t)) }, _attachments: function(t, i) { var u, r, f, e = this._get(i, "appendText"),
                o = this._get(i, "isRTL");
            i.append && i.append.remove();
            e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"), t[o ? "before" : "after"](i.append));
            t.off("focus", this._showDatepicker);
            i.trigger && i.trigger.remove();
            u = this._get(i, "showOn");
            ("focus" === u || "both" === u) && t.on("focus", this._showDatepicker);
            ("button" === u || "both" === u) && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({ src: f, alt: r, title: r }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({ src: f, alt: r, title: r }) : r)), t[o ? "before" : "after"](i.trigger), i.trigger.on("click", function() { return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1 })) }, _autoSize: function(n) { if (this._get(n, "autoSize") && !n.inline) { var r, u, f, t, i = new Date(2009, 11, 20),
                    e = this._get(n, "dateFormat");
                e.match(/[DM]/) && (r = function(n) { for (u = 0, f = 0, t = 0; n.length > t; t++) n[t].length > u && (u = n[t].length, f = t); return f }, i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))), i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay()));
                n.input.attr("size", this._formatDate(n, i).length) } }, _inlineDatepicker: function(t, i) { var r = n(t);
            r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(i.dpDiv), n.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block")) }, _dialogDatepicker: function(t, i, r, f, e) { var s, h, c, l, a, o = this._dialogInst; return o || (this.uuid += 1, s = "dp" + this.uuid, this._dialogInput = n("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), n("body").append(this._dialogInput), o = this._dialogInst = this._newInst(this._dialogInput, !1), o.settings = {}, n.data(this._dialogInput[0], "datepicker", o)), u(o.settings, f || {}), i = i && i.constructor === Date ? this._formatDate(o, i) : i, this._dialogInput.val(i), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null, this._pos || (h = document.documentElement.clientWidth, c = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, a = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + l, c / 2 - 150 + a]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = r, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], "datepicker", o), this }, _destroyDatepicker: function(t) { var r, u = n(t),
                f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), n.removeData(t, "datepicker"), "input" === r ? (f.append.remove(), f.trigger.remove(), u.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === r || "span" === r) && u.removeClass(this.markerClassName).empty(), i === f && (i = null)) }, _enableDatepicker: function(t) { var i, r, u = n(t),
                f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, f.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (r = u.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs, function(n) { return n === t ? null : n })) }, _disableDatepicker: function(t) { var i, r, u = n(t),
                f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, f.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (r = u.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs, function(n) { return n === t ? null : n }), this._disabledInputs[this._disabledInputs.length] = t) }, _isDisabledDatepicker: function(n) { if (!n) return !1; for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === n) return !0; return !1 }, _getInst: function(t) { try { return n.data(t, "datepicker") } catch (i) { throw "Missing instance data for this datepicker"; } }, _optionDatepicker: function(t, i, r) { var e, h, o, s, f = this._getInst(t); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? n.extend({}, n.datepicker._defaults) : f ? "all" === i ? n.extend({}, f.settings) : this._get(f, i) : null : (e = i || {}, "string" == typeof i && (e = {}, e[i] = r), f && (this._curInst === f && this._hideDatepicker(), h = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(f, "min"), s = this._getMinMaxDate(f, "max"), u(f.settings, e), null !== o && void 0 !== e.dateFormat && void 0 === e.minDate && (f.settings.minDate = this._formatDate(f, o)), null !== s && void 0 !== e.dateFormat && void 0 === e.maxDate && (f.settings.maxDate = this._formatDate(f, s)), "disabled" in e && (e.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(n(t), f), this._autoSize(f), this._setDate(f, h), this._updateAlternate(f), this._updateDatepicker(f)), void 0) }, _changeDatepicker: function(n, t, i) { this._optionDatepicker(n, t, i) }, _refreshDatepicker: function(n) { var t = this._getInst(n);
            t && this._updateDatepicker(t) }, _setDateDatepicker: function(n, t) { var i = this._getInst(n);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i)) }, _getDateDatepicker: function(n, t) { var i = this._getInst(n); return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null }, _doKeyDown: function(t) { var u, e, f, i = n.datepicker._getInst(t.target),
                r = !0,
                o = i.dpDiv.is(".ui-datepicker-rtl"); if (i._keyEvent = !0, n.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    n.datepicker._hideDatepicker();
                    r = !1; break;
                case 13:
                    return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv), f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]), u = n.datepicker._get(i, "onSelect"), u ? (e = n.datepicker._formatDate(i), u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(), !1;
                case 27:
                    n.datepicker._hideDatepicker(); break;
                case 33:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M"); break;
                case 34:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M"); break;
                case 35:
                    (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
                    r = t.ctrlKey || t.metaKey; break;
                case 36:
                    (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
                    r = t.ctrlKey || t.metaKey; break;
                case 37:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M"); break;
                case 38:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
                    r = t.ctrlKey || t.metaKey; break;
                case 39:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M"); break;
                case 40:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
                    r = t.ctrlKey || t.metaKey; break;
                default:
                    r = !1 } else 36 === t.keyCode && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation()) }, _doKeyPress: function(t) { var i, r, u = n.datepicker._getInst(t.target); if (n.datepicker._get(u, "constrainInput")) return (i = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")), r = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > r || !i || i.indexOf(r) > -1) }, _doKeyUp: function(t) { var r, i = n.datepicker._getInst(t.target); if (i.input.val() !== i.lastVal) try { r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
                r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i)) } catch (u) {}
            return !0 }, _showDatepicker: function(t) { if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) { var i, o, s, r, f, e, h;
                i = n.datepicker._getInst(t);
                n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0]));
                o = n.datepicker._get(i, "beforeShow");
                s = o ? o.apply(t, [t, i]) : {};
                s !== !1 && (u(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), r = !1, n(t).parents().each(function() { return r |= "fixed" === n(this).css("position"), !r }), f = { left: n.datepicker._pos[0], top: n.datepicker._pos[1] }, n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), n.datepicker._updateDatepicker(i), f = n.datepicker._checkOffset(i, f, r), i.dpDiv.css({ position: n.datepicker._inDialog && n.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: f.left + "px", top: f.top + "px" }), i.inline || (e = n.datepicker._get(i, "showAnim"), h = n.datepicker._get(i, "duration"), i.dpDiv.css("z-index", k(n(t)) + 1), n.datepicker._datepickerShowing = !0, n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null), n.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), n.datepicker._curInst = i)) } }, _updateDatepicker: function(t) { this.maxRows = 4;
            i = t;
            t.dpDiv.empty().append(this._generateHTML(t));
            this._attachHandlers(t); var r, u = this._getNumberOfMonths(t),
                f = u[1],
                e = t.dpDiv.find("." + this._dayOverClass + " a");
            e.length > 0 && a.apply(e.get(0));
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            f > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", 17 * f + "em");
            t.dpDiv[(1 !== u[0] || 1 !== u[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            t === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(t) && t.input.trigger("focus");
            t.yearshtml && (r = t.yearshtml, setTimeout(function() { r === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);
                r = t.yearshtml = null }, 0)) }, _shouldFocusInput: function(n) { return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus") }, _checkOffset: function(t, i, r) { var u = t.dpDiv.outerWidth(),
                f = t.dpDiv.outerHeight(),
                h = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()),
                s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop()); return i.left -= this._get(t, "isRTL") ? u - h : 0, i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0, i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0), i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0), i }, _findPos: function(t) { for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || n.expr.filters.hidden(t));) t = t[u ? "previousSibling" : "nextSibling"]; return i = n(t).offset(), [i.left, i.top] }, _hideDatepicker: function(t) { var r, f, u, e, i = this._curInst;!i || t && i !== n.data(t, "datepicker") || this._datepickerShowing && (r = this._get(i, "showAnim"), f = this._get(i, "duration"), u = function() { n.datepicker._tidyDialog(i) }, n.effects && (n.effects.effect[r] || n.effects[r]) ? i.dpDiv.hide(r, n.datepicker._get(i, "showOptions"), f, u) : i.dpDiv["slideDown" === r ? "slideUp" : "fadeIn" === r ? "fadeOut" : "hide"](r ? f : null, u), r || u(), this._datepickerShowing = !1, e = this._get(i, "onClose"), e && e.apply(i.input ? i.input[0] : null, [i.input ? i.input.val() : "", i]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))), this._inDialog = !1) }, _tidyDialog: function(n) { n.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") }, _checkExternalClick: function(t) { if (n.datepicker._curInst) { var i = n(t.target),
                    r = n.datepicker._getInst(i[0]);
                (i[0].id === n.datepicker._mainDivId || 0 !== i.parents("#" + n.datepicker._mainDivId).length || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker() } }, _adjustDate: function(t, i, r) { var f = n(t),
                u = this._getInst(f[0]);
            this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + ("M" === r ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u)) }, _gotoToday: function(t) { var r, u = n(t),
                i = this._getInst(u[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear());
            this._notifyChange(i);
            this._adjustDate(u) }, _selectMonthYear: function(t, i, r) { var f = n(t),
                u = this._getInst(f[0]);
            u["selected" + ("M" === r ? "Month" : "Year")] = u["draw" + ("M" === r ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
            this._notifyChange(u);
            this._adjustDate(f) }, _selectDay: function(t, i, r, u) { var f, e = n(t);
            n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))) }, _clearDate: function(t) { var i = n(t);
            this._selectDate(i, "") }, _selectDate: function(t, i) { var u, f = n(t),
                r = this._getInst(f[0]);
            i = null != i ? i : this._formatDate(r);
            r.input && r.input.val(i);
            this._updateAlternate(r);
            u = this._get(r, "onSelect");
            u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
            r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.trigger("focus"), this._lastInput = null) }, _updateAlternate: function(t) { var i, r, u, f = this._get(t, "altField");
            f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), u = this.formatDate(i, r, this._getFormatConfig(t)), n(f).val(u)) }, noWeekends: function(n) { var t = n.getDay(); return [t > 0 && 6 > t, ""] }, iso8601Week: function(n) { var i, t = new Date(n.getTime()); return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1 }, parseDate: function(t, i, r) { if (null == t || null == i) throw "Invalid arguments"; if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null; for (var a, v, u, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = "string" != typeof y ? y : (new Date).getFullYear() % 100 + parseInt(y, 10), g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, nt = (r ? r.dayNames : null) || this._defaults.dayNames, tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, s = -1, h = -1, p = -1, w = !1, l = function(n) { var i = t.length > o + 1 && t.charAt(o + 1) === n; return i && o++, i }, c = function(n) { var u = l(n),
                        r = "@" === n ? 14 : "!" === n ? 20 : "y" === n && u ? 4 : "o" === n ? 3 : 2,
                        e = "y" === n ? r : 1,
                        o = RegExp("^\\d{" + e + "," + r + "}"),
                        t = i.substring(f).match(o); if (!t) throw "Missing number at position " + f; return f += t[0].length, parseInt(t[0], 10) }, k = function(t, r, u) { var e = -1,
                        o = n.map(l(t) ? u : r, function(n, t) { return [
                                [t, n]
                            ] }).sort(function(n, t) { return -(n[1].length - t[1].length) }); if (n.each(o, function(n, t) { var r = t[1]; if (i.substr(f, r.length).toLowerCase() === r.toLowerCase()) return (e = t[0], f += r.length, !1) }), -1 !== e) return e + 1; throw "Unknown name at position " + f; }, b = function() { if (i.charAt(f) !== t.charAt(o)) throw "Unexpected literal at position " + f;
                    f++ }, o = 0; t.length > o; o++)
                if (w) "'" !== t.charAt(o) || l("'") ? b() : w = !1;
                else switch (t.charAt(o)) {
                    case "d":
                        h = c("d"); break;
                    case "D":
                        k("D", g, nt); break;
                    case "o":
                        p = c("o"); break;
                    case "m":
                        s = c("m"); break;
                    case "M":
                        s = k("M", tt, it); break;
                    case "y":
                        e = c("y"); break;
                    case "@":
                        u = new Date(c("@"));
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate(); break;
                    case "!":
                        u = new Date((c("!") - this._ticksTo1970) / 1e4);
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate(); break;
                    case "'":
                        l("'") ? b() : w = !0; break;
                    default:
                        b() }
            if (i.length > f && (v = i.substr(f), !/^\s+/.test(v))) throw "Extra/unparsed characters found in date: " + v; if (-1 === e ? e = (new Date).getFullYear() : 100 > e && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= e ? 0 : -100)), p > -1)
                for (s = 1, h = p;;) { if (a = this._getDaysInMonth(e, s - 1), a >= h) break;
                    s++;
                    h -= a }
            if (u = this._daylightSavingAdjust(new Date(e, s - 1, h)), u.getFullYear() !== e || u.getMonth() + 1 !== s || u.getDate() !== h) throw "Invalid date"; return u }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function(n, t, i) { if (!t) return ""; var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (i ? i.dayNames : null) || this._defaults.dayNames,
                l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames,
                f = function(t) { var i = n.length > u + 1 && n.charAt(u + 1) === t; return i && u++, i },
                e = function(n, t, i) { var r = "" + t; if (f(n))
                        for (; i > r.length;) r = "0" + r; return r },
                s = function(n, t, i, r) { return f(n) ? r[t] : i[t] },
                r = "",
                o = !1; if (t)
                for (u = 0; n.length > u; u++)
                    if (o) "'" !== n.charAt(u) || f("'") ? r += n.charAt(u) : o = !1;
                    else switch (n.charAt(u)) {
                        case "d":
                            r += e("d", t.getDate(), 2); break;
                        case "D":
                            r += s("D", t.getDay(), h, c); break;
                        case "o":
                            r += e("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3); break;
                        case "m":
                            r += e("m", t.getMonth() + 1, 2); break;
                        case "M":
                            r += s("M", t.getMonth(), l, a); break;
                        case "y":
                            r += f("y") ? t.getFullYear() : (10 > t.getFullYear() % 100 ? "0" : "") + t.getFullYear() % 100; break;
                        case "@":
                            r += t.getTime(); break;
                        case "!":
                            r += 1e4 * t.getTime() + this._ticksTo1970; break;
                        case "'":
                            f("'") ? r += "'" : o = !0; break;
                        default:
                            r += n.charAt(u) }
            return r }, _possibleChars: function(n) { for (var i = "", r = !1, u = function(i) { var r = n.length > t + 1 && n.charAt(t + 1) === i; return r && t++, r }, t = 0; n.length > t; t++)
                if (r) "'" !== n.charAt(t) || u("'") ? i += n.charAt(t) : r = !1;
                else switch (n.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789"; break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        u("'") ? i += "'" : r = !0; break;
                    default:
                        i += n.charAt(t) }
            return i }, _get: function(n, t) { return void 0 !== n.settings[t] ? n.settings[t] : this._defaults[t] }, _setDateFromField: function(n, t) { if (n.input.val() !== n.lastVal) { var f = this._get(n, "dateFormat"),
                    r = n.lastVal = n.input ? n.input.val() : null,
                    u = this._getDefaultDate(n),
                    i = u,
                    e = this._getFormatConfig(n); try { i = this.parseDate(f, r, e) || u } catch (o) { r = t ? "" : r } n.selectedDay = i.getDate();
                n.drawMonth = n.selectedMonth = i.getMonth();
                n.drawYear = n.selectedYear = i.getFullYear();
                n.currentDay = r ? i.getDate() : 0;
                n.currentMonth = r ? i.getMonth() : 0;
                n.currentYear = r ? i.getFullYear() : 0;
                this._adjustInstDate(n) } }, _getDefaultDate: function(n) { return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date)) }, _determineDate: function(t, i, r) { var f = function(n) { var t = new Date; return t.setDate(t.getDate() + n), t },
                e = function(i) { try { return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t)) } catch (h) {} for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) { switch (u[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(u[1], 10); break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(u[1], 10); break;
                            case "m":
                            case "M":
                                e += parseInt(u[1], 10);
                                r = Math.min(r, n.datepicker._getDaysInMonth(f, e)); break;
                            case "y":
                            case "Y":
                                f += parseInt(u[1], 10);
                                r = Math.min(r, n.datepicker._getDaysInMonth(f, e)) } u = s.exec(i) } return new Date(f, e, r) },
                u = null == i || "" === i ? r : "string" == typeof i ? e(i) : "number" == typeof i ? isNaN(i) ? r : f(i) : new Date(i.getTime()); return u = u && "Invalid Date" == "" + u ? r : u, u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)), this._daylightSavingAdjust(u) }, _daylightSavingAdjust: function(n) { return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null }, _setDate: function(n, t, i) { var u = !t,
                f = n.selectedMonth,
                e = n.selectedYear,
                r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
            n.selectedDay = n.currentDay = r.getDate();
            n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
            n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
            f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n);
            this._adjustInstDate(n);
            n.input && n.input.val(u ? "" : this._formatDate(n)) }, _getDate: function(n) { return !n.currentYear || n.input && "" === n.input.val() ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay)) }, _attachHandlers: function(t) { var r = this._get(t, "stepMonths"),
                i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() { var t = { prev: function() { n.datepicker._adjustDate(i, -r, "M") }, next: function() { n.datepicker._adjustDate(i, +r, "M") }, hide: function() { n.datepicker._hideDatepicker() }, today: function() { n.datepicker._gotoToday(i) }, selectDay: function() { return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return n.datepicker._selectMonthYear(i, this, "M"), !1 }, selectYear: function() { return n.datepicker._selectMonthYear(i, this, "Y"), !1 } };
                n(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]) }) }, _generateHTML: function(n) { var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, o, y, ct, p, lt, l, u, at, vt, yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date,
                gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())),
                f = this._get(n, "isRTL"),
                li = this._get(n, "showButtonPanel"),
                hi = this._get(n, "hideIfNoPrevNext"),
                ni = this._get(n, "navigationAsDateFormat"),
                e = this._getNumberOfMonths(n),
                ai = this._get(n, "showCurrentAtPos"),
                ci = this._get(n, "stepMonths"),
                ti = 1 !== e[0] || 1 !== e[1],
                ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)),
                w = this._getMinMaxDate(n, "min"),
                v = this._getMinMaxDate(n, "max"),
                t = n.drawMonth - ai,
                r = n.drawYear; if (0 > t && (t += 12, r--), v)
                for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - e[0] * e[1] + 1, v.getDate())), b = w && w > b ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;) t--, 0 > t && (t = 11, r--); for (n.drawMonth = t, n.drawYear = r, s = this._get(n, "prevText"), s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s, rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>", h = this._get(n, "nextText"), h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h, ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>", k = this._get(n, "currentText"), ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt, k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k, et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>", ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (f ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (f ? "" : et) + "<\/div>" : "", c = parseInt(this._get(n, "firstDay"), 10), c = isNaN(c) ? 0 : c, ot = this._get(n, "showWeek"), ui = this._get(n, "dayNames"), fi = this._get(n, "dayNamesMin"), ei = this._get(n, "monthNames"), oi = this._get(n, "monthNamesShort"), st = this._get(n, "beforeShowDay"), g = this._get(n, "showOtherMonths"), si = this._get(n, "selectOtherMonths"), ht = this._getDefaultDate(n), nt = "", y = 0; e[0] > y; y++) { for (ct = "", this.maxRows = 4, p = 0; e[1] > p; p++) { if (lt = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)), l = " ui-corner-all", u = "", ti) { if (u += "<div class='ui-datepicker-group", e[1] > 1) switch (p) {
                            case 0:
                                u += " ui-datepicker-group-first";
                                l = " ui-corner-" + (f ? "right" : "left"); break;
                            case e[1] - 1:
                                u += " ui-datepicker-group-last";
                                l = " ui-corner-" + (f ? "left" : "right"); break;
                            default:
                                u += " ui-datepicker-group-middle";
                                l = "" } u += "'>" } for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && 0 === y ? f ? ut : rt : "") + (/all|right/.test(l) && 0 === y ? f ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>", at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "", o = 0; 7 > o; o++) vt = (o + c) % 7, at += "<th scope='col'" + ((o + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>"; for (u += at + "<\/tr><\/thead><tbody>", yt = this._getDaysInMonth(r, t), r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)), pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7, tt = Math.ceil((pt + yt) / 7), wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt, this.maxRows = wt, i = this._daylightSavingAdjust(new Date(r, t, 1 - pt)), bt = 0; wt > bt; bt++) { for (u += "<tr>", kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "", o = 0; 7 > o; o++) d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""], a = i.getMonth() !== t, it = a && !si || !d[0] || w && w > i || v && i > v, kt += "<td class='" + ((o + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + (a && !g || !d[2] ? "" : " title='" + d[2].replace(/'/g, "&#39;") + "'") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>", i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
                        u += kt + "<\/tr>" } t++;
                    t > 11 && (t = 0, r++);
                    u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (e[0] > 0 && p === e[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
                    ct += u } nt += ct } return nt += ri, n._keyEvent = !1, nt }, _generateMonthYearHeader: function(n, t, i, r, u, f, e, o) { var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"),
                b = this._get(n, "changeYear"),
                g = this._get(n, "showMonthAfterYear"),
                c = "<div class='ui-datepicker-title'>",
                l = ""; if (f || !w) l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>";
            else { for (k = r && r.getFullYear() === i, d = u && u.getFullYear() === i, l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)(!k || h >= r.getMonth()) && (!d || u.getMonth() >= h) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
                l += "<\/select>" } if (g || (c += l + (!f && w && b ? "" : "&#xa0;")), !n.yearshtml)
                if (n.yearshtml = "", f || !b) c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
                else { for (v = this._get(n, "yearRange").split(":"), y = (new Date).getFullYear(), p = function(n) { var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10); return isNaN(t) ? y : t }, s = p(v[0]), a = Math.max(s, p(v[1] || "")), s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; a >= s; s++) n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                    n.yearshtml += "<\/select>";
                    c += n.yearshtml;
                    n.yearshtml = null } return c += this._get(n, "yearSuffix"), g && (c += (!f && w && b ? "" : "&#xa0;") + l), c + "<\/div>" }, _adjustInstDate: function(n, t, i) { var u = n.selectedYear + ("Y" === i ? t : 0),
                f = n.selectedMonth + ("M" === i ? t : 0),
                e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + ("D" === i ? t : 0),
                r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
            n.selectedDay = r.getDate();
            n.drawMonth = n.selectedMonth = r.getMonth();
            n.drawYear = n.selectedYear = r.getFullYear();
            ("M" === i || "Y" === i) && this._notifyChange(n) }, _restrictMinMax: function(n, t) { var i = this._getMinMaxDate(n, "min"),
                r = this._getMinMaxDate(n, "max"),
                u = i && i > t ? i : t; return r && u > r ? r : u }, _notifyChange: function(n) { var t = this._get(n, "onChangeMonthYear");
            t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n]) }, _getNumberOfMonths: function(n) { var t = this._get(n, "numberOfMonths"); return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t }, _getMinMaxDate: function(n, t) { return this._determineDate(n, this._get(n, t + "Date"), null) }, _getDaysInMonth: function(n, t) { return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate() }, _getFirstDayOfMonth: function(n, t) { return new Date(n, t, 1).getDay() }, _canAdjustMonth: function(n, t, i, r) { var f = this._getNumberOfMonths(n),
                u = this._daylightSavingAdjust(new Date(i, r + (0 > t ? t : f[0] * f[1]), 1)); return 0 > t && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())), this._isInRange(n, u) }, _isInRange: function(n, t) { var i, f, e = this._getMinMaxDate(n, "min"),
                o = this._getMinMaxDate(n, "max"),
                r = null,
                u = null,
                s = this._get(n, "yearRange"); return s && (i = s.split(":"), f = (new Date).getFullYear(), r = parseInt(i[0], 10), u = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += f), i[1].match(/[+\-].*/) && (u += f)), (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || u >= t.getFullYear()) }, _getFormatConfig: function(n) { var t = this._get(n, "shortYearCutoff"); return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(n, "dayNamesShort"), dayNames: this._get(n, "dayNames"), monthNamesShort: this._get(n, "monthNamesShort"), monthNames: this._get(n, "monthNames") } }, _formatDate: function(n, t, i, r) { t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear); var u = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay)); return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n)) } });
    n.fn.datepicker = function(t) { if (!this.length) return this;
        n.datepicker.initialized || (n(document).on("mousedown", n.datepicker._checkExternalClick), n.datepicker.initialized = !0);
        0 === n("#" + n.datepicker._mainDivId).length && n("body").append(n.datepicker.dpDiv); var i = Array.prototype.slice.call(arguments, 1); return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() { "string" == typeof t ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t) }) : n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) };
    n.datepicker = new c;
    n.datepicker.initialized = !1;
    n.datepicker.uuid = (new Date).getTime();
    n.datepicker.version = "1.12.1";
    n.datepicker;
    n.widget("ui.dialog", { version: "1.12.1", options: { appendTo: "body", autoOpen: !0, buttons: [], classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" }, closeOnEscape: !0, closeText: "Close", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: { my: "center", at: "center", of: window, collision: "fit", using: function(t) { var i = n(this).css(t).offset().top;
                    0 > i && n(this).css("top", t.top - i) } }, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 }, resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }, _create: function() { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height };
            this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) };
            this.originalTitle = this.element.attr("title");
            null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle);
            this.options.disabled && (this.options.disabled = !1);
            this._createWrapper();
            this.element.show().removeAttr("title").appendTo(this.uiDialog);
            this._addClass("ui-dialog-content", "ui-widget-content");
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && n.fn.draggable && this._makeDraggable();
            this.options.resizable && n.fn.resizable && this._makeResizable();
            this._isOpen = !1;
            this._trackFocus() }, _init: function() { this.options.autoOpen && this.open() }, _appendTo: function() { var t = this.options.appendTo; return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0) }, _destroy: function() { var n, t = this.originalPosition;
            this._untrackInstance();
            this._destroyOverlay();
            this.element.removeUniqueId().css(this.originalCss).detach();
            this.uiDialog.remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            n = t.parent.children().eq(t.index);
            n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element) }, widget: function() { return this.uiDialog }, disable: n.noop, enable: n.noop, close: function(t) { var i = this;
            this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || n.ui.safeBlur(n.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() { i._trigger("close", t) })) }, isOpen: function() { return this._isOpen }, moveToTop: function() { this._moveToTop() }, _moveToTop: function(t, i) { var r = !1,
                f = this.uiDialog.siblings(".ui-front:visible").map(function() { return +n(this).css("z-index") }).get(),
                u = Math.max.apply(null, f); return u >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", u + 1), r = !0), r && !i && this._trigger("focus", t), r }, open: function() { var t = this; return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = n(n.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() { t._focusTabbable();
                t._trigger("focus") }), this._makeFocusTarget(), this._trigger("open"), void 0) }, _focusTabbable: function() { var n = this._focusedElement;
            n || (n = this.element.find("[autofocus]"));
            n.length || (n = this.element.find(":tabbable"));
            n.length || (n = this.uiDialogButtonPane.find(":tabbable"));
            n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable"));
            n.length || (n = this.uiDialog);
            n.eq(0).trigger("focus") }, _keepFocus: function(t) {
            function i() { var t = n.ui.safeActiveElement(this.document[0]),
                    i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
                i || this._focusTabbable() } t.preventDefault();
            i.call(this);
            this._delay(i) }, _createWrapper: function() { this.uiDialog = n("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo());
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
            this._on(this.uiDialog, { keydown: function(t) { if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0; if (t.keyCode === n.ui.keyCode.TAB && !t.isDefaultPrevented()) { var i = this.uiDialog.find(":tabbable"),
                            r = i.filter(":first"),
                            u = i.filter(":last");
                        t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== r[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() { u.trigger("focus") }), t.preventDefault()) : (this._delay(function() { r.trigger("focus") }), t.preventDefault()) } }, mousedown: function(n) { this._moveToTop(n) && this._focusTabbable() } });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") }) }, _createTitlebar: function() { var t;
            this.uiDialogTitlebar = n("<div>");
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
            this._on(this.uiDialogTitlebar, { mousedown: function(t) { n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus") } });
            this.uiDialogTitlebarClose = n("<button type='button'><\/button>").button({ label: n("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 }).appendTo(this.uiDialogTitlebar);
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
            this._on(this.uiDialogTitlebarClose, { click: function(n) { n.preventDefault();
                    this.close(n) } });
            t = n("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
            this._addClass(t, "ui-dialog-title");
            this._title(t);
            this.uiDialogTitlebar.prependTo(this.uiDialog);
            this.uiDialog.attr({ "aria-labelledby": t.attr("id") }) }, _title: function(n) { this.options.title ? n.text(this.options.title) : n.html("&#160;") }, _createButtonPane: function() { this.uiDialogButtonPane = n("<div>");
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = n("<div>").appendTo(this.uiDialogButtonPane);
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset");
            this._createButtons() }, _createButtons: function() { var i = this,
                t = this.options.buttons; return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), n.isEmptyObject(t) || n.isArray(t) && !t.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (n.each(t, function(t, r) { var u, f;
                r = n.isFunction(r) ? { click: r, text: t } : r;
                r = n.extend({ type: "button" }, r);
                u = r.click;
                f = { icon: r.icon, iconPosition: r.iconPosition, showLabel: r.showLabel, icons: r.icons, text: r.text };
                delete r.click;
                delete r.icon;
                delete r.iconPosition;
                delete r.showLabel;
                delete r.icons; "boolean" == typeof r.text && delete r.text;
                n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet).on("click", function() { u.apply(i.element[0], arguments) }) }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0) }, _makeDraggable: function() {
            function i(n) { return { position: n.position, offset: n.offset } } var t = this,
                r = this.options;
            this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function(r, u) { t._addClass(n(this), "ui-dialog-dragging");
                    t._blockFrames();
                    t._trigger("dragStart", r, i(u)) }, drag: function(n, r) { t._trigger("drag", n, i(r)) }, stop: function(u, f) { var e = f.offset.left - t.document.scrollLeft(),
                        o = f.offset.top - t.document.scrollTop();
                    r.position = { my: "left top", at: "left" + (e >= 0 ? "+" : "") + e + " top" + (o >= 0 ? "+" : "") + o, of: t.window };
                    t._removeClass(n(this), "ui-dialog-dragging");
                    t._unblockFrames();
                    t._trigger("dragStop", u, i(f)) } }) }, _makeResizable: function() {
            function r(n) { return { originalPosition: n.originalPosition, originalSize: n.originalSize, position: n.position, size: n.size } } var t = this,
                i = this.options,
                u = i.resizable,
                f = this.uiDialog.css("position"),
                e = "string" == typeof u ? u : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: i.maxWidth, maxHeight: i.maxHeight, minWidth: i.minWidth, minHeight: this._minHeight(), handles: e, start: function(i, u) { t._addClass(n(this), "ui-dialog-resizing");
                    t._blockFrames();
                    t._trigger("resizeStart", i, r(u)) }, resize: function(n, i) { t._trigger("resize", n, r(i)) }, stop: function(u, f) { var e = t.uiDialog.offset(),
                        o = e.left - t.document.scrollLeft(),
                        s = e.top - t.document.scrollTop();
                    i.height = t.uiDialog.height();
                    i.width = t.uiDialog.width();
                    i.position = { my: "left top", at: "left" + (o >= 0 ? "+" : "") + o + " top" + (s >= 0 ? "+" : "") + s, of: t.window };
                    t._removeClass(n(this), "ui-dialog-resizing");
                    t._unblockFrames();
                    t._trigger("resizeStop", u, r(f)) } }).css("position", f) }, _trackFocus: function() { this._on(this.widget(), { focusin: function(t) { this._makeFocusTarget();
                    this._focusedElement = n(t.target) } }) }, _makeFocusTarget: function() { this._untrackInstance();
            this._trackingInstances().unshift(this) }, _untrackInstance: function() { var t = this._trackingInstances(),
                i = n.inArray(this, t); - 1 !== i && t.splice(i, 1) }, _trackingInstances: function() { var n = this.document.data("ui-dialog-instances"); return n || (n = [], this.document.data("ui-dialog-instances", n)), n }, _minHeight: function() { var n = this.options; return "auto" === n.height ? n.minHeight : Math.min(n.minHeight, n.height) }, _position: function() { var n = this.uiDialog.is(":visible");
            n || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            n || this.uiDialog.hide() }, _setOptions: function(t) { var i = this,
                r = !1,
                u = {};
            n.each(t, function(n, t) { i._setOption(n, t);
                n in i.sizeRelatedOptions && (r = !0);
                n in i.resizableRelatedOptions && (u[n] = t) });
            r && (this._size(), this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", u) }, _setOption: function(t, i) { var f, u, r = this.uiDialog; "disabled" !== t && (this._super(t, i), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({ label: n("<a>").text("" + this.options.closeText).html() }), "draggable" === t && (f = r.is(":data(ui-draggable)"), f && !i && r.draggable("destroy"), !f && i && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (u = r.is(":data(ui-resizable)"), u && !i && r.resizable("destroy"), u && "string" == typeof i && r.resizable("option", "handles", i), u || i === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) }, _size: function() { var t, i, r, n = this.options;
            this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 });
            n.minWidth > n.width && (n.width = n.minWidth);
            t = this.uiDialog.css({ height: "auto", width: n.width }).outerHeight();
            i = Math.max(0, n.minHeight - t);
            r = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none"; "auto" === n.height ? this.element.css({ minHeight: i, maxHeight: r, height: "auto" }) : this.element.height(Math.max(0, n.height - t));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight()) }, _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var t = n(this); return n("<div>").css({ position: "absolute", width: t.outerWidth(), height: t.outerHeight() }).appendTo(t.parent()).offset(t.offset())[0] }) }, _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _allowInteraction: function(t) { return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length }, _createOverlay: function() { if (this.options.modal) { var t = !0;
                this._delay(function() { t = !1 });
                this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function(n) { t || this._allowInteraction(n) || (n.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } });
                this.overlay = n("<div>").appendTo(this._appendTo());
                this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
                this._on(this.overlay, { mousedown: "_keepFocus" });
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1) } }, _destroyOverlay: function() { if (this.options.modal && this.overlay) { var n = this.document.data("ui-dialog-overlays") - 1;
                n ? this.document.data("ui-dialog-overlays", n) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays"));
                this.overlay.remove();
                this.overlay = null } } });
    n.uiBackCompat !== !1 && n.widget("ui.dialog", n.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function() { this._super();
            this.uiDialog.addClass(this.options.dialogClass) }, _setOption: function(n, t) { "dialogClass" === n && this.uiDialog.removeClass(this.options.dialogClass).addClass(t);
            this._superApply(arguments) } });
    n.ui.dialog;
    n.widget("ui.progressbar", { version: "1.12.1", options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null }, min: 0, _create: function() { this.oldValue = this.options.value = this._constrainedValue();
            this.element.attr({ role: "progressbar", "aria-valuemin": this.min });
            this._addClass("ui-progressbar", "ui-widget ui-widget-content");
            this.valueDiv = n("<div>").appendTo(this.element);
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header");
            this._refreshValue() }, _destroy: function() { this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
            this.valueDiv.remove() }, value: function(n) { return void 0 === n ? this.options.value : (this.options.value = this._constrainedValue(n), this._refreshValue(), void 0) }, _constrainedValue: function(n) { return void 0 === n && (n = this.options.value), this.indeterminate = n === !1, "number" != typeof n && (n = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n)) }, _setOptions: function(n) { var t = n.value;
            delete n.value;
            this._super(n);
            this.options.value = this._constrainedValue(t);
            this._refreshValue() }, _setOption: function(n, t) { "max" === n && (t = Math.max(this.min, t));
            this._super(n, t) }, _setOptionDisabled: function(n) { this._super(n);
            this.element.attr("aria-disabled", n);
            this._toggleClass(null, "ui-state-disabled", !!n) }, _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) }, _refreshValue: function() { var t = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).width(i.toFixed(0) + "%");
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate);
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = n("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
            this.oldValue !== t && (this.oldValue = t, this._trigger("change"));
            t === this.options.max && this._trigger("complete") } });
    n.widget("ui.selectmenu", [n.ui.formResetMixin, { version: "1.12.1", defaultElement: "<select>", options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: !1, change: null, close: null, focus: null, open: null, select: null }, _create: function() { var t = this.element.uniqueId().attr("id");
            this.ids = { element: t, button: t + "-button", menu: t + "-menu" };
            this._drawButton();
            this._drawMenu();
            this._bindFormResetHandler();
            this._rendered = !1;
            this.menuItems = n() }, _drawButton: function() { var t, i = this,
                r = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button);
            this._on(this.labels, { click: function(n) { this.button.focus();
                    n.preventDefault() } });
            this.element.hide();
            this.button = n("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element);
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget");
            t = n("<span>").appendTo(this.button);
            this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
            this.buttonItem = this._renderButtonItem(r).appendTo(this.button);
            this.options.width !== !1 && this._resizeButton();
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function() { i._rendered || i._refreshMenu() }) }, _drawMenu: function() { var t = this;
            this.menu = n("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu });
            this.menuWrap = n("<div>").append(this.menu);
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
            this.menuWrap.appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({ classes: { "ui-menu": "ui-corner-bottom" }, role: "listbox", select: function(n, i) { n.preventDefault();
                    t._setSelection();
                    t._select(i.item.data("ui-selectmenu-item"), n) }, focus: function(n, i) { var r = i.item.data("ui-selectmenu-item");
                    null != t.focusIndex && r.index !== t.focusIndex && (t._trigger("focus", n, { item: r }), t.isOpen || t._select(r, n));
                    t.focusIndex = r.index;
                    t.button.attr("aria-activedescendant", t.menuItems.eq(r.index).attr("id")) } }).menu("instance");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() { return !1 };
            this.menuInstance._isDivider = function() { return !1 } }, refresh: function() { this._refreshMenu();
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}));
            null === this.options.width && this._resizeButton() }, _refreshMenu: function() { var n, t = this.element.find("option");
            this.menu.empty();
            this._parseOptions(t);
            this._renderMenu(this.menu, this.items);
            this.menuInstance.refresh();
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");
            this._rendered = !0;
            t.length && (n = this._getSelectedItem(), this.menuInstance.focus(null, n), this._setAria(n.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled"))) }, open: function(n) { this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", n))) }, _position: function() { this.menuWrap.position(n.extend({ of: this.button }, this.options.position)) }, close: function(n) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", n)) }, widget: function() { return this.button }, menuWidget: function() { return this.menu }, _renderButtonItem: function(t) { var i = n("<span>"); return this._setText(i, t.label), this._addClass(i, "ui-selectmenu-text"), i }, _renderMenu: function(t, i) { var r = this,
                u = "";
            n.each(i, function(i, f) { var e;
                f.optgroup !== u && (e = n("<li>", { text: f.optgroup }), r._addClass(e, "ui-selectmenu-optgroup", "ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), e.appendTo(t), u = f.optgroup);
                r._renderItemData(t, f) }) }, _renderItemData: function(n, t) { return this._renderItem(n, t).data("ui-selectmenu-item", t) }, _renderItem: function(t, i) { var r = n("<li>"),
                u = n("<div>", { title: i.element.attr("title") }); return i.disabled && this._addClass(r, null, "ui-state-disabled"), this._setText(u, i.label), r.append(u).appendTo(t) }, _setText: function(n, t) { t ? n.text(t) : n.html("&#160;") }, _move: function(n, t) { var i, r, u = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), u += ":not(.ui-state-disabled)");
            r = "first" === n || "last" === n ? i["first" === n ? "prevAll" : "nextAll"](u).eq(-1) : i[n + "All"](u).eq(0);
            r.length && this.menuInstance.focus(t, r) }, _getSelectedItem: function() { return this.menuItems.eq(this.element[0].selectedIndex).parent("li") }, _toggle: function(n) { this[this.isOpen ? "close" : "open"](n) }, _setSelection: function() { var n;
            this.range && (window.getSelection ? (n = window.getSelection(), n.removeAllRanges(), n.addRange(this.range)) : this.range.select(), this.button.focus()) }, _documentClick: { mousedown: function(t) { this.isOpen && (n(t.target).closest(".ui-selectmenu-menu, #" + n.ui.escapeSelector(this.ids.button)).length || this.close(t)) } }, _buttonEvents: { mousedown: function() { var n;
                window.getSelection ? (n = window.getSelection(), n.rangeCount && (this.range = n.getRangeAt(0))) : this.range = document.selection.createRange() }, click: function(n) { this._setSelection();
                this._toggle(n) }, keydown: function(t) { var i = !0; switch (t.keyCode) {
                    case n.ui.keyCode.TAB:
                    case n.ui.keyCode.ESCAPE:
                        this.close(t);
                        i = !1; break;
                    case n.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(t); break;
                    case n.ui.keyCode.UP:
                        t.altKey ? this._toggle(t) : this._move("prev", t); break;
                    case n.ui.keyCode.DOWN:
                        t.altKey ? this._toggle(t) : this._move("next", t); break;
                    case n.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(t) : this._toggle(t); break;
                    case n.ui.keyCode.LEFT:
                        this._move("prev", t); break;
                    case n.ui.keyCode.RIGHT:
                        this._move("next", t); break;
                    case n.ui.keyCode.HOME:
                    case n.ui.keyCode.PAGE_UP:
                        this._move("first", t); break;
                    case n.ui.keyCode.END:
                    case n.ui.keyCode.PAGE_DOWN:
                        this._move("last", t); break;
                    default:
                        this.menu.trigger(t);
                        i = !1 } i && t.preventDefault() } }, _selectFocusedItem: function(n) { var t = this.menuItems.eq(this.focusIndex).parent("li");
            t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), n) }, _select: function(n, t) { var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = n.index;
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(n));
            this._setAria(n);
            this._trigger("select", t, { item: n });
            n.index !== i && this._trigger("change", t, { item: n });
            this.close(t) }, _setAria: function(n) { var t = this.menuItems.eq(n.index).attr("id");
            this.button.attr({ "aria-labelledby": t, "aria-activedescendant": t });
            this.menu.attr("aria-activedescendant", t) }, _setOption: function(n, t) { if ("icons" === n) { var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, t.button) } this._super(n, t); "appendTo" === n && this.menuWrap.appendTo(this._appendTo()); "width" === n && this._resizeButton() }, _setOptionDisabled: function(n) { this._super(n);
            this.menuInstance.option("disabled", n);
            this.button.attr("aria-disabled", n);
            this._toggleClass(this.button, null, "ui-state-disabled", n);
            this.element.prop("disabled", n);
            n ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0) }, _appendTo: function() { var t = this.options.appendTo; return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t }, _toggleAttr: function() { this.button.attr("aria-expanded", this.isOpen);
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen) }, _resizeButton: function() { var n = this.options.width; return n === !1 ? (this.button.css("width", ""), void 0) : (null === n && (n = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(n), void 0) }, _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) }, _getCreateOptions: function() { var n = this._super(); return n.disabled = this.element.prop("disabled"), n }, _parseOptions: function(t) { var r = this,
                i = [];
            t.each(function(t, u) { i.push(r._parseOption(n(u), t)) });
            this.items = i }, _parseOption: function(n, t) { var i = n.parent("optgroup"); return { element: n, index: t, value: n.val(), label: n.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || n.prop("disabled") } }, _destroy: function() { this._unbindFormResetHandler();
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.labels.attr("for", this.ids.element) } }]);
    n.widget("ui.slider", n.ui.mouse, { version: "1.12.1", widgetEventPrefix: "slide", options: { animate: !1, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function() { this._keySliding = !1;
            this._mouseSliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content");
            this._refresh();
            this._animateOff = !1 }, _refresh: function() { this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue() }, _createHandles: function() { var r, i, u = this.options,
                t = this.element.find(".ui-slider-handle"),
                f = []; for (i = u.values && u.values.length || 1, t.length > i && (t.slice(i).remove(), t = t.slice(0, i)), r = t.length; i > r; r++) f.push("<span tabindex='0'><\/span>");
            this.handles = t.add(n(f.join("")).appendTo(this.element));
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
            this.handle = this.handles.eq(0);
            this.handles.each(function(t) { n(this).data("ui-slider-handle-index", t).attr("tabIndex", 0) }) }, _createRange: function() { var t = this.options;
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = n("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === t.range || "max" === t.range) && this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null) }, _setupEvents: function() { this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles) }, _destroy: function() { this.handles.remove();
            this.range && this.range.remove();
            this._mouseDestroy() }, _mouseCapture: function(t) { var s, f, r, i, u, h, e, c, o = this,
                l = this.options; return l.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), s = { x: t.pageX, y: t.pageY }, f = this._normValueFromMouse(s), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) { var e = Math.abs(f - o.values(t));
                (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e, i = n(this), u = t) }), h = this._start(t, u), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = u, this._addClass(i, null, "ui-state-active"), i.trigger("focus"), e = i.offset(), c = !n(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? { left: 0, top: 0 } : { left: t.pageX - e.left - i.width() / 2, top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, f), this._animateOff = !0, !0)) }, _mouseStart: function() { return !0 }, _mouseDrag: function(n) { var t = { x: n.pageX, y: n.pageY },
                i = this._normValueFromMouse(t); return this._slide(n, this._handleIndex, i), !1 }, _mouseStop: function(n) { return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 }, _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" }, _normValueFromMouse: function(n) { var i, r, t, u, f; return "horizontal" === this.orientation ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), 0 > t && (t = 0), "vertical" === this.orientation && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f) }, _uiHash: function(n, t, i) { var r = { handle: this.handles[n], handleIndex: n, value: void 0 !== t ? t : this.value() }; return this._hasMultipleValues() && (r.value = void 0 !== t ? t : this.values(n), r.values = i || this.values()), r }, _hasMultipleValues: function() { return this.options.values && this.options.values.length }, _start: function(n, t) { return this._trigger("start", n, this._uiHash(t)) }, _slide: function(n, t, i) { var u, r, f = this.value(),
                e = this.values();
            this._hasMultipleValues() && (r = this.values(t ? 0 : 1), f = this.values(t), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === t ? Math.min(r, i) : Math.max(r, i)), e[t] = i);
            i !== f && (u = this._trigger("slide", n, this._uiHash(t, i, e)), u !== !1 && (this._hasMultipleValues() ? this.values(t, i) : this.value(i))) }, _stop: function(n, t) { this._trigger("stop", n, this._uiHash(t)) }, _change: function(n, t) { this._keySliding || this._mouseSliding || (this._lastChangedValue = t, this._trigger("change", n, this._uiHash(t))) }, value: function(n) { return arguments.length ? (this.options.value = this._trimAlignValue(n), this._refreshValue(), this._change(null, 0), void 0) : this._value() }, values: function(t, i) { var u, f, r; if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0; if (!arguments.length) return this._values(); if (!n.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(t) : this.value(); for (u = this.options.values, f = arguments[0], r = 0; u.length > r; r += 1) u[r] = this._trimAlignValue(f[r]), this._change(null, r);
            this._refreshValue() }, _setOption: function(t, i) { var r, u = 0; switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), n.isArray(this.options.values) && (u = this.options.values.length), this._super(t, i), t) {
                case "orientation":
                    this._detectOrientation();
                    this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    this.options.range && this._refreshRange(i);
                    this.handles.css("horizontal" === i ? "bottom" : "left", ""); break;
                case "value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1; break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), r = u - 1; r >= 0; r--) this._change(null, r);
                    this._animateOff = !1; break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = !1; break;
                case "range":
                    this._animateOff = !0;
                    this._refresh();
                    this._animateOff = !1 } }, _setOptionDisabled: function(n) { this._super(n);
            this._toggleClass(null, "ui-state-disabled", !!n) }, _value: function() { var n = this.options.value; return this._trimAlignValue(n) }, _values: function(n) { var r, t, i; if (arguments.length) return r = this.options.values[n], r = this._trimAlignValue(r); if (this._hasMultipleValues()) { for (t = this.options.values.slice(), i = 0; t.length > i; i += 1) t[i] = this._trimAlignValue(t[i]); return t } return [] }, _trimAlignValue: function(n) { if (this._valueMin() >= n) return this._valueMin(); if (n >= this._valueMax()) return this._valueMax(); var t = this.options.step > 0 ? this.options.step : 1,
                i = (n - this._valueMin()) % t,
                r = n - i; return 2 * Math.abs(i) >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5)) }, _calculateNewMax: function() { var n = this.options.max,
                i = this._valueMin(),
                t = this.options.step,
                r = Math.round((n - i) / t) * t;
            n = r + i;
            n > this.options.max && (n -= t);
            this.max = parseFloat(n.toFixed(this._precision())) }, _precision: function() { var n = this._precisionOf(this.options.step); return null !== this.options.min && (n = Math.max(n, this._precisionOf(this.options.min))), n }, _precisionOf: function(n) { var t = "" + n,
                i = t.indexOf("."); return -1 === i ? 0 : t.length - i - 1 }, _valueMin: function() { return this.options.min }, _valueMax: function() { return this.max }, _refreshRange: function(n) { "vertical" === n && this.range.css({ width: "", left: "" }); "horizontal" === n && this.range.css({ height: "", bottom: "" }) }, _refreshValue: function() { var s, t, c, f, h, e = this.options.range,
                i = this.options,
                r = this,
                u = this._animateOff ? !1 : i.animate,
                o = {};
            this._hasMultipleValues() ? this.handles.each(function(f) { t = 100 * ((r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()));
                o["horizontal" === r.orientation ? "left" : "bottom"] = t + "%";
                n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
                r.options.range === !0 && ("horizontal" === r.orientation ? (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({ left: t + "%" }, i.animate), 1 === f && r.range[u ? "animate" : "css"]({ width: t - s + "%" }, { queue: !1, duration: i.animate })) : (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({ bottom: t + "%" }, i.animate), 1 === f && r.range[u ? "animate" : "css"]({ height: t - s + "%" }, { queue: !1, duration: i.animate })));
                s = t }) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? 100 * ((c - f) / (h - f)) : 0, o["horizontal" === this.orientation ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate), "min" === e && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({ width: t + "%" }, i.animate), "max" === e && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({ width: 100 - t + "%" }, i.animate), "min" === e && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({ height: t + "%" }, i.animate), "max" === e && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({ height: 100 - t + "%" }, i.animate)) }, _handleEvents: { keydown: function(t) { var e, r, i, u, f = n(t.target).data("ui-slider-handle-index"); switch (t.keyCode) {
                    case n.ui.keyCode.HOME:
                    case n.ui.keyCode.END:
                    case n.ui.keyCode.PAGE_UP:
                    case n.ui.keyCode.PAGE_DOWN:
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(n(t.target), null, "ui-state-active"), e = this._start(t, f), e === !1)) return } switch (u = this.options.step, r = i = this._hasMultipleValues() ? this.values(f) : this.value(), t.keyCode) {
                    case n.ui.keyCode.HOME:
                        i = this._valueMin(); break;
                    case n.ui.keyCode.END:
                        i = this._valueMax(); break;
                    case n.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages); break;
                    case n.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages); break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                        if (r === this._valueMax()) return;
                        i = this._trimAlignValue(r + u); break;
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (r === this._valueMin()) return;
                        i = this._trimAlignValue(r - u) } this._slide(t, f, i) }, keyup: function(t) { var i = n(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), this._removeClass(n(t.target), null, "ui-state-active")) } } });
    n.widget("ui.spinner", { version: "1.12.1", defaultElement: "<input>", widgetEventPrefix: "spin", options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function() { this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step); "" !== this.value() && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) }, _getCreateOptions: function() { var t = this._super(),
                i = this.element; return n.each(["min", "max", "step"], function(n, r) { var u = i.attr(r);
                null != u && u.length && (t[r] = u) }), t }, _events: { keydown: function(n) { this._start(n) && this._keydown(n) && n.preventDefault() }, keyup: "_stop", focus: function() { this.previous = this.element.val() }, blur: function(n) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", n), void 0) }, mousewheel: function(n, t) { if (t) { if (!this.spinning && !this._start(n)) return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, n);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function() { this.spinning && this._stop(n) }, 100);
                    n.preventDefault() } }, "mousedown .ui-spinner-button": function(t) {
                function r() { var t = this.element[0] === n.ui.safeActiveElement(this.document[0]);
                    t || (this.element.trigger("focus"), this.previous = i, this._delay(function() { this.previous = i })) } var i;
                i = this.element[0] === n.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();
                t.preventDefault();
                r.call(this);
                this.cancelBlur = !0;
                this._delay(function() { delete this.cancelBlur;
                    r.call(this) });
                this._start(t) !== !1 && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function(t) { if (n(t.currentTarget).hasClass("ui-state-active")) return this._start(t) === !1 ? !1 : (this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) }, "mouseleave .ui-spinner-button": "_stop" }, _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a><\/a><a><\/a>") }, _draw: function() { this._enhance();
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
            this._addClass("ui-spinner-input");
            this.element.attr("role", "spinbutton");
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({ classes: { "ui-button": "" } });
            this._removeClass(this.buttons, "ui-corner-all");
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down");
            this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 });
            this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 });
            this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height()) }, _keydown: function(t) { var r = this.options,
                i = n.ui.keyCode; switch (t.keyCode) {
                case i.UP:
                    return this._repeat(null, 1, t), !0;
                case i.DOWN:
                    return this._repeat(null, -1, t), !0;
                case i.PAGE_UP:
                    return this._repeat(null, r.page, t), !0;
                case i.PAGE_DOWN:
                    return this._repeat(null, -r.page, t), !0 } return !1 }, _start: function(n) { return this.spinning || this._trigger("start", n) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1 }, _repeat: function(n, t, i) { n = n || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() { this._repeat(40, t, i) }, n);
            this._spin(t * this.options.step, i) }, _spin: function(n, t) { var i = this.value() || 0;
            this.counter || (this.counter = 1);
            i = this._adjustValue(i + n * this._increment(this.counter));
            this.spinning && this._trigger("spin", t, { value: i }) === !1 || (this._value(i), this.counter++) }, _increment: function(t) { var i = this.options.incremental; return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1 }, _precision: function() { var n = this._precisionOf(this.options.step); return null !== this.options.min && (n = Math.max(n, this._precisionOf(this.options.min))), n }, _precisionOf: function(n) { var t = "" + n,
                i = t.indexOf("."); return -1 === i ? 0 : t.length - i - 1 }, _adjustValue: function(n) { var r, i, t = this.options; return r = null !== t.min ? t.min : 0, i = n - r, i = Math.round(i / t.step) * t.step, n = r + i, n = parseFloat(n.toFixed(this._precision())), null !== t.max && n > t.max ? t.max : null !== t.min && t.min > n ? t.min : n }, _stop: function(n) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", n)) }, _setOption: function(n, t) { var u, i, r; return "culture" === n || "numberFormat" === n ? (u = this._parse(this.element.val()), this.options[n] = t, this.element.val(this._format(u)), void 0) : (("max" === n || "min" === n || "step" === n) && "string" == typeof t && (t = this._parse(t)), "icons" === n && (i = this.buttons.first().find(".ui-icon"), this._removeClass(i, null, this.options.icons.up), this._addClass(i, null, t.up), r = this.buttons.last().find(".ui-icon"), this._removeClass(r, null, this.options.icons.down), this._addClass(r, null, t.down)), this._super(n, t), void 0) }, _setOptionDisabled: function(n) { this._super(n);
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!n);
            this.element.prop("disabled", !!n);
            this.buttons.button(n ? "disable" : "enable") }, _setOptions: t(function(n) { this._super(n) }), _parse: function(n) { return "string" == typeof n && "" !== n && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n), "" === n || isNaN(n) ? null : n }, _format: function(n) { return "" === n ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n }, _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) }, isValid: function() { var n = this.value(); return null === n ? !1 : n === this._adjustValue(n) }, _value: function(n, t) { var i; "" !== n && (i = this._parse(n), null !== i && (t || (i = this._adjustValue(i)), n = this._format(i)));
            this.element.val(n);
            this._refresh() }, _destroy: function() { this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
            this.uiSpinner.replaceWith(this.element) }, stepUp: t(function(n) { this._stepUp(n) }), _stepUp: function(n) { this._start() && (this._spin((n || 1) * this.options.step), this._stop()) }, stepDown: t(function(n) { this._stepDown(n) }), _stepDown: function(n) { this._start() && (this._spin((n || 1) * -this.options.step), this._stop()) }, pageUp: t(function(n) { this._stepUp((n || 1) * this.options.page) }), pageDown: t(function(n) { this._stepDown((n || 1) * this.options.page) }), value: function(n) { return arguments.length ? (t(this._value).call(this, n), void 0) : this._parse(this.element.val()) }, widget: function() { return this.uiSpinner } });
    n.uiBackCompat !== !1 && n.widget("ui.spinner", n.ui.spinner, { _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()) }, _uiSpinnerHtml: function() { return "<span>" }, _buttonHtml: function() { return "<a><\/a><a><\/a>" } });
    n.ui.spinner;
    n.widget("ui.tabs", { version: "1.12.1", delay: 300, options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: function() { var n = /#.*$/; return function(t) { var i, r;
                i = t.href.replace(n, "");
                r = location.href.replace(n, ""); try { i = decodeURIComponent(i) } catch (u) {} try { r = decodeURIComponent(r) } catch (u) {} return t.hash.length > 1 && i === r } }(), _create: function() { var i = this,
                t = this.options;
            this.running = !1;
            this._addClass("ui-tabs", "ui-widget ui-widget-content");
            this._toggleClass("ui-tabs-collapsible", null, t.collapsible);
            this._processTabs();
            t.active = this._initialActive();
            n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function(n) { return i.tabs.index(n) }))).sort());
            this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n();
            this._refresh();
            this.active.length && this.load(t.active) }, _initialActive: function() { var t = this.options.active,
                i = this.options.collapsible,
                r = location.hash.substring(1); return null === t && (r && this.tabs.each(function(i, u) { if (n(u).attr("aria-controls") === r) return (t = i, !1) }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t }, _getCreateEventData: function() { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : n() } }, _tabKeydown: function(t) { var r = n(n.ui.safeActiveElement(this.document[0])).closest("li"),
                i = this.tabs.index(r),
                u = !0; if (!this._handlePageNav(t)) { switch (t.keyCode) {
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                        i++; break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.LEFT:
                        u = !1;
                        i--; break;
                    case n.ui.keyCode.END:
                        i = this.anchors.length - 1; break;
                    case n.ui.keyCode.HOME:
                        i = 0; break;
                    case n.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), this._activate(i), void 0;
                    case n.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), this._activate(i === this.options.active ? !1 : i), void 0;
                    default:
                        return } t.preventDefault();
                clearTimeout(this.activating);
                i = this._focusNextTab(i, u);
                t.ctrlKey || t.metaKey || (r.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", i) }, this.delay)) } }, _panelKeydown: function(t) { this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus")) }, _handlePageNav: function(t) { return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 }, _findNextTab: function(t, i) {
            function u() { return t > r && (t = 0), 0 > t && (t = r), t } for (var r = this.tabs.length - 1; - 1 !== n.inArray(u(), this.options.disabled);) t = i ? t + 1 : t - 1; return t }, _focusNextTab: function(n, t) { return n = this._findNextTab(n, t), this.tabs.eq(n).trigger("focus"), n }, _setOption: function(n, t) { return "active" === n ? (this._activate(t), void 0) : (this._super(n, t), "collapsible" === n && (this._toggleClass("ui-tabs-collapsible", null, t), t || this.options.active !== !1 || this._activate(0)), "event" === n && this._setupEvents(t), "heightStyle" === n && this._setupHeightStyle(t), void 0) }, _sanitizeSelector: function(n) { return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" }, refresh: function() { var t = this.options,
                i = this.tablist.children(":has(a[href])");
            t.disabled = n.map(i.filter(".ui-state-disabled"), function(n) { return i.index(n) });
            this._processTabs();
            t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = n());
            this._refresh() }, _refresh: function() { this._setOptionDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" });
            this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) }, _processTabs: function() { var t = this,
                i = this.tabs,
                r = this.anchors,
                u = this.panels;
            this.tablist = this._getList().attr("role", "tablist");
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header");
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t) { n(this).is(".ui-state-disabled") && t.preventDefault() }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() { n(this).closest("li").is(".ui-state-disabled") && this.blur() });
            this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 });
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");
            this.anchors = this.tabs.map(function() { return n("a", this)[0] }).attr({ role: "presentation", tabIndex: -1 });
            this._addClass(this.anchors, "ui-tabs-anchor");
            this.panels = n();
            this.anchors.each(function(i, r) { var f, u, e, s = n(r).uniqueId().attr("id"),
                    o = n(r).closest("li"),
                    h = o.attr("aria-controls");
                t._isLocal(r) ? (f = r.hash, e = f.substring(1), u = t.element.find(t._sanitizeSelector(f))) : (e = o.attr("aria-controls") || n({}).uniqueId()[0].id, f = "#" + e, u = t.element.find(f), u.length || (u = t._createPanel(e), u.insertAfter(t.panels[i - 1] || t.tablist)), u.attr("aria-live", "polite"));
                u.length && (t.panels = t.panels.add(u));
                h && o.data("ui-tabs-aria-controls", h);
                o.attr({ "aria-controls": e, "aria-labelledby": s });
                u.attr("aria-labelledby", s) });
            this.panels.attr("role", "tabpanel");
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content");
            i && (this._off(i.not(this.tabs)), this._off(r.not(this.anchors)), this._off(u.not(this.panels))) }, _getList: function() { return this.tablist || this.element.find("ol, ul").eq(0) }, _createPanel: function(t) { return n("<div>").attr("id", t).data("ui-tabs-destroy", !0) }, _setOptionDisabled: function(t) { var i, u, r; for (n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), r = 0; u = this.tabs[r]; r++) i = n(u), t === !0 || -1 !== n.inArray(r, t) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = t;
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, t === !0) }, _setupEvents: function(t) { var i = {};
            t && n.each(t.split(" "), function(n, t) { i[t] = "_eventHandler" });
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(!0, this.anchors, { click: function(n) { n.preventDefault() } });
            this._on(this.anchors, i);
            this._on(this.tabs, { keydown: "_tabKeydown" });
            this._on(this.panels, { keydown: "_panelKeydown" });
            this._focusable(this.tabs);
            this._hoverable(this.tabs) }, _setupHeightStyle: function(t) { var i, r = this.element.parent(); "fill" === t ? (i = r.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() { var t = n(this),
                    r = t.css("position"); "absolute" !== r && "fixed" !== r && (i -= t.outerHeight(!0)) }), this.element.children().not(this.panels).each(function() { i -= n(this).outerHeight(!0) }), this.panels.each(function() { n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height())) }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() { i = Math.max(i, n(this).height("").height()) }).height(i)) }, _eventHandler: function(t) { var u = this.options,
                r = this.active,
                c = n(t.currentTarget),
                i = c.closest("li"),
                f = i[0] === r[0],
                e = f && u.collapsible,
                o = e ? n() : this._getPanelForTab(i),
                s = r.length ? this._getPanelForTab(r) : n(),
                h = { oldTab: r, oldPanel: s, newTab: e ? n() : i, newPanel: o };
            t.preventDefault();
            i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1 || (u.active = e ? !1 : this.tabs.index(i), this.active = f ? n() : i, this.xhr && this.xhr.abort(), s.length || o.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(i), t), this._toggle(t, h)) }, _toggle: function(t, i) {
            function e() { r.running = !1;
                r._trigger("activate", t, i) }

            function o() { r._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active");
                u.length && r.options.show ? r._show(u, r.options.show, e) : (u.show(), e()) } var r = this,
                u = i.newPanel,
                f = i.oldPanel;
            this.running = !0;
            f.length && this.options.hide ? this._hide(f, this.options.hide, function() { r._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                o() }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), f.hide(), o());
            f.attr("aria-hidden", "true");
            i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" });
            u.length && f.length ? i.oldTab.attr("tabIndex", -1) : u.length && this.tabs.filter(function() { return 0 === n(this).attr("tabIndex") }).attr("tabIndex", -1);
            u.attr("aria-hidden", "false");
            i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _activate: function(t) { var r, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active), r = i.find(".ui-tabs-anchor")[0], this._eventHandler({ target: r, currentTarget: r, preventDefault: n.noop })) }, _findActive: function(t) { return t === !1 ? n() : this.tabs.eq(t) }, _getIndex: function(t) { return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + n.ui.escapeSelector(t) + "']"))), t }, _destroy: function() { this.xhr && this.xhr.abort();
            this.tablist.removeAttr("role").off(this.eventNamespace);
            this.anchors.removeAttr("role tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() { n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded") });
            this.tabs.each(function() { var t = n(this),
                    i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls") });
            this.panels.show(); "content" !== this.options.heightStyle && this.panels.css("height", "") }, enable: function(t) { var i = this.options.disabled;
            i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = n.isArray(i) ? n.map(i, function(n) { return n !== t ? n : null }) : n.map(this.tabs, function(n, i) { return i !== t ? i : null })), this._setOptionDisabled(i)) }, disable: function(t) { var i = this.options.disabled; if (i !== !0) { if (void 0 === t) i = !0;
                else { if (t = this._getIndex(t), -1 !== n.inArray(t, i)) return;
                    i = n.isArray(i) ? n.merge([t], i).sort() : [t] } this._setOptionDisabled(i) } }, load: function(t, i) { t = this._getIndex(t); var r = this,
                u = this.tabs.eq(t),
                e = u.find(".ui-tabs-anchor"),
                f = this._getPanelForTab(u),
                o = { tab: u, panel: f },
                s = function(n, t) { "abort" === t && r.panels.stop(!1, !0);
                    r._removeClass(u, "ui-tabs-loading");
                    f.removeAttr("aria-busy");
                    n === r.xhr && delete r.xhr };
            this._isLocal(e[0]) || (this.xhr = n.ajax(this._ajaxSettings(e, i, o)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(u, "ui-tabs-loading"), f.attr("aria-busy", "true"), this.xhr.done(function(n, t, u) { setTimeout(function() { f.html(n);
                    r._trigger("load", i, o);
                    s(u, t) }, 1) }).fail(function(n, t) { setTimeout(function() { s(n, t) }, 1) }))) }, _ajaxSettings: function(t, i, r) { var u = this; return { url: t.attr("href").replace(/#.*$/, ""), beforeSend: function(t, f) { return u._trigger("beforeLoad", i, n.extend({ jqXHR: t, ajaxSettings: f }, r)) } } }, _getPanelForTab: function(t) { var i = n(t).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) } });
    n.uiBackCompat !== !1 && n.widget("ui.tabs", n.ui.tabs, { _processTabs: function() { this._superApply(arguments);
            this._addClass(this.tabs, "ui-tab") } });
    n.ui.tabs;
    n.widget("ui.tooltip", { version: "1.12.1", options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function() { var t = n(this).attr("title") || ""; return n("<a>").text(t).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, track: !1, close: null, open: null }, _addDescribedBy: function(t, i) { var r = (t.attr("aria-describedby") || "").split(/\s+/);
            r.push(i);
            t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" "))) }, _removeDescribedBy: function(t) { var u = t.data("ui-tooltip-id"),
                i = (t.attr("aria-describedby") || "").split(/\s+/),
                r = n.inArray(u, i); - 1 !== r && i.splice(r, 1);
            t.removeData("ui-tooltip-id");
            i = n.trim(i.join(" "));
            i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby") }, _create: function() { this._on({ mouseover: "open", focusin: "open" });
            this.tooltips = {};
            this.parents = {};
            this.liveRegion = n("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this.disabledTitles = n([]) }, _setOption: function(t, i) { var r = this;
            this._super(t, i); "content" === t && n.each(this.tooltips, function(n, t) { r._updateContent(t.element) }) }, _setOptionDisabled: function(n) { this[n ? "_disable" : "_enable"]() }, _disable: function() { var t = this;
            n.each(this.tooltips, function(i, r) { var u = n.Event("blur");
                u.target = u.currentTarget = r.element[0];
                t.close(u, !0) });
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() { var t = n(this); if (t.is("[title]")) return t.data("ui-tooltip-title", t.attr("title")).removeAttr("title") })) }, _enable: function() { this.disabledTitles.each(function() { var t = n(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title")) });
            this.disabledTitles = n([]) }, open: function(t) { var r = this,
                i = n(t ? t.target : this.element).closest(this.options.items);
            i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && "mouseover" === t.type && i.parents().each(function() { var i, t = n(this);
                t.data("ui-tooltip-open") && (i = n.Event("blur"), i.target = i.currentTarget = this, r.close(i, !0));
                t.attr("title") && (t.uniqueId(), r.parents[this.id] = { element: this, title: t.attr("title") }, t.attr("title", "")) }), this._registerCloseHandlers(t, i), this._updateContent(i, t)) }, _updateContent: function(n, t) { var r, i = this.options.content,
                u = this,
                f = t ? t.type : null; return "string" == typeof i || i.nodeType || i.jquery ? this._open(t, n, i) : (r = i.call(n[0], function(i) { u._delay(function() { n.data("ui-tooltip-open") && (t && (t.type = f), this._open(t, n, i)) }) }), r && this._open(t, n, r), void 0) }, _open: function(t, i, r) {
            function o(n) { s.of = n;
                u.is(":hidden") || u.position(s) } var f, u, h, e, s = n.extend({}, this.options.position); if (r) { if (f = this._find(i)) return f.tooltip.find(".ui-tooltip-content").html(r), void 0;
                i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title"));
                f = this._tooltip(i);
                u = f.tooltip;
                this._addDescribedBy(i, u.attr("id"));
                u.find(".ui-tooltip-content").html(r);
                this.liveRegion.children().hide();
                e = n("<div>").html(u.find(".ui-tooltip-content").html());
                e.removeAttr("name").find("[name]").removeAttr("name");
                e.removeAttr("id").find("[id]").removeAttr("id");
                e.appendTo(this.liveRegion);
                this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, { mousemove: o }), o(t)) : u.position(n.extend({ of: i }, this.options.position));
                u.hide();
                this._show(u, this.options.show);
                this.options.track && this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() { u.is(":visible") && (o(s.of), clearInterval(h)) }, n.fx.interval));
                this._trigger("open", t, { tooltip: u }) } }, _registerCloseHandlers: function(t, i) { var r = { keyup: function(t) { if (t.keyCode === n.ui.keyCode.ESCAPE) { var r = n.Event(t);
                        r.currentTarget = i[0];
                        this.close(r, !0) } } };
            i[0] !== this.element[0] && (r.remove = function() { this._removeTooltip(this._find(i).tooltip) });
            t && "mouseover" !== t.type || (r.mouseleave = "close");
            t && "focusin" !== t.type || (r.focusout = "close");
            this._on(!0, i, r) }, close: function(t) { var u, f = this,
                i = n(t ? t.currentTarget : this.element),
                r = this._find(i); return r ? (u = r.tooltip, r.closing || (clearInterval(this.delayedShow), i.data("ui-tooltip-title") && !i.attr("title") && i.attr("title", i.data("ui-tooltip-title")), this._removeDescribedBy(i), r.hiding = !0, u.stop(!0), this._hide(u, this.options.hide, function() { f._removeTooltip(n(this)) }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && n.each(this.parents, function(t, i) { n(i.element).attr("title", i.title);
                delete f.parents[t] }), r.closing = !0, this._trigger("close", t, { tooltip: u }), r.hiding || (r.closing = !1)), void 0) : (i.removeData("ui-tooltip-open"), void 0) }, _tooltip: function(t) { var i = n("<div>").attr("role", "tooltip"),
                r = n("<div>").appendTo(i),
                u = i.uniqueId().attr("id"); return this._addClass(r, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(t)), this.tooltips[u] = { element: t, tooltip: i } }, _find: function(n) { var t = n.data("ui-tooltip-id"); return t ? this.tooltips[t] : null }, _removeTooltip: function(n) { n.remove();
            delete this.tooltips[n.attr("id")] }, _appendTo: function(n) { var t = n.closest(".ui-front, dialog"); return t.length || (t = this.document[0].body), t }, _destroy: function() { var t = this;
            n.each(this.tooltips, function(i, r) { var f = n.Event("blur"),
                    u = r.element;
                f.target = f.currentTarget = u[0];
                t.close(f, !0);
                n("#" + i).remove();
                u.data("ui-tooltip-title") && (u.attr("title") || u.attr("title", u.data("ui-tooltip-title")), u.removeData("ui-tooltip-title")) });
            this.liveRegion.remove() } });
    n.uiBackCompat !== !1 && n.widget("ui.tooltip", n.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function() { var n = this._superApply(arguments); return this.options.tooltipClass && n.tooltip.addClass(this.options.tooltipClass), n } });
    n.ui.tooltip; var e = "ui-effects-",
        s = "ui-effects-style",
        h = "ui-effects-animated",
        p = n;
    n.effects = { effect: {} },
        function(n, t) {
            function f(n, t, i) { var r = h[t.type] || {}; return null == n ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : n > r.max ? r.max : n) }

            function s(f) { var o = i(),
                    s = o._rgba = []; return f = f.toLowerCase(), r(v, function(n, i) { var r, h = i.re.exec(f),
                        c = h && i.parse(h),
                        e = i.space || "rgba"; return c ? (r = o[e](c), o[u[e].cache] = r[u[e].cache], s = o._rgba = r._rgba, !1) : t }), s.length ? ("0,0,0,0" === s.join() && n.extend(s, e.transparent), o) : e[f] }

            function o(n, t, i) { return i = (i + 1) % 1, 1 > 6 * i ? n + 6 * (t - n) * i : 1 > 2 * i ? t : 2 > 3 * i ? n + 6 * (t - n) * (2 / 3 - i) : n } var e, a = /^([\-+])=\s*(\d+\.?\d*)/,
                v = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(n) { return [n[1], n[2], n[3], n[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(n) { return [2.55 * n[1], 2.55 * n[2], 2.55 * n[3], n[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(n) { return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(n) { return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(n) { return [n[1], n[2] / 100, n[3] / 100, n[4]] } }],
                i = n.Color = function(t, i, r, u) { return new n.Color.fn.parse(t, i, r, u) },
                u = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                h = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                c = i.support = {},
                l = n("<p>")[0],
                r = n.each;
            l.style.cssText = "background-color:rgba(1,1,1,.5)";
            c.rgba = l.style.backgroundColor.indexOf("rgba") > -1;
            r(u, function(n, t) { t.cache = "_" + n;
                t.props.alpha = { idx: 3, type: "percent", def: 1 } });
            i.fn = n.extend(i.prototype, { parse: function(o, h, c, l) { if (o === t) return this._rgba = [null, null, null, null], this;
                    (o.jquery || o.nodeType) && (o = n(o).css(h), h = t); var a = this,
                        v = n.type(o),
                        y = this._rgba = []; return h !== t && (o = [o, h, c, l], v = "array"), "string" === v ? this.parse(s(o) || e._default) : "array" === v ? (r(u.rgba.props, function(n, t) { y[t.idx] = f(o[t.idx], t) }), this) : "object" === v ? (o instanceof i ? r(u, function(n, t) { o[t.cache] && (a[t.cache] = o[t.cache].slice()) }) : r(u, function(t, i) { var u = i.cache;
                        r(i.props, function(n, t) { if (!a[u] && i.to) { if ("alpha" === n || null == o[n]) return;
                                a[u] = i.to(a._rgba) } a[u][t.idx] = f(o[n], t, !0) });
                        a[u] && 0 > n.inArray(null, a[u].slice(0, 3)) && (a[u][3] = 1, i.from && (a._rgba = i.from(a[u]))) }), this) : t }, is: function(n) { var o = i(n),
                        f = !0,
                        e = this; return r(u, function(n, i) { var s, u = o[i.cache]; return u && (s = e[i.cache] || i.to && i.to(e._rgba) || [], r(i.props, function(n, i) { return null != u[i.idx] ? f = u[i.idx] === s[i.idx] : t })), f }), f }, _space: function() { var n = [],
                        t = this; return r(u, function(i, r) { t[r.cache] && n.push(i) }), n.pop() }, transition: function(n, t) { var e = i(n),
                        c = e._space(),
                        o = u[c],
                        l = 0 === this.alpha() ? i("transparent") : this,
                        a = l[o.cache] || o.to(l._rgba),
                        s = a.slice(); return e = e[o.cache], r(o.props, function(n, i) { var c = i.idx,
                            r = a[c],
                            u = e[c],
                            o = h[i.type] || {};
                        null !== u && (null === r ? s[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), s[c] = f((u - r) * t + r, i))) }), this[c](s) }, blend: function(t) { if (1 === this._rgba[3]) return this; var r = this._rgba.slice(),
                        u = r.pop(),
                        f = i(t)._rgba; return i(n.map(r, function(n, t) { return (1 - u) * f[t] + u * n })) }, toRgbaString: function() { var i = "rgba(",
                        t = n.map(this._rgba, function(n, t) { return null == n ? t > 2 ? 1 : 0 : n }); return 1 === t[3] && (t.pop(), i = "rgb("), i + t.join() + ")" }, toHslaString: function() { var i = "hsla(",
                        t = n.map(this.hsla(), function(n, t) { return null == n && (n = t > 2 ? 1 : 0), t && 3 > t && (n = Math.round(100 * n) + "%"), n }); return 1 === t[3] && (t.pop(), i = "hsl("), i + t.join() + ")" }, toHexString: function(t) { var i = this._rgba.slice(),
                        r = i.pop(); return t && i.push(~~(255 * r)), "#" + n.map(i, function(n) { return n = (n || 0).toString(16), 1 === n.length ? "0" + n : n }).join("") }, toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() } });
            i.fn.parse.prototype = i.fn;
            u.hsla.to = function(n) { if (null == n[0] || null == n[1] || null == n[2]) return [null, null, null, n[3]]; var s, h, i = n[0] / 255,
                    r = n[1] / 255,
                    f = n[2] / 255,
                    c = n[3],
                    u = Math.max(i, r, f),
                    e = Math.min(i, r, f),
                    t = u - e,
                    o = u + e,
                    l = .5 * o; return s = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, h = 0 === t ? 0 : .5 >= l ? t / o : t / (2 - o), [Math.round(s) % 360, h, l, null == c ? 1 : c] };
            u.hsla.from = function(n) { if (null == n[0] || null == n[1] || null == n[2]) return [null, null, null, n[3]]; var r = n[0] / 360,
                    u = n[1],
                    t = n[2],
                    e = n[3],
                    i = .5 >= t ? t * (1 + u) : t + u - t * u,
                    f = 2 * t - i; return [Math.round(255 * o(f, i, r + 1 / 3)), Math.round(255 * o(f, i, r)), Math.round(255 * o(f, i, r - 1 / 3)), e] };
            r(u, function(u, e) { var s = e.props,
                    o = e.cache,
                    h = e.to,
                    c = e.from;
                i.fn[u] = function(u) { if (h && !this[o] && (this[o] = h(this._rgba)), u === t) return this[o].slice(); var l, a = n.type(u),
                        v = "array" === a || "object" === a ? u : arguments,
                        e = this[o].slice(); return r(s, function(n, t) { var i = v["object" === a ? n : t.idx];
                        null == i && (i = e[t.idx]);
                        e[t.idx] = f(i, t) }), c ? (l = i(c(e)), l[o] = e, l) : i(e) };
                r(s, function(t, r) { i.fn[t] || (i.fn[t] = function(i) { var f, e = n.type(i),
                            h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : u,
                            o = this[h](),
                            s = o[r.idx]; return "undefined" === e ? s : ("function" === e && (i = i.call(this, s), e = n.type(i)), null == i && r.empty ? this : ("string" === e && (f = a.exec(i), f && (i = s + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), o[r.idx] = i, this[h](o))) }) }) });
            i.hook = function(t) { var u = t.split(" ");
                r(u, function(t, r) { n.cssHooks[r] = { set: function(t, u) { var o, f, e = ""; if ("transparent" !== u && ("string" !== n.type(u) || (o = s(u)))) { if (u = i(o || u), !c.rgba && 1 !== u._rgba[3]) { for (f = "backgroundColor" === r ? t.parentNode : t;
                                        ("" === e || "transparent" === e) && f && f.style;) try { e = n.css(f, "backgroundColor");
                                        f = f.parentNode } catch (h) {} u = u.blend(e && "transparent" !== e ? e : "_default") } u = u.toRgbaString() } try { t.style[r] = u } catch (h) {} } };
                    n.fx.step[r] = function(t) { t.colorInit || (t.start = i(t.elem, r), t.end = i(t.end), t.colorInit = !0);
                        n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos)) } }) };
            i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
            n.cssHooks.borderColor = { expand: function(n) { var t = {}; return r(["Top", "Right", "Bottom", "Left"], function(i, r) { t["border" + r + "Color"] = n }), t } };
            e = n.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" } }(p),
        function() {
            function t(t) { var r, u, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    f = {}; if (i && i.length && i[0] && i[i[0]])
                    for (u = i.length; u--;) r = i[u], "string" == typeof i[r] && (f[n.camelCase(r)] = i[r]);
                else
                    for (r in i) "string" == typeof i[r] && (f[r] = i[r]); return f }

            function i(t, i) { var r, f, e = {}; for (r in i) f = i[r], t[r] !== f && (u[r] || (n.fx.step[r] || !isNaN(parseFloat(f))) && (e[r] = f)); return e } var r = ["add", "remove", "toggle"],
                u = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
            n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) { n.fx.step[i] = function(n) {
                    ("none" === n.end || n.setAttr) && (1 !== n.pos || n.setAttr) || (p.style(n.elem, i, n.end), n.setAttr = !0) } });
            n.fn.addBack || (n.fn.addBack = function(n) { return this.add(null == n ? this.prevObject : this.prevObject.filter(n)) });
            n.effects.animateClass = function(u, f, e, o) { var s = n.speed(f, e, o); return this.queue(function() { var o, e = n(this),
                        h = e.attr("class") || "",
                        f = s.children ? e.find("*").addBack() : e;
                    f = f.map(function() { var i = n(this); return { el: i, start: t(this) } });
                    o = function() { n.each(r, function(n, t) { u[t] && e[t + "Class"](u[t]) }) };
                    o();
                    f = f.map(function() { return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this });
                    e.attr("class", h);
                    f = f.map(function() { var i = this,
                            t = n.Deferred(),
                            r = n.extend({}, s, { queue: !1, complete: function() { t.resolve(i) } }); return this.el.animate(this.diff, r), t.promise() });
                    n.when.apply(n, f.get()).done(function() { o();
                        n.each(arguments, function() { var t = this.el;
                            n.each(this.diff, function(n) { t.css(n, "") }) });
                        s.complete.call(e[0]) }) }) };
            n.fn.extend({ addClass: function(t) { return function(i, r, u, f) { return r ? n.effects.animateClass.call(this, { add: i }, r, u, f) : t.apply(this, arguments) } }(n.fn.addClass), removeClass: function(t) { return function(i, r, u, f) { return arguments.length > 1 ? n.effects.animateClass.call(this, { remove: i }, r, u, f) : t.apply(this, arguments) } }(n.fn.removeClass), toggleClass: function(t) { return function(i, r, u, f, e) { return "boolean" == typeof r || void 0 === r ? u ? n.effects.animateClass.call(this, r ? { add: i } : { remove: i }, u, f, e) : t.apply(this, arguments) : n.effects.animateClass.call(this, { toggle: i }, r, u, f) } }(n.fn.toggleClass), switchClass: function(t, i, r, u, f) { return n.effects.animateClass.call(this, { add: i, remove: t }, r, u, f) } }) }(),
        function() {
            function t(t, i, r, u) { return n.isPlainObject(t) && (i = t, t = t.effect), t = { effect: t }, null == i && (i = {}), n.isFunction(i) && (u = i, r = null, i = {}), ("number" == typeof i || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : "number" == typeof r ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t }

            function i(t) { return !t || "number" == typeof t || n.fx.speeds[t] ? !0 : "string" != typeof t || n.effects.effect[t] ? n.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0 }

            function r(n, t) { var r = t.outerWidth(),
                    u = t.outerHeight(),
                    i = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(n) || ["", 0, r, u, 0]; return { top: parseFloat(i[1]) || 0, right: "auto" === i[2] ? r : parseFloat(i[2]), bottom: "auto" === i[3] ? u : parseFloat(i[3]), left: parseFloat(i[4]) || 0 } } n.expr && n.expr.filters && n.expr.filters.animated && (n.expr.filters.animated = function(t) { return function(i) { return !!n(i).data(h) || t(i) } }(n.expr.filters.animated));
            n.uiBackCompat !== !1 && n.extend(n.effects, { save: function(n, t) { for (var i = 0, r = t.length; r > i; i++) null !== t[i] && n.data(e + t[i], n[0].style[t[i]]) }, restore: function(n, t) { for (var r, i = 0, u = t.length; u > i; i++) null !== t[i] && (r = n.data(e + t[i]), n.css(t[i], r)) }, setMode: function(n, t) { return "toggle" === t && (t = n.is(":hidden") ? "show" : "hide"), t }, createWrapper: function(t) { if (t.parent().is(".ui-effects-wrapper")) return t.parent(); var i = { width: t.outerWidth(!0), height: t.outerHeight(!0), float: t.css("float") },
                        u = n("<div><\/div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                        f = { width: t.width(), height: t.height() },
                        r = document.activeElement; try { r.id } catch (e) { r = document.body } return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).trigger("focus"), u = t.parent(), "static" === t.css("position") ? (u.css({ position: "relative" }), t.css({ position: "relative" })) : (n.extend(i, { position: t.css("position"), zIndex: t.css("z-index") }), n.each(["top", "left", "bottom", "right"], function(n, r) { i[r] = t.css(r);
                        isNaN(parseInt(i[r], 10)) && (i[r] = "auto") }), t.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), t.css(f), u.css(i).show() }, removeWrapper: function(t) { var i = document.activeElement; return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).trigger("focus")), t } });
            n.extend(n.effects, { version: "1.12.1", define: function(t, i, r) { return r || (r = i, i = "effect"), n.effects.effect[t] = r, n.effects.effect[t].mode = i, r }, scaledDimensions: function(n, t, i) { if (0 === t) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }; var r = "horizontal" !== i ? (t || 100) / 100 : 1,
                        u = "vertical" !== i ? (t || 100) / 100 : 1; return { height: n.height() * u, width: n.width() * r, outerHeight: n.outerHeight() * u, outerWidth: n.outerWidth() * r } }, clipToBox: function(n) { return { width: n.clip.right - n.clip.left, height: n.clip.bottom - n.clip.top, left: n.clip.left, top: n.clip.top } }, unshift: function(n, t, i) { var r = n.queue();
                    t > 1 && r.splice.apply(r, [1, 0].concat(r.splice(t, i)));
                    n.dequeue() }, saveStyle: function(n) { n.data(s, n[0].style.cssText) }, restoreStyle: function(n) { n[0].style.cssText = n.data(s) || "";
                    n.removeData(s) }, mode: function(n, t) { var i = n.is(":hidden"); return "toggle" === t && (t = i ? "show" : "hide"), (i ? "hide" === t : "show" === t) && (t = "none"), t }, getBaseline: function(n, t) { var i, r; switch (n[0]) {
                        case "top":
                            i = 0; break;
                        case "middle":
                            i = .5; break;
                        case "bottom":
                            i = 1; break;
                        default:
                            i = n[0] / t.height } switch (n[1]) {
                        case "left":
                            r = 0; break;
                        case "center":
                            r = .5; break;
                        case "right":
                            r = 1; break;
                        default:
                            r = n[1] / t.width } return { x: r, y: i } }, createPlaceholder: function(t) { var i, r = t.css("position"),
                        u = t.position(); return t.css({ marginTop: t.css("marginTop"), marginBottom: t.css("marginBottom"), marginLeft: t.css("marginLeft"), marginRight: t.css("marginRight") }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(r) && (r = "absolute", i = n("<" + t[0].nodeName + ">").insertAfter(t).css({ display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: t.css("marginTop"), marginBottom: t.css("marginBottom"), marginLeft: t.css("marginLeft"), marginRight: t.css("marginRight"), float: t.css("float") }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(e + "placeholder", i)), t.css({ position: r, left: u.left, top: u.top }), i }, removePlaceholder: function(n) { var t = e + "placeholder",
                        i = n.data(t);
                    i && (i.remove(), n.removeData(t)) }, cleanUp: function(t) { n.effects.restoreStyle(t);
                    n.effects.removePlaceholder(t) }, setTransition: function(t, i, r, u) { return u = u || {}, n.each(i, function(n, i) { var f = t.cssUnit(i);
                        f[0] > 0 && (u[i] = f[0] * r + f[1]) }), u } });
            n.fn.extend({ effect: function() {
                    function o(t) {
                        function c() { o.removeData(h);
                            n.effects.cleanUp(o); "hide" === i.mode && o.hide();
                            s() }

                        function s() { n.isFunction(f) && f.call(o[0]);
                            n.isFunction(t) && t() } var o = n(this);
                        i.mode = l.shift();
                        n.uiBackCompat === !1 || u ? "none" === i.mode ? (o[r](), s()) : e.call(o[0], i, c) : (o.is(":hidden") ? "hide" === r : "show" === r) ? (o[r](), s()) : e.call(o[0], i, s) } var i = t.apply(this, arguments),
                        e = n.effects.effect[i.effect],
                        u = e.mode,
                        s = i.queue,
                        c = s || "fx",
                        f = i.complete,
                        r = i.mode,
                        l = [],
                        a = function(t) { var f = n(this),
                                i = n.effects.mode(f, r) || u;
                            f.data(h, !0);
                            l.push(i);
                            u && ("show" === i || i === u && "hide" === i) && f.show();
                            u && "none" === i || n.effects.saveStyle(f);
                            n.isFunction(t) && t() }; return n.fx.off || !e ? r ? this[r](i.duration, f) : this.each(function() { f && f.call(this) }) : s === !1 ? this.each(a).each(o) : this.queue(c, a).queue(c, o) }, show: function(n) { return function(r) { if (i(r)) return n.apply(this, arguments); var u = t.apply(this, arguments); return u.mode = "show", this.effect.call(this, u) } }(n.fn.show), hide: function(n) { return function(r) { if (i(r)) return n.apply(this, arguments); var u = t.apply(this, arguments); return u.mode = "hide", this.effect.call(this, u) } }(n.fn.hide), toggle: function(n) { return function(r) { if (i(r) || "boolean" == typeof r) return n.apply(this, arguments); var u = t.apply(this, arguments); return u.mode = "toggle", this.effect.call(this, u) } }(n.fn.toggle), cssUnit: function(t) { var i = this.css(t),
                        r = []; return n.each(["em", "px", "%", "pt"], function(n, t) { i.indexOf(t) > 0 && (r = [parseFloat(i), t]) }), r }, cssClip: function(n) { return n ? this.css("clip", "rect(" + n.top + "px " + n.right + "px " + n.bottom + "px " + n.left + "px)") : r(this.css("clip"), this) }, transfer: function(t, i) { var u = n(this),
                        r = n(t.to),
                        f = "fixed" === r.css("position"),
                        e = n("body"),
                        o = f ? e.scrollTop() : 0,
                        s = f ? e.scrollLeft() : 0,
                        h = r.offset(),
                        l = { top: h.top - o, left: h.left - s, height: r.innerHeight(), width: r.innerWidth() },
                        c = u.offset(),
                        a = n("<div class='ui-effects-transfer'><\/div>").appendTo("body").addClass(t.className).css({ top: c.top - o, left: c.left - s, height: u.innerHeight(), width: u.innerWidth(), position: f ? "fixed" : "absolute" }).animate(l, t.duration, t.easing, function() { a.remove();
                            n.isFunction(i) && i() }) } });
            n.fx.step.clip = function(t) { t.clipInit || (t.start = n(t.elem).cssClip(), "string" == typeof t.end && (t.end = r(t.end, t.elem)), t.clipInit = !0);
                n(t.elem).cssClip({ top: t.pos * (t.end.top - t.start.top) + t.start.top, right: t.pos * (t.end.right - t.start.right) + t.start.right, bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom, left: t.pos * (t.end.left - t.start.left) + t.start.left }) } }(),
        function() { var t = {};
            n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, i) { t[i] = function(t) { return Math.pow(t, n + 2) } });
            n.extend(t, { Sine: function(n) { return 1 - Math.cos(n * Math.PI / 2) }, Circ: function(n) { return 1 - Math.sqrt(1 - n * n) }, Elastic: function(n) { return 0 === n || 1 === n ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin((80 * (n - 1) - 7.5) * Math.PI / 15) }, Back: function(n) { return n * n * (3 * n - 2) }, Bounce: function(n) { for (var t, i = 4;
                        ((t = Math.pow(2, --i)) - 1) / 11 > n;); return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - n, 2) } });
            n.each(t, function(t, i) { n.easing["easeIn" + t] = i;
                n.easing["easeOut" + t] = function(n) { return 1 - i(1 - n) };
                n.easing["easeInOut" + t] = function(n) { return .5 > n ? i(2 * n) / 2 : 1 - i(-2 * n + 2) / 2 } }) }();
    w = n.effects;
    n.effects.define("blind", "hide", function(t, i) { var e = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
            u = n(this),
            o = t.direction || "up",
            s = u.cssClip(),
            r = { clip: n.extend({}, s) },
            f = n.effects.createPlaceholder(u);
        r.clip[e[o][0]] = r.clip[e[o][1]]; "show" === t.mode && (u.cssClip(r.clip), f && f.css(n.effects.clipToBox(r)), r.clip = s);
        f && f.animate(n.effects.clipToBox(r), t.duration, t.easing);
        u.animate(r, { queue: !1, duration: t.duration, easing: t.easing, complete: i }) });
    n.effects.define("bounce", function(t, i) { var e, o, a, u = n(this),
            p = t.mode,
            s = "hide" === p,
            w = "show" === p,
            h = t.direction || "up",
            r = t.distance,
            v = t.times || 5,
            b = 2 * v + (w || s ? 1 : 0),
            c = t.duration / b,
            l = t.easing,
            f = "up" === h || "down" === h ? "top" : "left",
            y = "up" === h || "left" === h,
            k = 0,
            d = u.queue().length; for (n.effects.createPlaceholder(u), a = u.css(f), r || (r = u["top" === f ? "outerHeight" : "outerWidth"]() / 3), w && (o = { opacity: 1 }, o[f] = a, u.css("opacity", 0).css(f, y ? 2 * -r : 2 * r).animate(o, c, l)), s && (r /= Math.pow(2, v - 1)), o = {}, o[f] = a; v > k; k++) e = {}, e[f] = (y ? "-=" : "+=") + r, u.animate(e, c, l).animate(o, c, l), r = s ? 2 * r : r / 2;
        s && (e = { opacity: 0 }, e[f] = (y ? "-=" : "+=") + r, u.animate(e, c, l));
        u.queue(i);
        n.effects.unshift(u, d, b + 1) });
    n.effects.define("clip", "hide", function(t, i) { var r, u = {},
            f = n(this),
            e = t.direction || "vertical",
            o = "both" === e,
            s = o || "horizontal" === e,
            h = o || "vertical" === e;
        r = f.cssClip();
        u.clip = { top: h ? (r.bottom - r.top) / 2 : r.top, right: s ? (r.right - r.left) / 2 : r.right, bottom: h ? (r.bottom - r.top) / 2 : r.bottom, left: s ? (r.right - r.left) / 2 : r.left };
        n.effects.createPlaceholder(f); "show" === t.mode && (f.cssClip(u.clip), u.clip = r);
        f.animate(u, { queue: !1, duration: t.duration, easing: t.easing, complete: i }) });
    n.effects.define("drop", "hide", function(t, i) { var e, u = n(this),
            h = t.mode,
            c = "show" === h,
            f = t.direction || "left",
            o = "up" === f || "down" === f ? "top" : "left",
            s = "up" === f || "left" === f ? "-=" : "+=",
            l = "+=" === s ? "-=" : "+=",
            r = { opacity: 0 };
        n.effects.createPlaceholder(u);
        e = t.distance || u["top" === o ? "outerHeight" : "outerWidth"](!0) / 2;
        r[o] = s + e;
        c && (u.css(r), r[o] = l + e, r.opacity = 1);
        u.animate(r, { queue: !1, duration: t.duration, easing: t.easing, complete: i }) });
    n.effects.define("explode", "hide", function(t, i) {
        function b() { p.push(this);
            p.length === e * c && k() }

        function k() { o.css({ visibility: "visible" });
            n(p).remove();
            i() } for (var u, l, a, v, y, e = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = e, o = n(this), d = t.mode, f = "show" === d, w = o.show().css("visibility", "hidden").offset(), s = Math.ceil(o.outerWidth() / c), h = Math.ceil(o.outerHeight() / e), p = [], r = 0; e > r; r++)
            for (a = w.top + r * h, y = r - (e - 1) / 2, u = 0; c > u; u++) l = w.left + u * s, v = u - (c - 1) / 2, o.clone().appendTo("body").wrap("<div><\/div>").css({ position: "absolute", visibility: "visible", left: -u * s, top: -r * h }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: s, height: h, left: l + (f ? v * s : 0), top: a + (f ? y * h : 0), opacity: f ? 0 : 1 }).animate({ left: l + (f ? 0 : v * s), top: a + (f ? 0 : y * h), opacity: f ? 1 : 0 }, t.duration || 500, t.easing, b) });
    n.effects.define("fade", "toggle", function(t, i) { var r = "show" === t.mode;
        n(this).css("opacity", r ? 0 : 1).animate({ opacity: r ? 1 : 0 }, { queue: !1, duration: t.duration, easing: t.easing, complete: i }) });
    n.effects.define("fold", "hide", function(t, i) { var u = n(this),
            l = t.mode,
            v = "show" === l,
            y = "hide" === l,
            o = t.size || 15,
            a = /([0-9]+)%/.exec(o),
            p = !!t.horizFirst,
            f = p ? ["right", "bottom"] : ["bottom", "right"],
            s = t.duration / 2,
            h = n.effects.createPlaceholder(u),
            e = u.cssClip(),
            c = { clip: n.extend({}, e) },
            r = { clip: n.extend({}, e) },
            w = [e[f[0]], e[f[1]]],
            b = u.queue().length;
        a && (o = parseInt(a[1], 10) / 100 * w[y ? 0 : 1]);
        c.clip[f[0]] = o;
        r.clip[f[0]] = o;
        r.clip[f[1]] = 0;
        v && (u.cssClip(r.clip), h && h.css(n.effects.clipToBox(r)), r.clip = e);
        u.queue(function(i) { h && h.animate(n.effects.clipToBox(c), s, t.easing).animate(n.effects.clipToBox(r), s, t.easing);
            i() }).animate(c, s, t.easing).animate(r, s, t.easing).queue(i);
        n.effects.unshift(u, b, 4) });
    n.effects.define("highlight", "show", function(t, i) { var r = n(this),
            u = { backgroundColor: r.css("backgroundColor") }; "hide" === t.mode && (u.opacity = 0);
        n.effects.saveStyle(r);
        r.css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" }).animate(u, { queue: !1, duration: t.duration, easing: t.easing, complete: i }) });
    n.effects.define("size", function(t, i) { var l, r, p, u = n(this),
            v = ["fontSize"],
            s = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            w = t.mode,
            y = "effect" !== w,
            c = t.scale || "both",
            b = t.origin || ["middle", "center"],
            k = u.css("position"),
            a = u.position(),
            o = n.effects.scaledDimensions(u),
            f = t.from || o,
            e = t.to || n.effects.scaledDimensions(u, 0);
        n.effects.createPlaceholder(u); "show" === w && (p = f, f = e, e = p);
        r = { from: { y: f.height / o.height, x: f.width / o.width }, to: { y: e.height / o.height, x: e.width / o.width } };
        ("box" === c || "both" === c) && (r.from.y !== r.to.y && (f = n.effects.setTransition(u, s, r.from.y, f), e = n.effects.setTransition(u, s, r.to.y, e)), r.from.x !== r.to.x && (f = n.effects.setTransition(u, h, r.from.x, f), e = n.effects.setTransition(u, h, r.to.x, e)));
        ("content" === c || "both" === c) && r.from.y !== r.to.y && (f = n.effects.setTransition(u, v, r.from.y, f), e = n.effects.setTransition(u, v, r.to.y, e));
        b && (l = n.effects.getBaseline(b, o), f.top = (o.outerHeight - f.outerHeight) * l.y + a.top, f.left = (o.outerWidth - f.outerWidth) * l.x + a.left, e.top = (o.outerHeight - e.outerHeight) * l.y + a.top, e.left = (o.outerWidth - e.outerWidth) * l.x + a.left);
        u.css(f);
        ("content" === c || "both" === c) && (s = s.concat(["marginTop", "marginBottom"]).concat(v), h = h.concat(["marginLeft", "marginRight"]), u.find("*[width]").each(function() { var i = n(this),
                u = n.effects.scaledDimensions(i),
                f = { height: u.height * r.from.y, width: u.width * r.from.x, outerHeight: u.outerHeight * r.from.y, outerWidth: u.outerWidth * r.from.x },
                e = { height: u.height * r.to.y, width: u.width * r.to.x, outerHeight: u.height * r.to.y, outerWidth: u.width * r.to.x };
            r.from.y !== r.to.y && (f = n.effects.setTransition(i, s, r.from.y, f), e = n.effects.setTransition(i, s, r.to.y, e));
            r.from.x !== r.to.x && (f = n.effects.setTransition(i, h, r.from.x, f), e = n.effects.setTransition(i, h, r.to.x, e));
            y && n.effects.saveStyle(i);
            i.css(f);
            i.animate(e, t.duration, t.easing, function() { y && n.effects.restoreStyle(i) }) }));
        u.animate(e, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { var t = u.offset();
                0 === e.opacity && u.css("opacity", f.opacity);
                y || (u.css("position", "static" === k ? "relative" : k).offset(t), n.effects.saveStyle(u));
                i() } }) });
    n.effects.define("scale", function(t, i) { var u = n(this),
            f = t.mode,
            e = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "effect" !== f ? 0 : 100),
            r = n.extend(!0, { from: n.effects.scaledDimensions(u), to: n.effects.scaledDimensions(u, e, t.direction || "both"), origin: t.origin || ["middle", "center"] }, t);
        t.fade && (r.from.opacity = 1, r.to.opacity = 0);
        n.effects.effect.size.call(this, r, i) });
    n.effects.define("puff", "hide", function(t, i) { var r = n.extend(!0, {}, t, { fade: !0, percent: parseInt(t.percent, 10) || 150 });
        n.effects.effect.scale.call(this, r, i) });
    n.effects.define("pulsate", "show", function(t, i) { var r = n(this),
            e = t.mode,
            o = "show" === e,
            c = "hide" === e,
            l = o || c,
            f = 2 * (t.times || 5) + (l ? 1 : 0),
            s = t.duration / f,
            u = 0,
            h = 1,
            a = r.queue().length; for ((o || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1); f > h; h++) r.animate({ opacity: u }, s, t.easing), u = 1 - u;
        r.animate({ opacity: u }, s, t.easing);
        r.queue(i);
        n.effects.unshift(r, a, f + 1) });
    n.effects.define("shake", function(t, i) { var l = 1,
            r = n(this),
            f = t.direction || "left",
            e = t.distance || 20,
            a = t.times || 3,
            v = 2 * a + 1,
            u = Math.round(t.duration / v),
            o = "up" === f || "down" === f ? "top" : "left",
            s = "up" === f || "left" === f,
            h = {},
            c = {},
            y = {},
            p = r.queue().length; for (n.effects.createPlaceholder(r), h[o] = (s ? "-=" : "+=") + e, c[o] = (s ? "+=" : "-=") + 2 * e, y[o] = (s ? "-=" : "+=") + 2 * e, r.animate(h, u, t.easing); a > l; l++) r.animate(c, u, t.easing).animate(y, u, t.easing);
        r.animate(c, u, t.easing).animate(h, u / 2, t.easing).queue(i);
        n.effects.unshift(r, p, v + 1) });
    n.effects.define("slide", "show", function(t, i) { var s, o, u = n(this),
            h = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
            c = t.mode,
            f = t.direction || "left",
            e = "up" === f || "down" === f ? "top" : "left",
            l = "up" === f || "left" === f,
            a = t.distance || u["top" === e ? "outerHeight" : "outerWidth"](!0),
            r = {};
        n.effects.createPlaceholder(u);
        s = u.cssClip();
        o = u.position()[e];
        r[e] = (l ? -1 : 1) * a + o;
        r.clip = u.cssClip();
        r.clip[h[f][1]] = r.clip[h[f][0]]; "show" === c && (u.cssClip(r.clip), u.css(e, r[e]), r.clip = s, r[e] = o);
        u.animate(r, { queue: !1, duration: t.duration, easing: t.easing, complete: i }) });
    n.uiBackCompat !== !1 && (w = n.effects.define("transfer", function(t, i) { n(this).transfer(t, i) })) }),
function(n) { "function" == typeof define && define.amd ? define(["jquery"], n) : n(jQuery) }(function(n) { n.ui = n.ui || {};
    n.ui.version = "1.12.1"; var i = 0,
        t = Array.prototype.slice;
    n.cleanData = function(t) { return function(i) { for (var r, u, f = 0; null != (u = i[f]); f++) try { r = n._data(u, "events");
                r && r.remove && n(u).triggerHandler("remove") } catch (e) {} t(i) } }(n.cleanData);
    n.widget = function(t, i, r) { var f, u, o, h = {},
            e = t.split(".")[0],
            s; return t = t.split(".")[1], s = e + "-" + t, r || (r = i, i = n.Widget), n.isArray(r) && (r = n.extend.apply(null, [{}].concat(r))), n.expr[":"][s.toLowerCase()] = function(t) { return !!n.data(t, s) }, n[e] = n[e] || {}, f = n[e][t], u = n[e][t] = function(n, t) { return this._createWidget ? (arguments.length && this._createWidget(n, t), void 0) : new u(n, t) }, n.extend(u, f, { version: r.version, _proto: n.extend({}, r), _childConstructors: [] }), o = new i, o.options = n.widget.extend({}, o.options), n.each(r, function(t, r) { return n.isFunction(r) ? (h[t] = function() {
                function n() { return i.prototype[t].apply(this, arguments) }

                function u(n) { return i.prototype[t].apply(this, n) } return function() { var t, i = this._super,
                        f = this._superApply; return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t } }(), void 0) : (h[t] = r, void 0) }), u.prototype = n.widget.extend(o, { widgetEventPrefix: f ? o.widgetEventPrefix || t : t }, h, { constructor: u, namespace: e, widgetName: t, widgetFullName: s }), f ? (n.each(f._childConstructors, function(t, i) { var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto) }), delete f._childConstructors) : i._childConstructors.push(u), n.widget.bridge(t, u), u };
    n.widget.extend = function(i) { for (var r, u, e = t.call(arguments, 1), f = 0, o = e.length; o > f; f++)
            for (r in e[f]) u = e[f][r], e[f].hasOwnProperty(r) && void 0 !== u && (i[r] = n.isPlainObject(u) ? n.isPlainObject(i[r]) ? n.widget.extend({}, i[r], u) : n.widget.extend({}, u) : u); return i };
    n.widget.bridge = function(i, r) { var u = r.prototype.widgetFullName || i;
        n.fn[i] = function(f) { var s = "string" == typeof f,
                o = t.call(arguments, 1),
                e = this; return s ? this.length || "instance" !== f ? this.each(function() { var t, r = n.data(this, u); return "instance" === f ? (e = r, !1) : r ? n.isFunction(r[f]) && "_" !== f.charAt(0) ? (t = r[f].apply(r, o), t !== r && void 0 !== t ? (e = t && t.jquery ? e.pushStack(t.get()) : t, !1) : void 0) : n.error("no such method '" + f + "' for " + i + " widget instance") : n.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + f + "'") }) : e = void 0 : (o.length && (f = n.widget.extend.apply(null, [f].concat(o))), this.each(function() { var t = n.data(this, u);
                t ? (t.option(f || {}), t._init && t._init()) : n.data(this, u, new r(f, this)) })), e } };
    n.Widget = function() {};
    n.Widget._childConstructors = [];
    n.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: !1, create: null }, _createWidget: function(t, r) { r = n(r || this.defaultElement || this)[0];
            this.element = n(r);
            this.uuid = i++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = n();
            this.hoverable = n();
            this.focusable = n();
            this.classesElementLookup = {};
            r !== this && (n.data(r, this.widgetFullName, this), this._on(!0, this.element, { remove: function(n) { n.target === r && this.destroy() } }), this.document = n(r.style ? r.ownerDocument : r.document || r), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
            this._create();
            this.options.disabled && this._setOptionDisabled(this.options.disabled);
            this._trigger("create", null, this._getCreateEventData());
            this._init() }, _getCreateOptions: function() { return {} }, _getCreateEventData: n.noop, _create: n.noop, _init: n.noop, destroy: function() { var t = this;
            this._destroy();
            n.each(this.classesElementLookup, function(n, i) { t._removeClass(i, n) });
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
            this.bindings.off(this.eventNamespace) }, _destroy: n.noop, widget: function() { return this.element }, option: function(t, i) { var r, u, f, e = t; if (0 === arguments.length) return n.widget.extend({}, this.options); if ("string" == typeof t)
                if (e = {}, r = t.split("."), t = r.shift(), r.length) { for (u = e[t] = n.widget.extend({}, this.options[t]), f = 0; r.length - 1 > f; f++) u[r[f]] = u[r[f]] || {}, u = u[r[f]]; if (t = r.pop(), 1 === arguments.length) return void 0 === u[t] ? null : u[t];
                    u[t] = i } else { if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    e[t] = i } return this._setOptions(e), this }, _setOptions: function(n) { var t; for (t in n) this._setOption(t, n[t]); return this }, _setOption: function(n, t) { return "classes" === n && this._setOptionClasses(t), this.options[n] = t, "disabled" === n && this._setOptionDisabled(t), this }, _setOptionClasses: function(t) { var i, u, r; for (i in t) r = this.classesElementLookup[i], t[i] !== this.options.classes[i] && r && r.length && (u = n(r.get()), this._removeClass(r, i), u.addClass(this._classes({ element: u, keys: i, classes: t, add: !0 }))) }, _setOptionDisabled: function(n) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!n);
            n && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) }, enable: function() { return this._setOptions({ disabled: !1 }) }, disable: function() { return this._setOptions({ disabled: !0 }) }, _classes: function(t) {
            function r(r, f) { for (var o, e = 0; r.length > e; e++) o = u.classesElementLookup[r[e]] || n(), o = t.add ? n(n.unique(o.get().concat(t.element.get()))) : n(o.not(t.element).get()), u.classesElementLookup[r[e]] = o, i.push(r[e]), f && t.classes[r[e]] && i.push(t.classes[r[e]]) } var i = [],
                u = this; return t = n.extend({ element: this.element, classes: this.options.classes || {} }, t), this._on(t.element, { remove: "_untrackClassesElement" }), t.keys && r(t.keys.match(/\S+/g) || [], !0), t.extra && r(t.extra.match(/\S+/g) || []), i.join(" ") }, _untrackClassesElement: function(t) { var i = this;
            n.each(i.classesElementLookup, function(r, u) {-1 !== n.inArray(t.target, u) && (i.classesElementLookup[r] = n(u.not(t.target).get())) }) }, _removeClass: function(n, t, i) { return this._toggleClass(n, t, i, !1) }, _addClass: function(n, t, i) { return this._toggleClass(n, t, i, !0) }, _toggleClass: function(n, t, i, r) { r = "boolean" == typeof r ? r : i; var u = "string" == typeof n || null === n,
                f = { extra: u ? t : i, keys: u ? n : t, element: u ? this.element : n, add: r }; return f.element.toggleClass(this._classes(f), r), this }, _on: function(t, i, r) { var f, u = this; "boolean" != typeof t && (r = i, i = t, t = !1);
            r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
            n.each(r, function(r, e) {
                function o() { if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? u[e] : e).apply(u, arguments) } "string" != typeof e && (o.guid = e.guid = e.guid || o.guid || n.guid++); var s = r.match(/^([\w:-]*)\s*(.*)$/),
                    h = s[1] + u.eventNamespace,
                    c = s[2];
                c ? f.on(h, c, o) : i.on(h, o) }) }, _off: function(t, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            t.off(i).off(i);
            this.bindings = n(this.bindings.not(t).get());
            this.focusable = n(this.focusable.not(t).get());
            this.hoverable = n(this.hoverable.not(t).get()) }, _delay: function(n, t) {
            function r() { return ("string" == typeof n ? i[n] : n).apply(i, arguments) } var i = this; return setTimeout(r, t || 0) }, _hoverable: function(t) { this.hoverable = this.hoverable.add(t);
            this._on(t, { mouseenter: function(t) { this._addClass(n(t.currentTarget), null, "ui-state-hover") }, mouseleave: function(t) { this._removeClass(n(t.currentTarget), null, "ui-state-hover") } }) }, _focusable: function(t) { this.focusable = this.focusable.add(t);
            this._on(t, { focusin: function(t) { this._addClass(n(t.currentTarget), null, "ui-state-focus") }, focusout: function(t) { this._removeClass(n(t.currentTarget), null, "ui-state-focus") } }) }, _trigger: function(t, i, r) { var u, f, e = this.options[t]; if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent)
                for (u in f) u in i || (i[u] = f[u]); return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented()) } };
    n.each({ show: "fadeIn", hide: "fadeOut" }, function(t, i) { n.Widget.prototype["_" + t] = function(r, u, f) { "string" == typeof u && (u = { effect: u }); var o, e = u ? u === !0 || "number" == typeof u ? i : u.effect || i : t;
            u = u || {}; "number" == typeof u && (u = { duration: u });
            o = !n.isEmptyObject(u);
            u.complete = f;
            u.delay && r.delay(u.delay);
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) { n(this)[t]();
                f && f.call(r[0]);
                i() }) } });
    n.widget;
    n.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 };
    n.fn.extend({ uniqueId: function() { var n = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++n) }) } }(), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && n(this).removeAttr("id") }) } });
    n.widget("ui.accordion", { version: "1.12.1", options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: !1, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function() { var t = this.options;
            this.prevShow = this.prevHide = n();
            this._addClass("ui-accordion", "ui-widget ui-helper-reset");
            this.element.attr("role", "tablist");
            t.collapsible || t.active !== !1 && null != t.active || (t.active = 0);
            this._processPanels();
            0 > t.active && (t.active += this.headers.length);
            this._refresh() }, _getCreateEventData: function() { return { header: this.active, panel: this.active.length ? this.active.next() : n() } }, _createIcons: function() { var i, r, t = this.options.icons;
            t && (i = n("<span>"), this._addClass(i, "ui-accordion-header-icon", "ui-icon " + t.header), i.prependTo(this.headers), r = this.active.children(".ui-accordion-header-icon"), this._removeClass(r, t.header)._addClass(r, null, t.activeHeader)._addClass(this.headers, "ui-accordion-icons")) }, _destroyIcons: function() { this._removeClass(this.headers, "ui-accordion-icons");
            this.headers.children(".ui-accordion-header-icon").remove() }, _destroy: function() { var n;
            this.element.removeAttr("role");
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
            this._destroyIcons();
            n = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(); "content" !== this.options.heightStyle && n.css("height", "") }, _setOption: function(n, t) { return "active" === n ? (this._activate(t), void 0) : ("event" === n && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(n, t), "collapsible" !== n || t || this.options.active !== !1 || this._activate(0), "icons" === n && (this._destroyIcons(), t && this._createIcons()), void 0) }, _setOptionDisabled: function(n) { this._super(n);
            this.element.attr("aria-disabled", n);
            this._toggleClass(null, "ui-state-disabled", !!n);
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!n) }, _keydown: function(t) { if (!t.altKey && !t.ctrlKey) { var i = n.ui.keyCode,
                    u = this.headers.length,
                    f = this.headers.index(t.target),
                    r = !1; switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        r = this.headers[(f + 1) % u]; break;
                    case i.LEFT:
                    case i.UP:
                        r = this.headers[(f - 1 + u) % u]; break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(t); break;
                    case i.HOME:
                        r = this.headers[0]; break;
                    case i.END:
                        r = this.headers[u - 1] } r && (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), n(r).trigger("focus"), t.preventDefault()) } }, _panelKeyDown: function(t) { t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().trigger("focus") }, refresh: function() { var t = this.options;
            this._processPanels();
            t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = n()) : t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active);
            this._destroyIcons();
            this._refresh() }, _processPanels: function() { var t = this.headers,
                n = this.panels;
            this.headers = this.element.find(this.options.header);
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default");
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content");
            n && (this._off(t.not(this.headers)), this._off(n.not(this.panels))) }, _refresh: function() { var t, i = this.options,
                r = i.heightStyle,
                u = this.element.parent();
            this.active = this._findActive(i.active);
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed");
            this._addClass(this.active.next(), "ui-accordion-content-active");
            this.active.next().show();
            this.headers.attr("role", "tab").each(function() { var t = n(this),
                    r = t.uniqueId().attr("id"),
                    i = t.next(),
                    u = i.uniqueId().attr("id");
                t.attr("aria-controls", u);
                i.attr("aria-labelledby", r) }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide();
            this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0);
            this._createIcons();
            this._setupEvents(i.event); "fill" === r ? (t = u.height(), this.element.siblings(":visible").each(function() { var i = n(this),
                    r = i.css("position"); "absolute" !== r && "fixed" !== r && (t -= i.outerHeight(!0)) }), this.headers.each(function() { t -= n(this).outerHeight(!0) }), this.headers.next().each(function() { n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height())) }).css("overflow", "auto")) : "auto" === r && (t = 0, this.headers.next().each(function() { var i = n(this).is(":visible");
                i || n(this).show();
                t = Math.max(t, n(this).css("height", "").height());
                i || n(this).hide() }).height(t)) }, _activate: function(t) { var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: n.noop })) }, _findActive: function(t) { return "number" == typeof t ? this.headers.eq(t) : n() }, _setupEvents: function(t) { var i = { keydown: "_keydown" };
            t && n.each(t.split(" "), function(n, t) { i[t] = "_eventHandler" });
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, i);
            this._on(this.headers.next(), { keydown: "_panelKeyDown" });
            this._hoverable(this.headers);
            this._focusable(this.headers) }, _eventHandler: function(t) { var e, o, i = this.options,
                u = this.active,
                r = n(t.currentTarget),
                f = r[0] === u[0],
                s = f && i.collapsible,
                c = s ? n() : r.next(),
                l = u.next(),
                h = { oldHeader: u, oldPanel: l, newHeader: s ? n() : r, newPanel: c };
            t.preventDefault();
            f && !i.collapsible || this._trigger("beforeActivate", t, h) === !1 || (i.active = s ? !1 : this.headers.index(r), this.active = f ? n() : r, this._toggle(h), this._removeClass(u, "ui-accordion-header-active", "ui-state-active"), i.icons && (e = u.children(".ui-accordion-header-icon"), this._removeClass(e, null, i.icons.activeHeader)._addClass(e, null, i.icons.header)), f || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), i.icons && (o = r.children(".ui-accordion-header-icon"), this._removeClass(o, null, i.icons.header)._addClass(o, null, i.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active"))) }, _toggle: function(t) { var r = t.newPanel,
                i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = r;
            this.prevHide = i;
            this.options.animate ? this._animate(r, i, t) : (i.hide(), r.show(), this._toggleComplete(t));
            i.attr({ "aria-hidden": "true" });
            i.prev().attr({ "aria-selected": "false", "aria-expanded": "false" });
            r.length && i.length ? i.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : r.length && this.headers.filter(function() { return 0 === parseInt(n(this).attr("tabIndex"), 10) }).attr("tabIndex", -1);
            r.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _animate: function(n, t, i) { var h, r, u, c = this,
                o = 0,
                l = n.css("box-sizing"),
                a = n.length && (!t.length || n.index() < t.index()),
                e = this.options.animate || {},
                f = a && e.down || e,
                s = function() { c._toggleComplete(i) }; return "number" == typeof f && (u = f), "string" == typeof f && (r = f), r = r || f.easing || e.easing, u = u || f.duration || e.duration, t.length ? n.length ? (h = n.show().outerHeight(), t.animate(this.hideProps, { duration: u, easing: r, step: function(n, t) { t.now = Math.round(n) } }), n.hide().animate(this.showProps, { duration: u, easing: r, complete: s, step: function(n, i) { i.now = Math.round(n); "height" !== i.prop ? "content-box" === l && (o += i.now) : "content" !== c.options.heightStyle && (i.now = Math.round(h - t.outerHeight() - o), o = 0) } }), void 0) : t.animate(this.hideProps, u, r, s) : n.animate(this.showProps, u, r, s) }, _toggleComplete: function(n) { var t = n.oldPanel,
                i = t.prev();
            this._removeClass(t, "ui-accordion-content-active");
            this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed");
            t.length && (t.parent()[0].className = t.parent()[0].className);
            this._trigger("activate", null, n) } }) }),
function(n) { n.fn.idleTimeout = function(t) { var it = { redirectUrl: "/logout", idleTimeLimit: 1200, idleCheckHeartbeat: 2, customCallback: !1, activityEvents: "click keypress scroll wheel mousewheel mousemove", enableDialog: !0, dialogDisplayLimit: 180, dialogTitle: "Session Expiration Warning", dialogText: "Because you have been inactive, your session is about to expire.", dialogTimeRemaining: "Time remaining", dialogStayLoggedInButton: "Stay Logged In", dialogLogOutNowButton: "Log Out Now", errorAlertMessage: 'Please disable "Private Mode", or upgrade to a modern browser.', sessionKeepAliveTimer: 600, sessionKeepAliveUrl: window.location.href },
            i = n.extend(it, t),
            rt = document.title,
            a, u, o, v, y, p, w, b, s, f, h, k, d, g, nt, c, e, l, tt, r; return this.logout = function() { localStorage.idleTimerLoggedOut = !0;
            localStorage.Realtor_lastLogout = n.now() }, u = function() { v = function() { n.get(i.sessionKeepAliveUrl);
                u() };
            y = setTimeout(v, i.sessionKeepAliveTimer * 1e3) }, o = function() { clearTimeout(y) }, a = function() { n("body").on(i.activityEvents, function() {
                (!i.enableDialog || i.enableDialog && e() !== !0) && f() }) }, b = function() { var t = parseInt(localStorage.idleTimerLastActivity) + i.idleTimeLimit * 1e3;
            n.now() > t ? i.enableDialog ? i.enableDialog && e() !== !0 && (k(), nt()) : r() : localStorage.idleTimerLoggedOut === !0 ? r() : i.enableDialog && e() === !0 && (l(), c()) }, f = function() { h();
            localStorage.idleTimerLastActivity = n.now();
            s() }, s = function() { localStorage.idleTimerLoggedOut == "false" && (b(), p = setTimeout(s, i.idleCheckHeartbeat * 1e3)) }, h = function() { clearTimeout(p) }, k = function() { var t = "<div id='idletimer_warning_dialog'><p>" + i.dialogText + "<\/p><p style='display:inline'>" + i.dialogTimeRemaining + ": <div style='display:inline' id='countdownDisplay'><\/div><\/p><\/div>";
            n(t).dialog({ buttons: [{ text: i.dialogStayLoggedInButton, click: function() { l();
                        c();
                        f() } }, { text: i.dialogLogOutNowButton, click: function() { r() } }], closeOnEscape: !1, modal: !0, title: i.dialogTitle, open: function() { n(this).closest(".ui-dialog").find(".ui-dialog-titlebar-close").hide() } });
            tt();
            document.title = i.dialogTitle;
            i.sessionKeepAliveTimer && o() }, g = function() { var t = parseInt(localStorage.idleTimerLastActivity) + i.idleTimeLimit * 1e3 + i.dialogDisplayLimit * 1e3;
            (n.now() > t || localStorage.idleTimerLoggedOut === !0) && r() }, nt = function() { d = setInterval(g, i.idleCheckHeartbeat * 1e3) }, c = function() { clearInterval(d);
            clearInterval(w) }, e = function() { var t = n("#idletimer_warning_dialog").is(":visible"); return t === !0 ? !0 : !1 }, l = function() { n("#idletimer_warning_dialog").dialog("destroy").remove();
            document.title = rt;
            i.sessionKeepAliveTimer && u() }, tt = function() { var u = i.dialogDisplayLimit,
                t, r;
            w = setInterval(function() { t = Math.floor(u / 60);
                t < 10 && (t = "0" + t);
                r = u - t * 60;
                r < 10 && (r = "0" + r);
                n("#countdownDisplay").html(t + ":" + r);
                u -= 1 }, 1e3) }, r = function() { h();
            localStorage.idleTimerLoggedOut = !0;
            i.sessionKeepAliveTimer && o();
            i.customCallback && i.customCallback();
            i.redirectUrl && (window.location.href = i.redirectUrl) }, this.each(function() { localStorage ? (localStorage.idleTimerLastActivity = n.now(), localStorage.idleTimerLoggedOut = !1, a(), i.sessionKeepAliveTimer && u(), f()) : alert(i.errorAlertMessage) }) } }(jQuery);
activeLightBoxCount = 0,
    function(n) { n.fn.lightbox_me = function(t) { return this.each(function() {
                function s() { if (i.index == activeLightBoxCount) { var t = r[0].style;
                        i.destroyOnClose ? r.add(u).remove() : (u.remove(), r.hide(), r.unbind("close"));
                        i.parentLightbox && i.parentLightbox.fadeIn(100);
                        o.remove();
                        n(".js_lb_overlay:visible").each(function() { n(this).css("z-index", n(this).css("z-index") + 1) });
                        activeLightBoxCount == 1 && (r.undelegate(i.closeSelector, "click"), n(window).unbind("reposition", h), n(window).unbind("reposition", f), n(window).unbind("scroll", f), n(window).unbind("keyup.lightbox_me"));
                        e && t.removeExpression("top");
                        i.onClose();
                        n.fn.lightbox_me.defaultClose(r);
                        activeLightBoxCount-- } }

                function a(n) {
                    (n.keyCode == 27 || n.DOM_VK_ESCAPE == 27 && n.which == 0) && i.closeEsc && s() }

                function h() { n(window).height() < n(document).height() ? (u.css({ height: n(document).height() + "px" }), o.css({ height: n(document).height() + "px" })) : (u.css({ height: "100%" }), e && (n("html,body").css("height", "100%"), o.css("height", "100%"))) }

                function f() { var t = r[0].style,
                        u, f;
                    r.css({ left: "50%", marginLeft: r.outerWidth() / -2, zIndex: i.zIndex + 3 });
                    r.height() + 80 >= n(window).height() && (r.css("position") != "absolute" || e) ? (u = n(document).scrollTop() + 40, r.css({ position: "absolute", top: u + "px", marginTop: 0 }), e && t.removeExpression("top")) : r.height() + 80 < n(window).height() && (e ? (t.position = "absolute", i.centered ? (t.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), t.marginTop = 0) : (f = i.modalCSS && i.modalCSS.top ? parseInt(i.modalCSS.top) : 0, t.setExpression("top", "((blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + f + ') + "px"'))) : i.centered ? r.css({ position: "fixed", top: "50%", marginTop: r.outerHeight() / -2 }) : r.css({ position: "fixed" }).css(i.modalCSS)) } var i = n.extend({}, n.fn.lightbox_me.defaults, t),
                    u = n(),
                    r = n(this),
                    o = n('<iframe id="foo" style="z-index: ' + (i.zIndex + 1) + ';border: none; margin: 0; min-width:2000px; padding: 0; position: fixed; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>'),
                    e = !1,
                    l, c;
                i.showOverlay && (l = n(".js_lb_overlay:visible"), activeLightBoxCount++, i.index = activeLightBoxCount, n(".js_lb_overlay:visible").each(function() { n(this).css("z-index", n(this).css("z-index") - 1) }), u = n('<div class="' + i.classPrefix + '_overlay js_lb_overlay"/>'));
                e && (c = /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", o.attr("src", c), n("body").append(o));
                n("body").append(r.hide()).append(u);
                i.showOverlay && (h(), u.css({ position: "fixed", width: "100%", top: 0, left: 0, right: 0, bottom: 0, zIndex: i.zIndex + 2, display: "none" }), u.hasClass("lb_overlay_clear") || u.css(i.overlayCSS));
                i.showOverlay ? u.fadeIn(i.overlaySpeed, function() { f();
                    r[i.appearEffect](i.lightboxSpeed, function() { h();
                        f();
                        i.onLoad(r);
                        n.fn.lightbox_me.defaultOpen(r) }) }) : (f(), r[i.appearEffect](i.lightboxSpeed, function() { i.onLoad();
                    n.fn.lightbox_me.defaultOpen(r) }));
                i.parentLightbox && i.parentLightbox.fadeOut(100);
                n(window).resize(h).resize(f).scroll(f);
                n(window).bind("keyup.lightbox_me", a);
                i.closeClick && u.click(function(n) { s();
                    n.preventDefault });
                r.delegate(i.closeSelector, "click", function(n) { s();
                    n.preventDefault() });
                r.bind("close", s);
                r.bind("reposition", f);
                r[0].focus() }) };
        n.fn.lightbox_me.defaultClose = function() { try { n(".qtip").show();
                prevFocusedElement && prevFocusedElement.focus() } catch (t) {} };
        n.fn.lightbox_me.defaultOpen = function(t) { if (prevFocusedElement = n(":focus"), t) { n(".qtip").hide(); var i = t[0].id,
                    r = n("#" + i + " :focusable").last(),
                    u = n("#" + i + " :focusable").first(),
                    f = n("#" + i + " :focusable").not(".b_close,.initFocusSkip").first();
                f.focus();
                r.keydown(function(n) { n.which != 9 || n.shiftKey || (u.focus(), n.preventDefault()) });
                u.keydown(function(n) { n.which === 9 && n.shiftKey && (r.focus(), n.preventDefault()) }) } };
        n.fn.lightbox_me.defaults = { appearEffect: "fadeIn", appearEase: "", overlaySpeed: 0, lightboxSpeed: 0, closeSelector: ".close", closeClick: !1, closeEsc: !0, destroyOnClose: !1, showOverlay: !0, parentLightbox: !1, prevFocusedElement: null, onLoad: function() {}, onClose: function() {}, classPrefix: "lb", zIndex: 999, centered: !1, modalCSS: { top: "40px" }, overlayCSS: { background: "black", opacity: .3 } } }(jQuery),
    function(n) { typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery) }(function(n) {
        function i(n) { return t.raw ? n : encodeURIComponent(n) }

        function f(n) { return t.raw ? n : decodeURIComponent(n) }

        function e(n) { return i(t.json ? JSON.stringify(n) : String(n)) }

        function o(n) { n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return n = decodeURIComponent(n.replace(u, " ")), t.json ? JSON.parse(n) : n } catch (i) {} }

        function r(i, r) { var u = t.raw ? i : o(i); return n.isFunction(r) ? r(u) : u } var u = /\+/g,
            t = n.cookie = function(u, o, s) { var y, a, h, v, c, p; if (o !== undefined && !n.isFunction(o)) return s = n.extend({}, t.defaults, s), typeof s.expires == "number" && (y = s.expires, a = s.expires = new Date, a.setTime(+a + y * 864e5)), document.cookie = [i(u), "=", e(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join(""); for (h = u ? undefined : {}, v = document.cookie ? document.cookie.split("; ") : [], c = 0, p = v.length; c < p; c++) { var w = v[c].split("="),
                        b = f(w.shift()),
                        l = w.join("="); if (u && u === b) { h = r(l, o); break } u || (l = r(l)) === undefined || (h[b] = l) } return h };
        t.defaults = {};
        n.removeCookie = function(t, i) { return n.cookie(t) === undefined ? !1 : (n.cookie(t, "", n.extend({}, i, { expires: -1 })), !n.cookie(t)) } }),
    function(n) {
        function t(t, i) { var u, r = this,
                o = window.navigator,
                l = o.userAgent.toLowerCase(),
                s, e, a, y;
            r.uid = n.rsModules.uid++;
            r.ns = ".rs" + r.uid; var h = document.createElement("div").style,
                f = ["webkit", "Moz", "ms", "O"],
                e = "",
                v = 0,
                c; for (u = 0; u < f.length; u++) c = f[u], !e && c + "Transform" in h && (e = c), c = c.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[c + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]); for (window.requestAnimationFrame || (window.requestAnimationFrame = function(n) { var t = (new Date).getTime(),
                        i = Math.max(0, 16 - (t - v)),
                        r = window.setTimeout(function() { n(t + i) }, i); return v = t + i, r }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) { clearTimeout(n) }), r.isIPAD = l.match(/(ipad)/), r.isIOS = r.isIPAD || l.match(/(iphone|ipod)/), u = function(n) { return n = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || 0 > n.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [], { browser: n[1] || "", version: n[2] || "0" } }(l), f = {}, u.browser && (f[u.browser] = !0, f.version = u.version), f.chrome && (f.webkit = !0), r._a = f, r.isAndroid = -1 < l.indexOf("android"), r.slider = n(t), r.ev = n(r), r._b = n(document), r.st = n.extend({}, n.fn.royalSlider.defaults, i), r._c = r.st.transitionSpeed, r._d = 0, r.st.allowCSS3 && (!f.webkit || r.st.allowCSS3OnWebkit) && (u = e + (e ? "T" : "t"), r._e = (u + "ransform" in h) && (u + "ransition" in h), r._e && (r._f = (e + (e ? "P" : "p") + "erspective" in h))), e = e.toLowerCase(), r._g = "-" + e + "-", r._h = "vertical" === r.st.slidesOrientation ? !1 : !0, r._i = r._h ? "left" : "top", r._j = r._h ? "width" : "height", r._k = -1, r._l = "fade" === r.st.transitionType ? !1 : !0, r._l || (r.st.sliderDrag = !1, r._m = 10), r._n = "z-index:0; display:none; opacity:0;", r._o = 0, r._p = 0, r._q = 0, n.each(n.rsModules, function(n, t) { "uid" !== n && t.call(r) }), r.slides = [], r._r = 0, (r.st.slides ? n(r.st.slides) : r.slider.children().detach()).each(function() { r._s(this, !0) }), r.st.randomizeSlides && r.slides.sort(function() { return .5 - Math.random() }), r.numSlides = r.slides.length, r._t(), r.st.startSlideId ? r.st.startSlideId > r.numSlides - 1 && (r.st.startSlideId = r.numSlides - 1) : r.st.startSlideId = 0, r._o = r.staticSlideId = r.currSlideId = r._u = r.st.startSlideId, r.currSlide = r.slides[r.currSlideId], r._v = 0, r.pointerMultitouch = !1, r.slider.addClass((r._h ? "rsHor" : "rsVer") + (r._l ? "" : " rsFade")), h = '<div class="rsOverflow"><div class="rsContainer">', r.slidesSpacing = r.st.slidesSpacing, r._w = (r._h ? r.slider.width() : r.slider.height()) + r.st.slidesSpacing, r._x = Boolean(0 < r._y), 1 >= r.numSlides && (r._z = !1), r._a1 = r._z && r._l ? 2 === r.numSlides ? 1 : 2 : 0, r._b1 = 6 > r.numSlides ? r.numSlides : 6, r._c1 = 0, r._d1 = 0, r.slidesJQ = [], u = 0; u < r.numSlides; u++) r.slidesJQ.push(n('<div style="' + (r._l ? "" : u !== r.currSlideId ? r._n : "z-index:0;") + '" class="rsSlide "><\/div>'));
            r._e1 = h = n(h + "<\/div><\/div>");
            s = r.ns;
            e = function(n, t, i, u, f) { r._j1 = n + t + s;
                r._k1 = n + i + s;
                r._l1 = n + u + s;
                f && (r._m1 = n + f + s) };
            u = o.pointerEnabled;
            r.pointerEnabled = u || o.msPointerEnabled;
            r.pointerEnabled ? (r.hasTouch = !1, r._n1 = .2, r.pointerMultitouch = Boolean(1 < o[(u ? "m" : "msM") + "axTouchPoints"]), u ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel")) : (r.isIOS ? r._j1 = r._k1 = r._l1 = r._m1 = "" : e("mouse", "down", "move", "up"), "ontouchstart" in window || "createTouch" in document ? (r.hasTouch = !0, r._j1 += " touchstart" + s, r._k1 += " touchmove" + s, r._l1 += " touchend" + s, r._m1 += " touchcancel" + s, r._n1 = .5, r.st.sliderTouch && (r._f1 = !0)) : (r.hasTouch = !1, r._n1 = .2));
            r.st.sliderDrag && (r._f1 = !0, f.msie || f.opera ? r._g1 = r._h1 = "move" : f.mozilla ? (r._g1 = "-moz-grab", r._h1 = "-moz-grabbing") : f.webkit && -1 != o.platform.indexOf("Mac") && (r._g1 = "-webkit-grab", r._h1 = "-webkit-grabbing"), r._i1());
            r.slider.html(h);
            r._o1 = r.st.controlsInside ? r._e1 : r.slider;
            r._p1 = r._e1.children(".rsContainer");
            r.pointerEnabled && r._p1.css((u ? "" : "-ms-") + "touch-action", r._h ? "pan-y" : "pan-x");
            r._q1 = n('<div class="rsPreloader"><\/div>');
            o = r._p1.children(".rsSlide");
            r._r1 = r.slidesJQ[r.currSlideId];
            r._s1 = 0;
            r._e ? (r._t1 = "transition-property", r._u1 = "transition-duration", r._v1 = "transition-timing-function", r._w1 = r._x1 = r._g + "transform", r._f ? (f.webkit && !f.chrome && r.slider.addClass("rsWebkit3d"), r._y1 = "translate3d(", r._z1 = "px, ", r._a2 = "px, 0px)") : (r._y1 = "translate(", r._z1 = "px, ", r._a2 = "px)"), r._l ? r._p1[r._g + r._t1] = r._g + "transform" : (f = {}, f[r._g + r._t1] = "opacity", f[r._g + r._u1] = r.st.transitionSpeed + "ms", f[r._g + r._v1] = r.st.css3easeInOut, o.css(f))) : (r._x1 = "left", r._w1 = "top");
            n(window).on("resize" + r.ns, function() { a && clearTimeout(a);
                a = setTimeout(function() { r.updateSliderSize() }, 50) }); if (r.ev.trigger("rsAfterPropsSetup"), r.updateSliderSize(), r.st.keyboardNavEnabled && r._b2(), r.st.arrowsNavHideOnTouch && (r.hasTouch || r.pointerMultitouch) && (r.st.arrowsNav = !1), r.st.arrowsNav && (o = r._o1, n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"><\/div><\/div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"><\/div><\/div>').appendTo(o), r._c2 = o.children(".rsArrowLeft").click(function(n) { n.preventDefault();
                    r.prev() }), r._d2 = o.children(".rsArrowRight").click(function(n) { n.preventDefault();
                    r.next() }), r.st.arrowsNavAutoHide && !r.hasTouch && (r._c2.addClass("rsHidden"), r._d2.addClass("rsHidden"), o.one("mousemove.arrowshover", function() { r._c2.removeClass("rsHidden");
                    r._d2.removeClass("rsHidden") }), o.hover(function() { r._e2 || (r._c2.removeClass("rsHidden"), r._d2.removeClass("rsHidden")) }, function() { r._e2 || (r._c2.addClass("rsHidden"), r._d2.addClass("rsHidden")) })), r.ev.on("rsOnUpdateNav", function() { r._f2() }), r._f2()), r.hasTouch && r.st.sliderTouch || !r.hasTouch && r.st.sliderDrag) r._p1.on(r._j1, function(n) { r._g2(n) });
            else r.dragSuccess = !1;
            y = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
            r._p1.click(function(t) { if (!r.dragSuccess) { var i = n(t.target).attr("class"); if (-1 !== n.inArray(i, y) && r.toggleVideo()) return !1; if (r.st.navigateByClick && !r._h2) { if (n(t.target).closest(".rsNoDrag", r._r1).length) return !0;
                        r._i2(t) } r.ev.trigger("rsSlideClick", t) } }).on("click.rs", "a", function() { if (r.dragSuccess) return !1;
                r._h2 = !0;
                setTimeout(function() { r._h2 = !1 }, 3) });
            r.ev.trigger("rsAfterInit") } n.rsModules || (n.rsModules = { uid: 0 });
        t.prototype = { constructor: t, _i2: function(n) { n = n[this._h ? "pageX" : "pageY"] - this._j2;
                n >= this._q ? this.next() : 0 > n && this.prev() }, _t: function() { var n;
                n = this.st.numImagesToPreload;
                (this._z = this.st.loop) && (2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1));
                this._z && 0 < n && (4 >= this.numSlides ? n = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (n = Math.floor((this.numSlides - 1) / 2)));
                this._y = n }, _s: function(t, i) {
                function e(n, t) { if (t ? r.images.push(n.attr(t)) : r.images.push(n.text()), s) { s = !1;
                        r.caption = "src" === t ? n.attr("alt") : n.contents();
                        r.image = r.images[0];
                        r.videoURL = n.attr("data-rsVideo"); var i = n.attr("data-rsw"),
                            f = n.attr("data-rsh"); "undefined" != typeof i && !1 !== i && "undefined" != typeof f && !1 !== f ? (r.iW = parseInt(i, 10), r.iH = parseInt(f, 10)) : u.st.imgWidth && u.st.imgHeight && (r.iW = u.st.imgWidth, r.iH = u.st.imgHeight) } } var u = this,
                    o, r = {},
                    f, s = !0; return t = n(t), u._k2 = t, u.ev.trigger("rsBeforeParseNode", [t, r]), r.stopParsing ? void 0 : (t = u._k2, r.id = u._r, r.contentAdded = !1, u._r++, r.images = [], r.isBig = !1, r.hasCover || (t.hasClass("rsImg") ? (f = t, o = !0) : (f = t.find(".rsImg"), f.length && (o = !0)), o ? (r.bigImage = f.eq(0).attr("data-rsBigImg"), f.each(function() { var t = n(this);
                    t.is("a") ? e(t, "href") : t.is("img") ? e(t, "src") : e(t) })) : t.is("img") && (t.addClass("rsImg rsMainSlideImage"), e(t, "src"))), f = t.find(".rsCaption"), f.length && (r.caption = f.remove()), r.content = t, u.ev.trigger("rsAfterParseNode", [t, r]), i && u.slides.push(r), 0 === r.images.length && (r.isLoaded = !0, r.isRendered = !1, r.isLoading = !1, r.images = null), r) }, _b2: function() { var n = this,
                    t, i, r = function(t) { 37 === t ? n.prev() : 39 === t && n.next() };
                n._b.on("keydown" + n.ns, function(u) { if (!n.st.keyboardNavEnabled) return !0; if (!(n._l2 || (i = u.keyCode, 37 !== i && 39 !== i || t))) { if (document.activeElement && /(INPUT|SELECT|TEXTAREA)/i.test(document.activeElement.tagName)) return !0;
                        n.isFullscreen && u.preventDefault();
                        r(i);
                        t = setInterval(function() { r(i) }, 700) } }).on("keyup" + n.ns, function() { t && (clearInterval(t), t = null) }) }, goTo: function(n, t) { n !== this.currSlideId && this._m2(n, this.st.transitionSpeed, !0, !t) }, destroy: function(t) { this.ev.trigger("rsBeforeDestroy");
                this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1);
                this._p1.off(this._j1 + " click");
                this.slider.data("royalSlider", null);
                n.removeData(this.slider, "royalSlider");
                n(window).off("resize" + this.ns);
                this.loadingTimeout && clearTimeout(this.loadingTimeout);
                t && this.slider.remove();
                this.ev = this.slider = this.slides = null }, _n2: function(t, i) {
                function v(i, u, f) { i.isAdded ? (y(u, i), p(u, i)) : (f || (f = r.slidesJQ[u]), i.holder ? f = i.holder : (f = r.slidesJQ[u] = n(f), i.holder = f), i.appendOnLoaded = !1, p(u, i, f), y(u, i), r._p2(i, f, t), i.isAdded = !0) }

                function y(n, i) { i.contentAdded || (r.setItemHtml(i, t), t || (i.contentAdded = !0)) }

                function p(n, t, i) { r._l && (i || (i = r.slidesJQ[n]), i.css(r._i, (n + r._d1 + a) * r._w)) }

                function s(n) { if (k) { if (n > l - 1) return s(n - l); if (0 > n) return s(l + n) } return n } var r = this,
                    e, u, k = r._z,
                    l = r.numSlides; if (!isNaN(i)) return s(i); var f = r.currSlideId,
                    a, h = t ? Math.abs(r._o2 - r.currSlideId) >= r.numSlides - 1 ? 0 : 1 : r._y,
                    c = Math.min(2, h),
                    w = !1,
                    b = !1,
                    o; for (u = f; u < f + 1 + c; u++)
                    if (o = s(u), (e = r.slides[o]) && (!e.isAdded || !e.positionSet)) { w = !0; break } for (u = f - 1; u > f - 1 - c; u--)
                    if (o = s(u), (e = r.slides[o]) && (!e.isAdded || !e.positionSet)) { b = !0; break } if (w)
                    for (u = f; u < f + h + 1; u++) o = s(u), a = Math.floor((r._u - (f - u)) / r.numSlides) * r.numSlides, (e = r.slides[o]) && v(e, o); if (b)
                    for (u = f - 1; u > f - 1 - h; u--) o = s(u), a = Math.floor((r._u - (f - u)) / l) * l, (e = r.slides[o]) && v(e, o); if (!t)
                    for (c = s(f - h), f = s(f + h), h = c > f ? 0 : c, u = 0; u < l; u++) c > f && u > c - 1 || !(u < h || u > f) || (e = r.slides[u]) && e.holder && (e.holder.detach(), e.isAdded = !1) }, setItemHtml: function(t, i) { var r = this,
                    e = function() { var i, e, u, s; if (t.images) { if (!t.isLoading)
                                if (t.content.hasClass("rsImg") ? (i = t.content, e = !0) : i = t.content.find(".rsImg:not(img)"), i && !i.is("img") && i.each(function() { var i = n(this),
                                            r = '<img class="rsImg" src="' + (i.is("a") ? i.attr("href") : i.text()) + '" />';
                                        e ? t.content = n(r) : i.replaceWith(r) }), i = e ? t.content : t.content.find("img.rsImg"), h(), i.eq(0).addClass("rsMainSlideImage"), t.iW && t.iH && (t.isLoaded || r._q2(t), f()), t.isLoading = !0, t.isBig) n("<img />").on("load.rs error.rs", function() { n(this).off("load.rs error.rs");
                                    o([this], !0) }).attr("src", t.image);
                                else
                                    for (t.loaded = [], t.numStartedLoad = 0, i = function() { n(this).off("load.rs error.rs");
                                            t.loaded.push(this);
                                            t.loaded.length === t.numStartedLoad && o(t.loaded, !1) }, u = 0; u < t.images.length; u++) s = n("<img />"), t.numStartedLoad++, s.on("load.rs error.rs", i).attr("src", t.images[u]) } else t.isRendered = !0, t.isLoaded = !0, t.isLoading = !1, f(!0) },
                    o = function(n, i) { var f, r;
                        n.length ? (f = n[0], i !== t.isBig ? (f = t.holder.children()) && 1 < f.length && c() : t.iW && t.iH ? u() : (t.iW = f.width, t.iH = f.height, t.iW && t.iH) ? u() : (r = new Image, r.onload = function() { r.width ? (t.iW = r.width, t.iH = r.height, u()) : setTimeout(function() { r.width && (t.iW = r.width, t.iH = r.height);
                                u() }, 1e3) }, r.src = f.src)) : u() },
                    u = function() { t.isLoaded = !0;
                        t.isLoading = !1;
                        f();
                        c();
                        s() },
                    f = function() { if (!t.isAppended && r.ev) { var n = r.st.visibleNearby,
                                u = t.id - r._o;!i && !t.appendOnLoaded && r.st.fadeinLoadedSlide && (0 === u || (n || r._r2 || r._l2) && (-1 === u || 1 === u)) && (n = { visibility: "visible", opacity: 0 }, n[r._g + "transition"] = "opacity 400ms ease-in-out", t.content.css(n), setTimeout(function() { t.content.css("opacity", 1) }, 16));
                            t.holder.find(".rsPreloader").length ? t.holder.append(t.content) : t.holder.html(t.content);
                            t.isAppended = !0;
                            t.isLoaded && (r._q2(t), s());
                            t.sizeReady || (t.sizeReady = !0, setTimeout(function() { r.ev.trigger("rsMaybeSizeReady", t) }, 100)) } },
                    s = function() {!t.loadedTriggered && r.ev && (t.isLoaded = t.loadedTriggered = !0, t.holder.trigger("rsAfterContentSet"), r.ev.trigger("rsAfterContentSet", t)) },
                    h = function() { r.st.usePreloader && t.holder.html(r._q1.clone()) },
                    c = function(n) { r.st.usePreloader && (n = t.holder.find(".rsPreloader"), n.length && n.remove()) };
                t.isLoaded ? f() : i ? !r._l && t.images && t.iW && t.iH ? e() : (t.holder.isWaiting = !0, h(), t.holder.slideId = -99) : e() }, _p2: function(n) { this._p1.append(n.holder);
                n.appendOnLoaded = !1 }, _g2: function(t, i) { var r = this,
                    u, f = "touchstart" === t.type,
                    e; if (r._s2 = f, r.ev.trigger("rsDragStart"), n(t.target).closest(".rsNoDrag", r._r1).length) return r.dragSuccess = !1, !0; if (!i && r._r2 && (r._t2 = !0, r._u2()), r.dragSuccess = !1, r._l2) f && (r._v2 = !0);
                else { if (f && (r._v2 = !1), r._w2(), f)
                        if (e = t.originalEvent.touches, e && 0 < e.length) u = e[0], 1 < e.length && (r._v2 = !0);
                        else return;
                    else t.preventDefault(), u = t, r.pointerEnabled && (u = u.originalEvent);
                    r._l2 = !0;
                    r._b.on(r._k1, function(n) { r._x2(n, i) }).on(r._l1, function(n) { r._y2(n, i) }); if (r._z2 = "", r._a3 = !1, r._b3 = u.pageX, r._c3 = u.pageY, r._d3 = r._v = (i ? r._e3 : r._h) ? u.pageX : u.pageY, r._f3 = 0, r._g3 = 0, r._h3 = i ? r._i3 : r._p, r._j3 = (new Date).getTime(), f) r._e1.on(r._m1, function(n) { r._y2(n, i) }) } }, _k3: function(n, t) { if (this._l3) { var o = this._m3,
                        i = n.pageX - this._b3,
                        f = n.pageY - this._c3,
                        r = this._h3 + i,
                        u = this._h3 + f,
                        e = t ? this._e3 : this._h,
                        r = e ? r : u,
                        u = this._z2;
                    this._a3 = !0;
                    this._b3 = n.pageX;
                    this._c3 = n.pageY; "x" === u && 0 !== i ? this._f3 = 0 < i ? 1 : -1 : "y" === u && 0 !== f && (this._g3 = 0 < f ? 1 : -1);
                    u = e ? this._b3 : this._c3;
                    i = e ? i : f;
                    t ? r > this._n3 ? r = this._h3 + i * this._n1 : r < this._o3 && (r = this._h3 + i * this._n1) : this._z || (0 >= this.currSlideId && 0 < u - this._d3 && (r = this._h3 + i * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > u - this._d3 && (r = this._h3 + i * this._n1));
                    this._h3 = r;
                    200 < o - this._j3 && (this._j3 = o, this._v = u);
                    t ? this._q3(this._h3) : this._l && this._p3(this._h3) } }, _x2: function(n, t) { var i = this,
                    r, f = "touchmove" === n.type,
                    u; if (!i._s2 || f) { if (f) { if (i._r3) return; if (u = n.originalEvent.touches, u) { if (1 < u.length) return;
                            r = u[0] } else return } else r = n, i.pointerEnabled && (r = r.originalEvent); if (i._a3 || (i._e && (t ? i._s3 : i._p1).css(i._g + i._u1, "0s"), function e() { i._l2 && (i._t3 = requestAnimationFrame(e), i._u3 && i._k3(i._u3, t)) }()), i._l3) n.preventDefault(), i._m3 = (new Date).getTime(), i._u3 = r;
                    else if (u = t ? i._e3 : i._h, r = Math.abs(r.pageX - i._b3) - Math.abs(r.pageY - i._c3) - (u ? -7 : 7), 7 < r) { if (u) n.preventDefault(), i._z2 = "x";
                        else if (f) { i._v3(n); return } i._l3 = !0 } else if (-7 > r) { if (u) { if (f) { i._v3(n); return } } else n.preventDefault(), i._z2 = "y";
                        i._l3 = !0 } } }, _v3: function(n) { this._r3 = !0;
                this._a3 = this._l2 = !1;
                this._y2(n) }, _y2: function(t, i) {
                function v(n) { return 100 > n ? 100 : 500 < n ? 500 : n }

                function c(n, t) {
                    (r._l || i) && (s = (-r._u - r._d1) * r._w, y = Math.abs(r._p - s), r._c = y / t, n && (r._c += 250), r._c = v(r._c), r._x3(s, !1)) } var r = this,
                    o, u, s, y, f, a, e, h; if (o = -1 < t.type.indexOf("touch"), !r._s2 || o)
                    if (r._s2 = !1, r.ev.trigger("rsDragRelease"), r._u3 = null, r._l2 = !1, r._r3 = !1, r._l3 = !1, r._m3 = 0, cancelAnimationFrame(r._t3), r._a3 && (i ? r._q3(r._h3) : r._l && r._p3(r._h3)), r._b.off(r._k1).off(r._l1), o && r._e1.off(r._m1), r._i1(), !r._a3 && !r._v2 && i && r._w3) f = n(t.target).closest(".rsNavItem"), f.length && r.goTo(f.index());
                    else { if (u = i ? r._e3 : r._h, r._a3 && ("y" !== r._z2 || !u) && ("x" !== r._z2 || u)) r.dragSuccess = !0;
                        else if (!i && r._t2) { if (r._t2 = !1, r.st.navigateByClick) { r._i2(r.pointerEnabled ? t.originalEvent : t);
                                r.dragSuccess = !0; return } r.dragSuccess = !0 } else { r._t2 = !1;
                            r.dragSuccess = !1; return } r._t2 = !1;
                        r._z2 = "";
                        a = r.st.minSlideOffset;
                        o = o ? t.originalEvent.changedTouches[0] : r.pointerEnabled ? t.originalEvent : t;
                        e = u ? o.pageX : o.pageY;
                        h = r._d3;
                        o = r._v; var p = r.currSlideId,
                            w = r.numSlides,
                            l = u ? r._f3 : r._g3,
                            b = r._z; if (Math.abs(e - h), o = e - o, u = (new Date).getTime() - r._j3, u = Math.abs(o) / u, 0 === l || 1 >= w) c(!0, u);
                        else { if (!b && !i)
                                if (0 >= p) { if (0 < l) { c(!0, u); return } } else if (p >= w - 1 && 0 > l) { c(!0, u); return } if (i) { if (s = r._i3, s > r._n3) s = r._n3;
                                else if (s < r._o3) s = r._o3;
                                else { if (e = u * u / .006, f = -r._i3, h = r._y3 - r._z3 + r._i3, 0 < o && e > f ? (f += r._z3 / (15 / (e / u * .003)), u = u * f / e, e = f) : 0 > o && e > h && (h += r._z3 / (15 / (e / u * .003)), u = u * h / e, e = h), f = Math.max(Math.round(u / .003), 50), s += e * (0 > o ? -1 : 1), s > r._n3) { r._a4(s, f, !0, r._n3, 200); return } if (s < r._o3) { r._a4(s, f, !0, r._o3, 200); return } } r._a4(s, f, !0) } else f = function(n) { var t = Math.floor(n / r._w); return n - t * r._w > a && t++, t }, h + a < e ? 0 > l ? c(!1, u) : (f = f(e - h), r._m2(r.currSlideId - f, v(Math.abs(r._p - (-r._u - r._d1 + f) * r._w) / u), !1, !0, !0)) : h - a > e ? 0 < l ? c(!1, u) : (f = f(h - e), r._m2(r.currSlideId + f, v(Math.abs(r._p - (-r._u - r._d1 - f) * r._w) / u), !1, !0, !0)) : c(!1, u) } } }, _p3: function(n) { n = this._p = n;
                this._e ? this._p1.css(this._x1, this._y1 + (this._h ? n + this._z1 + 0 : 0 + this._z1 + n) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, n) }, updateSliderSize: function(n) { var t, i, r, u; if (this.slider) { if (this.st.autoScaleSlider ? (r = this.st.autoScaleSliderWidth, u = this.st.autoScaleSliderHeight, this.st.autoScaleHeight ? (t = this.slider.width(), t != this.width && (this.slider.css("height", u / r * t), t = this.slider.width()), i = this.slider.height()) : (i = this.slider.height(), i != this.height && (this.slider.css("width", r / u * i), i = this.slider.height()), t = this.slider.width())) : (t = this.slider.width(), i = this.slider.height()), n || t != this.width || i != this.height) { for (this.width = t, this.height = i, this._b4 = t, this._c4 = i, this.ev.trigger("rsBeforeSizeSet"), this.ev.trigger("rsAfterSizePropSet"), this._e1.css({ width: this._b4, height: this._c4 }), this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing, this._d4 = this.st.imageScalePadding, t = 0; t < this.slides.length; t++) n = this.slides[t], n.positionSet = !1, n && n.images && n.isLoaded && (n.isRendered = !1, this._q2(n)); if (this._e4)
                            for (t = 0; t < this._e4.length; t++) n = this._e4[t], n.holder.css(this._i, (n.id + this._d1) * this._w);
                        this._n2();
                        this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w));
                        this.ev.trigger("rsOnUpdateNav") } this._j2 = this._e1.offset();
                    this._j2 = this._j2[this._i] } }, appendSlide: function(t, i) { var r = this._s(t);
                (isNaN(i) || i > this.numSlides) && (i = this.numSlides);
                this.slides.splice(i, 0, r);
                this.slidesJQ.splice(i, 0, n('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"><\/div>'));
                i <= this.currSlideId && this.currSlideId++;
                this.ev.trigger("rsOnAppendSlide", [r, i]);
                this._f4(i);
                i === this.currSlideId && this.ev.trigger("rsAfterSlideChange") }, removeSlide: function(n) { var t = this.slides[n];
                t && (t.holder && t.holder.remove(), n < this.currSlideId && this.currSlideId--, this.slides.splice(n, 1), this.slidesJQ.splice(n, 1), this.ev.trigger("rsOnRemoveSlide", [n]), this._f4(n), n === this.currSlideId && this.ev.trigger("rsAfterSlideChange")) }, _f4: function(n) { var t = this; for (n = t.numSlides, n = 0 >= t._u ? 0 : Math.floor(t._u / n), t.numSlides = t.slides.length, 0 === t.numSlides ? (t.currSlideId = t._d1 = t._u = 0, t.currSlide = t._g4 = null) : t._u = n * t.numSlides + t.currSlideId, n = 0; n < t.numSlides; n++) t.slides[n].id = n;
                t.currSlide = t.slides[t.currSlideId];
                t._r1 = t.slidesJQ[t.currSlideId];
                t.currSlideId >= t.numSlides ? t.goTo(t.numSlides - 1) : 0 > t.currSlideId && t.goTo(0);
                t._t();
                t._l && t._p1.css(t._g + t._u1, "0ms");
                t._h4 && clearTimeout(t._h4);
                t._h4 = setTimeout(function() { t._l && t._p3((-t._u - t._d1) * t._w);
                    t._n2();
                    t._l || t._r1.css({ display: "block", opacity: 1 }) }, 14);
                t.ev.trigger("rsOnUpdateNav") }, _i1: function() { this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor"))) }, _w2: function() { this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor"))) }, next: function(n) { this._m2("next", this.st.transitionSpeed, !0, !n) }, prev: function(n) { this._m2("prev", this.st.transitionSpeed, !0, !n) }, _m2: function(n, t, i, r, u) { var f = this,
                    l, h, e, a, o, c; if (f.ev.trigger("rsBeforeMove", [n, r]), e = "next" === n ? f.currSlideId + 1 : "prev" === n ? f.currSlideId - 1 : n = parseInt(n, 10), !f._z) { if (0 > e) { f._i4("left", !r); return } if (e >= f.numSlides) { f._i4("right", !r); return } } f._r2 && (f._u2(!0), i = !1);
                h = e - f.currSlideId;
                e = f._o2 = f.currSlideId;
                o = f.currSlideId + h;
                r = f._u;
                f._z ? (o = f._n2(!1, o), r += h) : r = o;
                f._o = o;
                f._g4 = f.slidesJQ[f.currSlideId];
                f._u = r;
                f.currSlideId = f._o;
                f.currSlide = f.slides[f.currSlideId];
                f._r1 = f.slidesJQ[f.currSlideId];
                o = f.st.slidesDiff;
                c = Boolean(0 < h);
                h = Math.abs(h); var s = Math.floor(e / f._y),
                    v = Math.floor((e + (c ? o : -o)) / f._y),
                    s = (c ? Math.max(s, v) : Math.min(s, v)) * f._y + (c ? f._y - 1 : 0); if (s > f.numSlides - 1 ? s = f.numSlides - 1 : 0 > s && (s = 0), e = c ? s - e : e - s, e > f._y && (e = f._y), h > e + o)
                    for (f._d1 += (h - (e + o)) * (c ? -1 : 1), t *= 1.4, e = 0; e < f.numSlides; e++) f.slides[e].positionSet = !1;
                f._c = t;
                f._n2(!0);
                u || (a = !0);
                l = (-r - f._d1) * f._w;
                a ? setTimeout(function() { f._j4 = !1;
                    f._x3(l, n, !1, i);
                    f.ev.trigger("rsOnUpdateNav") }, 0) : (f._x3(l, n, !1, i), f.ev.trigger("rsOnUpdateNav")) }, _f2: function() { this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled")))) }, _x3: function(t, i, r, u, f) {
                function c() { var n;
                    o && (n = o.data("rsTimeout")) && (o !== s && o.css({ opacity: 0, display: "none", zIndex: 0 }), clearTimeout(n), o.data("rsTimeout", ""));
                    (n = s.data("rsTimeout")) && (clearTimeout(n), s.data("rsTimeout", "")) } var e = this,
                    o, s, h = {};
                isNaN(e._c) && (e._c = 400);
                e._p = e._h3 = t;
                e.ev.trigger("rsBeforeAnimStart");
                e._e ? e._l ? (e._c = parseInt(e._c, 10), r = e._g + e._v1, h[e._g + e._u1] = e._c + "ms", h[r] = u ? n.rsCSS3Easing[e.st.easeInOut] : n.rsCSS3Easing[e.st.easeOut], e._p1.css(h), u || !e.hasTouch ? setTimeout(function() { e._p3(t) }, 5) : e._p3(t)) : (e._c = e.st.transitionSpeed, o = e._g4, s = e._r1, s.data("rsTimeout") && s.css("opacity", 0), c(), o && o.data("rsTimeout", setTimeout(function() { h[e._g + e._u1] = "0ms";
                    h.zIndex = 0;
                    h.display = "none";
                    o.data("rsTimeout", "");
                    o.css(h);
                    setTimeout(function() { o.css("opacity", 0) }, 16) }, e._c + 60)), h.display = "block", h.zIndex = e._m, h.opacity = 0, h[e._g + e._u1] = "0ms", h[e._g + e._v1] = n.rsCSS3Easing[e.st.easeInOut], s.css(h), s.data("rsTimeout", setTimeout(function() { s.css(e._g + e._u1, e._c + "ms");
                    s.data("rsTimeout", setTimeout(function() { s.css("opacity", 1);
                        s.data("rsTimeout", "") }, 20)) }, 20))) : e._l ? (h[e._h ? e._x1 : e._w1] = t + "px", e._p1.animate(h, e._c, u ? e.st.easeInOut : e.st.easeOut)) : (o = e._g4, s = e._r1, s.stop(!0, !0).css({ opacity: 0, display: "block", zIndex: e._m }), e._c = e.st.transitionSpeed, s.animate({ opacity: 1 }, e._c, e.st.easeInOut), c(), o && o.data("rsTimeout", setTimeout(function() { o.stop(!0, !0).css({ opacity: 0, display: "none", zIndex: 0 }) }, e._c + 60)));
                e._r2 = !0;
                e.loadingTimeout && clearTimeout(e.loadingTimeout);
                e.loadingTimeout = f ? setTimeout(function() { e.loadingTimeout = null;
                    f.call() }, e._c + 60) : setTimeout(function() { e.loadingTimeout = null;
                    e._k4(i) }, e._c + 60) }, _u2: function(n) { if (this._r2 = !1, clearTimeout(this.loadingTimeout), this._l)
                    if (this._e) { if (!n) { n = this._p; var t = this._h3 = this._l4();
                            this._p1.css(this._g + this._u1, "0ms");
                            n !== t && this._p3(t) } } else this._p1.stop(!0), this._p = parseInt(this._p1.css(this._h ? this._x1 : this._w1), 10);
                else 20 < this._m ? this._m = 10 : this._m++ }, _l4: function() { var n = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
                    t = 0 === n[0].indexOf("matrix3d"); return parseInt(n[this._h ? t ? 12 : 4 : t ? 13 : 5], 10) }, _m4: function(n, t) { return this._e ? this._y1 + (t ? n + this._z1 + 0 : 0 + this._z1 + n) + this._a2 : n }, _k4: function() { this._l || (this._r1.css("z-index", 0), this._m = 10);
                this._r2 = !1;
                this.staticSlideId = this.currSlideId;
                this._n2();
                this._n4 = !1;
                this.ev.trigger("rsAfterSlideChange") }, _i4: function(n, t) { var i = this,
                    r = (-i._u - i._d1) * i._w,
                    u;
                0 === i.numSlides || i._r2 || (i.st.loopRewind ? i.goTo("left" === n ? i.numSlides - 1 : 0, t) : i._l && (i._c = 200, u = function() { i._r2 = !1 }, i._x3(r + ("left" === n ? 30 : -30), "", !1, !0, function() { i._r2 = !1;
                    i._x3(r, "", !1, !0, u) }))) }, _q2: function(t) { var o, s, l, f, c, h; if (!t.isRendered) { var e = t.content,
                        i = "rsMainSlideImage",
                        a, v = n.isFunction(this.st.imageAlignCenter) ? this.st.imageAlignCenter(t) : this.st.imageAlignCenter,
                        r = n.isFunction(this.st.imageScaleMode) ? this.st.imageScaleMode(t) : this.st.imageScaleMode,
                        u;
                    t.videoURL && (i = "rsVideoContainer", "fill" !== r ? a = !0 : (u = e, u.hasClass(i) || (u = u.find("." + i)), u.css({ width: "100%", height: "100%" }), i = "rsMainSlideImage"));
                    e.hasClass(i) || (e = e.find("." + i));
                    e && (o = t.iW, s = t.iH, t.isRendered = !0, ("none" !== r || v) && (i = "fill" !== r ? this._d4 : 0, u = this._b4 - 2 * i, l = this._c4 - 2 * i, h = {}, "fit-if-smaller" === r && (o > u || s > l) && (r = "fit"), ("fill" === r || "fit" === r) && (f = u / o, c = l / s, f = "fill" == r ? f > c ? f : c : "fit" == r ? f < c ? f : c : 1, o = Math.ceil(o * f, 10), s = Math.ceil(s * f, 10)), "none" !== r && (h.width = o, h.height = s, a && e.find(".rsImg").css({ width: "100%", height: "100%" })), v && (h.marginLeft = Math.floor((u - o) / 2) + i, h.marginTop = Math.floor((l - s) / 2) + i), e.css(h))) } } };
        n.rsProto = t.prototype;
        n.fn.royalSlider = function(i) { var r = arguments; return this.each(function() { var u = n(this); if ("object" != typeof i && i) { if ((u = u.data("royalSlider")) && u[i]) return u[i].apply(u, Array.prototype.slice.call(r, 1)) } else u.data("royalSlider") || u.data("royalSlider", new t(u, i)) }) };
        n.fn.royalSlider.defaults = { slidesSpacing: 8, startSlideId: 0, loop: !1, loopRewind: !1, numImagesToPreload: 4, fadeinLoadedSlide: !0, slidesOrientation: "horizontal", transitionType: "move", transitionSpeed: 600, controlNavigation: "bullets", controlsInside: !0, arrowsNav: !0, arrowsNavAutoHide: !0, navigateByClick: !0, randomizeSlides: !1, sliderDrag: !0, sliderTouch: !0, keyboardNavEnabled: !1, fadeInAfterLoaded: !0, allowCSS3: !0, allowCSS3OnWebkit: !0, addActiveClass: !1, autoHeight: !1, easeOut: "easeOutSine", easeInOut: "easeInOutSine", minSlideOffset: 10, imageScaleMode: "fit-if-smaller", imageAlignCenter: !0, imageScalePadding: 4, usePreloader: !0, autoScaleSlider: !1, autoScaleSliderWidth: 800, autoScaleSliderHeight: 400, autoScaleHeight: !0, arrowsNavHideOnTouch: !1, globalCaption: !1, slidesDiff: 2 };
        n.rsCSS3Easing = { easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)", easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)" };
        n.extend(jQuery.easing, { easeInOutSine: function(n, t, i, r, u) { return -r / 2 * (Math.cos(Math.PI * t / u) - 1) + i }, easeOutSine: function(n, t, i, r, u) { return r * Math.sin(t / u * (Math.PI / 2)) + i }, easeOutCubic: function(n, t, i, r, u) { return r * ((t = t / u - 1) * t * t + 1) + i } }) }(jQuery, window),
    function(n) { n.rsProto._o4 = function() { var t, n = this; if (n.st.addActiveClass) n.ev.on("rsOnUpdateNav", function() { t && clearTimeout(t);
                t = setTimeout(function() { n._g4 && n._g4.removeClass("rsActiveSlide");
                    n._r1 && n._r1.addClass("rsActiveSlide");
                    t = null }, 50) }) };
        n.rsModules.activeClass = n.rsProto._o4 }(jQuery),
    function(n) { n.extend(n.rsProto, { _p4: function() {
                function r() { var n = t.currSlide,
                        r; if (t.currSlide && t.currSlide.isLoaded && t._t4 !== n) { if (0 < t._s4.length) { for (i = 0; i < t._s4.length; i++) clearTimeout(t._s4[i]);
                            t._s4 = [] } if (0 < t._r4.length) { for (i = 0; i < t._r4.length; i++)(r = t._r4[i]) && (t._e ? (r.block.css(t._g + t._u1, "0s"), r.block.css(r.css)) : r.block.stop(!0).css(r.css), t._t4 = null, n.animBlocksDisplayed = !1);
                            t._r4 = [] } n.animBlocks && (n.animBlocksDisplayed = !0, t._t4 = n, t._u4(n.animBlocks)) } } var t = this,
                    i;
                t._q4 = { fadeEffect: !0, moveEffect: "top", moveOffset: 20, speed: 400, easing: "easeOutSine", delay: 200 };
                t.st.block = n.extend({}, t._q4, t.st.block);
                t._r4 = [];
                t._s4 = [];
                t.ev.on("rsAfterInit", function() { r() });
                t.ev.on("rsBeforeParseNode", function(t, i, r) { i = n(i);
                    r.animBlocks = i.find(".rsABlock").css("display", "none");
                    r.animBlocks.length || (r.animBlocks = i.hasClass("rsABlock") ? i.css("display", "none") : !1) });
                t.ev.on("rsAfterContentSet", function(n, i) { i.id === t.slides[t.currSlideId].id && setTimeout(function() { r() }, t.st.fadeinLoadedSlide ? 300 : 0) });
                t.ev.on("rsAfterSlideChange", function() { r() }) }, _v4: function(n, t) { setTimeout(function() { n.css(t) }, 6) }, _u4: function(t) { var i = this,
                    f, o, s, u, e, r, h;
                i._s4 = [];
                t.each(function(t) { var c, a, l;
                    f = n(this);
                    o = {};
                    s = {};
                    u = null;
                    c = f.attr("data-move-offset");
                    c = c ? parseInt(c, 10) : i.st.block.moveOffset;
                    0 < c && ((r = f.data("move-effect")) ? (r = r.toLowerCase(), "none" === r ? r = !1 : "left" !== r && "top" !== r && "bottom" !== r && "right" !== r && (r = i.st.block.moveEffect, "none" === r && (r = !1))) : r = i.st.block.moveEffect, r && "none" !== r) && (a = "right" === r || "left" === r ? !0 : !1, h = !1, i._e ? (l = 0, e = i._x1) : (a ? isNaN(parseInt(f.css("right"), 10)) ? e = "left" : (e = "right", h = !0) : isNaN(parseInt(f.css("bottom"), 10)) ? e = "top" : (e = "bottom", h = !0), e = "margin-" + e, h && (c = -c), i._e ? l = parseInt(f.css(e), 10) : (l = f.data("rs-start-move-prop"), void 0 === l && (l = parseInt(f.css(e), 10), isNaN(l) && (l = 0), f.data("rs-start-move-prop", l)))), s[e] = i._m4("top" === r || "left" === r ? l - c : l + c, a), o[e] = i._m4(l, a));
                    c = f.attr("data-fade-effect");
                    c ? ("none" === c.toLowerCase() || "false" === c.toLowerCase()) && (c = !1) : c = i.st.block.fadeEffect;
                    c && (s.opacity = 0, o.opacity = 1);
                    (c || r) && (u = {}, u.hasFade = Boolean(c), Boolean(r) && (u.moveProp = e, u.hasMove = !0), u.speed = f.data("speed"), isNaN(u.speed) && (u.speed = i.st.block.speed), u.easing = f.data("easing"), u.easing || (u.easing = i.st.block.easing), u.css3Easing = n.rsCSS3Easing[u.easing], u.delay = f.data("delay"), isNaN(u.delay) && (u.delay = i.st.block.delay * t));
                    c = {};
                    i._e && (c[i._g + i._u1] = "0ms");
                    c.moveProp = o.moveProp;
                    c.opacity = o.opacity;
                    c.display = "none";
                    i._r4.push({ block: f, css: c });
                    i._v4(f, s);
                    i._s4.push(setTimeout(function(n, t, r, u) { return function() { var f, e;
                            n.css("display", "block");
                            r && (f = {}, i._e ? (e = "", r.hasMove && (e += r.moveProp), r.hasFade && (r.hasMove && (e += ", "), e += "opacity"), f[i._g + i._t1] = e, f[i._g + i._u1] = r.speed + "ms", f[i._g + i._v1] = r.css3Easing, n.css(f), setTimeout(function() { n.css(t) }, 24)) : setTimeout(function() { n.animate(t, r.speed, r.easing) }, 16));
                            delete i._s4[u] } }(f, o, u, t), 6 >= u.delay ? 12 : u.delay)) }) } });
        n.rsModules.animatedBlocks = n.rsProto._p4 }(jQuery),
    function(n) { n.extend(n.rsProto, { _w4: function() { var n = this,
                    f, t, r, u, i; if (n.st.autoHeight) { u = !0;
                    i = function(i) { r = n.slides[n.currSlideId];
                        (f = r.holder) && (t = f.height()) && void 0 !== t && t > (n.st.minAutoHeight || 30) && (n._c4 = t, n._e || !i ? n._e1.css("height", t) : n._e1.stop(!0, !0).animate({ height: t }, n.st.transitionSpeed), n.ev.trigger("rsAutoHeightChange", t), u && (n._e && setTimeout(function() { n._e1.css(n._g + "transition", "height " + n.st.transitionSpeed + "ms ease-in-out") }, 16), u = !1)) };
                    n.ev.on("rsMaybeSizeReady.rsAutoHeight", function(n, t) { r === t && i() });
                    n.ev.on("rsAfterContentSet.rsAutoHeight", function(n, t) { r === t && i() });
                    n.slider.addClass("rsAutoHeight");
                    n.ev.one("rsAfterInit", function() { setTimeout(function() { i(!1);
                            setTimeout(function() { n.slider.append('<div style="clear:both; float: none;"><\/div>') }, 16) }, 16) });
                    n.ev.on("rsBeforeAnimStart", function() { i(!0) });
                    n.ev.on("rsBeforeSizeSet", function() { setTimeout(function() { i(!1) }, 16) }) } } });
        n.rsModules.autoHeight = n.rsProto._w4 }(jQuery),
    function(n) { n.extend(n.rsProto, { _x4: function() { var t = this,
                    i;
                t._y4 = { enabled: !1, stopAtAction: !0, pauseOnHover: !0, delay: 2e3 };!t.st.autoPlay && t.st.autoplay && (t.st.autoPlay = t.st.autoplay);
                t.st.autoPlay = n.extend({}, t._y4, t.st.autoPlay);
                t.st.autoPlay.enabled && (t.ev.on("rsBeforeParseNode", function(t, r, u) { r = n(r);
                    (i = r.attr("data-rsDelay")) && (u.customDelay = parseInt(i, 10)) }), t.ev.one("rsAfterInit", function() { t._z4() }), t.ev.on("rsBeforeDestroy", function() { t.stopAutoPlay();
                    t.slider.off("mouseenter mouseleave");
                    n(window).off("blur" + t.ns + " focus" + t.ns) })) }, _z4: function() { var t = this;
                t.startAutoPlay();
                t.ev.on("rsAfterContentSet", function(n, i) { t._l2 || t._r2 || !t._a5 || i !== t.currSlide || t._b5() });
                t.ev.on("rsDragRelease", function() { t._a5 && t._c5 && (t._c5 = !1, t._b5()) });
                t.ev.on("rsAfterSlideChange", function() { t._a5 && t._c5 && (t._c5 = !1, t.currSlide.isLoaded && t._b5()) });
                t.ev.on("rsDragStart", function() { t._a5 && (t.st.autoPlay.stopAtAction ? t.stopAutoPlay() : (t._c5 = !0, t._d5())) });
                t.ev.on("rsBeforeMove", function(n, i, r) { t._a5 && (r && t.st.autoPlay.stopAtAction ? t.stopAutoPlay() : (t._c5 = !0, t._d5())) });
                t._e5 = !1;
                t.ev.on("rsVideoStop", function() { t._a5 && (t._e5 = !1, t._b5()) });
                t.ev.on("rsVideoPlay", function() { t._a5 && (t._c5 = !1, t._d5(), t._e5 = !0) });
                n(window).on("blur" + t.ns, function() { t._a5 && (t._c5 = !0, t._d5()) }).on("focus" + t.ns, function() { t._a5 && t._c5 && (t._c5 = !1, t._b5()) });
                t.st.autoPlay.pauseOnHover && (t._f5 = !1, t.slider.hover(function() { t._a5 && (t._c5 = !1, t._d5(), t._f5 = !0) }, function() { t._a5 && (t._f5 = !1, t._b5()) })) }, toggleAutoPlay: function() { this._a5 ? this.stopAutoPlay() : this.startAutoPlay() }, startAutoPlay: function() { this._a5 = !0;
                this.currSlide.isLoaded && this._b5() }, stopAutoPlay: function() { this._e5 = this._f5 = this._c5 = this._a5 = !1;
                this._d5() }, _b5: function() { var n = this;
                n._f5 || n._e5 || (n._g5 = !0, n._h5 && clearTimeout(n._h5), n._h5 = setTimeout(function() { var t;
                    n._z || n.st.loopRewind || (t = !0, n.st.loopRewind = !0);
                    n.next(!0);
                    t && (n.st.loopRewind = !1) }, n.currSlide.customDelay ? n.currSlide.customDelay : n.st.autoPlay.delay)) }, _d5: function() { this._f5 || this._e5 || (this._g5 = !1, this._h5 && (clearTimeout(this._h5), this._h5 = null)) } });
        n.rsModules.autoplay = n.rsProto._x4 }(jQuery),
    function(n) { n.extend(n.rsProto, { _i5: function() { var t = this; "bullets" === t.st.controlNavigation && (t.ev.one("rsAfterPropsSetup", function() { t._j5 = !0;
                    t.slider.addClass("rsWithBullets"); for (var i = '<div class="rsNav rsBullets">', r = 0; r < t.numSlides; r++) i += '<div class="rsNavItem rsBullet"><span><\/span><\/div>';
                    t._k5 = i = n(i + "<\/div>");
                    t._l5 = i.appendTo(t.slider).children();
                    t._k5.on("click.rs", ".rsNavItem", function() { t._m5 || t.goTo(n(this).index()) }) }), t.ev.on("rsOnAppendSlide", function(n, i, r) { r >= t.numSlides ? t._k5.append('<div class="rsNavItem rsBullet"><span><\/span><\/div>') : t._l5.eq(r).before('<div class="rsNavItem rsBullet"><span><\/span><\/div>');
                    t._l5 = t._k5.children() }), t.ev.on("rsOnRemoveSlide", function(n, i) { var r = t._l5.eq(i);
                    r && r.length && (r.remove(), t._l5 = t._k5.children()) }), t.ev.on("rsOnUpdateNav", function() { var n = t.currSlideId;
                    t._n5 && t._n5.removeClass("rsNavSelected");
                    n = t._l5.eq(n);
                    n.addClass("rsNavSelected");
                    t._n5 = n })) } });
        n.rsModules.bullets = n.rsProto._i5 }(jQuery),
    function(n) { n.extend(n.rsProto, { _o5: function() { var t = this,
                    u, i, r; if (t._p5 = { enabled: !1, change: !1, prefix: "" }, t.st.deeplinking = n.extend({}, t._p5, t.st.deeplinking), t.st.deeplinking.enabled) { var f = t.st.deeplinking.change,
                        e = t.st.deeplinking.prefix,
                        o = "#" + e,
                        s = function() { var n = window.location.hash; return n && 0 < n.indexOf(e) && (n = parseInt(n.substring(o.length), 10), 0 <= n) ? n - 1 : -1 },
                        h = s(); - 1 !== h && (t.st.startSlideId = h);
                    f && (n(window).on("hashchange" + t.ns, function(n) { u || (n = s(), 0 > n || (n > t.numSlides - 1 && (n = t.numSlides - 1), t.goTo(n))) }), t.ev.on("rsBeforeAnimStart", function() { i && clearTimeout(i);
                        r && clearTimeout(r) }), t.ev.on("rsAfterSlideChange", function() { i && clearTimeout(i);
                        r && clearTimeout(r);
                        r = setTimeout(function() { u = !0;
                            window.location.replace(("" + window.location).split("#")[0] + o + (t.currSlideId + 1));
                            i = setTimeout(function() { u = !1;
                                i = null }, 60) }, 400) }));
                    t.ev.on("rsBeforeDestroy", function() { i = r = null;
                        f && n(window).off("hashchange" + t.ns) }) } } });
        n.rsModules.deeplinking = n.rsProto._o5 }(jQuery),
    function(n, t, i) {
        function r(n) { return n = n || location.href, "#" + n.replace(/^[^#]*#?(.*)$/, "$1") } var u = document,
            f, o = n.event.special,
            s = u.documentMode,
            e = "onhashchange" in t && (s === i || 7 < s);
        n.fn.hashchange = function(n) { return n ? this.bind("hashchange", n) : this.trigger("hashchange") };
        n.fn.hashchange.delay = 50;
        o.hashchange = n.extend(o.hashchange, { setup: function() { if (e) return !1;
                n(f.start) }, teardown: function() { if (e) return !1;
                n(f.stop) } });
        f = function() {
            function h() { var u = r(),
                    i = a(s);
                u !== s ? (l(s = u, i), n(t).trigger("hashchange")) : i !== s && (location.href = location.href.replace(/#.*/, "") + i);
                o = setTimeout(h, n.fn.hashchange.delay) } var f = {},
                o, s = r(),
                c = function(n) { return n },
                l = c,
                a = c; return f.start = function() { o || h() }, f.stop = function() { o && clearTimeout(o);
                o = i }, !t.attachEvent || t.addEventListener || e || function() { var t, i;
                f.start = function() { t || (i = (i = n.fn.hashchange.src) && i + r(), t = n('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() { i || l(r());
                        h() }).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, u.onpropertychange = function() { try { "title" === event.propertyName && (t.document.title = u.title) } catch (n) {} }) };
                f.stop = c;
                a = function() { return r(t.location.href) };
                l = function(i, r) { var f = t.document,
                        e = n.fn.hashchange.domain;
                    i !== r && (f.title = u.title, f.open(), e && f.write('<script>document.domain="' + e + '"<\/script>'), f.close(), t.location.hash = i) } }(), f }() }(jQuery, this),
    function(n) { n.extend(n.rsProto, { _q5: function() { var t = this; if (t._r5 = { enabled: !1, keyboardNav: !0, buttonFS: !0, nativeFS: !1, doubleTap: !0 }, t.st.fullscreen = n.extend({}, t._r5, t.st.fullscreen), t.st.fullscreen.enabled) t.ev.one("rsBeforeSizeSet", function() { t._s5() }) }, _s5: function() { var t = this,
                    i, u, r, f; if (t._t5 = !t.st.keyboardNavEnabled && t.st.fullscreen.keyboardNav, t.st.fullscreen.nativeFS) { if (i = { supportsFullScreen: !1, isFullScreen: function() { return !1 }, requestFullScreen: function() {}, cancelFullScreen: function() {}, fullScreenEventName: "", prefix: "" }, u = ["webkit", "moz", "o", "ms", "khtml"], "undefined" != typeof document.cancelFullScreen) i.supportsFullScreen = !0;
                    else
                        for (r = 0, f = u.length; r < f; r++)
                            if (i.prefix = u[r], "undefined" != typeof document[i.prefix + "CancelFullScreen"]) { i.supportsFullScreen = !0; break } i.supportsFullScreen ? (t.nativeFS = !0, i.fullScreenEventName = i.prefix + "fullscreenchange" + t.ns, i.isFullScreen = function() { switch (this.prefix) {
                            case "":
                                return document.fullScreen;
                            case "webkit":
                                return document.webkitIsFullScreen;
                            default:
                                return document[this.prefix + "FullScreen"] } }, i.requestFullScreen = function(n) { return "" === this.prefix ? n.requestFullScreen() : n[this.prefix + "RequestFullScreen"]() }, i.cancelFullScreen = function() { return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]() }, t._u5 = i) : t._u5 = !1 } t.st.fullscreen.buttonFS && (t._v5 = n('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"><\/div><\/div>').appendTo(t._o1).on("click.rs", function() { t.isFullscreen ? t.exitFullscreen() : t.enterFullscreen() })) }, enterFullscreen: function(t) { var i = this,
                    r; if (i._u5)
                    if (t) i._u5.requestFullScreen(n("html")[0]);
                    else { i._b.on(i._u5.fullScreenEventName, function() { i._u5.isFullScreen() ? i.enterFullscreen(!0) : i.exitFullscreen(!0) });
                        i._u5.requestFullScreen(n("html")[0]); return } if (!i._w5) { i._w5 = !0;
                    i._b.on("keyup" + i.ns + "fullscreen", function(n) { 27 === n.keyCode && i.exitFullscreen() }); for (i._t5 && i._b2(), t = n(window), i._x5 = t.scrollTop(), i._y5 = t.scrollLeft(), i._z5 = n("html").attr("style"), i._a6 = n("body").attr("style"), i._b6 = i.slider.attr("style"), n("body, html").css({ overflow: "hidden", height: "100%", width: "100%", margin: "0", padding: "0" }), i.slider.addClass("rsFullscreen"), r = 0; r < i.numSlides; r++) t = i.slides[r], t.isRendered = !1, t.bigImage && (t.isBig = !0, t.isMedLoaded = t.isLoaded, t.isMedLoading = t.isLoading, t.medImage = t.image, t.medIW = t.iW, t.medIH = t.iH, t.slideId = -99, t.bigImage !== t.medImage && (t.sizeType = "big"), t.isLoaded = t.isBigLoaded, t.isLoading = !1, t.image = t.bigImage, t.images[0] = t.bigImage, t.iW = t.bigIW, t.iH = t.bigIH, t.isAppended = t.contentAdded = !1, i._c6(t));
                    i.isFullscreen = !0;
                    i._w5 = !1;
                    i.updateSliderSize();
                    i.ev.trigger("rsEnterFullscreen") } }, exitFullscreen: function(t) { var i = this,
                    r; if (i._u5) { if (!t) { i._u5.cancelFullScreen(n("html")[0]); return } i._b.off(i._u5.fullScreenEventName) } if (!i._w5) { for (i._w5 = !0, i._b.off("keyup" + i.ns + "fullscreen"), i._t5 && i._b.off("keydown" + i.ns), n("html").attr("style", i._z5 || ""), n("body").attr("style", i._a6 || ""), r = 0; r < i.numSlides; r++) t = i.slides[r], t.isRendered = !1, t.bigImage && (t.isBig = !1, t.slideId = -99, t.isBigLoaded = t.isLoaded, t.isBigLoading = t.isLoading, t.bigImage = t.image, t.bigIW = t.iW, t.bigIH = t.iH, t.isLoaded = t.isMedLoaded, t.isLoading = !1, t.image = t.medImage, t.images[0] = t.medImage, t.iW = t.medIW, t.iH = t.medIH, t.isAppended = t.contentAdded = !1, i._c6(t, !0), t.bigImage !== t.medImage && (t.sizeType = "med"));
                    i.isFullscreen = !1;
                    t = n(window);
                    t.scrollTop(i._x5);
                    t.scrollLeft(i._y5);
                    i._w5 = !1;
                    i.slider.removeClass("rsFullscreen");
                    i.updateSliderSize();
                    setTimeout(function() { i.updateSliderSize() }, 1);
                    i.ev.trigger("rsExitFullscreen") } }, _c6: function(t) { var i = t.isLoaded || t.isLoading ? '<img class="rsImg rsMainSlideImage" src="' + t.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + t.image + '"><\/a>';
                t.content.hasClass("rsImg") ? t.content = n(i) : t.content.find(".rsImg").eq(0).replaceWith(i);
                t.isLoaded || t.isLoading || !t.holder || t.holder.html(t.content) } });
        n.rsModules.fullscreen = n.rsProto._q5 }(jQuery),
    function(n) { n.extend(n.rsProto, { _d6: function() { var t = this;
                t.st.globalCaption && (t.ev.on("rsAfterInit", function() { t.globalCaption = n('<div class="rsGCaption"><\/div>').appendTo(t.st.globalCaptionInside ? t._e1 : t.slider);
                    t.globalCaption.html(t.currSlide.caption || "") }), t.ev.on("rsBeforeAnimStart", function() { t.globalCaption.html(t.currSlide.caption) })) } });
        n.rsModules.globalCaption = n.rsProto._d6 }(jQuery),
    function(n) { n.extend(n.rsProto, { _e6: function() { var n = this; if (n.st.navAutoHide && !n.hasTouch) n.ev.one("rsAfterInit", function() { if (n._k5) { n._k5.addClass("rsHidden"); var t = n.slider;
                        t.one("mousemove.controlnav", function() { n._k5.removeClass("rsHidden") });
                        t.hover(function() { n._k5.removeClass("rsHidden") }, function() { n._k5.addClass("rsHidden") }) } }) } });
        n.rsModules.autoHideNav = n.rsProto._e6 }(jQuery),
    function(n) { n.extend(n.rsProto, { _f6: function() { var t = this; "tabs" === t.st.controlNavigation && (t.ev.on("rsBeforeParseNode", function(t, i, r) { i = n(i);
                    r.thumbnail = i.find(".rsTmb").remove();
                    r.thumbnail.length ? r.thumbnail = n(document.createElement("div")).append(r.thumbnail).html() : (r.thumbnail = i.attr("data-rsTmb"), r.thumbnail || (r.thumbnail = i.find(".rsImg").attr("data-rsTmb")), r.thumbnail = r.thumbnail ? '<img src="' + r.thumbnail + '"/>' : "") }), t.ev.one("rsAfterPropsSetup", function() { t._g6() }), t.ev.on("rsOnAppendSlide", function(n, i, r) { r >= t.numSlides ? t._k5.append('<div class="rsNavItem rsTab">' + i.thumbnail + "<\/div>") : t._l5.eq(r).before('<div class="rsNavItem rsTab">' + item.thumbnail + "<\/div>");
                    t._l5 = t._k5.children() }), t.ev.on("rsOnRemoveSlide", function(n, i) { var r = t._l5.eq(i);
                    r && (r.remove(), t._l5 = t._k5.children()) }), t.ev.on("rsOnUpdateNav", function() { var n = t.currSlideId;
                    t._n5 && t._n5.removeClass("rsNavSelected");
                    n = t._l5.eq(n);
                    n.addClass("rsNavSelected");
                    t._n5 = n })) }, _g6: function() { var t = this,
                    i, r; for (t._j5 = !0, i = '<div class="rsNav rsTabs">', r = 0; r < t.numSlides; r++) i += '<div class="rsNavItem rsTab">' + t.slides[r].thumbnail + "<\/div>";
                i = n(i + "<\/div>");
                t._k5 = i;
                t._l5 = i.children(".rsNavItem");
                t.slider.append(i);
                t._k5.click(function(i) { i = n(i.target).closest(".rsNavItem");
                    i.length && t.goTo(i.index()) }) } });
        n.rsModules.tabs = n.rsProto._f6 }(jQuery),
    function(n) { n.extend(n.rsProto, { _h6: function() { var t = this; "thumbnails" === t.st.controlNavigation && (t._i6 = { drag: !0, touch: !0, orientation: "horizontal", navigation: !0, arrows: !0, arrowLeft: null, arrowRight: null, spacing: 4, arrowsAutoHide: !1, appendSpan: !1, transitionSpeed: 600, autoCenter: !0, fitInViewport: !0, firstMargin: !0, paddingTop: 0, paddingBottom: 0 }, t.st.thumbs = n.extend({}, t._i6, t.st.thumbs), t._j6 = !0, !1 === t.st.thumbs.firstMargin ? t.st.thumbs.firstMargin = 0 : !0 === t.st.thumbs.firstMargin && (t.st.thumbs.firstMargin = t.st.thumbs.spacing), t.ev.on("rsBeforeParseNode", function(t, i, r) { i = n(i);
                    r.thumbnail = i.find(".rsTmb").remove();
                    r.thumbnail.length ? r.thumbnail = n(document.createElement("div")).append(r.thumbnail).html() : (r.thumbnail = i.attr("data-rsTmb"), r.thumbnail || (r.thumbnail = i.find(".rsImg").attr("data-rsTmb")), r.thumbnail = r.thumbnail ? '<img src="' + r.thumbnail + '"/>' : "") }), t.ev.one("rsAfterPropsSetup", function() { t._k6() }), t._n5 = null, t.ev.on("rsOnUpdateNav", function() { var i = n(t._l5[t.currSlideId]);
                    i !== t._n5 && (t._n5 && (t._n5.removeClass("rsNavSelected"), t._n5 = null), t._l6 && t._m6(t.currSlideId), t._n5 = i.addClass("rsNavSelected")) }), t.ev.on("rsOnAppendSlide", function(n, i, r) { n = "<div" + t._n6 + ' class="rsNavItem rsThumb">' + t._o6 + i.thumbnail + "<\/div>";
                    t._e && t._s3.css(t._g + "transition-duration", "0ms");
                    r >= t.numSlides ? t._s3.append(n) : t._l5.eq(r).before(n);
                    t._l5 = t._s3.children();
                    t.updateThumbsSize(!0) }), t.ev.on("rsOnRemoveSlide", function(n, i) { var r = t._l5.eq(i);
                    r && (t._e && t._s3.css(t._g + "transition-duration", "0ms"), r.remove(), t._l5 = t._s3.children(), t.updateThumbsSize(!0)) })) }, _k6: function() { var t = this,
                    u = "rsThumbs",
                    i = t.st.thumbs,
                    r = "",
                    f, e, s = i.spacing,
                    o; for (t._j5 = !0, t._e3 = "vertical" === i.orientation ? !1 : !0, t._n6 = f = s ? ' style="margin-' + (t._e3 ? "right" : "bottom") + ":" + s + 'px;"' : "", t._i3 = 0, t._p6 = !1, t._m5 = !1, t._l6 = !1, t._q6 = i.arrows && i.navigation, e = t._e3 ? "Hor" : "Ver", t.slider.addClass("rsWithThumbs rsWithThumbs" + e), r += '<div class="rsNav rsThumbs rsThumbs' + e + '"><div class="' + u + 'Container">', t._o6 = i.appendSpan ? '<span class="thumbIco"><\/span>' : "", o = 0; o < t.numSlides; o++) e = t.slides[o], r += "<div" + f + ' class="rsNavItem rsThumb">' + e.thumbnail + t._o6 + "<\/div>";
                r = n(r + "<\/div><\/div>");
                f = {};
                i.paddingTop && (f[t._e3 ? "paddingTop" : "paddingLeft"] = i.paddingTop);
                i.paddingBottom && (f[t._e3 ? "paddingBottom" : "paddingRight"] = i.paddingBottom);
                r.css(f);
                t._s3 = n(r).find("." + u + "Container");
                t._q6 && (u += "Arrow", i.arrowLeft ? t._r6 = i.arrowLeft : (t._r6 = n('<div class="' + u + " " + u + 'Left"><div class="' + u + 'Icn"><\/div><\/div>'), r.append(t._r6)), i.arrowRight ? t._s6 = i.arrowRight : (t._s6 = n('<div class="' + u + " " + u + 'Right"><div class="' + u + 'Icn"><\/div><\/div>'), r.append(t._s6)), t._r6.click(function() { var n = (Math.floor(t._i3 / t._t6) + t._u6) * t._t6 + t.st.thumbs.firstMargin;
                    t._a4(n > t._n3 ? t._n3 : n) }), t._s6.click(function() { var n = (Math.floor(t._i3 / t._t6) - t._u6) * t._t6 + t.st.thumbs.firstMargin;
                    t._a4(n < t._o3 ? t._o3 : n) }), i.arrowsAutoHide && !t.hasTouch && (t._r6.css("opacity", 0), t._s6.css("opacity", 0), r.one("mousemove.rsarrowshover", function() { t._l6 && (t._r6.css("opacity", 1), t._s6.css("opacity", 1)) }), r.hover(function() { t._l6 && (t._r6.css("opacity", 1), t._s6.css("opacity", 1)) }, function() { t._l6 && (t._r6.css("opacity", 0), t._s6.css("opacity", 0)) })));
                t._k5 = r;
                t._l5 = t._s3.children();
                t.msEnabled && t.st.thumbs.navigation && t._s3.css("-ms-touch-action", t._e3 ? "pan-y" : "pan-x");
                t.slider.append(r);
                t._w3 = !0;
                t._v6 = s;
                i.navigation && t._e && t._s3.css(t._g + "transition-property", t._g + "transform");
                t._k5.on("click.rs", ".rsNavItem", function() { t._m5 || t.goTo(n(this).index()) });
                t.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function() { t._w6 = t._e3 ? t._c4 : t._b4;
                    t.updateThumbsSize(!0) });
                t.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs", function(n, i) { t.updateThumbsSize(!0, i) }) }, updateThumbsSize: function(n, t) { var i = this,
                    r = i._l5.first(),
                    u = {},
                    f = i._l5.length;
                i._t6 = (i._e3 ? r.outerWidth() : r.outerHeight()) + i._v6;
                i._y3 = f * i._t6 - i._v6;
                u[i._e3 ? "width" : "height"] = i._y3 + i._v6;
                i._z3 = i._e3 ? i._k5.width() : void 0 !== t ? t : i._k5.height();
                i._w3 && (i.isFullscreen || i.st.thumbs.fitInViewport) && (i._e3 ? i._c4 = i._w6 - i._k5.outerHeight() : i._b4 = i._w6 - i._k5.outerWidth());
                i._z3 && (i._o3 = -(i._y3 - i._z3) - i.st.thumbs.firstMargin, i._n3 = i.st.thumbs.firstMargin, i._u6 = Math.floor(i._z3 / i._t6), i._y3 < i._z3 ? (i.st.thumbs.autoCenter ? i._q3((i._z3 - i._y3) / 2) : i._q3(i._n3), i.st.thumbs.arrows && i._r6 && (i._r6.addClass("rsThumbsArrowDisabled"), i._s6.addClass("rsThumbsArrowDisabled")), i._l6 = !1, i._m5 = !1, i._k5.off(i._j1)) : i.st.thumbs.navigation && !i._l6 && (i._l6 = !0, !i.hasTouch && i.st.thumbs.drag || i.hasTouch && i.st.thumbs.touch) && (i._m5 = !0, i._k5.on(i._j1, function(n) { i._g2(n, !0) })), i._s3.css(u), n && t && i._m6(i.currSlideId, !0)) }, setThumbsOrientation: function(n, t) { this._w3 && (this.st.thumbs.orientation = n, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), t || this.updateSliderSize(!0)) }, _q3: function(n) { this._i3 = n;
                this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? n + this._z1 + 0 : 0 + this._z1 + n) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, n) }, _a4: function(t, i, r, u, f) { var e = this,
                    o;
                e._l6 && (i || (i = e.st.thumbs.transitionSpeed), e._i3 = t, e._x6 && clearTimeout(e._x6), e._p6 && (e._e || e._s3.stop(), r = !0), o = {}, e._p6 = !0, e._e ? (o[e._g + "transition-duration"] = i + "ms", o[e._g + "transition-timing-function"] = r ? n.rsCSS3Easing[e.st.easeOut] : n.rsCSS3Easing[e.st.easeInOut], e._s3.css(o), e._q3(t)) : (o[e._e3 ? e._x1 : e._w1] = t + "px", e._s3.animate(o, i, r ? "easeOutCubic" : e.st.easeInOut)), u && (e._i3 = u), e._y6(), e._x6 = setTimeout(function() { e._p6 = !1;
                    f && (e._a4(u, f, !0), f = null) }, i)) }, _y6: function() { this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled")) }, _m6: function(n, t) { var r = 0,
                    i, f = n * this._t6 + 2 * this._t6 - this._v6 + this._n3,
                    u = Math.floor(this._i3 / this._t6);
                this._l6 && (this._j6 && (t = !0, this._j6 = !1), f + this._i3 > this._z3 ? (n === this.numSlides - 1 && (r = 1), u = -n + this._u6 - 2 + r, i = u * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== n ? (n - 1) * this._t6 <= -this._i3 + this._n3 && n - 1 <= this.numSlides - this._u6 && (i = (-n + 1) * this._t6 + this._n3) : i = this._n3, i !== this._i3 && (r = void 0 === i ? this._i3 : i, r > this._n3 ? this._q3(this._n3) : r < this._o3 ? this._q3(this._o3) : void 0 !== i && (t ? this._q3(i) : this._a4(i))), this._y6()) } });
        n.rsModules.thumbnails = n.rsProto._h6 }(jQuery),
    function(n) { n.extend(n.rsProto, { _z6: function() { var t = this,
                    i;
                t._a7 = { autoHideArrows: !0, autoHideControlNav: !1, autoHideBlocks: !1, autoHideCaption: !1, disableCSS3inFF: !0, youTubeCode: '<iframe src="https://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no" allowFullScreen><\/iframe>', vimeoCode: '<iframe src="https://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen><\/iframe>' };
                t.st.video = n.extend({}, t._a7, t.st.video);
                t.ev.on("rsBeforeSizeSet", function() { t._b7 && setTimeout(function() { var n = t._r1,
                            n = n.hasClass("rsVideoContainer") ? n : n.find(".rsVideoContainer");
                        t._c7 && t._c7.css({ width: n.width(), height: n.height() }) }, 32) });
                i = t._a.mozilla;
                t.ev.on("rsAfterParseNode", function(r, u, f) { if (r = n(u), f.videoURL) { t.st.video.disableCSS3inFF && i && (t._e = t._f = !1);
                        u = n('<div class="rsVideoContainer"><\/div>'); var e = n('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"><\/div><\/div><\/div>');
                        r.hasClass("rsImg") ? f.content = u.append(r).append(e) : f.content.find(".rsImg").wrap(u).after(e) } });
                t.ev.on("rsAfterSlideChange", function() { t.stopVideo() }) }, toggleVideo: function() { return this._b7 ? this.stopVideo() : this.playVideo() }, playVideo: function() { var t = this,
                    r, i, f, u; return t._b7 ? !1 : (i = t.currSlide, !i.videoURL) ? !1 : (t._d7 = i, r = t._e7 = i.content, i = i.videoURL, i.match(/youtu\.be/i) || i.match(/youtube\.com/i) ? (u = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (u = i.match(u)) && 11 == u[7].length && (f = u[7]), void 0 !== f && (t._c7 = t.st.video.youTubeCode.replace("%id%", f))) : i.match(/vimeo\.com/i) && (u = /(www\.)?vimeo.com\/(\d+)($|\/)/, (u = i.match(u)) && (f = u[2]), void 0 !== f && (t._c7 = t.st.video.vimeoCode.replace("%id%", f))), t.videoObj = n(t._c7), t.ev.trigger("rsOnCreateVideoElement", [i]), t.videoObj.length && (t._c7 = n('<div class="rsVideoFrameHolder"><div class="rsPreloader"><\/div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"><\/div><\/div><\/div>'), t._c7.find(".rsPreloader").after(t.videoObj), r = r.hasClass("rsVideoContainer") ? r : r.find(".rsVideoContainer"), t._c7.css({ width: r.width(), height: r.height() }).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function(n) { return t.stopVideo(), n.preventDefault(), n.stopPropagation(), !1 }), r.append(t._c7), t.isIPAD && r.addClass("rsIOSVideo"), t._f7(!1), setTimeout(function() { t._c7.addClass("rsVideoActive") }, 10), t.ev.trigger("rsVideoPlay"), t._b7 = !0), !0) }, stopVideo: function() { var n = this; return n._b7 ? (n.isIPAD && n.slider.find(".rsCloseVideoBtn").remove(), n._f7(!0), setTimeout(function() { n.ev.trigger("rsOnDestroyVideoElement", [n.videoObj]); var t = n._c7.find("iframe"); if (t.length) try { t.attr("src", "") } catch (i) {} n._c7.remove();
                    n._c7 = null }, 16), n.ev.trigger("rsVideoStop"), n._b7 = !1, !0) : !1 }, _f7: function(n) { var t = [],
                    i = this.st.video; if (i.autoHideArrows && (this._c2 && (t.push(this._c2, this._d2), this._e2 = !n), this._v5 && t.push(this._v5)), i.autoHideControlNav && this._k5 && t.push(this._k5), i.autoHideBlocks && this._d7.animBlocks && t.push(this._d7.animBlocks), i.autoHideCaption && this.globalCaption && t.push(this.globalCaption), this.slider[n ? "removeClass" : "addClass"]("rsVideoPlaying"), t.length)
                    for (i = 0; i < t.length; i++) n ? t[i].removeClass("rsHidden") : t[i].addClass("rsHidden") } });
        n.rsModules.video = n.rsProto._z6 }(jQuery),
    function(n) { n.rsProto._g7 = function() { var t = this;
            t.st.visibleNearby && t.st.visibleNearby.enabled && (t._h7 = { enabled: !0, centerArea: .6, center: !0, breakpoint: 0, breakpointCenterArea: .8, hiddenOverflow: !0, navigateByCenterClick: !1 }, t.st.visibleNearby = n.extend({}, t._h7, t.st.visibleNearby), t.ev.one("rsAfterPropsSetup", function() { t._i7 = t._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"><\/div>').parent();
                t.st.visibleNearby.hiddenOverflow || t._i7.css("overflow", "visible");
                t._o1 = t.st.controlsInside ? t._i7 : t.slider }), t.ev.on("rsAfterSizePropSet", function() { var n, i = t.st.visibleNearby;
                n = i.breakpoint && t.width < i.breakpoint ? i.breakpointCenterArea : i.centerArea;
                t._h ? (t._b4 *= n, t._i7.css({ height: t._c4, width: t._b4 / n }), t._d = t._b4 * (1 - n) / 2 / n) : (t._c4 *= n, t._i7.css({ height: t._c4 / n, width: t._b4 }), t._d = t._c4 * (1 - n) / 2 / n);
                i.navigateByCenterClick || (t._q = t._h ? t._b4 : t._c4);
                i.center && t._e1.css("margin-" + (t._h ? "left" : "top"), t._d) })) };
        n.rsModules.visibleNearby = n.rsProto._g7 }(jQuery);
! function() { "use strict"; var n, t = function(i, r) {
            function w(n) { return Math.floor(n) }

            function rt() { var n = u.params.autoplay,
                    t = u.slides.eq(u.activeIndex);
                t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || u.params.autoplay);
                u.autoplayTimeoutId = setTimeout(function() { u.params.loop ? (u.fixLoop(), u._slideNext(), u.emit("onAutoplay", u)) : u.isEnd ? r.autoplayStopOnLast ? u.stopAutoplay() : (u._slideTo(0), u.emit("onAutoplay", u)) : (u._slideNext(), u.emit("onAutoplay", u)) }, n) }

            function ut(t, i) { var r = n(t.target),
                    u; if (!r.is(i))
                    if ("string" == typeof i) r = r.parents(i);
                    else if (i.nodeType) return r.parents().each(function(n, t) { t === i && (u = i) }), u ? i : void 0; if (0 !== r.length) return r[0] }

            function ft(n, t) { t = t || {}; var r = window.MutationObserver || window.WebkitMutationObserver,
                    i = new r(function(n) { n.forEach(function(n) { u.onResize(!0);
                            u.emit("onObserverUpdate", u, n) }) });
                i.observe(n, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData });
                u.observers.push(i) }

            function vt(n) { var t, o, s, e, r; if ((n.originalEvent && (n = n.originalEvent), t = n.keyCode || n.charCode, !u.params.allowSwipeToNext && (u.isHorizontal() && 39 === t || !u.isHorizontal() && 40 === t)) || !u.params.allowSwipeToPrev && (u.isHorizontal() && 37 === t || !u.isHorizontal() && 38 === t)) return !1; if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) { if (37 === t || 39 === t || 38 === t || 40 === t) { if (o = !1, u.container.parents("." + u.params.slideClass).length > 0 && 0 === u.container.parents("." + u.params.slideActiveClass).length) return; var f = { left: window.pageXOffset, top: window.pageYOffset },
                            h = window.innerWidth,
                            c = window.innerHeight,
                            i = u.container.offset(); for (u.rtl && (i.left = i.left - u.container[0].scrollLeft), s = [
                                [i.left, i.top],
                                [i.left + u.width, i.top],
                                [i.left, i.top + u.height],
                                [i.left + u.width, i.top + u.height]
                            ], e = 0; e < s.length; e++) r = s[e], r[0] >= f.left && r[0] <= f.left + h && r[1] >= f.top && r[1] <= f.top + c && (o = !0); if (!o) return } u.isHorizontal() ? (37 !== t && 39 !== t || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (39 === t && !u.rtl || 37 === t && u.rtl) && u.slideNext(), (37 === t && !u.rtl || 39 === t && u.rtl) && u.slidePrev()) : (38 !== t && 40 !== t || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), 40 === t && u.slideNext(), 38 === t && u.slidePrev());
                    u.emit("onKeyPress", u, t) } }

            function bt(n) { var u = 0,
                    t = 0,
                    i = 0,
                    r = 0; return "detail" in n && (t = n.detail), "wheelDelta" in n && (t = -n.wheelDelta / 120), "wheelDeltaY" in n && (t = -n.wheelDeltaY / 120), "wheelDeltaX" in n && (u = -n.wheelDeltaX / 120), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (u = t, t = 0), i = 10 * u, r = 10 * t, "deltaY" in n && (r = n.deltaY), "deltaX" in n && (i = n.deltaX), (i || r) && n.deltaMode && (1 === n.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !u && (u = i < 1 ? -1 : 1), r && !t && (t = r < 1 ? -1 : 1), { spinX: u, spinY: t, pixelX: i, pixelY: r } }

            function yt(n) { n.originalEvent && (n = n.originalEvent); var i = 0,
                    f = u.rtl ? -1 : 1,
                    t = bt(n); if (u.params.mousewheelForceToAxis)
                    if (u.isHorizontal()) { if (!(Math.abs(t.pixelX) > Math.abs(t.pixelY))) return;
                        i = t.pixelX * f } else { if (!(Math.abs(t.pixelY) > Math.abs(t.pixelX))) return;
                        i = t.pixelY } else i = Math.abs(t.pixelX) > Math.abs(t.pixelY) ? -t.pixelX * f : -t.pixelY; if (0 !== i) { if (u.params.mousewheelInvert && (i = -i), u.params.freeMode) { var r = u.getWrapperTranslate() + i * u.params.mousewheelSensitivity,
                            e = u.isBeginning,
                            o = u.isEnd; if (r >= u.minTranslate() && (r = u.minTranslate()), r <= u.maxTranslate() && (r = u.maxTranslate()), u.setWrapperTransition(0), u.setWrapperTranslate(r), u.updateProgress(), u.updateActiveIndex(), (!e && u.isBeginning || !o && u.isEnd) && u.updateClasses(), u.params.freeModeSticky ? (clearTimeout(u.mousewheel.timeout), u.mousewheel.timeout = setTimeout(function() { u.slideReset() }, 300)) : u.params.lazyLoading && u.lazy && u.lazy.load(), u.emit("onScroll", u, n), u.params.autoplay && u.params.autoplayDisableOnInteraction && u.stopAutoplay(), 0 === r || r === u.maxTranslate()) return } else { if ((new window.Date).getTime() - u.mousewheel.lastScrollTime > 60)
                            if (i < 0)
                                if (u.isEnd && !u.params.loop || u.animating) { if (u.params.mousewheelReleaseOnEdges) return !0 } else u.slideNext(), u.emit("onScroll", u, n);
                        else if (u.isBeginning && !u.params.loop || u.animating) { if (u.params.mousewheelReleaseOnEdges) return !0 } else u.slidePrev(), u.emit("onScroll", u, n);
                        u.mousewheel.lastScrollTime = (new window.Date).getTime() } return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1 } }

            function pt(t, i) { t = n(t); var e, r, f, o = u.rtl ? -1 : 1;
                e = t.attr("data-swiper-parallax") || "0";
                r = t.attr("data-swiper-parallax-x");
                f = t.attr("data-swiper-parallax-y");
                r || f ? (r = r || "0", f = f || "0") : u.isHorizontal() ? (r = e, f = "0") : (f = e, r = "0");
                r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i * o + "%" : r * i * o + "px";
                f = f.indexOf("%") >= 0 ? parseInt(f, 10) * i + "%" : f * i + "px";
                t.transform("translate3d(" + r + ", " + f + ",0px)") }

            function et(n) { return 0 !== n.indexOf("on") && (n = n[0] !== n[0].toUpperCase() ? "on" + n[0].toUpperCase() + n.substring(1) : "on" + n), n } var v, wt, y, e, ot, s, b, u, st, tt, it, lt, at; if (!(this instanceof t)) return new t(i, r);
            v = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, zoom: !1, zoomMax: 3, zoomMin: 1, zoomToggle: !0, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, mousewheelEventsTarged: "container", hashnav: !1, hashnavWatchState: !1, history: !1, replaceState: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", normalizeSlideIndex: !0, allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", paginationClickableClass: "swiper-pagination-clickable", paginationModifierClass: "swiper-pagination-", lazyLoadingClass: "swiper-lazy", lazyStatusLoadingClass: "swiper-lazy-loading", lazyStatusLoadedClass: "swiper-lazy-loaded", lazyPreloaderClass: "swiper-lazy-preloader", notificationClass: "swiper-notification", preloaderClass: "preloader", zoomContainerClass: "swiper-zoom-container", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 };
            wt = r && r.virtualTranslate;
            r = r || {};
            y = {}; for (e in r)
                if ("object" != typeof r[e] || null === r[e] || r[e].nodeType || r[e] === window || r[e] === document || "undefined" != typeof Dom7 && r[e] instanceof Dom7 || "undefined" != typeof jQuery && r[e] instanceof jQuery) y[e] = r[e];
                else { y[e] = {}; for (ot in r[e]) y[e][ot] = r[e][ot] } for (s in v)
                if (void 0 === r[s]) r[s] = v[s];
                else if ("object" == typeof r[s])
                for (b in v[s]) void 0 === r[s][b] && (r[s][b] = v[s][b]); if (u = this, u.params = r, u.originalParams = y, u.classNames = [], void 0 !== n && "undefined" != typeof Dom7 && (n = Dom7), (void 0 !== n || (n = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (u.$ = n, u.currentBreakpoint = void 0, u.getActiveBreakpoint = function() { var n, i, t, r; if (!u.params.breakpoints) return !1;
                    i = !1;
                    t = []; for (n in u.params.breakpoints) u.params.breakpoints.hasOwnProperty(n) && t.push(n); for (t.sort(function(n, t) { return parseInt(n, 10) > parseInt(t, 10) }), r = 0; r < t.length; r++)(n = t[r]) >= window.innerWidth && !i && (i = n); return i || "max" }, u.setBreakpoint = function() { var n = u.getActiveBreakpoint(),
                        t, r, i; if (n && u.currentBreakpoint !== n) { t = n in u.params.breakpoints ? u.params.breakpoints[n] : u.originalParams;
                        r = u.params.loop && t.slidesPerView !== u.params.slidesPerView; for (i in t) u.params[i] = t[i];
                        u.currentBreakpoint = n;
                        r && u.destroyLoop && u.reLoop(!0) } }, u.params.breakpoints && u.setBreakpoint(), u.container = n(i), 0 !== u.container.length)) { if (u.container.length > 1) return st = [], u.container.each(function() { st.push(new t(this, r)) }), st;
                u.container[0].swiper = u;
                u.container.data("swiper", u);
                u.classNames.push(u.params.containerModifierClass + u.params.direction);
                u.params.freeMode && u.classNames.push(u.params.containerModifierClass + "free-mode");
                u.support.flexbox || (u.classNames.push(u.params.containerModifierClass + "no-flexbox"), u.params.slidesPerColumn = 1);
                u.params.autoHeight && u.classNames.push(u.params.containerModifierClass + "autoheight");
                (u.params.parallax || u.params.watchSlidesVisibility) && (u.params.watchSlidesProgress = !0);
                u.params.touchReleaseOnEdges && (u.params.resistanceRatio = 0);
                ["cube", "coverflow", "flip"].indexOf(u.params.effect) >= 0 && (u.support.transforms3d ? (u.params.watchSlidesProgress = !0, u.classNames.push(u.params.containerModifierClass + "3d")) : u.params.effect = "slide"); "slide" !== u.params.effect && u.classNames.push(u.params.containerModifierClass + u.params.effect); "cube" === u.params.effect && (u.params.resistanceRatio = 0, u.params.slidesPerView = 1, u.params.slidesPerColumn = 1, u.params.slidesPerGroup = 1, u.params.centeredSlides = !1, u.params.spaceBetween = 0, u.params.virtualTranslate = !0); "fade" !== u.params.effect && "flip" !== u.params.effect || (u.params.slidesPerView = 1, u.params.slidesPerColumn = 1, u.params.slidesPerGroup = 1, u.params.watchSlidesProgress = !0, u.params.spaceBetween = 0, void 0 === wt && (u.params.virtualTranslate = !0));
                u.params.grabCursor && u.support.touch && (u.params.grabCursor = !1);
                u.wrapper = u.container.children("." + u.params.wrapperClass);
                u.params.pagination && (u.paginationContainer = n(u.params.pagination), u.params.uniqueNavElements && "string" == typeof u.params.pagination && u.paginationContainer.length > 1 && 1 === u.container.find(u.params.pagination).length && (u.paginationContainer = u.container.find(u.params.pagination)), "bullets" === u.params.paginationType && u.params.paginationClickable ? u.paginationContainer.addClass(u.params.paginationModifierClass + "clickable") : u.params.paginationClickable = !1, u.paginationContainer.addClass(u.params.paginationModifierClass + u.params.paginationType));
                (u.params.nextButton || u.params.prevButton) && (u.params.nextButton && (u.nextButton = n(u.params.nextButton), u.params.uniqueNavElements && "string" == typeof u.params.nextButton && u.nextButton.length > 1 && 1 === u.container.find(u.params.nextButton).length && (u.nextButton = u.container.find(u.params.nextButton))), u.params.prevButton && (u.prevButton = n(u.params.prevButton), u.params.uniqueNavElements && "string" == typeof u.params.prevButton && u.prevButton.length > 1 && 1 === u.container.find(u.params.prevButton).length && (u.prevButton = u.container.find(u.params.prevButton))));
                u.isHorizontal = function() { return "horizontal" === u.params.direction };
                u.rtl = u.isHorizontal() && ("rtl" === u.container[0].dir.toLowerCase() || "rtl" === u.container.css("direction"));
                u.rtl && u.classNames.push(u.params.containerModifierClass + "rtl");
                u.rtl && (u.wrongRTL = "-webkit-box" === u.wrapper.css("display"));
                u.params.slidesPerColumn > 1 && u.classNames.push(u.params.containerModifierClass + "multirow");
                u.device.android && u.classNames.push(u.params.containerModifierClass + "android");
                u.container.addClass(u.classNames.join(" "));
                u.translate = 0;
                u.progress = 0;
                u.velocity = 0;
                u.lockSwipeToNext = function() { u.params.allowSwipeToNext = !1;
                    u.params.allowSwipeToPrev === !1 && u.params.grabCursor && u.unsetGrabCursor() };
                u.lockSwipeToPrev = function() { u.params.allowSwipeToPrev = !1;
                    u.params.allowSwipeToNext === !1 && u.params.grabCursor && u.unsetGrabCursor() };
                u.lockSwipes = function() { u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !1;
                    u.params.grabCursor && u.unsetGrabCursor() };
                u.unlockSwipeToNext = function() { u.params.allowSwipeToNext = !0;
                    u.params.allowSwipeToPrev === !0 && u.params.grabCursor && u.setGrabCursor() };
                u.unlockSwipeToPrev = function() { u.params.allowSwipeToPrev = !0;
                    u.params.allowSwipeToNext === !0 && u.params.grabCursor && u.setGrabCursor() };
                u.unlockSwipes = function() { u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !0;
                    u.params.grabCursor && u.setGrabCursor() };
                u.setGrabCursor = function(n) { u.container[0].style.cursor = "move";
                    u.container[0].style.cursor = n ? "-webkit-grabbing" : "-webkit-grab";
                    u.container[0].style.cursor = n ? "-moz-grabbin" : "-moz-grab";
                    u.container[0].style.cursor = n ? "grabbing" : "grab" };
                u.unsetGrabCursor = function() { u.container[0].style.cursor = "" };
                u.params.grabCursor && u.setGrabCursor();
                u.imagesToLoad = [];
                u.imagesLoaded = 0;
                u.loadImage = function(n, t, i, r, u, f) {
                    function o() { f && f() } var e;
                    n.complete && u ? o() : t ? (e = new window.Image, e.onload = o, e.onerror = o, r && (e.sizes = r), i && (e.srcset = i), t && (e.src = t)) : o() };
                u.preloadImages = function() {
                    function t() { void 0 !== u && null !== u && u && (void 0 !== u.imagesLoaded && u.imagesLoaded++, u.imagesLoaded === u.imagesToLoad.length && (u.params.updateOnImagesReady && u.update(), u.emit("onImagesReady", u))) } u.imagesToLoad = u.container.find("img"); for (var n = 0; n < u.imagesToLoad.length; n++) u.loadImage(u.imagesToLoad[n], u.imagesToLoad[n].currentSrc || u.imagesToLoad[n].getAttribute("src"), u.imagesToLoad[n].srcset || u.imagesToLoad[n].getAttribute("srcset"), u.imagesToLoad[n].sizes || u.imagesToLoad[n].getAttribute("sizes"), !0, t) };
                u.autoplayTimeoutId = void 0;
                u.autoplaying = !1;
                u.autoplayPaused = !1;
                u.startAutoplay = function() { return void 0 === u.autoplayTimeoutId && !!u.params.autoplay && !u.autoplaying && (u.autoplaying = !0, u.emit("onAutoplayStart", u), void rt()) };
                u.stopAutoplay = function() { u.autoplayTimeoutId && (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId), u.autoplaying = !1, u.autoplayTimeoutId = void 0, u.emit("onAutoplayStop", u)) };
                u.pauseAutoplay = function(n) { u.autoplayPaused || (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId), u.autoplayPaused = !0, 0 === n ? (u.autoplayPaused = !1, rt()) : u.wrapper.transitionEnd(function() { u && (u.autoplayPaused = !1, u.autoplaying ? rt() : u.stopAutoplay()) })) };
                u.minTranslate = function() { return -u.snapGrid[0] };
                u.maxTranslate = function() { return -u.snapGrid[u.snapGrid.length - 1] };
                u.updateAutoHeight = function() { var n, t = [],
                        i = 0,
                        r, f; if ("auto" !== u.params.slidesPerView && u.params.slidesPerView > 1)
                        for (n = 0; n < Math.ceil(u.params.slidesPerView); n++) { if (r = u.activeIndex + n, r > u.slides.length) break;
                            t.push(u.slides.eq(r)[0]) } else t.push(u.slides.eq(u.activeIndex)[0]); for (n = 0; n < t.length; n++) void 0 !== t[n] && (f = t[n].offsetHeight, i = f > i ? f : i);
                    i && u.wrapper.css("height", i + "px") };
                u.updateContainerSize = function() { var n, t;
                    n = void 0 !== u.params.width ? u.params.width : u.container[0].clientWidth;
                    t = void 0 !== u.params.height ? u.params.height : u.container[0].clientHeight;
                    0 === n && u.isHorizontal() || 0 === t && !u.isHorizontal() || (n = n - parseInt(u.container.css("padding-left"), 10) - parseInt(u.container.css("padding-right"), 10), t = t - parseInt(u.container.css("padding-top"), 10) - parseInt(u.container.css("padding-bottom"), 10), u.width = n, u.height = t, u.size = u.isHorizontal() ? u.width : u.height) };
                u.updateSlidesSize = function() { var o, h, c, e, f, l;
                    u.slides = u.wrapper.children("." + u.params.slideClass);
                    u.snapGrid = [];
                    u.slidesGrid = [];
                    u.slidesSizesGrid = []; var n, i = u.params.spaceBetween,
                        r = -u.params.slidesOffsetBefore,
                        v = 0,
                        y = 0; if (void 0 !== u.size) { "string" == typeof i && i.indexOf("%") >= 0 && (i = parseFloat(i.replace("%", "")) / 100 * u.size);
                        u.virtualSize = -i;
                        u.rtl ? u.slides.css({ marginLeft: "", marginTop: "" }) : u.slides.css({ marginRight: "", marginBottom: "" });
                        u.params.slidesPerColumn > 1 && (o = Math.floor(u.slides.length / u.params.slidesPerColumn) === u.slides.length / u.params.slidesPerColumn ? u.slides.length : Math.ceil(u.slides.length / u.params.slidesPerColumn) * u.params.slidesPerColumn, "auto" !== u.params.slidesPerView && "row" === u.params.slidesPerColumnFill && (o = Math.max(o, u.params.slidesPerView * u.params.slidesPerColumn))); var t, s = u.params.slidesPerColumn,
                            a = o / s,
                            p = a - (u.params.slidesPerColumn * a - u.slides.length); for (n = 0; n < u.slides.length; n++) t = 0, h = u.slides.eq(n), u.params.slidesPerColumn > 1 && ("column" === u.params.slidesPerColumnFill ? (e = Math.floor(n / s), f = n - e * s, (e > p || e === p && f === s - 1) && ++f >= s && (f = 0, e++), c = e + f * o / s, h.css({ "-webkit-box-ordinal-group": c, "-moz-box-ordinal-group": c, "-ms-flex-order": c, "-webkit-order": c, order: c })) : (f = Math.floor(n / a), e = n - f * a), h.css("margin-" + (u.isHorizontal() ? "top" : "left"), 0 !== f && u.params.spaceBetween && u.params.spaceBetween + "px").attr("data-swiper-column", e).attr("data-swiper-row", f)), "none" !== h.css("display") && ("auto" === u.params.slidesPerView ? (t = u.isHorizontal() ? h.outerWidth(!0) : h.outerHeight(!0), u.params.roundLengths && (t = w(t))) : (t = (u.size - (u.params.slidesPerView - 1) * i) / u.params.slidesPerView, u.params.roundLengths && (t = w(t)), u.isHorizontal() ? u.slides[n].style.width = t + "px" : u.slides[n].style.height = t + "px"), u.slides[n].swiperSlideSize = t, u.slidesSizesGrid.push(t), u.params.centeredSlides ? (r = r + t / 2 + v / 2 + i, 0 === v && 0 !== n && (r = r - u.size / 2 - i), 0 === n && (r = r - u.size / 2 - i), Math.abs(r) < .001 && (r = 0), y % u.params.slidesPerGroup == 0 && u.snapGrid.push(r), u.slidesGrid.push(r)) : (y % u.params.slidesPerGroup == 0 && u.snapGrid.push(r), u.slidesGrid.push(r), r = r + t + i), u.virtualSize += t + i, v = t, y++); if (u.virtualSize = Math.max(u.virtualSize, u.size) + u.params.slidesOffsetAfter, u.rtl && u.wrongRTL && ("slide" === u.params.effect || "coverflow" === u.params.effect) && u.wrapper.css({ width: u.virtualSize + u.params.spaceBetween + "px" }), u.support.flexbox && !u.params.setWrapperSize || (u.isHorizontal() ? u.wrapper.css({ width: u.virtualSize + u.params.spaceBetween + "px" }) : u.wrapper.css({ height: u.virtualSize + u.params.spaceBetween + "px" })), u.params.slidesPerColumn > 1 && (u.virtualSize = (t + u.params.spaceBetween) * o, u.virtualSize = Math.ceil(u.virtualSize / u.params.slidesPerColumn) - u.params.spaceBetween, u.isHorizontal() ? u.wrapper.css({ width: u.virtualSize + u.params.spaceBetween + "px" }) : u.wrapper.css({ height: u.virtualSize + u.params.spaceBetween + "px" }), u.params.centeredSlides)) { for (l = [], n = 0; n < u.snapGrid.length; n++) u.snapGrid[n] < u.virtualSize + u.snapGrid[0] && l.push(u.snapGrid[n]);
                            u.snapGrid = l } if (!u.params.centeredSlides) { for (l = [], n = 0; n < u.snapGrid.length; n++) u.snapGrid[n] <= u.virtualSize - u.size && l.push(u.snapGrid[n]);
                            u.snapGrid = l;
                            Math.floor(u.virtualSize - u.size) - Math.floor(u.snapGrid[u.snapGrid.length - 1]) > 1 && u.snapGrid.push(u.virtualSize - u.size) } 0 === u.snapGrid.length && (u.snapGrid = [0]);
                        0 !== u.params.spaceBetween && (u.isHorizontal() ? u.rtl ? u.slides.css({ marginLeft: i + "px" }) : u.slides.css({ marginRight: i + "px" }) : u.slides.css({ marginBottom: i + "px" }));
                        u.params.watchSlidesProgress && u.updateSlidesOffset() } };
                u.updateSlidesOffset = function() { for (var n = 0; n < u.slides.length; n++) u.slides[n].swiperSlideOffset = u.isHorizontal() ? u.slides[n].offsetLeft : u.slides[n].offsetTop };
                u.currentSlidesPerView = function() { var n, t, r = 1,
                        f, i; if (u.params.centeredSlides) { for (i = u.slides[u.activeIndex].swiperSlideSize, n = u.activeIndex + 1; n < u.slides.length; n++) u.slides[n] && !f && (i += u.slides[n].swiperSlideSize, r++, i > u.size && (f = !0)); for (t = u.activeIndex - 1; t >= 0; t--) u.slides[t] && !f && (i += u.slides[t].swiperSlideSize, r++, i > u.size && (f = !0)) } else
                        for (n = u.activeIndex + 1; n < u.slides.length; n++) u.slidesGrid[n] - u.slidesGrid[u.activeIndex] < u.size && r++; return r };
                u.updateSlidesProgress = function(n) { var f, t, i, o, r, e; if (void 0 === n && (n = u.translate || 0), 0 !== u.slides.length)
                        for (void 0 === u.slides[0].swiperSlideOffset && u.updateSlidesOffset(), f = -n, u.rtl && (f = n), u.slides.removeClass(u.params.slideVisibleClass), t = 0; t < u.slides.length; t++) i = u.slides[t], o = (f + (u.params.centeredSlides ? u.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + u.params.spaceBetween), u.params.watchSlidesVisibility && (r = -(f - i.swiperSlideOffset), e = r + u.slidesSizesGrid[t], (r >= 0 && r < u.size || e > 0 && e <= u.size || r <= 0 && e >= u.size) && u.slides.eq(t).addClass(u.params.slideVisibleClass)), i.progress = u.rtl ? -o : o };
                u.updateProgress = function(n) { void 0 === n && (n = u.translate || 0); var t = u.maxTranslate() - u.minTranslate(),
                        i = u.isBeginning,
                        r = u.isEnd;
                    0 === t ? (u.progress = 0, u.isBeginning = u.isEnd = !0) : (u.progress = (n - u.minTranslate()) / t, u.isBeginning = u.progress <= 0, u.isEnd = u.progress >= 1);
                    u.isBeginning && !i && u.emit("onReachBeginning", u);
                    u.isEnd && !r && u.emit("onReachEnd", u);
                    u.params.watchSlidesProgress && u.updateSlidesProgress(n);
                    u.emit("onProgress", u, u.progress) };
                u.updateActiveIndex = function() { for (var t, r, i = u.rtl ? u.translate : -u.translate, n = 0; n < u.slidesGrid.length; n++) void 0 !== u.slidesGrid[n + 1] ? i >= u.slidesGrid[n] && i < u.slidesGrid[n + 1] - (u.slidesGrid[n + 1] - u.slidesGrid[n]) / 2 ? t = n : i >= u.slidesGrid[n] && i < u.slidesGrid[n + 1] && (t = n + 1) : i >= u.slidesGrid[n] && (t = n);
                    u.params.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0);
                    r = Math.floor(t / u.params.slidesPerGroup);
                    r >= u.snapGrid.length && (r = u.snapGrid.length - 1);
                    t !== u.activeIndex && (u.snapIndex = r, u.previousIndex = u.activeIndex, u.activeIndex = t, u.updateClasses(), u.updateRealIndex()) };
                u.updateRealIndex = function() { u.realIndex = parseInt(u.slides.eq(u.activeIndex).attr("data-swiper-slide-index") || u.activeIndex, 10) };
                u.updateClasses = function() { var o, i, f, t, e; if (u.slides.removeClass(u.params.slideActiveClass + " " + u.params.slideNextClass + " " + u.params.slidePrevClass + " " + u.params.slideDuplicateActiveClass + " " + u.params.slideDuplicateNextClass + " " + u.params.slideDuplicatePrevClass), o = u.slides.eq(u.activeIndex), o.addClass(u.params.slideActiveClass), r.loop && (o.hasClass(u.params.slideDuplicateClass) ? u.wrapper.children("." + u.params.slideClass + ":not(." + u.params.slideDuplicateClass + ')[data-swiper-slide-index="' + u.realIndex + '"]').addClass(u.params.slideDuplicateActiveClass) : u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + u.realIndex + '"]').addClass(u.params.slideDuplicateActiveClass)), i = o.next("." + u.params.slideClass).addClass(u.params.slideNextClass), u.params.loop && 0 === i.length && (i = u.slides.eq(0), i.addClass(u.params.slideNextClass)), f = o.prev("." + u.params.slideClass).addClass(u.params.slidePrevClass), u.params.loop && 0 === f.length && (f = u.slides.eq(-1), f.addClass(u.params.slidePrevClass)), r.loop && (i.hasClass(u.params.slideDuplicateClass) ? u.wrapper.children("." + u.params.slideClass + ":not(." + u.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicateNextClass) : u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicateNextClass), f.hasClass(u.params.slideDuplicateClass) ? u.wrapper.children("." + u.params.slideClass + ":not(." + u.params.slideDuplicateClass + ')[data-swiper-slide-index="' + f.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicatePrevClass) : u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + f.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicatePrevClass)), u.paginationContainer && u.paginationContainer.length > 0) { if (e = u.params.loop ? Math.ceil((u.slides.length - 2 * u.loopedSlides) / u.params.slidesPerGroup) : u.snapGrid.length, u.params.loop ? (t = Math.ceil((u.activeIndex - u.loopedSlides) / u.params.slidesPerGroup), t > u.slides.length - 1 - 2 * u.loopedSlides && (t -= u.slides.length - 2 * u.loopedSlides), t > e - 1 && (t -= e), t < 0 && "bullets" !== u.params.paginationType && (t = e + t)) : t = void 0 !== u.snapIndex ? u.snapIndex : u.activeIndex || 0, "bullets" === u.params.paginationType && u.bullets && u.bullets.length > 0 && (u.bullets.removeClass(u.params.bulletActiveClass), u.paginationContainer.length > 1 ? u.bullets.each(function() { n(this).index() === t && n(this).addClass(u.params.bulletActiveClass) }) : u.bullets.eq(t).addClass(u.params.bulletActiveClass)), "fraction" === u.params.paginationType && (u.paginationContainer.find("." + u.params.paginationCurrentClass).text(t + 1), u.paginationContainer.find("." + u.params.paginationTotalClass).text(e)), "progress" === u.params.paginationType) { var s = (t + 1) / e,
                                h = s,
                                c = 1;
                            u.isHorizontal() || (c = s, h = 1);
                            u.paginationContainer.find("." + u.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + h + ") scaleY(" + c + ")").transition(u.params.speed) } "custom" === u.params.paginationType && u.params.paginationCustomRender && (u.paginationContainer.html(u.params.paginationCustomRender(u, t + 1, e)), u.emit("onPaginationRendered", u, u.paginationContainer[0])) } u.params.loop || (u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.isBeginning ? (u.prevButton.addClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.disable(u.prevButton)) : (u.prevButton.removeClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.enable(u.prevButton))), u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.isEnd ? (u.nextButton.addClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.disable(u.nextButton)) : (u.nextButton.removeClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.enable(u.nextButton)))) };
                u.updatePagination = function() { var n, i, t; if (u.params.pagination && u.paginationContainer && u.paginationContainer.length > 0) { if (n = "", "bullets" === u.params.paginationType) { for (i = u.params.loop ? Math.ceil((u.slides.length - 2 * u.loopedSlides) / u.params.slidesPerGroup) : u.snapGrid.length, t = 0; t < i; t++) n += u.params.paginationBulletRender ? u.params.paginationBulletRender(u, t, u.params.bulletClass) : "<" + u.params.paginationElement + ' class="' + u.params.bulletClass + '"><\/' + u.params.paginationElement + ">";
                            u.paginationContainer.html(n);
                            u.bullets = u.paginationContainer.find("." + u.params.bulletClass);
                            u.params.paginationClickable && u.params.a11y && u.a11y && u.a11y.initPagination() } "fraction" === u.params.paginationType && (n = u.params.paginationFractionRender ? u.params.paginationFractionRender(u, u.params.paginationCurrentClass, u.params.paginationTotalClass) : '<span class="' + u.params.paginationCurrentClass + '"><\/span> / <span class="' + u.params.paginationTotalClass + '"><\/span>', u.paginationContainer.html(n)); "progress" === u.params.paginationType && (n = u.params.paginationProgressRender ? u.params.paginationProgressRender(u, u.params.paginationProgressbarClass) : '<span class="' + u.params.paginationProgressbarClass + '"><\/span>', u.paginationContainer.html(n)); "custom" !== u.params.paginationType && u.emit("onPaginationRendered", u, u.paginationContainer[0]) } };
                u.update = function(n) {
                    function t() { u.rtl;
                        u.translate;
                        i = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate());
                        u.setWrapperTranslate(i);
                        u.updateActiveIndex();
                        u.updateClasses() } if (u) { u.updateContainerSize();
                        u.updateSlidesSize();
                        u.updateProgress();
                        u.updatePagination();
                        u.updateClasses();
                        u.params.scrollbar && u.scrollbar && u.scrollbar.set(); var i;
                        n ? (u.controller && u.controller.spline && (u.controller.spline = void 0), u.params.freeMode ? (t(), u.params.autoHeight && u.updateAutoHeight()) : (("auto" === u.params.slidesPerView || u.params.slidesPerView > 1) && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0)) || t()) : u.params.autoHeight && u.updateAutoHeight() } };
                u.onResize = function(n) { var i, r, t, f;
                    u.params.onBeforeResize && u.params.onBeforeResize(u);
                    u.params.breakpoints && u.setBreakpoint();
                    i = u.params.allowSwipeToPrev;
                    r = u.params.allowSwipeToNext;
                    u.params.allowSwipeToPrev = u.params.allowSwipeToNext = !0;
                    u.updateContainerSize();
                    u.updateSlidesSize();
                    ("auto" === u.params.slidesPerView || u.params.freeMode || n) && u.updatePagination();
                    u.params.scrollbar && u.scrollbar && u.scrollbar.set();
                    u.controller && u.controller.spline && (u.controller.spline = void 0);
                    t = !1;
                    u.params.freeMode ? (f = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate()), u.setWrapperTranslate(f), u.updateActiveIndex(), u.updateClasses(), u.params.autoHeight && u.updateAutoHeight()) : (u.updateClasses(), t = ("auto" === u.params.slidesPerView || u.params.slidesPerView > 1) && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0));
                    u.params.lazyLoading && !t && u.lazy && u.lazy.load();
                    u.params.allowSwipeToPrev = i;
                    u.params.allowSwipeToNext = r;
                    u.params.onAfterResize && u.params.onAfterResize(u) };
                u.touchEventsDesktop = { start: "mousedown", move: "mousemove", end: "mouseup" };
                window.navigator.pointerEnabled ? u.touchEventsDesktop = { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled && (u.touchEventsDesktop = { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" });
                u.touchEvents = { start: u.support.touch || !u.params.simulateTouch ? "touchstart" : u.touchEventsDesktop.start, move: u.support.touch || !u.params.simulateTouch ? "touchmove" : u.touchEventsDesktop.move, end: u.support.touch || !u.params.simulateTouch ? "touchend" : u.touchEventsDesktop.end };
                (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === u.params.touchEventsTarget ? u.container : u.wrapper).addClass("swiper-wp8-" + u.params.direction);
                u.initEvents = function(n) { var f = n ? "off" : "on",
                        t = n ? "removeEventListener" : "addEventListener",
                        i = "container" === u.params.touchEventsTarget ? u.container[0] : u.wrapper[0],
                        s = u.support.touch ? i : document,
                        e = !!u.params.nested,
                        o;
                    u.browser.ie ? (i[t](u.touchEvents.start, u.onTouchStart, !1), s[t](u.touchEvents.move, u.onTouchMove, e), s[t](u.touchEvents.end, u.onTouchEnd, !1)) : (u.support.touch && (o = !("touchstart" !== u.touchEvents.start || !u.support.passiveListener || !u.params.passiveListeners) && { passive: !0, capture: !1 }, i[t](u.touchEvents.start, u.onTouchStart, o), i[t](u.touchEvents.move, u.onTouchMove, e), i[t](u.touchEvents.end, u.onTouchEnd, o)), (r.simulateTouch && !u.device.ios && !u.device.android || r.simulateTouch && !u.support.touch && u.device.ios) && (i[t]("mousedown", u.onTouchStart, !1), document[t]("mousemove", u.onTouchMove, e), document[t]("mouseup", u.onTouchEnd, !1)));
                    window[t]("resize", u.onResize);
                    u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.nextButton[f]("click", u.onClickNext), u.params.a11y && u.a11y && u.nextButton[f]("keydown", u.a11y.onEnterKey));
                    u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.prevButton[f]("click", u.onClickPrev), u.params.a11y && u.a11y && u.prevButton[f]("keydown", u.a11y.onEnterKey));
                    u.params.pagination && u.params.paginationClickable && (u.paginationContainer[f]("click", "." + u.params.bulletClass, u.onClickIndex), u.params.a11y && u.a11y && u.paginationContainer[f]("keydown", "." + u.params.bulletClass, u.a11y.onEnterKey));
                    (u.params.preventClicks || u.params.preventClicksPropagation) && i[t]("click", u.preventClicks, !0) };
                u.attachEvents = function() { u.initEvents() };
                u.detachEvents = function() { u.initEvents(!0) };
                u.allowClick = !0;
                u.preventClicks = function(n) { u.allowClick || (u.params.preventClicks && n.preventDefault(), u.params.preventClicksPropagation && u.animating && (n.stopPropagation(), n.stopImmediatePropagation())) };
                u.onClickNext = function(n) { n.preventDefault();
                    u.isEnd && !u.params.loop || u.slideNext() };
                u.onClickPrev = function(n) { n.preventDefault();
                    u.isBeginning && !u.params.loop || u.slidePrev() };
                u.onClickIndex = function(t) { t.preventDefault(); var i = n(this).index() * u.params.slidesPerGroup;
                    u.params.loop && (i += u.loopedSlides);
                    u.slideTo(i) };
                u.updateClickedSlide = function(t) { var r = ut(t, "." + u.params.slideClass),
                        s = !1,
                        f, o, i, e; if (r)
                        for (f = 0; f < u.slides.length; f++) u.slides[f] === r && (s = !0); if (!r || !s) return u.clickedSlide = void 0, void(u.clickedIndex = void 0); if (u.clickedSlide = r, u.clickedIndex = n(r).index(), u.params.slideToClickedSlide && void 0 !== u.clickedIndex && u.clickedIndex !== u.activeIndex)
                        if (i = u.clickedIndex, e = "auto" === u.params.slidesPerView ? u.currentSlidesPerView() : u.params.slidesPerView, u.params.loop) { if (u.animating) return;
                            o = parseInt(n(u.clickedSlide).attr("data-swiper-slide-index"), 10);
                            u.params.centeredSlides ? i < u.loopedSlides - e / 2 || i > u.slides.length - u.loopedSlides + e / 2 ? (u.fixLoop(), i = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + u.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() { u.slideTo(i) }, 0)) : u.slideTo(i) : i > u.slides.length - e ? (u.fixLoop(), i = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + u.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() { u.slideTo(i) }, 0)) : u.slideTo(i) } else u.slideTo(i) }; var h, c, k, d, a, f, o, g, p, nt, ht = "input, select, textarea, button, video",
                    ct = Date.now(),
                    l = [];
                u.animating = !1;
                u.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };
                u.onTouchStart = function(t) { var i, f, r; if (t.originalEvent && (t = t.originalEvent), (tt = "touchstart" === t.type) || !("which" in t) || 3 !== t.which) { if (u.params.noSwiping && ut(t, "." + u.params.noSwipingClass)) return void(u.allowClick = !0);
                        (!u.params.swipeHandler || ut(t, u.params.swipeHandler)) && (i = u.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, f = u.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY, u.device.ios && u.params.iOSEdgeSwipeDetection && i <= u.params.iOSEdgeSwipeThreshold || ((h = !0, c = !1, k = !0, a = void 0, it = void 0, u.touches.startX = i, u.touches.startY = f, d = Date.now(), u.allowClick = !0, u.updateContainerSize(), u.swipeDirection = void 0, u.params.threshold > 0 && (g = !1), "touchstart" !== t.type) && (r = !0, n(t.target).is(ht) && (r = !1), document.activeElement && n(document.activeElement).is(ht) && document.activeElement.blur(), r && t.preventDefault()), u.emit("onTouchStart", u, t))) } };
                u.onTouchMove = function(t) { var s, i, e; if (t.originalEvent && (t = t.originalEvent), !tt || "mousemove" !== t.type) { if (t.preventedByNestedSwiper) return u.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(u.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY); if (u.params.onlyExternal) return u.allowClick = !1, void(h && (u.touches.startX = u.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, u.touches.startY = u.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, d = Date.now())); if (tt && u.params.touchReleaseOnEdges && !u.params.loop)
                            if (u.isHorizontal()) { if (u.touches.currentX < u.touches.startX && u.translate <= u.maxTranslate() || u.touches.currentX > u.touches.startX && u.translate >= u.minTranslate()) return } else if (u.touches.currentY < u.touches.startY && u.translate <= u.maxTranslate() || u.touches.currentY > u.touches.startY && u.translate >= u.minTranslate()) return; if (tt && document.activeElement && t.target === document.activeElement && n(t.target).is(ht)) return c = !0, void(u.allowClick = !1); if ((k && u.emit("onTouchMove", u, t), !(t.targetTouches && t.targetTouches.length > 1)) && ((u.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, u.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, void 0 === a) && (u.isHorizontal() && u.touches.currentY === u.touches.startY || !u.isHorizontal() && u.touches.currentX === u.touches.startX ? a = !1 : (s = 180 * Math.atan2(Math.abs(u.touches.currentY - u.touches.startY), Math.abs(u.touches.currentX - u.touches.startX)) / Math.PI, a = u.isHorizontal() ? s > u.params.touchAngle : 90 - s > u.params.touchAngle)), a && u.emit("onTouchMoveOpposite", u, t), void 0 === it && (u.touches.currentX === u.touches.startX && u.touches.currentY === u.touches.startY || (it = !0)), h)) { if (a) return void(h = !1); if (it) { if (u.allowClick = !1, u.emit("onSliderMove", u, t), t.preventDefault(), u.params.touchMoveStopPropagation && !u.params.nested && t.stopPropagation(), c || (r.loop && u.fixLoop(), o = u.getWrapperTranslate(), u.setWrapperTransition(0), u.animating && u.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), u.params.autoplay && u.autoplaying && (u.params.autoplayDisableOnInteraction ? u.stopAutoplay() : u.pauseAutoplay()), nt = !1, !u.params.grabCursor || u.params.allowSwipeToNext !== !0 && u.params.allowSwipeToPrev !== !0 || u.setGrabCursor(!0)), c = !0, i = u.touches.diff = u.isHorizontal() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY, i *= u.params.touchRatio, u.rtl && (i = -i), u.swipeDirection = i > 0 ? "prev" : "next", f = i + o, e = !0, i > 0 && f > u.minTranslate() ? (e = !1, u.params.resistance && (f = u.minTranslate() - 1 + Math.pow(-u.minTranslate() + o + i, u.params.resistanceRatio))) : i < 0 && f < u.maxTranslate() && (e = !1, u.params.resistance && (f = u.maxTranslate() + 1 - Math.pow(u.maxTranslate() - o - i, u.params.resistanceRatio))), e && (t.preventedByNestedSwiper = !0), !u.params.allowSwipeToNext && "next" === u.swipeDirection && f < o && (f = o), !u.params.allowSwipeToPrev && "prev" === u.swipeDirection && f > o && (f = o), u.params.threshold > 0) { if (!(Math.abs(i) > u.params.threshold || g)) return void(f = o); if (!g) return g = !0, u.touches.startX = u.touches.currentX, u.touches.startY = u.touches.currentY, f = o, void(u.touches.diff = u.isHorizontal() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY) } u.params.followFinger && ((u.params.freeMode || u.params.watchSlidesProgress) && u.updateActiveIndex(), u.params.freeMode && (0 === l.length && l.push({ position: u.touches[u.isHorizontal() ? "startX" : "startY"], time: d }), l.push({ position: u.touches[u.isHorizontal() ? "currentX" : "currentY"], time: (new window.Date).getTime() })), u.updateProgress(f), u.setWrapperTranslate(f)) } } } };
                u.onTouchEnd = function(t) { var b, v, s, tt, it, y, w, a, r, e, rt, ft; if (t.originalEvent && (t = t.originalEvent), k && u.emit("onTouchEnd", u, t), k = !1, h) { if (u.params.grabCursor && c && h && (u.params.allowSwipeToNext === !0 || u.params.allowSwipeToPrev === !0) && u.setGrabCursor(!1), b = Date.now(), v = b - d, u.allowClick && (u.updateClickedSlide(t), u.emit("onTap", u, t), v < 300 && b - ct > 300 && (p && clearTimeout(p), p = setTimeout(function() { u && (u.params.paginationHide && u.paginationContainer.length > 0 && !n(t.target).hasClass(u.params.bulletClass) && u.paginationContainer.toggleClass(u.params.paginationHiddenClass), u.emit("onClick", u, t)) }, 300)), v < 300 && b - ct < 300 && (p && clearTimeout(p), u.emit("onDoubleTap", u, t))), ct = Date.now(), setTimeout(function() { u && (u.allowClick = !0) }, 0), !h || !c || !u.swipeDirection || 0 === u.touches.diff || f === o) return void(h = c = !1); if (h = c = !1, s = u.params.followFinger ? u.rtl ? u.translate : -u.translate : -f, u.params.freeMode) { if (s < -u.minTranslate()) return void u.slideTo(u.activeIndex); if (s > -u.maxTranslate()) return void(u.slides.length < u.snapGrid.length ? u.slideTo(u.snapGrid.length - 1) : u.slideTo(u.slides.length - 1)); if (u.params.freeModeMomentum) { if (l.length > 1) { var ut = l.pop(),
                                        et = l.pop(),
                                        st = ut.position - et.position,
                                        ot = ut.time - et.time;
                                    u.velocity = st / ot;
                                    u.velocity = u.velocity / 2;
                                    Math.abs(u.velocity) < u.params.freeModeMinimumVelocity && (u.velocity = 0);
                                    (ot > 150 || (new window.Date).getTime() - ut.time > 300) && (u.velocity = 0) } else u.velocity = 0;
                                u.velocity = u.velocity * u.params.freeModeMomentumVelocityRatio;
                                l.length = 0; var g = 1e3 * u.params.freeModeMomentumRatio,
                                    ht = u.velocity * g,
                                    i = u.translate + ht; if (u.rtl && (i = -i), it = !1, y = 20 * Math.abs(u.velocity) * u.params.freeModeMomentumBounceRatio, i < u.maxTranslate()) u.params.freeModeMomentumBounce ? (i + u.maxTranslate() < -y && (i = u.maxTranslate() - y), tt = u.maxTranslate(), it = !0, nt = !0) : i = u.maxTranslate();
                                else if (i > u.minTranslate()) u.params.freeModeMomentumBounce ? (i - u.minTranslate() > y && (i = u.minTranslate() + y), tt = u.minTranslate(), it = !0, nt = !0) : i = u.minTranslate();
                                else if (u.params.freeModeSticky) { for (a = 0, a = 0; a < u.snapGrid.length; a += 1)
                                        if (u.snapGrid[a] > -i) { w = a; break } i = Math.abs(u.snapGrid[w] - i) < Math.abs(u.snapGrid[w - 1] - i) || "next" === u.swipeDirection ? u.snapGrid[w] : u.snapGrid[w - 1];
                                    u.rtl || (i = -i) } if (0 !== u.velocity) g = u.rtl ? Math.abs((-i - u.translate) / u.velocity) : Math.abs((i - u.translate) / u.velocity);
                                else if (u.params.freeModeSticky) return void u.slideReset();
                                u.params.freeModeMomentumBounce && it ? (u.updateProgress(tt), u.setWrapperTransition(g), u.setWrapperTranslate(i), u.onTransitionStart(), u.animating = !0, u.wrapper.transitionEnd(function() { u && nt && (u.emit("onMomentumBounce", u), u.setWrapperTransition(u.params.speed), u.setWrapperTranslate(tt), u.wrapper.transitionEnd(function() { u && u.onTransitionEnd() })) })) : u.velocity ? (u.updateProgress(i), u.setWrapperTransition(g), u.setWrapperTranslate(i), u.onTransitionStart(), u.animating || (u.animating = !0, u.wrapper.transitionEnd(function() { u && u.onTransitionEnd() }))) : u.updateProgress(i);
                                u.updateActiveIndex() } return void((!u.params.freeModeMomentum || v >= u.params.longSwipesMs) && (u.updateProgress(), u.updateActiveIndex())) } for (e = 0, rt = u.slidesSizesGrid[0], r = 0; r < u.slidesGrid.length; r += u.params.slidesPerGroup) void 0 !== u.slidesGrid[r + u.params.slidesPerGroup] ? s >= u.slidesGrid[r] && s < u.slidesGrid[r + u.params.slidesPerGroup] && (e = r, rt = u.slidesGrid[r + u.params.slidesPerGroup] - u.slidesGrid[r]) : s >= u.slidesGrid[r] && (e = r, rt = u.slidesGrid[u.slidesGrid.length - 1] - u.slidesGrid[u.slidesGrid.length - 2]); if (ft = (s - u.slidesGrid[e]) / rt, v > u.params.longSwipesMs) { if (!u.params.longSwipes) return void u.slideTo(u.activeIndex); "next" === u.swipeDirection && (ft >= u.params.longSwipesRatio ? u.slideTo(e + u.params.slidesPerGroup) : u.slideTo(e)); "prev" === u.swipeDirection && (ft > 1 - u.params.longSwipesRatio ? u.slideTo(e + u.params.slidesPerGroup) : u.slideTo(e)) } else { if (!u.params.shortSwipes) return void u.slideTo(u.activeIndex); "next" === u.swipeDirection && u.slideTo(e + u.params.slidesPerGroup); "prev" === u.swipeDirection && u.slideTo(e) } } };
                u._slideTo = function(n, t) { return u.slideTo(n, t, !0, !0) };
                u.slideTo = function(n, t, i, r) { var f, e; if (void 0 === i && (i = !0), void 0 === n && (n = 0), n < 0 && (n = 0), u.snapIndex = Math.floor(n / u.params.slidesPerGroup), u.snapIndex >= u.snapGrid.length && (u.snapIndex = u.snapGrid.length - 1), f = -u.snapGrid[u.snapIndex], u.params.autoplay && u.autoplaying && (r || !u.params.autoplayDisableOnInteraction ? u.pauseAutoplay(t) : u.stopAutoplay()), u.updateProgress(f), u.params.normalizeSlideIndex)
                        for (e = 0; e < u.slidesGrid.length; e++) - Math.floor(100 * f) >= Math.floor(100 * u.slidesGrid[e]) && (n = e); return !(!u.params.allowSwipeToNext && f < u.translate && f < u.minTranslate()) && !(!u.params.allowSwipeToPrev && f > u.translate && f > u.maxTranslate() && (u.activeIndex || 0) !== n) && (void 0 === t && (t = u.params.speed), u.previousIndex = u.activeIndex || 0, u.activeIndex = n, u.updateRealIndex(), u.rtl && -f === u.translate || !u.rtl && f === u.translate ? (u.params.autoHeight && u.updateAutoHeight(), u.updateClasses(), "slide" !== u.params.effect && u.setWrapperTranslate(f), !1) : (u.updateClasses(), u.onTransitionStart(i), 0 === t || u.browser.lteIE9 ? (u.setWrapperTranslate(f), u.setWrapperTransition(0), u.onTransitionEnd(i)) : (u.setWrapperTranslate(f), u.setWrapperTransition(t), u.animating || (u.animating = !0, u.wrapper.transitionEnd(function() { u && u.onTransitionEnd(i) }))), !0)) };
                u.onTransitionStart = function(n) { void 0 === n && (n = !0);
                    u.params.autoHeight && u.updateAutoHeight();
                    u.lazy && u.lazy.onTransitionStart();
                    n && (u.emit("onTransitionStart", u), u.activeIndex !== u.previousIndex && (u.emit("onSlideChangeStart", u), u.activeIndex > u.previousIndex ? u.emit("onSlideNextStart", u) : u.emit("onSlidePrevStart", u))) };
                u.onTransitionEnd = function(n) { u.animating = !1;
                    u.setWrapperTransition(0);
                    void 0 === n && (n = !0);
                    u.lazy && u.lazy.onTransitionEnd();
                    n && (u.emit("onTransitionEnd", u), u.activeIndex !== u.previousIndex && (u.emit("onSlideChangeEnd", u), u.activeIndex > u.previousIndex ? u.emit("onSlideNextEnd", u) : u.emit("onSlidePrevEnd", u)));
                    u.params.history && u.history && u.history.setHistory(u.params.history, u.activeIndex);
                    u.params.hashnav && u.hashnav && u.hashnav.setHash() };
                u.slideNext = function(n, t, i) { return u.params.loop ? u.animating ? !1 : (u.fixLoop(), u.container[0].clientLeft, u.slideTo(u.activeIndex + u.params.slidesPerGroup, t, n, i)) : u.slideTo(u.activeIndex + u.params.slidesPerGroup, t, n, i) };
                u._slideNext = function(n) { return u.slideNext(!0, n, !0) };
                u.slidePrev = function(n, t, i) { return u.params.loop ? u.animating ? !1 : (u.fixLoop(), u.container[0].clientLeft, u.slideTo(u.activeIndex - 1, t, n, i)) : u.slideTo(u.activeIndex - 1, t, n, i) };
                u._slidePrev = function(n) { return u.slidePrev(!0, n, !0) };
                u.slideReset = function(n, t) { return u.slideTo(u.activeIndex, t, n) };
                u.disableTouchControl = function() { return u.params.onlyExternal = !0, !0 };
                u.enableTouchControl = function() { return u.params.onlyExternal = !1, !0 };
                u.setWrapperTransition = function(n, t) { u.wrapper.transition(n); "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTransition(n);
                    u.params.parallax && u.parallax && u.parallax.setTransition(n);
                    u.params.scrollbar && u.scrollbar && u.scrollbar.setTransition(n);
                    u.params.control && u.controller && u.controller.setTransition(n, t);
                    u.emit("onSetTransition", u, n) };
                u.setWrapperTranslate = function(n, t, i) { var r = 0,
                        f = 0,
                        o, e;
                    u.isHorizontal() ? r = u.rtl ? -n : n : f = n;
                    u.params.roundLengths && (r = w(r), f = w(f));
                    u.params.virtualTranslate || (u.support.transforms3d ? u.wrapper.transform("translate3d(" + r + "px, " + f + "px, 0px)") : u.wrapper.transform("translate(" + r + "px, " + f + "px)"));
                    u.translate = u.isHorizontal() ? r : f;
                    e = u.maxTranslate() - u.minTranslate();
                    o = 0 === e ? 0 : (n - u.minTranslate()) / e;
                    o !== u.progress && u.updateProgress(n);
                    t && u.updateActiveIndex(); "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTranslate(u.translate);
                    u.params.parallax && u.parallax && u.parallax.setTranslate(u.translate);
                    u.params.scrollbar && u.scrollbar && u.scrollbar.setTranslate(u.translate);
                    u.params.control && u.controller && u.controller.setTranslate(u.translate, i);
                    u.emit("onSetTranslate", u, u.translate) };
                u.getTranslate = function(n, t) { var f, i, r, e; return void 0 === t && (t = "x"), u.params.virtualTranslate ? u.rtl ? -u.translate : u.translate : (r = window.getComputedStyle(n, null), window.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function(n) { return n.replace(",", ".") }).join(", ")), e = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (e = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), f = e.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? e.m41 : 16 === f.length ? parseFloat(f[12]) : parseFloat(f[4])), "y" === t && (i = window.WebKitCSSMatrix ? e.m42 : 16 === f.length ? parseFloat(f[13]) : parseFloat(f[5])), u.rtl && i && (i = -i), i || 0) };
                u.getWrapperTranslate = function(n) { return void 0 === n && (n = u.isHorizontal() ? "x" : "y"), u.getTranslate(u.wrapper[0], n) };
                u.observers = [];
                u.initObservers = function() { if (u.params.observeParents)
                        for (var t = u.container.parents(), n = 0; n < t.length; n++) ft(t[n]);
                    ft(u.container[0], { childList: !1 });
                    ft(u.wrapper[0], { attributes: !1 }) };
                u.disconnectObservers = function() { for (var n = 0; n < u.observers.length; n++) u.observers[n].disconnect();
                    u.observers = [] };
                u.createLoop = function() { var i, t, r, f; for (u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove(), i = u.wrapper.children("." + u.params.slideClass), "auto" !== u.params.slidesPerView || u.params.loopedSlides || (u.params.loopedSlides = i.length), u.loopedSlides = parseInt(u.params.loopedSlides || u.params.slidesPerView, 10), u.loopedSlides = u.loopedSlides + u.params.loopAdditionalSlides, u.loopedSlides > i.length && (u.loopedSlides = i.length), r = [], f = [], i.each(function(t, e) { var o = n(this);
                            t < u.loopedSlides && f.push(e);
                            t < i.length && t >= i.length - u.loopedSlides && r.push(e);
                            o.attr("data-swiper-slide-index", t) }), t = 0; t < f.length; t++) u.wrapper.append(n(f[t].cloneNode(!0)).addClass(u.params.slideDuplicateClass)); for (t = r.length - 1; t >= 0; t--) u.wrapper.prepend(n(r[t].cloneNode(!0)).addClass(u.params.slideDuplicateClass)) };
                u.destroyLoop = function() { u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove();
                    u.slides.removeAttr("data-swiper-slide-index") };
                u.reLoop = function(n) { var t = u.activeIndex - u.loopedSlides;
                    u.destroyLoop();
                    u.createLoop();
                    u.updateSlidesSize();
                    n && u.slideTo(t + u.loopedSlides, 0, !1) };
                u.fixLoop = function() { var n;
                    u.activeIndex < u.loopedSlides ? (n = u.slides.length - 3 * u.loopedSlides + u.activeIndex, n += u.loopedSlides, u.slideTo(n, 0, !1, !0)) : ("auto" === u.params.slidesPerView && u.activeIndex >= 2 * u.loopedSlides || u.activeIndex > u.slides.length - 2 * u.params.slidesPerView) && (n = -u.slides.length + u.activeIndex + u.loopedSlides, n += u.loopedSlides, u.slideTo(n, 0, !1, !0)) };
                u.appendSlide = function(n) { if (u.params.loop && u.destroyLoop(), "object" == typeof n && n.length)
                        for (var t = 0; t < n.length; t++) n[t] && u.wrapper.append(n[t]);
                    else u.wrapper.append(n);
                    u.params.loop && u.createLoop();
                    u.params.observer && u.support.observer || u.update(!0) };
                u.prependSlide = function(n) { var i, t; if (u.params.loop && u.destroyLoop(), i = u.activeIndex + 1, "object" == typeof n && n.length) { for (t = 0; t < n.length; t++) n[t] && u.wrapper.prepend(n[t]);
                        i = u.activeIndex + n.length } else u.wrapper.prepend(n);
                    u.params.loop && u.createLoop();
                    u.params.observer && u.support.observer || u.update(!0);
                    u.slideTo(i, 0, !1) };
                u.removeSlide = function(n) { var i, t, r; if (u.params.loop && (u.destroyLoop(), u.slides = u.wrapper.children("." + u.params.slideClass)), t = u.activeIndex, "object" == typeof n && n.length) { for (r = 0; r < n.length; r++) i = n[r], u.slides[i] && u.slides.eq(i).remove(), i < t && t--;
                        t = Math.max(t, 0) } else i = n, u.slides[i] && u.slides.eq(i).remove(), i < t && t--, t = Math.max(t, 0);
                    u.params.loop && u.createLoop();
                    u.params.observer && u.support.observer || u.update(!0);
                    u.params.loop ? u.slideTo(t + u.loopedSlides, 0, !1) : u.slideTo(t, 0, !1) };
                u.removeAllSlides = function() { for (var t = [], n = 0; n < u.slides.length; n++) t.push(n);
                    u.removeSlide(t) };
                u.effects = { fade: { setTranslate: function() { for (var r, f, n = 0; n < u.slides.length; n++) { var t = u.slides.eq(n),
                                    e = t[0].swiperSlideOffset,
                                    i = -e;
                                u.params.virtualTranslate || (i -= u.translate);
                                r = 0;
                                u.isHorizontal() || (r = i, i = 0);
                                f = u.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                t.css({ opacity: f }).transform("translate3d(" + i + "px, " + r + "px, 0px)") } }, setTransition: function(n) { if (u.slides.transition(n), u.params.virtualTranslate && 0 !== n) { var t = !1;
                                u.slides.transitionEnd(function() { if (!t && u) { t = !0;
                                        u.animating = !1; for (var i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < i.length; n++) u.wrapper.trigger(i[n]) } }) } } }, flip: { setTranslate: function() { for (var t, i, r, f, o = 0; o < u.slides.length; o++) { t = u.slides.eq(o);
                                i = t[0].progress;
                                u.params.flip.limitRotation && (i = Math.max(Math.min(t[0].progress, 1), -1)); var l = t[0].swiperSlideOffset,
                                    a = -180 * i,
                                    e = a,
                                    h = 0,
                                    s = -l,
                                    c = 0;
                                (u.isHorizontal() ? u.rtl && (e = -e) : (c = s, s = 0, h = -e, e = 0), t[0].style.zIndex = -Math.abs(Math.round(i)) + u.slides.length, u.params.flip.slideShadows) && (r = u.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"), f = u.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom"), 0 === r.length && (r = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"><\/div>'), t.append(r)), 0 === f.length && (f = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"><\/div>'), t.append(f)), r.length && (r[0].style.opacity = Math.max(-i, 0)), f.length && (f[0].style.opacity = Math.max(i, 0)));
                                t.transform("translate3d(" + s + "px, " + c + "px, 0px) rotateX(" + h + "deg) rotateY(" + e + "deg)") } }, setTransition: function(t) { if (u.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), u.params.virtualTranslate && 0 !== t) { var i = !1;
                                u.slides.eq(u.activeIndex).transitionEnd(function() { if (!i && u && n(this).hasClass(u.params.slideActiveClass)) { i = !0;
                                        u.animating = !1; for (var r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < r.length; t++) u.wrapper.trigger(r[t]) } }) } } }, cube: { setTranslate: function() { var t, e = 0,
                                i, y, h, c, b; for (u.params.cube.shadow && (u.isHorizontal() ? (t = u.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = n('<div class="swiper-cube-shadow"><\/div>'), u.wrapper.append(t)), t.css({ height: u.width + "px" })) : (t = u.container.find(".swiper-cube-shadow"), 0 === t.length && (t = n('<div class="swiper-cube-shadow"><\/div>'), u.container.append(t)))), i = 0; i < u.slides.length; i++) { var f = u.slides.eq(i),
                                    o = 90 * i,
                                    l = Math.floor(o / 360);
                                u.rtl && (o = -o, l = Math.floor(-o / 360)); var s = Math.max(Math.min(f[0].progress, 1), -1),
                                    r = 0,
                                    v = 0,
                                    a = 0;
                                i % 4 == 0 ? (r = 4 * -l * u.size, a = 0) : (i - 1) % 4 == 0 ? (r = 0, a = 4 * -l * u.size) : (i - 2) % 4 == 0 ? (r = u.size + 4 * l * u.size, a = u.size) : (i - 3) % 4 == 0 && (r = -u.size, a = 3 * u.size + 4 * u.size * l);
                                u.rtl && (r = -r);
                                u.isHorizontal() || (v = r, r = 0);
                                y = "rotateX(" + (u.isHorizontal() ? 0 : -o) + "deg) rotateY(" + (u.isHorizontal() ? o : 0) + "deg) translate3d(" + r + "px, " + v + "px, " + a + "px)";
                                (s <= 1 && s > -1 && (e = 90 * i + 90 * s, u.rtl && (e = 90 * -i - 90 * s)), f.transform(y), u.params.cube.slideShadows) && (h = u.isHorizontal() ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"), c = u.isHorizontal() ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom"), 0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"><\/div>'), f.append(h)), 0 === c.length && (c = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"><\/div>'), f.append(c)), h.length && (h[0].style.opacity = Math.max(-s, 0)), c.length && (c[0].style.opacity = Math.max(s, 0))) } if (u.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + u.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + u.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + u.size / 2 + "px", "transform-origin": "50% 50% -" + u.size / 2 + "px" }), u.params.cube.shadow)
                                if (u.isHorizontal()) t.transform("translate3d(0px, " + (u.width / 2 + u.params.cube.shadowOffset) + "px, " + -u.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.params.cube.shadowScale + ")");
                                else { var p = Math.abs(e) - 90 * Math.floor(Math.abs(e) / 90),
                                        k = 1.5 - (Math.sin(2 * p * Math.PI / 360) / 2 + Math.cos(2 * p * Math.PI / 360) / 2),
                                        d = u.params.cube.shadowScale,
                                        w = u.params.cube.shadowScale / k,
                                        g = u.params.cube.shadowOffset;
                                    t.transform("scale3d(" + d + ", 1, " + w + ") translate3d(0px, " + (u.height / 2 + g) + "px, " + -u.height / 2 / w + "px) rotateX(-90deg)") } b = u.isSafari || u.isUiWebView ? -u.size / 2 : 0;
                            u.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (u.isHorizontal() ? 0 : e) + "deg) rotateY(" + (u.isHorizontal() ? -e : 0) + "deg)") }, setTransition: function(n) { u.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n);
                            u.params.cube.shadow && !u.isHorizontal() && u.container.find(".swiper-cube-shadow").transition(n) } }, coverflow: { setTranslate: function() { for (var w, r, f, a = u.translate, v = u.isHorizontal() ? -a + u.width / 2 : -a + u.height / 2, y = u.isHorizontal() ? u.params.coverflow.rotate : -u.params.coverflow.rotate, b = u.params.coverflow.depth, e = 0, k = u.slides.length; e < k; e++) { var i = u.slides.eq(e),
                                    p = u.slidesSizesGrid[e],
                                    d = i[0].swiperSlideOffset,
                                    t = (v - d - p / 2) / p * u.params.coverflow.modifier,
                                    o = u.isHorizontal() ? y * t : 0,
                                    s = u.isHorizontal() ? 0 : y * t,
                                    h = -b * Math.abs(t),
                                    c = u.isHorizontal() ? 0 : u.params.coverflow.stretch * t,
                                    l = u.isHorizontal() ? u.params.coverflow.stretch * t : 0;
                                Math.abs(l) < .001 && (l = 0);
                                Math.abs(c) < .001 && (c = 0);
                                Math.abs(h) < .001 && (h = 0);
                                Math.abs(o) < .001 && (o = 0);
                                Math.abs(s) < .001 && (s = 0);
                                w = "translate3d(" + l + "px," + c + "px," + h + "px)  rotateX(" + s + "deg) rotateY(" + o + "deg)";
                                (i.transform(w), i[0].style.zIndex = 1 - Math.abs(Math.round(t)), u.params.coverflow.slideShadows) && (r = u.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"), f = u.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom"), 0 === r.length && (r = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"><\/div>'), i.append(r)), 0 === f.length && (f = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"><\/div>'), i.append(f)), r.length && (r[0].style.opacity = t > 0 ? t : 0), f.length && (f[0].style.opacity = -t > 0 ? -t : 0)) } u.browser.ie && (u.wrapper[0].style.perspectiveOrigin = v + "px 50%") }, setTransition: function(n) { u.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n) } } };
                u.lazy = { initialImageLoaded: !1, loadImageInSlide: function(t, i) { if (void 0 !== t && (void 0 === i && (i = !0), 0 !== u.slides.length)) { var r = u.slides.eq(t),
                                f = r.find("." + u.params.lazyLoadingClass + ":not(." + u.params.lazyStatusLoadedClass + "):not(." + u.params.lazyStatusLoadingClass + ")");!r.hasClass(u.params.lazyLoadingClass) || r.hasClass(u.params.lazyStatusLoadedClass) || r.hasClass(u.params.lazyStatusLoadingClass) || (f = f.add(r[0]));
                            0 !== f.length && f.each(function() { var t = n(this);
                                t.addClass(u.params.lazyStatusLoadingClass); var f = t.attr("data-background"),
                                    e = t.attr("data-src"),
                                    o = t.attr("data-srcset"),
                                    s = t.attr("data-sizes");
                                u.loadImage(t[0], e || f, o, s, !1, function() { var n, h, c;
                                    void 0 !== u && null !== u && u && ((f ? (t.css("background-image", 'url("' + f + '")'), t.removeAttr("data-background")) : (o && (t.attr("srcset", o), t.removeAttr("data-srcset")), s && (t.attr("sizes", s), t.removeAttr("data-sizes")), e && (t.attr("src", e), t.removeAttr("data-src"))), t.addClass(u.params.lazyStatusLoadedClass).removeClass(u.params.lazyStatusLoadingClass), r.find("." + u.params.lazyPreloaderClass + ", ." + u.params.preloaderClass).remove(), u.params.loop && i) && (n = r.attr("data-swiper-slide-index"), r.hasClass(u.params.slideDuplicateClass) ? (h = u.wrapper.children('[data-swiper-slide-index="' + n + '"]:not(.' + u.params.slideDuplicateClass + ")"), u.lazy.loadImageInSlide(h.index(), !1)) : (c = u.wrapper.children("." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]'), u.lazy.loadImageInSlide(c.index(), !1))), u.emit("onLazyImageReady", u, r[0], t[0])) });
                                u.emit("onLazyImageLoad", u, r[0], t[0]) }) } }, load: function() { var t, i = u.params.slidesPerView,
                            f, e; if ("auto" === i && (i = 0), u.lazy.initialImageLoaded || (u.lazy.initialImageLoaded = !0), u.params.watchSlidesVisibility) u.wrapper.children("." + u.params.slideVisibleClass).each(function() { u.lazy.loadImageInSlide(n(this).index()) });
                        else if (i > 1)
                            for (t = u.activeIndex; t < u.activeIndex + i; t++) u.slides[t] && u.lazy.loadImageInSlide(t);
                        else u.lazy.loadImageInSlide(u.activeIndex); if (u.params.lazyLoadingInPrevNext)
                            if (i > 1 || u.params.lazyLoadingInPrevNextAmount && u.params.lazyLoadingInPrevNextAmount > 1) { var o = u.params.lazyLoadingInPrevNextAmount,
                                    r = i,
                                    s = Math.min(u.activeIndex + r + Math.max(o, r), u.slides.length),
                                    h = Math.max(u.activeIndex - Math.max(r, o), 0); for (t = u.activeIndex + i; t < s; t++) u.slides[t] && u.lazy.loadImageInSlide(t); for (t = h; t < u.activeIndex; t++) u.slides[t] && u.lazy.loadImageInSlide(t) } else f = u.wrapper.children("." + u.params.slideNextClass), f.length > 0 && u.lazy.loadImageInSlide(f.index()), e = u.wrapper.children("." + u.params.slidePrevClass), e.length > 0 && u.lazy.loadImageInSlide(e.index()) }, onTransitionStart: function() { u.params.lazyLoading && (u.params.lazyLoadingOnTransitionStart || !u.params.lazyLoadingOnTransitionStart && !u.lazy.initialImageLoaded) && u.lazy.load() }, onTransitionEnd: function() { u.params.lazyLoading && !u.params.lazyLoadingOnTransitionStart && u.lazy.load() } };
                u.scrollbar = { isTouched: !1, setDragPosition: function(n) { var i = u.scrollbar,
                            e = u.isHorizontal() ? "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX || n.clientX : "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY || n.clientY,
                            t = e - i.track.offset()[u.isHorizontal() ? "left" : "top"] - i.dragSize / 2,
                            r = -u.minTranslate() * i.moveDivider,
                            f = -u.maxTranslate() * i.moveDivider;
                        t < r ? t = r : t > f && (t = f);
                        t = -t / i.moveDivider;
                        u.updateProgress(t);
                        u.setWrapperTranslate(t, !0) }, dragStart: function(n) { var t = u.scrollbar;
                        t.isTouched = !0;
                        n.preventDefault();
                        n.stopPropagation();
                        t.setDragPosition(n);
                        clearTimeout(t.dragTimeout);
                        t.track.transition(0);
                        u.params.scrollbarHide && t.track.css("opacity", 1);
                        u.wrapper.transition(100);
                        t.drag.transition(100);
                        u.emit("onScrollbarDragStart", u) }, dragMove: function(n) { var t = u.scrollbar;
                        t.isTouched && (n.preventDefault ? n.preventDefault() : n.returnValue = !1, t.setDragPosition(n), u.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), u.emit("onScrollbarDragMove", u)) }, dragEnd: function() { var n = u.scrollbar;
                        n.isTouched && (n.isTouched = !1, u.params.scrollbarHide && (clearTimeout(n.dragTimeout), n.dragTimeout = setTimeout(function() { n.track.css("opacity", 0);
                            n.track.transition(400) }, 1e3)), u.emit("onScrollbarDragEnd", u), u.params.scrollbarSnapOnRelease && u.slideReset()) }, draggableEvents: function() { return u.params.simulateTouch !== !1 || u.support.touch ? u.touchEvents : u.touchEventsDesktop }(), enableDraggable: function() { var t = u.scrollbar,
                            i = u.support.touch ? t.track : document;
                        n(t.track).on(t.draggableEvents.start, t.dragStart);
                        n(i).on(t.draggableEvents.move, t.dragMove);
                        n(i).on(t.draggableEvents.end, t.dragEnd) }, disableDraggable: function() { var t = u.scrollbar,
                            i = u.support.touch ? t.track : document;
                        n(t.track).off(t.draggableEvents.start, t.dragStart);
                        n(i).off(t.draggableEvents.move, t.dragMove);
                        n(i).off(t.draggableEvents.end, t.dragEnd) }, set: function() { if (u.params.scrollbar) { var t = u.scrollbar;
                            t.track = n(u.params.scrollbar);
                            u.params.uniqueNavElements && "string" == typeof u.params.scrollbar && t.track.length > 1 && 1 === u.container.find(u.params.scrollbar).length && (t.track = u.container.find(u.params.scrollbar));
                            t.drag = t.track.find(".swiper-scrollbar-drag");
                            0 === t.drag.length && (t.drag = n('<div class="swiper-scrollbar-drag"><\/div>'), t.track.append(t.drag));
                            t.drag[0].style.width = "";
                            t.drag[0].style.height = "";
                            t.trackSize = u.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight;
                            t.divider = u.size / u.virtualSize;
                            t.moveDivider = t.divider * (t.trackSize / u.size);
                            t.dragSize = t.trackSize * t.divider;
                            u.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px";
                            t.track[0].style.display = t.divider >= 1 ? "none" : "";
                            u.params.scrollbarHide && (t.track[0].style.opacity = 0) } }, setTranslate: function() { if (u.params.scrollbar) { var t, n = u.scrollbar,
                                i = (u.translate, n.dragSize);
                            t = (n.trackSize - n.dragSize) * u.progress;
                            u.rtl && u.isHorizontal() ? (t = -t, t > 0 ? (i = n.dragSize - t, t = 0) : -t + n.dragSize > n.trackSize && (i = n.trackSize + t)) : t < 0 ? (i = n.dragSize + t, t = 0) : t + n.dragSize > n.trackSize && (i = n.trackSize - t);
                            u.isHorizontal() ? (u.support.transforms3d ? n.drag.transform("translate3d(" + t + "px, 0, 0)") : n.drag.transform("translateX(" + t + "px)"), n.drag[0].style.width = i + "px") : (u.support.transforms3d ? n.drag.transform("translate3d(0px, " + t + "px, 0)") : n.drag.transform("translateY(" + t + "px)"), n.drag[0].style.height = i + "px");
                            u.params.scrollbarHide && (clearTimeout(n.timeout), n.track[0].style.opacity = 1, n.timeout = setTimeout(function() { n.track[0].style.opacity = 0;
                                n.track.transition(400) }, 1e3)) } }, setTransition: function(n) { u.params.scrollbar && u.scrollbar.drag.transition(n) } };
                u.controller = { LinearSpline: function(n, t) { var u = function() { var n, t, i; return function(r, u) { for (t = -1, n = r.length; n - t > 1;) r[i = n + t >> 1] <= u ? t = i : n = i; return n } }(),
                            i, r;
                        this.x = n;
                        this.y = t;
                        this.lastIndex = n.length - 1;
                        this.x.length;
                        this.interpolate = function(n) { return n ? (r = u(this.x, n), i = r - 1, (n - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0 } }, getInterpolateFunction: function(n) { u.controller.spline || (u.controller.spline = u.params.loop ? new u.controller.LinearSpline(u.slidesGrid, n.slidesGrid) : new u.controller.LinearSpline(u.snapGrid, n.snapGrid)) }, setTranslate: function(n, i) {
                        function o(t) { n = t.rtl && "horizontal" === t.params.direction ? -u.translate : u.translate; "slide" === u.params.controlBy && (u.controller.getInterpolateFunction(t), f = -u.controller.spline.interpolate(-n));
                            f && "container" !== u.params.controlBy || (s = (t.maxTranslate() - t.minTranslate()) / (u.maxTranslate() - u.minTranslate()), f = (n - u.minTranslate()) * s + t.minTranslate());
                            u.params.controlInverse && (f = t.maxTranslate() - f);
                            t.updateProgress(f);
                            t.setWrapperTranslate(f, !1, u);
                            t.updateActiveIndex() } var s, f, r = u.params.control,
                            e; if (Array.isArray(r))
                            for (e = 0; e < r.length; e++) r[e] !== i && r[e] instanceof t && o(r[e]);
                        else r instanceof t && i !== r && o(r) }, setTransition: function(n, i) {
                        function e(t) { t.setWrapperTransition(n, u);
                            0 !== n && (t.onTransitionStart(), t.wrapper.transitionEnd(function() { r && (t.params.loop && "slide" === u.params.controlBy && t.fixLoop(), t.onTransitionEnd()) })) } var f, r = u.params.control; if (Array.isArray(r))
                            for (f = 0; f < r.length; f++) r[f] !== i && r[f] instanceof t && e(r[f]);
                        else r instanceof t && i !== r && e(r) } };
                u.hashnav = { onHashCange: function() { var n = document.location.hash.replace("#", "");
                        n !== u.slides.eq(u.activeIndex).attr("data-hash") && u.slideTo(u.wrapper.children("." + u.params.slideClass + '[data-hash="' + n + '"]').index()) }, attachEvents: function(t) { var i = t ? "off" : "on";
                        n(window)[i]("hashchange", u.hashnav.onHashCange) }, setHash: function() { if (u.hashnav.initialized && u.params.hashnav)
                            if (u.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + u.slides.eq(u.activeIndex).attr("data-hash") || "");
                            else { var n = u.slides.eq(u.activeIndex),
                                    t = n.attr("data-hash") || n.attr("data-history");
                                document.location.hash = t || "" } }, init: function() { var i, t, r, n, f, e; if (u.params.hashnav && !u.params.history) { if (u.hashnav.initialized = !0, i = document.location.hash.replace("#", ""), i)
                                for (t = 0, r = u.slides.length; t < r; t++) n = u.slides.eq(t), f = n.attr("data-hash") || n.attr("data-history"), f !== i || n.hasClass(u.params.slideDuplicateClass) || (e = n.index(), u.slideTo(e, 0, u.params.runCallbacksOnInit, !0));
                            u.params.hashnavWatchState && u.hashnav.attachEvents() } }, destroy: function() { u.params.hashnavWatchState && u.hashnav.attachEvents(!0) } };
                u.history = { init: function() { if (u.params.history) { if (!window.history || !window.history.pushState) return u.params.history = !1, void(u.params.hashnav = !0);
                            u.history.initialized = !0;
                            this.paths = this.getPathValues();
                            (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, u.params.runCallbacksOnInit), u.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState)) } }, setHistoryPopState: function() { u.history.paths = u.history.getPathValues();
                        u.history.scrollToSlide(u.params.speed, u.history.paths.value, !1) }, getPathValues: function() { var n = window.location.pathname.slice(1).split("/"),
                            t = n.length; return { key: n[t - 2], value: n[t - 1] } }, setHistory: function(n, t) { if (u.history.initialized && u.params.history) { var r = u.slides.eq(t),
                                i = this.slugify(r.attr("data-history"));
                            window.location.pathname.includes(n) || (i = n + "/" + i);
                            u.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i) } }, slugify: function(n) { return n.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "") }, scrollToSlide: function(n, t, i) { var r, e, f, o, s; if (t)
                            for (r = 0, e = u.slides.length; r < e; r++) f = u.slides.eq(r), o = this.slugify(f.attr("data-history")), o !== t || f.hasClass(u.params.slideDuplicateClass) || (s = f.index(), u.slideTo(s, n, i));
                        else u.slideTo(0, n, i) } };
                u.disableKeyboardControl = function() { u.params.keyboardControl = !1;
                    n(document).off("keydown", vt) };
                u.enableKeyboardControl = function() { u.params.keyboardControl = !0;
                    n(document).on("keydown", vt) };
                u.mousewheel = { event: !1, lastScrollTime: (new window.Date).getTime() };
                u.params.mousewheelControl && (u.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() { var n = "onwheel" in document,
                        t; return n || (t = document.createElement("div"), t.setAttribute("onwheel", "return;"), n = "function" == typeof t.onwheel), !n && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n }() ? "wheel" : "mousewheel");
                u.disableMousewheelControl = function() { if (!u.mousewheel.event) return !1; var t = u.container; return "container" !== u.params.mousewheelEventsTarged && (t = n(u.params.mousewheelEventsTarged)), t.off(u.mousewheel.event, yt), u.params.mousewheelControl = !1, !0 };
                u.enableMousewheelControl = function() { if (!u.mousewheel.event) return !1; var t = u.container; return "container" !== u.params.mousewheelEventsTarged && (t = n(u.params.mousewheelEventsTarged)), t.on(u.mousewheel.event, yt), u.params.mousewheelControl = !0, !0 };
                u.parallax = { setTranslate: function() { u.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() { pt(this, u.progress) });
                        u.slides.each(function() { var t = n(this);
                            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() { pt(this, Math.min(Math.max(t[0].progress, -1), 1)) }) }) }, setTransition: function(t) { void 0 === t && (t = u.params.speed);
                        u.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() { var i = n(this),
                                r = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                            0 === t && (r = 0);
                            i.transition(r) }) } };
                u.zoom = { scale: 1, currentScale: 1, isScaling: !1, gesture: { slide: void 0, slideWidth: void 0, slideHeight: void 0, image: void 0, imageWrap: void 0, zoomMax: u.params.zoomMax }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 }, getDistanceBetweenTouches: function(n) { if (n.targetTouches.length < 2) return 1; var t = n.targetTouches[0].pageX,
                            i = n.targetTouches[0].pageY,
                            r = n.targetTouches[1].pageX,
                            u = n.targetTouches[1].pageY; return Math.sqrt(Math.pow(r - t, 2) + Math.pow(u - i, 2)) }, onGestureStart: function(t) { var i = u.zoom; if (!u.support.gestures) { if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                            i.gesture.scaleStart = i.getDistanceBetweenTouches(t) } if (!(i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = n(this), 0 === i.gesture.slide.length && (i.gesture.slide = u.slides.eq(u.activeIndex)), i.gesture.image = i.gesture.slide.find("img, svg, canvas"), i.gesture.imageWrap = i.gesture.image.parent("." + u.params.zoomContainerClass), i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || u.params.zoomMax, 0 !== i.gesture.imageWrap.length))) return void(i.gesture.image = void 0);
                        i.gesture.image.transition(0);
                        i.isScaling = !0 }, onGestureChange: function(n) { var t = u.zoom; if (!u.support.gestures) { if ("touchmove" !== n.type || "touchmove" === n.type && n.targetTouches.length < 2) return;
                            t.gesture.scaleMove = t.getDistanceBetweenTouches(n) } t.gesture.image && 0 !== t.gesture.image.length && (t.scale = u.support.gestures ? n.scale * t.currentScale : t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < u.params.zoomMin && (t.scale = u.params.zoomMin + 1 - Math.pow(u.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")")) }, onGestureEnd: function(n) { var t = u.zoom;!u.support.gestures && ("touchend" !== n.type || "touchend" === n.type && n.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), u.params.zoomMin), t.gesture.image.transition(u.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0)) }, onTouchStart: function(n, t) { var i = n.zoom;
                        i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === n.device.os && t.preventDefault(), i.image.isTouched = !0, i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY)) }, onTouchMove: function(n) { var t = u.zoom,
                            i, r; if (t.gesture.image && 0 !== t.gesture.image.length && (u.allowClick = !1, t.image.isTouched && t.gesture.slide) && (t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = u.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = u.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0), u.rtl && (t.image.startX = -t.image.startX), u.rtl && (t.image.startY = -t.image.startY)), i = t.image.width * t.scale, r = t.image.height * t.scale, !(i < t.gesture.slideWidth && r < t.gesture.slideHeight))) { if ((t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - r / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX, t.image.touchesCurrent.y = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY, !t.image.isMoved && !t.isScaling) && (u.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x || !u.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y)) return void(t.image.isTouched = !1);
                            n.preventDefault();
                            n.stopPropagation();
                            t.image.isMoved = !0;
                            t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX;
                            t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY;
                            t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8));
                            t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8));
                            t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8));
                            t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8));
                            t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x);
                            t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y);
                            t.velocity.prevTime || (t.velocity.prevTime = Date.now());
                            t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2;
                            t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2;
                            Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0);
                            Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0);
                            t.velocity.prevPositionX = t.image.touchesCurrent.x;
                            t.velocity.prevPositionY = t.image.touchesCurrent.y;
                            t.velocity.prevTime = Date.now();
                            t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)") } }, onTouchEnd: function(n) { var t = n.zoom,
                            e, o, s; if (t.gesture.image && 0 !== t.gesture.image.length) { if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1, void(t.image.isMoved = !1);
                            t.image.isTouched = !1;
                            t.image.isMoved = !1; var i = 300,
                                r = 300,
                                h = t.velocity.x * i,
                                u = t.image.currentX + h,
                                c = t.velocity.y * r,
                                f = t.image.currentY + c;
                            0 !== t.velocity.x && (i = Math.abs((u - t.image.currentX) / t.velocity.x));
                            0 !== t.velocity.y && (r = Math.abs((f - t.image.currentY) / t.velocity.y));
                            e = Math.max(i, r);
                            t.image.currentX = u;
                            t.image.currentY = f;
                            o = t.image.width * t.scale;
                            s = t.image.height * t.scale;
                            t.image.minX = Math.min(t.gesture.slideWidth / 2 - o / 2, 0);
                            t.image.maxX = -t.image.minX;
                            t.image.minY = Math.min(t.gesture.slideHeight / 2 - s / 2, 0);
                            t.image.maxY = -t.image.minY;
                            t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX);
                            t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY);
                            t.gesture.imageWrap.transition(e).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)") } }, onTransitionEnd: function(n) { var t = n.zoom;
                        t.gesture.slide && n.previousIndex !== n.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1) }, toggleZoom: function(t, i) { var r = t.zoom,
                            s, h, y, p, w, b, u, f, k, d, g, nt, e, o, c, l, a, v;
                        (r.gesture.slide || (r.gesture.slide = t.clickedSlide ? n(t.clickedSlide) : t.slides.eq(t.activeIndex), r.gesture.image = r.gesture.slide.find("img, svg, canvas"), r.gesture.imageWrap = r.gesture.image.parent("." + t.params.zoomContainerClass)), r.gesture.image && 0 !== r.gesture.image.length) && (void 0 === r.image.touchesStart.x && i ? (s = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX, h = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (s = r.image.touchesStart.x, h = r.image.touchesStart.y), r.scale && 1 !== r.scale ? (r.scale = r.currentScale = 1, r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), r.gesture.slide = void 0) : (r.scale = r.currentScale = r.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, i ? (a = r.gesture.slide[0].offsetWidth, v = r.gesture.slide[0].offsetHeight, y = r.gesture.slide.offset().left, p = r.gesture.slide.offset().top, w = y + a / 2 - s, b = p + v / 2 - h, k = r.gesture.image[0].offsetWidth, d = r.gesture.image[0].offsetHeight, g = k * r.scale, nt = d * r.scale, e = Math.min(a / 2 - g / 2, 0), o = Math.min(v / 2 - nt / 2, 0), c = -e, l = -o, u = w * r.scale, f = b * r.scale, u < e && (u = e), u > c && (u = c), f < o && (f = o), f > l && (f = l)) : (u = 0, f = 0), r.gesture.imageWrap.transition(300).transform("translate3d(" + u + "px, " + f + "px,0)"), r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")"))) }, attachEvents: function(t) { var i = t ? "off" : "on",
                            r;
                        u.params.zoom && (r = (u.slides, !("touchstart" !== u.touchEvents.start || !u.support.passiveListener || !u.params.passiveListeners) && { passive: !0, capture: !1 }), u.support.gestures ? (u.slides[i]("gesturestart", u.zoom.onGestureStart, r), u.slides[i]("gesturechange", u.zoom.onGestureChange, r), u.slides[i]("gestureend", u.zoom.onGestureEnd, r)) : "touchstart" === u.touchEvents.start && (u.slides[i](u.touchEvents.start, u.zoom.onGestureStart, r), u.slides[i](u.touchEvents.move, u.zoom.onGestureChange, r), u.slides[i](u.touchEvents.end, u.zoom.onGestureEnd, r)), u[i]("touchStart", u.zoom.onTouchStart), u.slides.each(function(t, r) { n(r).find("." + u.params.zoomContainerClass).length > 0 && n(r)[i](u.touchEvents.move, u.zoom.onTouchMove) }), u[i]("touchEnd", u.zoom.onTouchEnd), u[i]("transitionEnd", u.zoom.onTransitionEnd), u.params.zoomToggle && u.on("doubleTap", u.zoom.toggleZoom)) }, init: function() { u.zoom.attachEvents() }, destroy: function() { u.zoom.attachEvents(!0) } };
                u._plugins = []; for (lt in u.plugins) at = u.plugins[lt](u, u.params[lt]), at && u._plugins.push(at); return u.callPlugins = function(n) { for (var t = 0; t < u._plugins.length; t++) n in u._plugins[t] && u._plugins[t][n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) }, u.emitterEventListeners = {}, u.emit = function(n) { u.params[n] && u.params[n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]); var t; if (u.emitterEventListeners[n])
                        for (t = 0; t < u.emitterEventListeners[n].length; t++) u.emitterEventListeners[n][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    u.callPlugins && u.callPlugins(n, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) }, u.on = function(n, t) { return n = et(n), u.emitterEventListeners[n] || (u.emitterEventListeners[n] = []), u.emitterEventListeners[n].push(t), u }, u.off = function(n, t) { var i; if (n = et(n), void 0 === t) return u.emitterEventListeners[n] = [], u; if (u.emitterEventListeners[n] && 0 !== u.emitterEventListeners[n].length) { for (i = 0; i < u.emitterEventListeners[n].length; i++) u.emitterEventListeners[n][i] === t && u.emitterEventListeners[n].splice(i, 1); return u } }, u.once = function(n, t) { n = et(n); var i = function() { t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                        u.off(n, i) }; return u.on(n, i), u }, u.a11y = { makeFocusable: function(n) { return n.attr("tabIndex", "0"), n }, addRole: function(n, t) { return n.attr("role", t), n }, addLabel: function(n, t) { return n.attr("aria-label", t), n }, disable: function(n) { return n.attr("aria-disabled", !0), n }, enable: function(n) { return n.attr("aria-disabled", !1), n }, onEnterKey: function(t) { 13 === t.keyCode && (n(t.target).is(u.params.nextButton) ? (u.onClickNext(t), u.isEnd ? u.a11y.notify(u.params.lastSlideMessage) : u.a11y.notify(u.params.nextSlideMessage)) : n(t.target).is(u.params.prevButton) && (u.onClickPrev(t), u.isBeginning ? u.a11y.notify(u.params.firstSlideMessage) : u.a11y.notify(u.params.prevSlideMessage)), n(t.target).is("." + u.params.bulletClass) && n(t.target)[0].click()) }, liveRegion: n('<span class="' + u.params.notificationClass + '" aria-live="assertive" aria-atomic="true"><\/span>'), notify: function(n) { var t = u.a11y.liveRegion;
                        0 !== t.length && (t.html(""), t.html(n)) }, init: function() { u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.a11y.makeFocusable(u.nextButton), u.a11y.addRole(u.nextButton, "button"), u.a11y.addLabel(u.nextButton, u.params.nextSlideMessage));
                        u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.a11y.makeFocusable(u.prevButton), u.a11y.addRole(u.prevButton, "button"), u.a11y.addLabel(u.prevButton, u.params.prevSlideMessage));
                        n(u.container).append(u.a11y.liveRegion) }, initPagination: function() { u.params.pagination && u.params.paginationClickable && u.bullets && u.bullets.length && u.bullets.each(function() { var t = n(this);
                            u.a11y.makeFocusable(t);
                            u.a11y.addRole(t, "button");
                            u.a11y.addLabel(t, u.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1)) }) }, destroy: function() { u.a11y.liveRegion && u.a11y.liveRegion.length > 0 && u.a11y.liveRegion.remove() } }, u.init = function() { u.params.loop && u.createLoop();
                    u.updateContainerSize();
                    u.updateSlidesSize();
                    u.updatePagination();
                    u.params.scrollbar && u.scrollbar && (u.scrollbar.set(), u.params.scrollbarDraggable && u.scrollbar.enableDraggable()); "slide" !== u.params.effect && u.effects[u.params.effect] && (u.params.loop || u.updateProgress(), u.effects[u.params.effect].setTranslate());
                    u.params.loop ? u.slideTo(u.params.initialSlide + u.loopedSlides, 0, u.params.runCallbacksOnInit) : (u.slideTo(u.params.initialSlide, 0, u.params.runCallbacksOnInit), 0 === u.params.initialSlide && (u.parallax && u.params.parallax && u.parallax.setTranslate(), u.lazy && u.params.lazyLoading && (u.lazy.load(), u.lazy.initialImageLoaded = !0)));
                    u.attachEvents();
                    u.params.observer && u.support.observer && u.initObservers();
                    u.params.preloadImages && !u.params.lazyLoading && u.preloadImages();
                    u.params.zoom && u.zoom && u.zoom.init();
                    u.params.autoplay && u.startAutoplay();
                    u.params.keyboardControl && u.enableKeyboardControl && u.enableKeyboardControl();
                    u.params.mousewheelControl && u.enableMousewheelControl && u.enableMousewheelControl();
                    u.params.hashnavReplaceState && (u.params.replaceState = u.params.hashnavReplaceState);
                    u.params.history && u.history && u.history.init();
                    u.params.hashnav && u.hashnav && u.hashnav.init();
                    u.params.a11y && u.a11y && u.a11y.init();
                    u.emit("onInit", u) }, u.cleanupStyles = function() { u.container.removeClass(u.classNames.join(" ")).removeAttr("style");
                    u.wrapper.removeAttr("style");
                    u.slides && u.slides.length && u.slides.removeClass([u.params.slideVisibleClass, u.params.slideActiveClass, u.params.slideNextClass, u.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row");
                    u.paginationContainer && u.paginationContainer.length && u.paginationContainer.removeClass(u.params.paginationHiddenClass);
                    u.bullets && u.bullets.length && u.bullets.removeClass(u.params.bulletActiveClass);
                    u.params.prevButton && n(u.params.prevButton).removeClass(u.params.buttonDisabledClass);
                    u.params.nextButton && n(u.params.nextButton).removeClass(u.params.buttonDisabledClass);
                    u.params.scrollbar && u.scrollbar && (u.scrollbar.track && u.scrollbar.track.length && u.scrollbar.track.removeAttr("style"), u.scrollbar.drag && u.scrollbar.drag.length && u.scrollbar.drag.removeAttr("style")) }, u.destroy = function(n, t) { u.detachEvents();
                    u.stopAutoplay();
                    u.params.scrollbar && u.scrollbar && u.params.scrollbarDraggable && u.scrollbar.disableDraggable();
                    u.params.loop && u.destroyLoop();
                    t && u.cleanupStyles();
                    u.disconnectObservers();
                    u.params.zoom && u.zoom && u.zoom.destroy();
                    u.params.keyboardControl && u.disableKeyboardControl && u.disableKeyboardControl();
                    u.params.mousewheelControl && u.disableMousewheelControl && u.disableMousewheelControl();
                    u.params.a11y && u.a11y && u.a11y.destroy();
                    u.params.history && !u.params.replaceState && window.removeEventListener("popstate", u.history.setHistoryPopState);
                    u.params.hashnav && u.hashnav && u.hashnav.destroy();
                    u.emit("onDestroy");
                    n !== !1 && (u = null) }, u.init(), u } },
        u, r, i; for (t.prototype = { isSafari: function() { var n = window.navigator.userAgent.toLowerCase(); return n.indexOf("safari") >= 0 && n.indexOf("chrome") < 0 && n.indexOf("android") < 0 }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent), isArray: function(n) { return "[object Array]" === Object.prototype.toString.apply(n) }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1, lteIE9: function() { var n = document.createElement("div"); return n.innerHTML = "<!--[if lte IE 9]><i><\/i><![endif]-->", 1 === n.getElementsByTagName("i").length }() }, device: function() { var n = window.navigator.userAgent,
                    i = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                    t = n.match(/(iPad).*OS\s([\d_]+)/),
                    r = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                    u = !t && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/); return { ios: t || u || r, android: i } }(), support: { touch: window.Modernizr && Modernizr.touch === !0 || function() { return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() { var n = document.createElement("div").style; return "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n }(), flexbox: function() { for (var i = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)
                        if (t[n] in i) return !0 }(), observer: function() { return "MutationObserver" in window || "WebkitMutationObserver" in window }(), passiveListener: function() { var n = !1,
                        t; try { t = Object.defineProperty({}, "passive", { get: function() { n = !0 } });
                        window.addEventListener("testPassiveListener", null, t) } catch (n) {} return n }(), gestures: function() { return "ongesturestart" in window }() }, plugins: {} }, u = ["jQuery", "Zepto", "Dom7"], r = 0; r < u.length; r++) window[u[r]] && function(n) { n.fn.swiper = function(i) { var r; return n(this).each(function() { var n = new t(this, i);
                r || (r = n) }), r } }(window[u[r]]);
    i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7;
    i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function(n) {
        function r(f) { if (f.target === this)
                for (n.call(this, f), t = 0; t < i.length; t++) u.off(i[t], r) } var t, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            u = this; if (n)
            for (t = 0; t < i.length; t++) u.on(i[t], r); return this }), "transform" in i.fn || (i.fn.transform = function(n) { for (var t, i = 0; i < this.length; i++) t = this[i].style, t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = n; return this }), "transition" in i.fn || (i.fn.transition = function(n) { var i, t; for ("string" != typeof n && (n += "ms"), i = 0; i < this.length; i++) t = this[i].style, t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = n; return this }), "outerWidth" in i.fn || (i.fn.outerWidth = function(n) { return this.length > 0 ? n ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null }));
    window.Swiper = t }();
"undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() { "use strict"; return window.Swiper });
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = "http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m";
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = "png";
MarkerClusterer.prototype.extend = function(n, t) { return function(n) { for (var t in n.prototype) this.prototype[t] = n.prototype[t]; return this }.apply(n, [t]) };
MarkerClusterer.prototype.onAdd = function() { this.setReady_(!0) };
MarkerClusterer.prototype.draw = function() {};
MarkerClusterer.prototype.setupStyles_ = function() { if (!this.styles_.length)
        for (var n = 0, t; t = this.sizes[n]; n++) this.styles_.push({ url: this.imagePath_ + (n + 1) + "." + this.imageExtension_, height: t, width: t }) };
MarkerClusterer.prototype.fitMapToMarkers = function() { for (var r = this.getMarkers(), t = new google.maps.LatLngBounds, i, n = 0; i = r[n]; n++) t.extend(i.getPosition());
    this.map_.fitBounds(t) };
MarkerClusterer.prototype.setStyles = function(n) { this.styles_ = n };
MarkerClusterer.prototype.getStyles = function() { return this.styles_ };
MarkerClusterer.prototype.setFavStyles = function(n) { this.favstyles_ = n };
MarkerClusterer.prototype.getFavStyles = function() { return this.favstyles_ };
MarkerClusterer.prototype.isZoomOnClick = function() { return this.zoomOnClick_ };
MarkerClusterer.prototype.isAverageCenter = function() { return this.averageCenter_ };
MarkerClusterer.prototype.getMarkers = function() { return this.markers_ };
MarkerClusterer.prototype.getTotalMarkers = function() { return this.markers_.length };
MarkerClusterer.prototype.setMaxZoom = function(n) { this.maxZoom_ = n };
MarkerClusterer.prototype.getMaxZoom = function() { return this.maxZoom_ };
MarkerClusterer.prototype.calculator_ = function(n, t) { for (var u = 0, i = n.length, i = 0, r = 0; r < n.length; r++) n[r].text ? i += parseInt(n[r].text) : i++; return u = String(i).length, u = Math.min(u, t), isNaN(i) && alert("erp"), { text: i, index: u } };
MarkerClusterer.prototype.setCalculator = function(n) { this.calculator_ = n };
MarkerClusterer.prototype.getCalculator = function() { return this.calculator_ };
MarkerClusterer.prototype.addMarkers = function(n, t) { var r, i; if (n.length)
        for (r = 0; i = n[r]; r++) this.pushMarkerTo_(i);
    else if (Object.keys(n).length)
        for (i in n) this.pushMarkerTo_(n[i]);
    t || this.redraw() };
MarkerClusterer.prototype.pushMarkerTo_ = function(n) { if (n.isAdded = !1, n.draggable) { var t = this;
        google.maps.event.addListener(n, "dragend", function() { n.isAdded = !1;
            t.repaint() }) } this.markers_.push(n) };
MarkerClusterer.prototype.addMarker = function(n, t) { this.pushMarkerTo_(n);
    t || this.redraw() };
MarkerClusterer.prototype.removeMarker_ = function(n) { var t = -1,
        i, r; if (this.markers_.indexOf) t = this.markers_.indexOf(n);
    else
        for (i = 0; r = this.markers_[i]; i++)
            if (r == n) { t = i; break } return t == -1 ? !1 : (n.setMap(null), this.markers_.splice(t, 1), !0) };
MarkerClusterer.prototype.removeMarker = function(n, t) { var i = this.removeMarker_(n); return !t && i ? (this.resetViewport(), this.redraw(), !0) : !1 };
MarkerClusterer.prototype.removeMarkers = function(n, t) { for (var i = !1, u, f, r = 0; u = n[r]; r++) f = this.removeMarker_(u), i = i || f; if (!t && i) return this.resetViewport(), this.redraw(), !0 };
MarkerClusterer.prototype.setReady_ = function(n) { this.ready_ || (this.ready_ = n, this.createClusters_()) };
MarkerClusterer.prototype.getTotalClusters = function() { return this.clusters_.length };
MarkerClusterer.prototype.getMap = function() { return this.map_ };
MarkerClusterer.prototype.setMap = function(n) { this.map_ = n };
MarkerClusterer.prototype.getGridSize = function() { return this.gridSize_ };
MarkerClusterer.prototype.setGridSize = function(n) { this.gridSize_ = n };
MarkerClusterer.prototype.getMinClusterSize = function() { return this.minClusterSize_ };
MarkerClusterer.prototype.setMinClusterSize = function(n) { this.minClusterSize_ = n };
MarkerClusterer.prototype.getExtendedBounds = function(n) { var t = this.getProjection(),
        e = new google.maps.LatLng(n.getNorthEast().lat(), n.getNorthEast().lng()),
        o = new google.maps.LatLng(n.getSouthWest().lat(), n.getSouthWest().lng()),
        r = t.fromLatLngToDivPixel(e),
        i, u, f; return r.x += this.gridSize_, r.y -= this.gridSize_, i = t.fromLatLngToDivPixel(o), i.x -= this.gridSize_, i.y += this.gridSize_, u = t.fromDivPixelToLatLng(r), f = t.fromDivPixelToLatLng(i), n.extend(u), n.extend(f), n };
MarkerClusterer.prototype.isMarkerInBounds_ = function(n, t) { return t.contains(n.getPosition()) };
MarkerClusterer.prototype.clearMarkers = function() { this.resetViewport(!0);
    this.markers_ = [] };
MarkerClusterer.prototype.resetViewport = function(n) { for (var r, i, t = 0; r = this.clusters_[t]; t++) r.remove(); for (t = 0; i = this.markers_[t]; t++) i.isAdded = !1, n && i.setMap(null);
    this.clusters_ = [] };
MarkerClusterer.prototype.repaint = function() { var n = this.clusters_.slice();
    this.clusters_.length = 0;
    this.resetViewport();
    this.redraw();
    window.setTimeout(function() { for (var t = 0, i; i = n[t]; t++) i.remove() }, 0) };
MarkerClusterer.prototype.redraw = function() { this.createClusters_() };
MarkerClusterer.prototype.distanceBetweenPoints_ = function(n, t) { if (!n || !t) return 0; var i = (t.lat() - n.lat()) * Math.PI / 180,
        r = (t.lng() - n.lng()) * Math.PI / 180,
        u = Math.sin(i / 2) * Math.sin(i / 2) + Math.cos(n.lat() * Math.PI / 180) * Math.cos(t.lat() * Math.PI / 180) * Math.sin(r / 2) * Math.sin(r / 2),
        f = 2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u)); return 6371 * f };
MarkerClusterer.prototype.addToClosestCluster_ = function(n) { for (var e = 4e4, i = null, o = n.getPosition(), u, f, t, r = 0; t = this.clusters_[r]; r++) u = t.getCenter(), u && (f = this.distanceBetweenPoints_(u, n.getPosition()), f < e && (e = f, i = t));
    i && i.isMarkerInClusterBounds(n) ? (i.addMarker(n), !n.key || (i.key ? i.key += "," + n.key : i.key = n.key), !n.listingId || (i.listings ? i.listings += "," + n.listingId : i.listings = i.markers_[0].listingId + "," + n.listingId)) : (t = new Cluster(this), t.addMarker(n), t.count = n.text, t.key = n.key, t.listings = n.listingId, t.favouriteCount = 0, t.favouriteCount += n.favouriteCount || 0, this.clusters_.push(t)) };
MarkerClusterer.prototype.createClusters_ = function() { var i, r, t, n; if (this.ready_)
        for (i = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(), this.map_.getBounds().getNorthEast()), r = this.getExtendedBounds(i), t = 0; n = this.markers_[t]; t++) !n.isAdded && this.isMarkerInBounds_(n, r) && this.addToClosestCluster_(n) };
Cluster.prototype.isMarkerAlreadyAdded = function(n) { if (this.markers_.indexOf) return this.markers_.indexOf(n) != -1; for (var t = 0, i; i = this.markers_[t]; t++)
        if (i == n) return !0; return !1 };
Cluster.prototype.addMarker = function(n) { var t, r, u; if (this.isMarkerAlreadyAdded(n)) return !1; if (this.center_) { if (this.averageCenter_) { var i = this.markers_.length + 1,
                f = (this.center_.lat() * (i - 1) + n.getPosition().lat()) / i,
                e = (this.center_.lng() * (i - 1) + n.getPosition().lng()) / i;
            this.center_ = new google.maps.LatLng(f, e);
            this.calculateBounds_() } } else this.center_ = n.getPosition(), this.calculateBounds_(); if (n.isAdded = !0, this.markers_.push(n), this.favouriteCount += n.favouriteCount || 0, t = this.markers_.length, !!this.markers_[0].text)
        for (t = 0, r = 0; r < this.markers_.length; r++) t += parseInt(this.markers_[r].text); if (t < this.minClusterSize_ && n.getMap() != this.map_ && n.setMap(this.map_), t == this.minClusterSize_)
        for (u = 0; u < this.markers_.length; u++) this.markers_[u].setMap(null); return t >= this.minClusterSize_ && n.setMap(null), this.updateIcon(), !0 };
Cluster.prototype.getMarkerClusterer = function() { return this.markerClusterer_ };
Cluster.prototype.getBounds = function() { for (var t = new google.maps.LatLngBounds(this.center_, this.center_), r = this.getMarkers(), i, n = 0; i = r[n]; n++) t.extend(i.getPosition()); return t };
Cluster.prototype.remove = function() { this.clusterIcon_.remove();
    this.markers_.length = 0;
    delete this.markers_ };
Cluster.prototype.getSize = function() { return this.markers_.length };
Cluster.prototype.getMarkers = function() { return this.markers_ };
Cluster.prototype.getCenter = function() { return this.center_ };
Cluster.prototype.calculateBounds_ = function() { var n = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(n) };
Cluster.prototype.isMarkerInClusterBounds = function(n) { return this.bounds_.contains(n.getPosition()) };
Cluster.prototype.getMap = function() { return this.map_ };
Cluster.prototype.updateIcon = function() { var e = this.map_.getZoom(),
        i = this.markerClusterer_.getMaxZoom(),
        n, r, u, f, t; if (i && e > i) { for (n = 0; r = this.markers_[n]; n++) r.setMap(this.map_); return } if (u = this.markers_.length == 1 && !!this.markers_[0].text, this.markers_.length < this.minClusterSize_ && !u) { this.clusterIcon_.hide(); return } f = this.markerClusterer_.getStyles().length;
    t = this.markerClusterer_.getCalculator()(this.markers_, f);
    this.clusterIcon_.setCenter(this.center_);
    this.clusterIcon_.setSums(t);
    this.clusterIcon_.show();
    this.count = t.text };
ClusterIcon.prototype.triggerClusterClick = function() { var n = this.cluster_.getMarkerClusterer();
    google.maps.event.trigger(n, "clusterclick", this.cluster_);
    n.clickFunction_ && n.clickFunction_(this.cluster_) };
ClusterIcon.prototype.triggerClusterMouseOver = function() { var n = this.cluster_.getMarkerClusterer();
    n.mouseEnterFunction_ && n.mouseEnterFunction_(this.cluster_) };
ClusterIcon.prototype.triggerClusterMouseExit = function() { var n = this.cluster_.getMarkerClusterer();
    n.mouseExitFunction_ && n.mouseExitFunction_(this.cluster_) };
ClusterIcon.prototype.onAdd = function() { var r, i, n, u, f, t; if (this.div_ = document.createElement("DIV"), this.visible_) { for (r = this.getPosFromLatLng_(this.center_), this.div_.style.cssText = this.createCss(r), this.div_.innerHTML = this.sums_.text, this.div_.classList.add("mapPin"), this.div_.classList.add("fade"), i = this.cssClass_.split(","), n = 0; n < i.length; n++) this.div_.classList.add(i[n]);
        u = "pin_" + this.center_.lat() + "_" + this.center_.lng();
        this.div_.id = u } f = this.getPanes();
    f.overlayMouseTarget.appendChild(this.div_);
    t = this;
    google.maps.event.addDomListener(this.div_, "click", function(n) { return n.stopPropagation && n.stopPropagation(), n.preventDefault(), t.triggerClusterClick(), !1 });
    $(this.div_).mouseover(function() { t.triggerClusterMouseOver() });
    google.maps.event.addDomListener(this.div_, "mouseout", function() { t.triggerClusterMouseExit() }) };
ClusterIcon.prototype.getPosFromLatLng_ = function(n) { var t = this.getProjection().fromLatLngToDivPixel(n); return t.x -= parseInt(this.width_ / 2, 10), t.y -= parseInt(this.height_ / 2, 10), t };
ClusterIcon.prototype.draw = function() { if (this.visible_) { var n = this.getPosFromLatLng_(this.center_);
        this.div_.style.top = n.y + "px";
        this.div_.style.left = n.x + "px" } };
ClusterIcon.prototype.hide = function() { this.div_ && (this.div_.style.display = "none");
    this.visible_ = !1 };
ClusterIcon.prototype.show = function() { if (this.div_) { var n = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(n);
        this.div_.style.display = "" } this.visible_ = !0 };
ClusterIcon.prototype.remove = function() { this.setMap(null) };
ClusterIcon.prototype.onRemove = function() { this.div_ && this.div_.parentNode && (this.hide(), this.div_.parentNode.removeChild(this.div_), this.div_ = null) };
ClusterIcon.prototype.setSums = function(n) { this.sums_ = n;
    this.text_ = n.text;
    this.index_ = n.index;
    this.div_ && (this.div_.innerHTML = n.text);
    this.useStyle() };
ClusterIcon.prototype.useStyle = function() { var t = Math.max(0, this.sums_.index - 1),
        n;
    t = Math.min(this.styles_.length - 1, t);
    n = (this.cluster_.favouriteCount || 0) > 0 ? this.favstyles_[t] : this.styles_[t];
    this.url_ = n.url;
    this.height_ = n.height;
    this.width_ = n.width;
    this.textColor_ = n.textColor;
    this.anchor_ = n.anchor;
    this.textSize_ = n.textSize;
    this.backgroundPosition_ = n.backgroundPosition;
    this.cssClass_ = n["class"] };
ClusterIcon.prototype.setCenter = function(n) { this.center_ = n };
ClusterIcon.prototype.createCss = function(n) { var t = [],
            i, r, u; return t.push("background-image:url(" + this.url_ + ");"), i = this.backgroundPosition_ ? this.backgroundPosition_ : "0 0", t.push("background-position:" + i + ";"), t.push("background-size:" + this.height_ + "px " + this.width_ + "px;"), typeof this.anchor_ == "object" ? (typeof this.anchor_[0] == "number" && this.anchor_[0] > 0 && this.anchor_[0] < this.height_ ? t.push("height:" + (this.height_ - this.anchor_[0]) + "px; padding-top:" + this.anchor_[0] + "px;") : t.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px;"), typeof this.anchor_[1] == "number" && this.anchor_[1] > 0 && this.anchor_[1] < this.width_ ? t.push("width:" + (this.width_ - this.anchor_[1]) + "px; padding-left:" + this.anchor_[1] + "px;") : t.push("width:" + this.width_ + "px; text-align:center;")) : t.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px; width:" + this.width_ + "px; text-align:center;"), r = this.textColor_ ? this.textColor_ : "black", u = this.textSize_ ? this.textSize_ : 11, t.push("cursor:pointer; top:" + n.y + "px; left:" + n.x + "px; color:" + r + "; position:absolute; font-size:" + u + "px; font-family:Arial,sans-serif; font-weight:bold"), t.join("") },
    function(n) { "use strict";

        function t(n, i) { if (this instanceof t) this.id = t.id++, this.setup(n, i), this.chainCallbacks(t._callbackChain);
            else { var r = new t(n, i); return r.open(), r } }

        function o(n, t) { var r = {},
                i; for (i in n) i in t && (r[i] = n[i], delete n[i]); return r }

        function s(n, t) { var u = {},
                e = new RegExp("^" + t + "([A-Z])(.*)"),
                r, i, f; for (r in n) i = r.match(e), i && (f = (i[1] + i[2].replace(/([A-Z])/g, "-$1")).toLowerCase(), u[f] = n[r]); return u } var i, r, u; if ("undefined" == typeof n) { "console" in window && window.console.info("Too much lightness, Featherlight needs jQuery."); return } i = [];
        r = function(t) { return i = n.grep(i, function(n) { return n !== t && n.$instance.closest("body").length > 0 }) };
        u = { allowfullscreen: 1, frameborder: 1, height: 1, longdesc: 1, marginheight: 1, marginwidth: 1, name: 1, referrerpolicy: 1, scrolling: 1, sandbox: 1, src: 1, srcdoc: 1, width: 1 }; var f = { keyup: "onKeyUp", resize: "onResize" },
            h = function(i) { n.each(t.opened().reverse(), function() { if (!i.isDefaultPrevented() && !1 === this[f[i.type]](i)) return i.preventDefault(), i.stopPropagation(), !1 }) },
            e = function(i) { if (i !== t._globalHandlerInstalled) { t._globalHandlerInstalled = i; var r = n.map(f, function(n, i) { return i + "." + t.prototype.namespace }).join(" ");
                    n(window)[i ? "on" : "off"](r, h) } };
        t.prototype = { constructor: t, namespace: "featherlight", targetAttr: "data-featherlight", variant: null, resetCss: !1, background: null, openTrigger: "click", closeTrigger: "click", filter: null, root: "body", openSpeed: 250, closeSpeed: 250, closeOnClick: "background", closeOnEsc: !0, closeIcon: "&#10005;", loading: "", persist: !1, otherClose: null, beforeOpen: n.noop, beforeContent: n.noop, beforeClose: n.noop, afterOpen: n.noop, afterContent: n.noop, afterClose: n.noop, onKeyUp: n.noop, onResize: n.noop, type: null, contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"], setup: function(t, i) { typeof t != "object" || t instanceof n != !1 || i || (i = t, t = undefined); var r = n.extend(this, i, { target: t }),
                    u = r.resetCss ? r.namespace + "-reset" : r.namespace,
                    f = n(r.background || ['<div class="' + u + "-loading " + u + '">', '<div class="' + u + '-content">', '<button class="' + u + "-close-icon " + r.namespace + '-close" aria-label="Close">', r.closeIcon, "<\/button>", '<div class="' + r.namespace + '-inner">' + r.loading + "<\/div>", "<\/div>", "<\/div>"].join("")),
                    e = "." + r.namespace + "-close" + (r.otherClose ? "," + r.otherClose : "");
                r.$instance = f.clone().addClass(r.variant);
                r.$instance.on(r.closeTrigger + "." + r.namespace, function(t) { var i = n(t.target);
                    ("background" === r.closeOnClick && i.is("." + r.namespace) || "anywhere" === r.closeOnClick || i.closest(e).length) && (r.close(t), t.preventDefault()) }); return this }, getContent: function() { var e, u; if (this.persist !== !1 && this.$content) return this.$content; var r = this,
                    f = this.constructor.contentFilters,
                    o = function(n) { return r.$currentTarget && r.$currentTarget.attr(n) },
                    s = o(r.targetAttr),
                    t = r.target || s || "",
                    i = f[r.type]; if (!i && t in f && (i = f[t], t = r.target && s), t = t || o("href") || "", !i)
                    for (e in f) r[e] && (i = f[e], t = r[e]); return !i && (u = t, t = null, n.each(r.contentFilters, function() { return i = f[this], i.test && (t = i.test(u)), !t && i.regex && u.match && u.match(i.regex) && (t = u), !t }), !t) ? ("console" in window && window.console.error("Featherlight: no content filter found " + (u ? ' for "' + u + '"' : " (no target specified)")), !1) : i.process.call(r, t) }, setContent: function(t) { var i = this; return t.is("iframe") && i.$instance.addClass(i.namespace + "-iframe"), i.$instance.removeClass(i.namespace + "-loading"), i.$instance.find("." + i.namespace + "-inner").not(t).slice(1).remove().end().replaceWith(n.contains(i.$instance[0], t[0]) ? "" : t), i.$content = t.addClass(i.namespace + "-inner"), i }, open: function(t) { var r = this,
                    u; return (r.$instance.hide().appendTo(r.root), (!t || !t.isDefaultPrevented()) && r.beforeOpen(t) !== !1 && (t && t.preventDefault(), u = r.getContent(), u)) ? (i.push(r), e(!0), r.$instance.fadeIn(r.openSpeed), r.beforeContent(t), n.when(u).always(function(n) { r.setContent(n);
                    r.afterContent(t) }).then(r.$instance.promise()).done(function() { r.afterOpen(t) })) : (r.$instance.detach(), n.Deferred().reject().promise()) }, close: function(t) { var i = this,
                    u = n.Deferred(); return i.beforeClose(t) === !1 ? u.reject() : (0 === r(i).length && e(!1), i.$instance.fadeOut(i.closeSpeed, function() { i.$instance.detach();
                    i.afterClose(t);
                    u.resolve() })), u.promise() }, resize: function(n, t) { if (n && t) { this.$content.css("width", "").css("height", ""); var i = Math.max(n / (parseInt(this.$content.parent().css("width"), 10) - 1), t / (parseInt(this.$content.parent().css("height"), 10) - 1));
                    i > 1 && (i = t / Math.floor(t / i), this.$content.css("width", "" + n / i + "px").css("height", "" + t / i + "px")) } }, chainCallbacks: function(t) { for (var i in t) this[i] = n.proxy(t[i], this, n.proxy(this[i], this)) } };
        n.extend(t, { id: 0, autoBind: "[data-featherlight]", defaults: t.prototype, contentFilters: { jquery: { regex: /^[#.]\w/, test: function(t) { return t instanceof n && t }, process: function(t) { return this.persist !== !1 ? n(t) : n(t).clone(!0) } }, image: { regex: /\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i, process: function(t) { var f = this,
                            u = n.Deferred(),
                            i = new Image,
                            r = n('<img src="' + t + '" alt="" class="' + f.namespace + '-image" />'); return i.onload = function() { r.naturalWidth = i.width;
                            r.naturalHeight = i.height;
                            u.resolve(r) }, i.onerror = function() { u.reject(r) }, i.src = t, u.promise() } }, html: { regex: /^\s*<[\w!][^<]*>/, process: function(t) { return n(t) } }, ajax: { regex: /./, process: function(t) { var u = this,
                            i = n.Deferred(),
                            r = n("<div><\/div>").load(t, function(n, t) { t !== "error" && i.resolve(r.contents());
                                i.fail() }); return i.promise() } }, iframe: { process: function(t) { var i = new n.Deferred,
                            r = n("<iframe/>"),
                            f = s(this, "iframe"),
                            e = o(f, u); return r.hide().attr("src", t).attr(e).css(f).on("load", function() { i.resolve(r.show()) }).appendTo(this.$instance.find("." + this.namespace + "-content")), i.promise() } }, text: { process: function(t) { return n("<div>", { text: t }) } } }, functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"], readElementConfig: function(t, i) { var u = this,
                    f = new RegExp("^data-" + i + "-(.*)"),
                    r = {}; return t && t.attributes && n.each(t.attributes, function() { var e = this.name.match(f),
                        t, i; if (e) { if (t = this.value, i = n.camelCase(e[1]), n.inArray(i, u.functionAttributes) >= 0) t = new Function(t);
                        else try { t = JSON.parse(t) } catch (o) {} r[i] = t } }), r }, extend: function(t, i) { var r = function() { this.constructor = t }; return r.prototype = this.prototype, t.prototype = new r, t.__super__ = this.prototype, n.extend(t, this, i), t.defaults = t.prototype, t }, attach: function(t, i, r) { var u = this;
                typeof i != "object" || i instanceof n != !1 || r || (r = i, i = undefined);
                r = n.extend({}, r); var s = r.namespace || u.defaults.namespace,
                    f = n.extend({}, u.defaults, u.readElementConfig(t[0], s), r),
                    e, o = function(o) { var h = n(o.currentTarget),
                            c = n.extend({ $source: t, $currentTarget: h }, u.readElementConfig(t[0], f.namespace), u.readElementConfig(o.currentTarget, f.namespace), r),
                            s = e || h.data("featherlight-persisted") || new u(i, c);
                        s.persist === "shared" ? e = s : s.persist !== !1 && h.data("featherlight-persisted", s);
                        c.$currentTarget.blur && c.$currentTarget.blur();
                        s.open(o) };
                t.on(f.openTrigger + "." + f.namespace, f.filter, o); return o }, current: function() { var n = this.opened(); return n[n.length - 1] || null }, opened: function() { var t = this; return r(), n.grep(i, function(n) { return n instanceof t }) }, close: function(n) { var t = this.current(); if (t) return t.close(n) }, _onReady: function() { var t = this; if (t.autoBind) { n(t.autoBind).each(function() { t.attach(n(this)) });
                    n(document).on("click", t.autoBind, function(i) { if (!i.isDefaultPrevented()) { var r = t.attach(n(i.currentTarget));
                            r(i) } }) } }, _callbackChain: { onKeyUp: function(t, i) { return 27 === i.keyCode ? (this.closeOnEsc && n.featherlight.close(i), !1) : t(i) }, beforeOpen: function(t, i) { return this._previouslyActive = document.activeElement, this._$previouslyTabbable = n("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")), this._$previouslyWithTabIndex = n("[tabindex]").not('[tabindex="-1"]'), this._previousWithTabIndices = this._$previouslyWithTabIndex.map(function(t, i) { return n(i).attr("tabindex") }), document.activeElement.blur && document.activeElement.blur(), t(i) }, afterClose: function(t, i) { var r = t(i),
                        u = this; return this._$previouslyTabbable.removeAttr("tabindex"), this._$previouslyWithTabIndex.each(function(t, i) { n(i).attr("tabindex", u._previousWithTabIndices[t]) }), this._previouslyActive.focus(), r }, onResize: function(n, t) { return this.resize(this.$content.naturalWidth, this.$content.naturalHeight), n(t) }, afterContent: function(n, t) { var i = n(t);
                    this.$instance.find("[autofocus]:not([disabled])").focus();
                    this.onResize(t); return i } } });
        n.featherlight = t;
        n.fn.featherlight = function(n, i) { return t.attach(this, n, i), this };
        n(document).ready(function() { t._onReady() }) }(jQuery);
! function(n, t, i, r) { var u = n(t);
    n.fn.lazyload = function(f) {
        function s() { var t = 0;
            o.each(function() { var i = n(this); if ((!e.skip_invisible || i.is(":visible")) && !n.abovethetop(this, e) && !n.leftofbegin(this, e))
                    if (n.belowthefold(this, e) || n.rightoffold(this, e)) { if (++t > e.failure_limit) return !1 } else i.trigger("appear"), t = 0 }) } var h, o = this,
            e = { threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: t, data_attribute: "original", skip_invisible: !0, appear: null, load: null }; return f && (r !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), r !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), n.extend(e, f)), h = e.container === r || e.container === t ? u : n(e.container), 0 === e.event.indexOf("scroll") && h.bind(e.event, function() { return s() }), this.each(function() { var t = this,
                i = n(t);
            t.loaded = !1;
            i.one("appear", function() { if (!this.loaded) { if (e.appear) { var r = o.length;
                        e.appear.call(t, r, e) } n("<img />").bind("load", function() { var r, u;
                        i.hide().attr("src", i.data(e.data_attribute))[e.effect](e.effect_speed);
                        t.loaded = !0;
                        r = n.grep(o, function(n) { return !n.loaded });
                        (o = n(r), e.load) && (u = o.length, e.load.call(t, u, e)) }).attr("src", i.data(e.data_attribute)) } });
            0 !== e.event.indexOf("scroll") && i.bind(e.event, function() { t.loaded || i.trigger("appear") }) }), u.bind("resize", function() { s() }), /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && u.bind("pageshow", function(t) { t.originalEvent && t.originalEvent.persisted && o.each(function() { n(this).trigger("appear") }) }), n(i).ready(function() { s() }), this };
    n.belowthefold = function(i, f) { var e; return e = f.container === r || f.container === t ? u.height() + u.scrollTop() : n(f.container).offset().top + n(f.container).height(), e <= n(i).offset().top - f.threshold };
    n.rightoffold = function(i, f) { var e; return e = f.container === r || f.container === t ? u.width() + u.scrollLeft() : n(f.container).offset().left + n(f.container).width(), e <= n(i).offset().left - f.threshold };
    n.abovethetop = function(i, f) { var e; return e = f.container === r || f.container === t ? u.scrollTop() : n(f.container).offset().top, e >= n(i).offset().top + f.threshold + n(i).height() };
    n.leftofbegin = function(i, f) { var e; return e = f.container === r || f.container === t ? u.scrollLeft() : n(f.container).offset().left, e >= n(i).offset().left + f.threshold + n(i).width() };
    n.inviewport = function(t, i) { return !(n.rightoffold(t, i) || n.leftofbegin(t, i) || n.belowthefold(t, i) || n.abovethetop(t, i)) };
    n.extend(n.expr[":"], { "below-the-fold": function(t) { return n.belowthefold(t, { threshold: 0 }) }, "above-the-top": function(t) { return !n.belowthefold(t, { threshold: 0 }) }, "right-of-screen": function(t) { return n.rightoffold(t, { threshold: 0 }) }, "left-of-screen": function(t) { return !n.rightoffold(t, { threshold: 0 }) }, "in-viewport": function(t) { return n.inviewport(t, { threshold: 0 }) }, "above-the-fold": function(t) { return !n.belowthefold(t, { threshold: 0 }) }, "right-of-fold": function(t) { return n.rightoffold(t, { threshold: 0 }) }, "left-of-fold": function(t) { return !n.rightoffold(t, { threshold: 0 }) } }) }(jQuery, window, document),
function(n) { typeof define == "function" && define.amd ? define(["jquery"], n) : typeof module == "object" && module.exports ? module.exports = function(t, i) { return i === undefined && (i = typeof window != "undefined" ? require("jquery") : require("jquery")(t)), n(i), i } : n(jQuery) }(function(n) { var t = function() { var t; return n && n.fn && n.fn.select2 && n.fn.select2.amd && (t = n.fn.select2.amd),
                function() { if (!t || !t.requirejs) { t ? i = t : t = {}; var n, i, r;
                        (function(t) {
                            function e(n, t) { return d.call(n, t) }

                            function l(n, t) { var o, s, u, e, h, y, c, b, i, l, p, k, r = t && t.split("/"),
                                    a = f.map,
                                    v = a && a["*"] || {}; if (n) { for (n = n.split("/"), h = n.length - 1, f.nodeIdCompat && w.test(n[h]) && (n[h] = n[h].replace(w, "")), n[0].charAt(0) === "." && r && (k = r.slice(0, r.length - 1), n = k.concat(n)), i = 0; i < n.length; i++)
                                        if (p = n[i], p === ".") n.splice(i, 1), i -= 1;
                                        else if (p === "..")
                                        if (i === 0 || i === 1 && n[2] === ".." || n[i - 1] === "..") continue;
                                        else i > 0 && (n.splice(i - 1, 2), i -= 2);
                                    n = n.join("/") } if ((r || v) && a) { for (o = n.split("/"), i = o.length; i > 0; i -= 1) { if (s = o.slice(0, i).join("/"), r)
                                            for (l = r.length; l > 0; l -= 1)
                                                if (u = a[r.slice(0, l).join("/")], u && (u = u[s], u)) { e = u;
                                                    y = i; break } if (e) break;!c && v && v[s] && (c = v[s], b = i) }!e && c && (e = c, y = b);
                                    e && (o.splice(0, y, e), n = o.join("/")) } return n }

                            function b(n, i) { return function() { var r = g.call(arguments, 0); return typeof r[0] != "string" && r.length === 1 && r.push(null), o.apply(t, r.concat([n, i])) } }

                            function nt(n) { return function(t) { return l(t, n) } }

                            function tt(n) { return function(t) { u[n] = t } }

                            function a(n) { if (e(h, n)) { var i = h[n];
                                    delete h[n];
                                    y[n] = !0;
                                    c.apply(t, i) } if (!e(u, n) && !e(y, n)) throw new Error("No " + n); return u[n] }

                            function p(n) { var i, t = n ? n.indexOf("!") : -1; return t > -1 && (i = n.substring(0, t), n = n.substring(t + 1, n.length)), [i, n] }

                            function k(n) { return n ? p(n) : [] }

                            function it(n) { return function() { return f && f.config && f.config[n] || {} } } var c, o, v, s, u = {},
                                h = {},
                                f = {},
                                y = {},
                                d = Object.prototype.hasOwnProperty,
                                g = [].slice,
                                w = /\.js$/;
                            v = function(n, t) { var r, u = p(n),
                                    i = u[0],
                                    f = t[1]; return n = u[1], i && (i = l(i, f), r = a(i)), i ? n = r && r.normalize ? r.normalize(n, nt(f)) : l(n, f) : (n = l(n, f), u = p(n), i = u[0], n = u[1], i && (r = a(i))), { f: i ? i + "!" + n : n, n: n, pr: i, p: r } };
                            s = { require: function(n) { return b(n) }, exports: function(n) { var t = u[n]; return typeof t != "undefined" ? t : u[n] = {} }, module: function(n) { return { id: n, uri: "", exports: u[n], config: it(n) } } };
                            c = function(n, i, r, f) { var p, o, d, w, c, g, l = [],
                                    nt = typeof r,
                                    it; if (f = f || n, g = k(f), nt === "undefined" || nt === "function") { for (i = !i.length && r.length ? ["require", "exports", "module"] : i, c = 0; c < i.length; c += 1)
                                        if (w = v(i[c], g), o = w.f, o === "require") l[c] = s.require(n);
                                        else if (o === "exports") l[c] = s.exports(n), it = !0;
                                    else if (o === "module") p = l[c] = s.module(n);
                                    else if (e(u, o) || e(h, o) || e(y, o)) l[c] = a(o);
                                    else if (w.p) w.p.load(w.n, b(f, !0), tt(o), {}), l[c] = u[o];
                                    else throw new Error(n + " missing " + o);
                                    d = r ? r.apply(u[n], l) : undefined;
                                    n && (p && p.exports !== t && p.exports !== u[n] ? u[n] = p.exports : d === t && it || (u[n] = d)) } else n && (u[n] = r) };
                            n = i = o = function(n, i, r, u, e) { if (typeof n == "string") return s[n] ? s[n](i) : a(v(n, k(i)).f); if (!n.splice) { if (f = n, f.deps && o(f.deps, f.callback), !i) return;
                                    i.splice ? (n = i, i = r, r = null) : n = t } return i = i || function() {}, typeof r == "function" && (r = u, u = e), u ? c(t, n, i, r) : setTimeout(function() { c(t, n, i, r) }, 4), o };
                            o.config = function(n) { return o(n) };
                            n._defined = u;
                            r = function(n, t, i) { if (typeof n != "string") throw new Error("See almond README: incorrect module build, no module name");
                                t.splice || (i = t, t = []);
                                e(u, n) || e(h, n) || (h[n] = [n, t, i]) };
                            r.amd = { jQuery: !0 } })();
                        t.requirejs = n;
                        t.require = i;
                        t.define = r } }(), t.define("almond", function() {}), t.define("jquery", [], function() { var t = n || $; return t == null && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t }), t.define("select2/utils", ["jquery"], function(n) {
                    function r(n) { var i = n.prototype,
                            r = [],
                            t, u; for (t in i)(u = i[t], typeof u == "function") && t !== "constructor" && r.push(t); return r } var t = {},
                        i; return t.Extend = function(n, t) {
                        function r() { this.constructor = n } var u = {}.hasOwnProperty,
                            i; for (i in t) u.call(t, i) && (n[i] = t[i]); return r.prototype = t.prototype, n.prototype = new r, n.__super__ = t.prototype, n }, t.Decorate = function(n, t) {
                        function i() { var r = Array.prototype.unshift,
                                u = t.prototype.constructor.length,
                                i = n.prototype.constructor;
                            u > 0 && (r.call(arguments, n.prototype.constructor), i = t.prototype.constructor);
                            i.apply(this, arguments) }

                        function l() { this.constructor = i } var s = r(t),
                            h = r(n),
                            u, e, c, f, o; for (t.displayName = n.displayName, i.prototype = new l, u = 0; u < h.length; u++) e = h[u], i.prototype[e] = n.prototype[e]; for (c = function(n) { var r = function() {},
                                    u; return n in i.prototype && (r = i.prototype[n]), u = t.prototype[n],
                                    function() { var n = Array.prototype.unshift; return n.call(arguments, r), u.apply(this, arguments) } }, f = 0; f < s.length; f++) o = s[f], i.prototype[o] = c(o); return i }, i = function() { this.listeners = {} }, i.prototype.on = function(n, t) { this.listeners = this.listeners || {};
                        n in this.listeners ? this.listeners[n].push(t) : this.listeners[n] = [t] }, i.prototype.trigger = function(n) { var i = Array.prototype.slice,
                            t = i.call(arguments, 1);
                        this.listeners = this.listeners || {};
                        t == null && (t = []);
                        t.length === 0 && t.push({});
                        t[0]._type = n;
                        n in this.listeners && this.invoke(this.listeners[n], i.call(arguments, 1)); "*" in this.listeners && this.invoke(this.listeners["*"], arguments) }, i.prototype.invoke = function(n, t) { for (var i = 0, r = n.length; i < r; i++) n[i].apply(this, t) }, t.Observable = i, t.generateChars = function(n) { for (var i = "", r, t = 0; t < n; t++) r = Math.floor(Math.random() * 36), i += r.toString(36); return i }, t.bind = function(n, t) { return function() { n.apply(t, arguments) } }, t._convertData = function(n) { var f, r, i, u, t; for (f in n)
                            if (r = f.split("-"), i = n, r.length !== 1) { for (u = 0; u < r.length; u++) t = r[u], t = t.substring(0, 1).toLowerCase() + t.substring(1), t in i || (i[t] = {}), u == r.length - 1 && (i[t] = n[f]), i = i[t];
                                delete n[f] } return n }, t.hasScroll = function(t, i) { var u = n(i),
                            f = i.style.overflowX,
                            r = i.style.overflowY; return f === r && (r === "hidden" || r === "visible") ? !1 : f === "scroll" || r === "scroll" ? !0 : u.innerHeight() < i.scrollHeight || u.innerWidth() < i.scrollWidth }, t.escapeMarkup = function(n) { var t = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return typeof n != "string" ? n : String(n).replace(/[&<>"'\/\\]/g, function(n) { return t[n] }) }, t.appendMany = function(t, i) { if (n.fn.jquery.substr(0, 3) === "1.7") { var r = n();
                            n.map(i, function(n) { r = r.add(n) });
                            i = r } t.append(i) }, t }), t.define("select2/results", ["jquery", "./utils"], function(n, t) {
                    function i(n, t, r) { this.$element = n;
                        this.data = r;
                        this.options = t;
                        i.__super__.constructor.call(this) } return t.Extend(i, t.Observable), i.prototype.render = function() { var t = n('<ul class="select2-results__options" role="tree"><\/ul>'); return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t }, i.prototype.clear = function() { this.$results.empty() }, i.prototype.displayMessage = function(t) { var u = this.options.get("escapeMarkup"),
                            i, r;
                        this.clear();
                        this.hideLoading();
                        i = n('<li role="treeitem" aria-live="assertive" class="select2-results__option"><\/li>');
                        r = this.options.get("translations").get(t.message);
                        i.append(u(r(t.args)));
                        i[0].className += " select2-results__message";
                        this.$results.append(i) }, i.prototype.hideMessages = function() { this.$results.find(".select2-results__message").remove() }, i.prototype.append = function(n) { var i, t, r, u; if (this.hideLoading(), i = [], n.results == null || n.results.length === 0) { this.$results.children().length === 0 && this.trigger("results:message", { message: "noResults" }); return } for (n.results = this.sort(n.results), t = 0; t < n.results.length; t++) r = n.results[t], u = this.option(r), i.push(u);
                        this.$results.append(i) }, i.prototype.position = function(n, t) { var i = t.find(".select2-results");
                        i.append(n) }, i.prototype.sort = function(n) { var t = this.options.get("sorter"); return t(n) }, i.prototype.highlightFirstItem = function() { var n = this.$results.find(".select2-results__option[aria-selected]"),
                            t = n.filter("[aria-selected=true]");
                        t.length > 0 ? t.first().trigger("mouseenter") : n.first().trigger("mouseenter");
                        this.ensureHighlightVisible() }, i.prototype.setClasses = function() { var t = this;
                        this.data.current(function(i) { var r = n.map(i, function(n) { return n.id.toString() }),
                                u = t.$results.find(".select2-results__option[aria-selected]");
                            u.each(function() { var i = n(this),
                                    t = n.data(this, "data"),
                                    u = "" + t.id;
                                t.element != null && t.element.selected || t.element == null && n.inArray(u, r) > -1 ? i.attr("aria-selected", "true") : i.attr("aria-selected", "false") }) }) }, i.prototype.showLoading = function(n) { this.hideLoading(); var i = this.options.get("translations").get("searching"),
                            r = { disabled: !0, loading: !0, text: i(n) },
                            t = this.option(r);
                        t.className += " loading-results";
                        this.$results.prepend(t) }, i.prototype.hideLoading = function() { this.$results.find(".loading-results").remove() }, i.prototype.option = function(t) { var r = document.createElement("li"),
                            i, e, c, o, u, v, s, f, l, a, h;
                        r.className = "select2-results__option";
                        i = { role: "treeitem", "aria-selected": "false" };
                        t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true");
                        t.id == null && delete i["aria-selected"];
                        t._resultId != null && (r.id = t._resultId);
                        t.title && (r.title = t.title);
                        t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]); for (e in i) c = i[e], r.setAttribute(e, c); if (t.children) { for (o = n(r), u = document.createElement("strong"), u.className = "select2-results__group", v = n(u), this.template(t, u), s = [], f = 0; f < t.children.length; f++) l = t.children[f], a = this.option(l), s.push(a);
                            h = n("<ul><\/ul>", { "class": "select2-results__options select2-results__options--nested" });
                            h.append(s);
                            o.append(u);
                            o.append(h) } else this.template(t, r); return n.data(r, "data", t), r }, i.prototype.bind = function(t) { var i = this,
                            r = t.id + "-results";
                        this.$results.attr("id", r);
                        t.on("results:all", function(n) { i.clear();
                            i.append(n.data);
                            t.isOpen() && (i.setClasses(), i.highlightFirstItem()) });
                        t.on("results:append", function(n) { i.append(n.data);
                            t.isOpen() && i.setClasses() });
                        t.on("query", function(n) { i.hideMessages();
                            i.showLoading(n) });
                        t.on("select", function() { t.isOpen() && (i.setClasses(), i.highlightFirstItem()) });
                        t.on("unselect", function() { t.isOpen() && (i.setClasses(), i.highlightFirstItem()) });
                        t.on("open", function() { i.$results.attr("aria-expanded", "true");
                            i.$results.attr("aria-hidden", "false");
                            i.setClasses();
                            i.ensureHighlightVisible() });
                        t.on("close", function() { i.$results.attr("aria-expanded", "false");
                            i.$results.attr("aria-hidden", "true");
                            i.$results.removeAttr("aria-activedescendant") });
                        t.on("results:toggle", function() { var n = i.getHighlightedResults();
                            n.length !== 0 && n.trigger("mouseup") });
                        t.on("results:select", function() { var n = i.getHighlightedResults(),
                                t;
                            n.length !== 0 && (t = n.data("data"), n.attr("aria-selected") == "true" ? i.trigger("close", {}) : i.trigger("select", { data: t })) });
                        t.on("results:previous", function() { var r = i.getHighlightedResults(),
                                u = i.$results.find("[aria-selected]"),
                                f = u.index(r),
                                n, t; if (f !== 0) { n = f - 1;
                                r.length === 0 && (n = 0);
                                t = u.eq(n);
                                t.trigger("mouseenter"); var e = i.$results.offset().top,
                                    o = t.offset().top,
                                    s = i.$results.scrollTop() + (o - e);
                                n === 0 ? i.$results.scrollTop(0) : o - e < 0 && i.$results.scrollTop(s) } });
                        t.on("results:next", function() { var e = i.getHighlightedResults(),
                                t = i.$results.find("[aria-selected]"),
                                o = t.index(e),
                                r = o + 1,
                                n; if (!(r >= t.length)) { n = t.eq(r);
                                n.trigger("mouseenter"); var u = i.$results.offset().top + i.$results.outerHeight(!1),
                                    f = n.offset().top + n.outerHeight(!1),
                                    s = i.$results.scrollTop() + f - u;
                                r === 0 ? i.$results.scrollTop(0) : f > u && i.$results.scrollTop(s) } });
                        t.on("results:focus", function(n) { n.element.addClass("select2-results__option--highlighted") });
                        t.on("results:message", function(n) { i.displayMessage(n) }); if (n.fn.mousewheel) this.$results.on("mousewheel", function(n) { var t = i.$results.scrollTop(),
                                r = i.$results.get(0).scrollHeight - t + n.deltaY,
                                u = n.deltaY > 0 && t - n.deltaY <= 0,
                                f = n.deltaY < 0 && r <= i.$results.height();
                            u ? (i.$results.scrollTop(0), n.preventDefault(), n.stopPropagation()) : f && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), n.preventDefault(), n.stopPropagation()) });
                        this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) { var r = n(this),
                                u = r.data("data"); if (r.attr("aria-selected") === "true") { i.options.get("multiple") ? i.trigger("unselect", { originalEvent: t, data: u }) : i.trigger("close", {}); return } i.trigger("select", { originalEvent: t, data: u }) });
                        this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() { var t = n(this).data("data");
                            i.getHighlightedResults().removeClass("select2-results__option--highlighted");
                            i.trigger("results:focus", { data: t, element: n(this) }) }) }, i.prototype.getHighlightedResults = function() { return this.$results.find(".select2-results__option--highlighted") }, i.prototype.destroy = function() { this.$results.remove() }, i.prototype.ensureHighlightVisible = function() { var n = this.getHighlightedResults(); if (n.length !== 0) { var f = this.$results.find("[aria-selected]"),
                                e = f.index(n),
                                t = this.$results.offset().top,
                                i = n.offset().top,
                                r = this.$results.scrollTop() + (i - t),
                                u = i - t;
                            r -= n.outerHeight(!1) * 2;
                            e <= 2 ? this.$results.scrollTop(0) : (u > this.$results.outerHeight() || u < 0) && this.$results.scrollTop(r) } }, i.prototype.template = function(t, i) { var u = this.options.get("templateResult"),
                            f = this.options.get("escapeMarkup"),
                            r = u(t, i);
                        r == null ? i.style.display = "none" : typeof r == "string" ? i.innerHTML = f(r) : n(i).append(r) }, i }), t.define("select2/keys", [], function() { return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 } }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(n, t, i) {
                    function r(n, t) { this.$element = n;
                        this.options = t;
                        r.__super__.constructor.call(this) } return t.Extend(r, t.Observable), r.prototype.render = function() { var t = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"><\/span>'); return this._tabindex = 0, this.$element.data("old-tabindex") != null ? this._tabindex = this.$element.data("old-tabindex") : this.$element.attr("tabindex") != null && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t }, r.prototype.bind = function(n) { var t = this,
                            u = n.id + "-container",
                            r = n.id + "-results";
                        this.container = n;
                        this.$selection.on("focus", function(n) { t.trigger("focus", n) });
                        this.$selection.on("blur", function(n) { t._handleBlur(n) });
                        this.$selection.on("keydown", function(n) { t.trigger("keypress", n);
                            n.which === i.SPACE && n.preventDefault() });
                        n.on("results:focus", function(n) { t.$selection.attr("aria-activedescendant", n.data._resultId) });
                        n.on("selection:update", function(n) { t.update(n.data) });
                        n.on("open", function() { t.$selection.attr("aria-expanded", "true");
                            t.$selection.attr("aria-owns", r);
                            t._attachCloseHandler(n) });
                        n.on("close", function() { t.$selection.attr("aria-expanded", "false");
                            t.$selection.removeAttr("aria-activedescendant");
                            t.$selection.removeAttr("aria-owns");
                            t.$selection.focus();
                            t._detachCloseHandler(n) });
                        n.on("enable", function() { t.$selection.attr("tabindex", t._tabindex) });
                        n.on("disable", function() { t.$selection.attr("tabindex", "-1") }) }, r.prototype._handleBlur = function(t) { var i = this;
                        window.setTimeout(function() { document.activeElement == i.$selection[0] || n.contains(i.$selection[0], document.activeElement) || i.trigger("blur", t) }, 1) }, r.prototype._attachCloseHandler = function(t) { var i = this;
                        n(document.body).on("mousedown.select2." + t.id, function(t) { var i = n(t.target),
                                r = i.closest(".select2"),
                                u = n(".select2.select2-container--open");
                            u.each(function() { var i = n(this),
                                    t;
                                this != r[0] && (t = i.data("element"), t.select2("close")) }) }) }, r.prototype._detachCloseHandler = function(t) { n(document.body).off("mousedown.select2." + t.id) }, r.prototype.position = function(n, t) { var i = t.find(".selection");
                        i.append(n) }, r.prototype.destroy = function() { this._detachCloseHandler(this.container) }, r.prototype.update = function() { throw new Error("The `update` method must be defined in child classes."); }, r }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(n, t, i) {
                    function r() { r.__super__.constructor.apply(this, arguments) } return i.Extend(r, t), r.prototype.render = function() { var n = r.__super__.render.call(this); return n.addClass("select2-selection--single"), n.html('<span class="select2-selection__rendered"><\/span><span class="select2-selection__arrow" role="presentation"><b role="presentation"><\/b><\/span>'), n }, r.prototype.bind = function(n) { var t = this,
                            i;
                        r.__super__.bind.apply(this, arguments);
                        i = n.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", i);
                        this.$selection.attr("aria-labelledby", i);
                        this.$selection.on("mousedown", function(n) { n.which === 1 && t.trigger("toggle", { originalEvent: n }) });
                        this.$selection.on("focus", function() {});
                        this.$selection.on("blur", function() {});
                        n.on("focus", function() { n.isOpen() || t.$selection.focus() });
                        n.on("selection:update", function(n) { t.update(n.data) }) }, r.prototype.clear = function() { this.$selection.find(".select2-selection__rendered").empty() }, r.prototype.display = function(n, t) { var i = this.options.get("templateSelection"),
                            r = this.options.get("escapeMarkup"); return r(i(n, t)) }, r.prototype.selectionContainer = function() { return n("<span><\/span>") }, r.prototype.update = function(n) { if (n.length === 0) { this.clear(); return } var t = n[0],
                            i = this.$selection.find(".select2-selection__rendered"),
                            r = this.display(t, i);
                        i.empty().append(r);
                        i.prop("title", t.title || t.text) }, r }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(n, t, i) {
                    function r() { r.__super__.constructor.apply(this, arguments) } return i.Extend(r, t), r.prototype.render = function() { var n = r.__super__.render.call(this); return n.addClass("select2-selection--multiple"), n.html('<ul class="select2-selection__rendered"><\/ul>'), n }, r.prototype.bind = function() { var t = this;
                        r.__super__.bind.apply(this, arguments);
                        this.$selection.on("click", function(n) { t.trigger("toggle", { originalEvent: n }) });
                        this.$selection.on("click", ".select2-selection__choice__remove", function(i) { if (!t.options.get("disabled")) { var r = n(this),
                                    u = r.parent(),
                                    f = u.data("data");
                                t.trigger("unselect", { originalEvent: i, data: f }) } }) }, r.prototype.clear = function() { this.$selection.find(".select2-selection__rendered").empty() }, r.prototype.display = function(n, t) { var i = this.options.get("templateSelection"),
                            r = this.options.get("escapeMarkup"); return r(i(n, t)) }, r.prototype.selectionContainer = function() { return n('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;<\/span><\/li>') }, r.prototype.update = function(n) { var f, r, e; if (this.clear(), n.length !== 0) { for (f = [], r = 0; r < n.length; r++) { var u = n[r],
                                    t = this.selectionContainer(),
                                    o = this.display(u, t);
                                t.append(o);
                                t.prop("title", u.title || u.text);
                                t.data("data", u);
                                f.push(t) } e = this.$selection.find(".select2-selection__rendered");
                            i.appendMany(e, f) } }, r }), t.define("select2/selection/placeholder", ["../utils"], function() {
                    function n(n, t, i) { this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
                        n.call(this, t, i) } return n.prototype.normalizePlaceholder = function(n, t) { return typeof t == "string" && (t = { id: "", text: t }), t }, n.prototype.createPlaceholder = function(n, t) { var i = this.selectionContainer(); return i.html(this.display(t)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i }, n.prototype.update = function(n, t) { var r = t.length == 1 && t[0].id != this.placeholder.id,
                            u = t.length > 1,
                            i; if (u || r) return n.call(this, t);
                        this.clear();
                        i = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(i) }, n }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function(n, t) {
                    function i() {} return i.prototype.bind = function(n, t, i) { var r = this;
                        n.call(this, t, i);
                        this.placeholder == null && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.");
                        this.$selection.on("mousedown", ".select2-selection__clear", function(n) { r._handleClear(n) });
                        t.on("keypress", function(n) { r._handleKeyboardClear(n, t) }) }, i.prototype._handleClear = function(n, t) { var r, u, i, f; if (!this.options.get("disabled") && (r = this.$selection.find(".select2-selection__clear"), r.length !== 0)) { for (t.stopPropagation(), u = r.data("data"), i = 0; i < u.length; i++)
                                if (f = { data: u[i] }, this.trigger("unselect", f), f.prevented) return;
                            this.$element.val(this.placeholder.id).trigger("change");
                            this.trigger("toggle", {}) } }, i.prototype._handleKeyboardClear = function(n, i, r) { r.isOpen() || (i.which == t.DELETE || i.which == t.BACKSPACE) && this._handleClear(i) }, i.prototype.update = function(t, i) { if (t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0) && i.length !== 0) { var r = n('<span class="select2-selection__clear">&times;<\/span>');
                            r.data("data", i);
                            this.$selection.find(".select2-selection__rendered").prepend(r) } }, i }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(n, t, i) {
                    function r(n, t, i) { n.call(this, t, i) } return r.prototype.render = function(t) { var i = n('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /><\/li>'),
                            r; return this.$searchContainer = i, this.$search = i.find("input"), r = t.call(this), this._transferTabIndex(), r }, r.prototype.bind = function(n, t, r) { var u = this,
                            f, e;
                        n.call(this, t, r);
                        t.on("open", function() { u.$search.trigger("focus") });
                        t.on("close", function() { u.$search.val("");
                            u.$search.removeAttr("aria-activedescendant");
                            u.$search.trigger("focus") });
                        t.on("enable", function() { u.$search.prop("disabled", !1);
                            u._transferTabIndex() });
                        t.on("disable", function() { u.$search.prop("disabled", !0) });
                        t.on("focus", function() { u.$search.trigger("focus") });
                        t.on("results:focus", function(n) { u.$search.attr("aria-activedescendant", n.id) });
                        this.$selection.on("focusin", ".select2-search--inline", function(n) { u.trigger("focus", n) });
                        this.$selection.on("focusout", ".select2-search--inline", function(n) { u._handleBlur(n) });
                        this.$selection.on("keydown", ".select2-search--inline", function(n) { var r, t, f;
                            n.stopPropagation();
                            u.trigger("keypress", n);
                            u._keyUpPrevented = n.isDefaultPrevented();
                            r = n.which;
                            r === i.BACKSPACE && u.$search.val() === "" && (t = u.$searchContainer.prev(".select2-selection__choice"), t.length > 0 && (f = t.data("data"), u.searchRemoveChoice(f), n.preventDefault())) });
                        f = document.documentMode;
                        e = f && f <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function() { if (e) { u.$selection.off("input.search input.searchcheck"); return } u.$selection.off("keyup.search") });
                        this.$selection.on("keyup.search input.search", ".select2-search--inline", function(n) { if (e && n.type === "input") { u.$selection.off("input.search input.searchcheck"); return } var t = n.which;
                            t != i.SHIFT && t != i.CTRL && t != i.ALT && t != i.TAB && u.handleSearch(n) }) }, r.prototype._transferTabIndex = function() { this.$search.attr("tabindex", this.$selection.attr("tabindex"));
                        this.$selection.attr("tabindex", "-1") }, r.prototype.createPlaceholder = function(n, t) { this.$search.attr("placeholder", t.text) }, r.prototype.update = function(n, t) { var r = this.$search[0] == document.activeElement,
                            i;
                        this.$search.attr("placeholder", "");
                        n.call(this, t);
                        this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
                        this.resizeSearch();
                        r && (i = this, window.setTimeout(function() { i.$search.focus() }, 0)) }, r.prototype.handleSearch = function() { if (this.resizeSearch(), !this._keyUpPrevented) { var n = this.$search.val();
                            this.trigger("query", { term: n }) } this._keyUpPrevented = !1 }, r.prototype.searchRemoveChoice = function(n, t) { this.trigger("unselect", { data: t });
                        this.$search.val(t.text);
                        this.handleSearch() }, r.prototype.resizeSearch = function() { var n, t;
                        this.$search.css("width", "25px");
                        n = "";
                        this.$search.attr("placeholder") !== "" ? n = this.$selection.find(".select2-selection__rendered").innerWidth() : (t = this.$search.val().length + 1, n = t * .75 + "em");
                        this.$search.css("width", n) }, r }), t.define("select2/selection/eventRelay", ["jquery"], function(n) {
                    function t() {} return t.prototype.bind = function(t, i, r) { var u = this,
                            f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            e = ["opening", "closing", "selecting", "unselecting"];
                        t.call(this, i, r);
                        i.on("*", function(t, i) { if (n.inArray(t, f) !== -1) { i = i || {}; var r = n.Event("select2:" + t, { params: i });
                                (u.$element.trigger(r), n.inArray(t, e) !== -1) && (i.prevented = r.isDefaultPrevented()) } }) }, t }), t.define("select2/translation", ["jquery", "require"], function(n, t) {
                    function i(n) { this.dict = n || {} } return i.prototype.all = function() { return this.dict }, i.prototype.get = function(n) { return this.dict[n] }, i.prototype.extend = function(t) { this.dict = n.extend({}, t.all(), this.dict) }, i._cache = {}, i.loadPath = function(n) { if (!(n in i._cache)) { var r = t(n);
                            i._cache[n] = r } return new i(i._cache[n]) }, i }), t.define("select2/diacritics", [], function() { return { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" } }), t.define("select2/data/base", ["../utils"], function(n) {
                    function t() { t.__super__.constructor.call(this) } return n.Extend(t, n.Observable), t.prototype.current = function() { throw new Error("The `current` method must be defined in child classes."); }, t.prototype.query = function() { throw new Error("The `query` method must be defined in child classes."); }, t.prototype.bind = function() {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, i) { var r = t.id + "-result-"; return r += n.generateChars(4), r + (i.id != null ? "-" + i.id.toString() : "-" + n.generateChars(4)) }, t }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(n, t, i) {
                    function r(n, t) { this.$element = n;
                        this.options = t;
                        r.__super__.constructor.call(this) } return t.Extend(r, n), r.prototype.current = function(n) { var t = [],
                            r = this;
                        this.$element.find(":selected").each(function() { var n = i(this),
                                u = r.item(n);
                            t.push(u) });
                        n(t) }, r.prototype.select = function(n) { var t = this,
                            r; if (n.selected = !0, i(n.element).is("option")) { n.element.selected = !0;
                            this.$element.trigger("change"); return } this.$element.prop("multiple") ? this.current(function(r) { var f = [],
                                u, e; for (n = [n], n.push.apply(n, r), u = 0; u < n.length; u++) e = n[u].id, i.inArray(e, f) === -1 && f.push(e);
                            t.$element.val(f);
                            t.$element.trigger("change") }) : (r = n.id, this.$element.val(r), this.$element.trigger("change")) }, r.prototype.unselect = function(n) { var t = this; if (this.$element.prop("multiple")) { if (n.selected = !1, i(n.element).is("option")) { n.element.selected = !1;
                                this.$element.trigger("change"); return } this.current(function(r) { for (var e = [], f, u = 0; u < r.length; u++) f = r[u].id, f !== n.id && i.inArray(f, e) === -1 && e.push(f);
                                t.$element.val(e);
                                t.$element.trigger("change") }) } }, r.prototype.bind = function(n) { var t = this;
                        this.container = n;
                        n.on("select", function(n) { t.select(n.data) });
                        n.on("unselect", function(n) { t.unselect(n.data) }) }, r.prototype.destroy = function() { this.$element.find("*").each(function() { i.removeData(this, "data") }) }, r.prototype.query = function(n, t) { var r = [],
                            u = this,
                            f = this.$element.children();
                        f.each(function() { var t = i(this),
                                e, f;
                            (t.is("option") || t.is("optgroup")) && (e = u.item(t), f = u.matches(n, e), f !== null && r.push(f)) });
                        t({ results: r }) }, r.prototype.addOptions = function(n) { t.appendMany(this.$element, n) }, r.prototype.option = function(n) { var t, u, r; return n.children ? (t = document.createElement("optgroup"), t.label = n.text) : (t = document.createElement("option"), t.textContent !== undefined ? t.textContent = n.text : t.innerText = n.text), n.id !== undefined && (t.value = n.id), n.disabled && (t.disabled = !0), n.selected && (t.selected = !0), n.title && (t.title = n.title), u = i(t), r = this._normalizeItem(n), r.element = t, i.data(t, "data", r), u }, r.prototype.item = function(n) { var t = {},
                            u, f, r, e, o; if (t = i.data(n[0], "data"), t != null) return t; if (n.is("option")) t = { id: n.val(), text: n.text(), disabled: n.prop("disabled"), selected: n.prop("selected"), title: n.prop("title") };
                        else if (n.is("optgroup")) { for (t = { text: n.prop("label"), children: [], title: n.prop("title") }, u = n.children("option"), f = [], r = 0; r < u.length; r++) e = i(u[r]), o = this.item(e), f.push(o);
                            t.children = f } return t = this._normalizeItem(t), t.element = n[0], i.data(n[0], "data", t), t }, r.prototype._normalizeItem = function(n) { i.isPlainObject(n) || (n = { id: n, text: n });
                        n = i.extend({}, { text: "" }, n); return n.id != null && (n.id = n.id.toString()), n.text != null && (n.text = n.text.toString()), n._resultId == null && n.id && this.container != null && (n._resultId = this.generateResultId(this.container, n)), i.extend({}, { selected: !1, disabled: !1 }, n) }, r.prototype.matches = function(n, t) { var i = this.options.get("matcher"); return i(n, t) }, r }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(n, t, i) {
                    function r(n, t) { var i = t.get("data") || [];
                        r.__super__.constructor.call(this, n, t);
                        this.addOptions(this.convertToOptions(i)) } return t.Extend(r, n), r.prototype.select = function(n) { var t = this.$element.find("option").filter(function(t, i) { return i.value == n.id.toString() });
                        t.length === 0 && (t = this.option(n), this.addOptions(t));
                        r.__super__.select.call(this, n) }, r.prototype.convertToOptions = function(n) {
                        function a(n) { return function() { return i(this).val() == n.id } } for (var c = this, e = this.$element.find("option"), l = e.map(function() { return c.item(i(this)).id }).get(), o = [], r, f, h, u = 0; u < n.length; u++) { if (r = this._normalizeItem(n[u]), i.inArray(r.id, l) >= 0) { var s = e.filter(a(r)),
                                    v = this.item(s),
                                    y = i.extend(!0, {}, r, v),
                                    p = this.option(y);
                                s.replaceWith(p); continue } f = this.option(r);
                            r.children && (h = this.convertToOptions(r.children), t.appendMany(f, h));
                            o.push(f) } return o }, r }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(n, t, i) {
                    function r(n, t) { this.ajaxOptions = this._applyDefaults(t.get("ajax"));
                        this.ajaxOptions.processResults != null && (this.processResults = this.ajaxOptions.processResults);
                        r.__super__.constructor.call(this, n, t) } return t.Extend(r, n), r.prototype._applyDefaults = function(n) { var t = { data: function(n) { return i.extend({}, n, { q: n.term }) }, transport: function(n, t, r) { var u = i.ajax(n); return u.then(t), u.fail(r), u } }; return i.extend({}, t, n, !0) }, r.prototype.processResults = function(n) { return n }, r.prototype.query = function(n, t) {
                        function f() { var f = r.transport(r, function(r) { var f = u.processResults(r, n);
                                u.options.get("debug") && window.console && console.error && (f && f.results && i.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response."));
                                t(f) }, function() { f.status && f.status === "0" || u.trigger("results:message", { message: "errorLoading" }) });
                            u._request = f } var u = this,
                            r;
                        this._request != null && (i.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        r = i.extend({ type: "GET" }, this.ajaxOptions);
                        typeof r.url == "function" && (r.url = r.url.call(this.$element, n));
                        typeof r.data == "function" && (r.data = r.data.call(this.$element, n));
                        this.ajaxOptions.delay && n.term != null ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(f, this.ajaxOptions.delay)) : f() }, r }), t.define("select2/data/tags", ["jquery"], function(n) {
                    function t(t, i, r) { var f = r.get("tags"),
                            o = r.get("createTag"),
                            e, u; if (o !== undefined && (this.createTag = o), e = r.get("insertTag"), e !== undefined && (this.insertTag = e), t.call(this, i, r), n.isArray(f))
                            for (u = 0; u < f.length; u++) { var s = f[u],
                                    h = this._normalizeItem(s),
                                    c = this.option(h);
                                this.$element.append(c) } } return t.prototype.query = function(n, t, i) {
                        function u(n, f) { for (var e = n.results, s, c, o = 0; o < e.length; o++) { var h = e[o],
                                    l = h.children != null && !u({ results: h.children }, !0),
                                    a = (h.text || "").toUpperCase(),
                                    v = (t.term || "").toUpperCase(),
                                    y = a === v; if (y || l) { if (f) return !1;
                                    n.data = e;
                                    i(n); return } } if (f) return !0;
                            s = r.createTag(t);
                            s != null && (c = r.option(s), c.attr("data-select2-tag", !0), r.addOptions([c]), r.insertTag(e, s));
                            n.results = e;
                            i(n) } var r = this; if (this._removeOldTags(), t.term == null || t.page != null) { n.call(this, t, i); return } n.call(this, t, u) }, t.prototype.createTag = function(t, i) { var r = n.trim(i.term); return r === "" ? null : { id: r, text: r } }, t.prototype.insertTag = function(n, t, i) { t.unshift(i) }, t.prototype._removeOldTags = function() { var i = this._lastTag,
                            t = this.$element.find("option[data-select2-tag]");
                        t.each(function() { this.selected || n(this).remove() }) }, t }), t.define("select2/data/tokenizer", ["jquery"], function(n) {
                    function t(n, t, i) { var r = i.get("tokenizer");
                        r !== undefined && (this.tokenizer = r);
                        n.call(this, t, i) } return t.prototype.bind = function(n, t, i) { n.call(this, t, i);
                        this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field") }, t.prototype.query = function(t, i, r) {
                        function e(t) { var i = u._normalizeItem(t),
                                f = u.$element.find("option").filter(function() { return n(this).val() === i.id }),
                                r;
                            f.length || (r = u.option(i), r.attr("data-select2-tag", !0), u._removeOldTags(), u.addOptions([r]));
                            o(i) }

                        function o(n) { u.trigger("select", { data: n }) } var u = this,
                            f;
                        i.term = i.term || "";
                        f = this.tokenizer(i, this.options, e);
                        f.term !== i.term && (this.$search.length && (this.$search.val(f.term), this.$search.focus()), i.term = f.term);
                        t.call(this, i, r) }, t.prototype.tokenizer = function(t, i, r, u) { for (var h = r.get("tokenSeparators") || [], e = i.term, f = 0, c = this.createTag || function(n) { return { id: n.term, text: n.term } }, o; f < e.length;) { if (o = e[f], n.inArray(o, h) === -1) { f++; continue } var l = e.substr(0, f),
                                a = n.extend({}, i, { term: l }),
                                s = c(a); if (s == null) { f++; continue } u(s);
                            e = e.substr(f + 1) || "";
                            f = 0 } return { term: e } }, t }), t.define("select2/data/minimumInputLength", [], function() {
                    function n(n, t, i) { this.minimumInputLength = i.get("minimumInputLength");
                        n.call(this, t, i) } return n.prototype.query = function(n, t, i) { if (t.term = t.term || "", t.term.length < this.minimumInputLength) { this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: t.term, params: t } }); return } n.call(this, t, i) }, n }), t.define("select2/data/maximumInputLength", [], function() {
                    function n(n, t, i) { this.maximumInputLength = i.get("maximumInputLength");
                        n.call(this, t, i) } return n.prototype.query = function(n, t, i) { if (t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength) { this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: t.term, params: t } }); return } n.call(this, t, i) }, n }), t.define("select2/data/maximumSelectionLength", [], function() {
                    function n(n, t, i) { this.maximumSelectionLength = i.get("maximumSelectionLength");
                        n.call(this, t, i) } return n.prototype.query = function(n, t, i) { var r = this;
                        this.current(function(u) { var f = u != null ? u.length : 0; if (r.maximumSelectionLength > 0 && f >= r.maximumSelectionLength) { r.trigger("results:message", { message: "maximumSelected", args: { maximum: r.maximumSelectionLength } }); return } n.call(r, t, i) }) }, n }), t.define("select2/dropdown", ["jquery", "./utils"], function(n, t) {
                    function i(n, t) { this.$element = n;
                        this.options = t;
                        i.__super__.constructor.call(this) } return t.Extend(i, t.Observable), i.prototype.render = function() { var t = n('<span class="select2-dropdown"><span class="select2-results"><\/span><\/span>'); return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t }, i.prototype.bind = function() {}, i.prototype.position = function() {}, i.prototype.destroy = function() { this.$dropdown.remove() }, i }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(n) {
                    function t() {} return t.prototype.render = function(t) { var r = t.call(this),
                            i = n('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /><\/span>'); return this.$searchContainer = i, this.$search = i.find("input"), r.prepend(i), r }, t.prototype.bind = function(t, i, r) { var u = this;
                        t.call(this, i, r);
                        this.$search.on("keydown", function(n) { u.trigger("keypress", n);
                            u._keyUpPrevented = n.isDefaultPrevented() });
                        this.$search.on("input", function() { n(this).off("keyup") });
                        this.$search.on("keyup input", function(n) { u.handleSearch(n) });
                        i.on("open", function() { u.$search.attr("tabindex", 0);
                            u.$search.focus();
                            window.setTimeout(function() { u.$search.focus() }, 0) });
                        i.on("close", function() { u.$search.attr("tabindex", -1);
                            u.$search.val("") });
                        i.on("focus", function() { i.isOpen() || u.$search.focus() });
                        i.on("results:all", function(n) { if (n.query.term == null || n.query.term === "") { var t = u.showSearch(n);
                                t ? u.$searchContainer.removeClass("select2-search--hide") : u.$searchContainer.addClass("select2-search--hide") } }) }, t.prototype.handleSearch = function() { if (!this._keyUpPrevented) { var n = this.$search.val();
                            this.trigger("query", { term: n }) } this._keyUpPrevented = !1 }, t.prototype.showSearch = function() { return !0 }, t }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                    function n(n, t, i, r) { this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
                        n.call(this, t, i, r) } return n.prototype.append = function(n, t) { t.results = this.removePlaceholder(t.results);
                        n.call(this, t) }, n.prototype.normalizePlaceholder = function(n, t) { return typeof t == "string" && (t = { id: "", text: t }), t }, n.prototype.removePlaceholder = function(n, t) { for (var r = t.slice(0), u, i = t.length - 1; i >= 0; i--) u = t[i], this.placeholder.id === u.id && r.splice(i, 1); return r }, n }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(n) {
                    function t(n, t, i, r) { this.lastParams = {};
                        n.call(this, t, i, r);
                        this.$loadingMore = this.createLoadingMore();
                        this.loading = !1 } return t.prototype.append = function(n, t) { this.$loadingMore.remove();
                        this.loading = !1;
                        n.call(this, t);
                        this.showLoadingMore(t) && this.$results.append(this.$loadingMore) }, t.prototype.bind = function(t, i, r) { var u = this;
                        t.call(this, i, r);
                        i.on("query", function(n) { u.lastParams = n;
                            u.loading = !0 });
                        i.on("query:append", function(n) { u.lastParams = n;
                            u.loading = !0 });
                        this.$results.on("scroll", function() { var r = n.contains(document.documentElement, u.$loadingMore[0]),
                                t, i;!u.loading && r && (t = u.$results.offset().top + u.$results.outerHeight(!1), i = u.$loadingMore.offset().top + u.$loadingMore.outerHeight(!1), t + 50 >= i && u.loadMore()) }) }, t.prototype.loadMore = function() { this.loading = !0; var t = n.extend({}, { page: 1 }, this.lastParams);
                        t.page++;
                        this.trigger("query:append", t) }, t.prototype.showLoadingMore = function(n, t) { return t.pagination && t.pagination.more }, t.prototype.createLoadingMore = function() { var t = n('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"><\/li>'),
                            i = this.options.get("translations").get("loadingMore"); return t.html(i(this.lastParams)), t }, t }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(n, t) {
                    function i(t, i, r) { this.$dropdownParent = r.get("dropdownParent") || n(document.body);
                        t.call(this, i, r) } return i.prototype.bind = function(n, t, i) { var r = this,
                            u = !1;
                        n.call(this, t, i);
                        t.on("open", function() { if (r._showDropdown(), r._attachPositioningHandler(t), !u) { u = !0;
                                t.on("results:all", function() { r._positionDropdown();
                                    r._resizeDropdown() });
                                t.on("results:append", function() { r._positionDropdown();
                                    r._resizeDropdown() }) } });
                        t.on("close", function() { r._hideDropdown();
                            r._detachPositioningHandler(t) });
                        this.$dropdownContainer.on("mousedown", function(n) { n.stopPropagation() }) }, i.prototype.destroy = function(n) { n.call(this);
                        this.$dropdownContainer.remove() }, i.prototype.position = function(n, t, i) { t.attr("class", i.attr("class"));
                        t.removeClass("select2");
                        t.addClass("select2-container--open");
                        t.css({ position: "absolute", top: -999999 });
                        this.$container = i }, i.prototype.render = function(t) { var i = n("<span><\/span>"),
                            r = t.call(this); return i.append(r), this.$dropdownContainer = i, i }, i.prototype._hideDropdown = function() { this.$dropdownContainer.detach() }, i.prototype._attachPositioningHandler = function(i, r) { var u = this,
                            f = "scroll.select2." + r.id,
                            o = "resize.select2." + r.id,
                            s = "orientationchange.select2." + r.id,
                            e = this.$container.parents().filter(t.hasScroll);
                        e.each(function() { n(this).data("select2-scroll-position", { x: n(this).scrollLeft(), y: n(this).scrollTop() }) });
                        e.on(f, function() { var t = n(this).data("select2-scroll-position");
                            n(this).scrollTop(t.y) });
                        n(window).on(f + " " + o + " " + s, function() { u._positionDropdown();
                            u._resizeDropdown() }) }, i.prototype._detachPositioningHandler = function(i, r) { var u = "scroll.select2." + r.id,
                            f = "resize.select2." + r.id,
                            e = "orientationchange.select2." + r.id,
                            o = this.$container.parents().filter(t.hasScroll);
                        o.off(u);
                        n(window).off(u + " " + f + " " + e) }, i.prototype._positionDropdown = function() { var s = n(window),
                            u = this.$dropdown.hasClass("select2-dropdown--above"),
                            v = this.$dropdown.hasClass("select2-dropdown--below"),
                            t = null,
                            i = this.$container.offset(),
                            r, o;
                        i.bottom = i.top + this.$container.outerHeight(!1);
                        r = { height: this.$container.outerHeight(!1) };
                        r.top = i.top;
                        r.bottom = i.top + r.height; var h = { height: this.$dropdown.outerHeight(!1) },
                            c = { top: s.scrollTop(), bottom: s.scrollTop() + s.height() },
                            l = c.top < i.top - h.height,
                            a = c.bottom > i.bottom + h.height,
                            f = { left: i.left, top: r.bottom },
                            e = this.$dropdownParent;
                        e.css("position") === "static" && (e = e.offsetParent());
                        o = e.offset();
                        f.top -= o.top;
                        f.left -= o.left;
                        u || v || (t = "below");
                        a || !l || u ? !l && a && u && (t = "below") : t = "above";
                        (t == "above" || u && t !== "below") && (f.top = r.top - o.top - h.height);
                        t != null && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + t), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + t));
                        this.$dropdownContainer.css(f) }, i.prototype._resizeDropdown = function() { var n = { width: this.$container.outerWidth(!1) + "px" };
                        this.options.get("dropdownAutoWidth") && (n.minWidth = n.width, n.position = "relative", n.width = "auto");
                        this.$dropdown.css(n) }, i.prototype._showDropdown = function() { this.$dropdownContainer.appendTo(this.$dropdownParent);
                        this._positionDropdown();
                        this._resizeDropdown() }, i }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function n(t) { for (var r = 0, u, i = 0; i < t.length; i++) u = t[i], u.children ? r += n(u.children) : r++; return r }

                    function t(n, t, i, r) { this.minimumResultsForSearch = i.get("minimumResultsForSearch");
                        this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = Infinity);
                        n.call(this, t, i, r) } return t.prototype.showSearch = function(t, i) { return n(i.data.results) < this.minimumResultsForSearch ? !1 : t.call(this, i) }, t }), t.define("select2/dropdown/selectOnClose", [], function() {
                    function n() {} return n.prototype.bind = function(n, t, i) { var r = this;
                        n.call(this, t, i);
                        t.on("close", function(n) { r._handleSelectOnClose(n) }) }, n.prototype._handleSelectOnClose = function(n, t) { var r, u, i;
                        t && t.originalSelect2Event != null && (r = t.originalSelect2Event, r._type === "select" || r._type === "unselect") || (u = this.getHighlightedResults(), u.length < 1) || (i = u.data("data"), i.element != null && i.element.selected || i.element == null && i.selected) || this.trigger("select", { data: i }) }, n }), t.define("select2/dropdown/closeOnSelect", [], function() {
                    function n() {} return n.prototype.bind = function(n, t, i) { var r = this;
                        n.call(this, t, i);
                        t.on("select", function(n) { r._selectTriggered(n) });
                        t.on("unselect", function(n) { r._selectTriggered(n) }) }, n.prototype._selectTriggered = function(n, t) { var i = t.originalEvent;
                        i && i.ctrlKey || this.trigger("close", { originalEvent: i, originalSelect2Event: t }) }, n }), t.define("select2/i18n/en", [], function() { return { errorLoading: function() { return "The results could not be loaded." }, inputTooLong: function(n) { var t = n.input.length - n.maximum,
                                i = "Please delete " + t + " character"; return t != 1 && (i += "s"), i }, inputTooShort: function(n) { var t = n.minimum - n.input.length; return "Please enter " + t + " or more characters" }, loadingMore: function() { return "Loading more results…" }, maximumSelected: function(n) { var t = "You can only select " + n.maximum + " item"; return n.maximum != 1 && (t += "s"), t }, noResults: function() { return "No results found" }, searching: function() { return "Searching…" } } }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot) {
                    function st() { this.reset() } st.prototype.apply = function(l) { var vt, yt, pt, wt, bt, kt, dt, ct, lt, st, ot, ht, gt, at; if (l = n.extend(!0, {}, this.defaults, l), l.dataAdapter == null && (l.dataAdapter = l.ajax != null ? y : l.data != null ? v : a, l.minimumInputLength > 0 && (l.dataAdapter = h.Decorate(l.dataAdapter, b)), l.maximumInputLength > 0 && (l.dataAdapter = h.Decorate(l.dataAdapter, k)), l.maximumSelectionLength > 0 && (l.dataAdapter = h.Decorate(l.dataAdapter, d)), l.tags && (l.dataAdapter = h.Decorate(l.dataAdapter, p)), (l.tokenSeparators != null || l.tokenizer != null) && (l.dataAdapter = h.Decorate(l.dataAdapter, w)), l.query != null && (vt = t(l.amdBase + "compat/query"), l.dataAdapter = h.Decorate(l.dataAdapter, vt)), l.initSelection != null && (yt = t(l.amdBase + "compat/initSelection"), l.dataAdapter = h.Decorate(l.dataAdapter, yt))), l.resultsAdapter == null && (l.resultsAdapter = i, l.ajax != null && (l.resultsAdapter = h.Decorate(l.resultsAdapter, it)), l.placeholder != null && (l.resultsAdapter = h.Decorate(l.resultsAdapter, tt)), l.selectOnClose && (l.resultsAdapter = h.Decorate(l.resultsAdapter, ft))), l.dropdownAdapter == null && (l.multiple ? l.dropdownAdapter = g : (pt = h.Decorate(g, nt), l.dropdownAdapter = pt), l.minimumResultsForSearch !== 0 && (l.dropdownAdapter = h.Decorate(l.dropdownAdapter, ut)), l.closeOnSelect && (l.dropdownAdapter = h.Decorate(l.dropdownAdapter, et)), (l.dropdownCssClass != null || l.dropdownCss != null || l.adaptDropdownCssClass != null) && (wt = t(l.amdBase + "compat/dropdownCss"), l.dropdownAdapter = h.Decorate(l.dropdownAdapter, wt)), l.dropdownAdapter = h.Decorate(l.dropdownAdapter, rt)), l.selectionAdapter == null && (l.selectionAdapter = l.multiple ? u : r, l.placeholder != null && (l.selectionAdapter = h.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = h.Decorate(l.selectionAdapter, e)), l.multiple && (l.selectionAdapter = h.Decorate(l.selectionAdapter, o)), (l.containerCssClass != null || l.containerCss != null || l.adaptContainerCssClass != null) && (bt = t(l.amdBase + "compat/containerCss"), l.selectionAdapter = h.Decorate(l.selectionAdapter, bt)), l.selectionAdapter = h.Decorate(l.selectionAdapter, s)), typeof l.language == "string" && (l.language.indexOf("-") > 0 ? (kt = l.language.split("-"), dt = kt[0], l.language = [l.language, dt]) : l.language = [l.language]), n.isArray(l.language)) { for (ct = new c, l.language.push("en"), lt = l.language, st = 0; st < lt.length; st++) { ot = lt[st];
                                ht = {}; try { ht = c.loadPath(ot) } catch (ni) { try { ot = this.defaults.amdLanguageBase + ot;
                                        ht = c.loadPath(ot) } catch (ti) { l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + ot + '" could not be automatically loaded. A fallback will be used instead.'); continue } } ct.extend(ht) } l.translations = ct } else gt = c.loadPath(this.defaults.amdLanguageBase + "en"), at = new c(l.language), at.extend(gt), l.translations = at; return l };
                    st.prototype.reset = function() {
                        function i(n) {
                            function t(n) { return l[n] || n } return n.replace(/[^\u0000-\u007E]/g, t) }

                        function t(r, u) { var f, e, o, s, h, c; if (n.trim(r.term) === "") return u; if (u.children && u.children.length > 0) { for (f = n.extend(!0, {}, u), e = u.children.length - 1; e >= 0; e--) o = u.children[e], s = t(r, o), s == null && f.children.splice(e, 1); return f.children.length > 0 ? f : t(r, f) } return (h = i(u.text).toUpperCase(), c = i(r.term).toUpperCase(), h.indexOf(c) > -1) ? u : null } this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: h.escapeMarkup, language: ot, matcher: t, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function(n) { return n }, templateResult: function(n) { return n.text }, templateSelection: function(n) { return n.text }, theme: "default", width: "resolve" } };
                    st.prototype.set = function(t, i) { var f = n.camelCase(t),
                            r = {},
                            u;
                        r[f] = i;
                        u = h._convertData(r);
                        n.extend(this.defaults, u) }; return new st }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(n, t, i, r) {
                    function u(t, u) { if (this.options = t, u != null && this.fromElement(u), this.options = i.apply(this.options), u && u.is("input")) { var f = n(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = r.Decorate(this.options.dataAdapter, f) } } return u.prototype.fromElement = function(n) { var e = ["select2"],
                            f, u, i;
                        this.options.multiple == null && (this.options.multiple = n.prop("multiple"));
                        this.options.disabled == null && (this.options.disabled = n.prop("disabled"));
                        this.options.language == null && (n.prop("lang") ? this.options.language = n.prop("lang").toLowerCase() : n.closest("[lang]").prop("lang") && (this.options.language = n.closest("[lang]").prop("lang")));
                        this.options.dir == null && (this.options.dir = n.prop("dir") ? n.prop("dir") : n.closest("[dir]").prop("dir") ? n.closest("[dir]").prop("dir") : "ltr");
                        n.prop("disabled", this.options.disabled);
                        n.prop("multiple", this.options.multiple);
                        n.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), n.data("data", n.data("select2Tags")), n.data("tags", !0));
                        n.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), n.attr("ajax--url", n.data("ajaxUrl")), n.data("ajax--url", n.data("ajaxUrl")));
                        f = {};
                        f = t.fn.jquery && t.fn.jquery.substr(0, 2) == "1." && n[0].dataset ? t.extend(!0, {}, n[0].dataset, n.data()) : n.data();
                        u = t.extend(!0, {}, f);
                        u = r._convertData(u); for (i in u) t.inArray(i, e) > -1 || (t.isPlainObject(this.options[i]) ? t.extend(this.options[i], u[i]) : this.options[i] = u[i]); return this }, u.prototype.get = function(n) { return this.options[n] }, u.prototype.set = function(n, t) { this.options[n] = t }, u }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(n, t, i, r) { var u = function(n, i) { var f, e, r, o, s, h, c;
                        n.data("select2") != null && n.data("select2").destroy();
                        this.$element = n;
                        this.id = this._generateId(n);
                        i = i || {};
                        this.options = new t(i, n);
                        u.__super__.constructor.call(this);
                        f = n.attr("tabindex") || 0;
                        n.data("old-tabindex", f);
                        n.attr("tabindex", "-1");
                        e = this.options.get("dataAdapter");
                        this.dataAdapter = new e(n, this.options);
                        r = this.render();
                        this._placeContainer(r);
                        o = this.options.get("selectionAdapter");
                        this.selection = new o(n, this.options);
                        this.$selection = this.selection.render();
                        this.selection.position(this.$selection, r);
                        s = this.options.get("dropdownAdapter");
                        this.dropdown = new s(n, this.options);
                        this.$dropdown = this.dropdown.render();
                        this.dropdown.position(this.$dropdown, r);
                        h = this.options.get("resultsAdapter");
                        this.results = new h(n, this.options, this.dataAdapter);
                        this.$results = this.results.render();
                        this.results.position(this.$results, this.$dropdown);
                        c = this;
                        this._bindAdapters();
                        this._registerDomEvents();
                        this._registerDataEvents();
                        this._registerSelectionEvents();
                        this._registerDropdownEvents();
                        this._registerResultsEvents();
                        this._registerEvents();
                        this.dataAdapter.current(function(n) { c.trigger("selection:update", { data: n }) });
                        n.addClass("select2-hidden-accessible");
                        n.attr("aria-hidden", "true");
                        this._syncAttributes();
                        n.data("select2", this) }; return i.Extend(u, i.Observable), u.prototype._generateId = function(n) { var t = ""; return t = n.attr("id") != null ? n.attr("id") : n.attr("name") != null ? n.attr("name") + "-" + i.generateChars(2) : i.generateChars(4), t = t.replace(/(:|\.|\[|\]|,)/g, ""), "select2-" + t }, u.prototype._placeContainer = function(n) { n.insertAfter(this.$element); var t = this._resolveWidth(this.$element, this.options.get("width"));
                        t != null && n.css("width", t) }, u.prototype._resolveWidth = function(n, t) { var u, f, e, o, i, s, h, r; if (t == "resolve") return (u = this._resolveWidth(n, "style"), u != null) ? u : this._resolveWidth(n, "element"); if (t == "element") return (f = n.outerWidth(!1), f <= 0) ? "auto" : f + "px"; if (t == "style") { if (e = n.attr("style"), typeof e != "string") return null; for (o = e.split(";"), i = 0, s = o.length; i < s; i = i + 1)
                                if (h = o[i].replace(/\s/g, ""), r = h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), r !== null && r.length >= 1) return r[1]; return null } return t }, u.prototype._bindAdapters = function() { this.dataAdapter.bind(this, this.$container);
                        this.selection.bind(this, this.$container);
                        this.dropdown.bind(this, this.$container);
                        this.results.bind(this, this.$container) }, u.prototype._registerDomEvents = function() { var t = this,
                            r;
                        this.$element.on("change.select2", function() { t.dataAdapter.current(function(n) { t.trigger("selection:update", { data: n }) }) });
                        this.$element.on("focus.select2", function(n) { t.trigger("focus", n) });
                        this._syncA = i.bind(this._syncAttributes, this);
                        this._syncS = i.bind(this._syncSubtree, this);
                        this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        r != null ? (this._observer = new r(function(i) { n.each(i, t._syncA);
                            n.each(i, t._syncS) }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1)) }, u.prototype._registerDataEvents = function() { var n = this;
                        this.dataAdapter.on("*", function(t, i) { n.trigger(t, i) }) }, u.prototype._registerSelectionEvents = function() { var t = this,
                            i = ["toggle", "focus"];
                        this.selection.on("toggle", function() { t.toggleDropdown() });
                        this.selection.on("focus", function(n) { t.focus(n) });
                        this.selection.on("*", function(r, u) { n.inArray(r, i) === -1 && t.trigger(r, u) }) }, u.prototype._registerDropdownEvents = function() { var n = this;
                        this.dropdown.on("*", function(t, i) { n.trigger(t, i) }) }, u.prototype._registerResultsEvents = function() { var n = this;
                        this.results.on("*", function(t, i) { n.trigger(t, i) }) }, u.prototype._registerEvents = function() { var n = this;
                        this.on("open", function() { n.$container.addClass("select2-container--open") });
                        this.on("close", function() { n.$container.removeClass("select2-container--open") });
                        this.on("enable", function() { n.$container.removeClass("select2-container--disabled") });
                        this.on("disable", function() { n.$container.addClass("select2-container--disabled") });
                        this.on("blur", function() { n.$container.removeClass("select2-container--focus") });
                        this.on("query", function(t) { n.isOpen() || n.trigger("open", {});
                            this.dataAdapter.query(t, function(i) { n.trigger("results:all", { data: i, query: t }) }) });
                        this.on("query:append", function(t) { this.dataAdapter.query(t, function(i) { n.trigger("results:append", { data: i, query: t }) }) });
                        this.on("keypress", function(t) { var i = t.which;
                            n.isOpen() ? i === r.ESC || i === r.TAB || i === r.UP && t.altKey ? (n.close(), t.preventDefault()) : i === r.ENTER ? (n.trigger("results:select", {}), t.preventDefault()) : i === r.SPACE && t.ctrlKey ? (n.trigger("results:toggle", {}), t.preventDefault()) : i === r.UP ? (n.trigger("results:previous", {}), t.preventDefault()) : i === r.DOWN && (n.trigger("results:next", {}), t.preventDefault()) : (i === r.ENTER || i === r.SPACE || i === r.DOWN && t.altKey) && (n.open(), t.preventDefault()) }) }, u.prototype._syncAttributes = function() { this.options.set("disabled", this.$element.prop("disabled"));
                        this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, u.prototype._syncSubtree = function(n, t) { var i = !1,
                            f = this,
                            r, u; if (!n || !n.target || n.target.nodeName === "OPTION" || n.target.nodeName === "OPTGROUP") { if (t)
                                if (t.addedNodes && t.addedNodes.length > 0)
                                    for (r = 0; r < t.addedNodes.length; r++) u = t.addedNodes[r], u.selected && (i = !0);
                                else t.removedNodes && t.removedNodes.length > 0 && (i = !0);
                            else i = !0;
                            i && this.dataAdapter.current(function(n) { f.trigger("selection:update", { data: n }) }) } }, u.prototype.trigger = function(n, t) { var r = u.__super__.trigger,
                            f = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" },
                            e, i; if (t === undefined && (t = {}), n in f && (e = f[n], i = { prevented: !1, name: n, args: t }, r.call(this, e, i), i.prevented)) { t.prevented = !0; return } r.call(this, n, t) }, u.prototype.toggleDropdown = function() { this.options.get("disabled") || (this.isOpen() && (this.dropdown.options.options.multiple || !1) == !1 ? this.close() : this.open()) }, u.prototype.open = function() { this.isOpen() || this.trigger("query", {}) }, u.prototype.close = function() { this.isOpen() && this.trigger("close", {}) }, u.prototype.isOpen = function() { return this.$container.hasClass("select2-container--open") }, u.prototype.hasFocus = function() { return this.$container.hasClass("select2-container--focus") }, u.prototype.focus = function() { this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {})) }, u.prototype.enable = function(n) { this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
                        (n == null || n.length === 0) && (n = [!0]); var t = !n[0];
                        this.$element.prop("disabled", t) }, u.prototype.data = function() { this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var n = []; return this.dataAdapter.current(function(t) { n = t }), n }, u.prototype.val = function(t) { if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), t == null || t.length === 0) return this.$element.val(); var i = t[0];
                        n.isArray(i) && (i = n.map(i, function(n) { return n.toString() }));
                        this.$element.val(i).trigger("change") }, u.prototype.destroy = function() { this.$container.remove();
                        this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA);
                        this._observer != null ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1));
                        this._syncA = null;
                        this._syncS = null;
                        this.$element.off(".select2");
                        this.$element.attr("tabindex", this.$element.data("old-tabindex"));
                        this.$element.removeClass("select2-hidden-accessible");
                        this.$element.attr("aria-hidden", "false");
                        this.$element.removeData("select2");
                        this.dataAdapter.destroy();
                        this.selection.destroy();
                        this.dropdown.destroy();
                        this.results.destroy();
                        this.dataAdapter = null;
                        this.selection = null;
                        this.dropdown = null;
                        this.results = null }, u.prototype.render = function() { var t = n('<span class="select2 select2-container"><span class="selection"><\/span><span class="dropdown-wrapper" aria-hidden="true"><\/span><\/span>'); return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t }, u }), t.define("select2/compat/utils", ["jquery"], function(n) {
                    function t(t, i, r) { var u, f = [],
                            e;
                        u = n.trim(t.attr("class"));
                        u && (u = "" + u, n(u.split(/\s+/)).each(function() { this.indexOf("select2-") === 0 && f.push(this) }));
                        u = n.trim(i.attr("class"));
                        u && (u = "" + u, n(u.split(/\s+/)).each(function() { this.indexOf("select2-") !== 0 && (e = r(this), e != null && f.push(e)) }));
                        t.attr("class", f.join(" ")) } return { syncCssClasses: t } }), t.define("select2/compat/containerCss", ["jquery", "./utils"], function(n, t) {
                    function r() { return null }

                    function i() {} return i.prototype.render = function(i) { var o = i.call(this),
                            u = this.options.get("containerCssClass") || "",
                            f, s, e; return n.isFunction(u) && (u = u(this.$element)), f = this.options.get("adaptContainerCssClass"), f = f || r, u.indexOf(":all:") !== -1 && (u = u.replace(":all:", ""), s = f, f = function(n) { var t = s(n); return t != null ? t + " " + n : n }), e = this.options.get("containerCss") || {}, n.isFunction(e) && (e = e(this.$element)), t.syncCssClasses(o, this.$element, f), o.css(e), o.addClass(u), o }, i }), t.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(n, t) {
                    function r() { return null }

                    function i() {} return i.prototype.render = function(i) { var o = i.call(this),
                            u = this.options.get("dropdownCssClass") || "",
                            f, s, e; return n.isFunction(u) && (u = u(this.$element)), f = this.options.get("adaptDropdownCssClass"), f = f || r, u.indexOf(":all:") !== -1 && (u = u.replace(":all:", ""), s = f, f = function(n) { var t = s(n); return t != null ? t + " " + n : n }), e = this.options.get("dropdownCss") || {}, n.isFunction(e) && (e = e(this.$element)), t.syncCssClasses(o, this.$element, f), o.css(e), o.addClass(u), o }, i }), t.define("select2/compat/initSelection", ["jquery"], function(n) {
                    function t(n, t, i) { i.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2");
                        this.initSelection = i.get("initSelection");
                        this._isInitialized = !1;
                        n.call(this, t, i) } return t.prototype.current = function(t, i) { var r = this; if (this._isInitialized) { t.call(this, i); return } this.initSelection.call(null, this.$element, function(t) { r._isInitialized = !0;
                            n.isArray(t) || (t = [t]);
                            i(t) }) }, t }), t.define("select2/compat/inputData", ["jquery"], function(n) {
                    function t(n, t, i) { this._currentData = [];
                        this._valueSeparator = i.get("valueSeparator") || ",";
                        t.prop("type") === "hidden" && i.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead.");
                        n.call(this, t, i) } return t.prototype.current = function(t, i) {
                        function f(t, i) { var r = []; return t.selected || n.inArray(t.id, i) !== -1 ? (t.selected = !0, r.push(t)) : t.selected = !1, t.children && r.push.apply(r, f(t.children, i)), r } for (var u = [], e, r = 0; r < this._currentData.length; r++) e = this._currentData[r], u.push.apply(u, f(e, this.$element.val().split(this._valueSeparator)));
                        i(u) }, t.prototype.select = function(t, i) { if (this.options.get("multiple")) { var r = this.$element.val();
                            r += this._valueSeparator + i.id;
                            this.$element.val(r);
                            this.$element.trigger("change") } else this.current(function(t) { n.map(t, function(n) { n.selected = !1 }) }), this.$element.val(i.id), this.$element.trigger("change") }, t.prototype.unselect = function(n, t) { var i = this;
                        t.selected = !1;
                        this.current(function(n) { for (var f = [], u, r = 0; r < n.length; r++)(u = n[r], t.id != u.id) && f.push(u.id);
                            i.$element.val(f.join(i._valueSeparator));
                            i.$element.trigger("change") }) }, t.prototype.query = function(n, t, i) { for (var f = [], e, u, r = 0; r < this._currentData.length; r++) e = this._currentData[r], u = this.matches(t, e), u !== null && f.push(u);
                        i({ results: f }) }, t.prototype.addOptions = function(t, i) { var r = n.map(i, function(t) { return n.data(t[0], "data") });
                        this._currentData.push.apply(this._currentData, r) }, t }), t.define("select2/compat/matcher", ["jquery"], function(n) {
                    function t(t) {
                        function i(i, r) { var u = n.extend(!0, {}, r),
                                f, e, o; if (i.term == null || n.trim(i.term) === "") return u; if (r.children) { for (f = r.children.length - 1; f >= 0; f--) e = r.children[f], o = t(i.term, e.text, e), o || u.children.splice(f, 1); if (u.children.length > 0) return u } return t(i.term, r.text, r) ? u : null } return i } return t }), t.define("select2/compat/query", [], function() {
                    function n(n, t, i) { i.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2.");
                        n.call(this, t, i) } return n.prototype.query = function(n, t, i) { t.callback = i; var r = this.options.get("query");
                        r.call(null, t) }, n }), t.define("select2/dropdown/attachContainer", [], function() {
                    function n(n, t, i) { n.call(this, t, i) } return n.prototype.position = function(n, t, i) { var r = i.find(".dropdown-wrapper");
                        r.append(t);
                        t.addClass("select2-dropdown--below");
                        i.addClass("select2-container--below") }, n }), t.define("select2/dropdown/stopPropagation", [], function() {
                    function n() {} return n.prototype.bind = function(n, t, i) { n.call(this, t, i);
                        this.$dropdown.on("blur change click dblclick focus focusin focusout input keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseover mouseup search touchend touchstart", function(n) { n.stopPropagation() }) }, n }), t.define("select2/selection/stopPropagation", [], function() {
                    function n() {} return n.prototype.bind = function(n, t, i) { n.call(this, t, i);
                        this.$selection.on("blur change click dblclick focus focusin focusout input keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseover mouseup search touchend touchstart", function(n) { n.stopPropagation() }) }, n }),
                function(i) { typeof t.define == "function" && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], i) : typeof exports == "object" ? module.exports = i : i(n) }(function(n) {
                    function e(r) { var f = r || window.event,
                            w = h.call(arguments, 1),
                            l = 0,
                            o = 0,
                            e = 0,
                            a = 0,
                            b = 0,
                            k = 0,
                            v, y, p; if (r = n.event.fix(f), r.type = "mousewheel", "detail" in f && (e = f.detail * -1), "wheelDelta" in f && (e = f.wheelDelta), "wheelDeltaY" in f && (e = f.wheelDeltaY), "wheelDeltaX" in f && (o = f.wheelDeltaX * -1), "axis" in f && f.axis === f.HORIZONTAL_AXIS && (o = e * -1, e = 0), l = e === 0 ? o : e, "deltaY" in f && (e = f.deltaY * -1, l = e), "deltaX" in f && (o = f.deltaX, e === 0 && (l = o * -1)), e !== 0 || o !== 0) return f.deltaMode === 1 ? (v = n.data(this, "mousewheel-line-height"), l *= v, e *= v, o *= v) : f.deltaMode === 2 && (y = n.data(this, "mousewheel-page-height"), l *= y, e *= y, o *= y), a = Math.max(Math.abs(e), Math.abs(o)), (!t || a < t) && (t = a, s(f, a) && (t /= 40)), s(f, a) && (l /= 40, o /= 40, e /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / t), o = Math[o >= 1 ? "floor" : "ceil"](o / t), e = Math[e >= 1 ? "floor" : "ceil"](e / t), i.settings.normalizeOffset && this.getBoundingClientRect && (p = this.getBoundingClientRect(), b = r.clientX - p.left, k = r.clientY - p.top), r.deltaX = o, r.deltaY = e, r.deltaFactor = t, r.offsetX = b, r.offsetY = k, r.deltaMode = 0, w.unshift(r, l, o, e), u && clearTimeout(u), u = setTimeout(c, 200), (n.event.dispatch || n.event.handle).apply(this, w) }

                    function c() { t = null }

                    function s(n, t) { return i.settings.adjustOldDeltas && n.type === "mousewheel" && t % 120 == 0 } var o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        h = Array.prototype.slice,
                        u, t, f, i; if (n.event.fixHooks)
                        for (f = o.length; f;) n.event.fixHooks[o[--f]] = n.event.mouseHooks;
                    i = n.event.special.mousewheel = { version: "3.1.12", setup: function() { if (this.addEventListener)
                                for (var t = r.length; t;) this.addEventListener(r[--t], e, !1);
                            else this.onmousewheel = e;
                            n.data(this, "mousewheel-line-height", i.getLineHeight(this));
                            n.data(this, "mousewheel-page-height", i.getPageHeight(this)) }, teardown: function() { if (this.removeEventListener)
                                for (var t = r.length; t;) this.removeEventListener(r[--t], e, !1);
                            else this.onmousewheel = null;
                            n.removeData(this, "mousewheel-line-height");
                            n.removeData(this, "mousewheel-page-height") }, getLineHeight: function(t) { var r = n(t),
                                i = r["offsetParent" in n.fn ? "offsetParent" : "parent"](); return i.length || (i = n("body")), parseInt(i.css("fontSize"), 10) || parseInt(r.css("fontSize"), 10) || 16 }, getPageHeight: function(t) { return n(t).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };
                    n.fn.extend({ mousewheel: function(n) { return n ? this.bind("mousewheel", n) : this.trigger("mousewheel") }, unmousewheel: function(n) { return this.unbind("mousewheel", n) } }) }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(n, t, i, r) { if (n.fn.select2 == null) { var u = ["open", "close", "destroy"];
                        n.fn.select2 = function(t) { if (t = t || {}, typeof t == "object") return this.each(function() { var r = n.extend(!0, {}, t),
                                    u = new i(n(this), r) }), this; if (typeof t == "string") { var r, f = Array.prototype.slice.call(arguments, 1); return (this.each(function() { var i = n(this).data("select2");
                                    i == null && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2.");
                                    r = i[t].apply(i, f) }), n.inArray(t, u) > -1) ? this : r } throw new Error("Invalid arguments for Select2: " + t); } } return n.fn.select2.defaults == null && (n.fn.select2.defaults = r), i }), { define: t.define, require: t.require } }(),
        i = t.require("jquery.select2"); return n.fn.select2.amd = t, i });
! function(n, t, i) {! function(n) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], n) : jQuery && !jQuery.fn.qtip && n(jQuery) }(function(r) { "use strict";

        function ui(n, t, i, f) { this.id = i;
            this.target = n;
            this.tooltip = s;
            this.elements = { target: n };
            this._id = o + "-" + i;
            this.timers = { img: {} };
            this.options = t;
            this.plugins = {};
            this.cache = { event: {}, target: r(), disabled: u, attr: f, onTooltip: u, lastClass: "" };
            this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = u }

        function ft(n) { return n === s || "object" !== r.type(n) }

        function vi(n) { return !(r.isFunction(n) || n && n.attr || n.length || "object" === r.type(n) && (n.jquery || n.then)) }

        function wt(n) { var t, e, i, o; return ft(n) ? u : (ft(n.metadata) && (n.metadata = { type: n.metadata }), "content" in n && (t = n.content, ft(t) || t.jquery || t.done ? (e = vi(t) ? u : t, t = n.content = { text: e }) : e = t.text, "ajax" in t && (i = t.ajax, o = i && i.once !== u, delete t.ajax, t.text = function(n, t) { var u = e || r(this).attr(t.options.content.attr) || "Loading...",
                    f = r.ajax(r.extend({}, i, { context: t })).then(i.success, s, i.error).then(function(n) { return n && o && t.set("content.text", n), n }, function(n, i, r) { t.destroyed || 0 === n.status || t.set("content.text", i + ": " + r) }); return o ? u : (t.set("content.text", u), f) }), "title" in t && (r.isPlainObject(t.title) && (t.button = t.title.button, t.title = t.title.text), vi(t.title || u) && (t.title = u))), "position" in n && ft(n.position) && (n.position = { my: n.position, at: n.position }), "show" in n && ft(n.show) && (n.show = n.show.jquery ? { target: n.show } : n.show === f ? { ready: f } : { event: n.show }), "hide" in n && ft(n.hide) && (n.hide = n.hide.jquery ? { target: n.hide } : { event: n.hide }), "style" in n && ft(n.style) && (n.style = { classes: n.style }), r.each(h, function() { this.sanitize && this.sanitize(n) }), n) }

        function yi(n, t) { for (var u, f = 0, i = n, r = t.split("."); i = i[r[f++]];) f < r.length && (u = i); return [u || n, r.pop()] }

        function cr(n, t) { var i, r, u; for (i in this.checks)
                if (this.checks.hasOwnProperty(i))
                    for (r in this.checks[i]) this.checks[i].hasOwnProperty(r) && (u = new RegExp(r, "i").exec(n)) && (t.push(u), ("builtin" === i || this.plugins[i]) && this.checks[i][r].apply(this.plugins[i] || this, t)) }

        function bt(n) { return wr.concat("").join(n ? "-" + n + " " : " ") }

        function kt(n, t) { return t > 0 ? setTimeout(r.proxy(n, this), t) : void n.call(this) }

        function lr(n) { this.tooltip.hasClass(a) || (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this.timers.show = kt.call(this, function() { this.toggle(f, n) }, this.options.show.delay)) }

        function ar(n) { if (!this.tooltip.hasClass(a) && !this.destroyed) { var t = r(n.relatedTarget),
                    i = t.closest(rt)[0] === this.tooltip[0],
                    f = t[0] === this.options.show.target[0]; if (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this !== t[0] && "mouse" === this.options.position.target && i || this.options.hide.fixed && /mouse(out|leave|move)/.test(n.type) && (i || f)) try { n.preventDefault();
                    n.stopImmediatePropagation() } catch (e) {} else this.timers.hide = kt.call(this, function() { this.toggle(u, n) }, this.options.hide.delay, this) } }

        function fi(n) {!this.tooltip.hasClass(a) && this.options.hide.inactive && (clearTimeout(this.timers.inactive), this.timers.inactive = kt.call(this, function() { this.hide(n) }, this.options.hide.inactive)) }

        function pi(n) { this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(n) }

        function wi(n, i, u) { r(t.body).delegate(n, (i.split ? i : i.join("." + o + " ")) + "." + o, function() { var n = c.api[r.attr(this, ni)];
                n && !n.disabled && u.apply(n, arguments) }) }

        function vr(n, i, e) { var y, l, v, h, b, k = r(t.body),
                p = n[0] === t ? k : n,
                w = n.metadata ? n.metadata(e.metadata) : s,
                d = "html5" === e.metadata.type && w ? w[e.metadata.name] : s,
                a = n.data(e.metadata.name || "qtipopts"); try { a = "string" == typeof a ? r.parseJSON(a) : a } catch (g) {} if (h = r.extend(f, {}, c.defaults, e, "object" == typeof a ? wt(a) : s, wt(d || w)), l = h.position, h.id = i, "boolean" == typeof h.content.text) { if (v = n.attr(h.content.attr), h.content.attr === u || !v) return u;
                h.content.text = v } if (l.container.length || (l.container = k), l.target === u && (l.target = p), h.show.target === u && (h.show.target = p), h.show.solo === f && (h.show.solo = l.container.closest("body")), h.hide.target === u && (h.hide.target = p), h.position.viewport === f && (h.position.viewport = l.container), l.container = l.container.eq(0), l.at = new tt(l.at, f), l.my = new tt(l.my), n.data(o))
                if (h.overwrite) n.qtip("destroy", !0);
                else if (h.overwrite === u) return u; return n.attr(ei, i), h.suppress && (b = n.attr("title")) && n.removeAttr("title").attr(ut, b).attr("title", ""), y = new ui(n, h, i, !!v), n.data(o, y), y }

        function at(n) { return n.charAt(0).toUpperCase() + n.slice(1) }

        function yr(n, t) { var r, u, f = t.charAt(0).toUpperCase() + t.slice(1),
                e = (t + " " + kr.join(f + " ") + f).split(" "),
                o = 0; if (li[t]) return n.css(li[t]); for (; r = e[o++];)
                if ((u = n.css(r)) !== i) return li[t] = r, u }

        function st(n, t) { return Math.ceil(parseFloat(yr(n, t))) }

        function bi(n, t) { this._ns = "tip";
            this.options = t;
            this.offset = t.offset;
            this.size = [t.width, t.height];
            this.qtip = n;
            this.init(n) }

        function ki(n, t) { this.options = t;
            this._ns = "-modal";
            this.qtip = n;
            this.init(n) }

        function di(n) { this._ns = "ie6";
            this.qtip = n;
            this.init(n) } var c, e, tt, dt, gt, f = !0,
            u = !1,
            s = null,
            w = "x",
            y = "y",
            d = "width",
            vt = "height",
            b = "top",
            p = "left",
            it = "bottom",
            k = "right",
            l = "center",
            pr = "flipinvert",
            et = "shift",
            h = {},
            o = "qtip",
            ei = "data-hasqtip",
            ni = "data-qtip-id",
            wr = ["ui-widget", "ui-tooltip"],
            rt = "." + o,
            gi = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),
            nr = o + "-fixed",
            oi = o + "-default",
            ht = o + "-focus",
            br = o + "-hover",
            a = o + "-disabled",
            ct = "_replacedByqTip",
            ut = "oldtitle",
            v = { ie: function() { for (var n = 4, i = t.createElement("div");
                        (i.innerHTML = "<!--[if gt IE " + n + "]><i><\/i><![endif]-->") && i.getElementsByTagName("i")[0]; n += 1); return n > 4 ? n : NaN }(), iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || u },
            tr, ir, yt, ai, g, ri, nt, sr, hr;
        e = ui.prototype;
        e._when = function(n) { return r.when.apply(r, n) };
        e.render = function(n) { if (this.rendered || this.destroyed) return this; var i = this,
                t = this.options,
                s = this.cache,
                y = this.elements,
                p = t.content.text,
                l = t.content.title,
                w = t.content.button,
                e = t.position,
                v = []; return r.attr(this.target[0], "aria-describedby", this._id), s.posClass = this._createPosClass((this.position = { my: e.my, at: e.at }).my), this.tooltip = y.tooltip = r("<div/>", { id: this._id, "class": [o, oi, t.style.classes, s.posClass].join(" "), width: t.style.width || "", height: t.style.height || "", tracking: "mouse" === e.target && e.adjust.mouse, role: "alert", "aria-live": "polite", "aria-atomic": u, "aria-describedby": this._id + "-content", "aria-hidden": f }).toggleClass(a, this.disabled).attr(ni, this.id).data(o, this).appendTo(e.container).append(y.content = r("<div />", { "class": o + "-content", id: this._id + "-content", "aria-atomic": f })), this.rendered = -1, this.positioning = f, l && (this._createTitle(), r.isFunction(l) || v.push(this._updateTitle(l, u))), w && this._createButton(), r.isFunction(p) || v.push(this._updateContent(p, u)), this.rendered = f, this._setWidget(), r.each(h, function(n) { var t; "render" === this.initialize && (t = this(i)) && (i.plugins[n] = t) }), this._unassignEvents(), this._assignEvents(), this._when(v).then(function() { i._trigger("render");
                i.positioning = u;
                i.hiddenDuringWait || !t.show.ready && !n || i.toggle(f, s.event, u);
                i.hiddenDuringWait = u }), c.api[this.id] = this, this };
        e.destroy = function(n) {
            function t() { if (!this.destroyed) { this.destroyed = f; var n, t = this.target,
                        i = t.attr(ut);
                    this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove();
                    r.each(this.plugins, function() { this.destroy && this.destroy() }); for (n in this.timers) this.timers.hasOwnProperty(n) && clearTimeout(this.timers[n]);
                    t.removeData(o).removeAttr(ni).removeAttr(ei).removeAttr("aria-describedby");
                    this.options.suppress && i && t.attr("title", i).removeAttr(ut);
                    this._unassignEvents();
                    this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = s;
                    delete c.api[this.id] } } return this.destroyed ? this.target : (n === f && "hide" !== this.triggering || !this.rendered ? t.call(this) : (this.tooltip.one("tooltiphidden", r.proxy(t, this)), !this.triggering && this.hide()), this.target) };
        dt = e.checks = { builtin: { "^id$": function(n, t, i, e) { var s = i === f ? c.nextid : i,
                        h = o + "-" + s;
                    s !== u && s.length > 0 && !r("#" + h).length ? (this._id = h, this.rendered && (this.tooltip[0].id = this._id, this.elements.content[0].id = this._id + "-content", this.elements.title[0].id = this._id + "-title")) : n[t] = e }, "^prerender": function(n, t, i) { i && !this.rendered && this.render(this.options.show.ready) }, "^content.text$": function(n, t, i) { this._updateContent(i) }, "^content.attr$": function(n, t, i, r) { this.options.content.text === this.target.attr(r) && this._updateContent(this.target.attr(i)) }, "^content.title$": function(n, t, i) { return i ? (i && !this.elements.title && this._createTitle(), void this._updateTitle(i)) : this._removeTitle() }, "^content.button$": function(n, t, i) { this._updateButton(i) }, "^content.title.(text|button)$": function(n, t, i) { this.set("content." + t, i) }, "^position.(my|at)$": function(n, t, i) { "string" == typeof i && (this.position[t] = n[t] = new tt(i, "at" === t)) }, "^position.container$": function(n, t, i) { this.rendered && this.tooltip.appendTo(i) }, "^show.ready$": function(n, t, i) { i && (!this.rendered && this.render(f) || this.toggle(f)) }, "^style.classes$": function(n, t, i, r) { this.rendered && this.tooltip.removeClass(r).addClass(i) }, "^style.(width|height)": function(n, t, i) { this.rendered && this.tooltip.css(t, i) }, "^style.widget|content.title": function() { this.rendered && this._setWidget() }, "^style.def": function(n, t, i) { this.rendered && this.tooltip.toggleClass(oi, !!i) }, "^events.(render|show|move|hide|focus|blur)$": function(n, t, i) { this.rendered && this.tooltip[(r.isFunction(i) ? "" : "un") + "bind"]("tooltip" + t, i) }, "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() { if (this.rendered) { var n = this.options.position;
                        this.tooltip.attr("tracking", "mouse" === n.target && n.adjust.mouse);
                        this._unassignEvents();
                        this._assignEvents() } } } };
        e.get = function(n) { if (this.destroyed) return this; var i = yi(this.options, n.toLowerCase()),
                t = i[0][i[1]]; return t.precedance ? t.string() : t };
        tr = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i;
        ir = /^prerender|show\.ready/i;
        e.set = function(n, t) { if (this.destroyed) return this; var o, h = this.rendered,
                i = u,
                e = this.options; return "string" == typeof n ? (o = n, n = {}, n[o] = t) : n = r.extend({}, n), r.each(n, function(t, u) { if (h && ir.test(t)) return void delete n[t]; var o, f = yi(e, t.toLowerCase());
                o = f[0][f[1]];
                f[0][f[1]] = u && u.nodeType ? r(u) : u;
                i = tr.test(t) || i;
                n[t] = [f[0], f[1], u, o] }), wt(e), this.positioning = f, r.each(n, r.proxy(cr, this)), this.positioning = u, this.rendered && this.tooltip[0].offsetWidth > 0 && i && this.reposition("mouse" === e.position.target ? s : this.cache.event), this };
        e._update = function(n, t) { var i = this,
                e = this.cache; return this.rendered && n ? (r.isFunction(n) && (n = n.call(this.elements.target, e.event, this) || ""), r.isFunction(n.then) ? (e.waiting = f, n.then(function(n) { return e.waiting = u, i._update(n, t) }, s, function(n) { return i._update(n, t) })) : n === u || !n && "" !== n ? u : (n.jquery && n.length > 0 ? t.empty().append(n.css({ display: "block", visibility: "visible" })) : t.html(n), this._waitForContent(t).then(function(n) { i.rendered && i.tooltip[0].offsetWidth > 0 && i.reposition(e.event, !n.length) }))) : u };
        e._waitForContent = function(n) { var t = this.cache; return t.waiting = f, (r.fn.imagesLoaded ? n.imagesLoaded() : (new r.Deferred).resolve([])).done(function() { t.waiting = u }).promise() };
        e._updateContent = function(n, t) { this._update(n, this.elements.content, t) };
        e._updateTitle = function(n, t) { this._update(n, this.elements.title, t) === u && this._removeTitle(u) };
        e._createTitle = function() { var n = this.elements,
                t = this._id + "-title";
            n.titlebar && this._removeTitle();
            n.titlebar = r("<div />", { "class": o + "-titlebar " + (this.options.style.widget ? bt("header") : "") }).append(n.title = r("<div />", { id: t, "class": o + "-title", "aria-atomic": f })).insertBefore(n.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function(n) { r(this).toggleClass("ui-state-active ui-state-focus", "down" === n.type.substr(-4)) }).delegate(".qtip-close", "mouseover mouseout", function(n) { r(this).toggleClass("ui-state-hover", "mouseover" === n.type) });
            this.options.content.button && this._createButton() };
        e._removeTitle = function(n) { var t = this.elements;
            t.title && (t.titlebar.remove(), t.titlebar = t.title = t.button = s, n !== u && this.reposition()) };
        e._createPosClass = function(n) { return o + "-pos-" + (n || this.options.position.my).abbrev() };
        e.reposition = function(i, e) { if (!this.rendered || this.positioning || this.destroyed) return this;
            this.positioning = f; var a, y, ut, ht, c = this.cache,
                d = this.tooltip,
                w = this.options.position,
                o = w.target,
                et = w.my,
                g = w.at,
                ot = w.viewport,
                ct = w.container,
                ft = w.adjust,
                vt = ft.method.split(" "),
                lt = d.outerWidth(u),
                at = d.outerHeight(u),
                nt = 0,
                tt = 0,
                yt = d.css("position"),
                s = { left: 0, top: 0 },
                wt = d[0].offsetWidth > 0,
                bt = i && "scroll" === i.type,
                st = r(n),
                pt = ct[0].ownerDocument,
                rt = this.mouse; if (r.isArray(o) && 2 === o.length) g = { x: p, y: b }, s = { left: o[0], top: o[1] };
            else if ("mouse" === o) g = { x: p, y: b }, (!ft.mouse || this.options.hide.distance) && c.origin && c.origin.pageX ? i = c.origin : !i || i && ("resize" === i.type || "scroll" === i.type) ? i = c.event : rt && rt.pageX && (i = rt), "static" !== yt && (s = ct.offset()), pt.body.offsetWidth !== (n.innerWidth || pt.documentElement.clientWidth) && (y = r(t.body).offset()), s = { left: i.pageX - s.left + (y && y.left || 0), top: i.pageY - s.top + (y && y.top || 0) }, ft.mouse && bt && rt && (s.left -= (rt.scrollX || 0) - st.scrollLeft(), s.top -= (rt.scrollY || 0) - st.scrollTop());
            else { if ("event" === o ? i && i.target && "scroll" !== i.type && "resize" !== i.type ? c.target = r(i.target) : i.target || (c.target = this.elements.target) : "event" !== o && (c.target = r(o.jquery ? o : this.elements.target)), o = c.target, o = r(o).eq(0), 0 === o.length) return this;
                o[0] === t || o[0] === n ? (nt = v.iOS ? n.innerWidth : o.width(), tt = v.iOS ? n.innerHeight : o.height(), o[0] === n && (s = { top: (ot || o).scrollTop(), left: (ot || o).scrollLeft() })) : h.imagemap && o.is("area") ? a = h.imagemap(this, o, g, h.viewport ? vt : u) : h.svg && o && o[0].ownerSVGElement ? a = h.svg(this, o, g, h.viewport ? vt : u) : (nt = o.outerWidth(u), tt = o.outerHeight(u), s = o.offset());
                a && (nt = a.width, tt = a.height, y = a.offset, s = a.position);
                s = this.reposition.offset(o, s, ct);
                (v.iOS > 3.1 && v.iOS < 4.1 || v.iOS >= 4.3 && v.iOS < 4.33 || !v.iOS && "fixed" === yt) && (s.left -= st.scrollLeft(), s.top -= st.scrollTop());
                (!a || a && a.adjustable !== u) && (s.left += g.x === k ? nt : g.x === l ? nt / 2 : 0, s.top += g.y === it ? tt : g.y === l ? tt / 2 : 0) } return s.left += ft.x + (et.x === k ? -lt : et.x === l ? -lt / 2 : 0), s.top += ft.y + (et.y === it ? -at : et.y === l ? -at / 2 : 0), h.viewport ? (ut = s.adjusted = h.viewport(this, s, w, nt, tt, lt, at), y && ut.left && (s.left += y.left), y && ut.top && (s.top += y.top), ut.my && (this.position.my = ut.my)) : s.adjusted = { left: 0, top: 0 }, c.posClass !== (ht = this._createPosClass(this.position.my)) && (c.posClass = ht, d.removeClass(c.posClass).addClass(ht)), this._trigger("move", [s, ot.elem || ot], i) ? (delete s.adjusted, e === u || !wt || isNaN(s.left) || isNaN(s.top) || "mouse" === o || !r.isFunction(w.effect) ? d.css(s) : r.isFunction(w.effect) && (w.effect.call(d, this, r.extend({}, s)), d.queue(function(n) { r(this).css({ opacity: "", height: "" });
                v.ie && this.style.removeAttribute("filter");
                n() })), this.positioning = u, this) : this };
        e.reposition.offset = function(n, i, u) {
            function s(n, t) { i.left += t * n.scrollLeft();
                i.top += t * n.scrollTop() } if (!u[0]) return i; var o, h, e, c, l = r(n[0].ownerDocument),
                a = !!v.ie && "CSS1Compat" !== t.compatMode,
                f = u[0];
            do "static" !== (h = r.css(f, "position")) && ("fixed" === h ? (e = f.getBoundingClientRect(), s(l, -1)) : (e = r(f).position(), e.left += parseFloat(r.css(f, "borderLeftWidth")) || 0, e.top += parseFloat(r.css(f, "borderTopWidth")) || 0), i.left -= e.left + (parseFloat(r.css(f, "marginLeft")) || 0), i.top -= e.top + (parseFloat(r.css(f, "marginTop")) || 0), o || "hidden" === (c = r.css(f, "overflow")) || "visible" === c || (o = r(f))); while (f = f.offsetParent); return o && (o[0] !== l[0] || a) && s(o, 1), i };
        yt = (tt = e.reposition.Corner = function(n, t) { n = ("" + n).replace(/([A-Z])/, " $1").replace(/middle/gi, l).toLowerCase();
            this.x = (n.match(/left|right/i) || n.match(/center/) || ["inherit"])[0].toLowerCase();
            this.y = (n.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase();
            this.forceY = !!t; var i = n.charAt(0);
            this.precedance = "t" === i || "b" === i ? y : w }).prototype;
        yt.invert = function(n, t) { this[n] = this[n] === p ? k : this[n] === k ? p : t || this[n] };
        yt.string = function(n) { var t = this.x,
                i = this.y,
                r = t !== i ? "center" === t || "center" !== i && (this.precedance === y || this.forceY) ? [i, t] : [t, i] : [t]; return n !== !1 ? r.join(" ") : r };
        yt.abbrev = function() { var n = this.string(!1); return n[0].charAt(0) + (n[1] && n[1].charAt(0) || "") };
        yt.clone = function() { return new tt(this.string(), this.forceY) };
        e.toggle = function(n, i) { var c = this.cache,
                b = this.options,
                e = this.tooltip; if (i) { if (/over|enter/.test(i.type) && c.event && /out|leave/.test(c.event.type) && b.show.target.add(i.target).length === b.show.target.length && e.has(i.relatedTarget).length) return this;
                c.event = r.event.fix(i) } if (this.waiting && !n && (this.hiddenDuringWait = f), !this.rendered) return n ? this.render(1) : this; if (this.destroyed || this.disabled) return this; var y, p, l, w = n ? "show" : "hide",
                h = this.options[w],
                k = this.options.position,
                a = this.options.content,
                d = this.tooltip.css("width"),
                g = this.tooltip.is(":visible"),
                nt = n || 1 === h.target.length,
                tt = !i || h.target.length < 2 || c.target[0] === i.target; return (typeof n).search("boolean|number") && (n = !g), y = !e.is(":animated") && g === n && tt, p = y ? s : !!this._trigger(w, [90]), this.destroyed ? this : (p !== u && n && this.focus(i), !p || y ? this : (r.attr(e[0], "aria-hidden", !n), n ? (this.mouse && (c.origin = r.event.fix(this.mouse)), r.isFunction(a.text) && this._updateContent(a.text, u), r.isFunction(a.title) && this._updateTitle(a.title, u), !gt && "mouse" === k.target && k.adjust.mouse && (r(t).bind("mousemove." + o, this._storeMouse), gt = f), d || e.css("width", e.outerWidth(u)), this.reposition(i, arguments[2]), d || e.css("width", ""), h.solo && ("string" == typeof h.solo ? r(h.solo) : r(rt, h.solo)).not(e).not(h.target).qtip("hide", new r.Event("tooltipsolo"))) : (clearTimeout(this.timers.show), delete c.origin, gt && !r(rt + '[tracking="true"]:visible', h.solo).not(e).length && (r(t).unbind("mousemove." + o), gt = u), this.blur(i)), l = r.proxy(function() { n ? (v.ie && e[0].style.removeAttribute("filter"), e.css("overflow", ""), "string" == typeof h.autofocus && r(this.options.show.autofocus, e).focus(), this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : e.css({ display: "", visibility: "", opacity: "", left: "", top: "" });
                this._trigger(n ? "visible" : "hidden") }, this), h.effect === u || nt === u ? (e[w](), l()) : r.isFunction(h.effect) ? (e.stop(1, 1), h.effect.call(e, this), e.queue("fx", function(n) { l();
                n() })) : e.fadeTo(90, n ? 1 : 0, l), n && h.target.trigger("qtip-" + this.id + "-inactive"), this)) };
        e.show = function(n) { return this.toggle(f, n) };
        e.hide = function(n) { return this.toggle(u, n) };
        e.focus = function(n) { if (!this.rendered || this.destroyed) return this; var t = r(rt),
                i = this.tooltip,
                f = parseInt(i[0].style.zIndex, 10),
                u = c.zindex + t.length; return i.hasClass(ht) || this._trigger("focus", [u], n) && (f !== u && (t.each(function() { this.style.zIndex > f && (this.style.zIndex = this.style.zIndex - 1) }), t.filter("." + ht).qtip("blur", n)), i.addClass(ht)[0].style.zIndex = u), this };
        e.blur = function(n) { return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass(ht), this._trigger("blur", [this.tooltip.css("zIndex")], n), this) };
        e.disable = function(n) { return this.destroyed ? this : ("toggle" === n ? n = !(this.rendered ? this.tooltip.hasClass(a) : this.disabled) : "boolean" != typeof n && (n = f), this.rendered && this.tooltip.toggleClass(a, n).attr("aria-disabled", n), this.disabled = !!n, this) };
        e.enable = function() { return this.disable(u) };
        e._createButton = function() { var e = this,
                n = this.elements,
                i = n.tooltip,
                t = this.options.content.button,
                s = "string" == typeof t,
                f = s ? t : "Close tooltip";
            n.button && n.button.remove();
            n.button = t.jquery ? t : r("<a />", { "class": "qtip-close " + (this.options.style.widget ? "" : o + "-icon"), title: f, "aria-label": f }).prepend(r("<span />", { "class": "ui-icon ui-icon-close", html: "&times;" }));
            n.button.appendTo(n.titlebar || i).attr("role", "button").click(function(n) { return i.hasClass(a) || e.hide(n), u }) };
        e._updateButton = function(n) { if (!this.rendered) return u; var t = this.elements.button;
            n ? this._createButton() : t.remove() };
        e._setWidget = function() { var t = this.options.style.widget,
                n = this.elements,
                i = n.tooltip,
                r = i.hasClass(a);
            i.removeClass(a);
            a = t ? "ui-state-disabled" : "qtip-disabled";
            i.toggleClass(a, r);
            i.toggleClass("ui-helper-reset " + bt(), t).toggleClass(oi, this.options.style.def && !t);
            n.content && n.content.toggleClass(bt("content"), t);
            n.titlebar && n.titlebar.toggleClass(bt("header"), t);
            n.button && n.button.toggleClass(o + "-icon", !t) };
        e._storeMouse = function(n) { return (this.mouse = r.event.fix(n)).type = "mousemove", this };
        e._bind = function(n, t, i, u, f) { if (n && i && t.length) { var e = "." + this._id + (u ? "-" + u : ""); return r(n).bind((t.split ? t : t.join(e + " ")) + e, r.proxy(i, f || this)), this } };
        e._unbind = function(n, t) { return n && r(n).unbind("." + this._id + (t ? "-" + t : "")), this };
        e._trigger = function(n, t, i) { var f = new r.Event("tooltip" + n); return f.originalEvent = i && r.extend({}, i) || this.cache.event || s, this.triggering = n, this.tooltip.trigger(f, [this].concat(t || [])), this.triggering = u, !f.isDefaultPrevented() };
        e._bindEvents = function(n, t, i, u, f, e) { var o = i.filter(u).add(u.filter(i)),
                s = [];
            o.length && (r.each(t, function(t, i) { var u = r.inArray(i, n);
                u > -1 && s.push(n.splice(u, 1)[0]) }), s.length && (this._bind(o, s, function(n) { var t = this.rendered ? this.tooltip[0].offsetWidth > 0 : !1;
                (t ? e : f).call(this, n) }), i = i.not(o), u = u.not(o)));
            this._bind(i, n, f);
            this._bind(u, t, e) };
        e._assignInitialEvents = function(n) {
            function i(n) { return this.disabled || this.destroyed ? u : (this.cache.event = n && r.event.fix(n), this.cache.target = n && r(n.target), clearTimeout(this.timers.show), void(this.timers.show = kt.call(this, function() { this.render("object" == typeof n || t.show.ready) }, t.prerender ? 0 : t.show.delay))) } var t = this.options,
                e = t.show.target,
                s = t.hide.target,
                h = t.show.event ? r.trim("" + t.show.event).split(" ") : [],
                o = t.hide.event ? r.trim("" + t.hide.event).split(" ") : [];
            this._bind(this.elements.target, ["remove", "removeqtip"], function() { this.destroy(!0) }, "destroy"); /mouse(over|enter)/i.test(t.show.event) && !/mouse(out|leave)/i.test(t.hide.event) && o.push("mouseleave");
            this._bind(e, "mousemove", function(n) { this._storeMouse(n);
                this.cache.onTarget = f });
            this._bindEvents(h, o, e, s, i, function() { return this.timers ? void clearTimeout(this.timers.show) : u });
            (t.show.ready || t.prerender) && i.call(this, n) };
        e._assignEvents = function() { var y = this,
                i = this.options,
                f = i.position,
                e = this.tooltip,
                s = i.show.target,
                o = i.hide.target,
                p = f.container,
                h = f.viewport,
                l = r(t),
                v = r(n),
                w = i.show.event ? r.trim("" + i.show.event).split(" ") : [],
                b = i.hide.event ? r.trim("" + i.hide.event).split(" ") : [];
            r.each(i.events, function(n, t) { y._bind(e, "toggle" === n ? ["tooltipshow", "tooltiphide"] : ["tooltip" + n], t, null, e) }); /mouse(out|leave)/i.test(i.hide.event) && "window" === i.hide.leave && this._bind(l, ["mouseout", "blur"], function(n) { /select|option/.test(n.target.nodeName) || n.relatedTarget || this.hide(n) });
            i.hide.fixed ? o = o.add(e.addClass(nr)) : /mouse(over|enter)/i.test(i.show.event) && this._bind(o, "mouseleave", function() { clearTimeout(this.timers.show) });
            ("" + i.hide.event).indexOf("unfocus") > -1 && this._bind(p.closest("html"), ["mousedown", "touchstart"], function(n) { var t = r(n.target),
                    i = this.rendered && !this.tooltip.hasClass(a) && this.tooltip[0].offsetWidth > 0,
                    u = t.parents(rt).filter(this.tooltip[0]).length > 0;
                t[0] === this.target[0] || t[0] === this.tooltip[0] || u || this.target.has(t[0]).length || !i || this.hide(n) }); "number" == typeof i.hide.inactive && (this._bind(s, "qtip-" + this.id + "-inactive", fi, "inactive"), this._bind(o.add(e), c.inactiveEvents, fi));
            this._bindEvents(w, b, s, o, lr, ar);
            this._bind(s.add(e), "mousemove", function(n) { if ("number" == typeof i.hide.distance) { var t = this.cache.origin || {},
                        r = this.options.hide.distance,
                        u = Math.abs;
                    (u(n.pageX - t.pageX) >= r || u(n.pageY - t.pageY) >= r) && this.hide(n) } this._storeMouse(n) }); "mouse" === f.target && f.adjust.mouse && (i.hide.event && this._bind(s, ["mouseenter", "mouseleave"], function(n) { return this.cache ? void(this.cache.onTarget = "mouseenter" === n.type) : u }), this._bind(l, "mousemove", function(n) { this.rendered && this.cache.onTarget && !this.tooltip.hasClass(a) && this.tooltip[0].offsetWidth > 0 && this.reposition(n) }));
            (f.adjust.resize || h.length) && this._bind(r.event.special.resize ? h : v, "resize", pi);
            f.adjust.scroll && this._bind(v.add(f.container), "scroll", pi) };
        e._unassignEvents = function() { var u = this.options,
                f = u.show.target,
                e = u.hide.target,
                i = r.grep([this.elements.target[0], this.rendered && this.tooltip[0], u.position.container[0], u.position.viewport[0], u.position.container.closest("html")[0], n, t], function(n) { return "object" == typeof n });
            f && f.toArray && (i = i.concat(f.toArray()));
            e && e.toArray && (i = i.concat(e.toArray()));
            this._unbind(i)._unbind(i, "destroy")._unbind(i, "inactive") };
        r(function() { wi(rt, ["mouseenter", "mouseleave"], function(n) { var u = "mouseenter" === n.type,
                    i = r(n.currentTarget),
                    f = r(n.relatedTarget || n.target),
                    t = this.options;
                u ? (this.focus(n), i.hasClass(nr) && !i.hasClass(a) && clearTimeout(this.timers.hide)) : "mouse" === t.position.target && t.position.adjust.mouse && t.hide.event && t.show.target && !f.closest(t.show.target[0]).length && this.hide(n);
                i.toggleClass(br, u) });
            wi("[" + ni + "]", gi, fi) });
        c = r.fn.qtip = function(n, t, e) { var a = ("" + n).toLowerCase(),
                y = s,
                p = r.makeArray(arguments).slice(1),
                v = p[p.length - 1],
                l = this[0] ? r.data(this[0], o) : s; return !arguments.length && l || "api" === a ? l : "string" == typeof n ? (this.each(function() { var n = r.data(this, o); if (!n) return f; if (v && v.timeStamp && (n.cache.event = v), t && ("option" === a || "options" === a)) { if (e === i && !r.isPlainObject(t)) return y = n.get(t), u;
                    n.set(t, e) } else n[a] && n[a].apply(n, p) }), y !== s ? y : this) : "object" != typeof n && arguments.length ? void 0 : (l = wt(r.extend(f, {}, n)), this.each(function(n) { var i, t; return t = r.isArray(l.id) ? l.id[n] : l.id, t = !t || t === u || t.length < 1 || c.api[t] ? c.nextid++ : t, i = vr(r(this), t, l), i === u ? f : (c.api[t] = i, r.each(h, function() { "initialize" === this.initialize && this(i) }), void i._assignInitialEvents(v)) })) };
        r.qtip = ui;
        c.api = {};
        r.each({ attr: function(n, t) { if (this.length) { var u = this[0],
                        f = "title",
                        i = r.data(u, "qtip"); if (n === f && i && i.options && "object" == typeof i && "object" == typeof i.options && i.options.suppress) return arguments.length < 2 ? r.attr(u, ut) : (i && i.options.content.attr === f && i.cache.attr && i.set("content.text", t), this.attr(ut, t)) } return r.fn["attr" + ct].apply(this, arguments) }, clone: function(n) { var t = r.fn["clone" + ct].apply(this, arguments); return n || t.filter("[" + ut + "]").attr("title", function() { return r.attr(this, ut) }).removeAttr(ut), t } }, function(n, t) { if (!t || r.fn[n + ct]) return f; var i = r.fn[n + ct] = r.fn[n];
            r.fn[n] = function() { return t.apply(this, arguments) || i.apply(this, arguments) } });
        r.ui || (r["cleanData" + ct] = r.cleanData, r.cleanData = function(n) { for (var t, i = 0;
                (t = r(n[i])).length; i++)
                if (t.attr(ei)) try { t.triggerHandler("removeqtip") } catch (u) {} r["cleanData" + ct].apply(this, arguments) });
        c.version = "3.0.3";
        c.nextid = 0;
        c.inactiveEvents = gi;
        c.zindex = 15e3;
        c.defaults = { prerender: u, id: u, overwrite: f, suppress: f, content: { text: f, attr: "title", title: u, button: u }, position: { my: "top left", at: "bottom right", target: u, container: u, viewport: u, adjust: { x: 0, y: 0, mouse: f, scroll: f, resize: f, method: "flipinvert flipinvert" }, effect: function(n, t) { r(this).animate(t, { duration: 200, queue: u }) } }, show: { target: u, event: "mouseenter", effect: f, delay: 90, solo: u, ready: u, autofocus: u }, hide: { target: u, event: "mouseleave", effect: f, delay: 0, fixed: u, inactive: u, leave: "window", distance: u }, style: { classes: "", widget: u, width: u, height: u, def: f }, events: { render: s, move: s, show: s, hide: s, toggle: s, visible: s, hidden: s, focus: s, blur: s } }; var si, hi, ot, rr, ur, ci = "margin",
            ti = "border",
            pt = "color",
            lt = "background-color",
            fr = "transparent",
            er = " !important",
            ii = !!t.createElement("canvas").getContext,
            or = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
            li = {},
            kr = ["Webkit", "O", "Moz", "ms"];
        ii ? (rr = n.devicePixelRatio || 1, ur = function() { var n = t.createElement("canvas").getContext("2d"); return n.backingStorePixelRatio || n.webkitBackingStorePixelRatio || n.mozBackingStorePixelRatio || n.msBackingStorePixelRatio || n.oBackingStorePixelRatio || 1 }(), ot = rr / ur) : hi = function(n, t, i) { return "<qtipvml:" + n + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (t || "") + ' style="behavior: url(#default#VML); ' + (i || "") + '" />' };
        r.extend(bi.prototype, { init: function(n) { var t, i;
                i = this.element = n.elements.tip = r("<div />", { "class": o + "-tip" }).prependTo(n.tooltip);
                ii ? (t = r("<canvas />").appendTo(this.element)[0].getContext("2d"), t.lineJoin = "miter", t.miterLimit = 1e5, t.save()) : (t = hi("shape", 'coordorigin="0,0"', "position:absolute;"), this.element.html(t + t), n._bind(r("*", i).add(i), ["click", "mousedown"], function(n) { n.stopPropagation() }, this._ns));
                n._bind(n.tooltip, "tooltipmove", this.reposition, this._ns, this);
                this.create() }, _swapDimensions: function() { this.size[0] = this.options.height;
                this.size[1] = this.options.width }, _resetDimensions: function() { this.size[0] = this.options.width;
                this.size[1] = this.options.height }, _useTitle: function(n) { var t = this.qtip.elements.titlebar; return t && (n.y === b || n.y === l && this.element.position().top + this.size[1] / 2 + this.options.offset < t.outerHeight(f)) }, _parseCorner: function(n) { var t = this.qtip.options.position.my; return n === u || t === u ? n = u : n === f ? n = new tt(t.string()) : n.string || (n = new tt(n), n.fixed = f), n }, _parseWidth: function(n, t, i) { var r = this.qtip.elements,
                    u = ti + at(t) + "Width"; return (i ? st(i, u) : st(r.content, u) || st(this._useTitle(n) && r.titlebar || r.content, u) || st(r.tooltip, u)) || 0 }, _parseRadius: function(n) { var t = this.qtip.elements,
                    i = ti + at(n.y) + at(n.x) + "Radius"; return v.ie < 9 ? 0 : st(this._useTitle(n) && t.titlebar || t.content, i) || st(t.tooltip, i) || 0 }, _invalidColour: function(n, t, i) { var r = n.css(t); return !r || i && r === n.css(i) || or.test(r) ? u : r }, _parseColours: function(n) { var i = this.qtip.elements,
                    u = this.element.css("cssText", ""),
                    f = ti + at(n[n.precedance]) + at(pt),
                    o = this._useTitle(n) && i.titlebar || i.content,
                    t = this._invalidColour,
                    e = []; return e[0] = t(u, lt) || t(o, lt) || t(i.content, lt) || t(i.tooltip, lt) || u.css(lt), e[1] = t(u, f, pt) || t(o, f, pt) || t(i.content, f, pt) || t(i.tooltip, f, pt) || i.tooltip.css(f), r("*", u).add(u).css("cssText", lt + ":" + fr + er + ";" + ti + ":0" + er + ";"), e }, _calculateSize: function(n) { var o, f, e, s = n.precedance === y,
                    h = this.options.width,
                    r = this.options.height,
                    c = "c" === n.abbrev(),
                    l = (s ? h : r) * (c ? .5 : 1),
                    i = Math.pow,
                    a = Math.round,
                    u = Math.sqrt(i(l, 2) + i(r, 2)),
                    t = [this.border / l * u, this.border / r * u]; return t[2] = Math.sqrt(i(t[0], 2) - i(this.border, 2)), t[3] = Math.sqrt(i(t[1], 2) - i(this.border, 2)), o = u + t[2] + t[3] + (c ? 0 : t[0]), f = o / u, e = [a(f * h), a(f * r)], s ? e : e.reverse() }, _calculateTip: function(n, t, i) { i = i || 1;
                t = t || this.size; var r = t[0] * i,
                    u = t[1] * i,
                    e = Math.ceil(r / 2),
                    o = Math.ceil(u / 2),
                    f = { br: [0, 0, r, u, r, 0], bl: [0, 0, r, 0, 0, u], tr: [0, u, r, 0, r, u], tl: [0, 0, 0, u, r, u], tc: [0, u, e, 0, r, u], bc: [0, 0, r, 0, e, u], rc: [0, 0, r, o, 0, u], lc: [r, 0, r, u, 0, o] }; return f.lt = f.br, f.rt = f.bl, f.lb = f.tr, f.rb = f.tl, f[n.abbrev()] }, _drawCoords: function(n, t) { n.beginPath();
                n.moveTo(t[0], t[1]);
                n.lineTo(t[2], t[3]);
                n.lineTo(t[4], t[5]);
                n.closePath() }, create: function() { var n = this.corner = (ii || v.ie) && this._parseCorner(this.options.corner); return this.enabled = !!this.corner && "c" !== this.corner.abbrev(), this.enabled && (this.qtip.cache.corner = n.clone(), this.update()), this.element.toggle(this.enabled), this.corner }, update: function(t, i) { if (!this.enabled) return this; var a, et, h, c, st, g, o, s, ct = this.qtip.elements,
                    ht = this.element,
                    rt = ht.children(),
                    ut = this.options,
                    nt = this.size,
                    e = ut.mimic,
                    ft = Math.round;
                t || (t = this.qtip.cache.corner || this.corner);
                e === u ? e = t : (e = new tt(e), e.precedance = t.precedance, "inherit" === e.x ? e.x = t.x : "inherit" === e.y ? e.y = t.y : e.x === e.y && (e[t.precedance] = t[t.precedance]));
                et = e.precedance;
                t.precedance === w ? this._swapDimensions() : this._resetDimensions();
                a = this.color = this._parseColours(t);
                a[1] !== fr ? (s = this.border = this._parseWidth(t, t[t.precedance]), ut.border && 1 > s && !or.test(a[1]) && (a[0] = a[1]), this.border = s = ut.border !== f ? ut.border : s) : this.border = s = 0;
                o = this.size = this._calculateSize(t);
                ht.css({ width: o[0], height: o[1], lineHeight: o[1] + "px" });
                g = t.precedance === y ? [ft(e.x === p ? s : e.x === k ? o[0] - nt[0] - s : (o[0] - nt[0]) / 2), ft(e.y === b ? o[1] - nt[1] : 0)] : [ft(e.x === p ? o[0] - nt[0] : 0), ft(e.y === b ? s : e.y === it ? o[1] - nt[1] - s : (o[1] - nt[1]) / 2)];
                ii ? (h = rt[0].getContext("2d"), h.restore(), h.save(), h.clearRect(0, 0, 6e3, 6e3), c = this._calculateTip(e, nt, ot), st = this._calculateTip(e, this.size, ot), rt.attr(d, o[0] * ot).attr(vt, o[1] * ot), rt.css(d, o[0]).css(vt, o[1]), this._drawCoords(h, st), h.fillStyle = a[1], h.fill(), h.translate(g[0] * ot, g[1] * ot), this._drawCoords(h, c), h.fillStyle = a[0], h.fill()) : (c = this._calculateTip(e), c = "m" + c[0] + "," + c[1] + " l" + c[2] + "," + c[3] + " " + c[4] + "," + c[5] + " xe", g[2] = s && /^(r|b)/i.test(t.string()) ? 8 === v.ie ? 2 : 1 : 0, rt.css({ coordsize: o[0] + s + " " + o[1] + s, antialias: "" + (e.string().indexOf(l) > -1), left: g[0] - g[2] * Number(et === w), top: g[1] - g[2] * Number(et === y), width: o[0] + s, height: o[1] + s }).each(function(n) { var t = r(this);
                    t[t.prop ? "prop" : "attr"]({ coordsize: o[0] + s + " " + o[1] + s, path: c, fillcolor: a[0], filled: !!n, stroked: !n }).toggle(!(!s && !n));
                    n || t.html(hi("stroke", 'weight="' + 2 * s + 'px" color="' + a[1] + '" miterlimit="1000" joinstyle="miter"')) }));
                n.opera && setTimeout(function() { ct.tip.css({ display: "inline-block", visibility: "visible" }) }, 1);
                i !== u && this.calculate(t, o) }, calculate: function(n, t) { if (!this.enabled) return u; var i, o, e = this,
                    s = this.qtip.elements,
                    c = this.element,
                    h = this.options.offset,
                    f = {}; return n = n || this.corner, i = n.precedance, t = t || this._calculateSize(n), o = [n.x, n.y], i === w && o.reverse(), r.each(o, function(r, u) { var o, a, c;
                    u === l ? (o = i === y ? p : b, f[o] = "50%", f[ci + "-" + o] = -Math.round(t[i === y ? 0 : 1] / 2) + h) : (o = e._parseWidth(n, u, s.tooltip), a = e._parseWidth(n, u, s.content), c = e._parseRadius(n), f[u] = Math.max(-e.border, r ? a : h + (c > o ? c : -o))) }), f[n[i]] -= t[i === w ? 0 : 1], c.css({ margin: "", top: "", bottom: "", left: "", right: "" }).css(f), f }, reposition: function(n, t, r) {
                function tt(n, t, i, r, u) { n === et && s.precedance === t && h[r] && s[i] !== l ? s.precedance = s.precedance === w ? y : w : n !== et && h[r] && (s[t] = s[t] === l ? h[r] > 0 ? r : u : s[t] === r ? u : r) }

                function rt(n, t, f) { s[n] === l ? nt[ci + "-" + t] = o[n] = e[ci + "-" + t] - h[t] : (a = e[f] !== i ? [h[t], -e[t]] : [-h[t], e[t]], (o[n] = Math.max(a[0], a[1])) > a[0] && (r[t] -= h[t], o[t] = u), nt[e[f] !== i ? f : t] = o[n]) } if (this.enabled) { var e, a, c = t.cache,
                        s = this.corner.clone(),
                        h = r.adjusted,
                        v = t.options.position.adjust.method.split(" "),
                        d = v[0],
                        g = v[1] || v[0],
                        o = { left: u, top: u, x: 0, y: 0 },
                        nt = {};
                    this.corner.fixed !== f && (tt(d, w, y, p, k), tt(g, y, w, b, it), s.string() === c.corner.string() && c.cornerTop === h.top && c.cornerLeft === h.left || this.update(s, u));
                    e = this.calculate(s);
                    e.right !== i && (e.left = -e.right);
                    e.bottom !== i && (e.top = -e.bottom);
                    e.user = this.offset;
                    o.left = d === et && !!h.left;
                    o.left && rt(w, p, k);
                    o.top = g === et && !!h.top;
                    o.top && rt(y, b, it);
                    this.element.css(nt).toggle(!(o.x && o.y || s.x === l && o.y || s.y === l && o.x));
                    r.left -= e.left.charAt ? e.user : d !== et || o.top || !o.left && !o.top ? e.left + this.border : 0;
                    r.top -= e.top.charAt ? e.user : g !== et || o.left || !o.left && !o.top ? e.top + this.border : 0;
                    c.cornerLeft = h.left;
                    c.cornerTop = h.top;
                    c.corner = s.clone() } }, destroy: function() { this.qtip._unbind(this.qtip.tooltip, this._ns);
                this.qtip.elements.tip && this.qtip.elements.tip.find("*").remove().end().remove() } });
        si = h.tip = function(n) { return new bi(n, n.options.style.tip) };
        si.initialize = "render";
        si.sanitize = function(n) { if (n.style && "tip" in n.style) { var t = n.style.tip; "object" != typeof t && (t = n.style.tip = { corner: t }); /string|boolean/i.test(typeof t.corner) || (t.corner = f) } };
        dt.tip = { "^position.my|style.tip.(corner|mimic|border)$": function() { this.create();
                this.qtip.reposition() }, "^style.tip.(height|width)$": function(n) { this.size = [n.width, n.height];
                this.update();
                this.qtip.reposition() }, "^content.title|style.(classes|widget)$": function() { this.update() } };
        r.extend(f, c.defaults, { style: { tip: { corner: f, mimic: u, width: 6, height: 6, border: f, offset: 0 } } });
        ri = "qtip-modal";
        nt = "." + ri;
        g = function() {
            function l(n) { if (r.expr[":"].focusable) return r.expr[":"].focusable; var t, i, u, e = !isNaN(r.attr(n, "tabindex")),
                    f = n.nodeName && n.nodeName.toLowerCase(); return "area" === f ? (t = n.parentNode, i = t.name, n.href && i && "map" === t.nodeName.toLowerCase() ? (u = r("img[usemap=#" + i + "]")[0], !!u && u.is(":visible")) : !1) : /input|select|textarea|button|object/.test(f) ? !n.disabled : "a" === f ? n.href || e : e }

            function h(n) { o.length < 1 && n.length ? n.not("body").blur() : o.first().focus() }

            function a(t) { if (n.is(":visible")) { var e, f = r(t.target),
                        o = i.tooltip,
                        s = f.closest(rt);
                    e = s.length < 1 ? u : parseInt(s[0].style.zIndex, 10) > parseInt(o[0].style.zIndex, 10);
                    e || f.closest(rt)[0] === o[0] || h(f) } } var i, c, n, e = this,
                o = {};
            r.extend(e, { init: function() { return n = e.elem = r("<div />", { id: "qtip-overlay", html: "<div><\/div>", mousedown: function() { return u } }).hide(), r(t.body).bind("focusin" + nt, a), r(t).bind("keydown" + nt, function(n) { i && i.options.show.modal.escape && 27 === n.keyCode && i.hide(n) }), n.bind("click" + nt, function(n) { i && i.options.show.modal.blur && i.hide(n) }), e }, update: function(n) { i = n;
                    o = n.options.show.modal.stealfocus !== u ? n.tooltip.find("*").filter(function() { return l(this) }) : [] }, toggle: function(o, l, a) { var p = o.tooltip,
                        v = o.options.show.modal,
                        y = v.effect,
                        w = l ? "show" : "hide",
                        b = n.is(":visible"),
                        k = r(nt).filter(":visible:not(:animated)").not(p); return e.update(o), l && v.stealfocus !== u && h(r(":focus")), n.toggleClass("blurs", v.blur), l && n.appendTo(t.body), n.is(":animated") && b === l && c !== u || !l && k.length ? e : (n.stop(f, u), r.isFunction(y) ? y.call(n, l) : y === u ? n[w]() : n.fadeTo(parseInt(a, 10) || 90, l ? 1 : 0, function() { l || n.hide() }), l || n.queue(function(t) { n.css({ left: "", top: "" });
                        r(nt).length || n.detach();
                        t() }), c = l, i.destroyed && (i = s), e) } });
            e.init() };
        g = new g;
        r.extend(ki.prototype, { init: function(n) { var t = n.tooltip; return this.options.on ? (n.elements.overlay = g.elem, t.addClass(ri).css("z-index", c.modal_zindex + r(nt).length), n._bind(t, ["tooltipshow", "tooltiphide"], function(n, i, u) { var f = n.originalEvent; if (n.target === t[0])
                        if (f && "tooltiphide" === n.type && /mouse(leave|enter)/.test(f.type) && r(f.relatedTarget).closest(g.elem[0]).length) try { n.preventDefault() } catch (e) {} else(!f || f && "tooltipsolo" !== f.type) && this.toggle(n, "tooltipshow" === n.type, u) }, this._ns, this), n._bind(t, "tooltipfocus", function(n, i) { if (!n.isDefaultPrevented() && n.target === t[0]) { var u = r(nt),
                            f = c.modal_zindex + u.length,
                            e = parseInt(t[0].style.zIndex, 10);
                        g.elem[0].style.zIndex = f - 1;
                        u.each(function() { this.style.zIndex > e && (this.style.zIndex -= 1) });
                        u.filter("." + ht).qtip("blur", n.originalEvent);
                        t.addClass(ht)[0].style.zIndex = f;
                        g.update(i); try { n.preventDefault() } catch (o) {} } }, this._ns, this), void n._bind(t, "tooltiphide", function(n) { n.target === t[0] && r(nt).filter(":visible").not(t).last().qtip("focus", n) }, this._ns, this)) : this }, toggle: function(n, t, i) { return n && n.isDefaultPrevented() ? this : void g.toggle(this.qtip, !!t, i) }, destroy: function() { this.qtip.tooltip.removeClass(ri);
                this.qtip._unbind(this.qtip.tooltip, this._ns);
                g.toggle(this.qtip, u);
                delete this.qtip.elements.overlay } });
        ai = h.modal = function(n) { return new ki(n, n.options.show.modal) };
        ai.sanitize = function(n) { n.show && ("object" != typeof n.show.modal ? n.show.modal = { on: !!n.show.modal } : "undefined" == typeof n.show.modal.on && (n.show.modal.on = f)) };
        c.modal_zindex = c.zindex - 200;
        ai.initialize = "render";
        dt.modal = { "^show.modal.(on|blur)$": function() { this.destroy();
                this.init();
                this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth > 0) } };
        r.extend(f, c.defaults, { show: { modal: { on: u, effect: f, blur: f, stealfocus: f, escape: f } } });
        h.viewport = function(i, r, f, e, o, s, h) {
            function at(n, t, i, u, f, e, o, s, h) { var y = r[f],
                    c = v[n],
                    k = kt[n],
                    rt = i === et,
                    tt = c === f ? h : c === e ? -h : -h / 2,
                    ut = k === f ? s : k === e ? -s : -s / 2,
                    it = st[f] + nt[f] - (yt ? 0 : g[f]),
                    b = it - y,
                    w = y + h - (o === d ? ft : ot) - it,
                    p = tt - (v.precedance === n || c === v[t] ? ut : 0) - (k === l ? s / 2 : 0); return rt ? (p = (c === f ? 1 : -1) * tt, r[f] += b > 0 ? b : w > 0 ? -w : 0, r[f] = Math.max(-g[f] + nt[f], y - p, Math.min(Math.max(-g[f] + nt[f] + (o === d ? ft : ot), y + p), r[f], "center" === c ? y - tt : 1e9))) : (u *= i === pr ? 2 : 0, b > 0 && (c !== f || w > 0) ? (r[f] -= p + u, a.invert(n, f)) : w > 0 && (c !== e || b > 0) && (r[f] -= (c === l ? -p : p) + u, a.invert(n, e)), r[f] < st[f] && -r[f] > w && (r[f] = y, a = v.clone())), r[f] - y } var ut, a, g, yt, ft, ot, st, nt, pt = f.target,
                bt = i.elements.tooltip,
                v = f.my,
                kt = f.at,
                tt = f.adjust,
                ht = tt.method.split(" "),
                ct = ht[0],
                lt = ht[1] || ht[0],
                c = f.viewport,
                wt = f.container,
                rt = { left: 0, top: 0 }; return c.jquery && pt[0] !== n && pt[0] !== t.body && "none" !== tt.method ? (g = wt.offset() || rt, yt = "static" === wt.css("position"), ut = "fixed" === bt.css("position"), ft = c[0] === n ? c.width() : c.outerWidth(u), ot = c[0] === n ? c.height() : c.outerHeight(u), st = { left: ut ? 0 : c.scrollLeft(), top: ut ? 0 : c.scrollTop() }, nt = c.offset() || rt, "shift" === ct && "shift" === lt || (a = v.clone()), rt = { left: "none" !== ct ? at(w, y, ct, tt.x, p, k, d, e, s) : 0, top: "none" !== lt ? at(y, w, lt, tt.y, b, it, vt, o, h) : 0, my: a }) : rt };
        h.polys = { polygon: function(n, t) { for (var r, h, c, i = { width: 0, height: 0, position: { top: 1e10, right: 0, bottom: 0, left: 1e10 }, adjustable: u }, f = 0, e = [], o = 1, s = 1, a = 0, v = 0, f = n.length; f--;) r = [parseInt(n[--f], 10), parseInt(n[f + 1], 10)], r[0] > i.position.right && (i.position.right = r[0]), r[0] < i.position.left && (i.position.left = r[0]), r[1] > i.position.bottom && (i.position.bottom = r[1]), r[1] < i.position.top && (i.position.top = r[1]), e.push(r); if (h = i.width = Math.abs(i.position.right - i.position.left), c = i.height = Math.abs(i.position.bottom - i.position.top), "c" === t.abbrev()) i.position = { left: i.position.left + i.width / 2, top: i.position.top + i.height / 2 };
                else { for (; h > 0 && c > 0 && o > 0 && s > 0;)
                        for (h = Math.floor(h / 2), c = Math.floor(c / 2), t.x === p ? o = h : t.x === k ? o = i.width - h : o += Math.floor(h / 2), t.y === b ? s = c : t.y === it ? s = i.height - c : s += Math.floor(c / 2), f = e.length; f-- && !(e.length < 2);) a = e[f][0] - i.position.left, v = e[f][1] - i.position.top, (t.x === p && a >= o || t.x === k && o >= a || t.x === l && (o > a || a > i.width - o) || t.y === b && v >= s || t.y === it && s >= v || t.y === l && (s > v || v > i.height - s)) && e.splice(f, 1);
                    i.position = { left: e[0][0], top: e[0][1] } } return i }, rect: function(n, t, i, r) { return { width: Math.abs(i - n), height: Math.abs(r - t), position: { left: Math.min(n, i), top: Math.min(t, r) } } }, _angles: { tc: 1.5, tr: 7 / 4, tl: 5 / 4, bc: .5, br: .25, bl: .75, rc: 2, lc: 1, c: 0 }, ellipse: function(n, t, i, r, f) { var e = h.polys._angles[f.abbrev()],
                    o = 0 === e ? 0 : i * Math.cos(e * Math.PI),
                    s = r * Math.sin(e * Math.PI); return { width: 2 * i - Math.abs(o), height: 2 * r - Math.abs(s), position: { left: n + o, top: t + s }, adjustable: u } }, circle: function(n, t, i, r) { return h.polys.ellipse(n, t, i, i, r) } };
        h.svg = function(n, i, f) { for (var a, b, p, k, w, v, s, o, c, e = i[0], y = r(e.ownerSVGElement), l = e.ownerDocument, d = (parseInt(i.css("stroke-width"), 10) || 0) / 2; !e.getBBox;) e = e.parentNode; if (!e.getBBox || !e.parentNode) return u; switch (e.nodeName) {
                case "ellipse":
                case "circle":
                    o = h.polys.ellipse(e.cx.baseVal.value, e.cy.baseVal.value, (e.rx || e.r).baseVal.value + d, (e.ry || e.r).baseVal.value + d, f); break;
                case "line":
                case "polygon":
                case "polyline":
                    for (s = e.points || [{ x: e.x1.baseVal.value, y: e.y1.baseVal.value }, { x: e.x2.baseVal.value, y: e.y2.baseVal.value }], o = [], v = -1, k = s.numberOfItems || s.length; ++v < k;) w = s.getItem ? s.getItem(v) : s[v], o.push.apply(o, [w.x, w.y]);
                    o = h.polys.polygon(o, f); break;
                default:
                    o = e.getBBox();
                    o = { width: o.width, height: o.height, position: { left: o.x, top: o.y } } } return c = o.position, y = y[0], y.createSVGPoint && (b = e.getScreenCTM(), s = y.createSVGPoint(), s.x = c.left, s.y = c.top, p = s.matrixTransform(b), c.left = p.x, c.top = p.y), l !== t && "mouse" !== n.position.target && (a = r((l.defaultView || l.parentWindow).frameElement).offset(), a && (c.left += a.left, c.top += a.top)), l = r(l), c.left += l.scrollLeft(), c.top += l.scrollTop(), o };
        h.imagemap = function(n, t, i) { t.jquery || (t = r(t)); var e, s, c, o, v, l = (t.attr("shape") || "rect").toLowerCase().replace("poly", "polygon"),
                f = r('img[usemap="#' + t.parent("map").attr("name") + '"]'),
                y = r.trim(t.attr("coords")),
                a = y.replace(/,$/, "").split(","); if (!f.length) return u; if ("polygon" === l) o = h.polys.polygon(a, i);
            else { if (!h.polys[l]) return u; for (c = -1, v = a.length, s = []; ++c < v;) s.push(parseInt(a[c], 10));
                o = h.polys[l].apply(this, s.concat(i)) } return e = f.offset(), e.left += Math.ceil((f.outerWidth(u) - f.width()) / 2), e.top += Math.ceil((f.outerHeight(u) - f.height()) / 2), o.position.left += e.left, o.position.top += e.top, o };
        hr = '<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"><\/iframe>';
        r.extend(di.prototype, { _scroll: function() { var t = this.qtip.elements.overlay;
                t && (t[0].style.top = r(n).scrollTop() + "px") }, init: function(i) { var u = i.tooltip;
                r("select, object").length < 1 && (this.bgiframe = i.elements.bgiframe = r(hr).appendTo(u), i._bind(u, "tooltipmove", this.adjustBGIFrame, this._ns, this));
                this.redrawContainer = r("<div/>", { id: o + "-rcontainer" }).appendTo(t.body);
                i.elements.overlay && i.elements.overlay.addClass("qtipmodal-ie6fix") && (i._bind(n, ["scroll", "resize"], this._scroll, this._ns, this), i._bind(u, ["tooltipshow"], this._scroll, this._ns, this));
                this.redraw() }, adjustBGIFrame: function() { var t, n, i = this.qtip.tooltip,
                    e = { height: i.outerHeight(u), width: i.outerWidth(u) },
                    r = this.qtip.plugins.tip,
                    f = this.qtip.elements.tip;
                n = parseInt(i.css("borderLeftWidth"), 10) || 0;
                n = { left: -n, top: -n };
                r && f && (t = "x" === r.corner.precedance ? [d, p] : [vt, b], n[t[1]] -= f[t[0]]());
                this.bgiframe.css(n).css(e) }, redraw: function() { if (this.qtip.rendered < 1 || this.drawing) return this; var f, n, t, i, r = this.qtip.tooltip,
                    u = this.qtip.options.style,
                    e = this.qtip.options.position.container; return this.qtip.drawing = 1, u.height && r.css(vt, u.height), u.width ? r.css(d, u.width) : (r.css(d, "").appendTo(this.redrawContainer), n = r.width(), 1 > n % 2 && (n += 1), t = r.css("maxWidth") || "", i = r.css("minWidth") || "", f = (t + i).indexOf("%") > -1 ? e.width() / 100 : 0, t = (t.indexOf("%") > -1 ? f : 1 * parseInt(t, 10)) || n, i = (i.indexOf("%") > -1 ? f : 1 * parseInt(i, 10)) || 0, n = t + i ? Math.min(Math.max(n, i), t) : n, r.css(d, Math.round(n)).appendTo(e)), this.drawing = 0, this }, destroy: function() { this.bgiframe && this.bgiframe.remove();
                this.qtip._unbind([n, this.qtip.tooltip], this._ns) } });
        sr = h.ie6 = function(n) { return 6 === v.ie ? new di(n) : u };
        sr.initialize = "render";
        dt.ie6 = { "^content|style$": function() { this.redraw() } } }) }(window, document),
function() {
    function n(n, t) { t = t || { bubbles: !1, cancelable: !1, detail: undefined }; var i = document.createEvent("CustomEvent"); return i.initCustomEvent(n, t.bubbles, t.cancelable, t.detail), i } if (typeof window.CustomEvent == "function") return !1;
    n.prototype = window.Event.prototype;
    window.CustomEvent = n }(),
function(n) { var t = (navigator.appName == "Microsoft Internet Explorer" ? "paste" : "input") + ".mask",
        i = window.orientation != undefined;
    n.mask = { definitions: { "9": "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" } };
    n.fn.extend({ caret: function(n, t) { if (this.length != 0) { if (typeof n == "number") return t = typeof t == "number" ? t : n, this.each(function() { if (this.setSelectionRange) this.focus(), this.setSelectionRange(n, t);
                    else if (this.createTextRange) { var i = this.createTextRange();
                        i.collapse(!0);
                        i.moveEnd("character", t);
                        i.moveStart("character", n);
                        i.select() } }); if (this[0].setSelectionRange) n = this[0].selectionStart, t = this[0].selectionEnd;
                else if (document.selection && document.selection.createRange) { var i = document.selection.createRange();
                    n = 0 - i.duplicate().moveStart("character", -1e5);
                    t = n + i.text.length } return { begin: n, end: t } } }, unmask: function() { return this.trigger("unmask") }, mask: function(r, u) { var h, f; if (!r && this.length > 0) return h = n(this[0]), f = h.data("tests"), n.map(h.data("buffer"), function(n, t) { return f[t] ? n : null }).join("");
            u = n.extend({ placeholder: "_", completed: null }, u); var c = n.mask.definitions,
                f = [],
                o = r.length,
                s = null,
                e = r.length; return n.each(r.split(""), function(n, t) { t == "?" ? (e--, o = n) : c[t] ? (f.push(new RegExp(c[t])), s == null && (s = f.length - 1)) : f.push(null) }), this.each(function() {
                function y(n) { while (++n <= e && !f[n]); return n }

                function k(n) { for (var t, i; !f[n] && --n >= 0;); for (t = n; t < e; t++)
                        if (f[t])
                            if (l[t] = u.placeholder.length > 1 ? u.placeholder.charAt(t) : u.placeholder, i = y(t), i < e && f[t].test(l[i])) l[t] = l[i];
                            else break;
                    p();
                    h.caret(Math.max(s, n)) }

                function d(n) { for (var i, r, o, t = n; t < e; t++)
                        if (i = u.placeholder.length > 1 ? u.placeholder.charAt(t) : u.placeholder, f[t])
                            if (r = y(t), o = l[t], l[t] = i, r < e && f[r].test(o)) i = o;
                            else break }

                function g(t) { var u = n(this).caret(),
                        r = t.keyCode; return (v = r < 16 || r > 16 && r < 32 || r > 32 && r < 41, u.begin - u.end == 0 || v && r != 8 && r != 46 || b(u.begin, u.end), r == 8 || r == 46 || i && r == 127) ? (k(u.begin + (r == 46 ? 0 : -1)), !1) : r == 27 ? (h.val(w), h.caret(0, a()), !1) : void 0 }

                function nt(t) { var r, c, i, o, s; return v ? (v = !1, t.keyCode == 8 ? !1 : null) : (t = t || window.event, r = t.charCode || t.keyCode || t.which, c = n(this).caret(), t.ctrlKey || t.altKey || t.metaKey) ? !0 : ((r >= 32 && r <= 125 || r > 186) && (i = y(c.begin - 1), i < e && (o = String.fromCharCode(r), f[i].test(o) && (d(i), l[i] = o, p(), s = y(i), n(this).caret(s), u.completed && s == e && u.completed.call(h)))), !1) }

                function b(n, t) { for (var i = n; i < t && i < e; i++) f[i] && (l[i] = u.placeholder.length > 1 ? u.placeholder.charAt(i) : u.placeholder) }

                function p() { return h.val(l.join("")).val() }

                function a(n) { for (var c = h.val(), r = -1, a, t = 0, i = 0; t < e; t++)
                        if (f[t]) { for (l[t] = u.placeholder.length > 1 ? u.placeholder.charAt(t) : u.placeholder; i++ < c.length;)
                                if (a = c.charAt(i - 1), f[t].test(a)) { l[t] = a;
                                    r = t; break } if (i > c.length) break } else l[t] == c[i] && t != o && (i++, r = t); return !n && r + 1 < o ? (h.val(""), b(0, e)) : (n || r + 1 >= o) && (p(), n || h.val(h.val().substring(0, r + 1))), o ? t : s } var h = n(this),
                    l = n.map(r.split(""), function(n, t) { if (n != "?") return c[n] ? u.placeholder.length > 1 ? u.placeholder.charAt(t) : u.placeholder : n }),
                    v = !1,
                    w = h.val();
                h.data("buffer", l).data("tests", f);
                h.attr("readonly") || h.one("unmask", function() { h.unbind(".mask").removeData("buffer").removeData("tests") }).bind("focus.mask", function() { w = h.val(); var n = a();
                    p();
                    setTimeout(function() { n == r.length ? h.caret(0, n) : h.caret(n) }, 0) }).bind("blur.mask", function() { a();
                    h.val() != w && h.change() }).bind("keydown.mask", g).bind("keypress.mask", nt).bind(t, function() { setTimeout(function() { h.caret(a(!0)) }, 0) });
                a() }) } }) }(jQuery);
! function(n) { "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = n(require("jquery")) : n(jQuery) }(function(n) { var t = function() {
        function t() { var t = this,
                s = function(i) { return n.isNumeric(i) && (i = Math.floor(i)), n('option[value="' + i + '"]', t.$elem) },
                i = function(n) { var i = t.$elem.data("barrating"); return void 0 !== n ? i[n] : i },
                r = function(n, i) { null !== i && "object" == typeof i ? t.$elem.data("barrating", i) : t.$elem.data("barrating")[n] = i },
                y = function() { var e, f, u = (e = t.options.initialRating) ? s(e) : n("option:selected", t.$elem),
                        i = !(f = t.$elem.find('option[value="' + t.options.emptyValue + '"]')).length && t.options.allowEmpty ? (f = n("<option />", { value: t.options.emptyValue })).prependTo(t.$elem) : f,
                        o = u.val(),
                        h = u.data("html") ? u.data("html") : u.text(),
                        c = null !== t.options.allowEmpty ? t.options.allowEmpty : !!i.length,
                        l = i.length ? i.val() : null,
                        a = i.length ? i.text() : null;
                    r(null, { userOptions: t.options, ratingValue: o, ratingText: h, originalRatingValue: o, originalRatingText: h, allowEmpty: c, emptyRatingValue: l, emptyRatingText: a, readOnly: t.options.readonly, ratingMade: !1 }) },
                f = function() { return i("ratingText") },
                u = function() { return i("ratingValue") },
                h = function() { return i("userOptions").reverse ? "nextAll" : "prevAll" },
                c = function(n) { s(n).prop("selected", !0);
                    i("userOptions").triggerChange && t.$elem.change() },
                e = function(n) {
                    (n = n || f()) == i("emptyRatingText") && (n = "");
                    t.options.showSelectedRating && t.$elem.parent().find(".br-current-rating").text(n) },
                l = function() { t.$widget.find("a").removeClass(function(n, t) { return (t.match(/(^|\s)br-\S+/g) || []).join(" ") }) },
                o = function() { var o, s, r, f = t.$widget.find('a[data-rating-value="' + u() + '"]'),
                        e = i("userOptions").initialRating,
                        a = n.isNumeric(u()) ? u() : 0,
                        c = (o = e, Math.round(Math.floor(10 * o) / 10 % 1 * 100)); if (l(), f.addClass("br-selected br-current")[h()]().addClass("br-selected"), !i("ratingMade") && n.isNumeric(e)) { if (e <= a || !c) return;
                        s = t.$widget.find("a");
                        (r = f.length ? f[i("userOptions").reverse ? "prev" : "next"]() : s[i("userOptions").reverse ? "last" : "first"]()).addClass("br-fractional");
                        r.addClass("br-fractional-" + c);
                        r.append('<a class="fa fa-flip-horizontal br-empty"><\/a>') } },
                p = function(s) { s.on("click.barrating", function(s) { var h, l, v, a = n(this),
                            y = i("userOptions"); return s.preventDefault(), h = a.attr("data-rating-value"), l = a.attr("data-rating-text"), v = a, i("allowEmpty") && i("userOptions").deselectable && u() == v.attr("data-rating-value") && (h = i("emptyRatingValue"), l = i("emptyRatingText")), r("ratingValue", h), r("ratingText", l), r("ratingMade", !0), c(h), e(l), o(), y.onSelect.call(t, u(), f(), s), !1 }) },
                w = function(i) { p(i);
                    t.options.hoverState && (i.on("mouseenter.barrating", function() { var t = n(this);
                        l();
                        t.addClass("br-active")[h()]().addClass("br-active");
                        e(t.attr("data-rating-text")) }), t.$widget.on("mouseleave.barrating blur.barrating", function() { e();
                        o() })) },
                a = function(n) { n.off(".barrating") },
                v = function(r) { var u = t.$widget.find("a");
                    i("userOptions").fastClicks && u.on("touchstart.barrating", function(t) { t.preventDefault();
                        t.stopPropagation();
                        n(this).click() });
                    r ? (a(u), u.on("click.barrating", function(n) { n.preventDefault() })) : w(u) };
            this.show = function() { var u, r;
                i() || (u = ["br-wrapper"], "" !== t.options.theme && u.push("br-theme-" + t.options.theme), t.$elem.wrap(n("<div />", { "class": u.join(" ") })), y(), t.$widget = (r = n("<div />", { "class": "br-widget" }), t.$elem.find("option").each(function() { var f, u, e, o;
                    (f = n(this).val()) !== i("emptyRatingValue") && (u = n(this).text(), (e = n(this).data("html")) && (u = e), o = n("<a />", { href: "#", "data-rating-value": f, "data-rating-text": u, "class": "fa", html: t.options.showValues ? u : "" }), r.append(o)) }), t.options.showSelectedRating && r.append(n("<div />", { text: "", "class": "br-current-rating" })), t.options.reverse && r.addClass("br-reverse"), t.options.readonly && r.addClass("br-readonly"), r), t.$widget.insertAfter(t.$elem), o(), e(), v(t.options.readonly), t.$elem.hide()) };
            this.readonly = function(n) { "boolean" == typeof n && i("readOnly") != n && (v(n), r("readOnly", n), t.$widget.toggleClass("br-readonly")) };
            this.set = function(n) { var s = i("userOptions");
                0 !== t.$elem.find('option[value="' + n + '"]').length && (r("ratingValue", n), r("ratingText", t.$elem.find('option[value="' + n + '"]').text()), r("ratingMade", !0), c(u()), e(f()), o(), s.silent || s.onSelect.call(this, u(), f())) };
            this.clear = function() { var s = i("userOptions");
                r("ratingValue", i("originalRatingValue"));
                r("ratingText", i("originalRatingText"));
                r("ratingMade", !1);
                n("option", t.$elem).prop("selected", function() { return this.defaultSelected });
                i("userOptions").triggerChange && t.$elem.change();
                e(f());
                o();
                s.onClear.call(this, u(), f()) };
            this.destroy = function() { var n = u(),
                    r = f(),
                    e = i("userOptions");
                a(t.$widget.find("a"));
                t.$widget.remove();
                t.$elem.removeData("barrating");
                t.$elem.unwrap();
                t.$elem.show();
                e.onDestroy.call(this, n, r) } } return t.prototype.init = function(t, i) { return this.$elem = n(i), this.options = n.extend({}, n.fn.barrating.defaults, t), this.options }, t }();
    n.fn.barrating = function(i, r) { return this.each(function() { var u = new t; if (n(this).is("select") || n.error("Sorry, this plugin only works with select fields."), u.hasOwnProperty(i)) { if (u.init(r, this), "show" === i) return u.show(r); if (u.$elem.data("barrating")) return u.$widget = n(this).next(".br-widget"), u[i](r) } else { if ("object" == typeof i || !i) return r = i, u.init(r, this), u.show();
                n.error("Method " + i + " does not exist on jQuery.barrating") } }) };
    n.fn.barrating.defaults = { theme: "", initialRating: null, allowEmpty: null, emptyValue: "", showValues: !1, showSelectedRating: !0, deselectable: !0, reverse: !1, readonly: !1, fastClicks: !0, hoverState: !0, silent: !1, triggerChange: !0, onSelect: function() {}, onClear: function() {}, onDestroy: function() {} };
    n.fn.barrating.BarRating = t });
window.YT || (YT = { loading: 0, loaded: 0 });
window.YTConfig || (YTConfig = { host: "http://www.youtube.com" });
YT.loading || (YT.loading = 1, function() { var n = [];
        YT.ready = function(t) { YT.loaded ? t() : n.push(t) };
        window.onYTReady = function() { YT.loaded = 1; for (var t = 0; t < n.length; t++) try { n[t]() } catch (i) {} };
        YT.setConfig = function(n) { for (var t in n) n.hasOwnProperty(t) && (YTConfig[t] = n[t]) } }()),
    function() {
        function v(n) { return "string" == typeof n }

        function c(n) { n = n.split("."); for (var t = i, r = 0; r < n.length; r++)
                if (t = t[n[r]], null == t) return null; return t }

        function ir() {}

        function ut(n) { var t = typeof n,
                i; if ("object" == t)
                if (n) { if (n instanceof Array) return "array"; if (n instanceof Object) return t; if (i = Object.prototype.toString.call(n), "[object Window]" == i) return "object"; if ("[object Array]" == i || "number" == typeof n.length && "undefined" != typeof n.splice && "undefined" != typeof n.propertyIsEnumerable && !n.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == i || "undefined" != typeof n.call && "undefined" != typeof n.propertyIsEnumerable && !n.propertyIsEnumerable("call")) return "function" } else return "null";
            else if ("function" == t && "undefined" == typeof n.call) return "object"; return t }

        function w(n) { var t = typeof n; return "object" == t && null != n || "function" == t }

        function rr(n) { return n.call.apply(n.bind, arguments) }

        function ur(n, t) { if (!n) throw Error(); if (2 < arguments.length) { var i = Array.prototype.slice.call(arguments, 2); return function() { var r = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(r, i), n.apply(t, r) } } return function() { return n.apply(t, arguments) } }

        function s() { return s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? rr : ur, s.apply(null, arguments) }

        function r(n, t) { var f = n.split("."),
                r = i,
                u; for ((f[0] in r) || "undefined" == typeof r.execScript || r.execScript("var " + f[0]); f.length && (u = f.shift());) f.length || void 0 === t ? r = r[u] && r[u] !== Object.prototype[u] ? r[u] : r[u] = {} : r[u] = t }

        function ft(n, t) {
            function i() {} i.prototype = t.prototype;
            n.I = t.prototype;
            n.prototype = new i;
            n.prototype.constructor = n;
            n.P = function(n, i) { for (var u = Array(arguments.length - 2), r = 2; r < arguments.length; r++) u[r - 2] = arguments[r]; return t.prototype[i].apply(n, u) } }

        function er(n, t) { var i, u, r;
            n: { for (i = n.length, u = v(n) ? n.split("") : n, r = 0; r < i; r++)
                    if (r in u && t.call(void 0, u[r], r, n)) { i = r; break n } i = -1 }
            return 0 > i ? null : v(n) ? n.charAt(i) : n[i] }

        function or() { return Array.prototype.concat.apply([], arguments) }

        function ri(n) { var i = n.length,
                r, t; if (0 < i) { for (r = Array(i), t = 0; t < i; t++) r[t] = n[t]; return r } return [] }

        function ui(n, t) { this.c = n;
            this.f = t;
            this.b = 0;
            this.a = null }

        function pr(n) { var i = o,
                t; for (t in i)
                if (n.call(void 0, i[t], t, i)) return t }

        function wr(n) { i.setTimeout(function() { throw n; }, 0) }

        function br() { var t = i.MessageChannel; if ("undefined" == typeof t && "undefined" != typeof window && window.postMessage && window.addEventListener && -1 == y.indexOf("Presto") && (t = function() { var n = document.createElement("IFRAME"),
                        t, r, i;
                    n.style.display = "none";
                    n.src = "";
                    document.documentElement.appendChild(n);
                    t = n.contentWindow;
                    n = t.document;
                    n.open();
                    n.write("");
                    n.close();
                    r = "callImmediate" + Math.random();
                    i = "file:" == t.location.protocol ? "*" : t.location.protocol + "//" + t.location.host;
                    n = s(function(n) {
                        ("*" == i || n.origin == i) && n.data == r && this.port1.onmessage() }, this);
                    t.addEventListener("message", n, !1);
                    this.port1 = {};
                    this.port2 = { postMessage: function() { t.postMessage(r, i) } } }), "undefined" != typeof t && -1 == y.indexOf("Trident") && -1 == y.indexOf("MSIE")) { var u = new t,
                    n = {},
                    r = n; return u.port1.onmessage = function() { if (void 0 !== n.next) { n = n.next; var t = n.D;
                            n.D = null;
                            t() } },
                    function(n) { r.next = { D: n };
                        r = r.next;
                        u.port2.postMessage(0) } } return "undefined" != typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(n) { var t = document.createElement("SCRIPT");
                t.onreadystatechange = function() { t.onreadystatechange = null;
                    t.parentNode.removeChild(t);
                    t = null;
                    n();
                    n = null };
                document.documentElement.appendChild(t) } : function(n) { i.setTimeout(n, 0) } }

        function ht() { this.b = this.a = null }

        function lt() { this.next = this.b = this.a = null }

        function kr(n) { tt || dr();
            it || (tt(), it = !0);
            at.add(n, void 0) }

        function dr() { if (i.Promise && i.Promise.resolve) { var n = i.Promise.resolve(void 0);
                tt = function() { n.then(fi) } } else tt = function() { var t = fi,
                    n;
                (n = "function" != ut(i.setImmediate)) || !(n = i.Window && i.Window.prototype) || (n = -1 == y.indexOf("Edge") && i.Window.prototype.setImmediate == i.setImmediate);
                n ? (st || (st = br()), st(t)) : i.setImmediate(t) } }

        function fi() { for (var n, t; n = at.remove();) { try { n.a.call(n.b) } catch (i) { wr(i) } t = ct;
                t.f(n);
                100 > t.b && (t.b++, n.next = t.a, t.a = n) } it = !1 }

        function b() { this.c = this.c;
            this.f = this.f }

        function gr(n, t) { var u, f, i = document,
                e, r, o, s; if (i = t || i, i.querySelectorAll && i.querySelector && n) return i.querySelectorAll(n ? "." + n : ""); if (n && i.getElementsByClassName) return i.getElementsByClassName(n); if (e = i.getElementsByTagName("*"), n) { for (r = {}, u = f = 0; i = e[u]; u++) o = i.className, (s = "function" == typeof o.split) && (s = 0 <= ii(o.split(/\s+/), n)), s && (r[f++] = i); return r.length = f, r } return e }

        function nu(n, t) { for (var i = 0; n;) { if (t(n)) return n;
                n = n.parentNode;
                i++ } return null }

        function k(n) { b.call(this);
            this.l = 1;
            this.g = [];
            this.h = 0;
            this.a = [];
            this.b = {};
            this.m = !!n }

        function tu(n, t, i) { var r = rt,
                u;
            (n = r.b[n]) && (u = r.a, (n = er(n, function(n) { return u[n + 1] == t && u[n + 2] == i })) && r.C(n)) }

        function iu(n, t, i) { kr(function() { n.apply(t, i) }) }

        function oi(n) { var t = n.match(ei),
                r, u, i; return n = t[1], r = t[2], u = t[3], t = t[4], i = "", n && (i += n + ":"), u && (i += "//", r && (i += r + "@"), i += u, t && (i += ":" + t)), i }

        function si(n, t, i) { if ("array" == ut(t))
                for (var r = 0; r < t.length; r++) si(n, String(t[r]), i);
            else null != t && i.push(n + ("" === t ? "" : "=" + encodeURIComponent(String(t)))) }

        function ru(n) { var i = [],
                t; for (t in n) si(t, n[t], i); return i.join("&") }

        function uu() { var n = arguments,
                t; if (1 < n.length) p[n[0]] = n[1];
            else { n = n[0]; for (t in n) p[t] = n[t] } }

        function ci(n) { return n && window.yterr ? function() { try { return n.apply(this, arguments) } catch (t) { li(t) } } : n }

        function li(n, t) { var i = c("yt.logging.errors.log");
            i ? i(n, t, void 0, void 0, void 0) : (i = [], i = "ERRORS" in p ? p.ERRORS : i, i.push([n, t, void 0, void 0, void 0]), uu("ERRORS", i)) }

        function d(n) { if (this.type = "", this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null, this.charCode = this.keyCode = 0, this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1, this.clientY = this.clientX = 0, this.changedTouches = this.touches = null, n = n || window.event) { this.a = n; for (var t in n) t in vi || (this[t] = n[t]); if ((t = n.target || n.srcElement) && 3 == t.nodeType && (t = t.parentNode), this.target = t, t = n.relatedTarget) try { t = t.nodeName ? t : null } catch (i) { t = null } else "mouseover" == this.type ? t = n.fromElement : "mouseout" == this.type && (t = n.toElement);
                this.relatedTarget = t;
                this.clientX = void 0 != n.clientX ? n.clientX : n.pageX;
                this.clientY = void 0 != n.clientY ? n.clientY : n.pageY;
                this.keyCode = n.keyCode ? n.keyCode : n.which;
                this.charCode = n.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = n.altKey;
                this.ctrlKey = n.ctrlKey;
                this.shiftKey = n.shiftKey;
                this.metaKey = n.metaKey } }

        function fu(n, t, i, r) { return r = void 0 === r ? {} : r, n.addEventListener && ("mouseenter" != t || "onmouseenter" in document ? "mouseleave" != t || "onmouseenter" in document ? "mousewheel" == t && "MozBoxSizing" in document.documentElement.style && (t = "MozMousePixelScroll") : t = "mouseout" : t = "mouseover"), pr(function(u) { var o = "boolean" == typeof u[4] && u[4] == !!r,
                    f, e; if (f = w(u[4]) && w(r)) n: { f = u[4]; for (e in f)
                        if (!(e in r) || f[e] !== r[e]) { f = !1; break n } for (e in r)
                        if (!(e in f)) { f = !1; break n } f = !0 }
                return !!u.length && u[0] == n && u[1] == t && u[2] == i && (o || f) }) }

        function eu(n) { n && ("string" == typeof n && (n = [n]), h(n, function(n) { if (n in o) { var t = o[n],
                        i = t[0],
                        r = t[1],
                        u = t[3];
                    t = t[4];
                    i.removeEventListener ? pt() || "boolean" == typeof t ? i.removeEventListener(r, u, t) : i.removeEventListener(r, u, !!t.capture) : i.detachEvent && i.detachEvent("on" + r, u);
                    delete o[n] } })) }

        function yi(n, t, i) { var r = void 0 === r ? {} : r,
                f, e, u;
            n && (n.addEventListener || n.attachEvent) && (f = fu(n, t, i, r), f || (f = ++yt.count + "", e = !("mouseenter" != t && "mouseleave" != t || !n.addEventListener || "onmouseenter" in document), u = e ? function(r) { return r = new d(r), nu(r.relatedTarget, function(t) { return t == n }) ? void 0 : (r.currentTarget = n, r.type = t, i.call(n, r)) } : function(t) { return t = new d(t), t.currentTarget = n, i.call(n, t) }, u = ci(u), n.addEventListener ? ("mouseenter" == t && e ? t = "mouseover" : "mouseleave" == t && e ? t = "mouseout" : "mousewheel" == t && "MozBoxSizing" in document.documentElement.style && (t = "MozMousePixelScroll"), pt() || "boolean" == typeof r ? n.addEventListener(t, u, r) : n.addEventListener(t, u, !!r.capture)) : n.attachEvent("on" + t, u), o[f] = [n, t, i, u, r])) }

        function pi(n) { return "function" == ut(n) && (n = ci(n)), window.setInterval(n, 250) }

        function ou(n) { return wt[n] || (wt[n] = String(n).replace(/\-([a-z])/g, function(n, t) { return t.toUpperCase() })) }

        function bi() { h(bt, function(n) { n() }) }

        function ki(n, t) { t || (t = document); var u = ri(t.getElementsByTagName("yt:" + n)),
                i = "yt-" + n,
                r = t || document; return i = ri(r.querySelectorAll && r.querySelector ? r.querySelectorAll("." + i) : gr(i, t)), or(u, i) }

        function f(n, t) { return "yt:" == n.tagName.toLowerCase().substr(0, 3) ? n.getAttribute(t) : n ? n.dataset ? n.dataset[ou(t)] : n.getAttribute("data-" + t) : null }

        function su() { rt.G.apply(rt, arguments) }

        function di(n) { if (this.b = n || {}, this.f = {}, this.c = this.a = !1, n = document.getElementById("www-widgetapi-script"), this.a = !!("https:" == document.location.protocol || n && 0 == n.src.indexOf("https:"))) { n = [this.b, window.YTConfig || {}, this.f]; for (var t = 0; t < n.length; t++) n[t].host && (n[t].host = n[t].host.replace("http://", "https://")) } }

        function t(n, t) { for (var u, r = [n.b, window.YTConfig || {}, n.f], i = 0; i < r.length; i++)
                if (u = r[i][t], void 0 != u) return u; return null }

        function hu(n, t, i) { l || (l = {}, yi(window, "message", s(n.g, n)));
            l[i] = t }

        function u(n, i, r) { var u, f; if (this.h = this.a = this.b = null, this.g = this[nt] || (this[nt] = ++ti), this.c = 0, this.A = !1, this.s = [], this.f = null, this.l = r, this.m = {}, r = document, (n = v(n) ? r.getElementById(n) : n) && (r = "iframe" == n.tagName.toLowerCase(), i.host || (i.host = r ? oi(n.src) : "https://www.youtube.com"), this.b = new di(i), r || (i = cu(this, n), this.h = n, (r = n.parentNode) && r.replaceChild(i, n), n = i), this.a = n, this.a.id || (n = i = this.a, n = n[nt] || (n[nt] = ++ti), i.id = "widget" + n), g[this.a.id] = this, window.postMessage)) { this.f = new k;
                lu(this);
                i = t(this.b, "events"); for (u in i) i.hasOwnProperty(u) && this.addEventListener(u, i[u]); for (f in wi) gi(this, f) } }

        function gi(n, t) { var i = t.split("."),
                r;
            2 == i.length && (r = i[1], n.l == i[0] && nr(n, r)) }

        function kt(n, t, i) { i = i || [];
            i = Array.prototype.slice.call(i);
            t = { event: "command", func: t, args: i };
            n.A ? n.B(t) : n.s.push(t) }

        function cu(n, i) { for (var e, f, r = document.createElement("iframe"), u = i.attributes, o = 0, s = u.length; o < s; o++) e = u[o].value, null != e && "" != e && "null" != e && r.setAttribute(u[o].name, e); return r.setAttribute("frameBorder", 0), r.setAttribute("allowfullscreen", 1), r.setAttribute("allow", "autoplay; encrypted-media"), r.setAttribute("title", "YouTube " + t(n.b, "title")), (u = t(n.b, "width")) && r.setAttribute("width", u), (u = t(n.b, "height")) && r.setAttribute("height", u), f = n.u(), f.enablejsapi = window.postMessage ? 1 : 0, window.location.host && (f.origin = window.location.protocol + "//" + window.location.host), f.widgetid = n.g, window.location.href && h(["debugjs", "debugcss"], function(n) { var i = window.location.href,
                    e = i.search(hi),
                    t, r, u;
                n: { for (t = 0, r = n.length; 0 <= (t = i.indexOf(n, t)) && t < e;) { if (u = i.charCodeAt(t - 1), (38 == u || 63 == u) && (u = i.charCodeAt(t + r), !u || 61 == u || 38 == u || 35 == u)) break n;
                        t += r + 1 } t = -1 } 0 > t ? i = null : (r = i.indexOf("&", t), (0 > r || r > e) && (r = e), t += n.length + 1, i = decodeURIComponent(i.substr(t, r - t).replace(/\+/g, " ")));
                null === i || (f[n] = i) }), r.src = t(n.b, "host") + n.v() + "?" + ru(f), r }

        function lu(n) { hu(n.b, n, n.g);
            n.c = pi(s(n.F, n));
            yi(n.a, "load", s(function() { window.clearInterval(this.c);
                this.c = pi(s(this.F, this)) }, n)) }

        function nr(n, t) { n.m[t] || (n.m[t] = !0, kt(n, "addEventListener", [t])) }

        function au(n) { return (0 == n.search("cue") || 0 == n.search("load")) && "loadModule" != n }

        function vu(n) { return 0 == n.search("get") || 0 == n.search("is") }

        function e(n, t) { var i, r; if (!n) throw Error("YouTube player element ID required."); if (i = { title: "video player", videoId: "", width: 640, height: 360 }, t)
                for (r in t) i[r] = t[r];
            u.call(this, n, i, "player");
            this.i = {};
            this.j = {} }

        function yu(n) { if ("iframe" != n.tagName.toLowerCase()) { var t = f(n, "videoid");
                t && (t = { videoId: t, width: f(n, "width"), height: f(n, "height") }, new e(n, t)) } }

        function tr(n, t) { if (w(t))
                for (var i in t) n.j[i] = t[i] }

        function pu(n, t) { h(t, function(n) { this[n] || (this[n] = "getCurrentTime" == n ? function() { var t = this.j.currentTime,
                        n; return 1 == this.j.playerState && (n = (fr() / 1e3 - this.j.currentTimeLastUpdated_) * this.j.playbackRate, 0 < n && (t += Math.min(n, 1))), t } : au(n) ? function() { return this.j = {}, this.i = {}, kt(this, n, arguments), this } : vu(n) ? function() { var t = 0; return 0 == n.search("get") ? t = 3 : 0 == n.search("is") && (t = 2), this.j[n.charAt(t).toLowerCase() + n.substr(t + 1)] } : function() { return kt(this, n, arguments), this }) }, n) }

        function a(n, t) { var r = { title: "Thumbnail", videoId: "", width: 120, height: 68 },
                i; if (t)
                for (i in t) r[i] = t[i];
            u.call(this, n, r, "thumbnail") }

        function wu(n) { var t, i; "iframe" != n.tagName.toLowerCase() && (t = f(n, "videoid"), t && (t = { videoId: t, events: {} }, t.width = f(n, "width"), t.height = f(n, "height"), t.thumbWidth = f(n, "thumb-width"), t.thumbHeight = f(n, "thumb-height"), t.thumbAlign = f(n, "thumb-align"), i = f(n, "onclick"), i && (t.events.onClick = i), new a(n, t))) } var n, i = this,
            nt = "closure_uid_" + (1e9 * Math.random() >>> 0),
            ti = 0,
            fr = Date.now || function() { return +new Date },
            ii = Array.prototype.indexOf ? function(n, t) { return Array.prototype.indexOf.call(n, t, void 0) } : function(n, t) { if (v(n)) return v(t) && 1 == t.length ? n.indexOf(t, 0) : -1; for (var i = 0; i < n.length; i++)
                    if (i in n && n[i] === t) return i; return -1 },
            h = Array.prototype.forEach ? function(n, t, i) { Array.prototype.forEach.call(n, t, i) } : function(n, t, i) { for (var f = n.length, u = v(n) ? n.split("") : n, r = 0; r < f; r++) r in u && t.call(i, u[r], r, n) },
            et, ot, st, ct, tt, it, at, vt, ei, hi, p, ai, vi, o, yt, pt, wt, l, dt, gt, ni;
        ui.prototype.get = function() { if (0 < this.b) { this.b--; var n = this.a;
                this.a = n.next;
                n.next = null } else n = this.c(); return n }; var sr = /&/g,
            hr = /</g,
            cr = />/g,
            lr = /"/g,
            ar = /'/g,
            vr = /\x00/g,
            yr = /[\x00&<>"']/,
            y;
        n: { if (et = i.navigator, et && (ot = et.userAgent, ot)) { y = ot; break n } y = "" } ct = new ui(function() { return new lt }, function(n) { n.reset() });
        ht.prototype.add = function(n, t) { var i = ct.get();
            i.set(n, t);
            this.b ? this.b.next = i : this.a = i;
            this.b = i };
        ht.prototype.remove = function() { var n = null; return this.a && (n = this.a, this.a = this.a.next, this.a || (this.b = null), n.next = null), n };
        lt.prototype.set = function(n, t) { this.a = n;
            this.b = t;
            this.next = null };
        lt.prototype.reset = function() { this.next = this.b = this.a = null };
        it = !1;
        at = new ht;
        b.prototype.c = !1;
        b.prototype.dispose = function() { this.c || (this.c = !0, this.w()) };
        b.prototype.w = function() { if (this.f)
                for (; this.f.length;) this.f.shift()() };
        vt = i.JSON.stringify;
        ft(k, b);
        n = k.prototype;
        n.subscribe = function(n, t, i) { var u = this.b[n],
                r; return u || (u = this.b[n] = []), r = this.l, this.a[r] = n, this.a[r + 1] = t, this.a[r + 2] = i, this.l = r + 3, u.push(r), r };
        n.C = function(n) { var i = this.a[n],
                t, r; return i && (t = this.b[i], 0 != this.h ? (this.g.push(n), this.a[n + 1] = ir) : (t && (r = ii(t, n), 0 <= r && Array.prototype.splice.call(t, r, 1)), delete this.a[n], delete this.a[n + 1], delete this.a[n + 2])), !!i };
        n.G = function(n) { var i = this.b[n],
                r; if (i) { for (var u = Array(arguments.length - 1), t = 1, f = arguments.length; t < f; t++) u[t - 1] = arguments[t]; if (this.m)
                    for (t = 0; t < i.length; t++) r = i[t], iu(this.a[r + 1], this.a[r + 2], u);
                else { this.h++; try { for (t = 0, f = i.length; t < f; t++) r = i[t], this.a[r + 1].apply(this.a[r + 2], u) } finally { if (this.h--, 0 < this.g.length && 0 == this.h)
                            for (; i = this.g.pop();) this.C(i) } } return 0 != t } return !1 };
        n.clear = function(n) { if (n) { var t = this.b[n];
                t && (h(t, this.C, this), delete this.b[n]) } else this.a.length = 0, this.b = {} };
        n.w = function() { k.I.w.call(this);
            this.clear();
            this.g.length = 0 };
        ei = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        hi = /#|$/;
        p = window.yt && window.yt.config_ || window.ytcfg && window.ytcfg.data_ || {};
        r("yt.config_", p);
        ai = 0;
        r("ytDomDomGetNextId", c("ytDomDomGetNextId") || function() { return ++ai });
        vi = { stopImmediatePropagation: 1, stopPropagation: 1, preventMouseEvent: 1, preventManipulation: 1, preventDefault: 1, layerX: 1, layerY: 1, screenX: 1, screenY: 1, scale: 1, rotation: 1, webkitMovementX: 1, webkitMovementY: 1 };
        d.prototype.preventDefault = function() { this.a && (this.a.returnValue = !1, this.a.preventDefault && this.a.preventDefault()) };
        d.prototype.stopPropagation = function() { this.a && (this.a.cancelBubble = !0, this.a.stopPropagation && this.a.stopPropagation()) };
        d.prototype.stopImmediatePropagation = function() { this.a && (this.a.cancelBubble = !0, this.a.stopImmediatePropagation && this.a.stopImmediatePropagation()) };
        o = c("ytEventsEventsListeners") || {};
        r("ytEventsEventsListeners", o);
        yt = c("ytEventsEventsCounter") || { count: 0 };
        r("ytEventsEventsCounter", yt);
        pt = function(n) { var t = !1,
                i; return function() { return t || (i = n(), t = !0), i } }(function() { var n = !1,
                t; try { t = Object.defineProperty({}, "capture", { get: function() { n = !0 } });
                window.addEventListener("test", null, t) } catch (i) {} return n });
        wt = {}; var g = {},
            bt = [],
            rt = new k,
            wi = {};
        l = null;
        di.prototype.g = function(n) { if (n.origin == t(this, "host") || n.origin == t(this, "host").replace(/^http:/, "https:")) { try { var i = JSON.parse(n.data) } catch (r) { return } this.c = !0;
                this.a || 0 != n.origin.indexOf("https:") || (this.a = !0);
                (n = l[i.id]) && (n.A = !0, n.A && (h(n.s, n.B, n), n.s.length = 0), n.H(i)) } };
        n = u.prototype;
        n.L = function(n, t) { return this.a.width = n, this.a.height = t, this };
        n.K = function() { return this.a };
        n.H = function(n) { this.o(n.event, n) };
        n.addEventListener = function(n, t) { var i = t; return "string" == typeof t && (i = function() { window[t].apply(window, arguments) }), this.f.subscribe(n, i), nr(this, n), this };
        n.J = function() { var n, t, i;
            this.a.id && (g[this.a.id] = null);
            n = this.f;
            n && "function" == typeof n.dispose && n.dispose();
            this.h ? (n = this.a, t = n.parentNode, t && t.replaceChild(this.h, n)) : (n = this.a) && n.parentNode && n.parentNode.removeChild(n);
            l && (l[this.g] = null);
            this.b = null;
            n = this.a; for (i in o) o[i][0] == n && eu(i);
            this.h = this.a = null };
        n.u = function() { return {} };
        n.o = function(n, t) { if (!this.f.c) { var i = { target: this, data: t };
                this.f.G(n, i);
                su(this.l + "." + n, i) } };
        n.F = function() { this.a && this.a.contentWindow ? this.B({ event: "listening" }) : window.clearInterval(this.c) };
        n.B = function(n) { n.id = this.g;
            n.channel = "widget";
            n = vt(n); var i = this.b,
                t = oi(this.a.src); if (i = 0 == t.indexOf("https:") ? [t] : i.a ? [t.replace("http:", "https:")] : i.c ? [t] : [t, t.replace("http:", "https:")], !this.a.contentWindow) throw Error("The YouTube player is not attached to the DOM."); for (t = 0; t < i.length; t++) try { this.a.contentWindow.postMessage(n, i[t]) } catch (r) { if (r.name && "SyntaxError" == r.name) li(r, "WARNING");
                else throw r; } };
        ft(e, u);
        n = e.prototype;
        n.v = function() { return "/embed/" + t(this.b, "videoId") };
        n.u = function() { var n = t(this.b, "playerVars"),
                r, i; if (n) { r = {}; for (i in n) r[i] = n[i];
                n = r } else n = {}; if (window != window.top && document.referrer && (n.widget_referrer = document.referrer.substring(0, 256)), i = t(this.b, "embedConfig")) { if (w(i)) try { i = vt(i) } catch (u) { console.error("Invalid embed config JSON", u) } n.embed_config = i } return n };
        n.H = function(n) { var i = n.event,
                t;
            n = n.info; switch (i) {
                case "apiInfoDelivery":
                    if (w(n))
                        for (t in n) this.i[t] = n[t]; break;
                case "infoDelivery":
                    tr(this, n); break;
                case "initialDelivery":
                    window.clearInterval(this.c);
                    this.j = {};
                    this.i = {};
                    pu(this, n.apiInterface);
                    tr(this, n); break;
                default:
                    this.o(i, n) } };
        n.O = function() { var i = parseInt(t(this.b, "width"), 10),
                r = parseInt(t(this.b, "height"), 10),
                n = t(this.b, "host") + this.v(); return yr.test(n) && (-1 != n.indexOf("&") && (n = n.replace(sr, "&amp;")), -1 != n.indexOf("<") && (n = n.replace(hr, "&lt;")), -1 != n.indexOf(">") && (n = n.replace(cr, "&gt;")), -1 != n.indexOf('"') && (n = n.replace(lr, "&quot;")), -1 != n.indexOf("'") && (n = n.replace(ar, "&#39;")), -1 != n.indexOf("\x00") && (n = n.replace(vr, "&#0;"))), '<iframe width="' + i + '" height="' + r + '" src="' + n + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen><\/iframe>' };
        n.N = function(n) { return this.i.namespaces ? n ? this.i[n].options || [] : this.i.namespaces || [] : [] };
        n.M = function(n, t) { if (this.i.namespaces && n && t) return this.i[n][t] };
        ft(a, u);
        a.prototype.v = function() { return "/embed/" + t(this.b, "videoId") };
        a.prototype.u = function() { return { player: 0, thumb_width: t(this.b, "thumbWidth"), thumb_height: t(this.b, "thumbHeight"), thumb_align: t(this.b, "thumbAlign") } };
        a.prototype.o = function(n, t) { a.I.o.call(this, n, t ? t.info : void 0) };
        r("YT.PlayerState.UNSTARTED", -1);
        r("YT.PlayerState.ENDED", 0);
        r("YT.PlayerState.PLAYING", 1);
        r("YT.PlayerState.PAUSED", 2);
        r("YT.PlayerState.BUFFERING", 3);
        r("YT.PlayerState.CUED", 5);
        r("YT.get", function(n) { return g[n] });
        r("YT.scan", bi);
        r("YT.subscribe", function(n, t, i) { rt.subscribe(n, t, i);
            wi[n] = !0; for (var r in g) gi(g[r], n) });
        r("YT.unsubscribe", function(n, t, i) { tu(n, t, i) });
        r("YT.Player", e);
        r("YT.Thumbnail", a);
        u.prototype.destroy = u.prototype.J;
        u.prototype.setSize = u.prototype.L;
        u.prototype.getIframe = u.prototype.K;
        u.prototype.addEventListener = u.prototype.addEventListener;
        e.prototype.getVideoEmbedCode = e.prototype.O;
        e.prototype.getOptions = e.prototype.N;
        e.prototype.getOption = e.prototype.M;
        bt.push(function(n) { n = ki("player", n);
            h(n, yu) });
        bt.push(function() { var n = ki("thumbnail");
            h(n, wu) }); "undefined" != typeof YTConfig && YTConfig.parsetags && "onload" != YTConfig.parsetags || bi();
        dt = c("onYTReady");
        dt && dt();
        gt = c("onYouTubeIframeAPIReady");
        gt && gt();
        ni = c("onYouTubePlayerAPIReady");
        ni && ni() }.call(this),
    function(n, t) { "use strict"; var rt = "",
            nt = "?",
            k = "function",
            d = "undefined",
            tt = "object",
            ut = "string",
            i = "model",
            f = "name",
            u = "type",
            r = "vendor",
            e = "version",
            a = "architecture",
            w = "console",
            s = "mobile",
            o = "tablet",
            v = "smarttv",
            g = "wearable",
            l = { extend: function(n, t) { var r = {},
                        i; for (i in n) r[i] = t[i] && t[i].length % 2 == 0 ? t[i].concat(n[i]) : n[i]; return r }, has: function(n, t) { return typeof n == "string" ? t.toLowerCase().indexOf(n.toLowerCase()) !== -1 : !1 }, lowerize: function(n) { return n.toLowerCase() }, major: function(n) { return typeof n === ut ? n.replace(/[^\d\.]/g, "").split(".")[0] : t }, trim: function(n) { return n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") } },
            c = { rgx: function(n, i) { for (var e = 0, s, l, o, r, f, u, h, c; e < i.length && !f;) { for (h = i[e], c = i[e + 1], s = l = 0; s < h.length && !f;)
                            if (f = h[s++].exec(n), !!f)
                                for (o = 0; o < c.length; o++) u = f[++l], r = c[o], typeof r === tt && r.length > 0 ? r.length == 2 ? this[r[0]] = typeof r[1] == k ? r[1].call(this, u) : r[1] : r.length == 3 ? this[r[0]] = typeof r[1] !== k || r[1].exec && r[1].test ? u ? u.replace(r[1], r[2]) : t : u ? r[1].call(this, u, r[2]) : t : r.length == 4 && (this[r[0]] = u ? r[3].call(this, u.replace(r[1], r[2])) : t) : this[r] = u ? u : t;
                        e += 2 } }, str: function(n, i) { var r, u; for (r in i)
                        if (typeof i[r] === tt && i[r].length > 0) { for (u = 0; u < i[r].length; u++)
                                if (l.has(i[r][u], n)) return r === nt ? t : r } else if (l.has(i[r], n)) return r === nt ? t : r; return n } },
            y = { browser: { oldsafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } }, device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } },
            it = { browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [f, e],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [f, "Opera Mini"], e
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [f, "Opera"], e
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
                    [f, e],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [f, "IE"], e
                    ],
                    [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
                    [
                        [f, "Edge"], e
                    ],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [f, "Yandex"], e
                    ],
                    [/(puffin)\/([\w\.]+)/i],
                    [
                        [f, "Puffin"], e
                    ],
                    [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                    [
                        [f, "UCBrowser"], e
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [f, /_/g, " "], e
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [f, "WeChat"], e
                    ],
                    [/(qqbrowserlite)\/([\w\.]+)/i],
                    [f, e],
                    [/(QQ)\/([\d\.]+)/i],
                    [f, e],
                    [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [f, e],
                    [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                    [f, e],
                    [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                    [f, e],
                    [/(MetaSr)[\/\s]?([\w\.]+)/i],
                    [f],
                    [/(LBBROWSER)/i],
                    [f],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [e, [f, "MIUI Browser"]],
                    [/;fbav\/([\w\.]+);/i],
                    [e, [f, "Facebook"]],
                    [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                    [e, [f, "Chrome Headless"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [f, /(.+)/, "$1 WebView"], e
                    ],
                    [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                    [
                        [f, /(.+(?:g|us))(.+)/, "$1 $2"], e
                    ],
                    [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                    [e, [f, "Android Browser"]],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                    [f, e],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [f, "Dolphin"], e
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [f, "Chrome"], e
                    ],
                    [/(coast)\/([\w\.]+)/i],
                    [
                        [f, "Opera Coast"], e
                    ],
                    [/fxios\/([\w\.-]+)/i],
                    [e, [f, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [e, [f, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [e, f],
                    [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [
                        [f, "GSA"], e
                    ],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [f, [e, c.str, y.browser.oldsafari.version]],
                    [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                    [f, e],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [f, "Netscape"], e
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [f, e]
                ], cpu: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        [a, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        [a, l.lowerize]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        [a, "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        [a, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        [a, /ower/, "", l.lowerize]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        [a, "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        [a, l.lowerize]
                    ]
                ], device: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    [i, r, [u, o]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [i, [r, "Apple"],
                        [u, o]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [i, "Apple TV"],
                        [r, "Apple"]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [r, i, [u, o]],
                    [/(kf[A-z]+)\sbuild\/.+silk\//i],
                    [i, [r, "Amazon"],
                        [u, o]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                    [
                        [i, c.str, y.device.amazon.model],
                        [r, "Amazon"],
                        [u, s]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [i, r, [u, s]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [i, [r, "Apple"],
                        [u, s]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [r, i, [u, s]],
                    [/\(bb10;\s(\w+)/i],
                    [i, [r, "BlackBerry"],
                        [u, s]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                    [i, [r, "Asus"],
                        [u, o]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [r, "Sony"],
                        [i, "Xperia Tablet"],
                        [u, o]
                    ],
                    [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                    [i, [r, "Sony"],
                        [u, s]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [r, i, [u, w]],
                    [/android.+;\s(shield)\sbuild/i],
                    [i, [r, "Nvidia"],
                        [u, w]
                    ],
                    [/(playstation\s[34portablevi]+)/i],
                    [i, [r, "Sony"],
                        [u, w]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [r, c.str, y.device.sprint.vendor],
                        [i, c.str, y.device.sprint.model],
                        [u, s]
                    ],
                    [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    [r, i, [u, o]],
                    [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                    [r, [i, /_/g, " "],
                        [u, s]
                    ],
                    [/(nexus\s9)/i],
                    [i, [r, "HTC"],
                        [u, o]
                    ],
                    [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                    [i, [r, "Huawei"],
                        [u, s]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [r, i, [u, s]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [i, [r, "Microsoft"],
                        [u, w]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [i, /\./g, " "],
                        [r, "Microsoft"],
                        [u, s]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [i, [r, "Motorola"],
                        [u, s]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [i, [r, "Motorola"],
                        [u, o]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [r, l.trim],
                        [i, l.trim],
                        [u, v]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [i, /^/, "SmartTV"],
                        [r, "Samsung"],
                        [u, v]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [i, [r, "Sharp"],
                        [u, v]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [r, "Samsung"], i, [u, o]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [r, [u, v], i],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                    [
                        [r, "Samsung"], i, [u, s]
                    ],
                    [/sie-(\w*)/i],
                    [i, [r, "Siemens"],
                        [u, s]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                    [
                        [r, "Nokia"], i, [u, s]
                    ],
                    [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                    [i, [r, "Acer"],
                        [u, o]
                    ],
                    [/android.+([vl]k\-?\d{3})\s+build/i],
                    [i, [r, "LG"],
                        [u, o]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [r, "LG"], i, [u, o]
                    ],
                    [/(lg) netcast\.tv/i],
                    [r, i, [u, v]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                    [i, [r, "LG"],
                        [u, s]
                    ],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [i, [r, "Lenovo"],
                        [u, o]
                    ],
                    [/linux;.+((jolla));/i],
                    [r, i, [u, s]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [r, i, [u, g]],
                    [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                    [r, i, [u, s]],
                    [/crkey/i],
                    [
                        [i, "Chromecast"],
                        [r, "Google"]
                    ],
                    [/android.+;\s(glass)\s\d/i],
                    [i, [r, "Google"],
                        [u, g]
                    ],
                    [/android.+;\s(pixel c)\s/i],
                    [i, [r, "Google"],
                        [u, o]
                    ],
                    [/android.+;\s(pixel xl|pixel)\s/i],
                    [i, [r, "Google"],
                        [u, s]
                    ],
                    [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                    [
                        [i, /_/g, " "],
                        [r, "Xiaomi"],
                        [u, s]
                    ],
                    [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                    [
                        [i, /_/g, " "],
                        [r, "Xiaomi"],
                        [u, o]
                    ],
                    [/android.+;\s(m[1-5]\snote)\sbuild/i],
                    [i, [r, "Meizu"],
                        [u, o]
                    ],
                    [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                    [i, [r, "OnePlus"],
                        [u, s]
                    ],
                    [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                    [i, [r, "RCA"],
                        [u, o]
                    ],
                    [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                    [i, [r, "Dell"],
                        [u, o]
                    ],
                    [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                    [i, [r, "Verizon"],
                        [u, o]
                    ],
                    [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                    [
                        [r, "Barnes & Noble"], i, [u, o]
                    ],
                    [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                    [i, [r, "NuVision"],
                        [u, o]
                    ],
                    [/android.+;\s(k88)\sbuild/i],
                    [i, [r, "ZTE"],
                        [u, o]
                    ],
                    [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                    [i, [r, "Swiss"],
                        [u, s]
                    ],
                    [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                    [i, [r, "Swiss"],
                        [u, o]
                    ],
                    [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                    [i, [r, "Zeki"],
                        [u, o]
                    ],
                    [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                    [
                        [r, "Dragon Touch"], i, [u, o]
                    ],
                    [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                    [i, [r, "Insignia"],
                        [u, o]
                    ],
                    [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                    [i, [r, "NextBook"],
                        [u, o]
                    ],
                    [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                    [
                        [r, "Voice"], i, [u, s]
                    ],
                    [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                    [
                        [r, "LvTel"], i, [u, s]
                    ],
                    [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                    [i, [r, "Envizen"],
                        [u, o]
                    ],
                    [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                    [r, i, [u, o]],
                    [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                    [i, [r, "MachSpeed"],
                        [u, o]
                    ],
                    [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                    [r, i, [u, o]],
                    [/android.+[;\/]\s*TU_(1491)\s+build/i],
                    [i, [r, "Rotor"],
                        [u, o]
                    ],
                    [/android.+(KS(.+))\s+build/i],
                    [i, [r, "Amazon"],
                        [u, o]
                    ],
                    [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                    [r, i, [u, o]],
                    [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [u, l.lowerize], r, i
                    ],
                    [/(android[\w\.\s\-]{0,9});.+build/i],
                    [i, [r, "Generic"]]
                ], engine: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    [e, [f, "EdgeHTML"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [f, e],
                    [/rv\:([\w\.]{1,9}).+(gecko)/i],
                    [e, f]
                ], os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [f, e],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [f, [e, c.str, y.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [f, "Windows"],
                        [e, c.str, y.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [f, "BlackBerry"], e
                    ],
                    [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
                    [f, e],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                    [
                        [f, "Symbian"], e
                    ],
                    [/\((series40);/i],
                    [f],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [f, "Firefox OS"], e
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                    [f, e],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [f, "Chromium OS"], e
                    ],
                    [/(sunos)\s?([\w\.\d]*)/i],
                    [
                        [f, "Solaris"], e
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                    [f, e],
                    [/(haiku)\s(\w+)/i],
                    [f, e],
                    [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                    [
                        [e, /_/g, "."],
                        [f, "iOS"]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [f, "Mac OS"],
                        [e, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i],
                    [f, e]
                ] },
            h = function(i, r) { if (typeof i == "object" && (r = i, i = t), !(this instanceof h)) return new h(i, r).getResult(); var u = i || (n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : rt),
                    f = r ? l.extend(it, r) : it; return this.getBrowser = function() { var n = { name: t, version: t }; return c.rgx.call(n, u, f.browser), n.major = l.major(n.version), n }, this.getCPU = function() { var n = { architecture: t }; return c.rgx.call(n, u, f.cpu), n }, this.getDevice = function() { var n = { vendor: t, model: t, type: t }; return c.rgx.call(n, u, f.device), n }, this.getEngine = function() { var n = { name: t, version: t }; return c.rgx.call(n, u, f.engine), n }, this.getOS = function() { var n = { name: t, version: t }; return c.rgx.call(n, u, f.os), n }, this.getResult = function() { return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() } }, this.getUA = function() { return u }, this.setUA = function(n) { return u = n, this }, this },
            p, b;
        h.VERSION = "0.7.18";
        h.BROWSER = { NAME: f, MAJOR: "major", VERSION: e };
        h.CPU = { ARCHITECTURE: a };
        h.DEVICE = { MODEL: i, VENDOR: r, TYPE: u, CONSOLE: w, MOBILE: s, SMARTTV: v, TABLET: o, WEARABLE: g, EMBEDDED: "embedded" };
        h.ENGINE = { NAME: f, VERSION: e };
        h.OS = { NAME: f, VERSION: e };
        typeof exports !== d ? (typeof module !== d && module.exports && (exports = module.exports = h), exports.UAParser = h) : typeof define === k && define.amd ? define(function() { return h }) : n && (n.UAParser = h);
        p = n && (n.jQuery || n.Zepto);
        typeof p !== d && (b = new h, p.ua = b.getResult(), p.ua.get = function() { return b.getUA() }, p.ua.set = function(n) { var t, i;
            b.setUA(n);
            t = b.getResult(); for (i in t) p.ua[i] = t[i] }) }(typeof window == "object" ? window : this)