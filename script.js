
/* Search tourist plac
function showDetails(place) {

    var details = document.getElementById("details");

    if (place == "Taj Mahal") {

        details.innerHTML =
            "<h2>Taj Mahal</h2>" +
            "<p>📍 Agra, India</p>" +
            "<p>The Taj Mahal is one of India's most famous tourist attractions. It is known for its beautiful architecture, gardens and history.</p>" +
            "<p><b>Ticket Price:</b> ₹500</p>";

    }

    else if (place == "Goa") {

        details.innerHTML =
            "<h2>Goa</h2>" +
            "<p>📍 Goa, India</p>" +
            "<p>Goa is famous for beautiful beaches, water activities, nature and delicious food.</p>" +
            "<p><b>Ticket Price:</b> ₹800</p>";

    }

    else if (place == "Kerala") {

        details.innerHTML =
            "<h2>Kerala</h2>" +
            "<p>📍 Kerala, India</p>" +
            "<p>Kerala is famous for its backwaters, greenery, beaches and beautiful natural scenery.</p>" +
            "<p><b>Ticket Price:</b> ₹700</p>";

    }

    else if (place == "Jaipur") {

        details.innerHTML =
            "<h2>Jaipur</h2>" +
            "<p>📍 Rajasthan, India</p>" +
            "<p>Jaipur is famous for forts, palaces, royal architecture and colourful culture.</p>" +
            "<p><b>Ticket Price:</b> ₹600</p>";

    }

    else if (place == "Ooty") {

        details.innerHTML =
            "<h2>Ooty</h2>" +
            "<p>📍 Tamil Nadu, India</p>" +
            "<p>Ooty is a beautiful hill station with mountains, gardens, lakes and a cool climate.</p>" +
            "<p><b>Ticket Price:</b> ₹400</p>";

    }

    else if (place == "Manali") {

        details.innerHTML =
            "<h2>Manali</h2>" +
            "<p>📍 Himachal Pradesh, India</p>" +
            "<p>Manali is famous for mountains, snow, valleys, rivers and adventure activities.</p>" +
            "<p><b>Ticket Price:</b> ₹900</p>";

    }

    details.style.display = "block";

    details.scrollIntoView();

}