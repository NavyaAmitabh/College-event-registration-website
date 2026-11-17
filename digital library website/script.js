// Array of educational resources
const resources = [
    { id: 1, title: "Introduction to Algorithms", subject: "Computer Science", type: "Textbook", link: "#" },
    { id: 2, title: "Data Structures Made Easy", subject: "Computer Science", type: "Study Guide", link: "#" },
    { id: 3, title: "Linear Algebra and Its Applications", subject: "Mathematics", type: "Textbook", link: "#" },
    { id: 4, title: "Calculus Early Transcendentals", subject: "Mathematics", type: "Reference Book", link: "#" },
    { id: 5, title: "Fundamentals of Physics", subject: "Physics", type: "Textbook", link: "#" },
    { id: 6, title: "Quantum Mechanics Notes", subject: "Physics", type: "Lecture Notes", link: "#" }
];

const resourceList = document.getElementById("resource-list");
const searchBox = document.getElementById("search-box");
const subjectSelect = document.getElementById("subject-select");

// Render resources on the page
function renderResources(items) {
    resourceList.innerHTML = "";

    if (items.length === 0) {
        resourceList.innerHTML = "<li>No educational resources found matching your search.</li>";
        return;
    }

    items.forEach(res => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${res.title}</strong> (${res.subject} - <em>${res.type}</em>) | <a href="${res.link}" target="_blank">Access Resource</a>`;
        resourceList.appendChild(li);
    });
}

// Filter and search logic
function filterResources() {
    const searchTerm = searchBox.value.toLowerCase();
    const selectedSubject = subjectSelect.value;

    const filtered = resources.filter(res => {
        const matchesSearch = res.title.toLowerCase().includes(searchTerm);
        const matchesSubject = selectedSubject === "All" || res.subject === selectedSubject;
        return matchesSearch && matchesSubject;
    });

    renderResources(filtered);
}

// Initial render
renderResources(resources);