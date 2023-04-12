window.addEventListener('scroll', (e) => {
    if (document.body.getBoundingClientRect().top < 0) {
        document.querySelector('.header>.menu').classList.add('sticky-menu')
    } else {
        document.querySelector('.header>.menu').classList.remove('sticky-menu')
    }
})


let mySubTabButtonSwiper = document.querySelector('.mySubTabButtonSwiper');
if (mySubTabButtonSwiper) {
    var swiper = new Swiper(".mySubTabButtonSwiper", {
        slidesPerView: 4,
        spaceBetween: 5,
    });
    let mySubTabButtons = mySubTabButtonSwiper.querySelectorAll('.swiper-wrapper>.tab-btn-item')
    let allTabCategorySections = document.querySelectorAll('.tab-category-section')
    let allBrandCategoryBtns = document.querySelectorAll('.brand-category-btn')
    let allBrandLinkSections = document.querySelectorAll('.tab-link')

    mySubTabButtons.forEach(item => {
        item.addEventListener('mouseover', () => {
            let selectedItem = item.dataset.bsTarget
            allTabCategorySections.forEach(itemC => {
                itemC.classList.remove('active');
            })
            mySubTabButtons.forEach(itemB => {
                itemB.classList.remove('active')
            })
            item.classList.add('active')
            document.querySelector(selectedItem).classList.add('active')
        })
    })

    allBrandCategoryBtns.forEach(item => {
        item.addEventListener('mouseover', () => {
            let selectedItem = item.dataset.bsTarget
            allBrandLinkSections.forEach(itemL => {
                itemL.classList.remove('active')
            })
            allBrandCategoryBtns.forEach(itemBC => {
                itemBC.classList.remove('active')
            })
            item.classList.add('active')
            document.querySelector(selectedItem).classList.add('active')
        })
    })
}
var swiper = new Swiper(".myTabCategorySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
});


// frontend mobile menu toggle
if (window.innerWidth < 768) {
    let frontendMobileMenuToggle = document.getElementById('menu-toggle')
    if (frontendMobileMenuToggle) {
        frontendMobileMenuToggle.addEventListener(
            'click',
            function () {
                this.classList.toggle('menu-toggle-active');
                let drawer = document.querySelector('.mobile-menu>.nav-mobile-menu')
                if (drawer.classList.length == 1) {
                    drawer.classList.add('drawer-active')
                } else {
                    drawer.classList.add('drawer-close')
                    drawer.classList.remove('drawer-active')
                    let interval = setTimeout(() => {
                        drawer.classList.remove('drawer-close')
                    }, 900);
                }
            }
        );

        let mobileMenuItem = document.querySelectorAll('.navigation>li');
        let mobileSubMenuItem = document.querySelectorAll('.nav-mobile-menu > ul.navigation > li.has-dropdown > ul.sub-menu > li');
        let mobileMegaMenu = document.querySelector('.mobile-mega-menu');
// has-dropdown
// sub-menu
        Array.from(mobileMenuItem).map(item => {
            item.addEventListener('click', (e) => {
                let submenu = e.target.closest('li').querySelector(".sub-menu")
                let subDropdownMenu = e.target.closest('li').querySelector(".sub-dropdown-menu")
                if (submenu && submenu.classList.contains("active")) {
                    submenu.classList.remove("active")
                    if (subDropdownMenu && subDropdownMenu.classList.contains("active")) {
                        subDropdownMenu.classList.remove("active")
                    }
                } else if (submenu && !submenu.classList.contains("active")) {
                    submenu.classList.add("active")
                }
            })
        });

        Array.from(mobileSubMenuItem).map(item => {
            item.addEventListener('click', (e) => {
                let submenu = e.target.closest('li').querySelector(".sub-dropdown-menu")
                if (submenu && submenu.classList.contains("active")) {
                    submenu.classList.remove("active")
                } else if (submenu && !submenu.classList.contains("active")) {
                    submenu.classList.add("active")
                }
            })
        });


// mega menu
        mobileMegaMenu.addEventListener('click', () => {
            let megaMenu = document.querySelector('.mobile-large-sub-menu');
            let megaMenuClose = document.querySelector('.close-mega-menu');
            megaMenu.classList.add('active')
            megaMenuClose.addEventListener('click', () => {
                megaMenu.classList.add('close')
                megaMenu.classList.remove('active')
                setTimeout(() => {
                    megaMenu.classList.remove('close')
                }, 300);
            });
            if (megaMenu.classList.contains('active')) {
                let brandMobileBtns = document.querySelectorAll('.mobile-tab-btn-item');
                new Swiper(".myMegaMenuSwiper", {
                    slidesPerView: 2.5,
                    spaceBetween: 15,
                });
                brandMobileBtns.forEach(item => {
                    item.addEventListener('click', () => {
                        let mobileSubLinks = document.querySelectorAll('.mobileSubLinks')
                        brandMobileBtns.forEach(itemMb => {
                            itemMb.classList.remove('active')
                        })
                        mobileSubLinks.forEach(itemMl => {
                            itemMl.classList.remove('active')
                        })
                        item.classList.add('active')
                        document.querySelector(item.dataset.bsTarget).classList.add('active')
                    })
                })
            }
        })

// disabled
        let disabledMenu = document.querySelector('.mobile-disabled');
        disabledMenu.addEventListener('click', () => {
            let disabledSubMenu = document.querySelector('.mobile-disabled-sub-menu')
            let closeDisabledMenu = disabledSubMenu.querySelector('.close-disabled-menu')
            disabledSubMenu.classList.add('active')
            closeDisabledMenu.addEventListener('click', () => {
                disabledSubMenu.classList.add('close')
                disabledSubMenu.classList.remove('active')
                setTimeout(() => {
                    disabledSubMenu.classList.remove('close')
                }, 300);
            })
        })
    }
}
// brand tabs swiper
var swiper = new Swiper(".myBrandTabsSwiper", {
    slidesPerView: 4,
    spaceBetween: 5,
    slidesPerGroup: 4,
    loop: false,
    loopFillGroupWithBlank: false,
    // keyboard: {
    //     enabled: true
    // },
});
// brand category
let brandTabs = document.querySelectorAll('section.brands>.content-tab>.content-wrapper>.brand-tabs>.myBrandTabsSwiper>.swiper-wrapper>.tabs-item');
let brandSections = document.querySelectorAll('section.brands>.tab-content>.content-wrapper>.tab-section');
Array.from(brandTabs).map(item => {
    item.addEventListener('click', (e) => {
        Array.from(brandTabs).map(itemD => {
            if (itemD.classList.contains('active-tab')) {
                itemD.classList.remove('active-tab')
            }
        })

        let targetSection = item.dataset.bsTarget;

        Array.from(brandSections).map(itemD => {
            if (itemD.classList.contains('active-section')) {
                itemD.classList.remove('active-section')
            }
        })
        item.classList.add('active-tab')
        document.getElementById(targetSection.replace("#", "")).classList.add('active-section')
    })
})

// Award section
let awardSection = document.querySelector('.myAwardSwiper')
if (awardSection) {
    let awardSliderItem = 4
    let awardspaceBetween = 30
    if (window.innerWidth < 768) {
        awardSliderItem = 1
        awardspaceBetween = 10
    } else if (window.innerWidth >= 768 && window.innerWidth < 991) {
        awardSliderItem = 3
        awardspaceBetween = 20
    }
    var swiper = new Swiper(".myAwardSwiper", {
        slidesPerView: awardSliderItem,
        spaceBetween: awardspaceBetween,
        slidesPerGroup: awardSliderItem,
        loop: true,
        loopFillGroupWithBlank: false,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: ".swiper-button-next.swiper-navigation",
            prevEl: ".swiper-button-prev.swiper-navigation",
        },
        autoplay: {
            delay: 5000
        }
    });
}
// Client section
let clientSection = document.querySelector('.myClientSwiper')
if (clientSection) {
    let clientSliderItem = 4
    let clientSpaceBetween = 20
    if (window.innerWidth < 768) {
        clientSliderItem = 2
        document.querySelector('section.clients>.content-wrapper .clients-section-right>.client-slider').style = `height: ${160 * 1.8}px;`;
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        clientSliderItem = 3
        clientSpaceBetween = 30
    }
    var swiper = new Swiper(".myClientSwiper", {
        slidesPerView: clientSliderItem,
        loop: true,
        loopFillGroupWithBlank: false,
        grid: {
            rows: 2,
        },
        spaceBetween: clientSpaceBetween,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
}
// blog section
let blogSection = document.querySelector('.myBlogSwiper')
if (blogSection) {
    let blogSliderItem = 3
    if (window.innerWidth < 768) {
        blogSliderItem = 1
    } else if (window.innerWidth >= 768 && window.innerWidth < 991) {
        blogSliderItem = 1
    }
    var swiper = new Swiper(".myBlogSwiper", {
        slidesPerView: blogSliderItem,
        spaceBetween: 30,
        slidesPerGroup: blogSliderItem,
        loop: true,
        loopFillGroupWithBlank: false,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: ".swiper-button-next.swiper-navigation",
            prevEl: ".swiper-button-prev.swiper-navigation",
        },
        autoplay: {
            delay: 5000
        }
    });
}

// journey section
let journeySection = document.querySelector('.myJourneySwiper')
if (journeySection) {
    let journeySliderItem = 2.5
    if (window.innerWidth < 768) {
        journeySliderItem = 1
    } else if (window.innerWidth >= 768 && window.innerWidth < 991) {
        journeySliderItem = 2
    }
    var swiper = new Swiper(".myJourneySwiper", {
        slidesPerView: journeySliderItem,
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: ".swiper-button-next.swiper-navigation",
            prevEl: ".swiper-button-prev.swiper-navigation",
        },
    });
}

// unit section
let unitSection = document.querySelector('.myUnitSwiper')
if (unitSection) {
    let unitSliderItem = 5
    if (window.innerWidth < 768) {
        unitSliderItem = 1
    } else if (window.innerWidth >= 768 && window.innerWidth < 991) {
        unitSliderItem = 2
    }
    var swiper = new Swiper(".myUnitSwiper", {
        slidesPerView: unitSliderItem,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: false,
        autoplay: {
            delay: 5000
        }
    });
}
// footer
let footerMenuTab = document.querySelectorAll('footer .footer-title>.arrow');
Array.from(footerMenuTab).map(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
        item.closest('div').querySelector('ul').classList.toggle('active')
    })
})

// gallery
let overlay = document.querySelector('#overlay');
if (overlay) {
    let awardCardImage = overlay.querySelector('img');
    let awardCardTitle = overlay.querySelector('.award-item-title');
    let awardCardText = overlay.querySelector('.award-item-text');
    let awardCardPrevButton = overlay.querySelector('#prevButton');
    let awardCardNextButton = overlay.querySelector('#nextButton');
    let awardCardExitButton = overlay.querySelector('#exitButton');
    let currentAwardItem = 0;
// Hide overlay on default
// When an image is clicked'
    let overlayBtns = document.querySelectorAll('#gallery>div>a');
    overlayBtns.forEach((cardItem, index) => {
        cardItem.addEventListener('click', (e) => {
            currentAwardItem = index
            e.preventDefault();
            // input
            awardCardImage.src = cardItem.querySelector('img').src;
            awardCardTitle = cardItem.querySelector('.award-item-title').innerText;
            awardCardText = cardItem.querySelector('.award-item-text').innerText;
            // functionality
            overlay.classList.remove('fade-out-award-card');
            overlay.classList.add('fade-in-award-card');
        })
    })
// When the overlay is clicked
    overlay.addEventListener('click', (e) => {
        if (e.target.id === 'overlay') {
            overlay.classList.remove('fade-in-award-card');
            overlay.classList.add('fade-out-award-card');
        }
    })
// When next button is clicked
    awardCardNextButton.addEventListener('click', (event) => {
        if (currentAwardItem >= 0 && currentAwardItem < (overlayBtns.length - 1)) {
            currentAwardItem += 1;
            awardItemChanging(currentAwardItem)

        } else if (currentAwardItem === (overlayBtns.length - 1)) {
            currentAwardItem = 0;
            awardItemChanging(currentAwardItem)
        }
    })
// When previous button is clicked
    awardCardPrevButton.addEventListener('click', (event) => {
        if (currentAwardItem <= (overlayBtns.length - 1) && currentAwardItem > 0) {
            currentAwardItem -= 1;
            awardItemChanging(currentAwardItem)

        } else if (currentAwardItem === 0) {
            currentAwardItem = (overlayBtns.length - 1);
            awardItemChanging(currentAwardItem)
        }
    })

    function awardItemChanging(itemIndex) {
        overlay.classList.remove('fade-in-award-card');
        overlay.classList.add('fade-out-award-card');
        setTimeout(() => {
            // input
            awardCardImage.src = overlayBtns[itemIndex].querySelector('img').src;
            awardCardTitle = overlayBtns[itemIndex].querySelector('.award-item-title').innerText;
            awardCardText = overlayBtns[itemIndex].querySelector('.award-item-text').innerText;
            // functionality
            overlay.classList.remove('fade-out-award-card');
            overlay.classList.add('fade-in-award-card');
        }, 100)
    }

// When the exit button is clicked
    awardCardExitButton.addEventListener('click', () => {
        overlay.classList.remove('fade-in-award-card');
        overlay.classList.add('fade-out-award-card');
    })
}

// filter-gallery
let filterGallery = document.querySelector('#filter-gallery');
if (filterGallery) {
    let filterButtons = document.querySelectorAll('.filter-tab');
    let filterItems = document.querySelectorAll('.filter-item');

    filterButtons.forEach(itemT => {
        itemT.addEventListener('click', () => {
            filterButtons.forEach(itemDT => {
                itemDT.classList.remove('active');
            })
            filterItems.forEach(itemDS => {
                if (itemDS.classList.contains('active')) {
                    itemDS.classList.remove('active');
                }
            })
            itemT.classList.add('active')
            document.querySelector(itemT.dataset.bsTarget).classList.add('active')
        })
    })

    // product slide
    let productSliderItem = 3
    if (window.innerWidth < 768) {
        productSliderItem = 1
    }
    new Swiper(".myBrandProductSwiper", {
        slidesPerView: productSliderItem,
        spaceBetween: 15,
        slidesPerGroup: productSliderItem,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

// input file action
let formFiles = document.querySelectorAll('.form-file');
if (formFiles.length) {
    formFiles.forEach(fileInput => {
        let cover = fileInput.closest('div').parentElement.querySelector('.form-file-cover')
        let showFile = fileInput.closest('div').parentElement.querySelector('.form-file-show')
        showFile.readOnly = true;
        cover.addEventListener('click', () => {
            fileInput.click()
        })
        fileInput.addEventListener('change', () => {
            showFile.value = fileInput.files[0].name
        })
    })
}

let videoActionBtns = document.querySelectorAll('.video-action-btn');
if (videoActionBtns.length) {
    videoActionBtns.forEach(item => {

    })
}


// dashboard
if (document.getElementById('dashboard-menu-toggle')) {
    document.getElementById('dashboard-menu-toggle').addEventListener(
        'click',
        function () {
            this.classList.toggle('dashboard-menu-toggle-active');
            let dashboardHeader = document.querySelector('.dashboard-header')
            let dashboardLeftMenu = document.querySelector('.dashboard-left-nav')
            let pageMainWrap = document.querySelector('.main-wrap')
            dashboardHeader.classList.toggle('full-width')
            dashboardLeftMenu.classList.toggle('deactive')
            pageMainWrap.classList.toggle('full-width')
        }
    );
}
// full screen function
let fullscreenBtn = document.querySelector('#window-full-screen');
if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
        let elem = document.querySelector('body');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    })
}
// error page
gsap.set(".error-image", {visibility: "visible"});
gsap.to("#headStripe", {
    y: 0.5,
    rotation: 1,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    duration: 1
});
gsap.to("#spaceman", {
    y: 0.5,
    rotation: 1,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    duration: 1
});
gsap.to("#craterSmall", {
    x: -3,
    yoyo: true,
    repeat: -1,
    duration: 1,
    ease: "sine.inOut"
});
gsap.to("#craterBig", {
    x: 3,
    yoyo: true,
    repeat: -1,
    duration: 1,
    ease: "sine.inOut"
});
gsap.to("#planet", {
    rotation: -2,
    yoyo: true,
    repeat: -1,
    duration: 1,
    ease: "sine.inOut",
    transformOrigin: "50% 50%"
});

gsap.to("#starsBig g", {
    rotation: "random(-30,30)",
    transformOrigin: "50% 50%",
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
});
gsap.fromTo(
    "#starsSmall g",
    {scale: 0, transformOrigin: "50% 50%"},
    {scale: 1, transformOrigin: "50% 50%", yoyo: true, repeat: -1, stagger: 0.1}
);
gsap.to("#circlesSmall circle", {
    y: -4,
    yoyo: true,
    duration: 1,
    ease: "sine.inOut",
    repeat: -1
});
gsap.to("#circlesBig circle", {
    y: -2,
    yoyo: true,
    duration: 1,
    ease: "sine.inOut",
    repeat: -1
});

gsap.set("#glassShine", {x: -68});

gsap.to("#glassShine", {
    x: 80,
    duration: 2,
    rotation: -30,
    ease: "expo.inOut",
    transformOrigin: "50% 50%",
    repeat: -1,
    repeatDelay: 8,
    delay: 2
});