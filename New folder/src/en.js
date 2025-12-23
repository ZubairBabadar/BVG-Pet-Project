const lang_en = {
    header: {
        title: "Berlin Public Transport",
        subtitle: "Ticket Purchase"
    },
    languagePage: {
        header: "Select Language",
        subheader: "Choose your preferred language to continue",
        info: "Welcome to BVG Ticket Machine. Please select your preferred language to continue.",
        btns: {
            en: { title: "English", desc: "English" },
            de: { title: "German", desc: "Deutsch" }
        }
    },
    zonePage: {
        header: "Select Your Fare Zone",
        subheader: "Choose the zone for your journey",
        zones: {
            AB: { title: "Zone AB", desc: "Berlin City Center", coverage: "Within Berlin city limits including S-Bahn Ring" },
            BC: { title: "Zone BC", desc: "Berlin Surroundings", coverage: "From city limits to Brandenburg region" },
            ABC: { title: "Zone ABC", desc: "Complete Area", coverage: "All Berlin zones including Potsdam & surrounding areas" }
        },
        note: "Zone A covers the city center (S-Bahn Ring), Zone B extends to Berlin city limits, and Zone C includes surrounding Brandenburg areas."
    },
    personaPage: {
        header: "Select Persona",
        subheader: "Choose the ticket type that fits you",
        personas: {
            student: { title: "Student", desc: "Discounted fares for students" },
            regular: { title: "Regular", desc: "Standard fares for adults" },
            child: { title: "Child", desc: "Discounted fares for children" }
        },
        tip: "Student and Child tickets are cheaper, make sure to select the correct persona."
    },
    purchasePage: {
        ticketHeader: "Select Ticket Type",
        ticketSubheader: "Choose your ticket duration",
        tickets: {
            single: { title: "Single Ticket", desc: "Valid for 2 hours, one direction" },
            day: { title: "Day Pass", desc: "Valid until 3 AM next day" },
            week: { title: "7-Day Pass", desc: "Valid for 7 consecutive days" },
            month: { title: "Monthly Pass", desc: "Valid for 30 days from purchase" }
        },
        ticketTip: "Day Pass is best value for 3+ trips per day!",
        paymentHeader: "Payment Method",
        paymentSubheader: "Select how you want to pay",
        payments: {
            card: { title: "Card Payment", desc: "Credit/Debit/EC-Card" },
            cash: { title: "Cash Payment", desc: "Bills and coins" }
        },
        summary: {
            total: "Total Amount",
            ticket: "Ticket",
            zone: "Zone",
            placeholder: "Select a ticket type and payment method",
            completeBtn: "Complete Purchase"
        }
    },
    footer: {
        back: "← Back",
        continue: "Continue →"
    }
};
