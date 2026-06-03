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
        const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
        const secs = String(secondsElapsed % 60).padStart(2, '0');
        let statusPrefix = 'Принято';
        if (currentStage === 'progress') statusPrefix = 'В работе';
        if (currentStage === 'ready') statusPrefix = 'Готово';
        if (currentStage === 'paid') statusPrefix = 'Оплачено';
        timerLabel.textContent = `${statusPrefix}: ${mins}:${secs}`;
    }

    function updateColumnCounts() {
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
                actionBtn.textContent = 'Завершить';
                actionBtn.className = 'btn btn-primary btn-sm btn-sim-action active-repair';
                startTimer();
                updateColumnCounts();
            } else if (currentStage === 'progress') {
                // Move to ready and trigger popup
                currentStage = 'ready';
                colReady.appendChild(kanbanCard);
                actionBtn.textContent = 'Оплатить';
                actionBtn.className = 'btn btn-primary btn-sm btn-sim-action completed';
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
                actionBtn.style.display = 'none';
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
            popupStatusMsg.textContent = '⏳ Pusher dispatching event...';
            
            setTimeout(() => {
                popupStatusMsg.textContent = '⚡ Meta WhatsApp Cloud API accepted payload.';
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
    const defectTypes = ['Царапина', 'Скол лака', 'Вмятина кузова', 'Трещина бампера'];

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
            const randomType = defectTypes[Math.floor(Math.random() * defectTypes.length)];
            const defectItem = {
                id: defects.length + 1,
                x,
                y,
                type: randomType,
                element: circle
            };
            defects.push(defectItem);

            // Render log row
            const li = document.createElement('li');
            li.innerHTML = `<span>🔴 <strong>${defectItem.type}</strong> (${x}, ${y})</span>`;
            defectLogList.appendChild(li);

            // Update counts
            defectCountLabel.textContent = `(${defects.length})`;
            portalLinkBox.style.display = 'block';
        });

        if (btnClearInspection) {
            btnClearInspection.addEventListener('click', () => {
                // Remove all circles
                const dots = carSvg.querySelectorAll('.defect-dot');
                dots.forEach(dot => dot.remove());
                
                // Clear log
                defectLogList.innerHTML = '';
                defects = [];
                defectCountLabel.textContent = '(0)';
                portalLinkBox.style.display = 'none';
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

        simWabaLtvLbl.textContent = `> ${ltv} ₼`;
        simWabaDaysLbl.textContent = `> ${days} дн.`;

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
        let brandName = brand === 'ALL' ? 'автомобиля' : brand;
        dynamicWabaTemplate.innerHTML = `
            <strong>Шаблон WABA:</strong><br>
            Привет, Самир! Заметили, что ваш ${brandName} не заезжал к нам уже ${days} дней. Дарим вам скидку 10% на следующее ТО. Ваша выгода с CarsKeep!
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
        { id: 1, type: 'INCOME', amount: 320.00, desc: 'Выручка: Заказ-наряд #1842 (BMW X5)', isStorno: false },
        { id: 2, type: 'EXPENSE', amount: 120.00, desc: 'Закупка: Тормозные диски Brembo', isStorno: false },
        { id: 3, type: 'EXPENSE', amount: 40.00, desc: 'Зарплата: мастер Самир', isStorno: false }
    ];

    function calculateLedgerProfit() {
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
        ledgerEntries.forEach(entry => {
            const tr = document.createElement('tr');
            if (entry.isStorno) {
                tr.className = 'ledger-storno-row';
            }
            
            const typeClass = entry.type === 'INCOME' ? 'ledger-income' : 'ledger-expense';
            const sign = entry.type === 'INCOME' ? '+' : '-';
            
            tr.innerHTML = `
                <td><span class="ledger-badge ${typeClass}">${entry.type}</span></td>
                <td><strong class="${typeClass}">${sign}${entry.amount.toFixed(2)} ₼</strong></td>
                <td><span class="ledger-desc-txt">${entry.desc}</span></td>
                <td>
                    ${!entry.isStorno ? `<button class="btn btn-secondary btn-xs btn-storno" data-id="${entry.id}">Сторно</button>` : `<span class="storno-indicator">Аннулировано</span>`}
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

        // Mark current as storno-ed
        entry.isStorno = true;

        // Append compensating entry
        const oppositeType = entry.type === 'INCOME' ? 'EXPENSE' : 'INCOME';
        const stornoItem = {
            id: ledgerEntries.length + 1,
            type: oppositeType,
            amount: entry.amount,
            desc: `Сторно: Компенсация за (${entry.desc})`,
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

            if (isNaN(amount) || amount <= 0 || !desc) {
                alert('Пожалуйста, введите корректную сумму и обоснование.');
                return;
            }

            const newItem = {
                id: ledgerEntries.length + 1,
                type,
                amount,
                desc,
                isStorno: false
            };
            ledgerEntries.push(newItem);
            
            // reset form inputs
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
        const bays = parseInt(baysSlider.value);
        const avgTicket = parseInt(avgTicketSlider.value);
        const dailyCars = parseInt(dailyCarsSlider.value);
        
        // Update display labels
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
        
        // Update outputs with localized currency styling (ru-RU spacing format with ₼ symbol)
        calcProfit.textContent = `${additionalProfit.toLocaleString('ru-RU')} ₼`;
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
