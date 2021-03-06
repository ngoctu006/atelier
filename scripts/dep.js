var ODFC = ODFC || {};
ODFC.Events = function(t) {
    var e = {}, i = 0, s = function(t) {
        var e = ++i + "";
        return t ? t + e : e
    }, o = Object.keys || function(t) {
        if (t !== Object(t))
            throw new TypeError("Invalid object");
        var e = [];
        for (var i in t)
            hasOwnProperty.call(t, i) && e.push(i);
        return e
    }, n = /\s+/, r = function(t, e, i, s) {
        if (!i)
            return !0;
        if ("object" == typeof i) {
            for (var o in i)
                t[e].apply(t, [o, i[o]].concat(s));
            return !1
        }
        if (n.test(i)) {
            for (var r = i.split(n), a = 0, h = r.length; h > a; a++)
                t[e].apply(t, [r[a]].concat(s));
            return !1
        }
        return !0
    }, a = function(t, e) {
        var i, s = -1, o = t.length, n = e[0], r = e[1], a = e[2];
        switch (e.length) {
            case 0:
                for (; ++s < o; )
                    (i = t[s]).callback.call(i.ctx);
                return;
            case 1:
                for (; ++s < o; )
                    (i = t[s]).callback.call(i.ctx, n);
                return;
            case 2:
                for (; ++s < o; )
                    (i = t[s]).callback.call(i.ctx, n, r);
                return;
            case 3:
                for (; ++s < o; )
                    (i = t[s]).callback.call(i.ctx, n, r, a);
                return;
            default:
                for (; ++s < o; )
                    (i = t[s]).callback.apply(i.ctx, e)
        }
    }, h = {listenTo: "on",listenToOnce: "once"};
    return e.initialize = function(i) {
        t.each(h, function(t, i) {
            e[t] = function(t, e, o) {
                var n = this._listeners || (this._listeners = {}), r = t._listenerId || (t._listenerId = s("l"));
                return n[r] = t, "object" == typeof e && (o = this), t[i](e, o, this), this
            }
        }), t.extend(e, {on: function(t, e, i) {
                if (!r(this, "on", t, [e, i]) || !e)
                    return this;
                this._events || (this._events = {});
                var s = this._events[t] || (this._events[t] = []);
                return s.push({callback: e,context: i,ctx: i || this}), this
            },once: function(e, i, s) {
                if (!r(this, "once", e, [i, s]) || !i)
                    return this;
                var o = this, n = t.once(function() {
                    o.off(e, n), i.apply(this, arguments)
                });
                return n._callback = i, this.on(e, n, s)
            },off: function(t, e, i) {
                var s, n, a, h, l, d, c, p;
                if (!this._events || !r(this, "off", t, [e, i]))
                    return this;
                if (!t && !e && !i)
                    return this._events = {}, this;
                for (h = t ? [t] : o(this._events), l = 0, d = h.length; d > l; l++)
                    if (t = h[l], a = this._events[t]) {
                        if (this._events[t] = s = [], e || i)
                            for (c = 0, p = a.length; p > c; c++)
                                n = a[c], (e && e !== n.callback && e !== n.callback._callback || i && i !== n.context) && s.push(n);
                        s.length || delete this._events[t]
                    }
                return this
            },trigger: function(t) {
                if (!this._events)
                    return this;
                var e = Array.prototype.slice.call(arguments, 1);
                if (!r(this, "trigger", t, e))
                    return this;
                var i = this._events[t], s = this._events.all;
                return i && a(i, e), s && a(s, arguments), this
            },stopListening: function(t, e, i) {
                var s = this._listeners;
                if (!s)
                    return this;
                var o = !e && !i;
                "object" == typeof e && (i = this), t && ((s = {})[t._listenerId] = t);
                for (var n in s)
                    s[n].off(e, i, this), o && delete this._listeners[n];
                return this
            }})
    }, e.initialize(), e
}(jQuery), function(t, e, i, s) {
    function o(e, i) {
        e.owlCarousel = {name: "Owl Carousel",author: "Bartosz Wojciechowski",version: "2.0.0-beta.2.1"}, this.settings = null, this.options = t.extend({}, o.Defaults, i), this.itemData = t.extend({}, c), this.dom = t.extend({}, p), this.width = t.extend({}, u), this.num = t.extend({}, f), this.drag = t.extend({}, g), this.state = t.extend({}, v), this.e = t.extend({}, y), this.plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = null, this.dom.el = e, this.dom.$el = t(e);
        for (var s in o.Plugins)
            this.plugins[s[0].toLowerCase() + s.slice(1)] = new o.Plugins[s](this);
        this.init()
    }
    function n(t) {
        var e, s, o = i.createElement("div"), n = t;
        for (e in n)
            if (s = n[e], "undefined" != typeof o.style[s])
                return o = null, [s, e];
        return [!1]
    }
    function r() {
        return n(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }
    function a() {
        return n(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }
    function h() {
        return n(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }
    function l() {
        return "ontouchstart" in e || !!navigator.msMaxTouchPoints
    }
    function d() {
        return e.navigator.msPointerEnabled
    }
    var c, p, u, f, m, g, v, y;
    c = {index: !1,indexAbs: !1,posLeft: !1,clone: !1,active: !1,loaded: !1,lazyLoad: !1,current: !1,width: !1,center: !1,page: !1,hasVideo: !1,playVideo: !1}, p = {el: null,$el: null,stage: null,$stage: null,oStage: null,$oStage: null,$items: null,$oItems: null,$cItems: null,$content: null}, u = {el: 0,stage: 0,item: 0,prevWindow: 0,cloneLast: 0}, f = {items: 0,oItems: 0,cItems: 0,active: 0,merged: []}, g = {start: 0,startX: 0,startY: 0,current: 0,currentX: 0,currentY: 0,offsetX: 0,offsetY: 0,distance: null,startTime: 0,endTime: 0,updatedX: 0,targetEl: null}, v = {isTouch: !1,isScrolling: !1,isSwiping: !1,direction: !1,inMotion: !1}, y = {_onDragStart: null,_onDragMove: null,_onDragEnd: null,_transitionEnd: null,_resizer: null,_responsiveCall: null,_goToLoop: null,_checkVisibile: null}, o.Defaults = {items: 3,loop: !1,center: !1,mouseDrag: !0,touchDrag: !0,pullDrag: !0,freeDrag: !1,margin: 0,stagePadding: 0,merge: !1,mergeFit: !0,autoWidth: !1,startPosition: 0,smartSpeed: 250,fluidSpeed: !1,dragEndSpeed: !1,responsive: {},responsiveRefreshRate: 200,responsiveBaseElement: e,responsiveClass: !1,fallbackEasing: "swing",info: !1,nestedItemSelector: !1,itemElement: "div",stageElement: "div",themeClass: "owl-theme",baseClass: "owl-carousel",itemClass: "owl-item",centerClass: "center",activeClass: "active"}, o.Plugins = {}, o.prototype.init = function() {
        if (this.setResponsiveOptions(), this.trigger("initialize"), this.dom.$el.hasClass(this.settings.baseClass) || this.dom.$el.addClass(this.settings.baseClass), this.dom.$el.hasClass(this.settings.themeClass) || this.dom.$el.addClass(this.settings.themeClass), this.settings.rtl && this.dom.$el.addClass("owl-rtl"), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var t, e, i;
            if (t = this.dom.$el.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, i = this.dom.$el.children(e).width(), t.length && 0 >= i)
                return this.preloadAutoWidthImages(t), !1
        }
        this.width.prevWindow = this.viewport(), this.createStage(), this.fetchContent(), this.eventsCall(), this.internalEvents(), this.dom.$el.addClass("owl-loading"), this.refresh(!0), this.dom.$el.removeClass("owl-loading").addClass("owl-loaded"), this.trigger("initialized"), this.addTriggerableEvents()
    }, o.prototype.setResponsiveOptions = function() {
        if (this.options.responsive) {
            var e = this.viewport(), i = this.options.responsive, s = -1;
            t.each(i, function(t) {
                e >= t && t > s && (s = Number(t))
            }), this.settings = t.extend({}, this.options, i[s]), delete this.settings.responsive, this.settings.responsiveClass && this.dom.$el.attr("class", function(t, e) {
                return e.replace(/\b owl-responsive-\S+/g, "")
            }).addClass("owl-responsive-" + s)
        } else
            this.settings = t.extend({}, this.options)
    }, o.prototype.optionsLogic = function() {
        this.dom.$el.toggleClass("owl-center", this.settings.center), this.settings.loop && this.num.oItems < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.createStage = function() {
        var e = i.createElement("div"), s = i.createElement(this.settings.stageElement);
        e.className = "owl-stage-outer", s.className = "owl-stage", e.appendChild(s), this.dom.el.appendChild(e), this.dom.oStage = e, this.dom.$oStage = t(e), this.dom.stage = s, this.dom.$stage = t(s), e = null, s = null
    }, o.prototype.createItemContainer = function() {
        var e = i.createElement(this.settings.itemElement);
        return e.className = this.settings.itemClass, t(e)
    }, o.prototype.fetchContent = function(e) {
        this.dom.$content = e ? e instanceof jQuery ? e : t(e) : this.settings.nestedItemSelector ? this.dom.$el.find("." + this.settings.nestedItemSelector).not(".owl-stage-outer") : this.dom.$el.children().not(".owl-stage-outer"), this.num.oItems = this.dom.$content.length, 0 !== this.num.oItems && this.initStructure()
    }, o.prototype.initStructure = function() {
        this.createNormalStructure()
    }, o.prototype.createNormalStructure = function() {
        var t, e;
        for (t = 0; t < this.num.oItems; t++)
            e = this.createItemContainer(), this.initializeItemContainer(e, this.dom.$content[t]), this.dom.$stage.append(e);
        this.dom.$content = null
    }, o.prototype.createCustomStructure = function(t) {
        var e, i;
        for (e = 0; t > e; e++)
            i = this.createItemContainer(), this.createItemContainerData(i), this.dom.$stage.append(i)
    }, o.prototype.initializeItemContainer = function(t, e) {
        this.trigger("change", {property: {name: "item",value: t}}), this.createItemContainerData(t), t.append(e), this.trigger("changed", {property: {name: "item",value: t}})
    }, o.prototype.createItemContainerData = function(e, i) {
        var s = t.extend({}, this.itemData);
        i && t.extend(s, i.data("owl-item")), e.data("owl-item", s)
    }, o.prototype.cloneItemContainer = function(t) {
        var e = t.clone(!0, !0).addClass("cloned");
        return this.createItemContainerData(e, e), e.data("owl-item").clone = !0, e
    }, o.prototype.updateLocalContent = function() {
        var e, i;
        for (this.dom.$oItems = this.dom.$stage.find("." + this.settings.itemClass).filter(function() {
            return t(this).data("owl-item").clone === !1
        }), this.num.oItems = this.dom.$oItems.length, e = 0; e < this.num.oItems; e++)
            i = this.dom.$oItems.eq(e), i.data("owl-item").index = e
    }, o.prototype.loopClone = function() {
        if (!this.settings.loop || this.num.oItems < this.settings.items)
            return !1;
        var e, i, s, o = this.settings.items, n = this.num.oItems - 1;
        for (this.settings.stagePadding && 1 === this.settings.items && (o += 1), this.num.cItems = 2 * o, s = 0; o > s; s++)
            e = this.cloneItemContainer(this.dom.$oItems.eq(s)), i = this.cloneItemContainer(this.dom.$oItems.eq(n - s)), this.dom.$stage.append(e), this.dom.$stage.prepend(i);
        this.dom.$cItems = this.dom.$stage.find("." + this.settings.itemClass).filter(function() {
            return t(this).data("owl-item").clone === !0
        })
    }, o.prototype.reClone = function() {
        null !== this.dom.$cItems && (this.dom.$cItems.remove(), this.dom.$cItems = null, this.num.cItems = 0), this.settings.loop && this.loopClone()
    }, o.prototype.calculate = function() {
        var t, e, i, s, o, n, r, a = 0, h = 0;
        for (this.width.el = this.dom.$el.width() - 2 * this.settings.stagePadding, this.width.view = this.dom.$el.width(), i = this.width.el - this.settings.margin * (1 === this.settings.items ? 0 : this.settings.items - 1), this.width.el = this.width.el + this.settings.margin, this.width.item = (i / this.settings.items + this.settings.margin).toFixed(3), this.dom.$items = this.dom.$stage.find(".owl-item"), this.num.items = this.dom.$items.length, this.settings.autoWidth && this.dom.$items.css("width", ""), this._coordinates = [], this.num.merged = [], s = this.settings.rtl ? this.settings.center ? -(this.width.el / 2) : 0 : this.settings.center ? this.width.el / 2 : 0, this.width.mergeStage = 0, t = 0; t < this.num.items; t++)
            this.settings.merge ? (r = this.dom.$items.eq(t).find("[data-merge]").attr("data-merge") || 1, this.settings.mergeFit && r > this.settings.items && (r = this.settings.items), this.num.merged.push(parseInt(r)), this.width.mergeStage += this.width.item * this.num.merged[t]) : this.num.merged.push(1), n = this.width.item * this.num.merged[t], this.settings.autoWidth && (n = this.dom.$items.eq(t).width() + this.settings.margin, this.settings.rtl ? this.dom.$items[t].style.marginLeft = this.settings.margin + "px" : this.dom.$items[t].style.marginRight = this.settings.margin + "px"), this._coordinates.push(s), this.dom.$items.eq(t).data("owl-item").posLeft = a, this.dom.$items.eq(t).data("owl-item").width = n, this.settings.rtl ? (s += n, a += n) : (s -= n, a -= n), h -= Math.abs(n), this.settings.center && (this._coordinates[t] = this.settings.rtl ? this._coordinates[t] + n / 2 : this._coordinates[t] - n / 2);
        for (this.width.stage = Math.abs(this.settings.autoWidth ? this.settings.center ? h : s : h), o = this.num.oItems + this.num.cItems, e = 0; o > e; e++)
            this.dom.$items.eq(e).data("owl-item").indexAbs = e;
        this.setSizes()
    }, o.prototype.setSizes = function() {
        this.settings.stagePadding !== !1 && (this.dom.oStage.style.paddingLeft = this.settings.stagePadding + "px", this.dom.oStage.style.paddingRight = this.settings.stagePadding + "px"), this.settings.rtl ? e.setTimeout(t.proxy(function() {
            this.dom.stage.style.width = this.width.stage + "px"
        }, this), 0) : this.dom.stage.style.width = this.width.stage + "px";
        for (var i = 0; i < this.num.items; i++)
            this.settings.autoWidth || (this.dom.$items[i].style.width = this.width.item - this.settings.margin + "px"), this.settings.rtl ? this.dom.$items[i].style.marginLeft = this.settings.margin + "px" : this.dom.$items[i].style.marginRight = this.settings.margin + "px", 1 === this.num.merged[i] || this.settings.autoWidth || (this.dom.$items[i].style.width = this.width.item * this.num.merged[i] - this.settings.margin + "px");
        this.width.stagePrev = this.width.stage
    }, o.prototype.responsive = function() {
        if (!this.num.oItems)
            return !1;
        var t = this.isElWidthChanged();
        return t ? this.trigger("resize").isDefaultPrevented() ? !1 : (this.state.responsive = !0, this.refresh(), this.state.responsive = !1, void this.trigger("resized")) : !1
    }, o.prototype.refresh = function() {
        var t = this.dom.$oItems && this.dom.$oItems.eq(this.normalize(this.current(), !0));
        return this.trigger("refresh"), this.setResponsiveOptions(), this.updateLocalContent(), this.optionsLogic(), 0 === this.num.oItems ? !1 : (this.dom.$stage.addClass("owl-refresh"), this.reClone(), this.calculate(), this.dom.$stage.removeClass("owl-refresh"), t ? this.reset(t.data("owl-item").indexAbs) : (this.dom.oStage.scrollLeft = 0, this.reset(this.dom.$oItems.eq(0).data("owl-item").indexAbs)), this.state.orientation = e.orientation, this.watchVisibility(), void this.trigger("refreshed"))
    }, o.prototype.updateActiveItems = function() {
        this.trigger("change", {property: {name: "items",value: this.dom.$items}});
        var t, e, i, s, o, n;
        for (t = 0; t < this.num.items; t++)
            this.dom.$items.eq(t).data("owl-item").active = !1, this.dom.$items.eq(t).data("owl-item").current = !1, this.dom.$items.eq(t).removeClass(this.settings.activeClass).removeClass(this.settings.centerClass);
        for (this.num.active = 0, padding = 2 * this.settings.stagePadding, stageX = this.coordinates(this.current()) + padding, view = this.settings.rtl ? this.width.view : -this.width.view, e = 0; e < this.num.items; e++)
            i = this.dom.$items.eq(e), s = i.data("owl-item").posLeft, o = i.data("owl-item").width, n = this.settings.rtl ? s - o - padding : s - o + padding, (this.op(s, "<=", stageX) && this.op(s, ">", stageX + view) || this.op(n, "<", stageX) && this.op(n, ">", stageX + view)) && (this.num.active++, i.data("owl-item").active = !0, i.data("owl-item").current = !0, i.addClass(this.settings.activeClass), this.settings.lazyLoad || (i.data("owl-item").loaded = !0), this.settings.loop && this.updateClonedItemsState(i.data("owl-item").index));
        this.settings.center && (this.dom.$items.eq(this.current()).addClass(this.settings.centerClass).data("owl-item").center = !0), this.trigger("changed", {property: {name: "items",value: this.dom.$items}})
    }, o.prototype.updateClonedItemsState = function(t) {
        var e, i, s;
        for (this.settings.center && (e = this.dom.$items.eq(this.current()).data("owl-item").index), s = 0; s < this.num.items; s++)
            i = this.dom.$items.eq(s), i.data("owl-item").index === t && (i.data("owl-item").current = !0, i.data("owl-item").index === e && i.addClass(this.settings.centerClass))
    }, o.prototype.eventsCall = function() {
        this.e._onDragStart = t.proxy(function(t) {
            this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function(t) {
            this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function(t) {
            this.onDragEnd(t)
        }, this), this.e._transitionEnd = t.proxy(function(t) {
            this.transitionEnd(t)
        }, this), this.e._resizer = t.proxy(function() {
            this.responsiveTimer()
        }, this), this.e._responsiveCall = t.proxy(function() {
            this.responsive()
        }, this), this.e._preventClick = t.proxy(function(t) {
            this.preventClick(t)
        }, this)
    }, o.prototype.responsiveTimer = function() {
        return this.viewport() === this.width.prevWindow ? !1 : (e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._responsiveCall, this.settings.responsiveRefreshRate), void (this.width.prevWindow = this.viewport()))
    }, o.prototype.internalEvents = function() {
        var t = l(), s = d();
        this.dragType = t && !s ? ["touchstart", "touchmove", "touchend", "touchcancel"] : t && s ? ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel"] : ["mousedown", "mousemove", "mouseup"], (t || s) && this.settings.touchDrag ? this.on(i, this.dragType[3], this.e._onDragEnd) : (this.dom.$stage.on("dragstart", function() {
            return !1
        }), this.settings.mouseDrag ? this.dom.stage.onselectstart = function() {
            return !1
        } : this.dom.$el.addClass("owl-text-select-on")), this.transitionEndVendor && this.on(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", this.e._resizer, !1), this.dragEvents()
    }, o.prototype.dragEvents = function() {
        !this.settings.touchDrag || "touchstart" !== this.dragType[0] && "MSPointerDown" !== this.dragType[0] ? this.settings.mouseDrag && "mousedown" === this.dragType[0] ? this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1) : this.off(this.dom.stage, this.dragType[0], this.e._onDragStart) : this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1)
    }, o.prototype.onDragStart = function(t) {
        var s, o, n, r, a;
        if (s = t.originalEvent || t || e.event, 3 === s.which)
            return !1;
        if ("mousedown" === this.dragType[0] && this.dom.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, o = "touchstart" === s.type, n = o ? t.targetTouches[0].pageX : s.pageX || s.clientX, r = o ? t.targetTouches[0].pageY : s.pageY || s.clientY, this.drag.offsetX = this.dom.$stage.position().left - this.settings.stagePadding, this.drag.offsetY = this.dom.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.dom.$stage.position().left + this.width.stage - this.width.el + this.settings.margin), this.state.inMotion && this.support3d)
            a = this.getTransformProperty(), this.drag.offsetX = a, this.animate(a), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d)
            return this.state.inMotion = !1, !1;
        this.drag.startX = n - this.drag.offsetX, this.drag.startY = r - this.drag.offsetY, this.drag.start = n - this.drag.startX, this.drag.targetEl = s.target || s.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), this.on(i, this.dragType[1], this.e._onDragMove, !1), this.on(i, this.dragType[2], this.e._onDragEnd, !1)
    }, o.prototype.onDragMove = function(t) {
        var i, o, n, r, a, h, l;
        this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, o = "touchmove" == i.type, n = o ? i.targetTouches[0].pageX : i.pageX || i.clientX, r = o ? i.targetTouches[0].pageY : i.pageY || i.clientY, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this.num.oItems) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this.num.oItems)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), h = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), l = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + l), h + l)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, o.prototype.onDragEnd = function() {
        var t, e, s;
        if (this.state.isTouch) {
            if ("mousedown" === this.dragType[0] && this.dom.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0)
                return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), t = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || t > 300) && this.removeClick(this.drag.targetEl), s = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(s), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(s) || this.transitionEnd(), this.drag.distance = 0, this.off(i, this.dragType[1], this.e._onDragMove), this.off(i, this.dragType[2], this.e._onDragEnd)
        }
    }, o.prototype.removeClick = function(i) {
        this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
            t(i).off("click.preventClick")
        }, 300)
    }, o.prototype.preventClick = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
    }, o.prototype.getTransformProperty = function() {
        var t, i;
        return t = e.getComputedStyle(this.dom.stage, null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
    }, o.prototype.closest = function(e) {
        var i = 0, s = 30;
        return this.settings.freeDrag || t.each(this.coordinates(), t.proxy(function(t, o) {
            e > o - s && o + s > e ? i = t : this.op(e, "<", o) && this.op(e, ">", this.coordinates(t + 1) || o - this.width.el) && (i = "left" === this.state.direction ? t + 1 : t)
        }, this)), this.settings.loop || (this.op(e, ">", this.coordinates(this.minimum())) ? i = e = this.minimum() : this.op(e, "<", this.coordinates(this.maximum())) && (i = e = this.maximum())), i
    }, o.prototype.animate = function(e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.dom.$stage.css({transform: "translate3d(" + e + "px,0px, 0px)",transition: this.speed() / 1e3 + "s"}) : this.state.isTouch ? this.dom.$stage.css({left: e + "px"}) : this.dom.$stage.animate({left: e}, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, o.prototype.current = function(t) {
        if (t === s)
            return this._current;
        if (0 === this.num.oItems)
            return s;
        if (t = this.normalize(t), this._current === t)
            this.animate(this.coordinates(this._current));
        else {
            var e = this.trigger("change", {property: {name: "position",value: t}});
            e.data !== s && (t = this.normalize(e.data)), this._current = t, this.animate(this.coordinates(this._current)), this.updateActiveItems(), this.trigger("changed", {property: {name: "position",value: this._current}})
        }
        return this._current
    }, o.prototype.reset = function(t) {
        this.suppress(["change", "changed"]), this.speed(0), this.current(t), this.release(["change", "changed"])
    }, o.prototype.normalize = function(t, e) {
        if (t === s || !this.dom.$items)
            return s;
        if (this.settings.loop) {
            var i = this.dom.$items.length;
            t = (t % i + i) % i
        } else
            t = Math.max(this.minimum(), Math.min(this.maximum(), t));
        return e ? this.dom.$items.eq(t).data("owl-item").index : t
    }, o.prototype.maximum = function() {
        var e, i, s = this.settings;
        if (!s.loop && s.center)
            e = this.num.oItems - 1;
        else if (s.loop || s.center)
            if (s.loop || s.center)
                e = this.num.oItems + s.items;
            else {
                if (!s.autoWidth && !s.merge)
                    throw "Can not detect maximum absolute position.";
                revert = s.rtl ? 1 : -1, i = this.dom.$stage.width() - this.$el.width(), t.each(this.coordinates(), function(t, s) {
                    return s * revert >= i ? !1 : void (e = t + 1)
                })
            }
        else
            e = this.num.oItems - s.items;
        return e
    }, o.prototype.minimum = function() {
        return this.dom.$oItems.eq(0).data("owl-item").indexAbs
    }, o.prototype.speed = function(t) {
        return t !== s && (this._speed = t), this._speed
    }, o.prototype.coordinates = function(t) {
        return t !== s ? this._coordinates[t] : this._coordinates
    }, o.prototype.duration = function(t, e, i) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, o.prototype.to = function(i, s) {
        if (this.settings.loop) {
            var o = i - this.normalize(this.current(), !0), n = this.current(), r = this.current(), a = this.current() + o, h = 0 > r - a ? !0 : !1;
            a < this.settings.items && h === !1 ? (n = this.num.items - (this.settings.items - r) - this.settings.items, this.reset(n)) : a >= this.num.items - this.settings.items && h === !0 && (n = r - this.num.oItems, this.reset(n)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                this.speed(this.duration(this.current(), n + o, s)), this.current(n + o)
            }, this), 30)
        } else
            this.speed(this.duration(this.current(), i, s)), this.current(i)
    }, o.prototype.next = function(t) {
        t = t || !1, this.to(this.normalize(this.current(), !0) + 1, t)
    }, o.prototype.prev = function(t) {
        t = t || !1, this.to(this.normalize(this.current(), !0) - 1, t)
    }, o.prototype.transitionEnd = function(t) {
        if (t !== s) {
            t.stopPropagation();
            var e = t.target || t.srcElement || t.originalTarget;
            if (e !== this.dom.stage)
                return !1
        }
        this.state.inMotion = !1, this.trigger("translated")
    }, o.prototype.isElWidthChanged = function() {
            var t = this.dom.$el.width() - this.settings.stagePadding, e = this.width.el + this.settings.margin;
            return t !== e
    }, o.prototype.viewport = function() {
        var s;
        if (this.options.responsiveBaseElement !== e)
            s = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth)
            s = e.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth)
                throw "Can not detect viewport width.";
            s = i.documentElement.clientWidth
        }
        return s
    }, o.prototype.insertContent = function(t) {
        this.dom.$stage.empty(), this.fetchContent(t), this.refresh()
    }, o.prototype.addItem = function(t, e) {
        var i = this.createItemContainer();
        e = e || 0, this.initializeItemContainer(i, t), 0 === this.dom.$oItems.length ? this.dom.$stage.append(i) : -1 !== m ? this.dom.$oItems.eq(e).before(i) : this.dom.$oItems.eq(e).after(i), this.refresh()
    }, o.prototype.removeItem = function(t) {
        this.dom.$oItems.eq(t).remove(), this.refresh()
    }, o.prototype.addTriggerableEvents = function() {
        var e = t.proxy(function(e, i) {
            return t.proxy(function(t) {
                t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
            }, this)
        }, this);
        t.each({next: this.next,prev: this.prev,to: this.to,destroy: this.destroy,refresh: this.refresh,replace: this.insertContent,add: this.addItem,remove: this.removeItem}, t.proxy(function(t, i) {
            this.dom.$el.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
        }, this))
    }, o.prototype.watchVisibility = function() {
        function i(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }
        function s() {
            i(this.dom.el) && (this.dom.$el.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }
        i(this.dom.el) || (this.dom.$el.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(s, this), 500))
    }, o.prototype.preloadAutoWidthImages = function(e) {
        var i, s, o, n;
        i = 0, s = this, e.each(function(r, a) {
            o = t(a), n = new Image, n.onload = function() {
                i++, o.attr("src", n.src), o.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.init())
            }, n.src = o.attr("src") || o.attr("data-src") || o.attr("data-src-retina")
        })
    }, o.prototype.destroy = function() {
        this.dom.$el.hasClass(this.settings.themeClass) && this.dom.$el.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && this.off(e, "resize", this.e._resizer), this.transitionEndVendor && this.off(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd);
        for (var t in this.plugins)
            this.plugins[t].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.off(this.dom.stage, this.dragType[0], this.e._onDragStart), this.settings.mouseDrag && this.off(i, this.dragType[3], this.e._onDragStart), this.settings.mouseDrag && (this.dom.$stage.off("dragstart", function() {
            return !1
        }), this.dom.stage.onselectstart = function() {
        })), this.dom.$el.off(".owl"), null !== this.dom.$cItems && this.dom.$cItems.remove(), this.e = null, this.dom.$el.data("owlCarousel", null), delete this.dom.el.owlCarousel, this.dom.$stage.unwrap(), this.dom.$items.unwrap(), this.dom.$items.contents().unwrap(), this.dom = null
    }, o.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? t > i : i > t;
            case ">":
                return s ? i > t : t > i;
            case ">=":
                return s ? i >= t : t >= i;
            case "<=":
                return s ? t >= i : i >= t
        }
    }, o.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, o.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, o.prototype.trigger = function(e, i, s) {
        var o = {item: {count: this.num.oItems,index: this.current()}}, n = t.camelCase(t.grep(["on", e, s], function(t) {
            return t
        }).join("-").toLowerCase()), r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, o, i));
        return this._supress[r.type] || (t.each(this.plugins, function(t, e) {
            e.onTrigger && e.onTrigger(r)
        }), this.dom.$el.trigger(r), "function" == typeof this.settings[n] && this.settings[n].apply(this, r)), r
    }, o.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, o.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, o.prototype.browserSupport = function() {
        if (this.support3d = h(), this.support3d) {
            this.transformVendor = a();
            var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = t[r()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function(e) {
        return this.each(function() {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new o(this, e))
        })
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document), function(t, e, i, s) {
    LazyLoad = function(e) {
        this.owl = e, this.owl.options = t.extend({}, LazyLoad.Defaults, this.owl.options), this.handlers = {"changed.owl.carousel": t.proxy(function(t) {
                "items" == t.property.name && t.property.value && !t.property.value.is(":empty") && this.check()
            }, this)}, this.owl.dom.$el.on(this.handlers)
    }, LazyLoad.Defaults = {lazyLoad: !1}, LazyLoad.prototype.check = function() {
        var t, i, s, o, n = e.devicePixelRatio > 1 ? "data-src-retina" : "data-src";
        for (s = 0; s < this.owl.num.items; s++)
            o = this.owl.dom.$items.eq(s), o.data("owl-item").current === !0 && o.data("owl-item").loaded === !1 && (i = o.find(".owl-lazy"), t = i.attr(n), t = t || i.attr("data-src"), t && (i.css("opacity", "0"), this.preload(i, o)))
    }, LazyLoad.prototype.preload = function(i, s) {
        var o, n, r;
        i.each(t.proxy(function(i, a) {
            this.owl.trigger("load", null, "lazy"), o = t(a), n = new Image, r = o.attr(e.devicePixelRatio > 1 ? "data-src-retina" : "data-src"), r = r || o.attr("data-src"), n.onload = t.proxy(function() {
                s.data("owl-item").loaded = !0, o.is("img") ? o.attr("src", n.src) : o.css("background-image", "url(" + n.src + ")"), o.css("opacity", 1), this.owl.trigger("loaded", null, "lazy")
            }, this), n.src = r
        }, this))
    }, LazyLoad.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this.owl.dom.$el.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.lazyLoad = LazyLoad
}(window.Zepto || window.jQuery, window, document), function(t, e, i, s) {
    AutoHeight = function(e) {
        this.owl = e, this.owl.options = t.extend({}, AutoHeight.Defaults, this.owl.options), this.handlers = {"changed.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && this.owl.settings.autoHeight && this.setHeight()
            }, this)}, this.owl.dom.$el.on(this.handlers)
    }, AutoHeight.Defaults = {autoHeight: !1,autoHeightClass: "owl-height"}, AutoHeight.prototype.setHeight = function() {
        var t, i = this.owl.dom.$items.eq(this.owl.current()), s = this.owl.dom.$oStage, o = 0;
        this.owl.dom.$oStage.hasClass(this.owl.settings.autoHeightClass) || this.owl.dom.$oStage.addClass(this.owl.settings.autoHeightClass), t = e.setInterval(function() {
            o += 1, i.data("owl-item").loaded ? (s.height(i.height() + "px"), clearInterval(t)) : 500 === o && clearInterval(t)
        }, 100)
    }, AutoHeight.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this.owl.dom.$el.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoHeight = AutoHeight
}(window.Zepto || window.jQuery, window, document), function(t, e, i, s) {
    Video = function(e) {
        this.owl = e, this.owl.options = t.extend({}, Video.Defaults, this.owl.options), this.handlers = {"resize.owl.carousel": t.proxy(function(t) {
                this.owl.settings.video && !this.isInFullScreen() && t.preventDefault()
            }, this),"refresh.owl.carousel changed.owl.carousel": t.proxy(function(t) {
                this.owl.state.videoPlay && this.stopVideo()
            }, this),"refresh.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                return this.owl.settings.video ? void (this.refreshing = "refresh" == t.type) : !1
            }, this),"changed.owl.carousel": t.proxy(function(t) {
                this.refreshing && "items" == t.property.name && t.property.value && !t.property.value.is(":empty") && this.checkVideoLinks()
            }, this)}, this.owl.dom.$el.on(this.handlers), this.owl.dom.$el.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.playVideo(t)
        }, this))
    }, Video.Defaults = {video: !1,videoHeight: !1,videoWidth: !1}, Video.prototype.checkVideoLinks = function() {
        var t, e, i;
        for (i = 0; i < this.owl.num.items; i++)
            e = this.owl.dom.$items.eq(i), e.data("owl-item").hasVideo || (t = e.find(".owl-video"), t.length && (this.owl.state.hasVideos = !0, this.owl.dom.$items.eq(i).data("owl-item").hasVideo = !0, t.css("display", "none"), this.getVideoInfo(t, e)))
    }, Video.prototype.getVideoInfo = function(t, e) {
        var i, s, o, n, r = t.data("vimeo-id"), a = t.data("youtube-id"), h = t.data("width") || this.owl.settings.videoWidth, l = t.data("height") || this.owl.settings.videoHeight, d = t.attr("href");
        if (r)
            s = "vimeo", o = r;
        else if (a)
            s = "youtube", o = a;
        else {
            if (!d)
                throw new Error("Missing video link.");
            o = d.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), 
            o[3].indexOf("youtu") > -1 ? s = "youtube" : o[3].indexOf("vimeo") > -1 && (s = "vimeo"), o = o[6]
        }
        e.data("owl-item").videoType = s, e.data("owl-item").videoId = o, e.data("owl-item").videoWidth = h, e.data("owl-item").videoHeight = l, i = {type: s,id: o}, n = h && l ? 'style="width:' + h + "px;height:" + l + 'px;"' : "", t.wrap('<div class="owl-video-wrapper"' + n + "></div>"), this.createVideoTn(t, i)
    }, Video.prototype.createVideoTn = function(e, i) {
        function s(t) {
            n = '<div class="owl-video-play-icon"></div>', o = d.settings.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + h + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(o), e.after(n)
        }
        var o, n, r, a = e.find("img"), h = "src", l = "", d = this.owl;
        return this.owl.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length ? (s(a.attr(h)), a.remove(), !1) : void ("youtube" === i.type ? (r = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", s(r)) : "vimeo" === i.type && t.ajax({type: "GET",url: "http://vimeo.com/api/v2/video/" + i.id + ".json",jsonp: "callback",dataType: "jsonp",success: function(t) {
                r = t[0].thumbnail_large, s(r), d.settings.loop && d.updateActiveItems()
            }}))
    }, Video.prototype.stopVideo = function() {
        this.owl.trigger("stop", null, "video");
        var t = this.owl.dom.$items.eq(this.owl.state.videoPlayIndex);
        t.find(".owl-video-frame").remove(), t.removeClass("owl-video-playing"), this.owl.state.videoPlay = !1
    }, Video.prototype.playVideo = function(e) {
        this.owl.trigger("play", null, "video"), this.owl.state.videoPlay && this.stopVideo();
        var i, s, o, n = t(e.target || e.srcElement), r = n.closest("." + this.owl.settings.itemClass);
        o = r.data("owl-item").videoType, id = r.data("owl-item").videoId, width = r.data("owl-item").videoWidth || Math.floor(r.data("owl-item").width - this.owl.settings.margin), height = r.data("owl-item").videoHeight || this.owl.dom.$stage.height(), "youtube" === o ? i = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' + id + "?autoplay=1&v=" + id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o && (i = '<iframe src="http://player.vimeo.com/video/' + id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), r.addClass("owl-video-playing"), this.owl.state.videoPlay = !0, this.owl.state.videoPlayIndex = r.data("owl-item").indexAbs, s = t('<div style="height:' + height + "px; width:" + width + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s)
    }, Video.prototype.isInFullScreen = function() {
        var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return s && t(s.parentNode).hasClass("owl-video-frame") && (this.owl.speed(0), this.owl.state.isFullScreen = !0), s && this.owl.state.isFullScreen && this.owl.state.videoPlay ? !1 : this.owl.state.isFullScreen ? (this.owl.state.isFullScreen = !1, !1) : this.owl.state.videoPlay && this.owl.state.orientation !== e.orientation ? (this.owl.state.orientation = e.orientation, !1) : !0
    }, Video.prototype.destroy = function() {
        var t, e;
        this.owl.dom.$el.off("click.owl.video");
        for (t in this.handlers)
            this.owl.dom.$el.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.video = Video
}(window.Zepto || window.jQuery, window, document), function(t, e, i, s) {
    Animate = function(e) {
        this.core = e, this.core.options = t.extend({}, Animate.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {"change.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                this.swapping = "translated" == t.type
            }, this),"translate.owl.carousel": t.proxy(function(t) {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)}, this.core.dom.$el.on(this.handlers)
    }, Animate.Defaults = {animateOut: !1,animateIn: !1}, Animate.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this), s = this.core.dom.$items.eq(this.previous), o = this.core.dom.$items.eq(this.next), n = this.core.settings.animateIn, r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({left: e + "px"}).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), n && o.addClass("animated owl-animated-in").addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
    }, Animate.prototype.clear = function(e) {
        t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, Animate.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this.core.dom.$el.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = Animate
}(window.Zepto || window.jQuery, window, document), function(t, e, i, s) {
    Autoplay = function(e) {
        this.core = e, this.core.options = t.extend({}, Autoplay.Defaults, this.core.options), this.handlers = {"translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                this.autoplay()
            }, this),"play.owl.autoplay": t.proxy(function(t, e, i) {
                this.play(e, i)
            }, this),"stop.owl.autoplay": t.proxy(function() {
                this.stop()
            }, this),"mouseover.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),"mouseleave.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)}, this.core.dom.$el.on(this.handlers)
    }, Autoplay.Defaults = {autoplay: !1,autoplayTimeout: 5e3,autoplayHoverPause: !1,autoplaySpeed: !1}, Autoplay.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, Autoplay.prototype.play = function(t, s) {
        return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, Autoplay.prototype.stop = function() {
        e.clearInterval(this.interval)
    }, Autoplay.prototype.pause = function() {
        e.clearInterval(this.interval)
    }, Autoplay.prototype.destroy = function() {
        var t, i;
        e.clearInterval(this.interval);
        for (t in this.handlers)
            this.core.dom.$el.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay
}(window.Zepto || window.jQuery, window, document), function(t, e, i, s) {
    "use strict";
    var o = function(e) {
        this.core = e, this.initialized = !1, this.pages = [], this.controls = {}, this.template = null, this.$element = this.core.dom.$el, this.overrides = {next: this.core.next,prev: this.core.prev,to: this.core.to}, this.handlers = {"changed.owl.carousel": t.proxy(function(e) {
                "items" == e.property.name && (this.initialized || (this.initialize(), this.initialized = !0), this.update(), this.draw()), this.filling && (e.property.value.data("owl-item").dot = t(":first-child", e.property.value).find("[data-dot]").andSelf().data("dot"))
            }, this),"change.owl.carousel": t.proxy(function(t) {
                if ("position" == t.property.name && !this.core.state.revert && !this.core.settings.loop && this.core.settings.navRewind) {
                    var e = this.core.current(), i = this.core.maximum(), s = this.core.minimum();
                    t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
                }
                this.filling = this.core.settings.dotsData && "item" == t.property.name && t.property.value && t.property.value.is(":empty")
            }, this),"refreshed.owl.carousel": t.proxy(function() {
                this.initialized && (this.update(), this.draw())
            }, this)}, this.core.options = t.extend({}, o.Defaults, this.core.options), this.$element.on(this.handlers)
    };
    o.Defaults = {nav: !1,navRewind: !0,navText: ["prev", "next"],navSpeed: !1,navElement: "div",navContainer: !1,navContainerClass: "owl-nav",navClass: ["owl-prev", "owl-next"],slideBy: 1,dotClass: "owl-dot",dotsClass: "owl-dots",dots: !0,dotsEach: !1,dotData: !1,dotsSpeed: !1,dotsContainer: !1,controlsClass: "owl-controls"}, o.prototype.initialize = function() {
        var e, i, s = this.core.settings;
        s.dotsData || (this.template = t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")), s.navContainer && s.dotsContainer || (this.controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this.controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this.controls.$container), this.controls.$indicators.on(this.core.dragType[2], "div", t.proxy(function(e) {
            var i = t(e.target).parent().is(this.controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, s.dotsSpeed)
        }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this.controls.$container), this.controls.$next = t("<" + s.navElement + ">"), this.controls.$previous = this.controls.$next.clone(), this.controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on(this.core.dragType[2], t.proxy(function(t) {
            this.prev()
        }, this)), this.controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on(this.core.dragType[2], t.proxy(function(t) {
            this.next()
        }, this));
        for (i in this.overrides)
            this.core[i] = t.proxy(this[i], this)
    }, o.prototype.destroy = function() {
        var t, e, i, s;
        for (t in this.handlers)
            this.$element.off(t, this.handlers[t]);
        for (e in this.controls)
            this.controls[e].remove();
        for (s in this.overides)
            this.core[s] = this.overrides[s];
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }, o.prototype.update = function() {
        var t, e, i, s = this.core.settings, o = this.core.num.cItems / 2, n = this.core.num.items - o, r = s.center || s.autoWidth || s.dotData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots)
            for (this.pages = [], t = o, e = 0, i = 0; n > t; t++)
                (e >= r || 0 === e) && (this.pages.push({start: t - o,end: t - o + r - 1}), e = 0, ++i), e += this.core.num.merged[t]
    }, o.prototype.draw = function() {
        var e, i, s = "", o = this.core.settings, n = this.core.dom.$oItems, r = this.core.normalize(this.core.current(), !0);
        if (!o.nav || o.loop || o.navRewind || (this.controls.$previous.toggleClass("disabled", 0 >= r), this.controls.$next.toggleClass("disabled", r >= this.core.maximum())), this.controls.$previous.toggle(o.nav), this.controls.$next.toggle(o.nav), o.dots) {
            if (e = this.pages.length - this.controls.$indicators.children().length, e > 0) {
                for (i = 0; i < Math.abs(e); i++)
                    s += o.dotData ? n.eq(i).data("owl-item").dot : this.template;
                this.controls.$indicators.append(s)
            } else
                0 > e && this.controls.$indicators.children().slice(e).remove();
            this.controls.$indicators.find(".active").removeClass("active"), this.controls.$indicators.children().eq(t.inArray(this.current(), this.pages)).addClass("active")
        }
        this.controls.$indicators.toggle(o.dots)
    }, o.prototype.onTrigger = function(e) {
        var i = this.core.settings;
        e.page = {index: t.inArray(this.current(), this.pages),count: this.pages.length,size: i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items}
    }, o.prototype.current = function() {
        var e = this.core.normalize(this.core.current(), !0);
        return t.grep(this.pages, function(t) {
            return t.start <= e && t.end >= e
        }).pop()
    }, o.prototype.getPosition = function(e) {
        var i, s, o = this.core.settings;
        return "page" == o.slideBy ? (i = t.inArray(this.current(), this.pages), s = this.pages.length, e ? ++i : --i, i = this.pages[(i % s + s) % s].start) : (i = this.core.normalize(this.core.current(), !0), s = this.core.num.oItems, e ? i += o.slideBy : i -= o.slideBy), i
    }, o.prototype.next = function(e) {
        t.proxy(this.overrides.to, this.core)(this.getPosition(!0), e)
    }, o.prototype.prev = function(e) {
        t.proxy(this.overrides.to, this.core)(this.getPosition(!1), e)
    }, o.prototype.to = function(e, i, s) {
        var o;
        s ? t.proxy(this.overrides.to, this.core)(e, i) : (o = this.pages.length, t.proxy(this.overrides.to, this.core)(this.pages[(e % o + o) % o].start, i))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
}(window.Zepto || window.jQuery, window, document), function(t, e, i, s) {
    "use strict";
    var o = function(i) {
        this.core = i, this.hashes = {}, this.$element = this.core.dom.$el, this.handlers = {"initialized.owl.carousel": t.proxy(function() {
                e.location.hash.substring(1) && t(e).trigger("hashchange.owl.navigation")
            }, this),"changed.owl.carousel": t.proxy(function(e) {
                this.filling && (e.property.value.data("owl-item").hash = t(":first-child", e.property.value).find("[data-hash]").andSelf().data("hash"), this.hashes[e.property.value.data("owl-item").hash] = e.property.value)
            }, this),"change.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && this.core.current() === s && "URLHash" == this.core.settings.startPosition && (t.data = this.hashes[e.location.hash.substring(1)]), this.filling = "item" == t.property.name && t.property.value && t.property.value.is(":empty")
            }, this)}, this.core.options = t.extend({}, o.Defaults, this.core.options), this.$element.on(this.handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
            var t = e.location.hash.substring(1), i = this.core.dom.$oItems, s = this.hashes[t] && i.index(this.hashes[t]) || 0;
            return t ? (this.core.dom.oStage.scrollLeft = 0, void this.core.to(s, !1, !0)) : !1
        }, this))
    };
    o.Defaults = {URLhashListener: !1}, o.prototype.destroy = function() {
        var i, s;
        t(e).off("hashchange.owl.navigation");
        for (i in this.handlers)
            //this.owl.dom.$el.off(i, this.handlers[i]);
        for (s in Object.getOwnPropertyNames(this))
            "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
}(window.Zepto || window.jQuery, window, document), function(t) {
    var e = -1, i = -1, s = function(t) {
        return parseFloat(t) || 0
    }, o = function(e) {
        var i = 1, o = t(e), n = null, r = [];
        return o.each(function() {
            var e = t(this), o = e.offset().top - s(e.css("margin-top")), a = r.length > 0 ? r[r.length - 1] : null;
            null === a ? r.push(e) : Math.floor(Math.abs(n - o)) <= i ? r[r.length - 1] = a.add(e) : r.push(e), n = o
        }), r
    }, n = function(e) {
        var i = {byRow: !0,property: "height",target: null,remove: !1};
        return "object" == typeof e ? t.extend(i, e) : ("boolean" == typeof e ? i.byRow = e : "remove" === e && (i.remove = !0), i)
    }, r = t.fn.matchHeight = function(e) {
        var i = n(e);
        if (i.remove) {
            var s = this;
            return this.css(i.property, ""), t.each(r._groups, function(t, e) {
                e.elements = e.elements.not(s)
            }), this
        }
        return this.length <= 1 && !i.target ? this : (r._groups.push({elements: this,options: i}), r._apply(this, i), this)
    };
    r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._apply = function(e, i) {
        var a = n(i), h = t(e), l = [h], d = t(window).scrollTop(), c = t("html").outerHeight(!0), p = h.parents().filter(":hidden");
        return p.each(function() {
            var e = t(this);
            e.data("style-cache", e.attr("style"))
        }), p.css("display", "block"), a.byRow && !a.target && (h.each(function() {
            var e = t(this), i = "inline-block" === e.css("display") ? "inline-block" : "block";
            e.data("style-cache", e.attr("style")), e.css({display: i,"padding-top": "0","padding-bottom": "0","margin-top": "0","margin-bottom": "0","border-top-width": "0","border-bottom-width": "0",height: "100px"})
        }), l = o(h), h.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "")
        })), t.each(l, function(e, i) {
            var o = t(i), n = 0;
            if (a.target)
                n = a.target.outerHeight(!1);
            else {
                if (a.byRow && o.length <= 1)
                    return void o.css(a.property, "");
                o.each(function() {
                    var e = t(this), i = "inline-block" === e.css("display") ? "inline-block" : "block", s = {display: i};
                    s[a.property] = "", e.css(s), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), e.css("display", "")
                })
            }
            o.each(function() {
                var e = t(this), i = 0;
                a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (i += s(e.css("border-top-width")) + s(e.css("border-bottom-width")), i += s(e.css("padding-top")) + s(e.css("padding-bottom"))), e.css(a.property, n - i))
            })
        }), p.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null)
        }), r._maintainScroll && t(window).scrollTop(d / c * t("html").outerHeight(!0)), this
    }, r._applyDataApi = function() {
        var e = {};
        t("[data-match-height], [data-mh]").each(function() {
            var i = t(this), s = i.attr("data-mh") || i.attr("data-match-height");
            e[s] = s in e ? e[s].add(i) : i
        }), t.each(e, function() {
            this.matchHeight(!0)
        })
    };
    var a = function(e) {
        r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() {
            r._apply(this.elements, this.options)
        }), r._afterUpdate && r._afterUpdate(e, r._groups)
    };
    r._update = function(s, o) {
        if (o && "resize" === o.type) {
            var n = t(window).width();
            if (n === e)
                return;
            e = n
        }
        s ? -1 === i && (i = setTimeout(function() {
            a(o), i = -1
        }, r._throttle)) : a(o)
    }, t(r._applyDataApi), t(window).bind("load", function(t) {
        r._update(!1, t)
    }), t(window).bind("resize orientationchange", function(t) {
        r._update(!0, t)
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.affix"), n = "object" == typeof e && e;
            o || s.data("bs.affix", o = new i(this, n)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, s) {
        this.options = t.extend({}, i.DEFAULTS, s), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.2.0", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {offset: 0,target: window}, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = t(document).height(), s = this.$target.scrollTop(), o = this.$element.offset(), n = this.options.offset, r = n.top, a = n.bottom;
            "object" != typeof n && (a = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof a && (a = n.bottom(this.$element));
            var h = null != this.unpin && s + this.unpin <= o.top ? !1 : null != a && o.top + this.$element.height() >= e - a ? "bottom" : null != r && r >= s ? "top" : !1;
            if (this.affixed !== h) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (h ? "-" + h : ""), d = t.Event(l + ".bs.affix");
                this.$element.trigger(d), d.isDefaultPrevented() || (this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(t.Event(l.replace("affix", "affixed"))), "bottom" == h && this.$element.offset({top: e - this.$element.height() - a}))
            }
        }
    };
    var s = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = s, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this), s = i.data();
            s.offset = s.offset || {}, s.offsetBottom && (s.offset.bottom = s.offsetBottom), s.offsetTop && (s.offset.top = s.offsetTop), e.call(i, s)
        })
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this), o = i.data("bs.alert");
            o || i.data("bs.alert", o = new s(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]', s = function(e) {
        t(e).on("click", i, this.close)
    };
    s.VERSION = "3.2.0", s.prototype.close = function(e) {
        function i() {
            n.detach().trigger("closed.bs.alert").remove()
        }
        var s = t(this), o = s.attr("data-target");
        o || (o = s.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var n = t(o);
        e && e.preventDefault(), n.length || (n = s.hasClass("alert") ? s : s.parent()), n.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = s, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", i, s.prototype.close)
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.button"), n = "object" == typeof e && e;
            o || s.data("bs.button", o = new i(this, n)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var i = function(e, s) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, s), this.isLoading = !1
    };
    i.VERSION = "3.2.0", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function(e) {
        var i = "disabled", s = this.$element, o = s.is("input") ? "val" : "html", n = s.data();
        e += "Text", null == n.resetText && s.data("resetText", s[o]()), s[o](null == n[e] ? this.options[e] : n[e]), setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0, s.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, s.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var s = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = s, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var s = t(i.target);
        s.hasClass("btn") || (s = s.closest(".btn")), e.call(s, "toggle"), i.preventDefault()
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.carousel"), n = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e), r = "string" == typeof e ? e : n.slide;
            o || s.data("bs.carousel", o = new i(this, n)), "number" == typeof e ? o.to(e) : r ? o[r]() : n.interval && o.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.2.0", i.DEFAULTS = {interval: 5e3,pause: "hover",wrap: !0}, i.prototype.keydown = function(t) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.to = function(e) {
        var i = this, s = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(e)
        }) : s == e ? this.pause().cycle() : this.slide(e > s ? "next" : "prev", t(this.$items[e]))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, i) {
        var s = this.$element.find(".item.active"), o = i || s[e](), n = this.interval, r = "next" == e ? "left" : "right", a = "next" == e ? "first" : "last", h = this;
        if (!o.length) {
            if (!this.options.wrap)
                return;
            o = this.$element.find(".item")[a]()
        }
        if (o.hasClass("active"))
            return this.sliding = !1;
        var l = o[0], d = t.Event("slide.bs.carousel", {relatedTarget: l,direction: r});
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, n && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(o)]);
                c && c.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {relatedTarget: l,direction: r});
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, s.addClass(r), o.addClass(r), s.one("bsTransitionEnd", function() {
                o.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), h.sliding = !1, setTimeout(function() {
                    h.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(1e3 * s.css("transition-duration").slice(0, -1))) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), n && this.cycle(), this
        }
    };
    var s = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = s, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(i) {
        var s, o = t(this), n = t(o.attr("data-target") || (s = o.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var r = t.extend({}, n.data(), o.data()), a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(n, r), a && n.data("bs.carousel").to(a), i.preventDefault()
        }
    }), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.collapse"), n = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
            !o && n.toggle && "show" == e && (e = !e), o || s.data("bs.collapse", o = new i(this, n)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, s) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, s), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.2.0", i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var i = t.Event("show.bs.collapse");
            if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                var s = this.$parent && this.$parent.find("> .panel > .in");
                if (s && s.length) {
                    var o = s.data("bs.collapse");
                    if (o && o.transitioning)
                        return;
                    e.call(s, "hide"), o || s.data("bs.collapse", null)
                }
                var n = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[n](0), this.transitioning = 1;
                var r = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[n](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition)
                    return r.call(this);
                var a = t.camelCase(["scroll", n].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(350)[n](this.$element[0][a])
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var s = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(350) : s.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var s = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = s, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var s, o = t(this), n = o.attr("data-target") || i.preventDefault() || (s = o.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""), r = t(n), a = r.data("bs.collapse"), h = a ? "toggle" : o.data(), l = o.attr("data-parent"), d = l && t(l);
        a && a.transitioning || (d && d.find('[data-toggle="collapse"][data-parent="' + l + '"]').not(o).addClass("collapsed"), o[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(r, h)
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        e && 3 === e.which || (t(o).remove(), t(n).each(function() {
            var s = i(t(this)), o = {relatedTarget: this};
            s.hasClass("open") && (s.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || s.removeClass("open").trigger("hidden.bs.dropdown", o))
        }))
    }
    function i(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var s = i && t(i);
        return s && s.length ? s : e.parent()
    }
    function s(e) {
        return this.each(function() {
            var i = t(this), s = i.data("bs.dropdown");
            s || i.data("bs.dropdown", s = new r(this)), "string" == typeof e && s[e].call(i)
        })
    }
    var o = ".dropdown-backdrop", n = '[data-toggle="dropdown"]', r = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    r.VERSION = "3.2.0", r.prototype.toggle = function(s) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var n = i(o), r = n.hasClass("open");
            if (e(), !r) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {relatedTarget: this};
                if (n.trigger(s = t.Event("show.bs.dropdown", a)), s.isDefaultPrevented())
                    return;
                o.trigger("focus"), n.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, r.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var s = t(this);
            if (e.preventDefault(), e.stopPropagation(), !s.is(".disabled, :disabled")) {
                var o = i(s), r = o.hasClass("open");
                if (!r || r && 27 == e.keyCode)
                    return 27 == e.which && o.find(n).trigger("focus"), s.trigger("click");
                var a = " li:not(.divider):visible a", h = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (h.length) {
                    var l = h.index(h.filter(":focus"));
                    38 == e.keyCode && l > 0 && l--, 40 == e.keyCode && l < h.length - 1 && l++, ~l || (l = 0), h.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = s, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", n, r.prototype.toggle).on("keydown.bs.dropdown.data-api", n + ', [role="menu"], [role="listbox"]', r.prototype.keydown)
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.tab");
            o || s.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.2.0", i.prototype.show = function() {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), s = e.data("target");
        if (s || (s = e.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a")[0], n = t.Event("show.bs.tab", {relatedTarget: o});
            if (e.trigger(n), !n.isDefaultPrevented()) {
                var r = t(s);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                    e.trigger({type: "shown.bs.tab",relatedTarget: o})
                })
            }
        }
    }, i.prototype.activate = function(e, i, s) {
        function o() {
            n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), s && s()
        }
        var n = i.find("> .active"), r = s && t.support.transition && n.hasClass("fade");
        r ? n.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), n.removeClass("in")
    };
    var s = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = s, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(i) {
        i.preventDefault(), e.call(t(this), "show")
    })
}(jQuery), +function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {WebkitTransition: "webkitTransitionEnd",MozTransition: "transitionend",OTransition: "oTransitionEnd otransitionend",transition: "transitionend"};
        for (var i in e)
            if (void 0 !== t.style[i])
                return {end: e[i]};
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1, s = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var o = function() {
            i || t(s).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {bindType: t.support.transition.end,delegateType: t.support.transition.end,handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }})
    })
}(jQuery), +function(t) {
    "use strict";
    function e(i, s) {
        var o = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, s), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
    }
    function i(i) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.scrollspy"), n = "object" == typeof i && i;
            o || s.data("bs.scrollspy", o = new e(this, n)), "string" == typeof i && o[i]()
        })
    }
    e.VERSION = "3.2.0", 
    e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = "offset", i = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var s = this;
        this.$body.find(this.selector).map(function() {
            var s = t(this), o = s.data("target") || s.attr("href"), n = /^#./.test(o) && t(o);
            return n && n.length && n.is(":visible") && [[n[e]().top + i, o]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            s.offsets.push(this[0]), s.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), s = this.options.offset + i - this.$scrollElement.height(), o = this.offsets, n = this.targets, r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= s)
            return r != (t = n[n.length - 1]) && this.activate(t);
        if (r && e <= o[0])
            return r != (t = n[0]) && this.activate(t);
        for (t = o.length; t--; )
            r != n[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(n[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', s = t(i).parents("li").addClass("active");
        s.parent(".dropdown-menu").length && (s = s.closest("li.dropdown").addClass("active")), s.trigger("activate.bs.scrollspy")
    };
    var s = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = s, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e, s) {
        return this.each(function() {
            var o = t(this), n = o.data("bs.modal"), r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            n || o.data("bs.modal", n = new i(this, r)), "string" == typeof e ? n[e](s) : r.show && n.show(s)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.2.0", i.DEFAULTS = {backdrop: !0,keyboard: !0,show: !0}, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var i = this, s = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var s = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), s && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var o = t.Event("shown.bs.modal", {relatedTarget: e});
            s ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(300) : i.$element.trigger("focus").trigger(o)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var i = this, s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && s;
            if (this.$backdrop = t('<div class="modal-backdrop ' + s + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
                return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var n = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n()
        } else
            e && e()
    }, i.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var s = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = s, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var s = t(this), o = s.attr("href"), n = t(s.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")), r = n.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, n.data(), s.data());
        s.is("a") && i.preventDefault(), n.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                s.is(":visible") && s.trigger("focus")
            })
        }), e.call(n, r, this)
    })
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.tooltip"), n = "object" == typeof e && e;
            (o || "destroy" != e) && (o || s.data("bs.tooltip", o = new i(this, n)), "string" == typeof e && o[e]())
        })
    }
    var i = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.2.0", i.DEFAULTS = {animation: !0,placement: "top",selector: !1,template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger: "hover focus",title: "",delay: 0,html: !1,container: !1,viewport: {selector: "body",padding: 0}}, i.prototype.init = function(e, i, s) {
        this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(s), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var o = this.options.trigger.split(" "), n = o.length; n--; ) {
            var r = o[n];
            if ("click" == r)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin", h = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(h + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {trigger: "manual",selector: ""}) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {show: e.delay,hide: e.delay}), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function(t, s) {
            i[t] != s && (e[t] = s)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show()
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)
                return;
            var s = this, o = this.tip(), n = this.getUID(this.type);
            this.setContent(), o.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && o.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement, a = /\s?auto?\s?/i, h = a.test(r);
            h && (r = r.replace(a, "") || "top"), o.detach().css({top: 0,left: 0,display: "block"}).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var l = this.getPosition(), d = o[0].offsetWidth, c = o[0].offsetHeight;
            if (h) {
                var p = r, u = this.$element.parent(), f = this.getPosition(u);
                r = "bottom" == r && l.top + l.height + c - f.scroll > f.height ? "top" : "top" == r && l.top - f.scroll - c < 0 ? "bottom" : "right" == r && l.right + d > f.width ? "left" : "left" == r && l.left - d < f.left ? "right" : r, o.removeClass(p).addClass(r)
            }
            var m = this.getCalculatedOffset(r, l, d, c);
            this.applyPlacement(m, r);
            var g = function() {
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var s = this.tip(), o = s[0].offsetWidth, n = s[0].offsetHeight, r = parseInt(s.css("margin-top"), 10), a = parseInt(s.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top = e.top + r, e.left = e.left + a, t.offset.setOffset(s[0], t.extend({using: function(t) {
                s.css({top: Math.round(t.top),left: Math.round(t.left)})
            }}, e), 0), s.addClass("in");
        var h = s[0].offsetWidth, l = s[0].offsetHeight;
        "top" == i && l != n && (e.top = e.top + n - l);
        var d = this.getViewportAdjustedDelta(i, e, h, l);
        d.left ? e.left += d.left : e.top += d.top;
        var c = d.left ? 2 * d.left - o + h : 2 * d.top - n + l, p = d.left ? "left" : "top", u = d.left ? "offsetWidth" : "offsetHeight";
        s.offset(e), this.replaceArrow(c, s[0][u], p)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
    }, i.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function() {
        function e() {
            "in" != i.hoverState && s.detach(), i.$element.trigger("hidden.bs." + i.type)
        }
        var i = this, s = this.tip(), o = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0], s = "BODY" == i.tagName;
        return t.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null, {scroll: s ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),width: s ? t(window).width() : e.outerWidth(),height: s ? t(window).height() : e.outerHeight()}, s ? {top: 0,left: 0} : e.offset())
    }, i.prototype.getCalculatedOffset = function(t, e, i, s) {
        return "bottom" == t ? {top: e.top + e.height,left: e.left + e.width / 2 - i / 2} : "top" == t ? {top: e.top - s,left: e.left + e.width / 2 - i / 2} : "left" == t ? {top: e.top + e.height / 2 - s / 2,left: e.left - i} : {top: e.top + e.height / 2 - s / 2,left: e.left + e.width}
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, s) {
        var o = {top: 0,left: 0};
        if (!this.$viewport)
            return o;
        var n = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - n - r.scroll, h = e.top + n - r.scroll + s;
            a < r.top ? o.top = r.top - a : h > r.top + r.height && (o.top = r.top + r.height - h)
        } else {
            var l = e.left - n, d = e.left + n + i;
            l < r.left ? o.left = r.left - l : d > r.width && (o.left = r.left + r.width - d)
        }
        return o
    }, i.prototype.getTitle = function() {
        var t, e = this.$element, i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do
            t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var s = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = s, this
    }
}(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var s = t(this), o = s.data("bs.popover"), n = "object" == typeof e && e;
            (o || "destroy" != e) && (o || s.data("bs.popover", o = new i(this, n)), "string" == typeof e && o[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.2.0", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {placement: "right",trigger: "click",content: "",template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, i.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var s = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = s, this
    }
}(jQuery);
