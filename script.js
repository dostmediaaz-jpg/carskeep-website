document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       MOBILE NAVIGATION TOGGLE
       ========================================================================== */
    const mobileToggle = document.getElementById('mobile-toggle-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            
            // Toggle hamburger icon animation
            const bars = mobileToggle.querySelectorAll('.bar');
            if (mobileToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                const bars = mobileToggle.querySelectorAll('.bar');
                bars.forEach(bar => bar.style.transform = 'none');
                bars[1].style.opacity = '1';
            });
        });
    }

    /* ==========================================================================
       INTERACTIVE FEATURES TABS
       ========================================================================== */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active classes
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            
            // Show corresponding pane
            const targetId = button.getAttribute('aria-controls');
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       ROI CALCULATOR LOGIC
       ========================================================================== */
    const baysSlider = document.getElementById('bays-slider');
    const avgTicketSlider = document.getElementById('avg-ticket-slider');
    const dailyCarsSlider = document.getElementById('daily-cars-slider');
    
    const baysValue = document.getElementById('bays-value');
    const avgTicketValue = document.getElementById('avg-ticket-value');
    const dailyCarsValue = document.getElementById('daily-cars-value');
    
    const calcProfit = document.getElementById('calc-profit');
    const calcHours = document.getElementById('calc-hours');
    const calcProductivity = document.getElementById('calc-productivity');

    function calculateROI() {
        const bays = parseInt(baysSlider.value);
        const avgTicket = parseInt(avgTicketSlider.value);
        const dailyCars = parseInt(dailyCarsSlider.value);
        
        // Update display labels
        baysValue.textContent = bays;
        avgTicketValue.textContent = `$${avgTicket}`;
        dailyCarsValue.textContent = dailyCars;
        
        // Calculation Logic:
        // Assume 22 working days per month.
        // Total monthly revenue = bays * dailyCars * avgTicket * 22
        const monthlyRevenue = bays * dailyCars * avgTicket * 22;
        
        // With CarsKeep, we reduce lost estimates and increase ticket authorization rate (SMS/WhatsApp approval).
        // Let's assume a conservative 8% increase in overall repair volume/value.
        // Plus, savings on parts ordering, billing mistakes, and automated reminders brings another 4% of efficiency.
        const additionalProfit = Math.round(monthlyRevenue * 0.12);
        
        // Hours saved: Let's assume 30 minutes (0.5 hour) saved per car serviced due to automated intake, 
        // quick estimates, and WhatsApp approvals instead of back-and-forth phone calls.
        const totalCarsServiced = bays * dailyCars * 22;
        const hoursSaved = Math.round(totalCarsServiced * 0.5);
        
        // Productivity increase: base value of 10% plus scaled metric based on volume
        const productivityPercent = Math.min(25, Math.round(10 + (bays * 0.8) + (dailyCars * 0.5)));
        
        // Format Currency
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        });
        
        // Update outputs
        calcProfit.textContent = formatter.format(additionalProfit);
        calcHours.textContent = `${hoursSaved} ч / мес`;
        calcProductivity.textContent = `+${productivityPercent}%`;
    }

    if (baysSlider && avgTicketSlider && dailyCarsSlider) {
        baysSlider.addEventListener('input', calculateROI);
        avgTicketSlider.addEventListener('input', calculateROI);
        dailyCarsSlider.addEventListener('input', calculateROI);
        
        // Run initial calculation
        calculateROI();
    }

    /* ==========================================================================
       PRICING MONTHLY / YEARLY TOGGLE
       ========================================================================== */
    const billingToggle = document.getElementById('billing-toggle');
    const priceValues = document.querySelectorAll('.price-val');
    
    if (billingToggle) {
        billingToggle.addEventListener('change', () => {
            const isYearly = billingToggle.checked;
            
            priceValues.forEach(priceSpan => {
                const monthlyPrice = priceSpan.getAttribute('data-monthly');
                const yearlyPrice = priceSpan.getAttribute('data-yearly');
                
                if (isYearly) {
                    // Animate text change
                    priceSpan.style.opacity = '0';
                    setTimeout(() => {
                        priceSpan.textContent = yearlyPrice;
                        priceSpan.style.opacity = '1';
                    }, 150);
                } else {
                    priceSpan.style.opacity = '0';
                    setTimeout(() => {
                        priceSpan.textContent = monthlyPrice;
                        priceSpan.style.opacity = '1';
                    }, 150);
                }
            });
        });
    }

    /* ==========================================================================
       FAQ ACCORDION
       ========================================================================== */
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = question.nextElementSibling;
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            // Toggle current item
            item.classList.toggle('active');
            question.setAttribute('aria-expanded', !isExpanded);
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
            
            // Optional: Close other open questions (accordion effect)
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherItem = otherQuestion.parentElement;
                    const otherAnswer = otherQuestion.nextElementSibling;
                    
                    otherItem.classList.remove('active');
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    otherAnswer.style.maxHeight = '0';
                }
            });
        });
    });

    /* ==========================================================================
       HEADER STICKY BLUR ACTION
       ========================================================================== */
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(7, 8, 13, 0.9)';
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.backgroundColor = 'rgba(7, 8, 13, 0.75)';
            header.style.boxShadow = 'none';
        }
    });
});
