// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('project');

// Project data (can be fetched from an API or JSON file)
const projects = [
    {
        id: 1,
        title: "Personalized News Aggregation",
        image: "1.jpg",
        description: "This project involved building a web application using HTML, CSS, and JavaScript.",
        link: "https://youtu.be/O_ZiPzQc66s"
    },
    {
        id: 2,
        title: "Waiter's Tip Prediction",
        image: "2.jpg",
        description: "This project focused on developing a database system using SQL.",
        link: "https://youtu.be/O_ZiPzQc66s"
    },
    {
        id: 3,
        title: "Coal Mine Evacuation",
        image: "3.jpg",
        description: "This project involved creating a software application using Python.",
        link: "https://youtu.be/O_ZiPzQc66s"
    }
];

// Load project details
const project = projects.find(p => p.id == projectId);
if (project) {
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-image').src = project.image;
    document.getElementById('project-description').textContent = project.description;
    document.getElementById('project-link').href = project.link;
} else {
    document.getElementById('project-title').textContent = "Project Not Found";
}
