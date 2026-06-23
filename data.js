// ==========================================
// WEBSITE CONTENT & MATTER DATA FILE
// Kal ko jo bhi badalna ho, bas yahan badlo!
// ==========================================

const NGO_DATA = {
    // Top Logo Aur Naam
    ngoName: "ASHA MEAL NGO",

    // Main Page Ki Lines (Taglines)
    mainTagline: "Pet Bhar Khana, Sirf ₹10 Me.",
    subTagline: "No One Sleeps Hungry — Gareeb aur zarooratmand bhai-beheno ko aatmasamman ke sath rozana garam aur badiya khana.",

    // Impact Counters (Humara Kaam)
    totalMealsServed: "50,000+",
    dailyPeopleFed: "500+",
    transparencyStatus: "100% Transparent",

    // Donation Details (Bank aur QR)
    bankName: "Asha Meal Foundation",
    accountNumber: "98765432101",
    ifscCode: "BARB0GURHXX (5th Digit is Zero)",
    qrCodeText: "[ SCAN QR ]" // Yahan kal ko image ka naam aa jayega
};

// ==========================================
// AUTOMATION LOGIC (Tujhe isko touch nahi karna h)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("layout-logo").innerText = NGO_DATA.ngoName;
    document.getElementById("layout-tagline").innerText = NGO_DATA.mainTagline;
    document.getElementById("layout-subtagline").innerText = NGO_DATA.subTagline;
    
    document.getElementById("cnt-meals").innerText = NGO_DATA.totalMealsServed;
    document.getElementById("cnt-daily").innerText = NGO_DATA.dailyPeopleFed;
    document.getElementById("cnt-transparency").innerText = NGO_DATA.transparencyStatus;
    
    document.getElementById("layout-bank-name").innerText = "Bank Name: " + NGO_DATA.bankName;
    document.getElementById("layout-bank-acc").innerText = "Account No: " + NGO_DATA.accountNumber;
    document.getElementById("layout-bank-ifsc").innerText = "IFSC Code: " + NGO_DATA.ifscCode;
    document.getElementById("layout-qr").innerText = NGO_DATA.qrCodeText;
});
