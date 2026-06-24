// ==========================================
// WEBSITE CONTENT & MATTER DATA FILE
// Kal ko jo bhi badalna ho, bas yahan badlo!
// ==========================================

const NGO_DATA = {
    // Top Logo Aur Naam
    ngoName: "Bhole Ki Rasoi Seva Sansthan",
    logoImage: "logo bfg.png", // Aapka logo file name

    // Main Page Ki Lines (Taglines)
    mainTagline: "भोले की रसोई सेवा संस्थान",
    subTagline: "सेवा से ही जीवन — Gareeb aur zarooratmand bhai-beheno ko aatmasamman ke sath sirf ₹10 me rozana garam aur badiya khana.",

    // Certificate Details (As per MP Registrar Office)
    registrationNo: "04/14/01/22327/21",
    registrationDate: "26 November 2021",
    registeredOffice: "70/50 Manta Dairy Adhartal, Jabalpur, MP",
    officialEmail: "bholekirasoi.jbp@gmail.com",

    // Impact Counters (Humara Kaam)
    totalMealsServed: "50,000+",
    dailyPeopleFed: "300+",
    transparencyStatus: "100%",

    // Donation Details (Bank aur QR)
    bankName: "HDFC Bank - Panagar Jabalpur",
    Name : Bhole Ki Rasoi Seva Sansthan",
    accountNumber: "50200071072344",
    ifscCode: "HDFC 0006351",
    qrCodeImage: "payment qr.jpeg" // Yahan kal ko aapki QR image ka naam aa jayega
};

// ==========================================
// AUTOMATION LOGIC (Isko touch nahi karna h)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    // Logo Text aur Image setup
    if(document.getElementById("layout-logo")) {
        document.getElementById("layout-logo").innerText = NGO_DATA.ngoName;
    }
    if(document.getElementById("layout-logo-img")) {
        document.getElementById("layout-logo-img").src = NGO_DATA.logoImage;
    }
    
    // Taglines setup
    if(document.getElementById("layout-tagline")) {
        document.getElementById("layout-tagline").innerText = NGO_DATA.mainTagline;
    }
    if(document.getElementById("layout-subtagline")) {
        document.getElementById("layout-subtagline").innerText = NGO_DATA.subTagline;
    }
    
    // Impact counters setup
    if(document.getElementById("cnt-meals")) {
        document.getElementById("cnt-meals").innerText = NGO_DATA.totalMealsServed;
    }
    if(document.getElementById("cnt-daily")) {
        document.getElementById("cnt-daily").innerText = NGO_DATA.dailyPeopleFed;
    }
    if(document.getElementById("cnt-transparency")) {
        document.getElementById("cnt-transparency").innerText = NGO_DATA.transparencyStatus;
    }
    
    // Bank details setup
    if(document.getElementById("layout-bank-name")) {
        document.getElementById("layout-bank-name").innerText = "Bank Name: " + NGO_DATA.bankName;
    }
    if(document.getElementById("layout-bank-acc")) {
        document.getElementById("layout-bank-acc").innerText = "Account No: " + NGO_DATA.accountNumber;
    }
    if(document.getElementById("layout-bank-ifsc")) {
        document.getElementById("layout-bank-ifsc").innerText = "IFSC Code: " + NGO_DATA.ifscCode;
    }
    
    // Registration No insertion for trust factor
    if(document.getElementById("layout-reg-no")) {
        document.getElementById("layout-reg-no").innerText = "Reg No: " + NGO_DATA.registrationNo + " | Office: " + NGO_DATA.registeredOffice;
    }
    
    // QR Code Image setup
    if(document.getElementById("layout-qr-img")) {
        document.getElementById("layout-qr-img").src = NGO_DATA.qrCodeImage;
    }
});
