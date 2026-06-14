# Editorial CMS

![License](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Plan, draft, edit, publish, and measure content with editorial workflow and SEO signals.

## Features

- **Content Lifecycle** — Draft, review, edit, and publish articles with status tracking
- **Editorial Workflow** — Kanban-style pipeline from idea to publication
- **SEO Signals** — Track title, description, and content quality metrics
- **Search & Filter** — Find articles by status, priority, or full-text search
- **Analytics View** — Content performance distribution and priority breakdown
- **Import / Export** — JSON-based content portability
- **LocalStorage Persistence** — No backend required

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Logic | Vanilla JavaScript (ES2022) |
| Storage | LocalStorage |
| Server | Python HTTP server (dev) |

## Getting Started

### Prerequisites

- Python 3.x (for dev server)
- Modern web browser

### Installation

```bash
git clone https://github.com/vizvasanlya/First.git
cd First/vizvasanlya-blog-cms
```

### Run

```bash
npm start
```

Open [http://localhost:5173](http://localhost:5173)

### Docker

```bash
docker compose up --build
```

## Project Structure

```
vizvasanlya-blog-cms/
├── index.html      # Main HTML document
├── app.js          # Application logic and state management
├── styles.css      # Responsive styles
├── data.json       # Configuration and seed data
├── package.json    # Project metadata and scripts
├── Dockerfile      # Container configuration
└── docker-compose.yml
```

## License

MIT
