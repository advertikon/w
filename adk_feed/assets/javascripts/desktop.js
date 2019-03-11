function jCache(n) { var t = selectorCache[n]; return t != null ? t : (t = $(n), selectorCache[n] = t, t) }

function clearjCache() { selectorCache = {} }

function updateLoadedContent(n) { if (Favourite.refreshIcons(n), Note.refreshIcons(n), MasterPages.Phone != null && ApplicationState.IsMobileDevice) { var t = MasterPages.Phone.smoothStateOptions;
	updateLinksToUseSmoothState(n, t) } }

function updateLinksToUseSmoothState(n) { n.find("a").each(function() { $(this).click(function(n) { ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothState.clickAnchor(n) : n }) }) }

function ScrollInputIntoView(n) { n != null && n.is(":visible") && ApplicationState.IsMobileDevice && ApplicationState.IsSafari == !1 && window.scrollTo(0, n[0].offsetTop - $("#header").outerHeight() + 10) }

function updateSmoothStateHeaderValues(n) { var u = $(n).filter("link[rel='alternate']"),
	t, i, r;
	u.length == 1 && $("link[rel='alternate']").attr("href", u.attr("href"));
	t = $(n).filter("meta");
	t.length >= 1 && ($("meta").remove(), $("head").append(t));
	i = $(n).filter("link[rel=alternate]");
	i.length >= 1 && ($("link[rel=alternate]").remove(), $("head").append(i));
	r = $(n).filter("#GTMDataLayerCode");
	r.length == 1 && $("#GTMDataLayerCode").html(r[0].outerHTML) }

function makeStickyBtnBottomPage(n, t) { var i, r;
	ApplicationState.IsSamsungBrowser && (i = $(t), n && t && n[0] && t[0] && n.length > 0 && t.length > 0 && (r = !n.has("#" + t[0].id), r == !1 && ($(t).remove(), $(n).append(i)))) }

function clearStickyButtons() { $("#sticky_buttons").empty() }

function ApplyiOSSelectCutoffTextHack() { var t, n; if (navigator.userAgent.match(/(iPad|iPhone|iPod touch)/i))
	for (t = document.querySelectorAll("select"), n = 0; n < t.length; n++) t[n].appendChild(document.createElement("optgroup")) }

function addAnimationClass(n, t) { n.addClass(t);
	n.one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() { n.removeClass(t) }) }

function dateToString(n) { return ("0" + (n.getMonth() + 1)).slice(-2) + "/" + ("0" + n.getDate()).slice(-2) + "/" + n.getFullYear() }

function dateToString2(n) { return n.getFullYear() + "-" + ("0" + (n.getMonth() + 1)).slice(-2) + "-" + ("0" + n.getDate()).slice(-2) }

function stringToDate(n) { var t = n.split("/"),
	r = t[2],
	u = t[1],
	f = t[0],
	i = new Date(Number(r), Number(f) - 1, Number(u)); return new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()) }

function stringToDate2(n) { n = n.substring(0, 10); var t = n.split("-"),
	r = t[0],
	u = t[2],
	f = t[1],
	i = new Date(Number(r), Number(f) - 1, Number(u)); return new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()) }

function stringToInputDate(n) { try { n = n.substring(0, 10); var t = n.split("-"),
	i = t[0],
	r = t[2],
	u = t[1]; return i + "-" + u + "-" + r } catch (f) { return "" } }

function dateToInputString(n) { var t = (n.getDate() < 10 ? "0" : "") + n.getDate(),
	i = (n.getMonth() + 1 < 10 ? "0" : "") + (n.getMonth() + 1),
	r = n.getFullYear(); return r + "-" + i + "-" + t }

function dateToOutputString(n) { var t = (n.getDate() < 10 ? "0" : "") + n.getDate(),
	i = (n.getMonth() + 1 < 10 ? "0" : "") + (n.getMonth() + 1),
	r = n.getFullYear(); return i + "/" + t + "/" + r }

function favouriteIconClicked(n) { var r = n.attr("data-value"),
	t = r.split("_"),
	u = t[0],
	f = t[1],
	e = t[2],
	i = parseInt(t[3]); return Favourite.AddOrRemove(u, f, e, "", i != null ? i : ApplicationState.CurrentMode, !1) }

function noteIconClicked(n, t) { t === void 0 && (t = !1); var r = n.attr("data-value"),
	i = r.split("_"),
	u = i[0],
	f = i[1],
	e = i[2],
	o = i[3],
	s = n.attr("sharenoteid") || null;
	Note.Edit(u, f, e, o, ApplicationState.CurrentMode, s, t) }

function isScrolledIntoViewPlain(n) { var t = n.getBoundingClientRect().top,
	i = n.getBoundingClientRect().bottom; return t >= 0 && i <= window.innerHeight }

function callOnAnimationStart(n, t) { n.on("animationstart webkitAnimationStart oanimationstart\tMSAnimationStart", function(i) { n[0] == i.target && t() }) }

function callAfterAnimationEnd_NotInDOM(n, t, i) { n.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", t, function(r) { n.find(t)[0] == r.target && i() }) }

function callAfterAnimationEnd(n, t) { n.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function(i) { n[0] == i.target && t() }) }

function callAfterAnimation(n, t) { if ($(n).is(":animated")) n.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(i) { n[0] == i.target && t() });
else t() }

function resetInputControls(n, t, i) { t === void 0 && (t = null);
	i === void 0 && (i = !1);
	n.each(function(n, i) { var r = $(i),
		u = r.find("select[multiple]");
		u.attr("data-reset", "true");
		r.find("input[type=number],input[type=text],input[type=date],input[type=email],textarea").addBack("input[type=number],input[type=text],input[type=date],input[type=email],textarea").not(t).each(function(n, t) { var i = $(t).attr("data-default") || "";
			$(t).val() != i && $(t).val(i) });
		r.addBack().find("select:not([data-default])").not(t).each(function(n, t) { $(t).prop("selectedIndex") != 0 && $(t).prop("selectedIndex", 0).trigger("change") });
		r.addBack().find("select[multiple=multiple] option:selected").addBack("select[multiple = multiple] option:selected").not(t).removeAttr("selected");
		r.addBack().find("input[type=checkbox]").addBack("input[type=checkbox]").not(t).each(function(n, t) { $(t).is(":checked") && $(t).click() });
		r.find("select[data-default]").not(t).each(function(n, t) { var i = $(t).attr("data-default");
			i == "none" ? $(t).change() : $(t).val() != i && $(t).val(i).trigger("change") });
		r.not(t).find("table[data-default]").each(function(n, t) { var i = $(t).attr("data-default");
			$(t).find("input[value=" + i + "]").click() }) }) }

function captchaCallback() { $("#captcha").length > 0 && $("#captcha").html().trim() == "" && grecaptcha.render("captcha", { sitekey: ApplicationConfig.RecaptchaSiteKey }) }

function showLoadingAnimation(n) { n != null && n.length > 0 && (n.show(), ApplicationState.IsMobileDevice ? n.html('<div class="fadeElementIn" style="margin:auto; text-align:center"><img class="spinner" style="width: 25vw; max-width: 150px; margin: 40px auto; display: inline-block; " src="/wp-content/plugins/adk_feed/assets/images/house-gray.svg" /><\/div>') : n.html('<div class="fadeElementIn" style="margin:auto; text-align:center"><div class="sk-spinning-circle" style="text-align:center;margin: 50px auto;"><\/div><\/div>')) }

function contactLinkClicked(n, t) { var i = n.parent().find("." + t + " a");
	i.length > 1 ? $.featherlight(n.parent().find("." + t).html(), { closeIcon: "<img class='dialogCloseX' src='/wp-content/plugins/adk_feed/assets/images/x-gray.svg' alt='' />" }) : i[0].click() }

function setConsistantHeights(n) { $(n).css("height", "auto"); var t = getMaxHeight(n);
	$(n).each(function() { $(this).css("height", t + "px") }) }

function getMaxHeight(n) { return Math.max.apply(null, $(n).map(function() { return $(this).height() }).get()) }

function isScrolledIntoView(n, t) { if (t === void 0 && (t = 0), n != null && n.length > 0) { var i = $(window).scrollTop() + $(window).height() > n.offset().top + t; return $(window).scrollTop() + $(window).height() > n.offset().top + t } return !1 }

function isScrolledPassed(n) { return window.scrollY > n.offsetTop + n.offsetHeight }

function shouldScrollElementIntoView(n, t) { t === void 0 && (t = !1); var i = $(window).scrollTop(),
	r = $(window).scrollTop() + $(window).height(),
	u = n.offset().top,
	f = n.offset().top + n.outerHeight(),
	e = n.outerHeight() <= $(window).height(); return (e || t == !1) && (u < i || f > r) ? !0 : !1 }

function showMessage(n, t, i, r) { var u;
	t === void 0 && (t = MessageType.Normal);
	i === void 0 && (i = DisplayType.Toast);
	r === void 0 && (r = null);
	i == DisplayType.Toast ? (clearTimeout(toastTimeOut), $("#ToastMessage").text(n), $("#ToastMessage").removeClass(MessageType[MessageType.Normal]), $("#ToastMessage").removeClass(MessageType[MessageType.Error]), $("#ToastMessage").addClass(MessageType[t]), $("#ToastMessage").addClass("show"), toastTimeOut = setTimeout(function() { $("#ToastMessage").removeClass("show") }, 3e3)) : ApplicationState.IsMobileDevice ? (u = new ConfirmationDialogModel2("GenericDialog", " ", n, Translation.get("OK"), function(n, t) { t.ForceCloseDialog();
		r != null && r() }), u.ShowCloseButton = !0, showConfirmationDialog2(u)) : (u = new ConfirmationDialogModel2("GenericDialog", " ", n, Translation.get("OK"), function(n, t) { t.ForceCloseDialog();
		r != null && r() }), u.ShowCloseButton = !0, showConfirmationDialog2(u)) }

function expandReadMore(n, t) { $(n).fadeOut();
	$("#" + t).css("height", "auto");
	$("#" + t).css("max-height", "initial");
	$(n).parent().css("display", "none") }

function breakAllLongWords(n) { var u = n.width(),
	r = n.text().replace(/\s{2,}/g, "").split(" "),
	i, t; for (n.text(""), i = 0; i < r.length; i++) t = document.createElement("span"), t.textContent = r[i] + " ", n.append(t), $(t).width() > u && ($(t).css("word-break", "break-all"), $(t).prepend("<br>")) }

function collapseWithReadMore(n, t) { n.length > 0 && (n.height() > t || n[0].offsetHeight < n[0].scrollHeight) && (n.after("<p class='read-more'> <a href='#' onclick='expandReadMore(this,\"" + n.attr("id") + "\"); return false;' class='readMoreLink'> <span class='fa fa-plus-circle'><\/span> " + Translation.get("ReadMore") + "<\/a><\/p>"), n.css("height", t), n.css("overflow", "hidden"), n.css("max-height", "none")) }

function collapseTableWithReadMore(n, t, i, r) { r === void 0 && (r = "text-align: center;");
	$(".read-more-table").remove(); var u = 0,
		f = 0;
	t.find("tr").each(function(n, t) { n < i && (n++, u += $(t).height()) });
	f = $(t.find("tr")[i]).height();
	u += f / 2;
	t.length > 0 && ($(".read-more-table").length == 0 && n.after("<p class='read-more-table'> <a href='#' onclick='expandReadMore(this,\"" + n.attr("id") + "\"); return false;' class='readMoreLinkTable' style='padding:" + (f / 2 - -17) + "px 0px 0px 0px;" + r + "'> <span class='fa fa-plus-circle'><\/span> " + Translation.get("ReadMore") + "<\/a><\/p>"), n.css("height", u), n.css("overflow", "hidden"), n.css("max-height", "none")) }

function getAltLangURLViaBaseTag() { var n = "",
	t, i; return $("base").length > 0 && (t = new RegExp(ApplicationState.ApplicationModeString, "i"), i = $("base").attr("href"), n = decodeURI(i.replace(/cultureid=[0-9]&*/gi, "")), n = n.replace(t, ApplicationState.AlternateApplicationModeString)), n }

function switchLanguage(n) { if (n != ApplicationState.CultureID) { var t = function() { if (ApplicationState.IsMobileDevice) { var n = $('link[rel="alternate"]').attr("href") + location.hash;
	location.href = n } else Cookie.Language.save(ApplicationState.AlternateCultureID.toString()), location.reload() };
	ApplicationState.UserIsSignedIn ? Gigya.setLocale(null, null, t) : t() } }

function getValue(n) { var t = ""; return n.find(".g-recaptcha").length > 0 ? t = grecaptcha.getResponse() : n.is("input[type='text'], input[type='number'], input[type='tel'], textarea, input[type='email'], input[type='password']") ? t = n.val() : n.is("select[multiple]") ? n.val() != null && (t = n.val().toString()) : n.is("select") ? t = n.val() : n.is("input[type='checkbox']") ? t = n.is(":checked") ? "1" : "" : n.find("input[type='radio']").length > 1 && (t = n.find("input[type='radio']:checked").val()), t || "" }

function scrollToTop() { $("html,body").animate({ scrollTop: 0 }) }

function ScrollToElement(n, t, i) { t === void 0 && (t = 0);
	i === void 0 && (i = !0);
	n.length > 0 && (i ? $("html,body").animate({ scrollTop: n.offset().top + t }) : window.scrollTo(0, n.offset().top + t)) }

function reattachHiddenSelectOptions(n, t) { var u = n.val(),
	i = n.attr("id"),
	r;
	i != null && t != null && t[i] != null && n.append(t[i]);
	r = n.find("option");
	r.sort(function(n, t) { return n = Number(n.value), t = Number(t.value), n - t });
	n.empty().append(r).val(u) }

function maxExactCheckChanged(n, t, i, r, u) { var f = n.is(":checked"),
	e;
	e = r.is(":visible") ? Number(r.val()) : Number(u.val());
	f ? (i.hide().change(), t.val(0).change().show().focus().select()) : (t.hide().change(), i.val(0).change().show().focus().select()) }

function minExactCheckChanged(n, t, i) { var r = n.is(":checked");
	r ? (t.hide().change(), i.val(0).change().show().focus().select()) : (i.hide().change(), t.val(0).change().show().focus().select()) }

function maxDropDownValueChanged(n, t, i, r, u) { var f, e;
	r === void 0 && (r = 1e8);
	f = n.val();
	f != 0 ? t.attr("max", f) : t.attr("max", "");
	reattachHiddenSelectOptions(i, u);
	(f || "0") != "0" && (u != null && (Logging.Debug("Removing minDDL values > " + f), u[i.attr("id")] = i.find("option").filter(function() { return Number($(this).val()) > Number(f) && $(this).val() != "0" }).detach()), i.is(":visible") && Number(i.val()) != 0 && Number(i.val()) > f && i.find("option:first-child").attr("selected", "selected"));
	t.is(":visible") && (e = Number(t.val()), f != 0 && e > f && t.val(f)) }

function minDropDownValueChanged(n, t, i, r) { var u = i.val(),
	f;
	n.attr("min", u);
	reattachHiddenSelectOptions(t, r);
	(u || "0") != "0" && (r != null && (Logging.Debug("Removing maxDDL values < " + u), r[t.attr("id")] = t.find("option").filter(function() { return Number($(this).val()) < Number(u) && $(this).val() != "0" }).detach()), t.is(":visible") && Number(t.val()) != 0 && Number(t.val()) < u && t.find("option:first-child").attr("selected", "selected"));
	n.is(":visible") && (f = Number(n.val()), f < u && n.val(u)) }

function maxExactValueChanged(n, t, i, r) { i.val(i.val().replace(/\D/g, ""));
	n.attr("max", i.val()); var u = Number(i.val()),
		f;
	f = n.is(":visible") ? Number(n.val()) : Number(t.val());
	u != 0 ? n.attr("max", u) : n.attr("max", "");
	u < f && (i.val(f), u = f);
	reattachHiddenSelectOptions(t, r);
	u != 0 && r != null && (Logging.Debug("Removing minDDL values > " + u), r[t.attr("id")] = t.find("option").filter(function() { return Number($(this).val()) > Number(u) && $(this).val() != "0" }).detach()) }

function minExactValueChanged(n, t, i, r) { i.val(i.val().replace(/\D/g, ""));
	n.attr("min", i.val()); var u = Number(i.val()),
		f;
	f = n.is(":visible") ? Number(n.val()) : Number(t.val());
	u != 0 && (f != 0 || n.is(":visible")) && u > f && n.val(u);
	reattachHiddenSelectOptions(t, r);
	u != 0 && r != null && (r[t.attr("id")] = t.find("option").filter(function() { return Number($(this).val()) < Number(u) && $(this).val() != "0" }).detach()) }

function showConfirmationDialog(n, t) { var i = new ControlFetcherArgs("ConfirmationDialog");
	$("#" + n.ID + "_con").length <= 0 && $("body").append("<div id='" + n.ID + "_con' class='confirmation-dlg-con'><\/div>");
	i.idToOutputResults = n.ID + "_con";
	i.canRetrieveFromCache = !0;
	i.postCallHandler = t;
	ControlFetcher.fetchConfirmationDialog(i, n) }

function showSimpleDialog(n) { var t = Utilities.getHashCode(n),
	r, i;
	$("#" + t + "_con").length == 0 && ($("body").append("<div id='" + t + "_con' class='confirmation-dlg-con'><\/div>"), r = new ConfirmationDialogModel2(t, "", n, Translation.get("OK"), function() { $.featherlight.close() }), r.AfterClose = function() { $("#" + t + "_con").remove() }, i = new ControlFetcherArgs(t + "_Wrapper"), i.idToOutputResults = t + "_con", i.canRetrieveFromCache = !0, i.postCallHandler = function(n) { $("#" + t + "_con").html(n) }, ControlFetcherJS.fetchConfirmationDialog2(i, r)) }

function showConfirmationDialog2(n) { $("#" + n.ID + "_con").length <= 0 && $("body").append("<div id='" + n.ID + "_con' class='confirmation-dlg-con'><\/div>"); var t = new ControlFetcherArgs(n.ID + "_Wrapper");
	t.idToOutputResults = n.ID + "_con";
	t.canRetrieveFromCache = !0;
	t.postCallHandler = function(t) { $("#" + n.ID + "_con").html(t) };
	ControlFetcherJS.fetchConfirmationDialog2(t, n) }

function showModalContent(n) { var i = $(".gigyaScreen.modal-con"),
	t;
	i.trigger("close");
	$("#" + n.ID + "_con").length <= 0 && $("body").append("<div id='" + n.ID + "_con' class='" + n.CssClass + " modal-con'><\/div>");
	t = new ControlFetcherArgs(n.ID + "_Wrapper");
	t.idToOutputResults = n.ID + "_con";
	t.canRetrieveFromCache = !0;
	t.postCallHandler = function(t) { $("#" + n.ID + "_con").hide();
		$("#" + n.ID + "_con").html(t);
		$("#" + n.ID + "_con").show() };
	ControlFetcherJS.fetchModalContent(t, n) }

function getCurrentURLInAltMode() { var n = decodeURIComponent(location.href); return n.match(/(Commercial|Commerciales|Residential|Résidentiel)/) == null && (n = $("base").attr("href") + location.pathname.substr(1)), ApplicationState.CurrentMode == ApplicationModes.Commercial ? (n = n.replace(/\/Commercial\//gi, "/Residential/"), n = n.replace(/\/Commerciales\//gi, "/Résidentiel/")) : (n = n.replace(/\/Residential\//gi, "/Commercial/"), n = n.replace(/\/Résidentiel\//gi, "/Commerciales/")), n }

function getMinScreenDimension() { var n = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
	t = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); return Math.min(n, t) }

function GoogleMapsLoaded() { MasterPages.Phone != null && ApplicationState.IsMobileDevice ? Events.Fire(MasterPages.Phone.GoogleAPILoaded, null) : MasterPages.Desktop != null && Events.Fire(MasterPages.Desktop.GoogleAPILoaded, null) }

function ScrollInputToTop(n) { n.on("focus click", function() { if ($(this).is(":visible")) $(window).one("resize", function() { n[0].scrollIntoView(!0);
	window.scroll(0, window.scrollY - 70) }) }) }

function ApplySafariFixedHeaderHack() { if (ApplicationState.IsSafari && "ontouchstart" in window) $(document).on("focus click", "textarea,input,select", function() { $("#header").css("position", "absolute") }).on("blur", "textarea,input,select", function() { $("header").css("position", "") }) }

function Animate(n, t, i, r, u) { i === void 0 && (i = .3); var f = TransitionTiming[r].toString().replace(/_/g, "-") + " " + i.toString() + "s";
	Logging.Debug(n.selector + " -> " + t + " -> " + f, LogType.Animation);
	n.unbind("webkitAnimationEnd oanimationend msAnimationEnd animationend");
	n.one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() { u != null && u();
		ApplicationState.IsSafari ? window.setTimeout(function() { n.css("animation", "").css("-webkit-animation", "") }, 100) : n.css("animation", "").css("-webkit-animation", "") });
	n.css("animation", t.toString() + " " + f);
	n.css("-webkit-animation", t.toString() + " " + f) }

function AnimateIn(n, t, i, r, u, f) { t === void 0 && (t = EntryAnimations.fadeIn);
	i === void 0 && (i = .3);
	r === void 0 && (r = TransitionTiming.ease_in);
	Animate(n, EntryAnimations[t], i, r, u);
	n.show();
	f != null && f() }

function AnimateOut(n, t, i, r, u) { t === void 0 && (t = ExitAnimations.fadeOut);
	i === void 0 && (i = .3);
	r === void 0 && (r = TransitionTiming.ease_in); var f = function() {};
	f = u != null ? function() { n.hide();
		u("AnimateOut") } : function() { n.hide() };
	Animate(n, ExitAnimations[t], i, r, f) }

function showSubSectionSlider(n, t, i, r, u) { if (i === void 0 && (i = !1), r === void 0 && (r = 250), n.hasClass("subSectionCon2")) n.removeClass("hideme"), u != null && callAfterAnimation(n, u), window.setTimeout(function() { $("body").addClass("fixedOverlayVisible") }, r), $("#footer").hide();
else return animateSectionSlider(EntryAnimations.fadeInRight, ExitAnimations.fadeOut, n, t, i, r, u) }

function hideSubSectionSlider(n, t, i, r, u) { if (i === void 0 && (i = !1), r === void 0 && (r = 250), t.hasClass("subSectionCon2")) $("body").removeClass("fixedOverlayVisible"), ScrollLocation.Refresh(), t.addClass("hideme"), u != null && callAfterAnimation(t, u), $("#footer").show();
else return animateSectionSlider(EntryAnimations.fadeInLeft, ExitAnimations.fadeOut, n, t, i, r, u) }

function animateSectionSlider(n, t, i, r, u, f, e) { u === void 0 && (u = !1);
	f === void 0 && (f = 250);
	scrollLocations[r.attr("id")] = document.documentElement.scrollTop || document.body.scrollTop; var o = scrollLocations[i.attr("id")],
		s = function() { AnimateIn(i, n, f / 1e3, TransitionTiming.ease_in_out, function() { $(window).scroll();
			e != null && e();
			u ? window.scrollTo(0, 0) : o != null && window.scrollTo(0, o) }, null) };
	AnimateOut(r, t, 50 / 1e3, TransitionTiming.ease_in_out, s); return }

function SetFocusOnFirstInput(n) { window.setTimeout(function() { var t = n.find("input,select");
	t.length > 0 && t[0].focus() }, 50) }

function hideSlideupPageContent(n) { $("body").css("overflow", "initial");
	$("body").css("position", "initial");
	Animate($("#" + n), ExitAnimations[ExitAnimations.fadeOutDown], .5, TransitionTiming.ease_out, function() { $("#" + n).remove() }) }

function showSlideupPageContent(n) { var i = $("#header").outerHeight(),
	t;
	$("body").css("overflow", "hidden");
	$("body").css("position", "fixed");
	$("#" + n).css("top", i);
	t = getBodyHeight();
	$("#" + n).css("height", t + "px");
	$(window).on("orientationchange resize", function() { if ($("#" + n).length > 0) { var t = getBodyHeight();
		$("#" + n).css("height", t + "px") } });
	Animate($("#" + n), EntryAnimations[EntryAnimations.fadeInUp], .3, TransitionTiming.ease_in, function() { var t = new Event("touchstart");
		$("#" + n)[0].dispatchEvent(t) }) }

function getBodyHeight() { return ApplicationState.IsSafari ? $(window).height() - $("#header").outerHeight(!0) : ApplicationState.IsMobileDevice ? window.outerHeight - $("#header").outerHeight(!0) : window.innerHeight - $("#header").outerHeight(!0) }

function lightBoxPageElements(n, t) { var i; if (t === void 0 && (t = !0), n != null)
	if (t) { for (i = 0; i < n.length; i++) n[i].css("z-index", 100 + i);
		$("body").append("<div id='UIOverlay' class='overlay'><\/div>") } else
		for ($("#UIOverlay").remove(), i = 0; i < n.length; i++) n[i].css("z-index", "") }

function showLoadingBar() { $("#loadingBar").is(":visible") == !1 && $("#loadingBar").show() }

function hideLoadingBar() { $("#loadingBar").hide() }

function MoveRecaptcha(n) { $("#" + n + " #recaptcha").length > 0 && ($("#" + n + " #recaptcha").appendTo(document.body), $("#recaptcha").hide()) }

function LoadCaptcha(n) { ApplicationConfig.CaptchaEnabled && (($("#recaptcha").length == 0 || $("#recaptcha").html().trim() == "") && ($("body").append("<div id='recaptcha'><\/div>"), grecaptcha.render("recaptcha", { sitekey: ApplicationConfig.RecaptchaSiteKey })), n && ($("#recaptcha").prependTo("#" + n), $("#recaptcha").show())) }

function activateAccordion(n, t) { $(function() { var i = n.show().accordion({ collapsible: !0, active: !1, header: ".accrd-hdr", icons: { header: "iconClosed", activeHeader: "iconOpen" }, animate: t, autoHeight: !1, heightStyle: "content", change: function() { $("img.lazyLoadedImg").lazyload() } }).on("click", function() { setConsistantHeights(".smallListingCard");
	i.not(this).accordion("activate", !1) });
	n.css({ height: "auto" }) }) }

function callWhen(n, t, i) { var u, r; for (i === void 0 && (i = [100, 200, 1e3, 2e3]), u = !1, r = 0; r < i.length; r++)
	if (window.setTimeout(function() { if (n()) { t();
		u = !0; return } }, i[r]), u) break }

function GetControl(n) { return ApplicationState.Current.Controls[n] }

function setApplicationMode(n) { Cookie.ApplicationMode.save(n.toString());
	ApplicationState.CurrentMode = n }

function setDetailsCardLayout(n, t) { n.css("max-width", 342 * t) }

function setUniformHeightsForLargeListingCards(n) { setConsistantHeights(n + " .listingCardTopBody");
	setConsistantHeights(n + " .listingCardBody") }

function outputCSS(n, t) { var r = document.head || document.getElementsByTagName("head")[0],
	i = document.createElement("style");
	i.id = t;
	i.type = "text/css";
	i.appendChild(document.createTextNode(n));
	r.appendChild(i) }

function isFullScreenSupported() { return document.body.requestFullscreen != null || document.body.msRequestFullscreen != null || document.body.mozRequestFullScreen != null || document.body.webkitRequestFullscreen != null }

function showIframe(n, t, i) { $(window).trigger("resize");
	setTimeout(function() { $(n).css("opacity", 1);
		$(i).css("height", "");
		$(i).css("width", "") }, 200) }

function minValueChanged(n, t, i) { var r = Number(t.val()),
	u = Number(n.val());
	r != 0 && u != 0 && r > u && n.val(n.find("option:first-child").val());
	reattachHiddenSelectOptions(n, i);
	r != 0 && (i != null && (i[n.attr("id")] = n.find("option").filter(function() { return Number($(this).val()) < Number(r) && $(this).val() != "0" }).detach()), u == 0 && $(this).val("").trigger("change")) }

function initListedSince(n, t) { t === void 0 && (t = 2);
	n.datepicker({ dateFormat: "mm/dd/yy", showOn: "both", showButtonPanel: !0, numberOfMonths: t, maxDate: 0, minDate: -363, buttonImageOnly: !0, buttonImage: "/wp-content/plugins/adk_feed/assets/images/ArrowDown.svg", buttonText: "Calendar", beforeShow: function(n) { $(this).parent().children(".ui-datepicker-trigger").hasClass("ui-datepicker-arrow-up") ? $(this).parent().children(".ui-datepicker-trigger").removeClass("ui-datepicker-arrow-up") : $(this).parent().children(".ui-datepicker-trigger").addClass("ui-datepicker-arrow-up");
			setTimeout(function() { var i = $(n).datepicker("widget").find(".ui-datepicker-buttonpane"),
				t;
				$("<button>", { text: Translation.get("ClearDate"), click: function() { $.datepicker._clearDate(n) } }).addClass("clearDateBtn").attr("id", "clearDateBtn").appendTo(i);
				t = $(i.find(":button[data-handler=today]")[0]);
				t.length > 0 && t.click(function() { var t = new Date;
					$(n).val(t.getUTCMonth() + "/" + t.getUTCDate() + "/" + t.getUTCFullYear());
					$(n).datepicker("setDate", t);
					$(n).datepicker("hide") }) }, 1) }, onClose: function() { $(this).parent().children(".ui-datepicker-trigger").removeClass("ui-datepicker-arrow-up") }, onSelect: function() {} }, $.datepicker.regional[ApplicationState.CultureID == 1 ? "en-CA" : "fr-CA"]).mask("99/99/9999", { placeholder: "mm/dd/yyyy", showMaskOnHover: !0, showMaskOnFocus: !0 }) }

function maxValueChanged(n, t, i) { var r = Number(t.val()),
	u = Number(n.val()),
	f;
	r < u && r != 0 && (n.val(n.find("option:first-child").val()), r = u);
	reattachHiddenSelectOptions(n, i);
	r != 0 && i != null && (Logging.Debug("Removing minDDL values > " + r), f = (n.val() || "") == "", i[n.attr("id")] = n.find("option").filter(function() { return Number($(this).val()) > Number(r) && $(this).val() != "0" }).detach(), f && n.val("")) }
var Actions = function() {
		function n() {} return n.emailAnOrganization = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/EmailOffice", JSON.stringify(n), i) }, n.emailARealtor = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/EmailRealtor", JSON.stringify(n), i) }, n.emailAFriend = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/SendListing", JSON.stringify(n), i) }, n.emailAFriendFavourites = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/SendListings", JSON.stringify(n), i) }, n.emailAFriendPage = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/SendPage", JSON.stringify(n), i) }, n.emailContactUs = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/SendContactUs", JSON.stringify(n), i) }, n.accountsLogin = function(n, t, i) { var r = new AjaxCallArgs(t, i);
			r.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/AccountsLogin", JSON.stringify(n), r) }, n.socialLogin = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/SocialLogin", JSON.stringify(n), i) }, n.socializeLogin = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/SocializeLogin", JSON.stringify(n), i) }, n.socializeResponseLogin = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/SocializeResponseLogin", JSON.stringify(n), i) }, n.accountsRegister = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/AccountsRegister", JSON.stringify(n), i) }, n.accountsFinalizeRegistration = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/AccountsFinalizeRegistration", JSON.stringify(n), i) }, n.accountsGetSchema = function(n) { var t = new AjaxCallArgs(n);
			t.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/AccountsGetSchema", null, t) }, n.accountsLogout = function(n, t) { var i = new AjaxCallArgs(n, t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/AccountsLogout", null, i) }, n.accountsSetInfo = function(n, t, i) { var r = new AjaxCallArgs(t, i);
			r.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/AccountsSetInfo", JSON.stringify(n), r) }, n.accountsGetInfo = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/AccountsGetInfo", JSON.stringify(n), i) }, n.getAccountInfo = function(n, t, i) { var r = new AjaxCallArgs(t, i);
			r.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/GetAccountInfo", JSON.stringify(n), r) }, n.setAccountInfo = function(n, t, i) { var r = new AjaxCallArgs(t, i);
			r.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/SetAccountInfo", JSON.stringify(n), r) }, n.resendVerificationCode = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/AccountsResendVerificationCode", JSON.stringify(n), i) }, n.resetPassword = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/AccountsResetPassword", JSON.stringify(n), i) }, n.changePassword = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/AccountsChangePassword", JSON.stringify(n), i) }, n.changeEmail = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/AccountsChangeEmail", JSON.stringify(n), i) }, n.accountsDeleteAccount = function(n, t) { var i = new AjaxCallArgs(t);
			i.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/AccountsDeleteAccount", JSON.stringify(n), i) }, n.deactivateAccount = function(n) { var t = new AjaxCallArgs(n);
			t.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/DeactivateAccount", null, t) }, n.getAccountFromBOL = function(n, t, i) { var r = new AjaxCallArgs(t, i);
			r.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/GetAccountFromBOL", n ? JSON.stringify(n) : null, r) }, n.getConsumerNotifications = function(n, t, i, r) { r === void 0 && (r = !1); var u = new AjaxCallArgs(t, i);
			u.contentType = "application/json; charset=UTF-8";
			r == !1 && (u.cacheFetchHandler = ConsumerProfile.Notifications.cacheFetch);
			u.cacheSaveHandler = ConsumerProfile.Notifications.cacheSave;
			AjaxEngine.POST("/Services/Actions.asmx/GetNotifications", n ? JSON.stringify(n) : null, u) }, n.PostBlogComment = function(n, t, i, r) { var u = new AjaxCallArgs(t, r);
			u.errorHandler = i;
			u.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/PostBlogComment", n ? JSON.stringify(n) : null, u) }, n.GetBlogCommentData = function(n, t, i, r) { var u = new AjaxCallArgs(t, r);
			u.errorHandler = i;
			u.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/GetBlogCommentData", n ? JSON.stringify(n) : null, u) }, n.GetRandomHomePageImgBg = function(n, t, i) { var r = new AjaxCallArgs(n, i);
			r.errorHandler = t;
			r.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/GetRandomHomePageImgBg", null, r) }, n.SwitchPreviewMode = function(n, t, i, r) { var u = new AjaxCallArgs(t, r);
			u.errorHandler = i;
			u.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/SwitchPreviewMode", n ? JSON.stringify(n) : null, u) }, n.GetInstagramData = function(n, t, i, r) { var u = new AjaxCallArgs(t, r);
			u.errorHandler = i;
			u.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/GetInstagramData", n ? JSON.stringify(n) : null, u) }, n.GetVideoJsonData = function(n, t, i, r) { var u = new AjaxCallArgs(t, r);
			u.errorHandler = i;
			u.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/GetVideoJsonData", n ? JSON.stringify(n) : null, u) }, n.GetAllKeywords = function(n, t, i, r) { var u = new AjaxCallArgs(t, r);
			u.errorHandler = i;
			u.contentType = "application/json; charset=UTF-8";
			AjaxEngine.POST("/Services/Actions.asmx/GetAllKeywords", null, u) }, n }(),
	unloadingState = !1,
	AjaxCallArgs = function() {
		function n(n, t) { this.isRequestCacheable = null;
			this.cacheFetchHandler = null;
			this.cacheSaveHandler = null;
			this.callHandler = null;
			this.timeoutHandler = null;
			this.errorHandler = null;
			this.contentType = "application/x-www-form-urlencoded; charset=UTF-8";
			this.queueName = "";
			this.cancelExistingRequestsInQueue = !1;
			this.callHandler = n;
			this.callBackArgs = t } return n }(),
	AjaxEngine = function() {
		function n() {} return n.init = function() { $.ajaxSetup({ beforeSend: function(t, i) { t.timestamp = Date.now();
				i.complete && n.currentXHRs.push(t);
				i.url = i.url.replace(/%3E/g, "").replace(/%3C/g, "");
				t.url = i.url;
				t.queueName = i.queueName } });
			this.initialized = !0 }, n.returnResults = function(n, t) { this.response && n != null && n(this.response, t) }, n.GET = function(t, i, r) { var u, f; if (r.cacheFetchHandler != null && (r.isRequestCacheable == null || r.isRequestCacheable(t, i)) && (u = r.cacheFetchHandler(t, i), u != null)) { r.callHandler(u, r.callBackArgs); return } return r.cacheSaveHandler != null && (r.isRequestCacheable == null || r.isRequestCacheable(t, i)) && (f = r.callHandler, r.callHandler = function(n) { r.cacheSaveHandler(t, i, n);
			f(n, r.callBackArgs) }), n.makeAjaxCall(t, i, r.callHandler, "GET", r.contentType, r.timeoutHandler, r.errorHandler, r.callBackArgs, r.queueName, r.cancelExistingRequestsInQueue) }, n.POST = function(t, i, r) { var u, f; if (r.cacheFetchHandler != null && (r.isRequestCacheable == null || r.isRequestCacheable(t, i)) && (u = r.cacheFetchHandler(t, i), u != null)) { r.callHandler(u, r.callBackArgs); return } return r.cacheSaveHandler != null && (r.isRequestCacheable == null || r.isRequestCacheable(t, i)) && (f = r.callHandler, r.callHandler = function(n) { r.cacheSaveHandler(t, i, n);
			f(n, r.callBackArgs) }), n.makeAjaxCall(t, i, r.callHandler, "POST", r.contentType, r.timeoutHandler, r.errorHandler, r.callBackArgs, r.queueName, r.cancelExistingRequestsInQueue) }, n.TransformResponse = function(n) { var t; try { t = JSON.parse(n.d || n) } catch (i) { t = n } return t }, n.makeAjaxCall = function(t, i, r, u, f, e, o, s, h, c) { var a;
			i === void 0 && (i = "");
			u === void 0 && (u = "POST");
			e === void 0 && (e = null);
			o === void 0 && (o = null);
			s === void 0 && (s = null);
			h === void 0 && (h = "");
			c === void 0 && (c = !1);
			this.initialized == !1 && this.init();
			jQuery.support.cors = !0;
			a = new XMLHttpRequest;
			Events.Fire(n.callBeginEvent, t); var y = { xhr: function() { return a }, url: t, data: i, type: u, processData: !0, queueName: h, contentType: f, timeout: 2e4, success: function(t) { n.response = n.TransformResponse(t) }, complete: function(t) { var i = n.getIndexOfRequest(t, n.currentXHRs);
						i > -1 ? n.currentXHRs.splice(i, 1) : Logging.Debug("Unable to find AJAX request to remove from AjaxEngine.XHRs");
						Events.Fire(n.callEndEvent, t);
						n.fireNextRequestInQueue(t.queueName) }, error: function(t, i, r) { if (Events.Fire(n.callErrorEvent, i), !unloadingState) switch (i) {
						case "abort":
							return;
						case "timeout":
							e && e(t, r); break;
						case "notmodified":
							break;
						case "parseerror":
							break;
						default:
							var u = r;
							i != r && (u += ": " + i);
							t.statusText != r && (u += " " + t.statusText);
							o && o(t, r) } } },
				l = function() { $.ajax(y).then(function() { n.returnResults(r, s) }, function(n, t, i) { i != "abort" && (n.status != 404 ? Logging.Error("AjaxEngine request failed: {Status: " + (n.status || "") + "} {Error: " + (i || "") + "} {ResponseText: " + (n.responseText || "") + "} {StatusText: " + (n.statusText || "") + "}") : Logging.Error("AjaxEngine request failed: {Status: " + (n.status || "") + "} {URL: " + (n.url || "") + "}")) }) },
				v = null; return (h || "") != "" ? (v = n.getPendingRequestFromQueue(h, n.currentXHRs), v != null ? c ? (n.abortAndClearPendingRequestsFromQueue(h, n.currentXHRs), l()) : (Logging.Debug("Request added to '" + h + "' queue", LogType.AJAXEngine), n.queuedXHRs.push({ queueName: h, call: l })) : l()) : l(), a }, n.getIndexOfRequest = function(n, t) { for (var i = 0; i < t.length; i++)
			if (t[i].timestamp == n.timestamp) return i; return -1 }, n.getPendingRequestFromQueue = function(n, t) { for (var i = 0; i < t.length; i++)
			if (t[i].queueName == n) return t[i]; return null }, n.abortAndClearPendingRequestsFromQueue = function(n, t) { for (var r = [], i = 0; i < t.length; i++) t[i].queueName == n && (Logging.Debug("Aborting request from queue: '" + n, LogType.AJAXEngine), t[i].abort(), r.push(i)); for (i = 0; i < r.length; i++) t.splice(i, 1); return null }, n.fireNextRequestInQueue = function(t) { for (var r = -1, u = null, i = 0; i < n.queuedXHRs.length; i++)
			if (n.queuedXHRs[i].queueName == t) { r = i;
				u = n.queuedXHRs[i].call; break } r != -1 && (Logging.Debug("Firing next request in queue '" + t + "'", LogType.AJAXEngine), n.queuedXHRs.splice(r, 1), u()) }, n.callBeginEvent = "AJAXCallBegin", n.callEndEvent = "AJAXCallEnd", n.callErrorEvent = "AJAXCallError", n.currentXHRs = [], n.queuedXHRs = [], n.initialized = !1, n }(),
	Analytics = function() {
		function n() {} return n.log = function(n, t, i) { ApplicationConfig.AnalyticsEnabled && logAnalytics(n, t, i) }, n }(),
	APICriteria, APIReturnValues, PublicContracts, ConsumerNotificationTypes, ActionType, ModalDisplayTypes, InfoBoxTypes, Campaign, InfoBoxVerticalLocations, InfoBoxRelativePositions, EntryAnimations, ExitAnimations, TransitionTiming, MeasurementUnits, Device, DemographicsChartTypes, FavouriteState, PropertyTypes, ApplicationModes, LocalStorageItems, PhoneType, TransactionType, SearchType, WebSiteType, ListingStatus, URLParamType, UserType, DeviceTypes, SortOrder, CacheType, Language, EventListenerObj, JSException, gigyaScreen, diffType, AccountPages, AccountPagesList, ObjectCompare, MessageType, DisplayType, toastTimeOut, initLocallogic, URLHash, ConsumerProfile, Utilities, VideoAccessType, VideoDisplay, VideoLoadingType, VideoLoadingDisplay, NotificationModel, NotificationApplicationModes, NotificationTypes, MapCriteria, Desktop, Pages, __extends, Controls, scrollLocations, DesktopMapHelper;
(function(n) { var u = function() {
		function n() {} return n }(),
	t, i, r;
	n.PropertySearchCriteria = u;
	t = function() {
		function n() {} return n }();
	n.SubAreaSearchCriteria = t;
	i = function() {
		function n() { this.CurrentPage = "1" } return n }();
	n.IndividualSearch = i;
	r = function() {
		function n() {} return n }();
	n.OrganizationSearch = r })(APICriteria || (APICriteria = {})),
	function(n) { var y = function() {
			function n(n) { this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode) } return n }(),
		t, i, r, u, f, e, o, s, h, c, l, a, v;
		n.APIResult = y;
		t = function() {
			function n(n) { this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode) } return n }();
		n.EmailOfficeResult = t;
		i = function() {
			function n(n) { this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode) } return n }();
		n.EmailRealtorResult = i;
		r = function() {
			function n(n) { this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode) } return n }();
		n.EmailFriendResult = r;
		u = function() {
			function n(n) { this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode) } return n }();
		n.EmailContactUsResult = u;
		f = function() {
			function n(n) { var t; if (this.Results = [], this.Pins = [], n != null) { this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode);
				this.Paging = new PublicContracts.Paging(n.Paging);
				this.Results = []; for (t in n.Results) this.Results.push(new PublicContracts.ListingBasicDetails(n.Results[t]));
				this.Pins = []; for (t in n.Pins) this.Pins.push(new PublicContracts.Pin(n.Pins[t])) } } return n }();
		n.ListingSearchResults = f;
		e = function() {
			function n(n) { this.SubArea = [];
				this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode);
				this.SubArea = []; for (var t in n.SubArea) this.SubArea.push(new PublicContracts.SubArea(n.SubArea[t])) } return n }();
		n.SubAreaSearchResults = e;
		o = function() {
			function n(n) { this.Results = [];
				this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode);
				this.Paging = new PublicContracts.Paging(n.Paging);
				this.Results = []; for (var t in n.Results) this.Results.push(new PublicContracts.OrganizationBasicDetails(n.Results[t])) } return n }();
		n.OrganizationSearchResults = o;
		s = function() {
			function n(n) { this.Results = [];
				this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode);
				this.Results = [];
				this.Paging = new PublicContracts.Paging(n.Paging); for (var t in n.Results) this.Results.push(new PublicContracts.IndividualBasicDetails(n.Results[t])) } return n }();
		n.IndividualSearchResults = s;
		h = function() {
			function n(n) { this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode);
				this.GigyaErrorCode = n.GigyaErrorCode;
				this.GigyaErrorMsg = n.GigyaErrorMsg } return n }();
		n.SetAccountInfoResults = h;
		c = function() {
			function n(n) { this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode) } return n }();
		n.GetAccountInfoResults = c;
		l = function() {
			function n(n) { this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode) } return n }();
		n.DeleteAccountResults = l;
		a = function() {
			function n(n) { this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode) } return n }();
		n.DeactivateAccountResults = a;
		v = function() {
			function n(n) { this.Notifications = [];
				this.ErrorCode = new PublicContracts.ErrorCode(n.ErrorCode);
				this.Notifications = []; for (var t in n.Notifications) this.Notifications.push(new PublicContracts.ConsumerNotifications(n.Results[t]));
				this.TimestampUTCEpoch = n.TimestampUTCEpoch } return n }();
		n.NotificationResults = v }(APIReturnValues || (APIReturnValues = {})),
	function(n) { var nt, p, w, b, k, t, i, r, f, e, u, o, s, h, c, l, a, v, y, d, g;
		(function(n) { n[n.OK = 200] = "OK";
			n[n.NotModified = 304] = "NotModified";
			n[n.BadRequest = 400] = "BadRequest";
			n[n.Unauthorized = 401] = "Unauthorized";
			n[n.Forbidden = 403] = "Forbidden";
			n[n.NotFound = 404] = "NotFound";
			n[n.NotAcceptable = 406] = "NotAcceptable";
			n[n.InternalServerError = 500] = "InternalServerError";
			n[n.BadGateway = 502] = "BadGateway";
			n[n.ServiceUnavailable = 503] = "ServiceUnavailable";
			n[n.MailUndeliverable = 504] = "MailUndeliverable";
			n[n.BlackListed = 505] = "BlackListed" })(nt = n.ErrorCodeId || (n.ErrorCodeId = {}));
		p = function() {
			function n(n) { n != null && (this.Id = n.Id, this.Description = n.Description, this.LogId = n.LogId, this.Status = n.Status, this.Exception = n.Exception) } return n }();
		n.ErrorCode = p;
		w = function() {
			function n(n) { n != null && (this.RecordsPerPage = n.RecordsPerPage, this.CurrentPage = n.CurrentPage, this.TotalRecords = n.TotalRecords, this.MaxRecords = n.MaxRecords, this.TotalPages = n.TotalPages, this.RecordsShowing = n.RecordsShowing, this.Pins = n.Pins) } return n }();
		n.Paging = w;
		b = function() {
			function n(n) { this.Location = "";
				this.InternalResult = "";
				this.Location = n.Location;
				this.ZoomLevel = n.ZoomLevel == "" ? null : Number(n.ZoomLevel);
				this.Longitude = n.Longitude == "" ? null : Number(n.Longitude);
				this.Latitude = n.Latitude == "" ? null : Number(n.Latitude);
				this.Height = n.Height == "" ? null : Number(n.Height);
				this.Width = n.Width == "" ? null : Number(n.Width);
				this.InternalResult = n.InternalResult } return n }();
		n.SubArea = b;
		k = function() {
			function n(n) { this.key = n.key;
				this.propertyId = n.propertyId;
				this.count = n.count;
				this.longitude = n.longitude;
				this.latitude = n.latitude;
				this.favouriteCount = n.favouriteCount } return n }();
		n.Pin = k;
		t = function() {
			function n(n) { this.Website = n.Website;
				this.WebsiteTypeId = n.WebsiteTypeId } return n }();
		n.Website = t;
		i = function() {
			function n(n) { n != null && (this.PhoneType = n.PhoneType, this.CountryCode = n.CountryCode, this.PhoneNumber = n.PhoneNumber, this.AreaCode = n.AreaCode, this.Extension = n.Extension, this.PhoneTypeId = n.PhoneTypeId) } return n }();
		n.Phone = i;
		r = function() {
			function n(n) { n != null && (this.ContactTypeId = n.ContactTypeId, this.ContactId = n.ContactId) } return n }();
		n.Email = r;
		f = function() {
			function n(n) { n != null && (this.BrochureLink = n.BrochureLink, this.DetailsLink = n.DetailsLink, this.MapLink = n.MapLink, this.PhotoLink = n.PhotoLink, this.SoundLink = n.SoundLink, this.VideoLink = n.VideoLink) } return n }();
		n.AlternateURL = f;
		e = function() {
			function n(n) { n != null && (this.BusinessType = n.BusinessType, this.BusinessSubType = n.BusinessSubType) } return n }();
		n.BusinessBasicDetails = e;
		u = function() {
			function n(n) { n != null && (this.AddressText = n.AddressText, this.Longitude = n.Longitude, this.Latitude = n.Latitude, this.CommunityName = n.CommunityName, this.Neighbourhood = n.Neighbourhood, this.Subdivision = n.Subdivision) } return n }();
		n.Address = u;
		o = function() {
			function n(n) { n != null && (this.StartTime = n.StartTime, this.StartDateTime = n.StartDateTime, this.EndDateTime = n.EndDateTime, this.FormattedDateTime = n.FormattedDateTime, this.Comments = n.Comments) } return n }();
		n.Event = o;
		s = function() {
			function n(n) { n != null && (this.Name = n.Name, this.Spaces = n.Spaces, this.ParkingType = n.ParkingType) } return n }();
		n.Parking = s;
		h = function() {
			function n(n) { var f; if (this.Phones = [], this.Emails = [], this.Websites = [], n != null) { this.OrganizationID = n.OrganizationID;
				this.Name = n.Name;
				this.Logo = n.Logo;
				this.Address = new u(n.Address); for (f in n.Phones) this.Phones.push(new i(n.Phones[f])); for (f in n.Emails) this.Emails.push(new r(n.Emails[f])); for (f in n.Websites) this.Websites.push(new t(n.Websites[f]));
				this.OrganizationType = n.OrganizationType;
				this.Designation = n.Designation;
				this.HasEmail = n.HasEmail;
				this.HasListings = n.HasListings;
				this.HasRealtors = n.HasRealtors;
				this.PermitFreetextEmail = n.PermitFreetextEmail;
				this.PermitShowListingLink = n.PermitShowListingLink;
				this.RelativeDetailsURL = n.RelativeDetailsURL } } return n }();
		n.OrganizationBasicDetails = h;
		c = function() {
			function n(n) { n != null && (this.SequenceId = n.SequenceId, this.HighResPath = n.HighResPath, this.MedResPath = n.MedResPath, this.LowResPath = n.LowResPath, this.Description = n.Description, this.LastUpdated = n.LastUpdated) } return n }();
		n.PropertyPhoto = c;
		l = function() {
			function n(n) { var t; if (this.Photo = [], this.Parking = [], n != null) { this.Price = n.Price;
				this.LeaseRent = n.LeaseRent;
				this.Type = n.Type;
				this.Address = new u(n.Address); for (t in n.Photo) this.Photo.push(new c(n.Photo[t])); for (t in n.Parking) this.Parking.push(new s(n.Parking[t]));
				this.ParkingSpaceTotal = n.ParkingSpaceTotal;
				this.TypeId = n.TypeId;
				this.Distance = n.Distance;
				this.FarmType = n.FarmType;
				this.OwnershipType = n.OwnershipType;
				this.ZoningType = n.ZoningType;
				this.AmmenitiesNearBy = n.AmmenitiesNearBy } } return n }();
		n.PropertyBasicDetails = l;
		a = function() {
			function n(n) { n != null && (this.BathroomTotal = n.BathroomTotal, this.Bedrooms = n.Bedrooms, this.SizeExterior = n.SizeExterior, this.SizeInterior = n.SizeInterior, this.StoriesTotal = n.StoriesTotal, this.Type = n.Type, this.UnitTotal = n.UnitTotal, this.Ammenities = n.Ammenities) } return n }();
		n.BuildingBasicDetails = a;
		v = function() {
			function n(n) { var u; if (this.Phones = [], this.Websites = [], this.Emails = [], n != null) { this.IndividualID = n.IndividualID;
				this.Name = n.Name;
				this.Organization = new h(n.Organization); for (u in n.Phones) this.Phones.push(new i(n.Phones[u])); for (u in n.Websites) this.Websites.push(new t(n.Websites[u])); for (u in n.Emails) this.Emails.push(new r(n.Emails[u]));
				this.Photo = n.Photo;
				this.Position = n.Position;
				this.DesignationCodes = n.DesignationCodes;
				this.DesignationText = n.DesignationText;
				this.EducationCredentials = n.EducationCredentials;
				this.HasOpenHouses = n.HasOpenHouses;
				this.HasOrganizationListings = n.HasOrganizationListings;
				this.PermitFreetextEmail = n.PermitFreetextEmail;
				this.FirstName = n.FirstName;
				this.LastName = n.LastName;
				this.CccMember = n.CccMember;
				this.CorporationName = n.CorporationName;
				this.CorporationDisplayTypeId = n.CorporationDisplayTypeId;
				this.CorporationType = n.CorporationType;
				this.HasListings = n.HasListings;
				this.PermitShowListingLink = n.PermitShowListingLink;
				this.RelativeDetailsURL = n.RelativeDetailsURL } } return n }();
		n.IndividualBasicDetails = v;
		y = function() {
			function n(n) { n != null && (this.SizeTotal = n.SizeTotal, this.SizeFrontage = n.SizeFrontage, this.CurrentUse = n.CurrentUse, this.AccessType = n.AccessType, this.LandscapeFeatures = n.LandscapeFeatures) } return n }();
		n.LandBasicDetails = y;
		d = function() {
			function n(n) { var t; if (this.Individual = [], this.OpenHouse = [], n != null) { this.Id = n.Id;
				this.MlsNumber = n.MlsNumber;
				this.PublicRemarks = n.PublicRemarks;
				this.Building = new a(n.Building); for (t in n.Individual) this.Individual.push(new v(n.Individual[t]));
				this.Property = new l(n.Property); for (t in n.OpenHouse) this.OpenHouse.push(new o(n.OpenHouse[t]));
				this.Business = new e(n.Business);
				this.Land = new y(n.Land);
				this.AlternateURL = new f(n.AlternateURL);
				this.PostalCode = n.PostalCode;
				this.RelativeDetailsURL = n.RelativeDetailsURL;
				this.StatusId = n.StatusId;
				this.OpenHouseInsertDateUTC = n.OpenHouseInsertDateUTC;
				this.HasOpenHouseUpdate = n.HasOpenHouseUpdate;
				this.PriceChangeDateUTC = n.PriceChangeDateUTC;
				this.HasPriceUpdate = n.HasPriceUpdate;
				this.PhotoChangeDateUTC = n.PhotoChangeDateUTC;
				this.HasNewImageUpdate = n.HasNewImageUpdate;
				this.ClosePrice = n.ClosePrice;
				this.HistoricalStatusId = n.HistoricalStatusId;
				this.HistoricalStatusDate = n.HistoricalStatusDate;
				this.Distance = n.Distance } } return n }();
		n.ListingBasicDetails = d;
		g = function() {
			function n(n) { n != null && (this.Type = n.Type, this.ApplicationMode = n.ApplicationMode, this.Text = n.Text, this.ListingIds = n.ListingIds, this.ActionData = n.ActionData, this.SearchDate = n.SearchDate) } return n }();
		n.ConsumerNotifications = g }(PublicContracts || (PublicContracts = {})),
	function(n) { var t = function() {
		function n(n) { n != null && (this.firstName = n.firstName, this.lastName = n.lastName, this.displayName = n.displayName, this.email = n.email, this.UID = n.UID, this.regToken = n.regToken, this.profile = n.profile, this.GigyaError = n.GigyaError, this.errorCode = n.errorCode, n.GigyaError != undefined && (this.GigyaError.ErrorCode = n.GigyaError.ErrorCode, this.GigyaError.ErrorMsg = n.GigyaError.ErrorMsg), this.validationErrors = n.validationErrors, this.moreAboutYouCondition = n.moreAboutYouCondition, this.socialTermsCondition = n.socialTermsCondition, this.revisedTermsCondition = n.revisedTermsCondition, this.LoginProviderType = n.LoginProviderType, this.LoginProviderTypeJSON = n.LoginProviderTypeJSON, this.lastUpdatedTimestamp = n.lastUpdatedTimestamp, this.Favourites = n.Favourites, this.Compares = n.Compares, this.Searches = n.Searches, this.Notes = n.Notes, this.user = n.user, this.data = n.data, this.pwrtToken = n.pwrtToken, this.Interested = n.Interested, this.Interested_Com = n.Interested_Com, this.Buyer = n.Buyer, this.Buyer_Com = n.Buyer_Com, this.CREA_mail_updates = n.CREA_mail_updates, this.REALTOR_mail_updates = n.REALTOR_mail_updates, this.Salesforce_Contact_CREA_ID = n.Salesforce_Contact_CREA_ID, this.NotificationsEnabled = n.NotificationsEnabled, this.FavNotificationsEnabled = n.FavNotificationsEnabled, this.CompareNotificationsEnabled = n.CompareNotificationsEnabled, this.SavedSearchNotificationsEnabled = n.SavedSearchNotificationsEnabled, this.HashUID = n.HashUID, this.unsubscribeLink = n.unsubscribeLink, this.pardot_error = n.pardot_error) } return n }();
		n.Consumer = t }(ConsumerProfile || (ConsumerProfile = {}));
var APIProxy = function() {
		function n() {} return n.reduceBoundingBoxAccuracy = function(n) { var t = Object.assign({}, n); return t.LatitudeMin != null && (t.LatitudeMin = Number(t.LatitudeMin).toFixed(4)), t.LatitudeMax != null && (t.LatitudeMax = Number(t.LatitudeMax).toFixed(4)), t.LongitudeMin != null && (t.LongitudeMin = Number(n.LongitudeMin).toFixed(4)), t.LongitudeMax != null && (t.LongitudeMax = Number(t.LongitudeMax).toFixed(4)), t }, n.getCacheItemHash = function(t, i) { var u = Utilities.hash(t).toString(),
		r; return i = n.reduceBoundingBoxAccuracy(i), r = Utilities.hash(JSON.stringify(i)).toString(), u + r }, n.cacheFetchHandler = function(t, i) { var u = null,
		f = sessionStorage.getItem(t),
		e, r; return f != null && (e = n.getCacheItemHash(t, i), r = JSON.parse(f), r.hash == e && (Logging.Debug("Value pulled from cache ( " + t + " )", LogType.APIProxy), u = JSON.parse(r.value.toString()))), u }, n.cacheSaveHandler = function(t, i, r) { var f = n.getCacheItemHash(t, i),
		e = r,
		u;
			e.ErrorCode.Id == PublicContracts.ErrorCodeId.OK && (u = new StorageItems.HashedItem(f, JSON.stringify(r)), Logging.Debug("Saving item to cache ( " + t + " )", LogType.APIProxy), sessionStorage.setItem(t, JSON.stringify(u))) }, n.errorCheck = function(n) { n.Id != PublicContracts.ErrorCodeId.OK && Logging.Error("APIProxy error: " + n.Id + " - " + (n.LogId || "") + " - " + (n.Description || "") + " : " + (n.Exception || "")) }, n.addCommonParams = function(n) { return n.ApplicationId = ApplicationConfig.ApplicationID, n.CultureId = ApplicationState.CultureID, n.Version = ApplicationConfig.ApplicationVersion, n }, n.abortCurrentPropertySearch = function() { n.currentPropertySearch != null && n.currentPropertySearch.abort() }, n.propertySearch = function(t, i, r, u, f, e, o) { u === void 0 && (u = !0);
			f === void 0 && (f = !1);
			e === void 0 && (e = "");
			o === void 0 && (o = null);
			t = Utilities.removeBlankProperties(t);
			t = n.addCommonParams(t); var h = ApplicationConfig.ApiPath + "Listing.svc/PropertySearch_Post",
			c = function(t, r) { var u = new APIReturnValues.ListingSearchResults(t);
				n.errorCheck(u.ErrorCode);
				i(u, r) },
			s = new AjaxCallArgs(c, r); return s.cacheFetchHandler = n.cacheFetchHandler, s.cacheSaveHandler = n.cacheSaveHandler, s.queueName = e, s.errorHandler = o, s.cancelExistingRequestsInQueue = f, s.isRequestCacheable = u ? function(n, t) { return t.Listingids == null } : function() { return !1 }, n.currentPropertySearch = AjaxEngine.POST(h, t, s) }, n.individualSearch = function(t, i, r) { t = n.addCommonParams(t); var u = ApplicationConfig.ApiPath + "individual.svc/IndividualSearch",
		f = function(t, r) { var u = new APIReturnValues.IndividualSearchResults(t);
			n.errorCheck(u.ErrorCode);
			i(u, r) },
		e = new AjaxCallArgs(f, r); return AjaxEngine.GET(u, t, e) }, n.organizationSearch = function(t, i, r) { t = n.addCommonParams(t); var u = ApplicationConfig.ApiPath + "organization.svc/OrganizationSearch",
		f = function(t, r) { var u = new APIReturnValues.OrganizationSearchResults(t);
			n.errorCheck(u.ErrorCode);
			i(u, r) },
		e = new AjaxCallArgs(f, r); return AjaxEngine.POST(u, t, e) }, n.subAreaSearch = function(t, i, r) { t = n.addCommonParams(t); var f = ApplicationConfig.ApiPath + "Location.svc/SubAreaSearch",
		e = function(t, r) { var u = new APIReturnValues.SubAreaSearchResults(t);
			n.errorCheck(u.ErrorCode);
			i(u, r) },
		u = new AjaxCallArgs(e, r); return u.cacheFetchHandler = n.cacheFetchHandler, u.cacheSaveHandler = n.cacheSaveHandler, AjaxEngine.GET(f, t, u) }, n }(),
	ApplicationConfig = function() {
		function n() {} return n.CaptchaEnabled = !1, n.EnableAutoComplete = !1, n.FavouriteLimit = 50, n.CompareLimit = 5, n.SearchLimit = 5, n.TOSDate = "", n.OrganizationImageLowResolution = "", n.IsDebugMode = !1, n.IsQAMode = !1, n.MaxSoldDataDisplay = 4, n.LocationAutocompleteCacheKey = "LocationAutoComp", n.AutoCompleteResultsSize = 5, n.HomePageHeaderResImages = [], n.HomePageHeaderCommImages = [], n }(),
	ApplicationState = function() {
		function n() {} return n.registerEventHandlers = function() { Events.Listen(MasterPage.masterLoadedEvent, function(t) { var r = t.detail.id,
			i = t.detail.object;
			i && (Logging.Debug("Type: " + i.constructor.name + ", Id: " + r, LogType.MasterLoaded), n.Current.Master = i) }, Events.ListenerScope.Global);
			Events.Listen(WebPage.pageLoadedEvent, function(t) { var r = t.detail.id,
				i = t.detail.object;
				i && (Logging.Debug("Type: " + i.constructor.name + ", Id: " + r, LogType.PageLoaded), n.Current.Page = i, n.Current.Page.Name = i.constructor.name) }, Events.ListenerScope.Global);
			Events.Listen(WebControl.webControlLoadedEvent, function(t) { var r = t.detail.id,
				i = t.detail.object;
				i && (Logging.Debug("Type: " + i.constructor.name + ", Id: " + r, LogType.ControlLoaded), n.Current.Controls[r] = i) }, Events.ListenerScope.Global) }, n.IsMobileDevice = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent), n.IsSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), n.IsFireFox = /.*firefox.*/i.test(navigator.userAgent), n.IsSamsungBrowser = /.*samsungbrowser/i.test(navigator.userAgent), n.UserIsSignedIn = !1, n.Current = { Master: null, Page: null, Controls: {} }, n.LoadingViaBackButton = !1, n.ResidentialMode = 1, n.CommercialMode = 2, n.ApplicationModeString = "", n.AlternateApplicationModeString = "", n.BuildVersion = "", n.LanguageAttribute = "", n.GigyaAPIKey = "", n.CurrentHref = document.location.href, n.PreviousHref = document.location.href, n.InitialDeviceScreenHeight = $(window).height(), n.InitialDeviceScreenWidth = $(window).width(), n.IsScreenKeyboardVisible = function() { return n.IsMobileDevice && $(window).width() + $(window).height() != n.InitialDeviceScreenWidth + n.InitialDeviceScreenHeight }, n.IsScreenLandscape = function() { return screen.height < screen.width }, n.PageLoadingAnimationComplete = !1, n.IsCandianIP = n.IsCandianIP, n }(),
	AutoComplete = function() {
		function n(t, i, r, u, f, e) { this.CurrentText = "";
			this.MaxCachedResultSets = 0; var o = this;
			this.InputId = t;
			this.ItemClickedHandler = r;
			this.MaxCachedResultSets = u;
			this.TextInput = document.getElementById(t);
			this.CacheKey = i;
			this.ResultsDiv = n.CreateResultsDiv(t, e);
			f == null ? document.body.appendChild(this.ResultsDiv) : f.append(this.ResultsDiv);
			n.AddEventHandlers(this);
			n.init() } return n.init = function() { n.Cache == null && (n.Cache = new Caching.LocalStorageCache("AutoComplete"), n.CacheKey = LocalStorage.AutoComplete.getKey()) }, n.BlurEvent = function(n, t) { window.clearTimeout(n.hideTimer);
			n.hideTimer = window.setTimeout(function() { $(".autoCompleteItem").is(":focus") == !1 && t.is(":focus") == !1 && n.ResultsDiv.classList.add("hidden") }, 100) }, n.AddEventHandlers = function(t) { var i = $("#" + t.InputId),
			r;
			$(window).on("resize", function() { n.RefreshPosition(t.InputId, t.ResultsDiv.getAttribute("id")) });
			i.blur(function() { n.BlurEvent(t, i) });
			r = function(i) { var r = n.FetchResults($(i).val(), t);
				r != null && r.length > 0 && (n.DisplaySuggestions(r, t, !0), n.RefreshPosition(t.InputId, t.ResultsDiv.getAttribute("id"))) };
			i.focus(function() { r(this) });
			i.click(function() { r(this) });
			i.keyup(function(i) { if (i.keyCode == 40 && i.ctrlKey == !1 && $(t.ResultsDiv).find(".autoCompleteItem").length > 0) { $(t.ResultsDiv).find(".autoCompleteItem")[0].focus(); return } if ((t.CurrentText || !0) && n.RefreshPosition(t.InputId, t.ResultsDiv.getAttribute("id")), t.CurrentText != $(this).val()) { t.CurrentText = $(this).val(); var r = n.FetchResults($(this).val(), t);
				r != null && r.length > 0 ? (Logging.Debug("Showing cached results for '" + $(this).val() + "'", LogType.AutoComplete), n.DisplaySuggestions(r, t, !0)) : t.ResultsDiv.classList.add("hidden") } }) }, n.RefreshPosition = function(n, t) { var i = $("#" + n),
			u = $("#" + t),
			r; if (i.length > 0 && u.length > 0 && (r = i.offset(), r != null)) { var f = i.height(),
			e = i.width(),
			o = r.top + f + parseInt(i.css("marginBottom"), 10) + parseInt(i.css("paddingBottom"), 10) + 5 + "px",
			s = r.left + parseInt(i.css("marginLeft"), 10) + parseInt(i.css("paddingLeft"), 10) + "px";
			u.css({ position: "absolute", left: s, top: o, width: e }) } }, n.CreateResultsDiv = function(n, t) { var i = document.createElement("div"); return t && (i.style.zIndex = t), i.className = "autoCompleteCon hidden", i.id = "AutoCompleteCon-" + n, i }, n.FetchResultsSet = function() { var t = n.Cache.get(n.CacheKey); return t || {} }, n.FetchResults = function(t, i) { var e = n.FetchResultsSet(),
			u = e[i.CacheKey],
			f = [],
			r; if (u != null)
			for (r = 0; r < u.length; r++) { var o = t.trim().toLowerCase() == u[r].value.Text.toLowerCase(),
				s = t.trim() == "",
				h = u[r].value.Text.toLowerCase().indexOf(t.toLowerCase()) > -1;
				(s || h) && !o && f.push(u[r]) }
			return f }, n.StoreEntry = function(t, i, r) { var e = n.FetchResultsSet(),
			u = e[t] || [],
			o, f; for (i.Text = i.Text.toLowerCase(), o = !1, f = 0; f < u.length; f++)
			if (i.Text.toLowerCase() == u[f].value.Text.toLowerCase()) { o = !0; break } o == !1 && (u.length >= r && (Logging.Debug("Deleting oldest result: " + u[u.length - 1].value.Text, LogType.AutoComplete), u.pop()), u.unshift(new StorageItems.TimestampedItem(i)), e[t] = u, n.Cache.set(n.CacheKey, e)) }, n.DisplaySuggestions = function(t, i) { for (var r, f, u; i.ResultsDiv.firstChild;) i.ResultsDiv.removeChild(i.ResultsDiv.firstChild); for (r = 0; r < t.length; r++) f = n.CreatePredictionElement(t[r].value, i), i.ResultsDiv.appendChild(f);
			u = $("#" + i.ResultsDiv.getAttribute("id"));
			u.hasClass("hidden") && u.removeClass("hidden") }, n.CreatePredictionElement = function(t, i) { var o = this,
			r, f, e, u; return r = document.createElement("a"), r.className = "autoCompleteItem", f = document.createAttribute("tabindex"), f.value = "0", r.setAttributeNode(f), e = document.createElement("span"), e.className = "autoCompleteIcon", u = document.createElement("span"), u.className = "autoCompleteText", u.innerText = t.Text, r.appendChild(e), r.appendChild(u), r.onclick = function() { $("#" + i.InputId).val(t.Text);
			$("#" + i.InputId).focus();
			i.ResultsDiv.classList.add("hidden");
			i.ItemClickedHandler != null && i.ItemClickedHandler() }, $(".autoCompleteItem").unbind("blur").blur(function() { n.BlurEvent(i, $("#" + i.InputId)) }), $(r).unbind("keydown").keydown(function(n) { var t; return (console.log("keydown"), n.keyCode == 13) ? ($(this).click(), !1) : n.keyCode == 40 && n.ctrlKey == !1 && n.shiftKey == !1 ? (t = $(i.ResultsDiv).find(".autoCompleteItem").index($(this)), $(i.ResultsDiv).find(".autoCompleteItem").length == t + 1 ? $(i.ResultsDiv).find(".autoCompleteItem")[0].focus() : (console.log("down-next: " + (t + 1)), $(i.ResultsDiv).find(".autoCompleteItem")[t + 1].focus()), n.preventDefault(), !1) : n.keyCode == 38 && n.ctrlKey == !1 && n.shiftKey == !1 ? (t = $(i.ResultsDiv).find(".autoCompleteItem").index($(this)), t == 0 ? $("#" + i.InputId).focus() : $(i.ResultsDiv).find(".autoCompleteItem")[t - 1].focus(), n.preventDefault(), !1) : void 0 }), r }, n }(),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	Binding = function() {
		function n() {} return n.setControlVal = function(n, t) { var r = !1,
			u, i, f, e; return n.prop("type") == "select-multiple" || n.prop("type") == "select-one" ? ApplicationState.IsMobileDevice == !1 ? n.val() != t && (r = !0, DropDown.setSelect2Value(n, t)) : (r = !0, n.val(t.split(",")).change()) : n.prop("type") == "checkbox" ? (n.prop("checked") && t != "1" || n.prop("checked") == !1 && t != "0") && (r = !0, n.prop("checked", t == "1").change()) : n.prop("tagName").toLowerCase() == "table" ? (r = !0, n.find("[value='" + t + "']").prop("checked", !0)) : (n.attr("data-type") || "") == "dayssince" && t != "" ? (u = new Date, i = new Date(u.getFullYear(), u.getMonth(), u.getDate() + 1), i.setDate(i.getDate() - Number(t)), r = !0, ApplicationState.IsMobileDevice ? n.val(i.getFullYear() + "-" + ("0" + (i.getMonth() + 1)).slice(-2) + "-" + ("0" + i.getDate()).slice(-2)) : n.val(("0" + (i.getMonth() + 1)).slice(-2) + "/" + ("0" + i.getDate()).slice(-2) + "/" + i.getFullYear())) : n.attr("data-valueclass") != null ? (f = n.attr("data-valueclass"), n.children().removeClass(f), n.children('[data-value="' + t + '"]').addClass(f)) : (e = getValue(n), e != t && (r = !0, n.val(t).change())), r }, n.setControlValsFromHashResetOthers = function(t) { var s, r, u, i, f, e, o, h; for (Logging.Debug("Binding hash values to controls", LogType.Binding), s = URLHash.getObject(), t == null && (t = $("body")), r = 0; r < t.length; r++)
			for (u = $(t[r]).find("[data-hashkey]").addBack("[data-hashkey]"), i = 0; i < u.length; i++) f = $(u[i]), e = f.attr("data-hashkey"), n.writeConstraintPasses(f, ["visible"]) && (o = f.attr("data-default") || "", s[e] != null && (o = s[e]), h = n.setControlVal($(u[i]), o), h && Logging.Debug("Write '" + o + "' to controls with hashkey of '" + e + "'", LogType.Binding)) }, n.setControlValsFromHash = function(t) { var f, i, r, u, e, o;
			t === void 0 && (t = null);
			Logging.Debug("Binding hash values to controls", LogType.Binding);
			f = URLHash.getObject(); for (i in f)
				if (f.hasOwnProperty(i))
					for (r = void 0, r = t != null ? t.find("[data-hashkey='" + i + "']") : $("[data-hashkey='" + i + "']"), u = 0; u < r.length; u++) n.writeConstraintPasses($(r[u]), ["visible"]) && (e = f[i], o = n.setControlVal($(r[u]), e), o && Logging.Debug("Write '" + e + "' to controls with hashkey of '" + i + "'", LogType.Binding)) }, n.writeConstraintPasses = function(n, t) { var u, r, i; for (t === void 0 && (t = []), u = !0, r = WriteConstraint.getConstraints(n, t), i = 0; i < r.length; i++)
			if (r[i].passes() == !1) { Logging.Debug("Write constaint failed: " + r[i].toString(), LogType.Binding);
				u = !1; break } return u }, n.readConstraintPasses = function(n, t) { var r, u, i; for (t === void 0 && (t = []), r = !0, u = ReadConstraint.getConstraints(n, t), i = 0; i < t.length; i++)
			if (u[i].passes() == !1) { Logging.Debug("Read constaint failed: " + u[i].toString(), LogType.Binding);
				r = !1; break } return r }, n.setHashFromControls = function(t, i, r) { var u, e, o, f; for (i === void 0 && (i = null), r === void 0 && (r = !0), Logging.Debug("Updating hash via controls", LogType.Binding), u = 0, e = t; u < e.length; u++) o = e[u], $("#" + o).find("[data-hashkey]").each(function(t, i) { var r = $(i),
			s = (r.attr("data-hash-writeonly") || "").toLowerCase() == "true",
			u, f, e, o;
			s == !1 && $(i).is(":visible") && (u = "", f = r.attr("data-hashkey"), r.prop("type") == "checkbox" ? $(i).is(":checked") && (u = "1") : u = r.prop("type") == "select-multiple" ? (r.val() || []).join(",") : r.val(), e = (u || "") != "", o = URLHash.get(f, "") != "", u == " " && (u = ""), e && n.readConstraintPasses(r) ? URLHash.setWithNoBackButton(f, u) : o && URLHash.remove(f, !0)) }); if (i != null)
			for (f in i) i.hasOwnProperty(f) && URLHash.setWithNoBackButton(f, i[f]);
			history.replaceState({ id: MasterPages.Phone.smoothStateElementID }, document.title, window.location.href) }, n }(),
	Constraint = function() {
		function n(n, t) { this.element = null;
			this.parameter = "";
			this.value = ""; var i = t.split("=");
			this.parameter = i[0];
			this.value = i[1];
			this.element = n } return n.prototype.toString = function() { return this.parameter + "=" + this.value + " (" + this.element.attr("id") + ")" }, n.removeIgnoredConstraints = function(n, t) { var r, i; for (t === void 0 && (t = []), r = [], i = 0; i < n.length; i++) Utilities.indexOfValue(n[i].parameter, t) == -1 && r.push(n[i]); return r }, n }(),
	WriteConstraint = function(n) {
		function t() { return n !== null && n.apply(this, arguments) || this } return __extends(t, n), t.prototype.passes = function() { var n = !0,
			t, i; if (this.parameter.toLowerCase() == "visible") n = this.element.is(":visible");
		else if (t = (location.hash || "").toLowerCase().indexOf(this.parameter.toLowerCase()) > -1, i = URLHash.get(this.parameter, "").toLowerCase(), this.value.toLowerCase() == "null") n = t == !1;
		else if (t == !1) n = !1;
		else if (i != this.value.toLowerCase()) return !1; return n == !1 && Logging.Debug("Write-Constraint failed '" + this.parameter + "=" + this.value + "'", LogType.Binding), n }, t.createCollection = function(n, i) { for (var f = [], u = i.split(","), r = 0; r < u.length; r++) u[r].trim() != "" && f.push(new t(n, u[r])); return f }, t.getConstraints = function(n, i) { i === void 0 && (i = []); var r = n.attr("data-binding-constraint-write") || n.attr("data-constraint-write") || "",
			u = t.createCollection(n, r); return Constraint.removeIgnoredConstraints(u, i) }, t }(Constraint),
	ReadConstraint = function(n) {
		function t() { return n !== null && n.apply(this, arguments) || this } return __extends(t, n), t.prototype.passes = function() { var n = !0; if (this.parameter.toLowerCase() == "visible") n = this.element.is(":visible");
		else { var t = (location.hash || "").toLowerCase().indexOf(this.parameter.toLowerCase()) > -1,
			r = URLHash.get(this.parameter, "").toLowerCase(),
			i = getValue($("#" + this.parameter)).toString().toLowerCase();
			this.value.toLowerCase() == "null" ? n = t == !1 : t == !1 ? n = !1 : t && r != i ? n = !1 : $("#" + this.parameter).length > 0 && i != this.value.toLowerCase() && (n = !1) } return n == !1 && Logging.Debug("Read-Constraint failed '" + this.parameter + "=" + this.value + "'", LogType.Binding), n }, t.getConstraints = function(n, i) { i === void 0 && (i = []); var r = n.attr("data-binding-constraint-read") || n.attr("data-constraint-read") || "",
			u = t.createCollection(n, r); return Constraint.removeIgnoredConstraints(u, i) }, t.createCollection = function(n, i) { for (var f = [], u = i.split(","), r = 0; r < u.length; r++) u[r].trim() != "" && f.push(new t(n, u[r])); return f }, t }(Constraint),
	Caching;
(function(n) { var r = function() {
		function n(n) { n === void 0 && (n = "localStorageCache");
			this.keyPrefix = "";
			this.keyPrefix = n } return n.prototype.get = function(n) { return LocalStorage.getObject(n) }, n.prototype.set = function(n, t) { LocalStorage.saveObject(n, t) }, n.prototype.remove = function(n) { LocalStorage.removeObject(n) }, n.prototype.clear = function() { for (var t = [], n = 0; n < localStorage.length; n++) localStorage.key(n).indexOf(this.keyPrefix) == 0 && t.push(localStorage.key(n)); for (n = 0; n < t.length; n++) LocalStorage.removeObject(t[n]) }, n }(),
	t, i;
	n.LocalStorageCache = r;
	t = function() {
		function n(n) { n === void 0 && (n = "sessionStorageCache");
			this.keyPrefix = "";
			this.keyPrefix = n } return n.prototype.get = function(n) { return SessionStorage.getObject(n) }, n.prototype.set = function(n, t) { SessionStorage.saveObject(n, t) }, n.prototype.remove = function(n) { SessionStorage.removeObject(n) }, n.prototype.clear = function() { for (var t = [], n = 0; n < sessionStorage.length; n++) sessionStorage.key(n).indexOf(this.keyPrefix) == 0 && t.push(sessionStorage.key(n)); for (n = 0; n < t.length; n++) SessionStorage.removeObject(t[n]) }, n }();
	n.SessionStorageCache = t;
	i = function() {
		function n() { this.values = {} } return n.prototype.get = function(n) { return this.values[n] || "" }, n.prototype.set = function(n, t) { return this.values[n] = t }, n.prototype.remove = function(n) { delete this.values[n] }, n.prototype.clear = function() { this.values = {} }, n }();
	n.MemoryCache = i })(Caching || (Caching = {}));
var Compare = function() {
		function n(n, t) { this.id = n;
			this.appMode = t } return n.prototype.exists = function() { return ApplicationState.UserIsSignedIn ? Cookie.CPCompares.containsValue(this.toString()) : Cookie.Compares.containsValue(this.toString()) }, n.prototype.toString = function() { return this.id + "_" + this.appMode }, n.prototype.save = function() { var n = this.toString();
			ApplicationState.UserIsSignedIn ? Cookie.CPCompares.addValue(n) : Cookie.Compares.addValue(n) }, n.prototype.delete = function() { ApplicationState.UserIsSignedIn ? Cookie.CPCompares.removeValue(this.toString()) : Cookie.Compares.removeValue(this.toString()) }, n.FromString = function(t) { var i = new n,
		r = t.split("_"); return i.id = r[0], i.appMode = Number(r[1]), i }, n.deleteAll = function(t) { for (var r = n.getAll(t), i = 0; i < r.length; i++) r[i].delete();
			Gigya.saveConsumerCompares() }, n.getAll = function(t, i) { var o = [],
		r, f, u, e; if (r = ApplicationState.UserIsSignedIn && i != UserType.Guest ? Cookie.CPCompares.get() : Cookie.Compares.get(), r && r != null && r != "null")
			for (f = r.split("~"), u = 0; u < f.length; u++) f[u] != "" && (e = n.FromString(f[u]), e.appMode == (t || e.appMode) && o.push(e)); return o }, n.exists = function(t, i) { for (var u = n.getAll(i), r = 0; r < u.length; r++)
			if (u[r].id == t) return !0; return !1 }, n.removeCompareById = function(t) { for (var r = n.getAll(ApplicationState.CurrentMode), i = 0; i < r.length; i++) r[i].id == t && r[i].delete() }, n.refreshIcons = function(t) { t.find(".compareIcon").each(function() { var t = $(this).attr("data-value");
			n.exists(t, ApplicationState.CurrentMode) ? $(this).find("img").attr("src", n.selectedIconURL) : $(this).find("img").attr("src", n.unSelectedIconURL) }) }, n.Add = function(t, i, r, u) { var f = new n(t, i || ApplicationState.CurrentMode);
			f.exists() ? (f.delete(), $('.compareIcon[data-value="' + t + '"] img').each(function() { $(this).removeClass("bounceIn");
				$(this).addClass("bounceOut");
				$(this).attr("src", n.unSelectedIconURL);
				$(this).attr("alt", Translation.get("AddToCompare")) })) : n.getAll(ApplicationState.CurrentMode).length >= ApplicationConfig.CompareLimit ? showMessage(Translation.get("CompareLimit")) : (f.save(), $('.compareIcon[data-value="' + t + '"] img').each(function() { $(this).removeClass("bounceOut");
				$(this).addClass("bounceIn");
				$(this).attr("src", n.selectedIconURL);
				$(this).attr("alt", Translation.get("RemoveFromCompare")) }), Analytics.log(t, "compare"));
			(u != !1 || u == null) && Gigya.saveConsumerCompares() }, n.selectedIconURL = "/wp-content/plugins/adk_feed/assets/images/compare.svg", n.unSelectedIconURL = "/wp-content/plugins/adk_feed/assets/images/compare-empty.svg", n }(),
	EmailAFriendControlArgs = function() {
		function n() { this.listingId = "";
			this.listingIds = "";
			this.referenceNum = "";
			this.pageName = "";
			this.pageURL = "";
			this.mediaSrc = "";
			this.utmCampaign = "";
			this.utmMedium = "";
			this.sharePage = "" } return n }(),
	EmailRealtorControlArgs = function() {
		function n() { this.listingId = "";
			this.organizationId = "";
			this.contactId = "";
			this.referenceNumber = "";
			this.individualId = "" } return n }(),
	ListingCardCarouselArgs = function() {
		function n() { this.criteria = {} } return n }(),
	SmallListingCardListArgs = function() {
		function n() { this.criteria = {} } return n }(),
	DemographicsArgs = function() {
		function n() { this.Latitude = "";
			this.Longitude = "";
			this.ProvinceCode = "";
			this.PropertyTypeId = "";
			this.DisseminationArea = "" } return n }(),
	CalculatorArgs = function() {
		function n() { this.Price = "";
			this.City = "";
			this.ProvinceCode = "" } return n }(),
	NearbyListingsArgs = function() {
		function n() { this.latitude = "";
			this.longitude = "";
			this.numberOfListings = "";
			this.startingRadius = "1500";
			this.appMode = "1" } return n }(),
	ListingsCarouselArgs = function() {
		function n() { this.latitude = "";
			this.longitude = "";
			this.organizationId = "";
			this.individualId = "";
			this.numberOfListings = "";
			this.propertyTypeGroupID = "";
			this.showBullets = !0;
			this.randomizeResults = !1;
			this.radius = "1500" } return n }(),
	RealtorCardCarouselArgs = function() {
		function n() { this.organizationId = null;
			this.ShowBullets = !0;
			this.ContinuousSlides = !1 } return n }(),
	OfficeSearchResultsControlArgs = function() {
		function n() { this.name = "";
			this.address = "";
			this.city = "";
			this.postalCode = "";
			this.provinceIDs = null;
			this.organizationTypeIDs = null;
			this.sortBy = null;
			this.sortOrder = "";
			this.recordsPerPage = null;
			this.maxRecords = null;
			this.currentPage = null;
			this.organizationId = null } return n }(),
	DisambiguationBoxControlArgs = function() {
		function n() { this.area = "" } return n }(),
	RealtorSearchResultsControlArgs = function() {
		function n() { this.firstName = "";
			this.lastName = "";
			this.addressLine1 = "";
			this.city = "";
			this.companyName = "";
			this.designations = null;
			this.languages = null;
			this.postalCode = "";
			this.provinceIds = null;
			this.specialties = null;
			this.isCCCMember = null;
			this.currentPage = null;
			this.sortBy = 3;
			this.sortOrder = "A";
			this.organizationId = "";
			this.recordsPerPage = 20;
			this.maxRecords = null;
			this.showOfficeDetails = null } return n }(),
	SmallListingCardCarouselArgs = function() {
		function n() { this.criteria = {};
			this.totalResults = "" } return n }(),
	ScreenMoreInfoControlArgs = function() {
		function n() { this.firstName = "";
			this.lastName = "";
			this.email = "" } return n }(),
	ScreenResendEmailVerificationControlArgs = function() {
		function n() { this.UID = "";
			this.regToken = "";
			this.email = "" } return n }(),
	TabHighlighterArgs = function() {
		function n() {} return n }(),
	ScreenGenericControlArgs = function() {
		function n() {} return n }(),
	LatestPostControlArgs = function() {
		function n() {} return n }(),
	ScreenChangePasswordArgs = function() {
		function n() { this.pwrtToken = "" } return n }(),
	ScreenChangeAccountPasswordArgs = function() {
		function n() {} return n }(),
	ScreenUnsubscribeConfirmationArgs = function() {
		function n() { this.showComm = !1;
			this.showNotify = !1;
			this.hdn_DES = "";
			this.redirectToIndex = !0 } return n }(),
	ConfirmationDialogArgs = function() {
		function n() { this.ID = "";
			this.TitleTextID = "";
			this.BodyTextID = "";
			this.ButtonPositiveID = "";
			this.ButtonNegativeID = "";
			this.ButtonPositiveTextID = "";
			this.ButtonNegativeTextID = "";
			this.ButtonPositiveOnClick = "";
			this.ButtonNegativeOnClick = "";
			this.CloseOnClick = "";
			this.ButtonNegativeStyle = "";
			this.BeforeOpen = null;
			this.BeforeClose = null;
			this.AfterOpen = null;
			this.AfterClose = null;
			this.OpenTrigger = "";
			this.CloseTrigger = "" } return n }(),
	ConfirmationDialog2Args = function() {
		function n() {} return n }(),
	ModalContentArgs = function() {
		function n() {} return n }(),
	ControlFetcherArgs = function() {
		function n(n, t, i) { this.cancelExistingRequestsToOutputId = !0;
			this.fetchDelayInMS = 0;
			this.canRetrieveFromCache = !0;
			this.cacheResult = !0;
			this.removeFromCacheAfterFetch = !1;
			this.scrollToResults = !1;
			this.scrollToPadding = 10;
			this.showLoadingAnimation = !0;
			this.showLoadingSpinner = !1;
			this.contentWapperClass = "loadingIn";
			this.idToOutputResults = "";
			this.handleResults = null;
			this.requestContentType = "application/x-www-form-urlencoded; charset=UTF-8";
			this.postCallHandler = null;
			this.timeoutHandler = function() {
				(this.showLoadingAnimation || this.showLoadingSpinner) && $("#" + this.idToOutputResults).html("") };
			this.errorHandler = function() { showMessage("Request failed");
				(this.showLoadingAnimation || this.showLoadingSpinner) && $("#" + this.idToOutputResults).html("") };
			this.outputWrapperId = n;
			this.idToOutputResults = t;
			this.handleResults = i } return n }(),
	ControlFetcher = function() {
		function n() {} return Object.defineProperty(n, "cache", { get: function() { return ApplicationState.IsMobileDevice ? (n.mobileCache == null && (n.mobileCache = new Caching.MemoryCache), n.mobileCache) : (n.desktopCache == null && (n.desktopCache = new Caching.SessionStorageCache("ControlFetcher")), n.desktopCache) }, enumerable: !0, configurable: !0 }), n.getValueFromCache = function(t) { var i = null; if (i = n.cache.get(t), (i || "") != "") { var r = i,
			u = new Date(Number(r.version)),
			f = (new Date).valueOf() - u.valueOf(),
			e = new Date(f);
			r != null && e.getMinutes() > n.maxAgeInMinutes && (Logging.Debug("Removing value (" + t + ") from cache (expires after " + n.maxAgeInMinutes.toString() + " minutes)", LogType.ControlFetcher), n.cache.remove(t), i = null) } return (i || "") != "" ? (i = i.value, Logging.Debug("Item fetched from cache: " + i.toString(), LogType.ControlFetcher)) : Logging.Debug("Cached version not available", LogType.ControlFetcher), i }, n.setUILoadingState = function(n) { n.idToOutputResults != "" && ($("#" + n.idToOutputResults).addClass("loadingOut"), $("#" + n.idToOutputResults).removeClass(n.contentWapperClass), n.showLoadingSpinner ? $("#" + n.idToOutputResults).html('<div class="screen-placeholder"><div class="sk-spinning-circle" style="text-align:center;margin: 0 auto;margin-top:150px;"><\/div><\/div>') : n.showLoadingAnimation && (ApplicationState.CurrentMode == ApplicationModes.Residential ? $("#" + n.idToOutputResults).html('<div class="fadeElementIn" style="text-align:center;width: 50%; margin: 0 auto;"><img class="spinner" style=" width: 25vw; max-width: 150px; margin: 40px auto; display: inline-block;" src="/wp-content/plugins/adk_feed/assets/images/house-gray.svg" /><\/div>') : $("#" + n.idToOutputResults).html('<div class="fadeElementIn" style="text-align:center;width: 50%; margin: 0 auto;"><img class="spinner" style=" width: 25vw; max-width: 150px; margin: 40px auto; display: inline-block;" src="/wp-content/plugins/adk_feed/assets/images/commercial.svg" /><\/div>'))) }, n.fetchControl = function(t, i, r) { var u = null,
			f = null,
			e = !1,
			s, o;
			Logging.Debug("Fetching " + t, LogType.ControlFetcher);
			u = "ControlFetcher_" + t + "_" + ApplicationState.CultureID + "_" + JSON.stringify(i);
			r.canRetrieveFromCache && (f = n.getValueFromCache(u), e = (f || "") != "");
			e == !1 && n.setUILoadingState(r);
			s = n.controlFetchingURL + "/" + t;
			o = function(t) { var f, i = "";
				t.d.ExceptionDetails !== undefined && t.d.HTML !== undefined ? (f = t.d.ExceptionDetails != "NoResults", i = t.d.HTML) : (f = t.d != "NoResults", i = t.d);
				f ? (r.cacheResult && e == !1 && n.cache.set(u, new StorageItems.VersionedItem((new Date).getTime().toString(), t)), r.idToOutputResults != "" && (e ? $("#" + r.idToOutputResults).html(i) : ($("#" + r.idToOutputResults).removeClass("loadingOut"), $("#" + r.idToOutputResults).addClass(r.contentWapperClass), $("#" + r.idToOutputResults).html(i), r.scrollToResults && setTimeout(function() { ScrollToElement($("#" + r.idToOutputResults), r.scrollToPadding * -1) }, 400)))) : r.idToOutputResults != "" && $("#" + r.idToOutputResults).html("");
				r.idToOutputResults != "" && updateLoadedContent($("#" + r.idToOutputResults));
				r.removeFromCacheAfterFetch && n.cache.remove(u);
				r.postCallHandler != null && r.postCallHandler(t, r.postCallArgs);
				r.handleResults != null && r.handleResults(t.d || t) };
			(f || "") != "" ? o(f): window.setTimeout(function() { var n = new AjaxCallArgs(o);
				n.contentType = r.requestContentType;
				n.errorHandler = r.errorHandler;
				n.timeoutHandler = r.timeoutHandler;
				n.cancelExistingRequestsInQueue = !0;
				r.cancelExistingRequestsToOutputId && (n.queueName = r.idToOutputResults);
				AjaxEngine.POST(s, i, n) }, r.fetchDelayInMS) }, n.fetchCalculator = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetCalculator", JSON.stringify(i), t) }, n.fetchTabHighlighter = function(t) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetTabHighlighter", JSON.stringify(new TabHighlighterArgs), t) }, n.fetchDemographics = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetDemographics", JSON.stringify(i), t) }, n.fetchDisambiguationBox = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetDisambiguationBox", JSON.stringify(i), t) }, n.fetchRealtorResults = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetRealtorResults", JSON.stringify(i), t) }, n.fetchOfficeResults = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetOfficeResults", JSON.stringify(i), t) }, n.fetchNearbyListings = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetNearbyListings", JSON.stringify(i), t) }, n.fetchListingCardCarousel = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetListingsCarousel", JSON.stringify(i), t) }, n.fetchRealtorCardCarousel = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetRealtorCardCarousel", JSON.stringify(i), t) }, n.fetchScreenMoreInfo = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenMoreInfo", JSON.stringify(i), t) }, n.fetchScreenResendEmailVerification = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenResendEmailVerification", JSON.stringify(i), t) }, n.fetchScreenMoreAboutYou = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenMoreAboutYou", JSON.stringify(i), t) }, n.fetchScreenCheckYourEmail = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenCheckYourEmail", JSON.stringify(i), t) }, n.fetchScreenRevisedTerms = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenRevisedTerms", JSON.stringify(i), t) }, n.fetchScreenSocialTerms = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenSocialTerms", JSON.stringify(i), t) }, n.fetchScreenLinkAccounts = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenLinkAccounts", JSON.stringify(i), t) }, n.fetchConfirmationDialog = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetConfirmationDialog", JSON.stringify(i), t) }, n.fetchScreenForgotPassword = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenForgotPassword", JSON.stringify(i), t) }, n.fetchScreenChangePassword = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenChangePassword", JSON.stringify(i), t) }, n.fetchScreenChangeAccountPassword = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenChangeAccountPassword", JSON.stringify(i), t) }, n.fetchScreenChangeAccountEmail = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenChangeAccountEmail", JSON.stringify(i), t) }, n.fetchScreenUnsubscribeConfirmation = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenUnsubscribeConfirmation", JSON.stringify(i), t) }, n.fetchSmallListingCardCarousel = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetSmallListingCardCarousel", JSON.stringify(i), t) }, n.fetchSmallListingCardList = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetSmallListingCardList", JSON.stringify(i), t) }, n.fetchTermsOfUse = function(t) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetTermsOfUse", null, t) }, n.fetchScreenSignIn = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenSignIn", JSON.stringify(i), t) }, n.fetchSaveMoreFavs = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetScreenSaveMoreFavs", JSON.stringify(i), t) }, n.fetchListingCardsCarousel = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetListingCardCarousel", JSON.stringify(i), t) }, n.fetchEmailRealtor = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetEmailRealtorForm", JSON.stringify(i), t) }, n.fetchEmailAFriend = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetEmailAFriendForm", JSON.stringify(i), t) }, n.fetchLatestPostUC = function(t, i) { t.requestContentType = "application/json; charset=UTF-8";
			n.fetchControl("GetLatestPostUC", JSON.stringify(i), t) }, n.NoResultsResponse = "NoResults", n.controlFetchingURL = "/Services/ControlFetcher.asmx", n.maxAgeInMinutes = 5, n }(),
	ControlFetcherJS = function() {
		function n() {} return n.wrapElement = function(n, t) { var i = ""; return n.each(function() { i += $(this).wrap("<div><\/div>")[0].outerHTML || "" }), $("<div id='" + t + "' class='JSControlFetcherWrapper'>" + i + "<\/div>") }, n.fetch = function(t, i, r) { t.requestContentType = "application/json; charset=UTF-8"; var u = function(r) { var f = $(r.ControlHTML),
			e = r.TSControlNameSpace,
			u, o, s; if (f = n.wrapElement(f, t.outputWrapperId), u = TemplateBinding.render(f, i), u = TemplateBinding.aggregateScriptContents(u), t.postCallHandler(u), (e || "") == "") throw "Control is missing TSClass attribute on it's class - can't create TS class intance without it";
			o = Utilities.stringToFunction(e);
			s = new o(i, t.outputWrapperId) };
			r(u) }, n.fetchConfirmationDialog2 = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchConfirmationDialog2) }, n.fetchSmallListingCardsCarousel = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchSmallListingCardsCarousel) }, n.fetchListingCardsCarousel = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchListingCardsCarousel) }, n.fetchRealtorCardsCarousel = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchRealtorCardsCarousel) }, n.fetchSmallListingCard = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchSmallListingCard) }, n.fetchListingCard = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchListingCard) }, n.fetchSavedSearch = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchSavedSearch) }, n.fetchSavedSearchForAccount = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchSavedSearchForAccount) }, n.fetchRealtorCard = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchRealtorCard) }, n.fetchOfficeCard = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchOfficeCard) }, n.fetchListingCards = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchListingCards) }, n.fetchSmallListingCards = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchSmallListingCards) }, n.fetchPagination = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchPagination) }, n.fetchModalContent = function(t, i) { n.fetch(t, i, TemplateFetcher.fetchModalContent) }, n }(),
	Cookie = function() {
		function n(n, t) { this.name = n;
			this.expiryInDays = t } return n.prototype.save = function(n, t) {
			(t || this.expiryInDays) && (t || this.expiryInDays) != 0 ? $.cookie(this.name, n, { path: "/", expires: Number(t || this.expiryInDays) }) : $.cookie(this.name, n, { path: "/" }) }, n.prototype.saveObject = function(n, t) { if ((n || "") != "") { var i = JSON.stringify(n);
			this.save(i, t) } }, n.prototype.delete = function() { $.cookie(this.name, null, { path: "/" });
			$.removeCookie(this.name, { path: "/" }) }, n.prototype.get = function(n) { return n === void 0 && (n = ""), $.cookie(this.name) || n }, n.prototype.getObject = function() { var n = this.value; return (n || "") != "" ? JSON.parse(decodeURIComponent($.cookie(this.name))) : {} }, n.prototype.getArray = function() { var r = this.get(),
			t, i, n; if (r) { for (t = r.split("~"), i = [], n = 0; n < t.length; n++) t[n] != "" && i.push(t[n]); return i } return [] }, n.prototype.removeValueByIndex = function(n) { var i = this.getArray(),
			t;
			i.splice(n, 1);
			t = i.join("~");
			t != "" && (t += "~");
			this.save(t) }, n.prototype.addValue = function(n) { var t = this.get("");
			t += n + "~";
			this.save(t) }, n.prototype.prependValue = function(n) { var t = this.value || "";
			t = n + "~" + t;
			this.save(t) }, n.prototype.removeValue = function(n) { for (var r = this.getArray(), u = [], i, t = 0; t < r.length; t++) n != r[t] && u.push(r[t]);
			i = u.join("~");
			i != "" && (i += "~");
			this.save(i) }, n.prototype.containsValue = function(n) { for (var i = this.getArray(), t = 0; t < i.length; t++)
			if (n == i[t]) return !0; return !1 }, n.IsEnabled = function() { return n.GUID.get("") != "" }, n.UID = new n("uid", 365), n.CRM_UID = new n("crm_uid", 365), n.Compares = new n("realtor_compare", 365), n.CPCompares = new n("realtor_consumer_compare", 365), n.Favourites = new n("realtor_favorites", 365), n.PreferredMeasurementUnits = new n("PreferredMeasurementUnits", 365), n.Language = new n("Language", 365), n.GUID = new n("GUID", 365), n.RefreshConsumerProfile = new n("refresh_consumer", 0), n.HasNotifications = new n("HasNotifications", 365), n.InvalidLoginCount = new n("invalidLoginCount", 1), n.LoginCaptchaRequired = new n("login_captcha_required", 1), n.SocialSignin = new n("consumer_social_signin", 365), n.ProviderType = new n("providerType", 365), n.FWDAccountURL = new n("fwdaccounturl", 365), n.FirstMapViewChange = new n("consumer_map_view_change", 365), n.ApplicationMode = new n("app_mode", 365), n.MapSidebarVisible = new n("mapSideBarVis", 365), n.FavouriteCount = new n("FavCount", 365), n.SavedSearchCount = new n("SSCount", 365), n.NotificationCount = new n("NotifCount", 365), n.RecentlyViewedListingsCount = new n("ViewedListings", 365), n.PromoBannerShown = new n("PromoBannerShown", 365), n.TermsOfUse = new n("TermsOfUseAgreement", 30), n.TargetPage = new n("TargetPage"), n }(),
	Core;
(function(n) {
	function i(n, t) { navigator.geolocation ? navigator.geolocation.getCurrentPosition(n, function() { t() }, { maximumAge: 15e3 }) : t() }

	function r(n) { ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothState.load(n) : window.location.href == n ? location.reload() : window.location.href = n }

	function u(n) { if (ApplicationState.IsMobileDevice) { var i = t(n);
		i ? window.location.replace(n) : MasterPages.Phone.smoothState.loadWithAlter(n) } else window.location.href = n }

	function f() { return Cookie.TermsOfUse.get("") !== ApplicationConfig.TOSDate && ApplicationState.UserIsSignedIn == !1 }

	function t(n) { var t = window.location.href.indexOf("#") > -1 ? window.location.href.substring(0, window.location.href.indexOf("#")) : window.location.href,
		i = n.indexOf("#") > -1 ? n.substring(0, n.indexOf("#")) : n,
		r = window.location.href.indexOf("#") > -1 ? window.location.href.substring(window.location.href.indexOf("#") + 1) : "",
		u = n.indexOf("#") > -1 ? n.substring(n.indexOf("#") + 1) : ""; return Utilities.endsWith(t.toLowerCase(), i.toLowerCase()) && r.toLowerCase() != u.toLowerCase() ? !0 : !1 }

	function e(n) { var t = "",
		i; return n != undefined && (n.toLowerCase().indexOf(window.location.protocol) == -1 ? (i = "/" + ApplicationState.ApplicationModeString.toLowerCase() + "/", t = n.substring(0, i.length).toLowerCase() == i.toLowerCase() ? n : n.substring(0, 1) == "/" ? "/" + ApplicationState.ApplicationModeString + n : "/" + ApplicationState.ApplicationModeString + "/" + n) : t = n), t }

	function o(t, i, r, u, f, e, o) {
		var s, h, c, l;

		console.log( r, t.val() );
		return;

		if (u === void 0 && (u = !1), s = t.val(), s == "") {
			if (i == null && u == !1) {
				n.locateUser(
					function(i) {
						// n.PerformListingSearch(t, i, r, !1, null, null, o);
						console.log( t, i, r );
						return
					},
					function() {
						$("body").scrollTop(0);
						t.attr("data-tooltipid") == null && t.attr("data-tooltipid", "GeolocationDisabled");
						ToolTip.show(t);
						t.focus();
						o != null && $("#" + o).removeClass("loading");
						return
					}
				);
				return
			}

			// h = RouteHelper.getURL("map");
			// r != null ? n.GoToPage(h + "#" + $.param(r)) : n.GoToPage(h);
			return
		}

		c = function(t) {
			if (t.SubArea.length == 0)
				showMessage(Translation.get("NoResults")), o != null && $("#" + o).removeClass("loading");
			else {
				f != null && f();
				var i = RouteHelper.getURL("map");
				n.GoToPage(i + "#Area=" + Utilities.removeAccents(s) + "&" + $.param(r || {}))
			}
		};

		l = function(t) {
			var i, u;
			t.Results.length == 0 ? APIProxy.subAreaSearch( { Area: s }, c ) : t.Results.length == 1 ? (i = Utilities.ConvertModelessListingDetailsURL(t.Results[0].RelativeDetailsURL), e != null && e(), n.GoToPage(i)) : t.Results.length > 1 && (e != null && e(), u = RouteHelper.getURL("map"), n.GoToPage(u + "#ReferenceNumber=" + Utilities.removeAccents(s) + "&view=list&" + $.param(r || "")));
			o != null && $("#" + o).removeClass("loading")
		};

		s.trim().indexOf(" ") > -1 ? APIProxy.subAreaSearch({ Area: s }, c) : APIProxy.propertySearch({ ReferenceNumber: s, IncludeTombstones: "1", IncludePins: "1" }, l)
	}

	n.locateUser = i;
	n.redirectTo = r;
	n.GoToPage = u;
	n.UserNeedsToAcceptTOS = f;
	n.needToReloadPageOnHashChange = t;
	n.PrependCurrentMode = e;
	n.PerformListingSearch = o })(Core || (Core = {})),
	function(n) { n[n.Null = 0] = "Null";
		n[n.Search = 1] = "Search";
		n[n.Compare = 2] = "Compare";
		n[n.Favourite = 3] = "Favourite" }(ConsumerNotificationTypes || (ConsumerNotificationTypes = {})),
	function(n) { n[n.Modal = 0] = "Modal";
		n[n.NewPage = 1] = "NewPage";
		n[n.Redirect = 2] = "Redirect" }(ActionType || (ActionType = {})),
	function(n) { n[n.Featherlight = 0] = "Featherlight";
		n[n.LightboxMe = 1] = "LightboxMe" }(ModalDisplayTypes || (ModalDisplayTypes = {})),
	function(n) { n[n.Single = 0] = "Single";
		n[n.Cluster = 1] = "Cluster" }(InfoBoxTypes || (InfoBoxTypes = {})),
	function(n) { n[n.ListingLink = 0] = "ListingLink";
		n[n.FavouriteListings = 1] = "FavouriteListings";
		n[n.FindanOffice = 2] = "FindanOffice";
		n[n.TipsForBuyers = 3] = "TipsForBuyers";
		n[n.TipsForSellers = 4] = "TipsForSellers";
		n[n.CommercialResources = 5] = "CommercialResources";
		n[n.CommercialGlossary = 6] = "CommercialGlossary";
		n[n.CommercialServices = 7] = "CommercialServices";
		n[n.FindaRealtor = 8] = "FindaRealtor";
		n[n.Blog = 9] = "Blog";
		n[n.MtgCalculators = 10] = "MtgCalculators";
		n[n.RealtorDetails = 11] = "RealtorDetails";
		n[n.OfficeDetails = 12] = "OfficeDetails";
		n[n.CityLanding = 13] = "CityLanding";
		n[n.ProvincialLanding = 14] = "ProvincialLanding" }(Campaign || (Campaign = {})),
	function(n) { n[n.Top = 0] = "Top";
		n[n.Middle = 1] = "Middle";
		n[n.Bottom = 2] = "Bottom" }(InfoBoxVerticalLocations || (InfoBoxVerticalLocations = {})),
	function(n) { n[n.TopLeft = 0] = "TopLeft";
		n[n.TopRight = 1] = "TopRight";
		n[n.Left = 2] = "Left";
		n[n.Right = 3] = "Right";
		n[n.BottomLeft = 4] = "BottomLeft";
		n[n.BottomRight = 5] = "BottomRight" }(InfoBoxRelativePositions || (InfoBoxRelativePositions = {})),
	function(n) { n[n.fadeIn = 0] = "fadeIn";
		n[n.fadeInLeft = 1] = "fadeInLeft";
		n[n.fadeInRight = 2] = "fadeInRight";
		n[n.fadeInDown = 3] = "fadeInDown";
		n[n.fadeInUp = 4] = "fadeInUp";
		n[n.flipInX = 5] = "flipInX";
		n[n.flipInY = 6] = "flipInY";
		n[n.lightSpeedIn = 7] = "lightSpeedIn";
		n[n.rotateIn = 8] = "rotateIn";
		n[n.rotateInDownLeft = 9] = "rotateInDownLeft";
		n[n.rotateInDownRight = 10] = "rotateInDownRight";
		n[n.rotateInUpLeft = 11] = "rotateInUpLeft";
		n[n.rotateInUpRight = 12] = "rotateInUpRight";
		n[n.rollIn = 13] = "rollIn";
		n[n.zoomInDown = 14] = "zoomInDown";
		n[n.zoomInLeft = 15] = "zoomInLeft";
		n[n.zoomInRight = 16] = "zoomInRight";
		n[n.zoomInUp = 17] = "zoomInUp";
		n[n.bounceIn = 18] = "bounceIn";
		n[n.bounceInDown = 19] = "bounceInDown";
		n[n.bounceInLeft = 20] = "bounceInLeft";
		n[n.bounceInRight = 21] = "bounceInRight";
		n[n.bounceInUp = 22] = "bounceInUp";
		n[n.slideUp = 23] = "slideUp" }(EntryAnimations || (EntryAnimations = {})),
	function(n) { n[n.fadeOut = 0] = "fadeOut";
		n[n.fadeOutDown = 1] = "fadeOutDown";
		n[n.fadeOutLeft = 2] = "fadeOutLeft";
		n[n.fadeOutRight = 3] = "fadeOutRight";
		n[n.fadeOutUp = 4] = "fadeOutUp";
		n[n.flipOutX = 5] = "flipOutX";
		n[n.flipOutY = 6] = "flipOutY";
		n[n.lightSpeedOut = 7] = "lightSpeedOut";
		n[n.rotateOut = 8] = "rotateOut";
		n[n.rotateOutDownLeft = 9] = "rotateOutDownLeft";
		n[n.rotateOutDownRight = 10] = "rotateOutDownRight";
		n[n.rotateOutUpLeft = 11] = "rotateOutUpLeft";
		n[n.rotateOutUpRight = 12] = "rotateOutUpRight";
		n[n.rollOut = 13] = "rollOut";
		n[n.zoomOutDown = 14] = "zoomOutDown";
		n[n.zoomOutLeft = 15] = "zoomOutLeft";
		n[n.zoomOutRight = 16] = "zoomOutRight";
		n[n.zoomOutUp = 17] = "zoomOutUp";
		n[n.bounceOut = 18] = "bounceOut";
		n[n.bounceOutDown = 19] = "bounceOutDown";
		n[n.bounceOutLeft = 20] = "bounceOutLeft";
		n[n.bounceOutRight = 21] = "bounceOutRight";
		n[n.bounceOutUp = 22] = "bounceOutUp" }(ExitAnimations || (ExitAnimations = {})),
	function(n) { n[n.ease = 0] = "ease";
		n[n.linear = 1] = "linear";
		n[n.ease_in = 2] = "ease_in";
		n[n.ease_out = 3] = "ease_out";
		n[n.ease_in_out = 4] = "ease_in_out";
		n[n.step_start = 5] = "step_start";
		n[n.step_end = 6] = "step_end" }(TransitionTiming || (TransitionTiming = {})),
	function(n) { n[n.Imperial = 2] = "Imperial";
		n[n.Metric = 1] = "Metric" }(MeasurementUnits || (MeasurementUnits = {})),
	function(n) { n[n.Phone = 1] = "Phone";
		n[n.Tablet = 2] = "Tablet";
		n[n.Desktop = 3] = "Desktop" }(Device || (Device = {})),
	function(n) { n[n.Bar = 0] = "Bar";
		n[n.Column = 1] = "Column";
		n[n.Pie = 2] = "Pie" }(DemographicsChartTypes || (DemographicsChartTypes = {})),
	function(n) { n[n.Added = 1] = "Added";
		n[n.Removed = 2] = "Removed" }(FavouriteState || (FavouriteState = {})),
	function(n) {
		n[n.Agricultural = 302] = "Agricultural";
		n[n.Business = 306] = "Business";
		n[n.Industrial = 307] = "Industrial";
		n[n.Institutional = 309] = "Institutional";
		n[n.Land = 303] = "Land";
		n[n.MultiTenant = 310] = "MultiTenant";
		n[n.Office = 304] = "Office";
		n[n.Other = 311] = "Other";
		n[n.Parking = 308] = "Parking";
		n[n.Recreational = 301] = "Recreational";
		n[n.Retail = 305] = "Retail";
		n[n.SingleFamily = 300] = "SingleFamily";
		n[n.Hospitality = 312] = "Hospitality";
		n[n.VacantLand = "Vacant Land"] = "VacantLand";
	}(PropertyTypes || (PropertyTypes = {})),
	function(n) { n[n.Residential = 1] = "Residential";
		n[n.Commercial = 2] = "Commercial" }(ApplicationModes || (ApplicationModes = {})),
	function(n) { n[n.RealtorSearchResults = 0] = "RealtorSearchResults";
		n[n.OfficeSearchResults = 1] = "OfficeSearchResults";
		n[n.Template = 2] = "Template" }(LocalStorageItems || (LocalStorageItems = {})),
	function(n) { n[n.Telephone = 1] = "Telephone";
		n[n.Mobile = 2] = "Mobile";
		n[n.Pager = 3] = "Pager";
		n[n.Fax = 4] = "Fax";
		n[n.TollFree = 5] = "TollFree";
		n[n.SMS = 6] = "SMS";
		n[n.Unknown = 7] = "Unknown" }(PhoneType || (PhoneType = {})),
	function(n) {
		n[n.SaleOrRent = "For sale or rent"] = "SaleOrRent";
		n[n.Sale = "For sale"] = "Sale";
		n[n.Lease = "For lease"] = "Lease";
		n[n.Rent = "For rent"] = "Rent" }(TransactionType || (TransactionType = {})),
	function(n) {
		n[n.All = 0] = "All";
		n[n.Residential = 1] = "Residential";
		n[n.Recreational = 2] = "Recreational";
		n[n.Condo = 3] = "Condo";
		n[n.Agricultural = 4] = "Agricultural";
		n[n.Parking = 5] = "Parking";
		n[n.Land = 6] = "Land";
		n[n.Business = 7] = "Business";
		n[n.Multifamily = 8] = "Multifamily";
		n[n.Retail = 9] = "Retail";
		n[n.Industrial = 10] = "Industrial";
		n[n.Office = 11] = "Office";
		n[n.Hospitality = 12] = "Hospitality";
		n[n.Institutional = 13] = "Institutional";
		n[n.VacantLand = "Vacant Land"] = "VacantLand";
	}(SearchType || (SearchType = {})),
	function(n) { n[n.Website = 1] = "Website";
		n[n.Facebook = 2] = "Facebook";
		n[n.LinkedIn = 3] = "LinkedIn";
		n[n.Twitter = 4] = "Twitter" }(WebSiteType || (WebSiteType = {})),
	function(n) { n[n.Active = 1] = "Active";
		n[n.Closed = 2] = "Closed";
		n[n.Expired = 3] = "Expired";
		n[n.OffMarket = 4] = "OffMarket";
		n[n.Pending = 5] = "Pending";
		n[n.Cancelled = 6] = "Cancelled";
		n[n.Sold = 7] = "Sold";
		n[n.Unknown = 8] = "Unknown";
		n[n.Draft = 9] = "Draft";
		n[n.Tombstone = 10] = "Tombstone" }(ListingStatus || (ListingStatus = {})),
	function(n) { n[n.Query = 1] = "Query";
		n[n.Hash = 2] = "Hash" }(URLParamType || (URLParamType = {})),
	function(n) { n[n.Guest = 1] = "Guest";
		n[n.Consumer = 2] = "Consumer" }(UserType || (UserType = {})),
	function(n) { n[n.Phone = 0] = "Phone";
		n[n.Tablet = 1] = "Tablet";
		n[n.Desktop = 2] = "Desktop" }(DeviceTypes || (DeviceTypes = {})),
	function(n) { n[n.Ascending = 0] = "Ascending";
		n[n.Descending = 1] = "Descending" }(SortOrder || (SortOrder = {})),
	function(n) { n[n.None = -1] = "None";
		n[n.LocalStorage = 0] = "LocalStorage";
		n[n.SessionStorage = 1] = "SessionStorage";
		n[n.Memory = 2] = "Memory" }(CacheType || (CacheType = {})),
	function(n) { n[n.English = 1] = "English";
		n[n.French = 2] = "French" }(Language || (Language = {}));
var __extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	Events = function() {
		function n() {} return n.Fire = function(n, t) { Logging.Debug("Fired: " + n, LogType.Event); var i = new CustomEvent(n, { detail: t });
			window.dispatchEvent(i) }, n.ListenOnce = function(t, i, r) { r === void 0 && (r = n.ListenerScope.Page); var u = function(f) { i(f);
			n.RemoveListener(t, u, r) };
			n.Listen(t, u, r) }, n.RemoveListener = function(t, i, r) { var f, u; if (r === void 0 && (r = n.ListenerScope.Page), f = -1, n.Listeners != null) { for (window.removeEventListener(t, i), u = 0; u < n.Listeners.length; u++)
			if (n.Listeners[u].name == t && n.Listeners[u].handler == i && n.Listeners[u].scope == r) { f = u; break } f > -1 && n.Listeners.splice(f, 1) } }, n.Listen = function(t, i, r) { r === void 0 && (r = n.ListenerScope.Page);
			Logging.Debug("Adding listener for event: " + t + " with scope of " + n.ListenerScope[r].toLocaleString(), LogType.Event);
			window.addEventListener(t, i); var u = new EventListenerObj(t, i, r); return n.Listeners.push(u), u }, n.ClearListeners = function(t) { for (var i, r = 0; r < n.Listeners.length; r++) i = n.Listeners[r], i.scope == (t || i.scope) && (Logging.Debug("Removing listener for event: " + i.name + " with scope of " + n.ListenerScope[i.scope].toLocaleString(), LogType.Event), window.removeEventListener(i.name, i.handler)) }, n.Listeners = [], n }(),
	RealtorControlEventArgs = function(n) {
		function t(t, i) { var r = n.call(this) || this; return r.control = t, r.args = i, r } return __extends(t, n), t }(Object),
	RealtorControlEvent = function() {
		function n(n, t) { this.name = t + "_" + n.clientId } return n.prototype.Fire = function(n, t) { var i = new RealtorControlEventArgs(n, t);
			Events.Fire(this.name, i) }, n.prototype.Listen = function(n, t) { t === void 0 && (t = Events.ListenerScope.Page);
			Events.Listen(this.name, n, t) }, n }(),
	RealtorEvent = function() {
		function n(n) { this.name = n } return n.prototype.Fire = function(n) { Events.Fire(this.name, n) }, n.prototype.Listen = function(n, t) { t === void 0 && (t = Events.ListenerScope.Page);
			Events.Listen(this.name, n, t) }, n }(),
	Realtor7Event = function(n) {
		function t() { var t = n !== null && n.apply(this, arguments) || this; return t.detail = null, t } return __extends(t, n), t }(CustomEvent);
(function(n) { var t;
	(function(n) { n[n.Page = 1] = "Page";
		n[n.Global = 2] = "Global" })(t = n.ListenerScope || (n.ListenerScope = {})) })(Events || (Events = {}));
EventListenerObj = function() {
	function n(n, t, i) { this.name = n;
		this.handler = t;
		this.scope = i } return n }();
JSException = function() {
	function n(n, t, i, r, u) { this.ErrorMessage = "";
		this.Url = "";
		this.LineNumber = null;
		this.Column = null;
		this.ErrorObj = null;
		this.ErrorMessage = n;
		this.Url = t;
		this.LineNumber = i;
		this.Column = r;
		this.ErrorObj = u } return n.windowError = "windowError", n }();
window.onerror = function(n, t, i, r, u) { if (ApplicationConfig.IsDebugMode) { alert("Error: " + (n || "") + " Script: " + (t || "") + " Line: " + (i || "") + " Column: " + (r || "") + " StackTrace: " + (u || "")); throw u; } console.log("Error: " + (n || "") + " Script: " + (t || "") + " Line: " + (i || "") + " Column: " + (r || "") + " StackTrace: " + (u || ""));
	MasterPages != null && MasterPages.Phone != null && hideLoadingBar();
	Events.Fire(JSException.windowError, new JSException(n, t, i, r, u)) };
var FavouriteAddedArgs = function() {
		function n() {} return n }(),
	FavouriteRemovedArgs = function() {
		function n() {} return n }(),
	FavouriteRefreshArgs = function() {
		function n() {} return n }(),
	Favourite = function() {
		function n(n, t, i, r) { this.id = n;
			this.latitude = t;
			this.longitude = i;
			this.appMode = r } return n.prototype.toString = function() { return this.id + "_" + this.latitude + "_" + this.longitude + "_" + this.appMode }, n.fromObject = function(t) { var r = new n,
			i; for (i in t) r[i] = t[i]; return r }, n.fromString = function(t) { var i = new n,
			r = t.split("_"); return i.id = r[0], i.latitude = r[1], i.longitude = r[2], i.appMode = Number(r[3]), i }, n.prototype.save = function() { var t, i, u, r;
			ApplicationState.UserIsSignedIn ? (t = n.getAll(), t.push(this), LocalAccountStorage.FavouritesCP.saveObject(t)) : Cookie.Favourites.addValue(this.toString());
			i = n.getAll().length;
			u = { id: this.id, lat: Number(this.latitude), lon: Number(this.longitude), total: i };
			Events.Fire(n.favouriteAddedEvent, u);
			r = new FavouriteRefreshArgs;
			r.total = i;
			Events.Fire(n.favouritesRefreshEvent, r) }, n.prototype.exists = function() { var i, t; if (ApplicationState.UserIsSignedIn) { for (i = n.getAll(), t = 0; t < i.length; t++)
			if (i[t].id == this.id) return !0; return !1 } return Cookie.Favourites.containsValue(this.toString()) }, n.prototype.delete = function() { var t, i, r, f, u; if (ApplicationState.UserIsSignedIn) { for (t = n.getAll(), i = 0; i < t.length; i++) t[i].id == this.id && t.splice(i, 1);
			LocalAccountStorage.FavouritesCP.saveObject(t) } else Cookie.Favourites.removeValue(this.toString());
			r = n.getAll().length;
			f = { id: this.id, lat: Number(this.latitude), lon: Number(this.longitude), total: r };
			Events.Fire(n.favouriteRemovedEvent, f);
			u = new FavouriteRefreshArgs;
			u.total = r;
			Events.Fire(n.favouritesRefreshEvent, u) }, n.getAll = function(t, i, r) { var e = [],
			h = "",
			c, f, s, u, o; if (ApplicationState.UserIsSignedIn && i != UserType.Guest) { if (c = LocalAccountStorage.FavouritesCP.get(""), c != "")
			for (f = JSON.parse(c), u = 0; u < f.length; u++) f[u].appMode != (t || f[u].appMode) || r ? r && e.push(n.fromObject(f[u])) : (f[u].appMode = f[u].appMode.toString(), e.push(n.fromObject(f[u]))) } else if (h = Cookie.Favourites.get(""), h != "")
			for (s = h.split("~"), u = 0; u < s.length; u++) s[u] != "" && (o = n.fromString(s[u]), o.appMode != (t || o.appMode) || r ? r && e.push(o) : e.push(o)); return e }, n.getFromString = function(t, i) { for (var e = [], f = t.split(","), u, r = 0; r < f.length; r++) f[r] != "" && (u = n.fromString(f[r]), u.appMode = i || u.appMode, e.push(u)); return e }, n.exists = function(t, i) { for (var u = n.getAll(i), r = 0; r < u.length; r++)
			if (u[r].id == t) return !0; return !1 }, n.refreshIcons = function(t) { t.find(".favouriteIcon").each(function() { var i = $(this).attr("data-value"),
			r = i.split("_")[0],
			t = parseInt(i.split("_")[3]),
			u = null;
			(t == 1 || t == 2) && (u = t);
			n.exists(r) ? ($(this).find("img").attr("src", n.selectedIconURL), $(this).addClass("favouritedIcon")) : ($(this).find("img").attr("src", n.unSelectedIconURL), $(this).removeClass("favouritedIcon")) });
			n.rebindFavouriteEvents(t) }, n.rebindFavouriteEvents = function(n) { n.find(".favouriteIcon").each(function() { $(this).unbind("click").click(function() { return favouriteIconClicked($(this)), !1 }) }) }, n.Add = function(t) { var i = 0,
			r, u; if (ApplicationState.UserIsSignedIn ? (r = LocalAccountStorage.FavouritesCP.get(""), r != "" && (u = JSON.parse(r), i = u.length)) : i = Cookie.Favourites.getArray().length, ApplicationState.UserIsSignedIn) { if (i >= ConsumerProfile.UserAccountSettings.FavouriteLimit) { n.maxSignedInCountEvent.Fire(); return } } else if (i >= ApplicationConfig.FavouriteLimit) { n.maxCountEvent.Fire(); return } t.save();
			$('.favouriteIcon[data-value="' + t.id + "_" + t.latitude + "_" + t.longitude + "_" + t.appMode + '"] img').each(function() { addAnimationClass($(this), "bounceIn");
				$(this).attr("src", n.selectedIconURL);
				$(this).attr("alt", Translation.get("RemoveFromFavourites"));
				$(this).parent().addClass("favouritedIcon") });
			$("#favouriteTool").attr("title", Translation.get("RemoveFromFavourites"));
			Analytics.log(t.id, "favorite") }, n.Remove = function(t, i) { i != "AddNotes" && (Note.exists(t.id) ? Gigya.unfavouriteNoteConfirmation(t) : (t.delete(), $('.favouriteIcon[data-value="' + t.id + "_" + t.latitude + "_" + t.longitude + "_" + t.appMode + '"] img').each(function() { addAnimationClass($(this), "bounceOut");
			$(this).attr("src", n.unSelectedIconURL);
			$(this).attr("alt", Translation.get("AddToFavorites"));
			$(this).parent().removeClass("favouritedIcon") }))) }, n.AddOrRemove = function(t, i, r, u, f, e, o) { o === void 0 && (o = !0); var s, h = new n(t, i, r, f || ApplicationState.CurrentMode); return n.exists(t) ? (n.Remove(h, u), s = FavouriteState.Removed) : (n.Add(h, u), s = FavouriteState.Added), o != !1 && Gigya.saveConsumerFavourites(), s }, n.removeById = function(t) { var r = [],
			u, i, f; if (ApplicationState.UserIsSignedIn) { if (r = LocalAccountStorage.FavouritesCP.getObjects(n.fromObject), r.length > 0)
			for (i = 0; i < r.length; i++) r[i].id == t && r[i].delete() } else
			for (u = Cookie.Favourites.getArray(), i = 0; i < u.length; i++) f = n.fromString(u[i]), f.id == t && f.delete() }, n.removeExpiredFavourites = function(t, i) { var r; if (i === void 0 && (i = !1), t.ErrorCode.Id == PublicContracts.ErrorCodeId.OK) { var u = [],
			f = n.getAll(); for (r = 0; r < t.Results.length; r++) Number(t.Results[r].StatusId) != Number(ListingStatus.Active) && u.push(t.Results[r].Id); if (u.length > 0) { for (r = 0; r < u.length; r++) n.removeById(u[r]);!1 && n.favouriteNoLongerAvailable.Fire();
			Gigya.saveConsumerFavourites() } } }, n.favouriteAddedEvent = "favouriteAdded", n.favouriteRemovedEvent = "favouriteRemoved", n.favouritesRefreshEvent = "favouritesRefresh", n.favouriteNoLongerAvailable = new RealtorEvent("favouriteNoLongerAvailable"), n.maxSignedInCountEvent = new RealtorEvent("maxSignedInCountEvent"), n.maxCountEvent = new RealtorEvent("maxCountEvent"), n.selectedIconURL = "/wp-content/plugins/adk_feed/assets/images/heart.svg", n.unSelectedIconURL = "/wp-content/plugins/adk_feed/assets/images/heart-empty.svg", n }(),
	FormValidation = function() {
		function n() {} return n.removeValidatorFromField = function(n, t) { var i = n.attr("data-validation") || "",
			r;
			i.toLowerCase().indexOf(t.toLowerCase()) != -1 && (i != "" && n.attr("data-validation", i.replace(t, "").replace(",,", ",").replace(/\,$/, "")), r = n.attr("id") || "", t.toLowerCase().indexOf("required") > -1 && r != "" && $('label[for="' + r + '"').removeClass("required")) }, n.addValidatorToField = function(n, t) { var r = n.attr("data-validation") || "",
			i;
			r.toLowerCase().indexOf(t.toLowerCase()) > -1 || (r != "" ? n.attr("data-validation", r + "," + t) : n.attr("data-validation", t), i = n.attr("id") || "", t.toLowerCase().indexOf("required") > -1 && i != "" ? $('label[for="' + i + '"').addClass("required") : $('label[for="' + i + '"').removeClass("required")) }, n.validateForm = function(t, i, r, u) { var f, e, o; if (i === void 0 && (i = n.markFieldAsInvalid), r === void 0 && (r = n.clearFieldValidation), f = !0, n.clearFieldValidation(t), t.find("[data-validation]").each(function(t) { var i = n.getValidators($(this)),
			t, r; for (Logging.Debug(i.length + " validators found for field " + $(this).attr("id"), LogType.Validation), t = 0; t < i.length; t++)
			if (r = i[t].Validatate(), (r || "") != "") { i[t].Options != "noMark" && n.markFieldAsInvalid($(this), r);
				f = !1; break } }), u != null)
			for (e = 0; e < u.length; e++) o = u[e].Validatate(), (o || "") != "" && (n.markFieldAsInvalid($(this), o), f = !1); return f }, n.getValidators = function(t) { for (var e = [], s = t.attr("data-validation"), h = t.attr("data-validation-options") || "", o = s.split(","), c = h.split(","), f, r = 0; r < o.length; r++) { var i = o[r],
			u = "",
			l = i.indexOf("(") > -1;
			l && (u = n.valueInBracketsRegex.exec(i)[1], i = i.replace("(" + u + ")", ""));
			f = n.getValidator(i, t, u, c);
			f != null && e.push(f) } return e }, n.getValidator = function(t, i, r, u) { var f; switch (t.toLowerCase()) {
			case "startswithletter":
				f = new InputValidator("startswithletter", i, r, n.validateStartWithLetter); break;
			case "nourls":
				f = new InputValidator("nourls", i, r, n.validateNoURLs); break;
			case "date":
				f = new InputValidator("date", i, r, n.validateDate); break;
			case "email":
				f = new InputValidator("email", i, r, n.validateEmail); break;
			case "emailr6":
				f = new InputValidator("emailr6", i, r, n.validateEmailR6); break;
			case "email_reenter":
				f = new InputValidator("email_reenter", i, r, n.validateEmailReEnter); break;
			case "blockchars":
				f = new InputValidator("blockchars", i, r, n.validateChars); break;
			case "phone":
				f = new InputValidator("phone", i, r, n.validatePhone); break;
			case "required":
				f = new InputValidator("required", i, r, n.validateRequired); break;
			case "required_if_visible":
				f = new InputValidator("required_if_visible", i, r, n.validateRequiredIfVisible); break;
			case "keywords":
				f = new InputValidator("keywords", i, r, n.validateKeywords); break;
			case "lessthan":
				break;
			case "greaterthan":
				break;
			case "consumer_password":
				f = new InputValidator("consumer_password", i, r, n.validateConsumerPassword); break;
			case "consumer_password_reenter":
				f = new InputValidator("consumer_password_reenter", i, r, n.validateConsumerPasswordReEnter); break;
			case "firstlast_name":
				f = new InputValidator("firstlast_name", i, r, n.validateFirstLastName); break;
			case "last_name":
				f = new InputValidator("last_name", i, r, n.validateLastName); break;
			case "first_name":
				f = new InputValidator("first_name", i, r, n.validateFirstName); break;
			case "savedsearchname":
				f = new InputValidator("savedsearchname", i, r, n.validateSavedSearchName); break;
			case "postalcode":
				f = new InputValidator("postalcode", i, r, n.validatePostalCode); break;
			case "nodefault":
				f = new InputValidator("nodefault", i, r, n.validateNoDefault); break;
			case "captcha":
				f = new InputValidator("captcha", i, r, n.validateCaptcha); break;
			case "required_tou":
				f = new InputValidator("required_tou", i, r, n.validateRequiredToU, undefined, u); break;
			default:
				f = null } return f }, n.markFieldAsInvalid = function(n, t) { n.is("select") && n.siblings(".select2-container").length > 0 ? n = n.siblings(".select2-container") : n.find("#captcha").length > 0 && (n = n.find("iframe"));
			n.addClass("validationFailed");
			n.after(" <span class='validationFailedMessage' data-validation-for='" + n.attr("id") + "'>" + t + "<\/span>") }, n.clearFieldValidation = function(n) { n.find(".validationFailed").removeClass("validationFailed");
			n.find(".validationFailedMessage").remove() }, n.throwFieldAsInvalid = function(n, t, i) { if (i === void 0 && (i = ""), n.find(".validationFailedMessage " + i + "").length > 0) n.find(".validationFailedMessage " + i + "").text(t);
		else { var r = $("label[for='" + n.attr("id") + "']");
			r.after("<span class='validationFailedMessage " + i + "'>" + t + "<\/span>") } }, n.validateStartWithLetter = function(t) { var i = ""; return t.val() != "" && t.val().match(n.numberStartRegEx) && (i = Translation.get("MessageMustStartWithLetter")), i }, n.validateNoURLs = function(t) { var i = ""; return t.val() != "" && t.val().match(n.noUrlRegEx) && (i = Translation.get("URLNotAllowed")), i }, n.validateDate = function(n) { var u = "",
			r, t, i; return n.val() != "" && (r = void 0, r = n.attr("type") == "date" ? stringToDate2(n.val()) : stringToDate(n.val()), t = new Date(n.attr("min")), t = new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()), i = new Date(n.attr("max")), i = new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), (r < t || r > i || r.toString() == "Invalid Date") && (u = Translation.get("InvalidDate"))), u }, n.validateEmail = function(t) { var i = "",
			r = getValue(t); return r.match(n.emailValidRegEx) || (i = Translation.get("InvalidEmail")), n.noHtmlTagRegEx.test(r) && (i = Translation.get("TheFollowingCharsAreNotAllowed").replace("{0}", "< >")), r.length < 8 && (i = Translation.get("EmailLength")), i }, n.validateEmailR6 = function(t) { var i = "",
			r = getValue(t); return r.match(n.emailValidRegEx) || (i = Translation.get("InvalidEmail")), n.noHtmlTagRegEx.test(r) && (i = Translation.get("TheFollowingCharsAreNotAllowed").replace("{0}", "< >")), i }, n.validatePhone = function(t) { var i = "",
			r = getValue(t); return r != "" && (r.match(n.phoneRegEx) || (i = Translation.get("InvalidPhone"))), i }, n.validateKeywords = function(n) { var r = "",
			u = getValue(n),
			t, i; if (u != "")
			if (t = u.split(","), t.length > 5) r = Translation.get("KeywordTooMany");
			else
				for (i = 0; i < t.length; i++)
					if (t[i].length > 30) { r = Translation.get("KeywordTooLong"); break } return r }, n.validateChars = function(n, t, i) { var e = "",
			u = getValue(n),
			r, f; if (u != null && u.length > 0)
			for (r = 0; r < t.length; r++) f = t.substring(r, r + 1), u.indexOf(f) > -1 && (e = Translation.get("TheFollowingCharsAreNotAllowed").replace("{0}", t)); if (i != null)
			for (u = i, r = 0; r < t.length; r++) f = t.substring(r, r + 1), u.indexOf(f) > -1 && (e = Translation.get("TheFollowingCharsAreNotAllowed").replace("{0}", t)); return e }, n.validateRequired = function(n) { var t = "",
			i = getValue(n); return (i == "" || i == "0" && n[0].tagName.toLowerCase() == "select") && (t = Translation.get("ThisIsAMandatoryField")), t }, n.validateRequiredIfVisible = function(n) { var i = "",
			t; return n.is(":visible") && (t = getValue(n), (t == "" || t == "0" && n[0].tagName.toLowerCase() == "select") && (i = Translation.get("ThisIsAMandatoryField"))), i }, n.validateConsumerPassword = function(t) { var i = "",
			r = getValue(t); return r.match(n.consumerPasswordRegex) || (i = Translation.get("PasswordStrength")), i }, n.validateConsumerPasswordReEnter = function(n, t) { var i = "",
			r = getValue(n),
			u = $("#" + t).val(); return r != u && (i = Translation.get("PasswordNoMatch")), i }, n.validateEmailReEnter = function(n, t) { var i = "",
			r = getValue(n),
			u = $("#" + t).val(); return r != u && (i = Translation.get("EmailNoMatch")), i }, n.validateSavedSearchName = function(n) { var t = "",
			i = getValue(n); return SavedSearch.IsSearchNameIsUnique(i) == !1 && (t = Translation.get("SaveSearchNameMustBeUnique")), t }, n.validateFirstLastName = function(t, i, r) { var f = "",
			u = getValue(t).charAt(0); return u != null && u.length > 0 && (u.match(n.numberStartRegEx) || !u.match(n.validFirstLastNameRegEx)) && (f = Translation.get("FirstLastNameValidationError")), r != null && u.length == 0 && (u = r, (u.match(n.numberStartRegEx) || !u.match(n.validFirstLastNameRegEx)) && (f = Translation.get("FirstLastNameValidationError"))), f }, n.validateFirstName = function(t, i, r) { var f = "",
			u = getValue(t).charAt(0); return u != null && u.length > 0 && (u.match(n.numberStartRegEx) || !u.match(n.validFirstLastNameRegEx)) && (f = Translation.get("FirstNameValidationError")), r != null && u.length == 0 && (u = r, (u.match(n.numberStartRegEx) || !u.match(n.validFirstLastNameRegEx)) && (f = Translation.get("FirstNameValidationError"))), f }, n.validateLastName = function(t, i, r) { var f = "",
			u = getValue(t).charAt(0); return u != null && u.length > 0 && (u.match(n.numberStartRegEx) || !u.match(n.validFirstLastNameRegEx)) && (f = Translation.get("LastNameValidationError")), r != null && u.length == 0 && (u = r, (u.match(n.numberStartRegEx) || !u.match(n.validFirstLastNameRegEx)) && (f = Translation.get("LastNameValidationError"))), f }, n.validatePostalCode = function(t, i) { var r = "",
			u = getValue(t),
			f = $("#" + i).val(); return u != "" && (f != "1" || u.match(n.postalCodeRegex) || (r = Translation.get("PleaseEnterPostalCodeCorrectFormat"))), r }, n.validateNoDefault = function(n, t) { var i = "",
			r = getValue(n),
			u = t; return r == u && (i = Translation.get("ThisIsAMandatoryField")), i }, n.validateCaptcha = function() { var n = "",
			t = grecaptcha.getResponse(); return t == "" && (n = Translation.get("ThisIsAMandatoryField")), n }, n.validateRequiredToU = function(t, i) { var r = "",
			u = getValue(t); return (u == "" || u == "0" && t[0].tagName.toLowerCase() == "select") && (n.throwFieldAsInvalid($("#" + i), Translation.get("TermsOfUseError")), r = Translation.get("TermsOfUseError")), r }, n.noUrlRegEx = /(ftp(s|):\/\/|http(s|):\/\/|http(s|):\/\/www\.|www\.)(([0-9]{1,3}\.){3}[0-9]{1,3}|.+?\.(ca|org|com|biz|ru|net|de|jp|uk|br|pl|in))/gi, n.validFirstLastNameRegEx = /^[a-zà-ÿ() ,.'-]+/gi, n.numberStartRegEx = /^[0-9].*$/, n.emailValidRegEx = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/gi, n.noHtmlTagRegEx = /[\<\>]/, n.phoneRegEx = /^[0-9+\(\)\s\/-]+$/, n.valueInBracketsRegex = /\(([^)]+)\)/, n.consumerPasswordRegex = /^(?=(.*[\d]))(?=(.*[\W]){1,})(?!.*\s).{8,}$/i, n.postalCodeRegex = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/, n }(),
	InputValidator = function() {
		function n(n, t, i, r, u, f) { this.Validator = r;
			this.Field = t;
			this.Args = i;
			this.Name = n;
			this.AddInput = u;
			this.Options = f } return n.prototype.Validatate = function() { var n = this.Validator(this.Field, this.Args, this.AddInput, this.Options); return n != "" && Logging.Debug("Validator '" + this.Name + "' failed for '" + this.Field.attr("id") + "' with args '" + this.Args.toString() + "'", LogType.Validation), n }, n.manageValidation = function(n, t) { for (var r, i = 0; i < n.length; i++)
			if (r = n[i].Validatate(), (r || "") != "") return FormValidation.markFieldAsInvalid(n[i].Field, r), t.preventDefault(), !1; return !0 }, n }();
(function(n) { var t;
	(function(n) { n[n.Unknown = 0] = "Unknown";
		n[n.Textbox = 1] = "Textbox";
		n[n.Dropdown = 2] = "Dropdown";
		n[n.Multiselect = 3] = "Multiselect";
		n[n.InputList = 4] = "InputList";
		n[n.CheckBoxOrRadio = 5] = "CheckBoxOrRadio" })(t = n.FieldType || (n.FieldType = {})) })(FormValidation || (FormValidation = {}));
var FormValueStorage = function() {
		function n() {} return n.fillForm = function(n) { n.find("[data-storage-key]").each(function() { var t = $(this).attr("data-storage-key"),
		n = localStorage.getItem(t);
			(n || "") != "" && $(this).val(n) }) }, n.saveForm = function(n) { n.find("[data-storage-key]").each(function() { var t = $(this).attr("data-storage-key"),
		n = $(this).val() || "";
			n != "" && localStorage.setItem(t, n) }) }, n }(),
	GigyaData = function() {
		function n() {} return n }(),
	GigyaUnsubscribeData = function() {
		function n() {} return n }(),
	GigyaSavedSearchData = function() {
		function n() {} return n }(),
	GigyaRealtorData = function() {
		function n() {} return n }(),
	GigyaOptInOutData = function() {
		function n() {} return n }(),
	GigyaNotificationData = function() {
		function n() {} return n }(),
	GigyaNoteData = function() {
		function n() {} return n }(),
	GigyaFavouriteData = function() {
		function n() {} return n }(),
	GigyaCompareData = function() {
		function n() {} return n }(),
	GigyaViewData = function() {
		function n() {} return n }(),
	GigyaSearchData = function() {
		function n() {} return n }(),
	GigyaCalculatorData = function() {
		function n() {} return n }(),
	GigyaAuditData = function() {
		function n() {} return n }(),
	SignInArgs = function() {
		function n() {} return n }(),
	SignInCallbackArgs = function() {
		function n() {} return n }(),
	SocialSignInArgs = function() {
		function n() {} return n }(),
	SocializeSignInArgs = function() {
		function n() {} return n }(),
	SignUpArgs = function() {
		function n() {} return n }(),
	RegFinalArgs = function() {
		function n() {} return n }(),
	AccountSetInfoArgs = function() {
		function n() { this.profile = "";
			this.data = "";
			this.CRM_update = !1;
			this.isProtected = !1;
			this.UID = "" } return n }(),
	SetAccountInfoCallbackArgs = function() {
		function n() { this.redirectTargetOnSuccess = "";
			this.onSuccessMsg = null;
			this.onSuccessFunc = [];
			this.onFailFunc = [];
			this.fetchNewConsumerBOL = !1 } return n }(),
	SetAccountInfoArgs = function() {
		function n() { this.profile = "";
			this.data = "";
			this.UID = "";
			this.regToken = "";
			this.conflictHandling = "";
			this.errorCode = 0 } return n }(),
	GetAccountFromBOLCallbackArgs = function() {
		function n() { this.functionCalls = function() {} } return n }(),
	LogoutCallbackArgs = function() {
		function n() { this.DT = DisplayType.Tempbox } return n }(),
	ErrorCallbackArgs = function() {
		function n() { this.errorCode = "" } return n }(),
	GetAccountInfoArgs = function() {
		function n() { this.CRM_update = !1;
			this.UID = "";
			this.regToken = "" } return n }(),
	ResendVerificationCodeArgs = function() {
		function n() {} return n }(),
	SocializeResponseLoginArgs = function() {
		function n() {} return n }(),
	ValidateSignatureArgs = function() {
		function n() {} return n }(),
	ResetPasswordArgs = function() {
		function n() { this.sendEmail = !0 } return n }(),
	ChangeAccountPasswordArgs = function() {
		function n() {} return n }(),
	ChangeAccountEmailArgs = function() {
		function n() {} return n }(),
	DeleteAccountArgs = function() {
		function n() {} return n }(),
	DialogEditNoteArgs = function() {
		function n() { this.ID = "";
			this.Address = "";
			this.Lat = "";
			this.Lon = "";
			this.HeaderTextID = "";
			this.BodyTextID = "";
			this.ButtonPositiveID = "";
			this.ButtonNegativeID = "";
			this.ButtonPositiveTextID = "";
			this.ButtonNegativeTextID = "";
			this.ButtonPositiveOnClick = "";
			this.CloseOnClick = "";
			this.ButtonNegativeStyle = "";
			this.BeforeOpen = null;
			this.BeforeClose = null;
			this.AfterOpen = null;
			this.AfterClose = null;
			this.OpenTrigger = "";
			this.CloseTrigger = "";
			this.appMode = 1;
			this.isSharedNote = !1;
			this.isPDP = !1 } return n }(),
	GetNotificationsArgs = function() {
		function n() { this.TypeIds = null } return n }(),
	GetAccountFromBOLArgs = function() {
		function n() { this.refreshGigya = !1;
			this.refreshCache = !1 } return n }(),
	ImportObject = function() {
		function n() { this.importFaveFlag = !1;
			this.importCompareFlag = !1;
			this.importSearchFlag = !1;
			this.maxFaveFlag = !1;
			this.maxCompareFlag = !1;
			this.maxSearchFlag = !1;
			this.FAVEdiff = null;
			this.COMPAREdiff = null;
			this.SEARCHdiff = null } return n }(),
	formType;
(function(n) { n[n.signIn = 0] = "signIn";
	n[n.signUp = 1] = "signUp" })(formType || (formType = {})),
	function(n) { n[n.MoreInfoRequired = 0] = "MoreInfoRequired";
		n[n.MoreAboutYou = 1] = "MoreAboutYou";
		n[n.ResendEmailVerification = 2] = "ResendEmailVerification";
		n[n.CheckYourEmail = 3] = "CheckYourEmail";
		n[n.SocialTerms = 4] = "SocialTerms";
		n[n.RevisedTerms = 5] = "RevisedTerms";
		n[n.LinkAccounts = 6] = "LinkAccounts";
		n[n.ForgotPassword = 7] = "ForgotPassword";
		n[n.ChangePassword = 8] = "ChangePassword";
		n[n.ChangeAccountEmail = 9] = "ChangeAccountEmail";
		n[n.ChangeAccountPassword = 10] = "ChangeAccountPassword";
		n[n.UnsubscribeConfirmation = 11] = "UnsubscribeConfirmation";
		n[n.ImportConfirmation = 12] = "ImportConfirmation";
		n[n.SignIn = 13] = "SignIn";
		n[n.SaveMoreFavs = 14] = "SaveMoreFavs" }(gigyaScreen || (gigyaScreen = {})),
	function(n) { n[n.id = 0] = "id";
		n[n.name = 1] = "name" }(diffType || (diffType = {}));
AccountPages = ["AccountInformation", "Communications", "SearchCriteria", "ResultsView", "Notifications"],
	function(n) { n[n.AccountInformation = 0] = "AccountInformation";
		n[n.Communications = 1] = "Communications";
		n[n.SearchCriteria = 2] = "SearchCriteria";
		n[n.ResultsView = 3] = "ResultsView";
		n[n.Notifications = 4] = "Notifications" }(AccountPagesList || (AccountPagesList = {}));
var GigyaDialogs = [],
	dlgs = null,
	globalRegToken = null,
	globalRequestSMProvider = "",
	LoginRefreshArgs = function() {
		function n() {} return n }(),
	Gigya = function() {
		function n() {} return n.addEventHandlers = function() { typeof gigya != "undefined" && gigya.socialize.addEventHandlers({ onLogin: n.autoLoginHandler, onLogout: n.logoutHandler });
			n.LoadConsumerBOL();
			SessionStorage.MessageToShowOnNextPage.get() != "" && (showMessage(SessionStorage.MessageToShowOnNextPage.get(), MessageType.Normal, DisplayType.Tempbox), SessionStorage.MessageToShowOnNextPage.delete());
			SessionStorage.ToastToShowOnNextPage.get() != "" && (showMessage(SessionStorage.ToastToShowOnNextPage.get(), MessageType.Normal, DisplayType.Toast), SessionStorage.ToastToShowOnNextPage.delete());
			ApplicationState.IsMobileDevice == !1 && ApplicationState.UserIsSignedIn == !1 && (URLHash.get("section") == "SignIn" || Utilities.getParamValueByName("SignIn", URLParamType.Query).toLowerCase() == "true" || Utilities.getParamValueByName("NotificationSort", URLParamType.Query).toLowerCase() == "1") && $("#lnkProfileMenuSignin").click();
			ConsumerProfile.UserAccountSettings.getLoginAttemptCount() }, n.LoadConsumerBOL = function() { ApplicationState.UserIsSignedIn && ApplicationState.CurrentHref.indexOf(RouteHelper.getURL("my-favourites")) === -1 && ApplicationState.CurrentHref.indexOf(RouteHelper.getURL("my-saved-searches")) === -1 && ApplicationState.CurrentHref.indexOf(RouteHelper.getURL("my-daily-notifications")) === -1 && ApplicationState.CurrentHref.indexOf(RouteHelper.getURL("my-account")) === -1 && n.GetAccountFromBOL(!1, !1) }, n.SignInPopup = function() { ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothState.load(RouteHelper.getURL("sign-in")) : $("#lnkProfileMenuSignin").click() }, n.LoginJS = function(t) { var i = { loginID: t.email, password: t.password, callback: n.onLoginJS };
			typeof gigya != "undefined" ? gigya.accounts.login(i) : showMessage(Translation.get("GigyaLoadError"), MessageType.Error, DisplayType.Lightbox) }, n.onLoginJS = function(t) { $("#btnSignIn").removeClass("loading");
			t.errorCode == 0 ? (ApplicationState.UserIsSignedIn = !0, URLHash.get("section") == "SignIn" && (URLHash.remove("section"), window.location.hash == "" && URLHash.removeHash())) : n.errorHandler(t, null, t.errorCode, null) }, n.Login = function(t, i) { Actions.accountsLogin(t, n.loginHandler, i) }, n.loginHandler = function(t, i) { var r, u;
			t != null && (t.GigyaError.ErrorCode == 0 ? ($("#btnSignIn").removeClass("loading"), ApplicationState.UserIsSignedIn = !0, URLHash.get("section") == "SignIn" && (URLHash.remove("section"), window.location.hash == "" && URLHash.removeHash()), n.importCheck(t), ConsumerProfile.UserAccountSettings.setLoginAttemptCount(0, t.user.email), Cookie.LoginCaptchaRequired.save("false"), Cookie.ProviderType.save(t.LoginProviderType.Type.toString()), n.loadConsumerProfile(t), n.loadNotifications(t), n.DrawDialogs(t), r = new FavouriteRefreshArgs, r.total = Favourite.getAll().length, Events.Fire(Favourite.favouritesRefreshEvent, r), u = SavedSearch.GetAll().length, Events.Fire(SavedSearch.savedSearchesCountUpdated, { count: u }), Events.Fire(n.consumerLoginEvent, { consumer: t }), n.startIdleTimeout()) : n.errorHandler(t, formType.signIn, null, i));
			$("#btnSignIn").removeClass("loading");
			$("#btnLinkAccount").removeClass("loading") }, n.autoLoginHandler = function(t) { var r = new SocializeResponseLoginArgs,
			i, u;
			r.response = t;
			t.user.newUser ? ($(".signInSocialRow").hide(), $(".sm_button").hide(), $(".signInTabConSocialIconsCon").append('<div class="sk-spinning-circle" style="text-align:center;margin: 0 auto;margin-top:30px;"><\/div>'), i = new SetAccountInfoArgs, i.UID = t.UID, i.profile = '{"locale":"' + ApplicationState.LanguageAttribute + '"}', i.data = "", i.regToken = "", i.conflictHandling = "saveProfileAndFail", u = new SetAccountInfoCallbackArgs, u.onSuccessFunc.push(function() { Actions.socializeResponseLogin(r, n.socializeLoginHandler) }), u.onFailFunc.push(function() { Actions.socializeResponseLogin(r, n.socializeLoginHandler) }), n.SetAccountInfo(i, u)) : Actions.socializeResponseLogin(r, n.socializeLoginHandler) }, n.SocializeLogin = function(t) { var i = { provider: t.provider, callback: n.onSocializeLogin, loginMode: t.loginMode, regToken: t.regToken, sessionExpiration: t.session_expiration };
			typeof gigya != "undefined" ? gigya.socialize.login(i) : showMessage(Translation.get("GigyaLoadError"), MessageType.Error, DisplayType.Lightbox) }, n.onNotifyRegistration = function(t) { t.errorCode != 0 && n.errorHandler(null, null, parseInt(t.errorCode)) }, n.onSocializeLogin = function(t) { var i, r;
			t.errorCode == 0 || (t.errorCode == 206001 ? t.x_newUser ? ($(".signInSocialRow").hide(), $(".sm_button").hide(), $(".signInTabConSocialIconsCon").append('<div class="sk-spinning-circle" style="text-align:center;margin: 0 auto;margin-top:30px;"><\/div>'), i = new SetAccountInfoArgs, i.UID = t.UID, i.profile = '{"locale":"' + ApplicationState.LanguageAttribute + '"}', i.data = "", i.regToken = "", i.conflictHandling = "saveProfileAndFail", r = new SetAccountInfoCallbackArgs, r.onSuccessFunc.push(function() { n.socializeFinalizeLogin(t) }), r.onFailFunc.push(function() { n.socializeFinalizeLogin(t) }), n.SetAccountInfo(i, r)) : n.socializeFinalizeLogin(t) : t.errorCode == 403043 ? (globalRegToken = t.regToken, globalRequestSMProvider = t.requestParams.provider.toUpperCase(), n.LinkAccounts(null)) : t.errorCode == 200009 ? (globalRegToken = t.regToken, n.callError(null, t.errorCode)) : n.callError(t, t.errorCode)) }, n.socializeFinalizeLogin = function(t) { globalRegToken = t.regToken;
			globalRequestSMProvider = t.requestParams.provider.toUpperCase(); var i = new GetAccountInfoArgs;
			i.UID = t.UID;
			i.errorCode = t.errorCode;
			Actions.getAccountInfo(i, n.errorHandler) }, n.socializeLoginHandler = function(t) { var i, r;
			t != null && (t.GigyaError.ErrorCode == 0 ? (ApplicationState.UserIsSignedIn = !0, ApplicationState.IsMobileDevice || n.hide_gigyaScreen(gigyaScreen.SignIn), URLHash.get("section") == "SignIn" && (URLHash.remove("section"), window.location.hash == "" && URLHash.removeHash()), n.importCheck(t), ConsumerProfile.UserAccountSettings.setLoginAttemptCount(0, t.user.email), Cookie.LoginCaptchaRequired.save("false"), Cookie.ProviderType.save(t.LoginProviderType.Type.toString()), n.loadConsumerProfile(t), n.loadNotifications(t), n.DrawDialogs(t), i = new FavouriteRefreshArgs, i.total = Favourite.getAll().length, Events.Fire(Favourite.favouritesRefreshEvent, i), r = SavedSearch.GetAll().length, Events.Fire(SavedSearch.savedSearchesCountUpdated, { count: r }), Events.Fire(n.consumerLoginEvent, { consumer: t }), n.startIdleTimeout()) : n.errorHandler(t, formType.signIn)) }, n.Register = function(t) { Actions.accountsRegister(t, n.registerHandler) }, n.registerHandler = function(t) { t != null && (t.GigyaError.ErrorCode == 0 || t.GigyaError.ErrorCode == 206002 ? n.showScreen(gigyaScreen.CheckYourEmail, t) : n.errorHandler(t, formType.signUp));
			$("#btnSignUp").removeClass("loading") }, n.Logout = function(t) { Actions.accountsLogout(n.logoutHandler, t) }, n.logoutHandler = function(t, i) { var r, u, f;
			t != null && (r = -1, r = Number(t.d), r == 0 && (GigyaDialogs = [], LocalAccountStorage.SavedSearchesCP.delete(), LocalAccountStorage.NotesCP.delete(), LocalAccountStorage.FavouritesCP.delete(), LocalAccountStorage.ViewPrefCP.delete(), ApplicationState.IsMobileDevice ? (Cookie.ProviderType.delete(), n.ConsumerSearchCriteria = {}, Events.ListenOnce(WebPage.pageLoadedEvent, function() { showMessage(Translation.get("SignedOut")) }, Events.ListenerScope.Global)) : n.checkDesktopLogout()), location.href.toLowerCase().indexOf(RouteHelper.getURL("my-account")) >= 0 ? Core.redirectTo(RouteHelper.getURL("")) : Core.redirectTo(window.location.href), dlgs = null, ApplicationState.UserIsSignedIn = !1, u = new FavouriteRefreshArgs, u.total = Favourite.getAll().length, Events.Fire(Favourite.favouritesRefreshEvent, u), Events.Fire(ConsumerProfile.Notifications.notificationsRefreshEvent, null), f = SavedSearch.GetAll().length, Events.Fire(SavedSearch.savedSearchesCountUpdated, { count: f }), Events.Fire(n.consumerLogoutEvent), Cookie.SocialSignin.delete(), i != null && i.URLHash != null && i.URLHash) }, n.checkDesktopLogout = function() { var t = Cookie.ProviderType.get() ? Cookie.ProviderType.get() : null,
			i = ""; if (t != null)
			if (t == AccountType.CREA.toString()) SessionStorage.ToastToShowOnNextPage.save(Translation.get("SignedOut")), Cookie.ProviderType.delete();
			else { t == AccountType.Facebook.toString() ? i = AccountType[1] : t == AccountType.LinkedIn.toString() ? i = AccountType[2] : t == AccountType.GooglePlus.toString() ? i = AccountType[3] : t == AccountType.Twitter.toString() && (i = AccountType[4]); var n = Translation.get("M29"),
				r = "{SocialMedia1}",
				u = "{SocialMedia2}";
				n.indexOf(r) > -1 && (n = n.replace(r, i));
				n.indexOf(u) > -1 && (n = n.replace(u, i));
				SessionStorage.MessageToShowOnNextPage.save(n);
				Cookie.ProviderType.delete() } else SessionStorage.ToastToShowOnNextPage.save(Translation.get("SignedOut")) }, n.GetSchemaOrFinalizeReg = function(t) { LocalStorage.saveObject("206001_profile", t);
			n.getSchemaOrFinalizeRegHandler(null) }, n.getSchemaOrFinalizeRegHandler = function() { var t = null,
			i;
			LocalStorage.getObject("206001_profile") != null && (t = new ConsumerProfile.Consumer(LocalStorage.getObject("206001_profile")));
			t.profile != null && (t.profile.email == null || t.profile.firstName == null || t.profile.lastName == null) ? n.showScreen(gigyaScreen.MoreInfoRequired, t) : (i = new RegFinalArgs, i.regToken = t.regToken, Actions.accountsFinalizeRegistration(i, n.finalizeRegistrationHandler));
			LocalStorage.removeObject("206001_profile") }, n.finalizeRegistrationHandler = function(t) { n.hide_gigyaScreen(gigyaScreen.LinkAccounts);
			t != null && (t.GigyaError.ErrorCode == 0 ? (ApplicationState.UserIsSignedIn = !0, ConsumerProfile.UserAccountSettings.setLoginAttemptCount(0, t.user.email), Cookie.LoginCaptchaRequired.save("false"), n.FinalizeRegistrationLogin(t)) : n.errorHandler(t, null, t.GigyaError.ErrorCode)) }, n.FinalizeRegistrationLogin = function(t) { ApplicationState.IsMobileDevice ? Core.redirectTo(RouteHelper.getURL("my-account")) : (n.loadConsumerProfile(t), n.DrawDialogs(t), Events.Fire(n.consumerLoginEvent, { consumer: t })) }, n.ResendEmailVerification = function(t) { n.showScreen(gigyaScreen.ResendEmailVerification, t) }, n.resendEmailVerificationHandler = function(t) { t != null && (t.GigyaError.ErrorCode == 0 ? (n.hide_gigyaScreen(gigyaScreen.ResendEmailVerification), n.showScreen(gigyaScreen.CheckYourEmail, t)) : showMessage(t.GigyaError.ErrorMsg, MessageType.Error)) }, n.LinkAccounts = function(t) { n.showScreen(gigyaScreen.LinkAccounts, t) }, n.DeleteAccount = function(t) { Actions.accountsDeleteAccount(t, n.deleteAccountHandler) }, n.deleteAccountHandler = function(t) { if (t != null) { t.ErrorCode.Id == 200 ? Logging.Debug("DeleteAccount Success", LogType.Other) : showMessage(t.ErrorCode.Description, MessageType.Error);
			n.hide_gigyaScreen(gigyaScreen.SocialTerms);
			n.hide_gigyaScreen(gigyaScreen.MoreAboutYou);
			dlgs = null; var i = new LogoutCallbackArgs;
			i.DT = DisplayType.Tempbox;
			n.Logout(i) } }, n.callError = function(t, i) { var u = $("#genericSignInError"),
			r, f;
			i == 206001 && n.GetSchemaOrFinalizeReg(t);
			i == 206002 && n.ResendEmailVerification(t);
			i == 403042 && (ConsumerProfile.UserAccountSettings.InvalidLoginCount++, SessionStorage.LoginAttempts.save(ConsumerProfile.UserAccountSettings.InvalidLoginCount.toString(), "InvalidLoginCount-" + $("#signInEmailTxt").val()), ConsumerProfile.UserAccountSettings.InvalidLoginCount == 9 ? FormValidation.throwFieldAsInvalid(u, Translation.get("InvalidLogin9")) : FormValidation.throwFieldAsInvalid(u, Translation.get("InvalidLoginId")));
			i == 403043 && n.LinkAccounts(t);
			i == 200009 && (n.hide_gigyaScreen(gigyaScreen.LinkAccounts), r = new RegFinalArgs, r.regToken = globalRegToken, Actions.accountsFinalizeRegistration(r, n.finalizeRegistrationHandler));
			i == 200010 && (r = new SocializeSignInArgs, r.provider = globalRequestSMProvider.toLowerCase(), r.loginMode = "standard", r.session_expiration = 0, r.regToken = t.regToken, n.SocializeLogin(r));
			i == -15 && (f = new LogoutCallbackArgs, f.DT = DisplayType.Tempbox, n.Logout(f));
			i == 403120 && (FormValidation.throwFieldAsInvalid(u, Translation.get("AccountLocked")), ConsumerProfile.UserAccountSettings.setLoginAttemptCount(0, $("#signInEmailTxt").val()));
			i == 401020 && Cookie.LoginCaptchaRequired.save("true") }, n.errorHandler = function(t, i, r, u) { var h, o;
			FormValidation.clearFieldValidation;
			ConsumerProfile.UserAccountSettings.getLoginAttemptCount(); var e = $("#genericSignInError"),
				c = $("#genericSignUpError"),
				s = $("#signInPasswordTxt"),
				f = 0;
			f = t != null ? t.GigyaError != null ? t.GigyaError.ErrorCode : t.errorCode : r;
			u != null && u.sourceScreen == gigyaScreen.LinkAccounts && (e = $("#genericSignInErrorLinkAccounts"), s = $("#linkAccountPasswordTxt"));
			f == 206001 ? n.callError(t, 206001) : f == 206002 ? n.callError(t, 206002) : f == 401020 ? Cookie.LoginCaptchaRequired.save("true") : f == 401021 ? FormValidation.throwFieldAsInvalid(e, Translation.get("CaptchaValidation")) : f == 401030 ? FormValidation.throwFieldAsInvalid(s, Translation.get("OldPasswordUsed")) : f == 403042 ? (ConsumerProfile.UserAccountSettings.InvalidLoginCount++, SessionStorage.LoginAttempts.save(ConsumerProfile.UserAccountSettings.InvalidLoginCount.toString(), "InvalidLoginCount-" + $("#signInEmailTxt").val()), ConsumerProfile.UserAccountSettings.InvalidLoginCount == 9 ? FormValidation.throwFieldAsInvalid(e, Translation.get("InvalidLogin9")) : FormValidation.throwFieldAsInvalid(e, Translation.get("InvalidLoginId"))) : f == 403043 ? n.callError(t, 403043) : f == 200009 ? (globalRegToken = t.regToken, n.callError(t, 200009)) : f == 200010 ? n.callError(t, 200010) : f == 403100 ? FormValidation.throwFieldAsInvalid(s, t.GigyaError.ErrorMsg) : f == 403120 ? (FormValidation.throwFieldAsInvalid(e, Translation.get("AccountLocked")), ConsumerProfile.UserAccountSettings.setLoginAttemptCount(0, $("#signInEmailTxt").val())) : f == 400021 ? showMessage(t.GigyaError.ErrorMsg + " Wrong Captcha", MessageType.Error) : f == -10 ? showMessage(t.GigyaError.ErrorMsg, MessageType.Error, DisplayType.Lightbox) : f == -15 ? (h = new LogoutCallbackArgs, h.DT = DisplayType.Tempbox, n.Logout(h)) : f == -20 ? FormValidation.throwFieldAsInvalid(e, Translation.get("LogErrorMessage")) : t.validationErrors != null ? (o = "", t.validationErrors[0].errorCode == 400003 ? (o = Translation.get("EmailExists"), FormValidation.markFieldAsInvalid($("#signInSignUpEmailTxt"), o)) : (o = o + t.validationErrors[0].message + " ", FormValidation.throwFieldAsInvalid(c, o, "signUp"))) : showMessage(t.GigyaError.ErrorMsg, MessageType.Error) }, n.showScreen = function(t, i, r, u) { $.featherlight.close();
			n.fetchScreen(t, i, r, !0, u) }, n.appendScreenHTML = function(n) { var t = "header_locked_" + n,
			i = $("#header").width() + 3;
			$("#" + n).length <= 0 && ($("body").append("<div id='" + n + "' class='gigya_screen'><\/div>"), $("#" + t).length <= 0 && ($("#pageContent").append("<div id='" + t + "' class='header_locked'><\/div>"), $("#" + t).css("width", i))) }, n.appendScreenHTML2 = function(n, t) { var i = "header_locked_" + n,
			r = $("#header").width() + 3;
			$("#" + n).length <= 0 && ($("body").append("<div id='" + n + "' class='gigya_screen'>" + t.d + "<\/div>"), $("#" + i).length <= 0 && ($("#pageContent").append("<div id='" + i + "' class='header_locked'><\/div>"), $("#" + i).css("width", r))) }, n.fetchScreen = function(t, i, r, u, f) { var s, h, c, e, o, l;
			u === void 0 && (u = !1);
			i == null && (i = new ConsumerProfile.Consumer(null));
			s = function() { u && SetFocusOnFirstInput($("#" + gigyaScreen[t]));
				f != null && f() }; switch (t) {
				case gigyaScreen.SaveMoreFavs:
					var e = new ControlFetcherArgs("screen_SaveMoreFavs"),
						o = new ScreenGenericControlArgs,
						nt = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? showMessage(Translation.get("FavouriteLimit"), null, DisplayType.Tempbox) : (e.idToOutputResults = nt, e.canRetrieveFromCache = !0, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(nt, Translation.get("SaveMoreFavourites"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						t.AfterClose = function() { URLHash.remove("section", !0) };
						showModalContent(t);
						s() }, ControlFetcher.fetchSaveMoreFavs(e, o)); break;
				case gigyaScreen.SignIn:
					var e = new ControlFetcherArgs("screen_SignIn"),
						o = new ScreenGenericControlArgs,
						tt = gigyaScreen[t];
					ApplicationState.IsMobileDevice || (e.idToOutputResults = tt, e.canRetrieveFromCache = !0, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(tt, Translation.get("SignIn"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						t.AfterClose = function() { URLHash.remove("section", !0) };
						showModalContent(t);
						s() }, ControlFetcher.fetchScreenSignIn(e, o)); break;
				case gigyaScreen.MoreInfoRequired:
					e = new ControlFetcherArgs("screen_MoreInfoRequired");
					o = new ScreenMoreInfoControlArgs;
					o.firstName = i.profile.firstName;
					o.lastName = i.profile.lastName;
					o.email = i.profile.email;
					h = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? (e.idToOutputResults = h, e.canRetrieveFromCache = !0, e.postCallHandler = function(i) { n.appendScreenHTML2(h, i);
						n.show_gigyaScreen(t);
						s() }, ControlFetcher.fetchScreenMoreInfo(e, o)) : (e.canRetrieveFromCache = !0, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(h, Translation.get("MoreMandatoryInformation"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						showModalContent(t) }, ControlFetcher.fetchScreenMoreInfo(e, o)); break;
				case gigyaScreen.MoreAboutYou:
					var e = new ControlFetcherArgs("screen_MoreAboutYou"),
						o = new ScreenGenericControlArgs,
						a = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? (e.idToOutputResults = a, e.canRetrieveFromCache = !0, e.postCallHandler = function(i) { n.appendScreenHTML2(a, i);
						n.show_gigyaScreen(t);
						s() }, ControlFetcher.fetchScreenMoreAboutYou(e, o)) : (e.canRetrieveFromCache = !0, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(a, Translation.get("MoreAboutYou"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						t.ShowCloseButton = !1;
						showModalContent(t) }, ControlFetcher.fetchScreenMoreAboutYou(e, o)); break;
				case gigyaScreen.ResendEmailVerification:
					e = new ControlFetcherArgs("screen_ResendEmailVerification");
					o = new ScreenResendEmailVerificationControlArgs;
					o.UID = i.UID || "";
					o.regToken = i.regToken || "";
					c = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? (e.idToOutputResults = c, e.canRetrieveFromCache = !0, e.postCallHandler = function(i) { n.appendScreenHTML2(c, i);
						n.show_gigyaScreen(t);
						s() }, ControlFetcher.fetchScreenResendEmailVerification(e, o)) : (e.canRetrieveFromCache = !0, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(c, Translation.get("EmailNotVerified"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						showModalContent(t) }, ControlFetcher.fetchScreenResendEmailVerification(e, o)); break;
				case gigyaScreen.CheckYourEmail:
					var e = new ControlFetcherArgs("screen_CheckYourEmail"),
						o = new ScreenGenericControlArgs,
						v = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? (e.idToOutputResults = v, e.canRetrieveFromCache = !0, e.postCallHandler = function(i) { n.appendScreenHTML2(v, i);
						n.show_gigyaScreen(t);
						s() }, ControlFetcher.fetchScreenCheckYourEmail(e, o)) : (e.canRetrieveFromCache = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(v, Translation.get("WelcomeSignUp"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						showModalContent(t) }, ControlFetcher.fetchScreenCheckYourEmail(e, o)); break;
				case gigyaScreen.RevisedTerms:
					var e = new ControlFetcherArgs("screen_RevisedTerms"),
						o = new ScreenGenericControlArgs,
						y = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? (e.idToOutputResults = y, e.canRetrieveFromCache = !0, e.postCallHandler = function(i) { n.appendScreenHTML2(y, i);
						n.show_gigyaScreen(t);
						s() }, ControlFetcher.fetchScreenRevisedTerms(e, o)) : (e.canRetrieveFromCache = !0, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(y, Translation.get("TOUListingPageTitle"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						t.ShowCloseButton = !1;
						t.AfterOpen = function() { setTimeout(function() { $(".LegalCon").scrollTop(0) }, 200) };
						showModalContent(t) }, ControlFetcher.fetchScreenRevisedTerms(e, o)); break;
				case gigyaScreen.SocialTerms:
					var e = new ControlFetcherArgs("screen_SocialTerms"),
						o = new ScreenGenericControlArgs,
						p = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? (e.idToOutputResults = p, e.canRetrieveFromCache = !0, e.postCallHandler = function(i) { n.appendScreenHTML2(p, i);
						n.show_gigyaScreen(t);
						s() }, ControlFetcher.fetchScreenSocialTerms(e, o)) : (e.canRetrieveFromCache = !0, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(p, Translation.get("TOUListingPageTitle"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						t.ShowCloseButton = !1;
						t.AfterOpen = function() { setTimeout(function() { $(".LegalCon").scrollTop(0) }, 200) };
						showModalContent(t) }, ControlFetcher.fetchScreenSocialTerms(e, o)); break;
				case gigyaScreen.LinkAccounts:
					var e = new ControlFetcherArgs("screen_LinkAccounts"),
						o = new ScreenGenericControlArgs,
						w = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? (e.idToOutputResults = w, e.canRetrieveFromCache = !0, e.postCallHandler = function(i) { n.appendScreenHTML2(w, i);
						n.show_gigyaScreen(t);
						s() }, ControlFetcher.fetchScreenLinkAccounts(e, o)) : (e.canRetrieveFromCache = !0, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(w, Translation.get("EnableNewSocialMediaAccount"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						t.ShowCloseButton = !1;
						showModalContent(t) }, ControlFetcher.fetchScreenLinkAccounts(e, o)); break;
				case gigyaScreen.ForgotPassword:
					var e = new ControlFetcherArgs("screen_ForgotPassword"),
						o = new ScreenGenericControlArgs,
						b = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? (e.idToOutputResults = b, e.canRetrieveFromCache = !0, e.postCallHandler = function(i) { n.appendScreenHTML2(b, i);
						n.show_gigyaScreen(t);
						s() }, ControlFetcher.fetchScreenForgotPassword(e, o)) : (e.canRetrieveFromCache = !0, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(b, Translation.get("ForgotPassword"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						showModalContent(t) }, ControlFetcher.fetchScreenForgotPassword(e, o)); break;
				case gigyaScreen.ChangePassword:
					e = new ControlFetcherArgs("screen_ChangePassword");
					o = new ScreenChangePasswordArgs;
					o.pwrtToken = Utilities.getParamValueByName("pwrt", URLParamType.Query);
					l = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? (e.idToOutputResults = l, e.canRetrieveFromCache = !0, e.postCallHandler = function(i) { n.appendScreenHTML2(l, i);
						n.show_gigyaScreen(t);
						s() }, ControlFetcher.fetchScreenChangePassword(e, o)) : (e.canRetrieveFromCache = !0, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(l, Translation.get("ChangeYourPassword"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						showModalContent(t) }, ControlFetcher.fetchScreenChangePassword(e, o)); break;
				case gigyaScreen.ChangeAccountPassword:
					var e = new ControlFetcherArgs("screen_ChangeAccountPassword"),
						o = new ScreenGenericControlArgs,
						k = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? (e.idToOutputResults = k, e.canRetrieveFromCache = !0, e.postCallHandler = function(i) { n.appendScreenHTML2(k, i);
						n.show_gigyaScreen(t);
						s() }, ControlFetcher.fetchScreenChangeAccountPassword(e, o)) : (e.canRetrieveFromCache = !0, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(k, Translation.get("ChangeYourPassword"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						showModalContent(t) }, ControlFetcher.fetchScreenChangeAccountPassword(e, o)); break;
				case gigyaScreen.ChangeAccountEmail:
					var e = new ControlFetcherArgs("screen_ChangeAccountEmail"),
						o = new ScreenGenericControlArgs,
						d = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? (e.idToOutputResults = d, e.canRetrieveFromCache = !0, e.postCallHandler = function(i) { n.appendScreenHTML2(d, i);
						n.show_gigyaScreen(t);
						s() }, ControlFetcher.fetchScreenChangeAccountEmail(e, o)) : (e.canRetrieveFromCache = !0, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(d, Translation.get("ChangeYourEmail"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						showModalContent(t) }, ControlFetcher.fetchScreenChangeAccountEmail(e, o)); break;
				case gigyaScreen.UnsubscribeConfirmation:
					var e = new ControlFetcherArgs("screen_UnsubscribeConfirmation"),
						o = r,
						g = gigyaScreen[t];
					ApplicationState.IsMobileDevice ? (e.idToOutputResults = g, e.canRetrieveFromCache = !1, e.postCallHandler = function(i) { n.appendScreenHTML2(g, i);
						n.show_gigyaScreen(t);
						s() }, ControlFetcher.fetchScreenUnsubscribeConfirmation(e, o)) : (e.canRetrieveFromCache = !1, e.showLoadingSpinner = !0, e.postCallHandler = function(n) { var t = new ModalContentModel(g, Translation.get("UnsubFromRealtor"), n.d);
						t.CssClass = "gigyaScreen";
						t.DisplayType = ModalDisplayTypes.LightboxMe;
						showModalContent(t) }, ControlFetcher.fetchScreenUnsubscribeConfirmation(e, o)) } }, n.hide_gigyaScreen = function(n) { var t = gigyaScreen[n],
			i, r, u, f;
			ApplicationState.IsMobileDevice ? (i = "header_locked_" + t, $("#" + t).hasClass("show") && ($("#" + t).removeClass("show"), window.setTimeout(function() { $("body").css("overflow", "initial");
				$("body").css("position", "initial");
				$("#" + t).remove();
				$("#" + i).remove() }, 320))) : (r = $("#" + t).closest(".ModalOverlay"), r.trigger("close"), u = $("#" + t).closest(".modalcontrol"), f = $("#" + t + "_con"), $(u).remove(), $(f).remove()) }, n.show_gigyaScreen = function(n) { var i = $("#header").outerHeight(),
			t = gigyaScreen[n],
			r;
			ApplicationState.IsMobileDevice && ($("body").css("overflow", "hidden"), $("body").css("position", "fixed"), $("#" + t).addClass("show"), $("#" + t).css("top", i), r = window.innerHeight ? window.innerHeight : $(window).height(), $("#" + t).css("height", r - i)) }, n.resize_gigyaScreen = function(n) { var t = $("#header").outerHeight(),
			i = gigyaScreen[n],
			r;
			$("#" + i).css("top", t);
			r = window.innerHeight ? window.innerHeight : $(window).height();
			$("#" + i).css("height", r - t) }, n.exitLinkConfirmHandler = function() { var n = $("#pnlExitLinkConfirmMsg_body").text();
			n.indexOf("[0]") > -1 && (n = n.replace("[0]", globalRequestSMProvider), $("#pnlExitLinkConfirmMsg_body").text(n)) }, n.showDialogEditNote = function(t) { var i = new ConfirmationDialog2Args,
			r = "",
			u;
			i.ID = "note" + t.ID;
			i.TitleText = "&nbsp;";
			t.isSharedNote && (r += "<div id='sharedNoteCnt'><span id='sharedNoteTitle'>" + Note.getSharedDisplayName() + " - " + t.Address + "<\/span><div class='note-txtarea'><textarea maxlength='300' disabled='disabled' id='txtArea_SharedNote'><\/textarea><\/div><\/div>");
			r += t.isSharedNote && Note.exists(t.ID) ? "<div id='myNoteCnt'><span id='myNoteTitle'>" + t.Address + "<\/span><div class='note-txtarea'><textarea maxlength='300' id='txtArea_Note' data-validation='required,blockchars(<>),nourls'><\/textarea><\/div><\/div>" : "<div id='myNoteCnt'><span id='myNoteTitle'>" + t.Address + "<\/span><div class='note-txtarea'><textarea maxlength='300' id='txtArea_Note' data-validation='required,blockchars(<>),nourls'><\/textarea><\/div><\/div>";
			i.TitleText = Translation.get("MyNotes");
			i.BodyContent = $(r);
			i.ButtonPositiveText = Translation.get("Save");
			i.ButtonNegativeText = Translation.get("Delete");
			i.ButtonPositiveOnClick = function(i, r) { if ($("#txtArea_Note").val() != "") { $("#" + r.model.ButtonPositiveID).addClass("loading"); var u = function() { r.Featherlight.close();
				$("#" + r.model.ButtonPositiveID).removeClass("loading") };
				Note.Add(t.ID, $("#txtArea_Note").val(), t.Lat, t.Lon, "", !0, u) } else n.showDialogEmptyNote(r) };
			i.ButtonNegativeOnClick = function(n, i) { t.CloseTrigger = "delete";
				Note.DeleteConfirmation(t.ID, $("#txtArea_Note").val(), "", i, t.isPDP) };
			i.BeforeOpen = function() { $("#txtArea_Note").attr("placeholder", Translation.get("NotesTooltip"));
				t.isSharedNote && Note.exists(t.ID) ? $("#txtArea_Note").val(Note.getById(t.ID).note) : t.isSharedNote ? ($("#txtArea_Note").hide(), $("#myNoteCnt").hide(), $("#" + i.ID + "_PositiveBtn").hide(), $("#" + i.ID + "_NegativeBtn").hide()) : Note.exists(t.ID) && $("#txtArea_Note").val(Note.getById(t.ID).note);
				t.isSharedNote && Note.existsShared(t.ID) ? $("#txtArea_SharedNote").val(Note.getSharedById(t.ID).note) : ($("#txtArea_SharedNote").hide(), $("#sharedNoteCnt").hide()) };
			i.BeforeClose = function() { t.CloseTrigger == "delete" != !0 && (Note.exists(t.ID) ? $("#txtArea_Note").val() != Note.getById(t.ID).note && n.showDialogCancelNote(t, $("#txtArea_Note").val()) : $("#txtArea_Note").val() != "" && $("#txtArea_Note").val() != undefined && n.showDialogCancelNote(t, $("#txtArea_Note").val())) };
			i.AfterOpen = function() { window.setTimeout(function() { var n = $("#txtArea_Note");
				n.length > 0 && n[0].focus() }, 50) };
			u = new ConfirmationDialogModel2(i.ID, i.TitleText, i.BodyContent, i.ButtonPositiveText, i.ButtonPositiveOnClick, i.ButtonNegativeText, i.ButtonNegativeOnClick, null, null, i.BeforeOpen, i.BeforeClose, i.AfterOpen);
			u.ShowCloseButton = !0;
			showConfirmationDialog2(u) }, n.showDialogCancelNote = function(t, i) { var r = new ConfirmationDialog2Args,
			u;
			r.ID = "pnlConfirmMsgCancelNote";
			r.TitleText = Translation.get("T450");
			r.BodyContent = $("<span>" + Translation.get("M45") + "<\/span>");
			r.ButtonPositiveText = Translation.get("Yes");
			r.ButtonNegativeText = Translation.get("No");
			r.ButtonPositiveOnClick = function(n, t) { t.Featherlight.close() };
			r.ButtonNegativeOnClick = function(r, u) { u.Featherlight.close();
				n.showDialogEditNote(t);
				$("#txtArea_Note").val(i) };
			u = new ConfirmationDialogModel2(r.ID, r.TitleText, r.BodyContent, r.ButtonPositiveText, r.ButtonPositiveOnClick, r.ButtonNegativeText, r.ButtonNegativeOnClick);
			u.ShowCloseButton = !1;
			showConfirmationDialog2(u) }, n.showDialogEmptyNote = function(n) { var t = new ConfirmationDialog2Args,
			i;
			t.ID = "pnlConfirmMsgEmptyNote";
			t.TitleText = Translation.get("T449");
			t.BodyContent = $("<span>" + Translation.get("M46") + "<\/span>");
			t.ButtonPositiveText = Translation.get("Yes");
			t.ButtonNegativeText = Translation.get("No");
			t.ButtonPositiveOnClick = function(t, i) { i.Featherlight.close();
				n.Featherlight.close() };
			t.ButtonNegativeOnClick = function(n, t) { t.Featherlight.close() };
			i = new ConfirmationDialogModel2(t.ID, t.TitleText, t.BodyContent, t.ButtonPositiveText, t.ButtonPositiveOnClick, t.ButtonNegativeText, t.ButtonNegativeOnClick);
			i.ShowCloseButton = !1;
			showConfirmationDialog2(i) }, n.loadConsumerProfile = function(t) { ApplicationState.UserIsSignedIn === !0 && (ConsumerProfile.UserAccountSettings.refreshUserAccountSettings(t), t.user.Display_Name != null ? LocalAccountStorage.ConsumerDisplayName.save(t.user.Display_Name) : t.data != null && t.data.Display_Name != null && LocalAccountStorage.ConsumerDisplayName.save(t.data.Display_Name), t.user.email != null ? $("#txtProfileEmail").val(t.user.email) : t.data != null && t.data.email != null && $("#txtProfileEmail").val(t.data.email), t != null && n.loadConsumerSearchPref(n.PageCurrentSearchMode(), t), ApplicationState.IsMobileDevice || ($("#headerMyAccountText").html(LocalAccountStorage.ConsumerDisplayName.get()), $("#lnkProfileMenuMyAccount").toggle(!0), $("#lnkProfileMenuSignin").toggle(!1)), t.user.Favourites != null ? n.setCPFavourites(t.user.Favourites) : t.data != null && t.data.Favourites != null && n.setCPFavourites(t.data.Favourites), t.user.Compares != null ? n.setCPCompares(t.user.Compares) : t.data != null && t.data.Compares != null && n.setCPCompares(t.data.Compares), t.user.Searches != null ? n.setCPSearches(t.user.Searches) : t.data != null && t.data.Searches != null && n.setCPSearches(t.data.Searches), t.user.Notes != null ? n.setCPNotes(t.user.Notes) : t.data != null && t.data.Notes != null && n.setCPNotes(t.data.Notes), t.user.Res_View != null || t.user.Com_View != null ? n.setCPViewPref(t.user.Res_View != null ? t.user.Res_View : null, t.user.Com_View != null ? t.user.Com_View : null) : t.data != null && (t.data.Res_View != null || t.data.Com_View != null) && n.setCPViewPref(t.data.Res_View != null ? t.data.Res_View : null, t.data.Com_View != null ? t.data.Com_View : null), decodeURIComponent($("#SharedNotesSenderUID").val()) == ConsumerProfile.UserAccountSettings.UID && AccountSessionStorage.SharedNotes.delete(), ConsumerProfile.Notifications.RefreshNotifications(null, null)) }, n.loadNotifications = function(n) { var t = !1,
			i;
			n.user.Notifications != null && (ConsumerProfile.UserAccountSettings.FavNotificationsEnabled = n.user.Notifications.favourites, ConsumerProfile.UserAccountSettings.CompareNotificationsEnabled = n.user.Notifications.compares);
			n.user.Searches != null && n.user.Searches.length > 0 && (i = $.grep(n.user.Searches, function(n) { return n.notify === !0 }), i.length && (ConsumerProfile.UserAccountSettings.SavedSearchNotificationsEnabled = !0));
			(ConsumerProfile.UserAccountSettings.FavNotificationsEnabled || ConsumerProfile.UserAccountSettings.CompareNotificationsEnabled || ConsumerProfile.UserAccountSettings.SavedSearchNotificationsEnabled) && (t = !0);
			ConsumerProfile.UserAccountSettings.NotificationsEnabled = t;
			ConsumerProfile.UserAccountSettings.UserHashId = n.HashUID }, n.setCPFavourites = function(n) { if (n != null) { var t = [];
			$.each(n, function(i) {
				(parseInt(n[i].appMode.toString()) === ApplicationState.ResidentialMode || parseInt(n[i].appMode.toString()) === ApplicationState.CommercialMode) && t.push(n[i]) }); try { LocalAccountStorage.FavouritesCP.saveObject(t) } catch (i) {} ApplicationState.IsMobileDevice ? MasterPages.Phone.updateFavouriteIcon(Favourite.getAll().length) : MasterPages.Desktop.updateFavouriteIcon(Favourite.getAll().length) } }, n.setCPCompares = function() {}, n.setCPSearches = function(n) { if (n != null) { try { LocalAccountStorage.SavedSearchesCP.save(JSON.stringify(n)) } catch (t) {} ApplicationState.IsMobileDevice ? MasterPages.Phone.updateSavedSearchIcon(SavedSearch.GetAll().length) : MasterPages.Desktop.updateSavedSearchIcon(SavedSearch.GetAll().length) } }, n.setCPNotes = function(n) { if (n != null) { var t = [];
			$.each(n, function(i) { t.push(n[i]) }); try { LocalAccountStorage.NotesCP.save(JSON.stringify(t)) } catch (i) {} } }, n.setCPSharedNotes = function(n) { if (n != null) try { AccountSessionStorage.SharedNotes.save(n) } catch (t) {} }, n.setCPViewPref = function(n, t) { var i = new ViewPref;
			n != null && (i.Res_View = n);
			t != null && (i.Com_View = t); try { LocalAccountStorage.ViewPrefCP.save(JSON.stringify(i)) } catch (r) {} }, n.saveConsumerFavourites = function() { var r; if (ApplicationState.UserIsSignedIn) { var u = Favourite.getAll(),
			t = {},
			i = new AccountSetInfoArgs;
			t.Favourites = u;
			r = JSON.stringify(t);
			i.data = r;
			n.AccountSetInfo(i, null) } }, n.saveConsumerCompares = function() {}, n.saveConsumerSearches = function() { var u, t; if (ApplicationState.UserIsSignedIn) { var f = SavedSearch.GetAll(),
			i = {},
			r = new AccountSetInfoArgs;
			i.Searches = f;
			u = JSON.stringify(i);
			r.data = u;
			t = new SetAccountInfoCallbackArgs;
			t.onSuccessFunc.push(function() { var n = SavedSearch.GetAll().length;
				Events.Fire(SavedSearch.savedSearchesCountUpdated, { count: n }) });
			n.AccountSetInfo(r, t) } }, n.saveConsumerNotes = function(t, i) { var e; if (t === void 0 && (t = !1), ApplicationState.UserIsSignedIn) { var o = Note.getAll(),
			u = {},
			f = new AccountSetInfoArgs,
			r = new SetAccountInfoCallbackArgs;
			i != null && r.onSuccessFunc.push(i);
			u.Notes = o;
			e = JSON.stringify(u);
			f.data = e;
			t || (r.onSuccessMsg = Translation.get("M52"), r.onSuccessFunc.push(function() { Favourite.refreshIcons($("body")) }), r.onSuccessMsgDisplayType = DisplayType.Toast);
			n.AccountSetInfo(f, r) } }, n.IdsSetLocale = function() { var n = $("html").attr("lang") }, n.setLocale = function(t, i, r) { if (t != null) n.IdsSetLocale(t, null);
		else if (i != null) n.IdsSetLocale(null, i);
		else if (ApplicationState.UserIsSignedIn) var u = $("html").attr("lang"),
			f = "locale=" + u;
			r() }, n.AccountSetInfo = function(t, i) { var r = new consumeruser,
			u = new consumeruser,
			f = null; try { t.profile != "" && (r = JSON.parse(t.profile));
			t.data != "" && (u = JSON.parse(t.data));
			f = $.extend(r, u) } catch (e) { $("#btnMAYContinue").removeClass("loading") } Actions.accountsSetInfo(t, n.accountSetInfoHandler, i) }, n.accountSetInfoHandler = function(t, i) { var u, r; if (t != null)
			if (t.ErrorCode.Id == 200) { if (i != null) { if (i.sourceScreen != null && (i.sourceScreen === gigyaScreen.SocialTerms && Cookie.SocialSignin.save("1"), i.sourceScreen === gigyaScreen.MoreInfoRequired ? (ApplicationState.UserIsSignedIn = !0, u = { callback: n.onNotifyRegistration }, typeof gigya != "undefined" && gigya.socialize.notifyRegistration(u), n.hide_gigyaScreen(i.sourceScreen)) : n.hide_gigyaScreen(i.sourceScreen)), i.targetScreen != null && n.showScreen(i.targetScreen, null, i.targetScreenOptions), i.redirectTargetOnSuccess != null && i.redirectTargetOnSuccess != "" && Core.redirectTo(i.redirectTargetOnSuccess), i.onSuccessMsg != null && i.onSuccessMsg != "" && showMessage(i.onSuccessMsg, MessageType.Normal, i.onSuccessMsgDisplayType ? i.onSuccessMsgDisplayType : DisplayType.Toast), i.onSuccessFunc != null && i.onSuccessFunc.length > 0)
				for (r = 0; r < i.onSuccessFunc.length; r++) i.onSuccessFunc[r]();
				i.fetchNewConsumerBOL && n.GetAccountFromBOL(!0) } n.ShiftDialogs() } else i != null && i.sourceScreen != null && n.hide_gigyaScreen(i.sourceScreen), n.callError(null, t.GigyaErrorCode);
			$(".btnSaveAccountChanges").removeClass("loading");
			$("#btnMAYContinue").removeClass("loading") }, n.AccountGetInfo = function(t) { Actions.accountsGetInfo(t, n.accountGetInfoHandler) }, n.accountGetInfoHandler = function(n) { n != null && (n.ErrorCode.Id == 200 ? Logging.Debug("AccountGetInfo Success", LogType.Other) : showMessage(n.ErrorCode.Description, MessageType.Error)) }, n.SetAccountInfo = function(t, i) { Actions.setAccountInfo(t, n.setAccountInfoHandler, i) }, n.setAccountInfoHandler = function(t, i) { var u, r; if (t != null)
			if (t.GigyaError.ErrorCode == 0) { if (i != null && (i.sourceScreen != null && (i.sourceScreen === gigyaScreen.MoreInfoRequired ? (ApplicationState.UserIsSignedIn = !0, u = { callback: n.onNotifyRegistration }, typeof gigya != "undefined" && gigya.socialize.notifyRegistration(u), n.hide_gigyaScreen(i.sourceScreen)) : n.hide_gigyaScreen(i.sourceScreen)), i.targetScreen != null && n.showScreen(i.targetScreen, t, i.targetScreenOptions), i.redirectTargetOnSuccess != null && i.redirectTargetOnSuccess != "" && Core.redirectTo(i.redirectTargetOnSuccess), i.onSuccessMsg != null && i.onSuccessMsg != "" && showMessage(i.onSuccessMsg, MessageType.Normal, i.onSuccessMsgDisplayType ? i.onSuccessMsgDisplayType : DisplayType.Toast), i.onSuccessFunc != null && i.onSuccessFunc.length > 0))
				for (r = 0; r < i.onSuccessFunc.length; r++) i.onSuccessFunc[r]() } else if (i != null && i.sourceScreen != null && n.hide_gigyaScreen(i.sourceScreen), i != null && i.onFailFunc != null && i.onFailFunc.length > 0)
				for (r = 0; r < i.onFailFunc.length; r++) i.onFailFunc[r]();
			else n.errorHandler(t, null, t.GigyaError.ErrorCode) }, n.GetAccountInfo = function(t) { Actions.getAccountInfo(t, n.getAccountInfoHandler) }, n.getAccountInfoHandler = function(t) { t != null && (t.GigyaError.ErrorCode == 0 ? Logging.Debug("GetAccountInfo Success", LogType.Other) : n.errorHandler(t, null, t.GigyaError.ErrorCode)) }, n.DrawDialogs = function(t) { var r, i;
			t != null && dlgs == null && (t.socialTermsCondition == !0 && GigyaDialogs.push(gigyaScreen.SocialTerms), t.revisedTermsCondition == !0 && GigyaDialogs.push(gigyaScreen.RevisedTerms), t.moreAboutYouCondition == !0 && GigyaDialogs.push(gigyaScreen.MoreAboutYou), SessionStorage.ConsumerImport.get("") != "" && GigyaDialogs.push(gigyaScreen.ImportConfirmation), dlgs = GigyaDialogs.shift(), dlgs === gigyaScreen.SocialTerms && n.showScreen(gigyaScreen.SocialTerms, t), dlgs === gigyaScreen.RevisedTerms && n.showScreen(gigyaScreen.RevisedTerms, t), dlgs === gigyaScreen.MoreAboutYou && n.showScreen(gigyaScreen.MoreAboutYou, t), dlgs === gigyaScreen.ImportConfirmation && n.importConfirmation(), dlgs == null && (r = SessionStorage.PostLoginRedirect.get(""), r && (SessionStorage.PostLoginRedirect.delete(), Core.redirectTo(r)), i = Cookie.FWDAccountURL.get(), i != null && i != "" && n.goToForwardUrl(i))) }, n.ShiftDialogs = function() { var i, t;
			dlgs = GigyaDialogs.shift();
			dlgs === gigyaScreen.SocialTerms && n.showScreen(gigyaScreen.SocialTerms, null);
			dlgs === gigyaScreen.RevisedTerms && n.showScreen(gigyaScreen.RevisedTerms, null);
			dlgs === gigyaScreen.MoreAboutYou && n.showScreen(gigyaScreen.MoreAboutYou, null);
			dlgs === gigyaScreen.ImportConfirmation && n.importConfirmation();
			dlgs == null && (i = SessionStorage.PostLoginRedirect.get(""), i && (SessionStorage.PostLoginRedirect.delete(), Core.redirectTo(i)), t = Cookie.FWDAccountURL.get(), t != null && t != "" && n.goToForwardUrl(t)) }, n.deactivateAccountHandler = function(t) { var i, r;
			t != null && (t.ErrorCode.Id == 200 ? (i = new ConfirmationDialog2Args, i.ID = "pnlDeactiaveConfirmation", i.TitleText = Translation.get("AccountDeactivationConfirmation"), i.BodyContent = $("<span>" + Translation.get("AccountDeactivationConfirmationText") + "<\/span>"), i.ButtonPositiveText = Translation.get("OK"), i.ButtonPositiveOnClick = function(n, t) { t.Featherlight.close() }, i.ButtonNegativeOnClick = function(n, t) { t.Featherlight.close() }, i.AfterClose = function() { var t = new LogoutCallbackArgs;
				t.DT = DisplayType.Tempbox;
				n.Logout(t) }, r = new ConfirmationDialogModel2(i.ID, i.TitleText, i.BodyContent, i.ButtonPositiveText, i.ButtonPositiveOnClick, null, i.ButtonNegativeOnClick, null, null, null, null, null, i.AfterClose), r.ShowCloseButton = !1, showConfirmationDialog2(r), window.setTimeout(function() {
				(ConsumerProfile.UserAccountSettings.CREA_mail_updates || ConsumerProfile.UserAccountSettings.REALTOR_mail_updates) && $("#pnlSubscriptionDeactiavateText").show() }, 320)) : showMessage(t.ErrorCode.Description, MessageType.Error)) }, n.GetAccountFromBOL = function(t, i, r) { t === void 0 && (t = !1);
			i === void 0 && (i = !1); var u = new GetAccountFromBOLArgs;
			u.refreshGigya = t;
			u.refreshCache = i;
			Actions.getAccountFromBOL(u, n.getAccountFromBOLHandler, r) }, n.getAccountFromBOLHandler = function(t, i) { t != null && (t.GigyaError.ErrorCode == 0 ? n.loadConsumerProfile(t) : n.errorHandler(t, null, t.GigyaError.ErrorCode), i != null && i.functionCalls(i.page)) }, n.unfavouriteNoteConfirmation = function(t) { var i = new ConfirmationDialog2Args,
			r;
			i.ID = "pnlConfirmMsgUnfavouriteNote";
			i.TitleText = Translation.get("RemoveNoteHeader");
			i.BodyContent = $("<span>" + Translation.get("RemoveNoteBody") + "<\/span>");
			i.ButtonPositiveText = Translation.get("Yes");
			i.ButtonNegativeText = Translation.get("No");
			i.ButtonPositiveOnClick = function(i, r) { $('.card[data-value="' + t.id + '"]').addClass("fadedOut");
				n.unfavouriteNoteConfirmationYes(t.toString());
				Favourite.refreshIcons($("body"));
				r.Featherlight.close() };
			i.ButtonNegativeOnClick = function(n, i) { $('.card[data-value="' + t.id + '"]').removeClass("fadedOut");
				i.Featherlight.close() };
			r = new ConfirmationDialogModel2(i.ID, i.TitleText, i.BodyContent, i.ButtonPositiveText, i.ButtonPositiveOnClick, i.ButtonNegativeText, i.ButtonNegativeOnClick);
			r.ShowCloseButton = !1;
			showConfirmationDialog2(r) }, n.unfavouriteNoteConfirmationYes = function(n) { var t = Favourite.fromString(n),
			i = !1;
			i = ApplicationState.IsMobileDevice ? Pages.Listing.prototype.isPrototypeOf(ApplicationState.Current.Page) : Pages.Desktop.Listing.prototype.isPrototypeOf(ApplicationState.Current.Page);
			Note.Delete(t.id, null, "", null, i);
			Favourite.AddOrRemove(t.id, t.latitude, t.longitude, "", ApplicationState.CurrentMode, !1, !0) }, n.notesIncludeConfirmation = function() { var t = new ConfirmationDialog2Args,
			i;
			t.ID = "pnlConfirmMsgNotesInclude";
			t.TitleText = Translation.get("T452");
			t.BodyContent = $("<span>" + Translation.get("M48") + "<\/span>");
			t.ButtonPositiveText = Translation.get("Yes");
			t.ButtonNegativeText = Translation.get("No");
			t.ButtonPositiveOnClick = function(t, i) { var f = {},
				u, r;
				f.Notes_include = !0;
				u = new AccountSetInfoArgs;
				u.data = JSON.stringify(f);
				u.CRM_update = !1;
				r = new SetAccountInfoCallbackArgs;
				ApplicationState.IsMobileDevice ? r.onSuccessFunc.push(function() { Utilities.closeOpener(!0, Translation.get("EmailSentSuccessfully")) }) : r.onSuccessFunc.push(function() { Events.Fire(Controls.Desktop.EmailAFriend.EmailSentSuccessfullyEvent) });
				r.onSuccessFunc.push(function() { i.Featherlight.close();
					showMessage(Translation.get("EmailSentSuccessfully")) });
				n.AccountSetInfo(u, r) };
			t.ButtonNegativeOnClick = function(n, t) { t.Featherlight.close();
				ApplicationState.IsMobileDevice ? Utilities.closeOpener(!0, Translation.get("EmailSentSuccessfully")) : (Events.Fire(Controls.Desktop.EmailAFriend.EmailSentSuccessfullyEvent), showMessage(Translation.get("EmailSentSuccessfully"))) };
			i = new ConfirmationDialogModel2(t.ID, t.TitleText, t.BodyContent, t.ButtonPositiveText, t.ButtonPositiveOnClick, t.ButtonNegativeText, t.ButtonNegativeOnClick);
			i.ShowCloseButton = !1;
			showConfirmationDialog2(i) }, n.mapViewChangeConfirmation = function(t) { var u = Cookie.FirstMapViewChange.get() ? Cookie.FirstMapViewChange.get() : null,
			i, r;
			(u == null || u == "0") && (i = new ConfirmationDialog2Args, i.ID = "pnlConfirmMsgMapView", i.TitleText = Translation.get("T443"), i.BodyContent = $("<span>" + Translation.get("M51") + "<\/span>"), i.ButtonPositiveText = Translation.get("Yes"), i.ButtonNegativeText = Translation.get("No"), i.ButtonPositiveOnClick = function(i, r) { var f = {},
				e = {},
				u, o;
				e.viewOn = t;
				ApplicationState.CurrentMode == ApplicationModes.Residential ? f.Res_View = e : f.Com_View = e;
				u = new AccountSetInfoArgs;
				u.data = JSON.stringify(f);
				u.CRM_update = !1;
				o = new SetAccountInfoCallbackArgs;
				o.onSuccessFunc.push(function() { r.Featherlight.close() });
				n.AccountSetInfo(u, o) }, i.ButtonNegativeOnClick = function(n, t) { t.Featherlight.close() }, r = new ConfirmationDialogModel2(i.ID, i.TitleText, i.BodyContent, i.ButtonPositiveText, i.ButtonPositiveOnClick, i.ButtonNegativeText, i.ButtonNegativeOnClick), r.ShowCloseButton = !1, Cookie.FirstMapViewChange.save("1"), showConfirmationDialog2(r)) }, n.startIdleTimeout = function() { $(document).idleTimeout({ redirectUrl: !1, idleTimeLimit: 172800, idleCheckHeartbeat: 2, customCallback: function() { $.fn.idleTimeout().logout(); var t = new LogoutCallbackArgs;
				t.DT = DisplayType.Lightbox;
				n.Logout(t) }, activityEvents: "click keypress scroll wheel mousewheel mousemove touchstart touchmove", enableDialog: !1, sessionKeepAliveTimer: 600, sessionKeepAliveUrl: window.location.href }) }, n.refreshEnableNotifications = function() { ConsumerProfile.UserAccountSettings.FavNotificationsEnabled = !0;
			$("#FaveNotifcationPreferencesLinkCon").length == 1 && $("#FaveNotifcationPreferencesLinkCon").show();
			$("#FaveSendNotificationLinkCon").length == 1 && $("#FaveSendNotificationLinkCon").hide() }, n.enableFavouriteAndCompareNotifications = function() { var u = {},
			r = {},
			i, t;
			r.favourites = !0;
			r.compares = !0;
			u.Notifications = r;
			i = new AccountSetInfoArgs;
			i.data = JSON.stringify(u);
			i.CRM_update = !1;
			t = new SetAccountInfoCallbackArgs;
			t.onSuccessMsg = Translation.get("FavouritesSendEmailNotificationMessage");
			t.onSuccessMsgDisplayType = DisplayType.Lightbox;
			t.onSuccessFunc.push(n.refreshEnableNotifications);
			n.AccountSetInfo(i, t) }, n.resetDefaults = function(n, t) { n == "ResultsView" ? ($("#ddlSortBy").val("1-A").trigger("change"), $("#ddlViewOn").val("m").trigger("change")) : n == "ResultsViewCom" ? ($("#ddlSortByCom").val("1-A").trigger("change"), $("#ddlViewOnCom").val("m").trigger("change")) : n == "SearchCriteria" && t == 1 ? ($("#ddlProfileMeasurements").val("1").trigger("change"), $("#txtProfileLocation").val("").trigger("change"), $("#ddlProfilePropertyType").val("0").trigger("change"), $("#ddlProfileTransactionType").val("2").trigger("change"), $("#ddlBaths").val("0-0").trigger("change"), $("#ddlBeds").val("0-0").trigger("change"), $("#ddlNumberOfUnits").val("0-0").trigger("change"), $("#ddlMinPrice").val("0").trigger("change"), $("#ddlMaxPrice").val("0").trigger("change"), $("#ddlMinRent").val("0").trigger("change"), $("#ddlMaxRent").val("0").trigger("change"), $("#dteListedSince").val("").trigger("change"), $("#chkOpenHouse").prop("checked", !1).trigger("change"), $("#ddlBuildingType").val("0").trigger("change"), $("#ddlBuildingAttachmentStyle").val("0").trigger("change"), $("#ddlParkingType").val("0").trigger("change"), $("#ddlBuildingSpace").val("0-0").trigger("change"), $("#ddlLandSize").val("0-0").trigger("change"), $("#ddlFarmType").val("0").trigger("change"), $("#ddlZoningType").val("0").trigger("change"), ApplicationState.IsMobileDevice ? $("#txtKeywords").val("") : $("#txtKeywords").empty().trigger("change")) : n == "SearchCriteria" && t == 2 && ($("#ddlProfileMeasurementsCom").val("1").trigger("change"), $("#txtProfileLocationCom").val("").trigger("change"), $("#ddlProfilePropertyTypeCom").val("0").trigger("change"), $("#ddlProfileTransactionTypeCom").val("2").trigger("change"), $("#ddlBathsCom").val("0-0").trigger("change"), $("#ddlBedsCom").val("0-0").trigger("change"), $("#ddlNumberOfUnitsCom").val("0-0").trigger("change"), $("#ddlMinPriceCom").val("0").trigger("change"), $("#ddlMaxPriceCom").val("0").trigger("change"), $("#ddlMinRentCom").val("0").trigger("change"), $("#ddlMaxRentCom").val("0").trigger("change"), $("#dteListedSinceCom").val("").trigger("change"), $("#chkOpenHouseCom").prop("checked", !1).trigger("change"), $("#ddlBuildingTypeCom").val("0").trigger("change"), $("#ddlBuildingAttachmentStyleCom").val("0").trigger("change"), $("#ddlParkingTypeCom").val("0").trigger("change"), $("#ddlBuildingSpaceCom").val("0-0").trigger("change"), $("#ddlHospitalityBuildingType").val("0").trigger("change"), $("#ddlInstitutionalBuildingType").val("0").trigger("change"), $("#ddlIndustrialBuildingType").val("0").trigger("change"), $("#ddlRetailBuildingType").val("0").trigger("change"), $("#ddlLandSizeCom").val("0-0").trigger("change"), $("#ddlFarmTypeCom").val("0").trigger("change"), $("#ddlZoningTypeCom").val("0").trigger("change"), ApplicationState.IsMobileDevice ? $("#txtKeywordsCom").val("") : $("#txtKeywordsCom").empty().trigger("change")) }, n.importCheck = function(t) { var i = new ImportObject,
			e = Favourite.getAll(null, UserType.Guest),
			o = 0,
			s = null,
			k = 0,
			h = !1,
			d = !1,
			r = [],
			c = Compare.getAll(null, UserType.Guest),
			l = 0,
			a = null,
			g = 0,
			v = !1,
			nt = !1,
			u = [],
			y = SavedSearch.GetAll(undefined, undefined, UserType.Guest),
			p = 0,
			w = null,
			tt = 0,
			b = !1,
			it = !1,
			f = [];
			e != null || c != null || y != null ? (t.user.Favourites != null && (s = t.user.Favourites, k = s.length), e != null && (r = n.ArrayDiff(e, s), (r != null || r != []) && (o = r.length, o > 0 && (h = !0, k + o > ConsumerProfile.UserAccountSettings.FavouriteLimit && (d = !0)))), t.user.Compares != null && (a = t.user.Compares, g = a.length), c != null && (u = n.ArrayDiff(c, a), (u != null || u != []) && (l = u.length, l > 0 && (v = !0, g + l > ConsumerProfile.UserAccountSettings.CompareLimit && (nt = !0)))), t.user.Searches != null && (w = t.user.Searches, tt = w.length), y != null && (f = n.ArrayDiff(y, w, diffType.name), (f != null || f != []) && (p = f.length, p > 0 && (b = !0, tt + p > ConsumerProfile.UserAccountSettings.SearchLimit && (it = !0)))), i.importFaveFlag = h, i.importCompareFlag = v, i.importSearchFlag = b, i.maxFaveFlag = d, i.maxCompareFlag = nt, i.maxSearchFlag = it, i.FAVEdiff = r, i.COMPAREdiff = u, i.SEARCHdiff = f, h || v || b ? SessionStorage.ConsumerImport.save(JSON.stringify(i)) : i = null) : i = null }, n.ArrayDiff = function(n, t, i) { for (var s = [], f = [], u = [], e, o, r = 0; r < n.length; r++)(parseInt(n[r].appMode) === ApplicationState.CurrentMode || parseInt(n[r].appMode) === ApplicationState.AlternateMode) && u.push(n[r]); for (e = [], o = [], r = 0; r < u.length; r++) i == diffType.name ? e.push(u[r].name) : e.push(parseInt(u[r].id)); for (r = 0; r < (t != null ? t.length : 0); r++) i == diffType.name ? o.push(t[r].name) : o.push(parseInt(t[r].id)); return f = $.grep(e, function(n) { return $.inArray(n, o) == -1 }), f.length > 0 && (s = $.grep(u, function(n) { return i == diffType.name ? $.inArray(n.name, f) != -1 : $.inArray(parseInt(n.id), f) != -1 })), s }, n.importConfirmation = function() { var r = SessionStorage.ConsumerImport.get(""),
			t = new ConfirmationDialog2Args,
			i;
			t.ID = "pnlConfirmMsgImport";
			t.TitleText = Translation.get("T442");
			t.BodyContent = $("<span>" + Translation.get("M34") + "<\/span>");
			t.ButtonPositiveText = Translation.get("Yes");
			t.ButtonPositiveOnClick = function(t, i) { n.importGuest(r);
				i.Featherlight.close() };
			t.ButtonNegativeText = Translation.get("No");
			t.ButtonNegativeOnClick = function(t, i) { n.cancelImportGuest(i) };
			i = new ConfirmationDialogModel2(t.ID, t.TitleText, t.BodyContent, t.ButtonPositiveText, t.ButtonPositiveOnClick, t.ButtonNegativeText, t.ButtonNegativeOnClick);
			ApplicationState.IsMobileDevice && (i.ShowCloseButton = !1);
			showConfirmationDialog2(i) }, n.importGuest = function(t) { var i = JSON.parse(t),
			r, c, o, s, u, h; if (i != null) { if (i.maxFaveFlag != !0 && i.importFaveFlag)
			for (r = 0; r < i.FAVEdiff.length; r++) try { Favourite.AddOrRemove(i.FAVEdiff[r].id, i.FAVEdiff[r].latitude, i.FAVEdiff[r].longitude, "import", i.FAVEdiff[r].appMode, !1, !1);
				r === i.FAVEdiff.length - 1 && n.saveConsumerFavourites() } catch (y) {}
			if (i.maxCompareFlag != !0 && i.importCompareFlag)
				for (r = 0; r < i.COMPAREdiff.length; r++) try { Compare.Add(i.COMPAREdiff[r].id, i.COMPAREdiff[r].appMode, !1, !1);
					r === i.COMPAREdiff.length - 1 && n.saveConsumerCompares() } catch (y) {}
			if (i.maxSearchFlag != !0 && i.importSearchFlag)
				for (r = 0; r < i.SEARCHdiff.length; r++) try { c = new SavedSearch(i.SEARCHdiff[r].name, i.SEARCHdiff[r].url, i.SEARCHdiff[r].appMode, i.SEARCHdiff[r].savedDate, i.SEARCHdiff[r].viewedDate);
					c.Save(!1);
					r === i.SEARCHdiff.length - 1 && n.saveConsumerSearches() } catch (y) {}
			if (i.maxFaveFlag === !0 || i.maxCompareFlag === !0 || i.maxSearchFlag === !0) { var e = Translation.get("M70"),
				l = Translation.get("M70Favourites"),
				a = Translation.get("M70Compares"),
				v = Translation.get("M70SavedSearches"),
				f = i.maxFaveFlag ? l + ", " : "";
				f += i.maxCompareFlag ? a + ", " : "";
				f += i.maxSearchFlag ? v + ", " : "";
				f != "" && (f = f.substring(0, f.length - 2));
				o = "[FCS1]";
				s = "[FCS2]";
				e.indexOf(o) > -1 && (e = e.replace(o, f));
				e.indexOf(s) > -1 && (e = e.replace(s, f));
				u = new ConfirmationDialog2Args;
				u.ID = "pnlMaxImportMsg";
				u.BodyContent = $("<span>" + e + "<\/span>");
				u.ButtonPositiveText = Translation.get("OK");
				u.ButtonPositiveOnClick = function(t, i) { n.ShiftDialogs();
					i.Featherlight.close() };
				h = new ConfirmationDialogModel2(u.ID, u.TitleText, u.BodyContent, u.ButtonPositiveText, u.ButtonPositiveOnClick);
				h.ShowCloseButton = !1;
				showConfirmationDialog2(h) } else n.ShiftDialogs();
			SessionStorage.ConsumerImport.delete() } else n.ShiftDialogs() }, n.cancelImportGuest = function(t) { SessionStorage.ConsumerImport.delete();
			n.ShiftDialogs();
			t.Featherlight.close() }, n.setupUrlForwarding = function() { for (var t = window.location.href, i = window.location.hash, r = location.protocol + "//" + location.host, n = 0; n < AccountPages.length; n++)
			if (t.toLowerCase().indexOf("#section=" + AccountPages[n].toLowerCase()) > -1) { Cookie.FWDAccountURL.save(r + RouteHelper.getURL("my-account") + i); return } }, n.goToForwardUrl = function(n) { n != null && n != "" && (Cookie.FWDAccountURL.delete(), Core.redirectTo(n)) }, n.PageCurrentSearchMode = function() { var n; return ApplicationState.IsMobileDevice ? n = ApplicationState.CurrentHref.indexOf(RouteHelper.getURL("")) > -1 ? $("#btnHomeMode_Res").hasClass("selected") ? ApplicationModes.Residential : ApplicationModes.Commercial : ApplicationState.CurrentHref.indexOf(RouteHelper.getURL("map")) > -1 ? $("#btnMapMode_Res").hasClass("selected") ? ApplicationModes.Residential : ApplicationModes.Commercial : ApplicationState.CurrentMode : $("#homeResidentialTab.active").is(":visible") ? n = ApplicationModes.Residential : $("#homeCommercialTab.active").is(":visible") && (n = ApplicationModes.Commercial), n }, n.GetDaysFromDate = function(n) { var t;
			t = stringToDate(n);
			t.setDate(t.getDate()); var i = new Date,
				r = new Date(i.getFullYear(), i.getMonth(), i.getDate()); return (Math.round(Math.abs((t.getTime() - r.getTime()) / 864e5)) + 1).toString() }, n.loadConsumerSearchPref = function(t, i, r) { var f, e, o, s, u; try { ApplicationState.UserIsSignedIn && (i == null ? (i = new ConsumerProfile.Consumer(null), i.Interested = AccountSessionStorage.TransactionTypeId.get(), i.Interested_Com = AccountSessionStorage.TransactionTypeId_Com.get()) : (AccountSessionStorage.TransactionTypeId.save(i.Interested), AccountSessionStorage.TransactionTypeId_Com.save(i.Interested_Com)), i.user.Res_Search != null && (i.user.Res_Search.measurements == MeasurementUnits.Metric.toString() ? Cookie.PreferredMeasurementUnits.save(MeasurementUnits.Metric.toString()) : Cookie.PreferredMeasurementUnits.save(MeasurementUnits.Imperial.toString()), Events.Fire(n.measurementsUpdated)), t == ApplicationModes.Residential && i.user.Res_Search != null && ($("#homeSearchTxt").val(i.user.Res_Search.location), $("#ddlPropertyTypeRes").val(i.user.Res_Search.propertyType).trigger("change"), $("#ddlTransactionTypeTopRes").val(i.Interested).trigger("change"), ApplicationState.IsMobileDevice && (n.ConsumerSearchCriteria = {}, r && $("#homeSearchInput").val(i.user.Res_Search.location), n.ConsumerSearchCriteria.PropertyTypeGroupID = 1, n.ConsumerSearchCriteria.PropertySearchTypeId = i.user.Res_Search.propertyType, n.ConsumerSearchCriteria.TransactionTypeId = i.Interested, f = $('#ddlMaxPriceHP [value="' + i.user.Res_Search.priceMax + '"]').val(), (f || "") == "" && (n.ConsumerSearchCriteria.PriceMaxExact = 1), e = $('#ddlMinPriceHP [value="' + i.user.Res_Search.priceMin + '"]').val(), (e || "") == "" && (n.ConsumerSearchCriteria.PriceMinExact = 1), n.ConsumerSearchCriteria.PriceMax = i.user.Res_Search.priceMax, n.ConsumerSearchCriteria.PriceMin = i.user.Res_Search.priceMin, o = $('#ddlMaxRentHP [value="' + i.user.Res_Search.rentMax + '"]').val(), (o || "") == "" && (n.ConsumerSearchCriteria.RentMaxExact = 1), s = $('#ddlMinRentHP [value="' + i.user.Res_Search.rentMin + '"]').val(), (s || "") == "" && (n.ConsumerSearchCriteria.RentMinExact = 1), n.ConsumerSearchCriteria.RentMax = i.user.Res_Search.rentMax, n.ConsumerSearchCriteria.RentMin = i.user.Res_Search.rentMin, n.ConsumerSearchCriteria.BedRange = i.user.Res_Search.bedrooms, n.ConsumerSearchCriteria.BathRange = i.user.Res_Search.bathrooms, n.ConsumerSearchCriteria.UnitRange = i.user.Res_Search.numberOfUnits, n.ConsumerSearchCriteria.BuildingSizeRange = i.user.Res_Search.buildingSize != "0-0" ? i.user.Res_Search.buildingSize : "", n.ConsumerSearchCriteria.FarmTypeId = i.user.Res_Search.farmType, n.ConsumerSearchCriteria.ParkingTypeId = i.user.Res_Search.parkingType, n.ConsumerSearchCriteria.LandSizeRange = i.user.Res_Search.landSize != "0-0" ? i.user.Res_Search.landSize : "", n.ConsumerSearchCriteria.ZoningTypeGroupId = i.user.Res_Search.zoning, n.ConsumerSearchCriteria.NumberOfDays = n.GetDaysFromDate(i.user.Res_Search.listedSince), n.ConsumerSearchCriteria.OpenHouse = i.user.Res_Search.openHouse ? "1" : "0", n.ConsumerSearchCriteria.BuildingTypeId = i.user.Res_Search.buildingType != "0" ? i.user.Res_Search.buildingType : "", n.ConsumerSearchCriteria.ConstructionStyleId = i.user.Res_Search.buildingStyle, n.ConsumerSearchCriteria.Keywords = i.user.Res_Search.keywords), $("#ddlMaxPriceTop").find("option[value='" + i.user.Res_Search.priceMin + "']").length ? $("#ddlMaxPriceTop").val(i.user.Res_Search.priceMax).trigger("change") : (u = new Option(i.user.Res_Search.priceMax.toString(), i.user.Res_Search.priceMax.toString(), !0, !0), $("#ddlMaxPriceTop").append(u).trigger("change")), $("#ddlMinPriceTop").find("option[value='" + i.user.Res_Search.priceMin + "']").length ? $("#ddlMinPriceTop").val(i.user.Res_Search.priceMin).trigger("change") : (u = new Option(i.user.Res_Search.priceMin.toString(), i.user.Res_Search.priceMin.toString(), !0, !0), $("#ddlMinPriceTop").append(u).trigger("change")), $("#ddlMaxRentTop").find("option[value='" + i.user.Res_Search.rentMin + "']").length ? $("#ddlMaxRentTop").val(i.user.Res_Search.rentMax).trigger("change") : (u = new Option(i.user.Res_Search.rentMax.toString(), i.user.Res_Search.rentMax.toString(), !0, !0), $("#ddlMaxRentTop").append(u).trigger("change")), $("#ddlMinRentTop").find("option[value='" + i.user.Res_Search.rentMin + "']").length ? $("#ddlMinRentTop").val(i.user.Res_Search.rentMin).trigger("change") : (u = new Option(i.user.Res_Search.rentMin.toString(), i.user.Res_Search.rentMin.toString(), !0, !0), $("#ddlMinRentTop").append(u).trigger("change")), $("#ddlBedsTop").val(i.user.Res_Search.bedrooms).trigger("change"), $("#ddlBathsTop").val(i.user.Res_Search.bathrooms).trigger("change"), $("#ddlNumberOfUnitsTop").val(i.user.Res_Search.numberOfUnits).trigger("change"), $("#ddlBuildingSpaceTop").val(i.user.Res_Search.buildingSize).trigger("change"), $("#ddlFarmTypeTop").val(i.user.Res_Search.farmType.split(",")).trigger("change"), $("#ddlParkingTypeTop").val(i.user.Res_Search.parkingType.split(",")).trigger("change"), $("#ddlLandSizeTop").val(i.user.Res_Search.landSize).trigger("change"), $("#ddlZoningTypeTop").val(i.user.Res_Search.zoning.split(",")).trigger("change"), $("#dteListedSince").val(i.user.Res_Search.listedSince), $("#chkOpenHouse").prop("checked", i.user.Res_Search.openHouse), $("#ddlBuildingType").val(i.user.Res_Search.buildingType != "0" ? i.user.Res_Search.buildingType : " ").trigger("change"), $("#ddlBuildingAttachmentStyle").val(i.user.Res_Search.buildingStyle.split(",")).trigger("change"), i.user.Res_Search.keywords != null && i.user.Res_Search.keywords != "" && ($("#txtKeywords").empty().trigger("change"), $.each(i.user.Res_Search.keywords.split(","), function(n, t) { if ($("#txtKeywords").find("option[value='" + t + "']").length <= 0) { var i = new Option(t, t, !0, !0);
			$("#txtKeywords").append(i).trigger("change") } }))), t == ApplicationModes.Commercial && i.user.Com_Search != null && ($("#homeSearchTxt, #txtMapSearchInput").val(i.user.Com_Search.location), $("#ddlPropertyTypeCom").val(i.user.Com_Search.propertyType).trigger("change"), $("#ddlTransactionTypeTopCom").val(i.Interested_Com).trigger("change"), ApplicationState.IsMobileDevice && (n.ConsumerSearchCriteria = {}, r && $("#homeSearchInput").val(i.user.Com_Search.location), n.ConsumerSearchCriteria.PropertyTypeGroupID = 2, n.ConsumerSearchCriteria.PropertySearchTypeId = i.user.Com_Search.propertyType, n.ConsumerSearchCriteria.TransactionTypeId = i.Interested_Com, f = $('#ddlMaxPriceHP [value="' + i.user.Com_Search.priceMax + '"]').val(), (f || "") == "" && (n.ConsumerSearchCriteria.PriceMaxExact = 1), e = $('#ddlMinPriceHP [value="' + i.user.Com_Search.priceMin + '"]').val(), (e || "") == "" && (n.ConsumerSearchCriteria.PriceMinExact = 1), n.ConsumerSearchCriteria.PriceMax = i.user.Com_Search.priceMax, n.ConsumerSearchCriteria.PriceMin = i.user.Com_Search.priceMin, o = $('#ddlMaxRentHP [value="' + i.user.Com_Search.rentMax + '"]').val(), (o || "") == "" && (n.ConsumerSearchCriteria.RentMaxExact = 1), s = $('#ddlMinRentHP [value="' + i.user.Com_Search.rentMin + '"]').val(), (s || "") == "" && (n.ConsumerSearchCriteria.RentMinExact = 1), n.ConsumerSearchCriteria.RentMax = i.user.Com_Search.rentMax, n.ConsumerSearchCriteria.RentMin = i.user.Com_Search.rentMin, n.ConsumerSearchCriteria.BedRange = i.user.Com_Search.bedrooms, n.ConsumerSearchCriteria.BathRange = i.user.Com_Search.bathrooms, n.ConsumerSearchCriteria.UnitRange = i.user.Com_Search.numberOfUnits, n.ConsumerSearchCriteria.BuildingSizeRange = i.user.Com_Search.buildingSize != "0-0" ? i.user.Com_Search.buildingSize : "", n.ConsumerSearchCriteria.FarmTypeId = i.user.Com_Search.farmType, n.ConsumerSearchCriteria.ParkingTypeId = i.user.Com_Search.parkingType, n.ConsumerSearchCriteria.LandSizeRange = i.user.Com_Search.landSize != "0-0" ? i.user.Com_Search.landSize : "", n.ConsumerSearchCriteria.ZoningTypeGroupId = i.user.Com_Search.zoning, n.ConsumerSearchCriteria.NumberOfDays = n.GetDaysFromDate(i.user.Com_Search.listedSince), n.ConsumerSearchCriteria.OpenHouse = i.user.Com_Search.openHouse ? "1" : "0", n.ConsumerSearchCriteria.BuildingTypeId = i.user.Com_Search.buildingType != "0" ? i.user.Com_Search.buildingType : "", n.ConsumerSearchCriteria.ConstructionStyleId = i.user.Com_Search.buildingStyle, n.ConsumerSearchCriteria.Keywords = i.user.Com_Search.keywords), $("#ddlMaxPriceTop").find("option[value='" + i.user.Com_Search.priceMin + "']").length ? $("#ddlMaxPriceTop").val(i.user.Com_Search.priceMax).trigger("change") : (u = new Option(i.user.Com_Search.priceMax.toString(), i.user.Com_Search.priceMax.toString(), !0, !0), $("#ddlMaxPriceTop").append(u).trigger("change")), $("#ddlMinPriceTop").find("option[value='" + i.user.Com_Search.priceMin + "']").length ? $("#ddlMinPriceTop").val(i.user.Com_Search.priceMin).trigger("change") : (u = new Option(i.user.Com_Search.priceMin.toString(), i.user.Com_Search.priceMin.toString(), !0, !0), $("#ddlMinPriceTop").append(u).trigger("change")), $("#ddlMaxRentTop").find("option[value='" + i.user.Com_Search.rentMin + "']").length ? $("#ddlMaxRentTop").val(i.user.Com_Search.rentMax).trigger("change") : (u = new Option(i.user.Com_Search.rentMax.toString(), i.user.Com_Search.rentMax.toString(), !0, !0), $("#ddlMaxRentTop").append(u).trigger("change")), $("#ddlMinRentTop").find("option[value='" + i.user.Com_Search.rentMin + "']").length ? $("#ddlMinRentTop").val(i.user.Com_Search.rentMin).trigger("change") : (u = new Option(i.user.Com_Search.rentMin.toString(), i.user.Com_Search.rentMin.toString(), !0, !0), $("#ddlMinRentTop").append(u).trigger("change")), $("#ddlBedsTop").val(i.user.Com_Search.bedrooms).trigger("change"), $("#ddlBathsTop").val(i.user.Com_Search.bathrooms).trigger("change"), $("#ddlNumberOfUnitsTop").val(i.user.Com_Search.numberOfUnits).trigger("change"), $("#ddlBuildingSpaceTop").val(i.user.Com_Search.buildingSize).trigger("change"), $("#ddlFarmTypeTop").val(i.user.Com_Search.farmType.split(",")).trigger("change"), $("#ddlParkingTypeTop").val(i.user.Com_Search.parkingType.split(",")).trigger("change"), $("#ddlLandSizeTop").val(i.user.Com_Search.landSize).trigger("change"), $("#ddlZoningTypeTop").val(i.user.Com_Search.zoning.split(",")).trigger("change"), $("#dteListedSince").val(i.user.Com_Search.listedSince), $("#chkOpenHouse").prop("checked", i.user.Com_Search.openHouse), $("#ddlBuildingType").val(i.user.Com_Search.buildingType != "0" ? i.user.Com_Search.buildingType : " ").trigger("change"), $("#ddlHospitalityBuildingType").val(i.user.Com_Search.buildingType != "0" ? i.user.Com_Search.buildingType : " ").trigger("change"), $("#ddlInstitutionalBuildingType").val(i.user.Com_Search.buildingType != "0" ? i.user.Com_Search.buildingType : " ").trigger("change"), $("#ddlIndustrialBuildingType").val(i.user.Com_Search.buildingType != "0" ? i.user.Com_Search.buildingType : " ").trigger("change"), $("#ddlRetailBuildingType").val(i.user.Com_Search.buildingType != "0" ? i.user.Com_Search.buildingType : " ").trigger("change"), $("#ddlBuildingAttachmentStyle").val(i.user.Com_Search.buildingStyle.split(",")).trigger("change"), i.user.Com_Search.keywords != null && i.user.Com_Search.keywords != "" && ($("#txtKeywords").empty().trigger("change"), $.each(i.user.Com_Search.keywords.split(","), function(n, t) { if ($("#txtKeywords").find("option[value='" + t + "']").length <= 0) { var i = new Option(t, t, !0, !0);
			$("#txtKeywords").append(i).trigger("change") } })))) } catch (h) {} }, n.measurementsUpdated = "measurementsUpdated", n.consumerLoginEvent = "consumerLogin", n.consumerLogoutEvent = "consumerLogout", n.updateSearchResults = "updatesearchresults", n.ConsumerSearchCriteria = {}, n }(),
	DialogOpenedEventArgs = function() {
		function n(n, t) { this.Id = n;
			this.Closer = t } return n }(),
	DialogClosedEventArgs = function() {
		function n(n) { this.Id = n } return n }(),
	selectorCache = {};
var __extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	LocalStorage = function() {
		function n(n, t, i) { t === void 0 && (t = "");
			i === void 0 && (i = null);
			this.keyBase = "";
			this.expiryInDays = null;
			this.keyBase = n;
			this.expiryInDays = i } return n.prototype.getKey = function() { return this.keyBase }, n.prototype.save = function(n) { this.expiryInDays != null ? localStorage.setItem(this.getKey(), JSON.stringify(new StorageItems.TimestampedItem(n))) : localStorage.setItem(this.getKey(), n) }, n.prototype.saveObject = function(n) { this.expiryInDays != null ? localStorage.setItem(this.getKey(), JSON.stringify(new StorageItems.TimestampedItem(JSON.stringify(n)))) : localStorage.setItem(this.getKey(), JSON.stringify(n)) }, n.prototype.getObject = function() { var t = n.getObject(this.getKey()),
			i; if (this.expiryInDays != null && t != null) { if (i = n.getObject(this.getKey()), Utilities.isOlderThan(i.timestamp, this.expiryInDays)) return this.delete(), null;
			t = i.value } return t }, n.prototype.get = function(n) { var t, i; if (n === void 0 && (n = ""), t = localStorage.getItem(this.getKey()) || n, t.toLowerCase() == "null") t = n;
		else if (this.expiryInDays != null && t != "") { i = void 0; try { i = JSON.parse(t) } catch (r) { t = n } t != n && (Utilities.isOlderThan(i.timestamp, this.expiryInDays) ? (this.delete(), t = n) : t = i.value) } return t }, n.prototype.delete = function() { localStorage.removeItem(this.getKey()) }, n.prototype.getObjects = function(n) { var t = this.get(""); return Utilities.CreateObjectArrayFromJSONString(t, n) }, n.IsEnabled = function() { var t = !1; if (typeof localStorage != "undefined") try { localStorage.setItem(n.EnabledTest.getKey(), "yes");
			n.EnabledTest.get("") === "yes" && (n.EnabledTest.delete(), t = !0) } catch (i) {}
			return t }, n.getObject = function(n) { var i = null,
			t; try { t = localStorage.getItem(n) } catch (r) { showMessage("Unable to fetch value from local storage.", MessageType.Error); throw r; } return t != null && t != "" && (i = JSON.parse(t)), i }, n.saveObject = function(n, t) { if (t != null && jQuery.isEmptyObject(t || {}) == !1) try { localStorage.setItem(n, JSON.stringify(t)) } catch (i) { showMessage("Unable to save value to local storage.", MessageType.Error); throw i; } }, n.removeObject = function(n) { localStorage.removeItem(n) }, n.EnabledTest = new n("Test"), n.TargetPage = new n("TargetPage"), n.Geolocation = new n("Geolocation"), n.SavedSearches = new n("RealtorSavedSearches"), n.GoogleAutoComplete = new n("GoogleAutoCompleteResults"), n.AutoComplete = new n("AutoCompleteData"), n.ListingHistory = new n("ListingHistory"), n.SchoolsCallout = new n("SchoolsCallout"), n.MyEmail = new n("MyEmail"), n.FriendsEmail = new n("FriendsEmail"), n.EmailFullName = new n("EmailFullName"), n.EmailFirstName = new n("EmailFirstName"), n.EmailLastName = new n("EmailLastName"), n.R6DataImported = new n("R6DataImported"), n.IENotSupportedSeen = new n("IENotSupportedSeen"), n.LocalStorageKeys = {}, n }(),
	LocalAccountStorage = function(n) {
		function t(t, i) { return i === void 0 && (i = ""), n.call(this, t) || this } return __extends(t, n), t.prototype.getKey = function() { return this.keyBase + "-" + ConsumerProfile.UserAccountSettings.UserHashId }, t.FavNotificationsNeedsRefresh = new t("FavNotificationsNeedsRefresh"), t.CompareNotificationsNeedsRefresh = new t("CompareNotificationsNeedsRefresh"), t.NotificationsAjaxResponse = new t("NotificationsAjaxResponse"), t.FavouritesCP = new t("RealtorCPFavourites"), t.NotesCP = new t("RealtorCPNotes"), t.SavedSearchesCP = new t("RealtorSavedSearchesCP"), t.ViewPrefCP = new t("RealtorCPViewPref"), t.ConsumerDisplayName = new t("ConsumerDisplayName"), t }(LocalStorage),
	Logging = function() {
		function n() {} return n.Debug = function(n, t) { t === void 0 && (t = LogType.Other);
			(ApplicationConfig.IsDebugMode || ApplicationConfig.IsQAMode) && t.enabled && console.log("%c" + t.name + ": %c" + n, "color:" + t.color + ";", "color:gray;") }, n.Error = function(n) { if (console.log("%c" + n, "color:red;"), ApplicationConfig.IsDebugMode) showMessage("Error: " + n, null, DisplayType.Lightbox);
		else { var t = void 0;
			window && (t = window.appInsights) && t.trackException(n) } }, n }(),
	LogType = function() {
		function n(n, t, i) { this.name = n;
			this.color = t;
			this.enabled = i } return n.ControlLoaded = new n("ControlLoaded", "blue", !0), n.ControlFetcher = new n("ControlFetcher", "blue", !0), n.PageLoaded = new n("PageLoaded", "blue", !0), n.MasterLoaded = new n("MasterLoaded", "blue", !0), n.TemplateBinding = new n("TemplateBinding", "blue", !1), n.TemplateFetching = new n("TemplateFetching", "blue", !0), n.SmoothState = new n("SmoothState", "blue", !0), n.ScrollState = new n("ScrollState", "green", !0), n.AJAXEngine = new n("AJAXEngine", "blue", !0), n.Event = new n("Event", "yellow", !0), n.Validation = new n("Form Validation", "green", !0), n.APIProxy = new n("API Proxy", "brown", !0), n.Map = new n("Map", "purple", !0), n.Binding = new n("Binding", "orange", !0), n.AutoComplete = new n("AutoComplete", "purple", !0), n.Animation = new n("Animation", "purple", !0), n.History = new n("History", "green", !0), n.Multimedia = new n("Multimedia", "green", !0), n.MapPin = new n("MapPin", "green", !0), n.Other = new n("Other", "blue", !0), n }(),
	MapPinHelper = function() {
		function n() {} return n.findPinById = function(n, t) { for (var r, i = 0; i < t.length; i++)
			if (t[i].propertyId == n) { r = t[i]; break } return r }, n.indexOfPin = function(n, t) { for (var i = 0; i < t.length; i++)
			if (t[i].hash == n.hash) return i; return -1 }, n.getPinsToRemove = function(t, i) { for (var u = [], r = 0; r < t.length; r++) n.indexOfPin(t[r], i) == -1 && u.push(t[r]); return u }, n.getPinsToAdd = function(t, i) { for (var u = [], r = 0; r < t.length; r++) n.indexOfPin(t[r], i) == -1 && u.push(i[r]); return u }, n.createPin = function(n) { var t = null,
			i = n.key || n.propertyId || ""; return t = new google.maps.Marker({ position: new google.maps.LatLng(n.latitude, n.longitude), clickable: !0, title: "Pin", icon: null }), t.favouriteCount = n.favouriteCount || 0, t.text = n.count.toString(), t.key = n.key, t.listingId = n.propertyId, t }, n.refreshFavoritePins = function(n) { var i, r, t; if (n != null && n.clusters_ != null)
			for (i = 0; i < n.clusters_.length; i++) r = n.clusters_[i], t = r.clusterIcon_.div_, t != null && (r.favouriteCount > 0 ? (t.className.indexOf("favouritePin") == -1 && (t.className += " favouritePin"), t.style.backgroundImage = "url('/wp-content/plugins/adk_feed/assets/images/pin-filled-red.svg')") : (t.style.backgroundImage = "url('/wp-content/plugins/adk_feed/assets/images/pin-filled-purple.svg')", t.className = t.className.replace(" favouritePin", ""))) }, n.findClusterByKey = function(n, t) { for (var i = 0; i < t.clusters_.length; i++)
			if ((t.clusters_[i].key || "").indexOf(n) > -1) return t.clusters_[i]; return null }, n.getNumberOfSignificantDigits = function(n) { var i = 0,
			t; if (n != null)
			for (t = 0; t < n.length; t++) { var f = new RegExp(/\.\d+/g),
				u = n[t].key.match(f),
				r = 0;
				u != null && (r = u.sort(function(n, t) { return t.length - n.length })[0].toString().length - 1);
				r > i && (i = r) }
			return i }, n.findPinsCluster = function(n, t, i) { var u, f, r; if (i.clusters_ && i.clusters_.length > 0)
			for (u = this.getNumberOfSignificantDigits(i.clusters_), n = Number(Number(n).toFixed(u)).toString(), t = Number(Number(t).toFixed(u)).toString(), f = "|" + n + "|" + t, r = 0; r < i.clusters_.length; r++)
				if ((i.clusters_[r].key || "").indexOf(f) > -1) return i.clusters_[r] }, n.findMarkerInArray = function(n, t) { for (var i = 0; i < t.length; i++)
			if (t[i].listingId == n) return t[i]; return null }, n.getClosestGroupedKey = function(t, i, r) { for (var f = Number.MAX_VALUE, e = t.key.split(","), u = 0; u < e.length; u++) { var s = e[u].split("|")[1],
			h = e[u].split("|")[2],
			o = n.lineDistance(Number(i), Number(r), s, h);
			o < f && (f = o) } return f }, n.getClosestPin = function(t, i, r) { var f, o, s, u, e; if (t != null) { for (f = [], o = Number.MAX_VALUE, s = 0; s < t.length; s++) u = t[s], e = 0, e = u.key && u.key != "" ? n.getClosestGroupedKey(u, i, r) : n.lineDistance(Number(i), Number(r), u.getPosition().lng(), u.getPosition().lng()), e <= o && (e == o ? f.push(u) : (f = [], f.push(u), o = e)); return f } return null }, n.lineDistance = function(n, t, i, r) { var u = 0,
			f = 0; return u = i - n, u = u * u, f = r - t, f = f * f, Math.sqrt(u + f) }, n.findClusteredMarkerWithListingId = function(t, i) { for (var u, r = 0; r < i.clusters_.length; r++)
			if (u = n.findMarkerInArray(t, i.clusters_[r].markers_), u) return i.clusters_[r]; return null }, n.getMarkerById = function(t, i, r, u, f) { var e, o; return i == "undefined" || r == "undefined" ? null : (e = n.findClusteredMarkerWithListingId(t, f), e) ? e : (o = this.getClosestPin(u, i, r), n.findClusterByKey(o[0].key, f)) }, n }(),
	NoteAddedArgs = function() {
		function n() {} return n }(),
	NoteRemovedArgs = function() {
		function n() {} return n }(),
	Note = function() {
		function n(n, t) { this.id = n;
			this.note = t } return n.fromObject = function(t) { var r = new n,
			i; for (i in t) r[i] = t[i]; return r }, n.prototype.save = function() { var t, i;
			ApplicationState.UserIsSignedIn && (t = n.getAll(), t.push(this), LocalAccountStorage.NotesCP.save(JSON.stringify(t)));
			i = n.getAll(ApplicationState.CurrentMode).length;
			n.noteAddedEvent.Fire({ id: this.id, total: i }) }, n.prototype.exists = function() { var i, t; if (ApplicationState.UserIsSignedIn) { for (i = n.getAll(ApplicationState.CurrentMode), t = 0; t < i.length; t++)
			if (i[t].id == this.id) return !0; return !1 } }, n.prototype.existsShared = function() { for (var i = n.getAllShared(ApplicationState.CurrentMode), t = 0; t < i.length; t++)
			if (i[t].id == this.id) return !0; return !1 }, n.prototype.delete = function() { var t, i, r; if (ApplicationState.UserIsSignedIn) { for (t = n.getAll(), i = 0; i < t.length; i++) t[i].id == this.id && t.splice(i, 1);
			LocalAccountStorage.NotesCP.save(JSON.stringify(t)) } r = n.getAll(ApplicationState.CurrentMode).length;
			n.noteRemovedEvent.Fire({ id: this.id, total: r }) }, n.prototype.update = function() { var t, i; if (ApplicationState.UserIsSignedIn) { for (t = n.getAll(), i = 0; i < t.length; i++) t[i].id == this.id && (t[i].note = this.note);
			LocalAccountStorage.NotesCP.save(JSON.stringify(t)) } }, n.getAll = function() { var u = [],
			t, r, i; if (ApplicationState.UserIsSignedIn && (t = LocalAccountStorage.NotesCP.get(), t && t != null && t != "null"))
			for (r = JSON.parse(t), i = 0; i < r.length; i++) u.push(n.fromObject(r[i])); return u }, n.getAllShared = function() { var i = [],
			t = AccountSessionStorage.SharedNotes.get(),
			r; return t && t != null && t != "null" && (r = JSON.parse(t), $.each(JSON.parse(r.note), function(t, r) { i.push(n.fromObject(r)) })), i }, n.getById = function(t) { var u, r, i; if (ApplicationState.UserIsSignedIn)
			for (r = n.getAll(), i = 0; i < r.length; i++) r[i].id == t && (u = r[i]); return u }, n.getSharedById = function(t) { for (var u, r = n.getAllShared(), i = 0; i < r.length; i++) r[i].id == t && (u = r[i]); return u }, n.getSharedDisplayName = function() { var t, n = AccountSessionStorage.SharedNotes.get(),
			i; return n && n != null && n != "null" && (i = JSON.parse(n), t = i.displayName), t }, n.exists = function(t) { for (var r = n.getAll(), i = 0; i < r.length; i++)
			if (r[i].id == t) return !0; return !1 }, n.existsShared = function(t) { for (var r = n.getAllShared(), i = 0; i < r.length; i++)
			if (r[i].id == t) return !0; return !1 }, n.refreshIcons = function(t, i) { i === void 0 && (i = !1);
			t.find(".noteIcon").each(function() { var u = $(this).attr("data-value"),
				t = u.split("_"),
				r = t[0],
				f = t[1],
				e = t[2],
				o = t[3];
				ApplicationState.UserIsSignedIn ? ($(this).show(), i && $("#listingNotesText").show(), n.exists(r) ? ($(this).find("img").attr("src", n.selectedIconURL), $(this).addClass(n.hasNotesClass)) : (i || $(this).hide(), $(this).find("img").attr("src", n.unSelectedIconURL), $(this).removeClass(n.hasNotesClass))) : $(this).hide();
				n.existsShared(r) && ($(this).attr("shareNoteId", r), $(this).show(), i && ($("#listingNotesText").html(Translation.get("ViewNotes")), $("#listingNotesText").show()), $(this).find("img").attr("src", n.selectedIconURL), $(this).addClass(n.hasNotesClass)) });
			n.rebindNoteEvents(t, i) }, n.rebindNoteEvents = function(n, t) { t === void 0 && (t = !1);
			n.find(".noteIcon").each(function() { $(this).unbind("click").click(function() { return noteIconClicked($(this), t), !1 }) }) }, n.showPrintNoteSection = function(t, i) { if (ApplicationState.UserIsSignedIn) { var r = n.exists(t),
			u = n.existsShared(t);
			r && (i.find(".notePrintTitle")[0].innerText = Translation.get("MyNotes"), i.find(".notePrintText")[0].innerText = n.getById(t).note);
			u && (i.find(".noteSharedTitle")[0].innerText = n.getSharedDisplayName(), i.find(".noteSharedText")[0].innerText = n.getSharedById(t).note);
			(r || u) && i.show() } }, n.updateHTML = function() {}, n.Edit = function(t, i, r, u, f, e, o) { var h, s; if (o === void 0 && (o = !1), ApplicationState.UserIsSignedIn)
			if (t != e) { var c = Favourite.getAll().length,
				l = Favourite.exists(t, ApplicationState.CurrentMode),
				a = n.exists(t);
				c >= ConsumerProfile.UserAccountSettings.FavouriteLimit && a != !0 && l != !0 ? (h = Favourite.getAll(ApplicationState.CurrentMode).length, h == ConsumerProfile.UserAccountSettings.FavouriteLimit ? showMessage(Translation.get("M76"), MessageType.Error, DisplayType.Lightbox) : showMessage(Translation.get("M77"), MessageType.Error, DisplayType.Lightbox)) : (s = new DialogEditNoteArgs, s.ID = t, s.Address = i, s.Lat = r, s.Lon = u, s.appMode = f, s.isPDP = o, Gigya.showDialogEditNote(s)) } else s = new DialogEditNoteArgs, s.ID = t, s.Address = i, s.Lat = r, s.Lon = u, s.appMode = f, s.isSharedNote = !0, s.isPDP = o, Gigya.showDialogEditNote(s);
		else e == t && (SessionStorage.PostLoginRedirect.save(location.href), ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothState.load(RouteHelper.getURL("sign-in")) : showMessage(Translation.get("M66"), MessageType.Error, DisplayType.Lightbox)) }, n.Add = function(t, i, r, u, f, e, o) { e === void 0 && (e = !0); var h = 0,
			s = new n(t, i);
			n.exists(t) ? (s.update(), n.updateHTML(t, i)) : ApplicationState.UserIsSignedIn && (s.save(), $('.noteIcon[data-value^="' + t + '_"]').each(function() { $(this).addClass(n.hasNotesClass); var t = $(this).find("img");
				addAnimationClass(t, "bounceIn");
				t.attr("src", n.selectedIconURL);
				t.attr("alt", Translation.get("EditNotes"));
				t.attr("title", Translation.get("EditNotes")) }), Favourite.exists(t) == !1 && Favourite.AddOrRemove(t, r, u, "", ApplicationState.CurrentMode, !0, !0), h = 1, Analytics.log(t, "note"));
			e != !1 ? Gigya.saveConsumerNotes(!1, o) : o != null && o() }, n.DeleteConfirmation = function(t, i, r, u, f) { var e, o;
			f === void 0 && (f = !1);
			e = new ConfirmationDialog2Args;
			e.ID = "note_" + t + "_deleteconfirm";
			e.TitleText = Translation.get("DeleteNotesHeader");
			e.BodyContent = $("<span>" + Translation.get("DeleteNotesAreYouSure") + "<\/span>");
			e.ButtonPositiveText = Translation.get("Yes");
			e.ButtonPositiveOnClick = function(r, e) { n.Delete(t, i, "", !0, f);
				e.Featherlight.close();
				u.Featherlight.close() };
			e.ButtonNegativeText = Translation.get("No");
			e.ButtonNegativeOnClick = function(n, t) { t.Featherlight.close();
				ApplicationState.IsMobileDevice && u.Featherlight.close() };
			o = new ConfirmationDialogModel2(e.ID, e.TitleText, e.BodyContent, e.ButtonPositiveText, e.ButtonPositiveOnClick, e.ButtonNegativeText, e.ButtonNegativeOnClick);
			o.ShowCloseButton = !1;
			showConfirmationDialog2(o) }, n.Delete = function(t, i, r, u, f) { u === void 0 && (u = !0);
			f === void 0 && (f = !1); var e = new n(t, i);
			e.delete();
			u != !1 && Gigya.saveConsumerNotes(!0);
			$('.noteIcon[data-value^="' + t + '_"]').each(function() { $(this).removeClass(n.hasNotesClass); var t = $(this).find("img"),
				i = $(this).find(".listingCardNoteIcon");
				f ? (addAnimationClass(t, "bounceOut"), t.attr("src", n.unSelectedIconURL), t.attr("alt", Translation.get("AddNotes"))) : (t.remove(), i.remove()) }) }, n.noteAddedEvent = new RealtorEvent("noteAdded"), n.noteRemovedEvent = new RealtorEvent("noteRemoved"), n.selectedIconURL = "/wp-content/plugins/adk_feed/assets/images/note2.svg", n.unSelectedIconURL = "/wp-content/plugins/adk_feed/assets/images/note2-empty.svg", n.hasNotesClass = "hasNotes", n }(),
	ConsumerProfile;
(function(n) { var r = function() {
		function n() {} return n }(),
	t, i;
	n.NotificationsRefreshArgs = r;
	t = function() {
		function t(n, t, i, r, u) { if (n)
			for (var f in n) this[f] = n[f];
		else this.timestamp = t, this.favouriteNotifications = i, this.compareNotifications = r, this.savedSearchNotifications = u } return t.prototype.hasNotifications = function(t) { var i; if (n.UserAccountSettings.FavNotificationsEnabled)
			for (i = 0; i < this.favouriteNotifications.length; i++)
				if (t == null || this.favouriteNotifications[i].appMode == t) return !0; if (n.UserAccountSettings.CompareNotificationsEnabled)
			for (i = 0; i < this.compareNotifications.length; i++)
				if (t == null || this.compareNotifications[i].appMode == t) return !0; if (n.UserAccountSettings.SavedSearchNotificationsEnabled)
			for (i = 0; i < this.savedSearchNotifications.length; i++)
				if (t == null || this.savedSearchNotifications[i].appMode == t) return !0; return !1 }, t.prototype.getListingCount = function(n, i, r) { var s = 0,
			h = 0,
			u, f, o, e; if (r == ConsumerNotificationTypes.Search)
			for (u = 0; u < this.savedSearchNotifications.length; u++) f = this.savedSearchNotifications[u].text, e = "", f = t.formatNotificationTextId(f), o = "accrd-search-listings", e = "galleryViewContent_" + o + f + h.toString(), h++, e == n && (s = this.savedSearchNotifications[u].listingIds.length);
		else if (r == ConsumerNotificationTypes.Compare)
			for (u = 0; u < this.compareNotifications.length; u++) f = this.compareNotifications[u].text, f = t.formatNotificationTextId(f), o = "accrd-comp", e = "galleryViewContent_" + o + f + this.compareNotifications[u].appMode.toString() + u.toString(), e == n && (s = this.compareNotifications[u].listingIds.length);
		else if (r == ConsumerNotificationTypes.Favourite)
			for (u = 0; u < this.favouriteNotifications.length; u++) f = this.favouriteNotifications[u].text, f = t.formatNotificationTextId(f), o = "accrd-faves", e = "galleryViewContent_" + o + f + u.toString(), e == n && (s = this.favouriteNotifications[u].listingIds.length);
		else Logging.Error("Unable to get notification listing count for: " + r); return s }, t.prototype.getNotificationCount = function(n, t) { var r = 0,
			i; if (t == ConsumerNotificationTypes.Search)
			for (i = 0; i < this.savedSearchNotifications.length; i++)(n == null || this.savedSearchNotifications[i].appMode == n) && r++;
		else if (t == ConsumerNotificationTypes.Compare)
			for (i = 0; i < this.compareNotifications.length; i++)(n == null || this.compareNotifications[i].appMode == n) && r++;
		else if (t == ConsumerNotificationTypes.Favourite)
			for (i = 0; i < this.favouriteNotifications.length; i++)(n == null || this.favouriteNotifications[i].appMode == n) && r++; return r }, t.prototype.getAllNotificationCount = function(t) { var r = 0,
			i; if (n.UserAccountSettings.SavedSearchNotificationsEnabled)
			for (i = 0; i < this.savedSearchNotifications.length; i++)(t == null || this.savedSearchNotifications[i].appMode == t) && r++; if (n.UserAccountSettings.CompareNotificationsEnabled)
			for (i = 0; i < this.compareNotifications.length; i++)(t == null || this.compareNotifications[i].appMode == t) && r++; if (n.UserAccountSettings.FavNotificationsEnabled)
			for (i = 0; i < this.favouriteNotifications.length; i++)(t == null || this.favouriteNotifications[i].appMode == t) && r++; return r }, t.prototype.getListingIds = function(n, i, r, u, f) { var a = (u - 1) * f,
			v = f * u,
			o = 0,
			l = [],
			e, s, c, h; if (r == ConsumerNotificationTypes.Search) { for (e = 0; e < this.savedSearchNotifications.length; e++)
			if (h = "", s = this.savedSearchNotifications[e].text, s = t.formatNotificationTextId(s), c = "accrd-search-listings", h = "galleryViewContent_" + c + s + o.toString(), o++, h == n)
				for (o = a; o < Math.min(this.savedSearchNotifications[e].listingIds.length, v); o++) l.push(this.savedSearchNotifications[e].listingIds[o]) } else if (r == ConsumerNotificationTypes.Compare) { for (e = 0; e < this.compareNotifications.length; e++)
			if (s = this.compareNotifications[e].text, s = t.formatNotificationTextId(s), c = "accrd-comp", h = "galleryViewContent_" + c + s + this.compareNotifications[e].appMode.toString() + e.toString(), h == n)
				for (o = a; o < Math.min(this.compareNotifications[e].listingIds.length, v); o++) l.push(this.compareNotifications[e].listingIds[o]) } else if (r == ConsumerNotificationTypes.Favourite)
			for (e = 0; e < this.favouriteNotifications.length; e++)
				if (s = this.favouriteNotifications[e].text, s = t.formatNotificationTextId(s), c = "accrd-faves", h = "galleryViewContent_" + c + s + e.toString(), h == n)
					for (o = a; o < Math.min(this.favouriteNotifications[e].listingIds.length, v); o++) l.push(this.favouriteNotifications[e].listingIds[o]); return l }, t.prototype.getAllNotificationsSorted = function(t) { var r = [],
			i; if (n.UserAccountSettings.SavedSearchNotificationsEnabled)
			for (i = 0; i < this.savedSearchNotifications.length; i++)(t == null || this.savedSearchNotifications[i].appMode == t) && this.savedSearchNotifications[i].listingIds != null && this.savedSearchNotifications[i].listingIds.length > 0 && r.push(this.savedSearchNotifications[i]); if (n.UserAccountSettings.FavNotificationsEnabled)
			for (i = 0; i < this.favouriteNotifications.length; i++)(t == null || this.favouriteNotifications[i].appMode == t) && this.favouriteNotifications[i].listingIds != null && this.favouriteNotifications[i].listingIds.length > 0 && r.push(this.favouriteNotifications[i]); if (n.UserAccountSettings.CompareNotificationsEnabled)
			for (i = 0; i < this.compareNotifications.length; i++)(t == null || this.compareNotifications[i].appMode == t) && this.compareNotifications[i].listingIds != null && this.compareNotifications[i].listingIds.length > 0 && r.push(this.compareNotifications[i]); return r }, t.prototype.getFaveNotificationsCount = function() { var t = 0; return n.UserAccountSettings.FavNotificationsEnabled && (t = this.favouriteNotifications.length), t }, t.prototype.getCompareNotificationsCount = function() { var t = 0; return n.UserAccountSettings.CompareNotificationsEnabled && (t = this.compareNotifications.length), t }, t.prototype.getJobFromTimeString = function() { var n = "",
			i, t; return this.timestamp != null && (i = Number(this.timestamp), t = new Date(0), t.setUTCSeconds(i), ApplicationState.CultureID == 1 ? (n = t.getHours().toString(), n.length == 1 && (n = "0" + n), n += "01") : (n = t.getHours().toString(), n.length == 1 && (n = "0" + n), n += " h 01")), n }, t.prototype.getJobToTimeString = function() { var n = "",
			i, t; return this.timestamp != null && (i = Number(this.timestamp), t = new Date(0), t.setUTCSeconds(i), ApplicationState.CultureID == 1 ? (n = t.getHours().toString(), n.length == 1 && (n = "0" + n), n += "00") : (n = t.getHours().toString(), n.length == 1 && (n = "0" + n), n += " h 00")), n }, t.prototype.getTimeStampString = function() { var t, n; if (this.timestamp != null) { t = Number(this.timestamp);
			n = new Date(0);
			n.setUTCSeconds(t); return ApplicationState.CultureID == 1 ? ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][n.getMonth()] + " " + n.getDate() + ", " + n.getFullYear() : n.getDate() + " " + ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"][n.getMonth()] + " " + n.getFullYear() } }, t.prototype.getDropdownTimeStampString = function() { var t, n; if (this.timestamp != null) { t = Number(this.timestamp);
			n = new Date(0);
			n.setUTCSeconds(t); return ApplicationState.CultureID == 1 ? ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."][n.getMonth()] + " " + n.getDate() : n.getDate() + " " + ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."][n.getMonth()] } }, t.forceFetchAsync = function(n, i) { var r, u, f;
			i === void 0 && (i = []);
			r = new GetNotificationsArgs;
			u = "";
			i != null && (u = i.join(","), r.TypeIds = i);
			f = function(i) { t.fetchAsync(n, i, u) };
			Actions.getConsumerNotifications(r, f, null, !0) }, t.fetchAsync = function(n, i, r) { var u = null,
			e, f; if (t.cache.Notifications != null && r == null) u = t.cache["Notifications" + r];
		else if (i != null) u = t.CreateConsumerNotificationObj(i), t.cache["Notifications" + r] = u;
		else { e = function(i) { t.fetchAsync(n, i, null) };
			f = new GetNotificationsArgs;
			f.TypeIds = null;
			Actions.getConsumerNotifications(f, e); return } n(u) }, t.cacheFetch = function(n) { var r = null,
			u = LocalAccountStorage.NotificationsAjaxResponse.getObject() || {},
			f = TemplateFetcher.getCacheKey(n),
			t, i; return u != null && (t = u[f], (t || "") != "" && (i = JSON.parse(t), i.version == ApplicationState.BuildVersion && (r = i.value))), r }, t.cacheSave = function(n, t, i) { var r = LocalAccountStorage.NotificationsAjaxResponse.getObject() || {},
			u = new StorageItems.VersionedItem(ApplicationState.BuildVersion, i),
			f = TemplateFetcher.getCacheKey(n);
			r[f] = JSON.stringify(u);
			LocalAccountStorage.NotificationsAjaxResponse.saveObject(r) }, t.GetOnlyCurrentCulture = function(n, t) { if (n != null && t != null) t == 1 ? (n = n.replace(/<\[2\|(.*?)\]>/g, ""), n = n.replace(/<\[1\|(.*?)\]>/g, "$1")) : t == 2 && (n = n.replace(/<\[1\|(.*?)\]>/g, ""), n = n.replace(/<\[2\|(.*?)\]>/g, "$1")); return n }, t.CreateConsumerNotificationObj = function(i) { var f, u, r; if (i != null && i.ErrorCode != null && i.ErrorCode.Id == PublicContracts.ErrorCodeId.OK && i.Notifications != null) { var e = [],
			o = [],
			s = []; for (u = 0; u < i.Notifications.length; u++) r = i.Notifications[u], r != null && (r.Type == "1" && r.ListingIds != null && r.ListingIds.length > 0 ? o.push(new n.Notification(null, r.Type, t.GetOnlyCurrentCulture(r.Text, ApplicationState.CultureID), r.ListingIds, r.ApplicationMode, r.ActionData, r.SearchDate)) : r.Type == "2" && r.ListingIds != null && r.ListingIds.length > 0 ? s.push(new n.Notification(null, r.Type, t.GetOnlyCurrentCulture(r.Text, ApplicationState.CultureID), r.ListingIds, r.ApplicationMode, r.ActionData, null)) : r.Type == "3" && r.ListingIds != null && r.ListingIds.length > 0 && e.push(new n.Notification(null, r.Type, t.GetOnlyCurrentCulture(r.Text, ApplicationState.CultureID), r.ListingIds.reverse(), r.ApplicationMode, r.ActionData, null)));
			f = new t(null, i.TimestampUTCEpoch, e, s, o) } return f }, t.getNotificationText = function(n) { var t = [],
			i; return n.HasPriceUpdate && t.push(Translation.get("PriceChange")), n.HasOpenHouseUpdate && t.push(Translation.get("OpenHouseChange")), n.HasNewImageUpdate && t.push(Translation.get("ImageChange")), ApplicationState.CultureID == 1 ? t.length === 3 && (i = $.inArray(Translation.get("OpenHouseChange"), t), t.splice(i, 1)) : t.length >= 2 && (t = [], t.push(Translation.get("PriceChange") + "...")), t.join(", ") }, t.RefreshNotifications = function(i, r) { var e, f, u, o; if (ApplicationState.UserIsSignedIn)
			if (n.UserAccountSettings.NotificationsEnabled) { if (i == null) { r != null ? n.Notifications.forceFetchAsync(t.RefreshNotifications, r) : LocalAccountStorage.CompareNotificationsNeedsRefresh.get("false") == "true" ? (LocalAccountStorage.CompareNotificationsNeedsRefresh.save("false"), n.Notifications.forceFetchAsync(t.RefreshNotifications, [ConsumerNotificationTypes.Compare])) : LocalAccountStorage.FavNotificationsNeedsRefresh.get("false") == "true" ? (LocalAccountStorage.FavNotificationsNeedsRefresh.save("false"), n.Notifications.forceFetchAsync(t.RefreshNotifications, [ConsumerNotificationTypes.Favourite])) : n.Notifications.fetchAsync(t.RefreshNotifications, null, null); return } if (n.UserAccountSettings.Notifications = i, e = new n.Notifications(i), f = e.hasNotifications(null), n.UserAccountSettings.HasNotifications = f, t.functionCallsToMakeAfterNotificationsFetched != null && t.functionCallsToMakeAfterNotificationsFetched.length > 0)
				for (u = 0; u < t.functionCallsToMakeAfterNotificationsFetched.length; u++) t.functionCallsToMakeAfterNotificationsFetched[u](i);
				t.functionCallsToMakeAfterNotificationsFetched = [];
				f ? (Cookie.HasNotifications.containsValue(ApplicationState.CurrentMode.toString()) == !1 && Cookie.HasNotifications.addValue(ApplicationState.CurrentMode.toString()), $(".m_hdr_glb_actions_notifications").attr("src", "/wp-content/plugins/adk_feed/assets/images/bell.svg")) : Cookie.HasNotifications.containsValue(ApplicationState.CurrentMode.toString()) && Cookie.HasNotifications.removeValue(ApplicationState.CurrentMode.toString());
				o = { NotificationObj: i };
				Events.Fire(t.notificationsRefreshEvent, o) } else t.BlankOutHeaderBell() }, t.BlankOutHeaderBell = function() {}, t.GetNotificationSummaryHTML = function(n, i, r, u, f, e, o, s, h, c) { var a = f,
			v, y, p, l, w; return a = t.formatNotificationTextId(a), v = "", n === "accrd-search-listings" ? v = Translation.get("T597") : n === "accrd-comp" ? (v = Translation.get("T599"), u = e == 1 ? "/" + Translation.get("ResidentialMode") + "/Compares.aspx" : "/" + Translation.get("CommercialMode") + "/Compares.aspx") : (v = Translation.get("T598"), u = RouteHelper.getURL("my-favourites")), y = "0", y = r <= 99 ? r.toString() : "99+", p = f, ApplicationState.IsMobileDevice ? (l = "galleryViewContent_" + n + a + i.toString(), '<a class="profileSectionLinkCon" id="lnk_' + n + a + i.toString() + '" data-section="' + n + '" data-link="' + u + '" data-nid="' + l + '"  data-ntitle="' + f + '" data-ntype="' + ConsumerNotificationTypes[s] + '" data-nmode="' + e + '" data-npageNumber="' + h + '" > <div class="notificationCountImgCon"><div id="accrd_num_' + i + '" class="smallCountCircle">' + y + '<\/div><img id="notificationBell' + n + '" class="accrd-bell" src="/wp-content/plugins/adk_feed/assets/images/bell.svg" alt="" /><\/div><div class="profileSectionLink">' + p + '<\/div><div class="profileSectionLinkChevron"><img src="/wp-content/plugins/adk_feed/assets/images/next-arrow2-grayblue.svg" /><\/div><\/a>') : (l = "galleryViewContent_" + n + a + i.toString(), w = "", w = s == ConsumerNotificationTypes.Search ? '<div class="profileSectionLink"> ' + p + ' <div class="searchDate" > ' + stringToInputDate(c).toString() + " <\/div><\/div>" : '<div class="profileSectionLink"> ' + p + "<\/div>", '<div class="profileSectionLinkCon" id="' + l + '" data-section="' + n + '" data-link="' + u + '" data-nid="' + l + '"  data-ntitle="' + f + '" data-ntype="' + ConsumerNotificationTypes[s] + '" data-nmode="' + e + '" data-npageNumber="' + h + '" > <div class="accrd-hdr"><div class="notificationCountImgCon"><div id="accrd_num_' + i + '" class="smallCountCircleRight notifications">' + y + '<\/div><img id="notificationBell' + n + '" class="accrd-bell" src="/wp-content/plugins/adk_feed/assets/images/bell.svg" alt="" /><\/div>' + w + "<\/div><\/div>") }, t.RenderNotificationListings = function(i, r, u, f, e, o, s, h) { var a = ApplicationConfig.PropertySearchRecordPerPage,
			l = new t(n.UserAccountSettings.Notifications),
			v = l.getListingCount(e, f, u),
			y = function(n) { t.buildSummaryListingsHTML(n, i, r, e, u, f, v, o, s);
				h != null && h() },
			p = l.getListingIds(e, f, u, o, ApplicationConfig.PropertySearchRecordPerPage),
			w = p.join(","),
			b = function() { APIProxy.propertySearch({ ListingIds: w, IncludeTombstones: "0", IncludePins: "0", RecordsPerPage: a.toString(), MaxRecords: "150" }, y, this) },
			c; if (t.functionCallsToMakeAfterNotificationsFetched.push(b), t.functionCallsToMakeAfterNotificationsFetched != null && t.functionCallsToMakeAfterNotificationsFetched.length > 0)
			for (c = 0; c < t.functionCallsToMakeAfterNotificationsFetched.length; c++) t.functionCallsToMakeAfterNotificationsFetched[c](n.UserAccountSettings.Notifications);
			t.functionCallsToMakeAfterNotificationsFetched = [] }, t.RenderNotificationListingsDesktop = function(i, r, u, f, e, o, s, h) { var c = 4,
			l = new t(n.UserAccountSettings.Notifications),
			a = l.getListingCount(e, f, u),
			v = function(n) { t.buildSummaryListingsHTML(n, i, r, e, u, f, a, o, null, s);
				h != null && h() },
			y = l.getListingIds(e, f, u, o, c),
			p = y.join(","),
			w = function() { APIProxy.propertySearch({ ListingIds: p, IncludeTombstones: "0", IncludePins: "0", RecordsPerPage: c.toString(), MaxRecords: "150" }, v, this) };
			t.functionCallsToMakeAfterNotificationsFetched.push(w) }, t.buildSummaryListingsHTML = function(n, i, r, u, f, e, o, s, h, c) { n && t.generateGalleryPage(n, i, r, u, f, e, o, s, h, c) }, t.generateGalleryPage = function(n, i, r, u, f, e, o, s, h, c) { var b = n,
			g = ApplicationState.IsMobileDevice ? ApplicationConfig.PropertySearchRecordPerPage : 4,
			l, a, y, v, p, k, d, w; if (b.Paging.TotalRecords > 0) { for (l = "", a = "", i === "accrd-search-listings" ? (l = Translation.get("T597"), a = o === 1 ? Translation.get("T626").replace(/\[0]/gi, o.toString()).replace(/\[1]/gi, c) : Translation.get("T595").replace(/\[0]/gi, o.toString()).replace(/\[1]/gi, c)) : i === "accrd-comp" ? l = Translation.get("T599") : (l = Translation.get("T598"), r = RouteHelper.getURL("my-favourites"), a = Translation.get("T596").replace(/\[0]/gi, o.toString()).replace(/\[1]/gi, c)), ApplicationState.IsMobileDevice ? $("#" + u).length <= 0 && ($("#notify_listings_results").append('<div id="' + u + '" class="galleryViewContent" style="display: none;"><\/div>'), $("#" + u).html('<a class="subSectionBackLink notifications" id="lnk' + u + 'Back" data-nid="' + u + '" onclick=""><div class="subSectionBackCon"><i class="material-icons subSectionBackArrowIcon">keyboard_arrow_left<\/i><div class="subSectionBackText">' + Translation.get("Back") + '<\/div><\/div><\/a><a class="notificationItemLink" href="' + r + '"><div id="notify-summary-link" class="NotificationSettingsLink"> ' + l + '<\/div><\/a><div id="notify-title" class="subSectionTitle">' + h + "<\/div>")) : ($("#" + u).append('<div id="cardCon_' + u + '" class="galleryViewContent"><\/div>'), $("#" + u + " .galleryHeaderContent").length <= 0 && (f == ConsumerNotificationTypes.Search ? $("#" + u + " .galleryViewContent").html('<div class="galleryHeaderContent"><div class="notificationItemInfo">' + a + '<\/div><a class="notificationItemLink" href="' + r + '"><div class="SavedSearchExecuteButton" style="float: right;"><span class="SavedSearchExecuteIconWrapper btn"><i class="material-icons SavedSearchExecuteIcon" style="color: white;">search<\/i><\/span><\/div><div style="clear:both;"><\/div><\/a><\/div>') : $("#" + u + " .galleryViewContent").html('<div class="galleryHeaderContent"><div class="notificationItemInfo">' + a + '<\/div><a class="notificationItemLink" href="' + r + '"><div id="notify-summary-link" class="btn greenRoundedBtn narrowButton"> ' + l + '<\/div><div style="clear:both;"><\/div><\/a><\/div>'))), y = [], v = 0, p = b.Results; v < p.length; v++) k = p[v], y.push(new ListingCardModel(k));
			d = new ListingResultsModel(y);
			w = new ControlFetcherArgs("notificationSummaryListViewContents" + u + s.toString());
			w.postCallHandler = function(n) { ApplicationState.IsMobileDevice ? $("#" + u).append(n) : ($("#cardCon_" + u).append(n), $(".accrd-notify-summary").accordion("refresh"), $("#" + u + "pageInfo" + (s - 1).toString()).remove(), $("#cardCon_" + u).is(":visible") && setConsistantHeights(".smallListingCard"));
				o > g * s && (ApplicationState.IsMobileDevice ? ($(".notificationListPageInfo").remove(), $("#" + u).append('<div class="notificationListPageInfo" id="' + u + 'pageInfo" data-nid="' + u + '" data-ntype="' + ConsumerNotificationTypes[f] + '" data-ntitle="' + h + '" data-nmode="' + e + '" data-npageNumber="' + s + '"/>'), $("#" + u + "pageInfo" + (s - 1).toString()).remove()) : $("#notificationSummaryListViewContents" + u + s.toString()).append('<div class="notificationListPageInfo" id="' + u + "pageInfo" + s + '" data-nid="' + u + '" data-ntype="' + ConsumerNotificationTypes[f] + '" data-ntitle="' + h + '" data-nmode="' + e + '" data-npageNumber="' + s + '">' + Translation.get("ShowMore") + '<span style="font-size: 18px; color: #23A1C0; padding-left:10px;" class="m_al fa fa-plus-circle"><\/span><\/div>'));
				ApplicationState.IsMobileDevice && window.setTimeout(function() { t.functionCallsAfterNotificationHTML();
					t.ListingPageHasBeenLoaded = !0 }, 250) };
			ControlFetcherJS.fetchSmallListingCards(w, d) } }, t.functionCallsAfterNotificationHTML = function() { if (t.pageCallsToMakeAfterNotificationsHTML != null && t.pageCallsToMakeAfterNotificationsHTML.length > 0)
			for (var n = 0; n < t.pageCallsToMakeAfterNotificationsHTML.length; n++) t.pageCallsToMakeAfterNotificationsHTML[n].registerEventHandlers();
			t.pageCallsToMakeAfterNotificationsHTML = [] }, t.formatNotificationTextId = function(n) { return n.replace(/\s/g, "-").replace(/[^a-z0-9\s]/gi, "").replace(/[_\s]/g, "-") }, t.refreshNotificationCon = function(t) { ApplicationState.UserIsSignedIn && t.find(".notificationCon").each(function() { var u = "",
			i = $(this).attr("data-value").toLowerCase(),
			f = i.split("_")[0],
			e = i.split("_")[1] == "true",
			o = i.split("_")[2] == "true",
			s = i.split("_")[3] == "true",
			h = parseInt(i.split("_")[4]),
			t = !1,
			r = [];
			o && r.push(Translation.get("PriceChange"));
			e && r.push(Translation.get("OpenHouseChange"));
			s && r.push(Translation.get("ImageChange"));
			u = r.join(", ");
			t = o || e || s;
			t && Favourite.exists(f, h) && n.UserAccountSettings.FavNotificationsEnabled || t && Compare.exists(f, h) && n.UserAccountSettings.CompareNotificationsEnabled ? ($(this).find(".m_notification_pill").html(Translation.get("UPDATED") + ":"), $(this).find(".m_listingCardNotificationsText").html(u), $(this).show()) : (t && n.UserAccountSettings.FavNotificationsEnabled || t && n.UserAccountSettings.CompareNotificationsEnabled || t && n.UserAccountSettings.SavedSearchNotificationsEnabled) && ($(this).find(".m_notification_pill").html(Translation.get("NEW")), $(this).show()) }) }, t.notificationsRefreshEvent = "notificationsRefresh", t.functionCallsToMakeAfterNotificationsFetched = [], t.pageCallsToMakeAfterNotificationsHTML = [], t.ListingPageHasBeenLoaded = !0, t.cache = {}, t }();
	n.Notifications = t;
	i = function() {
		function n(n, t, i, r, u, f, e) { if (n)
			for (var o in n) this[o] = n[o];
		else { switch (t) {
			case "1":
				this.type = ConsumerNotificationTypes.Search; break;
			case "2":
				this.type = ConsumerNotificationTypes.Compare; break;
			case "3":
				this.type = ConsumerNotificationTypes.Favourite; break;
			default:
				this.type = ConsumerNotificationTypes.Null } this.text = i;
			this.listingIds = r;
			this.appMode = u == "1" ? ApplicationModes.Residential : ApplicationModes.Commercial;
			this.actionData = f;
			this.searchDate = e } } return n.prototype.iconPath = function() { switch (this.type) {
			case ConsumerNotificationTypes.Search:
				return "/Presentation/wp-content/plugins/adk_feed/assets/images/search-icon.png";
			case ConsumerNotificationTypes.Compare:
				return "/Presentation/wp-content/plugins/adk_feed/assets/images/compare_selected2.png";
			case ConsumerNotificationTypes.Favourite:
				return "/Presentation/wp-content/plugins/adk_feed/assets/images/favourites_selected2.png";
			default:
				return "" } }, n.prototype.linkHref = function() { switch (this.type) {
			case ConsumerNotificationTypes.Search:
				return this.actionData;
			case ConsumerNotificationTypes.Compare:
				return this.appMode == ApplicationModes.Residential ? "/" + Translation.get("Residential") + "/propertyCompare.aspx" : "/" + Translation.get("Commercial") + "/propertyCompare.aspx";
			case ConsumerNotificationTypes.Favourite:
				return "/" + Translation.get("Favourites") + "/propertyFavourites.aspx";
			default:
				return "" } }, n }();
	n.Notification = i })(ConsumerProfile || (ConsumerProfile = {})),
	function(n) {
		function r(n, r, u) { var e, f;
			u === void 0 && (u = []);
			e = [];
			n = n || {};
			r = r || {}; for (f in n) u.indexOf(f) == -1 && (f in r ? n[f] !== r[f] && e.push(new i(t.DifferentValue, f)) : e.push(new i(t.CompareValueMissing, f))); for (f in r) u.indexOf(f) == -1 && (f in n ? n[f] !== r[f] && e.push(new i(t.DifferentValue, f)) : e.push(new i(t.SourceValueMissing, f))); return e }

		function u(n, t, i, r) { var u;
			i === void 0 && (i = []);
			r === void 0 && (r = []);
			n = n || {};
			t = t || {}; for (u in n)
				if (i.indexOf(u) == -1 && (!(u in t) || n[u] !== t[u])) return r.push(u), !1; for (u in t)
				if (i.indexOf(u) == -1 && (!(u in n) || n[u] !== t[u])) return r.push(u), !1; return !0 } var t, i;
		(function(n) { n[n.DifferentValue = 0] = "DifferentValue";
			n[n.SourceValueMissing = 1] = "SourceValueMissing";
			n[n.CompareValueMissing = 2] = "CompareValueMissing" })(t || (t = {}));
		i = function() {
			function n(n, t) { this.Type = n;
				this.PropertyName = t } return n }();
		n.CompareResult = i;
		n.getChangedProperties = r;
		n.areEqual = u }(ObjectCompare || (ObjectCompare = {}));
typeof Object.assign != "function" && (Object.assign = function(n) { "use strict"; var u, i, t, r; if (n == null) throw new TypeError("Cannot convert undefined or null to object"); for (u = Object(n), i = 1; i < arguments.length; i++)
	if (t = arguments[i], t != null)
		for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]); return u });
Array.prototype.some || (Array.prototype.some = function(n) { "use strict"; var t; if (this == null) throw new TypeError("Array.prototype.some called on null or undefined"); if (typeof n != "function") throw new TypeError; var i = Object(this),
	r = i.length >>> 0,
	u = arguments.length >= 2 ? arguments[1] : void 0; for (t = 0; t < r; t++)
	if (t in i && n.call(u, i[t], t, i)) return !0; return !1 });
String.prototype.HTMLSafe || (String.prototype.HTMLSafe = function(n) { if (n === void 0 && (n = !0), n) { var t; try { t = decodeURIComponent(this) } catch (i) { t = this } return $("<div/>").text(t).html() } return $("<div/>").text(this).html() });
Date.prototype.toCREAString || (Date.prototype.toCREAString = function(n) { return n === void 0 && (n = " - "), this.getUTCFullYear() + n + (this.getUTCMonth() + 1) + n + this.getUTCDate() });
$.fn.checkExists = function() { if (!this.length || this.length == 0) throw new Error("No elements matched by " + this.selector); return this };
$.fn.exists = function() { return !this.length || this.length > 0 };
$.fn.outerHTML = function() { var n = ""; return $(this).each(function() { n += $("<div />").append($(this).clone()).html() }), n };
$.fn.visible = function() { return $(this).css("visibility", "visible"), $(this) };
$.fn.hidden = function() { return $(this).css("visibility", "hidden"), $(this) },
	function() {
		function n(n, t) { t = t || { bubbles: !1, cancelable: !1, detail: undefined }; var i = document.createEvent("CustomEvent"); return i.initCustomEvent(n, t.bubbles, t.cancelable, t.detail), i } n.prototype = Event.prototype;
		window.CustomEvent = n }();
var RecentlyViewedListing = function() {
		function n(n) { this.timestamp = (new Date).getTime().toString();
			this.id = "";
			this.id = n || "" } return n.save = function(t, i) { var r = LocalStorage.ListingHistory.getObjects(n.CreateFromJSON),
		f, u;
			r == null && (r = []);
			f = n.getIndexOf(t);
			f > -1 && (n.delete(t), r = LocalStorage.ListingHistory.getObjects(n.CreateFromJSON));
			u = new n(t);
			(i || "") != "" && (u.timestamp = i);
			r.unshift(u);
			r.length > n.maxListings && r.splice(n.maxListings - 1, r.length - n.maxListings);
			LocalStorage.ListingHistory.saveObject(r);
			Cookie.RecentlyViewedListingsCount.save(r.length.toString()) }, n.delete = function(t) { var i = LocalStorage.ListingHistory.getObjects(n.CreateFromJSON),
		r = n.getIndexOf(t);
			i.splice(r, 1);
			LocalStorage.ListingHistory.saveObject(i) }, n.getIndexOf = function(t) { for (var r = LocalStorage.ListingHistory.getObjects(n.CreateFromJSON), i = 0; i < r.length; i++)
			if (r[i].id == t) return i; return -1 }, n.CreateFromJSON = function(t) { var r = new n,
		i; for (i in t) r[i] = t[i]; return r }, n.getAllIds = function(t) { var r, u, i; for (t === void 0 && (t = SortOrder.Descending), r = [], u = n.GetAll(t), i = 0; i < u.length; i++) r.push(u[i].id); return r }, n.GetAll = function(t) { t === void 0 && (t = SortOrder.Ascending); var i = LocalStorage.ListingHistory.getObjects(n.CreateFromJSON); return i.sort(function(n, t) { return Number(n.timestamp) - Number(t.timestamp) }), t === SortOrder.Descending && i.reverse(), i }, n.recentlyViewedListingsAddedEvent = "recentlyViewedListingsAddedEvent", n.maxListings = 12, n }(),
	RouteHelper = function() {
		function n() {} return n.replacePlaceholders = function(n, t) { var r = n,
			i, u; for (i in t) t.hasOwnProperty(i) && (u = "{" + i + "}", r = r.replace("{" + i + "}", t[i])); return r }, n.getURL = function(t, i, r, u) { var e, f, s, o; if (i === void 0 && (i = !0), r === void 0 && (r = null), u === void 0 && (u = null), e = ApplicationState.RoutingDictionary[t.toLowerCase()], f = "", e != null) { if (f = (r || ApplicationState.CultureID) == 2 ? e.FrenchRoute : e.EnglishRoute, s = e.DefaultValues || {}, u != null)
			for (o in u) u.hasOwnProperty(o) && (s[o] = u[o]);
			f = n.replacePlaceholders(f, s) } else Logging.Error("(RouteHelper) URL Route does not exists for key: " + t); return i && (f = "/" + f), f }, n.getRedirectionFromRoute = function(n) { if (ApplicationState.RoutingDictionary != null)
			for (var t in ApplicationState.RoutingDictionary) { if (ApplicationState.RoutingDictionary[t].EnglishRoute == n) return ApplicationState.RoutingDictionary[t].EnglishRedirect; if (ApplicationState.RoutingDictionary[t].FrenchRoute == n) return ApplicationState.RoutingDictionary[t].FrenchRedirect }
			return "" }, n.getRedirection = function(n) { var t = ApplicationState.RoutingDictionary[n.toLowerCase()],
			i = ""; return t != null && (i = ApplicationState.CultureID == 2 ? t.FrenchRedirect : t.EnglishRedirect), i }, n }(),
	RoutingRecord = function() {
		function n(n, t, i, r, u) { this.EnglishRoute = "";
			this.FrenchRoute = "";
			this.EnglishRedirect = "";
			this.FrenchRedirect = "";
			this.DefaultValues = {};
			this.EnglishRoute = n;
			this.FrenchRoute = t;
			this.EnglishRedirect = i;
			this.FrenchRedirect = r;
			u != null && (this.DefaultValues = u) } return n }(),
	RealtorSavedSearch_StorageKey = "RealtorSavedSearches",
	SavedSearchUpdatedArgs = function() {
		function n() { this.updateGigya = !1 } return n }(),
	SavedSearchRefreshArgs = function() {
		function n() {} return n }(),
	SavedSearch = function() {
		function n(n, t, i, r, u, f) { this.name = "";
			this.url = "";
			this.appMode = ApplicationState.CurrentMode;
			this.notify = !1;
			this.name = n || "";
			this.url = t || "";
			this.savedDate = r || new Date;
			this.viewedDate = u || new Date;
			this.appMode = i || ApplicationState.CurrentMode;
			this.notify = f || !1 } return n.prototype.HasNotification = function() { var t = ConsumerProfile.UserAccountSettings.Notifications,
			n, i; if (t != null && ConsumerProfile.UserAccountSettings.SavedSearchNotificationsEnabled)
			for (n = 0; n < t.savedSearchNotifications.length; n++)
				if (i = t.savedSearchNotifications[n], i.text == Utilities.HTMLDecode(this.name) && i.appMode == this.appMode) return !0; return !1 }, n.prototype.HTMLEncodedName = function() { return Utilities.HTMLEncode(this.name) }, n.prototype.DisplaySafeName = function() { return Utilities.HTMLDecode(this.name) }, n.prototype.Save = function(t) { var i, r, u; return t === void 0 && (t = !0), i = n.GetAll(), r = { errorId: SavedSearchError.None, errorValue: null, searches: i }, this.appMode = this.url.toLowerCase().indexOf("propertytypegroupid=2") > -1 ? ApplicationModes.Commercial : ApplicationModes.Residential, ApplicationState.UserIsSignedIn ? i.length == ConsumerProfile.UserAccountSettings.SearchLimit && (r.errorId = SavedSearchError.SearchLimitConsumer, r.errorValue = Translation.get("M61")) : i.length == ApplicationConfig.SearchLimit && (r.errorId = SavedSearchError.SearchLimitGuest, r.errorValue = Translation.get("SearchLimit")), r.errorId === SavedSearchError.None && (i.push(this), n.GetStorageItem().saveObject(i), u = { updateGigya: t }, Events.Fire(n.savedSearchesCountUpdated, { count: i.length })), r }, n.prototype.Delete = function(t) { var i, r, u; for (t === void 0 && (t = !0), i = n.GetAll(), r = 0; r < i.length; r++) i[r].name == this.name && i[r].url == this.url && this.appMode == i[r].appMode && i.splice(r, 1);
			n.GetStorageItem().saveObject(i);
			u = { updateGigya: t } }, n.CreateFromJSON = function(t) { var r = new n,
			i; for (i in t) r[i] = t[i]; return r }, n.GetAll = function(t, i, r) { var f, e, u; for (t === void 0 && (t = null), i === void 0 && (i = SortOrder.Ascending), f = n.GetStorageItem(r).getObjects(n.CreateFromJSON), e = [], u = 0; u < f.length; u++) f[u].appMode == (t || f[u].appMode) && e.push(f[u]); return i === SortOrder.Descending ? e.sort(function(n, t) { var i = new Date(n.savedDate),
			r = new Date(t.savedDate); return r - i }) : e.sort(function(n, t) { var i = new Date(t.savedDate),
			r = new Date(n.savedDate); return r - i }), e }, n.GetAllSearchResults = function(t, i, r) { t === void 0 && (t = null);
			i === void 0 && (i = SortOrder.Ascending); var f = n.GetAll(t, i, r),
				u = { errorId: SavedSearchError.None, errorValue: null, searches: f }; return ApplicationState.UserIsSignedIn ? f.length == ConsumerProfile.UserAccountSettings.SearchLimit && (u.errorId = SavedSearchError.SearchLimitConsumer, u.errorValue = Translation.get("SearchLimitCTA", RouteHelper.getURL("my-saved-searches"))) : f.length == ApplicationConfig.SearchLimit && (u.errorId = SavedSearchError.SearchLimitGuest, u.errorValue = Translation.get("SearchLimitGuestCTA", RouteHelper.getURL("my-saved-searches"))), u }, n.UpdateNotify = function(t, i, r, u) { var f = n.GetByName(t);
			f != null && (f.notify = i, f.Delete(), f.Save(u)) }, n.GetFormattedDate = function(n, t) { var i, u; if (t === void 0 && (t = " - "), i = "", n != null && n != undefined) try { n = new Date(n.toString());
			i = n.toCREAString(t) } catch (o) { i = n.toString() }
			var f = new Date,
				e = f.toCREAString(t),
				r = new Date; return r.setDate(r.getDate() - 1), u = r.toCREAString(t), i == e ? Translation.get("Today") : i == u ? Translation.get("Yesterday") : i }, n.DeleteAll = function(t) { for (var r = n.GetAll(), u, i = r.length - 1; i >= 0; i--) r[i].appMode == (t || r[i].appMode) && r.splice(i, 1);
			n.GetStorageItem().saveObject(r);
			u = { updateGigya: !0 } }, n.GetByName = function(t) { for (var r = n.GetAll(), i = 0; i < r.length; i++)
			if (r[i].name.toString().toLowerCase() == t.toLowerCase()) return r[i]; return null }, n.IsSearchNameIsUnique = function(t) { return n.GetByName(t) == null }, n.UpdateViewDate = function(t) { var i = n.GetByName(t);
			i != null && (i.viewedDate = new Date, i.Delete(), i.Save(!0)) }, n.UpdateName = function(t) { for (var r = n.GetAll(), u, i = 0; i < r.length; i++) r[i].name == t && (r[i].name = t);
			n.GetStorageItem().saveObject(r);
			u = { updateGigya: !0 } }, n.Delete = function(t) { for (var r = n.GetAll(), u = -1, f, i = 0; i < r.length; i++)
			if ((Utilities.IsEncoded(r[i].name) ? Utilities.DecodeString(r[i].name) : r[i].name || "") == t) { u = i; break } u != -1 && r.splice(u, 1);
			n.GetStorageItem().saveObject(r);
			f = { updateGigya: !0 } }, n.GetStorageItem = function(n) { return ApplicationState.UserIsSignedIn && n != UserType.Guest ? LocalAccountStorage.SavedSearchesCP : LocalStorage.SavedSearches }, n.savedSearchesUpdated = "savedSearchesUpdated", n.savedSearchesCountUpdated = "savedSearchesCountUpdated", n }(),
	SavedSearchError;
(function(n) { n[n.None = 0] = "None";
	n[n.SearchLimitGuest = 1] = "SearchLimitGuest";
	n[n.SearchLimitConsumer = 2] = "SearchLimitConsumer" })(SavedSearchError || (SavedSearchError = {}));
var ScrollLocation = function() {
		function n() {} return n.get = function() { var t = [],
		i = sessionStorage.getItem(n.storageKey); return (i || "") != "" && (t = JSON.parse(i)), t }, n.Refresh = function() { var i, r, t; if (n.RestoreNext) { for (i = n.get(), r = 0, t = 0; t < i.length; t++)
			if (i[t].URL == window.location.toString()) { r = i[t].Location; break } Logging.Debug("Refreshing to: " + r.toString(), LogType.ScrollState);
			window.scrollTo(0, r) } else Logging.Debug("Not Refreshing RestoreNext set to false", LogType.ScrollState), n.RestoreNext = !0 }, n.Set = function() { var t = n.get(),
		r = !1,
		i; if (t != null) { for (i = 0; i < t.length; i++)
			if (t[i].URL == window.location.toString()) { t[i].Location = document.documentElement.scrollTop || document.body.scrollTop;
				Logging.Debug("Updating to " + t[i].Location + " (" + window.location.toString(), LogType.ScrollState);
				r = !0; break } } else t = [];
			r == !1 && (Logging.Debug("Adding " + document.documentElement.scrollTop || document.body.scrollTop + " (" + window.location.toString() + ")", LogType.ScrollState), t.push({ URL: window.location.toString(), TimeStamp: Date.now(), Location: document.documentElement.scrollTop || document.body.scrollTop }));
			sessionStorage.setItem(n.storageKey, JSON.stringify(t)) }, n.storageKey = "ScrollLocations", n.RestoreNext = !1, n }(),
	ScrollLocationEntry = function() {
		function n() {} return n }(),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	SessionStorage = function() {
		function n(n, t) { t === void 0 && (t = "");
			this.keyBase = "";
			this.keyBase = n } return n.prototype.getKey = function() { return this.keyBase }, n.prototype.save = function(n, t) { sessionStorage.setItem(t || this.getKey(), n) }, n.prototype.saveObject = function(n) { sessionStorage.setItem(this.getKey(), JSON.stringify(n)) }, n.prototype.get = function(n) { return n === void 0 && (n = ""), sessionStorage.getItem(this.getKey()) || n }, n.prototype.getWithKey = function(n) { return n === void 0 && (n = ""), sessionStorage.getItem(n) }, n.prototype.delete = function() { sessionStorage.removeItem(this.getKey()) }, n.prototype.getObject = function(n) { var t = null,
			i = this.get(""); return i != "" && (t = Utilities.CreateObjectFromJSONString(i, n)), t }, n.prototype.getObjects = function(n) { var t = this.get(""); return Utilities.CreateObjectArrayFromJSONString(t, n) }, n.clear = function() { sessionStorage.clear() }, n.IsEnabled = function() { var t = !1; if (typeof sessionStorage != "undefined") try { sessionStorage.setItem(n.EnabledTest.getKey(), "yes");
			n.EnabledTest.get("") === "yes" && (n.EnabledTest.delete(), t = !0) } catch (i) {}
			return t }, n.saveObject = function(n, t) { if (t != null && jQuery.isEmptyObject(t || {}) == !1) try { sessionStorage.setItem(n, JSON.stringify(t)) } catch (i) { showMessage("Unable to save value to session storage.", MessageType.Error); throw i; } }, n.getObject = function(n) { var i = null,
			t; try { t = sessionStorage.getItem(n) } catch (r) { showMessage("Unable to save value to session storage.", MessageType.Error); throw r; } return t != null && t != "" && (i = JSON.parse(t)), i }, n.removeObject = function(n) { sessionStorage.removeItem(n) }, n.EnabledTest = new n("Test"), n.MessageToShowOnNextPage = new n("MessageOnLoad"), n.ToastToShowOnNextPage = new n("ToastOnLoad"), n.ConsumerImport = new n("consumer_import"), n.SharedNotes = new n("RealtorSharedNotesFave"), n.PostLoginRedirect = new n("postLoginRedirect"), n.LoginAttempts = new n("loginAttempts"), n }(),
	AccountSessionStorage = function(n) {
		function t(t, i) { return i === void 0 && (i = ""), n.call(this, t) || this } return __extends(t, n), t.prototype.getKey = function() { return this.keyBase + "-" + ConsumerProfile.UserAccountSettings.UserHashId }, t.CREAMailUpdates_Profile = new t("pCREA_mail_updates"), t.REALTORMailUpdates_Profile = new t("pREALTOR_mail_updates"), t.CREAMailUpdates = new t("CREA_mail_updates"), t.REALTORMailUpdates = new t("REALTOR_mail_updates"), t.FavouriteNotificationEnabled = new t("FavNotificationsEnabled"), t.ConsumerUser = new t("consumer_user"), t.TransactionTypeId = new t("Interested"), t.TransactionTypeId_Com = new t("Interested_Com"), t }(SessionStorage),
	StorageItems;
(function(n) { var r = function() {
		function n(n, t) { this.timestamp = t == null ? (new Date).getTime() : t;
			this.value = n } return n }(),
	t, i;
	n.TimestampedItem = r;
	t = function() {
		function n(n, t) { this.version = n;
			this.value = t } return n }();
	n.VersionedItem = t;
	i = function() {
		function n(n, t) { this.hash = n;
			this.value = t } return n }();
	n.HashedItem = i })(StorageItems || (StorageItems = {}));
var TemplateBinding = function() {
		function n() {} return n.aggregateScriptContents = function(n) { for (var t = n, i = "", r = /<script\b[^>]*>([\s\S]*?)<\/script>/gm, u; u = r.exec(n);) i += u[1] + "\n"; return t = t.replace(r, ""), t + "<script>" + i + "<\/script> " }, n.getValueFromObject = function(n, t) { var i = "",
		r, f, u; if (n.indexOf("{") > -1 && n.indexOf("}") > -1) { for (r = n, f = new RegExp(/{(.+?)}/g);
																			(u = f.exec(n)) !== null;) r = r.replace("{" + u[1] + "}", t[u[1]]);
			i = r } else i = t[n]; return i === undefined && (Logging.Debug("Value missing: " + n + " on " + t.constructor.name, LogType.TemplateBinding), i = ""), i }, n.getControlBindings = function(n, t) { var r = [],
		e = n.hasAttribute("data-binding") ? n.attributes["data-binding"].value : "",
		u, i; if (e != "")
			for (u = e.split(","), i = 0; i < u.length; i++) { var o = u[i].split("="),
				f = o[0],
				s = o[1];
				t != null && t.indexOf(f.toLowerCase()) > -1 ? r.push(new ControlBinding(f, s)) : r.push(new ControlBinding(f, s)) }
			return r }, n.bindEventsToControl = function(t, i) { i.find("[data-binding*='onclick']").each(function(i, r) { for (var f = n.getControlBindings(r, ["onclick"]), u = 0; u < f.length; u++) $(this).click(t[f[u].ObjectProperty]) }) }, n.bindValueToControl = function(t, i) { for (var u = "", f = $(i).clone(), h = n.getControlBindings(i), e, r, s, c, o = 0; o < h.length; o++)
			if (e = h[o], e.ObjectProperty != "")
				if (r = n.getValueFromObject(e.ObjectProperty, t), r instanceof Array) { for (i.children.length > 1 && Logging.Error("Templates can only one child elment (wrap in another element)"), s = 0; s < r.length; s++) c = n.fillTemplateValues($(i.children[0]), r[s]), u += c;
					f.get(0).innerHTML != null && (f.get(0).innerHTML = u, u = f.get(0).outerHTML) } else if (e.ControlAttribute == "" || e.ControlAttribute.toLowerCase() == "innertext") r instanceof jQuery ? (f.html(r.outerHTML()), u = f[0].outerHTML) : (f.html(r.toString()), u = f[0].outerHTML);
				else if (e.ControlAttribute.toLowerCase() == "visible" && r == !1) { u = ""; break } else if (e.ControlAttribute.toLowerCase() == "hidden" && r == !0) { u = ""; break } else f.attr(e.ControlAttribute, r), u = f[0].outerHTML; return u }, n.fillTemplateValues = function(t, i) { var r = "",
		e = t.length > 1,
		u, f; return e ? (u = "", t.each(function() { u += $(this).wrap("<div><\/div>")[0].outerHTML || "" }), t = $("<div>" + u + "<\/div>"), r = t[0].innerHTML) : r = t[0].outerHTML, f = t[0].childElementCount == 0 ? t.find("[data-binding]").addBack() : t.find("[data-binding]").addBack("[data-binding]"), f.each(function() { var t = n.bindValueToControl(i, this);
			r = r.replace(this.outerHTML, t) }), r }, n.render = function(t, i) { var u = "",
		r, f; if (i instanceof Array)
			for (r = 0; r < i.length; r++) f = n.fillTemplateValues(t, i[r]), u += f;
		else u = n.fillTemplateValues(t, i); return u }, n }(),
	ControlBinding = function() {
		function n(n, t) { this.ControlAttribute = "";
			this.ControlAttribute = n || "";
			this.ObjectProperty = t || "";
			this.ControlAttribute != "" && this.ObjectProperty == "" && (this.ObjectProperty = this.ControlAttribute) } return n }(),
	TemplateFetcher = function() {
		function n() {} return n.getCacheKey = function(n) { return ApplicationState.CultureID.toString() + "_" + ApplicationState.IsMobileDevice.toString() + "_" + n }, n.cacheFetch = function(t) { var u = null,
			f = LocalStorage.getObject("JSTemplates"),
			e = n.getCacheKey(t),
			i, r; return f != null && (i = f[e], (i || "") != "" && (r = JSON.parse(i), r.version == ApplicationState.BuildVersion ? (u = r.value, Logging.Debug("Cached template found", LogType.TemplateFetching)) : Logging.Debug("Cached template is out of date, cached copy ignored", LogType.TemplateFetching))), u }, n.cacheSave = function(t, i, r) { var u = LocalStorage.getObject("JSTemplates") || {},
			f = new StorageItems.VersionedItem(ApplicationState.BuildVersion, r),
			e = n.getCacheKey(t);
			u[e] = JSON.stringify(f).replace(/(\\n|\\r)/g, "");
			LocalStorage.saveObject("JSTemplates", u);
			Logging.Debug("Storing template in cache", LogType.TemplateFetching) }, n.getBasicAJAXArgs = function() { var t = new AjaxCallArgs(null); return t.cacheFetchHandler = n.cacheFetch, t.cacheSaveHandler = n.cacheSave, t.contentType = "application/json; charset=UTF-8", t }, n.fetch = function(n, t) { var i = null;
			AjaxEngine.currentXHRs.forEach(function(t) { n.toLowerCase() == t.url.toLowerCase() && (i = t) });
			i == null ? AjaxEngine.POST(n, null, t) : i.done(function(n) { t.callHandler(AjaxEngine.TransformResponse(n), t.callBackArgs) }) }, n.fetchListingCards = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetListingCardsTemplate", i) }, n.fetchSmallListingCards = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetSmallListingCardsTemplate", i) }, n.fetchListingCardsCarousel = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetListingCardCarouselTemplate", i) }, n.fetchConfirmationDialog2 = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetConfirmationDialog2Template", i) }, n.fetchRealtorCard = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetRealtorCardTemplate", i) }, n.fetchSavedSearch = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetSavedSearchTemplate", i) }, n.fetchSavedSearchForAccount = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetSavedSearchTemplateForAccount", i) }, n.fetchOfficeCard = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetOfficeCardTemplate", i) }, n.fetchRealtorCardsCarousel = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetRealtorCardCarouselTemplate", i) }, n.fetchSmallListingCardsCarousel = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetSmallListingCardCarouselTemplate", i) }, n.fetchListingCard = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetListingCardTemplate", i) }, n.fetchSmallListingCard = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetSmallListingCardTemplate", i) }, n.fetchPagination = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetPaginationTemplate", i) }, n.fetchModalContent = function(t) { var i = n.getBasicAJAXArgs();
			i.callHandler = function(n) { t(n) };
			n.fetch("/Services/TemplateFetcher.asmx/GetModalContentTemplate", i) }, n }(),
	TemplateReponse = function() {
		function n() {} return n }(),
	ToolTip = function() {
		function n() {} return n.closeAll = function(n) { n != null ? n.find(".tooltip").click() : $(".tooltip").click() }, n.remove = function(n, t, i) { n.animate({ top: "-=10", opacity: 0 }, 50, function() { $(this).remove() });
			t.attr("title", i) }, n.init = function(n, t) { var i, r;
			n.length > 0 && ($(window).width() < t.outerWidth() * 1.5 ? t.css("max-width", $(window).width() / 2) : t.css("max-width", 340), i = n.offset().left + n.outerWidth() / 2 - t.outerWidth() / 2, r = n.offset().top - t.outerHeight() - 20, i < 0 ? (i = n.offset().left + n.outerWidth() / 2 - 20, t.addClass("left")) : t.removeClass("left"), i + t.outerWidth() > $(window).width() ? (i = n.offset().left - t.outerWidth() + n.outerWidth() / 2 + 20, t.addClass("right")) : t.removeClass("right"), r < 0 ? (r = n.offset().top + n.outerHeight(), t.addClass("top")) : t.removeClass("top"), t.css({ left: i, top: r }).animate({ top: "+=10", opacity: 1 }, 50)) }, n.show = function(t) { t.each(function(t, i) {
			($(i).attr("data-has-tooltip") || "") == "" && $(i).bind("click focus", function() { var t = $(i).attr("data-tooltipid"),
				r; if (t = t == "" ? $(i).attr("title") : Translation.get(t), r = $('<div class="tooltip"><\/div>'), t && t != "") { $(i).removeAttr("title");
				r.css("opacity", 0).html(t).appendTo("body");
				n.init($(this), r);
				$(window).one("click touchstart", function() { $(window).one("click touchstart", function() { n.remove(r, $(i), t) }) });
				$(window).resize(function() { n.init($(i), r) });
				$(i).attr("data-has-tooltip", "true");
				$(i).bind("blur", function() { n.remove(r, $(i), t) });
				r.bind("click", function() { n.remove(r, $(i), t) }) } }) }) }, n }(),
	Translation = function() {
		function n() {} return n.get = function(n, t) { t === void 0 && (t = ""); var i = ""; try { i = ApplicationState.Translations[n];
			t != "" && (i = i.replace("{0}", t));
			ApplicationConfig.IsDebugMode && i == "" && alert("Translation key not being output to JS: " + n) } catch (r) { return n } return i }, n }();
(function(n) { n[n.Normal = 0] = "Normal";
	n[n.Error = 1] = "Error" })(MessageType || (MessageType = {})),
	function(n) { n[n.Toast = 0] = "Toast";
		n[n.Lightbox = 1] = "Lightbox";
		n[n.Tempbox = 2] = "Tempbox" }(DisplayType || (DisplayType = {}));
toastTimeOut = null;
initLocallogic = function() {};
URLHash = function() {
	function n() {} return n.getUrlParameter = function(n) { for (var u = decodeURIComponent(window.location.search.substring(1)), r = u.split("&"), t, i = 0; i < r.length; i++)
		if (t = r[i].split("="), t[0] === n) return t[1] === undefined ? !0 : t[1]; return "" }, n.getNewParameters = function(n) { for (var r = [], u = n.split("&"), i = window.location.hash.split("&"), t = 0; t <= i.length; t++) $.inArray(i[t], u) == -1 && i[t] && r.push(i[t].split("=")[0]); return r }, n.containsKey = function(t, i) { i === void 0 && (i = ""); var r = window.location.hash.toLowerCase(); return i != "" && (r = i.toLowerCase()), n.getObject(!0, r)[t.toLowerCase()] != null }, n.contains = function(n, t) { var r, u, i; for (t === void 0 && (t = ""), r = window.location.hash.toLowerCase(), t != "" && (r = t.toLowerCase()), u = r.toLowerCase().split("&"), i = 0; i < u.length; i++)
		if (u[i] == n.toLowerCase()) return !0; return !1 }, n.set = function(t, i, r, u) { var e, f;
		i === void 0 && (i = null);
		r === void 0 && (r = !0);
		u === void 0 && (u = !1);
		e = n.getObject();
		(e[t] || "") != i && (e[t] = i, f = location.href.replace(location.hash, "") + "#" + $.param(e), f = f.replace(/=(?=&|$)/, ""), r ? (Logging.Debug("Pushing new entry -> " + f, LogType.History), history.pushState({ id: ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothStateElementID : "", state: {} }, document.title, f)) : (Logging.Debug("Replacing current entry with -> " + f, LogType.History), ApplicationState.CurrentHref = document.location.href, history.replaceState({ id: ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothStateElementID : "", state: {} }, document.title, f)), u && $(window).trigger("hashchange")) }, n.setValues = function(t, i, r, u) { var e, s, l, h, c, o, f;
		i === void 0 && (i = !0);
		r === void 0 && (r = !1);
		u === void 0 && (u = !1);
		e = n.getObject();
		s = []; for (l in t) s.push(l); if (h = !1, u == !1 && (h = ObjectCompare.areEqual(e, t) == !1), u)
			for (c = 0; c < s.length; c++) o = s[c], (t[o] || "") != e[o] && (h = !0, e[o] = t[o]);
		h && (f = "", f = u ? location.href.replace(location.hash, "") + "#" + $.param(e) : location.href.replace(location.hash, "") + "#" + $.param(t), i ? (Logging.Debug("Pushing new entry -> " + f, LogType.History), history.pushState({ id: ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothStateElementID : "", state: {} }, document.title, f)) : (Logging.Debug("Replacing current entry with -> " + f, LogType.History), ApplicationState.CurrentHref = document.location.href, history.replaceState({ id: ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothStateElementID : "", state: {} }, document.title, f)), r && $(window).trigger("hashchange")) }, n.forceLoad = function() { n.load() }, n.setWithNoBackButton = function(t, i) { n.set(t, i, !1) }, n.setWithNoPush = function(t, i) { n.params == null && (n.params = {});
		n.params[t] = i }, n.remove = function(t, i) { i === void 0 && (i = !1);
		n.load();
		n.params && (delete n.params[t], i ? n.pushWithNoBackButton() : n.push()) }, n.removeWithNoBackButton = function(t) { n.remove(t, !0) }, n.removeAllNoBackButton = function() { for (var t in n.params) n.remove(t, !0) }, n.removeAll = function(t, i) { t === void 0 && (t = !0);
		i === void 0 && (i = !0); for (var r in n.params) delete n.params[r];
		t && n.push(i == !1) }, n.removeHash = function(n) { n === void 0 && (n = !0); var t = location.href.replace(location.hash, "");
		n ? (Logging.Debug("Pushing new entry -> " + t, LogType.History), history.pushState({ id: ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothStateElementID : "", state: {}, hashupdate: !0 }, document.title, t)) : (Logging.Debug("Replacing current entry -> " + t, LogType.History), history.replaceState({ id: ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothStateElementID : "", state: {}, hashupdate: !0 }, document.title, t)) }, n.replaceHash = function(n, t) { t === void 0 && (t = !0); var i = location.href;
		i = location.hash != "" ? i.replace(location.hash, "#" + n) : i + "#" + n;
		t ? (Logging.Debug("Pushing new entry -> " + i, LogType.History), history.pushState({ id: ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothStateElementID : "", state: {}, hashupdate: !0 }, document.title, i)) : (Logging.Debug("Replacing current entry -> " + i, LogType.History), history.replaceState({ id: ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothStateElementID : "", state: {}, hashupdate: !0 }, document.title, i)) }, n.removeWithNoPush = function(t) { if (n.params) { delete n.params[t]; return } }, n.get = function(t, i, r) { return (i === void 0 && (i = ""), r === void 0 && (r = !0), !window.location.hash) ? i : (n.load(), n.params[t] == undefined) ? i : r ? decodeURIComponent(n.params[t]) : n.params[t] }, n.getAllKeys = function(t) { var i, o, s, u, f, r, e;
		t === void 0 && (t = []);
		i = [];
		o = n.getObject(); for (s in o) i.push(s); if (t != null && t.length > 0) { for (u = [], f = 0; f < t.length; f++)
			for (r = 0; r < i.length; r++) i[r] == t[f] && u.push(r); for (e = u.length - 1; e >= 0; e--) i.splice(u[e], 1) } return i }, n.keyExists = function(t) { return window.location.hash ? (n.load(), n.params.hasOwnProperty(t)) : !1 }, n.push = function(t) { var r, i, u, f;
		t === void 0 && (t = !1);
		r = []; for (i in n.params) n.params.hasOwnProperty(i) && (i = i, u = n.params[i], r.push(i + (u !== "undefined" ? "=" + u : ""))); if (t) return r.join("&");
		f = r.join("&");
		window.location.hash = f }, n.pushWithNoBackButton = function() { var f = [],
		t, r, u, i; for (t in n.params) n.params.hasOwnProperty(t) && (t = t, r = n.params[t], f.push(t + (r !== "undefined" ? "=" + r : "")));
		u = f.join("&") || "";
		i = window.location.href.split("#")[0];
		u != "" && (i += "#" + u);
		Logging.Debug("Replacing current entry with -> " + i, LogType.History);
		history.replaceState({ id: ApplicationState.IsMobileDevice ? MasterPages.Phone.smoothStateElementID : "" }, document.title, i) }, n.load = function() { var u, r, t, i; if (n.params = null, window.location.hash)
		for (n.params = {}, u = location.href.split("#")[1], r = u.split("&"), i = 0; i < r.length; i++) t = r[i].split("="), n.params[t[0]] = typeof t[1] != "undefined" ? t[1] : t[1] }, n.getObject = function(n, t) { var e, i, u, f, r; if (n === void 0 && (n = !1), t === void 0 && (t = ""), e = {}, i = location.hash, t != "" && (i = t), i.indexOf("#") == 0 && (i = location.hash.slice(1)), (i || "").length > 0)
		for (u = void 0, u = n ? i.toLowerCase().split("&") : i.split("&"), f = 0; f < u.length; f++) r = u[f].split("="), r.length < 2 && r.push(""), e[decodeURIComponent(r[0].replace(/\+/g, " "))] = decodeURIComponent(r[1].replace(/\+/g, " ")); return e }, n }(),
	function(n) { var t = function() {
		function t() {} return t.getLoginAttemptCount = function() { n.UserAccountSettings.InvalidLoginCount = parseInt(SessionStorage.LoginAttempts.getWithKey("InvalidLoginCount-" + $("#signInEmailTxt").val()));
			isNaN(n.UserAccountSettings.InvalidLoginCount) && (n.UserAccountSettings.InvalidLoginCount = 0) }, t.setLoginAttemptCount = function(t, i) { SessionStorage.LoginAttempts.save(t.toString(), "InvalidLoginCount-" + i);
			n.UserAccountSettings.InvalidLoginCount = t }, t.refreshUserAccountSettings = function(t) { if (n.UserAccountSettings.CREA_mail_updates = t.CREA_mail_updates, n.UserAccountSettings.REALTOR_mail_updates = t.REALTOR_mail_updates, n.UserAccountSettings.UserHashId = t.HashUID, n.UserAccountSettings.UID = t.UID, t.user.Notifications != null ? (n.UserAccountSettings.FavNotificationsEnabled = t.user.Notifications.favourites, n.UserAccountSettings.CompareNotificationsEnabled = t.user.Notifications.compares) : t.data && t.data.Notifications != null && (n.UserAccountSettings.FavNotificationsEnabled = t.data.Notifications.favourites, n.UserAccountSettings.CompareNotificationsEnabled = t.data.Notifications.compares), t.user.Searches != null && t.user.Searches.length > 0) { var i = $.grep(t.user.Searches, function(n) { return n.notify === !0 });
			i.length && (n.UserAccountSettings.SavedSearchNotificationsEnabled = !0) }(n.UserAccountSettings.FavNotificationsEnabled || n.UserAccountSettings.CompareNotificationsEnabled || n.UserAccountSettings.SavedSearchNotificationsEnabled) && (n.UserAccountSettings.NotificationsEnabled = !0) }, t.CREA_mail_updates = !1, t.REALTOR_mail_updates = !1, t.NotificationsEnabled = !1, t.FavNotificationsEnabled = !1, t.CompareNotificationsEnabled = !1, t.SavedSearchNotificationsEnabled = !1, t.FavouriteLimit = 150, t.CompareLimit = 5, t.SearchLimit = 50, t.HasNotifications = !1, t.Notifications = null, t.UserHashId = "", t.UID = "", t.InvalidLoginCount = 0, t }();
		n.UserAccountSettings = t }(ConsumerProfile || (ConsumerProfile = {})),
	function(n) {
		function c(n, t, i, r, u) { var f = 0,
			e = window.setInterval(function() { n() ? (clearInterval(e), t(), Logging.Debug("waitFor(" + i + ") complete")) : f >= r && (clearInterval(e), Logging.Error("waitFor(" + i + ") timed out"));
				Logging.Debug("Waiting for " + u.toString() + "ms for true state (" + i + ")");
				f++ }, u) }

		function l(n, t) { if (t != null && t.length > 0)
			for (var i = 0; i < t.length; i++)
				if (t[i].toLowerCase() == n.toLowerCase()) return i; return -1 }

		function a(n) { var t = 0,
			i, r; if (n.length === 0) return t; for (i = 0; i < n.length; i++) r = n.charCodeAt(i), t = (t << 5) - t + r | 0; return t }

		function v(n) { for (var i = n.split(""), u = n.length, r, t = 0; t < u; t++)(r = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž".indexOf(i[t])) != -1 && (i[t] = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz" [r]); return i.join("") }

		function y(n) { var t = n,
			i; for (i in t) n.hasOwnProperty(i) && (t[i] || "") == "" && delete t[i]; return t }

		function p(n, t, i) { var u, f, o, r = null,
			e = 0,
			s; return i || (i = {}), s = function() { e = i.leading === !1 ? 0 : Date.now();
			r = null;
			o = n.apply(u, f);
			r || (u = f = null) },
			function() { var c = Date.now(),
				h; return e || i.leading !== !1 || (e = c), h = t - (c - e), u = this, f = arguments, h <= 0 || h > t ? (r && (clearTimeout(r), r = null), e = c, o = n.apply(u, f), r || (u = f = null)) : r || i.trailing === !1 || (r = setTimeout(s, h)), o } }

		function t(n) { return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") }

		function w(n, i) { var r = "^(" + t(i) + ")+|(" + t(i) + ")+$",
			u = new RegExp(r, "g"); return n.replace(u, "") }

		function b(n) { var t = 0,
			i, r; if (n.length === 0) return t; for (i = 0; i < n.length; i++) r = n.charCodeAt(i), t = (t << 5) - t + r | 0; return t }

		function k(n) { var t = (n.checkExists().val() || "").toString(); return t == " " && (t = ""), t }

		function d(n) { var t = n; return t = t.replace("Listing/", ApplicationState.ApplicationModeString + "/"), t.replace("Inscription/", ApplicationState.ApplicationModeString + "/") }

		function g(n, t) { return n.indexOf(t, n.length - t.length) !== -1 }

		function nt(n) { return (n || "").replace(/"/g, "'").replace(/\\/g, "\\\\") }

		function tt(n) { for (var r = n.split("."), t = window || this, i = 0, u = r.length; i < u; i++) t = t[r[i]], t || Logging.Error("'" + r[i] + "' namespace not found"); if (typeof t != "function") throw new Error("stringToFunction can't seem to find function: " + n); return t }

		function it(n, t) { n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var r = new RegExp("[\\?&#]" + n + "=([^&#]*)", "i"),
			i = r.exec(t === URLParamType.Query ? location.search : location.hash); return i === null ? "" : decodeURIComponent(i[1].replace(/\+/g, " ")) }

		function rt(n) { n = n.replace(/(\#|\?)+/g, "&"); for (var i = {}, r = /([^&=]+)=([^&]*)/g, t; t = r.exec(n);) try { i[decodeURIComponent(t[1])] = decodeURIComponent(t[2]).replace(/\+/g, " ") } catch (u) { i[decodeURI(t[1])] = decodeURI(t[2]) }
			return i }

		function ut(n, t) { for (var i in n)
			if (n.hasOwnProperty(i) && i.toLowerCase() == t.toLowerCase()) { delete n[i]; break } return n }

		function ft() { return typeof google == "object" && typeof google.maps == "object" }

		function et(n) { for (var u = new google.maps.LatLngBounds, f = n.getPaths(), r, i, t = 0; t < f.getLength(); t++)
			for (r = f.getAt(t), i = 0; i < r.getLength(); i++) u.extend(r.getAt(i)); return u }

		function ot() { LocalStorage.IsEnabled() == !1 || SessionStorage.IsEnabled() == !1 || Cookie.IsEnabled() == !1 }

		function r(n) { try { return i(decodeURIComponent(n)) } catch (t) { return i(n) } }

		function i(n) { return $("<div/>").text(r(n)).html() }

		function st(n) { return encodeURIComponent(n).replace(/'/g, "%27") }

		function u(n) { return decodeURIComponent(n).replace(/%27/g, "'") }

		function ht(n) { return n != u(n) }

		function ct(n, t, i) { t = t.replace(/\n/, ""); var u = new RegExp("^(.{0," + n + "})(?: |$)", "gi"),
			r = t.match(u); return t.length > n && i ? r[0] + "..." : r[0] }

		function lt(n, t, i, r, u) { if (i === void 0 && (i = ""), r === void 0 && (r = !1), u === void 0 && (u = ""), t = t || "", i && i.length > 0)
			for (var f = 0; f < i.length; f++) t = t.replace("{" + f + "}", i[f]);
			r ? $("#" + n).qtip({ content: t, position: { my: "bottom left", at: "top left", target: $("#" + n) }, style: { classes: "qtip-red " + u }, show: { event: "focus" }, hide: { event: "blur" } }) : $("#" + n).qtip({ content: t, position: { my: "top left", at: "bottom left", target: $("#" + n) }, style: { classes: "qtip-red " + u }, show: { event: "focus" }, hide: { event: "blur" } });
			$("#" + n).parent().hasClass("m_frm_input_wrp") ? $("#" + n).parent().addClass("errorQtipField") : $("#" + n).addClass("errorQtipField");
			$("#" + n).qtip("show") }

		function at(n, t) { var i; return typeof t == "string" && (i = /\d{4}-\d{1,2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.exec(t), i) ? new Date(i[0]) : t }

		function vt(t, i) { var f = [],
			u, r; if (t != "")
			for (u = JSON.parse(t, n.JSONDateReviver), r = 0; r < u.length; r++) f.push(i(u[r])); return f }

		function yt(n, t) { var i = null,
			r; return n != null && n != "" && (r = JSON.parse(n), i = t(r)), i }

		function pt(n, t) { t === void 0 && (t = 30); var i = (new Date).getTime() - t * 864e5; return n < i }

		function wt(n, t) { var i; return i = t == 2 ? ["janv", "févr", "mars", "avril", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], i[n] }

		function bt(n) { var u = new Date,
			f = new RegExp(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/),
			e = new RegExp(/(\d{1,2})\/(\d{1,2})\/(\d{4}) (\d{1,2}):(\d{2}):(\d{2}) ([a|p]m)/i),
			t = { Day: -1, Month: -1, Year: -1, Hour: -1, Minute: -1, Second: -1, TimePeriod: -1 },
			i, r; return f.test(n) ? (t.Year = 1, t.Month = 2, t.Day = 3, t.Hour = 4, t.Minute = 5, t.Second = 6, i = f.exec(n), u = new Date(Number(i[t.Year]), Number(i[t.Month]) - 1, Number(i[t.Day]), Number(i[t.Hour]), Number(i[t.Minute]), Number(i[t.Second]))) : e.exec(n) && (t.Day = 1, t.Month = 2, t.Year = 3, t.Hour = 4, t.Minute = 5, t.Second = 6, t.TimePeriod = 7, i = e.exec(n), r = Number(i[t.Hour]), i[t.TimePeriod].toLowerCase() == "pm" && r != 12 && (r += 12), u = new Date(Number(i[t.Year]), Number(i[t.Month]) - 1, Number(i[t.Day]), r, Number(i[t.Minute]), Number(i[t.Second]))), u }

		function kt(n, t) { var i = document.createElement("script"),
			r;
			i.type = "text/javascript";
			i.async = !0;
			i.defer = !0;
			i.src = n;
			t != null && i.addEventListener("load", function() { t() }, !1);
			r = document.getElementsByTagName("head")[0];
			r.appendChild(i) }

		function gt(n) { return dt.indexOf(n) > -1 ? ApplicationModes.Commercial : ApplicationModes.Residential }

		function ni(n) { var i = Math.floor(n),
			t = parseFloat((n - Math.floor(n)).toFixed(2)) * 100; return t = t <= 24 ? 0 : t >= 25 && t <= 74 ? .5 : 1, i + t }

		function ti(n) { n = n / 20; var i = Math.floor(n),
			t = parseFloat((n - Math.floor(n)).toFixed(2)) * 100; return t = t <= 24 ? 0 : t >= 25 && t <= 74 ? .5 : 1, i + t }

		function ii() { var t = window.location,
			n = window.location.origin;
			(document.referrer || n).indexOf(n) >= 0 && history.length > 1 ? history.back() : t.href = "/" }

		function ri(n) { var t = n; return $.each(AccountPages, function(i, r) { r.toLowerCase() == n && (t = r) }), t }

		function ui(n, t) { var f = new UAParser;
			f.setUA(navigator.userAgent); var i = f.getResult(),
				r = "<br>",
				u = ""; return u = "From : " + n + r, u += "Email : " + t + r, u += i.device.type != undefined || i.device.model != undefined || i.device.vendor != undefined ? "Device :  type: " + i.device.type + " model: " + i.device.model + " vendor: " + i.device.vendor + r : "CPU/Details :  type: " + i.cpu.architecture + " Name: " + i.engine.name + " version: " + i.engine.version + r, u += "Browser : " + i.browser.name + " version: " + i.browser.version + r, u += "OS : " + i.os.name + " version: " + i.os.version + r, u += "User: " + LocalAccountStorage.ConsumerDisplayName.get() + r + r, u + ("Email Body : " + r) }

		function fi(n, t) { n === void 0 && (n = !1);
			window.opener != null ? (window.close(), n && window.opener.showMessage(t)) : n && showMessage(t) }

		function ei(n) { var t = 0,
			i, r; if (n.length === 0) return t; for (i = 0; i < n.length; i++) r = n.charCodeAt(i), t = (t << 5) - t + r | 0; return t }

		function f() { var i = localStorage.getItem("ListingHistory") || "",
			t, n; if (i != "" && i.indexOf("appMode") > -1)
			for (t = JSON.parse(i), n = 0; n < t.length; n++) RecentlyViewedListing.save(t[n].id, t[n].timestamp) }

		function e() { LocalStorage.FriendsEmail.get("") == "" && LocalStorage.FriendsEmail.save($.cookie("USR_DTA_FRND_EML") || "");
			LocalStorage.EmailFullName.get("") == "" && LocalStorage.EmailFullName.save($.cookie("USR_DTA_NME") || "");
			LocalStorage.EmailFirstName.get("") == "" && LocalStorage.EmailFirstName.save($.cookie("USR_DTA_NME") || "");
			LocalStorage.EmailLastName.get("") == "" && LocalStorage.EmailLastName.save($.cookie("USR_DTA_LST_NME") || "");
			LocalStorage.MyEmail.get("") == "" && LocalStorage.MyEmail.save($.cookie("USR_DTA_EML") || "") }

		function o() { Cookie.PreferredMeasurementUnits.get("") == "" && ($.cookie("PreferedMeasurementUnit") || !1) && Cookie.PreferredMeasurementUnits.save($.cookie("PreferedMeasurementUnit")) }

		function oi() { LocalStorage.R6DataImported.get("") == "" && (f(), e(), o(), LocalStorage.R6DataImported.save((new Date).getTime().toString())) }

		function si(n) { var t = URLHash.getObject(!0, n); return delete t.applicationid, delete t.recordsperpage, delete t.cultureid, delete t.v, (t.page || !0) && (t.page = "1"), $.param(t) }

		function hi(n) { var t = n,
			i = new RegExp(/([&?][^&?=]+=[^&?]+)+/ig); return t.replace(i, "") }

		function ci(n, t) { var u, o, i;
			t === void 0 && (t = !0); var f = {},
				e = "[&?]([^&?=]+)=?([^&?]*)",
				s = t == !1 ? new RegExp(e, "gi") : new RegExp(e, "g"),
				r = n.match(s); if (r != null && r.length > 0)
				for (u = 0; u < r.length; u++) o = r[u], i = new RegExp(e).exec(o), i != null && i.length == 3 && (i[1] != null && i[1].length > 0 && t ? f[i[1]] = i[2] : i[1] != null && i[1].length > 0 && !t && (f[i[1].toLowerCase()] = i[2].toLowerCase())); return f }

		function s(n, t) { var r = n,
			i; for (i in t) n[i] != null && delete r[i]; return r }

		function h(n, t) { var r = n,
			i; for (i in t) r[i] = t[i]; return r }

		function li(n) { var i = "?",
			t; for (t in n) i += n[t] != null && n[t].toString().length > 0 ? t + "=" + n[t] + "&" : t + "&"; return i.substring(0, i.length - 1) }

		function ai(t, i) { var e, o, r, f, u;
			i === void 0 && (i = !0);
			o = new RegExp("[?][^?]+", "gi");
			e = t.replace(o, "");
			r = n.getQueryObjUrl(t, i);
			f = {}; for (u in r) f[u.toLowerCase()] == !0 ? delete r[u] : f[u.toLowerCase()] = !0; return e + n.getURLQueryParamFormat(r) }

		function vi(n, t, i) { var r = n; return r = h(r, i), s(r, t) }

		function yi(t, i, r, u, f) { var s, e, h, o, c; if (i === void 0 && (i = ""), r === void 0 && (r = 0), u === void 0 && (u = 0), f === void 0 && (f = !1), s = n.cleanQueryUrl(i), e = n.getQueryObjUrl(i), delete e.resize, delete e.fit, h = /[?](fit|resize)=([0-9]+)(([%]2C)|,)([0-9]+).*/i, o = i.match(h), f && r > 0 && u == 0) e.w = r;
		else if (o != null && o.length > 0) { var l = parseInt(o[5]),
			a = parseInt(o[2]),
			v = l / a;
			e.resize = r + "," + (u > 0 ? u : parseInt((r * v).toString())) } else r > 0 && u > 0 && (e.resize = r + "," + u); return c = n.getURLQueryParamFormat(e), s + c }

		function pi() { var t = function() { try { var n = window.navigator.userAgent,
			t = n.indexOf("MSIE ");
				t > -1 ? document.execCommand("Stop") : window.stop() } catch (i) { Logging.Error(i) } },
			n; if (n = ApplicationState.IsMobileDevice ? "/real-estate" : RouteHelper.getURL("terms-of-use"), window.location.pathname != n || URLHash.getUrlParameter("previousPage") != "PDP" || ApplicationState.IsMobileDevice) { if (URLHash.getUrlParameter("previousPage") == "PDP" && URLHash.get("forwardOnly") == "false" && ApplicationState.IsMobileDevice && location.pathname.indexOf(n) == 0) { if (Core.UserNeedsToAcceptTOS() === !1) { URLHash.set("forwardOnly", "true", !1);
			t();
			window.history.go(-1); return } } else if (URLHash.getUrlParameter("previousPage") == "PDP" && URLHash.get("forwardOnly") == "true" && ApplicationState.IsMobileDevice && location.pathname.indexOf(n) == 0) { if (Core.UserNeedsToAcceptTOS() === !1) { URLHash.set("forwardOnly", "false", !1);
			t();
			window.history.go(1); return } } else if (URLHash.getUrlParameter("previousPage") == "PDP" && ApplicationState.IsMobileDevice && location.pathname.indexOf(n) == 0) { URLHash.set("forwardOnly", "false", !1); return } } else if (Core.UserNeedsToAcceptTOS() == !1) return t(), window.location.replace(Cookie.TargetPage.get()), !0; return !1 }

		function wi() { var n; if (n = ApplicationState.IsMobileDevice ? "/real-estate" : RouteHelper.getURL("terms-of-use"), window.location.pathname != n || URLHash.getUrlParameter("previousPage") != "PDP" || ApplicationState.IsMobileDevice) { if (URLHash.getUrlParameter("previousPage") == "PDP" && URLHash.get("forwardOnly") == "false" && ApplicationState.IsMobileDevice && location.pathname.indexOf(n) == 0) { if (Core.UserNeedsToAcceptTOS() === !1) return !0 } else if (URLHash.getUrlParameter("previousPage") == "PDP" && URLHash.get("forwardOnly") == "true" && ApplicationState.IsMobileDevice && location.pathname.indexOf(n) == 0) { if (Core.UserNeedsToAcceptTOS() === !1) return !0 } else if (URLHash.getUrlParameter("previousPage") == "PDP" && ApplicationState.IsMobileDevice && location.pathname.indexOf(n) == 0) return !1 } else if (Core.UserNeedsToAcceptTOS() == !1) return !0; return !1 } n.waitFor = c;
		n.indexOfValue = l;
		n.createHash = a;
		n.removeAccents = v;
		n.removeBlankProperties = y;
		n.throttle = p;
		n.escapeRegExp = t;
		n.trimEnd = w;
		n.hash = b;
		n.getFormInputValue = k;
		n.ConvertModelessListingDetailsURL = d;
		n.endsWith = g;
		n.cleanJSONValue = nt;
		n.stringToFunction = tt;
		n.getParamValueByName = it;
		n.getObjectFromQueryString = rt;
		n.DeleteProperty = ut;
		n.isGoogleMapsDefined = ft;
		n.getPolygonBounds = et;
		n.CheckIfRequiredFeaturesEnabled = ot;
		n.HTMLDecode = r;
		n.HTMLEncode = i;
		n.EncodeString = st;
		n.DecodeString = u;
		n.IsEncoded = ht;
		n.LimitWording = ct;
		n.ErrorOutField = lt;
		n.JSONDateReviver = at;
		n.CreateObjectArrayFromJSONString = vt;
		n.CreateObjectFromJSONString = yt;
		n.isOlderThan = pt;
		n.getShortMonthString = wt;
		n.parseAPIDateString = bt;
		n.loadScript = kt; var dt = ["304", "305", "306", "307", "309", "311", "312"];
		n.getModeFromPropertyType = gt;
		n.roundRankRating = ni;
		n.roundRealSatisfiedRating = ti;
		n.backLogic = ii;
		n.formatAccountSection = ri;
		n.buildEmailFeedbackMessage = ui;
		n.closeOpener = fi;
		n.getHashCode = ei;
		n.ImportR6_RecentlyViewed = f;
		n.ImportR6_EmailFormData = e;
		n.ImportR6_PreferredMeasurements = o;
		n.ImportR6Data = oi;
		n.CleanRealtorSearchHash = si;
		n.cleanQueryUrl = hi;
		n.getQueryObjUrl = ci;
		n.removeQueryParams = s;
		n.addQueryParams = h;
		n.getURLQueryParamFormat = li;
		n.removeDuplicateParamFrom = ai;
		n.getFinalEmbedQueryParam = vi;
		n.resizeWPImageUrl = yi;
		n.termOfUseRedirectExec = pi;
		n.termOfUseRedirectNeed = wi }(Utilities || (Utilities = {}));
var __extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	Control = function() {
		function n() {} return n }(),
	WebControl = function(n) {
		function t(t, i) { var r = n.call(this) || this; return r.model = t, r.clientId = i, r } return __extends(t, n), t.friendlyClientId = function(n) { var t = "",
			i; return (n || "") != "" && n.indexOf("ctl") > -1 ? (i = n.split("_"), t = i[i.length - 1]) : t = n, t }, t.prototype.init = function() { if (this.loadModel == null && Logging.Debug("Ensure class has it a constructor that accepts the actual model class with a super call to this constructor", LogType.Other), this.errorHandler != null) try { this.loadModel(this.model);
			this.registerEventHandlers();
			this.render() } catch (n) { this.errorHandler(n) } else this.loadModel(this.model), this.registerEventHandlers(), this.render();
			Events.Fire(t.webControlLoadedEvent, { id: t.friendlyClientId(this.clientId), object: this }) },
			t.getControlValue = function(n, t, i, r) {
				var e, u, s, f;
				if (t === void 0 && (t = !0), i === void 0 && (i = null), r === void 0 && (r = !0), e = null, (t == !1 || $(n).is(":visible")) && (i == null || i($(n)))) {
					if (u = "", $(n).prop("type") == "checkbox")
						$(n).prop("checked") && (u = "1");

					else if ($(n).prop("type") == "select-multiple")
						($(n).val() || "") != "" && (u = $(n).val().toString());

					else if (($(n).attr("data-valueclass") || "") != "")
						s = $(n).attr("data-valueclass"), u = $(n).find("." + s).attr("data-value");

					else if (($(n).attr("data-type") || "") == "dayssince") {
						if (($(n).val() || "") != "") {
							f = void 0;
							f = $(n).attr("type") == "date" ? stringToDate2($(n).val()) : stringToDate($(n).val());
							f.setDate(f.getDate());

							var
								o = new Date,
								h = new Date(o.getFullYear(), o.getMonth(), o.getDate());

							u = (Math.round(Math.abs((f.getTime() - h.getTime()) / 864e5)) + 1).toString()
						}

					} else
						$(n).prop("tagName").toLowerCase() == "table" ? u = $(n).find("input:checked").val() : ($(n).val() || "").trim() != "" && (u = r ? Utilities.EncodeString($(n).val()) : $(n).val());
					(u || "") != "" && Binding.readConstraintPasses($(n)) && (e = u)
				}

				return e
			},

			t.getValuesFromControlsAsObject = function(n, i, r, u) {
				var e, f, o, s;
				console.log( n );
				for (i === void 0 && (i = !0), r === void 0 && (r = null), u === void 0 && (u = !1), e = {}, f = 0, o = n; f < o.length; f++)
					s = o[f], $("#" + s).find("[data-hashkey]").each(function(n, f) {
						var o = t.getControlValue(f, i, r, u);
						o != null && (Logging.Debug("Read: " + $(f).attr("data-hashkey") + " = '" + o + "'", LogType.Binding),
							e[$(f).attr("data-hashkey")] = o)
					});
				return e
			},

			t.webControlLoadedEvent = "webControlLoadedEvent", t }(Control),
	WebPage = function(n) {
		function t(t, i) { var r = n.call(this) || this; return r.model = t, r.clientId = i, r.checkForRedirectToUpdateAlternateTag(), r.initRegionalCalendar(), r } return __extends(t, n), t.prototype.initRegionalCalendar = function() { ApplicationState.CultureID == 1 ? ($.datepicker.regional["en-CA"] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "dd/mm/yy", firstDay: 1, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, $.datepicker.setDefaults($.datepicker.regional["en-CA"])) : ($.datepicker.regional["fr-CA"] = { closeText: "Fermer", prevText: "Précédent", nextText: "Suivant", currentText: "Aujourd'hui", monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"], monthNamesShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août.", "sept.", "oct.", "nov.", "déc."], dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"], dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."], dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"], weekHeader: "Sem.", firstDay: 1, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, $.datepicker.setDefaults($.datepicker.regional["fr-CA"])) }, t.prototype.checkForMessageToShowOnLoad = function() { var t = URLHash.get("showmessage", ""),
			n, i;
			t != "" && ($.featherlight("<div class='lightBoxTitle'>&nbsp;<\/div><div class='showMessageText'>" + Translation.get(t) + "<\/div>", { closeIcon: "<img class='dialogCloseX' src='/wp-content/plugins/adk_feed/assets/images/x-gray.svg' alt='' />" }), n = URLHash.getObject(), delete n.showmessage, i = window.location.href.split("#")[0] + "#" + $.param(n), history.replaceState({ id: MasterPages.Phone.smoothStateElementID }, document.title, i)) }, t.prototype.checkForRedirectToUpdateAlternateTag = function() { var t, n; if (location.hash != "") { t = location.pathname + location.hash; for (n in ApplicationState.RoutingDictionary) ApplicationState.RoutingDictionary.hasOwnProperty(n) && (ApplicationState.CultureID == 1 && ApplicationState.RoutingDictionary[n].EnglishRedirect == t || ApplicationState.CultureID == 2 && ApplicationState.RoutingDictionary[n].FrenchRedirect == t) && ($("link[hreflang='en-ca']").attr("href", ApplicationState.RoutingDictionary[n].EnglishRoute), $("link[hreflang='fr-ca']").attr("href", ApplicationState.RoutingDictionary[n].FrenchRoute)) } }, t.prototype.onError = function() {}, t.prototype.init = function() { if (this.loadModel == null && Logging.Debug("Ensure class has it a constructor that accepts the actual model class with a super call to this constructor", LogType.Other), this.errorHandler != null) try { this.loadModel(this.model);
			this.registerEventHandlers();
			this.render() } catch (n) { this.errorHandler(n) } else this.loadModel(this.model), this.registerEventHandlers(), this.render();
			this instanceof MasterPage == !1 && Events.Fire(t.pageLoadedEvent, { id: WebControl.friendlyClientId(this.clientId), object: this }) }, t.pageLoadedEvent = "pageLoadedEvent", t }(Control),
	MasterPage = function(n) {
		function t(i, r) { var u = n.call(this, i, r) || this; return Events.Fire(t.masterLoadedEvent, { id: u.clientId, object: u }), u } return __extends(t, n), t.masterLoadedEvent = "masterLoadedEvent", t.GoogleAPILoaded = "GoogleAPILoaded", t.OpenedDialogs = [], t }(WebPage),
	ModelBase = function() {
		function n() { this.IsUserSignedIn = ApplicationState.UserIsSignedIn } return n }(),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	CalculatorModel = function(n) {
		function t(t, i, r) { var u = n.call(this) || this; return u.Price = t, u.City = i, u.ProvinceCode = r, u } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	CityModel = function(n) {
		function t(t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g) { var nt = n.call(this) || this; return nt.Id = t, nt.CityName = i, nt.CultureId = r, nt.NumPropsForSale = u, nt.NumPeople = f, nt.AvgPrice = e, nt.AvgPriceCanada = o, nt.CityDescriptionTitle = s, nt.CityDescriptionBodyText = h, nt.SearchToken = c, nt.SearchURL = l, nt.ProvinceName = a, nt.CityH1Tag = v, nt.CityDescriptionImageBin = y, nt.CityFactsOverlayImageBin = p, nt.CityTitleImageBin = w, nt.CityFactsOverlayTitle = b, nt.CityFactsOverlayBodyText = k, nt.Archive = d, nt.CityTitleImagePathAltTag = g, nt } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	ConfirmationDialogModel = function(n) {
		function t(t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b) { var k = n.call(this) || this; return k.ID = "", k.TitleTextID = "", k.BodyTextID = "", k.ButtonPositiveID = "", k.ButtonNegativeID = "", k.ButtonPositiveTextID = "", k.ButtonNegativeTextID = "", k.ButtonPositiveOnClick = "", k.ButtonNegativeOnClick = "", k.CloseOnClick = "", k.ButtonNegativeStyle = "", k.BeforeOpen = null, k.BeforeClose = null, k.AfterOpen = null, k.AfterClose = null, k.OpenTrigger = "", k.CloseTrigger = "", k.ID = t, k.TitleTextID = i, k.BodyTextID = r, k.ButtonPositiveID = u, k.ButtonNegativeID = f, k.ButtonPositiveTextID = e, k.ButtonNegativeTextID = o, k.ButtonPositiveOnClick = s, k.ButtonNegativeOnClick = h, k.CloseOnClick = c, k.ButtonNegativeStyle = l, a && (k.BeforeOpen = a), v && (k.BeforeClose = v), y && (k.AfterOpen = y), p && (k.AfterClose = p), k.OpenTrigger = w, k.CloseTrigger = b, k } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	ConfirmationDialogModel2 = function(n) {
		function t(t, i, r, u, f, e, o, s, h, c, l, a, v, y, p) { var w = n.call(this) || this; return w.ID = "", w.TitleText = "&nbps;", w.BodyContent = null, w.ButtonPositiveID = "", w.ButtonNegativeID = "", w.ButtonCloseID = "", w.ButtonPositiveText = "", w.ButtonNegativeText = "", w.ButtonPositiveOnClick = function() {}, w.ButtonNegativeOnClick = function() {}, w.ButtonNegativeStyle = "", w.ButtonCloseOnClick = function() {}, w.BeforeOpen = function() {}, w.BeforeClose = function() {}, w.AfterOpen = function() {}, w.AfterClose = function() {}, w.OpenTrigger = "", w.CloseTrigger = "", w.SetFocusOnLoad = !0, w.ShowNegativeButton = null, w.ShowCloseButton = !0, w.ShowTitleBar = !0, w.ShowButtons = !0, w.ID = t, w.TitleText = i, w.BodyContent = r ? r : $(r), w.ButtonPositiveID = w.ID + "_PositiveBtn", w.ButtonNegativeID = w.ID + "_NegativeBtn", w.ButtonCloseID = w.ID + "_CloseBtn", w.ButtonPositiveText = u || "", w.ButtonNegativeText = e || "", w.ButtonPositiveOnClick = f, w.ButtonNegativeOnClick = o, w.ButtonCloseOnClick = h, w.ButtonNegativeStyle = s || "", c && (w.BeforeOpen = c), l && (w.BeforeClose = l), a && (w.AfterOpen = a), v && (w.AfterClose = v), w.OpenTrigger = y || "", w.CloseTrigger = p || ApplicationState.IsMobileDevice ? "touchstart" : "click", (w.ShowNegativeButton == null || w.ShowNegativeButton === undefined) && (w.ShowNegativeButton = w.ButtonNegativeText != ""), w } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	ConsumerProfileModel = function(n) {
		function t(t) { var i = n.call(this) || this; return i.firstName = t.firstName, i.lastName = t.lastName, i.displayName = t.displayName, i.email = t.email, i.UID = t.UID, i.HashUID = t.HashUID, i.regToken = t.regToken, i.GigyaError = t.GigyaError, i.validationErrors = t.validationErrors, i.profile = t.profile, i.moreAboutYouCondition = t.moreAboutYouCondition, i.socialTermsCondition = t.socialTermsCondition, i.revisedTermsCondition = t.revisedTermsCondition, i.LoginProviderType = t.LoginProviderType, i.LoginProviderTypeJSON = t.LoginProviderTypeJSON, i.lastUpdatedTimestamp = t.lastUpdatedTimestamp, i.Favourites = t.Favourites, i.Compares = t.Compares, i.Searches = t.Searches, i.Notes = t.Notes, i.user = t.user, i.user_json = t.user_json, i.pwrtToken = t.pwrtToken, i.Interested = t.Interested, i.Interested_Com = t.Interested_Com, i.Buyer = t.Buyer, i.Buyer_Com = t.Buyer_Com, i.CREA_mail_updates = t.CREA_mail_updates, i.REALTOR_mail_updates = t.REALTOR_mail_updates, i.Salesforce_Contact_CREA_ID = t.Salesforce_Contact_CREA_ID, i.NotificationsEnabled = t.NotificationsEnabled, i.FavNotificationsEnabled = t.FavNotificationsEnabled, i.CompareNotificationsEnabled = t.CompareNotificationsEnabled, i.SavedSearchNotificationsEnabled = t.SavedSearchNotificationsEnabled, i.unsubscribeLink = t.unsubscribeLink, i.pardot_error = t.pardot_error, i } return __extends(t, n), t }(ModelBase),
	GigyaError = function() {
		function n() {} return n }(),
	GigyaValidationErrors = function() {
		function n() {} return n }(),
	user_profile = function() {
		function n() {} return n }(),
	Favourites = function() {
		function n() {} return n }(),
	Compares = function() {
		function n() {} return n }(),
	Searches = function() {
		function n() { this.notify = !1 } return n }(),
	Notes = function() {
		function n() {} return n }(),
	Phones = function() {
		function n() {} return n }(),
	OptInOut = function() {
		function n() {} return n }(),
	ResidentialSearch = function() {
		function n() { this.measurements = "2";
			this.location = "";
			this.radius = "10";
			this.propertyType = "0";
			this.bathrooms = "0-0";
			this.bedrooms = "0-0";
			this.priceMin = "0";
			this.priceMax = "0";
			this.rentMin = "0";
			this.rentMax = "0";
			this.listedSince = "";
			this.openHouse = !1;
			this.buildingType = "0";
			this.buildingStyle = "0";
			this.numberOfUnits = "0-0";
			this.buildingSize = "0-0";
			this.buildingSpace = "0-0";
			this.ownership = "0";
			this.storeys = "0-0";
			this.propertyView = "0";
			this.buildingAmenities = "0";
			this.amenitiesNearby = "0";
			this.landSize = "0-0";
			this.farmType = "0";
			this.crops = "0";
			this.livestock = "0";
			this.AC = !1;
			this.pool = !1;
			this.fireplace = !1;
			this.garage = !1;
			this.waterfront = !1;
			this.acreage = !1;
			this.landUse = "0";
			this.parkingSpaces = "0-0";
			this.parkingType = "0";
			this.zoning = "0";
			this.keywords = "" } return n }(),
	CommercialSearch = function() {
		function n() { this.measurements = "2";
			this.location = "";
			this.radius = "10";
			this.propertyType = "0";
			this.bathrooms = "0-0";
			this.bedrooms = "0-0";
			this.priceMin = "0";
			this.priceMax = "0";
			this.rentMin = "0";
			this.rentMax = "0";
			this.listedSince = "";
			this.openHouse = !1;
			this.buildingType = "0";
			this.buildingStyle = "0";
			this.numberOfUnits = "0-0";
			this.buildingSize = "0-0";
			this.buildingSpace = "0-0";
			this.buildingAmenities = "0";
			this.amenitiesNearby = "0";
			this.landSize = "0-0";
			this.farmType = "0";
			this.majorBusiness = "0";
			this.minorBusiness = "";
			this.AC = !1;
			this.pool = !1;
			this.fireplace = !1;
			this.garage = !1;
			this.waterfront = !1;
			this.acreage = !1;
			this.withProperty = !1;
			this.parkingType = "0";
			this.siteFeatures = "0";
			this.zoning = "0";
			this.utilities = "0";
			this.keywords = "" } return n }(),
	ResidentialView = function() {
		function n() { this.sortBy = "1-A";
			this.viewOn = "m";
			this.HPshow = "1";
			this.m_viewOn = "m";
			this.m_sortBy = "1-A" } return n }(),
	CommercialView = function() {
		function n() { this.sortBy = "1-A";
			this.viewOn = "m";
			this.HPshow = "1";
			this.m_viewOn = "m";
			this.m_sortBy = "1-A" } return n }(),
	Calculator = function() {
		function n() { this.downpayment = "5";
			this.s2downpayment = "5";
			this.amortization = "25";
			this.s2amortization = "25";
			this.rate = "";
			this.s2rate = "";
			this.term = "5";
			this.s2term = "5";
			this.frequency = "12";
			this.state = "1";
			this.annualIncome = "";
			this.monthlyDebt = "";
			this.propertyTax = "";
			this.condoFees = "";
			this.heatingCost = "";
			this.interestRate = "" } return n }(),
	Realtors = function() {
		function n() {} return n }(),
	Unsubscribe = function() {
		function n() {} return n }(),
	NotificationModes;
(function(n) { n[n.None = 0] = "None";
	n[n.Online = 1] = "Online";
	n[n.OnlineAndEmail = 2] = "OnlineAndEmail" })(NotificationModes || (NotificationModes = {}));
var Notifications = function() {
		function n() { this.favourites = !1;
			this.compares = !1;
			this.searches = !1;
			this.type = "" } return n }(),
	Audit = function() {
		function n() {} return n }(),
	consumeruser = function() {
		function n() {} return n.CreateFromJSON = function(t) { var r = new n,
			i; for (i in t) r[i] = t[i]; return r }, n }(),
	ViewPref = function() {
		function n() {} return n }(),
	LoginProviderType = function() {
		function n() {} return n }(),
	AccountType;
(function(n) { n[n.CREA = 0] = "CREA";
	n[n.Facebook = 1] = "Facebook";
	n[n.LinkedIn = 2] = "LinkedIn";
	n[n.GooglePlus = 3] = "GooglePlus";
	n[n.Twitter = 4] = "Twitter" })(AccountType || (AccountType = {}));
var __extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	ContactRealtorCardModel = function(n) {
		function t() { return n.call(this) || this } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	DemographicsChartModel = function(n) {
		function t(t, i, r) { var u = n.call(this) || this; return u.ChartType = "", u.Data = "", u.ChartType = t, u.Data = i, u.Columns = r, u } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	DemographicsModel = function(n) {
		function t(t, i, r) { var u = n.call(this) || this; return u.Polygon = "", u.LocationLat = "", u.LocationLon = "", u.Polygon = t, u.LocationLat = i, u.LocationLon = r, u } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	DialogEditNoteModel = function(n) {
		function t(t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt) { var tt = n.call(this) || this; return tt.ID = "", tt.Address = "", tt.Lat = "", tt.Lon = "", tt.HeaderTextID = "", tt.BodyTextID = "", tt.ButtonPositiveID = "", tt.ButtonNegativeID = "", tt.ButtonPositiveTextID = "", tt.ButtonNegativeTextID = "", tt.ButtonPositiveOnClick = "", tt.ButtonNegativeOnClick = "", tt.CloseOnClick = "", tt.ButtonNegativeStyle = "", tt.BeforeOpen = null, tt.BeforeClose = null, tt.AfterOpen = null, tt.AfterClose = null, tt.OpenTrigger = "", tt.CloseTrigger = "", tt.appMode = 1, tt.ID = t, tt.Address = i, tt.Lat = r, tt.Lon = u, tt.HeaderTextID = f, tt.BodyTextID = e, tt.ButtonPositiveID = o, tt.ButtonNegativeID = s, tt.ButtonPositiveTextID = h, tt.ButtonNegativeTextID = c, tt.ButtonPositiveOnClick = l, tt.ButtonNegativeOnClick = a, tt.CloseOnClick = v, tt.ButtonNegativeStyle = y, p && (tt.BeforeOpen = p), w && (tt.BeforeClose = w), b && (tt.AfterOpen = b), k && (tt.AfterClose = k), tt.OpenTrigger = d, tt.CloseTrigger = g, tt.appMode = nt, tt } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	FavouritesModel = function(n) {
		function t() { return n !== null && n.apply(this, arguments) || this } return __extends(t, n), t }(ModelBase),
	SharedNotesModel = function(n) {
		function t(t, i, r) { var u = n.call(this) || this; return u.displayName = t, u.notes = i, u.sharedNotesJSON = r, u } return __extends(t, n), t }(FavouritesModel),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	LinkModel = function(n) {
		function t(t, i, r, u) { var f = n.call(this) || this; return f.Text = "", f.Link = "", f.CSSClass = "", f.Data = "", f.Text = t, f.Link = i, f.CSSClass = r, f.Data = u, f } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	ListingCardCarouselModel = function(n) {
		function t(t, i, r, u, f, e) { i === void 0 && (i = !0);
			r === void 0 && (r = !1);
			u === void 0 && (u = !1);
			f === void 0 && (f = 1);
			e === void 0 && (e = "auto"); var o = n.call(this) || this; return o.ShowBullets = !0, o.ContinuousSlides = !1, o.ShowXofX = !1, o.BottomChevrons = !1, o.ItemsPerPage = 1, o.SlidesPerView = "auto", o.Results = t, o.ShowBullets = i, o.ContinuousSlides = r, o.ShowXofX = u, o.ItemsPerPage = f, o.SlidesPerView = e, o } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	ListingCardModel = function(n) {
		function t(i, r) { var u = n.call(this) || this,
			s, h, f, e, o; for (u.Id = "", u.Distance = "", u.FooterIcons = [], u.DetailsURL = "", u.ImageURL = "", u.Price = "", u.Address = "", u.AddressForNotes = "", u.NoAddress = !1, u.MLSNumber = "", u.OfficeName = "", u.OfficeType = "", u.OfficeNameAndType = "", u.OfficeAltText = "", u.OfficeLogo = "", u.ExternalURL = "", u.Latitude = "", u.Longitude = "", u.HasOpenHouse = !1, u.OpenHouseMonth = "", u.OpenHouseDay = "", u.ShowHasNoLocation = !1, u.ShowDistance = !1, u.ShowTombstoneFlag = !1, u.ShowNoteIcon = !1, u.ShowHeaderIcons = !1, u.ShowPrice = !0, u.ShowFooterIcons = !0, u.ShowOfficeDetails = !0, u.HasExternalWebsite = !1, u.HasPriceUpdate = !1, u.HasOfficeLogo = !1, u.HasOpenHouseUpdate = !1, u.HasNewImageUpdate = !1, u.HasNotifications = !1, u.RealtorImages = [], u.AppMode = ApplicationState.CurrentMode, u.Id = i.Id, u.Price = (i.Property.Price || "") + " " + (i.Property.LeaseRent || ""), u.ShowTombstoneFlag = Number(i.StatusId) == Number(ListingStatus.Tombstone), u.ShowHeaderIcons = u.ShowTombstoneFlag == !1, u.ShowHasNoLocation = (i.Property.Address.Latitude || "") == "" && (i.Property.Address.Longitude || "") == "", u.ShowPrice = Number(i.StatusId) != Number(ListingStatus.Tombstone), u.ShowOfficeDetails = Number(i.StatusId) != Number(ListingStatus.Tombstone), u.ShowFooterIcons = Number(i.StatusId) != Number(ListingStatus.Tombstone), u.ShowNoteIcon = ApplicationState.UserIsSignedIn && Note.exists(u.Id), u.Address = i.Property.Address.AddressText.replace(/\|/g, ", ").replace(/[a-z][0-9][a-z][0-9][a-z][0-9]/i, ""), u.Address.replace(/( |,)/g, "") == "" && (u.Address = Translation.get("AddressNotAvailable"), u.NoAddress = !0), i.Property.Address.AddressText == "|" ? (u.AddressForNotes = i.MlsNumber, u.NoAddress = !0) : u.AddressForNotes = u.Address, u.MLSNumber = i.MlsNumber, u.OfficeName = i.Individual[0].Organization.Name, u.OfficeType = i.Individual[0].Organization.Designation, u.OfficeNameAndType = i.Individual[0].Organization.Name, u.OfficeAltText = Translation.get("OfficeImageAltText", u.OfficeName), i.Individual[0].Organization != null && (i.Individual[0].Organization.Logo || "") != "" && (u.OfficeLogo = i.Individual[0].Organization.Logo, u.HasOfficeLogo = !0), i.AlternateURL != null && (i.AlternateURL.DetailsLink || "") != "" && (u.ExternalURL = i.AlternateURL.DetailsLink, u.HasExternalWebsite = !0), (i.Distance || "") != "" && (u.ShowDistance = !0, u.Distance = i.Distance), (u.OfficeType || "") != "" && (u.OfficeNameAndType = u.OfficeName + ",&nbsp;" + u.OfficeType), u.DetailsURL = i.RelativeDetailsURL, u.Latitude = i.Property.Address.Latitude, u.Longitude = i.Property.Address.Longitude, u.ImageURL = i.Property.Photo != null && i.Property.Photo.length > 0 ? i.Property.Photo[0].MedResPath : "/images/common/no-image.png", u.HasOpenHouse = (i.OpenHouse || []).length > 0, (i.OpenHouse || []).length > 0 && (s = Utilities.parseAPIDateString(i.OpenHouse[0].StartDateTime, ApplicationState.CultureID), u.OpenHouseDay = s.getDate().toString(), u.OpenHouseMonth = Utilities.getShortMonthString(s.getMonth(), ApplicationState.CultureID)), (i.Building.Bedrooms || "") != "" && (f = new t.FooterIcon, f.IconHTML = "<div class=\"propertyCardBedIcon\"><img src='/wp-content/plugins/adk_feed/assets/images/bed-gray.svg' /><\/div>", f.Label = Translation.get("Bedrooms"), f.NumberVal = i.Building.Bedrooms, u.FooterIcons.push(f)), (i.Building.BathroomTotal || "") != "" && (f = new t.FooterIcon, f.IconHTML = "<div class=\"propertyCardBathIcon\"><img src='/wp-content/plugins/adk_feed/assets/images/bath-gray.svg' /><\/div>", f.Label = Translation.get("Bathrooms"), f.NumberVal = i.Building.BathroomTotal, u.FooterIcons.push(f)), h = i.Property.TypeId || "", h != "" && (f = new t.FooterIcon, f.IconHTML = '<div class="propertyCardPropertyIcon"><img src=\'' + t.getPropertyIcon(Number(h)) + "' /><\/div>", f.Label = i.Property.Type, u.FooterIcons.push(f)), e = 0; e < Math.min(2, i.Individual.length); e++)(i.Individual[e].Photo || "") != "" && (o = new t.RealtorImage, o.RealtorImageURL = i.Individual[e].Photo, o.RealtorImageAltText = Translation.get("RealtorImageAltText", i.Individual[e].Name), u.RealtorImages.push(o)); return u.HasOpenHouseUpdate = i.HasOpenHouseUpdate || !1, u.HasPriceUpdate = i.HasPriceUpdate || !1, u.HasNewImageUpdate = i.HasNewImageUpdate || !1, u.HasNotifications = u.HasOpenHouseUpdate || u.HasPriceUpdate || u.HasNewImageUpdate, u.AppMode = r || Utilities.getModeFromPropertyType(i.Property.TypeId), u } return __extends(t, n), t.getPropertyIcon = function(n) { var t = ""; switch (n) {
			case Number(PropertyTypes.SingleFamily):
			case Number(PropertyTypes.Recreational):
				t = "/wp-content/plugins/adk_feed/assets/images/house-gray2.svg"; break;
			case Number(PropertyTypes.MultiTenant):
			case Number(PropertyTypes.Business):
			case Number(PropertyTypes.Retail):
			case Number(PropertyTypes.Industrial):
			case Number(PropertyTypes.Office):
			case Number(PropertyTypes.Hospitality):
			case Number(PropertyTypes.Institutional):
				t = "/wp-content/plugins/adk_feed/assets/images/commercial-darkgray.svg"; break;
			case Number(PropertyTypes.Agricultural):
				t = "/wp-content/plugins/adk_feed/assets/images/agriculture.svg"; break;
			case Number(PropertyTypes.Land):
				t = "/wp-content/plugins/adk_feed/assets/images/land.svg"; break;
			case Number(PropertyTypes.Parking):
				t = "/wp-content/plugins/adk_feed/assets/images/parking.svg"; break;
			default:
				t = "/wp-content/plugins/adk_feed/assets/images/house-gray2.svg" } return t }, Object.defineProperty(t.prototype, "ShowFooter", { get: function() { return this.HasOfficeLogo || this.HasExternalWebsite || this.RealtorImages.length > 0 }, enumerable: !0, configurable: !0 }), t }(ModelBase);
(function(n) { var t, i, r;
	(function(n) { n[n.Bedrooms = 1] = "Bedrooms";
		n[n.Bathrooms = 2] = "Bathrooms";
		n[n.BuildingType = 3] = "BuildingType";
		n[n.OpenHouse = 4] = "OpenHouse" })(t || (t = {}));
	i = function() {
		function n() { this.IconHTML = "";
			this.Label = "";
			this.NumberVal = "" } return n }();
	n.FooterIcon = i;
	r = function() {
		function n() { this.RealtorImageURL = "";
			this.RealtorImageAltText = "" } return n }();
	n.RealtorImage = r })(ListingCardModel || (ListingCardModel = {}));
var __extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	ListingModel = function(n) {
		function t(t, i, r, u, f, e, o, s, h, c, l, a) { var v = n.call(this) || this; return v.hasOpenHouse = !1, v.listingId = t, v.organizationId = i, v.contactId = r, v.referenceNumber = u, v.realtorId = f, v.price = l, v.city = a, v.latitude = e, v.longitude = o, v.provinceCode = s, v.propertyTypeId = h, v.disseminationArea = c, v } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	ListingResultsModel = function(n) {
		function t(t) { var i = n.call(this) || this; return i.Results = t, i } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	MapCardModel = function(n) {
		function t(t, i, r) { r === void 0 && (r = !0); var u = n.call(this) || this; return u.Lat = "", u.Lon = "", u.ShowMap = !0, u.Lat = t, u.Lon = i, u.ShowMap = r, u } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	ModalContentModel = function(n) {
		function t(t, i, r, u, f, e, o, s, h, c, l) { var a = n.call(this) || this; return a.ID = "", a.TitleText = "&nbps;", a.BodyContent = null, a.ButtonCloseID = "", a.ButtonCloseOnClick = function() {}, a.BeforeOpen = function() {}, a.BeforeClose = function() {}, a.AfterOpen = function() {}, a.AfterClose = function() {}, a.OpenTrigger = "", a.CloseTrigger = "", a.CloseEvent = "", a.SetFocusOnLoad = !0, a.ShowCloseButton = !0, a.ShowTitleBar = !0, a.CssClass = "", a.DisplayType = ModalDisplayTypes.Featherlight, a.ID = t, a.TitleText = i, a.BodyContent = r ? r : $(r), a.ButtonCloseID = a.ID + "_CloseBtn", a.ButtonCloseOnClick = u, f && (a.BeforeOpen = f), e && (a.BeforeClose = e), o && (a.AfterOpen = o), s && (a.AfterClose = s), a.OpenTrigger = h || "", a.CloseTrigger = c || "", a.CssClass = l || "", a } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	MultimediaModel = function(n) {
		function t(t, i, r, u, f) { var e, o; return r === void 0 && (r = VideoLoadingDisplay.Yes), u === void 0 && (u = VideoDisplay.VideoWithThumbnail), f === void 0 && (f = VideoLoadingType.LoadingDefered), e = n.call(this) || this, e.LoadingThumbnailId = "videoThumbnailLoading", e.VideoThumbnailId = "videoThumbnail", e.VideoBtnId = "play_button", e.PlayableMultiSrc = "", e.EmbedMultiSrc = "", e.MultiId = "", e.MultiDefaultPictureCom = "/images/common/backgrounds/video_bg_commercial.png", e.MultiDefaultPictureRes = "/images/common/backgrounds/video_bg_residential.png", e.LoadingIconAnimUrl = "/wp-content/plugins/adk_feed/assets/images/loading.gif", e.VideoThumbSrc = null, e.HttpUrlRegEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/ig, e.embedable = !1, e.videoLoaded = !1, e.VideoResizeHandlerEnabled = !0, e.LimitHeightVideoSize = !1, e.LimitWidthVideoSize = !1, e.AlreadyImplemented = !1, o = e, e.VideoLoadingDisplay = r, e.VideoDisplay = u, e.VideoLoadingType = f, e.VideoContainerId = i, e.MultiHTTPURL = t, e.MultiManager = new MultimediaManager, $("#" + e.VideoContainerId).css("position", "relative"), $("#" + e.VideoContainerId).css("margin", "auto"), $("#" + e.VideoContainerId).css("display", "flex"), $("#" + e.VideoContainerId).css("align-items", "center"), $("#" + e.VideoContainerId).css("cursor", "pointer"), e.VideoThumbnail = $('<div id="videoThumbnail" class="rsDefault" style="position:relative;z-index:3;background-color:"";position: relative;z-index: 2;"><div id="videoThumbnailInner" style="display:flex;align-items: center;justify-content:center;height: 100%;width:100%; "><div id="play_button" class="rsPlayBtnVideo"><div class="rsPlayBtnIconVideo"><\/div><\/div><\/div><\/div>'), e.LoadingThumbnail = $('<div id="videoThumbnailLoading" style="z-index: 1;position: absolute;height:100%;width:100%;top:0px;"><div id="videoThumbnailLoadingInner" style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"><div id="videoListing_Loading" class="sk-spinning-circle"><\/div><\/div>'), e.VideoThumbnailModal = $('<div style="height: 100%;display: flex;align-items: center;justify-content: center;" id="' + e.VideoContainerId + '"><img src="' + e.MultiDefaultPictureRes + '"alt ="Click here if problem playing video" id="modal_img" class="rsImg rsMainSlideImage" data-rsvideo="video_content_here" style="display: none;">' + $(e.LoadingThumbnail).outerHTML() + "<\/div>"), $(e.LoadingThumbnail).appendTo("#" + e.VideoContainerId), $(e.VideoThumbnail).appendTo("#" + e.VideoContainerId), $('<div id="' + e.VideoContainerId + "-upper-inner\" style='display:none;position:relative;z-index:2;'><div id='" + e.VideoContainerId + '-inner-\' style="display:none;"><\/div><\/div>').appendTo($("#" + e.VideoContainerId)), e.VideoInnerContainerId = e.VideoContainerId + "-upper-inner", $("#" + e.VideoContainerId + " #" + e.VideoThumbnailId).hide(), e.VideoLoadingDisplay == VideoLoadingDisplay.Yes ? $("#" + e.VideoContainerId + " #" + e.LoadingThumbnailId).show() : $("#" + e.VideoContainerId + " #" + e.LoadingThumbnailId).hide(), $("#" + e.VideoContainerId).hover(function() { $("#" + o.VideoContainerId).find(".rsPlayBtnIconVideo").toggleClass("hovered") }, function() { $("#" + o.VideoContainerId).find(".rsPlayBtnIconVideo").removeClass("hovered") }), e } return __extends(t, n), t.prototype.setContentOptions = function(n, t, i, r, u, f) { n === void 0 && (n = "");
			t === void 0 && (t = "videoThumbnailLoading");
			i === void 0 && (i = "videoThumbnail");
			r === void 0 && (r = "play_button");
			u === void 0 && (u = this.VideoThumbnail);
			f === void 0 && (f = this.LoadingThumbnail);
			this.MultiThumbAlt = n;
			this.LoadingThumbnailId = t;
			this.VideoThumbnailId = i;
			this.VideoBtnId = r;
			$("#" + this.VideoContainerId + " #" + this.LoadingThumbnailId).replaceWith(this.LoadingThumbnail);
			$("#" + this.VideoContainerId + " #" + this.VideoThumbnailId).replaceWith(this.VideoThumbnail);
			$("#" + this.VideoContainerId + " #" + this.VideoContainerId).attr("title", this.MultiThumbAlt) }, t.prototype.setThumbnailImage = function(n) { this.ThumbnailImage = n }, t.prototype.StartEmbed = function() { var n = this;
			$("#" + n.VideoContainerId).click(function(i) { i.stopImmediatePropagation();
				i.stopPropagation(); var r = $(n.RawHtmlVideoCode),
					u = r.find("iframe").attr("src") != null ? r.find("iframe").attr("src") : r.attr("src");
				n.VideoLoadingType == VideoLoadingType.LoadingDefered ? ($("#" + n.VideoContainerId + " #" + n.VideoThumbnailId).hide(), $("#" + n.VideoContainerId + " #" + n.VideoContainerId + "-upper-inner").show(), n.loadVideo(n.ImplementMultiEmbeding)) : n.SelectedHost.PreferedLoadingMethod != VideoAccessType.Native ? (r.attr("src", u), r.css("opacity", "0"), r.attr("onload", "showIframe(this,'#" + n.VideoContainerId + " #" + n.LoadingThumbnailId + "', '#" + n.VideoContainerId + "');"), $("#" + n.VideoContainerId + " #" + n.VideoThumbnailId).hide(), $("#" + n.VideoContainerId + " #" + n.VideoContainerId + "-upper-inner").show(), $("#" + n.VideoContainerId + "-inner-").show(), $(r.outerHTML()).appendTo("#" + n.VideoContainerId + "-inner-"), n.videoLoaded = !0, t.virtualTourLoadEvent.Fire({ loaded: !0 }), $(this).unbind("click")) : n.SelectedHost.PreferedLoadingMethod == VideoAccessType.Native && (n.videoLoaded = !0, r.css("opacity", "0"), showIframe(r, "#" + n.VideoContainerId + " #" + n.LoadingThumbnailId, "#" + n.VideoContainerId), $("#" + n.VideoContainerId + " #" + n.VideoContainerId + "-upper-inner").show(), $("#" + n.VideoContainerId + "-inner-").show(), t.virtualTourLoadEvent.Fire({ loaded: !0 })) });
			n.VideoResizeHandlerEnabled && $(window).resize(function() { n.adjustVideoIframesSize();
				n.adjustThumbnailSize() }); try { this.MultiHTTPURL != null && this.MultiHTTPURL.length > 0 ? (n.embedable = this.initMultimediaVideo(this.MultiHTTPURL), n.embedable ? n.VideoLoadingType == VideoLoadingType.LoadingNow ? this.loadVideo(this.ImplementMultiEmbeding) : this.SetThumbnailPictures() : ($("#" + this.VideoContainerId + " #" + this.LoadingThumbnailId).hide(), t.virtualTourLoadEvent.Fire({ loaded: !1 }))) : ($("#" + this.VideoContainerId + " #" + this.LoadingThumbnailId).hide(), t.virtualTourLoadEvent.Fire({ loaded: !1 }));
				Events.Listen(JSException.windowError, function(n) { var t = n.detail;
					Logging.Debug(n + "-Multimedia error while initiating: " + this.MultiHTTPURL, LogType.Multimedia) }, Events.ListenerScope.Page) } catch (i) { $("#" + this.VideoContainerId + " #" + this.LoadingThumbnailId).hide();
				Logging.Debug(i + "-Multimedia error while initiating: " + this.MultiHTTPURL, LogType.Multimedia);
				t.virtualTourLoadEvent.Fire({ loaded: !1 }) } }, t.isEmbedableVideoUrl = function(n) { var t, i = new MultimediaManager; return n = n.replace(/https?:\/\//ig, "https://"), t = i.getHost(n), t != null ? !0 : !1 }, t.getHostUrl = function(n) { var i = new RegExp(/(https?:\/\/[^/]+)/i),
			t = i.exec(n); return t != null && t.length > 1 ? t[1] : null }, t.prototype.initMultimediaVideo = function(n) { var h = Utilities.getQueryObjUrl(n),
			c, l, o, r, u, e, f, i, s; return (n = n.replace(/https?:\/\//ig, "https://"), this.SelectedHost = this.MultiManager.getHost(n), t.virtualTourIdentyEvent.Fire({ isVirtualTour: this.SelectedHost != null ? this.SelectedHost.isVirtualTour : !1 }), this.SelectedHost && this.SelectedHost.ActivatedEmbed && (n = this.SelectedHost.CleanParamValue ? Utilities.cleanQueryUrl(n) : n, this.SelectedHost.OverwriteParamValue ? (c = Utilities.getQueryObjUrl(this.SelectedHost.DisablePlayParam, this.SelectedHost.CaseSensitiveParam), l = Utilities.getQueryObjUrl(this.SelectedHost.AdditionalParam, this.SelectedHost.CaseSensitiveParam), this.SelectedHost.QueryParamsObj = Utilities.getFinalEmbedQueryParam(h, c, l), this.SelectedHost.QueryParamStr = Utilities.getURLQueryParamFormat(this.SelectedHost.QueryParamsObj)) : this.SelectedHost.QueryParamStr = Utilities.getURLQueryParamFormat(h), o = this.SelectedHost.PreviewUrl ? this.SelectedHost.PreviewUrl : n, r = null, r = this.SelectedHost.EmbedUrl != null ? this.SelectedHost.EmbedUrl : o, u = n.match(this.SelectedHost.RegUrlReformat), e = u.length - 1, this.SelectedHost.RegExGroupID != null && (e = this.SelectedHost.RegExGroupID), u != null && u[e] != null && u[e].length > 0)) ? (this.MultiId = u[e], f = "", f = ApplicationState.CultureID == 1 ? typeof this.SelectedHost.LangEnParam != null ? this.SelectedHost.LangEnParam : "" : typeof this.SelectedHost.LangFrParam != null ? this.SelectedHost.LangFrParam : "", i = void 0, f != null && f.length > 0 ? (i = r + this.MultiId + this.SelectedHost.QueryParamStr + "&" + f, i = Utilities.removeDuplicateParamFrom(i), this.EmbedMultiSrc = this.SelectedHost.QueryParamStr.indexOf("?") > -1 ? i : r + this.MultiId + "?" + f) : (i = r + this.MultiId + this.SelectedHost.QueryParamStr, i = Utilities.removeDuplicateParamFrom(i), this.EmbedMultiSrc = this.SelectedHost.QueryParamStr.indexOf("?") > -1 ? i : r + this.MultiId), this.PlayableMultiSrc = o + this.MultiId, s = this.SelectedHost.JsonApi && this.SelectedHost.JsonApi.indexOf("?") > -1 ? "&" : "?", this.SelectedHost.JsonApi && this.SelectedHost.VideoProvider != VideoProviderName.Matterport && this.SelectedHost.VideoProvider != VideoProviderName.RealVision && this.SelectedHost.VideoProvider != VideoProviderName.ImmoViewer ? this.SelectedHost.FormatedJsonUrl = this.SelectedHost.JsonApi + s + "format=json&url=" + this.PlayableMultiSrc : this.SelectedHost.JsonApi && (this.SelectedHost.FormatedJsonUrl = this.SelectedHost.JsonApi + this.MultiId + s + "format=json"), !0) : !1 }, t.prototype.loadVideo = function(n) { var i = this,
			r, u;
			i.SelectedHost.PreferedLoadingMethod == VideoAccessType.BVD ? (i.SelectedHost.ThumbWebUrl && (i.SelectedHost.FormatedThumbUrl = i.SelectedHost.ThumbWebUrl), this.SelectedHost.FormatedThumbUrl && (i.RawHtmlPhotoCode = '<div><img src="' + i.SelectedHost.FormatedThumbUrl + '" /><\/div>'), i.RawHtmlVideoCode = t.DefaultIframeContainer.replace('src=""', 'src="' + i.EmbedMultiSrc + '"'), n(i)) : i.SelectedHost.PreferedLoadingMethod == VideoAccessType.Local ? (r = function(n, i) { Logging.Debug(i, LogType.Multimedia);
				t.virtualTourLoadEvent.Fire({ loaded: !1 });
				$("#" + this.VideoContainerId + " #" + this.LoadingThumbnailId).hide() }, u = function(r) { var u = r;
				u.error != null && u.statusCode != null ? (Logging.Debug("Error seen while fetching video data: " + i.PlayableMultiSrc, LogType.Multimedia), $("#" + i.VideoContainerId + " #" + i.LoadingThumbnailId).hide(), t.virtualTourLoadEvent.Fire({ loaded: !1 })) : i.SelectedHost.VideoProvider == VideoProviderName.ImmoViewer ? (i.SelectedHost.SetVideoInfo(u), i.RawHtmlPhotoCode = '<div><img src="' + i.SelectedHost.FormatedThumbUrl + '" /><\/div>', i.RawHtmlVideoCode = t.DefaultIframeContainer.replace('src=""', 'src="' + i.EmbedMultiSrc + '"'), n(i)) : i.SelectedHost.VideoProvider == VideoProviderName.RealVision ? (i.SelectedHost.SetVideoInfo(u), i.RawHtmlPhotoCode = '<div><img src="' + i.SelectedHost.FormatedThumbUrl + '" /><\/div>', i.RawHtmlVideoCode = t.DefaultIframeContainer.replace('src=""', 'src="' + i.EmbedMultiSrc + '"'), n(i)) : i.SelectedHost.VideoProvider == VideoProviderName.Matterport ? (i.RawHtmlPhotoCode = '<div><img src="' + u.image + '" /><\/div>', i.RawHtmlVideoCode = t.DefaultIframeContainer.replace('src=""', 'src="' + i.EmbedMultiSrc + '"'), n(i)) : i.SelectedHost.VideoProvider == VideoProviderName.Youtube ? (i.RawHtmlVideoCode = u.html, i.RawHtmlPhotoCode = "<div><img src=" + u.thumbnail_url + " /><\/div>", n(i)) : i.SelectedHost.VideoProvider == VideoProviderName.Vimeo && (i.RawHtmlVideoCode = u.html, i.RawHtmlPhotoCode = "<div><img src=" + u.thumbnail_url + " /><\/div>", n(i)) }, Actions.GetVideoJsonData({ url: i.SelectedHost.FormatedJsonUrl, cacheType: "ListingVideoData" }, u, r)) : i.SelectedHost.PreferedLoadingMethod == VideoAccessType.Native ? i.SelectedHost.VideoProvider == VideoProviderName.Youtube && (Events.Listen(t.youtubeLoadEvent, function() { i.AlreadyImplemented || (i.RawHtmlVideoCode = $("#" + i.VideoContainerId + "-inner-").outerHTML(), i.RawHtmlPhotoCode = '<div><img src="' + i.MultiDefaultPictureRes + '" alt="" id="thumbnail_img" class="" style="display: none; width: 100%; height: 100%;" /><\/div>', i.AlreadyImplemented = !0, n(i)) }, Events.ListenerScope.Page), i.YT_Player = new YT.Player(i.VideoContainerId + "-inner-", { playerVars: { showinfo: i.SelectedHost.QueryParamsObj.showinfo, modestbranding: i.SelectedHost.QueryParamsObj.modestbranding, autoplay: i.SelectedHost.QueryParamsObj.autoplay, rel: i.SelectedHost.QueryParamsObj.rel }, videoId: i.MultiId, host: "https://www.youtube.com", events: { onReady: i.YTonPlayerReady, onStateChange: i.YTonPlayerStateChange, onError: i.YTonError } })) : i.SelectedHost.PreferedLoadingMethod == VideoAccessType.DVA && (i.SelectedHost.VideoProvider == VideoProviderName.Youriguide && i.SelectedHost.SetVideoInfo(i), this.SelectedHost.FormatedThumbUrl && (this.RawHtmlPhotoCode = '<div><img src="' + this.SelectedHost.FormatedThumbUrl + '" alt="" id="modal_img" class="" style="display: none; width: 100%; height: 100%;" /><\/div>'), this.RawHtmlVideoCode = t.DefaultIframeContainer.replace('src=""', 'src="' + this.EmbedMultiSrc + '"'), n(i)) }, t.prototype.ImplementMultiEmbeding = function(n) { if (t.virtualTourDataFetched.Fire({ fetched: !0 }), n.ValidIframeElement(n.RawHtmlVideoCode) && !n.RawErrorMsg) { n.VideoDisplay == VideoDisplay.VideoWithThumbnail && n.VideoLoadingType == VideoLoadingType.LoadingNow && n.SetThumbnailPictures(); var i = $(n.RawHtmlVideoCode),
			r = i.find("iframe").attr("src") != null ? i.find("iframe").attr("src") : i.attr("src");
			(n.VideoLoadingType == VideoLoadingType.LoadingDefered || n.VideoDisplay == VideoDisplay.VideoNoThumbnail) && n.SelectedHost.PreferedLoadingMethod != VideoAccessType.Native ? (r.indexOf("?") > -1 && (n.SelectedHost.QueryParamStr = n.SelectedHost.QueryParamStr.replace("?", "&")), n.SelectedHost.QueryParamStr != null && n.SelectedHost.QueryParamStr.length > 0 && i.attr("src", r + n.SelectedHost.QueryParamStr), i.css("opacity", "0"), i.attr("onload", "showIframe(this,'#" + n.VideoContainerId + " #" + n.LoadingThumbnailId + "', '#" + n.VideoContainerId + "');"), $("#" + n.VideoContainerId + " #" + n.VideoThumbnailId).hide(), $("#" + n.VideoContainerId + " #" + n.VideoContainerId + "-upper-inner").show(), $("#" + n.VideoContainerId + "-inner-").show(), $(i.outerHTML()).appendTo("#" + n.VideoContainerId + "-inner-"), n.videoLoaded = !0, t.virtualTourLoadEvent.Fire({ loaded: !0 })) : n.SelectedHost.PreferedLoadingMethod == VideoAccessType.Native && (n.videoLoaded = !0, t.virtualTourLoadEvent.Fire({ loaded: !0 }), i.css("opacity", "0"), showIframe(i, "#" + n.VideoContainerId + " #" + n.LoadingThumbnailId, "#" + n.VideoContainerId), $("#" + n.VideoContainerId + " #" + n.VideoContainerId + "-upper-inner").show(), $("#" + n.VideoContainerId + "-inner-").show()) } else $("#" + n.VideoContainerId + " #" + n.LoadingThumbnailId).hide(), $("#" + n.VideoContainerId + " #" + n.VideoContainerId).hide(), t.virtualTourLoadEvent.Fire({ loaded: !1 }) }, t.prototype.adjustVideoIframesSize = function() { var o = $("#" + this.VideoContainerId + " iframe"),
			f, n, t, l; if (o.length > 0) { for (f = 0; f < o.length; f++) { n = o[f];
			t = 0;
			t = parseInt($(n).attr("ratio")) ? parseFloat($(n).attr("ratio")) : parseInt($(n).attr("height")) && parseInt($(n).attr("width")) ? parseInt($(n).attr("width").toString()) / parseInt($(n).attr("height").toString()) : n.clientWidth && n.clientHeight ? n.clientWidth / n.clientHeight : .75; var u = $("#" + this.VideoContainerId).height(),
				r = $("#" + this.VideoContainerId).width(),
				s = n.clientWidth,
				h = parseInt($(n).attr("width")),
				c = $("#" + this.VideoContainerId).width(),
				e = 0,
				i = 0;
			c > 0 ? i = c : s > 0 ? i = s : h > 0 && (i = h);
			e = i / t;
			$(n).attr("ratio", t.toString());
			this.LimitHeightVideoSize && !this.LimitWidthVideoSize && e > u ? ($(n).width(i.toString() + "px"), $(n).height(u.toString() + "px")) : !this.LimitHeightVideoSize && this.LimitWidthVideoSize && i > r ? ($(n).width(r.toString() + "px"), $(n).height(e.toString() + "px")) : this.LimitHeightVideoSize && this.LimitWidthVideoSize ? (l = r * t > u ? u / (r * t / u) : r * t, $(n).width(r.toString() + "px"), $(n).height(l.toString() + "px")) : ($(n).width(i.toString() + "px"), $(n).height(e.toString() + "px"));
			$("#" + this.VideoContainerId + " #" + this.LoadingThumbnailId).height($(n).height());
			$("#" + this.VideoContainerId + " #" + this.LoadingThumbnailId).width($(n).width());
			this.videoLoaded || ($("#" + this.VideoContainerId).height($(n).height()), $("#" + this.VideoContainerId).width($(n).width())) } $("#" + this.VideoContainerId + "-upper-inner").css("min-height", "");
			$("#" + this.VideoContainerId + "-upper-inner").css("min-width", "") } }, t.prototype.adjustThumbnailSize = function() { if (!this.videoLoaded) { var i = this.ThumbnailImageWHRatio,
			n = $("#" + this.VideoContainerId).width(),
			t = n / i;
			$("#" + this.VideoContainerId).height(t + "px");
			$("#" + this.VideoContainerId).width(n + "px");
			$("#" + this.VideoContainerId + " #" + this.VideoThumbnailId).height(t + "px");
			$("#" + this.VideoContainerId + " #" + this.VideoThumbnailId).width(n + "px");
			$("#" + this.VideoContainerId + " #" + this.LoadingThumbnailId).height(t + "px");
			$("#" + this.VideoContainerId + " #" + this.LoadingThumbnailId).width(n + "px");
			$("#" + this.VideoContainerId + "-upper-inner").css("min-height", t + "px");
			$("#" + this.VideoContainerId + "-upper-inner").css("min-width", n + "px") } }, t.prototype.validHttpUrl = function(n, t) { return n.match(t) ? !0 : !1 }, t.prototype.SetDefaultMultimediaPic = function() { this.VideoThumbSrc = ApplicationState.CurrentMode == ApplicationState.ResidentialMode ? this.MultiDefaultPictureRes : this.MultiDefaultPictureCom }, t.prototype.SetThumbnailPictures = function() { var n, i, t;
			this.SetDefaultMultimediaPic();
			n = $("#" + this.VideoContainerId + " #" + this.VideoThumbnailId);
			i = $("#" + this.VideoContainerId + " #" + this.LoadingThumbnailId);
			this.VideoLoadingType == VideoLoadingType.LoadingNow && this.RawHtmlPhotoCode ? (t = this.ThumbnailImage != null ? this.ThumbnailImage : $(this.RawHtmlPhotoCode).find("img").attr("src"), n.css("background", "url('" + t + "') center center / cover no-repeat"), this.ValidInsertImage(t, n, i, 3e3)) : this.VideoLoadingType == VideoLoadingType.LoadingDefered && this.ThumbnailImage ? (t = this.ThumbnailImage, n.css("background", "url('" + t + "') center center / cover no-repeat"), this.ValidInsertImage(t, n, i, 3e3)) : (n.css("background", "url('" + this.VideoThumbSrc + "') center center / cover no-repeat"), this.ValidInsertImage(this.VideoThumbSrc, n, i, 3e3)) }, t.prototype.ValidIframeElement = function(n) { return $(n) && ($(n).has("iframe").length > 0 || $(n).is("iframe")) ? !0 : !1 }, t.prototype.ValidImageExist = function(n, t, i, r) { i = i || 2e3; var f = !1,
			e, u = new Image,
			o = !1;
			u.onload = function() { f ? r(!1) : (o = !0, clearTimeout(e), r(!0)) };
			u.onerror = function() { r(!1) };
			u.src = n }, t.prototype.ValidInsertImage = function(n, i, r, u) { u = u || 2e3; var e = !1,
			o, s = new Image,
			h = !1,
			f = this;
			$(s).load(function() { e || (h = !0, clearTimeout(o), f.ThumbnailImageHeight = this.naturalHeight, f.ThumbnailImageWidth = this.naturalWidth, f.ThumbnailImageWHRatio = f.ThumbnailImageWidth / f.ThumbnailImageHeight, i.show(), f.VideoResizeHandlerEnabled && f.adjustThumbnailSize()) }).error(function() { r.hide();
				Logging.Debug("-Multimedia error while fetching thumbnail image: " + n + " for: " + f.MultiHTTPURL, LogType.Multimedia);
				t.virtualTourLoadEvent.Fire({ loaded: !1 }) }).attr({ src: n }) }, t.prototype.YTonPlayerReady = function() { Events.Fire("youtubeLoadEvent") }, t.prototype.YTonPlayerStateChange = function() {}, t.prototype.YTstopVideo = function() { this.YT_Player.stopVideo() }, t.prototype.YTonError = function() {}, t.virtualTourDataFetched = new RealtorEvent("virtualTourDataFetched"), t.virtualTourLoadEvent = new RealtorEvent("virtualTourLoadEvent"), t.virtualTourIdentyEvent = new RealtorEvent("virtualTourIdentyEvent"), t.manualFSTriggerEvent = new RealtorEvent("manualFSTriggerEvent"), t.DefaultIframeContainer = '<iframe src="" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe>', t.FullScreenBtnSize = 50, t.NavSliderArrowSize = 50, t.youtubeLoadEvent = "youtubeLoadEvent", t.youtubeErrorEvent = "youtubeErrorEvent", t.thumbnailLoadEvent = "thumbnailLoadEvent", t }(ModelBase),
	MultimediaManager = function() {
		function n() { var t = this;
			this.Paradym = new MultimediaProvider("Paradym", VideoProviderName.Paradym);
			this.Paradym.RegExHost = /view[.]paradym.com|my[.]paradym[.]com/i;
			this.Paradym.PreviewUrl = "";
			this.Paradym.ActivatedEmbed = !1;
			this.Paradym.isVirtualTour = !1;
			this.Paradym.OverwriteParamValue = !0;
			this.Paradym.CleanParamValue = !1;
			this.Matterport = new MultimediaProvider("Matterport", VideoProviderName.Matterport);
			this.Matterport.RegExHost = /condos[.]ca\/matterport|my[.]matterport[.]com/i;
			this.Matterport.RegUrlReformat = n.MatterportRegEx;
			this.Matterport.PreviewUrl = "https://my.matterport.com/show/?m=";
			this.Matterport.EmbedUrl = "https://my.matterport.com/show/?m=";
			this.Matterport.ActivatedEmbed = !0;
			this.Matterport.LangEnParam = "lang=en";
			this.Matterport.LangFrParam = "lang=fr";
			this.Matterport.JsonApi = n.MatterportJson;
			this.Matterport.VideoLoadingMethods = new Array(VideoAccessType.Local);
			this.Matterport.PreferedLoadingMethod = this.Matterport.VideoLoadingMethods[0];
			this.Matterport.DisablePlayParam = "";
			this.Matterport.AdditionalParam = "?play=1";
			this.Matterport.isVirtualTour = !0;
			this.Matterport.CaseSensitiveParam = !0;
			this.Matterport.OverwriteParamValue = !0;
			this.Matterport.CleanParamValue = !1;
			this.Youtube = new MultimediaProvider("Youtube", VideoProviderName.Youtube);
			this.Youtube.RegExHost = /youtube[.]com|youtube[.]ca|youtu[.]be/i;
			this.Youtube.RegUrlReformat = n.YoutubeRegEx;
			this.Youtube.PreviewUrl = "https://www.youtube.com/watch?v=";
			this.Youtube.EmbedUrl = "https://www.youtube.com/embed/";
			this.Youtube.JsonApi = n.YoutubeJson;
			this.Youtube.ActivatedEmbed = !0;
			this.Youtube.VideoLoadingMethods = [VideoAccessType.Native, VideoAccessType.Local];
			this.Youtube.PreferedLoadingMethod = this.Youtube.VideoLoadingMethods[1];
			this.Youtube.DisablePlayParam = "";
			this.Youtube.AdditionalParam = "?showinfo=0&modestbranding=1&autoplay=1&rel=0";
			this.Youtube.isVirtualTour = !1;
			this.Youtube.CaseSensitiveParam = !0;
			this.Youtube.OverwriteParamValue = !0;
			this.Youtube.CleanParamValue = !1;
			this.Vimeo = new MultimediaProvider("Vimeo", VideoProviderName.Vimeo);
			this.Vimeo.RegExHost = /vimeo[.]com/i;
			this.Vimeo.RegUrlReformat = n.VimeoRegEx;
			this.Vimeo.PreviewUrl = "https://vimeo.com/";
			this.Vimeo.EmbedUrl = "https://player.vimeo.com/video/";
			this.Vimeo.JsonApi = n.VimeoJson;
			this.Vimeo.ActivatedEmbed = !0;
			this.Vimeo.RegExGroupID = 2;
			this.Vimeo.VideoLoadingMethods = new Array(VideoAccessType.Local);
			this.Vimeo.PreferedLoadingMethod = this.Vimeo.VideoLoadingMethods[0];
			this.Vimeo.DisablePlayParam = "";
			this.Vimeo.AdditionalParam = "?autoplay=1&loop=0&autopause=0";
			this.Vimeo.isVirtualTour = !1;
			this.Vimeo.CaseSensitiveParam = !0;
			this.Vimeo.OverwriteParamValue = !0;
			this.Vimeo.CleanParamValue = !1;
			this.Realtourvision = new MultimediaProvider("Realtourvision", VideoProviderName.Realtourvision);
			this.Realtourvision.RegExHost = /realtourvision[.]com/i;
			this.Realtourvision.ActivatedEmbed = !1;
			this.Realtourvision.isVirtualTour = !1;
			this.Realtourvision.OverwriteParamValue = !0;
			this.Realtourvision.CleanParamValue = !1;
			this.Previsite = new MultimediaProvider("Previsite", VideoProviderName.Previsite);
			this.Previsite.RegExHost = /previsite.com/i;
			this.Previsite.ActivatedEmbed = !1;
			this.Previsite.isVirtualTour = !1;
			this.Youriguide = new MultimediaProvider("Youriguide", VideoProviderName.Youriguide);
			this.Youriguide.RegUrlReformat = n.YourIguideRegex;
			this.Youriguide.RegExHost = /youriguide[.]com/i;
			this.Youriguide.PreviewUrl = "https://youriguide.com/";
			this.Youriguide.ActivatedEmbed = !0;
			this.Youriguide.ThumbWebUrl = "/doc/embed_preview.jpg?sync";
			this.Youriguide.EmbedUrl = "https://youriguide.com/embed/";
			this.Youriguide.PdfUrlMetric = "/doc/floorplan_metric_en_u.pdf";
			this.Youriguide.PdfUrlFeet = "/doc/floorplan_imperial_en_u.pdf";
			this.Youriguide.FormatedPdfUrlFeet = "";
			this.Youriguide.FormatedPdfUrlMetric = "";
			this.Youriguide.VideoLoadingMethods = new Array(VideoAccessType.DVA);
			this.Youriguide.PreferedLoadingMethod = this.Youriguide.VideoLoadingMethods[0];
			this.Youriguide.DisablePlayParam = "";
			this.Youriguide.AdditionalParam = "?autostart=1&unbranded=1";
			this.Youriguide.isVirtualTour = !0;
			this.Youriguide.OverwriteParamValue = !0;
			this.Youriguide.CleanParamValue = !1;
			this.Youriguide.CaseSensitiveParam = !0;
			this.Youriguide.SetVideoInfo = function(n) { n.SelectedHost.FormatedPdfUrlMetric = n.SelectedHost.PreviewUrl + n.MultiId + n.SelectedHost.PdfUrlMetric;
				n.SelectedHost.FormatedPdfUrlFeet = n.SelectedHost.PreviewUrl + n.MultiId + n.SelectedHost.PdfUrlFeet;
				n.SelectedHost.ThumbWebUrl && (n.SelectedHost.FormatedThumbUrl = n.SelectedHost.PreviewUrl + n.MultiId + n.SelectedHost.ThumbWebUrl) };
			this.Bonnevisite = new MultimediaProvider("Bonnevisite", VideoProviderName.Bonnevisite);
			this.Bonnevisite.RegExHost = /media[.]bonnevisite[.]com/i;
			this.Bonnevisite.ActivatedEmbed = !1;
			this.Bonnevisite.isVirtualTour = !1;
			this.Bonnevisite.OverwriteParamValue = !0;
			this.Bonnevisite.CleanParamValue = !1;
			this.RealVision = new MultimediaProvider("RealVision", VideoProviderName.RealVision);
			this.RealVision.RegUrlReformat = n.RealtorVisionRegex;
			this.RealVision.RegExHost = /real[.]vision/i;
			this.RealVision.JsonApi = n.RealVisionJson;
			this.RealVision.LangEnParam = "culture=en-CA";
			this.RealVision.LangFrParam = "culture=fr-CA";
			this.RealVision.PreviewUrl = "https://real.vision/";
			this.RealVision.EmbedUrl = "https://real.vision/";
			this.RealVision.ActivatedEmbed = !0;
			this.RealVision.PdfUrlMetric = "";
			this.RealVision.PdfUrlFeet = "";
			this.RealVision.FormatedPdfUrlFeet = "";
			this.RealVision.FormatedPdfUrlMetric = "";
			this.RealVision.VideoLoadingMethods = new Array(VideoAccessType.Local);
			this.RealVision.PreferedLoadingMethod = this.RealVision.VideoLoadingMethods[0];
			this.RealVision.DisablePlayParam = "";
			this.RealVision.AdditionalParam = "?autoplay=1&o=u";
			this.RealVision.isVirtualTour = !0;
			this.RealVision.OverwriteParamValue = !0;
			this.RealVision.CaseSensitiveParam = !0;
			this.RealVision.CleanParamValue = !1;
			this.RealVision.SetVideoInfo = function(n) { t.RealVision.FormatedThumbUrl = n.photos != null && n.photos.length > 0 ? n.photos[0].urlMed : "";
				t.RealVision.FormatedPdfUrlFeet = n != null && n.floorPlans != null && n.floorPlans.unbrandedImperialPdf != "null" ? n.floorPlans.unbrandedImperialPdf : null;
				t.RealVision.FormatedPdfUrlMetric = n != null && n.floorPlans != null && n.floorPlans.unbrandedMetricPdf != "null" ? n.floorPlans.unbrandedMetricPdf : null };
			this.ImmoViewer = new MultimediaProvider("ImmoViewer", VideoProviderName.ImmoViewer);
			this.ImmoViewer.RegExHost = /immoviewer[.]com/i;
			this.ImmoViewer.JsonApi = n.ImmoViewerJson;
			this.ImmoViewer.RegUrlReformat = n.ImmoViewerRegex;
			this.ImmoViewer.EmbedUrl = "https://app.immoviewer.com/portal/tour/";
			this.ImmoViewer.PreviewUrl = "https://app.immoviewer.com/portal/tour/";
			this.ImmoViewer.LangEnParam = "psm.showLang=EN_CA";
			this.ImmoViewer.LangFrParam = "psm.showLang=FR_FR";
			this.ImmoViewer.ActivatedEmbed = !0;
			this.ImmoViewer.VideoLoadingMethods = new Array(VideoAccessType.Local);
			this.ImmoViewer.PreferedLoadingMethod = this.ImmoViewer.VideoLoadingMethods[0];
			this.ImmoViewer.DisablePlayParam = "";
			this.ImmoViewer.AdditionalParam = "?autoplay=1&psm.showLangSwitch=false";
			this.ImmoViewer.isVirtualTour = !0;
			this.ImmoViewer.CaseSensitiveParam = !0;
			this.ImmoViewer.OverwriteParamValue = !0;
			this.ImmoViewer.CleanParamValue = !1;
			this.ImmoViewer.SetVideoInfo = function(n) { t.ImmoViewer.FormatedThumbUrl = n != null && n.firstImage != null && n.firstImage != "null" ? n.firstImage : "" };
			this.hostList = [this.Paradym, this.Bonnevisite, this.Matterport, this.Previsite, this.Realtourvision, this.Vimeo, this.Youriguide, this.Youtube, this.ImmoViewer, this.RealVision] } return n.prototype.getHost = function(n) { var t, i, r, u, f; if (n != null)
			for (t = 0, i = this.hostList; t < i.length; t++)
				if (r = i[t], u = r.RegExHost, u && (f = n.match(u), f != null)) return r; return null }, n.YoutubeRegEx = /^(.(?!edit\?))*(youtu\.be\/|u\/\w\/|embed\/|watch\?v=|\&v=|video_id=)(?!edit\?)([^#\&\?\/]*).*/i, n.VimeoRegEx = /^.*vimeo.com\/(video\/)?(((?!review\/)[0-9])*)(\/$)?([^\/])*/i, n.MatterportRegEx = /^.*(my.matterport.com\/|condos.ca\/matterport).*(\?m=|models\/|\?model=)([^#\&\?\/]*).*/i, n.YourIguideRegex = /^.*(youriguide.com\/)([^#\&\?\/]*).*/i, n.RealtorVisionRegex = /^.*(real[.]vision\/)([^#\&\?\/]*).*/i, n.ImmoViewerRegex = /^.*(immoviewer.com\/portal\/tour\/)([^#\&\?\/]*).*/i, n.YoutubeJson = "https://www.youtube.com/oembed", n.VimeoJson = "https://vimeo.com/api/oembed.json", n.MatterportJson = "https://my.matterport.com/api/v1/player/models/", n.RealVisionJson = "https://api.real.vision/v1/properties/getlistingbyname?name=", n.ImmoViewerJson = "https://app.immoviewer.com/rest/v1/tour?internalID=", n }(),
	MultimediaProvider = function() {
		function n(n, t) { this.CaseSensitiveParam = !1;
			this.VideoLoadingMethods = [];
			this.MultiEmbedUrl = !1;
			this.Name = n;
			this.VideoProvider = t } return n.prototype.addQueryParam = function(n) { this.AdditionalParam += n }, n.prototype.removeQueryParam = function(n) { this.DisablePlayParam += n }, n.getFormatedProviderUrl = function(n, t) { var r;
			n = n.replace(/https?:\/\//ig, "https://"); var f, u = t.PreviewUrl ? t.PreviewUrl : n,
				e = typeof t.EmbedUrl != "undefined" ? t.EmbedUrl : u,
				i = n.match(t.RegExHost); return i != null && (i = n.match(t.RegUrlReformat), r = i.length - 1, t.RegExGroupID != null && (r = t.RegExGroupID), i != null && i[r] != null && i[r].length > 0) ? (f = i[r], u + f) : u }, n }(),
	VideoProviderName;
(function(n) { n[n.Youtube = 0] = "Youtube";
	n[n.Vimeo = 1] = "Vimeo";
	n[n.Matterport = 2] = "Matterport";
	n[n.Youriguide = 3] = "Youriguide";
	n[n.Paradym = 4] = "Paradym";
	n[n.Realtourvision = 5] = "Realtourvision";
	n[n.Previsite = 6] = "Previsite";
	n[n.RealVision = 7] = "RealVision";
	n[n.ImmoViewer = 8] = "ImmoViewer";
	n[n.Bonnevisite = 9] = "Bonnevisite" })(VideoProviderName || (VideoProviderName = {})),
	function(n) { n.Native = "0";
		n.Local = "1";
		n.BVD = "2";
		n.DVA = "3" }(VideoAccessType || (VideoAccessType = {})),
	function(n) { n[n.VideoWithThumbnail = 0] = "VideoWithThumbnail";
		n[n.VideoNoThumbnail = 1] = "VideoNoThumbnail" }(VideoDisplay || (VideoDisplay = {})),
	function(n) { n[n.LoadingDefered = 0] = "LoadingDefered";
		n[n.LoadingNow = 1] = "LoadingNow" }(VideoLoadingType || (VideoLoadingType = {})),
	function(n) { n[n.Yes = 0] = "Yes";
		n[n.No = 1] = "No" }(VideoLoadingDisplay || (VideoLoadingDisplay = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }();
NotificationModel = function(n) {
	function t() { return n !== null && n.apply(this, arguments) || this } return __extends(t, n), t }(ModelBase),
	function(n) { n[n.Null = 0] = "Null";
		n[n.Residential = 1] = "Residential";
		n[n.Commercial = 2] = "Commercial" }(NotificationApplicationModes || (NotificationApplicationModes = {})),
	function(n) { n[n.Null = 0] = "Null";
		n[n.Search = 1] = "Search";
		n[n.Compare = 2] = "Compare";
		n[n.Favourite = 3] = "Favourite" }(NotificationTypes || (NotificationTypes = {}));
var __extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	OfficeCardModel = function(n) {
		function t(t, i, r, u, f) { var e = n.call(this) || this; return e.ContactId = "", e.ReferenceNumber = "", e.ListingId = "", e.IndividualId = "", e.OfficeAltText = "", e.OrganizationId = "", e.DetailsURL = "", e.LogoURL = "", e.Address = "", e.Name = "", e.Type = "", e.FaxNumber = "", e.Phones = [], e.SocialIcons = [], e.CallablePhones = [], e.Websites = [], e.ShowEmailButton = !1, e.ShowWebsiteButton = !1, e.ShowCallButton = !1, e.ShowFooterLinks = !1, e.ShowLogo = !1, e.ShowPhones = !1, e.ShowSocialIcons = !1, e.HasFax = !1, e.ContactId = i || "", e.ReferenceNumber = r || "", e.ListingId = u || "", e.IndividualId = f || "", e.OrganizationId = t.OrganizationID.toString(), e.DetailsURL = t.RelativeDetailsURL ? "/" + ApplicationState.ApplicationModeString + t.RelativeDetailsURL : "/" + ApplicationState.ApplicationModeString + "/Office/" + e.OrganizationId.toString(), t.Phones != null && t.Phones.length > 0 && (e.LoadPhones(t.Phones), e.LoadCallablePhones(t.Phones)), e.ShowPhones = e.Phones.length > 0, (t.Logo || "") != "" && (e.ShowLogo = !0, e.LogoURL = t.Logo), e.Name = t.Name, e.Type = t.Designation, (t.Address || "") != "" && (t.Address.AddressText || "") != "" && (e.Address = t.Address.AddressText.replace("||", ", ").replace("|", ", ")), t.HasEmail && t.Emails != null && t.Emails.length > 0 && (e.ShowEmailButton = !0, e.ContactId = t.Emails[0].ContactId), t.Websites != null && t.Websites.length > 0 && (e.LoadWebsites(t.Websites), e.LoadSocialIcons(t.Websites)), e.OfficeAltText = Translation.get("OfficeImageAltText", e.Name), e.ShowFooterLinks = e.ShowCallButton || e.ShowEmailButton, e } return __extends(t, n), t.prototype.LoadCallablePhones = function(n) { var t, i; if (n != null)
			for (t = 0; t < n.length; t++) i = new PhoneModel(n[t]), i.Type != PhoneType.Fax && (this.ShowCallButton = !0, this.CallablePhones.push(i)) }, t.prototype.LoadPhones = function(n) { var t, i; if (n != null)
			for (t = 0; t < n.length; t++) i = new PhoneModel(n[t]), this.Phones.push(i), Number(n[t].PhoneTypeId) == Number(PhoneType.Fax) && (this.HasFax = !0, this.FaxNumber = PhoneModel.ConvertToString(n[t])) }, t.prototype.LoadWebsites = function(n) { var t, i; if (n != null)
			for (t = 0; t < n.length; t++) Number(n[t].WebsiteTypeId) == Number(WebSiteType.Website) && (i = new WebsiteModel(n[t]), this.Websites.push(i), this.ShowWebsiteButton = !0) }, t.prototype.LoadSocialIcons = function(n) { var t, i; if (n != null) { for (t = 0; t < n.length; t++) Number(n[t].WebsiteTypeId) != Number(WebSiteType.Website) && (i = new SocialLinkModel(n[t]), this.SocialIcons.push(i));
			this.ShowSocialIcons = this.SocialIcons.length > 0 } }, t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	OfficeModel = function(n) {
		function t(t) { var i = n.call(this) || this; return i.organizationId = t, i } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	PaginationModel = function(n) {
		function t(t) { var r = n.call(this) || this,
			i; if (r.AllowPageSelection = !0, r.Pages = [], t != null)
			for (i = 1; i <= t.TotalPages; i++) r.Pages.push(new LinkModel(i.toString(), "#", "", i.toString())); return r } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	PhoneModel = function(n) {
		function t(i) { var r = n.call(this) || this,
			u = ""; return u = ((i.AreaCode || "") == "" ? "" : i.AreaCode + "-") + i.PhoneNumber, i.Extension && (u += " ext " + i.Extension), r.Number = u, r.Type = PhoneType[i.PhoneTypeId], r.Label = i.PhoneType, r.TelLinkURL = t.CreateTelLink(i), r } return __extends(t, n), t.CreateTelLink = function(n) { var t = "tel:"; return t += (n.CountryCode || "") == "" ? "" : n.CountryCode + "-", t += (n.AreaCode || "") == "" ? "" : n.AreaCode + "-", t += (n.PhoneNumber || "") == "" ? "" : n.PhoneNumber.length > 3 && n.PhoneNumber.indexOf("-") == -1 ? n.PhoneNumber.slice(0, 3) + "-" + n.PhoneNumber.slice(3) : n.PhoneNumber, t + ((n.Extension || "") == "" ? "" : "," + n.Extension) }, t.ConvertToString = function(n) { var t = ""; return t += ((n.AreaCode || "") == "" ? "" : n.AreaCode + "-") + n.PhoneNumber, n.Extension && (t += " ext " + n.Extension), t }, t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	ProvinceModel = function(n) {
		function t(t, i, r) { var u = n.call(this) || this; return u.Id = t, u.selectCityUrl = i, u.cultureId = r, u } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	RealtorCardCarouselModel = function(n) {
		function t(t, i, r, u) { i === void 0 && (i = !0);
			r === void 0 && (r = !1);
			u === void 0 && (u = !1); var f = n.call(this) || this; return f.Results = [], f.ShowBullets = !0, f.ContinuousSlides = !1, f.ShowXofX = !1, f.Results = t, f.ShowBullets = i, f.ContinuousSlides = r, f.ShowXofX = u, f } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	RealtorCardModel = function(n) {
		function t(t, i, r, u) { var f = n.call(this) || this; return f.IndividualId = "", f.ContactId = "", f.OrganizationId = "", f.ReferenceNumber = "", f.ListingId = "", f.Address = "", f.RealtorName = "", f.RealtorAltText = "", f.RealtorDesignation = "", f.RealtorEducationalCredentials = "", f.HighResRealtorImageURL = "", f.RealtorImageURL = "", f.RealtorPosition = "", f.CorporationType = "", f.CorporationName = "", f.FaxNumber = "", f.DetailsURL = "", f.IsCCN = !1, f.OfficeName = "", f.OfficeAltText = "", f.OfficeAddress = "", f.OfficeDesignationName = "", f.OfficeLogoImageURL = "", f.Phones = [], f.SocialIcons = [], f.CallablePhones = [], f.Websites = [], f.ShowHighResPhoto = !1, f.ShowRealtorImage = !1, f.ShowCallButton = !1, f.ShowWebsiteButton = !1, f.ShowEmailButton = !1, f.ShowFooterLinks = !1, f.ShowPhones = !1, f.ShowSocialIcons = !0, f.ShowOfficeInfo = !0, f.ShowOfficeLogo = !0, f.HasFax = !1, f.ShowCorporationName = !1, f.ShowCorporationType = !1, f.ShowRealtorName = !1, f.ShowRealtorAddress = !1, f.ContactId = i || "", f.ReferenceNumber = r || "", f.ListingId = u || "", f.IndividualId = t.IndividualID.toString(), f.OrganizationId = t.Organization.OrganizationID.toString(), f.OfficeCard = new OfficeCardModel(t.Organization), f.RealtorName = t.Name + " " + (t.DesignationCodes || ""), f.RealtorPosition = t.Position || "", f.RealtorDesignation = t.DesignationCodes || "", f.RealtorEducationalCredentials = t.EducationCredentials || "", f.CorporationName = t.CorporationName, f.CorporationType = t.CorporationType, f.ShowCorporationName = t.CorporationDisplayTypeId == "1", f.ShowCorporationType = t.CorporationDisplayTypeId == "2", f.ShowRealtorName = t.CorporationDisplayTypeId != "2", t.CorporationDisplayTypeId == "2" && (f.RealtorName = t.CorporationName, f.RealtorDesignation = "", f.RealtorEducationalCredentials = "", f.RealtorPosition = ""), (t.Photo || "") != "" && (f.ShowRealtorImage = !0, f.RealtorImageURL = f.ShowHighResPhoto ? t.Photo.toLowerCase().replace("lowres", "highres") : t.Photo), f.DetailsURL = (t.RelativeDetailsURL || "") != "" ? t.RelativeDetailsURL : "/" + ApplicationState.ApplicationModeString + "/Agent/" + t.IndividualID, f.IsCCN = t.CccMember, f.OfficeName = t.Organization.Name, (t.Organization.Address || "") != "" && (t.Organization.Address.AddressText || "") != "" && (f.OfficeAddress = t.Organization.Address.AddressText.replace(/\|/g, "<br />")), f.OfficeDesignationName = t.Organization.Designation, t.Organization.Logo != null ? f.OfficeLogoImageURL = ApplicationConfig.OrganizationImageLowResolution + t.Organization.Logo : f.ShowOfficeLogo = !1, t.Emails != null && t.Emails.length > 0 ? (f.ContactId = t.Emails[0].ContactId, f.ShowEmailButton = !0) : f.ShowEmailButton = !1, t.Phones != null && t.Phones.length > 0 ? (f.LoadPhones(t.Phones), f.LoadCallablePhones(t.Phones)) : f.ShowCallButton = !1, t.Websites != null && t.Websites.length > 0 ? (f.LoadWebsites(t.Websites), f.LoadSocialIcons(t.Websites), f.ShowWebsiteButton = !0) : (f.ShowSocialIcons = !1, f.ShowWebsiteButton = !1), f.ShowFooterLinks = f.ShowCallButton || f.ShowEmailButton || f.ShowWebsiteButton, f.RealtorAltText = Translation.get("RealtorImageAltText", f.RealtorName), f.OfficeAltText = Translation.get("OfficeImageAltText", f.OfficeName), f } return __extends(t, n), t.prototype.LoadCallablePhones = function(n) { var t, i; if (n != null)
			for (t = 0; t < n.length; t++) i = new PhoneModel(n[t]), i.Type != PhoneType.Fax && (this.ShowCallButton = !0, this.CallablePhones.push(i)) }, t.prototype.LoadPhones = function(n) { var t, i; if (n != null) { for (t = 0; t < n.length; t++) i = new PhoneModel(n[t]), this.Phones.push(i), i.Type == PhoneType.Fax && (this.HasFax = !0, this.FaxNumber = PhoneModel.ConvertToString(n[t]));
			this.ShowPhones = this.Phones.length > 0 } }, t.prototype.LoadWebsites = function(n) { var t, i; if (n != null)
			for (t = 0; t < n.length; t++) i = new WebsiteModel(n[t]), this.Websites.push(i) }, t.prototype.LoadSocialIcons = function(n) { var t, i; if (n != null) { for (t = 0; t < n.length; t++) Number(n[t].WebsiteTypeId) != Number(WebSiteType.Website) && (i = new SocialLinkModel(n[t]), this.SocialIcons.push(i));
			this.ShowSocialIcons = this.SocialIcons.length > 0 } }, t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	RealtorModel = function(n) {
		function t(t, i, r, u, f) { var e = n.call(this) || this; return e.individualId = t, e.organizationId = i, e.showListingsSection = r, e.showOfficeListings = u, e.firstName = f, e } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	SavedSearchModel = function(n) {
		function t(t) { var i = n.call(this) || this,
			r; return i.Name = "", i.URL = "", i.Date = "", i.CtrlId = "", i.CtrlClass = "", i.NotificationsEnabled = !1, i.Name = t.name.HTMLSafe(), r = location.origin + RouteHelper.getURL("map") + "#" + t.url.substr(t.url.indexOf("#") + 1), i.URL = r + "&SearchName=" + encodeURIComponent(t.name), i.NotificationsEnabled = t.notify, i.Date = SavedSearch.GetFormattedDate(t.savedDate), i.CtrlId = "ctrl_" + encodeURIComponent(t.name), i.CtrlClass = "ctrl_search_notify_" + t.appMode.toString(), i } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	SearchResultsModel = function(n) {
		function t() { return n !== null && n.apply(this, arguments) || this } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	SharedNotesModel2 = function(n) {
		function t(t, i, r, u) { var f = n.call(this) || this; return f.displayName = t, f.notes = i, f.sharedNotesJSON = r, f.senderUID = u, f } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	SocialLinkModel = function(n) {
		function t(t) { var i = n.call(this) || this; return Number(t.WebsiteTypeId) == Number(WebSiteType.Facebook) ? i.ImageURL = "/wp-content/plugins/adk_feed/assets/images/facebook.svg" : Number(t.WebsiteTypeId) == Number(WebSiteType.LinkedIn) ? i.ImageURL = "/wp-content/plugins/adk_feed/assets/images/linkedin.svg" : Number(t.WebsiteTypeId) == Number(WebSiteType.Twitter) && (i.ImageURL = "/wp-content/plugins/adk_feed/assets/images/twitter.svg"), i.LinkURL = t.Website, i } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	SocialShareModel = function(n) {
		function t(t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b) { var k = n.call(this) || this; return k.EmailFriendMedium = b, k.LinkBack = t, k.LinkBackFacebook = i, k.LinkBackLinkedIn = r, k.LinkBackTwitter = u, k.LinkBackPinterest = f, k.LinkBackGoogle = e, k.Title = o, k.MediaSrc = s, k.Description = h, k.CardType = c, k.MediaType = l, k.Listings = a, k.Listing = v, k.Campaign = y, k.SharePage = p, k } return __extends(t, n), t.prototype.overwriteSocialShareHashLink = function() { this.LinkBack.indexOf("#") > 0 ? this.LinkBack = this.LinkBack.replace(this.LinkBack.substring(this.LinkBack.indexOf("#"), this.LinkBack.length), "") + window.location.hash : this.LinkBack += window.location.hash;
			this.LinkBackFacebook.indexOf("#") > 0 ? this.LinkBackFacebook = this.LinkBackFacebook.replace(this.LinkBackFacebook.substring(this.LinkBackFacebook.indexOf("#"), this.LinkBackFacebook.length), "") + window.location.hash : this.LinkBackFacebook += window.location.hash;
			this.LinkBackLinkedIn.indexOf("#") > 0 ? this.LinkBackLinkedIn = this.LinkBackLinkedIn.replace(this.LinkBackLinkedIn.substring(this.LinkBackLinkedIn.indexOf("#"), this.LinkBackLinkedIn.length), "") + window.location.hash : this.LinkBackLinkedIn += window.location.hash;
			this.LinkBackTwitter.indexOf("#") > 0 ? this.LinkBackTwitter = this.LinkBackTwitter.replace(this.LinkBackTwitter.substring(this.LinkBackTwitter.indexOf("#"), this.LinkBackTwitter.length), "") + window.location.hash : this.LinkBackTwitter += window.location.hash;
			this.LinkBackPinterest.indexOf("#") > 0 ? this.LinkBackPinterest = this.LinkBackPinterest.replace(this.LinkBackPinterest.substring(this.LinkBackPinterest.indexOf("#"), this.LinkBackPinterest.length), "") + window.location.hash : this.LinkBackPinterest += window.location.hash;
			this.LinkBackGoogle.indexOf("#") > 0 ? this.LinkBackGoogle = this.LinkBackGoogle.replace(this.LinkBackGoogle.substring(this.LinkBackGoogle.indexOf("#"), this.LinkBackGoogle.length), "") + window.location.hash : this.LinkBackGoogle += window.location.hash }, t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	UnsubscribeEmailsModel = function(n) {
		function t(t, i, r, u, f) { var e = n.call(this) || this; return e.showComms = !1, e.showNotify = !1, e.hdn_DES = "", e.redirectToIndex = !0, e.showComms = t, e.showNotify = i, e.hdn_DES = r, e.redirectToIndex = u, e.user = f, e } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	WebsiteModel = function(n) {
		function t(t) { var i = n.call(this) || this; return i.Label = t.WebsiteTypeId, i.URL = t.Website, i } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	DisclaimerPageModel = function(n) {
		function t() { var t = n.call(this) || this; return t.DisplayedOverPage = !1, t } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	IndexPageModel = function(n) {
		function t() { return n.call(this) || this } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	BlogControlModel = function(n) {
		function t(t) { var i = n.call(this) || this; return i.CategoryElements = t, i } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	BlogHeaderModel = function(n) {
		function t() { return n.call(this) || this } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	CommentsModel = function(n) {
		function t() { var t = n.call(this) || this; return t.NbParentCommentDisplayed = 0, t.NbComments = 0, t.CommentLoaded = 0, t.ParentChildRepliesLoaded = !1, t.ParentReplies = [], t.AllComments = [], t.NbParentLoaded = 0, t.NbParentComments = 0, t } return __extends(t, n), t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	ErrorDisplayModel = function(n) {
		function t(t, i, r) { var u = n.call(this) || this; return u.LangageCulture = r, u.EnglishErrorText = i, u.FrenchErrorText = t, u } return __extends(t, n), t.BlogFrenchImageLink = "/wp-content/plugins/adk_feed/assets/images/blogheader_en.svg", t.BlogEnImageLink = "/wp-content/plugins/adk_feed/assets/images/blogheader_fr.svg", t }(ModelBase),
	__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
		function r() { this.constructor = t } n(t, i);
		t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	MasterPages;
(function(n) { var t = function(t) {
	function i(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(i, t), i.initialize = function() { ApplicationState.registerEventHandlers() }, i.prototype.loadModel = function() {}, i.prototype.registerEventHandlers = function() { var t = this;
		$(window).on("beforeunload", function() { showLoadingBar() });
		$("#headerEnLnk").not(".selected").click(function() { if ($(this).attr("href") == "#") switchLanguage(1);
		else { var n = "";
			window.location.hash != "" && (n = window.location.hash);
			window.location.href = $(this).attr("href") + n } return !1 });
		$("#headerFrLnk").not(".selected").click(function() { if ($(this).attr("href") == "#") switchLanguage(2);
		else { var n = "";
			window.location.hash != "" && (n = window.location.hash);
			window.location.href = $(this).attr("href") + n } return !1 });
		Events.Listen(SavedSearch.savedSearchesCountUpdated, function(t) { var i = t.detail;
			n.Desktop.updateSavedSearchIcon(i.count);
			Cookie.SavedSearchCount.save(i.count.toString()) }, Events.ListenerScope.Global);
		Events.Listen(SavedSearch.savedSearchesUpdated, function(t) { var r = t.detail || new SavedSearchUpdatedArgs,
			i = SavedSearch.GetAll().length;
			Cookie.SavedSearchCount.save(i.toString());
			n.Desktop.updateSavedSearchIcon(t.detail);
			ApplicationState.UserIsSignedIn && Gigya.saveConsumerSearches() }, Events.ListenerScope.Global);
		Events.Listen(Favourite.favouriteAddedEvent, function(t) { var i = t.detail;
			n.Desktop.updateFavouriteIcon(i.total);
			Cookie.FavouriteCount.save(i.total.toString()) }, Events.ListenerScope.Global);
		Events.Listen(Favourite.favouriteRemovedEvent, function(t) { var i = t.detail;
			n.Desktop.updateFavouriteIcon(i.total);
			Cookie.FavouriteCount.save(i.total.toString()) }, Events.ListenerScope.Global);
		Events.Listen(Favourite.favouritesRefreshEvent, function(t) { var i = t.detail;
			n.Desktop.updateFavouriteIcon(i.total);
			Cookie.FavouriteCount.save(i.total.toString()) }, Events.ListenerScope.Global);
		Events.Listen(ConsumerProfile.Notifications.notificationsRefreshEvent, function() { n.Desktop.updateNotificationIcon(null) }, Events.ListenerScope.Global);
		Events.Listen(AjaxEngine.callBeginEvent, function(n) { var t = n.detail;
			showLoadingBar();
			Logging.Debug("Show loading bar", LogType.Other) }, Events.ListenerScope.Global);
		Events.Listen(AjaxEngine.callEndEvent, function(t) { var i = t.detail;
			n.Desktop.hideLoadingBar();
			Logging.Debug("Hide loading bar", LogType.Other) }, Events.ListenerScope.Global);
		Events.Listen(AjaxEngine.callErrorEvent, function(t) { var i = t.detail;
			n.Desktop.hideLoadingBar();
			Logging.Debug("Hide loading bar", LogType.Other) }, Events.ListenerScope.Global);
		Favourite.maxSignedInCountEvent.Listen(function() { showSimpleDialog(Translation.get("SignedInMaxFavs")) });
		Favourite.maxCountEvent.Listen(function() { Gigya.showScreen(gigyaScreen.SaveMoreFavs, null) });
		Favourite.favouriteNoLongerAvailable.Listen(function() { showMessage(Translation.get("ExpiredListingsRemoved")) });
		Events.Listen(Controls.Desktop.ConfirmationDialog.ConfirmationDialogOpened, function(t) { n.Desktop.OpenedDialogs.push({ id: t.detail.Id, closer: t.detail.Closer }) }, Events.ListenerScope.Global);
		Events.Listen(Controls.Desktop.ConfirmationDialog.ConfirmationDialogClosed, function(t) { for (var r = -1, i = 0; i < n.Desktop.OpenedDialogs.length; i++)
			if (n.Desktop.OpenedDialogs[i].id == t.detail.Id) { r = i; break } r > -1 && n.Desktop.OpenedDialogs.splice(r, i) }, Events.ListenerScope.Global);
		Gigya.addEventHandlers() }, i.showLoadingBar = function() { $("#loadingBar").is(":visible") == !1 && $("#loadingBar").show() }, i.hideLoadingBar = function() { $("#loadingBar").hide() }, i.updateFavouriteIcon = function(n, t) { t === void 0 && (t = !1);
		n > 0 ? ($("#headerFavCountNum").text(n), $("#headerFavCountNum").show(), n.toString() != $("#headerFavCountNum").text() && t == !1 && Animate($("#headerFavCountNum"), "bounceIn", .6, TransitionTiming.ease)) : t == !1 && AnimateOut($("#headerFavCountNum"), ExitAnimations.bounceOut, .6, TransitionTiming.ease, function() { $("#headerFavCountNum").hide() }) }, i.updateSavedSearchIcon = function() { var n = SavedSearch.GetAll().length;
		$("#headerSavedSearchCountNum").toggle(n > 0);
		$("#headerSavedSearchCountNum").text(n) }, i.updateNotificationIcon = function(n) { if (ApplicationState.UserIsSignedIn) { if (n == null && ConsumerProfile.UserAccountSettings.Notifications) { var t = new ConsumerProfile.Notifications(ConsumerProfile.UserAccountSettings.Notifications);
		n = t.getAllNotificationCount();
		Cookie.NotificationCount.get("0") != n.toString() && Cookie.NotificationCount.save(n.toString()) } n > 0 && $("#headerNotificationCountNum").text(n);
		$("#headerNotificationCountNum").toggle(n > 0) } else $("#headerNotificationCountNum").toggle(!1) }, i.prototype.render = function() { Utilities.ImportR6Data();
		Cookie.Language.get("1") != ApplicationState.CultureID.toString() && Cookie.Language.save(ApplicationState.CultureID.toString());
		n.Desktop.updateFavouriteIcon(Favourite.getAll().length, !0);
		n.Desktop.updateSavedSearchIcon(SavedSearch.GetAll().length);
		ApplicationState.UserIsSignedIn && ConsumerProfile.Notifications.RefreshNotifications(null, null);
		n.Desktop.updateNotificationIcon(null);
		Utilities.Desktop.checkIEWarning() }, i.GoogleAPILoaded = "GoogleAPILoaded", i.pageInAnimationComplete = "pageInAnimationComplete", i.OpenedDialogs = [], i }(MasterPage);
	n.Desktop = t })(MasterPages || (MasterPages = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, null, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { var n = this }, t.prototype.registerEventHandlers = function() { var n = this;
				$(".startSearchButton").click(function() { n.ErrorSearch() });
				$("#nf_search_input").keypress(function(t) { t.which == 13 && (t.preventDefault(), n.ErrorSearch()) }) }, t.prototype.ErrorSearch = function() { var t = this,
				n = $("#nf_search_input").val();
				Core.GoToPage(RouteHelper.getURL("map") + "#Area=" + n + "&ApplicationId=1&RecordsPerPage=9&Page=1") }, t }(WebPage);
			n.AboutUs = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.canScrollInPage = !1, r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { var i = this,
				n = $(".infoContentSection"),
				t = n.length;
				n.each(function(n) { n == t - 1 ? Controls.Desktop.TabHighlighter.insert($(this).find(".infoContentSection_SubSection_TabItem"), InfoPage.initPageAfterTabSelector) : Controls.Desktop.TabHighlighter.insert($(this).find(".infoContentSection_SubSection_TabItem")) }) }, t.prototype.registerEventHandlers = function() { InfoPage.registerEventHandlers() }, t }(WebPage);
			n.BuyerInfo = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function(n) { this.cityId = n.CityId;
				this.cityName = n.CityName;
				this.cultureId = n.CultureId;
				this.searchURL = n.SearchURL;
				this.numOfListings = +n.NumPropsForSale }, t.prototype.render = function() { var r = this,
				i = this,
				u = $(".city_facts_bubble").height(),
				f = $("#img_facts_bg").height(),
				n, t;
				$("#hdr_tab_con").hide();
				n = new ListingCardCarouselArgs;
				n.criteria.CultureId = i.cultureId;
				n.criteria.CityId = i.cityId; + i.cityId < 1 && (n.criteria.City = i.cityName);
				n.criteria.ApplicationId = "1";
				n.criteria.PropertySearchTypeId = "1";
				n.criteria.TransactionTypeID = "2";
				n.criteria.IncludePins = "0";
				n.criteria.PropertyTypeGroupID = "1";
				n.criteria.BedroomRange = "0-0";
				n.criteria.BathroomRange = "0-0";
				n.criteria.ParkingSpaceRange = "0-0";
				n.criteria.SortBy = "23";
				n.criteria.RecordsPerPage = "12";
				t = new ControlFetcherArgs("cityListingsOuterCon", "cityListingsCon");
				t.showLoadingSpinner = !1;
				t.showLoadingAnimation = !1;
				t.postCallHandler = function() { r.numOfListings > 0 && $("#city_listings_section").removeClass("hidden") };
				ControlFetcher.fetchListingCardsCarousel(t, n) }, t.prototype.registerEventHandlers = function() { var n = this;
				$(".city_info_searchbox_button").click(function() { n.DiscMap() }) }, t.prototype.DiscMap = function() { var n = this;
				Core.GoToPage(n.searchURL) }, t.prototype.DiscRealtor = function() { var n = this;
				Core.GoToPage(RouteHelper.getURL("realtor-search-results") + "#City=" + n.cityName + "&CultureId=" + n.cultureId + "&ApplicationId=1&RecordsPerPage=9&Page=1") }, t }(WebPage);
			n.City = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { var n = this }, t.prototype.registerEventHandlers = function() { var n = this;
				$(".btnBack > .btn").click(function() { Utilities.backLogic() });
				$(".letterItemNoBord,.letterItemBordLeft").click(function(n) { console.log("clicked"); var t = $(n.currentTarget).attr("data-glossary-id");
					$("html,body").animate({ scrollTop: $(".bigLetter[id=" + t + "]").offset().top }, 1e3) }) }, t }(WebPage);
			n.commercialGlossary = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.canScrollInPage = !1, r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { var i = this,
				n = $(".infoContentSection"),
				t = n.length;
				n.each(function(n) { n == t - 1 ? Controls.Desktop.TabHighlighter.insert($(this).find(".infoContentSection_SubSection_TabItem"), InfoPage.initPageAfterTabSelector) : Controls.Desktop.TabHighlighter.insert($(this).find(".infoContentSection_SubSection_TabItem")) }) }, t.prototype.registerEventHandlers = function() { var n = this;
				$(window).load(function() { n.initScrollElement && $("html,body").animate({ scrollTop: n.initScrollElement.offset().top }, 500) });
				$(".infoContentSection_SubSection_TabCon").hide();
				$(".infoContentSection").hide();
				InfoPage.registerEventHandlers() }, t }(WebPage);
			n.commercialResources = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { var n = this }, t.prototype.registerEventHandlers = function() { var n = this;
				$(".btnBack > .btn").click(function() { Utilities.backLogic() }) }, t }(WebPage);
			n.commercialServices = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { $(".btnBack").click(function() { Utilities.backLogic() });
				$("#ddlProvince").change(function() { var n = $(this).val();
					n == "0" ? $(".boardContactItemCon, .provinceLabel").show() : ($(".boardContactItemCon, .provinceLabel").hide(), $(".boardContactItemCon[data-provinceid=" + n + "], .provinceLabel[data-provinceid=" + n + "]").show()) });
				$("#btnSendContactUs").click(function() { return FormValidation.validateForm($("#contactUsForm"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation) ? Actions.emailContactUs({ emailFrom: $("#txtEmail").val(), fromName: $("#txtFirstName").val() + " " + $("#txtLastName").val(), subject: $("#ddlTopic").val(), message: Utilities.buildEmailFeedbackMessage(Utilities.cleanJSONValue($("#txtFirstName").val() + " " + $("#txtLastName").val()), Utilities.cleanJSONValue($("#txtEmail").val())) + $("#txtMessage").val(), cultureId: ApplicationState.CultureID.toString() }, function(n) { n.ErrorCode.Id == PublicContracts.ErrorCodeId.OK ? (showMessage(Translation.get("EmailSentSuccessfully")), resetInputControls($("#contactUsForm"), null)) : (showMessage(Translation.get("EmailSendError"), MessageType.Error), Logging.Error(JSON.stringify(n.ErrorCode))) }) : addAnimationClass($("#btnSendContactUs"), "btnFail"), !1 }) }, t.prototype.render = function() { $("#ddlProvince").attr("autocomplete", "new-password");
				DropDown.loadSelect2($("#ddlProvince"), { allowClear: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", stopOpenOnClear: !0, width: "400px" });
				DropDown.loadSelect2($("#ddlTopic"), { allowClear: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", stopOpenOnClear: !0, width: "100%" }) }, t }(WebPage);
			n.ContactUs = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
				$("#btnClearLocalStorage").click(function() { return n.clearLocalStorage(), !1 });
				$("#btnClearSessionStorage").click(function() { return n.clearSessionStorage(), !1 });
				$("#btnClearCookies").click(function() { return n.clearCookies(), !1 });
				$("#btnClearControlFetcherCache").click(function() { return n.clearControlFetcherCache(), !1 });
				$("#btnClearAll").click(function() { return n.clearAll(), !1 });
				$("#btnTestLocation").click(function() { return n.testLocation(), !1 });
				$("#btnTestFullscreen").click(function() { return n.checkIfFullscreenSupported(), !1 }) }, t.prototype.checkIfFullscreenSupported = function() { isFullScreenSupported() ? showMessage("Fullscreen supported") : showMessage("Fullscreen not supported") }, t.prototype.clearLocalStorage = function() { localStorage.clear();
				showMessage("Local Storage Cleared") }, t.prototype.clearSessionStorage = function() { sessionStorage.clear();
				showMessage("Session Storage Cleared") }, t.prototype.clearControlFetcherCache = function() { ControlFetcher.cache.clear();
				showMessage("Control Fetcher Cache NOT Cleared") }, t.prototype.clearCookies = function() { var t = $.cookie(),
				n; for (n in t) $.removeCookie(n);
				document.cookie.split(";").forEach(function(n) { document.cookie = n.replace(/^ +/, "").replace(/=.*/, "=;expires=" + (new Date).toUTCString() + ";path=/") });
				showMessage("Cookies Cleared");
				window.setTimeout(function() { window.location.reload() }, 1500) }, t.prototype.clearAll = function() { this.clearLocalStorage();
				this.clearSessionStorage();
				this.clearCookies();
				this.clearControlFetcherCache();
				showMessage("All Cleared");
				window.setTimeout(function() { window.location.reload() }, 1500) }, t.prototype.testLocation = function() { navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(n) { showMessage("Success: <br/>Lat = " + n.coords.latitude.toString() + " <br/>Lon = " + n.coords.longitude.toString() + " <br/>Accuracy = " + n.coords.accuracy, MessageType.Normal, DisplayType.Lightbox) }, function(n) { showMessage("Failed: <br/>Code = " + n.code + " <br/>Msg = " + n.message, null, DisplayType.Lightbox) }) : showMessage("Geolocation is not supported by this browser.") }, t }(WebPage);
			n.Debugger = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var i = function() {
				function n() { this.signedIn = "false" } return n }(),
			t, r;
			n.EmailRealtorArgs = i;
			t = function() {
				function n() { this.signedIn = "false" } return n }();
			n.EmailOfficeArgs = t;
			r = function(n) {
				function r(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(r, n), r.prototype.loadModel = function() {}, r.prototype.registerEventHandlers = function() { $("#btnEmailRealtorCancel").click(function() { return window.close(), !1 });
					$("#btnEmailRealtorSend").click(function() { return r.sendEmail(), !1 });
					$("#EmailRadio").change(function() { $(this).is(":checked") && FormValidation.removeValidatorFromField($("#PhoneNumberTxt"), "required") });
					$("#PhoneContactPreferredRadio").change(function() { $(this).is(":checked") && FormValidation.addValidatorToField($("#PhoneNumberTxt"), "required") }) }, r.prototype.render = function() { DropDown.loadSelect2($("#ddl_Iam_emailrealtor"), { allowClear: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", width: "100%" });
					$("#ddl_Iam_emailrealtor").val(0).change();
					FormValueStorage.fillForm($("#emailRealtorCon")) }, r.sendEmail = function() { var f = $("#OrganizationId").val() != "",
					u = ApplicationConfig.CaptchaEnabled == !0 && grecaptcha ? grecaptcha.getResponse() : null,
					n; return ApplicationConfig.CaptchaEnabled || $("div.inputCon[data-validation=captcha]").removeAttr("data-validation"), FormValidation.validateForm($("#emailRealtorInnerCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation) ? (FormValueStorage.saveForm($("#emailRealtorCon")), f ? (n = new t, n.response = Utilities.cleanJSONValue(u), n.message = Utilities.cleanJSONValue($("#MessageTxt").val()), n.emailFrom = Utilities.cleanJSONValue($("#EmailAddressTxt").val()), n.phone = Utilities.cleanJSONValue($("#PhoneNumberTxt").val()), n.fromName = Utilities.cleanJSONValue($("#FirstNameTxt").val()), n.fromLastName = Utilities.cleanJSONValue($("#LastNameTxt").val()), n.IamA = Utilities.cleanJSONValue($(".ddlEmailRealtor").val()), n.applicationmode = ApplicationState.CurrentMode.toString(), n.AnalyticsId = Utilities.cleanJSONValue(Cookie.GUID.get("")), n.PreferredOption = Utilities.cleanJSONValue($("input[name=MethodOfContact]:checked").val()), n.message = Utilities.cleanJSONValue($("#txtMessage").val()), n.MoreInformationRequested = Utilities.cleanJSONValue($("#chkMoreInformation").is(":checked") ? "true" : "false"), n.InterestInBuying = Utilities.cleanJSONValue($("#chkInterestedBuying").is(":checked") ? "true" : "false"), n.InterestInSelling = Utilities.cleanJSONValue($("#chkInterestedSelling").is(":checked") ? "true" : "false"), n.HasGeneralQuestions = Utilities.cleanJSONValue($("#chkQuestionAbout").is(":checked") ? "true" : "false"), n.ShowingRequested = Utilities.cleanJSONValue($("#chkBookShowing").is(":checked") ? "true" : "false"), n.HasWorkingRealtor = Utilities.cleanJSONValue($("#chkWorkingRealtor").is(":checked") ? "true" : "false"), n.HasLocation = Utilities.cleanJSONValue($("#chkLocation").is(":checked") ? "true" : "false"), n.culture = Utilities.cleanJSONValue(ApplicationState.CultureID.toString()), n.referenceNum = Utilities.cleanJSONValue($("#ReferenceNumber").val()), n.contactId = Utilities.cleanJSONValue($("#ContactId").val()), n.organizationId = Utilities.cleanJSONValue($("#OrganizationId").val()), n.propertyId = Utilities.cleanJSONValue($("#PropertyId").val()), n.signedIn = Utilities.cleanJSONValue(ApplicationState.UserIsSignedIn.toString()), $("#btnEmailRealtorSend").prop("disabled", "disabled").addClass("loading"), Actions.emailAnOrganization(n, r.handleEmailOfficeResponse), !0) : (n = new i, n.response = u, n.message = Utilities.cleanJSONValue($("#MessageTxt").val()), n.emailFrom = Utilities.cleanJSONValue($("#EmailAddressTxt").val()), n.phone = Utilities.cleanJSONValue($("#PhoneNumberTxt").val()), n.fromName = Utilities.cleanJSONValue($("#FirstNameTxt").val()), n.fromLastName = Utilities.cleanJSONValue($("#LastNameTxt").val()), n.ShowingRequested = Utilities.cleanJSONValue($("#chkBookShowing").is(":checked") ? "true" : "false"), n.HasWorkingRealtor = Utilities.cleanJSONValue($("#chkWorkingRealtor").is(":checked") ? "true" : "false"), n.HasLocation = Utilities.cleanJSONValue($("#chkLocation").is(":checked") ? "true" : "false"), n.IamA = Utilities.cleanJSONValue($(".ddlEmailRealtor").val()), n.applicationmode = Utilities.cleanJSONValue(ApplicationState.CurrentMode.toString()), n.AnalyticsId = Utilities.cleanJSONValue(Cookie.GUID.get("")), n.PreferredOption = Utilities.cleanJSONValue($("input[name=MethodOfContact]:checked").val()), n.culture = Utilities.cleanJSONValue(ApplicationState.CultureID.toString()), n.propertyId = Utilities.cleanJSONValue($("#PropertyId").val()), n.referenceNum = Utilities.cleanJSONValue($("#ReferenceNumber").val()), n.individualId = Utilities.cleanJSONValue($("#IndividualId").val()), n.contactId = Utilities.cleanJSONValue($("#ContactId").val()), n.message = Utilities.cleanJSONValue($("#txtMessage").val()), n.signedIn = Utilities.cleanJSONValue(ApplicationState.UserIsSignedIn.toString()), $("#btnEmailRealtorSend").prop("disabled", "disabled").addClass("loading"), Actions.emailARealtor(n, r.handleEmailRealtorResponse), !0)) : (addAnimationClass($("#btnEmailRealtorSend"), "btnFail"), !1) }, r.handleEmailRealtorResponse = function(n) { $("#btnEmailRealtorSend").prop("disabled", !1).removeClass("loading"); var t = Utilities.cleanJSONValue($("#PropertyId").val());
					n != null && n.ErrorCode.Id == PublicContracts.ErrorCodeId.OK ? (t != null && Analytics.log(t, "email_realtor"), showMessage(Translation.get("EmailSentSuccessfully")), $("#emailRealtorInnerCon").text(Translation.get("EmailSentSuccessfully")), window.opener != null ? (window.close(), window.opener.showMessage(Translation.get("EmailSentSuccessfully"))) : showMessage(Translation.get("EmailSentSuccessfully"))) : (showMessage(Translation.get("EmailSendError")), Logging.Error(JSON.stringify(n.ErrorCode))) }, r.handleEmailOfficeResponse = function(n) { var t = Utilities.cleanJSONValue($("#PropertyId").val());
					$("#btnEmailRealtorSend").prop("disabled", !1).removeClass("loading");
					n != null && n.ErrorCode.Id == PublicContracts.ErrorCodeId.OK ? (t != null && Analytics.log(t, "email_office"), window.opener != null ? (window.close(), window.opener.showMessage(Translation.get("EmailSentSuccessfully"))) : showMessage(Translation.get("EmailSentSuccessfully"))) : (showMessage(Translation.get("EmailSendError")), Logging.Error(JSON.stringify(n.ErrorCode))) }, r }(WebPage);
			n.EmailRealtor = r })(t = n.Desktop || (n.Desktop = {})) }(Pages || (Pages = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, null, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { var n = this }, t.prototype.registerEventHandlers = function() { var n = this;
				$(".startSearchButton").click(function() { n.ErrorSearch() });
				$("#nf_search_input").keypress(function(t) { t.which == 13 && (t.preventDefault(), n.ErrorSearch()) }) }, t.prototype.ErrorSearch = function() { var t = this,
				n = $("#nf_search_input").val();
				Core.GoToPage(RouteHelper.getURL("map") + "#Area=" + n + "&ApplicationId=1&RecordsPerPage=9&Page=1") }, t }(WebPage);
			n.Error = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { $(".btnBack").click(function() { Utilities.backLogic() });
				$(".faqTabNav_Item").click(function() { $(".faqTabNav_Item").removeClass("selected");
					$(this).addClass("selected"); var n = $(this).attr("data-tabid");
					$(".faqTab_Con").removeClass("open");
					$(".faqTab_Con[data-tabid=" + n + "]").addClass("open");
					$(".faqTab_Section").removeClass("open");
					$(".faqTab_Section_Content").addClass("closed") });
				$(".faqTab_Section_Title_Con").click(function() { $(".faqTab_Section").removeClass("open");
					$(".faqTab_Section_Content").addClass("closed");
					$(this).parent(".faqTab_Section").hasClass("open") ? ($(this).parent(".faqTab_Section").removeClass("open"), $(this).siblings(".faqTab_Section_Content").addClass("closed")) : ($(this).parent(".faqTab_Section").addClass("open"), $(this).siblings(".faqTab_Section_Content").removeClass("closed")) }) }, t.prototype.render = function() { $("#faqContentCon").css("min-height", $("#faqTab_Nav_InnerCon").outerHeight());
				$(".faqTab_Con.open .faqTab_Section_Title_Con").first().click() }, t }(WebPage);
			n.FAQ = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.settingInitialValues = !1, r.itemsPerPage = 12, r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { var n = this;
				n.updateR6PageHash();
				n.setInitialControlValuesViaHash();
				DropDown.loadSelect2($("#ddlFavouritesSort"), { closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", width: "300px" });
				n.loadData(!0) }, t.prototype.loadData = function(n) { var t, i, r;
				n === void 0 && (n = !1);
				t = this;
				ApplicationState.UserIsSignedIn ? (i = new GetAccountFromBOLCallbackArgs, i.page = t, i.functionCalls = function(t) { var i = t.loadIdsShowAnimation(n);
					t.loadFavouritesContent(i) }, Gigya.GetAccountFromBOL(ApplicationConfig.GigyaSyncRealTime, !1, i)) : (r = t.loadIdsShowAnimation(n), (Cookie.Favourites.get("") != "" || Utilities.getParamValueByName("propertyIds", URLParamType.Query) != "") && t.loadFavouritesContent(r)) }, t.prototype.loadIdsShowAnimation = function(n) { var i = this,
				t = i.getFavouriteIdsCSV(); return t != "" && n && showLoadingAnimation($("#favouritesCon")), t }, t.prototype.updateR6PageHash = function() { URLHash.get("Page", "") != "" && (URLHash.set("page", URLHash.get("Page", ""), !1), URLHash.remove("Page", !0)) }, t.prototype.setInitialControlValuesViaHash = function() { var n = this;
				n.settingInitialValues = !0;
				Binding.setControlValsFromHashResetOthers($("#favouritesHeader,#favouritesFooter,#favouritesCriteriaCon"));
				n.settingInitialValues = !1 }, t.prototype.registerEventHandlers = function() { var t = this,
				n = this;
				$("#favEnableNotificationsBtn").click(function() { Gigya.enableFavouriteAndCompareNotifications();
					$(this).addClass("hide");
					$("#favEnableNotificationSettingsBtn").removeClass("hide") });
				$("#ddlFavouritesSort").change(function() { n.settingInitialValues || (URLHash.set("page", "1"), URLHash.set("sort", $("#ddlFavouritesSort").val()), n.loadData(!1)) });
				$(document).keydown(function(n) { return n.keyCode == 37 ? ($("#FavouritesPagination_top .lnkPreviousResultsPage").click(), !1) : n.keyCode == 39 ? ($("#FavouritesPagination_top .lnkNextResultsPage").click(), !1) : n.keyCode == 38 ? (window.scrollBy(0, -100), !1) : n.keyCode == 40 ? (window.scrollBy(0, 100), !1) : void 0 });
				GetControl("FavouritesPagination_top") != null && GetControl("FavouritesPagination_top").pageChange.Listen(function(i) { t.settingInitialValues == !1 && (URLHash.set("page", i.detail.args.page), n.updateHashAndSearch(Number(i.detail.args.page))) });
				GetControl("FavouritesPagination_bottom") != null && GetControl("FavouritesPagination_bottom").pageChange.Listen(function(i) { t.settingInitialValues == !1 && (URLHash.set("page", i.detail.args.page), n.updateHashAndSearch(Number(i.detail.args.page))) });
				Events.Listen(Gigya.consumerLoginEvent, function() { n.loadFavouritesContent(n.getFavouriteIdsCSV()) }) }, t.prototype.updateHashAndSearch = function(n) { if (Binding.setControlValsFromHashResetOthers($("#favouritesHeader,#favouritesFooter,#favouritesCriteriaCon")), !this.settingInitialValues) { var t = this.getPageResults(n, this.itemsPerPage, this.allFavouritesData);
				this.showFavourites(t, this) } }, t.prototype.loadFavouritesContent = function(n) { if (!this.settingInitialValues && n != "") { var t = WebControl.getValuesFromControlsAsObject(["favouritesCriteriaCon"], !1);
				APIProxy.propertySearch({ FavouriteListingIds: n, ListingIds: n, RecordsPerPage: ApplicationState.UserIsSignedIn ? ConsumerProfile.UserAccountSettings.FavouriteLimit.toString() : ApplicationConfig.FavouriteLimit.toString(), Sort: t.sort, IncludeTombstones: "1", IncludePins: "0" }, this.initialFavouritesDataHandler, this, !1);
				this.currentCriteria = t } }, t.prototype.initialFavouritesDataHandler = function(n, t) { Favourite.removeExpiredFavourites(n, !0);
				t.allFavouritesData = n; var i = t.getPageResults(Number(URLHash.get("page", "1")), t.itemsPerPage, n);
				t.showFavourites(i, t) }, t.prototype.getPageResults = function(n, t, i) { var r = new APIReturnValues.ListingSearchResults,
				u, f; return r.ErrorCode = new PublicContracts.ErrorCode(i.ErrorCode), u = (n - 1) * t, f = n * t, r.Results = i.Results.slice(u, f), r.Paging = i.Paging, r.Paging.RecordsPerPage = t, r.Paging.CurrentPage = n, r.Paging.TotalPages = Math.ceil(r.Paging.TotalRecords / t), r }, t.prototype.showFavourites = function(n, t) { var i, r; if (n.ErrorCode.Id == PublicContracts.ErrorCodeId.OK) { if (n.Paging.CurrentPage > n.Paging.TotalPages) { URLHash.set("page", n.Paging.TotalPages.toString());
				t.updateHashAndSearch(n.Paging.TotalPages); return } for ($("#FavouritesPagination_bottom, #FavouritesPagination_top").toggle(n.Paging.TotalPages > 1), $("#favouritesResultsCount").text(n.Paging.TotalRecords.toLocaleString(ApplicationState.LanguageAttribute)), $("#NoFavouritesCon").toggle(n.Paging.TotalRecords <= 0), $("#favouritesHeader").toggle(n.Paging.TotalRecords > 0), i = [], r = 0; r < n.Results.length; r++) i.push(new ListingCardModel(n.Results[r]));
				GetControl("FavouritesPagination_top").refreshUI(n.Paging);
				GetControl("FavouritesPagination_bottom").refreshUI(n.Paging);
				TemplateFetcher.fetchListingCard(function(n) { for (var r = "", t = 0; t < i.length; t++) r += '<div class="cardCon">' + TemplateBinding.fillTemplateValues($(n.ControlHTML), i[t]) + "<\/div>";
					$("#favouritesCon").html(r);
					ConsumerProfile.Notifications.refreshNotificationCon($("#favouritesCon .cardCon"));
					updateLoadedContent($("#favouritesCon"));
					setUniformHeightsForLargeListingCards("#favouritesCon") }) } }, t.prototype.getFavouriteIdsCSV = function() { var t = "",
				r = Utilities.getParamValueByName("propertyIds", URLParamType.Query),
				i, n, u; if (r != "") t = r;
			else if (ApplicationState.UserIsSignedIn)
				for (i = LocalAccountStorage.FavouritesCP.getObjects(Favourite.fromObject), n = 0; n < i.length; n++) t += i[n].id + ",";
			else
				for (i = Cookie.Favourites.getArray(), n = 0; n < i.length; n++) u = Favourite.fromString(i[n]), t += u.id + ","; return t.charAt(t.length - 1) == "," && (t = t.slice(0, -1)), t }, t }(WebPage);
			n.Favourites = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() {}, t.prototype.render = function() {}, t }(WebPage);
			n.Global = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.detachedOptions = {}, r.init(), r } return __extends(t, n), t.prototype.loadModel = function(n) { n.Consumer != null && (this.Interested = n.Consumer.Interested, this.Interested_Com = n.Consumer.Interested_Com, this.user = n.Consumer.user) }, t.prototype.render = function() { var t = this,
				r, i, n, u;
				t.Consumer = new ConsumerProfile.Consumer(t);
				t.updateFilterOrdering(t.CurrentSearchMode());
				(URLHash.containsKey("commercial") || URLHash.containsKey("commerciales")) && $("#homeCommercialTab").click();
				$("#homeRecentlyViewedListingsCon").length > 0 && (r = RecentlyViewedListing.getAllIds(), i = new ListingCardCarouselArgs, i.criteria.RecordsPerPage = "12", r != null && (i.criteria.ListingIds = r.join(",")), n = new ControlFetcherArgs("homeRecentlyViewedListingsOuterCon", "homeRecentlyViewedListingsCon"), n.showLoadingSpinner = !1, n.showLoadingAnimation = !1, n.cacheResult = !1, n.postCallHandler = function() { $("#homeRecentlyViewedListingsCon").removeClass("hidden");
					$("#recentlyViewedLoading").hide() }, ControlFetcher.fetchListingCardsCarousel(n, i));
				$("#KeywordToolTip").qtip({ content: Translation.get("KeywordTip") });
				u = Utilities.getParamValueByName("pwrt", URLParamType.Query);
				u != "" && u != null && Gigya.showScreen(gigyaScreen.ChangePassword, null) }, t.prototype.refreshNumberOfNonDefaultSecondaryFilters = function() { var n = this.getNumberOfNonDefaultSecondaryFilters();
				$("#homeMoreFiltersNum").text(n.toString());
				$("#homeMoreFiltersNum").toggle(n != 0) }, t.prototype.getNumberOfNonDefaultSecondaryFilters = function() { for (var f = 0, e = [], r = $(".homeFilterCon.hasValue [data-hashkey]").not("#ddlPropertyTypeTopRes, #ddlPropertyTypeTopCom"), i, t, u, o, n = 0; n < r.length; n++) $(r[n]).siblings(".select2").is(":visible") && (t = $(r[n]).attr("data-hashkey"), e.push(t)); for (i = $(".homeMoreFilterCon.active [data-hashkey]").not("#ddlPropertyTypeRes, #ddlPropertyTypeCom"), n = 0; n < i.length; n++) t = $(i[n]).attr("data-hashkey"), e.indexOf(t) == -1 && (u = WebControl.getControlValue(i[n], !1), o = $(i[n]).attr("data-default"), u != null && u != o && f++); return f }, t.prototype.registerEventHandlers = function() { var n = this;
				n.loadDropDowns();
				ApplicationConfig.EnableAutoComplete && new AutoComplete("homeSearchTxt", ApplicationConfig.LocationAutocompleteCacheKey, function() {}, ApplicationConfig.AutoCompleteResultsSize, null, "1003");
				$(document).keyup(function(t) { t.keyCode == 27 && n.toggleMoreFilters(!1) });
				Events.Listen(Gigya.consumerLoginEvent, function(t) { var i = t.detail;
					ApplicationState.UserIsSignedIn && (n.Consumer = i.consumer, updateLoadedContent($("#homeRecentlyViewedListingsCon"))) });
				initListedSince($("#dteListedSince"));
				$(".homeFilterCon .select2-container").click(function(n) { if ($(n.target).hasClass("homeFilterCon") || $(n.target).hasClass("select2-container") || $(n.target).is("label")) { var t = $(this).siblings("select,input"),
					i = $(this).hasClass("select2-container--open");
					i ? t.select2("close") : t.select2("open") } });
				$("#ddlPropertyTypeRes, #ddlPropertyTypeCom, #ddlTransactionTypeCom, #ddlTransactionTypeRes").change(function() { n.updateFilterOrdering(n.CurrentSearchMode(), !1) });
				$("#homeMoreFiltersResetBtn").click(function() { n.resetFilters() });
				$("#homeSearchBtn").click(function() { FormValidation.validateForm($("#homeSearchInnerCon")) ? n.search() : addAnimationClass($("#homeMoreFiltersSearchBtn"), "btnFail") });
				$("#homeMoreFiltersSearchBtn").click(function() {
					FormValidation.validateForm($("#homeSearchInnerCon")) ?
						n.search() :
						ddAnimationClass($("#homeMoreFiltersSearchBtn"), "btnFail")
				});
				$("#homeSearchTxt").keyup(function(n) { if (n.keyCode == 13) return $("#homeSearchBtn").click(), !1 });
				$("#homeSearchMoreBtn").click(function(t) { n.toggleMoreFilters();
					t.stopPropagation() });
				$("#ddlBedsTop").val("").trigger("change");
				$("#ddlBathsTop").val("").trigger("change");
				$("#ddlMinPriceTop").val("").trigger("change");
				$("#ddlMaxPriceTop").val("").trigger("change");
				$("#ddlMaxRentTop").val("").trigger("change");
				$("#ddlMinRentTop").val("").trigger("change");
				$("#homeResidentialTab").click(function() { var t = $("#homeResidentialTab").hasClass("active"); return n.updateSearchMode(!0), n.updateFilterOrdering(n.CurrentSearchMode()), n.refreshNumberOfNonDefaultSecondaryFilters(), t || $(this).attr("id") != "homeResidentialTab" || (n.setMode(n.CurrentSearchMode()), n.setBgHomePageImageUrl()), !1 });
				$("#homeCommercialTab").click(function() { var t = $("#homeCommercialTab").hasClass("active"); return n.updateSearchMode(!1), n.updateFilterOrdering(n.CurrentSearchMode()), n.refreshNumberOfNonDefaultSecondaryFilters(), t || $(this).attr("id") != "homeCommercialTab" || (n.setMode(n.CurrentSearchMode()), n.setBgHomePageImageUrl()), !1 });
				$("#ddlTransactionTypeCom").change(function() { var n = $("#ddlTransactionTypeCom").val() == "2";
					$("#MaxRent").toggle(!n);
					$("#MinRent").toggle(!n);
					$("#MaxPrice").toggle(n);
					$("#MinPrice").toggle(n) });
				$("#ddlTransactionTypeRes").change(function() { var n = $("#ddlTransactionTypeRes").val() == "2";
					$("#MaxRent").toggle(!n);
					$("#MinRent").toggle(!n);
					$("#MaxPrice").toggle(n);
					$("#MinPrice").toggle(n) });
				$("#homeSearchInputCon select").on("change select2:select", function() { $(this).parent(".homeFilterCon").toggleClass("hasValue", ($(this).val() || "") != "") });
				$("#ddlMinPriceTop").on("change", function() { minValueChanged($("#ddlMaxPriceTop"), $("#ddlMinPriceTop"), n.detachedOptions) });
				$("#ddlMaxPriceTop").on("change", function() { maxValueChanged($("#ddlMinPriceTop"), $("#ddlMaxPriceTop"), n.detachedOptions) });
				$("#ddlMinRentTop").on("select2:select change", function() { minValueChanged($("#ddlMaxRentTop"), $("#ddlMinRentTop"), n.detachedOptions) });
				$("#ddlMaxRentTop").on("change", function() { maxValueChanged($("#ddlMinRentTop"), $("#ddlMaxRentTop"), n.detachedOptions) });
				$("#ddlMinPrice").on("select2:select change", function() { minValueChanged($("#ddlMaxPrice"), $("#ddlMinPrice"), n.detachedOptions) });
				$("#ddlMaxPrice").on("select2:select change", function() { maxValueChanged($("#ddlMinPrice"), $("#ddlMaxPrice"), n.detachedOptions) });
				$("#ddlMinRent").on("select2:select change", function() { minValueChanged($("#ddlMaxRent"), $("#ddlMinRent"), n.detachedOptions) });
				$("#ddlMaxRent").on("select2:select change", function() { maxValueChanged($("#ddlMinRent"), $("#ddlMaxRent"), n.detachedOptions) });
				DropDown.linkDropDownVals($("#ddlBedsTop"), $("#ddlBeds"));
				DropDown.linkDropDownVals($("#ddlBathsTop"), $("#ddlBaths"));
				DropDown.linkDropDownVals($("#ddlMinPriceTop"), $("#ddlMinPrice"));
				DropDown.linkDropDownVals($("#ddlMaxPriceTop"), $("#ddlMaxPrice"));
				DropDown.linkDropDownVals($("#ddlMinRentTop"), $("#ddlMinRent"));
				DropDown.linkDropDownVals($("#ddlMaxRentTop"), $("#ddlMaxRent"));
				DropDown.linkDropDownVals($("#ddlNumberOfUnitsTop"), $("#ddlNumberOfUnits"));
				DropDown.linkDropDownVals($("#ddlBuildingSpaceTop"), $("#ddlBuildingSpace"));
				DropDown.linkDropDownVals($("#ddlFarmTypeTop"), $("#ddlFarmType"));
				DropDown.linkDropDownVals($("#ddlParkingTypeTop"), $("#ddlParkingType"));
				DropDown.linkDropDownVals($("#ddlLandSizeTop"), $("#ddlLandSize"));
				DropDown.linkDropDownVals($("#ddlZoningTypeTop"), $("#ddlZoningType"));
				DropDown.linkDropDownVals($("#ddlTransactionTypeTopRes"), $("#ddlTransactionTypeRes"));
				DropDown.linkDropDownVals($("#ddlTransactionTypeTopCom"), $("#ddlTransactionTypeCom"));
				$(document.body).click(function(t) { var u = $("#homeSearchInnerCon").hasClass("opaque"),
					i, r;
					u && (i = $(t.target), r = i.attr("data-handler") == "today" || i.hasClass("ui-datepicker") || i.hasClass("ui-datepicker-current") || i.parents(".ui-datepicker").length > 0 || i.parents(".ui-datepicker-header").length > 0 || t.target.id == "homeSearchInnerCon" || i.parents("#homeSearchInnerCon").length > 0 || i.hasClass("select2-selection__choice") || i.parents(".select2-container").length > 0 || i.parents("#AutoCompleteCon-homeSearchTxt").length > 0, r || n.toggleMoreFilters(!1)) });
				$("#ddlBuildingType").change(function() { if ($("#buildingType").is(":visible")) { n.detachedOptions != null && n.detachedOptions.ddlBuildingAttachmentStyle != null && $("#ddlBuildingAttachmentStyle").append(n.detachedOptions.ddlBuildingAttachmentStyle).trigger("change");
					$("#buildingAttachmentStyle").show(); var t = $("#ddlBuildingType").val();
					t == "" || t != "1" && t != "16" ? $("#buildingAttachmentStyle").hide() : (n.detachedOptions.ddlBuildingAttachmentStyle = $('#ddlBuildingAttachmentStyle option[parentid!="' + t + '"]').detach(), $("#ddlBuildingAttachmentStyle").siblings("span.select2").find(".select2-selection").addClass("homeFilter"), $("#buildingAttachmentStyle").show()) } });
				$(".homeFilterCon select").on("change", function() { $(this).attr("multiple") == null && $(this).val() != null && ($(this).val().trim() == "0" || $(this).val().trim() == "" || $(this).val().trim() == "0-0") && $(this).val("").trigger("change") }) }, t.prototype.setBgHomePageImageUrl = function() { var n = 0;
				ApplicationState.CurrentMode == ApplicationModes.Commercial ? (n = Math.floor(Math.random() * ApplicationConfig.HomePageHeaderCommImages.length), $("#homeHeaderCon").css("background-image", "url(" + ApplicationConfig.HomePageHeaderCommImages[n] + ")")) : (n = Math.floor(Math.random() * ApplicationConfig.HomePageHeaderResImages.length), $("#homeHeaderCon").css("background-image", "url(" + ApplicationConfig.HomePageHeaderResImages[n] + ")")) }, t.prototype.loadDropDowns = function() { DropDown.loadSelect2($("#ddlPropertyTypeCom, #ddlPropertyTypeRes"), { closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon" });
				$("#ddlPropertyType").val("").trigger("change");
				$("#ddlPropertyTypeRes").val("1").trigger("change");
				DropDown.loadSelect2($("#ddlFarmTypeTop, #ddlParkingTypeTop, #ddlZoningTypeTop"), { allowClear: !1, placeholderText: Translation.get("AnyDropDownTerm"), closeOnSelect: !1, containerCssClass: "homeTopFilter", dropdownCssClass: "homeTopFilterItemsCon", stopOpenOnClear: !0, multiSelectWithoutTags: !0 });
				DropDown.loadSelect2($("#ddlBedsTop, #ddlBathsTop, #ddlNumberOfUnitsTop, #ddlBuildingSpaceTop, #ddlLandSizeTop, #ddlTransactionTypeTopCom, #ddlTransactionTypeTopRes"), { allowClear: !1, closeOnSelect: !0, containerCssClass: "homeTopFilter", dropdownCssClass: "homeTopFilterItemsCon", stopOpenOnClear: !0, clearOnDefaultValue: !0 });
				DropDown.loadSelect2($("#ddlMinPriceTop, #ddlMaxPriceTop"), { allowClear: !1, containerCssClass: "homeTopFilter", dropdownCssClass: "homeTopFilterItemsCon", tags: !0, maximumInputLength: 8, clearOnDefaultValue: !0, createTag: function(n) { return n.term.match(/[^\d]/) ? null : { id: n.term, text: Number(n.term).toLocaleString(ApplicationState.LanguageAttribute) } } });
				DropDown.loadSelect2($("#ddlMinRentTop, #ddlMaxRentTop"), { allowClear: !1, containerCssClass: "homeTopFilter", dropdownCssClass: "homeTopFilterItemsCon", tags: !0, clearOnDefaultValue: !0, maximumInputLength: 5, createTag: function(n) { return n.term.match(/[^\d]/) ? null : { id: n.term, text: Number(n.term).toLocaleString(ApplicationState.LanguageAttribute) } } });
				DropDown.loadSelect2($("#ddlMaxPrice, #ddlMinPrice"), { allowClear: !1, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", tags: !0, maximumInputLength: 8, createTag: function(n) { return n.term.match(/[^\d]/) ? null : { id: n.term, text: Number(n.term).toLocaleString(ApplicationState.LanguageAttribute) } } });
				DropDown.loadSelect2($("#ddlMinRent, #ddlMaxRent"), { allowClear: !1, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", tags: !0, maximumInputLength: 5, createTag: function(n) { return n.term.match(/[^\d]/) ? null : { id: n.term, text: Number(n.term).toLocaleString(ApplicationState.LanguageAttribute) } } });
				DropDown.loadSelect2($("#ddlFarmType, #ddlParkingType, #ddlZoningType"), { allowClear: !0, closeOnSelect: !0, dropdownCssClass: "homeFilterItemsCon", containerCssClass: "homeFilter", stopOpenOnClear: !0, multiSelectWithoutTags: !0, tags: !1, placeholderText: "0 " + Translation.get("ItemsSelectedSingular"), width: "100%" });
				DropDown.loadSelect2($("#homeSearchMoreFiltersInnerCon select").not(".select2-hidden-accessible"), { tags: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", allowSearch: !1 });
				DropDown.loadSelect2($("#txtKeywords"), { tags: !0, allowClear: !0, containerCssClass: "homeFilter keywordsFilter", dropdownCssClass: "homeFilterItemsCon", maximumSelectionLength: 5, language: { maximumSelected: function() { return Translation.get("KeywordTooMany") }, noResults: function() { return "" } }, maximumInputLength: 30, tokenSeparators: [","], placeholderText: Translation.get("KeywordsPlaceholder") });
				DropDown.defaultCustomAdapterDefinition();
				DropDown.loadSelect2($("#ddlBuildingAttachmentStyle"), { width: "100%", placeholderText: "0 " + Translation.get("ItemsSelectedSingular"), customSelectionAdapter: $.fn.select2.amd.require("CustomSelectionAdapter"), customTemplateSelection: function() { var n = $("#ddlBuildingAttachmentStyle").find(":selected").length,
						t = Translation.get("ItemsSelectedSingular"); return n > 1 && (t = Translation.get("ItemsSelected")), n + " " + t }, customDropDownAdapter: $.fn.select2.amd.require("CustomDropdownAdapter") }) }, t.prototype.updateMainSearchFilterPlaceholders = function() { $("#homeSearchInputCon select").each(function(n, t) { $(t).parent(".homeFilterCon").toggleClass("hasValue", ($(t).val() || "") != ""); var i = $(t).val();
				$(t).attr("multiple") == null && i != null && (i.trim() == "0" || i.trim() == "" || i.trim() == "0-0") && $(t).val("").trigger("change") }) }, t.prototype.setMode = function(n) { n == ApplicationModes.Residential ? setApplicationMode(ApplicationModes.Residential) : setApplicationMode(ApplicationModes.Commercial) },
				t.prototype.toggleMoreFilters = function(n) {
					var i = this, t = n;

					t == null && (t = $("#homeSearchMoreCon").hasClass("hide"));
					i.refreshNumberOfNonDefaultSecondaryFilters();
					i.updateMainSearchFilterPlaceholders();
					lightBoxPageElements([$("#homeSearchInnerCon"), $("#homeSearchMoreCon"), $(".homeSearchTab.active")], t);
					$("#homeSearchInnerCon, #homeSearchTabCon").toggleClass("opaque", t);
					$("#homeSearchMoreCon").toggleClass("hide", !t);
					$("#homePrimaryFilterCon, #homeSearchBtn").toggleClass("hide", t);
					$("#homeSearchMoreBtnCon").toggle(t);
					$("#homeSearchMoreBtn").toggleClass("onWhite", t);
					t ? (i.updateFilterOrdering(i.CurrentSearchMode(), !1), $("#homeMoreFltersBtnText").text(Translation.get("Close")), $("#homeFiltersIcon").attr("src", "/wp-content/plugins/adk_feed/assets/images/x-white.svg"), shouldScrollElementIntoView($("#homeSearchMoreCon"), !1) && ScrollToElement($("#homeSearchCon"), -50, !0)) : ($("#homeMoreFltersBtnText").text(Translation.get("Filters")), $("#homeFiltersIcon").attr("src", "/wp-content/plugins/adk_feed/assets/images/filter.svg")) }, t.prototype.search = function() {
				var n = this,
					t = WebControl.getValuesFromControlsAsObject(["homeSearchMoreCon"], !1, function(n) { return n.parents(".homeMoreFilterCon").hasClass("active") || n.hasClass("hiddenSearchFilter") }),
					i = function() { AutoComplete.StoreEntry(ApplicationConfig.LocationAutocompleteCacheKey, { Text: $("#homeSearchTxt").val().trim() }, ApplicationConfig.AutoCompleteResultsSize) };
				Core.PerformListingSearch($("#homeSearchTxt"), n.position, t, !0, i)
			},
				t.prototype.updateFilter = function(n, t) {
					n.show().appendTo(t).toggleClass("active", !0)
				}, t.prototype.updateSearchMode = function(n) { n ? $("#txtPropertyTypeGroupID").val(1) : $("#txtPropertyTypeGroupID").val(2);
				$("#homeResidentialTab").toggleClass("active", n);
				$("#homeCommercialTab").toggleClass("active", !n);
				$("#propertyTypeRes").toggle(n);
				$("#propertyTypeCom").toggle(!n);
				this.updateMainSearchFilterPlaceholders() }, t.prototype.CurrentSearchMode = function() { var n; return $("#homeResidentialTab.active").is(":visible") ? n = ApplicationModes.Residential : $("#homeCommercialTab.active").is(":visible") && (n = ApplicationModes.Commercial), n }, t.prototype.resetFilters = function() { var n = this;
				n.reattachAllDetachedValuesFromDropDowns();
				resetInputControls($("#homeSearchMoreFiltersInnerCon"));
				n.updateFilterOrdering(n.CurrentSearchMode());
				n.refreshNumberOfNonDefaultSecondaryFilters() }, t.prototype.reattachAllDetachedValuesFromDropDowns = function() { var n = this,
				t; if (n.detachedOptions != null)
				for (t in n.detachedOptions) n.detachedOptions.hasOwnProperty(t) && $("#" + t).append(n.detachedOptions[t]) },
				t.prototype.updateFilterOrdering = function(type, extraAttr) {
					var channel;
					var transactionType;
					var propertyType;
					var moreFiltersWrapper;
					console.log("update");
					if (extraAttr === void 0) {
						/** @type {boolean} */
						extraAttr = true;
					}

					channel = this;

					if (ApplicationState.UserIsSignedIn && extraAttr) {
						Gigya.loadConsumerSearchPref(channel.CurrentSearchMode(), channel.Consumer);
						channel.refreshNumberOfNonDefaultSecondaryFilters();
					}

					transactionType = type == ApplicationModes.Residential ? $("#ddlTransactionTypeRes").val() : $("#ddlTransactionTypeCom").val();
					propertyType = type == ApplicationModes.Residential ? $("#ddlPropertyTypeRes").val() : $("#ddlPropertyTypeCom").val();
					
					$("#ddlPropertyTypeRes").next(".select2-container").toggle(type == ApplicationModes.Residential);
					$("#ddlPropertyTypeCom").next(".select2-container").toggle(type == ApplicationModes.Commercial);
					$(".homeMoreFilterCon").each(function() {
						$(this).hide();
						$(this).toggleClass("active", false);
					});

					$(".homeFilterCon").hide();
					moreFiltersWrapper = $("#homeSearchMoreFiltersInnerCon");
					this.updateFilter($("#groupId"), moreFiltersWrapper);

					if (type == ApplicationModes.Residential) {
						this.updateFilter($("#propertyTypeRes"), moreFiltersWrapper);

					} else {
						this.updateFilter($("#propertyTypeCom"), moreFiltersWrapper);
					}

					if (propertyType == SearchType.Residential) {
						this.updateFilter($("#transactionTypeRes"), moreFiltersWrapper);

						if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent ) {
							$("#MinPriceTop, #MaxPriceTop").show();
							this.updateFilter($("#priceMin"), moreFiltersWrapper);
							this.updateFilter($("#priceMax"), moreFiltersWrapper);

						} else {
							$("#MinRentTop, #MaxRentTop").show();
							this.updateFilter($("#rentMin"), moreFiltersWrapper);
							this.updateFilter($("#rentMax"), moreFiltersWrapper);
						}

						$("#BedsTop, #BathsTop").show();
						this.updateFilter($("#beds"), moreFiltersWrapper);
						this.updateFilter($("#baths"), moreFiltersWrapper);
						this.updateFilter($("#landSize"), moreFiltersWrapper);
						this.updateFilter($("#listedSince"), moreFiltersWrapper);
						this.updateFilter($("#buildingType"), moreFiltersWrapper);
						this.updateFilter($("#buildingAttachmentStyle"), moreFiltersWrapper);
						this.updateFilter($("#openHouse"), moreFiltersWrapper);
						this.updateFilter($("#keywords"), moreFiltersWrapper);
					} else {
						if (propertyType == SearchType.Recreational) {
							this.updateFilter($("#transactionTypeRes"), moreFiltersWrapper);
							if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
								$("#MinPriceTop, #MaxPriceTop").show();
								this.updateFilter($("#priceMin"), moreFiltersWrapper);
								this.updateFilter($("#priceMax"), moreFiltersWrapper);
							} else {
								if (transactionType == TransactionType.Rent || transactionType == TransactionType.Lease) {
									$("#MinRentTop, #MaxRentTop").show();
									this.updateFilter($("#rentMin"), moreFiltersWrapper);
									this.updateFilter($("#rentMax"), moreFiltersWrapper);
								}
							}
							$("#BedsTop, #BathsTop").show();
							this.updateFilter($("#beds"), moreFiltersWrapper);
							this.updateFilter($("#baths"), moreFiltersWrapper);
							this.updateFilter($("#landSize"), moreFiltersWrapper);
							this.updateFilter($("#listedSince"), moreFiltersWrapper);
							this.updateFilter($("#buildingType"), moreFiltersWrapper);
							this.updateFilter($("#buildingAttachmentStyle"), moreFiltersWrapper);
							this.updateFilter($("#openHouse"), moreFiltersWrapper);
							this.updateFilter($("#keywords"), moreFiltersWrapper);
						} else {
							if (propertyType == SearchType.Condo) {
								this.updateFilter($("#transactionTypeRes"), moreFiltersWrapper);
								if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
									$("#MinPriceTop, #MaxPriceTop").show();
									this.updateFilter($("#priceMin"), moreFiltersWrapper);
									this.updateFilter($("#priceMax"), moreFiltersWrapper);
								} else {
									if (transactionType == TransactionType.Rent || transactionType == TransactionType.Lease) {
										$("#MinRentTop, #MaxRentTop").show();
										this.updateFilter($("#rentMin"), moreFiltersWrapper);
										this.updateFilter($("#rentMax"), moreFiltersWrapper);
									}
								}
								$("#BedsTop, #BathsTop").show();
								this.updateFilter($("#beds"), moreFiltersWrapper);
								this.updateFilter($("#baths"), moreFiltersWrapper);
								this.updateFilter($("#listedSince"), moreFiltersWrapper);
								this.updateFilter($("#buildingType"), moreFiltersWrapper);
								this.updateFilter($("#buildingAttachmentStyle"), moreFiltersWrapper);
								this.updateFilter($("#openHouse"), moreFiltersWrapper);
								this.updateFilter($("#keywords"), moreFiltersWrapper);
							} else {
								if (propertyType == SearchType.Multifamily && type == ApplicationModes.Residential) {
									this.updateFilter($("#transactionTypeRes"), moreFiltersWrapper);
									if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
										$("#MinPriceTop, #MaxPriceTop, #BuildingSpaceTop").show();
										this.updateFilter($("#priceMin"), moreFiltersWrapper);
										this.updateFilter($("#priceMax"), moreFiltersWrapper);
									} else {
										if (transactionType == TransactionType.Rent || transactionType == TransactionType.Lease) {
											$("#MinRentTop, #MaxRentTop").show();
											this.updateFilter($("#rentMin"), moreFiltersWrapper);
											this.updateFilter($("#rentMax"), moreFiltersWrapper);
										}
									}
									$("#NumberOfUnitsTop").show();
									this.updateFilter($("#numberOfUnits"), moreFiltersWrapper);
									if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
										this.updateFilter($("#buildingSpace"), moreFiltersWrapper);
									}
									this.updateFilter($("#listedSince"), moreFiltersWrapper);
									this.updateFilter($("#openHouse"), moreFiltersWrapper);
									this.updateFilter($("#keywords"), moreFiltersWrapper);
								} else {
									if (propertyType == SearchType.Agricultural && type == ApplicationModes.Residential) {
										this.updateFilter($("#transactionTypeRes"), moreFiltersWrapper);
										if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
											$("#MinPriceTop, #MaxPriceTop").show();
											this.updateFilter($("#priceMin"), moreFiltersWrapper);
											this.updateFilter($("#priceMax"), moreFiltersWrapper);
										} else {
											if (transactionType == TransactionType.Rent || transactionType == TransactionType.Lease) {
												$("#MinRentTop, #MaxRentTop").show();
												this.updateFilter($("#rentMin"), moreFiltersWrapper);
												this.updateFilter($("#rentMax"), moreFiltersWrapper);
											}
										}
										$("#FarmTypeTop").show();
										this.updateFilter($("#farmType"), moreFiltersWrapper);
										this.updateFilter($("#landSize"), moreFiltersWrapper);
										this.updateFilter($("#beds"), moreFiltersWrapper);
										this.updateFilter($("#baths"), moreFiltersWrapper);
										this.updateFilter($("#buildingType"), moreFiltersWrapper);
										this.updateFilter($("#buildingAttachmentStyle"), moreFiltersWrapper);
										this.updateFilter($("#listedSince"), moreFiltersWrapper);
										this.updateFilter($("#openHouse"), moreFiltersWrapper);
										this.updateFilter($("#keywords"), moreFiltersWrapper);
									} else {
										if (propertyType == SearchType.Parking) {
											this.updateFilter($("#transactionTypeRes"), moreFiltersWrapper);
											if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
												$("#MinPriceTop, #MaxPriceTop").show();
												this.updateFilter($("#priceMin"), moreFiltersWrapper);
												this.updateFilter($("#priceMax"), moreFiltersWrapper);
											} else {
												if (transactionType == TransactionType.Rent || transactionType == TransactionType.Lease) {
													$("#MinRentTop, #MaxRentTop").show();
													this.updateFilter($("#rentMin"), moreFiltersWrapper);
													this.updateFilter($("#rentMax"), moreFiltersWrapper);
												}
											}
											$("#ParkingTypeTop").show();
											this.updateFilter($("#parkingType"), moreFiltersWrapper);
											this.updateFilter($("#listedSince"), moreFiltersWrapper);
											this.updateFilter($("#keywords"), moreFiltersWrapper);
										} else {
											if (propertyType == SearchType.All && type == ApplicationModes.Residential) {
												this.updateFilter($("#transactionTypeRes"), moreFiltersWrapper);
												if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
													$("#MinPriceTop, #MaxPriceTop").show();
													this.updateFilter($("#priceMin"), moreFiltersWrapper);
													this.updateFilter($("#priceMax"), moreFiltersWrapper);
												} else {
													if (transactionType == TransactionType.Rent || transactionType == TransactionType.Lease) {
														$("#MinRentTop, #MaxRentTop").show();
														this.updateFilter($("#rentMin"), moreFiltersWrapper);
														this.updateFilter($("#rentMax"), moreFiltersWrapper);
													}
												}
												$("#TransactionTypeTopRes").show();
												this.updateFilter($("#listedSince"), moreFiltersWrapper);
												this.updateFilter($("#openHouse"), moreFiltersWrapper);
												this.updateFilter($("#keywords"), moreFiltersWrapper);
											} else {
												if (propertyType == SearchType.Land && type == ApplicationModes.Residential) {
													this.updateFilter($("#transactionTypeRes"), moreFiltersWrapper);
													$("#LandSizeTop").show();
													if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
														$("#MinPriceTop, #MaxPriceTop").show();
														this.updateFilter($("#priceMin"), moreFiltersWrapper);
														this.updateFilter($("#priceMax"), moreFiltersWrapper);
													} else {
														if (transactionType == TransactionType.Rent || transactionType == TransactionType.Lease) {
															$("#MinRentTop, #MaxRentTop").show();
															this.updateFilter($("#rentMin"), moreFiltersWrapper);
															this.updateFilter($("#rentMax"), moreFiltersWrapper);
														}
													}
													$("#ZoningTypeTop").show();
													this.updateFilter($("#landSize"), moreFiltersWrapper);
													this.updateFilter($("#zoningType"), moreFiltersWrapper);
													this.updateFilter($("#listedSince"), moreFiltersWrapper);
													this.updateFilter($("#openHouse"), moreFiltersWrapper);
													this.updateFilter($("#keywords"), moreFiltersWrapper);
												} else {
													if (propertyType == SearchType.Multifamily && type == ApplicationModes.Commercial) {
														this.updateFilter($("#transactionTypeCom"), moreFiltersWrapper);
														if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
															$("#MinPriceTop, #MaxPriceTop,#BuildingSpaceTop").show();
															this.updateFilter($("#priceMin"), moreFiltersWrapper);
															this.updateFilter($("#priceMax"), moreFiltersWrapper);
															this.updateFilter($("#buildingSpace"), moreFiltersWrapper);
														} else {
															transactionType == TransactionType.Rent;
														}
														$("#NumberOfUnitsTop").show();
														this.updateFilter($("#numberOfUnits"), moreFiltersWrapper);
														this.updateFilter($("#listedSince"), moreFiltersWrapper);
														this.updateFilter($("#openHouse"), moreFiltersWrapper);
														this.updateFilter($("#keywords"), moreFiltersWrapper);
													} else {
														if (propertyType == SearchType.All && type == ApplicationModes.Commercial) {
															this.updateFilter($("#transactionTypeCom"), moreFiltersWrapper);
															$("#LandSizeTop").show();
															if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																$("#MinPriceTop, #MaxPriceTop,#BuildingSpaceTop").show();
																this.updateFilter($("#priceMin"), moreFiltersWrapper);
																this.updateFilter($("#priceMax"), moreFiltersWrapper);
															} else {
																transactionType == TransactionType.Rent;
															}
															if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																this.updateFilter($("#buildingSpace"), moreFiltersWrapper);
															}
															this.updateFilter($("#landSize"), moreFiltersWrapper);
															this.updateFilter($("#listedSince"), moreFiltersWrapper);
															this.updateFilter($("#keywords"), moreFiltersWrapper);
														} else {
															if (propertyType == SearchType.Business) {
																this.updateFilter($("#transactionTypeCom"), moreFiltersWrapper);
																if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																	$("#MinPriceTop, #MaxPriceTop,#BuildingSpaceTop").show();
																	this.updateFilter($("#priceMin"), moreFiltersWrapper);
																	this.updateFilter($("#priceMax"), moreFiltersWrapper);
																} else {
																	transactionType == TransactionType.Rent;
																}
																if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																	this.updateFilter($("#buildingSpace"), moreFiltersWrapper);
																}
																this.updateFilter($("#listedSince"), moreFiltersWrapper);
																this.updateFilter($("#keywords"), moreFiltersWrapper);
															} else {
																if (propertyType == SearchType.Office) {
																	this.updateFilter($("#transactionTypeCom"), moreFiltersWrapper);
																	if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																		$("#MinPriceTop, #MaxPriceTop, #BuildingSpaceTop").show();
																		this.updateFilter($("#priceMin"), moreFiltersWrapper);
																		this.updateFilter($("#priceMax"), moreFiltersWrapper);
																	} else {
																		transactionType == TransactionType.Rent;
																	}
																	if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																		this.updateFilter($("#buildingSpace"), moreFiltersWrapper);
																	}
																	this.updateFilter($("#listedSince"), moreFiltersWrapper);
																	this.updateFilter($("#keywords"), moreFiltersWrapper);
																} else {
																	if (propertyType == SearchType.Retail) {
																		this.updateFilter($("#transactionTypeCom"), moreFiltersWrapper);
																		if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																			$("#MinPriceTop, #MaxPriceTop,#BuildingSpaceTop").show();
																			this.updateFilter($("#priceMin"), moreFiltersWrapper);
																			this.updateFilter($("#priceMax"), moreFiltersWrapper);
																		} else {
																			transactionType == TransactionType.Rent;
																		}
																		if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																			this.updateFilter($("#buildingSpace"), moreFiltersWrapper);
																		}
																		this.updateFilter($("#listedSince"), moreFiltersWrapper);
																		this.updateFilter($("#keywords"), moreFiltersWrapper);
																	} else {
																		if (propertyType == SearchType.Land && type == ApplicationModes.Commercial) {
																			this.updateFilter($("#transactionTypeCom"), moreFiltersWrapper);
																			$("#LandSizeTop").show();
																			if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																				$("#MinPriceTop, #MaxPriceTop").show();
																				this.updateFilter($("#priceMin"), moreFiltersWrapper);
																				this.updateFilter($("#priceMax"), moreFiltersWrapper);
																			} else {
																				transactionType == TransactionType.Rent;
																			}
																			$("#ZoningTypeTop").show();
																			this.updateFilter($("#landSize"), moreFiltersWrapper);
																			this.updateFilter($("#zoningType"), moreFiltersWrapper);
																			this.updateFilter($("#listedSince"), moreFiltersWrapper);
																			this.updateFilter($("#keywords"), moreFiltersWrapper);
																		} else {
																			if (propertyType == SearchType.Institutional) {
																				this.updateFilter($("#transactionTypeCom"), moreFiltersWrapper);
																				if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																					$("#MinPriceTop, #MaxPriceTop,#BuildingSpaceTop").show();
																					this.updateFilter($("#priceMin"), moreFiltersWrapper);
																					this.updateFilter($("#priceMax"), moreFiltersWrapper);
																				} else {
																					transactionType == TransactionType.Rent;
																				}
																				if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																					this.updateFilter($("#buildingSpace"), moreFiltersWrapper);
																				}
																				this.updateFilter($("#listedSince"), moreFiltersWrapper);
																				this.updateFilter($("#keywords"), moreFiltersWrapper);
																			} else {
																				if (propertyType == SearchType.Industrial) {
																					this.updateFilter($("#transactionTypeCom"), moreFiltersWrapper);
																					$("#LandSizeTop").show();
																					if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																						$("#MinPriceTop, #MaxPriceTop, #BuildingSpaceTop").show();
																						this.updateFilter($("#priceMin"), moreFiltersWrapper);
																						this.updateFilter($("#priceMax"), moreFiltersWrapper);
																					} else {
																						transactionType == TransactionType.Rent;
																					}
																					if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																						this.updateFilter($("#buildingSpace"), moreFiltersWrapper);
																					}
																					this.updateFilter($("#landSize"), moreFiltersWrapper);
																					this.updateFilter($("#listedSince"), moreFiltersWrapper);
																					this.updateFilter($("#keywords"), moreFiltersWrapper);
																				} else {
																					if (propertyType == SearchType.Agricultural && type == ApplicationModes.Commercial) {
																						this.updateFilter($("#transactionTypeCom"), moreFiltersWrapper);
																						$("#LandSizeTop").show();
																						if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																							$("#MinPriceTop, #MaxPriceTop").show();
																							this.updateFilter($("#priceMin"), moreFiltersWrapper);
																							this.updateFilter($("#priceMax"), moreFiltersWrapper);
																						} else {
																							transactionType == TransactionType.Rent;
																						}
																						$("#FarmTypeTop").show();
																						this.updateFilter($("#farmType"), moreFiltersWrapper);
																						this.updateFilter($("#landSize"), moreFiltersWrapper);
																						this.updateFilter($("#beds"), moreFiltersWrapper);
																						this.updateFilter($("#baths"), moreFiltersWrapper);
																						this.updateFilter($("#buildingType"), moreFiltersWrapper);
																						this.updateFilter($("#buildingAttachmentStyle"), moreFiltersWrapper);
																						this.updateFilter($("#listedSince"), moreFiltersWrapper);
																						this.updateFilter($("#openHouse"), moreFiltersWrapper);
																						this.updateFilter($("#keywords"), moreFiltersWrapper);
																					} else {
																						if (propertyType == SearchType.Hospitality) {
																							this.updateFilter($("#transactionTypeCom"), moreFiltersWrapper);
																							if (transactionType == TransactionType.Sale || transactionType == TransactionType.SaleOrRent) {
																								$("#MinPriceTop, #MaxPriceTop, #BuildingSpaceTop").show();
																								this.updateFilter($("#priceMin"), moreFiltersWrapper);
																								this.updateFilter($("#priceMax"), moreFiltersWrapper);
																								this.updateFilter($("#buildingSpace"), moreFiltersWrapper);
																							} else {
																								transactionType == TransactionType.Rent;
																							}
																							$("#LandSizeTop").show();
																							this.updateFilter($("#landSize"), moreFiltersWrapper);
																							this.updateFilter($("#listedSince"), moreFiltersWrapper);
																							this.updateFilter($("#keywords"), moreFiltersWrapper);
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
					$("#ddlBuildingType").change();
					$("#lblMinRent, #lblMaxRent").toggle(type == ApplicationModes.Residential);
					$("#lblMinLease, #lblMaxLease").toggle(type == ApplicationModes.Commercial);
				}, t }(WebPage);
			n.Index = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.calculatorLoaded = !1, r.localLogicLoaded = !1, r.currentSlideId = 0, r.sliderLoaded = !1, r.beforeSlideTransit = !1, r.mousedownOccured = !1, r.mouseIsDragging = !1, r.currentMouseMoveCord = "", r.isDemographicsLoaded = !1, r.init(), r } return __extends(i, t), i.prototype.loadModel = function(n) { this.Model = n; var t = new MultimediaManager;
				this.multiProvider = t.getHost(this.Model.multimedia.MultiHTTPURL) }, i.prototype.render = function() { var n = this;
				(n.Model.listingId || "") != "" && Analytics.log(n.Model.listingId, "view", n.Model.hasOpenHouse);
				RecentlyViewedListing.save(n.model.listingId);
				n.LoadLogicLogic();
				collapseWithReadMore($("#propertyDetailsOpenHouseContent"), 200);
				Favourite.refreshIcons($("#listingActionIconsCon"));
				Note.refreshIcons($("#listingActionIconsCon"), !0);
				$("#listingPhotoCarousel").smoothDivScroll({ mousewheelScrolling: !0, visibleHotSpotBackgrounds: "always", hotSpotScrollingInterval: 7, hotSpotScrollingStep: 9, hotSpotMouseDownSpeedBooster: 4, touchScrolling: !0 });
				n.setMeasurementUnits();
				n.loadGoogleMaps(ApplicationConfig.GoogleAPIKey);
				n.checkForEmailTrigger();
				n.showIconStripsIfAnyIconsVisible();
				n.showNotifications(n.model.listingId);
				$("#lnkPropertyDetailsHdrIcon_Video").hide();
				Controls.Desktop.TabHighlighter.insert($(".listingDetailsTabsIconCon:visible"), function() { n.updateTabView() }) }, i.prototype.showIconStripsIfAnyIconsVisible = function() { $("#listingDetailsIconStrip img:visible").length > 0 && $("#listingDetailsIconStrip").show() }, i.prototype.checkForEmailTrigger = function() { var n = Utilities.getParamValueByName("EmailRealtor", URLParamType.Query),
				t = Utilities.getParamValueByName("EmailOffice", URLParamType.Query);
				n != "" ? $("#RealtorCard-" + n + " .lnkEmailRealtor").click() : t != "" && $(".OfficeCard-" + t + " .lnkEmailOffice").first().click() }, i.prototype.LoadConsumerData = function(n) { var t = new GetAccountFromBOLCallbackArgs;
				t.page = n;
				t.functionCalls = function() { Favourite.refreshIcons($("#listingActionIconsCon"));
					Note.refreshIcons($("#listingActionIconsCon"), !0) };
				Gigya.GetAccountFromBOL(ApplicationConfig.GigyaSyncRealTime, !1, t) }, i.prototype.registerEventHandlers = function() { var i = this,
				t = this;
				$(window).resize(function() { $("#tableHistoryDetail tbody tr").length > ApplicationConfig.MaxSoldDataDisplay ? ($("#historyDetailSection").show(), $("#historyDetailSection").find("td").each(function(n, t) { breakAllLongWords($(t)) }), collapseTableWithReadMore($("#historyDetailSectioniInner"), $("#tableHistoryDetail"), ApplicationConfig.MaxSoldDataDisplay + 1, "text-align: right;")) : $("#historyDetailSection").show() });
				Events.Listen(Gigya.consumerLoginEvent, function() { ApplicationState.UserIsSignedIn && i.LoadConsumerData(t) });
				$(".btnBack > .btn").click(function() { Utilities.backLogic() });
				MultimediaModel.virtualTourIdentyEvent.Listen(function() { $("#listingVirtualTourInnerCon").show() });
				MultimediaModel.virtualTourLoadEvent.Listen(function(n) { n.detail.loaded || !1 || ($("#listingVirtualTourInnerCon").hide(), $("#lnkPropertyDetailsHdrIcon_Video").show()) });
				MultimediaModel.virtualTourDataFetched.Listen(function(n) { n.detail.fetched && i.SetFloorPlanIcon($("#lnkPropertyDetailsHdrIcon_FP")) });
				Events.Listen(Gigya.consumerLoginEvent, function() { $("#listingNotesIconCon").show();
					Note.exists(t.model.listingId) && $("#listingNotesText").text(Translation.get("EditNotes")) });
				Events.Listen(Gigya.consumerLogoutEvent, function() { $("#listingNotesIconCon").hide();
					$("#listingNotesText").text(Translation.get("AddNotes")) });
				Note.noteRemovedEvent.Listen(function(n) { t.model.listingId == n.detail.id && $("#listingNotesText").text(Translation.get("AddNotes")) });
				Note.noteAddedEvent.Listen(function(n) { t.model.listingId == n.detail.id && $("#listingNotesText").text(Translation.get("EditNotes")) });
				$("#listingActionIconsCon .favouriteIcon").click(function() { return favouriteIconClicked($(this)), !1 });
				$("#listingActionIconsCon .noteIcon").click(function() { return noteIconClicked($(this), !0), !1 });
				$("#chkMeasurements").change(function() { $(this).is(":checked") ? t.switchMeasurementsToImperial() : t.switchMeasurementsToMetric() });
				$("#lnkViewStatistics").click(function() { URLHash.setWithNoBackButton("view", "stats") });
				$("#lnkViewCalc").click(function() { URLHash.setWithNoBackButton("view", "calc") });
				$(".listingDetailsTabsIconCon").click(function() { $(".listingTabContent").hide();
					$(".listingDetailsTabsIconCon").removeClass("selected");
					$(this).addClass("selected") });
				$("#listingPrintBtn").click(function() { Note.showPrintNoteSection(t.Model.listingId, $("#propertyDetailsNotePrintCon"));
					window.print() });
				$("#lnkViewNeighbourhood").click(function() { $("#listingNeighbourhoodTab").show();
					URLHash.setWithNoBackButton("view", "neighbourhood") });
				$("#lnkViewListingInfo").click(function() { $("#listingInfoTab").show();
					URLHash.removeHash(!1);
					t.Model.multimedia && t.Model.multimedia.embedable && (t.Model.multimedia.adjustThumbnailSize(), t.Model.multimedia.adjustVideoIframesSize()) });
				$("#lnkViewStatistics").length > 0 && $("#lnkViewStatistics").click(function() {
					(t.isDemographicsLoaded || !1) == !1 && t.LoadDemographics();
					$("#listingStatisticsTab").show();
					Events.Fire(n.Desktop.Listing.ViewingStatistics, t) });
				$("#lnkViewCalc").length > 0 && $("#lnkViewCalc").click(function() { $("#listingCalculatorsTab").show();
					t.loadCalculator() });
				$("#listingPhotoCarousel a").bind("touchstart mousedown", function() { t.mousedownOccured = !0;
					$(window).bind("mousemove touchmove", function(n) { var i = n.screenX + " " + n.screenY;
						t.currentMouseMoveCord != i && t.currentMouseMoveCord != "" && (t.mouseIsDragging = !0);
						t.currentMouseMoveCord = i }) });
				$("#listingPhotoCarousel a").bind("touchend mouseup", function() { var n, i;
					t.currentMouseMoveCord = "";
					n = t.mouseIsDragging;
					t.mouseIsDragging = !1;
					$(window).unbind("mousemove touchmove");
					i = Number($(this).attr("id").split("_")[1]);!n && t.mousedownOccured && t.launchImageGal2(i);
					t.mousedownOccured = !1 });
				$("#listingPhotoCarousel a").click(function(n) { n.preventDefault() });
				Events.Listen(Gigya.measurementsUpdated, function() { t.setMeasurementUnits() });
				$("#tableHistoryDetail tbody tr").length > ApplicationConfig.MaxSoldDataDisplay ? ($("#historyDetailSection").show(), $("#historyDetailSection").find("td").each(function(n, t) { breakAllLongWords($(t)) }), collapseTableWithReadMore($("#historyDetailSectioniInner"), $("#tableHistoryDetail"), ApplicationConfig.MaxSoldDataDisplay + 1, "text-align: right;")) : $("#historyDetailSection").show() }, i.prototype.loadCalculator = function() { var u = this,
				t = this.model,
				i, r;
				t.city != "" && t.provinceCode != "" && t.provinceCode != "0" && (i = t.city, r = t.provinceCode);
				u.calculatorLoaded == !1 && (typeof loadWidget == "undefined" || loadWidget == null ? (Events.Listen(n.Desktop.Listing.rateHubJSLoaded, function() { loadWidget("#listingCalculatorsInnerCon", { widget: "calc-payment", rateinput: "text-only", lang: ApplicationState.LanguageAttribute, ltt: "", cmhc: "", homePrice: t.price, city: i, province: r }) }), Utilities.loadScript("https://www.ratehub.ca/assets/js/widget-loader.js", function() { Events.Fire(n.Desktop.Listing.rateHubJSLoaded) })) : loadWidget("#listingCalculatorsInnerCon", { widget: "calc-payment", rateinput: "text-only", lang: ApplicationState.LanguageAttribute, ltt: "", cmhc: "", homePrice: t.price, city: i, province: r }), u.calculatorLoaded = !0, callWhen(function() { return $(".rh-widget").length > 0 }, function() { AnimateOut($("#listingCalculatorsTab_Loading"), ExitAnimations.fadeOut, .2, TransitionTiming.ease_out, function() { $("#listingCalculatorsTab_Loading").hide();
					$("#listingCalculatorsInnerCon").show();
					$("#listingCalculatorsDisclaimerCon").show() }) })) }, i.prototype.updateTabView = function() { var n = URLHash.get("view", "").toLowerCase(); switch (n) {
				case "":
					$("#lnkViewListingInfo").click(); break;
				case "neighbourhood":
					$("#lnkViewNeighbourhood").click(); break;
				case "stats":
					$("#lnkViewStatistics").click(); break;
				case "calc":
					$("#lnkViewCalc").click(); break;
				default:
					$(".listingDetailsTabsIconCon:visible")[0].click() } }, i.prototype.SetupDemographicsAccordian = function() { var n = $("#DemographicsChartsCon").show().accordion({ active: !1, collapsible: !0, header: ".DemographicsChartTitleCon", autoHeight: !0, animate: !1, heightStyle: "content", change: function(n, t) { var i = t } }).on("click", function() { n.not(this).accordion("activate", !1); var t = this;
				$(this).find(".DemographicsChartOuterCon").removeClass("show");
				window.setTimeout(function() { $(t).find(".ui-accordion-header-active").parent().find(".DemographicsChartOuterCon").addClass("show") }, 100) }) }, i.prototype.loadGoogleMaps = function(n) { if (console.log("Module Loaded: Google Maps"), Utilities.isGoogleMapsDefined() == !1) { var r = document.getElementsByTagName("script")[0],
				t = document.createElement("script"),
				i = "";
				ApplicationConfig.IsQAMode && (i = "&v=3");
				t.id = "googleMapsAPI";
				ApplicationState.CultureID == 1 ? t.setAttribute("src", "//maps.googleapis.com/maps/api/js?callback=GoogleMapsLoaded&key=" + n + "&region=CA&language=en&libraries=places" + i) : t.setAttribute("src", "//maps.googleapis.com/maps/api/js?callback=GoogleMapsLoaded&key=" + n + "&region=CA&language=fr&libraries=places" + i);
				r.parentNode.insertBefore(t, r) } }, i.prototype.setMeasurementUnits = function() { var n = Cookie.PreferredMeasurementUnits.get(MeasurementUnits.Imperial.toString());
				$("#chkMeasurements").length == 0 && this.switchMeasurementsToImperial();
				n == MeasurementUnits.Imperial ? this.switchMeasurementsToImperial() : n == MeasurementUnits.Metric && this.switchMeasurementsToMetric() }, i.prototype.SetFloorPlanIcon = function(n) { if (this.Model.multimedia.MultiHTTPURL !== null && this.Model.multimedia.SelectedHost != null && this.Model.multimedia.SelectedHost.FormatedPdfUrlFeet != null && this.Model.multimedia.SelectedHost.FormatedPdfUrlMetric != null && this.Model.multimedia.SelectedHost.FormatedPdfUrlFeet.length > 0 && this.Model.multimedia.SelectedHost.FormatedPdfUrlMetric.length > 0) { n.css("display", "inline-block"); var t = "",
				i = Cookie.PreferredMeasurementUnits.get(MeasurementUnits.Imperial.toString()) == MeasurementUnits.Imperial.toString();
				t = i ? i ? this.Model.multimedia.SelectedHost.FormatedPdfUrlFeet : this.Model.multimedia.SelectedHost.FormatedPdfUrlMetric : this.Model.multimedia.SelectedHost.FormatedPdfUrlMetric;
				n.attr("href", t) } }, i.prototype.switchMeasurementsToMetric = function() { $("#chkMeasurements").prop("checked", !1);
				Cookie.PreferredMeasurementUnits.get("") != MeasurementUnits.Metric.toString() && Cookie.PreferredMeasurementUnits.save(MeasurementUnits.Metric.toString());
				this.SetFloorPlanIcon($("#lnkPropertyDetailsHdrIcon_FP"));
				$("#lnkFeetToogle").removeClass("toggleActive");
				$("#lnkMetersToggle").addClass("toggleActive");
				$(".Imperial").hide();
				$(".Metric").css("display", "") }, i.prototype.switchMeasurementsToImperial = function() { $("#chkMeasurements").prop("checked", !0);
				Cookie.PreferredMeasurementUnits.get("") != MeasurementUnits.Imperial.toString() && Cookie.PreferredMeasurementUnits.save(MeasurementUnits.Imperial.toString());
				this.SetFloorPlanIcon($("#lnkPropertyDetailsHdrIcon_FP"));
				$("#lnkMetersToggle").removeClass("toggleActive");
				$("#lnkFeetToogle").addClass("toggleActive");
				$(".Imperial").css("display", "");
				$(".Metric").hide() }, i.prototype.LoadLogicLogic = function() { var t = this,
				n;
				t.localLogicLoaded == !1 && $("#LocalLogicCon").length > 0 && (t.localLogicLoaded = !0, n = document.createElement("script"), n.src = "https://cdn.locallogic.co/sdk/?token=b7505b4db3e235cb1a0430fb0038e8da97b3257a6376a5085a2dfed7911ffdfd38164eab0b97340d&callback=initLocallogic", n.setAttribute("async", ""), n.setAttribute("defer", ""), document.head.appendChild(n), initLocallogic = function() { var n = new locallogic.LocalContent("LocalLogicInnerCon", { lat: t.Model.latitude, lng: t.Model.longitude, locale: ApplicationState.LanguageAttribute, mobileBreakpoint: -1, color: "#23A1C0", basemap: "google", availablePois: "primary_schools,high_schools,groceries,shopping,nightlife,restaurants,cafes,daycares,transit_friendly,parks", houseIcon: '<img width="22" src="/wp-content/plugins/adk_feed/assets/images/pin-filled-purple.svg" />', callback: function() { Logging.Debug("Local Logic - No data available for this location", LogType.Other);
						$("#lnkViewNeighbourhood").hide();
						$(".tabHighlighter").detach().appendTo($(".listingDetailsTabsIconCon:visible").first());
						Controls.Desktop.TabHighlighter.refreshPosition($(".listingDetailsTabsIconCon:visible"), "selected") } });
					callWhen(function() { return $(".ll-content").length > 0 }, function() { $("#LocalLogicInnerCon").addClass("show").show() }) }) }, i.prototype.LoadDemographics = function() { var n = this,
				i, t;
				n.isDemographicsLoaded = !0;
				$("#listingDemographicsCon").length > 0 && (i = new ControlFetcherArgs("ListingDetailsDemographicsWrapperCon", "listingDemographicsCon"), i.showLoadingAnimation = !1, i.showLoadingSpinner = !0, i.postCallHandler = function() { n.SetupDemographicsAccordian() }, t = new DemographicsArgs, t.Latitude = n.Model.latitude, t.Longitude = n.Model.longitude, t.PropertyTypeId = n.Model.propertyTypeId, t.ProvinceCode = n.Model.provinceCode, t.DisseminationArea = n.Model.disseminationArea, ControlFetcher.fetchDemographics(i, t)) }, i.prototype.cssFullscreenReset = function() { $("body").css("overflow", "");
				$("body").css("height", "");
				$("body").css("width", "");
				$("body").css("overflow", "");
				$("html").css("overflow", "");
				$("html").css("height", "");
				$("html").css("width", "");
				$("html").css("overflow", "") }, i.prototype.handleTranslateObj = function(n) { var r, t, i; try { r = $(".rsVideoContainer");
				typeof n != "undefined" && n.holder && n.holder.length > 0 && (t = Number(n.holder[0].style.left.replace("px", "")), t = t * -1, i = "translate(" + t + "px,0)", $(".rsContainer").css("transform", i)) } catch (u) { console.log(u) } }, i.prototype.launchImageGal2 = function(n) { var t = this;
				(t.Model.listingId || "") != "" && Analytics.log(t.Model.listingId, "photo");
				$("#pnlImageCarousel").lightbox_me({ centered: !0, onLoad: function() { t.sliderLoaded != !0 ? ($("#royalslider-def").royalSlider({ startSlideId: parseInt(n) - 1, controlNavigation: "thumbnails", imageAlignCenter: !1, arrowsNav: !0, transitionType: "move", imageScaleMode: "none", keyboardNavEnabled: !0, transitionSpeed: 100, fadeinLoadedSlide: !1, globalCaption: !0, navigateByClick: !1, fullscreen: { enabled: !0, nativeFS: !0 } }), $(".rsThumbs").insertAfter(".rsGCaption"), $(window).trigger("resize"), t.sliderLoaded = !0) : ($("#royalslider-def").data("royalSlider").goTo(parseInt(n) - 1), $(window).trigger("resize")) } }) }, i.prototype.showNotifications = function(n) {
				(Compare.exists(n, ApplicationState.CurrentMode) && ConsumerProfile.UserAccountSettings.CompareNotificationsEnabled || Favourite.exists(n, ApplicationState.CurrentMode) && ConsumerProfile.UserAccountSettings.FavNotificationsEnabled) && $("#propertyNotificationsCon").show() }, i.ViewingStatistics = "ViewingStatistics", i.rateHubJSLoaded = "rateHubJSLoaded", i }(WebPage);
			t.Listing = i })(t = n.Desktop || (n.Desktop = {})) }(Pages || (Pages = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.currentMapBounds = null, r.currentPinCriteria = null, r.currentResultsCriteria = null, r.currentResults = null, r.PinPaginationDropdownOpen = !1, r.controlsBeingUpdatedViaHash = !1, r.skipNextSearch = !1, r.moreFiltersOpen = !1, r.detachedOptions = {}, r.previousMapBounds = null, r.isMapView = !0, r.realtorSearch = !1, r.runAfterNextSearch = null, r.mapIsLoaded = !1, r.initialMapViewSet = !1, r.mapBeingDragged = !1, r.maintainSearchText = !0, r.listViewResultsAreOutdated = !1, r.blockPinClicks = !1, r.switchToListViewOnNextSearch = !1, r.setBestViewOnNextSearch = !1, r.clusterClicked = !1, r.pins = [], r.sortCriteria = "", r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.setControlsValsFromHash = function(n) { var t = this;
				t.controlsBeingUpdatedViaHash = !0;
				Binding.setControlValsFromHashResetOthers(n);
				t.controlsBeingUpdatedViaHash = !1 }, t.prototype.render = function() { var n = this;
				$("#txtPropertyTypeGroupID").val(ApplicationState.CurrentMode || 1).change();
				n.resizeMapHeight();
				n.loadGoogleMaps(ApplicationConfig.GoogleAPIKey);
				n.loadDropDowns();
				DropDown.updateMainSearchFilterPlaceholders($("#mapSearchInputCon"));
				$("#txtPropertyTypeGroupID").val(ApplicationState.CurrentMode);
				n.IsInSavedSearchMode() == !1 && (n.setControlsValsFromHash(), n.updateFilterOrdering(n.CurrentSearchMode(), !1));
				Cookie.MapSidebarVisible.get("") == "false" && n.sideBarToggle(!1);
				$("#KeywordToolTip").qtip({ content: Translation.get("KeywordTip") }) }, t.prototype.loadGoogleMaps = function(n) { if (Utilities.isGoogleMapsDefined() == !1) { var r = document.getElementsByTagName("script")[0],
				t = document.createElement("script"),
				i = "";
				ApplicationConfig.IsQAMode && (i = "&v=3");
				t.id = "googleMapsAPI";
				ApplicationState.CultureID == 1 ? t.setAttribute("src", "//maps.googleapis.com/maps/api/js?callback=GoogleMapsLoaded&key=" + n + "&region=CA&language=en&libraries=places" + i) : t.setAttribute("src", "//maps.googleapis.com/maps/api/js?callback=GoogleMapsLoaded&key=" + n + "&region=CA&language=fr&libraries=places" + i);
				r.parentNode.insertBefore(t, r) } }, t.prototype.initMap = function() { var n = this,
				r = new google.maps.Map(document.getElementById("mapBodyCon"), { zoomControl: !0, center: new google.maps.LatLng(54.920828, -99.316406), zoom: 4, maxZoom: 21, fullscreenControl: !0, mapTypeControl: !0, clickableIcons: !1, gestureHandling: "greedy", fullscreenControlOptions: { position: google.maps.ControlPosition.BOTTOM_RIGHT } }),
				i = new google.maps.OverlayView;
				i.draw = function() {};
				i.setMap(r);
				this.mapOverlay = i;
				this.map = r;
				google.maps.event.addListener(n.map, "maptypeid_changed", function() { var t = n.map.getMapTypeId().toString();
					t != "roadmap" && t != "terrain" ? $("#satellitePinOverride").length || outputCSS(".mapPin:not(.favouritePin) { background-image: url(/wp-content/plugins/adk_feed/assets/images/pin-filled-white.svg) !important; color: black !important;", "satellitePinOverride") : $("#satellitePinOverride").remove() });
				google.maps.event.addListener(n.map, "click", function() { PinInfoBoxHelper.hideInfoBox() });
				google.maps.event.addListener(n.map, "idle", function() { if (PinInfoBoxHelper.hideInfoBox(), n.initialMapViewSet == !1 && (n.initialMapViewSet = !0, n.setBestViewOnNextSearch == !1)) { n.setMapViewFromHash(); return } n.mapIsLoaded = !0;
					n.mapBeingDragged == !1 && (n.map.getBounds() != null ? Logging.Debug("idle (bounds: " + n.map.getBounds().toUrlValue() + " )", LogType.Map) : Logging.Debug("idle (no bounds)", LogType.Map), $("#mapBodyCon").is(":visible") && (n.map.getBounds() != null || n.setBestViewOnNextSearch) ? (n.setControlsValsFromHash($("#mapBoundsFields")), n.search()) : Logging.Debug("Map bounds_changed search not fired - Map not visible", LogType.Map)) });
				google.maps.event.addListener(n.map, "resize", function() { Logging.Debug("Map resize event", LogType.Map); return });
				google.maps.event.addListener(n.map, "dragstart", function() { Logging.Debug("Map dragstart event", LogType.Map);
					n.mapBeingDragged = !0;
					PinInfoBoxHelper.disable(); return });
				google.maps.event.addListener(n.map, "dragend", function() { Logging.Debug("Map dragend event", LogType.Map);
					n.mapBeingDragged = !1;
					google.maps.event.trigger(n.map, "idle");
					PinInfoBoxHelper.enable(); return });
				Events.Fire(t.mapInitialized) }, t.prototype.handleViewToggleChanged = function(n) { var t = this;
				GetControl("mapViewToggle").value(n);
				n == "list" ? t.isMapView && t.showListView() : t.isMapView == !1 && t.showMapView() }, t.prototype.sideBarToggle = function(n) { var t = $("#mapSideBarToggleCon").hasClass("closed");
				n != null && (t = n);
				Cookie.MapSidebarVisible.save(t ? "true" : "false");
				$("#mapSideBarToggleCon").toggleClass("closed", t == !1);
				$("#mapSidebarCon").toggleClass("closed", t == !1);
				$("#mapNoSidebarResultsCon").toggleClass("hidden", t);
				t ? window.setTimeout(function() { $("#mapSidebarCon").toggleClass("hidden", t == !1) }, 400) : $("#mapSidebarCon").toggleClass("hidden", t == !1) }, t.prototype.registerEventHandlers = function() { var n = this;
				Events.Listen(MasterPages.Desktop.GoogleAPILoaded, function() { n.initMap() });
				Events.Listen(t.mapInitialized, function() { ApplicationConfig.EnableLocalLogicSchools && ApplicationState.Current.Controls.LocalLogicSchoolsCtrl && ApplicationState.Current.Controls.LocalLogicSchoolsCtrl.loadSchools(n.map);
					ApplicationState.UserIsSignedIn && n.setConsumerPreferences() });
				Events.Listen(Controls.Desktop.Disambiguation.disambiguationLinkClickedEvent, function() { $(window).one("hashchange", function() { APIProxy.abortCurrentPropertySearch();
					n.setMapViewFromHash();
					$.featherlight.close() }) });
				$(window).on("resize", function() { n.resizeMapHeight() });
				$("#mapSideBarToggleCon").click(function() { n.sideBarToggle() });
				GetControl("mapViewToggle").valueChanged.Listen(function(t) { n.handleViewToggleChanged(t.detail.args.value) });
				$(document).keypress(function(n) { var t, i; if ($($(n.target)).parents("#keywords").length > 0) { if (t = $("#txtKeywords").find(":selected").length, t == 5) return i = $("#keywords").find(".select2-search__field"), $("#keywords").find(".select2-search__field").focus(), $("#keywords").find(".select2-search__field").click(), !1;
					$("#txtKeywords").focus() } });
				$(document).keydown(function(t) { if (n.isMapView == !1) { if (t.keyCode == 37) return $("#ListViewPagination_Top .lnkPreviousResultsPage").click(), !1; if (t.keyCode == 39) return $("#ListViewPagination_Top .lnkNextResultsPage").click(), !1; if (t.keyCode == 38) return window.scrollBy(0, -100), !1; if (t.keyCode == 40) return window.scrollBy(0, 100), !1 } });
				ApplicationConfig.EnableAutoComplete && (new AutoComplete("txtMapSearchInput", ApplicationConfig.LocationAutocompleteCacheKey, function() { $("#btnMapSearch").click() }, ApplicationConfig.AutoCompleteResultsSize), new AutoComplete("mapMoreSearchTxt", ApplicationConfig.LocationAutocompleteCacheKey, function() {}, ApplicationConfig.AutoCompleteResultsSize, null, "1003"));
				$(".stopOverScroll").on("mousewheel DOMMouseScroll", function(n) { var t = n.originalEvent,
					i = t.wheelDelta || -t.deltaY || -t.detail;
					this.scrollTop += (i < 0 ? 1 : -1) * 30;
					n.preventDefault() });
				initListedSince($("#dteListedSince"));
				$("#sharedInfobox").mouseenter(function() { PinInfoBoxHelper.clearHideTimer() });
				$("#btnMapSearch").click(function() { var t = $("#txtMapSearchInput").val().trim(),
					i;
					t != "" ? (i = function() { AutoComplete.StoreEntry(ApplicationConfig.LocationAutocompleteCacheKey, { Text: t.trim() }, ApplicationConfig.AutoCompleteResultsSize) }, n.subAreaSearch(t, function() { n.updateMapFilters();
						$("#txtMapSearchInput, #mapMoreSearchTxt").val("") }, i)) : n.updateMapFilters() });
				Events.Listen(Favourite.favouriteAddedEvent, function(t) { var i = t.detail,
					r = MapPinHelper.getMarkerById(i.id, i.lat, i.lon, n.pins, n.clusterer),
					u = MapPinHelper.findPinById(i.id, n.currentResults.Pins);
					u != null && (u.favouriteCount = 1);
					r != null && (r.favouriteCount = Number(r.favouriteCount || 0) + 1, MapPinHelper.refreshFavoritePins(n.clusterer)) });
				Events.Listen(Favourite.favouriteRemovedEvent, function(t) { var i = t.detail,
					r = MapPinHelper.getMarkerById(i.id, i.lat, i.lon, n.pins, n.clusterer),
					u = MapPinHelper.findPinById(i.id, n.currentResults.Pins);
					u != null && (u.favouriteCount = 0);
					r.favouriteCount = Number(r.favouriteCount) - 1;
					MapPinHelper.refreshFavoritePins(n.clusterer) });
				$("#triangle").mouseenter(function() { PinInfoBoxHelper.clearHideTimer() });
				$("#lnkNextSidebarResultsPage").click(function() { var t = Number(URLHash.get("CurrentPage", "1")) + 1; return t < n.currentResults.Paging.TotalPages && (URLHash.set("CurrentPage", t.toString()), n.search()), !1 });
				$("#lnkPrevSidebarResultsPage").click(function() { var t = Number(URLHash.get("CurrentPage", "1")) - 1; return t > 0 && (URLHash.set("CurrentPage", t.toString()), n.search()), !1 });
				$("#sharedInfobox").mouseleave(function() {
					(this.PinPaginationDropdownOpen || !1) == !1 && PinInfoBoxHelper.hideInfoBox_Timed() });
				$("#lnkPreviousPinResultsPage").click(function() { return n.currentPinCriteria.CurrentPage = (Number(n.currentPinCriteria.CurrentPage || 1) - 1).toString(), PinInfoBoxHelper.showInfoBox(n.currentCluster, n.map, n.mapOverlay, n.currentPinCriteria), !1 });
				$("#lnkNextPinResultsPage").click(function() { return n.currentPinCriteria.CurrentPage = (Number(n.currentPinCriteria.CurrentPage || 1) + 1).toString(), PinInfoBoxHelper.showInfoBox(n.currentCluster, n.map, n.mapOverlay, n.currentPinCriteria), !1 });
				$("#mapSearchInputCon select").on("change select2:select", function() { $(this).parent(".mapFilterCon").toggleClass("hasValue", ($(this).val() || "") != "") });
				DropDown.linkedDropdownUpdated.Listen(function() { n.mapIsLoaded && n.controlsBeingUpdatedViaHash == !1 && $("#mapSearchMoreCon").is(":visible") == !1 && window.setTimeout(function() { n.updateMapFilters() }, 200) });
				ApplicationState.Current.Controls.ListViewPagination_Top.pageChange.Listen(function(t) { $("#txtPage").val(t.detail.args.page.toString());
					n.search(null, !0) });
				ApplicationState.Current.Controls.ListViewPagination_Bottom.pageChange.Listen(function(t) { $("#txtPage").val(t.detail.args.page.toString());
					n.search(null, !0);
					$("html,body").animate({ scrollTop: $("#listCon").offset().top }, 150) });
				ApplicationState.Current.Controls.SideBarPagination.pageChange.Listen(function(t) { $("#txtPage").val(t.detail.args.page.toString());
					n.maintainSearchText = !0;
					n.search(null, !0) });
				ApplicationState.Current.Controls.infoBoxPagination.pageChange.Listen(function(t) { var r = n.getCurrentCriteria(),
					i = n.getPinSearchCriteria(n.currentCluster, r);
					i.CurrentPage = t.detail.args.page.toString();
					n.currentPinCriteria = i;
					PinInfoBoxHelper.showInfoBox(n.currentCluster, n.map, n.mapOverlay, i, function() { n.updateInfoBoxPagination(Number(t.detail.args.page)) }) });
				$(".mapFilteredViewCloseImg").click(function() { $("#listViewCon").removeAttr("style");
					$("#txtIndividualId").val("").change();
					$("#txtOrganizationId").val("").change();
					$("#txtReferenceNumber").val("").change();
					$("#txtSearchName").val("").change();
					$(".FilteredViewCon").hidden();
					$("#mapFilterResetCon").click();
					n.resetMapFilters(); var t = n.getCurrentCriteria();
					n.updatePageHash(t);
					n.search() });
				$(document.body).click(function(t) { var i = $(t.target),
					r;
					i.parents("#keywords").length > 0 && $("#txtKeywords").focus();
					n.moreFiltersOpen && (r = i.hasClass("ui-datepicker") || i.hasClass("ui-datepicker-current") || i.parents(".ui-datepicker").length > 0 || i.parents(".ui-datepicker-header").length > 0 || i.hasClass("select2-selection__choice") || i.parents("#mapSearchMoreCon").length > 0 || i.parents(".select2-container").length > 0 || i.attr("id") == "mapSearchMoreBtn" || i.parents("#mapSearchMoreBtn").length > 0 || i.parents(".qtip").length > 0 || i.parents("#mapSearchMoreCon").length > 0 || i.attr("id") == "mapSearchMoreCon" || i.parents("#AutoCompleteCon-mapMoreSearchTxt").length > 0, r == !1 && (n.closeMoreFilters(), n.setControlsValsFromHash())) });
				$("#txtPropertyTypeGroupID").change(function() { $(this).val() == "2" ? $("#mapCommercialTab").click() : $("#mapResidentialTab").click() });
				$("#txtOrganizationId").change(function() { var t = $("#txtOrganizationId").val();
					t != "" ? ($(".mapFilteredViewText").html(Translation.get("FilteredByOffice")), $(".FilteredViewCon").visible(), n.toggleSearchControlsEnabled(!1), n.setBestViewOnNextSearch = !0) : ($(".FilteredViewCon").hidden(), n.toggleSearchControlsEnabled(!0)) });
				$("#txtIndividualId").change(function() { var t = $("#txtIndividualId").val();
					t != "" ? ($(".mapFilteredViewText").html(Translation.get("FilteredByRealtor")), $(".FilteredViewCon").visible(), n.toggleSearchControlsEnabled(!1), n.setBestViewOnNextSearch = !0) : ($(".FilteredViewCon").hidden(), n.toggleSearchControlsEnabled(!0)) });
				$("#txtReferenceNumber").change(function() { var t = $("#txtReferenceNumber").val();
					t != "" && (n.currentResultsCriteria == null || n.currentResultsCriteria.ReferenceNumber != t) ? ($(".mapFilteredViewText").html(Translation.get("FilteredByX", t)), $(".FilteredViewCon").visible(), n.toggleSearchControlsEnabled(!1), n.setBestViewOnNextSearch = !0) : ($(".FilteredViewCon").hidden(), n.toggleSearchControlsEnabled(!0)) });
				$(".mapFilteredViewCloseImg").click(function() { $("#listViewCon").removeAttr("style");
					$("#txtIndividualId").val("").change();
					$("#txtOrganizationId").val("").change();
					$("#txtReferenceNumber").val("").change();
					$("#txtSearchName").val("").change();
					$("#mapFilterResetCon").click();
					n.resetMapFilters(); var t = n.getCurrentCriteria();
					n.updatePageHash(t);
					n.search() });
				$("#mapMoreFiltersResetBtn").click(function() { n.resetMapFilters() });
				$("#sortResults, #ddlListResultsSort").change(function() { n.maintainSearchText = !0;
					$("#txtSort").val($(this).val());
					$(this).is(":visible") && n.currentResultsCriteria != null && n.search() });
				$("#txtSortBy").change(function() { var t = $("#txtSortBy").val() || "",
					i = $("#txtSortOrder").val() || "";
					t != "" && i != "" && (n.sortCriteria = t + "-" + i, $("#sortResults option[value=" + n.sortCriteria + "]").length === 1 && $("#sortResults, #ddlListResultsSort").val(n.sortCriteria).change()) });
				$("#mapSaveSearchBtn").click(function() { var i, t, u, r; if (!$("#mapSaveSearchBtn").hasClass("disabled")) return i = SavedSearch.GetAllSearchResults(), t = null, i.errorId === SavedSearchError.None ? (t = $("<label for='txtMapSaveSearchName'>" + Translation.get("NameYourSearch") + "<\/label><input id='txtMapSaveSearchName' type='text' maxlength='45' data-validation='required,blockchars(<>%),nourls,savedsearchname,savedsearchlimit' class='roundedInput' />"), ApplicationState.UserIsSignedIn && (t = t.add("<div style='text-align:left;margin-top:10px;'><input type='checkbox' id='MapSaveSearchIncludeNotification' /><label for='MapSaveSearchIncludeNotification' class='checkboxLabel'>" + Translation.get("SendEmailNotificationsForSearch") + "<\/label><\/div>"))) : t = $("<span id='SavedSearchErrorMsg' style='line-height:25px;'>" + i.errorValue + "<\/span>"), u = function(n) { $("#txtMapSaveSearchName").keypress(function(t) { if (t.keyCode == 13) return $("#" + n.model.ButtonPositiveID).click(), !1 }) }, r = new ConfirmationDialogModel2("MapSavedSearchDialog", Translation.get("SaveSearch"), t, Translation.get("Save"), function(t, i) { var r, f, u;
					FormValidation.validateForm($("#MapSavedSearchDialog")) && (r = window.location.href, f = n.getCurrentCriteria(), r = r.replace(window.location.hash, "#" + $.param(f)), u = new SavedSearch($("#txtMapSaveSearchName").val(), window.location.href, ApplicationState.CurrentMode, new Date), ApplicationState.UserIsSignedIn && (u.notify = $("#MapSaveSearchIncludeNotification").is(":checked")), u.Save(), Events.Fire(SavedSearch.savedSearchesUpdated, null), i.Featherlight.close(), showMessage(Translation.get("SearchSaved"))) }, Translation.get("Cancel"), function(n, t) { $("#txtMapSaveSearchName").val("");
					t.Featherlight.close() }, null, null, null, null, u, null), r.ShowTitleBar = !0, r.ShowButtons = i.errorId === SavedSearchError.None ? !0 : !1, showConfirmationDialog2(r), !1 });
				$("#mapSearchMoreBtn").click(function() { n.showMoreFilters() });
				$("#mapMoreFiltersCloseBtn").click(function() { n.closeMoreFilters();
					Binding.setControlValsFromHashResetOthers($("#mapSearchMoreCon, #txtPropertyTypeGroupID"));
					n.refreshNumberOfNonDefaultSecondaryFilters() });
				$("#mapMoreFiltersSearchBtn").click(function() { var t = $("#mapMoreSearchTxt").val().trim(),
					i;
					t != "" ? (i = function() { AutoComplete.StoreEntry(ApplicationConfig.LocationAutocompleteCacheKey, { Text: t.trim() }, ApplicationConfig.AutoCompleteResultsSize) }, n.subAreaSearch(t, function() { n.updateMapFilters() }, i)) : n.updateMapFilters() });
				$("#ddlPropertyTypeRes, #ddlPropertyTypeCom, #ddlTransactionTypeCom, #ddlTransactionTypeRes").change(function() { n.updateFilterOrdering(n.CurrentSearchMode(), !1) });
				$("#txtMapSearchInput").keypress(function(n) { if (n.keyCode == 13) return $("#btnMapSearch").click(), !1 });
				$("#mapResidentialTab").click(function() { return $("#txtPropertyTypeGroupID").val(1), n.updateSearchMode(!0), n.updateFilterOrdering(n.CurrentSearchMode()), n.refreshNumberOfNonDefaultSecondaryFilters(), !1 });
				$("#mapCommercialTab").click(function() { return $("#txtPropertyTypeGroupID").val(2), n.updateSearchMode(!1), n.updateFilterOrdering(n.CurrentSearchMode()), n.refreshNumberOfNonDefaultSecondaryFilters(), !1 });
				DropDown.linkDropDownVals_OneWay($("#ddlBedsTop"), $("#ddlBeds"));
				DropDown.linkDropDownVals_OneWay($("#ddlBathsTop"), $("#ddlBaths"));
				DropDown.linkDropDownVals_OneWay($("#ddlMinPriceTop"), $("#ddlMinPrice"));
				DropDown.linkDropDownVals_OneWay($("#ddlMaxPriceTop"), $("#ddlMaxPrice"));
				DropDown.linkDropDownVals_OneWay($("#ddlMinRentTop"), $("#ddlMinRent"));
				DropDown.linkDropDownVals_OneWay($("#ddlMaxRentTop"), $("#ddlMaxRent"));
				DropDown.linkDropDownVals_OneWay($("#ddlNumberOfUnitsTop"), $("#ddlNumberOfUnits"));
				DropDown.linkDropDownVals_OneWay($("#ddlBuildingSpaceTop"), $("#ddlBuildingSpace"));
				DropDown.linkDropDownVals_OneWay($("#ddlFarmTypeTop"), $("#ddlFarmType"));
				DropDown.linkDropDownVals_OneWay($("#ddlParkingTypeTop"), $("#ddlParkingType"));
				DropDown.linkDropDownVals_OneWay($("#ddlLandSizeTop"), $("#ddlLandSize"));
				DropDown.linkDropDownVals_OneWay($("#ddlZoningTypeTop"), $("#ddlZoningType"));
				DropDown.linkDropDownVals_OneWay($("#ddlTransactionTypeTopRes"), $("#ddlTransactionTypeRes"));
				DropDown.linkDropDownVals_OneWay($("#ddlTransactionTypeTopCom"), $("#ddlTransactionTypeCom"));
				$("#ddlBuildingType").change(function() { if ($("#buildingType").is(":visible")) { n.detachedOptions != null && n.detachedOptions.ddlBuildingAttachmentStyle != null && $("#ddlBuildingAttachmentStyle").append(n.detachedOptions.ddlBuildingAttachmentStyle).trigger("change");
					$("#buildingAttachmentStyle").show(); var t = $("#ddlBuildingType").val();
					t == "" || t != "1" && t != "16" ? $("#buildingAttachmentStyle").hide() : (n.detachedOptions.ddlBuildingAttachmentStyle = $('#ddlBuildingAttachmentStyle option[parentid!="' + t + '"]').detach(), $("#ddlBuildingAttachmentStyle").siblings("span.select2").find(".select2-selection").addClass("homeFilter"), $("#buildingAttachmentStyle").show()) } }) }, t.prototype.updateInfoBoxPagination = function() { var t = this,
				n = new PublicContracts.Paging;
				n.CurrentPage = Number(t.currentPinCriteria.CurrentPage);
				n.TotalRecords = Number(t.currentCluster.count);
				n.TotalPages = Math.ceil(n.TotalRecords / Number(t.currentPinCriteria.RecordsPerPage));
				n.RecordsPerPage = Number(t.currentPinCriteria.RecordsPerPage);
				n.MaxRecords = t.currentResults.Paging.MaxRecords;
				ApplicationState.Current.Controls.infoBoxPagination.refreshUI(n) }, t.prototype.updateSearchMode = function(n) { n ? Cookie.ApplicationMode.save("1") : Cookie.ApplicationMode.save("2");
				$("#mapResidentialTab").toggleClass("active", n);
				$("#mapCommercialTab").toggleClass("active", !n);
				$("#mapMoreFilterResToggle").toggleClass("selected", n);
				$("#mapMoreFilterComToggle").toggleClass("selected", !n);
				$("#propertyTypeRes").toggle(n);
				$("#propertyTypeCom").toggle(!n);
				DropDown.updateMainSearchFilterPlaceholders($("#mapSearchInputCon")) }, t.prototype.toggleSearchControlsEnabled = function(n) { $("#mapTopFiltersInnerConLeft,#mapSearchMoreBtn").toggleClass("disableEvents", n == !1) }, t.prototype.CurrentSearchMode = function() { var n = $("#txtPropertyTypeGroupID").val(); return n == "1" ? ApplicationModes.Residential : n == "2" ? ApplicationModes.Commercial : ApplicationModes.Residential }, t.prototype.resetMapFilters = function() { var n = this;
				n.resetFilters($("#mapSearchFiltersInnerCon,#mapSearchMoreCon")) }, t.prototype.getBodyHeight = function() { return $(window).height() - $("#header").outerHeight(!0) - $("#headerMenu").outerHeight(!0) - $("#mapTopFiltersCon").outerHeight(!0) }, t.prototype.refreshNumberOfNonDefaultSecondaryFilters = function() { var n = this.getNumberOfNonDefaultSecondaryFilters();
				$("#mapMoreFiltersNum").text(n.toString());
				$("#mapMoreFiltersNum").toggle(n != 0) }, t.prototype.getNumberOfNonDefaultSecondaryFilters = function() { for (var f = 0, e = [], r = $(".mapFilterCon.hasValue [data-hashkey]").not("#ddlPropertyTypeTopRes, #ddlPropertyTypeTopCom"), i, t, u, o, n = 0; n < r.length; n++) $(r[n]).siblings(".select2").is(":visible") && (t = $(r[n]).attr("data-hashkey"), e.push(t)); for (i = $(".mapMoreFilterCon.active [data-hashkey]").not("#ddlPropertyTypeRes, #ddlPropertyTypeCom"), n = 0; n < i.length; n++) t = $(i[n]).attr("data-hashkey"), e.indexOf(t) == -1 && (u = WebControl.getControlValue(i[n], !1), o = $(i[n]).attr("data-default"), u != null && u != o && f++); return f }, t.prototype.updateFilterOrdering = function(n, t) { var f, r, u, i;
				t === void 0 && (t = !0);
				f = this;
				f.refreshNumberOfNonDefaultSecondaryFilters();
				r = n == ApplicationModes.Residential ? $("#ddlTransactionTypeRes").val() : $("#ddlTransactionTypeCom").val();
				u = n == ApplicationModes.Residential ? $("#ddlPropertyTypeRes").val() : $("#ddlPropertyTypeCom").val();
				$("#ddlPropertyTypeRes").next(".select2-container").toggle(n == ApplicationModes.Residential);
				$("#ddlPropertyTypeCom").next(".select2-container").toggle(n == ApplicationModes.Commercial);
				$(".mapMoreFilterCon").each(function() { $(this).hide();
					$(this).toggleClass("active", !1) });
				$(".mapFilterCon").hide();
				i = $("#mapSearchMoreFiltersInnerCon");
				this.updateFilter($("#groupId"), i);
				n == ApplicationModes.Residential ? this.updateFilter($("#propertyTypeRes"), i) : this.updateFilter($("#propertyTypeCom"), i);
				u == SearchType.Residential ? (this.updateFilter($("#transactionTypeRes"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent && ($("#MinRentTop, #MaxRentTop").show(), this.updateFilter($("#rentMin"), i), this.updateFilter($("#rentMax"), i)), $("#BedsTop, #BathsTop").show(), this.updateFilter($("#beds"), i), this.updateFilter($("#baths"), i), this.updateFilter($("#landSize"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#buildingType"), i), this.updateFilter($("#buildingAttachmentStyle"), i), this.updateFilter($("#openHouse"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Recreational ? (this.updateFilter($("#transactionTypeRes"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent && ($("#MinRentTop, #MaxRentTop").show(), this.updateFilter($("#rentMin"), i), this.updateFilter($("#rentMax"), i)), $("#BedsTop, #BathsTop").show(), this.updateFilter($("#beds"), i), this.updateFilter($("#baths"), i), this.updateFilter($("#landSize"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#buildingType"), i), this.updateFilter($("#buildingAttachmentStyle"), i), this.updateFilter($("#openHouse"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Condo ? (this.updateFilter($("#transactionTypeRes"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent && ($("#MinRentTop, #MaxRentTop").show(), this.updateFilter($("#rentMin"), i), this.updateFilter($("#rentMax"), i)), $("#BedsTop, #BathsTop").show(), this.updateFilter($("#beds"), i), this.updateFilter($("#baths"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#buildingType"), i), this.updateFilter($("#buildingAttachmentStyle"), i), this.updateFilter($("#openHouse"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Multifamily && n == ApplicationModes.Residential ? (this.updateFilter($("#transactionTypeRes"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent && ($("#MinRentTop, #MaxRentTop").show(), this.updateFilter($("#rentMin"), i), this.updateFilter($("#rentMax"), i)), $("#NumberOfUnitsTop, #BuildingSpaceTop").show(), this.updateFilter($("#numberOfUnits"), i), r == TransactionType.Sale && this.updateFilter($("#buildingSpace"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#openHouse"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Agricultural && n == ApplicationModes.Residential ? (this.updateFilter($("#transactionTypeRes"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent && ($("#MinRentTop, #MaxRentTop").show(), this.updateFilter($("#rentMin"), i), this.updateFilter($("#rentMax"), i)), $("#FarmTypeTop").show(), this.updateFilter($("#farmType"), i), this.updateFilter($("#landSize"), i), this.updateFilter($("#beds"), i), this.updateFilter($("#baths"), i), this.updateFilter($("#buildingType"), i), this.updateFilter($("#buildingAttachmentStyle"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#openHouse"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Parking ? (this.updateFilter($("#transactionTypeRes"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent && ($("#MinRentTop, #MaxRentTop").show(), this.updateFilter($("#rentMin"), i), this.updateFilter($("#rentMax"), i)), $("#ParkingTypeTop").show(), this.updateFilter($("#parkingType"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.All && n == ApplicationModes.Residential ? (this.updateFilter($("#transactionTypeRes"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent && ($("#MinRentTop, #MaxRentTop").show(), this.updateFilter($("#rentMin"), i), this.updateFilter($("#rentMax"), i)), $("#TransactionTypeTopRes").show(), this.updateFilter($("#listedSince"), i), this.updateFilter($("#openHouse"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Land && n == ApplicationModes.Residential ? (this.updateFilter($("#transactionTypeRes"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent && ($("#MinRentTop, #MaxRentTop").show(), this.updateFilter($("#rentMin"), i), this.updateFilter($("#rentMax"), i)), $("#LandSizeTop, #ZoningTypeTop").show(), this.updateFilter($("#landSize"), i), this.updateFilter($("#zoningType"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#openHouse"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Multifamily && n == ApplicationModes.Commercial ? (this.updateFilter($("#transactionTypeCom"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent, $("#NumberOfUnitsTop, #BuildingSpaceTop").show(), this.updateFilter($("#numberOfUnits"), i), r == TransactionType.Sale && this.updateFilter($("#buildingSpace"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#openHouse"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.All && n == ApplicationModes.Commercial ? (this.updateFilter($("#transactionTypeCom"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent, r == TransactionType.Sale && this.updateFilter($("#buildingSpace"), i), $("#BuildingSpaceTop, #LandSizeTop").show(), this.updateFilter($("#landSize"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Business ? (this.updateFilter($("#transactionTypeCom"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent, r == TransactionType.Sale && (this.updateFilter($("#buildingSpace"), i), $("#BuildingSpaceTop").show()), this.updateFilter($("#listedSince"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Office ? (this.updateFilter($("#transactionTypeCom"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent, r == TransactionType.Sale && (this.updateFilter($("#buildingSpace"), i), $("#BuildingSpaceTop").show()), this.updateFilter($("#listedSince"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Retail ? (this.updateFilter($("#transactionTypeCom"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent, r == TransactionType.Sale && (this.updateFilter($("#buildingSpace"), i), $("#BuildingSpaceTop").show()), this.updateFilter($("#listedSince"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Land && n == ApplicationModes.Commercial ? (this.updateFilter($("#transactionTypeCom"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent, $("#LandSizeTop, #ZoningTypeTop").show(), this.updateFilter($("#landSize"), i), this.updateFilter($("#zoningType"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Institutional ? (this.updateFilter($("#transactionTypeCom"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent, r == TransactionType.Sale && (this.updateFilter($("#buildingSpace"), i), $("#BuildingSpaceTop").show()), this.updateFilter($("#listedSince"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Industrial ? (this.updateFilter($("#transactionTypeCom"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent, r == TransactionType.Sale && this.updateFilter($("#buildingSpace"), i), $("#BuildingSpaceTop, #LandSizeTop").show(), this.updateFilter($("#landSize"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Agricultural && n == ApplicationModes.Commercial ? (this.updateFilter($("#transactionTypeCom"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i)) : r == TransactionType.Rent, $("#LandSizeTop, #FarmTypeTop").show(), this.updateFilter($("#farmType"), i), this.updateFilter($("#landSize"), i), this.updateFilter($("#beds"), i), this.updateFilter($("#baths"), i), this.updateFilter($("#buildingType"), i), this.updateFilter($("#buildingAttachmentStyle"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#openHouse"), i), this.updateFilter($("#keywords"), i)) : u == SearchType.Hospitality && (this.updateFilter($("#transactionTypeCom"), i), r == TransactionType.Sale ? ($("#MinPriceTop, #MaxPriceTop, #BuildingSpaceTop").show(), this.updateFilter($("#priceMin"), i), this.updateFilter($("#priceMax"), i), this.updateFilter($("#buildingSpace"), i)) : r == TransactionType.Rent, $("#LandSizeTop").show(), this.updateFilter($("#landSize"), i), this.updateFilter($("#listedSince"), i), this.updateFilter($("#keywords"), i));
				$("#ddlBuildingType").change();
				$("#lblMinRent, #lblMaxRent").toggle(n == ApplicationModes.Residential);
				$("#lblMinLease, #lblMaxLease").toggle(n == ApplicationModes.Commercial) }, t.prototype.resizeMapHeight = function() { var n = this,
				t;
				(n.isMapView || n.currentResultsCriteria == null) && Logging.Debug("Resizing map height", LogType.Map);
				t = n.getBodyHeight();
				$("#mapOuterCon, #mapSidebarInnerCon").css("height", t.toString() + "px");
				this.map != null ? google.maps.event.trigger(n.map, "resize") : Logging.Debug("Resizing map height skipped, not in map view", LogType.Map) }, t.prototype.setMapViewFromHash = function() { var f = this,
				n = URLHash.getObject(),
				e = n.NorthEast || "",
				o = n.SouthWest || "",
				r = n.LatitudeMax || "",
				s = n.LongitudeMax || "",
				h = n.LatitudeMin || "",
				c = n.LongitudeMin || "",
				l = n.Latitude || "",
				a = n.Longitude || "",
				u = n.Center || "",
				t = n.ZoomLevel || "",
				v = n.Area || "",
				y = n.view || "",
				p, w; if (u != "" && t != "") p = Number(u.split(",")[0]), w = Number(u.split(",")[1]), this.map.setCenter(new google.maps.LatLng(p, w));
			else if (e != "" && o != "") { var b = e.split(","),
				k = o.split(","),
				i = new google.maps.LatLngBounds({ lat: Number(k[0]), lng: Number(k[1]) }, { lat: Number(b[0]), lng: Number(b[1]) });
				this.map.fitBounds(i) } else if (r != "" && s != "" && h != "" && c != "") { var d = new google.maps.LatLng(Number(h), Number(c)),
				g = new google.maps.LatLng(Number(r), Number(s)),
				i = new google.maps.LatLngBounds(d, g);
				t != "" ? f.map.setCenter(i.getCenter()) : this.map.fitBounds(i) } else l != "" && a != "" ? this.map.setCenter(new google.maps.LatLng(Number(l), Number(a))) : v != "" ? this.subAreaSearch(v) : r == "" && this.centerMap();
				t != "" && f.map.setZoom(Number(t));
				y != "" && $("#txtView").val(y).change();
				google.maps.event.trigger(this.map, "resize") }, t.prototype.centerMap = function() { var n = this;
				navigator.geolocation && navigator.geolocation.getCurrentPosition(function(t) { var i = new google.maps.LatLng(t.coords.latitude, t.coords.longitude);
					n.map.setCenter(i);
					n.map.setZoom(15);
					n.lastSearchTime == null && google.maps.event.trigger(n.map, "idle") }, function() { var t = new google.maps.LatLng(54.920828, -99.316406);
					n.map.setCenter(t);
					n.map.setZoom(4);
					n.lastSearchTime == null && google.maps.event.trigger(n.map, "idle") }, { maximumAge: 15e3 }) }, t.prototype.updateMapFilters = function() { var n = this;
				FormValidation.validateForm($("#mapSearchMoreCon")) ? (n.toggleFilters(), n.search(), n.closeMoreFilters()) : addAnimationClass($("#mapMoreFiltersSearchBtn"), "btnFail") }, t.prototype.showMoreFilters = function() { var n = this;
				$("#mapSearchMoreCon").lightbox_me({ centered: !0, onLoad: function() { $("#mapSearchMoreCon").toggleClass("show", !0);
						$("#mapMoreSearchTxt").keypress(function(n) { if (n.keyCode == 13) return $("#mapMoreFiltersSearchBtn").click(), !1 });
						$("#mapMoreSearchTxt").blur() } });
				n.updateFilterOrdering(n.CurrentSearchMode(), !1);
				n.moreFiltersOpen = !0 }, t.prototype.closeMoreFilters = function() { var n = this;
				$("#mapSearchMoreCon").toggleClass("show", !1);
				$("#mapSearchMoreCon").trigger("close");
				DropDown.updateMainSearchFilterPlaceholders($("#mapSearchInputCon"));
				n.moreFiltersOpen = !1 }, t.prototype.toggleFilters = function(n) { var t, i;
				n === void 0 && (n = !1);
				t = this;
				$("#mapFiltersIcon, #mapFiltersIconClose").addClass("filterIconFlip");
				ToolTip.closeAll();
				i = $("#mapSearchFiltersCon").hasClass("show") && n == !1;
				i ? (t.isMapView && ($("#MapLegalFooter").show(), $(".pageContentCon").css("overflow", "")), $("#mapSearchFiltersCon").removeClass("show"), $("#mapFiltersLabelCon").text(Translation.get("Filters")), $("#mapFiltersIcon").show(), $("#mapFiltersIconClose").hide(), $("#mapSearchFilterButtonConFixed").addClass("hide"), window.setTimeout(function() { $("#mapListMapViewCon, #mapHeaderResultsLabelCon").removeClass("hidden");
					$("body").css("overflow", "initial") }, 320)) : ($("#MapLegalFooter").hide(), $(".pageContentCon").css("overflow", "visible"), $("#mapSearchFiltersInnerCon").addClass("disableAnimation"), $("#mapSearchFiltersCon").addClass("show"), $("#mapSearchFiltersCon").scrollTop(0), $("#mapFiltersLabelCon").text(Translation.get("Close")), $("#mapFiltersIcon").hide(), $("#mapFiltersIconClose").show(), $("#mapSearchFilterButtonConFixed").removeClass("hidden"), $("#mapListMapViewCon, #mapHeaderResultsLabelCon").addClass("hidden"), window.setTimeout(function() { $("#mapSearchFiltersInnerCon").removeClass("disableAnimation") }, 300)) }, t.prototype.updateFilter = function(n, t) { n.show().appendTo(t).toggleClass("active", !0) }, t.prototype.toggleSearchControlEnabled = function(n) { n ? $(".paginationLink, .ddlResultsPages, .ResultsPaginationCon, #sortResults, #ddlListResultsSort, #mapSideBarToggleCon").removeAttr("disabled") : $(".paginationLink, .ddlResultsPages, .ResultsPaginationCon, #sortResults, #ddlListResultsSort, #mapSideBarToggleCon").attr("disabled", "true") }, t.prototype.search = function(n, t, i) { var r, s; if (i === void 0 && (i = !1), r = this, r.map == null) { Logging.Debug("Map search being skipped since map has not yet been initialized", LogType.Map); return } if (FormValidation.validateForm($("#mapSearchFiltersCon")) == !1) this.toggleFilters(!0), window.setTimeout(function() { $("#mapSearchFiltersCon").animate({ scrollTop: $("#mapSearchFiltersCon").scrollTop() + $(".validationFailedMessage").offset().top - $("#mapFilterOuterCon").outerHeight(!0) - $("#header").outerHeight(!0) - 60 }) }, 200);
			else if ($("#mapSearchFiltersCon, #mapSearchInputHeader").find("input, select").is(":focus") == !1) { var f = ["view", "SearchName"],
				h = r.setBestViewOnNextSearch == !1,
				e = [],
				u = n || r.getCurrentCriteria(h),
				o = u.IndividualId != null || u.OrganizationId != null || u.ReferenceNumber != null; if (o && (f.push("Center"), f.push("ZoomLevel"), f.push("IncludePins")), r.currentMapBounds != null && (o || r.currentMapBounds.equals(r.map.getBounds())) && ObjectCompare.areEqual(r.currentResultsCriteria, u, f, e)) { Logging.Debug("Map search being skipped bounds same as last search", LogType.Map);
				o && (r.updateMapPins(r.currentResults.Pins), r.currentResultsCriteria.ZoomLevel = u.ZoomLevel, r.currentResultsCriteria = r.UpdateCriteriaMapBounds(r.currentResultsCriteria), delete r.currentResultsCriteria.LatitudeMax, delete r.currentResultsCriteria.LatitudeMin, delete r.currentResultsCriteria.LongitudeMax, delete r.currentResultsCriteria.LongitudeMin, r.updatePageHash(r.currentResultsCriteria), r.setControlsValsFromHash()); return } if (e.length > 0 && Logging.Debug("Map criteria has new value for property: " + e[0], LogType.Map), s = r.currentResultsCriteria != null && !ObjectCompare.areEqual(r.currentResultsCriteria, u, ["CurrentPage", "view", "Center"]), s && ($("#txtPage").val("1"), u.CurrentPage = "1"), r.blockPinClicks = !0, $("#listInnerCon").addClass("loadingOut"), r.currentMapBounds = r.map.getBounds(), r.searchIsRunning !== null && (clearTimeout(this.searchIsRunning), r.searchIsRunning = null), r.toggleSearchControlEnabled(!1), setApplicationMode(u.PropertyTypeGroupID == "1" ? ApplicationModes.Residential : ApplicationModes.Commercial), ObjectCompare.areEqual(r.currentResultsCriteria, u) && r.realtorSearch == !1) { Logging.Debug("Map search is the same as previous, skipping"); return } r.updatePageHash(u);
				r.setControlsValsFromHash();
				r.refreshNumberOfNonDefaultSecondaryFilters();
				this.searchIsRunning = setTimeout(function() { var n, i, t;
					Logging.Debug("Map search firing", LogType.Map);
					r.maintainSearchText == !1 && $("#txtMapSearchInput").val() != "" && $("#txtMapSearchInput").val("");
					r.maintainSearchText == !1 && $("#mapMoreSearchTxt").val() != "" && $("#mapMoreSearchTxt").val("");
					n = Object.assign({}, u);
					r.currentResultsCriteria = n;
					r.maintainSearchText = !1;
					i = function() {};
					t = function(n) { var t, i, u, f; if (r.mapHasNoneZeroBounds() && (r.previousMapBounds = r.map.getBounds()), t = [], n.Paging.TotalRecords > 0) { for (i = 0, u = n.Results; i < u.length; i++) f = u[i], t.push(new ListingCardModel(f));
						$(".showOnResults").removeClass("hide");
						$(".showOnNoResults").addClass("hide") } else $(".showOnResults").addClass("hide"), $(".showOnNoResults").removeClass("hide");
						r.toggleSearchControlEnabled(!0);
						r.blockPinClicks = !1;
						r.currentResults = n;
						r.updateMapView(n);
						r.loadListViewResults = function() { r.updateListView(t, n.Paging);
							r.loadListViewResults = null };
						r.updateSidebarResults(t, n.Paging);
						r.initializeMarkerClusterer();
						r.updateMapPins(n.Pins);
						PinInfoBoxHelper.hideInfoBox();
						r.runAfterNextSearch != null && (r.runAfterNextSearch(), r.runAfterNextSearch = null);
						r.setBestViewOnNextSearch ? (window.setTimeout(function() { r.polygon == null ? (r.clusterer.fitMapToMarkers(), r.map.setZoom(r.map.getZoom() - 1), window.setTimeout(function() { r.updateMapPins(n.Pins) }, 100)) : (r.map.fitBounds(Utilities.getPolygonBounds(r.polygon)), r.map.setZoom(r.map.getZoom()));
							$("#txtView").val() == "list" && (r.showListView(), ScrollToElement($("#listViewCon"), ($("#header").outerHeight() + 10) * -1)) }, 130), r.setBestViewOnNextSearch = !1) : $("#txtView").val() == "list" && (r.showListView(), ScrollToElement($("#listViewCon"), ($("#header").outerHeight() + 10) * -1));
						r.switchToListViewOnNextSearch && (r.switchToListViewOnNextSearch = !1, r.showListView()) };
					$("#listViewInnerCon").addClass("loadingOut");
					r.listViewResultsAreOutdated = !0;
					u = r.cleanupSearchCriteria(u);
					r.skipNextSearch == !1 && APIProxy.propertySearch(u, t, null, null, !0, "MapSearch");
					r.skipNextSearch = !1 }, this.getMapSearchCooldown(t)) } }, t.prototype.cleanupSearchCriteria = function(n) { return n = this.UpdateCriteriaFavouriteIds(n), n.RecordsPerPage = "12", delete n.SearchName, delete n.view, delete n.Center, ((n.IndividualId || "") != "" || (n.OrganizationId || "") != "" || (n.ReferenceNumber || "") != "") && delete n.PropertyTypeGroupID, n }, t.prototype.updateMapPins = function(n) { var t = this;
				t.pins = [];
				t.clusterer != null && t.clusterer.clearMarkers();
				n != null && (n.forEach(function(n) { var i = MapPinHelper.createPin(n);
					t.pins.push(i) }), t.clusterer != null && (t.clusterer.addMarkers(t.pins, !1), callAfterAnimationEnd($(".mapPin"), function() { $(".mapPin").removeClass("fade") }), MapPinHelper.refreshFavoritePins(t.clusterer, t.pins))) }, t.prototype.updateListView = function(n, t) { var i = this;
				(!0 || i.listViewResultsAreOutdated) && (i.listViewResultsAreOutdated = !1, $("#listInnerCon").removeClass("loadingOut"), n.length > 0 ? (TemplateFetcher.fetchListingCard(function(t) { for (var r = "", i = 0; i < n.length; i++) r += '<div class="cardCon">' + TemplateBinding.fillTemplateValues($(t.ControlHTML), n[i]) + "<\/div>";
					$("#listInnerCon").html(r);
					updateLoadedContent($("#listInnerCon"));
					setUniformHeightsForLargeListingCards("#listInnerCon") }), ApplicationState.Current.Controls.ListViewPagination_Top.refreshUI(t), ApplicationState.Current.Controls.ListViewPagination_Bottom.refreshUI(t)) : ($("#listInnerCon").html("<div style='padding: 50px; text-align: center;'>" + Translation.get("NoResultsRefineCriteria") + "<\/div>"), $("#listViewSortCon, #mapPageListViewPagination").hide())) }, t.prototype.showMapView = function() { var n, t;
				Logging.Debug("Show Map View", LogType.Map);
				n = this;
				n.isMapView = !0;
				$("#chkMapView").is(":checked") && $("#chkMapView").prop("checked", !1);
				$("#mapOuterCon").show();
				$("#listCon, #ListViewPagination_TopCon").hide();
				$("#txtView").val("map");
				t = this.getCurrentCriteria();
				this.updatePageHash(t);
				n.resizeMapHeight();
				window.setTimeout(function() { google.maps.event.trigger(n.map, "idle") }, 1e3);
				this.handleViewToggleChanged("map");
				ApplicationState.Current.Controls.LocalLogicSchoolsCtrl.toggleCallout(!0) }, t.prototype.showListView = function() { this.loadListViewResults != null && this.loadListViewResults();
				$("#chkMapView").is(":checked") == !1 && $("#chkMapView").prop("checked", !0);
				this.isMapView = !1;
				$("#mapOuterCon").hide();
				$("#listCon, #ListViewPagination_TopCon").show();
				updateLoadedContent($("#listInnerCon"));
				setUniformHeightsForLargeListingCards("#listInnerCon");
				$("#txtView").val("list"); var n = this.getCurrentCriteria();
				this.updatePageHash(n);
				$("#listInnerCon").removeClass("loadingOut");
				ApplicationState.UserIsSignedIn && Gigya.mapViewChangeConfirmation("l");
				this.handleViewToggleChanged("list");
				ApplicationState.Current.Controls.LocalLogicSchoolsCtrl.toggleCallout(!1) }, t.prototype.updateMapView = function(n) { $("#mapResultsNumVal, #mapNoSidebarResultsCon_Num, #listViewResultsNumVal").text(n.Paging.TotalRecords.toLocaleString(ApplicationState.LanguageAttribute));
				$("#mapSideBarListingsTotalNum").text(n.Paging.TotalRecords.toLocaleString(ApplicationState.LanguageAttribute));
				$("#mapSideBarListingsStartNum").text(((n.Paging.CurrentPage - 1) * n.Paging.RecordsPerPage + 1).toLocaleString(ApplicationState.LanguageAttribute));
				$("#mapSideBarListingsEndNum").text(Math.min(n.Paging.TotalRecords, n.Paging.CurrentPage * n.Paging.RecordsPerPage).toLocaleString(ApplicationState.LanguageAttribute)); var t = n.Paging.TotalRecords > 0;
				$("#mapHeaderResultsNoResultsCon, #ListViewNoResults").toggle(t == !1) }, t.prototype.initializeMarkerClusterer = function() { if (this.clusterer == null) { var n = this;
				this.clusterer = new MarkerClusterer(this.map, [], { minimumClusterSize: 1, maxZoom: 21, gridSize: 70, styles: [{ url: "/wp-content/plugins/adk_feed/assets/images/pin-filled-purple.svg", width: 30, height: 30, textColor: "#ffffff", textSize: 12, anchor: [5, 0], "class": "pinSize1" }, { url: "/wp-content/plugins/adk_feed/assets/images/pin-filled-purple.svg", width: 40, height: 40, textColor: "#ffffff", textSize: 12, anchor: [9, 0], "class": "pinSize2" }, { url: "/wp-content/plugins/adk_feed/assets/images/pin-filled-purple.svg", width: 50, height: 50, textColor: "#ffffff", textSize: 12, anchor: [12, 0], "class": "pinSize3" }], favstyles: [{ url: "/wp-content/plugins/adk_feed/assets/images/pin-filled-red.svg", width: 30, height: 30, textColor: "#ffffff", textSize: 12, anchor: [5, 0], "class": "pinSize1,favouritePin" }, { url: "/wp-content/plugins/adk_feed/assets/images/pin-filled-red.svg", width: 40, height: 40, textColor: "#ffffff", textSize: 12, anchor: [9, 0], "class": "pinSize2,favouritePin" }, { url: "/wp-content/plugins/adk_feed/assets/images/pin-filled-red.svg", width: 50, height: 50, textColor: "#ffffff", textSize: 12, anchor: [12, 0], "class": "pinSize3,favouritePin" }], onclick: function(t) { n.pinClicked(t, n) }, onmouseenter: function(t) { n.pinMouseEnter(t, n) }, onmouseexit: function(t) { n.pinMouseExit(t) } }) } }, t.prototype.getPinSearchCriteria = function(n, t) { var i = t; return delete i.CurrentPage, (n.key || "") != "" ? i.GroupKey = n.key : (n.listings || "") != "" && (i.ListingIds = n.listings), i.MaxRecords = "10", i }, t.prototype.pinMouseExit = function() {
				(this.PinPaginationDropdownOpen || !1) == !1 && PinInfoBoxHelper.hideInfoBox_Timed() }, t.prototype.pinMouseEnter = function(n, t) { var u = this,
				r, i;
				this.currentCluster = n;
				r = t.getCurrentCriteria();
				i = t.getPinSearchCriteria(n, r);
				i.CurrentPage = "1";
				this.currentPinCriteria = i;
				PinInfoBoxHelper.showInfoBox_Timed(n, t.map, t.mapOverlay, i, function() { u.updateInfoBoxPagination(Number(i.CurrentPage)) }) }, t.prototype.pinClicked = function() { return }, t.prototype.updateSidebarResults = function(n, t) { var i = this;
				$("#mapSideBarToggleCon").show();
				TemplateFetcher.fetchSmallListingCard(function(r) { for (var f = "", u = 0; u < n.length; u++) f += '<div class="cardCon">' + TemplateBinding.fillTemplateValues($(r.ControlHTML), n[u]) + "<\/div>";
					$("#mapSidebarBodyCon").html(f);
					$("#mapSidebarBodyCon .smallListingCardPropertyNotMapped").show();
					$("#mapSidebarBodyCon").scrollTop(0);
					Favourite.refreshIcons($("#mapSidebarBodyCon"));
					Note.refreshIcons($("#mapSidebarBodyCon"));
					$("#mapSidebarBodyCon .smallListingCard").mouseenter(function() { if ($(this).find(".smallListingCardNoAddress").text() == "false") { $(this).addClass("highlight"); var t = $(this).attr("data-value"),
						n = t.split("_"),
						r = n[0],
						u = n[1],
						f = n[2];
						DesktopMapHelper.highlightPushpin(r, u, f, i.clusterer, i.pins) } }).mouseleave(function() { $(this).removeClass("highlight"); var f = $(this).attr("data-value"),
						n = f.split("_"),
						t = n[0],
						r = n[1],
						u = n[2],
						e = MapPinHelper.getMarkerById(t, r, u, i.pins, i.clusterer);
						DesktopMapHelper.unhighlightPushpin(t, r, u, i.clusterer, i.pins) });
					ApplicationState.Current.Controls.SideBarPagination.refreshUI(t) }) }, t.prototype.resetFilters = function(n, t) { resetInputControls(n, t) }, t.prototype.mapHasNoneZeroBounds = function() { if (this.map != null) { var n = this.map.getBounds(); if (n != null) return n.toSpan().lng() != 0 && n.toSpan().lat() != 0 } return !0 }, t.prototype.getMapSearchCooldown = function(n) { var t = 0,
				i; return (n || !1) == !0 ? t = 0 : (i = (new Date).getTime(), this.lastSearchTime ? (t = i - this.lastSearchTime > ApplicationConfig.MapSearchSpeedInterval ? ApplicationConfig.MapSearchWaitTimeShort : ApplicationConfig.MapSearchWaitTimeLong, this.lastSearchTime = i) : (this.lastSearchTime = i, t = 0)), Logging.Debug("Search cooldown of " + t + " ms", LogType.Map), t }, t.prototype.updatePageHash = function(n) { var t = $.param(n),
				i = window.location.href.split("#")[0] + "#" + t;
				history.replaceState("", document.title, i) }, t.prototype.setMapViewViaSubAreaResult = function(n) { var r = this,
				t = this,
				u = t.isMapView == !1,
				i;
				$("#txtMapSearchInput, #mapMoreSearchTxt").val(n.Location);
				i = function() { if (n.ZoomLevel == null || isNaN(n.ZoomLevel)) { var i = new google.maps.LatLng(n.Latitude - n.Height / 2, n.Longitude - n.Width / 2),
					u = new google.maps.LatLng(n.Latitude + n.Height / 2, n.Longitude + n.Width / 2),
					f = new google.maps.LatLngBounds(i, u);
					t.map.fitBounds(f);
					google.maps.event.trigger(r.map, "idle") } else t.map.setCenter(new google.maps.LatLng(n.Latitude, n.Longitude)), t.map.setZoom(n.ZoomLevel), google.maps.event.trigger(r.map, "idle") };
				u ? (t.showMapView(), window.setTimeout(function() { i();
					t.switchToListViewOnNextSearch = !0 }, 200)) : i() }, t.prototype.loadDropDowns = function() { var n = this;
				DropDown.loadSelect2($("#sortResults, #ddlListResultsSort"), { closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", width: "215px" });
				DropDown.loadSelect2($("#ddlPropertyTypeCom, #ddlPropertyTypeRes"), { closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon" });
				$("#ddlPropertyType").val("").trigger("change");
				$("#ddlPropertyTypeRes").val("1").trigger("change");
				$("#ddlPropertyTypeCom").val("0").trigger("change");
				DropDown.loadSelect2($("#ddlFarmTypeTop, #ddlParkingTypeTop, #ddlZoningTypeTop"), { allowClear: !1, placeholderText: Translation.get("AnyDropDownTerm"), closeOnSelect: !1, containerCssClass: "homeTopFilter", dropdownCssClass: "homeTopFilterItemsCon", stopOpenOnClear: !0, multiSelectWithoutTags: !0 });
				DropDown.loadSelect2($("#ddlBedsTop, #ddlBathsTop, #ddlNumberOfUnitsTop, #ddlBuildingSpaceTop,  #ddlLandSizeTop, #ddlTransactionTypeTopCom, #ddlTransactionTypeTopRes"), { allowClear: !1, closeOnSelect: !0, clearOnDefaultValue: !0, containerCssClass: "mapTopFilter", dropdownCssClass: "homeTopFilterItemsCon", stopOpenOnClear: !0 });
				DropDown.loadSelect2($("#ddlMinPriceTop, #ddlMaxPriceTop"), { allowClear: !1, containerCssClass: "mapTopFilter", dropdownCssClass: "homeTopFilterItemsCon", tags: !0, maximumInputLength: 8, clearOnDefaultValue: !0, createTag: function(n) { return n.term.match(/[^\d]/) ? null : { id: n.term, text: Number(n.term).toLocaleString(ApplicationState.LanguageAttribute) } } });
				DropDown.loadSelect2($("#ddlMinRentTop, #ddlMaxRentTop"), { allowClear: !1, containerCssClass: "mapTopFilter", dropdownCssClass: "homeTopFilterItemsCon", tags: !0, maximumInputLength: 5, clearOnDefaultValue: !0, createTag: function(n) { return n.term.match(/[^\d]/) ? null : { id: n.term, text: Number(n.term).toLocaleString(ApplicationState.LanguageAttribute) } } });
				DropDown.loadSelect2($("#ddlMaxPrice, #ddlMinPrice"), { allowClear: !1, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", tags: !0, maximumInputLength: 8, createTag: function(n) { return n.term.match(/[^\d]/) ? null : { id: n.term, text: Number(n.term).toLocaleString(ApplicationState.LanguageAttribute) } } });
				DropDown.loadSelect2($("#ddlMinRent, #ddlMaxRent"), { allowClear: !1, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", tags: !0, maximumInputLength: 5, createTag: function(n) { return n.term.match(/[^\d]/) ? null : { id: n.term, text: Number(n.term).toLocaleString(ApplicationState.LanguageAttribute) } } });
				DropDown.loadSelect2($("#ddlFarmType, #ddlParkingType, #ddlZoningType"), { allowClear: !0, closeOnSelect: !0, dropdownCssClass: "homeFilterItemsCon", containerCssClass: "homeFilter", stopOpenOnClear: !0, multiSelectWithoutTags: !0, tags: !1, placeholderText: "0 " + Translation.get("ItemsSelectedSingular"), width: "100%" });
				DropDown.loadSelect2($("#mapSearchMoreFiltersInnerCon select").not(".select2-hidden-accessible"), { tags: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", allowSearch: !1 });
				DropDown.loadSelect2($("#txtKeywords"), { tags: !0, allowClear: !0, containerCssClass: "homeFilter keywordsFilter", dropdownCssClass: "homeFilterItemsCon", maximumSelectionLength: 5, language: { maximumSelected: function() { return Translation.get("KeywordTooMany") }, noResults: function() { return "" } }, maximumInputLength: 30, tokenSeparators: [","], placeholderText: Translation.get("KeywordsPlaceholder") });
				DropDown.defaultCustomAdapterDefinition();
				DropDown.loadSelect2($("#ddlBuildingAttachmentStyle"), { width: "100%", placeholderText: "0 " + Translation.get("ItemsSelectedSingular"), customSelectionAdapter: $.fn.select2.amd.require("CustomSelectionAdapter"), customTemplateSelection: function() { var n = $("#ddlBuildingAttachmentStyle").find(":selected").length,
						t = Translation.get("ItemsSelectedSingular"); return n > 1 && (t = Translation.get("ItemsSelected")), n + " " + t }, customDropDownAdapter: $.fn.select2.amd.require("CustomDropdownAdapter") });
				$("#ddlMinPriceTop").on("change", function() { minValueChanged($("#ddlMaxPriceTop"), $("#ddlMinPriceTop"), n.detachedOptions) });
				$("#ddlMaxPriceTop").on("change", function() { maxValueChanged($("#ddlMinPriceTop"), $("#ddlMaxPriceTop"), n.detachedOptions) });
				$("#ddlMinRentTop").on("select2:select change", function() { minValueChanged($("#ddlMaxRentTop"), $("#ddlMinRentTop"), n.detachedOptions) });
				$("#ddlMaxRentTop").on("change", function() { maxValueChanged($("#ddlMinRentTop"), $("#ddlMaxRentTop"), n.detachedOptions) });
				$("#ddlMinPrice").on("select2:select change", function() { minValueChanged($("#ddlMaxPrice"), $("#ddlMinPrice"), n.detachedOptions) });
				$("#ddlMaxPrice").on("select2:select change", function() { maxValueChanged($("#ddlMinPrice"), $("#ddlMaxPrice"), n.detachedOptions) });
				$("#ddlMinRent").on("select2:select change", function() { minValueChanged($("#ddlMaxRent"), $("#ddlMinRent"), n.detachedOptions) });
				$("#ddlMaxRent").on("select2:select change", function() { maxValueChanged($("#ddlMinRent"), $("#ddlMaxRent"), n.detachedOptions) }) }, t.prototype.clearHiddenFilters = function() { $("#txtIndividualId").val("").change();
				$("#txtSearchName").val("").change();
				$("#txtOrganizationId").val("").change();
				$("#txtReferenceNumber").val("").change() }, t.prototype.subAreaSearch = function(n, t, i, r) { var u = n,
				f = this,
				e, o;
				u.trim() != "" && (f.clearHiddenFilters(), e = function(n) { var r, e;
					n != null && n.SubArea != null && (n.SubArea.length > 0 ? (f.maintainSearchText = !0, n.SubArea.length > 1 && (r = new ControlFetcherArgs("DisambiguationBox"), r.postCallHandler = function(n) { $.featherlight($(n.d), { closeIcon: "<img style='height:20px;' src='/wp-content/plugins/adk_feed/assets/images/x-gray.svg' alt='' />" }) }, ControlFetcher.fetchDisambiguationBox(r, { area: u })), e = n.SubArea[0], f.setMapViewViaSubAreaResult(e), i != null && i()) : showMessage(Translation.get("NoResults")));
					t != null && t() }, o = function(n) { var t, i;
					n.Results.length == 0 ? (t = { Area: u }, APIProxy.subAreaSearch(t, e)) : n.Results.length == 1 ? (i = Utilities.ConvertModelessListingDetailsURL(n.Results[0].RelativeDetailsURL), r != null && r(), Core.GoToPage(i)) : n.Results.length > 1 && ($("#txtReferenceNumber").val(u).change(), r != null && r(), f.search()) }, u.trim().indexOf(" ") > -1 ? APIProxy.subAreaSearch({ Area: u }, e) : APIProxy.propertySearch({ ReferenceNumber: u, IncludeTombstones: "1", IncludePins: "1" }, o)) }, t.prototype.IsInSavedSearchMode = function() { return $("#txtSearchName").val() != "" }, t.prototype.CleanSavedSearchParams = function(n) { return delete n.FavouriteListingIds, n.SortBy && n.SortOrder && ($("#sortResults option[value=" + n.SortBy + "-" + n.SortOrder + "]").length === 1 && (n.Sort = n.SortBy + "-" + n.SortOrder), delete n.SortBy, delete n.SortOrder), n }, t.prototype.UpdateCriteriaMapBounds = function(n) { var t = this.map.getBounds(); return this.mapHasNoneZeroBounds() == !1 && this.previousMapBounds != null ? (Logging.Debug("Map bounds are blank (map idle event fired without the map being visible), so using previous good bounds", LogType.Map), n.LatitudeMin = this.previousMapBounds.getSouthWest().lat().toFixed(7), n.LatitudeMax = this.previousMapBounds.getNorthEast().lat().toFixed(7), n.LongitudeMin = this.previousMapBounds.getSouthWest().lng().toFixed(7), n.LongitudeMax = this.previousMapBounds.getNorthEast().lng().toFixed(7), n.ZoomLevel = this.map.getZoom().toString(), n.Center = this.map.getCenter().lat() + "," + this.map.getCenter().lng()) : t != null && (n.LatitudeMin = t.getSouthWest().lat().toFixed(7), n.LatitudeMax = t.getNorthEast().lat().toFixed(7), n.LongitudeMin = t.getSouthWest().lng().toFixed(7), n.LongitudeMax = t.getNorthEast().lng().toFixed(7), n.ZoomLevel = this.map.getZoom().toString(), n.Center = this.map.getCenter().lat() + "," + this.map.getCenter().lng()), n }, t.prototype.UpdateCriteriaFavouriteIds = function(n, t) { var r, i; return t === void 0 && (t = null), r = n.IndividualId != null || n.OrganizationId != null || n.ReferenceNumber != null ? Favourite.getAll(t || ApplicationState.CurrentMode, null, !0) : Favourite.getAll(t || ApplicationState.CurrentMode), r.length > 0 && (i = "", r.forEach(function(n) { i += n.id + "," }), i = Utilities.trimEnd(i, ","), n.favouritelistingids = i), n }, t.prototype.getCurrentCriteria = function(n) { var t, r, u, i; return n === void 0 && (n = !0), t = new MapCriteria, t = WebControl.getValuesFromControlsAsObject(["hiddenMapFields", "listViewSortCon"], !1), t = this.CleanSavedSearchParams(t), t.IndividualId == null && t.OrganizationId == null && t.ReferenceNumber == null ? (r = WebControl.getValuesFromControlsAsObject(["mapSearchMoreFiltersInnerCon"], !1, function(n) { return n.parents(".mapMoreFilterCon").hasClass("active") }), $.extend(t, r)) : delete t.PropertyTypeGroupID, t = this.UpdateCriteriaMapBounds(t), this.realtorSearch = !1, t.OpenHouse == "1" && (u = new Date, i = new Date, i.setDate(i.getDate() + 7), t.OpenHouseStartDate = dateToString(u), t.OpenHouseEndDate = dateToString(i)), t.PropertySearchTypeId == "3" && (t.OwnershipTypeGroupId = "2"), (t.ReferenceNumber || "") != "" && (t.PropertyTypeGroupID = "3", delete t.PropertySearchTypeId), (n == !1 || t.IndividualId != null || t.OrganizationId != null || t.ReferenceNumber != null) && (delete t.LatitudeMin, delete t.LatitudeMax, delete t.LongitudeMin, delete t.LongitudeMax), (t.IndividualId != null || t.OrganizationId != null || t.ReferenceNumber != null) && (t.IncludePins = "1"), t }, t.prototype.setConsumerPreferences = function() { var t = this,
				n = LocalAccountStorage.ViewPrefCP.getObject();
				n != null && n.Res_View != null && ($("#sortResults, #ddlListResultsSort").val(n.Res_View.sortBy).change(), n.Res_View.viewOn == "l" && ($("#txtView").val("list").change(), ApplicationState.Current.Controls.LocalLogicSchoolsCtrl.toggleCallout(!1))) }, t.mapInitialized = "mapInitialized", t }(WebPage);
			n.Map = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
MapCriteria = function(n) {
	function t() { return n !== null && n.apply(this, arguments) || this } return __extends(t, n), t }(APICriteria.PropertySearchCriteria);
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, null, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { var n = this }, t.prototype.registerEventHandlers = function() { var n = this,
				t;
				$(".startSearchButton").click(function() { n.ErrorSearch() });
				$("#nf_search_input").keypress(function(t) { t.which == 13 && (t.preventDefault(), n.ErrorSearch()) });
				t = $("html").attr("lang") == "en" ? 2 : 1;
				$(".toggleOption").attr("href", "/Mls?CultureId=" + t) }, t.prototype.ErrorSearch = function() { var t = this,
				n = $("#nf_search_input").val();
				Core.GoToPage(RouteHelper.getURL("map") + "#Area=" + n + "&ApplicationId=1&RecordsPerPage=9&Page=1") }, t }(WebPage);
			n.Mls = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.firstName = "", r.lastName = "", r.moreAboutYouCondition = !1, r.socialTermsCondition = !1, r.revisedTermsCondition = !1, r.Buyer = "", r.Buyer_Com = "", r.CREA_mail_updates = !1, r.REALTOR_mail_updates = !1, r.currentSection = "", r.NotificationsEnabled = !1, r.FavNotificationsEnabled = !1, r.CompareNotificationsEnabled = !1, r.SavedSearchNotificationsEnabled = !1, r.unsubscribeLink = "", r.HashUID = "", r.savedSearches = [], r.detachedOptions = {}, r.init(), r } return __extends(i, t), i.prototype.loadModel = function(t) { this.firstName = t.firstName;
				this.lastName = t.lastName;
				this.moreAboutYouCondition = t.moreAboutYouCondition;
				this.revisedTermsCondition = t.revisedTermsCondition;
				this.socialTermsCondition = t.socialTermsCondition;
				this.LoginProviderType = JSON.parse(t.LoginProviderTypeJSON);
				this.user = t.user;
				this.Interested = t.Interested;
				this.Interested_Com = t.Interested_Com;
				this.Buyer = t.Buyer;
				this.CREA_mail_updates = t.CREA_mail_updates;
				this.REALTOR_mail_updates = t.REALTOR_mail_updates;
				this.NotificationsEnabled = t.NotificationsEnabled;
				this.FavNotificationsEnabled = t.FavNotificationsEnabled;
				this.CompareNotificationsEnabled = t.CompareNotificationsEnabled;
				this.SavedSearchNotificationsEnabled = t.SavedSearchNotificationsEnabled;
				this.unsubscribeLink = t.unsubscribeLink;
				this.HashUID = t.HashUID;
				n.MyProfile.instance = this }, i.prototype.render = function() { var i = this,
				n = this,
				r, t;
				$("body").css("overflow", "auto");
				this.detachedOptions = {};
				n.ConsumerUser = new ConsumerProfile.Consumer(n);
				AccountSessionStorage.CREAMailUpdates_Profile.save(String(n.CREA_mail_updates));
				AccountSessionStorage.REALTORMailUpdates_Profile.save(String(n.REALTOR_mail_updates));
				ConsumerProfile.UserAccountSettings.CREA_mail_updates = n.CREA_mail_updates;
				ConsumerProfile.UserAccountSettings.REALTOR_mail_updates = n.REALTOR_mail_updates;
				ConsumerProfile.UserAccountSettings.UserHashId = n.ConsumerUser.HashUID;
				Gigya.DrawDialogs(n.ConsumerUser);
				URLHash.get("section", "") != "" && (r = Utilities.formatAccountSection(URLHash.get("section")), $("#lnk" + r).click());
				n.setDefaults(n.ConsumerUser, this);
				n.setModeTabs(ApplicationState.CurrentMode);
				this.updateLeaseRentLabel();
				this.updateFilters(!1);
				t = new GetAccountFromBOLCallbackArgs;
				t.page = this;
				t.functionCalls = function() { i.loadSearches();
					i.loadSearchesIntoListView(i.savedSearches, "myNotificationsListResTab", 1) };
				Gigya.GetAccountFromBOL(ApplicationConfig.GigyaSyncRealTime, !1, t);
				$("#AccountKeywordToolTip, #AccountKeywordToolTipCom").qtip({ content: Translation.get("KeywordTip") }) }, i.prototype.registerEventHandlers = function() { var n = this;
				initListedSince($("#dteListedSince,#dteListedSinceCom"));
				$.each(AccountPages, function(t, i) { $("#my" + i + "Form :input").change(function() { $("#my" + i + "Form").data("changed", !0) });
					$("#lnk" + i).checkExists().click(function() { return n.showProfileSection(), Utilities.formatAccountSection(URLHash.get("section")) != i && URLHash.set("section", i, !1), n.hideAllSections(), Utilities.formatAccountSection(URLHash.get("section")) == i && ($("#" + i).fadeIn(500), $("html, body").animate({ scrollTop: 0 }, "fast")), n.updateFilters(!1), n.setFormState(i), n.updateMenu(i), $("#my" + i + "Form").data("changed", !1), !1 }) });
				DropDown.loadSelect2($("#myAccountInformationForm select, #myCommunicationsForm select, #mySearchCriteriaForm select, #ResultsView select, #Calculators select, #Notifications select"), { tags: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon" });
				DropDown.loadSelect2($("#txtKeywords, #txtKeywordsCom"), { tags: !0, allowClear: !0, containerCssClass: "homeFilter keywordsFilter", dropdownCssClass: "homeFilterItemsCon", maximumSelectionLength: 5, language: { maximumSelected: function() { return Translation.get("KeywordTooMany") }, noResults: function() { return "" } }, maximumInputLength: 30, tokenSeparators: [","], placeholderText: Translation.get("KeywordsPlaceholder") });
				DropDown.loadSelect2($("#ddlFarmType, #ddlFarmTypeCom, #ddlParkingType, #ddlParkingTypeCom, #ddlZoningType, #ddlZoningTypeCom, #ddlBuildingAttachmentStyle, #ddlBuildingAttachmentStyleCom"), { allowClear: !1, closeOnSelect: !1, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", stopOpenOnClear: !0, multiSelectWithoutTags: !0 });
				DropDown.loadSelect2($("#ddlMaxPrice, #ddlMinPrice, #ddlMinRent, #ddlMaxRent, #ddlMaxPriceCom, #ddlMinPriceCom, #ddlMinRentCom, #ddlMaxRentCom"), { allowClear: !1, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", tags: !0, createTag: function(n) { return n.term.match(/[^\d]/) ? null : { id: n.term, text: Number(n.term).toLocaleString(ApplicationState.LanguageAttribute) } } });
				$(window).on("hashchange", function(t) { var i = t.originalEvent,
					u, r;
					i.oldURL.indexOf("section") > -1 && i.newURL.indexOf("section") == -1 ? u = Utilities.getObjectFromQueryString(i.oldURL.substring(i.oldURL.indexOf("#"))).section : i.oldURL.indexOf("section") == -1 && i.newURL.indexOf("section") > -1 && (r = URLHash.get("section", ""), r != "" && (n.hideAllSections(), n.updateMenu(r), $("#" + r).show())) });
				$("#lnkMyAccountPageBack").click(function() { Utilities.backLogic() });
				$("#lnkMyAccountSignOut").click(function() { var n = new LogoutCallbackArgs; return n.DT = DisplayType.Tempbox, Gigya.Logout(n), !1 });
				$("#ddlProfileCountry").change(function() { n.changeCountry() });
				$("#mySearchCriteriaResTab").click(function() { n.setModeTabs(1);
					n.updateFilters(!1) });
				$("#mySearchCriteriaComTab").click(function() { n.setModeTabs(2);
					n.updateFilters(!1);
					n.updateLeaseRentLabel() });
				$("#ddlProfilePropertyType, #ddlProfilePropertyTypeCom").change(function() { n.updateFilters() });
				$("#ddlProfileTransactionType").change(function() { n.updateFilters(!1);
					n.resetFilters($("#mySearchCriteriaFormResTab .priceFilterCon")) });
				$("#ddlProfileTransactionTypeCom").change(function() { n.updateFilters(!1);
					n.resetFilters($("#mySearchCriteriaFormComTab .priceFilterCon")) });
				$("#ddlBuildingType, #ddlBuildingTypeCom").change(function() { var t;
					$("#buildingType").is(":visible") && (n.detachedOptions != null && n.detachedOptions.ddlBuildingAttachmentStyle != null && $("#ddlBuildingAttachmentStyle").append(n.detachedOptions.ddlBuildingAttachmentStyle), $("#buildingAttachmentStyle").show(), t = $("#ddlBuildingType").val(), t == "" || t != "1" && t != "16" ? $("#buildingAttachmentStyle").hide() : (n.detachedOptions.ddlBuildingAttachmentStyle = $('#ddlBuildingAttachmentStyle option[parentid!="' + t + '"]').detach(), $('#ddlBuildingAttachmentStyle option[parentid="' + t + '"]').length == 0 && $("#buildingAttachmentStyle").hide()));
					$("#buildingTypeCom").is(":visible") && (n.detachedOptions != null && n.detachedOptions.ddlBuildingAttachmentStyleCom != null && $("#ddlBuildingAttachmentStyleCom").append(n.detachedOptions.ddlBuildingAttachmentStyleCom), $("#buildingAttachmentStyleCom").show(), t = $("#ddlBuildingTypeCom").val(), t == "" || t != "1" && t != "16" ? $("#buildingAttachmentStyleCom").hide() : (n.detachedOptions.ddlBuildingAttachmentStyleCom = $('#ddlBuildingAttachmentStyleCom option[parentid!="' + t + '"]').detach(), $('#ddlBuildingAttachmentStyleCom option[parentid="' + t + '"]').length == 0 && $("#buildingAttachmentStyleCom").hide())) });
				$("#ddlMinPriceCom").on("change", function() { n.minValueChanged($("#ddlMaxPriceCom"), $("#ddlMinPriceCom"), n.detachedOptions) });
				$("#ddlMaxPriceCom").on("change", function() { n.maxValueChanged($("#ddlMinPriceCom"), $("#ddlMaxPriceCom"), n.detachedOptions) });
				$("#ddlMinRentCom").on("select2:select change", function() { n.minValueChanged($("#ddlMaxRentCom"), $("#ddlMinRentCom"), n.detachedOptions) });
				$("#ddlMaxRentCom").on("change", function() { n.maxValueChanged($("#ddlMinRentCom"), $("#ddlMaxRentCom"), n.detachedOptions) });
				$("#ddlMinPrice").on("select2:select change", function() { n.minValueChanged($("#ddlMaxPrice"), $("#ddlMinPrice"), n.detachedOptions) });
				$("#ddlMaxPrice").on("select2:select change", function() { n.maxValueChanged($("#ddlMinPrice"), $("#ddlMaxPrice"), n.detachedOptions) });
				$("#ddlMinRent").on("select2:select change", function() { n.minValueChanged($("#ddlMaxRent"), $("#ddlMinRent"), n.detachedOptions) });
				$("#ddlMaxRent").on("select2:select change", function() { n.maxValueChanged($("#ddlMinRent"), $("#ddlMaxRent"), n.detachedOptions) });
				$(".btnSaveAccountChanges").click(function(t) { return t.preventDefault(), n.saveAccountChanges(), $("#footer").show(), !1 });
				$("#btnDeactivateAccount").click(function(n) { var t, i;
					n.preventDefault();
					t = new ConfirmationDialog2Args;
					t.ID = "pnlDeactivateAccount";
					t.TitleText = Translation.get("StopUsingAccount");
					t.BodyContent = $("<span>" + Translation.get("StopUsingAccountBody") + "<\/span>");
					t.ButtonPositiveText = Translation.get("Yes");
					t.ButtonNegativeText = Translation.get("No");
					t.ButtonPositiveOnClick = function(n, t) { Actions.deactivateAccount(Gigya.deactivateAccountHandler);
						t.Featherlight.close() };
					t.ButtonNegativeOnClick = function(n, t) { t.Featherlight.close() };
					i = new ConfirmationDialogModel2(t.ID, t.TitleText, t.BodyContent, t.ButtonPositiveText, t.ButtonPositiveOnClick, t.ButtonNegativeText, t.ButtonNegativeOnClick);
					i.ShowCloseButton = !1;
					showConfirmationDialog2(i) });
				$("#btnChnageAccountPassword").click(function(n) { n.preventDefault();
					Gigya.showScreen(gigyaScreen.ChangeAccountPassword, null) });
				$("#btnChnageAccountEmail").click(function(n) { n.preventDefault();
					Gigya.showScreen(gigyaScreen.ChangeAccountEmail, null) });
				$("#myProfileResetResultsViewRes").click(function(n) { var t, i;
					n.preventDefault();
					t = new ConfirmationDialog2Args;
					t.ID = "pnlResetProfileDefaults";
					t.TitleText = Translation.get("ResetAllToDefaults");
					t.BodyContent = $("<span>" + Translation.get("ReturnSettingsToDefaults") + "<\/span>");
					t.ButtonPositiveText = Translation.get("Continue");
					t.ButtonNegativeText = Translation.get("Cancel");
					t.ButtonPositiveOnClick = function(n, t) { Gigya.resetDefaults("ResultsView");
						t.Featherlight.close() };
					t.ButtonNegativeOnClick = function(n, t) { t.Featherlight.close() };
					i = new ConfirmationDialogModel2(t.ID, t.TitleText, t.BodyContent, t.ButtonPositiveText, t.ButtonPositiveOnClick, t.ButtonNegativeText, t.ButtonNegativeOnClick);
					i.ShowCloseButton = !1;
					showConfirmationDialog2(i) });
				$("#myProfileResetSearchRes").click(function(n) { var t, i;
					n.preventDefault();
					t = new ConfirmationDialog2Args;
					t.ID = "pnlResetProfileDefaults";
					t.TitleText = Translation.get("ResetAllToDefaults");
					t.BodyContent = $("<span>" + Translation.get("ReturnSettingsToDefaults") + "<\/span>");
					t.ButtonPositiveText = Translation.get("Continue");
					t.ButtonNegativeText = Translation.get("Cancel");
					t.ButtonPositiveOnClick = function(n, t) { Gigya.resetDefaults("SearchCriteria", 1);
						t.Featherlight.close() };
					t.ButtonNegativeOnClick = function(n, t) { t.Featherlight.close() };
					i = new ConfirmationDialogModel2(t.ID, t.TitleText, t.BodyContent, t.ButtonPositiveText, t.ButtonPositiveOnClick, t.ButtonNegativeText, t.ButtonNegativeOnClick);
					i.ShowCloseButton = !1;
					showConfirmationDialog2(i) });
				$("#myProfileResetSearchCom").click(function(n) { var t, i;
					n.preventDefault();
					t = new ConfirmationDialog2Args;
					t.ID = "pnlResetProfileDefaults";
					t.TitleText = Translation.get("ResetAllToDefaults");
					t.BodyContent = $("<span>" + Translation.get("ReturnSettingsToDefaults") + "<\/span>");
					t.ButtonPositiveText = Translation.get("Continue");
					t.ButtonNegativeText = Translation.get("Cancel");
					t.ButtonPositiveOnClick = function(n, t) { Gigya.resetDefaults("SearchCriteria", 2);
						t.Featherlight.close() };
					t.ButtonNegativeOnClick = function(n, t) { t.Featherlight.close() };
					i = new ConfirmationDialogModel2(t.ID, t.TitleText, t.BodyContent, t.ButtonPositiveText, t.ButtonPositiveOnClick, t.ButtonNegativeText, t.ButtonNegativeOnClick);
					i.ShowCloseButton = !1;
					showConfirmationDialog2(i) });
				$("#chk_myNotificationsSearchesAll1").change(function() { $(this).is(":checked") ? $("input[type=checkbox].ctrl_search_notify_1, input[type = checkbox].ctrl_search_notify_2").each(function() { $(this).prop("checked", !0) }) : $("input[type=checkbox].ctrl_search_notify_1, input[type = checkbox].ctrl_search_notify_2").each(function() { $(this).prop("checked", !1) }) });
				$("#myNotificationsListResTab").on("change", ".ctrl_search_notify_1", function() { $(this).is(":checked") || $("#chk_myNotificationsSearchesAll1").prop("checked", !1) });
				$("#myNotificationsAllRes, #myNotificationsAllCom").click(function() { var n = $(this).find('input[type="checkbox"]');
					n.prop("checked", n.prop("checked")).change() });
				$("#myNotificationsListComTab").on("change", ".ctrl_search_notify_2", function() { $(this).is(":checked") || $("#chk_myNotificationsSearchesAll2").prop("checked", !1) });
				n.showProfileSection() }, i.prototype.showProfileSection = function() { $(".profileRightCon").is(":hidden") && ($(".profileRight .screen-placeholder").remove(), $(".profileRightCon").addClass("fadeElementIn").show()) }, i.prototype.updateSticky = function(n) { var i = $(".myProfileBottom"),
				t = i.position().top;
				n < t - 650 ? ($("#mainProfileMenu").css("position", "fixed"), $("#mainProfileMenu").css("top", Math.max(50, 252 - n))) : ($("#mainProfileMenu").css("position", "relative"), $("#mainProfileMenu").css("top", t - 785));
				n < t - 250 ? ($("#saveAccountChangesBtnConFixed").css("position", "fixed"), $("#saveAccountChangesBtnConFixed").css("top", Math.max(50, 252 - n))) : ($("#saveAccountChangesBtnConFixed").css("position", "relative"), $("#saveAccountChangesBtnConFixed").css("top", t - 350)) }, i.prototype.updateMenu = function(n) { $(".profileSubSection").removeClass("active");
				Utilities.formatAccountSection(URLHash.get("section")) == n && $("#lnk" + n).addClass("active") }, i.prototype.setFormState = function(n) { var t = $("#my" + n + "Form");
				t.find(":input").each(function(n, t) { var i = $(t);
					i.attr("type") == "checkbox" ? i.data("initialState", i.is(":checked")) : i.data("initialState", i.val()) }) }, i.prototype.resetFormState = function(n) { var t = $("#my" + n + "Form");
				t.find(":input").each(function(n, t) { var i = $(t);
					i.attr("type") == "checkbox" ? i.prop("checked", i.data("initialState")) : i.val(i.data("initialState")) }) }, i.prototype.setDefaults = function(n) { var u, f, i, r, e, t, o; try { for ($("#ddlProfileMeasurements").val(this.valExistsInDropdown($("#ddlProfileMeasurements"), n.user.Res_Search.measurements) == !0 ? n.user.Res_Search.measurements : "2"), $("#ddlProfileCountry").val(n.user.country ? n.user.country : "1").trigger("change"), u = $("#ddlProfileCountry").val(), this.changeCountry(), u == 1 && ($("#ddlProfileProvince").val(n.user.state ? n.user.state : "0").trigger("change"), $("#ddlProfileProvince").find("option:contains('" + n.user.state + "')").each(function() { $(this).text() == n.user.state && $("#ddlProfileProvince").val($(this).val()).trigger("change") })), u == 2 && ($("#ddlProfileState").val(n.user.state ? n.user.state : "0").trigger("change"), $("#ddlProfileState").find("option:contains('" + n.user.state + "')").each(function() { $(this).text() == n.user.state && $("#ddlProfileState").val($(this).val()).trigger("change") })), f = n.user.phones, f != null && $.each(f, function(n, t) { t.type == "home" && $("#txtProfileHomePhone").val(t.number);
				t.type == "mobile" && $("#txtProfileMobilePhone").val(t.number) }), $("#ddlProfilePersona").val(n.Buyer ? n.Buyer : "0").trigger("change"), i = (new Date).getFullYear(); i > 1914; i--) $("#ddlProfileBirthYear").append($("<option />").val(i).html(i.toString()));
				$("#ddlProfileGender").val(n.user.gender ? n.user.gender : "u").trigger("change");
				$("#ddlProfileBirthYear").val(n.user.birthYear ? n.user.birthYear : "1").trigger("change");
				$("#ddlProfileMarital").val(n.user.relationshipStatus ? n.user.relationshipStatus : "0").trigger("change");
				$("#ddlProfileCommLanguage").val($("#ddlProfileCommLanguage option[value=" + n.user.Comm_Lang + "]").length > 0 ? n.user.Comm_Lang : "en").trigger("change");
				r = Translation.get("T500");
				e = "[UnsubLink]";
				r.indexOf(e) > -1 && (r = r.replace(e, RouteHelper.getURL("unsubscribe") + n.unsubscribeLink), $("#MyProfileComText, #MyProfileComTextNotification").html(r));
				$("#ddlProfileMeasurements").val(n.user.Res_Search.measurements).trigger("change");
				$("#txtProfileLocation").val(n.user.Res_Search.location).trigger("change");
				$("#txtProfileLocationCom").val(n.user.Com_Search.location).trigger("change");
				$("#ddlProfilePropertyType").val(n.user.Res_Search.propertyType).trigger("change");
				$("#ddlProfilePropertyTypeCom").val(n.user.Com_Search.propertyType).trigger("change");
				$("#ddlProfileTransactionType").val(n.Interested != "1" ? n.Interested : "2").trigger("change");
				$("#ddlProfileTransactionTypeCom").val(n.Interested_Com != "1" ? n.Interested_Com : "2").trigger("change");
				$("#ddlMaxPrice").find("option[value='" + n.user.Res_Search.priceMin + "']").length ? $("#ddlMaxPrice").val(n.user.Res_Search.priceMax).trigger("change") : (t = new Option(n.user.Res_Search.priceMax.toString(), n.user.Res_Search.priceMax.toString(), !0, !0), $("#ddlMaxPrice").append(t).trigger("change"));
				$("#ddlMaxPriceCom").find("option[value='" + n.user.Com_Search.priceMin + "']").length ? $("#ddlMaxPriceCom").val(n.user.Com_Search.priceMax).trigger("change") : (t = new Option(n.user.Com_Search.priceMax.toString(), n.user.Com_Search.priceMax.toString(), !0, !0), $("#ddlMaxPriceCom").append(t).trigger("change"));
				$("#ddlMinPrice").find("option[value='" + n.user.Res_Search.priceMin + "']").length ? $("#ddlMinPrice").val(n.user.Res_Search.priceMin).trigger("change") : (t = new Option(n.user.Res_Search.priceMin.toString(), n.user.Res_Search.priceMin.toString(), !0, !0), $("#ddlMinPrice").append(t).trigger("change"));
				$("#ddlMinPriceCom").find("option[value='" + n.user.Com_Search.priceMin + "']").length ? $("#ddlMinPriceCom").val(n.user.Com_Search.priceMin).trigger("change") : (t = new Option(n.user.Com_Search.priceMin.toString(), n.user.Com_Search.priceMin.toString(), !0, !0), $("#ddlMinPriceCom").append(t).trigger("change"));
				$("#ddlMaxRent").find("option[value='" + n.user.Res_Search.rentMin + "']").length ? $("#ddlMaxRent").val(n.user.Res_Search.rentMax).trigger("change") : (t = new Option(n.user.Res_Search.rentMax.toString(), n.user.Res_Search.rentMax.toString(), !0, !0), $("#ddlMaxRent").append(t).trigger("change"));
				$("#ddlMaxRentCom").find("option[value='" + n.user.Com_Search.rentMin + "']").length ? $("#ddlMaxRentCom").val(n.user.Com_Search.rentMax).trigger("change") : (t = new Option(n.user.Com_Search.rentMax.toString(), n.user.Com_Search.rentMax.toString(), !0, !0), $("#ddlMaxRentCom").append(t).trigger("change"));
				$("#ddlMinRent").find("option[value='" + n.user.Res_Search.rentMin + "']").length ? $("#ddlMinRent").val(n.user.Res_Search.rentMin).trigger("change") : (t = new Option(n.user.Res_Search.rentMin.toString(), n.user.Res_Search.rentMin.toString(), !0, !0), $("#ddlMinRent").append(t).trigger("change"));
				$("#ddlMinRentCom").find("option[value='" + n.user.Com_Search.rentMin + "']").length ? $("#ddlMinRentCom").val(n.user.Com_Search.rentMin).trigger("change") : (t = new Option(n.user.Com_Search.rentMin.toString(), n.user.Com_Search.rentMin.toString(), !0, !0), $("#ddlMinRentCom").append(t).trigger("change"));
				$("#ddlBeds").val(n.user.Res_Search.bedrooms).trigger("change");
				$("#ddlBedsCom").val(n.user.Com_Search.bedrooms).trigger("change");
				$("#ddlBaths").val(n.user.Res_Search.bathrooms).trigger("change");
				$("#ddlBathsCom").val(n.user.Com_Search.bathrooms).trigger("change");
				$("#dteListedSince").val(n.user.Res_Search.listedSince);
				$("#dteListedSinceCom").val(n.user.Com_Search.listedSince);
				$("#chkOpenHouse").prop("checked", n.user.Res_Search.openHouse);
				$("#chkOpenHouseCom").prop("checked", n.user.Com_Search.openHouse);
				n.user.Res_Search.keywords != null && n.user.Res_Search.keywords != "" && $.each(n.user.Res_Search.keywords.split(","), function(n, t) { if ($("#txtKeywords").find("option[value='" + t + "']").length) $("#txtKeywords").val(t).trigger("change");
				else { var i = new Option(t, t, !0, !0);
					$("#txtKeywords").append(i).trigger("change") } });
				n.user.Com_Search.keywords != null && n.user.Com_Search.keywords != "" && $.each(n.user.Com_Search.keywords.split(","), function(n, t) { if ($("#txtKeywordsCom").find("option[value='" + t + "']").length) $("#txtKeywordsCom").val(t).trigger("change");
				else { var i = new Option(t, t, !0, !0);
					$("#txtKeywordsCom").append(i).trigger("change") } });
				$("#ddlBuildingType").val(n.user.Res_Search.buildingType).trigger("change");
				$("#ddlBuildingTypeCom").val(n.user.Com_Search.buildingType).trigger("change");
				$("#hospitalityBuildingType").val(n.user.Com_Search.buildingType).trigger("change");
				$("#institutionalBuildingType").val(n.user.Com_Search.buildingType).trigger("change");
				$("#industrialBuildingType").val(n.user.Com_Search.buildingType).trigger("change");
				$("#retailBuildingType").val(n.user.Com_Search.buildingType).trigger("change");
				$("#ddlBuildingAttachmentStyle").val(n.user.Res_Search.buildingStyle.split(",")).trigger("change");
				$("#ddlBuildingAttachmentStyleCom").val(n.user.Com_Search.buildingStyle.split(",")).trigger("change");
				$("#ddlBuildingSpace").val(n.user.Res_Search.buildingSize).trigger("change");
				$("#ddlBuildingSpaceCom").val(n.user.Com_Search.buildingSize).trigger("change");
				$("#ddlLandSize").val(n.user.Res_Search.landSize).trigger("change");
				$("#ddlLandSizeCom").val(n.user.Com_Search.landSize).trigger("change");
				$("#ddlZoningType").val(n.user.Res_Search.zoning.split(",")).trigger("change");
				$("#ddlZoningTypeCom").val(n.user.Com_Search.zoning.split(",")).trigger("change");
				$("#ddlFarmType").val(n.user.Res_Search.farmType.split(",")).trigger("change");
				$("#ddlFarmTypeCom").val(n.user.Com_Search.farmType.split(",")).trigger("change");
				$("#ddlParkingType").val(n.user.Res_Search.parkingType.split(",")).trigger("change");
				$("#ddlParkingTypeCom").val(n.user.Com_Search.parkingType.split(",")).trigger("change");
				$("#ddlSortBy").val(n.user.Res_View.sortBy).trigger("change");
				$("#ddlSortByCom").val(n.user.Com_View.sortBy).trigger("change");
				$("#ddlViewOn").val(n.user.Res_View.viewOn != "g" ? n.user.Res_View.viewOn : "m").trigger("change");
				$("#ddlViewOnCom").val(n.user.Com_View.viewOn != "g" ? n.user.Com_View.viewOn : "m").trigger("change");
				$("#chkNotifyFavourites").prop("checked", n.FavNotificationsEnabled);
				o = Cookie.SocialSignin.get() ? Cookie.SocialSignin.get() : null;
				n.LoginProviderType.Type === 0 && o === null ? $("#siteUserOptions").show() : $("#siteUserOptions").hide() } catch (s) {} }, i.prototype.maxValueChanged = function(n, t, i) { var r = Number(t.val()),
				u = Number(n.val()),
				f;
				r < u && (n.val(n.find("option:first-child").val()), r = u);
				reattachHiddenSelectOptions(n, i);
				r != 0 && i != null && (Logging.Debug("Removing minDDL values > " + r), f = (n.val() || "") == "", i[n.attr("id")] = n.find("option").filter(function() { return Number($(this).val()) > Number(r) && $(this).val() != "0" }).detach(), f && n.val("")) }, i.prototype.minValueChanged = function(n, t, i) { var r = Number(t.val()),
				u = Number(n.val());
				r != 0 && u != 0 && r > u && n.val(n.find("option:first-child").val());
				reattachHiddenSelectOptions(n, i);
				r != 0 && i != null && (i[n.attr("id")] = n.find("option").filter(function() { return Number($(this).val()) < Number(r) && $(this).val() != "0" }).detach()) }, i.prototype.resetFilters = function(n) { var t = $("#ddlProfilePropertyType").val();
				resetInputControls(n);
				$("#ddlProfilePropertyType").val(t) }, i.prototype.updateFilter = function(n) { n.show().toggleClass("active", !0) }, i.prototype.updateFilters = function(n) { var t, u; if (n === void 0 && (n = !0), Utilities.formatAccountSection(URLHash.get("section")) == AccountPagesList[AccountPagesList.SearchCriteria]) { if ($(".myProfileInputCon.SearchCriteria").each(function() { $(this).hide() }), u = 1, $("#mySearchCriteriaResTab").hasClass("active") ? u = 1 : $("#mySearchCriteriaComTab").hasClass("active") && (u = 2), u == 1) { var t = $("#mySearchCriteriaFormResTabInnerHeader"),
				i = $("#ddlProfileTransactionType").val(),
				r = $("#ddlProfilePropertyType").val();
				r == SearchType.Residential ? (this.updateFilter($("#profileMeasurements"), t), this.updateFilter($("#profileLocation"), t), this.updateFilter($("#propertyType"), t), this.updateFilter($("#transactionType"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMin"), t), this.updateFilter($("#priceMax"), t)) : i == TransactionType.Rent && (this.updateFilter($("#rentMin"), t), this.updateFilter($("#rentMax"), t)), this.updateFilter($("#beds"), t), this.updateFilter($("#baths"), t), this.updateFilter($("#listedSince"), t), this.updateFilter($("#openHouse"), t), this.updateFilter($("#keywords"), t), this.updateFilter($("#buildingType"), t), this.updateFilter($("#buildingAttachmentStyle"), t), this.updateFilter($("#landSize"), t)) : r == SearchType.Recreational ? (this.updateFilter($("#profileMeasurements"), t), this.updateFilter($("#profileLocation"), t), this.updateFilter($("#propertyType"), t), this.updateFilter($("#transactionType"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMin"), t), this.updateFilter($("#priceMax"), t)) : i == TransactionType.Rent && (this.updateFilter($("#rentMin"), t), this.updateFilter($("#rentMax"), t)), this.updateFilter($("#beds"), t), this.updateFilter($("#baths"), t), this.updateFilter($("#listedSince"), t), this.updateFilter($("#openHouse"), t), this.updateFilter($("#keywords"), t), this.updateFilter($("#buildingType"), t), this.updateFilter($("#buildingAttachmentStyle"), t), this.updateFilter($("#landSize"), t), this.updateFilter($("#viewType"), t), this.updateFilter($("#ownershipType"), t)) : r == SearchType.Condo ? (this.updateFilter($("#profileMeasurements"), t), this.updateFilter($("#profileLocation"), t), this.updateFilter($("#propertyType"), t), this.updateFilter($("#transactionType"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMin"), t), this.updateFilter($("#priceMax"), t)) : i == TransactionType.Rent && (this.updateFilter($("#rentMin"), t), this.updateFilter($("#rentMax"), t)), this.updateFilter($("#beds"), t), this.updateFilter($("#baths"), t), this.updateFilter($("#listedSince"), t), this.updateFilter($("#openHouse"), t), this.updateFilter($("#keywords"), t), this.updateFilter($("#buildingType"), t), this.updateFilter($("#buildingAttachmentStyle"), t)) : r == SearchType.Multifamily ? (this.updateFilter($("#profileMeasurements"), t), this.updateFilter($("#profileLocation"), t), this.updateFilter($("#propertyType"), t), this.updateFilter($("#transactionType"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMin"), t), this.updateFilter($("#priceMax"), t)) : i == TransactionType.Rent && (this.updateFilter($("#rentMin"), t), this.updateFilter($("#rentMax"), t)), this.updateFilter($("#numberOfUnits"), t), i == TransactionType.Sale && this.updateFilter($("#buildingSpace"), t), this.updateFilter($("#listedSince"), t), this.updateFilter($("#openHouse"), t), this.updateFilter($("#keywords"), t)) : r == SearchType.Agricultural ? (this.updateFilter($("#profileMeasurements"), t), this.updateFilter($("#profileLocation"), t), this.updateFilter($("#propertyType"), t), this.updateFilter($("#transactionType"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMin"), t), this.updateFilter($("#priceMax"), t)) : i == TransactionType.Rent && (this.updateFilter($("#rentMin"), t), this.updateFilter($("#rentMax"), t)), this.updateFilter($("#landSize"), t), this.updateFilter($("#farmType"), t), this.updateFilter($("#listedSince"), t), this.updateFilter($("#openHouse"), t), this.updateFilter($("#keywords"), t), this.updateFilter($("#beds"), t), this.updateFilter($("#baths"), t), this.updateFilter($("#buildingType"), t), this.updateFilter($("#buildingAttachmentStyle"), t)) : r == SearchType.Parking ? (this.updateFilter($("#profileMeasurements"), t), this.updateFilter($("#profileLocation"), t), this.updateFilter($("#propertyType"), t), this.updateFilter($("#transactionType"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMin"), t), this.updateFilter($("#priceMax"), t)) : i == TransactionType.Rent && (this.updateFilter($("#rentMin"), t), this.updateFilter($("#rentMax"), t)), this.updateFilter($("#parkingType"), t), this.updateFilter($("#listedSince"), t), this.updateFilter($("#keywords"), t)) : r == SearchType.All ? (this.updateFilter($("#profileMeasurements"), t), this.updateFilter($("#profileLocation"), t), this.updateFilter($("#propertyType"), t), this.updateFilter($("#transactionType"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMin"), t), this.updateFilter($("#priceMax"), t)) : i == TransactionType.Rent && (this.updateFilter($("#rentMin"), t), this.updateFilter($("#rentMax"), t)), this.updateFilter($("#listedSince"), t), this.updateFilter($("#openHouse"), t), this.updateFilter($("#keywords"), t)) : r == SearchType.Land && (this.updateFilter($("#profileMeasurements"), t), this.updateFilter($("#profileLocation"), t), this.updateFilter($("#propertyType"), t), this.updateFilter($("#transactionType"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMin"), t), this.updateFilter($("#priceMax"), t)) : i == TransactionType.Rent && (this.updateFilter($("#rentMin"), t), this.updateFilter($("#rentMax"), t)), this.updateFilter($("#landSize"), t), this.updateFilter($("#zoningType"), t), this.updateFilter($("#listedSince"), t), this.updateFilter($("#keywords"), t));
				$("#SearchCriteria .myProfileInputRow").each(function() { $(this).show();
					$(this).children(":visible").length === 0 && $(this).hide() }) } if (u == 2) { var t = $("#mySearchCriteriaFormComTabInnerHeader"),
				i = $("#ddlProfileTransactionTypeCom").val(),
				r = $("#ddlProfilePropertyTypeCom").val();
				r == SearchType.Multifamily ? (this.updateFilter($("#profileMeasurementsCom"), t), this.updateFilter($("#profileLocationCom"), t), this.updateFilter($("#propertyTypeCom"), t), this.updateFilter($("#transactionTypeCom"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMinCom"), t), this.updateFilter($("#priceMaxCom"), t)) : i == TransactionType.Rent, this.updateFilter($("#numberOfUnitsCom"), t), i == TransactionType.Sale && this.updateFilter($("#buildingSpaceCom"), t), this.updateFilter($("#listedSinceCom"), t), this.updateFilter($("#openHouseCom"), t), this.updateFilter($("#keywordsCom"), t)) : r == SearchType.All ? (this.updateFilter($("#profileMeasurementsCom"), t), this.updateFilter($("#profileLocationCom"), t), this.updateFilter($("#propertyTypeCom"), t), this.updateFilter($("#transactionTypeCom"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMinCom"), t), this.updateFilter($("#priceMaxCom"), t)) : i == TransactionType.Rent, i == TransactionType.Sale && this.updateFilter($("#buildingSpaceCom"), t), this.updateFilter($("#landSizeCom"), t), this.updateFilter($("#listedSinceCom"), t), this.updateFilter($("#keywordsCom"), t)) : r == SearchType.Business ? (this.updateFilter($("#profileMeasurementsCom"), t), this.updateFilter($("#profileLocationCom"), t), this.updateFilter($("#propertyTypeCom"), t), this.updateFilter($("#transactionTypeCom"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMinCom"), t), this.updateFilter($("#priceMaxCom"), t)) : i == TransactionType.Rent, i == TransactionType.Sale && this.updateFilter($("#buildingSpaceCom"), t), this.updateFilter($("#listedSinceCom"), t), this.updateFilter($("#keywordsCom"), t)) : r == SearchType.Office ? (this.updateFilter($("#profileMeasurementsCom"), t), this.updateFilter($("#profileLocationCom"), t), this.updateFilter($("#propertyTypeCom"), t), this.updateFilter($("#transactionTypeCom"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMinCom"), t), this.updateFilter($("#priceMaxCom"), t)) : i == TransactionType.Rent, i == TransactionType.Sale && this.updateFilter($("#buildingSpaceCom"), t), this.updateFilter($("#listedSinceCom"), t), this.updateFilter($("#keywordsCom"), t)) : r == SearchType.Retail ? (this.updateFilter($("#profileMeasurementsCom"), t), this.updateFilter($("#profileLocationCom"), t), this.updateFilter($("#propertyTypeCom"), t), this.updateFilter($("#transactionTypeCom"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMinCom"), t), this.updateFilter($("#priceMaxCom"), t)) : i == TransactionType.Rent, i == TransactionType.Sale && this.updateFilter($("#buildingSpaceCom"), t), this.updateFilter($("#listedSinceCom"), t), this.updateFilter($("#keywordsCom"), t)) : r == SearchType.Land ? (this.updateFilter($("#profileMeasurementsCom"), t), this.updateFilter($("#profileLocationCom"), t), this.updateFilter($("#propertyTypeCom"), t), this.updateFilter($("#transactionTypeCom"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMinCom"), t), this.updateFilter($("#priceMaxCom"), t)) : i == TransactionType.Rent, this.updateFilter($("#landSizeCom"), t), this.updateFilter($("#zoningTypeCom"), t), this.updateFilter($("#listedSinceCom"), t), this.updateFilter($("#keywordsCom"), t)) : r == SearchType.Institutional ? (this.updateFilter($("#profileMeasurementsCom"), t), this.updateFilter($("#profileLocationCom"), t), this.updateFilter($("#propertyTypeCom"), t), this.updateFilter($("#transactionTypeCom"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMinCom"), t), this.updateFilter($("#priceMaxCom"), t)) : i == TransactionType.Rent, i == TransactionType.Sale && this.updateFilter($("#buildingSpaceCom"), t), this.updateFilter($("#listedSinceCom"), t), this.updateFilter($("#keywordsCom"), t)) : r == SearchType.Industrial ? (this.updateFilter($("#profileMeasurementsCom"), t), this.updateFilter($("#profileLocationCom"), t), this.updateFilter($("#propertyTypeCom"), t), this.updateFilter($("#transactionTypeCom"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMinCom"), t), this.updateFilter($("#priceMaxCom"), t)) : i == TransactionType.Rent, i == TransactionType.Sale && this.updateFilter($("#buildingSpaceCom"), t), this.updateFilter($("#landSizeCom"), t), this.updateFilter($("#listedSinceCom"), t), this.updateFilter($("#keywordsCom"), t)) : r == SearchType.Agricultural ? (this.updateFilter($("#profileMeasurementsCom"), t), this.updateFilter($("#profileLocationCom"), t), this.updateFilter($("#propertyTypeCom"), t), this.updateFilter($("#transactionTypeCom"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMinCom"), t), this.updateFilter($("#priceMaxCom"), t)) : i == TransactionType.Rent, this.updateFilter($("#landSizeCom"), t), this.updateFilter($("#farmTypeCom"), t), this.updateFilter($("#listedSinceCom"), t), this.updateFilter($("#openHouseCom"), t), this.updateFilter($("#keywordsCom"), t), this.updateFilter($("#bedsCom"), t), this.updateFilter($("#bathsCom"), t), this.updateFilter($("#buildingTypeCom"), t), this.updateFilter($("#buildingAttachmentStyleCom"), t)) : r == SearchType.Hospitality && (this.updateFilter($("#profileMeasurementsCom"), t), this.updateFilter($("#profileLocationCom"), t), this.updateFilter($("#propertyTypeCom"), t), this.updateFilter($("#transactionTypeCom"), t), i == TransactionType.Sale ? (this.updateFilter($("#priceMinCom"), t), this.updateFilter($("#priceMaxCom"), t)) : i == TransactionType.Rent, i == TransactionType.Sale && this.updateFilter($("#buildingSpaceCom"), t), this.updateFilter($("#landSizeCom"), t), this.updateFilter($("#listedSinceCom"), t), this.updateFilter($("#keywordsCom"), t));
				$("#SearchCriteria .myProfileInputRow").each(function() { $(this).show();
					$(this).children(":visible").length === 0 && $(this).hide() }) } $("#ddlBuildingType, #ddlBuildingTypeCom").change();
				$("#lblMinRent, #lblMaxRent").toggle(u == 1);
				$("#lblMinLease, #lblMaxLease").toggle(u == 2) } Utilities.formatAccountSection(URLHash.get("section")) == AccountPagesList[AccountPagesList.ResultsView] && ($(".myProfileInputCon.ResultsView").each(function() { $(this).hide() }), t = $("#myResultsViewFormResTabInnerHeader"), $("#sortBy").show(), $("#viewOn").show(), this.updateFilter($("#sortBy"), t), this.updateFilter($("#viewOn"), t));
				Utilities.formatAccountSection(URLHash.get("section")) == AccountPagesList[AccountPagesList.Notifications] && (u = 1, $("#myNotificationsResTab").hasClass("active") ? u = 1 : $("#myNotificationsComTab").hasClass("active") && (u = 2)) }, i.prototype.saveAccountChanges = function() { var i, r, u; if (Utilities.formatAccountSection(URLHash.get("section")) == AccountPagesList[AccountPagesList.AccountInformation]) return FormValidation.validateForm($("#myAccountInformationForm"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation) ? (this.saveProfileFromForm($("#myAccountInformationForm")), !1) : (this.animateValidationErrors(), !1); if (Utilities.formatAccountSection(URLHash.get("section")) == AccountPagesList[AccountPagesList.Communications]) { if (FormValidation.validateForm($("#myCommunicationsForm"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation)) { var f = $("#chkProfileMarketing").is(":checked"),
				e = $("#chkProfileProduct").is(":checked"),
				n = new ScreenUnsubscribeConfirmationArgs,
				t = !1; return n.user_json = JSON.stringify(this.user), n.redirectToIndex = !1, f === !1 && (i = AccountSessionStorage.CREAMailUpdates_Profile.get(), i != "false" && (n.showComm = !0, t = !0)), e === !1 && (r = AccountSessionStorage.REALTORMailUpdates_Profile.get(""), r != "false" && (n.showComm = !0, t = !0)), this.saveProfileFromForm($("#myCommunicationsForm"), t, n), !1 } return this.animateValidationErrors(), !1 } if (Utilities.formatAccountSection(URLHash.get("section")) == AccountPagesList[AccountPagesList.SearchCriteria]) { if ($("#mySearchCriteriaResTab").hasClass("active")) return FormValidation.validateForm($("#mySearchCriteriaFormResTab"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation) ? (this.saveProfileFromForm($("#mySearchCriteriaFormResTab")), !1) : (this.animateValidationErrors(), !1); if ($("#mySearchCriteriaComTab").hasClass("active")) return FormValidation.validateForm($("#mySearchCriteriaFormComTab"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation) ? (this.saveProfileFromForm($("#mySearchCriteriaFormComTab")), !1) : (this.animateValidationErrors(), !1) } if (Utilities.formatAccountSection(URLHash.get("section")) == AccountPagesList[AccountPagesList.ResultsView]) return FormValidation.validateForm($("#myResultsViewFormResTab"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation) ? (this.saveProfileFromForm($("#myResultsViewFormResTab")), !1) : (this.animateValidationErrors(), !1);
				Utilities.formatAccountSection(URLHash.get("section")) == AccountPagesList[AccountPagesList.Notifications] && ($("input[type=checkbox].ctrl_search_notify_1, input[type=checkbox].ctrl_search_notify_2").each(function() { var n = !1,
					t = $(this).attr("id"),
					i = decodeURIComponent(t.split("ctrl_")[1]);
					n = $(this).is(":checked") ? !0 : !1;
					SavedSearch.UpdateNotify(i, n, null, !1) }), u = { updateGigya: !0 }, Events.Fire(SavedSearch.savedSearchesUpdated, u), this.saveProfileFromForm($("#myNotificationsSearchForm"))) }, i.prototype.saveProfileFromForm = function(n, t, i) { var e, r; if (t === void 0 && (t = !1), $(".btnSaveAccountChanges").hasClass("loading") == !1) { $(".btnSaveAccountChanges").addClass("loading"); var o = new consumeruser,
				f = {},
				s = {},
				u = {},
				h = [];
				n.find("[data-gigya-id]:visible").each(function() { var l = 0,
					a = $(this).attr("data-gigya-id"),
					r = {},
					e = $(this).attr("data-gigya-type-id"),
					y = $(this).attr("data-gigya-bind-id"),
					p = $(this).attr("data-gigya-bind-val"),
					i = $(this).val(),
					c, t, v; if ($(this).attr("type") == "checkbox" && (i = $(this).is(":checked")), $(this).is("table") && (i = $(this).find("input:checked").val()), y != null && p != null)
					if (n.find("#" + y).val() == p) i = $(this).val();
					else return !0;
					e != null && e == "multitext" && (c = $.map($("option:selected", this), function(n) { return $(n).text() }), i = c.join(","));
					e != null && e == "multi" && (c = $.map($("option:selected", this), function(n) { return $(n).val() }), i = c.join(","));
					r = a.split(".");
					l = r.length;
					r[0] == "profile" && (t = r[1], o[t] = i);
					r[0] == "data" && (l === 2 ? (t = r[1], f[t] == null && (f[t] = $.makeArray(f[t])), f[t] = i) : l === 3 && (t = r[1], v = r[2], s[v] == null && (s[v] = i), u[t] == null && (u[t] = $.makeArray(u[t]))));
					a == "data.Comm_Lang" && (o.locale = i);
					a == "profile.phones" && e != null && h.push({ type: e, number: i }) });
				h.length > 0 && (o.phones = h);
				$.each(u, function(n) { u[n] = s });
				e = new AccountSetInfoArgs;
				e.profile = JSON.stringify(o);
				e.data = JSON.stringify($.extend(u, f));
				e.CRM_update = n.attr("id") == "myCommunicationsForm";
				r = new SetAccountInfoCallbackArgs;
				r.onSuccessMsg = Translation.get("ProfileUpdated");
				r.onSuccessMsgDisplayType = DisplayType.Toast;
				t && (r.targetScreen = gigyaScreen.UnsubscribeConfirmation, r.targetScreenOptions = i);
				r.fetchNewConsumerBOL = n.attr("id") == "myCommunicationsForm" ? !1 : !0;
				Gigya.AccountSetInfo(e, r);
				n.data("changed", !1);
				$("#myResultsViewForm").data("changed", !1);
				AccountSessionStorage.CREAMailUpdates_Profile.save(String($("#chkProfileMarketing").is(":checked")));
				AccountSessionStorage.REALTORMailUpdates_Profile.save(String($("#chkProfileProduct").is(":checked"))) } }, i.prototype.animateValidationErrors = function() { addAnimationClass($(".btnSaveAccountChanges"), "btnFail") }, i.prototype.setModeTabs = function(n) { n === 1 ? ($("#mySearchCriteriaResTab").addClass("active"), $("#mySearchCriteriaComTab").removeClass("active"), $("#mySearchCriteriaFormResTab").show(), $("#mySearchCriteriaFormComTab").hide(), $("#myResultsViewResTab").addClass("active"), $("#myResultsViewComTab").removeClass("active"), $("#myNotificationsResTab").addClass("active"), $("#myNotificationsComTab").removeClass("active")) : ($("#mySearchCriteriaComTab").addClass("active"), $("#mySearchCriteriaResTab").removeClass("active"), $("#mySearchCriteriaFormComTab").show(), $("#mySearchCriteriaFormResTab").hide(), $("#myResultsViewComTab").addClass("active"), $("#myResultsViewResTab").removeClass("active"), $("#myNotificationsComTab").addClass("active"), $("#myNotificationsResTab").removeClass("active")) }, i.prototype.changeCountry = function() { var n = $("#ddlProfileCountry").val();
				n == 1 ? ($("#row_state_can").show(), $("#row_state_us").hide(), $("#row_state").show()) : n == 2 ? ($("#row_state_us").show(), $("#row_state_can").hide(), $("#row_state").show()) : n == null ? ($("#row_state_can").show(), $("#row_state_us").hide(), $("#row_state").show()) : $("#row_state").hide() }, i.prototype.updateLeaseRentLabel = function() { var t = $('#ddlProfileTransactionTypeCom [value="3"]').val(),
				n;
				(t || "") != "" && (n = "", n = Translation.get("ForLease"), $('#ddlProfileTransactionTypeCom [value="3"]').text(n)) }, i.prototype.valExistsInDropdown = function(n, t) { var i = !1,
				r = n.filter(function() { return $(this).val() == t }).length; return r && (i = !0), i }, i.prototype.showConfirmChange = function() { var i = this,
				n, t;
				$("#footer").hide();
				n = this;
				t = new ConfirmationDialogModel2("MyAccountConfirmChanges", "", Translation.get("SaveChangesToAccount"), Translation.get("Save"), function(t, i) { return t.preventDefault(), n.saveAccountChanges(), i.Featherlight.close(), $("body").css("overflow", "auto"), $("#footer").show(), !1 }, Translation.get("Discard"), function(t, r) { return t.preventDefault(), r.Featherlight.close(), $("body").css("overflow", "auto"), $("#footer").show(), i.resetFormState(n.currentSection), $("#my" + n.currentSection + "Form").data("changed", !1), history.back(), !1 });
				t.ShowTitleBar = !1;
				showConfirmationDialog2(t);
				$("body").css("overflow", "hidden") }, i.prototype.loadSearches = function() { for (var t = SavedSearch.GetAll(undefined, SortOrder.Descending), n = 0; n < t.length; n++) this.savedSearches.push(t[n]) }, i.prototype.loadSearchesIntoListView = function(n, t, i) { var f, r, u, e; for ($("#myNotificationsListResTab").toggle(n.length != 0), f = Translation.get("NoSavedSearches"), $("#myNotificationsNoSavedSearchesResCon").toggle(n.length == 0), $("#myNotificationsFormResTabInnerHeader").toggle(n.length > 0), $("#myNotificationsAllRes").toggle(n.length > 0), $("#myNotificationsT465Res").html(f), r = 0; r < n.length; r++) u = new ControlFetcherArgs("SearchAccount_" + i.toString() + "_" + r.toString(), t), e = new SavedSearchModel(n[r]), u.postCallHandler = function(n) { $("#" + t).append("<div class='loadingIn'>" + n + "<\/div>");
				window.setTimeout(function() { callAfterAnimation($(".loadingIn"), function() { $(".loadingIn").removeClass("loadingIn") }) }, 500) }, ControlFetcherJS.fetchSavedSearchForAccount(u, e) }, i.prototype.hideAllSections = function() { $.each(AccountPages, function(n, t) { $("#" + t).hide() }) }, i }(WebPage);
			n.MyProfile = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { var r = this;
				$("body").css("overflow", "auto");
				ApplicationState.UserIsSignedIn == !1 && Core.redirectTo(RouteHelper.getURL("sign-up-for-daily-notifications"));
				showLoadingAnimation($(".loadingPlaceholder")); var t = !1,
					i = this,
					n = new GetAccountFromBOLCallbackArgs;
				n.page = i;
				n.functionCalls = function() { ConsumerProfile.UserAccountSettings.NotificationsEnabled && (ConsumerProfile.UserAccountSettings.FavNotificationsEnabled || ConsumerProfile.UserAccountSettings.CompareNotificationsEnabled || ConsumerProfile.UserAccountSettings.SavedSearchNotificationsEnabled) ? t == !1 && (i.RenderNotificationsSummaryUI(null, r), t = !0) : ($("#notificationSummaryLoader").hide(), $("#acc_notifications_summary_text").text(Translation.get("UseNotificationPrefsToActivate")), $("#acc_notifications_summary_text").removeClass("hidden")) };
				Gigya.GetAccountFromBOL(ApplicationConfig.GigyaSyncRealTime, !1, n) }, t.prototype.registerEventHandlers = function() { $(".profileSectionLinkCon").unbind("click"); var n = this;
				$(".profileSectionLinkCon").click(function(n) { if (n.target.className == "notificationListPageInfo") { var t = $("#" + n.target.id),
					r = t.attr("data-section"),
					u = t.attr("data-link"),
					f = t.attr("data-nid"),
					s = t.attr("data-ntitle"),
					i = ConsumerNotificationTypes[t.attr("data-ntype")],
					e = parseInt(t.attr("data-nmode"), 10),
					o = parseInt(t.attr("data-npagenumber"), 10);
					ConsumerProfile.Notifications.RenderNotificationListingsDesktop(r, u, i, e, f, o + 1);
					ConsumerProfile.Notifications.ListingPageHasBeenLoaded = !1;
					ConsumerProfile.Notifications.RefreshNotifications(null, i[0]) } });
				$("#lnkMyNotificationsNotificationSettings").click(function() { return Core.redirectTo(RouteHelper.getURL("my-account") + "#section=Notifications"), !1 }) }, t.prototype.RenderNotificationsSummaryUI = function(n, t) { var k, a, i, it, w, f; if (t && ConsumerProfile.Notifications.pageCallsToMakeAfterNotificationsHTML.push(t), k = ConsumerProfile.UserAccountSettings.NotificationsEnabled, ConsumerProfile.UserAccountSettings.NotificationsEnabled && (ConsumerProfile.UserAccountSettings.FavNotificationsEnabled || ConsumerProfile.UserAccountSettings.CompareNotificationsEnabled || ConsumerProfile.UserAccountSettings.SavedSearchNotificationsEnabled)) { if (n == null) { ConsumerProfile.Notifications.forceFetchAsync(this.RenderNotificationsSummaryUI, null); return } ConsumerProfile.Notifications.RefreshNotifications(n, null); var b = "",
				r = "",
				u = "";
				$("#AccountSummaryNotificationsFromDate").html(""); var e = new ConsumerProfile.Notifications(n),
					o = e.getAllNotificationsSorted(null),
					tt = e.hasNotifications(null); if (ApplicationState.UserIsSignedIn && (k ? tt ? ($("#acc_notifications_summary_text").html(Translation.get("T470")), $("#acc_notifications_summary_text").removeClass("hidden")) : ($("#acc_notifications_summary_text").text(Translation.get("UseNotificationPrefsToActivate")), $("#acc_notifications_summary_text").removeClass("hidden")) : $("#a_notify_from_date").hide()), o != null && o.length > 0) { $("#AccountSummaryNotificationsFromDate").html(e.getTimeStampString()).show(); var s = 0,
					h = 0,
					c = e.getTimeStampString(),
					l = 1; for (a = 0; a < o.length; a++)
					if (i = o[a], it = "", i.listingIds != null && i.listingIds.length > 0) { var v = i.actionData,
						y = i.text,
						d = i.listingIds.length,
						rt = i.searchDate,
						g = 1,
						p = y;
						p = ConsumerProfile.Notifications.formatNotificationTextId(p); switch (i.type) {
							case ConsumerNotificationTypes.Search:
								var ut = RouteHelper.getURL("map") + "#" + v.substr(v.indexOf("#") + 1),
									nt = ut + "&SearchName=" + encodeURIComponent(y),
									w = "galleryViewContent_accrd-search-listings" + p + s.toString();
								u == "" && (u += '<div class="notify-summary-title-con"><img src="/wp-content/plugins/adk_feed/assets/images/searches.svg" class="subTitleIcon" /><div class="notify-summary-title">' + Translation.get("MySearches") + '<\/div><\/div><div id="accrd-search-listings" class="accrd-notify-summary" style="display:none;">');
								u += ConsumerProfile.Notifications.GetNotificationSummaryHTML("accrd-search-listings", s, d, nt, y, g, c, 1, l, rt);
								s++;
								f = ConsumerProfile.UserAccountSettings.Notifications.getNotificationCount(null, ConsumerNotificationTypes.Search);
								ConsumerProfile.Notifications.RenderNotificationListingsDesktop("accrd-search-listings", nt, ConsumerNotificationTypes.Search, null, w, l, c);
								s >= f && (u += "<\/div>"); break;
							case ConsumerNotificationTypes.Favourite:
								w = "galleryViewContent_accrd-faves" + p + h.toString();
								r == "" && (r += '<div class="notify-summary-title-con"><img src="/wp-content/plugins/adk_feed/assets/images/heart.svg" class="subTitleIcon" /><div class="notify-summary-title">' + Translation.get("MyFavourites") + '<\/div><\/div><div id="accrd-faves" class="accrd-notify-summary" style="display:none;">');
								r += ConsumerProfile.Notifications.GetNotificationSummaryHTML("accrd-faves", h, d, v, y, g, c, 3, l);
								h++;
								f = ConsumerProfile.UserAccountSettings.Notifications.getFaveNotificationsCount();
								ConsumerProfile.Notifications.RenderNotificationListingsDesktop("accrd-faves", v, ConsumerNotificationTypes.Favourite, null, w, l, c);
								h >= f && (r += "<\/div>") } } } b += u;
				b += r;
				$("#acc_notifications_summary").html(b);
				$("#notificationSummaryLoader").hide();
				ConsumerProfile.UserAccountSettings.Notifications.getNotificationCount(null, ConsumerNotificationTypes.Search) > 0 && activateAccordion($("#accrd-search-listings"), 200);
				ConsumerProfile.UserAccountSettings.Notifications.getNotificationCount(null, ConsumerNotificationTypes.Favourite) > 0 && activateAccordion($("#accrd-faves"), 200);
				ConsumerProfile.Notifications.RefreshNotifications(n, null);
				ConsumerProfile.Notifications.functionCallsAfterNotificationHTML() } else $("#acc_notifications_summary_text").html(Translation.get("UseNotificationPrefsToActivate")), $("#acc_notifications_summary_text").removeClass("hidden"), $("#a_notify_from_date").hide(), ConsumerProfile.Notifications.BlankOutHeaderBell(), $("#notificationSummaryLoader").hide() }, t }(WebPage);
			n.Notifications = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
				$("#btnNotifySignUpInline").click(function() { return SessionStorage.PostLoginRedirect.save(RouteHelper.getURL("my-account") + "#section=Notifications"), $("#lnkProfileMenuSignin").click(), !1 }) }, t.prototype.render = function() { for (var e = this, r = [], o = JSON.parse('{"Results":[{"Individual":[{"Phones":[{"PhoneType":"Telephone","PhoneNumber":"286- 2596","AreaCode":"613","PhoneTypeId":"1"}],"Websites":[],"Emails":[{"ContactId":"391043101"}],"IndividualID":1944275,"Name":"JP GAUTHIER","Organization":{"Phones":[{"PhoneType":"Telephone","PhoneNumber":"236- 5959","AreaCode":"613","PhoneTypeId":"1"},{"PhoneType":"Fax","PhoneNumber":"236- 1515","AreaCode":"613","PhoneTypeId":"4"}],"Emails":[{"ContactId":"399963761"}],"Websites":[{"Website":"http://www.hallmarkottawa.com","WebsiteTypeId":"1"}],"OrganizationID":278197,"Name":"RE/MAX HALLMARK REALTY GROUP","Logo":"https://cdn.realtor.ca/organization/en-CA/lowres/default/remaxoa.gif","Address":{"AddressText":"610 BRONSON AVENUE|OTTAWA, ON K1S4E6"},"Designation":"Brokerage","HasEmail":true,"PermitFreetextEmail":true,"PermitShowListingLink":true},"Position":"Salesperson","PermitFreetextEmail":true,"FirstName":"JP","LastName":"GAUTHIER","CorporationDisplayTypeId":"0","PermitShowListingLink":true,"RelativeDetailsURL":"/Agent/1944275/JP-GAUTHIER-610-BRONSON-AVENUE-OTTAWA-ON-K1S4E6"},{"Phones":[{"PhoneType":"Telephone","PhoneNumber":"788-2113","AreaCode":"613","PhoneTypeId":"1"}],"Websites":[{"Website":"http://www.sylviebegin.com","WebsiteTypeId":"1"},{"Website":"http://www.facebook.com/HomeTeamOttawa","WebsiteTypeId":"2"},{"Website":"http://ca.linkedin.com/pub/sylvie-b&eacute;gin/44/298/909","WebsiteTypeId":"3"},{"Website":"http://www.twitter.com/hometeamottawa","WebsiteTypeId":"4"}],"Emails":[{"ContactId":"391039031"}],"IndividualID":1402876,"Name":"SYLVIE BEGIN","Organization":{"Phones":[{"PhoneType":"Telephone","PhoneNumber":"236-5959","AreaCode":"613","PhoneTypeId":"1"},{"PhoneType":"Fax","PhoneNumber":"236-1515","AreaCode":"613","PhoneTypeId":"4"}],"Emails":[{"ContactId":"399963761"}],"Websites":[{"Website":"http://www.hallmarkottawa.com","WebsiteTypeId":"1"}],"OrganizationID":278197,"Name":"RE/MAX HALLMARK REALTY GROUP","Logo":"https://cdn.realtor.ca/organization/en-CA/lowres/default/remaxoa.gif","Address":{"AddressText":"610 BRONSON AVENUE|OTTAWA, ON K1S4E6"},"Designation":"Brokerage","HasEmail":true,"PermitFreetextEmail":true,"PermitShowListingLink":true},"Photo":"https://cdn.realtor.ca/individual/lowres/1068122.jpg","Position":"Broker","PermitFreetextEmail":true,"FirstName":"SYLVIE","LastName":"BEGIN","CorporationDisplayTypeId":"0","PermitShowListingLink":true,"RelativeDetailsURL":"/Agent/1402876/SYLVIE-BEGIN-610-BRONSON-AVENUE-OTTAWA-ON-K1S4E6"},{"Phones":[{"PhoneType":"Telephone","PhoneNumber":"236-5959","AreaCode":"613","PhoneTypeId":"1"}],"Websites":[{"Website":"http://www.OttawaRealEstateInformation.com","WebsiteTypeId":"1"},{"Website":"http://www.facebook.com/RealEstateAgentBill","WebsiteTypeId":"2"},{"Website":"http://ca.linkedin.com/pub/bill-meyer/10/321/220","WebsiteTypeId":"3"},{"Website":"http://www.twitter.com/hometeamottawa","WebsiteTypeId":"4"}],"Emails":[{"ContactId":"391047841"}],"IndividualID":1403962,"Name":"BILL MEYER","Organization":{"Phones":[{"PhoneType":"Telephone","PhoneNumber":"236-5959","AreaCode":"613","PhoneTypeId":"1"},{"PhoneType":"Fax","PhoneNumber":"236-1515","AreaCode":"613","PhoneTypeId":"4"}],"Emails":[{"ContactId":"399963761"}],"Websites":[{"Website":"http://www.hallmarkottawa.com","WebsiteTypeId":"1"}],"OrganizationID":278197,"Name":"RE/MAX HALLMARK REALTY GROUP","Logo":"https://cdn.realtor.ca/organization/en-CA/lowres/default/remaxoa.gif","Address":{"AddressText":"610 BRONSON AVENUE|OTTAWA, ON K1S4E6"},"Designation":"Brokerage","HasEmail":true,"PermitFreetextEmail":true,"PermitShowListingLink":true},"Photo":"https://cdn.realtor.ca/individual/lowres/1112925.jpg","Position":"Salesperson","PermitFreetextEmail":true,"FirstName":"BILL","LastName":"MEYER","CorporationDisplayTypeId":"0","PermitShowListingLink":true,"RelativeDetailsURL":"/Agent/1403962/BILL-MEYER-610-BRONSON-AVENUE-OTTAWA-ON-K1S4E6"}],"OpenHouse":[{"StartTime":"Oct 01/17 - 2:00 PM To 5:00 PM","StartDateTime":"01/10/2017 2:00:00 PM","EndDateTime":"01/10/2017 5:00:00 PM","FormattedDateTime":"Oct 01/17 - 2:00 PM To 5:00 PM"},{"StartTime":"Oct 08/17 - 2:00 PM To 5:00 PM","StartDateTime":"08/10/2017 2:00:00 PM","EndDateTime":"08/10/2017 5:00:00 PM","FormattedDateTime":"Oct 08/17 - 2:00 PM To 5:00 PM"}],"Id":"18612634","MlsNumber":"1077523","PublicRemarks":"Cozy and well-maintained 1½ storey single family home is located on a large lot on a quiet tree-lined street.  This charming home features 2 bedrooms with one 4-pce bathroom downstairs and 2-pce upstairs.  The upper level boasts sloped ceilings which adds charm and personality and a certain feeling of comfort in the bedrooms.  This mature and central neighbourhood is close to several amenities including: Shopping, Restaurants, NCC bike paths, Experimental Farm, Civic hospital and Downtown, easy access to transit and the Queensway.  Perfect for the single person or couple!  A must see!","Building":{"BathroomTotal":"2","Bedrooms":"2 + 0","Type":"House"},"Property":{"Photo":[{"SequenceId":"1","HighResPath":"/images/common/sample-home.png","MedResPath":"/images/common/sample-home.png","LowResPath":"/images/common/sample-home.png","LastUpdated":"05/09/2017 11:53:25 PM"}],"Parking":[{"Name":"Detached garage"},{"Name":"Surfaced"}],"Price":"$650,000","Type":"Single Family","Address":{"AddressText":"200 CATHERINE STREET|Ottawa, Ontario K1Z8E8","Longitude":"-75.73133","Latitude":"45.377302"},"ParkingSpaceTotal":"5","TypeId":"300","OwnershipType":"Freehold","AmmenitiesNearBy":"Recreation Nearby, Shopping"},"Business":{},"Land":{"SizeTotal":"54 ft X 100 ft","SizeFrontage":"54 ft"},"AlternateURL":{"DetailsLink":"https://goo.gl/2HPAgx","PhotoLink":"https://goo.gl/uvQs0V","VideoLink":"https://goo.gl/mEk4QB"},"PostalCode":"K1Z8E8","RelativeDetailsURL":"#","StatusId":"1","OpenHouseInsertDateUTC":"2017-09-13 2:38:03 PM","HasOpenHouseUpdate":true,"PriceChangeDateUTC":"27/09/2017 4:04:54 AM","HasPriceUpdate":true,"PhotoChangeDateUTC":"06/09/2017 3:53:26 AM","HasNewImageUpdate":true,"Distance":""}],"Pins":[],"ErrorCode":{"Id":200,"Description":"Success (hidden)","Status":"Pins-Via-Cache:false;Sidebar-Items-Via-Cache:1;"},"Paging":{"RecordsPerPage":5,"CurrentPage":1,"TotalRecords":1,"MaxRecords":150,"TotalPages":1,"RecordsShowing":1,"Pins":0}}'), u, f, i, n = 0, t = o.Results; n < t.length; n++) u = t[n], r.push(new ListingCardModel(u, 1));
				f = new ListingResultsModel(r);
				i = new ControlFetcherArgs("notificationSignUpContents");
				i.postCallHandler = function(n) { $("#notifySignUpListing").append('<div class="loadingIn" > ' + n + " <\/div>");
					$("#notifySignUpListingCon .propertyCardDetailsFavouriteIcon").removeClass("favouriteIcon");
					$("#notifySignUpListingCon a").attr("onclick", "return false;");
					$("#notifySignUpListingCon .smallListingCardFavIcon").attr("src", "/wp-content/plugins/adk_feed/assets/images/heart.svg");
					e.refreshSampleNotificationCon($("#notifySignUpListing")) };
				ControlFetcherJS.fetchSmallListingCards(i, f);
				$(window).scroll() }, t.prototype.refreshSampleNotificationCon = function(n) { n.find(".notificationCon").each(function() { var i = "",
				n = $(this).attr("data-value"),
				o = n.split("_")[0],
				r = n.split("_")[1] == "true",
				u = n.split("_")[2] == "true",
				f = n.split("_")[3] == "true",
				s = parseInt(n.split("_")[4]),
				e = !1,
				t = [];
				u && t.push(Translation.get("PriceChange"));
				r && t.push(Translation.get("OpenHouseChange"));
				f && t.push(Translation.get("ImageChange"));
				i = t.join(", ");
				e = u || r || f;
				e && ($(this).find(".m_notification_pill").html(Translation.get("UPDATED") + ":"), $(this).find(".m_listingCardNotificationsText").html(i), $(this).show()) }) }, t }(WebPage);
			n.NotificationsSignUp = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(i) {
			function r(n, t) { var r = i.call(this, n, t) || this; return r.organizationId = "", r.init(), r } return __extends(r, i), r.prototype.loadModel = function(n) { this.organizationId = n.organizationId;
				t.Office.instance = this }, r.prototype.registerEventHandlers = function() { Binding.setControlValsFromHash($("#officeDetailsRealtorsCon")); var n = this;
				$("#officeBackBtn").click(function() { history.back() });
				Events.Listen(Controls.Desktop.RealtorResults.realtorResultsLoaded, n.updateRealtorPagination);
				Events.Listen(Controls.Desktop.Pagination.paginationPageChanged, function(n) { URLHash.set("page", n.detail.page.toString(), !1, !0) });
				$(window).on("hashchange", function() { location.hash && n.updateRealtorResults() });
				$("#ddlOfficeRealtorSort").change(function() { var n = $(this).val();
					n != URLHash.get("sort", "") && URLHash.setValues({ page: "1", sort: n }, !1, !0) });
				$(".ddlResultsPages").change(function() { var n = $(this).val();
					URLHash.set("page", n, !0, !0) }) }, r.prototype.render = function() { var t = this,
				n;
				showLoadingAnimation($(".loadingPlaceholder"));
				this.organizationId != null && ($("#ListingsCardCarouselCon").length > 0 && this.getListingCarouselData(), DropDown.loadSelect2($("#ddlOfficeRealtorSort"), { allowClear: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", stopOpenOnClear: !0, width: "300px" }), this.updateRealtorResults(), n = $("#OfficeCard-" + this.organizationId), n.find(".officeDetailsLink").removeAttr("href")) }, r.prototype.updateRealtorPagination = function(t) { var e = this,
				i, u, r, f; for ($(".realtorResultsInnerCon").removeClass("hidden"), i = t.detail, $(".paginationTotalPagesNum").text(Math.min(i.TotalPages, n.Pages.RealtorResults.maxPages)), $(".realtorResultsTotalResultsNum").text(Number(i.TotalResults).toLocaleString(ApplicationState.LanguageAttribute)), $(".realtorResultsStartNum").text(Number(i.StartNum).toLocaleString(ApplicationState.LanguageAttribute)), $(".realtorResultsEndNum").text(Number(i.EndNum).toLocaleString(ApplicationState.LanguageAttribute)), u = i.CurrentPage.toString(), $(".ddlResultsPages").empty(), r = 1; r <= Math.min(i.TotalPages, n.Pages.RealtorResults.maxPages); r++) f = new Option(r.toString(), r.toString()), $(".ddlResultsPages").append(f);
				$(".ddlResultsPages").val(u).trigger("change") }, r.prototype.updateRealtorResults = function() { var t = new ControlFetcherArgs("", "realtorResultsCon"),
				n, r, i;
				t.showLoadingAnimation = !1;
				t.showLoadingSpinner = !0;
				t.removeFromCacheAfterFetch = !0;
				n = new RealtorSearchResultsControlArgs;
				n.showOfficeDetails = !1;
				t.postCallHandler = function(n) { n.d == ControlFetcher.NoResultsResponse ? $("#officeDetailsTopCon").css("margin-bottom", "20px") : ($("#officeDetailsRealtorsCon").show(), Events.Fire(Controls.Desktop.Pagination.paginationNeedsRefresh), $("#ddlOfficeRealtorSort").removeAttr("disabled")) };
				t.errorHandler = function() { Events.Fire(Controls.Desktop.Pagination.paginationNeedsRefresh);
					$("#ddlOfficeRealtorSort").removeAttr("disabled") };
				r = URLHash.getObject();
				n.organizationId = this.organizationId;
				n.currentPage = r.page || 1;
				n.recordsPerPage = 9;
				i = r.sort || "11-A";
				n.sortBy = i.toString().split("-")[0];
				n.sortOrder = i.toString().split("-")[1];
				$("#ddlOfficeRealtorSort").val(i).change();
				$(".paginationLink, .ddlResultsPages, .ResultsPaginationCon, #ddlOfficeRealtorSort").attr("disabled", "true");
				ControlFetcher.fetchRealtorResults(t, n) }, r.prototype.loadOfficeListings = function(n, t) { var i, r; for (t.totalListingCount = n.Paging.TotalRecords, $("#listingLoader").hide(), $("#listingCarouselCon").show(), i = [], r = 0; r < n.Results.length; r++) i.push(new ListingCardModel(n.Results[r]));
				TemplateFetcher.fetchListingCard(function(n) { for (var u = "", r, f, t = 0; t < i.length; t++) u += '<div class="cardCon">' + TemplateBinding.fillTemplateValues($(n.ControlHTML), i[t]) + "<\/div>";
					r = "";
					r += '<div id="officeDetailsListingsHeaderCon" class="officeDetailsHeader"><div class="contentBoxHeading">' + Translation.get("OfficeListings") + "<\/div><\/div>";
					f = "";
					$("#listingCarouselCon").append('<div id="officeListings">' + r + '<div class="listingsCon">' + u + "<\/div>" + f + "<\/div>");
					setUniformHeightsForLargeListingCards("#listingCarouselCon");
					setDetailsCardLayout($("#listingCarouselCon"), i.length);
					updateLoadedContent($("#listingCarouselCon")) }) }, r.prototype.getListingCarouselData = function() { var n = { OrganizationId: this.organizationId, CurrentPage: "1", SortBy: "23", RecordsPerPage: "4" };
				this.listingCriteria = n;
				APIProxy.propertySearch(n, this.loadOfficeListings, this, !1) }, r.maxPages = 50, r }(WebPage);
			t.Office = i })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.currentlyFetchingResults = !1, r.init(), r } return __extends(i, t), i.prototype.loadModel = function() {}, i.prototype.render = function() { DropDown.loadSelect2($("#ddlOfficeSort"), { allowClear: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", stopOpenOnClear: !0, width: "300px" });
				this.updateResults() }, i.prototype.registerEventHandlers = function() { Binding.setControlValsFromHash($("#officeResultsOuterCon")); var n = this;
				$("#officeResultsBackBtn").click(function() { var n = URLHash.getObject();
					delete n.sort;
					delete n.page;
					location.href = RouteHelper.getURL("meet-a-realtor") + "#v=office&" + $.param(n) });
				Events.Listen(Controls.Desktop.OfficeResults.officeResultsLoaded, n.updatePagination);
				Events.Listen(Controls.Desktop.Pagination.paginationPageChanged, function(n) { URLHash.set("page", n.detail.page.toString(), !0, !0) });
				$(window).on("hashchange", function() { n.updateResults() });
				ApplicationState.Current.Controls.officePagination.pageChange.Listen(function() { $("html,body").animate({ scrollTop: $("#officeSearchResultsHeaderCon").offset().top }, 150) });
				$("#ddlOfficeSort").change(function() { var t = $(this).val(),
					n;
					t != URLHash.get("sort", "") && (n = URLHash.getObject(), n.page = "1", n.sort = t, URLHash.setValues(n, !0, !0)) });
				$(".ddlResultsPages").change(function() { var n = $(this).val();
					URLHash.set("page", n, !0, !0) }) }, i.prototype.updatePagination = function(t) { var e = this,
				i, u, r, f; for ($(".officeResultsInnerCon").removeClass("hidden"), i = t.detail, i.TotalResults > i.RecordsPerPage * i.TotalPages ? $(".paginationTotalPagesNum").text(i.TotalPages + "+") : $(".paginationTotalPagesNum").text(Math.min(i.TotalPages, n.Pages.OfficeResults.maxPages)), $(".officeResultsTotalResultsNum").text(Number(i.TotalResults).toLocaleString(ApplicationState.LanguageAttribute)), $(".officeResultsStartNum").text(Number(i.StartNum).toLocaleString(ApplicationState.LanguageAttribute)), $(".officeResultsEndNum").text(Number(i.EndNum).toLocaleString(ApplicationState.LanguageAttribute)), u = i.CurrentPage.toString(), $(".ddlResultsPages").empty(), r = 1; r <= Math.min(i.TotalPages, n.Pages.OfficeResults.maxPages); r++) f = new Option(r.toString(), r.toString()), $(".ddlResultsPages").append(f);
				$(".ddlResultsPages").val(u).trigger("change") }, i.prototype.updateResults = function() { var u = this,
				i = new ControlFetcherArgs("", "officeResultsCon"),
				n, t, r;
				i.showLoadingAnimation = !1;
				i.showLoadingSpinner = !0;
				i.removeFromCacheAfterFetch = !0;
				n = new OfficeSearchResultsControlArgs;
				i.postCallHandler = function() { Events.Fire(Controls.Desktop.Pagination.paginationNeedsRefresh);
					$("#ddlOfficeSort").removeAttr("disabled") };
				i.errorHandler = function(n, t) { Events.Fire(Controls.Desktop.Pagination.paginationNeedsRefresh);
					$("#ddlOfficeSort").removeAttr("disabled");
					alert(t) };
				t = URLHash.getObject();
				n.name = t.office || "";
				n.city = t.city || "";
				n.provinceIDs = t.province || "";
				n.postalCode = t.postalcode || "";
				n.address = t.address || "";
				n.currentPage = t.page || 1;
				n.recordsPerPage = 20;
				r = t.sort || "2-A";
				n.sortBy = r.toString().split("-")[0];
				n.sortOrder = r.toString().split("-")[1];
				$("#ddlOfficeSort").val(r).change();
				$(".paginationLink, .ddlResultsPages, .ResultsPaginationCon, #ddlOfficeSort").attr("disabled", "true");
				ControlFetcher.fetchOfficeResults(i, n) }, i.maxPages = 50, i }(WebPage);
			t.OfficeResults = i })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { $(".btnBack").click(function() { Utilities.backLogic() }) }, t.prototype.render = function() {}, t }(WebPage);
			n.PrivacyPolicy = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { DropDown.loadSelect2($("#ddl_Cities"), { tags: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", allowSearch: !1, width: "325px" }) }, t.prototype.registerEventHandlers = function() { var n = this;
				$("#ddl_Cities").change(function() { n.setSearchUrlValue() });
				$("#prov_search_btn").click(function() { $("#ddl_Cities").val() != "0" && n.DiscMap() }) }, t.prototype.setSearchUrlValue = function() { var n = this;
				n.selectCityUrl = $("#ddl_Cities").val() }, t.prototype.DiscMap = function() { var t = this,
				n = t.selectCityUrl;
				n != "0" && Core.GoToPage(n) }, t }(WebPage);
			n.Province = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.individualId = "", r.organizationId = "", r.showListingsSection = !1, r.showOfficeListings = !1, r.firstName = "", r.totalListingCount = 0, r.totalOfficeListingCount = 0, r.init(), r } return __extends(t, n), t.prototype.loadModel = function(n) { this.individualId = n.individualId;
				this.organizationId = n.organizationId;
				this.showListingsSection = n.showListingsSection;
				this.showOfficeListings = n.showOfficeListings;
				this.firstName = n.firstName }, t.prototype.render = function() { var t = this,
				n;
				setConsistantHeights(".realtorCardInnerTop, .officeCardInnerTop");
				setConsistantHeights(".realtorCardInnerBottom, .officeCardInnerBottom");
				showLoadingAnimation($(".loadingPlaceholder"));
				this.showListingsSection && this.individualId != null && $("#realtorDetailsListingsCon").length > 0 && this.getRealtorListings();
				this.showOfficeListings && this.individualId != null && $("#realtorDetailsOfficeListingsCon").length > 0 && this.getOfficeListings();
				URLHash.containsKey("RankMyAgent") ? ScrollToElement($("#RealtorTestimonialCon")) : URLHash.containsKey("RealSatisfied") && ScrollToElement($("#RealtorRankingCon"));
				n = $("#RealtorCard-" + this.individualId);
				n.find(".realtorDetailsLink").removeAttr("href") }, t.prototype.registerEventHandlers = function() { var n = this;
				$("#realtorBackBtnCon").click(function() { history.back() });
				$("#realtorDetailsCard").find(".realtorCardRankOverallRatingBarCon").click(function() { return URLHash.removeHash(), URLHash.set("RankMyAgent", null, !1), ScrollToElement($("#RealtorTestimonialCon")), !1 });
				$("#realtorDetailsCard").find(".realtorCardRealSatisifedRatingBarCon").click(function() { return URLHash.removeHash(), URLHash.set("RealSatisfied", null, !1), ScrollToElement($("#RealtorRankingCon")), !1 }) }, t.prototype.loadRealtorListings = function(n, t) { var i, r; for (t.totalListingCount = n.Paging.TotalRecords || 0, $("#listingLoader").hide(), $("#listingsCon").show(), i = [], r = 0; r < n.Results.length; r++) i.push(new ListingCardModel(n.Results[r]));
				TemplateFetcher.fetchListingCard(function(n) { for (var f = "", u, e, r = 0; r < i.length; r++) f += '<div class="cardCon">' + TemplateBinding.fillTemplateValues($(n.ControlHTML), i[r]) + "<\/div>";
					u = "";
					u += '<div id="realtorDetailsListingDetailsHeaderCon" class="realtorDetailsHeader"><div class="contentBoxHeading">' + Translation.get("RealtorNamesListings", t.firstName) + "<\/div><\/div>";
					e = "";
					$("#listingsCon").append('<div id="realtorListings">' + u + '<div class="listingsCon">' + f + "<\/div>" + e + "<\/div>");
					setUniformHeightsForLargeListingCards("#listingsCon");
					setDetailsCardLayout($("#listingsCon"), i.length);
					updateLoadedContent($("#listingsCon")) }) }, t.prototype.getRealtorListings = function() { var n = { IndividualId: this.individualId, CurrentPage: "1", RecordsPerPage: "4", SortBy: "23" };
				this.listingCriteria = n;
				APIProxy.propertySearch(n, this.loadRealtorListings, this, !1) }, t.prototype.loadOfficeListings = function(n, t) { var i, r; for (t.totalOfficeListingCount = n.Paging.TotalRecords || 0, $("#officeListingLoader").hide(), $("#officeListingsCon").show(), i = [], r = 0; r < n.Results.length; r++) i.push(new ListingCardModel(n.Results[r]));
				TemplateFetcher.fetchListingCard(function(n) { for (var u = "", r, f, t = 0; t < i.length; t++) u += '<div class="cardCon">' + TemplateBinding.fillTemplateValues($(n.ControlHTML), i[t]) + "<\/div>";
					r = "";
					r += '<div id="realtorDetailsOfficeDetailsHeaderCon" class="realtorDetailsHeader"><div class="contentBoxHeading">' + Translation.get("OfficeListings") + "<\/div><\/div>";
					f = "";
					$("#officeListingsCon").append('<div id="officeListings">' + r + '<div class="listingsCon">' + u + "<\/div>" + f + "<\/div>");
					setUniformHeightsForLargeListingCards("#officeListingsCon");
					setDetailsCardLayout($("#officeListingsCon"), i.length);
					updateLoadedContent($("#officeListingsCon")) }) }, t.prototype.getOfficeListings = function() { var n = { OrganizationId: this.organizationId, CurrentPage: "1", RecordsPerPage: "4", SortBy: "23" };
				this.officeListingCriteria = n;
				APIProxy.propertySearch(n, this.loadOfficeListings, this, !1) }, t }(WebPage);
			n.Realtor = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
				$(".btnBack").click(function() { Utilities.backLogic() }) }, t.prototype.render = function() {}, t }(WebPage);
			n.RealtorCodeOfEthics = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.currentlyFetchingResults = !1, r.init(), r } return __extends(i, t), i.prototype.loadModel = function() {}, i.prototype.render = function() { DropDown.loadSelect2($("#ddlRealtorSort"), { allowClear: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", stopOpenOnClear: !0, width: "300px" });
				this.updateResults() }, i.prototype.registerEventHandlers = function() { Binding.setControlValsFromHash($("#realtorResultsOuterCon")); var n = this;
				$("#realtorResultsBackBtn").click(function() { Utilities.backLogic() });
				Events.Listen(Controls.Desktop.RealtorResults.realtorResultsLoaded, n.updatePagination);
				Events.Listen(Controls.Desktop.Pagination.paginationPageChanged, function(n) { URLHash.set("page", n.detail.page.toString(), !0, !0) });
				$(window).on("hashchange", function() { n.updateResults() });
				ApplicationState.Current.Controls.realtorPagination.pageChange.Listen(function() { $("html,body").animate({ scrollTop: $("#realtorSearchResultsHeaderCon").offset().top }, 150) });
				$("#ddlRealtorSort").change(function() { var t = $(this).val(),
					n;
					t != URLHash.get("sort", "") && (n = URLHash.getObject(), n.page = "1", n.sort = t, URLHash.setValues(n, !0, !0)) });
				$(".ddlResultsPages").change(function() { var n = $(this).val();
					URLHash.set("page", n, !0, !0) }) }, i.prototype.updatePagination = function(t) { var e = this,
				i, u, r, f; for ($(".realtorResultsInnerCon").removeClass("hidden"), i = t.detail, i.TotalResults > i.RecordsPerPage * i.TotalPages ? $(".paginationTotalPagesNum").text(i.TotalPages + "+") : $(".paginationTotalPagesNum").text(Math.min(i.TotalPages, n.Pages.RealtorResults.maxPages)), $(".realtorResultsTotalResultsNum").text(Number(i.TotalResults).toLocaleString(ApplicationState.LanguageAttribute)), $(".realtorResultsStartNum").text(Number(i.StartNum).toLocaleString(ApplicationState.LanguageAttribute)), $(".realtorResultsEndNum").text(Number(i.EndNum).toLocaleString(ApplicationState.LanguageAttribute)), u = i.CurrentPage.toString(), $(".ddlResultsPages").empty(), r = 1; r <= Math.min(i.TotalPages, n.Pages.RealtorResults.maxPages); r++) f = new Option(r.toString(), r.toString()), $(".ddlResultsPages").append(f);
				$(".ddlResultsPages").val(u).trigger("change") }, i.prototype.updateResults = function() { var u = this,
				i = new ControlFetcherArgs("", "realtorResultsCon"),
				n, t, r;
				i.showLoadingAnimation = !1;
				i.showLoadingSpinner = !0;
				i.removeFromCacheAfterFetch = !0;
				n = new RealtorSearchResultsControlArgs;
				i.postCallHandler = function() { Events.Fire(Controls.Desktop.Pagination.paginationNeedsRefresh);
					$("#ddlRealtorSort").removeAttr("disabled") };
				i.errorHandler = function() { Events.Fire(Controls.Desktop.Pagination.paginationNeedsRefresh);
					$("#ddlRealtorSort").removeAttr("disabled") };
				t = URLHash.getObject();
				n.firstName = t.firstname || "";
				n.lastName = t.lastname || "";
				n.city = t.city || "";
				n.provinceIds = t.province || "";
				n.companyName = t.office || "";
				n.languages = t.languages || "";
				n.designations = t.designations || "";
				n.specialties = t.specialties || "";
				n.isCCCMember = t.isccn || "";
				n.currentPage = t.page || 1;
				r = t.sort || "11-A";
				n.sortBy = r.toString().split("-")[0];
				n.sortOrder = r.toString().split("-")[1];
				$("#ddlRealtorSort").val(r).change();
				$(".paginationLink, .ddlResultsPages, .ResultsPaginationCon, #ddlRealtorSort").attr("disabled", "true");
				ControlFetcher.fetchRealtorResults(i, n) }, i.maxPages = 50, i }(WebPage);
			t.RealtorResults = i })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.realtorSingleResultURL = "", r.officeSingleResultURL = "", r.init(), r } return __extends(i, t), i.prototype.loadModel = function() { n.RealtorSearch.instance = this }, i.prototype.render = function() { var n = this;
				n.loadMultiSelects();
				n.showCurrentTab(!0) }, i.prototype.loadMultiSelects = function() { var n = $("#ddlLocationDesignation, #ddlLocationLanguages, #ddlLocationSpeciality, #ddlRealtorDesignations, #ddlRealtorLanguage, #ddlRealtorSpecialty");
				DropDown.loadSelect2(n, { allowClear: !1, placeholderText: "0 " + Translation.get("ItemsSelectedSingular"), closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", multiSelectWithoutTags: !0, width: "100%" });
				DropDown.loadSelect2($("#realtorSearchCon select").not(n), { allowClear: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", width: "100%" }) }, i.prototype.registerEventHandlers = function() { var n = this;
				$(".btnBack").click(function() { Utilities.backLogic() });
				$(window).on("hashchange", function() { n.showCurrentTab(); var t = URLHash.get("v", "").toLowerCase();
					t == "realtor" ? Controls.Desktop.SocialShare.overwriteSocialShareEvent.Fire({ ssm: n.rssm }) : t == "location" || t == "" ? Controls.Desktop.SocialShare.overwriteSocialShareEvent.Fire({ ssm: n.rssm }) : t == "office" && Controls.Desktop.SocialShare.overwriteSocialShareEvent.Fire({ ssm: n.ossm }) });
				$("#btnFindARealtorBuyerInfo").click(function() { return location.href = RouteHelper.getURL("tips-for-buyers"), !1 });
				$("#searchByRealtorTab").click(function() { location.hash = "v=realtor";
					n.showCurrentTab(!1) });
				$("#searchByLocationTab").click(function() { location.hash = "v=location";
					n.showCurrentTab(!1) });
				$("#searchByOfficeTab").click(function() { location.hash = "v=office";
					n.showCurrentTab(!1) });
				$("#btnLocationSearch").click(function() { return n.locationSearch(), !1 });
				$("#btnByNameSearch").click(function() { return n.realtorSearch(), !1 });
				$("#btnOfficeSearch").click(function() { return n.officeSearch(), !1 });
				$("#btnFindARealtorOfficeReset").click(function() { resetInputControls($("#SearchByOffice")) });
				$("#btnFindARealtorByNameReset").click(function() { resetInputControls($("#SearchByRealtor")) });
				$("#btnFindARealtorLocationReset").click(function() { resetInputControls($("#SearchByLocation")) });
				$(document).keypress(function(n) { if (n.which && n.which == 13 || n.keyCode && n.keyCode == 13) return $("#searchByLocationTab").hasClass("active") ? $("#btnLocationSearch").click() : $("#searchByRealtorTab").hasClass("active") ? $("#btnByNameSearch").click() : $("#searchByOfficeTab").hasClass("active") && $("#btnOfficeSearch").click(), n.stopPropagation(), !1 });
				Events.Listen(Controls.Desktop.RealtorResults.realtorSingleResultLoaded, n.checkRealtorSingleResult);
				Events.Listen(Controls.Desktop.OfficeResults.officeSingleResultLoaded, n.checkOfficeSingleResult) }, i.prototype.updateSearchView = function() {}, i.prototype.resetAllSearchFields = function() { resetInputControls($("#SearchByOffice"));
				resetInputControls($("#SearchByRealtor"));
				resetInputControls($("#SearchByLocation")) }, i.prototype.refreshMultiSelects = function() { $("#ddlLocationDesignation, #ddlLocationLanguages, #ddlLocationSpeciality,#ddlRealtorDesignations,#ddlRealtorLanguage,#ddlRealtorSpecialty").trigger("change") }, i.prototype.showCurrentTab = function(n) { n === void 0 && (n = !1); var i = this,
				t = URLHash.get("v", "").toLowerCase();
				t == "realtor" ? ($("#SearchByRealtor").show(), $("#SearchByOffice").hide(), $("#SearchByLocation").hide(), $("#searchByRealtorTab").addClass("active"), $("#searchByLocationTab").hasClass("active") && $("#searchByLocationTab").removeClass("active"), $("#searchByOfficeTab").hasClass("active") && $("#searchByOfficeTab").removeClass("active"), n ? (Binding.setControlValsFromHash($("#SearchByRealtor")), this.refreshMultiSelects()) : location.hash = "v=realtor") : t == "location" || t == "" ? ($("#SearchByLocation").show(), $("#SearchByRealtor").hide(), $("#SearchByOffice").hide(), $("#searchByLocationTab").addClass("active"), $("#searchByRealtorTab").hasClass("active") && $("#searchByRealtorTab").removeClass("active"), $("#searchByOfficeTab").hasClass("active") && $("#searchByOfficeTab").removeClass("active"), n ? (Binding.setControlValsFromHash($("#SearchByLocation")), this.refreshMultiSelects()) : location.hash = "v=location") : t == "office" && ($("#SearchByRealtor").hide(), $("#SearchByLocation").hide(), $("#SearchByOffice").show(), $("#searchByOfficeTab").addClass("active"), $("#searchByRealtorTab").hasClass("active") && $("#searchByRealtorTab").removeClass("active"), $("#searchByLocationTab").hasClass("active") && $("#searchByLocationTab").removeClass("active"), n ? (Binding.setControlValsFromHash($("#SearchByOffice")), this.refreshMultiSelects()) : location.hash = "v=office") }, i.prototype.checkRealtorSingleResult = function(t) { var r = n.RealtorSearch.instance,
				i = t.detail;
				i.SingleResultURL != "" && (r.realtorSingleResultURL = i.SingleResultURL) }, i.prototype.checkForResults_Realtors = function(t) { var f = n.RealtorSearch.instance,
				r = new ControlFetcherArgs("", "resultsHidden"),
				i, e, u;
				r.showLoadingAnimation = !1;
				r.cacheResult = !0;
				i = new RealtorSearchResultsControlArgs;
				r.postCallHandler = function(n) { if (n.d == ControlFetcher.NoResultsResponse) showMessage(Translation.get("NoRealtors"), MessageType.Normal, DisplayType.Toast);
				else { var i = Object.assign({}, t);
					delete i.sort;
					delete i.page;
					URLHash.setValues(i, !1);
					delete t.v;
					f.realtorSingleResultURL != "" ? Core.GoToPage(f.realtorSingleResultURL + "#" + $.param(t)) : Core.GoToPage(RouteHelper.getURL("realtor-search-results") + "#" + $.param(t)) } };
				e = URLHash.getObject();
				i.firstName = t.firstname || "";
				i.lastName = t.lastname || "";
				i.city = t.city || "";
				i.provinceIds = t.province || "";
				i.companyName = t.office || "";
				i.languages = t.languages || "";
				i.designations = t.designations || "";
				i.specialties = t.specialties || "";
				i.isCCCMember = t.isccn || "";
				i.currentPage = t.page || 1;
				u = t.sort || "";
				i.sortBy = u.toString().split("-")[0];
				i.sortOrder = u.toString().split("-")[1];
				ControlFetcher.fetchRealtorResults(r, i) }, i.prototype.checkOfficeSingleResult = function(t) { var r = n.RealtorSearch.instance,
				i = t.detail;
				i.SingleResultURL != "" && (r.officeSingleResultURL = i.SingleResultURL) }, i.prototype.checkForResults_Offices = function(t) { var f = n.RealtorSearch.instance,
				r = new ControlFetcherArgs("", "resultsHidden"),
				i, u;
				r.showLoadingAnimation = !1;
				r.cacheResult = !0;
				i = new OfficeSearchResultsControlArgs;
				r.postCallHandler = function(n) { if (n.d == ControlFetcher.NoResultsResponse) showMessage(Translation.get("NoOffices"), MessageType.Normal, DisplayType.Toast);
				else { var i = Object.assign({}, t);
					delete i.sort;
					delete i.page;
					URLHash.setValues(i, !1);
					delete t.v;
					f.officeSingleResultURL != "" ? Core.GoToPage(f.officeSingleResultURL + "#" + $.param(t)) : Core.GoToPage(RouteHelper.getURL("office-search-results") + "#" + $.param(t)) } };
				i.name = t.office || "";
				i.city = t.city || "";
				i.provinceIDs = t.province || "";
				i.postalCode = t.postalcode || "";
				i.address = t.address || "";
				i.currentPage = t.page || 1;
				i.recordsPerPage = 20;
				u = t.sort || "";
				i.sortBy = u.toString().split("-")[0];
				i.sortOrder = u.toString().split("-")[1];
				ControlFetcher.fetchOfficeResults(r, i) }, i.prototype.locationSearch = function(n) { n === void 0 && (n = !1); var t = WebControl.getValuesFromControlsAsObject(["SearchByLocation"], !1, null, !1);
				this.SetDefaultLocationSort();
				t.page = "1";
				t.sort = this.sortOrder;
				this.checkForResults_Realtors(t) }, i.prototype.officeSearch = function(n) { n === void 0 && (n = !1); var t = WebControl.getValuesFromControlsAsObject(["SearchByOffice"], !1, null, !1);
				this.SetDefaultOfficeSort();
				t.page = "1";
				t.sort = this.sortOrder;
				t.v = "office";
				this.checkForResults_Offices(t) }, i.prototype.SetDefaultOfficeSort = function() { this.sortOrder = $("#txtOfficeName").val().trim() != "" ? "2-A" : "8-A" }, i.prototype.SetDefaultRealtorSort = function() { this.sortOrder = $("#txtRealtorFirstName").val().trim() != "" || $("#txtRealtorLastName").val().trim() != "" ? "3-A" : "11-A" }, i.prototype.SetDefaultLocationSort = function() { this.sortOrder = "11-A" }, i.prototype.realtorSearch = function(n) { n === void 0 && (n = !1); var t = WebControl.getValuesFromControlsAsObject(["SearchByRealtor"], !1, null, !1);
				this.SetDefaultRealtorSort();
				t.page = "1";
				t.sort = this.sortOrder;
				t.v = "realtor";
				this.checkForResults_Realtors(t) }, i }(WebPage);
			n.RealtorSearch = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.savedSearches = [], r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var t = this,
				n = this;
				Events.Listen(SavedSearch.savedSearchesUpdated, function() { n.RefreshUI() });
				Events.Listen(Gigya.consumerLoginEvent, function() { ApplicationState.UserIsSignedIn && t.LoadConsumerData(n) });
				$("#lnkSavedSearchDeleteAll").click(function() { var t = new ConfirmationDialogModel2("ConfirmDeleteAllSavedSearches", "", Translation.get("ConfirmSaveSearchDeleteAll"), Translation.get("Yes"), function(t, i) { SavedSearch.DeleteAll(null);
					Events.Fire(SavedSearch.savedSearchesUpdated, null);
					i.Featherlight.close();
					$("#SavedSearchesCon").hide();
					showMessage(Translation.get("Deleted"));
					n.RefreshUI() }, Translation.get("No"), function(n, t) { t.Featherlight.close() }); return t.ShowTitleBar = !1, showConfirmationDialog2(t), !1 });
				$("#lnkSavedSearchNotificationSettings").click(function() { return Core.redirectTo(RouteHelper.getURL("my-account") + "#section=Notifications"), !1 }) }, t.prototype.render = function() { var n = this;
				ApplicationState.UserIsSignedIn ? this.LoadConsumerData(n) : this.LoadData(n) }, t.prototype.LoadConsumerData = function(n) { var i = this,
				t;
				showLoadingAnimation($("#SavedSearchLoadingCon"));
				t = new GetAccountFromBOLCallbackArgs;
				t.page = n;
				t.functionCalls = function(n) { i.LoadData(n) };
				Gigya.GetAccountFromBOL(ApplicationConfig.GigyaSyncRealTime, !1, t) }, t.prototype.LoadData = function(n) { n.loadSearches();
				n.loadSearchedIntoListView(n.savedSearches, "SavedSearchesDataCon");
				n.RefreshUI() }, t.prototype.RefreshUI = function() { var i, n, t;
				ApplicationState.UserIsSignedIn && $("#SavedSearchLoadingCon").hide();
				i = this;
				n = SavedSearch.GetAll().length > 0;
				$("#SavedSearchDeleteAllCon").toggle(n);
				$("#NoSavedSearchesCon").toggle(!n);
				$("#SavedSearchesCon").toggle(n);
				$("#SavedSearchNotifcationPreferencesLinkCon").toggle(ApplicationState.UserIsSignedIn);
				t = n || ApplicationState.UserIsSignedIn;
				$(".PageHeaderActionsCon").toggle(t);
				$("#SavedSearchesPageInnerCon").is(":visible") == !1 && n == !1 && AnimateIn($("#SavedSearchesPageInnerCon"), EntryAnimations.fadeIn, .3, TransitionTiming.ease_in) }, t.prototype.loadSearches = function() { var t, n; for (this.savedSearches = [], t = SavedSearch.GetAll(), n = 0; n < t.length; n++) this.savedSearches.push(t[n]) }, t.prototype.loadSearchedIntoListView = function(n, t) { var i, r, u; for ($("#SavedSearchesCon").toggle(n.length != 0), $("#SavedSearchDeleteAllCon").toggle(n.length != 0), $("#NoSavedSearchesCon").toggle(n.length == 0), $("#" + t).empty(), i = 0; i < n.length; i++) r = new ControlFetcherArgs("Search" + i.toString(), t), u = new SavedSearchModel(n[i]), r.postCallHandler = function(n) { $("#" + t).append("<div class='loadingIn'>" + n + "<\/div>");
				window.setTimeout(function() { callAfterAnimation($(".loadingIn"), function() { $(".loadingIn").removeClass("loadingIn") }) }, 500) }, ControlFetcherJS.fetchSavedSearch(r, u) }, t }(WebPage);
			n.SavedSearches = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.canScrollInPage = !1, r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { var n = this;
				Controls.Desktop.TabHighlighter.insert($(".infoContentSection").find(".infoContentSection_SubSection_TabItem:first"), InfoPage.initPageAfterTabSelector) }, t.prototype.registerEventHandlers = function() { InfoPage.registerEventHandlers() }, t }(WebPage);
			n.SellerInfo = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, null, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { var n = this }, t.prototype.registerEventHandlers = function() { var n = this;
				$("#SearchMapNearMe").click(function() { n.getGeoLocatedMapFwd("r") });
				$("#CommercialPropertySearch").click(function() { n.getGeoLocatedMapFwd("c") });
				$(".btnBack > .btn").click(function() { Utilities.backLogic() }) }, t.prototype.getGeoLocatedMapFwd = function(n) { var i = this,
				t = ApplicationState.IsCandianIP; return t && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(t) { var i;
				i = n === "r" ? RouteHelper.getURL("map") + "#Latitude=" + t.coords.latitude + "&Longitude=" + t.coords.longitude + "&ZoomLevel=15" : RouteHelper.getURL("map") + "#Latitude=" + t.coords.latitude + "&Longitude=" + t.coords.longitude + "&ZoomLevel=15&PropertyTypeGroupID=2";
				window.location.href = i }, function() { var n = RouteHelper.getURL("map") + "#Latitude=" + 54.920828 + "&Longitude=" + -99.316406 + "&ZoomLevel=4";
				window.location.href = n }, { maximumAge: 15e3 }) : window.location.href = RouteHelper.getURL("map"), !1 }, t }(WebPage);
			n.SiteMap = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.LocalStorageKeyForEmail = "LocalStorageKeyForEmail", r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
				$("#LnkGetRealtorStatus").click(function() { return n.TestRealtor(), !1 });
				$("#LnkGetRealorCacheStatus").click(function() { return n.TestRealtorCache(), !1 });
				$("#LnkGetAPIStatus").click(function() { return n.TestAPI(), !1 });
				$("#LnkGetAPICacheStatus").click(function() { return n.TestAPICache(), !1 });
				$("#ClearCacheBtn").click(function() { return n.FlushAPICache(), !1 });
				$("#ClearCacheBtn_Realtor").click(function() { return n.FlushRealtorCache(), !1 });
				$("#btnAPIVersion").click(function(t) { var i = new AjaxCallArgs(null);
					i.callHandler = function(t) { n.showResults(t) };
					i.contentType = "application/json; charset=UTF-8";
					AjaxEngine.POST("/services/actions.asmx/GetAPIVersion", null, i);
					t.preventDefault() });
				$("#btnErrorLoggingTest").click(function(t) { var i = new AjaxCallArgs(null);
					i.callHandler = function(t) { n.showResults(t) };
					i.contentType = "application/json; charset=UTF-8";
					AjaxEngine.POST("/services/actions.asmx/TestErrorLogging", null, i);
					t.preventDefault() });
				$("#btnEmailLoggingTest").click(function(t) { var i = new AjaxCallArgs(null);
					i.callHandler = function(t) { n.showResults(t) };
					i.contentType = "application/json; charset=UTF-8";
					AjaxEngine.POST("/services/actions.asmx/TestEmailLogging", null, i);
					t.preventDefault() }) }, t.prototype.showResults = function(n) { var t = new ConfirmationDialogModel2("Result", " ", n.d, Translation.get("OK"), function(n, t) { t.ForceCloseDialog() });
				t.ShowCloseButton = !0;
				showConfirmationDialog2(t) }, t.prototype.render = function() { localStorage.getItem(this.LocalStorageKeyForEmail) !== null && $("#emailaddress").val(localStorage.getItem(this.LocalStorageKeyForEmail) || "") }, t.prototype.TestAPICache = function() { showLoadingAnimation($("#APICacheResults"));
				$.ajax({ url: "/Services/Actions.asmx/TestAPICache", type: "POST", contentType: "application/json; charset=utf-8", dataType: "json", success: function(n) { $("#APICacheResults").html(n.d) }, error: function(n) { alert("An error has occured: " + n.responseText) } }) }, t.prototype.TestRealtorCache = function() { showLoadingAnimation($("#RealtorCacheResults"));
				$.ajax({ url: "/Services/Actions.asmx/TestRealtorCache", type: "POST", contentType: "application/json; charset=utf-8", dataType: "json", success: function(n) { $("#RealtorCacheResults").html(n.d) }, error: function(n) { alert("An error has occured: " + n.responseText) } }) }, t.prototype.FlushRealtorCache = function() { $("#ClearCacheBtn_Realtor, #CacheLoadingCon_Realtor").toggle();
				$.ajax({ url: "/Services/Actions.asmx/FlushRealtorCache", data: '{"cacheName":"' + $("#RealtorCacheNamesDDL").val() + '" }', type: "POST", contentType: "application/json; charset=utf-8", dataType: "json", success: function(n) { n.d.indexOf("Error:") == -1 ? showMessage("Success: " + n.d) : showMessage(n.d);
						$("#ClearCacheBtn_Realtor, #CacheLoadingCon_Realtor").toggle() }, error: function(n) { alert("An error has occured: " + n.responseText);
						$("#ClearCacheBtn_Realtor, #CacheLoadingCon_Realtor").toggle() } }) }, t.prototype.FlushAPICache = function() { $("#ClearCacheBtn, #CacheLoadingCon").toggle();
				$.ajax({ url: "/Services/Actions.asmx/ClearCache", data: '{"cacheName":"' + $("#CacheNamesDDL").val() + '" }', type: "POST", contentType: "application/json; charset=utf-8", dataType: "json", success: function(n) { n.d.indexOf("Error:") == -1 ? showMessage("Success: " + n.d) : showMessage(n.d);
						$("#ClearCacheBtn, #CacheLoadingCon").toggle() }, error: function(n) { alert("An error has occured: " + n.responseText);
						$("#ClearCacheBtn, #CacheLoadingCon").toggle() } }) }, t.prototype.TestRealtor = function() { if ($("#emailaddress").val() == "") return showMessage("Invalid Email"), !1;
				localStorage.setItem(this.LocalStorageKeyForEmail, $("#emailaddress").val());
				showLoadingAnimation($("#RealtorResults"));
				$.ajax({ url: "/Services/Actions.asmx/TestRealtor", data: '{"email":"' + $("#emailaddress").val() + '" }', type: "POST", contentType: "application/json; charset=utf-8", dataType: "json", success: function(n) { $("#RealtorResults").html(n.d) }, error: function(n) { alert("An error has occured: " + n.responseText) } }) }, t.prototype.TestAPI = function() { if ($("#emailaddress").val() == "") return showMessage("Invalid Email"), !1;
				localStorage.setItem(this.LocalStorageKeyForEmail, $("#emailaddress").val());
				showLoadingAnimation($("#APIResults"));
				$.ajax({ url: "/Services/Actions.asmx/TestAPI", data: '{"email":"' + $("#emailaddress").val() + '" }', type: "POST", contentType: "application/json; charset=utf-8", dataType: "json", success: function(n) { $("#APIResults").html(n.d) }, error: function(n) { alert("An error has occured: " + n.responseText) } }) }, t }(WebPage);
			n.Status = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(i, t), i.prototype.loadModel = function() {}, i.prototype.registerEventHandlers = function() { var n = this,
				t;
				$("#btnAcceptTOS").click(function() { return n.accept(), !1 });
				$("#btnDeclineTOS").click(function() { return n.decline(), !1 });
				$(".btnBack").click(function() { Utilities.backLogic() });
				URLHash.getUrlParameter("previousPage") == "PDP" && (t = $("#TOU_Overlay").clone(), $("#TOU_Overlay").remove(), n.TOUMCM = new ModalContentModel("TOUModal", "", t), n.TOUMCM.AfterOpen = function() { $(".featherlight-content").addClass("ModalModeSpecialParam");
					$("#TOUModal #TOU_Overlay").css("display", "block");
					$("#TOUModal #btnAcceptTOSModal").click(function() { return n.accept(), !1 });
					$("#TOUModal #btnDeclineTOSModal").click(function() { return n.decline(), !1 }) }, n.TOUMCM.CloseEvent = "close_TOU_event", n.TOUMCM.DisplayType = ModalDisplayTypes.Featherlight, showModalContent(n.TOUMCM)) }, i.prototype.render = function() { URLHash.keyExists("accept") && $("#disclaimerButtonCon").show() }, i.prototype.accept = function() { Cookie.TermsOfUse.save(ApplicationConfig.TOSDate);
				this.model.DisplayedOverPage ? Events.Fire(n.TermsOfUse.TermsOfUseAcceptedEvent) : location.replace(Cookie.TargetPage.get()) }, i.prototype.decline = function() { document.referrer != null && document.referrer.length > 0 && location.origin != null && location.origin.length > 0 && document.referrer.indexOf(location.origin) == 0 && history.length > 0 ? history.go(-1) : location.href = "\\" }, i.TermsOfUseAcceptedEvent = "TermsOfUseAcceptedEvent", i }(WebPage);
			n.TermsOfUse = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.firstName = "", r.lastName = "", r.CREA_mail_updates = !1, r.REALTOR_mail_updates = !1, r.Salesforce_Contact_CREA_ID = 0, r.NotificationsEnabled = !1, r.FavNotificationsEnabled = !1, r.CompareNotificationsEnabled = !1, r.SavedSearchNotificationsEnabled = !1, r.init(), r } return __extends(i, t), i.prototype.loadModel = function(t) { this.firstName = t.firstName;
				this.lastName = t.lastName;
				this.user = t.user;
				this.CREA_mail_updates = t.CREA_mail_updates;
				this.REALTOR_mail_updates = t.REALTOR_mail_updates;
				this.Salesforce_Contact_CREA_ID = t.Salesforce_Contact_CREA_ID;
				this.NotificationsEnabled = t.NotificationsEnabled;
				this.FavNotificationsEnabled = t.FavNotificationsEnabled;
				this.CompareNotificationsEnabled = t.CompareNotificationsEnabled;
				this.SavedSearchNotificationsEnabled = t.SavedSearchNotificationsEnabled;
				n.UnsubscribeEmails.instance = this }, i.prototype.registerEventHandlers = function() { var n = this;
				$("#btnUnsubscribeCancel").click(function(n) { n.preventDefault();
					Core.redirectTo("index") });
				$("#btnUnsubscribeSubmit").click(function(t) { var i = this;
					t.preventDefault();
					$(this).hasClass("loading") == !1 && ($(this).addClass("loading"), n.saveUnsubscribeSettings(n, function() { $(i).removeClass("loading") }, function() { $(i).removeClass("loading") })) }) }, i.prototype.render = function() { var t = this,
				n;
				$("body").css("overflow", "auto");
				n = new ConsumerProfile.Consumer(t);
				n.CREA_mail_updates = t.CREA_mail_updates;
				AccountSessionStorage.CREAMailUpdates.save(String(t.CREA_mail_updates));
				n.REALTOR_mail_updates = t.REALTOR_mail_updates;
				AccountSessionStorage.REALTORMailUpdates.save(String(t.REALTOR_mail_updates));
				n.FavNotificationsEnabled = t.FavNotificationsEnabled;
				AccountSessionStorage.FavouriteNotificationEnabled.save(String(t.FavNotificationsEnabled));
				n.CompareNotificationsEnabled = t.CompareNotificationsEnabled;
				n.SavedSearchNotificationsEnabled = t.SavedSearchNotificationsEnabled;
				n.NotificationsEnabled = t.NotificationsEnabled;
				ConsumerProfile.UserAccountSettings.CREA_mail_updates = t.CREA_mail_updates;
				ConsumerProfile.UserAccountSettings.REALTOR_mail_updates = t.REALTOR_mail_updates;
				n.user.email != null && $("#m_unsubscribe_email_cnt").show();
				n.CREA_mail_updates && ($("#panel_comm").show(), $("#unsub_chk_Marketing").show());
				n.REALTOR_mail_updates && ($("#panel_comm").show(), $("#unsub_chk_Product").show());
				n.FavNotificationsEnabled && ($("#panel_notify_global").show(), $("#unsub_chk_Notify_Fave").show());
				n.CREA_mail_updates == !1 && n.REALTOR_mail_updates == !1 && n.FavNotificationsEnabled == !1 && $("#panel_nosubs").show() }, i.prototype.saveUnsubscribeSettings = function(n, t, i) { var o = !1,
				s = !1,
				r = new ScreenUnsubscribeConfirmationArgs,
				h = $("#chk_Marketing").is(":checked"),
				c = $("#chk_Product").is(":checked"),
				l = $("#chk_Notify_Fave").is(":checked"),
				b = !$("#chk_Marketing").is(":checked") && $("#chk_Marketing").is(":visible") || !$("#chk_Product").is(":checked") && $("#chk_Product").is(":visible") || !$("#chk_Notify_Fave").is(":checked") && $("#chk_Notify_Fave").is(":visible"),
				a, k, y, p, w, e, v, u, f; if (b == !1) { t && t(); return } if (a = this, k = new ConsumerProfile.Consumer(a.loadModel), h && c && l) { t && t(); return } r.user_json = JSON.stringify(a.user);
				h === !1 && (y = AccountSessionStorage.CREAMailUpdates.get(""), y != "false" && (r.showComm = !0, o = !0, s = !0));
				c === !1 && (p = AccountSessionStorage.REALTORMailUpdates.get(""), p != "false" && (r.showComm = !0, o = !0, s = !0));
				l === !1 && (w = AccountSessionStorage.FavouriteNotificationEnabled.get(""), w != "false" && (r.showNotify = !0, o = !0));
				e = {};
				v = {};
				e.CREA_mail_updates = h;
				e.REALTOR_mail_updates = c;
				v.favourites = l;
				e.Notifications = v;
				u = new AccountSetInfoArgs;
				u.data = JSON.stringify(e);
				u.CRM_update = s;
				ApplicationState.UserIsSignedIn == !1 && (u.UID = $("#" + n.clientId + "_hdn_DES").val(), r.hdn_DES = u.UID);
				f = new SetAccountInfoCallbackArgs;
				t != null && f.onSuccessFunc.push(function() { t() });
				i != null && f.onFailFunc.push(function() { i() });
				o ? (f.targetScreen = gigyaScreen.UnsubscribeConfirmation, f.targetScreenOptions = r) : ApplicationState.UserIsSignedIn == !1;
				AccountSessionStorage.CREAMailUpdates.delete();
				AccountSessionStorage.REALTORMailUpdates.delete();
				AccountSessionStorage.FavouriteNotificationEnabled.delete();
				AccountSessionStorage.CREAMailUpdates_Profile.delete();
				AccountSessionStorage.REALTORMailUpdates_Profile.delete();
				Gigya.AccountSetInfo(u, f) }, i }(WebPage);
			n.UnsubscribeEmails = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { ApplicationState.UserIsSignedIn && ($("#btnWhyGetAccountSignUp").text(Translation.get("GetNotifications2")), $("#benefitsSection6").hide()) }, t.prototype.registerEventHandlers = function() { $(".hme_youtubeVideo").click(function() { var t = {},
				n = {},
				i;
				t.width = 500;
				t.height = 280;
				t.videoId = this.id;
				n.modestbranding = 1;
				n.theme = "light";
				n.showinfo = 0;
				n.rel = 0;
				n.enablejsapi = 1;
				n.autoplay = 1;
				t.playerVars = n;
				i = new YT.Player(this.id, t) });
				$("#btnWhyGetAccountSignUp, #btnWhyGetAccountFtrSignUp").click(function() { ApplicationState.UserIsSignedIn ? Core.redirectTo(RouteHelper.getURL("my-account") + "#section=Notifications") : (SessionStorage.PostLoginRedirect.save("index"), Gigya.SignInPopup()); return }) }, t }(WebPage);
			n.WhyGetAccount = t })(t = n.Pages || (n.Pages = {})) }(Desktop || (Desktop = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t = function(n) {
		function t(t, i, r, u, f) { var e = n.call(this, t, i) || this; return e.BlogInError = !1, e.BlogInError = r, e.BlogMainContainerId = f, e.ErrorCtrlId = u, e.init(), e } return __extends(t, n), t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.loadModel = function() {}, t.prototype.render = function() { t.AuthorPageLoaded.Fire({ loaded: !0 });
			this.BlogInError && ($("#" + this.ErrorCtrlId).show(), $("#" + this.BlogMainContainerId).hide()) }, t.prototype.registerEventHandlers = function() { ScrollLocation.Set() }, t.AuthorPageLoaded = new RealtorEvent("AuthorPageLoaded"), t }(WebPage);
		n.AuthorPage = t }(Pages || (Pages = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t = function(n) {
		function t(t, i, r, u, f) { var e = n.call(this, t, i) || this; return e.BlogInError = !1, e.BlogInError = r, e.BlogMainContainerId = f, e.ErrorCtrlId = u, e.init(), e } return __extends(t, n), t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.loadModel = function() {}, t.prototype.render = function() { t.CatPageLoaded.Fire({ loaded: !0 });
			this.BlogInError && ($("#" + this.ErrorCtrlId).show(), $("#" + this.BlogMainContainerId).hide()) }, t.prototype.registerEventHandlers = function() { ScrollLocation.Set() }, t.CatPageLoaded = new RealtorEvent("CatPageLoaded"), t }(WebPage);
		n.CategoryArticle = t }(Pages || (Pages = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t = function(n) {
		function t(t, i, r, u, f) { var e = n.call(this, t, i) || this; return e.BlogInError = !1, e.BlogInError = r, e.BlogMainContainerId = f, e.ErrorCtrlId = u, e.init(), e } return __extends(t, n), t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.loadModel = function() {}, t.prototype.render = function() { t.ContPageLoaded.Fire({ loaded: !0 });
			this.equalizeHeightColumns($(".blogAuthorBlock"));
			this.BlogInError && ($("#" + this.ErrorCtrlId).show(), $("#" + this.BlogMainContainerId).hide()) }, t.prototype.equalizeHeightColumns = function(n) { for (var i = $(n), r = 0, u, t = 0; t < i.length; t++) u = i[t].clientHeight, u > r && (r = u); for (t = 0; t < i.length; t++) $(i[t]).height(r) }, t.prototype.registerEventHandlers = function() { ScrollLocation.Set() }, t.ContPageLoaded = new RealtorEvent("ContPageLoaded"), t }(WebPage);
		n.ContributorsPage = t }(Pages || (Pages = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t = function(n) {
		function t(t, i, r, u, f) { var e = n.call(this, t, i) || this; return e.BlogInError = !1, e.BlogInError = r, e.BlogMainContainerId = f, e.ErrorCtrlId = u, e.init(), e } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { t.postPageLoaded.Fire({ loaded: !0 });
			this.BlogInError && ($("#" + this.ErrorCtrlId).show(), $("#" + this.BlogMainContainerId).hide()) }, t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.registerEventHandlers = function() { var n = this;
			Events.Listen(JSException.windowError, function(t) { var i = t.detail;
				$("#" + n.BlogMainContainerId).hide();
				$("#" + n.ErrorCtrlId).show();
				Logging.Error(t.detail.ErrorMessage) }, Events.ListenerScope.Page);
			ScrollLocation.Set() }, t.postPageLoaded = new RealtorEvent("postPageLoaded"), t }(WebPage);
		n.PostPageArticle = t }(Pages || (Pages = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t = function(n) {
		function t(t, i, r, u) { var f = n.call(this, t, i) || this; return f.BlogInError = r, f.ErrorCtrlId = u, f.init(), f } return __extends(t, n), t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.loadModel = function() {}, t.prototype.render = function() { this.BlogInError && ($("#" + this.ErrorCtrlId).show(), $("#" + this.BlogMainContainerId).hide()) }, t.prototype.registerEventHandlers = function() { ScrollLocation.Set() }, t }(WebPage);
		n.SearchPage = t }(Pages || (Pages = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { $(".bannerCarousel > a").click(function(n) { var t, f, i, r, u;
				n.preventDefault();
				t = $(this).attr("href");
				f = ActionType[$(this).attr("data-type-action")];
				f == ActionType.Redirect ? window.location.href = t : f == ActionType.NewPage ? window.open(t, "_blank") : f == ActionType.Modal ? MultimediaModel.isEmbedableVideoUrl(t) ? (i = $(this).attr("data-type-id"), r = $('<div id="bannerCarouselVideo-' + i + '"><\/div>'), r.css("min-width", "640px"), r.css("min-height", "480px"), r.css("width", "calc(100% - 30px)"), u = new ModalContentModel("VideoModal", "", r), u.ButtonCloseID = "btnVideoCancel", u.AfterOpen = function() { var n = new MultimediaModel(t, "bannerCarouselVideo-" + i, VideoLoadingDisplay.Yes, VideoDisplay.VideoNoThumbnail, VideoLoadingType.LoadingNow);
					MultimediaModel.virtualTourLoadEvent.Listen(function(n) { n.detail.loaded && ($("#bannerCarouselVideo-" + i).css("min-width", ""), $("#bannerCarouselVideo-" + i).css("min-height", "")) });
					n.MultiManager.Youtube.PreferedLoadingMethod = VideoAccessType.Native;
					n.StartEmbed();
					$(".featherlight-content").addClass("VideoModeSpecialParam") }, u.DisplayType = ModalDisplayTypes.Featherlight, showModalContent(u)) : window.open(t, "_blank") : window.open(t, "_blank") }) }, t.prototype.render = function() { for (var e = this, u = $(".bannerCarousel > a"), n, i, f, r, t = 0; t < u.length; t++) n = $(u[t]), i = Utilities.LimitWording(40, n.text().trim(), !0), n.text(i), f = n.attr("data-type-action"), r = n.attr("href"), r != "" && i == "" ? (n.removeClass(), n.css({ position: "absolute", top: "0", bottom: "0", left: "0", right: "0" })) : (r.length == 0 || f.length == 0 || i.length == 0) && n.css("visibility", "hidden");
				e.Swiper = new Swiper("#bannerCarousel.swiper-container", { pagination: ".swiper-pagination", paginationClickable: !0, autoHeight: !0 }) }, t }(WebControl);
			n.BannerCarousel = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(i, t), i.prototype.loadModel = function() {}, i.prototype.render = function() { var t = this;
				n.Desktop.TabHighlighter.insert($(".tabSection"), function() { t.showCurrentTab(!0) }) }, i.prototype.registerEventHandlers = function() { var n = this,
				t = this.model;
				$(window).on("hashchange", function() {});
				$(".CalculatorTab").click(function() { var t = $(".CalculatorTab").index(this);
					n.menuslider(t) });
				$("#MortgageTab").click(function() { location.hash = "v=payment";
					n.showCurrentTab() });
				$("#LandTransferTab").click(function() { location.hash = "v=landtransfertax";
					n.showCurrentTab() });
				$("#AffordabilityTab").click(function() { location.hash = "v=affordability";
					n.showCurrentTab() });
				$(document.body).one("ratehub.widget.loaded", function() { $("form").submit(function(n) { return n.preventDefault(), !1 }); var t = n.model;
					$(".rh-widget input").keypress(function(n) { if (n.which == 13) return $(this).find(".ask").trigger("click"), !1 });
					t != null && ($("#ask").val(t.Price).blur(), $("#undoValue", "")) }) }, i.prototype.showCurrentTab = function(n) { n === void 0 && (n = !1); var i = URLHash.get("v", "").toLowerCase(),
				t = this;
				t.RemovedOldCalcWidget();
				i == "payment" || i == "" ? ($("#Mortgagetax").show(), $("#LandTransfertax").hide(), $("#Affordabilitytax").hide(), t.menuslider(0), $("#Mortgagetax").has(".rh.ng-scope").length >= 1 || t.LoadRateHub()) : i == "landtransfertax" ? ($("#LandTransfertax").show(), $("#Mortgagetax").hide(), $("#Affordabilitytax").hide(), t.menuslider(1), $("#LandTransfertax").has(".rh.ng-scope").length >= 1 || t.LoadRateHub()) : i == "affordability" && ($("#Affordabilitytax").show(), $("#Mortgagetax").hide(), $("#LandTransfertax").hide(), t.menuslider(2), $(".rh-widget.calc-affordability").length > 0 || t.LoadRateHub()) }, i.prototype.LoadRateHub = function() { var t = this;
				typeof loadWidget == "undefined" || loadWidget == null ? (Events.Listen(n.Desktop.Calculator.rateHubJSLoaded, function() { t.LoadCalculator() }), Utilities.loadScript("https://www.ratehub.ca/assets/js/widget-loader.js", function() { Events.Fire(n.Desktop.Calculator.rateHubJSLoaded) })) : t.LoadCalculator() }, i.prototype.LoadCalculator = function() { var n = URLHash.get("v", "").toLowerCase();
				n == "payment" || n == "" ? loadWidget("#CalculatorCon>div", { widget: "calc-payment", rateinput: "text-only", lang: ApplicationState.LanguageAttribute, ltt: "", cmhc: "" }) : n == "landtransfertax" ? loadWidget("#LandTransferCon>div", { widget: "calc-payment", rateinput: "text-only", lang: ApplicationState.LanguageAttribute, ltt: "only", cmhc: "" }) : n == "affordability" && loadWidget("#AffordabilityCon>div", { widget: "calc-affordability", rateinput: "text-only", lang: ApplicationState.LanguageAttribute, ltt: "", cmhc: "only" }) }, i.prototype.RemovedOldCalcWidget = function() { $("#CalculatorCon>div").replaceWith("<div><\/div>");
				$("#LandTransferCon>div").replaceWith("<div><\/div>");
				$("#AffordabilityCon>div").replaceWith("<div><\/div>") }, i.prototype.menuslider = function(n) { $(".tabHighlighter").css("left", (n * 100).toString() + "%");
				$(".CalculatorTab").removeClass("active");
				$(this).addClass("active") }, i.rateHubJSLoaded = "rateHubJSLoaded", i }(WebControl);
			t.Calculator = i })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(i, t), i.prototype.loadModel = function(n) { this.model = n }, i.prototype.render = function() { var t = this;
				t.show_dialog();
				Events.Fire(n.Desktop.ConfirmationDialog.ConfirmationDialogOpened, new DialogOpenedEventArgs(this.model.ID, this.ForceCloseDialog)) }, i.prototype.registerEventHandlers = function() { var n = this;
				$("#" + this.clientId + " #" + this.model.ButtonNegativeID).click(function(t) { n.model.ButtonNegativeOnClick != null && n.model.ButtonNegativeOnClick(t, n) });
				$("#" + this.clientId + " #" + this.model.ButtonPositiveID).click(function(t) { n.model.ButtonPositiveOnClick != null && n.model.ButtonPositiveOnClick(t, n) });
				$("#" + this.clientId + " #" + this.model.ButtonCloseID).click(function() { n.model.ButtonCloseOnClick != null && n.model.ButtonCloseOnClick(n);
					n.Featherlight.close() }) }, i.prototype.show_dialog = function() { var t = this;
				t.Featherlight = $.featherlight($("#" + t.model.ID), { closeIcon: null, type: "html", variant: "confirmation", openSpeed: 50, closeSpeed: 150, openTrigger: t.model.OpenTrigger, closeTrigger: t.model.CloseTrigger, beforeOpen: function() { t.model.BeforeOpen != null && t.model.BeforeOpen(t) }, beforeClose: function() { t.model.BeforeClose != null && t.model.BeforeClose(t);
						$("#" + t.model.ID).addClass("ConfirmationOverlayHidden") }, afterOpen: function() { window.setTimeout(function() { $("#" + t.model.ID).removeClass("ConfirmationOverlayHidden") }, 100);
						t.model.AfterOpen != null && t.model.AfterOpen(t) }, afterClose: function() { t.model.AfterClose != null && t.model.AfterClose(t);
						Events.Fire(n.Desktop.ConfirmationDialog.ConfirmationDialogClosed, new DialogClosedEventArgs(t.model.ID));
						window.setTimeout(function() { $("#" + t.model.ID + "_con").remove() }, 200) } });
				this.model.SetFocusOnLoad && SetFocusOnFirstInput($("#" + t.model.ID));
				t.ForceCloseDialog = function() { t.Featherlight.close();
					$("#" + t.model.ID).addClass("ConfirmationOverlayHidden");
					window.setTimeout(function() { $("#" + t.model.ID + "_con").remove() }, 200) } }, i.ConfirmationDialogOpened = "ConfirmationDialogOpened", i.ConfirmationDialogClosed = "ConfirmationDialogClosed", i }(WebControl);
			t.ConfirmationDialog = i })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.marker = null, r.map = null, r.init(), r } return __extends(t, n), t.prototype.loadModel = function(n) { this.polygonString = n.Polygon }, t.prototype.registerEventHandlers = function() { var n = this;
				Events.Listen(Pages.Desktop.Listing.ViewingStatistics, function() { window.setTimeout(function() { google.maps.event.trigger(n.map, "resize") }, 350) }) }, t.prototype.render = function() { var n = this;
				n.polygonString != "" && (Utilities.isGoogleMapsDefined() ? (n.map = n.CreateMap(), n.LoadPolygon(n.polygonString, n.map), n.addPin(n.model.LocationLat, n.model.LocationLon)) : Events.Listen(MasterPages.Desktop.GoogleAPILoaded, function() { n.map = n.CreateMap();
					n.LoadPolygon(n.polygonString, n.map);
					n.addPin(n.model.LocationLat, n.model.LocationLon) })) }, t.prototype.addPin = function(n, t) { var i = this,
				r = { url: "/wp-content/plugins/adk_feed/assets/images/pin-filled-purple.svg", size: new google.maps.Size(30, 30), scaledSize: new google.maps.Size(30, 30), textColor: "#ffffff", textSize: 12 };
				i.marker = new google.maps.Marker({ position: new google.maps.LatLng(Number(n), Number(t)), icon: r, map: i.map }) }, t.prototype.LoadPolygon = function(n, t) { var r, f, i, e, u, o; if (n || !1) { for (r = $.parseJSON(n), f = [], i = 0; i < r.length; i++) { for (e = [], u = 0; u < r[i].length; u++) e.push(new google.maps.LatLng(r[i][u].latitude, r[i][u].longitude));
				f.push(e) } o = new google.maps.Polygon({ paths: f, strokeColor: "#DC2828", strokeOpacity: .8, strokeWeight: 1, fillColor: "#CFB0AB", fillOpacity: .35 });
				o.setMap(t);
				t.fitBounds(Utilities.getPolygonBounds(o)) } }, t.prototype.CreateMap = function() { var n = { zoomControl: !1, center: new google.maps.LatLng(54.920828, -99.316406), zoom: 17, fullscreenControl: !1, mapTypeControl: !1, clickableIcons: !1 }; return new google.maps.Map(document.getElementById("DemographicsMap"), n) }, t }(WebControl);
			n.Demographics = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function(n) { this.chartType = n.ChartType;
				this.data = n.Data;
				this.columns = n.Columns }, t.prototype.registerEventHandlers = function() {}, t.prototype.render = function() { var n = this,
				t; if (n.chartType == "bar") c3.generate({ bindto: "#" + n.clientId + "_ChartCon", size: { width: 800, height: 420 }, data: { x: "x", columns: n.data, type: "bar" }, legend: { show: !1 }, axis: { x: { type: "category" } } });
			else if (n.chartType == "column") c3.generate({ bindto: "#" + n.clientId + "_ChartCon", size: { width: 800, height: 420 }, data: { x: "x", columns: n.data }, legend: { show: !1 }, axis: { x: { padding: { left: 1, right: 1 } } } });
			else if (n.chartType == "pie") { t = c3.generate({ bindto: "#" + n.clientId + "_ChartCon", size: { width: 600, height: 420 }, data: { columns: n.data, type: "pie" }, legend: { show: !1 }, donut: { label: { format: function(n) { return n.toString() } } } });
				d3.select("#" + n.clientId + "_ChartCon").insert("div", ".chart").attr("class", "legend").selectAll("span").data(n.columns).enter().append("div").attr("class", "LegendItem").attr("data-id", function(n) { return n.toString() }).html(function(n) { return "<div class='LegendColorChip' style='background-color: " + t.color(n.toString()) + "'><\/div><div class='LegendLabel'>" + n.toString() + "<\/div>" }).on("mouseover", function(n) { t.focus(n.toString()) }).on("mouseout", function() { t.revert() }).on("click", function(n) { t.focus(n.toString()) }) } }, t }(WebControl);
			n.DemographicsChart = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(i, t), i.prototype.loadModel = function() {}, i.prototype.render = function() {}, i.prototype.registerEventHandlers = function() { $(".lnkDisambiguation").click(function() { return Events.Fire(n.Desktop.Disambiguation.disambiguationLinkClickedEvent, $(this)), !0 }) }, i.disambiguationLinkClickedEvent = "disambiguationLinkClickedEvent", i }(WebControl);
			t.Disambiguation = i })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var r = function() {
				function n() { this.signedIn = "false" } return n }(),
			i, u;
			t.EmailFriendArgs = r,
				function(n) { n[n.EmailFriend = 0] = "EmailFriend";
					n[n.EmailFriendFavourites = 1] = "EmailFriendFavourites";
					n[n.EmailFriendCompares = 2] = "EmailFriendCompares";
					n[n.EmailFriendPage = 3] = "EmailFriendPage" }(i = t.EmailFriendFormType || (t.EmailFriendFormType = {}));
			u = function(t) {
				function u(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(u, t), u.prototype.loadModel = function() {}, u.prototype.registerEventHandlers = function() { $("#btnEmailAFriendSend").click(function() { return u.sendEmail(), !1 }) }, u.prototype.render = function() { LoadCaptcha("emailAFriendCaptchaCon");
					$("#chkShareNotes").qtip({ content: Translation.get("T315") });
					FormValueStorage.fillForm($("#emailFriendCon")) }, u.sendEmail = function() { var f = ApplicationConfig.CaptchaEnabled == !0 && grecaptcha ? grecaptcha.getResponse() : null,
					t, n; if (ApplicationConfig.CaptchaEnabled || $("div.inputCon[data-validation=captcha]").removeAttr("data-validation"), FormValidation.validateForm($("#emailFriendInnerCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation)) { if (FormValueStorage.saveForm($("#emailFriendCon")), t = i.EmailFriendPage, t = $("#SharePage").val() != null && $("#SharePage").val() == "FAVE" ? i.EmailFriendFavourites : $("#SharePage").val() != null && $("#SharePage").val() == "PDP" ? i.EmailFriend : i.EmailFriendPage, t == i.EmailFriend) return n = new r, n.response = f, n.emailFrom = Utilities.cleanJSONValue($("#YourEmailTxt").val()), n.emailTo = Utilities.cleanJSONValue($("#FriendsEmailTxt").val()), n.fromName = Utilities.cleanJSONValue($("#YourNameTxt").val()), n.ccSender = Utilities.cleanJSONValue($("#chkCCSender").is(":checked") ? "true" : "false"), n.shareNotes = Utilities.cleanJSONValue($("#chkShareNotes").is(":checked") ? "true" : "false"), n.culture = Utilities.cleanJSONValue(ApplicationState.CultureID.toString()), n.appId = Utilities.cleanJSONValue(ApplicationConfig.ApplicationID.toString()), n.deviceTypeId = Utilities.cleanJSONValue(ApplicationState.DeviceTypeID.toString()), n.propertyId = Utilities.cleanJSONValue($("#PropertyId").val()), n.referenceNum = Utilities.cleanJSONValue($("#ReferenceNumber").val()), n.UID = $("#UID").val(), n.signedIn = Utilities.cleanJSONValue(ApplicationState.UserIsSignedIn.toString()), $("#btnEmailFriendSend").prop("disabled", "disabled").addClass("loading"), Actions.emailAFriend(n, u.handleEmailFriendResponse), Analytics.log(n.propertyId, "email_friend"), !0; if (t == i.EmailFriendFavourites) return n = new r, n.response = f, n.emailFrom = Utilities.cleanJSONValue($("#YourEmailTxt").val()), n.emailTo = Utilities.cleanJSONValue($("#FriendsEmailTxt").val()), n.fromName = Utilities.cleanJSONValue($("#YourNameTxt").val()), n.ccSender = Utilities.cleanJSONValue($("#chkCCSender").is(":checked") ? "true" : "false"), n.shareNotes = Utilities.cleanJSONValue($("#chkShareNotes").is(":checked") ? "true" : "false"), n.culture = Utilities.cleanJSONValue(ApplicationState.CultureID.toString()), n.appId = Utilities.cleanJSONValue(ApplicationConfig.ApplicationID.toString()), n.applicationMode = Utilities.cleanJSONValue(ApplicationState.ApplicationModeString), n.deviceTypeId = Utilities.cleanJSONValue(ApplicationState.DeviceTypeID.toString()), n.propIds = Utilities.cleanJSONValue($("#ListingIDs").val()), n.senderDisplayName = Utilities.cleanJSONValue($("#SenderDisplayName").val()), n.UID = $("#UID").val(), n.signedIn = Utilities.cleanJSONValue(ApplicationState.UserIsSignedIn.toString()), $("#btnEmailFriendSend").prop("disabled", "disabled").addClass("loading"), Actions.emailAFriendFavourites(n, u.handleEmailFriendResponse), !0; if (t == i.EmailFriendPage) return n = new r, n.response = f, n.emailFrom = Utilities.cleanJSONValue($("#YourEmailTxt").val()), n.emailTo = Utilities.cleanJSONValue($("#FriendsEmailTxt").val()), n.fromName = Utilities.cleanJSONValue($("#YourNameTxt").val()), n.ccSender = Utilities.cleanJSONValue($("#chkCCSender").is(":checked") ? "true" : "false"), n.culture = Utilities.cleanJSONValue(ApplicationState.CultureID.toString()), n.appId = Utilities.cleanJSONValue(ApplicationConfig.ApplicationID.toString()), n.deviceTypeId = Utilities.cleanJSONValue(ApplicationState.DeviceTypeID.toString()), n.UID = $("#UID").val(), n.PageName = $("#PageName").val(), n.PageUrl = $("#PageUrl").val(), n.MediaSrc = $("#MediaSrc").val(), n.UtmCampaign = $("#UtmCampaign").val(), n.UtmEmailFriendMedium = $("#UtmMedium").val(), n.BaseMediaUrl = Utilities.cleanJSONValue(ApplicationConfig.BaseURL), $("#btnEmailFriendSend").prop("disabled", "disabled").addClass("loading"), Actions.emailAFriendPage(n, u.handleEmailFriendResponse), !0 } else return addAnimationClass($("#btnEmailFriendSend"), "greenButtonFail"), !1 }, u.handleEmailFriendResponse = function(t) { if ($("#btnEmailFriendSend").prop("disabled", !1).removeClass("loading"), t != null && t.ErrorCode.Id == PublicContracts.ErrorCodeId.OK) { var i = $("#chkShareNotes").is(":checked");
					i && i != ($("#IncludeNotes").val() == "true") ? Gigya.notesIncludeConfirmation() : (Events.Fire(n.Desktop.EmailAFriend.EmailSentSuccessfullyEvent), showMessage(Translation.get("EmailSentSuccessfully")), typeof dataLayer != "undefined" && dataLayer && dataLayer.push({ event: "emailFriendFormSubmissionSuccess", formId: "emailFriendForm" })) } else showMessage(Translation.get("EmailSendError")), Logging.Error(JSON.stringify(t.ErrorCode)) }, u.EmailSentSuccessfullyEvent = "EmailAFriendSentSuccessfullyEvent", u }(WebPage);
			t.EmailAFriend = u })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var r = function() {
				function n() { this.signedIn = "false" } return n }(),
			i, u;
			t.EmailRealtorArgs = r;
			i = function() {
				function n() { this.signedIn = "false" } return n }();
			t.EmailOfficeArgs = i;
			u = function(t) {
				function u(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(u, t), u.prototype.loadModel = function() {}, u.prototype.registerEventHandlers = function() { $("#" + this.clientId + " #btnEmailRealtorSend").click(function() { return u.sendEmail(), !1 });
					$("#" + this.clientId + " #EmailRadio").change(function() { $(this).is(":checked") && FormValidation.removeValidatorFromField($("#PhoneNumberTxt"), "required") });
					$("#" + this.clientId + " #PhoneContactPreferredRadio").change(function() { $(this).is(":checked") && FormValidation.addValidatorToField($("#PhoneNumberTxt"), "required") }) }, u.prototype.render = function() { var n = this;
					DropDown.loadSelect2($("#" + n.clientId + " #ddl_Iam_emailrealtor"), { allowClear: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "homeFilterItemsCon", width: "50%" });
					$("#ddl_Iam_emailrealtor").val(0).change();
					FormValueStorage.fillForm($("#emailRealtorCon"));
					n.loadCaptcha() }, u.prototype.loadCaptcha = function() { LoadCaptcha("emailRealtorCaptchaCon") }, u.sendEmail = function() { var f = $("#OrganizationId").val() != "",
					t = ApplicationConfig.CaptchaEnabled == !0 && grecaptcha ? grecaptcha.getResponse() : null,
					n; return ApplicationConfig.CaptchaEnabled || $("div.inputCon[data-validation=captcha]").removeAttr("data-validation"), FormValidation.validateForm($("#emailRealtorInnerCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation) ? (FormValueStorage.saveForm($("#emailRealtorCon")), f ? (n = new i, n.response = Utilities.cleanJSONValue(t), n.message = Utilities.cleanJSONValue($("#MessageTxt").val()), n.emailFrom = Utilities.cleanJSONValue($("#EmailAddressTxt").val()), n.phone = Utilities.cleanJSONValue($("#PhoneNumberTxt").val()), n.fromName = Utilities.cleanJSONValue($("#FirstNameTxt").val()), n.fromLastName = Utilities.cleanJSONValue($("#LastNameTxt").val()), n.IamA = Utilities.cleanJSONValue($(".ddlEmailRealtor").val()), n.applicationmode = ApplicationState.CurrentMode.toString(), n.AnalyticsId = Utilities.cleanJSONValue(Cookie.GUID.get("")), n.PreferredOption = Utilities.cleanJSONValue($("input[name=MethodOfContact]:checked").val()), n.message = Utilities.cleanJSONValue($("#txtMessage").val()), n.MoreInformationRequested = Utilities.cleanJSONValue($("#chkMoreInformation").is(":checked") ? "true" : "false"), n.InterestInBuying = Utilities.cleanJSONValue($("#chkInterestedBuying").is(":checked") ? "true" : "false"), n.InterestInSelling = Utilities.cleanJSONValue($("#chkInterestedSelling").is(":checked") ? "true" : "false"), n.HasGeneralQuestions = Utilities.cleanJSONValue($("#chkQuestionAbout").is(":checked") ? "true" : "false"), n.ShowingRequested = Utilities.cleanJSONValue($("#chkBookShowing").is(":checked") ? "true" : "false"), n.HasWorkingRealtor = Utilities.cleanJSONValue($("#chkWorkingRealtor").is(":checked") ? "true" : "false"), n.HasLocation = Utilities.cleanJSONValue($("#chkLocation").is(":checked") ? "true" : "false"), n.culture = Utilities.cleanJSONValue(ApplicationState.CultureID.toString()), n.referenceNum = Utilities.cleanJSONValue($("#ReferenceNumber").val()), n.contactId = Utilities.cleanJSONValue($("#ContactId").val()), n.organizationId = Utilities.cleanJSONValue($("#OrganizationId").val()), n.propertyId = Utilities.cleanJSONValue($("#PropertyId").val()), n.signedIn = Utilities.cleanJSONValue(ApplicationState.UserIsSignedIn.toString()), $("#btnEmailRealtorSend").prop("disabled", "disabled").addClass("loading"), Actions.emailAnOrganization(n, u.handleEmailOfficeResponse), !0) : (n = new r, n.response = t, n.message = Utilities.cleanJSONValue($("#MessageTxt").val()), n.emailFrom = Utilities.cleanJSONValue($("#EmailAddressTxt").val()), n.phone = Utilities.cleanJSONValue($("#PhoneNumberTxt").val()), n.fromName = Utilities.cleanJSONValue($("#FirstNameTxt").val()), n.fromLastName = Utilities.cleanJSONValue($("#LastNameTxt").val()), n.ShowingRequested = Utilities.cleanJSONValue($("#chkBookShowing").is(":checked") ? "true" : "false"), n.HasWorkingRealtor = Utilities.cleanJSONValue($("#chkWorkingRealtor").is(":checked") ? "true" : "false"), n.HasLocation = Utilities.cleanJSONValue($("#chkLocation").is(":checked") ? "true" : "false"), n.IamA = Utilities.cleanJSONValue($(".ddlEmailRealtor").val()), n.applicationmode = Utilities.cleanJSONValue(ApplicationState.CurrentMode.toString()), n.AnalyticsId = Utilities.cleanJSONValue(Cookie.GUID.get("")), n.PreferredOption = Utilities.cleanJSONValue($("input[name=MethodOfContact]:checked").val()), n.culture = Utilities.cleanJSONValue(ApplicationState.CultureID.toString()), n.propertyId = Utilities.cleanJSONValue($("#PropertyId").val()), n.referenceNum = Utilities.cleanJSONValue($("#ReferenceNumber").val()), n.individualId = Utilities.cleanJSONValue($("#IndividualId").val()), n.contactId = Utilities.cleanJSONValue($("#ContactId").val()), n.message = Utilities.cleanJSONValue($("#txtMessage").val()), n.signedIn = Utilities.cleanJSONValue(ApplicationState.UserIsSignedIn.toString()), $("#btnEmailRealtorSend").prop("disabled", "disabled").addClass("loading"), Actions.emailARealtor(n, u.handleEmailRealtorResponse), !0)) : (addAnimationClass($("#btnEmailRealtorSend"), "btnFail"), !1) }, u.handleEmailRealtorResponse = function(t) { $("#btnEmailRealtorSend").prop("disabled", !1).removeClass("loading"); var i = Utilities.cleanJSONValue($("#PropertyId").val());
					t != null && t.ErrorCode.Id == PublicContracts.ErrorCodeId.OK ? (Events.Fire(n.Desktop.EmailRealtor.EmailSentSuccessfullyEvent), showMessage(Translation.get("EmailSentSuccessfully")), typeof dataLayer != "undefined" && dataLayer && dataLayer.push({ event: "emailRealtorFormSubmissionSuccess", formId: "emailRealtorForm" })) : (showMessage(Translation.get("EmailSendError")), Logging.Error(JSON.stringify(t.ErrorCode))) }, u.handleEmailOfficeResponse = function(t) { $("#btnEmailRealtorSend").prop("disabled", !1).removeClass("loading");
					t != null && t.ErrorCode.Id == PublicContracts.ErrorCodeId.OK ? (Events.Fire(n.Desktop.EmailRealtor.EmailSentSuccessfullyEvent), showMessage(Translation.get("EmailSentSuccessfully")), typeof dataLayer != "undefined" && dataLayer && dataLayer.push({ event: "emailOfficeFormSubmissionSuccess", formId: "emailOfficeForm" })) : (showMessage(Translation.get("EmailSendError")), Logging.Error(JSON.stringify(t.ErrorCode))) }, u.EmailSentSuccessfullyEvent = "EmailSentSuccessfullyEvent", u }(WebPage);
			t.EmailRealtor = u })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { $(".featureCarouselFooter > a").click(function(n) { var t, f, i, r, u;
				n.preventDefault();
				t = $(this).attr("href");
				f = ActionType[$(this).attr("data-type-action")];
				f == ActionType.Redirect ? window.location.href = t : f == ActionType.NewPage ? window.open(t, "_blank") : f == ActionType.Modal ? MultimediaModel.isEmbedableVideoUrl(t) ? (i = $(this).attr("data-type-id"), r = $('<div id="bannerCarouselVideo-' + i + '"><\/div>'), r.css("min-width", "640px"), r.css("min-height", "480px"), r.css("width", "85%"), u = new ModalContentModel("VideoModal", "", r), u.ButtonCloseID = "btnVideoCancel", u.AfterOpen = function() { var n = new MultimediaModel(t, "bannerCarouselVideo-" + i, VideoLoadingDisplay.Yes, VideoDisplay.VideoNoThumbnail, VideoLoadingType.LoadingNow);
					MultimediaModel.virtualTourLoadEvent.Listen(function(n) { n.detail.loaded && ($("#bannerCarouselVideo-" + i).css("min-width", ""), $("#bannerCarouselVideo-" + i).css("min-height", "")) });
					n.MultiManager.Youtube.PreferedLoadingMethod = VideoAccessType.Native;
					n.StartEmbed();
					$(".featherlight-content").addClass("VideoModeSpecialParam") }, u.DisplayType = ModalDisplayTypes.Featherlight, showModalContent(u)) : window.open(t, "_blank") : window.open(t, "_blank") }) }, t.prototype.render = function() { for (var u = $(".featureCarouselFooter > a"), n, i, f, r, e, t = 0; t < u.length; t++) n = $(u[t]), i = Utilities.LimitWording(40, n.text().trim(), !0), n.text(i), f = n.attr("data-type-action"), r = n.attr("href"), r != "" && i == "" ? (n.removeClass(), n.css({ position: "absolute", top: "0", bottom: "0", left: "0", right: "0" })) : (r.length == 0 || f.length == 0 || i.length == 0) && n.css("visibility", "hidden");
				e = new Swiper("#featureCarousel.swiper-container", { nextButton: ".swiper-button-next", prevButton: ".swiper-button-prev", autoHeight: !0, loop: !0 }) }, t }(WebControl);
			n.FeatureCarousel = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function(n) { this.cityName = n.CityName;
				this.cultureId = n.CultureId }, t.prototype.render = function() { var n = this }, t.prototype.registerEventHandlers = function() { var n = this;
				$("#city_button_find_realtor").click(function() { n.DiscRealtor() }) }, t.prototype.DiscRealtor = function() {}, t }(WebControl);
			n.FindARealtorSection = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { $("#lnkFooter_CreateAccount").click(function() { return Gigya.showScreen(gigyaScreen.SignIn, null, null, function() { $("#signUpHeaderTabLnk").click() }), !1 }) }, t.prototype.render = function() {}, t }(WebControl);
			n.Footer = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { $("#lnkHeaderLogout").checkExists().click(function() { var n = new LogoutCallbackArgs; return n.DT = DisplayType.Tempbox, Gigya.Logout(n), !1 });
				$(".toggleOption").click(function() { var n = $(this).attr("href"); return n += window.location.hash || "", window.location.href = n, !1 });
				$("#lnkProfileMenuSignin").checkExists().click(function() { Gigya.showScreen(gigyaScreen.SignIn, null) });
				$("#lnkProfileMenuLogout").click(function() { var n = new LogoutCallbackArgs; return n.DT = DisplayType.Tempbox, Gigya.Logout(n), !1 });
				$(document).click(function(n) { var t = $(n.target);
					t.is("#lnkProfileMenuMyAccount") || t.is("#headerMyAccountImg") || t.is("#headerMyAccountText") ? $("#headerProfileDropdown").toggleClass("hide", !1) : $("#headerProfileDropdown").toggleClass("hide", !0) });
				$("#cmsPreviewChbx").click(function() {
					function n(n) { var t = window.location.href;
						n === "1" ? t.indexOf(ApplicationState.TrendInsightsUrlEn) !== -1 ? window.location.href = "/" + ApplicationState.TrendInsightsUrlEn : window.location.reload() : t.indexOf(ApplicationState.TrendInsightsUrlFr) !== -1 ? window.location.href = "/" + ApplicationState.TrendInsightsUrlFr : window.location.reload() } var t = function() { var t = ApplicationState.CultureID.toString();
							n(t) },
						i = function() { var t = ApplicationState.CultureID.toString();
							n(t) };
					Actions.SwitchPreviewMode({}, i, t) }) }, t.prototype.render = function() { this.toggleProfileMenu(!0) }, t.prototype.toggleProfileMenu = function() { ApplicationState.UserIsSignedIn && ($("#headerMyAccountText").html(LocalAccountStorage.ConsumerDisplayName.get()), $("#headerMyAccountText").attr("title", LocalAccountStorage.ConsumerDisplayName.get()));
				$("#lnkProfileMenuMyAccount").toggle(ApplicationState.UserIsSignedIn);
				$("#lnkProfileMenuSignin").toggle(ApplicationState.UserIsSignedIn == !1) }, t }(WebControl);
			n.Header = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
				$(".homeLatestBlogPostsEntryCon").click(function() { var n = $(this).attr("data-link");
					location.href = n }) }, t.prototype.render = function() {}, t }(WebControl);
			n.LatestBlogPosts = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { $("#" + this.clientId + " .favouriteIcon").unbind("click").click(function() { return favouriteIconClicked($(this)), !1 });
				$("#" + this.clientId + " .noteIcon").unbind("click").click(function() { return noteIconClicked($(this)), !1 }) }, t.prototype.render = function() {}, t }(WebControl);
			n.ListingCard = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.slidesPerView = "auto", r.init(), r } return __extends(i, t), i.prototype.loadModel = function(n) { var t = this;
				(n.ShowBullets || !1) == !1 && $("#" + t.clientId + " .swiper-pagination").hide();
				this.slidesPerPage = n.ItemsPerPage;
				this.slidesPerView = n.SlidesPerView }, i.prototype.registerEventHandlers = function() { $("#" + this.clientId + " .favouriteIcon").unbind("click").click(function() { return favouriteIconClicked($(this)), !1 });
				$("#" + this.clientId + " .noteIcon").unbind("click").click(function() { return noteIconClicked($(this)), !1 }) }, i.prototype.render = function() { var t = this;
				setUniformHeightsForLargeListingCards("#" + this.clientId);
				t.slider = new Swiper(".listingCardCarousel_InnerCon.swiper-container", { pagination: ".swiper-pagination", nextButton: ".swiper-button-next", prevButton: ".swiper-button-prev", paginationClickable: !0, onSlideNextStart: function() { typeof dataLayer != "undefined" && dataLayer && dataLayer.push({ event: "e_listingSlideNext" }) }, onSlidePrevStart: function() { typeof dataLayer != "undefined" && dataLayer && dataLayer.push({ event: "e_listingSlidePrev" }) }, onSlideChangeStart: function() { t.slider != null && Events.Fire(n.Desktop.ListingCardCarousel.slideChanging, { slider: t.slider, controlid: t.clientId }) }, onSlideChangeEnd: function() { t.slider != null && Events.Fire(n.Desktop.ListingCardCarousel.slideChanged, { slider: t.slider, controlid: t.clientId }) } }) }, i.prototype.updateSlideCount = function(n, t) { t == "0" ? $("#" + this.clientId + " #ListingCardCarouselRecordLabelCon").hide() : ($("#" + this.clientId + " #ListingCardCarouselRecordLabelCon").show(), $("#" + this.clientId + " #ListingCardCarouselRecordLabelCurrentVal").text(n), $("#" + this.clientId + " #ListingCardCarouselRecordLabelEndVal").text(t)) }, i.slideChanging = "listingCardCarouselSlideChanging", i.slideChanged = "listingCardCarouselSlideChanged", i }(WebControl);
			t.ListingCardCarousel = i })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { $("#btnSchoolsCalloutGotIt").click(function() { return $("#LocalLogicSchoolsCallout").qtip("destroy"), LocalStorage.SchoolsCallout.save("1"), !1 }) }, t.prototype.render = function() {}, t.prototype.loadCallout = function() { var n = this;
				ApplicationConfig.EnableLocalLogicSchools && ApplicationConfig.LocalLogicSchoolsPromoActive && LocalStorage.SchoolsCallout.get() != "1" && ($("#LocalLogicSchoolsCallout").qtip({ content: Translation.get("SchoolsCallout"), style: { tip: { width: 24, height: 15 }, classes: "popIn" }, position: { my: "left center", at: "right", target: $("#LocalLogicSchoolsCallout") }, show: { modal: !1, ready: !1 }, events: { show: function() { n.registerEventHandlers() } }, hide: !1 }), $("#listCon").is(":hidden") && (Cookie.PromoBannerShown.get() != "1" && ApplicationConfig.PromoBannerActive || $("#LocalLogicSchoolsCallout").qtip("show"))) }, t.prototype.initSchools = function(n) { var r = this,
				i = function(n) { var t = document.createElement("div");
					t.style.display = "none";
					t.setAttribute("id", "local-schools");
					n.appendChild(t) },
				t = document.getElementById("LocalLogicSchoolsInnerCon"),
				u = new i(t, n);
				n.controls[google.maps.ControlPosition.LEFT_TOP].push(t) }, t.prototype.loadSchools = function(n) { var i = this,
				t;
				i.initSchools(n);
				t = document.createElement("script");
				t.setAttribute("src", "https://cdn.locallogic.co/sdk/?token=b7505b4db3e235cb1a0430fb0038e8da97b3257a6376a5085a2dfed7911ffdfd38164eab0b97340d&callback=initSchools");
				t.onload = function() { var t = new locallogic.LocalSchools("local-schools", { googleMapsMap: n, color: "#23A1C0", locale: ApplicationState.LanguageAttribute, asMapControl: !0, detailsMapPosition: "LEFT_TOP", filterPanelOpen: !1 });
					$("#local-schools").show(700, function() { i.loadCallout() }) };
				document.getElementById("LocalLogicSchools").appendChild(t) }, t.prototype.toggleCallout = function(n) { ApplicationConfig.EnableLocalLogicSchools && (n ? $("#listCon").is(":hidden") && LocalStorage.SchoolsCallout.get() != "1" && $("#LocalLogicSchoolsCallout").qtip("show") : $("#LocalLogicSchoolsCallout").qtip("hide")) }, t }(WebControl);
			n.LocalLogicSchools = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.lat = "", r.lon = "", r.showMap = !0, r.mapIsLoaded = !1, r.initialMapViewSet = !1, r.mapInTransition = !1, r.mapBeingDragged = !1, r.init(), r } return __extends(t, n), t.prototype.loadModel = function(n) { this.lat = n.Lat;
				this.lon = n.Lon;
				this.showMap = n.ShowMap }, t.prototype.registerEventHandlers = function() { var n = this;
				Events.Listen(MasterPages.Desktop.GoogleAPILoaded, function() { n.showMap && n.initMap() }) }, t.prototype.render = function() { var n = this;
				n.showMap && n.loadGoogleMaps(ApplicationConfig.GoogleAPIKey) }, t.prototype.loadGoogleMaps = function(n) { if (Utilities.isGoogleMapsDefined() == !1) { var r = document.getElementsByTagName("script")[0],
				t = document.createElement("script"),
				i = "";
				ApplicationConfig.IsQAMode && (i = "&v=3");
				t.id = "googleMapsAPI";
				ApplicationState.CultureID == 1 ? t.setAttribute("src", "//maps.googleapis.com/maps/api/js?callback=GoogleMapsLoaded&key=" + n + "&region=CA&language=en&libraries=places" + i) : t.setAttribute("src", "//maps.googleapis.com/maps/api/js?callback=GoogleMapsLoaded&key=" + n + "&region=CA&language=fr&libraries=places" + i);
				r.parentNode.insertBefore(t, r) } }, t.prototype.initMap = function() { var n = this,
				t = { lat: Number(n.lat), lng: Number(n.lon) },
				i = new google.maps.Map(document.getElementById("mapCardBodyCon"), { zoomControl: !1, center: t, zoom: 15, fullscreenControl: !0, mapTypeControl: !1, clickableIcons: !1, gestureHandling: "greedy" }),
				r;
				this.map = i;
				r = { url: "/wp-content/plugins/adk_feed/assets/images/pin-house-purple.svg", size: new google.maps.Size(45, 45), scaledSize: new google.maps.Size(45, 45), textColor: "#ffffff", textSize: 12 };
				n.officeMarker = new google.maps.Marker({ position: t, icon: r, map: i });
				google.maps.event.addListener(n.map, "idle", function() { n.initialMapViewSet == !1 && (n.initialMapViewSet = !0);
					n.mapIsLoaded = !0 });
				google.maps.event.addListener(n.map, "resize", function() { Logging.Debug("Map resize event", LogType.Map); return });
				google.maps.event.addListener(n.map, "dragstart", function() { Logging.Debug("Map dragstart event", LogType.Map);
					n.mapBeingDragged = !0; return });
				google.maps.event.addListener(n.map, "dragend", function() { Logging.Debug("Map dragend event", LogType.Map);
					n.mapBeingDragged = !1;
					google.maps.event.trigger(n.map, "idle"); return }) }, t }(WebControl);
			n.MapCard = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.DisplayType = ModalDisplayTypes.Featherlight, r.init(), r } return __extends(i, t), i.prototype.loadModel = function(n) { this.model = n;
				this.DisplayType = n.DisplayType }, i.prototype.render = function() { var t = this;
				t.show_dialog();
				Events.Fire(n.Desktop.ModalContent.ModalContentOpened, new DialogOpenedEventArgs(this.model.ID, this.ForceCloseDialog)) }, i.prototype.registerEventHandlers = function() { var n = this;
				$("#" + this.clientId + " #" + this.model.ButtonCloseID).click(function() { n.model.ButtonCloseOnClick != null && n.model.ButtonCloseOnClick(n);
					n.DisplayType == ModalDisplayTypes.LightboxMe ? n.LightBox_Me.trigger("close") : n.Featherlight.close() }) }, i.prototype.show_dialog = function() { var t = this;
				t.DisplayType == ModalDisplayTypes.LightboxMe ? (t.LightBox_Me = $("#" + t.model.ID + "_con").lightbox_me({ closeSelector: ".dialogCloseX", centered: !0, destroyOnClose: !0, onLoad: function() { $(".ModalOverlay").removeClass("hidden");
						t.model.AfterOpen != null && t.model.AfterOpen(t) }, onClose: function() { t.model.AfterClose != null && t.model.AfterClose(t);
						$('iframe[src="about:blank"]').remove();
						MoveRecaptcha(t.model.ID + "_con") } }), t.LightBox_Me.trigger("reposition"), t.model.CloseEvent != "" && Events.Listen(t.model.CloseEvent, function() { t.LightBox_Me.trigger("close") })) : (t.Featherlight = $.featherlight($("#" + t.model.ID + "_con"), { closeIcon: null, type: "html", variant: "modalcontrol " + t.model.CssClass, openSpeed: 50, closeSpeed: 150, openTrigger: t.model.OpenTrigger, closeTrigger: t.model.CloseTrigger, beforeOpen: function() { t.model.BeforeOpen != null && t.model.BeforeOpen(t) }, beforeClose: function() { t.model.BeforeClose != null && t.model.BeforeClose(t) }, afterOpen: function() { t.model.AfterOpen != null && t.model.AfterOpen(t);
						$(".ModalOverlay").removeClass("hidden") }, afterClose: function() { t.model.AfterClose != null && t.model.AfterClose(t);
						Events.Fire(n.Desktop.ModalContent.ModalContentClosed, new DialogClosedEventArgs(t.model.ID)) } }), t.model.CloseEvent != "" && Events.Listen(t.model.CloseEvent, function() { t.Featherlight.close() }));
				this.model.SetFocusOnLoad && SetFocusOnFirstInput($("#" + t.clientId));
				t.ForceCloseDialog = function() { t.DisplayType == ModalDisplayTypes.LightboxMe ? t.LightBox_Me.trigger("close") : t.Featherlight.close() } }, i.ModalContentOpened = "ModalContentOpened", i.ModalContentClosed = "ModalContentClosed", i }(WebControl);
			t.ModalContent = i })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(i, t), i.prototype.loadModel = function(n) { this.contactId = n.ContactId;
				this.organizationId = n.OrganizationId;
				this.referenceNumber = n.ReferenceNumber;
				this.listingId = n.ListingId }, i.prototype.registerEventHandlers = function() { var t = this,
				i;
				this.organizationId != null && (i = $(".OfficeCard-" + t.organizationId), i.find(".callLink").click(function() { return contactLinkClicked($(this), "contactOfficePhoneNumbers"), !1 }), i.find(".websiteLink").click(function() { return contactLinkClicked($(this), "contactOfficeWebsites"), t.listingId != "" && Analytics.log(t.listingId, "website_office"), !1 }), i.find(".lnkEmailOffice").unbind("click"), i.find(".lnkEmailOffice").click(function() { var r = new ControlFetcherArgs,
					i; return r.postCallHandler = function(t) { var i = new ModalContentModel("EmailOffice", Translation.get("EmailOffice"), t.d);
					i.ButtonCloseID = "btnEmailRealtorCancel";
					i.CloseEvent = n.Desktop.EmailRealtor.EmailSentSuccessfullyEvent;
					i.DisplayType = ModalDisplayTypes.LightboxMe;
					showModalContent(i) }, i = new EmailRealtorControlArgs, i.organizationId = t.organizationId, i.listingId = t.listingId || "", i.contactId = t.contactId || "", i.referenceNumber = t.referenceNumber || "", ControlFetcher.fetchEmailRealtor(r, i), !1 })) }, i.prototype.render = function() {}, i }(WebControl);
			t.OfficeCard = i })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(i, t), i.prototype.loadModel = function(n) { this.Model = n }, i.prototype.registerEventHandlers = function() {}, i.prototype.render = function() { this.Model.TotalResults == 1 && this.Model.SingleResultURL != "" && Events.Fire(n.Desktop.OfficeResults.officeSingleResultLoaded, this.Model);
				Events.Fire(n.Desktop.OfficeResults.officeResultsLoaded, this.Model) }, i.officeResultsLoaded = "officeResultsLoaded", i.officeSingleResultLoaded = "officeSingleResultLoaded", i }(WebControl);
			t.OfficeResults = i })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.pageChange = new RealtorControlEvent(r, "pageChange"), r.dropdownValuesLoaded = !1, r.refreshingUI = !1, r.allowPageSelection = !0, r.init(), r } return __extends(i, t), i.prototype.loadModel = function(n) { this.maxPages = n.MaxPages;
				this.allowPageSelection = n.AllowPageSelection }, i.prototype.registerEventHandlers = function() { var t = this;
				$("#" + t.clientId + " .ddlResultsPages").change(function() { if ($(this).is("[disabled]") == !1) { var i = $(this).val();
					$("#" + t.clientId + " .ddlResultsPages").val(i);
					t.refreshingUI == !1 && Events.Fire(n.Desktop.Pagination.paginationPageChanged, { page: i });
					t.dropdownValuesLoaded && t.refreshingUI == !1 && t.pageChange.Fire(t, { page: i.toString() }) } });
				$("#" + t.clientId + " .paginationLink").click(function(n) { addAnimationClass($(this), "clicked");
					n.preventDefault() });
				$("#" + t.clientId + " .lnkPreviousResultsPage").click(function() { if ($(this).is("[disabled]") == !1) { var i = t.getCurrentPage();
					$("#" + t.clientId + " .ddlResultsPages").val(i - 1);
					t.refreshingUI == !1 && Events.Fire(n.Desktop.Pagination.paginationPageChanged, { page: i - 1 });
					t.dropdownValuesLoaded && t.refreshingUI == !1 && t.pageChange.Fire(t, { page: (i - 1).toString() }) } });
				$("#" + t.clientId + " .lnkFirstResultsPage").click(function() { $(this).is("[disabled]") == !1 && ($("#" + t.clientId + " .ddlResultsPages").val(1), t.refreshingUI == !1 && Events.Fire(n.Desktop.Pagination.paginationPageChanged, { page: 1 }), t.dropdownValuesLoaded && t.refreshingUI == !1 && t.pageChange.Fire(t, { page: "1" })) });
				$("#" + t.clientId + " .lnkNextResultsPage").click(function() { if ($(this).is("[disabled]") == !1) { var i = t.getCurrentPage();
					$("#" + t.clientId + " .ddlResultsPages").val(i + 1);
					t.refreshingUI == !1 && Events.Fire(n.Desktop.Pagination.paginationPageChanged, { page: i + 1 });
					t.dropdownValuesLoaded && t.refreshingUI == !1 && t.pageChange.Fire(t, { page: (i + 1).toString() }) } });
				Events.Listen(n.Desktop.Pagination.paginationNeedsRefresh, function() { t.updateUIState() }) }, i.prototype.render = function() { var n = this;
				n.allowPageSelection && DropDown.loadSelect2($("#" + n.clientId + " .ddlResultsPages"), { allowClear: !1, closeOnSelect: !0, containerCssClass: "paginationDDLCon", stopOpenOnClear: !0, width: "55px" });
				n.updateUIState();
				n.dropdownValuesLoaded = !0 }, i.prototype.refreshUI = function(n) { var t = this,
				u, f, e, r, i; if (t.refreshingUI = !0, $("#" + t.clientId + " .paginationLink").removeAttr("disabled"), n.CurrentPage <= 1 && ($("#" + t.clientId + " .lnkFirstResultsPage").attr("disabled", "true"), $("#" + t.clientId + " .lnkPreviousResultsPage").attr("disabled", "true")), (n.CurrentPage == n.TotalPages || n.CurrentPage * n.RecordsPerPage >= n.MaxRecords) && ($("#" + t.clientId + " .lnkLastResultsPage").attr("disabled", "true"), $("#" + t.clientId + " .lnkNextResultsPage").attr("disabled", "true")), $("#" + t.clientId + " .ddlResultsPages").prop("disabled", !1), $("#" + t.clientId + " .ResultsPaginationCon").removeAttr("disabled"), n.TotalRecords > n.RecordsPerPage * n.TotalPages ? $("#" + t.clientId + " .paginationTotalPagesNum").text(n.TotalPages + "+") : $("#" + t.clientId + " .paginationTotalPagesNum").text(n.TotalPages), t.allowPageSelection) { for (u = [], f = n.TotalPages, this.maxPages != null && (f = this.maxPages), i = 1; i <= f; i++) e = new Option(i.toString(), i.toString(), !1, !1), u.push(e); if (t.dropdownValuesLoaded = !1, DropDown.replaceValues($("#" + t.clientId + " .ddlResultsPages"), u), r = $("#" + t.clientId + " .ddlResultsPages")[0], r.options.length > n.TotalPages)
				for (i = r.options.length; i > n.TotalPages; i--) r.options[i - 1].remove();
				$("#" + t.clientId + " .ddlResultsPages").val(Math.min(n.TotalPages, n.CurrentPage)).change() } else $("#" + t.clientId + " .paginationCurrentPage").text(Math.min(n.TotalPages, n.CurrentPage));
				n.TotalPages <= 1 ? $("#" + t.clientId).css("display", "none") : $("#" + t.clientId).css("display", "inherit");
				t.dropdownValuesLoaded = !0;
				t.refreshingUI = !1 }, i.prototype.getCurrentPage = function() { return this.allowPageSelection ? Number($("#" + this.clientId + " .ddlResultsPages").val()) : Number($("#" + this.clientId + " .paginationCurrentPage").text()) }, i.prototype.updateUIState = function() { var n = this,
				i = n.getCurrentPage(),
				t;
				$(".paginationLink").removeAttr("disabled");
				i <= 1 && ($(".lnkFirstResultsPage").attr("disabled", "true"), $(".lnkPreviousResultsPage").attr("disabled", "true"));
				t = $("#" + n.clientId + " .ddlResultsPages option:last-child").val();
				i >= t && ($(".lnkLastResultsPage").attr("disabled", "true"), $(".lnkNextResultsPage").attr("disabled", "true"));
				n.allowPageSelection && $(".ddlResultsPages").prop("disabled", !1);
				$(".ResultsPaginationCon").removeAttr("disabled");
				(t || 0) <= 1 ? $("#" + n.clientId).css("display", "none") : $("#" + n.clientId).css("display", "inherit") }, i.paginationPageChanged = "paginationPageChanged", i.paginationNeedsRefresh = "paginationNeedsRefresh", i }(WebControl);
			t.Pagination = i })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
				$(".promoCarouselBtnCon .btn").click(function() { n.Swiper.slideTo(n.Swiper.realIndex + 1) });
				$(".promoCarouselBtnCon .btn.last").click(function() { n.closePromoCarousel() });
				$(".promoCarouselCloseCon").click(function() { n.closePromoCarousel() });
				$(document).keydown(function(t) { return t.which && t.which == 13 || t.keyCode && t.keyCode == 13 ? !1 : t.which && t.which == 27 || t.keyCode && t.keyCode == 27 ? (n.closePromoCarousel(), !1) : !0 }) }, t.prototype.render = function() { var n = this;
				window.setTimeout(function() { $(".promoCarouselCon").show();
					n.Swiper = new Swiper("#promoCarousel.swiper-container", { pagination: ".swiper-pagination", paginationClickable: !0, autoHeight: !0 });
					$(".promoCarouselModal").show() }, 2e3) }, t.prototype.closePromoCarousel = function() { Cookie.PromoBannerShown.save("1");
				$(".promoCarouselModal").fadeOut(300, function() { $(this).remove() });
				$("#promoCarousel").fadeOut(300, function() { $(this).remove() });
				ApplicationState.Current.Controls.LocalLogicSchoolsCtrl && ApplicationState.Current.Controls.LocalLogicSchoolsCtrl.toggleCallout(!0) }, t }(WebControl);
			n.PromoCarousel = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.initLoad = !0, r.init(), r } return __extends(t, n), t.prototype.loadModel = function() { t.instance = this }, t.prototype.registerEventHandlers = function() {}, t.prototype.render = function() { this.slider = new Swiper("#rankingTestmonialOuterCon", { loop: !0, nextButton: ".swiperLinkTextNext", prevButton: ".swiperLinkTextPrev", onSlideNextStart: function() { typeof dataLayer != "undefined" && dataLayer && !t.instance.initLoad && dataLayer.push({ event: "e_RankMyAgentSlideNext" }) }, onSlidePrevStart: function() { typeof dataLayer != "undefined" && dataLayer && !t.instance.initLoad && dataLayer.push({ event: "e_RankMyAgentSlidePrev" }) } }); var n = $(this.slider.slides).not(".swiper-slide-duplicate").length;
				n <= 1 && (this.slider.lockSwipes(), $(".swiperLinkTextNext, .swiperLinkTextPrev").hide());
				t.instance.initLoad = !1 }, t.slideChanging = "rankingTestmonialOuterConSlideChanging", t.slideChanged = "rankingTestmonialOuterConSlideChanged", t }(WebControl);
			n.RankMyAgentCard = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.initLoad = !0, r.init(), r } return __extends(t, n), t.prototype.loadModel = function() { t.instance = this;
				$("#RealSatisfiedTestmonialOuterCon").find(".swiper-button-next,.swiper-button-prev").addClass(".slide-swiper") }, t.prototype.registerEventHandlers = function() {}, t.prototype.render = function() { if ($("#RealSatisfiedTestmonialOuterCon").length > 0) { this.slider = new Swiper("#RealSatisfiedTestmonialOuterCon", { loop: !0, nextButton: ".swiperLinkTextNext", prevButton: ".swiperLinkTextPrev", onSlideNextStart: function() { typeof dataLayer != "undefined" && dataLayer && !t.instance.initLoad && dataLayer.push({ event: "e_RealSatisfiedSlideNext" }) }, onSlidePrevStart: function() { typeof dataLayer != "undefined" && dataLayer && !t.instance.initLoad && dataLayer.push({ event: "e_RealSatisfiedSlidePrev" }) } }); var n = $(this.slider.slides).not(".swiper-slide-duplicate").length;
				n <= 1 && (this.slider.lockSwipes(), $(".swiperLinkTextNext, .swiperLinkTextPrev").hide());
				t.instance.initLoad = !1 } }, t.slideChanging = "ratingTestmonialOuterConSlideChanging", t.slideChanged = "ratingTestmonialOuterConSlideChanged", t }(WebControl);
			n.RealSatisfiedCard = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(i, t), i.prototype.loadModel = function(n) { this.individualId = n.IndividualId;
				this.contactId = n.ContactId;
				this.organizationId = n.OrganizationId;
				this.referenceNumber = n.ReferenceNumber;
				this.listingId = n.ListingId }, i.prototype.registerEventHandlers = function() { var t = this,
				i = $("#RealtorCard-" + t.individualId);
				i.find(".callLink").click(function() { return contactLinkClicked($(this), "contactRealtorPhoneNumbers"), t.listingId != "" && Analytics.log(t.listingId, "phone_agent"), !1 });
				i.find(".websiteLink").click(function() { return contactLinkClicked($(this), "contactRealtorWebsites"), t.listingId != "" && Analytics.log(t.listingId, "website_agent"), !1 });
				(t.individualId || "") != "" && (i.find(".lnkEmailRealtor").unbind("click"), i.find(".lnkEmailRealtor").click(function() { var r = new ControlFetcherArgs,
					i; return r.postCallHandler = function(t) { var i = new ModalContentModel("EmailRealtor", Translation.get("EmailRealtor"), t.d);
					i.ButtonCloseID = "btnEmailRealtorCancel";
					i.CloseEvent = n.Desktop.EmailRealtor.EmailSentSuccessfullyEvent;
					i.DisplayType = ModalDisplayTypes.LightboxMe;
					showModalContent(i) }, i = new EmailRealtorControlArgs, i.individualId = t.individualId, i.listingId = t.listingId || "", i.contactId = t.contactId || "", i.referenceNumber = t.referenceNumber || "", ControlFetcher.fetchEmailRealtor(r, i), !1 })) }, i.prototype.render = function() { var n = $("#RealtorCard-" + this.individualId),
				i = parseFloat(n.find(".RankOverallRating").val().toString().replace(",", ".")),
				u = n.find(".RankReviewCount").val(),
				t, r;
				i = Utilities.roundRankRating(i);
				isNaN(i) != !0 && (n.find(".realtorCardRankOverallRatingBarCon").show(), n.find(".realtorCardRankReviews").html(Translation.get("Reviews", u)), n.find(".realtorCardRankOverallRatingBar").barrating({ theme: "fontawesome-stars-o", initialRating: i, readonly: !0, onSelect: null, onClear: null, onDestory: null }));
				t = parseFloat(n.find(".RealSatisifedRating").val());
				r = n.find(".RealSatisifedReviewCount").val();
				t = Utilities.roundRealSatisfiedRating(t);
				isNaN(t) != !0 && (n.find(".realtorCardRealSatisifedRatingBarCon").show(), n.find(".realtorCardRealSatisifiedReviews").html(Translation.get("Reviews", r)), n.find(".realtorCardRealSatisifedRatingBar").barrating({ theme: "fontawesome-stars-o", initialRating: t, readonly: !0, onSelect: null, onClear: null, onDestory: null })) }, i }(WebControl);
			t.RealtorCard = i })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(i, t), i.prototype.loadModel = function(t) { var i = this,
				r;
				t.ShowXofX == !0 && $("#" + this.clientId + " #RealtorCardCarouselRecordLabelCon").show();
				r = new Swiper("#" + i.clientId + " #RealtorCardCarouselOuterCon", { pagination: ".swiper-pagination", loop: t.ContinuousSlides, paginationClickable: !0, nextButton: ".swiper-button-next", prevButton: ".swiper-button-prev", onSlideNextStart: function() { typeof dataLayer != "undefined" && dataLayer && dataLayer.push({ event: "e_realtorSlideNext" }) }, onSlidePrevStart: function() { typeof dataLayer != "undefined" && dataLayer && dataLayer.push({ event: "e_realtorSlidePrev" }) }, onSlideChangeStart: function() { i.slider != null && ($("#" + i.clientId + " #RealtorCardCarouselRecordLabelCurrentVal").text(i.slider.realIndex + 1), Events.Fire(n.Desktop.RealtorCardCarousel.slideChanging, { slider: i.slider, controlid: i.clientId })) } });
				n.Desktop.RealtorCardCarousel.loaded.Fire({ control: this });
				i.slider = r;
				t.ShowBullets == !1 && $("#" + this.clientId + " .swiper-pagination").hide() }, i.prototype.render = function() { setConsistantHeights("#" + this.clientId + " .swiper-slide .realtorCardRight") }, i.prototype.registerEventHandlers = function() { var n = this;
				$("#" + this.clientId + " #RealtorCardCarouselCon .realtorCardCon").length > 1 }, i.prototype.updateSlideCount = function(n, t) { t == "0" ? $("#" + this.clientId + " #RealtorCardCarouselRecordLabelCon").hide() : ($("#" + this.clientId + " #RealtorCardCarouselRecordLabelCon").show(), $("#" + this.clientId + " #RealtorCardCarouselRecordLabelCurrentVal").text(n), $("#" + this.clientId + " #RealtorCardCarouselRecordLabelEndVal").text(t)) }, i.slideChanging = "realtorCardCarouselSlideChanging", i.loaded = new RealtorEvent("realtorCardCarousel_Loaded"), i }(WebControl);
			t.RealtorCardCarousel = i })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i = function(t) {
			function i(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(i, t), i.prototype.loadModel = function(n) { this.Model = n }, i.prototype.registerEventHandlers = function() {}, i.prototype.render = function() { this.Model.TotalResults == 1 && this.Model.SingleResultURL != "" && Events.Fire(n.Desktop.RealtorResults.realtorSingleResultLoaded, this.Model);
				Events.Fire(n.Desktop.RealtorResults.realtorResultsLoaded, this.Model) }, i.realtorResultsLoaded = "realtorResultsLoaded", i.realtorSingleResultLoaded = "realtorSingleResultLoaded", i }(WebControl);
			t.RealtorResults = i })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var t = this,
				n = $("#" + t.clientId);
				n.find(".SavedSearchExecuteButton,.SavedSearchMainCon").mousedown(function(n) { n.preventDefault(); var t = $(this).parents(".SavedSearchCon").find(".SavedSearchURLCon").text(); switch (n.which) {
					case 1:
						Core.redirectTo(t); break;
					case 2:
						window.open(t) } return !1 });
				n.find(".SavedSearchDeleteButton").click(function() { var n = this,
					i = function(n, t) { t.Featherlight.close() },
					r = function(t, i) { var u = $(n).parents(".SavedSearchCon").find(".SavedSearchNameCon").text(),
						r;
						SavedSearch.Delete(u);
						Events.Fire(SavedSearch.savedSearchesUpdated, null);
						i.Featherlight.close();
						r = $(n).parents(".SavedSearchCon");
						r.addClass("deleted");
						showMessage(Translation.get("Deleted"));
						callAfterAnimation(r, function() { r.replaceWith("") }) },
					t = new ConfirmationDialogModel2("SavedSearchDelete", "", Translation.get("ConfirmSaveSearchDelete"), Translation.get("Yes"), r, Translation.get("No"), i); return t.ShowTitleBar = !1, showConfirmationDialog2(t), !1 }) }, t.prototype.render = function() {}, t }(WebControl);
			n.SavedSearchControl = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
				$(window).scroll(function() { $("#btnScrollToTop").toggleClass("show", $(this).scrollTop() > 500) });
				$("#btnScrollToTop").click(function() { return $("html, body").animate({ scrollTop: 0 }, 600), !1 }) }, t.prototype.render = function() {}, t }(WebControl);
			n.ScrollToTop = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { $("#" + this.clientId + " .favouriteIcon").unbind("click").click(function() { return favouriteIconClicked($(this)), !1 });
				$("#" + this.clientId + " .noteIcon").unbind("click").click(function() { return noteIconClicked($(this)), !1 }) }, t.prototype.render = function() {}, t }(WebControl);
			n.SmallListingCard = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { $("#" + this.clientId + " .favouriteIcon").unbind("click").click(function() { return favouriteIconClicked($(this)), !1 });
				$("#" + this.clientId + " .noteIcon").unbind("click").click(function() { return noteIconClicked($(this)), !1 }) }, t.prototype.render = function() { var n = this;
				window.setTimeout(function() { Favourite.refreshIcons($("#" + n.clientId + " #ListingCardsListOuterCon"));
					Compare.refreshIcons($("#" + n.clientId + " #ListingCardsListOuterCon"));
					Note.refreshIcons($("#" + n.clientId + " #ListingCardsListOuterCon"));
					ConsumerProfile.Notifications.refreshNotificationCon($("#" + n.clientId + " #ListingCardsListOuterCon")) }, 200) }, t }(WebControl);
			n.SmallListingCardList = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(t) { var i, r;
			(function(n) { n[n.ListingLink = 0] = "ListingLink";
				n[n.FavouriteListings = 1] = "FavouriteListings";
				n[n.FindanOffice = 2] = "FindanOffice";
				n[n.FindaRealtor = 3] = "FindaRealtor";
				n[n.Blog = 4] = "Blog";
				n[n.MtgCalculators = 5] = "MtgCalculators" })(i = t.Campaign || (t.Campaign = {}));
			r = function(t) {
				function r(n, i) { var r = t.call(this, n, i) || this; return r.init(), r } return __extends(r, t), r.prototype.loadModel = function(n) { this.ssm = n }, r.prototype.registerEventHandlers = function() { var t = this;
					$(document.body).click(function() { $("#shareDialogBox").toggle(!1);
						lightBoxPageElements([$(".shareButtonsBox")], !1) });
					$("#shareBtn").click(function() { return t.ssm.overwriteSocialShareHashLink(), t.setUpSocialize(), $("#shareDialogBox").toggle(), lightBoxPageElements([$(".shareButtonsBox")], $("#shareDialogBox").css("display") == "block"), !1 });
					$("#shareComponentDiv,#img_email_friend_btn").click(function() { $("#shareDialogBox").toggle();
						lightBoxPageElements([$(".shareButtonsBox")], $("#shareDialogBox").css("display") == "block") });
					$("#lnkEmailFriend").click(function() { var u = new ControlFetcherArgs,
						r;
						u.postCallHandler = function(t) { var i = new ModalContentModel("EmailAFriend", Translation.get("EmailAFriend"), t.d);
							i.ButtonCloseID = "btnEmailAFriendCancel";
							i.CloseEvent = n.Desktop.EmailAFriend.EmailSentSuccessfullyEvent;
							i.DisplayType = ModalDisplayTypes.LightboxMe;
							showModalContent(i) };
						r = new EmailAFriendControlArgs;
						t.ssm.Campaign !== i[i.MtgCalculators] ? (t.ssm.Listings ? r.listingIds = t.ssm.Listings : t.ssm.Listing && (r.listingId = t.ssm.Listing), r.referenceNum = t.ssm.ReferenceNumber || "") : (r.listingId = "", r.listingIds = "", r.referenceNum = "");
						r.mediaSrc = t.ssm.MediaSrc;
						r.pageURL = t.ssm.LinkBack;
						r.pageName = encodeURIComponent(t.ssm.Description);
						r.utmCampaign = t.ssm.Campaign;
						r.utmMedium = t.ssm.EmailFriendMedium;
						r.sharePage = t.ssm.SharePage;
						ControlFetcher.fetchEmailAFriend(u, r) });
					t.ssm != null && t.setUpSocialize();
					r.overwriteSocialShareEvent.Listen(function(n) { n.detail.ssm && (t.ssm = n.detail.ssm) }) }, r.prototype.render = function() {}, r.prototype.setUpSocialize = function() { var n = this.ssm,
					t = new gigya.socialize.UserAction,
					i;
					t.setTitle(n.Title);
					t.setLinkBack(n.LinkBack);
					t.addMediaItem({ type: n.MediaType, src: n.MediaSrc, href: n.LinkBack });
					t.setDescription(n.Description);
					i = { containerID: "shareComponentDiv", shareButtons: [{ provider: "facebook", tooltip: Translation.get("ShareBy") + " Facebook", url: n.LinkBackFacebook, iconImgUp: "/wp-content/plugins/adk_feed/assets/images/icon_facebook.svg", listingid: n.Listing || n.Listings }, { provider: "linkedIn", tooltip: Translation.get("ShareBy") + " LinkedIn", url: n.LinkBackLinkedIn, iconImgUp: "/wp-content/plugins/adk_feed/assets/images/icon_linkedin.svg", listingid: n.Listing || n.Listings }, { provider: "twitter", tooltip: Translation.get("ShareBy") + " Twitter", url: n.LinkBackTwitter, iconImgUp: "/wp-content/plugins/adk_feed/assets/images/icon_twitter.svg", listingid: n.Listing || n.Listings }, { provider: "pinterest", tooltip: Translation.get("ShareBy") + " Pinterest", url: n.LinkBackPinterest, iconImgUp: "/wp-content/plugins/adk_feed/assets/images/icon_pinterest.svg", listingid: n.Listing || n.Listings }], onShareButtonClicked: this.onShareClicked, iconsOnly: "true", showCounts: "none", userAction: t };
					gigya.socialize.showShareBarUI(i) }, r.prototype.onShareClicked = function(n) { var t = n.shareItem.listingid;
					t != "" && t != null && (n.shareItem.provider == "facebook" && Analytics.log(t, "share_facebook"), n.shareItem.provider == "twitter" && Analytics.log(t, "share_twitter"), n.shareItem.provider == "linkedIn" && Analytics.log(t, "share_linkedIn"), n.shareItem.provider == "pinterest" && Analytics.log(t, "share_pinterest")) }, r.overwriteSocialShareEvent = new RealtorEvent("overwriteSocialShareEvent"), r }(WebControl);
			t.SocialShare = r })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.refreshPosition = function(n, t) { var i = n.filter("." + t),
				r = n.filter(":visible").index(i);
				i.parent().find(".tabHighlighter").css("left", (r * 100).toString() + "%");
				Animate($(".tabHighlighterDot .fa"), "pulse2", .75, TransitionTiming.ease_in_out, null) }, t.insert = function(n, t) { t === void 0 && (t = null); var i = function() { n.each(function() { var t = $(this);
				t.click(function() { var t = n.filter(":visible").index(this);
					$(this).parent().find(".tabHighlighter").css("left", (t * 100).toString() + "%");
					Animate($(".tabHighlighterDot .fa"), "pulse2", .75, TransitionTiming.ease_in_out, null) }) });
				t != null && t() };
				n.first().children(".tabHighlighter").length == 0 ? ControlFetcher.fetchTabHighlighter(new ControlFetcherArgs(null, null, function(t) { n.first().append($(t));
					i() })) : i() }, t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() {}, t.prototype.render = function() {}, t }(WebControl);
			n.TabHighlighter = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.valueChanged = new RealtorControlEvent(r, "toggleValueChanged"), r.init(), r } return __extends(t, n), t.prototype.refreshPosition = function(n, t) { var i = $("#" + this.clientId + " .toggleOption").length,
				r = 100 / i;
				n.css("left", "" + (r * t).toString() + "%") }, t.prototype.value = function(n) { var i, t, r; return n != null ? (i = $("#" + this.clientId + " .toggleOption.selected").attr("data-value"), i.toLowerCase() != n.toLowerCase() && ($("#" + this.clientId + " .toggleSelector"), $("#" + this.clientId + " .toggleOption").removeClass("selected"), t = $("#" + this.clientId + " .toggleOption[data-value='" + n + "']"), t.addClass("selected"), r = $("#" + this.clientId + " .toggleOption").index(t), this.refreshPosition($("#" + this.clientId + " .toggleSelector"), r), this.valueChanged.Fire(this, { value: n })), n) : $("#" + this.clientId + " .toggleOption.selected").attr("data-value") }, t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
				$("#" + n.clientId + " .toggleOption").click(function() { var t = $(this).attr("data-value"),
					i = $(this).attr("href"); return n.value(t), !1 }) }, t.prototype.render = function() {}, t }(WebControl);
			n.Toggle = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t = function(n) {
			function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
				$(".topMenuDropdownContent").click(function(n) { n.stopPropagation() });
				$(".topMenuDropdownItem").mousedown(function(t) { if (t.which == 2) return n.closeMenus(), window.open($(this).attr("href")), !1 });
				$(".topMenuDropdownItem").click(function() { n.closeMenus() });
				$(".headerMenuItem").click(function(t) { $(".dropdownIcon").toggleClass("open", !1);
					$(this).find(".topMenuDropdownContent").hasClass("hide") == !1 ? n.closeMenus() : (n.closeMenus(), $(this).find(".topMenuDropdownContent").removeClass("hide"), $(this).find(".dropdownIcon").toggleClass("open", !0));
					t.stopPropagation() });
				$(document.body).click(function() { n.closeMenus() }) }, t.prototype.closeMenus = function() { $(".topMenuDropdownContent").not(".hide").addClass("hide");
				$(".dropdownIcon").toggleClass("open", !1) }, t.prototype.render = function() {}, t }(WebControl);
			n.TopMenu = t })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i, r) { var u = n.call(this, t, i) || this; return u.BlogAdjacentImage = r, u.init(), u } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.render = function() { var r, n, i; try { for (r = $("." + this.BlogAdjacentImage), n = 0; n < r.length; n++)
					if (i = $(r[n]).css("background-image"), i != null && i.length > 0 && i != "none") { var u = i.replace(/(url\()|([)'"])/ig, ""),
						f = u.replace(t.ResizePattern, "");
						f != u && $(r[n]).css("background-image", "url('" + f + t.ResizeImgQuery + "')") } } catch (e) { this.onError(e) } }, t.prototype.registerEventHandlers = function() {}, t.ResizeImgQuery = "?resize=120,75", t.ResizePattern = /[?]resize=[0-9]+(([%]2C)|,)[0-9]+.*/ig, t }(WebControl);
				n.AdjacentPosts = t })(t = n.TrendsInsights || (n.TrendsInsights = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function(n) { this.Model = n }, t.prototype.render = function() {}, t.prototype.registerEventHandlers = function() {}, t }(WebControl);
				n.BlogErrorDisplay = t })(t = n.TrendsInsights || (n.TrendsInsights = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { return n.call(this, t, i) || this } return __extends(t, n), t.prototype.loadModel = function(n) { this.Model = n }, t.prototype.registerEventHandlers = function() { var n = this,
					t = location.href.substring(location.href.length - 1, location.href.length),
					i = location.href.substring(0, location.href.length - 1);
					t == "&" && window.history.replaceState("", "", i);
					(n.Model.ArticleType == n.Model.CategoryPageType || n.Model.ArticleType == n.Model.HomePageType || n.Model.ArticleType == n.Model.PostPageType) && ($("#" + n.Model.CategoryIdStart + n.Model.CategoryIDSelected).addClass(n.Model.CategoryHeaderTextClickedJQClass), $("#" + n.Model.CategoryIdStart + n.Model.CategoryIDSelected).find(n.Model.CategoryBlockAfterJQClass).css("display", "block"));
					$(n.Model.CategoryBlockJQ).click(function() { var t, i, r; try { n.resetCategorySelection();
						t = $(this).text().trim().replace(/[ ]/g, "-").toLowerCase();
						i = ApplicationState.CultureID.toString();
						$(this).addClass(n.Model.CategoryHeaderTextClickedJQClass);
						$(this).find(n.Model.CategoryBlockAfterJQClass).css("display", "block");
						r = i == "1" ? RouteHelper.getURL("blog-basic-url") + n.Model.EnglishCategoryName + "/" + +$(this).attr("id").replace(n.Model.CategoryIdStart, "") + "/" + t + "/page/1" : RouteHelper.getURL("blog-basic-url") + n.Model.FrenchCategoryName + "/" + +$(this).attr("id").replace(n.Model.CategoryIdStart, "") + "/" + t + "/page/1";
						window.location.assign(r) } catch (u) { n.onError(u) } });
					$("#blogHead_search_input").keydown(function(t) { var i; try { if (t.stopPropagation(), t.keyCode == 13) { if (t.preventDefault(), i = n.validBlogSearch($(this)), i) { var r = n.XSSRemove($(this).val()),
						f = location.protocol,
						e = f.concat("//"),
						u = e.concat(window.location.hostname),
						o = ApplicationState.CultureID; return u += o == 1 ? RouteHelper.getURL("blog-searchresult-default-term") + "?searchterm=" + encodeURIComponent(r) : RouteHelper.getURL("blog-searchresult-default-term") + "?termederecherche=" + encodeURIComponent(r), window.location.href = u, !0 } } else $(this).removeClass("errorQtipField"), $(this).qtip("destroy") } catch (s) { n.onError(s) } }) }, t.prototype.validBlogSearch = function(n) { $(n).removeClass("errorQtipField");
					$(n).qtip("destroy"); var t = new RegExp("[^a-zA-Z0-9 àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]"); return $(n).val() == "" ? (Utilities.ErrorOutField($(n).attr("id") + "", this.Model.SearchResultNoText), !1) : !0 }, t.prototype.XSSRemove = function(n) { var t = new RegExp("<[^>]+>"),
					i = t.exec(n); return i === null ? n : "" }, t.prototype.render = function() {}, t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.resetCategorySelection = function() { var n = this;
					$(this.Model.CategoryBlockJQ).each(function() { $(this).removeClass(n.Model.CategoryHeaderTextClickedJQClass);
						$(this).find(n.Model.CategoryBlockAfterJQClass).css("display", "none") }) }, t }(WebControl);
				n.BlogHeader = t })(t = n.TrendsInsights || (n.TrendsInsights = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { return n.call(this, t, i) || this } return __extends(t, n), t.prototype.loadModel = function(n) { this.Model = n }, t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.render = function() { var n = this;
					n.Model.NbComments >= 0 && $(".blogTotal-comments").text(n.Model.NbComments + " " + n.Model.CommentMention); var i = n.Model.DisplayStatus,
						r = n.getUrlParameter("SignInComment"),
						u = n.Model.Status,
						f = n.Model.ThankYou,
						e = n.Model.CommentError,
						t = n.Model.CommentBase;
					r == "ok" && ($("html,body").scrollTop($(".blogSignin-box").offset().top), $("html,body").animate({ scrollTop: $(".blogSignin-box").offset().top }, 1e3, function() { $("#blogTxtBoxComment").focus();
						$(".blogDisclaimer span").delay(1e3).queue(function() { $(this).fadeOut().text(t).removeClass("blogWarning").removeClass("blogSuccess").fadeIn() }) }), window.history.replaceState("", "", location.protocol + "//" + location.host + location.pathname));
					i === !0 && (u == !1 ? ($(".blogDisclaimer span").text(e), $(".blogDisclaimer span").addClass("blogWarning")) : ($(".blogDisclaimer span").text(f), $(".blogDisclaimer span").addClass("blogSuccess")), $("html,body").scrollTop($(".blogSignin-box").offset().top), $("html,body").animate({ scrollTop: $(".blogSignin-box").offset().top }, 1e3, function() { $(".blogDisclaimer span").delay(1e3).queue(function() { $("#blogTxtBoxComment").focus();
						$(this).fadeOut().text(t).removeClass("blogWarning").removeClass("blogSuccess").fadeIn() }) }));
					ApplicationState.UserIsSignedIn ? ($(".blogAdd-comment").show(), $(".blogReply-btn").show(), $(".blogSignIn").hide(), $("#blogBtn-submit").show()) : ($(".blogSignIn").show(), $(".blogReply-btn").hide(), $("#blogBtn-submit").hide());
					n.Model.CommentLoaded = setInterval(function() { n.areCommentsLoaded() }, 1e3);
					n.getCommentData(null, n.getAllComments, n.Model.BaseUrl, "1", n.Model.MAXPERPAGEREPLYCOMMENTS.toString(), "", n.Model.CommentPostId) }, t.prototype.getUrlParameter = function(n) { n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var i = new RegExp("[\\?&]" + n + "=([^&#]*)"),
					t = i.exec(location.search); return t === null ? "" : decodeURIComponent(t[1].replace(/\+/g, " ")) }, t.prototype.registerEventHandlers = function() { this.registerCommentEvents() }, t.prototype.getCommentData = function(n, t, i, r, u, f, e) { var o = this,
					s = 0,
					h = 1,
					c = function(n, t) { if (s++, s <= h) { console.log("Retrying comments fetching");
						$.ajax(this); return } $("#blogLoadingReplyComment").hide();
						$("#blogLoadingReplyComment").attr("display", "none");
						$("#blogLoadingContainer").hide();
						o.manageCommentStatus(!1);
						Logging.Error(t);
						$("#blogCommentContainer").html(this.CommentPostErrorMsg) },
					l = function(i) { n != null ? t(n, i.Items, r, o) : t(i.Items, r, o);
						$("#blogLoadingreplycomment").hide();
						$("#blogLoadingreplycomment").attr("display", "none") };
					Actions.GetBlogCommentData({ wcfPath: i, page: r, postId: e, perPage: u, parent: f }, l, c) }, t.prototype.manageCommentStatus = function(n) { var t = this.Model.ThankYou,
					i = this.Model.CommentError,
					r = this.Model.CommentBase;
					n == !1 ? ($(".blogDisclaimer span").text(i), $(".blogDisclaimer span").removeClass("blogSuccesss"), $(".blogDisclaimer span").addClass("blogWarning")) : ($(".blogDisclaimer span").text(t), $(".blogDisclaimer span").removeClass("blogWarning"), $(".blogDisclaimer span").addClass("blogSuccess"));
					$("html,body").scrollTop($(".blogSignin-box").offset().top);
					$("html,body").animate({ scrollTop: $(".blogSignin-box").offset().top }, 1e3, function() { $("#blogTxtBoxComment").focus();
						$(".blogDisclaimer span").delay(1e3).queue(function() { $(this).fadeOut().text(r).removeClass("blogWarning").removeClass("blogSuccess").fadeIn();
							$(this).dequeue() }) });
					$("#blogLoadingReplyComment,#blogLoadingMainComment").hide();
					$("#blogLoadingReplyComment,#blogLoadingMainComment").attr("display", "none");
					$("#blogTxtBoxComment,#blogTxtBoxReply").val("");
					$("#blogTxtBoxComment,#blogTxtBoxReply").attr("placeholder", this.Model.AddComment);
					$("#blogTxtBoxComment").focus();
					$("#blogDivReply").hide("fast") }, t.prototype.postComment = function(n, t, i, r, u, f) { var e = this,
					o = 0,
					s = 1,
					h = function(n, t) { if (o <= s) { console.log("Retrying post fetching");
						$.ajax(this); return } $("#blogLoadingReplyComment,#loadingMainComment").hide();
						$("#blogLoadingReplyComment,#loadingMainComment").attr("display", "none");
						$("#blogLoadingContainer").hide();
						e.manageCommentStatus(!1);
						$("#blogDivReply").hide("fast");
						e.onError(t) },
					c = function(n) { e.manageCommentStatus(n == !0) };
					Actions.PostBlogComment({ wcfPath: n, author: t, email: i, comment: r, replyID: u, postId: f }, c, h) }, t.prototype.drawComments = function(n, t) { var i = "",
					s, o, u, r, f, h, c, e;
					this.Model.NbParentComments = n.length;
					this.Model.NbComments = n.length; for (s in n) { o = parseInt(s);
						u = n[o];
						this.Model.NbComments += u.ChildItems.length;
						i += '<div class="blogParent-comment">';
						i += '<div class="blogComment-top">';
						i += u.Author_Name;
						i += "<\/div>";
						i += '<div class="blogComment-center">';
						i += "<p>";
						i += u.Content.Rendered;
						i += "<\/p><\/div>";
						i += '<div class="blogComment-bottom">';
						i += '<span class="blogReply-btn" style="display: inline;">';
						i += '<a href="#" class="blogReplyInline" data-reply-id="' + u.Id + '">' + this.Model.ReplyComment + "<\/a>";
						i += "<\/span>";
						i += '<span class="blogDate">';
						r = new Date(u.Date);
						f = void 0;
						f = r.getMonth() + 1 + "/" + r.getUTCDate() + "/" + r.getFullYear();
						i += ApplicationState.UserIsSignedIn ? " - " + f : f;
						i += "<\/span><\/div>"; for (h in u.ChildItems) c = parseInt(h), e = n[o].ChildItems[c], i += '<div class="blogChildren-comment">', i += '<div class="blogComment-top">', i += e.Author_Name, i += "<\/div>", i += '<div class="blogComment-center">', i += "<p>", i += e.Content.Rendered, i += "<\/p><\/div>", i += '<div class="blogComment-bottom">', i += '<span class="blogDate">', r = new Date(e.Date), f = r.getMonth() + 1 + "/" + r.getUTCDate() + "/" + r.getFullYear(), i += f, i += "<\/span><\/div><\/div>";
						i += "<\/div>" } t.append(i);
					$(".blogParent-comment").hide();
					this.Model.NbComments >= 0 && $(".blogTotal-comments").text(this.Model.NbComments + " " + this.Model.CommentMention);
					ApplicationState.UserIsSignedIn ? ($(".blogAdd-comment").show(), $(".blogReply-btn").show(), $(".blogSignIn").hide()) : ($(".blogSignIn").show(), $(".blogReply-btn").hide());
					this.Model.NbParentComments > this.Model.ParentMaxDisplay ? $("#blogBtn-load-more").css("display", "flex") : $("#blogBtn-load-more").hide();
					this.Model.NbParentCommentDisplayed = this.Model.ParentMaxDisplay;
					$(".blogParent-comment").slice(0, this.Model.NbParentCommentDisplayed).show();
					$("#blogLoadingContainer").hide() }, t.prototype.areCommentsLoaded = function() { try { this.Model.ParentReplies.length > 0 && this.Model.ParentReplies.length == this.Model.NbParentLoaded && (clearInterval(this.Model.CommentLoaded), this.drawComments(this.Model.ParentReplies, $("#blogCommentContainer")), this.registerCommentEvents()) } catch (n) { this.onError(n) } }, t.prototype.registerCommentEvents = function() { var n = this;
					$(".blogSignin").click(function(n) { n.preventDefault();
						SessionStorage.PostLoginRedirect.save(location.href + "?SignInComment=ok");
						URLHash.set("section", "SignIn", !0);
						Gigya.showScreen(gigyaScreen.SignIn, null) });
					$(".blogSignup").click(function(n) { n.preventDefault();
						URLHash.set("section", "SignUp", !0);
						Gigya.showScreen(gigyaScreen.SignIn, null) });
					$("#blogBtn-load-more").click(function(t) { return t.stopImmediatePropagation(), t.preventDefault(), n.Model.NbParentCommentDisplayed += n.Model.ParentMaxDisplay, $(".blogParent-comment").slice(0, n.Model.NbParentCommentDisplayed).show(), n.Model.NbParentCommentDisplayed >= n.Model.NbParentComments ? $(this).hide() : $(this).show(), !1 });
					$("#blogBtn-submit").click(function(t) { if (t.preventDefault(), t.stopImmediatePropagation(), $("#blogTxtBoxComment").val().length == 0) return $(this).parent().siblings(".blogTooltip").children("span").show("fast"), $("#blogTxtBoxComment").attr("placeholder", n.Model.EnterComment), !1;
						$("#blogLoadingMainComment").show();
						$("#blogLoadingMainComment").attr("display", "inline-block");
						n.postComment(n.Model.BaseUrl, n.Model.Author, n.Model.Email, $("#blogTxtBoxComment").val(), $("#hdnReply").val(), n.Model.CommentPostId) });
					$("#blogTxtBoxComment").focus(function() { $("#hdnReply").val(0);
						$("#blogDivReply").hide("fast");
						$("#blogTxtBoxReply").val("") });
					$(".blogReplyInline").click(function() { $("#blogTxtBoxComment").val("");
						$(".blogTooltip span").hide();
						$("#blogDivReply").hide(); var n = $(this).data("replyId"); return $("#hdnReply").val(n), $(this).closest(".blogParent-comment").append($("#blogDivReply")), $("#blogDivReply").show("fast"), !1 });
					$("#blogBtnReplyComment").click(function(t) { if (t.preventDefault(), t.stopImmediatePropagation(), $(".blogTooltip span").hide(), $("#txtBoxReply").val().length == 0) return $(this).parent().siblings(".blogTooltip").children("span").show("fast"), $("#txtBoxReply").attr("placeholder", n.Model.EnterComment), !1;
						$("#blogLoadingReplyComment").show();
						$("#blogLoadingReplyComment").attr("display", "inline-block");
						n.postComment(n.Model.BaseUrl, n.Model.Author, n.Model.Email, $("#txtBoxReply").val(), $("#hdnReply").val(), n.Model.CommentPostId) }) }, t.prototype.getAllComments = function(n, t, i) { var f, r, u; try { if (f = parseInt(t), n != null && n.length > 0 && n.length == i.Model.MAXPERPAGEREPLYCOMMENTS) { i.Model.AllComments = i.Model.AllComments.concat(n);
					i.getCommentData(null, i.getAllComments, i.Model.BaseUrl, t, i.Model.MAXPERPAGEREPLYCOMMENTS.toString(), "", i.Model.CommentPostId); return } if (n && n.length > 0 && (i.Model.AllComments = i.Model.AllComments.concat(n)), i.Model.AllComments && i.Model.AllComments.length > 0) { for (r = 0; r < i.Model.AllComments.length; r++) i.Model.AllComments[r].Parent == "0" && i.Model.ParentReplies.push(i.Model.AllComments[r]); for (r = 0; r < i.Model.ParentReplies.length; r++) { for (i.Model.ParentReplies[r].ChildItems = [], u = 0; u < i.Model.AllComments.length; u++) i.Model.ParentReplies[r].Id.toString() == i.Model.AllComments[u].Parent && i.Model.ParentReplies[r].ChildItems.push(i.Model.AllComments[u]);
					i.Model.ParentReplies[r].ChildItems.sort(function(n, t) { var i = new Date(n.Date),
						r = new Date(t.Date); return i < r ? -1 : i > r ? 1 : 0 }) } i.Model.NbParentLoaded += i.Model.ParentReplies.length } else $("#blogLoadingContainer").hide() } catch (e) { this.onError(e) } }, t }(WebControl);
				n.Comments = t })(t = n.TrendsInsights || (n.TrendsInsights = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i, r) { var u = n.call(this, t, i) || this; return u.FeaturedImageCatPage = r, u } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this }, t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.render = function() { var r = this,
					n = this,
					i = function(n) { var u = $(n.FeaturedImageCatPage),
						f = u.length,
						i, e; if (f > 0)
						for (i = 0; i < f; i++) e = Utilities.resizeWPImageUrl(null, $(u[i]).css("background-image").replace(/(url)|[()"]/g, ""), $(r.FeaturedImageCatPage).width(), t.FeatureImageMinHeight), $(u[i]).css("background-image", "url('" + e + "')");
						$(r.FeaturedImageCatPage).css("visibility", "visible") };
					Pages.PostPageArticle.postPageLoaded.Listen(function(t) { t.detail.loaded && i(n) });
					Pages.AuthorPage.AuthorPageLoaded.Listen(function(t) { t.detail.loaded && i(n) });
					Pages.CategoryArticle.CatPageLoaded.Listen(function(t) { t.detail.loaded && i(n) });
					Pages.ContributorsPage.ContPageLoaded.Listen(function(t) { t.detail.loaded && i(n) }) }, t.FeatureImageMinHeight = 350, t }(WebControl);
				n.FeatureImage = t })(t = n.TrendsInsights || (n.TrendsInsights = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { return n.call(this, t, i) || this } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.render = function() {}, t.prototype.registerEventHandlers = function() {}, t }(WebControl);
				n.LatestPosts = t })(t = n.TrendsInsights || (n.TrendsInsights = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i, r, u, f) { var e = n.call(this, t, i) || this; return e.Content = r, e.PostPageContentId = u, e.PostPageLeftColumnId = f, e } return __extends(t, n), t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.loadModel = function() {}, t.prototype.render = function() { var n = this }, t.prototype.registerEventHandlers = function() { var n = this;
					$(window).resize(function() { try { n.adjustIframesSize() } catch (t) { this.onError(t) } });
					Events.Listen(Pages.PostPageArticle.pageLoadedEvent, function(t) { var e, o, r, h, s, u, i, f; try { n.adjustIframesSize(); try { for (n.Content = n.Content.replace(/\\\"/g, "'"), e = $.parseHTML(n.Content), o = $("#" + n.PostPageLeftColumnId).width(), $(e).appendTo("#" + n.PostPageContentId), r = $("#" + n.PostPageContentId).find("img"), i = 0; i < r.length; i++) { h = r[i];
						$(r[i]).attr("width", "");
						$(r[i]).attr("height", "");
						$(r[i]).attr("srcset", ""); try { s = Utilities.resizeWPImageUrl(null, $(r[i]).attr("src"), o);
							$(r[i]).attr("src", s) } catch (t) { n.onError(t) } } for (u = $("#" + n.PostPageContentId).find("figure"), i = 0; i < u.length; i++) $(u[i]).css("width", ""), $(u[i]).css("height", "");
						f = 0;
						$(".two-col-img-text tr").each(function() { var n = $(this).height();
							n > f && (f = n) });
						$(".two-col-img-text tr").each(function() { $(this).height(f) });
						$(".two-col-img-text td.column-1, .two-col-img-text th.column-1").each(function() { var i = $("#" + n.PostPageContentId).width() / 3,
							r = $(this).find("img")[0],
							t = $($(this).find("img")[0]).attr("src");
							r != null && t != null && (t = Utilities.resizeWPImageUrl(null, t, i), t = $($(this).find("img")[0]).attr("src"), $($(this).find("img")[0]).remove(), $(this).css("background-image", "url(" + t + ")"), $(this).addClass("thumbnailCellFill")) });
						$(".two-col-img-text-no-border td.column-1, .two-col-img-text-no-border th.column-1").each(function() { var i = $("#" + n.PostPageContentId).width() / 3,
							r = $(this).find("img")[0],
							t = $($(this).find("img")[0]).attr("src");
							r != null && t != null && (t = Utilities.resizeWPImageUrl(null, t, i), t = $($(this).find("img")[0]).attr("src"), $($(this).find("img")[0]).remove(), $(this).css("background-image", "url(" + t + ")"), $(this).addClass("thumbnailCellFill")) });
						$(".two-col-img td.column-1, .two-col-img td.column-2").each(function() { var i = $("#" + n.PostPageContentId).width() / 2,
							r = $(this).find("img")[0],
							t = $($(this).find("img")[0]).attr("src");
							r != null && t != null && (t = Utilities.resizeWPImageUrl(null, t, i), $($(this).find("img")[0]).remove(), $(this).css("background-image", "url(" + t + ")"), $(this).addClass("thumbnailCellFill")) });
						$(".five-col-img td,.five-col-img th").each(function() { var i = $("#" + n.PostPageContentId).width() / 5,
							r = $(this).find("img")[0],
							t = $($(this).find("img")[0]).attr("src");
							r != null && t != null && (t = Utilities.resizeWPImageUrl(null, t, i), $($(this).find("img")[0]).remove(), $(this).css("background-image", "url(" + t + ")"), $(this).addClass("thumbnailCellFill"), $(this).css("height", "150px")) });
						$("p").each(function() { var n = $(this);
							n.html().replace(/\s|&nbsp;/g, "").length == 0 && n.remove() });
						$("#" + n.PostPageContentId).show() } catch (t) { n.onError(t) } } catch (t) { this.onError(t) } }, Events.ListenerScope.Page) }, t.prototype.addHScrollTables = function() { for (var t = $("#" + this.PostPageContentId + " table.tablepress"), i, n = 0; n < t.length; n++) i = t[n], $("#" + i.id).wrap('<div class="table-wrap"><\/div>') }, t.prototype.adjustIframesSize = function() { for (var f = $("iframe"), n, i = 0; i < f.length; i++)
					if (n = f[i], $(n).attr("ratio")) { var r = parseFloat($(n).attr("ratio")),
						t = n.clientWidth,
						u = t * r;
						$(n).attr("width", t.toString());
						$(n).attr("height", u.toString()) } else { var r = parseInt($(n).attr("height")) / parseInt($(n).attr("width")),
						t = n.clientWidth,
						u = t * r;
						$(n).attr("width", t.toString());
						$(n).attr("height", u.toString());
						$(n).attr("ratio", r.toString()) } }, t.ResizeImgQuery = "?resize=400,200", t.ResizePattern = /[?]resize=[0-9]+(([%]2C)|,)[0-9]+.*/ig, t }(WebControl);
				n.PostPageContent = t })(t = n.TrendsInsights || (n.TrendsInsights = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i, r) { var u = n.call(this, t, i) || this; return u.RelatedPostImage = r, u } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.render = function() { for (var r = $("." + this.RelatedPostImage), i, n = 0; n < r.length; n++)
					if (i = $(r[n]).css("background-image"), i != null && i.length > 0 && i != "none") { var u = i.replace(/(url\()|([)'"])/ig, ""),
						f = u.replace(t.ResizePattern, "");
						u != f && $(r[n]).css("background-image", "url('" + f + t.ResizeImgQuery + "')") } }, t.prototype.onError = function(n) { $("#" + this.BlogMainContainerId).hide();
					$("#" + this.ErrorCtrlId).show();
					Logging.Error(n) }, t.prototype.registerEventHandlers = function() {}, t.ResizeImgQuery = "?resize=100,75", t.ResizePattern = /[?]resize=[0-C)|,)[0-9]+.*/ig, t }(WebControl);
				n.RelatedPosts = t })(t = n.TrendsInsights || (n.TrendsInsights = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { return n.call(this, t, i) || this } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.registerEventHandlers = function() { var n = this;
					$("#blog_search_try_again_btn").on("click", function() { var t; try { if (event.preventDefault(), event.stopPropagation(), t = n.validBlogSearch($("#blog_search_try_again_input")), t) { var i = n.XSSRemove($("#blog_search_try_again_input").val()),
						u = location.protocol,
						f = u.concat("//"),
						r = f.concat(window.location.hostname),
						e = ApplicationState.CultureID; return r += e == 1 ? RouteHelper.getURL("blog-searchresult-default-term") + "?searchterm=" + encodeURIComponent(i) : RouteHelper.getURL("blog-searchresult-default-term") + "?termederecherche=" + encodeURIComponent(i), window.location.href = r, !0 } } catch (o) { n.onError(o) } });
					$("#blog_search_try_again_input").keydown(function(t) { var i; try { if (t.stopPropagation(), t.keyCode == 13) { if (t.preventDefault(), i = n.validBlogSearch($(this)), i) { var r = n.XSSRemove($(this).val()),
						f = location.protocol,
						e = f.concat("//"),
						u = e.concat(window.location.hostname),
						o = ApplicationState.CultureID; return u += o == 1 ? RouteHelper.getURL("blog-searchresult-default-term") + "?searchterm=" + encodeURIComponent(r) : RouteHelper.getURL("blog-searchresult-default-term") + "?termederecherche=" + encodeURIComponent(r), window.location.href = u, !0 } } else $(this).removeClass("errorQtipField"), $(this).qtip("destroy") } catch (s) { n.onError(s) } }) }, t.prototype.validBlogSearch = function(n) { $(n).removeClass("errorQtipField");
					$(n).qtip("destroy"); var t = new RegExp("[^a-zA-Z0-9 àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]"); return $(n).val() == "" ? (Utilities.ErrorOutField($(n).attr("id") + "", this.SearchResultNoText), !1) : !0 }, t.prototype.XSSRemove = function(n) { var t = new RegExp("<[^>]+>"),
					i = t.exec(n); return i === null ? n : "" }, t.prototype.render = function() { var i = $("#blogSearchNoResultText").html(),
					n = "",
					t = "";
					this.SearchTermFormated = this.SearchTermFormated.replace(/[+]/g, " ");
					this.TagNameFormated = this.TagNameFormated.replace(/[+]/g, " ");
					t = this.CurrentSubPageMode == this.SearchPageTag ? this.SearchResultTagText : this.SearchResultKeyText;
					this.SearchTermFormated.length > 0 ? (n = this.SearchTermFormated, n = decodeURIComponent(n), n = $("<div/>").text(n).html()) : this.TagNameFormated.length > 0 && (n = this.TagNameFormated, n = decodeURIComponent(n), n = $("<div/>").text(n).html());
					this.PostCount > 0 && n && n.length > 0 ? ($("#blogSearchResult").show(), $(".blogSearchResultKeyText").show(), $(".blogSearchResultKeyText").html(t + ' <strong>"' + n + '"<\/strong>')) : ($("#" + this.SearchNoResultContainerId).show(), $("#blogSearchNoResultText").html(t + ' <strong>"' + n + '"<\/strong>')) }, t }(WebControl);
				n.SearchResults = t })(t = n.TrendsInsights || (n.TrendsInsights = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { return n.call(this, t, i) || this } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.registerEventHandlers = function() { var n = this.model,
					t = this;
					$("#lnkEmailFriend").click(function() { n.Campaign === "FindaRealtor" ? window.open(RouteHelper.getURL("email-a-friend") + "?PageName=" + encodeURIComponent(n.Description) + "&PageUrl=" + encodeURIComponent(n.LinkBack) + "&MediaSrc=" + n.MediaSrc + "&UtmCampaign=" + n.Campaign) : n.Campaign === "ListingLink" ? window.open(RouteHelper.getURL("email-a-friend") + "?ListingId=" + n.Listings) : n.Campaign === "FavouriteListings" && window.open(RouteHelper.getURL("email-a-friend") + "?ListingIds=" + n.Listings) }); try { t.setUpSocialize() } catch (i) { t.onError(i) } }, t.prototype.render = function() {}, t.prototype.setUpSocialize = function() { var n = this.model,
					t = new gigya.socialize.UserAction,
					i;
					t.setTitle(n.Title);
					t.setLinkBack(n.LinkBack);
					t.addMediaItem({ type: n.MediaType, src: n.MediaSrc, href: n.LinkBack });
					t.setDescription(n.Description);
					i = { containerID: "shareComponentDivBlog", shareButtons: [{ provider: "facebook", url: n.LinkBackFacebook, iconImgUp: "/wp-content/plugins/adk_feed/assets/images/icon_facebook.svg", listingid: n.Listing || n.Listings }, { provider: "twitter", url: n.LinkBackTwitter, iconImgUp: "/wp-content/plugins/adk_feed/assets/images/icon_twitter.svg", listingid: n.Listing || n.Listings }, { provider: "pinterest", url: n.LinkBackPinterest, iconImgUp: "/wp-content/plugins/adk_feed/assets/images/icon_pinterest.svg", listingid: n.Listing || n.Listings }, { provider: "linkedIn", url: n.LinkBackLinkedIn, iconImgUp: "/wp-content/plugins/adk_feed/assets/images/icon_linkedin.svg", listingid: n.Listing || n.Listings }], onShareButtonClicked: this.onShareClicked, iconsOnly: "true", showCounts: "none", userAction: t };
					gigya.socialize.showShareBarUI(i) }, t.prototype.onShareClicked = function(n) { var t = n.shareItem.listingid;
					t != "" && t != null && (n.shareItem.provider == "facebook" && Analytics.log(t, "share_facebook"), n.shareItem.provider == "twitter" && Analytics.log(t, "share_twitter"), n.shareItem.provider == "linkedIn" && Analytics.log(t, "share_linkedIn"), n.shareItem.provider == "pinterest" && Analytics.log(t, "share_pinterest")) }, t }(WebControl);
				n.SocialShareTrendInsights = t })(t = n.TrendsInsights || (n.TrendsInsights = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t;
				(function(n) { var t = function(n) {
					function t(t, i) { var r = n.call(this, t, i) || this; return r.RetryLimit = 2, r.RetryCount = 0, r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this }, t.prototype.render = function() { this.GetInstagramPhotos() }, t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.CallInstagram = function(n) { var t = function(t, i) { if (this.retryCount++, this.retryCount < this.retryLimit) { console.log("Retrying instagram data fetch...");
							this.CallInstagram(n); return } Logging.Error(i);
							$("#blogErrorMsgDisplayIL").html("<h3>" + this.InstagramErrorMsg + "<\/h3>");
							$("#blogInstagram_photos").show() },
						i = function(t) { var i, r, u; if (typeof t != null) { $("#blogInstagram_photos").show(); try { for (i = 0; i < n; i++) r = $("#blogInstagram_photos"), i < t.data.length && (u = '<a class="blogInstagramImg" target="_blank" onclick="window.open(\'' + t.data[i].link + '\')"><div class="blogInstagramImg" style="background-image: url(\'' + t.data[i].images.low_resolution.url + "');\"><\/div><\/a>", r.append(u));
							$("#blogInstagram_photos").css("padding", "");
							t.data.length > 0 || ($("#blogErrorMsgDisplayIL").html("<h3>" + this.InstagramErrorMsg + "<\/h3>"), $("#blogInstagram_photos").show());
							$("#blogErrorMsgDisplayIL").hide() } catch (f) { $("#blogErrorMsgDisplayIL").html("<h3>" + this.InstagramErrorMsg + "<\/h3>");
							$("#blogInstagram_photos").show();
							Logging.Error(f + ":Error while adding instagram images...") } } };
						Actions.GetInstagramData({ maxCount: n }, i, t) }, t.prototype.GetInstagramPhotos = function() { var n, t; try { this.InstagramModeDisplay == this.InstagramSideMode ? (t = Number(this.InstagramMaxSideDisplay), n = "blogInstagram_side_photos") : (t = Number(this.InstagramMaxBottomDisplay), n = "blogInstagram_bottom_photos") } catch (i) { this.onError(i);
						$("#blogErrorMsgDisplayIL").html("<h3>" + this.InstagramErrorMsg + "<\/h3>");
						$("#blogErrorMsgDisplayIL").show();
						$("#blogInstagram_photos").show() } $("#blogInstagram_photos").addClass(n);
						this.CallInstagram(t) }, t }(WebControl);
					n.InstagramListing = t })(t = n.SideBar || (n.SideBar = {})) })(t = n.TrendsInsights || (n.TrendsInsights = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i, r) { var u = n.call(this, t, i) || this; return u.BlogAdjacentImage = r, u.init(), u } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.onError = function(n) { Logging.Error(n) }, t.prototype.render = function() { var r, n, i; try { for (r = $("." + this.BlogAdjacentImage), n = 0; n < r.length; n++)
					if (i = $(r[n]).css("background-image"), i != null && i.length > 0 && i != "none") { var u = i.replace(/(url\()|([)'"])/ig, ""),
						f = u.replace(t.ResizePattern, "");
						f != u && $(r[n]).css("background-image", "url('" + f + t.ResizeImgQuery + "')") } } catch (e) { this.onError(e) } }, t.prototype.registerEventHandlers = function() {}, t.ResizeImgQuery = "?resize=200,100", t.ResizePattern = /[?]resize=[0-9]+(([%]2C)|,)[0-9]+.*/ig, t }(WebControl);
				n.PopularPosts = t })(t = n.TrendsInsights || (n.TrendsInsights = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this,
					t = $("#" + n.clientId);
					$("#" + n.clientId + " .SavedSearchMainCon").click(function() { var n = $(this).parent().find('input[type="checkbox"]');
						n.prop("checked", !n.prop("checked")) }) }, t.prototype.render = function() {}, t }(WebControl);
				n.SavedSearchControl = t })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = null,
				r = null,
				i = null,
				u = function(n) {
					function u(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(u, n), u.prototype.loadModel = function() {}, u.prototype.registerEventHandlers = function() { var n = this,
						f = this;
						t = $("#cpAccountNewEmailTxt");
						r = $("#cpAccountReEnterNewEmailTxt");
						i = $("#txtProfileEmail");
						$("#btnChangeAccountEmailSubmit").click(function() { if (FormValidation.validateForm($("#screenChangeAccountEmailCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation)) { var n = new ChangeAccountEmailArgs; return n.addLoginEmails = t.val(), n.removeLoginEmails = i.val(), Actions.changeEmail(n, u.changeEmailHandler), !1 } return addAnimationClass($("#btnChangeAccountEmailSubmit"), "btnFail"), !1 });
						$("#btnChangeAccountEmailCancel").click(function() { Gigya.hide_gigyaScreen(gigyaScreen.ChangeAccountEmail) });
						$(document).keydown(function(n) { return n.which && n.which == 13 || n.keyCode && n.keyCode == 13 ? ($("#btnChangeAccountEmailSubmit")[0].click(), !1) : n.which && n.which == 27 || n.keyCode && n.keyCode == 27 ? (Gigya.hide_gigyaScreen(gigyaScreen.ChangeAccountEmail), !1) : !0 }) }, u.changeEmailHandler = function(n) { var t, i;
						n != null && (n.ErrorCode.Id == 200 ? (Gigya.GetAccountFromBOL(!1, !0), t = new ConfirmationDialog2Args, t.ID = "pnlChangeAccountEmailSuccess", t.TitleText = Translation.get("FinalizeEmailChange"), t.BodyContent = $("<span>" + Translation.get("FinalizeEmailChangeText") + "<\/span>"), t.ButtonPositiveText = Translation.get("OK"), t.ButtonPositiveOnClick = function() { $.featherlight.close();
							Gigya.hide_gigyaScreen(gigyaScreen.ChangeAccountEmail) }, t.ButtonNegativeOnClick = function() { $.featherlight.close() }, i = new ConfirmationDialogModel2(t.ID, t.TitleText, t.BodyContent, t.ButtonPositiveText, t.ButtonPositiveOnClick, null, t.ButtonNegativeOnClick), i.ShowCloseButton = !1, showConfirmationDialog2(i)) : n.GigyaErrorCode == 403043 ? showMessage(Translation.get("EmailExists"), MessageType.Error, DisplayType.Lightbox) : showMessage(n.GigyaErrorMsg, MessageType.Error, DisplayType.Lightbox)) }, u.prototype.render = function() {}, u }(WebControl);
				n.Screen_ChangeAccountEmail = u })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = null,
				i = null,
				r = null,
				u = function(n) {
					function u(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(u, n), u.prototype.loadModel = function() {}, u.prototype.registerEventHandlers = function() { var n = this,
						f = this;
						t = $("#cpAccountExistingPasswordTxt");
						i = $("#cpAccountNewPasswordTxt");
						r = $("#cpAccountReEnterNewPasswordTxt");
						$("#btnChangeAccountPasswordSubmit").click(function() { if (FormValidation.validateForm($("#screenChangeAccountPasswordCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation)) { var n = new ChangeAccountPasswordArgs; return n.password = t.val(), n.newPassword = i.val(), Actions.changePassword(n, u.changePasswordHandler), !1 } return addAnimationClass($("#btnChangeAccountPasswordSubmit"), "btnFail"), !1 });
						$("#btnChangeAccountPasswordCancel").click(function() { Gigya.hide_gigyaScreen(gigyaScreen.ChangeAccountPassword) });
						$(document).keydown(function(n) { return n.which && n.which == 13 || n.keyCode && n.keyCode == 13 ? ($("#btnChangeAccountPasswordSubmit")[0].click(), !1) : n.which && n.which == 27 || n.keyCode && n.keyCode == 27 ? (Gigya.hide_gigyaScreen(gigyaScreen.ChangeAccountPassword), !1) : !0 }) }, u.changePasswordHandler = function(n) { var r = this;
						n != null && (n.GigyaError.ErrorCode == 0 ? (Gigya.hide_gigyaScreen(gigyaScreen.ChangeAccountPassword), Gigya.hide_gigyaScreen(gigyaScreen.ForgotPassword), showMessage(Translation.get("PasswordResetSuccess"), MessageType.Normal, DisplayType.Toast)) : n.GigyaError.ErrorCode == 403042 ? (FormValidation.markFieldAsInvalid(t, Translation.get("ThisIsNotYourExistingPassword")), addAnimationClass($("#btnChangeAccountPasswordSubmit"), "btnFail")) : n.GigyaError.ErrorCode == 401030 ? (FormValidation.markFieldAsInvalid(i, Translation.get("OldPasswordUsed")), addAnimationClass($("#btnChangeAccountPasswordSubmit"), "btnFail")) : n.GigyaError.ErrorCode == 400006 ? showMessage(Translation.get("OldPasswordUsed"), MessageType.Error, DisplayType.Lightbox) : showMessage(n.GigyaError.ErrorMsg, MessageType.Error, DisplayType.Lightbox)) }, u.prototype.render = function() {}, u }(WebControl);
				n.Screen_ChangeAccountPassword = u })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var i = null,
				t = null,
				r = null,
				u = function(n) {
					function u(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(u, n), u.prototype.loadModel = function(n) { this.pwrtToken = n.pwrtToken }, u.prototype.registerEventHandlers = function() { var f = this,
						n = this;
						i = $("#cpExistingPasswordTxt");
						t = $("#cpNewPasswordTxt");
						r = $("#cpReEnterNewPasswordTxt");
						$("#btnChangePasswordSubmit").click(function() { if (FormValidation.validateForm($("#screenChangePasswordCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation)) { var i = new ResetPasswordArgs; return i.loginID = null, i.lang = ApplicationState.LanguageAttribute, i.newPassword = t.val(), i.passwordResetToken = n.pwrtToken, i.sendEmail = !1, i.email = null, Actions.resetPassword(i, u.resetPasswordHandler), !1 } return addAnimationClass($("#btnChangePasswordSubmit"), "btnFail"), !1 });
						$("#btnChangePasswordCancel").click(function() { Gigya.hide_gigyaScreen(gigyaScreen.ChangePassword) });
						$(document).keydown(function(n) { return n.which && n.which == 13 || n.keyCode && n.keyCode == 13 ? ($("#btnChangePasswordSubmit")[0].click(), !1) : n.which && n.which == 27 || n.keyCode && n.keyCode == 27 ? (Gigya.hide_gigyaScreen(gigyaScreen.ChangePassword), !1) : !0 }) }, u.prototype.render = function() { var n = this;
						(n.pwrtToken == null || n.pwrtToken == "") && ApplicationState.UserIsSignedIn && $("#screenInputConExisting").show() }, u.resetPasswordHandler = function(n) { var r = this;
						n != null && (n.GigyaError.ErrorCode == 0 ? (Gigya.hide_gigyaScreen(gigyaScreen.ChangePassword), Gigya.hide_gigyaScreen(gigyaScreen.ForgotPassword), showMessage(Translation.get("PasswordResetSuccess"), MessageType.Normal, DisplayType.Toast)) : n.GigyaError.ErrorCode == 403042 ? (FormValidation.markFieldAsInvalid(i, Translation.get("ThisIsNotYourExistingPassword")), addAnimationClass($("#btnChangePasswordSubmit"), "btnFail")) : n.GigyaError.ErrorCode == 401030 ? (FormValidation.markFieldAsInvalid(t, Translation.get("OldPasswordUsed")), addAnimationClass($("#btnChangePasswordSubmit"), "btnFail")) : n.GigyaError.ErrorCode == 400006 ? showMessage(Translation.get("PasswordResetLinkExpired"), MessageType.Error, DisplayType.Lightbox) : showMessage(n.GigyaError.ErrorMsg, MessageType.Error, DisplayType.Lightbox)) }, u }(WebControl);
				n.Screen_ChangePassword = u })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
					$("#btnCheckYourEmailOk").click(function() { Gigya.hide_gigyaScreen(gigyaScreen.CheckYourEmail);
						$("#signInPageContent").show();
						$("#signUpPageContent").hide();
						URLHash.set("section", "SignIn", !1) }) }, t.prototype.render = function() {}, t }(WebControl);
				n.Screen_CheckYourEmail = t })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = null,
				i = function(n) {
					function i(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(i, n), i.prototype.loadModel = function() {}, i.prototype.registerEventHandlers = function() { var n = this;
						t = $("#screenForgotPasswordEmailTxt");
						$("#btnResetPasswordSubmit").click(function() { if (FormValidation.validateForm($("#screenForgotPasswordCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation)) { var n = new ResetPasswordArgs; return n.loginID = t.val(), n.lang = ApplicationState.LanguageAttribute, n.newPassword = null, n.passwordResetToken = null, n.sendEmail = !0, n.email = t.val(), Actions.resetPassword(n, i.resetPasswordHandler), !1 } return addAnimationClass($("#btnResetPasswordSubmit"), "btnFail"), !1 });
						$("#btnResetPasswordCancel").click(function() { return Gigya.hide_gigyaScreen(gigyaScreen.ForgotPassword), !1 });
						$(document).keydown(function(n) { return n.which && n.which == 13 || n.keyCode && n.keyCode == 13 ? ($("#btnResetPasswordSubmit")[0].click(), !1) : n.which && n.which == 27 || n.keyCode && n.keyCode == 27 ? (Gigya.hide_gigyaScreen(gigyaScreen.ForgotPassword), !1) : !0 });
						$(window).on("resize", function() { Gigya.resize_gigyaScreen(gigyaScreen.ForgotPassword) }) }, i.resetPasswordHandler = function(n) { var u = this,
						i, r;
						n != null && (n.GigyaError.ErrorCode == 0 ? (i = new ConfirmationDialog2Args, i.ID = "pnlForgotPasswordSent", i.TitleText = Translation.get("ForgotPassword"), i.BodyContent = $("<span>" + Translation.get("PasswordResetSuccessText") + "<\/span>"), i.ButtonPositiveText = Translation.get("OK"), i.ButtonPositiveOnClick = function() { Gigya.hide_gigyaScreen(gigyaScreen.ForgotPassword);
							$.featherlight.close() }, r = new ConfirmationDialogModel2(i.ID, i.TitleText, i.BodyContent, i.ButtonPositiveText, i.ButtonPositiveOnClick), r.ShowCloseButton = !1, showConfirmationDialog2(r)) : n.GigyaError.ErrorCode == 403047 ? (FormValidation.markFieldAsInvalid(t, Translation.get("ThisEmailDoesNotExistOnRealtor")), addAnimationClass($("#btnResetPasswordSubmit"), "btnFail")) : showMessage(n.GigyaError.ErrorMsg, MessageType.Error, DisplayType.Toast)) }, i.prototype.render = function() {}, i }(WebControl);
				n.Screen_ForgotPassword = i })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
					$("#sm_link_facebook_login").click(function() { var n = new SocializeSignInArgs;
						n.provider = "facebook";
						n.regToken = globalRegToken;
						n.loginMode = "link";
						n.session_expiration = 0;
						Gigya.SocializeLogin(n) });
					$("#sm_link_google_login").click(function() { var n = new SocializeSignInArgs;
						n.provider = "googleplus";
						n.regToken = globalRegToken;
						n.loginMode = "link";
						n.session_expiration = 0;
						Gigya.SocializeLogin(n) });
					$("#sm_link_twitter_login").click(function() { var n = new SocializeSignInArgs;
						n.provider = "twitter";
						n.regToken = globalRegToken;
						n.loginMode = "link";
						n.session_expiration = 0;
						Gigya.SocializeLogin(n) });
					$("#sm_link_linkedin_login").click(function() { var n = new SocializeSignInArgs;
						n.provider = "linkedin";
						n.regToken = globalRegToken;
						n.loginMode = "link";
						n.session_expiration = 0;
						Gigya.SocializeLogin(n) });
					$("#btnLinkAccount").click(function() { var n, t; return $("#btnLinkAccount").hasClass("loading") == !1 ? FormValidation.validateForm($("#LinkAccountTabCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation) ? ($("#btnLinkAccount").addClass("loading"), n = new SignInArgs, n.email = $("#linkAccountEmailTxt").val(), n.password = $("#linkAccountPasswordTxt").val(), n.loginMode = "link", n.regToken = globalRegToken, n.captchaText = null, n.captchaToken = null, t = new SignInCallbackArgs, t.sourceScreen = gigyaScreen.LinkAccounts, Gigya.Login(n, t), !1) : (addAnimationClass($("#btnLinkAccount"), "btnFail"), !1) : !1 });
					$("#btnLinkAccountCancel, #btnLinkAccountSocialCancel").click(function() { var n = new ConfirmationDialog2Args,
						t;
						n.ID = "pnlExitLinkConfirmMsg";
						n.TitleText = Translation.get("StopThisSignIn");
						n.BodyContent = $("<span>" + Translation.get("AreYouSureYouWantToLeaveThisPage", globalRequestSMProvider) + "<\/span>");
						n.ButtonPositiveText = Translation.get("Yes");
						n.ButtonPositiveOnClick = function() { Gigya.hide_gigyaScreen(gigyaScreen.LinkAccounts);
							$.featherlight.close() };
						n.ButtonNegativeText = Translation.get("No");
						n.ButtonNegativeOnClick = function() { $.featherlight.close() };
						t = new ConfirmationDialogModel2(n.ID, n.TitleText, n.BodyContent, n.ButtonPositiveText, n.ButtonPositiveOnClick, n.ButtonNegativeText, n.ButtonNegativeOnClick);
						t.ShowCloseButton = !1;
						showConfirmationDialog2(t) });
					$("#linkAccountsForgotPasswordLnk").click(function() { return Gigya.showScreen(gigyaScreen.ForgotPassword, null), !1 }) }, t.prototype.render = function() { gigya.accounts.getConflictingAccount({ regToken: globalRegToken, callback: t.linkHandler }) }, t.linkHandler = function(n) { var t, i; if (n.errorCode == 0) { if ($("#LinkAccountTextSocial").html(Translation.get("LinkAccountTextSocial", globalRequestSMProvider)), $("#linkAccountEmailTxt").val(n.conflictingAccount.loginID), t = n.conflictingAccount.loginProviders, t != null)
					if (t.indexOf("site") > -1) $(".screen-container[data-login-identities='site-only']").show(), $(".screen-container[data-login-identities='social']").hide();
					else { $(".screen-container[data-login-identities='social']").show();
						$(".screen-container[data-login-identities='site-only']").hide(); for (i in t) $(".sm-item[data-sm-provider='" + t[i] + "']").show() } } else Gigya.hide_gigyaScreen(gigyaScreen.LinkAccounts), Gigya.hide_gigyaScreen(gigyaScreen.MoreInfoRequired), showMessage(n.errorMessage, MessageType.Error) }, t }(WebControl);
				n.Screen_LinkAccounts = t })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function() {
					function n() { this.More_About_You = "Continue";
						this.Buyer = 0;
						this.Buyer_com = 0;
						this.Interested = 1;
						this.Interested_com = 1;
						this.Looking = 0;
						this.CREA_mail_updates = !1;
						this.REALTOR_mail_updates = !1 } return n }(),
				i = function(n) {
					function i(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(i, n), i.prototype.loadModel = function() {}, i.prototype.registerEventHandlers = function() { DropDown.loadSelect2($("#screen_MoreAboutYou select"), { tags: !1, closeOnSelect: !0, containerCssClass: "homeFilter", dropdownCssClass: "screenFilterLightboxItemsCon" }); var n = this;
						$("#btnMAYContinue").click(function() { var i, f, r, u; return $("#btnMAYContinue").hasClass("loading") == !1 ? ($("#btnMAYContinue").addClass("loading"), i = new t, i.More_About_You = "Continue", i.Buyer = $("#ddlIam option:selected").val(), i.Buyer_com = $("#ddlIam_com option:selected").val(), i.Interested = $("#ddlPrimary option:selected").val(), i.Interested_com = $("#ddlPrimary_com option:selected").val(), i.Looking = $("#ddlLooking option:selected").val(), i.CREA_mail_updates = $("#" + n.clientId + "_chkCREA").is(":checked"), i.REALTOR_mail_updates = $("#" + n.clientId + "_chkREALTOR").is(":checked"), f = JSON.stringify(i), r = new AccountSetInfoArgs, r.profile = "", r.data = f, r.CRM_update = !0, u = new SetAccountInfoCallbackArgs, u.sourceScreen = gigyaScreen.MoreAboutYou, Gigya.AccountSetInfo(r, u), !1) : !1 });
						$(document).keydown(function(n) { return n.which && n.which == 13 || n.keyCode && n.keyCode == 13 ? ($("#btnMAYContinue")[0].click(), !1) : n.which && n.which == 27 || n.keyCode && n.keyCode == 27 ? (Gigya.hide_gigyaScreen(gigyaScreen.MoreAboutYou), !1) : !0 }) }, i.prototype.render = function() { ApplicationState.CurrentMode == ApplicationModes.Residential ? ($("#may_ddlP").show(), $("#may_ddlP_com").hide()) : ($("#may_ddlP").hide(), $("#may_ddlP_com").show()) }, i }(WebControl);
				n.Screen_MoreAboutYou = i })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function() {
					function n() { this.firstName = "";
						this.lastName = "";
						this.email = "" } return n }(),
				i = function(n) {
					function i(t, i) { var r = n.call(this, t, i) || this; return r.firstName = "", r.lastName = "", r.email = "", r.init(), r } return __extends(i, n), i.prototype.loadModel = function(n) { this.firstName = n.firstName;
						this.lastName = n.lastName;
						this.email = n.email }, i.prototype.registerEventHandlers = function() { var n = this;
						$("#btnMOCancel").click(function() { var n = new LogoutCallbackArgs; return n.DT = DisplayType.Tempbox, Gigya.Logout(n), Gigya.hide_gigyaScreen(gigyaScreen.MoreInfoRequired), !1 });
						$("#btnMOContinue").click(function() { var r, f, i, u; if (FormValidation.validateForm($("#screenMoreInfoCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation)) r = new t, r.email = $("#" + n.clientId + "_screenMoreInfoEmailTxt").val(), r.firstName = $("#" + n.clientId + "_screenMoreInfoFirstNameTxt").val(), r.lastName = $("#" + n.clientId + "_screenMoreInfoLastNameTxt").val(), f = JSON.stringify(r), i = new SetAccountInfoArgs, i.profile = f, i.data = "", i.conflictHandling = "saveProfileAndFail", i.regToken = globalRegToken, i.errorCode = n.email == null || n.email == "" ? 206002 : 206001, u = new SetAccountInfoCallbackArgs, u.redirectTargetOnSuccess = RouteHelper.getURL("my-account"), u.sourceScreen = gigyaScreen.MoreInfoRequired, Gigya.SetAccountInfo(i, u);
						else return addAnimationClass($("#btnMOContinue"), "btnFail"), !1 }) }, i.prototype.render = function() {}, i }(WebControl);
				n.Screen_MoreInfoRequired = i })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function(n) { this.regToken = n.regToken;
					this.UID = n.UID }, t.prototype.registerEventHandlers = function() { var t = this,
					n = this;
					$("#btnRECancel").click(function() { return Gigya.hide_gigyaScreen(gigyaScreen.ResendEmailVerification), !1 });
					$("#btnRESubmit").click(function() { if (FormValidation.validateForm($("#screenResendEmailVerificationCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation)) { var i = new ResendVerificationCodeArgs;
						i.UID = n.UID;
						i.regToken = n.regToken;
						i.email = $("#" + t.clientId + "_screenResendEmailVerificationEmailTxt").val();
						Actions.resendVerificationCode(i, Gigya.resendEmailVerificationHandler) } else return addAnimationClass($("#btnRESubmit"), "btnFail"), !1 }) }, t.prototype.render = function() {}, t }(WebControl);
				n.Screen_ResendEmailVerification = t })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = "",
				i = function(n) {
					function i(i, r, u) { var f = n.call(this, i, u) || this; return t = r, f.init(), f } return __extends(i, n), i.prototype.loadModel = function() {}, i.prototype.registerEventHandlers = function() { var n = this;
						$("#btnRTSave").click(function() { var n, i; return FormValidation.validateForm($("#screenRevisedTermsCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation) ? (n = new AccountSetInfoArgs, n.profile = "", n.data = t, n.CRM_update = !1, i = new SetAccountInfoCallbackArgs, i.sourceScreen = gigyaScreen.RevisedTerms, Gigya.AccountSetInfo(n, i), !1) : (addAnimationClass($("#btnRTSave"), "btnFail"), !1) });
						$("#btnRTCancel").click(function() { Gigya.hide_gigyaScreen(gigyaScreen.RevisedTerms); var n = new LogoutCallbackArgs;
							n.DT = DisplayType.Toast;
							n.URLHash = URLHash.set("section", "SignIn", !0);
							Gigya.Logout(n) });
						$(document).keydown(function(n) { return n.which && n.which == 13 || n.keyCode && n.keyCode == 13 ? ($("#btnRTSave")[0].click(), !1) : n.which && n.which == 27 || n.keyCode && n.keyCode == 27 ? (Gigya.hide_gigyaScreen(gigyaScreen.RevisedTerms), !1) : !0 }) }, i.prototype.render = function() {}, i }(WebControl);
				n.Screen_RevisedTerms = i })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
					$("#" + n.clientId + " .lnkSpn, #btnSaveMoreFavsSignUp").click(function() { return Gigya.showScreen(gigyaScreen.SignIn, null, null, function() { $("#signUpHeaderTabLnk").click() }), !1 }) }, t.prototype.render = function() {}, t }(WebControl);
				n.Screen_SaveMoreFavourites = t })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(t) { var i = function(t) {
				function i(n, i) { var r = t.call(this, n, i) || this; return r.email = "", r.firstName = "", r.lastName = "", r.GigyaErrorCode = 0, r.GigyaErrorMsg = "", r.init(), r } return __extends(i, t), i.prototype.loadModel = function(t) { this.email = t.email;
					this.firstName = t.firstName;
					this.lastName = t.lastName;
					n.Consumer.Screen_SignIn.instance = this }, i.prototype.registerEventHandlers = function() { $("#signInHeaderTabLnk").click(function() { return URLHash.get("section") == "TermsOfUse" && ($("#TermsOfUsePage").hide(), $("#signUpTabCon").show()), $("#signInPageContent").show(), $("#signUpPageContent").hide(), URLHash.set("section", "SignIn", !0), $("#SignIn .ModalOverlayTitle").html(Translation.get("SignIn")), $("#signInEmailTxt").focus(), !1 });
					$("#signUpHeaderTabLnk").click(function() { return $("#signInPageContent").hide(), $("#signUpPageContent").show(), URLHash.set("section", "SignUp", !0), $("#SignIn .ModalOverlayTitle").html(Translation.get("SignUp")), $("#signInSignUpFirstNameTxt").focus(), !1 });
					$("#btnSignIn").click(function() { if ($("#btnSignIn").hasClass("loading") == !1) { if (FormValidation.validateForm($("#signInTabCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation)) { $("#btnSignIn").addClass("loading"); var n = new SignInArgs; return n.email = $("#signInEmailTxt").val(), n.password = $("#signInPasswordTxt").val(), n.loginMode = null, n.regToken = null, n.captchaText = null, n.captchaToken = null, Gigya.LoginJS(n), !1 } return addAnimationClass($("#btnSignIn"), "btnFail"), !1 } return !1 });
					$("#btnSignInCancel, #btnSignUpCancel").click(function() { return location.href = "/index", !1 });
					$("#btnSignUp").click(function() { if ($("#btnSignUp").hasClass("loading") == !1)
						if (FormValidation.validateForm($("#signUpTabCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation)) { $("#btnSignUp").addClass("loading"); var n = new SignUpArgs;
							n.firstName = $("#signInSignUpFirstNameTxt").val();
							n.lastName = $("#signInSignUpLastNameTxt").val();
							n.email = $("#signInSignUpEmailTxt").val();
							n.password = $("#signInSignUpPasswordTxt").val();
							n.lang = ApplicationState.LanguageAttribute;
							n.captchaText = null;
							n.captchaToken = null;
							n.finalizeRegistration = !0;
							Gigya.Register(n) } else return addAnimationClass($("#btnSignUp"), "btnFail"), !1; return !1 });
					$("#signInForgotPasswordLnk").click(function() { return Gigya.showScreen(gigyaScreen.ForgotPassword, null), !1 });
					$("#sm_facebook_login").click(function() { var n = new SocializeSignInArgs;
						n.provider = "facebook";
						n.loginMode = "standard";
						n.session_expiration = 0;
						Gigya.SocializeLogin(n) });
					$("#sm_google_login").click(function() { var n = new SocializeSignInArgs;
						n.provider = "googleplus";
						n.loginMode = "standard";
						n.session_expiration = 0;
						Gigya.SocializeLogin(n) });
					$("#sm_twitter_login").click(function() { var n = new SocializeSignInArgs;
						n.provider = "twitter";
						n.loginMode = "standard";
						n.session_expiration = 0;
						Gigya.SocializeLogin(n) });
					$("#sm_linkedin_login").click(function() { var n = new SocializeSignInArgs;
						n.provider = "linkedin";
						n.loginMode = "standard";
						n.session_expiration = 0;
						Gigya.SocializeLogin(n) });
					$("#lnkSignUpTerms").click(function() { return showSubSectionSlider($("#TermsOfUsePage"), $("#signUpTabCon"), !1), URLHash.set("section", "TermsOfUse", !0), !1 });
					$("#lnkTemsOfUsePageBack").click(function() { return hideSubSectionSlider($("#signUpTabCon"), $("#TermsOfUsePage"), !1), URLHash.set("section", "SignUp", !0), !1 });
					$("#signInTabCon").keypress(function(n) { return n.which && n.which == 13 || n.keyCode && n.keyCode == 13 ? ($("#btnSignIn")[0].click(), !1) : !0 });
					$("#signUpTabCon").keypress(function(n) { return n.which && n.which == 13 || n.keyCode && n.keyCode == 13 ? ($("#btnSignUp")[0].click(), !1) : !0 }) }, i.prototype.render = function() { URLHash.get("section") == "SignIn" ? $("#signInHeaderTabLnk").click() : URLHash.get("section") == "SignUp" ? $("#signUpHeaderTabLnk").click() : $("#signInHeaderTabLnk").click() }, i }(WebControl);
				t.Screen_SignIn = i })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = "",
				i = function(n) {
					function i(i, r, u) { var f = n.call(this, i, u) || this; return t = r, f.init(), f } return __extends(i, n), i.prototype.loadModel = function() {}, i.prototype.registerEventHandlers = function() { var n = this;
						$("#btnSTSave").click(function() { var n, i; return FormValidation.validateForm($("#screenSocialTermsCon"), FormValidation.markFieldAsInvalid, FormValidation.clearFieldValidation) ? (n = new AccountSetInfoArgs, n.profile = "", n.data = t, n.CRM_update = !1, i = new SetAccountInfoCallbackArgs, i.sourceScreen = gigyaScreen.SocialTerms, Gigya.AccountSetInfo(n, i), !1) : (addAnimationClass($("#btnSTSave"), "btnFail"), !1) });
						$("#btnSTCancel").click(function() { var n = new DeleteAccountArgs;
							n.cid = "SocialTerms";
							Gigya.DeleteAccount(n) });
						$(document).keydown(function(n) { return n.which && n.which == 13 || n.keyCode && n.keyCode == 13 ? ($("#btnSTSave")[0].click(), !1) : n.which && n.which == 27 || n.keyCode && n.keyCode == 27 ? (Gigya.hide_gigyaScreen(gigyaScreen.SocialTerms), !1) : !0 }) }, i.prototype.render = function() {}, i }(WebControl);
				n.Screen_SocialTerms = i })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function(n) { this.showComms = n.showComms;
					this.showNotify = n.showNotify;
					this.hdn_DES = n.hdn_DES;
					this.redirectToIndex = n.redirectToIndex;
					this.user = n.user }, t.prototype.registerEventHandlers = function() { var n = this;
					$("#btnUnsubConfirmCancel").click(function() { Gigya.hide_gigyaScreen(gigyaScreen.UnsubscribeConfirmation);
						n.redirectToIndex && Core.redirectTo("Index") });
					$("#btnUnsubConfirmSubmit").click(function() { var r, u, e; if ($(this).hasClass("loading") == !1) { $(this).addClass("loading"); var c = n.user,
						t = "",
						i = "",
						s = {},
						f = {},
						h = c.Unsubscribe,
						o = [];
						$("#C1").is(":checked") && (t = t + "C1,");
						$("#C2").is(":checked") && (t = t + "C2,");
						$("#C3").is(":checked") && (t = t + "C3,");
						$("#C4").is(":checked") && (t = t + "C4,");
						$("#C5").is(":checked") && (t = t + "C5,");
						$("#C6").is(":checked") && (t = t + "C6,");
						$("#N1").is(":checked") && (i = i + "N1,");
						$("#N2").is(":checked") && (i = i + "N2,");
						$("#N3").is(":checked") && (i = i + "N3,");
						$("#N4").is(":checked") && (i = i + "N4,");
						$("#N5").is(":checked") && (i = i + "N5,");
						$("#N6").is(":checked") && (i = i + "N6,");
						t != "" && (t = t.slice(0, -1), f.Cids = t);
						i != "" && (i = i.slice(0, -1), f.Nids = i);
						t != "" || i != "" ? (r = new Date, f.date = r.getFullYear() + "-" + ("00" + (r.getMonth() + 1)).slice(-2) + "-" + ("00" + r.getDate()).slice(-2) + "T" + ("00" + r.getHours()).slice(-2) + ":" + ("00" + r.getMinutes()).slice(-2) + ":" + ("00" + r.getSeconds()).slice(-2), h != null && $(h).each(function() { o.push(this) }), o.push(f), s.Unsubscribe = o, u = new AccountSetInfoArgs, u.data = JSON.stringify(s), u.CRM_update = !1, e = new SetAccountInfoCallbackArgs, n.redirectToIndex && (e.redirectTargetOnSuccess = RouteHelper.getURL("")), e.sourceScreen = gigyaScreen.UnsubscribeConfirmation, ApplicationState.UserIsSignedIn == !1 && (u.UID = n.hdn_DES), Gigya.AccountSetInfo(u, e)) : ($(this).removeClass("loading"), showMessage(Translation.get("OneCheckboxMandatory"), MessageType.Error, DisplayType.Lightbox)) } });
					$(document).keydown(function(n) { return n.which && n.which == 13 || n.keyCode && n.keyCode == 13 ? ($("#btnSTSave")[0].click(), !1) : n.which && n.which == 27 || n.keyCode && n.keyCode == 27 ? (Gigya.hide_gigyaScreen(gigyaScreen.UnsubscribeConfirmation), !1) : !0 }) }, t.prototype.render = function() {}, t }(WebControl);
				n.Screen_UnsubscribeConfirmation = t })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
__extends = this && this.__extends || function() { var n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, t) { n.__proto__ = t } || function(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]) }; return function(t, i) {
	function r() { this.constructor = t } n(t, i);
	t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r) } }(),
	function(n) { var t;
		(function(n) { var t;
			(function(n) { var t = function(n) {
				function t(t, i) { var r = n.call(this, t, i) || this; return r.init(), r } return __extends(t, n), t.prototype.loadModel = function() {}, t.prototype.registerEventHandlers = function() { var n = this;
					n.saveSharedNotes() }, t.prototype.render = function() {}, t.prototype.saveSharedNotes = function() { var t = this,
					n = this.model;
					decodeURIComponent($("#SharedNotesSenderUID").val()) == ConsumerProfile.UserAccountSettings.UID ? AccountSessionStorage.SharedNotes.delete() : Gigya.setCPSharedNotes(n.sharedNotesJSON) }, t }(WebControl);
				n.SharedNotes = t })(t = n.Consumer || (n.Consumer = {})) })(t = n.Desktop || (n.Desktop = {})) }(Controls || (Controls = {}));
scrollLocations = {};
DesktopMapHelper = function() {
	function n() {} return n.highlightPushpin = function(n, t, i, r, u) { if ((n || "") != "" && (t || "") != "" && (i || "") != "") { var f = MapPinHelper.getMarkerById(n, t, i, u, r);
		f && f.clusterIcon_.div_ != null && f.clusterIcon_.div_.className.indexOf("highlightedPin") == -1 && (f.clusterIcon_.div_.className += " highlightedPin") } }, n.unhighlightPushpin = function(n, t, i, r, u) { var f, e;
		(n || "") != "" && (t || "") != "" && (i || "") != "" && (f = MapPinHelper.getMarkerById(n, t, i, u, r), f && (e = f.clusterIcon_.div_, e.classList.remove("highlightedPin"))) }, n }();
var DropDown = function() {
		function n() {} return n.defaultCustomAdapterDefinition = function() { $.fn.select2.amd.define("CustomSelectionAdapter", ["select2/utils", "select2/selection/multiple", "select2/selection/placeholder", "select2/selection/eventRelay", "select2/selection/single", ], function(n, t, i, r, u) { var f = n.Decorate(t, i); return f = n.Decorate(f, r), f.prototype.render = function() { return u.prototype.render.call(this) }, f.prototype.update = function(n) { var r;
			this.clear(); var i = this.$selection.find(".select2-selection__rendered"),
			u = n.length === 0,
			t = "";
			u ? t = this.options.get("placeholder") || "" : (r = { selected: n || [], all: this.$element.find("option") || [] }, t = this.display(r, i));
			i.empty().append(t);
			i.prop("title", t) }, f });
			$.fn.select2.amd.define("CustomDropdownAdapter", ["select2/utils", "select2/dropdown", "select2/dropdown/attachBody", "select2/dropdown/attachContainer", "select2/dropdown/search", "select2/dropdown/minimumResultsForSearch", "select2/dropdown/closeOnSelect", ], function(n, t, i, r, u) { var f = n.Decorate(t, u),
				e; return f.prototype.render = function() { var i = t.prototype.render.call(this),
				r = this.options.get("placeholderForSearch") || "",
				n = $('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" placeholder="' + r + '" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /><\/span>'); return this.$searchContainer = n, this.$search = n.find("input"), i }, e = n.Decorate(f, r), n.Decorate(e, i) }) }, n.setSelect2Value = function(t, i) { var r = t.val() || "",
		u;
			(r = r.constructor === Array ? r.join(",").trim() : r.trim(), r != "" || i != t.attr("data-default")) && r != i && (u = n.createElements(i), n.addValuesIfNeeded(t, u), t.val(i.split(",")).trigger("change")) }, n.createElements = function(n) { for (var u = [], r = n.split(","), i, f, t = 0; t < r.length; t++) i = r[t], $.isNumeric(i) && (i = Number(i).toLocaleString(ApplicationState.LanguageAttribute)), f = new Option(i, r[t], !1, !1), u.push(f); return u }, n.addValuesIfNeeded = function(t, i) { for (var u = !1, f = [], r = 0; r < i.length; r++) n.containsValue(t, i[r].value) == !1 && (f.push(i[r]), u = !0);
			u && t.append(f) }, n.replaceValues = function(n, t) { var r = n[0].options,
		u = t.length != r.length,
		i; if (u == !1)
			for (i = 0; i < r.length; i++)
				if (r[i].value != t[i].value) { u = !0; break } u && (n[0].options.length = 0, n.append(t), n.trigger("change")) }, n.addValue = function(n, t, i) { i === void 0 && (i = "");
			i == "" && (i = t); var r = new Option(i, t, !1, !1);
			n.append(r).trigger("change") }, n.containsValue = function(n, t) { var u = !1,
		r, i; if (n.length > 0)
			for (r = n[0].options, i = 0; i < r.length; i++)
				if (r[i].value == t) { u = !0; break } return u }, n.linkDropDownVals_OneWay = function(t, i) { var r = this;
			n.linkDropDownVals(t, i, !0) }, n.linkDropDownVals = function(t, i, r) { r === void 0 && (r = !1); var u = this;
			t.change(function() { var u = $(this).attr("multiple") != null,
				r = t.val(),
				o = t.find("option:selected").text(),
				f, e;
				r == null && u == !1 && (r = t.find("option:first-child").val());
				f = i.val();
				(r || "").toString() != (f || "").toString() && (i.find("option[value='" + r + "']").length || u ? (i.val(r).trigger("change"), n.linkedDropdownUpdated.Fire({ control: i })) : (e = new Option(o, r, !0, !0), i.append(e).trigger("change"), n.linkedDropdownUpdated.Fire({ control: i }))) });
			r == !1 && i.change(function() { var u = $(this).attr("multiple") != null,
				r = i.val(),
				o = i.find("option:selected").text(),
				f, e;
				r == null && u == !1 && (r = i.find("option:first-child").val());
				f = t.val();
				(r || "").toString() != (f || "").toString() && (t.find("option[value='" + r + "']").length || u ? (t.val(r).trigger("change"), n.linkedDropdownUpdated.Fire({ control: t })) : (e = new Option(o, r, !0, !0), t.append(e).trigger("change"), n.linkedDropdownUpdated.Fire({ control: t }))) }) }, n.updateMainSearchFilterPlaceholders = function(n) { n.find("select").each(function(n, t) { var i = $(t).val();
			$(t).attr("multiple") == null && i != null && (i.trim() == "0" || i.trim() == "" || i.trim() == "0-0") && $(t).val("").trigger("change") }) }, n.updateMultiSelectNumSelection = function(n) { var i = n.siblings("span.select2").find("ul"),
		r = n.find(":selected").length,
		t, u;
			r == 0 ? i.html(i.data("initial")) : (t = "", n.find(":selected").each(function(n, i) { t += $(i).text() + ", " }), t = t.substring(0, t.length - 2), u = Translation.get("ItemsSelectedSingular"), r > 1 && (u = Translation.get("ItemsSelected")), i.html("<li class='itemsSelectedLbl' title='" + t + "'>" + r + " " + u + "<\/li>"));
			n.attr("data-reset") == "true" && (n.removeAttr("data-reset"), i.html(i.data("initial")), n.val("")) }, n.ReplaceDefaultValWithPlaceholder = function(n) { var r = (n.attr("data-default") || "").trim(),
		t = n.val(),
		i = "";
			t != null && (i = t.constructor === Array ? t.join(",") : (n.val() || "").trim(), r == i && n.val() != null && n.val("").trigger("change", { SkipNext: !0 })) },
n.loadSelect2 = function( el, options ) {
	if ( el.select2( {
			allowClear : options.allowClear,
			closeOnSelect : options.closeOnSelect,
			containerCssClass : options.containerCssClass,
			dropdownCssClass : options.dropdownCssClass,
			maximumInputLength : options.maximumInputLength,
			minimumResultsForSearch : options.allowSearch || options.tags ? 0 : -1,
			createTag : options.createTag,
			language : options.language,
			tokenSeparators : options.tokenSeparators,
			tags : options.tags,
			placeholder : options.placeholderText || "",
			maximumSelectionLength : options.maximumSelectionLength,
			width : options.width || "100%",
			selectionAdapter : options.customSelectionAdapter,
			dropdownAdapter : options.customDropDownAdapter,
			templateSelection : options.customTemplateSelection
		  }), options.maximumInputLength ) {
			el.on("select2:open", function() {
			  $(".select2-search__field").attr("maxlength", options.maximumInputLength);
			});
		  }
  if (options.clearOnDefaultValue) {
	el.on("change", function(canCreateDiscussions, i) {
	  if (i == null || (i.SkipNext || false) == false) {
		n.ReplaceDefaultValWithPlaceholder($(this));
	  }
	});
	el.each(function() {
	  n.ReplaceDefaultValWithPlaceholder($(this));
	});
  }
  if (options.stopOpenOnClear) {
	el.on("select2:unselecting", function() {
	  $(this).data("unselecting", true);
	}).on("select2:opening", function(event) {
	  if ($(this).data("unselecting")) {
		$(this).removeData("unselecting");
		event.preventDefault();
	  }
	});
  }
  if (options.multiSelectWithoutTags && el.each(function() {
	var t = $(this).siblings("span.select2").find("ul");
	if (t.data("initial") == null) {
	  t.data("initial", t.html());
	}
	$(this).on("change", function() {
	  n.updateMultiSelectNumSelection($(this));
	});
	if (($(this).val() || "") != "") {
	  n.updateMultiSelectNumSelection($(this));
	}
  }), options.multiSelectWithoutTags != true && options.tags) {
	el.on("select2:unselect", function(event) {
	  if (event.params.originalEvent) {
		event.params.originalEvent.stopPropagation();
	  }
	});
	el.on("change", function() {
	  var n = $(this).siblings("span.select2").find("ul");
	  if ($(this).attr("data-reset") == "true") {
		$(this).removeAttr("data-reset");
		n.html("");
	  }
	});
  }
  return el;
}
		, n.linkedDropdownUpdated = new RealtorEvent("linkedDropdownUpdated"), n.multiSelectInitialHTML = {}, n }(),
	Select2TranslationArg = function() {
		function n() {} return n }(),
	Select2Translation = function() {
		function n() {} return n }(),
	Select2Options = function() {
		function n() { this.stopOpenOnClear = !0;
			this.containerCssClass = "";
			this.dropdownCssClass = "";
			this.multiSelectWithoutTags = !0;
			this.allowClear = !1;
			this.closeOnSelect = !0;
			this.allowSearch = !1;
			this.tags = !1;
			this.placeholderText = "";
			this.clearOnDefaultValue = !1 } return n }(),
	InfoPage = function() {
		function n() {} return n.showTabSubSection = function(n) { var t = n.attr("data-sectionid");
			n.parent(".infoContentSection_SubSection_TabsCon").find(".tabHighlighter").css("left", ((Number(t) - 1) * 100).toString() + "%");
			$(".infoContentSection_SubSection_TabItem").removeClass("selected");
			n.addClass("selected");
			$(".infoContentSection_SubSection_TabCon").hide();
			n.parents(".infoContentSection").find(".infoContentSection_SubSection_TabCon[data-sectionid=" + t + "]").show() }, n.showTab = function(n) { $(".infoTopSectionItem").removeClass("selected"); var t = $(".infoTopSectionItem[data-tabid=" + n + "]"),
			i = $(".infoContentSection[data-tabid=" + n + "]");
			t.addClass("selected");
			$(".infoContentSection").hide();
			i.show() }, n.initPageAfterTabSelector = function() { var t = URLHash.getAllKeys();
			t.length == 1 ? n.showContentInHash() : $(".infoTopSectionItem").length > 0 && $(".infoTopSectionItem")[0].click() }, n.updatePageHash = function(n, t, i) { i === void 0 && (i = !1); var r = "";
			r = t ? n + "-" + t : n;
			location.hash != "#" + r && (URLHash.replaceHash(r, !1), $(window).trigger("hashchange", { skipScrolling: i })) }, n.showContentInHash = function(t) { var u, e, i, o; if (t === void 0 && (t = !1), u = URLHash.getAllKeys(), u.length == 1) { var f = u[0].split("-"),
			r = f[0],
			s = $(".infoTopSectionItem[data-tabid=" + r + "]");
			s.length == 1 && n.showTab(r);
			f.length > 1 ? (e = f[1], i = $(".infoContentSection[data-tabid=" + r + "] [data-sectionid='" + e + "']"), i.length > 0 && (isScrolledIntoViewPlain(i[0]) == !1 && t == !1 ? (ScrollToElement(i, -20), window.setTimeout(function() { n.showTabSubSection(i) }, 800)) : n.showTabSubSection(i))) : (o = $("[data-tabid=" + r + "]").find(".infoContentSection_SubSection_TabItem[data-sectionid=1]:visible"), n.showTabSubSection(o)) } }, n.registerEventHandlers = function() { var t = this;
			$(window).on("hashchange", function(t, i) { i ? n.showContentInHash(i.skipScrolling || !0) : n.showContentInHash(!0) });
			$(".btnBack > .btn").click(function() { Utilities.backLogic() });
			$(".PreviousTabSection, .NextTabSection").click(function() { var t = $(".infoTopSectionItem.selected").attr("data-tabid"),
				i = $(this).attr("data-sectionid"),
				r = $(this).parents(".infoContentSection").find(".infoContentSection_SubSection_TabsCon");
				shouldScrollElementIntoView(r) ? $("html,body").animate({ scrollTop: r.offset().top - 200 }, 300, function() { n.updatePageHash(t, i) }) : n.updatePageHash(t, i) });
			$(".infoContentSection_SubSection_TabItem").click(function() { var t = $(this),
				i = $(this).parents(".infoContentSection");
				n.updatePageHash(i.attr("data-tabid"), t.attr("data-sectionid")) });
			$(".infoTopSectionItem").click(function() { var t = $(this).attr("data-tabid"),
				i = $(".infoContentSection[data-tabid=" + t + "]").find(".infoContentSection_SubSection_TabItem[data-sectionid=1]");
				n.updatePageHash(t, i.attr("data-sectionid"), !0) }) }, n }(),
	PinInfoBoxHelper = function() {
		function n() {} return n.getPinVerticalSection = function(n, t) { var i = t / 3; return n.y < i ? InfoBoxVerticalLocations.Top : n.y <= i * 2 ? InfoBoxVerticalLocations.Middle : InfoBoxVerticalLocations.Bottom }, n.getInfoBoxPositionRelativeToPin = function(n, t, i) { var u = n.y < t / 2,
			r = n.x < i / 2; return u ? r ? InfoBoxRelativePositions.BottomRight : InfoBoxRelativePositions.BottomLeft : r ? InfoBoxRelativePositions.TopRight : InfoBoxRelativePositions.TopLeft }, n.getPinSize = function(n) { var t = { height: 0, width: 0 }; return t.width = n.clusterIcon_.width_, t.height = n.clusterIcon_.height_, t }, n.refreshInfoboxHeight = function() { var n = $("#infoboxContents .SmallCardListCardCon");
			n.length == 1 ? $("#infoboxContentsCon").height(n[0].clientHeight) : n.length > 1 && $("#infoboxContentsCon").height(n[0].clientHeight + n[1].clientHeight) }, n.refreshInfoboxPosition = function(t, i, r) { var it = this,
			p, v, h, d, g, nt; if (r != null) { var f = void 0,
			w = $("#sharedInfobox"),
			c = $("#triangle"),
			b = n.getPinSize(r),
			l = t.getDiv().clientHeight,
			tt = t.getDiv().clientWidth,
			y = $("#triangle").width(),
			k = $("#triangle").height(),
			a = w.width(),
			s = w.height(),
			e = void 0,
			o = void 0,
			u = new google.maps.Point(0, 0); if (r.markers_)
			if (p = r.markers_[0], p.getPosition != null) u = i.getProjection().fromLatLngToContainerPixel(p.getPosition());
			else return alert("pin doesn't exist? (cluster marker)"), null;
		else Logging.Debug("Pin doesn't have any markers");
			v = n.getPinVerticalSection(u, l);
			h = n.getInfoBoxPositionRelativeToPin(u, l, tt);
			Logging.Debug("Vertical Location: " + InfoBoxVerticalLocations[v], LogType.MapPin);
			Logging.Debug("Relative Location: " + InfoBoxRelativePositions[h], LogType.MapPin);
			d = u.y - s < 0;
			g = u.y + s + b.height / 2 > l;
			Number(r.count) == 1;
			v == InfoBoxVerticalLocations.Bottom && d == !1 ? h == InfoBoxRelativePositions.TopLeft ? (o = u.y - s - 22, e = u.x - a + y / 2, c.css({ top: s - 17 + "px", left: "292px" }), f = new google.maps.Point(e, o)) : h == InfoBoxRelativePositions.TopRight ? (o = u.y - s - 22, e = u.x - y / 2 - 4, c.css({ top: s - 17 + "px", left: "4px" }), f = new google.maps.Point(e, o)) : h == InfoBoxRelativePositions.Left ? (o = u.y - s + 30, e = u.x - a - 20, c.css({ top: s - 45 + "px", left: "305px" }), f = new google.maps.Point(e, o)) : h == InfoBoxRelativePositions.Right && (o = u.y - s + 30, e = u.x + 20, c.css({ top: s - 45 + "px", left: "-10px" }), f = new google.maps.Point(e, o)) : v == InfoBoxVerticalLocations.Middle || g ? h == InfoBoxRelativePositions.Left || h == InfoBoxRelativePositions.TopLeft || h == InfoBoxRelativePositions.BottomLeft ? (o = u.y - s / 2 - 30, e = u.x - a - 20, c.css({ top: s / 2 + 15 + "px", left: "305px" }), f = new google.maps.Point(e, o)) : (h == InfoBoxRelativePositions.Right || h == InfoBoxRelativePositions.TopRight || h == InfoBoxRelativePositions.BottomRight) && (o = u.y - s / 2 - 15 - k / 2, e = u.x + 20, c.css({ top: s / 2 + 15 + "px", left: "-10px" }), f = new google.maps.Point(e, o)) : v == InfoBoxVerticalLocations.Top && (h == InfoBoxRelativePositions.BottomLeft ? (o = u.y + 20 + 3, e = u.x - a + 20 - 2, c.css({ top: "-11px", left: (a - y - 4).toString() + "px" }), f = new google.maps.Point(e, o)) : h == InfoBoxRelativePositions.BottomRight ? (o = u.y + k / 2 + b.height / 4, e = u.x - y / 2 - 5, c.css({ top: "-11px", left: "4px" }), f = new google.maps.Point(e, o)) : h == InfoBoxRelativePositions.Left ? (o = u.y - 50, e = u.x - a - 20, c.css({ top: "35px", left: "305px" }), f = new google.maps.Point(e, o)) : h == InfoBoxRelativePositions.Right && (o = u.y - 50, e = u.x + 20, c.css({ top: "35px", left: "-10px" }), f == new google.maps.Point(e, o)));
			Math.max(f.y, 0) == 0 ? (Logging.Debug("Infobox passed top, adjusting", LogType.MapPin), c.css({ top: parseInt(c.css("top"), 10) + f.y + 5 + "px" }), f.y = Math.max(f.y, 5)) : Math.min(f.y, l - s) == l - s && (Logging.Debug("Infobox passed bottom, adjusting", LogType.MapPin), nt = f.y - (l - s), c.css({ top: parseInt(c.css("top"), 10) + nt - 5 + "px" }), f.y = Math.min(f.y, l - s - 5));
			Logging.Debug("Infobox location: top = " + f.y + " left = " + f.x, LogType.MapPin);
			$("#sharedInfobox").css({ top: f.y, left: f.x }) } }, n.enable = function() { n.enabled = !0 }, n.disable = function() { clearTimeout(n.infoboxShowTimeout);
			n.enabled = !1 }, n.clearHideTimer = function() { clearTimeout(n.infoboxCloseTimeout) }, n.hideInfoBox_Timed = function() { clearTimeout(n.infoboxShowTimeout);
			n.infoboxCloseTimeout = setTimeout(function() { Logging.Debug("Hiding info box (via hideInfoBox_Timed)", LogType.MapPin);
				$("#sharedInfobox").hide() }, 400) }, n.hideInfoBox = function() { Logging.Debug("Hiding info box (via hideInfoBox)", LogType.MapPin);
			$("#sharedInfobox").hide();
			$("#sharedInfobox select").select2("close") }, n.showInfoBox_Timed = function(t, i, r, u, f) { clearTimeout(n.infoboxCloseTimeout);
			n.enabled && (n.infoboxShowTimeout = setTimeout(function() { n.showInfoBox(t, i, r, u, f) }, 400)) }, n.showInfoBox = function(t, i, r, u, f) { var o, e;
			n.enabled && (n.lastPushPin != t && $("#sharedInfobox").toggleClass("show", !1), clearTimeout(n.infoboxCloseTimeout), u.RecordsPerPage = n.RecordPerPage.toString(), n.lastPushPin != null && n.lastPushPin == t && n.lastCriteria != null && ObjectCompare.areEqual(u, n.lastCriteria) && (u.CurrentPage || 1) == 1 ? (Logging.Debug("Showing last pin", LogType.MapPin), $("#sharedInfobox").show(), f != null && f()) : ($("#infoboxHeader").toggle((t.count || 1) > 2), t.count ? $("#infoboxResultCount").html(Number(t.count).toLocaleString(ApplicationState.LanguageAttribute)) : $("#infoboxResultCount").html(""), n.lastPushPin != t && n.refreshInfoboxPosition(i, r, t), o = new SmallListingCardListArgs, o.criteria = u, e = new ControlFetcherArgs("", "infoboxContents"), e.contentWapperClass = "", e.showLoadingAnimation = !1, e.postCallHandler = function() { $("#infoboxFooter").toggle(Number(t.count) > n.RecordPerPage); var e = n.RecordPerPage * (Number(u.CurrentPage || 1) - 1) + 1,
				o = n.RecordPerPage * Number(u.CurrentPage || 1);
				$("#pinResultsStart").text(e);
				$("#pinResultsEnd").text(o);
				$("#pinResultsTotal").text(Number(t.count));
				$("#infoboxContentsCon").scrollTop(0);
				$("#sharedInfobox").show();
				n.lastPushPin != t && (n.refreshInfoboxHeight(), n.refreshInfoboxPosition(i, r, t));
				f != null && f();
				$("#sharedInfobox").toggleClass("show", !0);
				n.lastPushPin = t;
				n.lastCriteria = u }, ControlFetcher.fetchSmallListingCardList(e, o))) }, n.RecordPerPage = 10, n.enabled = !0, n }(),
	Utilities;
(function(n) { var t;
	(function(n) {
		function t() {
			(navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > 0) && LocalStorage.IENotSupportedSeen.get("") == "" && showMessage(Translation.get("IENotSupportedWarning"), MessageType.Normal, DisplayType.Tempbox, function() { LocalStorage.IENotSupportedSeen.save("1") }) } n.checkIEWarning = t })(t = n.Desktop || (n.Desktop = {})) })(Utilities || (Utilities = {}))