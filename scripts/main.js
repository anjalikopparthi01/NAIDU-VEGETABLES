// Main application script for Naidu Vegetables

console.log('Naidu Vegetables App Loaded');
console.log('Business Info:', BIZ);

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // You can add your app logic here
    // Example: smooth scrolling, form handling, etc.
    
    // Log business configuration
    logBusinessInfo();
    
    // Setup event listeners
    setupEventListeners();
});

/**
 * Log business information to console
 */
function logBusinessInfo() {
    console.group('📍 Business Information');
    console.log('Name:', BIZ.name);
    console.log('Tagline:', BIZ.tagline);
    console.log('Phone:', BIZ.phone);
    console.log('Email:', BIZ.email);
    console.log('Address:', BIZ.address);
    console.log('Hours:', BIZ.hours);
    console.log('Delivery:', BIZ.delivery);
    console.log('Location:', `${BIZ.lat}, ${BIZ.lng}`);
    console.log('Established:', BIZ.established);
    console.groupEnd();
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Example: Handle WhatsApp button clicks
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('WhatsApp link clicked');
            // Analytics can be added here
        });
    });

    // Example: Handle phone links
    const phoneLinks = document.querySelectorAll('a[href*="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Phone link clicked:', BIZ.phone);
        });
    });

    // Example: Handle email links
    const emailLinks = document.querySelectorAll('a[href*="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Email link clicked:', BIZ.email);
        });
    });
}

/**
 * Format phone number for WhatsApp
 */
function formatWhatsAppMessage() {
    return encodeURIComponent(BIZ.whatsappMsg);
}

/**
 * Get WhatsApp contact URL
 */
function getWhatsAppUrl() {
    return `https://wa.me/${BIZ.phone}?text=${formatWhatsAppMessage()}`;
}

/**
 * Get Google Maps URL
 */
function getGoogleMapsUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${BIZ.lat},${BIZ.lng}`;
}

// Make functions available globally if needed
window.BizApp = {
    BIZ,
    getWhatsAppUrl,
    getGoogleMapsUrl,
    formatWhatsAppMessage
};

console.log('App initialized. Use window.BizApp to access app functions.');
