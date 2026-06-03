const translations = {
    en: {
        // Meta
        meta_title: "CarsKeep — SaaS Platform for Auto Repair Shops and Detailing Centers",
        meta_description: "Increase your auto repair shop or detailing center revenue by 30% with CarsKeep. Digital estimates, smart scheduling, inventory management, and one-click payments.",
        meta_keywords: "auto repair shop management, software for workshops, detailing automation, shopmonkey, tekmetric, auto shop crm, inventory tracking",
        meta_title_og: "CarsKeep — Smart Auto Shop Management",
        
        // Navigation
        nav_features: "Features",
        nav_roi: "ROI Calculator",
        nav_pricing: "Pricing",
        nav_faq: "FAQ",
        nav_login: "Log In",
        nav_cta: "Start Free",
        
        // Hero Section
        hero_badge: "⚡ Update 2.0: Messenger Integration",
        hero_title: "Manage your auto service at a <span class=\"text-gradient\">new level</span>",
        hero_subtitle: "CarsKeep is a modern SaaS platform for auto repair shops and detailing studios. Reduce estimate times, automate inventory, and increase profit by 30%.",
        hero_cta_primary: "Start Free",
        hero_cta_secondary: "Learn More",
        hero_stat_revenue_num: "30%",
        hero_stat_revenue_lbl: "Revenue Growth",
        hero_stat_trial_num: "14 days",
        hero_stat_trial_lbl: "Free Trial Period",
        hero_stat_time_num: "1.5 hours",
        hero_stat_time_lbl: "Daily Mechanic Time Saved",
        
        // Dashboard Mockup
        mockup_search: "carskeep.io/dashboard",
        mockup_desktop: "Dashboard",
        mockup_user: "STO Admin",
        mockup_revenue: "Monthly Revenue",
        mockup_revenue_trend: "+12.4% from last month",
        mockup_orders: "Active Orders",
        mockup_orders_trend: "Bay Utilization 85%",
        mockup_orders_val: "18 cars",
        mockup_ticket: "Average Ticket",
        mockup_ticket_trend: "+4.2%",
        mockup_schedule: "Schedule & Bays",
        mockup_queue: "Queue (4)",
        mockup_service_audi: "Maintenance & oil change",
        mockup_service_bmw: "Suspension diagnosis",
        mockup_in_progress: "In Progress (2)",
        mockup_service_tesla: "Door soundproofing",
        mockup_status_tesla: "In progress 75%",
        mockup_ready: "Ready (3)",
        mockup_service_porsche: "Detailing & polishing",
        mockup_status_porsche: "Ready for delivery",
        
        // Features Section Header
        features_title: "All tools to <span class=\"text-gradient\">grow your auto business</span>",
        features_subtitle: "Forget about Excel chaos and paper notebooks. Manage processes from any device.",
        
        // Tab buttons
        tab_kanban_btn: "📋 Kanban Board & Statuses",
        tab_inspection_btn: "🚗 Body Inspection & Blueprints",
        tab_crm_btn: "💬 WhatsApp CRM & Campaigns",
        tab_ledger_btn: "₼ Ledger Accounting & Finance",
        
        // Tab 1: Kanban Content
        tab_kanban_title: "Control every stage of repair in real time",
        tab_kanban_desc: "CarsKeep interactive Kanban board displays the status of each order. The system automatically tracks the time spent at each post (time tracking) to identify bottlenecks.",
        tab_kanban_bullet_1: "Post Time Tracking: Precise tracking of time in each status (Received, In Progress, Ready).",
        tab_kanban_bullet_2: "Automatic Triggers: Transition to 'Ready' automatically prepares a WhatsApp message template for the client.",
        tab_kanban_bullet_3: "Pusher WebSocket: Real-time status sync between all manager and mechanic screens without page reloads.",
        
        // Tab 1 Simulator
        sim_kanban_title: "Kanban Board Simulator",
        sim_kanban_badge: "Try clicking!",
        sim_kanban_col_waiting: "Queue",
        sim_kanban_col_progress: "In Progress",
        sim_kanban_col_ready: "Ready",
        sim_kanban_col_paid: "Paid",
        sim_kanban_card_service: "Body Polishing + Ceramic",
        sim_kanban_btn_start: "Start repair",
        sim_kanban_btn_complete: "Complete",
        sim_kanban_btn_pay: "Pay",
        
        // Tab 1 Trigger Popup
        sim_popup_title: "Automatic WhatsApp Trigger",
        sim_popup_desc: "System trigger JOBCARD_READY fired. Send service message to client via Meta WABA template?",
        sim_popup_template_title: "Template: 'Ready Notification'",
        sim_popup_template_body: "«Dear Samir! Your car BMW X5 (99-LN-777) is ready. Maintenance cost: 320.00 ₼. We are waiting for you!»",
        sim_popup_btn_cancel: "Dismiss",
        sim_popup_btn_send: "Send WABA",
        sim_popup_status_dispatch: "⏳ Pusher dispatching event...",
        sim_popup_status_accepted: "⚡ Meta WhatsApp Cloud API accepted payload.",
        
        // Tab 2: Inspection Content
        tab_inspect_title: "Interactive defect marking on vehicle blueprint",
        tab_inspect_desc: "Digitize vehicle check-in in a minute. Mark scratches, dents, and chips directly on the interactive 2D body layout. The client will see all marks and attached photos in their public status portal.",
        tab_inspect_bullet_1: "1-Click Inspection: Tap body parts on the blueprint to instantly add a defect to the checklist.",
        tab_inspect_bullet_2: "Client Transparency: Generate a public status portal (Public Report Link) with photo records to prevent disputes.",
        tab_inspect_bullet_3: "Confident Upselling: Add photos of defects to the estimate and send to the client via WhatsApp for approval.",
        
        // Tab 2 Simulator
        sim_inspect_title: "Vehicle Body Inspection",
        sim_inspect_btn_clear: "Clear All",
        sim_inspect_defects_title: "Body Defects",
        sim_inspect_hint: "Click on the blueprint on the left to mark damage",
        sim_inspect_report_generated: "Report generated:",
        sim_inspect_alert_msg: "Opening public status portal with damage scheme and photos.",
        
        // Defect types
        defect_scratch: "Scratch",
        defect_chip: "Paint Chip",
        defect_dent: "Body Dent",
        defect_crack: "Bumper Crack",
        
        // Tab 3: CRM Content
        tab_crm_title: "Smart audience builder and WhatsApp campaigns",
        tab_crm_desc: "CarsKeep integrates the official WhatsApp Business API. Launch mass broadcasts to customer segments (e.g., 'all Mercedes owners with LTV > 1000 ₼ who haven't visited in 90 days') without the risk of number blocking.",
        tab_crm_bullet_1: "Flexible Segmenter: Combine filters for LTV, last visit date, car brand, and tags using AND/OR logic.",
        tab_crm_bullet_2: "Campaign Cost Calculator: The system automatically calculates the number of recipients and the message budget at official Meta rates (E.164) before launching.",
        tab_crm_bullet_3: "Auto-Responder: Automatic reply to customers during off-hours with flood protection (no more than once a day).",
        
        // Tab 3 Simulator
        sim_crm_title: "Audience Builder",
        sim_crm_ltv: "Customer LTV",
        sim_crm_days: "Days since last visit",
        sim_crm_brand: "Car brand",
        sim_crm_all_brands: "All brands",
        sim_crm_found_count: "Customers found:",
        sim_crm_budget: "Meta WABA budget:",
        sim_crm_phone_title: "Samir (BMW X5)",
        sim_crm_phone_status: "Online",
        sim_crm_msg_received: "Hey! What about headlight polishing?",
        sim_crm_waba_preview_title: "WABA Template:",
        sim_crm_waba_preview_body: "Hello Samir! We noticed that your {brandName} hasn't visited us for {days} days. We are offering a 10% discount on your next maintenance. Your benefit with CarsKeep!",
        sim_crm_waba_preview_vehicle: "vehicle",
        
        // Tab 4: Ledger Content
        tab_ledger_title: "Double-entry Ledger accounting and profit audit",
        tab_ledger_desc: "CarsKeep's financial module is built on Ledger guidelines — an append-only registry of immutable financial transactions. No 'retroactive edits'. Any corrections are entered via compensating entries (STORNO) for complete audit trail integrity.",
        tab_ledger_bullet_1: "Theft Protection: Closed cash transactions cannot be silently deleted or edited. Every action is logged.",
        tab_ledger_bullet_2: "STORNO Rule: Canceling expenses or voiding invoices is done by creating a compensating transaction.",
        tab_ledger_bullet_3: "Period Closing: Lock financial periods at month-end to prevent changes in cash registers and wages.",
        
        // Tab 4 Simulator
        sim_ledger_title: "Ledger Log (Append-only)",
        sim_ledger_profit_badge: "Net profit:",
        sim_ledger_col_op: "Transaction",
        sim_ledger_col_amount: "Amount",
        sim_ledger_col_desc: "Description",
        sim_ledger_col_action: "Action",
        sim_ledger_btn_storno: "Storno",
        sim_ledger_storno_voided: "Voided",
        sim_ledger_income_desc_1: "Revenue: Jobcard #1842 (BMW X5)",
        sim_ledger_expense_desc_1: "Purchase: Brembo brake discs",
        sim_ledger_expense_desc_2: "Salary: master Samir",
        sim_ledger_storno_prefix: "Storno: Compensation for",
        sim_ledger_form_title: "Create compensating entry",
        sim_ledger_form_income: "INCOME (Revenue)",
        sim_ledger_form_expense: "EXPENSE (Spend)",
        sim_ledger_placeholder_amount: "Amount (₼)",
        sim_ledger_placeholder_desc: "Reason",
        sim_ledger_btn_add: "Add to Ledger",
        sim_ledger_alert_invalid: "Please enter a valid amount and description.",
        
        // ROI Calculator Section
        roi_title: "Calculate the ROI of <span class=\"text-gradient\">CarsKeep</span>",
        roi_subtitle: "Find out how many hours of working time you will save and what additional profit your business will get after implementing our SaaS.",
        roi_label_bays: "Number of posts (bays):",
        roi_label_ticket: "Average repair ticket (₼):",
        roi_label_cars: "Cars per bay per day:",
        roi_result_title: "Your monthly benefit:",
        roi_metric_time: "Time saved:",
        roi_metric_prod: "Productivity increase:",
        roi_metric_payback: "Payback time:",
        roi_metric_payback_val: "from day 1",
        roi_hours_unit: "hours / mo",
        roi_disclaimer: "The calculation is based on average efficiency improvements of auto repair shops switching from Excel and WhatsApp groups to CarsKeep.",
        roi_btn_cta: "Connect with discount",
        
        // Testimonials
        test_title: "Success stories of our clients",
        test_subtitle: "Auto repair shop owners share their results after switching to CarsKeep.",
        test_1_text: "\"Before, coordinating estimates with clients took a lot of time — phone calls, explaining on fingers. With CarsKeep, we send estimates with interactive body inspection right to WhatsApp. The client clicks one button, and we start. Revenue grew by 25%!\"",
        test_1_name: "Elchin Aliyev",
        test_1_biz: "Owner of 'Baku Detailing & Protection', Baku",
        test_2_text: "\"Our cash drawer was always off, mechanics did tricks with hours, and parts were written off retroactively. Implementing append-only Ledger disciplined everyone. Entries can't be forged, and cancels are only via Storno. Trust in the business has grown 100%.\"",
        test_2_name: "Ilgar Mammadov",
        test_2_biz: "Director of 'Ganja Auto Service', Ganja",
        
        // Pricing
        price_title: "Simple and transparent pricing",
        price_subtitle: "Choose the plan that fits your business. Test all features free for 14 days.",
        price_toggle_monthly: "Monthly",
        price_toggle_yearly: "Annually",
        price_toggle_discount: "Save 20%",
        price_period_mo: "/ mo",
        
        // Starter Plan
        plan_starter_desc: "For small garages and individual mechanics",
        plan_starter_f1: "Up to 2 bays",
        plan_starter_f2: "Basic booking calendar",
        plan_starter_f3: "Jobcards and digital estimates",
        plan_starter_f4_no: "✖ Automated inventory tracking",
        plan_starter_f5_no: "✖ Official WhatsApp Meta API (WABA)",
        plan_starter_f6_no: "✖ Ledger and financial analytics",
        plan_starter_btn: "Start 14-day demo",
        
        // Pro Plan
        plan_pro_tag: "Popular",
        plan_pro_desc: "Perfect for full-scale auto repair and detailing shops",
        plan_pro_f1: "Up to 8 bays",
        plan_pro_f2: "Interactive Kanban & time tracking",
        plan_pro_f3: "Defect blueprint & body inspection",
        plan_pro_f4: "Auto inventory parts write-off",
        plan_pro_f5: "Official WhatsApp Meta API (WABA)",
        plan_pro_f6: "Ledger log & mechanic commission wages",
        plan_pro_btn: "Start 14-day demo",
        
        // Enterprise Plan
        plan_ent_desc: "For workshop chains and large detailing franchises",
        plan_ent_f1: "Unlimited bays",
        plan_ent_f2: "Multiple locations in a single Ledger space",
        plan_ent_f3: "1C and custom ERP integration via API",
        plan_ent_f4: "Dedicated manager for database migration",
        plan_ent_f5: "Priority 24/7 support",
        plan_ent_f6: "On-site staff training",
        plan_ent_btn: "Contact us",
        
        // FAQ
        faq_title: "Frequently Asked Questions",
        faq_subtitle: "We answer popular questions about implementation, security, and payment.",
        faq_q1: "How long does implementation take?",
        faq_a1: "Implementation takes no more than a couple of hours. You can import your client list and services from Excel in a few clicks. Our support team will help you configure employee profiles and get up and running for free.",
        faq_q2: "Can I work from a mobile phone?",
        faq_a2: "Yes! CarsKeep is fully optimized for smartphones and tablets. Mechanics can mark scratches on the 2D layout, take photos of damage, attach them to the jobcard, and send estimates for approval right by the car hood.",
        faq_q3: "What is the Ledger regulation in CarsKeep?",
        faq_a3: "In CarsKeep, all financial records are kept in an append-only Ledger. This means entries cannot be edited or deleted retroactively. If a mistake is made, a compensating entry (STORNO) is created. This protects owners from fraud and ensures a 100% accurate audit trail.",
        faq_q4: "Do I need to pay extra for WhatsApp integration?",
        faq_a4: "We support official Meta WhatsApp Business API (WABA) integration. Connecting a phone number takes up to 15 minutes. CarsKeep charges no hidden fees per message — you pay Meta directly at official rates (depending on client country, with the first 1000 conversations each month being free).",
        
        // CTA Banner
        cta_banner_title: "Ready to digitize your auto business?",
        cta_banner_desc: "Start your 14-day free trial. Setup takes 5 minutes. No credit card required.",
        cta_banner_btn: "Start for free",
        
        // Footer
        footer_desc: "Modern cloud solution for workshop automation of any scale.",
        footer_col_product: "Product",
        footer_col_resources: "Resources",
        footer_col_contacts: "Contacts",
        footer_resource_blog: "Auto shop business blog",
        footer_resource_kb: "Knowledge base",
        footer_resource_videos: "Video tutorials",
        footer_resource_reviews: "Client reviews",
        footer_contact_address: "142 Nizami Str., Baku",
        footer_copyright: "© 2026 CarsKeep. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Use"
    },
    ru: {
        // Meta
        meta_title: "CarsKeep — SaaS-платформа для управления автосервисами и детейлинг-центрами",
        meta_description: "Увеличьте выручку вашего автосервиса или детейлинг-центра на 30% с помощью CarsKeep. Цифровые сметы, умное планирование, учет запчастей и оплата в один клик.",
        meta_keywords: "управление автосервисом, софт для сто, автоматизация детейлинга, shopmonkey, tekmetric, crm для автосервиса, учет запчастей",
        meta_title_og: "CarsKeep — Умное управление автосервисом",
        
        // Navigation
        nav_features: "Возможности",
        nav_roi: "Расчет окупаемости",
        nav_pricing: "Тарифы",
        nav_faq: "FAQ",
        nav_login: "Войти",
        nav_cta: "Начать бесплатно",
        
        // Hero Section
        hero_badge: "⚡ Обновление 2.0: Интеграция с мессенджерами",
        hero_title: "Управляйте вашим автосервисом на <span class=\"text-gradient\">новом уровне</span>",
        hero_subtitle: "CarsKeep — это современная SaaS-платформа для автосервисов и детейлинг-студий. Сокращайте время на сметы, автоматизируйте склад и повышайте прибыль на 30%.",
        hero_cta_primary: "Начать бесплатно",
        hero_cta_secondary: "Узнать больше",
        hero_stat_revenue_num: "30%",
        hero_stat_revenue_lbl: "Рост выручки СТО",
        hero_stat_trial_num: "14 дней",
        hero_stat_trial_lbl: "Бесплатный период",
        hero_stat_time_num: "1.5 часа",
        hero_stat_time_lbl: "Экономии мастера ежедневно",
        
        // Dashboard Mockup
        mockup_search: "carskeep.io/dashboard",
        mockup_desktop: "Рабочий стол",
        mockup_user: "STO Admin",
        mockup_revenue: "Выручка за месяц",
        mockup_revenue_trend: "+12.4% от прош. месяца",
        mockup_orders: "Заказы в работе",
        mockup_orders_trend: "Загрузка боксов 85%",
        mockup_orders_val: "18 авто",
        mockup_ticket: "Средний чек",
        mockup_ticket_trend: "+4.2%",
        mockup_schedule: "Расписание и посты",
        mockup_queue: "Очередь (4)",
        mockup_service_audi: "ТО и замена масла",
        mockup_service_bmw: "Диагностика подвески",
        mockup_in_progress: "В ремонте (2)",
        mockup_service_tesla: "Шумоизоляция дверей",
        mockup_status_tesla: "В процессе 75%",
        mockup_ready: "Готово (3)",
        mockup_service_porsche: "Детейлинг и полировка",
        mockup_status_porsche: "Готов к выдаче",
        
        // Features Section Header
        features_title: "Все инструменты для <span class=\"text-gradient\">роста автобизнеса</span>",
        features_subtitle: "Забудьте про хаос в Excel и бумажные блокноты. Управляйте процессами с любого устройства.",
        
        // Tab buttons
        tab_kanban_btn: "📋 Kanban-доска и Статусы",
        tab_inspection_btn: "🚗 Кузовной Осмотр и Схемы",
        tab_crm_btn: "💬 WhatsApp CRM и Рассылки",
        tab_ledger_btn: "₼ Ledger-учет и Финансы",
        
        // Tab 1: Kanban Content
        tab_kanban_title: "Контролируйте каждый этап ремонта в реальном времени",
        tab_kanban_desc: "Интерактивная Kanban-доска CarsKeep отображает статус каждого заказа. Система автоматически считает время нахождения машины на каждом посту (хронометраж) для выявления простоев.",
        tab_kanban_bullet_1: "Хронометраж постов: Точное отслеживание времени в каждом статусе (Принято, В работе, Готово).",
        tab_kanban_bullet_2: "Автоматические триггеры: Переход в статус «Готово» автоматически готовит шаблон сообщения в WhatsApp для отправки клиенту.",
        tab_kanban_bullet_3: "Pusher WebSocket: Синхронизация изменений статусов между всеми экранами менеджеров и мастеров без перезагрузки страниц.",
        
        // Tab 1 Simulator
        sim_kanban_title: "Симулятор Kanban-доски",
        sim_kanban_badge: "Попробуйте кликнуть!",
        sim_kanban_col_waiting: "В очереди",
        sim_kanban_col_progress: "В ремонте",
        sim_kanban_col_ready: "Готово",
        sim_kanban_col_paid: "Оплачено",
        sim_kanban_card_service: "Полировка кузова + Керамика",
        sim_kanban_btn_start: "В работу",
        sim_kanban_btn_complete: "Завершить",
        sim_kanban_btn_pay: "Оплатить",
        
        // Tab 1 Trigger Popup
        sim_popup_title: "Автоматический WhatsApp триггер",
        sim_popup_desc: "Сработал системный триггер JOBCARD_READY. Отправить клиенту сервисное сообщение по Meta WABA шаблону?",
        sim_popup_template_title: "Шаблон: «Уведомление о готовности»",
        sim_popup_template_body: "«Уважаемый Самир! Ваш автомобиль BMW X5 (99-LN-777) успешно готов к выдаче. Стоимость обслуживания: 320.00 ₼. Ждем вас!»",
        sim_popup_btn_cancel: "Отклонить",
        sim_popup_btn_send: "Отправить WABA",
        sim_popup_status_dispatch: "⏳ Pusher dispatching event...",
        sim_popup_status_accepted: "⚡ Meta WhatsApp Cloud API accepted payload.",
        
        // Tab 2: Inspection Content
        tab_inspect_title: "Интерактивная разметка дефектов на схеме автомобиля",
        tab_inspect_desc: "Оцифруйте приемку автомобиля за минуту. Фиксируйте царапины, вмятины и сколы прямо на интерактивной 2D-схеме кузова. Клиент увидит все отметки и прикрепленные фото в своем личном статус-портале.",
        tab_inspect_bullet_1: "Осмотр в 1 клик: Нажимайте на детали кузова на схеме, чтобы мгновенно добавить дефект в чек-лист.",
        tab_inspect_bullet_2: "Прозрачность для клиента: Формируйте публичный статус-портал (Public Report Link) с фотофиксацией повреждений для защиты от спорных ситуаций.",
        tab_inspect_bullet_3: "Уверенное досогласование: Добавляйте фото дефектов к смете, отправляя клиенту в WhatsApp на согласование.",
        
        // Tab 2 Simulator
        sim_inspect_title: "Кузовной осмотр автомобиля",
        sim_inspect_btn_clear: "Очистить все",
        sim_inspect_defects_title: "Дефекты кузова",
        sim_inspect_hint: "Нажмите на схему слева для отметки повреждения",
        sim_inspect_report_generated: "Сгенерирован отчет:",
        sim_inspect_alert_msg: "Открывается публичный статус-портал клиента со схемой повреждений и фотографиями.",
        
        // Defect types
        defect_scratch: "Царапина",
        defect_chip: "Скол лака",
        defect_dent: "Вмятина кузова",
        defect_crack: "Трещина бампера",
        
        // Tab 3: CRM Content
        tab_crm_title: "Умный сборщик аудиторий и рассылки в WhatsApp",
        tab_crm_desc: "CarsKeep интегрирует официальный API WhatsApp Business. Запускайте массовые рассылки по сегментам базы (например: «все владельцы Mercedes с LTV > 1000 ₼, не приезжавшие 90 дней») без риска блокировки номера.",
        tab_crm_bullet_1: "Гибкий сегментатор: Объединяйте фильтры по LTV, дате последнего визита, марке автомобиля и тегам с помощью логики И/ИЛИ.",
        tab_crm_bullet_2: "Калькулятор рассылки: Система автоматически считает количество получателей и смету рассылки по официальным тарифам Meta (E.164) до запуска.",
        tab_crm_bullet_3: "Автоответчик: Автоматический ответ клиенту в нерабочее время с защитой от флуда (не чаще 1 раза в сутки).",
        
        // Tab 3 Simulator
        sim_crm_title: "Сборщик аудиторий",
        sim_crm_ltv: "LTV Клиента",
        sim_crm_days: "Дней без визита",
        sim_crm_brand: "Марка автомобиля",
        sim_crm_all_brands: "Все марки",
        sim_crm_found_count: "Найдено клиентов:",
        sim_crm_budget: "Бюджет Meta WABA:",
        sim_crm_phone_title: "Самир (BMW X5)",
        sim_crm_phone_status: "В сети",
        sim_crm_msg_received: "Привет! Что по поводу полировки фар?",
        sim_crm_waba_preview_title: "Шаблон WABA:",
        sim_crm_waba_preview_body: "Привет, Самир! Заметили, что ваш {brandName} не заезжал к нам уже {days} дней. Дарим вам скидку 10% на следующее ТО. Ваша выгода с CarsKeep!",
        sim_crm_waba_preview_vehicle: "автомобиль",
        
        // Tab 4: Ledger Content
        tab_ledger_title: "Двойная Ledger-бухгалтерия и аудит прибыли",
        tab_ledger_desc: "В основе финансового учета CarsKeep лежит регламент Ledger — append-only реестр неизменяемых финансовых проводок. Никаких «исправлений задним числом». Любые корректировки вносятся компенсирующими записями (STORNO) для полной аудиторской чистоты.",
        tab_ledger_bullet_1: "Защита от воровства: Невозможно молча удалить или изменить закрытую кассовую операцию. Каждый шаг логгируется.",
        tab_ledger_bullet_2: "Регламент STORNO: Отмена проведенных расходов или аннулирование смет выполняется созданием корректирующей компенсирующей проводки.",
        tab_ledger_bullet_3: "Закрытие периодов: Возможность закрывать финансовый период в конце месяца для блокировки изменений в кассах и зарплатах.",
        
        // Tab 4 Simulator
        sim_ledger_title: "Журнал Ledger (Append-only)",
        sim_ledger_profit_badge: "Чистая прибыль:",
        sim_ledger_col_op: "Операция",
        sim_ledger_col_amount: "Сумма",
        sim_ledger_col_desc: "Описание",
        sim_ledger_col_action: "Действие",
        sim_ledger_btn_storno: "Сторно",
        sim_ledger_storno_voided: "Аннулировано",
        sim_ledger_income_desc_1: "Выручка: Заказ-наряд #1842 (BMW X5)",
        sim_ledger_expense_desc_1: "Закупка: Тормозные диски Brembo",
        sim_ledger_expense_desc_2: "Зарплата: мастер Самир",
        sim_ledger_storno_prefix: "Сторно: Компенсация за",
        sim_ledger_form_title: "Создать корректирующую проводку",
        sim_ledger_form_income: "INCOME (Доход)",
        sim_ledger_form_expense: "EXPENSE (Расход)",
        sim_ledger_placeholder_amount: "Сумма (₼)",
        sim_ledger_placeholder_desc: "Обоснование",
        sim_ledger_btn_add: "Внести в Ledger",
        sim_ledger_alert_invalid: "Пожалуйста, введите корректную сумму и обоснование.",
        
        // ROI Calculator Section
        roi_title: "Рассчитайте окупаемость <span class=\"text-gradient\">CarsKeep</span>",
        roi_subtitle: "Узнайте, сколько часов рабочего времени вы сэкономите и какую дополнительную прибыль получит ваш бизнес после внедрения нашей SaaS-системы.",
        roi_label_bays: "Количество постов (боксов):",
        roi_label_ticket: "Средний чек одного ремонта (₼):",
        roi_label_cars: "Машин на post в день:",
        roi_result_title: "Ваша выгода в месяц:",
        roi_metric_time: "Сэкономлено времени:",
        roi_metric_prod: "Рост продуктивности:",
        roi_metric_payback: "Окупаемость CarsKeep:",
        roi_metric_payback_val: "с 1-го дня",
        roi_hours_unit: "ч / мес",
        roi_disclaimer: "Расчет основан на средней статистике повышения эффективности автосервисов после перехода с Excel и WhatsApp-групп на автоматизацию с CarsKeep.",
        roi_btn_cta: "Подключить со скидкой",
        
        // Testimonials
        test_title: "Истории успеха наших клиентов",
        test_subtitle: "Владельцы автосервисов делятся своими результатами перехода на CarsKeep.",
        test_1_text: "\"Раньше согласование смет с клиентами занимало кучу времени — звонки, объяснения на пальцах. С CarsKeep отправляем смету с интерактивным кузовным осмотром прямо в WhatsApp. Клиент жмет одну кнопку, и мы приступаем. Выручка выросла на 25%!\"",
        test_1_name: "Эльчин Алиев",
        test_1_biz: "Владелец «Baku Detailing & Protection», г. Баку",
        test_2_text: "\"Раньше касса постоянно расходилась, мастера мудрили с выработкой, а запчасти списывали задним числом. Внедрение append-only Ledger дисциплинировало всех. Записи не подделать, а отмена — только через Сторно. Доверие в бизнесе выросло на 100%.\"",
        test_2_name: "Ильгар Мамедов",
        test_2_biz: "Директор автотехцентра «Ganja Auto Service», г. Гянджа",
        
        // Pricing
        price_title: "Простые и прозрачные тарифы",
        price_subtitle: "Выберите план, подходящий вашему бизнесу. Тестируйте все функции бесплатно в течение 14 дней.",
        price_toggle_monthly: "Ежемесячно",
        price_toggle_yearly: "Ежегодно",
        price_toggle_discount: "-20%",
        price_period_mo: "/ мес",
        
        // Starter Plan
        plan_starter_desc: "Для небольших гаражей и начинающих мастеров",
        plan_starter_f1: "До 2-х постов (боксов)",
        plan_starter_f2: "Базовый календарь записей",
        plan_starter_f3: "Заказ-наряды и цифровые сметы",
        plan_starter_f4_no: "✖ Автоматический складской учет",
        plan_starter_f5_no: "✖ Официальный WhatsApp Meta API (WABA)",
        plan_starter_f6_no: "✖ Леджер и финансовая аналитика",
        plan_starter_btn: "Начать 14 дней демо",
        
        // Pro Plan
        plan_pro_tag: "Популярно",
        plan_pro_desc: "Идеально для полноценных автосервисов и детейлинг-центров",
        plan_pro_f1: "До 8-ми постов (боксов)",
        plan_pro_f2: "Интерактивный Kanban и хронометраж",
        plan_pro_f3: "Схема дефектов и кузовной осмотр",
        plan_pro_f4: "Автосписание запчастей со склада (ТМЦ)",
        plan_pro_f5: "Официальный WhatsApp Meta API (WABA)",
        plan_pro_f6: "Журнал Ledger, сдельная зарплата мастеров",
        plan_pro_btn: "Начать 14 дней демо",
        
        // Enterprise Plan
        plan_ent_desc: "Для сетей автосервисов и крупных детейлинг-франшиз",
        plan_ent_f1: "Безлимитное количество постов",
        plan_ent_f2: "Несколько филиалов в едином Ledger-пространстве",
        plan_ent_f3: "Интеграция 1С и кастомных ERP по API",
        plan_ent_f4: "Персональный менеджер по импорту баз",
        plan_ent_f5: "Приоритетная поддержка 24/7",
        plan_ent_f6: "Персональное обучение персонала СТО",
        plan_ent_btn: "Связаться с нами",
        
        // FAQ
        faq_title: "Часто задаваемые вопросы",
        faq_subtitle: "Отвечаем на популярные вопросы о внедрении, безопасности и оплате.",
        faq_q1: "Как долго занимает внедрение системы в автосервис?",
        faq_a1: "Внедрение занимает не более пары часов. Вы можете импортировать базу клиентов и список услуг из Excel за несколько кликов. Наша поддержка бесплатно поможет настроить профили ваших сотрудников и запустить систему.",
        faq_q2: "Можно ли работать с мобильного телефона?",
        faq_a2: "Да! CarsKeep полностью оптимизирован для работы на смартфонах и планшетах. Мастера могут отмечать царапины на 2D-схеме, фотографировать повреждения, прикреплять их к заказ-наряду и отправлять смету на согласование прямо у капота машины.",
        faq_q3: "Что такое Ledger-регламент финансового учета в CarsKeep?",
        faq_a3: "В CarsKeep все финансовые записи хранятся в append-only Леджере. Это значит, что записи нельзя отредактировать или удалить задним числом. Если допущена ошибка, создается корректирующая компенсирующая запись (STORNO). Это защищает собственника от мошенничества со стороны персонала и обеспечивает 100% точность финансового аудита.",
        faq_q4: "Нужно ли доплачивать за интеграцию с WhatsApp?",
        faq_a4: "Мы поддерживаем официальную интеграцию с Meta WhatsApp Business API (WABA). Настройка номера телефона занимает до 15 минут. CarsKeep не берет скрытых комиссий за сообщения — вы платите напрямую в Meta по официальным тарифам (в зависимости от страны получателя, при этом первые 1000 диалогов каждый месяц бесплатны).",
        
        // CTA Banner
        cta_banner_title: "Готовы перевести автосервис на цифру?",
        cta_banner_desc: "Начните бесплатный тестовый период 14 дней. Подключение занимает 5 минут. Кредитная карта не требуется.",
        cta_banner_btn: "Начать бесплатно",
        
        // Footer
        footer_desc: "Современное облачное решение для автоматизации автосервисов любого масштаба.",
        footer_col_product: "Продукт",
        footer_col_resources: "Ресурсы",
        footer_col_contacts: "Контакты",
        footer_resource_blog: "Блог о бизнесе СТО",
        footer_resource_kb: "База знаний",
        footer_resource_videos: "Видео-уроки по настройке",
        footer_resource_reviews: "Отзывы клиентов",
        footer_contact_address: "г. Баку, ул. Низами, д. 142",
        footer_copyright: "© 2026 CarsKeep. Все права защищены.",
        footer_privacy: "Политика конфиденциальности",
        footer_terms: "Условия использования"
    },
    az: {
        // Meta
        meta_title: "CarsKeep — Avtoservislər və detallı təmizləmə mərkəzləri üçün SaaS platforması",
        meta_description: "CarsKeep ilə avtoservisinizin və ya detallı təmizləmə mərkəzinizin gəlirini 30% artırın. Rəqəmsal smetalar, ağıllı planlaşdırma, ehtiyat hissələrinin uçotu və bir kliklə ödəniş.",
        meta_keywords: "avtoservisin idarə edilməsi, servis üçün proqram, deteylinq avtomatlaşdırılması, shopmonkey, tekmetric, avtoservis crm, ehtiyat hissələri uçotu",
        meta_title_og: "CarsKeep — Ağıllı avtoservis idarəetməsi",
        
        // Navigation
        nav_features: "İmkanlar",
        nav_roi: "Gəlirlilik hesablama",
        nav_pricing: "Tariflər",
        nav_faq: "FAQ",
        nav_login: "Daxil ol",
        nav_cta: "Ödənişsiz başla",
        
        // Hero Section
        hero_badge: "⚡ Yenilik 2.0: Messencer inteqrasiyası",
        hero_title: "Avtoservisinizə <span class=\"text-gradient\">yeni səviyyədə</span> rəhbərlik edin",
        hero_subtitle: "CarsKeep — avtoservislər və deteylinq studiyaları üçün müasir SaaS platformasıdır. Smetaya vaxta qənaət edin, anbarı avtomatlaşdırın və mənfəəti 30% artırın.",
        hero_cta_primary: "Ödənişsiz başla",
        hero_cta_secondary: "Ətraflı öyrən",
        hero_stat_revenue_num: "30%",
        hero_stat_revenue_lbl: "Servis gəlirinin artımı",
        hero_stat_trial_num: "14 gün",
        hero_stat_trial_lbl: "Sınaq müddəti",
        hero_stat_time_num: "1.5 saat",
        hero_stat_time_lbl: "Ustanın gündəlik qənaət etdiyi vaxt",
        
        // Dashboard Mockup
        mockup_search: "carskeep.io/dashboard",
        mockup_desktop: "İdarə paneli",
        mockup_user: "STO Admin",
        mockup_revenue: "Aylıq gəlir",
        mockup_revenue_trend: "Ötən aydan +12.4%",
        mockup_orders: "Aktiv sifarişlər",
        mockup_orders_trend: "Boks yüklənməsi 85%",
        mockup_orders_val: "18 avto",
        mockup_ticket: "Orta çek",
        mockup_ticket_trend: "+4.2%",
        mockup_schedule: "Cədvəl və postlar",
        mockup_queue: "Növbə (4)",
        mockup_service_audi: "Texniki baxış və yağ dəyişmə",
        mockup_service_bmw: "Asqı sisteminin diaqnostikası",
        mockup_in_progress: "Təmirdə (2)",
        mockup_service_tesla: "Qapıların səs izolyasiyası",
        mockup_status_tesla: "Prosesdə 75%",
        mockup_ready: "Hazırdır (3)",
        mockup_service_porsche: "Deteylinq və cilalama",
        mockup_status_porsche: "Təhvil verilməyə hazır",
        
        // Features Section Header
        features_title: "Avtobiznesin <span class=\"text-gradient\">inkişafı üçün</span> bütün alətlər",
        features_subtitle: "Excel xaosunu və kağız dəftərləri unudun. Prosesləri istənilən cihazdan idarə edin.",
        
        // Tab buttons
        tab_kanban_btn: "📋 Kanban Lövhəsi və Statuslar",
        tab_inspection_btn: "🚗 Kuzov Baxışı və Sxemlər",
        tab_crm_btn: "💬 WhatsApp CRM və Kampaniyalar",
        tab_ledger_btn: "₼ Ledger uçotu və Maliyyə",
        
        // Tab 1: Kanban Content
        tab_kanban_title: "Təmirin hər mərhələsinə real vaxtda nəzarət edin",
        tab_kanban_desc: "CarsKeep interaktiv Kanban lövhəsi hər bir sifarişin statusunu göstərir. Sistem boş dayanmaları müəyyən etmək üçün avtomatik olaraq avtomobilin hər postda qaldığı vaxtı hesablayır.",
        tab_kanban_bullet_1: "Postların xronometrajı: Hər statusda (Qəbul edilib, Təmirdə, Hazırdır) vaxtın dəqiq izlənilməsi.",
        tab_kanban_bullet_2: "Avtomatik triqqerlər: «Hazırdır» statusuna keçid avtomatik olaraq müştəriyə WhatsApp mesaj şablonu hazırlayır.",
        tab_kanban_bullet_3: "Pusher WebSocket: Səhifəni yeniləmədən menecerlər və ustaların bütün ekranları arasında statusların sinxronizasiyası.",
        
        // Tab 1 Simulator
        sim_kanban_title: "Kanban Lövhəsi Simulyatoru",
        sim_kanban_badge: "Klikləməyə çalışın!",
        sim_kanban_col_waiting: "Növbədə",
        sim_kanban_col_progress: "Təmirdə",
        sim_kanban_col_ready: "Hazırdır",
        sim_kanban_col_paid: "Ödənilib",
        sim_kanban_card_service: "Kuzov cilalanması + Keramika",
        sim_kanban_btn_start: "Təmirə başla",
        sim_kanban_btn_complete: "Tamamla",
        sim_kanban_btn_pay: "Ödəniş et",
        
        // Tab 1 Trigger Popup
        sim_popup_title: "Avtomatik WhatsApp triqqeri",
        sim_popup_desc: "Sistem JOBCARD_READY triqqeri işə düşdü. Müştəriyə Meta WABA şablonu ilə servis mesajı göndərilsin?",
        sim_popup_template_title: "Şablon: «Hazır olma bildirişi»",
        sim_popup_template_body: "«Hörmətli Samir! Avtomobiliniz BMW X5 (99-LN-777) uğurla hazırdır. Xidmət haqqı: 320.00 ₼. Sizi gözləyirik!»",
        sim_popup_btn_cancel: "İmtina et",
        sim_popup_btn_send: "WABA Göndər",
        sim_popup_status_dispatch: "⏳ Pusher dispatching event...",
        sim_popup_status_accepted: "⚡ Meta WhatsApp Cloud API accepted payload.",
        
        // Tab 2: Inspection Content
        tab_inspect_title: "Avtomobil sxemi üzərində qüsurların interaktiv qeyd edilməsi",
        tab_inspect_desc: "Avtomobil qəbulunu bir dəqiqəyə rəqəmsallaşdırın. Cızıqları, əzikləri interaktiv 2D kuzov sxemində birbaşa qeyd edin. Müştəri bütün qeydləri və fotoşəkilləri öz şəxsi status portalında görəcək.",
        tab_inspect_bullet_1: "1 kliklə baxış: Qüsuru yoxlama siyahısına dərhal əlavə etmək üçün sxemdə kuzov hissələrinə klikləyin.",
        tab_inspect_bullet_2: "Müştəri üçün şəffaflıq: Mübahisəli vəziyyətlərdən qorunmaq üçün zədələrin fotoşəkili ilə ictimai status portalı (Public Report Link) yaradın.",
        tab_inspect_bullet_3: "Güvənli razılaşdırma: Smetaya qüsurların fotolarını əlavə edərək müştəriyə WhatsApp vasitəsilə təsdiqləməyə göndərin.",
        
        // Tab 2 Simulator
        sim_inspect_title: "Avtomobilin kuzov baxışı",
        sim_inspect_btn_clear: "Hamısını təmizlə",
        sim_inspect_defects_title: "Kuzov qüsurları",
        sim_inspect_hint: "Zədəni qeyd etmək üçün soldakı sxemə klikləyin",
        sim_inspect_report_generated: "Hesabat yaradıldı:",
        sim_inspect_alert_msg: "Müştərinin zədə sxemi və fotoları olan ictimai status portalı açılır.",
        
        // Defect types
        defect_scratch: "Cızıq",
        defect_chip: "Lakin qopması",
        defect_dent: "Kuzov əziyi",
        defect_crack: "Bamper çatlaması",
        
        // Tab 3: CRM Content
        tab_crm_title: "WhatsApp-da ağıllı auditoriya toplayıcısı və yayımlar",
        tab_crm_desc: "CarsKeep rəsmi WhatsApp Business API-ni inteqrasiya edir. Nömrənin bloklanması riski olmadan baza seqmentlərinə kütləvi yayımlar göndərin (məsələn: «son 90 gündə gəlməyən, LTV > 1000 ₼ olan bütün Mercedes sahibləri»).",
        tab_crm_bullet_1: "Çevik seqmentator: LTV, son vizit tarixi, avtomobil markası və teqlər üzrə filtrləri VƏ/VƏ YA məntiqi ilə birləşdirin.",
        tab_crm_bullet_2: "Yayım kalkulyatoru: Sistem işə salınmazdan əvvəl qəbul edənlərin sayını və rəsmi Meta (E.164) tariflərinə əsasən yayım smetasını avtomatik hesablayır.",
        tab_crm_bullet_3: "Avtomatik cavablandırıcı: Spamdan qorunma ilə iş vaxtından kənar müştəriyə avtomatik cavab (gündə 1 dəfədən çox olmamaqla).",
        
        // Tab 3 Simulator
        sim_crm_title: "Auditoriya toplayıcısı",
        sim_crm_ltv: "Müştəri LTV",
        sim_crm_days: "Səfərsiz günlər",
        sim_crm_brand: "Avtomobil markası",
        sim_crm_all_brands: "Bütün markalar",
        sim_crm_found_count: "Tapılan müştərilər:",
        sim_crm_budget: "Meta WABA büdcəsi:",
        sim_crm_phone_title: "Samir (BMW X5)",
        sim_crm_phone_status: "Onlayn",
        sim_crm_msg_received: "Salam! Fara cilalanması barədə nə yenilik var?",
        sim_crm_waba_preview_title: "WABA Şablonu:",
        sim_crm_waba_preview_body: "Salam Samir! Avtomobilinizin artıq {days} gündür bizə gəlmədiyini gördük. Növbəti texniki baxışa 10% endirim təqdim edirik. CarsKeep ilə qazancınız!",
        sim_crm_waba_preview_vehicle: "avtomobilinizin",
        
        // Tab 4: Ledger Content
        tab_ledger_title: "İkiqat Ledger mühasibatlığı və mənfəət auditi",
        tab_ledger_desc: "CarsKeep maliyyə uçotunun əsasında Ledger prinsipləri durur — dəyişdirilməz maliyyə qeydlərinin append-only reyestri. Heç bir «keçmiş tarixli düzəlişlər» yoxdur. İstənilən düzəlişlər tam audit təmizliyi üçün kompensasiya qeydləri (STORNO) ilə daxil edilir.",
        tab_ledger_bullet_1: "Oğurluqdan müdafiə: Bağlanmış kassa əməliyyatını səssizcə silmək və ya dəyişdirmək qeyri-mümkündür. Hər addım qeydə alınır.",
        tab_ledger_bullet_2: "STORNO qaydası: Həyata keçirilmiş xərclərin ləğvi kompensasiyaedici əməliyyatın yaradılması ilə yerinə yetirilir.",
        tab_ledger_bullet_3: "Dövrlərin bağlanması: Kassalarda və maaşlarda dəyişiklikləri bloklamaq üçün ayın sonunda maliyyə dövrünü bağlamaq imkanı.",
        
        // Tab 4 Simulator
        sim_ledger_title: "Ledger Reyestri (Append-only)",
        sim_ledger_profit_badge: "Xalis mənfəət:",
        sim_ledger_col_op: "Əməliyyat",
        sim_ledger_col_amount: "Məbləğ",
        sim_ledger_col_desc: "Təsvir",
        sim_ledger_col_action: "Fəaliyyət",
        sim_ledger_btn_storno: "Storno",
        sim_ledger_storno_voided: "Ləğv edilib",
        sim_ledger_income_desc_1: "Mədaxil: Sifariş vərəqəsi #1842 (BMW X5)",
        sim_ledger_expense_desc_1: "Satınalma: Brembo əyləc diskləri",
        sim_ledger_expense_desc_2: "Maaş: Samir usta",
        sim_ledger_storno_prefix: "Storno: Kompensasiya",
        sim_ledger_form_title: "Kompensasiya qeydi yarat",
        sim_ledger_form_income: "INCOME (Gəlir)",
        sim_ledger_form_expense: "EXPENSE (Xərc)",
        sim_ledger_placeholder_amount: "Məbləğ (₼)",
        sim_ledger_placeholder_desc: "Əsaslandırma",
        sim_ledger_btn_add: "Ledger-ə daxil et",
        sim_ledger_alert_invalid: "Zəhmət olmasa düzgün məbləğ və təsvir daxil edin.",
        
        // ROI Calculator Section
        roi_title: "CarsKeep <span class=\"text-gradient\">gəlirliliyini hesablayın</span>",
        roi_subtitle: "SaaS sistemimizi tətbiq etdikdən sonra nə qədər iş vaxtına qənaət edəcəyinizi və biznesinizin nə qədər əlavə mənfəət əldə edəcəyini öyrənin.",
        roi_label_bays: "Postların (boksların) sayı:",
        roi_label_ticket: "Bir təmirin orta çeki (₼):",
        roi_label_cars: "Gündəlik post üzrə avtomobil:",
        roi_result_title: "Aylıq qazancınız:",
        roi_metric_time: "Qənaət edilən vaxt:",
        roi_metric_prod: "Məhsuldarlığın artımı:",
        roi_metric_payback: "CarsKeep-in geri ödənişi:",
        roi_metric_payback_val: "1-ci gündən",
        roi_hours_unit: "saat / ay",
        roi_disclaimer: "Hesablama, Excel və WhatsApp qruplarından CarsKeep avtomatlaşdırılmasına keçdikdən sonra avtoservislərin səmərəliliyinin artması üzrə orta statistikaya əsaslanır.",
        roi_btn_cta: "Endirimlə qoşul",
        
        // Testimonials
        test_title: "Müştərilərimizin uğur hekayələri",
        test_subtitle: "Avtoservis sahibləri CarsKeep platformasına keçdikdən sonra əldə etdikləri nəticələri bölüşürlər.",
        test_1_text: "\"Əvvəllər smetaların müştərilərlə razılaşdırılması çox vaxt aparırdı — zənglər, izah etməyə çalışmaq. CarsKeep ilə smetanı WhatsApp vasitəsilə göndəririk. Müştəri bir düyməyə basır və biz işə başlayırıq. Gəlirimiz 25% artdı!\"",
        test_1_name: "Elçin Əliyev",
        test_1_biz: "«Baku Detailing & Protection»-ın sahibi, Bakı ş.",
        test_2_text: "\"Kassa hər zaman fərqli çıxırdı, ustalar iş saatlarında hiylə edirdi, hissələr isə keçmiş tarixlə silinirdi. Ledger sisteminin tətbiqi hamını nizam-intizama saldı. Qeydləri saxtalaşdırmaq olmur, ləğv isə yalnız Storno ilə mümkündür. Biznesdə inam 100% artdı.\"",
        test_2_name: "İlgar Məmmədov",
        test_2_biz: "«Ganja Auto Service»-in direktoru, Gəncə ş.",
        
        // Pricing
        price_title: "Sadə və şəffaf tariflər",
        price_subtitle: "Biznesinizə uyğun planı seçin. 14 gün ərzində bütün funksiyaları pulsuz sınaqdan keçirin.",
        price_toggle_monthly: "Aylıq",
        price_toggle_yearly: "İllik",
        price_toggle_discount: "-20%",
        price_period_mo: "/ ay",
        
        // Starter Plan
        plan_starter_desc: "Kiçik qarajlar və fərdi ustalar üçün",
        plan_starter_f1: "2 posta (boksa) qədər",
        plan_starter_f2: "Baza sifariş təqvimi",
        plan_starter_f3: "Sifariş vərəqələri və rəqəmsal smetalar",
        plan_starter_f4_no: "✖ Avtomatlaşdırılmış anbar uçotu",
        plan_starter_f5_no: "✖ Rəsmi WhatsApp Meta API (WABA)",
        plan_starter_f6_no: "✖ Ledger və maliyyə analitikası",
        plan_starter_btn: "14 günlük sınağa başla",
        
        // Pro Plan
        plan_pro_tag: "Məşhur",
        plan_pro_desc: "Tam miqyaslı avtoservislər və deteylinq mərkəzləri üçün ideal",
        plan_pro_f1: "8 posta (boksa) qədər",
        plan_pro_f2: "İnteraktiv Kanban və xronometraj",
        plan_pro_f3: "Qüsurların sxemi və kuzov baxışı",
        plan_pro_f4: "Hissələrin anbardan avtomatik silinməsi",
        plan_pro_f5: "Rəsmi WhatsApp Meta API (WABA)",
        plan_pro_f6: "Ledger reyestri, ustaların faiz maaşları",
        plan_pro_btn: "14 günlük sınağa başla",
        
        // Enterprise Plan
        plan_ent_desc: "Servis şəbəkələri və böyük deteylinq frənşizaları üçün",
        plan_ent_f1: "Limitsiz sayda postlar",
        plan_ent_f2: "Vahid Ledger məkanında bir neçə filial",
        plan_ent_f3: "API vasitəsilə 1C və fərdi ERP inteqrasiyası",
        plan_ent_f4: "Bazaların köçürülməsi üzrə xüsusi menecer",
        plan_ent_f5: "Prioritet 24/7 dəstək",
        plan_ent_f6: "СТО personalı üçün xüsusi təlimlər",
        plan_ent_btn: "Bizimlə əlaqə",
        
        // FAQ
        faq_title: "Tez-tez verilən suallar",
        faq_subtitle: "Tətbiq, təhlükəsizlik və ödəniş haqqında populyar suallara cavab veririk.",
        faq_q1: "Sistemin tətbiqi nə qədər vaxt aparır?",
        faq_a1: "Tətbiq bir neçə saatdan çox çəkmir. Excel-dən müştəri bazasını və xidmətlər siyahısını bir neçə kliklə idxal edə bilərsiniz. Dəstək komandamız əməkdaşlarınızın profillərini pulsuz olaraq qurmağa kömək edəcək.",
        faq_q2: "Mobil telefondan işləmək mümkündürmü?",
        faq_a2: "Bəli! CarsKeep smartfonlar və planşetlər üçün tam optimallaşdırılmışdır. Ustalar 2D sxemdə cızıqları qeyd edə, fotoşəkillər çəkə, onları sifarişə əlavə edə və smetanı təsdiqləmək üçün müştəriyə birbaşa göndərə bilərlər.",
        faq_q3: "CarsKeep-də maliyyə uçotunun Ledger reqlamenti nədir?",
        faq_a3: "CarsKeep-də bütün maliyyə qeydləri append-only Ledger-də saxlanılır. Bu o deməkdir ki, qeydlər keçmiş tarixlə redaktə edilə və ya silinə bilməz. Səhv olarsa, kompensasiyaedici qeyd (STORNO) yaradılır. Bu, sahibkarı saxtakarlıqdan qoruyur və 100% dəqiq maliyyə auditi təmin edir.",
        faq_q4: "WhatsApp inteqrasiyası üçün əlavə ödəniş lazımdır?",
        faq_a4: "Rəsmi Meta WhatsApp Business API (WABA) inteqrasiyasını dəstəkləyirik. Nömrənin qurulması 15 dəqiqəyə qədər çəkir. CarsKeep mesajlar üçün gizli komissiya tutmur — siz birbaşa Meta-ya rəsmi tariflərlə ödəyirsiniz (hər ay ilk 1000 dialoq pulsuzdur).",
        
        // CTA Banner
        cta_banner_title: "Avtoservisi rəqəmsallaşdırmağa hazırsınız?",
        cta_banner_desc: "14 günlük pulsuz sınaq müddətinə başlayın. Quraşdırma 5 dəqiqə çəkir. Kredit kartı tələb olunmur.",
        cta_banner_btn: "Ödənişsiz başla",
        
        // Footer
        footer_desc: "Hər miqyasda servis avtomatlaşdırılması üçün müasir bulud həlli.",
        footer_col_product: "Məhsul",
        footer_col_resources: "Resurslar",
        footer_col_contacts: "Əlaqə",
        footer_resource_blog: "Servis biznesi haqqında bloq",
        footer_resource_kb: "Bilik bazası",
        footer_resource_videos: "Quraşdırma üzrə video dərslər",
        footer_resource_reviews: "Müştəri rəyləri",
        footer_contact_address: "Bakı ş., Nizami küç., ev 142",
        footer_copyright: "© 2026 CarsKeep. Bütün hüquqlar qorunur.",
        footer_privacy: "Məxfilik siyasəti",
        footer_terms: "İstifadə şərtləri"
    }
};

window.translations = translations;
