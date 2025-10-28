(function ($) {
    "use strict";
    var windowOn = $(window);
    $(document).ready(function () {
        windowOn.on('load', function () {
        });        

        // Mobile Menu JS
        function initMobileMenu() {
            $('#mobile-menu').meanmenu({
                meanMenuContainer: '.mobile-menu',
                meanScreenWidth: "991",
                meanExpand: ['<i class="far fa-plus"></i>'],
            });
        }

        $(document).ready(function () {
            initMobileMenu();

            $(window).on('resize', function () {
                var screenWidth = $(window).width();
                if (screenWidth > 991) {
                    // Remove meanmenu if screen is larger than 767px
                    if ($('.mean-bar').length) {
                        $('.mean-bar').remove();
                        $('#mobile-menu').show();
                    }
                } else {
                    // Reinitialize meanmenu on small screen
                    if (!$('.mean-bar').length) {
                        initMobileMenu();
                    }
                }
            });
        });


        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function () {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function () {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });
        //>> Sticky Menu <<//
        windowOn.on('scroll', function () {
            var scroll = windowOn.scrollTop();
            if (scroll < 300) {
                $("#header-sticky").removeClass("sticky_top");
            } else {
                $("#header-sticky").addClass("sticky_top");
            }
        });
        //>> offcanvas bar <<//
        $(".tp-offcanvas-toogle").on('click', function () {
            $(".tp-offcanvas").addClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
        });
        $(".tp-offcanvas-close-toggle,.tp-offcanvas-overlay").on('click', function () {
            $(".tp-offcanvas").removeClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
        });

        // Header Menu Hover Effect
        function setActivePage() {
            var currentUrl = window.location.href;
            $(".main-menu-wrap li a").removeClass("active");
            $(".main-menu-wrap li a").each(function () {
                if (this.href === currentUrl) {
                    $(this).addClass("active");
                }
            });
        }
        setActivePage();
        $(".main-menu-wrap li a").on("mouseenter", function () {
            $(".main-menu-wrap li a").removeClass("active");
            $(this).addClass("active");
        });
        $(".main-menu-wrap li a").on("mouseleave", function () {
            setActivePage();
        });

        $('.main-menu-wrap li.menu-item-has-children').on('click', function(){
            $(this).siblings().removeClass('active')
            $(this).addClass('active')
        })



        // FAQ
        function Faq() {
                $('.accordion-item .accordion-header').on('click', function () {
                    const clickedItem = $(this).closest('.accordion-item');
                    const content = clickedItem.find('.accordion-content'); 

                    $('.accordion-item.active').not(clickedItem).each(function () {
                        const activeContent = $(this).find('.accordion-content'); 
                        activeContent.css('height', activeContent.prop('scrollHeight') + 'px');
                        setTimeout(() => {
                            activeContent.css('height', '0px');
                            $(this).removeClass('active');
                        }, 10);
                    });

                    if (clickedItem.hasClass('active')) {
                        content.css('height', content.prop('scrollHeight') + 'px');
                        setTimeout(() => {
                            content.css('height', '0px');
                            clickedItem.removeClass('active');
                        }, 10);
                    } else {
                        clickedItem.addClass('active');
                        const scrollHeight = content.prop('scrollHeight');
                        content.css('height', '0px');
                        setTimeout(() => {
                            content.css('height', scrollHeight + 'px');
                        }, 10);

                          content.one('transitionend', function () {
                            $(this).css('height', '');
                        });
                    }
                });
            
        }
        Faq();

        // Brand Slider
        function Brand() {
            
                $('.mb_branding_wrapper_ltr').slick({
                    dots: false,
                    arrows: false,
                    infinite: true,
                    speed: 9000,
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 998,
                            settings: {
                                slidesToShow: 2,

                            }
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,

                            }
                        },
                        {
                            breakpoint: 1300,
                            settings: {
                                slidesToShow: 3,

                            }
                        }
                    ]
                });
                $('.mb_branding_wrapper_rtl').slick({
                    dots: false,
                    arrows: false,
                    infinite: true,
                    speed: 9000,
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    rtl: true,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 998,
                            settings: {
                                slidesToShow: 2,

                            }
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,

                            }
                        },
                        {
                            breakpoint: 1300,
                            settings: {
                                slidesToShow: 3,

                            }
                        }
                    ]
                });
            
        }
        Brand()

         function cardOption(){
             $('.mb_card_option').on('click', function () {
                 $('.mb_card_option').removeClass('mb_selected');    
                 $(this).addClass('mb_selected');    
                 $(this).find('input[type="radio"]').prop('checked', true);
             });    
             $('input[name="mb_property_type"]').on('change', function () {
                 $('.mb_card_option').removeClass('mb_selected');    
                 $(this).closest('.mb_card_option').addClass('mb_selected');
             })    
         }
         cardOption()
        

        // Step Slider Section
        function stepSlider() {
        $('.rb_step_slide_container').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            responsive: [
            {
                breakpoint: 1400, // <1400px
                settings: {
                slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200, // <1200px
                settings: {
                slidesToShow: 3,
                }
            },
            {
                breakpoint: 992, // <992px
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 768, // <768px
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 576, // <576px
                settings: {
                slidesToShow: 1,
                }
            }
            ]
        });
        }
        stepSlider();

        // Mission Slider Section
        function missionSlider(){
            $('.rb_mission_slide_container').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    autoplay: true,
                    speed: 3000,
                    autoplaySpeed: 3000,
                    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left-long"></i></span>`,
                    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right-long"></i></span>`,
                });
            }
            missionSlider()
        $('.how_work_section_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            dotsClass: "mb_how_work_dots",
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-down-long"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-up-long"></i></span>`,
            vertical: true,
            verticalSwiping: true 
        });
       
        
        $('.open_more_content').on('click', () => {
            $('.mb_casa_brokerage').toggleClass('active');
            $('.mb_casa_brokerage_contains').toggleClass('active');
        });
        // Popular Types Of Housing
        $('.mb_popular_house').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 3000,
            dots: false,
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            responsive: [
                {
                    breakpoint: 1400, // <1400px
                    settings: {
                    slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1200, // <1200px
                    settings: {
                    slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992, // <992px
                    settings: {
                    slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768, // <768px
                    settings: {
                    slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576, // <576px
                    settings: {
                    slidesToShow: 1,
                    }
                }
            ]
        });
        $('.mb_saved_listing_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 3000,
            dots: true,
            
            dotsClass: "mb_seved_listing",
            infinite: true,
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
        $('.mb_image_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 3000,
            dots: false,
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
       
            $('.read-more-btn').on('click', function (e) {
                e.preventDefault();
                var container = $(this).closest('.read-more-container');
                container.toggleClass('expanded');

                if (container.hasClass('expanded')) {
                    $(this).text('Show less');
                } else {
                    $(this).text('More....');
                }
            });

        $('.select_card select').on('click', function () {
            $(this).parent().toggleClass("selectActive");
        });
        $(document).ready(function () {
            $('.header nav ul li').on('click', function () {
                $('.header nav ul li').removeClass('active');
                $(this).addClass('active');
            });

            $('.btn-action').on('click', function () {
                alert('Action menu toggled!');
            });

            $('.btn-add-listing').on('click', function () {
                alert('Redirecting to the "Add Listing" page.');
            });
        });
        // Switch OFF ON
        function switchOFF(){
            $('.mb_toggle_switch input').on('change', function () {
                if ($(this).is(':checked')) {
                    $('.mb_toggle_text').text('On').css('color', 'white');
                } else {
                    $('.mb_toggle_text').text('Off').css('color', 'white');
                }
            });
        }
        switchOFF()

        function costsHome(){
                function formatNumber(num) {
                    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }

                function updateCosts() {
                    const principalInterest = parseFloat($('#mb_principal_interest').val().replace(/,/g, ''));
                    const propertyTax = parseFloat($('#mb_property_tax').val().replace(/,/g, ''));
                    const homeInsurance = parseFloat($('#mb_home_insurance').val().replace(/,/g, ''));
                    const hoaFees = parseFloat($('#mb_hoa_fees').val().replace(/,/g, ''));
                    const mortgageInsurance = parseFloat($('#mb_mortgage_insurance').val().replace(/,/g, ''));

                    const totalCost = principalInterest + propertyTax + homeInsurance + hoaFees + mortgageInsurance;
                    $('#mb_total_btc').text(formatNumber(totalCost));

                    const maxCost = 10000; 
                    const progressPercentage = (totalCost / maxCost) * 100;
                    $('.mb_progress_fill').css('width', `${Math.min(progressPercentage, 100)}%`);
                }

                $('#mb_home_price_slider').on('input', function () {
                    const homePrice = parseInt($(this).val());
                    $('#mb_home_price_input').val(formatNumber(homePrice));

                    const downPaymentPercent = parseInt($('#mb_down_payment_percent').val());
                    const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
                    $('#mb_down_payment_input').val(formatNumber(downPaymentAmount));
                    updateCosts();
                });

                $('#mb_home_price_input').on('input', function () {
                    const homePrice = parseFloat($(this).val().replace(/,/g, ''));
                    $('#mb_home_price_slider').val(homePrice);

                    const downPaymentPercent = parseInt($('#mb_down_payment_percent').val());
                    const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
                    $('#mb_down_payment_input').val(formatNumber(downPaymentAmount));
                    updateCosts();
                });

                $('#mb_down_payment_percent').on('input', function () {
                    const percent = parseInt($(this).val());
                    const homePrice = parseFloat($('#mb_home_price_input').val().replace(/,/g, ''));
                    const downPaymentAmount = (homePrice * percent) / 100;
                    $('#mb_down_payment_input').val(formatNumber(downPaymentAmount));
                    $('#mb_down_payment_slider').val(percent);
                    updateCosts();
                });

                $('#mb_down_payment_slider').on('input', function () {
                    const percent = parseInt($(this).val());
                    const homePrice = parseFloat($('#mb_home_price_input').val().replace(/,/g, ''));
                    const downPaymentAmount = (homePrice * percent) / 100;
                    $('#mb_down_payment_input').val(formatNumber(downPaymentAmount));
                    $('#mb_down_payment_percent').val(percent);
                    updateCosts();
                });
                $('.mb_cost_breakdown input').on('input', updateCosts);
                $('.mb_input_clear').on('click', function () {
                    $(this).siblings('.mb_input_field').val('0');
                    updateCosts();
                });

                updateCosts();
         
        }
        // costsHome()
            $('.mb_tab').on('click', function () {
                var tabTarget = $(this).data('tab-target');

                $('.mb_tab').removeClass('active');
                $('.mb_tab_content').removeClass('active');

                // Add active class to the clicked tab and its content
                $(this).addClass('active');
                $(tabTarget).addClass('active');
            });       
        


        // Header h1 Animate
        // function textAnimation() {
        //     const blogNewsContains = document.querySelectorAll(".heading h1");
        //     if (blogNewsContains.length > 0) {
        //         gsap.from(blogNewsContains, {
        //             scrollTrigger: {
        //                 trigger: ".header_area",
        //                 start: "top 80%",
        //                 toggleActions: "play none none reverse",
        //             },
        //             opacity: 0,
        //             y: 50,
        //             duration: 1.5,
        //             stagger: 0.3,
        //         });
        //     }
        // }
        // textAnimation()
      
        // Counting
        $(".about_count").each(function () {
            let counter = $(this);
            let targetValue = counter.data("count").toString().replace(/\D/g, "");
            let suffix = counter.data("count").toString().replace(/\d/g, "");
            gsap.to(counter[0], {
                innerText: targetValue,
                snap: "innerText",
                ease: "power2.out",
                duration: 3,
                scrollTrigger: {
                    trigger: counter[0],
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                onUpdate: function () {
                    counter.text(Math.round(counter.text()) + suffix);
                },
                onStart: () => {
                    gsap.to(counter[0], { opacity: 1, scale: 1, duration: 0.5 });
                }
            });
        });

        // Tour Schedule
        function generateCalendar() {
            let currentDate = new Date();
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            // Function to populate month and year dropdowns
            function populateDropdowns() {
                const monthSelect = $('#mb_month_select');
                const yearSelect = $('#mb_year_select');

                // Populate months
                monthSelect.empty();
                $.each(monthNames, function (index, value) {
                    const option = $('<option>').val(index).text(value);
                    monthSelect.append(option);
                });

                // Populate years (e.g., current year +/- 5)
                yearSelect.empty();
                const currentYear = new Date().getFullYear();
                for (let i = currentYear - 5; i <= currentYear + 5; i++) {
                    const option = $('<option>').val(i).text(i);
                    yearSelect.append(option);
                }
            }

            // Function to generate the calendar days
            function generateCalendar(date) {
                const calendarContainer = $('#mb_calendar_days');
                calendarContainer.empty();

                const year = date.getFullYear();
                const month = date.getMonth();

                const firstDayOfMonth = new Date(year, month, 1);
                const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
                const daysInMonth = new Date(year, month + 1, 0).getDate();
                const today = new Date();

                // Set dropdown values to match the current date
                $('#mb_month_select').val(month);
                $('#mb_year_select').val(year);

                // Add empty placeholders for the days of the week before the 1st
                for (let i = 0; i < firstDayOfWeek; i++) {
                    const emptyDay = $('<div>').addClass('mb_day mb_inactive');
                    calendarContainer.append(emptyDay);
                }

                // Add active days for the current month
                for (let i = 1; i <= daysInMonth; i++) {
                    const day = $('<div>').addClass('mb_day').text(i);
                    // Check if this day is today and mark it as selected by default
                    if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
                        day.addClass('mb_selected');
                    }

                    // Add a click event listener to select the day
                    day.on('click', function () {
                        $('.mb_day').removeClass('mb_selected');
                        $(this).addClass('mb_selected');
                    });
                    calendarContainer.append(day);
                }
            }

            // Event listeners for month navigation (left/right arrows)
            $('#mb_prev_month').on('click', function () {
                const newMonth = currentDate.getMonth() - 1;
                const newYear = currentDate.getFullYear();
                currentDate = new Date(newYear, newMonth, 1);
                generateCalendar(currentDate);
            });

            $('#mb_next_month').on('click', function () {
                const newMonth = currentDate.getMonth() + 1;
                const newYear = currentDate.getFullYear();
                currentDate = new Date(newYear, newMonth, 1);
                generateCalendar(currentDate);
            });

            // Event listener for dropdown changes
            $('#mb_month_select, #mb_year_select').on('change', function () {
                const newMonth = $('#mb_month_select').val();
                const newYear = $('#mb_year_select').val();
                currentDate = new Date(newYear, newMonth, 1);
                generateCalendar(currentDate);
            });

            // Generate the initial calendar and populate dropdowns
            populateDropdowns();
            generateCalendar(currentDate);
        }
        generateCalendar();

        // Map Search Filter
            function searchFilter() {
                $(".mb_single_filter button").on("click", function () {
                    $(this).toggleClass("active");
                });
            }
            searchFilter();

            $('.view-button').on('click', function () {
                $('.view-button').removeClass('selected');
                $(this).addClass('selected');
            });

            $('.status-button').on('click', function () {
                $('.status-button').removeClass('selected');
                $(this).addClass('selected');
            });
     
        // Back to Top Button
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 200) {
                $(".back_top").addClass("show");
            } else {
                $(".back_top").removeClass("show");
            }
        });
        $(".back_top").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });

        //  Magnific Popup Configuration
        $('.playBtn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: function (url) {
                            // Support both ?v=ID and /embed/ID
                            const watchMatch = url.match(/[?&]v=([^&]+)/);
                            if (watchMatch && watchMatch[1]) return watchMatch[1];

                            const embedMatch = url.match(/embed\/([^\?&]+)/);
                            if (embedMatch && embedMatch[1]) return embedMatch[1];

                            return null;
                        },
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            },
            callbacks: {
                close: function () {
                    document.activeElement && document.activeElement.blur();

                    setTimeout(() => {
                        $('#main-content, .slick-current .playBtn').first().focus();
                    }, 100);
                }
            }
        });

        // Nice Select
        // if($.fn.niceSelect){
        //     $('select').niceSelect();

        // }
        // Filter 
        function filterCard() {
            const filterButtons = document.getElementById('city-filter-buttons');
            const propertyCards = document.querySelectorAll('.mb_properties_card_container');

            const initiallyActiveCity = document.querySelector('#city-filter-buttons button.active').dataset.city;
            propertyCards.forEach(card => {
                if (card.dataset.city === initiallyActiveCity) {
                    card.classList.add('show');
                }
            });

            filterButtons.addEventListener('click', (event) => {
                if (event.target.tagName === 'BUTTON') {
                    const selectedCity = event.target.dataset.city;

                    const allButtons = filterButtons.querySelectorAll('button');
                    allButtons.forEach(button => button.classList.remove('active'));
                    event.target.classList.add('active');

                    propertyCards.forEach(card => {
                        if (card.classList.contains('show')) {
                            card.classList.remove('show');
                        }
                    });

                    setTimeout(() => {
                        let showDelay = 0;
                        propertyCards.forEach(card => {
                            const cardCity = card.dataset.city;

                            if (cardCity === selectedCity) {
                                setTimeout(() => {
                                    card.classList.add('show');
                                }, showDelay);
                                showDelay += 100;
                            }
                        });
                    }, 500);
                }
            });
        }
        filterCard()
    });
    // Preloader
    $(window).on("load", function () {
        const preloader = document.querySelector(".preloader_area");
        preloader.style.transition = "all 0.5s ease";
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);
    });


})(jQuery);


// Gsap RegisterPlugin
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

// Smooth Scroller
ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.3,
    effects: true,
    smoothTouch: 0.1,
});