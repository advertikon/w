
window.ratehubUrl = "https://www.ratehub.ca";

jQuery(function($) {
	var context_tips = $("#payment-calc .calc-tip-wrapper");
	if (typeof(isMobileView) === 'function' && isMobileView()) {
		$('.calc-tip-wrapper').hide();
	}

	window.updateCalculations = function updateCalculations() {
		var city, provinceCode;
		if ($("#rh-calc-province").length) {
			provinceCode = $("#rh-calc-province").val();
			if ($("#rh-calc-city").data('value')) {
				var city = $("#rh-calc-city").data('value').slug;
			} else {
				var city = $("#rh-calc-city").val();
			}
		} else if ($("#ltt-location").length && $("#ltt-location").select2) {
			var location = $("#ltt-location").select2("data");
			var city = location.slug;
			if (location.province) {
				provinceCode = location.province.code;
			}
		}
		if (!city || !provinceCode) {
			var location = ratehub.user.location;
			city = location.slug;
			provinceCode = location.province.code;
		}

		var clear = false;

		var ask = getDollarValue($("#ask"));
		if (isNaN(ask) || ask == null)
			clear = true;

		var dp_pcs = $("#payment-calc form .downpayment input[name='dp_pc[]']");
		var dp_dols = $("#payment-calc form .downpayment input[name='dp_dol[]']");
		var cmhcs = $("#payment-calc form .cmhc .col4");
		var tots = $("#payment-calc form .total .col4");

		var amorts = $("#payment-calc form select[name='amort[]'], #payment-calc form input[name='amort[]']");
		var rates = $("#payment-calc form .mortgage-rate .rate-value");
		var payments = $("#payment-calc form .total-mortgage-payment .amount");

		var fthb = $("#fthb").is(":checked");
		var pcp = $("#pcp").is(":checked");

		var purchase = $('#payment-calc tbody.purchase').is(':visible');

		var notifiedAmortChange = false;
		for (var i = 0; i < amorts.length; i++) {
			if (purchase) {
				var dollarsElement = $(dp_dols[i]);
				var percentElement = $(dp_pcs[i]);

				var dollars = getDollarValue(dollarsElement);
				var percent = percentElement.data("unrounded");

				var askChanged = $("#ask").data("askChanged");
				var usingScenarioDefault = dollarsElement.data("scenarioDefault");
				if (usingScenarioDefault === undefined) {
					dollarsElement.data("scenarioDefault", true);
					percentElement.css("color", ratehub.displayVersion === 1 ? "#000" : "#0a596b");
				}

				// calculate minimum and default (for a given scenario) downpayments for <1M and >=1M since >=1M are no longer insurable
				var minimumDown = 0.05 * ask;
				if (ask >= 1000000) minimumDown = 0.2 * ask;
				var scenarioDefault = minimumDown + 0.05 * i * ask;
				if (ask > 500000 && ask < 1000000 && scenarioDefault === minimumDown) {
					minimumDown = scenarioDefault = 25000 + 0.1 * (ask - 500000);
				}

				// adjust downpayment dollar or percent value, depending on what the user has set
				if (dollarsElement.data("setbyuser")) {
					if (dollars < minimumDown || usingScenarioDefault && askChanged) {
						dollars = usingScenarioDefault ? scenarioDefault : minimumDown;
					} else if (dollars > ask) {
						dollars = ask
					}
					percent = dollars / ask;
					setDollarValue(dollarsElement, dollars);
					percentElement.data("unrounded", percent);
					setPercentValue(percentElement, percent, "p2");
				} else {
					minimumPercent = minimumDown / ask;
					scenarioDefaultPercent = scenarioDefault / ask;
					if (percent < minimumPercent || usingScenarioDefault && askChanged) {
						percent = usingScenarioDefault ? scenarioDefaultPercent : minimumPercent;
					}
					dollars = ask * percent;
					percentElement.data("unrounded", percent);
					setPercentValue(percentElement, percent, "p2");
					setDollarValue(dollarsElement, dollars);
				}
				if (dollars) dollarsElement.data("scenarioDefault", Math.round(dollars) == Math.round(scenarioDefault));

				// enable or disable long amortization periods based on downpayment
				if (percent < 0.2) {
					$(amorts[i]).find('option[value=30], option[value=35]').attr('disabled', true);
				} else {
					$(amorts[i]).find('option[value=30], option[value=35]').attr('disabled', false);
				}

				var amortSelect = $(amorts[i]);
				if (percent < 0.2) {
					if (amortSelect.val() > 25) {
						amortSelect.val(25).change();
						if (!notifiedAmortChange) {
							alert(Globalize.localize('maximum-amortization-period-adjusted-your-selection'));
							notifiedAmortChange = true;
						}

					}
				} else if (percent >= 0.2) {
					if (amortSelect.val() > 35) {
						amortSelect.val(35).change();
						if (!notifiedAmortChange) {
							alert(Globalize.localize('maximum-amortization-period-adjusted-your-selection-to-35'));
							notifiedAmortChange = true;
						}

					}
				}
			} else {
				$(amorts[i]).find('option[value=30]').attr('disabled', false);
				$(amorts[i]).find('option[value=35]').attr('disabled', true);
			}
		}
		$("#ask").data("askChanged", false);

		var homePrice = ask;
		if ($(".ratehub-calc .land-transfer-tax").length) {
			if (!clear) {
				var prov_ltt = provincial_ltt(provinceCode, homePrice);
				$(".ratehub-calc .provincial div").text(Globalize.format(prov_ltt, 'c0'));
				var muni_ltt = municipal_ltt(provinceCode, city, homePrice);
				$(".ratehub-calc .municipal div").text(Globalize.format(muni_ltt, 'c0'));

				var rebate = ltt_rebate(provinceCode, city, fthb, homePrice, pcp);
				if (rebate !== null) {
					$(".ratehub-calc .rebate div").text(Globalize.format(rebate, 'c0'));
				} else if (rebate === null && in_montreal(city)) {
					$(".ratehub-calc .rebate div").html('<a href="' + Globalize.localize('montreal-rebate-info-url') + '" target="_blank">' + Globalize.localize('details-title') + '</a>')
				}

				var ltt_total = prov_ltt + muni_ltt - rebate;
				$(".ratehub-calc .rh-title span").text(Globalize.format(ltt_total, 'c0'));

				var registration_fees = registration_fee(provinceCode, homePrice, mortgageAmount)
				if (registration_fees === null || registration_fees > 0) {
					$(".ratehub-calc .fees td").html(sprintf(Globalize.localize('calc-required-to-pay-fees-format'), ratehub.registrationFeeUrls[provinceCode])).show();
				} else {
					$(".ratehub-calc .fees td").hide();
				}
			} else {
				$(".ratehub-calc .provincial div").text("");
				$(".ratehub-calc .municipal div").text("");
				$(".ratehub-calc .rebate div").text("");
				$(".ratehub-calc .rh-title span").text("$-");
				$(".ratehub-calc .fees td").hide();
			}
		}

		var scenarioSelectors = $('#calc_extension select.scenario');

		for (var i = 0; i < amorts.length; i++) {
			if (!clear) {

				var dollars = 0;
				var cmhc = 0;

				var amortizationPeriod = parseInt($(amorts[i]).val(), 10);
				if (isNaN(amortizationPeriod) && context_tips.find('.active').length && !context_tips.filter('.calc-tip-step2').children('.active').length) {
					context_tips.find('.active').removeClass('active');
					context_tips.filter('.calc-tip-step2').children().addClass('active');

					if (typeof(window.isMobileView) === 'function' && isMobileView() && $.fn.select2 && $.fn.select2.ratehub) {
						$(amorts[0]).select2('container').find('.select2-focusser').focus();
					}
				} else if (!isNaN(amortizationPeriod) &&
						(context_tips.filter('.calc-tip-step2').children('.active').length || context_tips.filter('.calc-tip-step1').children('.active').length)) {
					context_tips.find('.active').removeClass('active');
					context_tips.filter('.calc-tip-step3').children('.calc-tip').addClass('active');

					if (typeof(isMobileView) === 'function' && isMobileView()) {
						$($("#payment-calc form .mortgage-rate .rate-selector")[0]).focus();
					}
				}

				if (purchase) {
					var dollarsElement = $(dp_dols[i]);
					var percentElement = $(dp_pcs[i]);

					var dollars = getDollarValue(dollarsElement);
					var percent = percentElement.data("unrounded");

					var mortgageAmount = ask - dollars;

					if (cmhcs.length) {
						var cmhc1 = cmhc_premium(1 - percent);
						var cmhc2 = cmhc_surcharge(1 - percent, amortizationPeriod);
						cmhc = mortgageAmount * (cmhc1 + cmhc2);
						$(cmhcs[i]).text(Globalize.format(cmhc, 'c0'));
					}
				}

				scenarioSelectors.find('option[value='+i+']').text((i+1) + (purchase ? " (" + sprintf(Globalize.localize('percent-down'), Globalize.format(percent, 'p2')) + ')' : ''));

				var mortgageTotal = ask - dollars + cmhc;
				if (tots.length)
					$(tots[i]).text(Globalize.format(mortgageTotal, 'c0'));

				if (!isNaN(amortizationPeriod) && rates.length && payments.length) {
					var rate = $(rates[i]).data("rate");
					var mortgageRate = rate != null ? (rate.value / 100).round(4) : null;
					var mortgageTerm = rate != null ? rate.term : null;

					var freq = $("#freq").val().split(",");
					freq[0] = parseInt(freq[0], 10);
					freq[1] = parseInt(freq[1], 10);
					var payment = can_mortgage_payment(mortgageTotal, mortgageRate, amortizationPeriod, freq[0], freq[1]);
					if (!isNaN(payment)) {
						if (getDollarValue($(payments[i])) != Math.round(payment)) {
							var box = $(payments[i]).css("opacity", "0").fadeTo(750, "1").text(Globalize.format(payment, 'c0')).parent().addClass('active');
							if (!rate.provider)
								box.addClass('simple');
							else
								box.removeClass('simple');
						}

						if ($('#calc_extension').is(':visible'))
							updateCalculatorExtension(i, ask, dollars, cmhc, mortgageTotal, ltt_total, null, null, payment, null, null, null, mortgageRate, mortgageTerm, amortizationPeriod, freq, provinceCode);

						var activeIndex = context_tips.index(context_tips.find('.active').parent());
						if (activeIndex >= 0 && activeIndex < 3) {
							context_tips.find('.active').removeClass('active');
							setTimeout(function() {
								context_tips.filter('.calc-tip-step4').children('.calc-tip').addClass('active');
								context_tips.filter('.calc-tip-step5').children('.calc-tip').addClass('active');
								setTimeout(function() { context_tips.filter('.calc-tip-step4').children().removeClass('active'); }, 10000);
							}, 1000);
						}
					}
				}
			} else {
				$(dp_dols[i]).val(null);
				$(cmhcs[i]).text("");
				$(tots[i]).text("$-");

				//clearSelectedRates();
				clearPayments();

				if (typeof clearCalculatorExtension == 'function') {
					clearCalculatorExtension(i, true);
				}
			}
		}

		scenarioSelectors.trigger('change.select2');
	};

	function updateProvince(provinceCode) {
		if (provinceCode != "ON" && provinceCode != "BC" && provinceCode != "PE") {
			$(".fthb").css("visibility", "hidden");
		} else {
			$(".fthb").css("visibility", "visible");
		}

		if (provinceCode != "BC") {
			$(".pcp").css("visibility", "hidden");
		} else {
			$(".pcp").css("visibility", "visible");
		}
	};

	$('#payment-calc .rh-calc-head .col03 a').click(function(event) {
		event.preventDefault();
		$(".ratehub-calc form").submit();
	});

	$("#rh-calc-province").change(function(event) {
		if (context_tips.filter('.calc-tip-step4').children('.active').length) {
			context_tips.filter('.calc-tip-step4').children().removeClass('active');
		}

		updateProvince($(this).val());
	});

	$("#ltt-location").change(function(event) {
		if (context_tips.filter('.calc-tip-step4').children('.active').length) {
			context_tips.filter('.calc-tip-step4').children().removeClass('active');
		}

		var location = $(this).select2("data");
		updateProvince(location.province.code);
	});

	$("#payment-calc .rh-calc-tabs .rh-holder a").click(function(event) {
		event.preventDefault();

        var allRateSelectors = $('.rh-rate-selector');
        if(allRateSelectors[0]) {
            var rateSelectorControl = rh.Control.get(allRateSelectors[0]);
        }

		if (!$(this).hasClass("selected")) {
			$("#payment-calc .rh-calc-tabs .rh-holder").removeClass("selected");
			$(this).parent().parent().addClass("selected");

			var purchaseOnlySections = $('#payment-calc #calc_extension').find('.cash-needed, .monthly-expenses, .rate-risk');
			if ($(this).hasClass("purchase")) {
				$("#payment-calc .col01 h3").text(Globalize.localize("asking-price-title")).parent().parent().find("label").text(Globalize.localize("asking-price-title"));
				$("#payment-calc tbody.purchase").show();

				if ($("#payment-calc.small, #payment-calc.tiny").length) {
					$("#payment-calc tbody.land-transfer-tax").last().show();
				} else {
					$("#payment-calc tbody.land-transfer-tax").first().show();
				}
				$("#payment-calc #calc_extension").show();
				$("#payment-calc .calc-tip-step1").find('.content-renew').hide().end().find('.content-purchase').show();

                if(rateSelectorControl)
                    rateSelectorControl.options.scenario = "purchase";

				purchaseOnlySections.show();
			} else {
				$("#payment-calc .col01 h3").text(Globalize.localize("mortgage-amount-title")).parent().parent().find("label").text(Globalize.localize("mortgage-amount-title"));
				$("#payment-calc tbody.purchase").hide();
				$("#payment-calc tbody.land-transfer-tax").hide();

				$("#payment-calc .calc-tip-step1").find('.content-purchase').hide().end().find('.content-renew').show();

                if(rateSelectorControl)
                    rateSelectorControl.options.scenario = "renew";

				purchaseOnlySections.hide();
			}

			calculatorResized();

			updateCalculations();
		}
	});

	$('#payment-calc .calc-tip-close').click(function(event) {
		event.preventDefault();
		$(this).parents('.calc-tip').removeClass('active');
	});

	$('#calc_extension .section-header a').click(function(event) {
		if (context_tips.filter('.calc-tip-step5').children('.active').length) {
			context_tips.find('.active').removeClass('active');
		}
	});

	$('#payment-calc .calc-tip-step1 .calc-tip').addClass('active');

	
	updateProvince(ratehub.user.location.province.code);

	// trigger initial calculations
			$("#ask").blur();
	});
