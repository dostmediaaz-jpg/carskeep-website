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
       LANGUAGE SWITCHER / INTERNATIONALIZATION (i18n)
       ========================================================================== */
    const langMenuBtn = document.getElementById('lang-menu-btn');
    const langDropdownMenu = document.getElementById('lang-dropdown-menu');
    const langSelector = langMenuBtn ? langMenuBtn.closest('.lang-selector') : null;
    const currentLangFlag = document.getElementById('current-lang-flag');
    const currentLangText = document.getElementById('current-lang-text');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Language flag mapper
    const flags = {
        en: '🇬🇧',
        ru: '🇷🇺',
        az: '🇦🇿'
    };

    // Toggle dropdown
    if (langMenuBtn && langDropdownMenu) {
        langMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langSelector.classList.toggle('active');
            const expanded = langSelector.classList.contains('active');
            langMenuBtn.setAttribute('aria-expanded', expanded);
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            if (langSelector) {
                langSelector.classList.remove('active');
            }
            if (langMenuBtn) {
                langMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Initialize translations cache
    window.translations = {};

    // Switch language function
    async function switchLanguage(lang) {
        // Fetch translations if not already cached
        if (!window.translations[lang]) {
            try {
                const response = await fetch(`./locales/${lang}.json`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                window.translations[lang] = await response.json();
            } catch (error) {
                console.error(`Failed to load translations for lang: ${lang}`, error);
                // Fallback to English if loading fails
                if (lang !== 'en') {
                    await switchLanguage('en');
                }
                return;
            }
        }
        
        window.currentLanguage = lang;
        localStorage.setItem('carskeep_lang', lang);
        document.documentElement.lang = lang;

        // Update dropdown button label & flag
        if (currentLangFlag) currentLangFlag.textContent = flags[lang] || '🇬🇧';
        if (currentLangText) currentLangText.textContent = lang.toUpperCase();

        // Update active class on dropdown items
        dropdownItems.forEach(item => {
            if (item.getAttribute('data-lang') === lang) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Translate static text elements with data-i18n
        const translatable = document.querySelectorAll('[data-i18n]');
        translatable.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = window.translations[lang][key];
            if (translation !== undefined) {
                if (el.getAttribute('data-i18n-html') === 'true') {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Translate placeholder attributes
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = window.translations[lang][key];
            if (translation !== undefined) {
                el.setAttribute('placeholder', translation);
            }
        });

        // Translate theme toggle button tooltip/aria-label
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (themeBtn) {
            const translation = window.translations[lang]['theme_toggle_title'];
            if (translation !== undefined) {
                themeBtn.setAttribute('title', translation);
                themeBtn.setAttribute('aria-label', translation);
            }
        }

        // Update dynamic details in the simulators
        updateTimerText();
        updateKanbanButton();
        renderDefectLog();
        updateWabaSimulator();
        renderLedgerTable();
        calculateROI();
    }

    // Set up click handlers on dropdown items
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = item.getAttribute('data-lang');
            switchLanguage(lang);
            if (langSelector) langSelector.classList.remove('active');
            if (langMenuBtn) langMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

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
       SIMULATOR 1: KANBAN WORKFLOW & TRIGGER
       ========================================================================== */
    const kanbanCard = document.getElementById('kanban-sim-card');
    const actionBtn = document.getElementById('kanban-action-btn');
    const timerLabel = document.getElementById('card-status-duration');
    const colWaiting = document.getElementById('col-waiting');
    const colProgress = document.getElementById('col-progress');
    const colReady = document.getElementById('col-ready');
    const colPaid = document.getElementById('col-paid');
    
    const countWaiting = document.getElementById('count-waiting');
    const countProgress = document.getElementById('count-progress');
    const countReady = document.getElementById('count-ready');
    const countPaid = document.getElementById('count-paid');
    
    const triggerPopup = document.getElementById('trigger-popup');
    const btnPopupCancel = document.getElementById('btn-popup-cancel');
    const btnPopupSend = document.getElementById('btn-popup-send');
    const popupStatusMsg = document.getElementById('popup-status-msg');

    let currentStage = 'waiting'; // waiting -> progress -> ready -> paid
    let timerInterval = null;
    let secondsElapsed = 0;

    function startTimer() {
        clearInterval(timerInterval);
        secondsElapsed = 0;
        updateTimerText();
        timerInterval = setInterval(() => {
            secondsElapsed++;
            updateTimerText();
        }, 1000);
    }

    function updateTimerText() {
        if (!timerLabel) return;
        const dict = window.translations[window.currentLanguage || 'en'];
        const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
        const secs = String(secondsElapsed % 60).padStart(2, '0');
        
        let statusPrefix = dict.sim_kanban_col_waiting;
        if (currentStage === 'progress') statusPrefix = dict.sim_kanban_col_progress;
        if (currentStage === 'ready') statusPrefix = dict.sim_kanban_col_ready;
        if (currentStage === 'paid') statusPrefix = dict.sim_kanban_col_paid;
        
        timerLabel.textContent = `${statusPrefix}: ${mins}:${secs}`;
    }

    function updateKanbanButton() {
        if (!actionBtn) return;
        const dict = window.translations[window.currentLanguage || 'en'];
        if (currentStage === 'waiting') {
            actionBtn.textContent = dict.sim_kanban_btn_start;
            actionBtn.className = 'btn btn-primary btn-sm btn-sim-action';
            actionBtn.style.display = 'inline-block';
        } else if (currentStage === 'progress') {
            actionBtn.textContent = dict.sim_kanban_btn_complete;
            actionBtn.className = 'btn btn-primary btn-sm btn-sim-action active-repair';
            actionBtn.style.display = 'inline-block';
        } else if (currentStage === 'ready') {
            actionBtn.textContent = dict.sim_kanban_btn_pay;
            actionBtn.className = 'btn btn-primary btn-sm btn-sim-action completed';
            actionBtn.style.display = 'inline-block';
        } else if (currentStage === 'paid') {
            actionBtn.style.display = 'none';
        }
    }

    function updateColumnCounts() {
        if (!colWaiting) return;
        countWaiting.textContent = `(${colWaiting.querySelectorAll('.kanban-card').length})`;
        countProgress.textContent = `(${colProgress.querySelectorAll('.kanban-card').length})`;
        countReady.textContent = `(${colReady.querySelectorAll('.kanban-card').length})`;
        countPaid.textContent = `(${colPaid.querySelectorAll('.kanban-card').length})`;
    }

    if (kanbanCard && actionBtn) {
        startTimer();

        actionBtn.addEventListener('click', () => {
            if (currentStage === 'waiting') {
                // Move to progress
                currentStage = 'progress';
                colProgress.appendChild(kanbanCard);
                updateKanbanButton();
                startTimer();
                updateColumnCounts();
            } else if (currentStage === 'progress') {
                // Move to ready and trigger popup
                currentStage = 'ready';
                colReady.appendChild(kanbanCard);
                updateKanbanButton();
                startTimer();
                updateColumnCounts();

                // Open WABA Trigger popup
                setTimeout(() => {
                    triggerPopup.style.display = 'flex';
                }, 500);
            } else if (currentStage === 'ready') {
                // Move to paid
                currentStage = 'paid';
                colPaid.appendChild(kanbanCard);
                updateKanbanButton();
                startTimer();
                updateColumnCounts();
            }
        });

        // WABA Trigger Cancel
        btnPopupCancel.addEventListener('click', () => {
            triggerPopup.style.display = 'none';
            popupStatusMsg.style.display = 'none';
            popupStatusMsg.textContent = '';
        });

        // WABA Trigger Send Simulation
        btnPopupSend.addEventListener('click', () => {
            btnPopupSend.disabled = true;
            btnPopupCancel.disabled = true;
            popupStatusMsg.style.display = 'block';
            popupStatusMsg.style.color = '#3b82f6';
            
            const dict = window.translations[window.currentLanguage || 'en'];
            popupStatusMsg.textContent = dict.sim_popup_status_dispatch;
            
            setTimeout(() => {
                popupStatusMsg.textContent = dict.sim_popup_status_accepted;
                popupStatusMsg.style.color = '#10b981';
                setTimeout(() => {
                    triggerPopup.style.display = 'none';
                    btnPopupSend.disabled = false;
                    btnPopupCancel.disabled = false;
                    popupStatusMsg.style.display = 'none';
                    popupStatusMsg.textContent = '';
                }, 1500);
            }, 1200);
        });
    }

    /* ==========================================================================
       SIMULATOR 2: CAR BODY INSPECTION
       ========================================================================== */
    const carSvg = document.getElementById('car-svg');
    const defectLogList = document.getElementById('defect-log-list');
    const defectCountLabel = document.getElementById('defect-count');
    const btnClearInspection = document.getElementById('btn-clear-inspection');
    const portalLinkBox = document.getElementById('portal-link-box');
    
    let defects = [];
    const defectKeys = ['defect_scratch', 'defect_chip', 'defect_dent', 'defect_crack'];

    function renderDefectLog() {
        if (!defectLogList) return;
        defectLogList.innerHTML = '';
        const dict = window.translations[window.currentLanguage || 'en'];
        
        defects.forEach(defectItem => {
            const li = document.createElement('li');
            const typeLabel = dict[defectItem.key] || defectItem.key;
            li.innerHTML = `<span>🔴 <strong>${typeLabel}</strong> (${defectItem.x}, ${defectItem.y})</span>`;
            defectLogList.appendChild(li);
        });

        defectCountLabel.textContent = `(${defects.length})`;
        if (defects.length > 0) {
            portalLinkBox.style.display = 'block';
        } else {
            portalLinkBox.style.display = 'none';
        }
    }

    if (carSvg) {
        carSvg.addEventListener('click', (e) => {
            // Get relative click coordinates inside the SVG viewport
            const rect = carSvg.getBoundingClientRect();
            const x = Math.round(((e.clientX - rect.left) / rect.width) * 200);
            const y = Math.round(((e.clientY - rect.top) / rect.height) * 400);

            // Add circle element
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', '6');
            circle.setAttribute('fill', '#ef4444');
            circle.setAttribute('class', 'defect-dot');
            circle.style.filter = 'drop-shadow(0 0 4px #ef4444)';
            carSvg.appendChild(circle);

            // Log defect
            const randomKey = defectKeys[Math.floor(Math.random() * defectKeys.length)];
            const defectItem = {
                id: defects.length + 1,
                x,
                y,
                key: randomKey,
                element: circle
            };
            defects.push(defectItem);

            renderDefectLog();
        });

        if (btnClearInspection) {
            btnClearInspection.addEventListener('click', () => {
                // Remove all circles
                const dots = carSvg.querySelectorAll('.defect-dot');
                dots.forEach(dot => dot.remove());
                
                // Clear log
                defects = [];
                renderDefectLog();
            });
        }
    }

    /* ==========================================================================
       SIMULATOR 3: WHATSAPP WABA SEGMENTER
       ========================================================================== */
    const wabaLtvRange = document.getElementById('waba-ltv-range');
    const wabaDaysRange = document.getElementById('waba-days-range');
    const wabaBrandSelect = document.getElementById('waba-brand-select');
    
    const simWabaLtvLbl = document.getElementById('sim-waba-ltv-lbl');
    const simWabaDaysLbl = document.getElementById('sim-waba-days-lbl');
    
    const wabaAudienceCount = document.getElementById('waba-audience-count');
    const wabaCampaignCost = document.getElementById('waba-campaign-cost');
    const dynamicWabaTemplate = document.getElementById('dynamic-waba-template');

    function updateWabaSimulator() {
        if (!wabaLtvRange) return;
        const ltv = parseInt(wabaLtvRange.value);
        const days = parseInt(wabaDaysRange.value);
        const brand = wabaBrandSelect.value;
        const dict = window.translations[window.currentLanguage || 'en'];

        simWabaLtvLbl.textContent = `> ${ltv} ₼`;
        
        let daysSuffix = 'days';
        if (window.currentLanguage === 'ru') daysSuffix = 'дн.';
        else if (window.currentLanguage === 'az') daysSuffix = 'gün';
        simWabaDaysLbl.textContent = `> ${days} ${daysSuffix}`;

        // Calculate size & cost
        let baseCount = 120;
        if (brand === 'BMW') baseCount = 45;
        else if (brand === 'Mercedes') baseCount = 38;
        else if (brand === 'Toyota') baseCount = 28;
        else baseCount = 180;

        const count = Math.max(1, Math.round(baseCount * (1 - (ltv - 100) / 2000) * (days / 60)));
        const cost = (count * 0.05).toFixed(2);

        wabaAudienceCount.textContent = count;
        wabaCampaignCost.textContent = `${cost} ₼`;

        // Update WhatsApp preview template message
        let brandName = brand === 'ALL' ? (dict.sim_crm_waba_preview_vehicle || 'vehicle') : brand;
        let bodyText = dict.sim_crm_waba_preview_body || '';
        bodyText = bodyText.replace('{brandName}', brandName).replace('{days}', days);

        dynamicWabaTemplate.innerHTML = `
            <strong>${dict.sim_crm_waba_preview_title || 'WABA Template:'}</strong><br>
            ${bodyText}
        `;
    }

    if (wabaLtvRange) {
        wabaLtvRange.addEventListener('input', updateWabaSimulator);
        wabaDaysRange.addEventListener('input', updateWabaSimulator);
        wabaBrandSelect.addEventListener('change', updateWabaSimulator);
        updateWabaSimulator();
    }

    /* ==========================================================================
       SIMULATOR 4: LEDGER DOUBLE-ENTRY REGISTRY
       ========================================================================= */
    const ledgerTableRows = document.getElementById('ledger-rows');
    const ledgerNetProfit = document.getElementById('ledger-net-profit');
    const ledgerTypeSel = document.getElementById('ledger-type-sel');
    const ledgerAmountInput = document.getElementById('ledger-amount-input');
    const ledgerDescInput = document.getElementById('ledger-desc-input');
    const btnAddLedger = document.getElementById('btn-add-ledger');

    let ledgerEntries = [
        { id: 1, type: 'INCOME', amount: 320.00, descKey: 'sim_ledger_income_desc_1', isStorno: false },
        { id: 2, type: 'EXPENSE', amount: 120.00, descKey: 'sim_ledger_expense_desc_1', isStorno: false },
        { id: 3, type: 'EXPENSE', amount: 40.00, descKey: 'sim_ledger_expense_desc_2', isStorno: false }
    ];

    function calculateLedgerProfit() {
        if (!ledgerNetProfit) return;
        let total = 0;
        ledgerEntries.forEach(entry => {
            if (entry.type === 'INCOME') {
                total += entry.amount;
            } else {
                total -= entry.amount;
            }
        });
        ledgerNetProfit.textContent = `${total.toFixed(2)} ₼`;
    }

    function renderLedgerTable() {
        if (!ledgerTableRows) return;
        ledgerTableRows.innerHTML = '';
        const dict = window.translations[window.currentLanguage || 'en'];

        ledgerEntries.forEach(entry => {
            const tr = document.createElement('tr');
            if (entry.isStorno) {
                tr.className = 'ledger-storno-row';
            }
            
            const typeClass = entry.type === 'INCOME' ? 'ledger-income' : 'ledger-expense';
            const sign = entry.type === 'INCOME' ? '+' : '-';
            
            let descriptionText = '';
            if (entry.descKey === 'storno_comp') {
                const originalText = entry.descParams.originalDesc;
                descriptionText = `${dict.sim_ledger_storno_prefix || 'Storno: Compensation for'} (${originalText})`;
            } else if (entry.descKey) {
                descriptionText = dict[entry.descKey] || entry.descKey;
            } else {
                descriptionText = entry.customDesc || '';
            }

            const btnText = dict.sim_ledger_btn_storno || 'Storno';
            const voidedText = dict.sim_ledger_storno_voided || 'Voided';

            tr.innerHTML = `
                <td><span class="ledger-badge ${typeClass}">${entry.type}</span></td>
                <td><strong class="${typeClass}">${sign}${entry.amount.toFixed(2)} ₼</strong></td>
                <td><span class="ledger-desc-txt">${descriptionText}</span></td>
                <td>
                    ${!entry.isStorno ? `<button class="btn btn-secondary btn-xs btn-storno" data-id="${entry.id}">${btnText}</button>` : `<span class="storno-indicator">${voidedText}</span>`}
                </td>
            `;
            ledgerTableRows.appendChild(tr);
        });

        // Bind storno action
        const stornoBtns = ledgerTableRows.querySelectorAll('.btn-storno');
        stornoBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = parseInt(btn.getAttribute('data-id'));
                stornoEntry(targetId);
            });
        });

        calculateLedgerProfit();
    }

    function stornoEntry(id) {
        const entry = ledgerEntries.find(e => e.id === id);
        if (!entry || entry.isStorno) return;

        entry.isStorno = true;

        const dict = window.translations[window.currentLanguage || 'en'];
        const oppositeType = entry.type === 'INCOME' ? 'EXPENSE' : 'INCOME';
        const stornoItem = {
            id: ledgerEntries.length + 1,
            type: oppositeType,
            amount: entry.amount,
            descKey: 'storno_comp',
            descParams: { originalDesc: entry.descKey ? dict[entry.descKey] : entry.customDesc },
            isStorno: true
        };
        ledgerEntries.push(stornoItem);
        renderLedgerTable();
    }

    if (btnAddLedger) {
        btnAddLedger.addEventListener('click', () => {
            const type = ledgerTypeSel.value;
            const amount = parseFloat(ledgerAmountInput.value);
            const desc = ledgerDescInput.value.trim();
            const dict = window.translations[window.currentLanguage || 'en'];

            if (isNaN(amount) || amount <= 0 || !desc) {
                alert(dict.sim_ledger_alert_invalid || 'Please enter a valid amount and description.');
                return;
            }

            const newItem = {
                id: ledgerEntries.length + 1,
                type,
                amount,
                customDesc: desc,
                isStorno: false
            };
            ledgerEntries.push(newItem);
            
            ledgerAmountInput.value = '50';
            ledgerDescInput.value = '';

            renderLedgerTable();
        });

        renderLedgerTable();
    }

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
        if (!baysSlider) return;
        const bays = parseInt(baysSlider.value);
        const avgTicket = parseInt(avgTicketSlider.value);
        const dailyCars = parseInt(dailyCarsSlider.value);
        const dict = window.translations[window.currentLanguage || 'en'];
        
        baysValue.textContent = bays;
        avgTicketValue.textContent = `${avgTicket} ₼`;
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
        
        // Format with space as thousands separator
        const formattedProfit = additionalProfit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        
        calcProfit.textContent = `${formattedProfit} ₼`;
        calcHours.textContent = `${hoursSaved} ${dict.roi_hours_unit || 'hours / mo'}`;
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
            
            // Close other open questions (accordion effect)
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
       THEME SWITCHER & HEADER STICKY ACTION
       ========================================================================== */
    const header = document.getElementById('main-header');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    // Toggle header class on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // Theme toggle click handler
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            try {
                localStorage.setItem('carskeep_theme', newTheme);
            } catch (e) {
                console.warn('Could not save theme preference to localStorage:', e);
            }
        });
    }

    // Initialize language from localStorage or default to EN (English)
    let savedLang = 'en';
    try {
        savedLang = localStorage.getItem('carskeep_lang') || 'en';
    } catch (e) {
        console.warn('Could not read language from localStorage:', e);
    }
    switchLanguage(savedLang);
});
