import { useState } from 'react';

type Zone = 'AB' | 'BC' | 'ABC';
type TicketType = 'single' | 'day' | 'week' | 'month';
type Language = 'en' | 'de' | 'fr' | 'ru' | 'tr';
type Page = 'language' | 'zone' | 'purchase';

const prices = {
  single: { AB: 3.20, BC: 3.50, ABC: 4.00 },
  day: { AB: 8.80, BC: 9.20, ABC: 10.00 },
  week: { AB: 36.00, BC: 37.50, ABC: 43.00 },
  month: { AB: 86.00, BC: 91.00, ABC: 107.00 }
};

const translations = {
  en: {
    selectLanguage: 'Select Language',
    languageSubtitle: 'Sprache wählen • Choisir la langue',
    welcomeTitle: 'Welcome to BVG Ticket Machine',
    welcomeText: 'Please select your preferred language to continue.',
    selectZone: 'Select Your Fare Zone',
    selectZoneSubtitle: 'Choose the zone for your journey',
    zoneAB: 'Zone AB',
    zoneBC: 'Zone BC',
    zoneABC: 'Zone ABC',
    zoneCityCenter: 'Berlin City Center',
    zoneSurroundings: 'Berlin Surroundings',
    zoneComplete: 'Complete Area',
    zoneABDesc: 'Within Berlin city limits including S-Bahn Ring',
    zoneBCDesc: 'From city limits to Brandenburg region',
    zoneABCDesc: 'All Berlin zones including Potsdam & surrounding areas',
    noteTitle: 'Note:',
    noteText: 'Zone A covers the city center (S-Bahn Ring), Zone B extends to Berlin city limits, and Zone C includes surrounding Brandenburg areas.',
    selectTicket: 'Select Ticket Type',
    selectTicketSubtitle: 'Choose your ticket duration',
    singleTicket: 'Single Ticket',
    dayPass: 'Day Pass',
    weekPass: '7-Day Pass',
    monthPass: 'Monthly Pass',
    singleDesc: 'Valid for 2 hours, one direction',
    dayDesc: 'Valid until 3 AM next day',
    weekDesc: 'Valid for 7 consecutive days',
    monthDesc: 'Valid for 30 days from purchase',
    tipTitle: 'Tip:',
    tipText: 'Day Pass is best value for 3+ trips per day!',
    paymentMethod: 'Payment Method',
    paymentSubtitle: 'Select how you want to pay',
    cardPayment: 'Card Payment',
    cashPayment: 'Cash Payment',
    cardDesc: 'Credit/Debit/EC-Card',
    cashDesc: 'Bills and coins',
    totalAmount: 'Total Amount',
    ticket: 'Ticket:',
    zone: 'Zone:',
    completePurchase: 'Complete Purchase',
    selectTicketPrompt: 'Select a ticket type',
    selectPaymentPrompt: 'Select payment method',
    back: 'Back',
    continue: 'Continue',
    purchaseSuccess: 'Ticket purchased successfully! Thank you for using BVG.',
    insertCash: 'Insert Cash',
    inserted: 'Inserted',
    remaining: 'Remaining',
    insertCoinsOrBills: 'Insert coins or bills below',
    processingPayment: 'Processing payment...',
    tapCard: 'Please tap your card on the reader'
  },
  de: {
    selectLanguage: 'Sprache wählen',
    languageSubtitle: 'Select Language • Choisir la langue',
    welcomeTitle: 'Willkommen am BVG Fahrkartenautomaten',
    welcomeText: 'Bitte wählen Sie Ihre bevorzugte Sprache, um fortzufahren.',
    selectZone: 'Wählen Sie Ihre Tarifzone',
    selectZoneSubtitle: 'Wählen Sie die Zone für Ihre Fahrt',
    zoneAB: 'Zone AB',
    zoneBC: 'Zone BC',
    zoneABC: 'Zone ABC',
    zoneCityCenter: 'Berliner Stadtzentrum',
    zoneSurroundings: 'Berliner Umgebung',
    zoneComplete: 'Gesamtbereich',
    zoneABDesc: 'Innerhalb der Berliner Stadtgrenzen einschließlich S-Bahn-Ring',
    zoneBCDesc: 'Von der Stadtgrenze bis zur Brandenburg-Region',
    zoneABCDesc: 'Alle Berliner Zonen einschließlich Potsdam und Umgebung',
    noteTitle: 'Hinweis:',
    noteText: 'Zone A umfasst das Stadtzentrum (S-Bahn-Ring), Zone B erstreckt sich bis zur Berliner Stadtgrenze, Zone C umfasst die umliegenden Brandenburger Gebiete.',
    selectTicket: 'Fahrkartentyp wählen',
    selectTicketSubtitle: 'Wählen Sie Ihre Fahrtkartendauer',
    singleTicket: 'Einzelfahrschein',
    dayPass: 'Tageskarte',
    weekPass: '7-Tage-Karte',
    monthPass: 'Monatskarte',
    singleDesc: 'Gültig für 2 Stunden, eine Richtung',
    dayDesc: 'Gültig bis 3 Uhr morgens am nächsten Tag',
    weekDesc: 'Gültig für 7 aufeinanderfolgende Tage',
    monthDesc: 'Gültig für 30 Tage ab Kauf',
    tipTitle: 'Tipp:',
    tipText: 'Tageskarte ist das beste Preis-Leistungs-Verhältnis für 3+ Fahrten pro Tag!',
    paymentMethod: 'Zahlungsmethode',
    paymentSubtitle: 'Wählen Sie, wie Sie bezahlen möchten',
    cardPayment: 'Kartenzahlung',
    cashPayment: 'Barzahlung',
    cardDesc: 'Kredit-/Debitkarte/EC-Karte',
    cashDesc: 'Scheine und Münzen',
    totalAmount: 'Gesamtbetrag',
    ticket: 'Fahrkarte:',
    zone: 'Zone:',
    completePurchase: 'Kauf abschließen',
    selectTicketPrompt: 'Wählen Sie einen Fahrkartentyp',
    selectPaymentPrompt: 'Zahlungsmethode wählen',
    back: 'Zurück',
    continue: 'Weiter',
    purchaseSuccess: 'Fahrkarte erfolgreich gekauft! Vielen Dank, dass Sie die BVG nutzen.',
    insertCash: 'Bargeld einwerfen',
    inserted: 'Eingeworfen',
    remaining: 'Verbleibend',
    insertCoinsOrBills: 'Münzen oder Scheine unten einwerfen',
    processingPayment: 'Zahlung wird verarbeitet...',
    tapCard: 'Bitte halten Sie Ihre Karte an das Lesegerät'
  },
  fr: {
    selectLanguage: 'Choisir la langue',
    languageSubtitle: 'Select Language • Sprache wählen',
    welcomeTitle: 'Bienvenue au distributeur de billets BVG',
    welcomeText: 'Veuillez sélectionner votre langue préférée pour continuer.',
    selectZone: 'Sélectionnez votre zone tarifaire',
    selectZoneSubtitle: 'Choisissez la zone pour votre voyage',
    zoneAB: 'Zone AB',
    zoneBC: 'Zone BC',
    zoneABC: 'Zone ABC',
    zoneCityCenter: 'Centre-ville de Berlin',
    zoneSurroundings: 'Environs de Berlin',
    zoneComplete: 'Zone complète',
    zoneABDesc: 'Dans les limites de la ville de Berlin, y compris le Ring S-Bahn',
    zoneBCDesc: 'Des limites de la ville à la région de Brandebourg',
    zoneABCDesc: 'Toutes les zones de Berlin, y compris Potsdam et les environs',
    noteTitle: 'Remarque:',
    noteText: 'La zone A couvre le centre-ville (Ring S-Bahn), la zone B s\'étend jusqu\'aux limites de Berlin, la zone C comprend les zones environnantes du Brandebourg.',
    selectTicket: 'Sélectionner le type de billet',
    selectTicketSubtitle: 'Choisissez la durée de votre billet',
    singleTicket: 'Billet simple',
    dayPass: 'Pass journalier',
    weekPass: 'Pass 7 jours',
    monthPass: 'Pass mensuel',
    singleDesc: 'Valable 2 heures, une direction',
    dayDesc: 'Valable jusqu\'à 3h du matin le lendemain',
    weekDesc: 'Valable 7 jours consécutifs',
    monthDesc: 'Valable 30 jours à partir de l\'achat',
    tipTitle: 'Conseil:',
    tipText: 'Le pass journalier est le meilleur rapport qualité-prix pour 3+ trajets par jour!',
    paymentMethod: 'Mode de paiement',
    paymentSubtitle: 'Sélectionnez comment vous souhaitez payer',
    cardPayment: 'Paiement par carte',
    cashPayment: 'Paiement en espèces',
    cardDesc: 'Crédit/Débit/Carte EC',
    cashDesc: 'Billets et pièces',
    totalAmount: 'Montant total',
    ticket: 'Billet:',
    zone: 'Zone:',
    completePurchase: 'Finaliser l\'achat',
    selectTicketPrompt: 'Sélectionner un type de billet',
    selectPaymentPrompt: 'Sélectionner le mode de paiement',
    back: 'Retour',
    continue: 'Continuer',
    purchaseSuccess: 'Billet acheté avec succès! Merci d\'utiliser BVG.',
    insertCash: 'Insérer de l\'argent',
    inserted: 'Inséré',
    remaining: 'Restant',
    insertCoinsOrBills: 'Insérer des pièces ou des billets ci-dessous',
    processingPayment: 'Traitement du paiement...',
    tapCard: 'Veuillez approcher votre carte du lecteur'
  },
  ru: {
    selectLanguage: 'Выберите язык',
    languageSubtitle: 'Select Language • Sprache wählen',
    welcomeTitle: 'Добро пожаловать в билетный автомат BVG',
    welcomeText: 'Пожалуйста, выберите предпочитаемый язык для продолжения.',
    selectZone: 'Выберите тарифную зону',
    selectZoneSubtitle: 'Выберите зону для вашей поездки',
    zoneAB: 'Зона AB',
    zoneBC: 'Зона BC',
    zoneABC: 'Зона ABC',
    zoneCityCenter: 'Центр Берлина',
    zoneSurroundings: 'Окрестности Берлина',
    zoneComplete: 'Полная зона',
    zoneABDesc: 'В пределах города Берлин, включая кольцо S-Bahn',
    zoneBCDesc: 'От городских границ до региона Бранденбург',
    zoneABCDesc: 'Все зоны Берлина, включая Потсдам и окрестности',
    noteTitle: 'Примечание:',
    noteText: 'Зона A охватывает центр города (кольцо S-Bahn), зона B простирается до границ Берлина, зона C включает окружающие районы Бранденбурга.',
    selectTicket: 'Выберите тип билета',
    selectTicketSubtitle: 'Выберите продолжительность билета',
    singleTicket: 'Разовый билет',
    dayPass: 'Дневной билет',
    weekPass: '7-дневный билет',
    monthPass: 'Месячный билет',
    singleDesc: 'Действителен 2 часа, одно направление',
    dayDesc: 'Действителен до 3 часов утра следующего дня',
    weekDesc: 'Действителен 7 дней подряд',
    monthDesc: 'Действителен 30 дней с момента покупки',
    tipTitle: 'Совет:',
    tipText: 'Дневной билет - лучший вариант для 3+ поездок в день!',
    paymentMethod: 'Способ оплаты',
    paymentSubtitle: 'Выберите способ оплаты',
    cardPayment: 'Оплата картой',
    cashPayment: 'Оплата наличными',
    cardDesc: 'Кредитная/Дебетовая/EC-карта',
    cashDesc: 'Купюры и монеты',
    totalAmount: 'Общая сумма',
    ticket: 'Билет:',
    zone: 'Зона:',
    completePurchase: 'Завершить покупку',
    selectTicketPrompt: 'Выберите тип билета',
    selectPaymentPrompt: 'Выберите способ оплаты',
    back: 'Назад',
    continue: 'Продолжить',
    purchaseSuccess: 'Билет успешно куплен! Спасибо за использование BVG.',
    insertCash: 'Внесите наличные',
    inserted: 'Внесено',
    remaining: 'Осталось',
    insertCoinsOrBills: 'Внесите монеты или купюры ниже',
    processingPayment: 'Обработка платежа...',
    tapCard: 'Пожалуйста, приложите карту к считывателю'
  },
  tr: {
    selectLanguage: 'Dil Seçin',
    languageSubtitle: 'Select Language • Sprache wählen',
    welcomeTitle: 'BVG Bilet Otomatına Hoş Geldiniz',
    welcomeText: 'Devam etmek için lütfen tercih ettiğiniz dili seçin.',
    selectZone: 'Tarife Bölgenizi Seçin',
    selectZoneSubtitle: 'Yolculuğunuz için bölge seçin',
    zoneAB: 'Bölge AB',
    zoneBC: 'Bölge BC',
    zoneABC: 'Bölge ABC',
    zoneCityCenter: 'Berlin Şehir Merkezi',
    zoneSurroundings: 'Berlin Çevresi',
    zoneComplete: 'Tam Alan',
    zoneABDesc: 'S-Bahn Ring dahil Berlin şehir sınırları içinde',
    zoneBCDesc: 'Şehir sınırlarından Brandenburg bölgesine kadar',
    zoneABCDesc: 'Potsdam ve çevre alanlar dahil tüm Berlin bölgeleri',
    noteTitle: 'Not:',
    noteText: 'A bölgesi şehir merkezini (S-Bahn Ring) kapsar, B bölgesi Berlin şehir sınırlarına kadar uzanır, C bölgesi çevredeki Brandenburg alanlarını içerir.',
    selectTicket: 'Bilet Türü Seçin',
    selectTicketSubtitle: 'Bilet sürenizi seçin',
    singleTicket: 'Tek Bilet',
    dayPass: 'Günlük Bilet',
    weekPass: '7 Günlük Bilet',
    monthPass: 'Aylık Bilet',
    singleDesc: '2 saat geçerli, tek yön',
    dayDesc: 'Ertesi gün sabah 3\'e kadar geçerli',
    weekDesc: '7 ardışık gün geçerli',
    monthDesc: 'Satın alma tarihinden itibaren 30 gün geçerli',
    tipTitle: 'İpucu:',
    tipText: 'Günlük bilet, günde 3+ yolculuk için en iyi değer!',
    paymentMethod: 'Ödeme Yöntemi',
    paymentSubtitle: 'Nasıl ödeme yapmak istediğinizi seçin',
    cardPayment: 'Kart ile Ödeme',
    cashPayment: 'Nakit Ödeme',
    cardDesc: 'Kredi/Banka/EC-Kartı',
    cashDesc: 'Banknotlar ve madeni paralar',
    totalAmount: 'Toplam Tutar',
    ticket: 'Bilet:',
    zone: 'Bölge:',
    completePurchase: 'Satın Almayı Tamamla',
    selectTicketPrompt: 'Bir bilet türü seçin',
    selectPaymentPrompt: 'Ödeme yöntemi seçin',
    back: 'Geri',
    continue: 'Devam',
    purchaseSuccess: 'Bilet başarıyla satın alındı! BVG\'yi kullandığınız için teşekkürler.',
    insertCash: 'Nakit Ekleyin',
    inserted: 'Eklenen',
    remaining: 'Kalan',
    insertCoinsOrBills: 'Aşağıya madeni para veya banknot ekleyin',
    processingPayment: 'Ödeme işleniyor...',
    tapCard: 'Lütfen kartınızı okuyucuya dokundurun'
  }
};

const ticketNames = {
  en: {
    single: 'Single Ticket',
    day: 'Day Pass',
    week: '7-Day Pass',
    month: 'Monthly Pass'
  },
  de: {
    single: 'Einzelfahrschein',
    day: 'Tageskarte',
    week: '7-Tage-Karte',
    month: 'Monatskarte'
  },
  fr: {
    single: 'Billet simple',
    day: 'Pass journalier',
    week: 'Pass 7 jours',
    month: 'Pass mensuel'
  },
  ru: {
    single: 'Разовый билет',
    day: 'Дневной билет',
    week: '7-дневный билет',
    month: 'Месячный билет'
  },
  tr: {
    single: 'Tek Bilet',
    day: 'Günlük Bilet',
    week: '7 Günlük Bilet',
    month: 'Aylık Bilet'
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('language');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<'card' | 'cash' | null>(null);
  const [cashInserted, setCashInserted] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const t = translations[selectedLanguage];

  const handleLanguageSelect = (lang: Language) => {
    setSelectedLanguage(lang);
    setCurrentPage('zone');
  };

  const handleZoneSelect = (zone: Zone) => {
    setSelectedZone(zone);
  };

  const handleTicketSelect = (ticket: TicketType) => {
    setSelectedTicket(ticket);
    setCashInserted(0);
  };

  const handlePaymentSelect = (payment: 'card' | 'cash') => {
    setSelectedPayment(payment);
    setCashInserted(0);
    
    if (payment === 'card') {
      setIsProcessing(true);
      setTimeout(() => {
        completePurchase();
      }, 2000);
    }
  };

  const insertMoney = (amount: number) => {
    setCashInserted(prev => prev + amount);
  };

  const goBack = () => {
    if (currentPage === 'zone') {
      setCurrentPage('language');
      setSelectedLanguage('en');
    } else if (currentPage === 'purchase') {
      setCurrentPage('zone');
      setSelectedPayment(null);
      setCashInserted(0);
    }
  };

  const goNext = () => {
    if (currentPage === 'zone' && selectedZone) {
      setCurrentPage('purchase');
    }
  };

  const completePurchase = () => {
    alert(t.purchaseSuccess);
    setCurrentPage('language');
    setSelectedLanguage('en');
    setSelectedZone(null);
    setSelectedTicket(null);
    setSelectedPayment(null);
    setCashInserted(0);
    setIsProcessing(false);
  };

  const currentPrice = selectedTicket && selectedZone ? prices[selectedTicket][selectedZone] : 0;
  const remainingAmount = Math.max(0, currentPrice - cashInserted);

  // Auto-complete purchase when cash is enough
  if (selectedPayment === 'cash' && cashInserted >= currentPrice && currentPrice > 0 && !isProcessing) {
    setTimeout(() => {
      completePurchase();
    }, 500);
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#111827',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        width: '1280px',
        height: '980px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Header - 90px */}
        <div style={{
          background: '#dc2626',
          color: 'white',
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '90px',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#dc2626',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>BVG</div>
            <div>
              <h1 style={{ fontSize: '24px', marginBottom: '2px' }}>Berlin Public Transport</h1>
              <p style={{ opacity: 0.9, fontSize: '14px' }}>Ticket Purchase</p>
            </div>
          </div>
          {currentPage !== 'language' && (
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '6px 14px',
              borderRadius: '6px',
              fontSize: '13px'
            }}>
              {selectedLanguage.toUpperCase()}
            </div>
          )}
        </div>

        {/* Content - fills remaining space */}
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          {/* Language Page */}
          {currentPage === 'language' && (
            <div style={{
              padding: '30px 40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ fontSize: '72px', marginBottom: '12px' }}>🌐</div>
                <h2 style={{ fontSize: '28px', color: '#111827', marginBottom: '6px' }}>Select Language</h2>
                <p style={{ fontSize: '16px', color: '#6b7280' }}>Sprache wählen • Choisir la langue</p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '14px',
                width: '100%',
                maxWidth: '850px',
                marginBottom: '24px'
              }}>
                {[
                  { code: 'en' as Language, flag: '🇬🇧', name: 'English', native: 'English' },
                  { code: 'de' as Language, flag: '🇩🇪', name: 'German', native: 'Deutsch' },
                  { code: 'fr' as Language, flag: '🇫🇷', name: 'French', native: 'Français' },
                  { code: 'ru' as Language, flag: '🇷🇺', name: 'Russian', native: 'Русский' },
                  { code: 'tr' as Language, flag: '🇹🇷', name: 'Turkish', native: 'Türkçe' }
                ].map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    style={{
                      padding: '18px',
                      border: '3px solid #e5e7eb',
                      borderRadius: '10px',
                      background: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = '#dc2626';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ fontSize: '50px' }}>{lang.flag}</div>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <h3 style={{ fontSize: '20px', color: '#111827', marginBottom: '2px' }}>{lang.name}</h3>
                      <p style={{ fontSize: '15px', color: '#6b7280' }}>{lang.native}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div style={{
                background: '#dbeafe',
                borderLeft: '4px solid #3b82f6',
                padding: '12px',
                borderRadius: '8px',
                display: 'flex',
                gap: '10px',
                maxWidth: '850px',
                width: '100%'
              }}>
                <span style={{ fontSize: '20px' }}>ℹ️</span>
                <div style={{ color: '#374151', lineHeight: '1.4', fontSize: '14px' }}>
                  <strong style={{ display: 'block', marginBottom: '2px', color: '#111827' }}>
                    Welcome to BVG Ticket Machine
                  </strong>
                  Please select your preferred language to continue.
                </div>
              </div>
            </div>
          )}

          {/* Zone Page */}
          {currentPage === 'zone' && (
            <div style={{ padding: '30px 40px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '28px', color: '#111827', marginBottom: '6px' }}>{t.selectZone}</h2>
                <p style={{ fontSize: '16px', color: '#6b7280' }}>{t.selectZoneSubtitle}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '18px', flex: 1 }}>
                {[
                  { zone: 'AB' as Zone, color: '#3b82f6', title: t.zoneAB, desc: t.zoneCityCenter, coverage: t.zoneABDesc },
                  { zone: 'BC' as Zone, color: '#10b981', title: t.zoneBC, desc: t.zoneSurroundings, coverage: t.zoneBCDesc },
                  { zone: 'ABC' as Zone, color: '#8b5cf6', title: t.zoneABC, desc: t.zoneComplete, coverage: t.zoneABCDesc }
                ].map(z => (
                  <button
                    key={z.zone}
                    onClick={() => handleZoneSelect(z.zone)}
                    style={{
                      padding: '22px',
                      border: `3px solid ${selectedZone === z.zone ? '#3b82f6' : '#e5e7eb'}`,
                      borderRadius: '10px',
                      background: selectedZone === z.zone ? '#eff6ff' : 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      transition: 'all 0.2s',
                      boxShadow: selectedZone === z.zone ? '0 8px 20px rgba(0, 0, 0, 0.1)' : 'none'
                    }}
                  >
                    <div style={{
                      width: '65px',
                      height: '65px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '26px',
                      fontWeight: 'bold',
                      background: z.color,
                      flexShrink: 0
                    }}>
                      {z.zone}
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <h3 style={{ fontSize: '20px', color: '#111827', marginBottom: '4px' }}>{z.title}</h3>
                      <p style={{ fontSize: '15px', color: '#374151', marginBottom: '4px' }}>{z.desc}</p>
                      <p style={{ fontSize: '14px', color: '#6b7280' }}>{z.coverage}</p>
                    </div>
                    {selectedZone === z.zone && (
                      <span style={{ fontSize: '32px', color: '#3b82f6' }}>✓</span>
                    )}
                  </button>
                ))}
              </div>

              <div style={{
                background: '#fef3c7',
                borderLeft: '4px solid #f59e0b',
                padding: '12px',
                borderRadius: '8px'
              }}>
                <strong style={{ display: 'block', marginBottom: '2px', color: '#111827', fontSize: '14px' }}>{t.noteTitle}</strong>
                <p style={{ color: '#374151', lineHeight: '1.4', fontSize: '13px', margin: 0 }}>
                  {t.noteText}
                </p>
              </div>
            </div>
          )}

          {/* Purchase Page */}
          {currentPage === 'purchase' && selectedZone && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%' }}>
              {/* Left: Ticket Selection */}
              <div style={{ padding: '24px', borderRight: '1px solid #e5e7eb', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '16px', flexShrink: 0 }}>
                  <div style={{
                    display: 'inline-block',
                    background: '#dbeafe',
                    color: '#1e40af',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    marginBottom: '8px'
                  }}>
                    {t.zone} <strong>{selectedZone}</strong>
                  </div>
                  <h2 style={{ fontSize: '24px', color: '#111827', marginBottom: '3px' }}>{t.selectTicket}</h2>
                  <p style={{ fontSize: '14px', color: '#6b7280' }}>{t.selectTicketSubtitle}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                  {[
                    { type: 'single' as TicketType, icon: '🎫', color: '#3b82f6', name: t.singleTicket, desc: t.singleDesc },
                    { type: 'day' as TicketType, icon: '📅', color: '#10b981', name: t.dayPass, desc: t.dayDesc },
                    { type: 'week' as TicketType, icon: '📆', color: '#f97316', name: t.weekPass, desc: t.weekDesc },
                    { type: 'month' as TicketType, icon: '📋', color: '#8b5cf6', name: t.monthPass, desc: t.monthDesc }
                  ].map(ticket => (
                    <button
                      key={ticket.type}
                      onClick={() => handleTicketSelect(ticket.type)}
                      style={{
                        padding: '14px',
                        border: `3px solid ${selectedTicket === ticket.type ? '#dc2626' : '#e5e7eb'}`,
                        borderRadius: '8px',
                        background: selectedTicket === ticket.type ? '#fef2f2' : 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        transition: 'all 0.2s',
                        boxShadow: selectedTicket === ticket.type ? '0 6px 16px rgba(0, 0, 0, 0.1)' : 'none'
                      }}
                    >
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px',
                        background: ticket.color,
                        flexShrink: 0
                      }}>
                        {ticket.icon}
                      </div>
                      <div style={{ flex: 1, textAlign: 'left' }}>
                        <h3 style={{ fontSize: '17px', color: '#111827', marginBottom: '1px' }}>{ticket.name}</h3>
                        <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>{ticket.desc}</p>
                      </div>
                      <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>
                        €{prices[ticket.type][selectedZone].toFixed(2)}
                      </div>
                    </button>
                  ))}
                </div>

                <div style={{
                  background: '#dbeafe',
                  borderLeft: '3px solid #3b82f6',
                  padding: '10px',
                  borderRadius: '6px',
                  display: 'flex',
                  gap: '8px',
                  marginTop: '12px',
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: '18px' }}>ℹ️</span>
                  <div style={{ color: '#374151', lineHeight: '1.3', fontSize: '12px' }}>
                    <strong style={{ display: 'block', marginBottom: '1px', color: '#111827' }}>{t.tipTitle}</strong>
                    {t.tipText}
                  </div>
                </div>
              </div>

              {/* Right: Payment & Summary */}
              <div style={{ padding: '24px', background: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '16px', flexShrink: 0 }}>
                  <h2 style={{ fontSize: '24px', color: '#111827', marginBottom: '3px' }}>{t.paymentMethod}</h2>
                  <p style={{ fontSize: '14px', color: '#6b7280' }}>{t.paymentSubtitle}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px', flexShrink: 0 }}>
                  {[
                    { type: 'card' as const, icon: '💳', color: '#3b82f6', name: t.cardPayment, desc: t.cardDesc },
                    { type: 'cash' as const, icon: '💵', color: '#10b981', name: t.cashPayment, desc: t.cashDesc }
                  ].map(payment => (
                    <button
                      key={payment.type}
                      onClick={() => handlePaymentSelect(payment.type)}
                      disabled={!selectedTicket}
                      style={{
                        padding: '14px',
                        border: `3px solid ${selectedPayment === payment.type ? '#dc2626' : '#e5e7eb'}`,
                        borderRadius: '8px',
                        background: 'white',
                        cursor: selectedTicket ? 'pointer' : 'not-allowed',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        transition: 'all 0.2s',
                        boxShadow: selectedPayment === payment.type ? '0 6px 16px rgba(0, 0, 0, 0.1)' : 'none',
                        opacity: selectedTicket ? 1 : 0.5
                      }}
                    >
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px',
                        color: 'white',
                        background: payment.color,
                        flexShrink: 0
                      }}>
                        {payment.icon}
                      </div>
                      <div style={{ flex: 1, textAlign: 'left' }}>
                        <h3 style={{ fontSize: '17px', color: '#111827', marginBottom: '1px' }}>{payment.name}</h3>
                        <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>{payment.desc}</p>
                      </div>
                      {selectedPayment === payment.type && (
                        <span style={{ fontSize: '24px', color: '#dc2626' }}>✓</span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Cash Insert Interface */}
                {selectedPayment === 'cash' && selectedTicket && (
                  <div style={{
                    background: '#fff7ed',
                    border: '2px solid #fb923c',
                    borderRadius: '8px',
                    padding: '12px',
                    marginBottom: '16px',
                    flexShrink: 0
                  }}>
                    <h3 style={{ fontSize: '16px', color: '#111827', marginBottom: '8px' }}>{t.insertCash}</h3>
                    
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                      <div style={{ flex: 1, background: '#dbeafe', padding: '8px', borderRadius: '6px' }}>
                        <p style={{ fontSize: '11px', color: '#1e40af', marginBottom: '2px' }}>{t.inserted}</p>
                        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', margin: 0 }}>€{cashInserted.toFixed(2)}</p>
                      </div>
                      <div style={{ flex: 1, background: remainingAmount > 0 ? '#fee2e2' : '#dcfce7', padding: '8px', borderRadius: '6px' }}>
                        <p style={{ fontSize: '11px', color: remainingAmount > 0 ? '#991b1b' : '#166534', marginBottom: '2px' }}>
                          {remainingAmount > 0 ? t.remaining : '✓ ' + t.completePurchase.split(' ')[0]}
                        </p>
                        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                          €{remainingAmount.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <p style={{ fontSize: '11px', color: '#6b7280', marginBottom: '8px' }}>{t.insertCoinsOrBills}</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                      {[0.50, 1.00, 2.00, 5.00, 10.00, 20.00, 50.00, 100.00].map(amount => (
                        <button
                          key={amount}
                          onClick={() => insertMoney(amount)}
                          disabled={remainingAmount <= 0}
                          style={{
                            padding: '8px',
                            border: '2px solid #e5e7eb',
                            borderRadius: '6px',
                            background: 'white',
                            cursor: remainingAmount > 0 ? 'pointer' : 'not-allowed',
                            fontSize: '13px',
                            fontWeight: 'bold',
                            color: amount < 5 ? '#f97316' : '#10b981',
                            opacity: remainingAmount > 0 ? 1 : 0.5,
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => {
                            if (remainingAmount > 0) {
                              e.currentTarget.style.background = '#f3f4f6';
                            }
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background = 'white';
                          }}
                        >
                          €{amount.toFixed(2)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Card Processing */}
                {selectedPayment === 'card' && isProcessing && (
                  <div style={{
                    background: '#dbeafe',
                    border: '2px solid #3b82f6',
                    borderRadius: '8px',
                    padding: '16px',
                    marginBottom: '16px',
                    textAlign: 'center',
                    flexShrink: 0
                  }}>
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>💳</div>
                    <p style={{ fontSize: '14px', color: '#1e40af', fontWeight: 'bold', marginBottom: '4px' }}>{t.processingPayment}</p>
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>{t.tapCard}</p>
                  </div>
                )}

                <div style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                  borderRadius: '10px',
                  padding: '24px',
                  color: 'white',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ marginBottom: '18px' }}>
                    <p style={{ opacity: 0.9, marginBottom: '6px', fontSize: '14px' }}>{t.totalAmount}</p>
                    <div style={{ fontSize: '52px', fontWeight: 'bold' }}>€{currentPrice.toFixed(2)}</div>
                  </div>

                  {selectedTicket && (
                    <div style={{
                      borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                      paddingTop: '12px',
                      marginBottom: '18px'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '14px' }}>
                        <span style={{ opacity: 0.9 }}>{t.ticket}</span>
                        <span>{ticketNames[selectedLanguage][selectedTicket]}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                        <span style={{ opacity: 0.9 }}>{t.zone}</span>
                        <span>{selectedZone}</span>
                      </div>
                    </div>
                  )}

                  {!selectedTicket && (
                    <div style={{
                      textAlign: 'center',
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      marginTop: 'auto'
                    }}>
                      <p style={{ opacity: 0.9, fontSize: '14px', margin: 0 }}>
                        {t.selectTicketPrompt}
                      </p>
                    </div>
                  )}

                  {selectedTicket && !selectedPayment && (
                    <div style={{
                      textAlign: 'center',
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      marginTop: 'auto'
                    }}>
                      <p style={{ opacity: 0.9, fontSize: '14px', margin: 0 }}>
                        {t.selectPaymentPrompt}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer - 68px */}
        <div style={{ background: '#f3f4f6', padding: '14px 16px', display: 'flex', gap: '14px', height: '68px', flexShrink: 0 }}>
          {currentPage !== 'language' && (
            <button
              onClick={goBack}
              style={{
                flex: 1,
                padding: '14px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '17px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontWeight: '500',
                background: '#6b7280',
                color: 'white'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#4b5563'}
              onMouseOut={(e) => e.currentTarget.style.background = '#6b7280'}
            >
              ← {t.back}
            </button>
          )}

          {currentPage === 'zone' && selectedZone && (
            <button
              onClick={goNext}
              style={{
                flex: 1,
                padding: '14px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '17px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontWeight: '500',
                background: '#dc2626',
                color: 'white'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#b91c1c'}
              onMouseOut={(e) => e.currentTarget.style.background = '#dc2626'}
            >
              {t.continue} →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
