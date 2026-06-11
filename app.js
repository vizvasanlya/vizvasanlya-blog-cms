const cards = [{"label": "Posts", "value": "76", "delta": "+8"}, {"label": "Drafts", "value": "14", "delta": "+3"}, {"label": "SEO score", "value": "87", "delta": "+6"}, {"label": "Avg reads", "value": "3.2K", "delta": "+17%"}];
const rows = [{"title": "API design patterns", "status": "Editing", "detail": "Final pass focused on examples and diagrams."}, {"title": "Remote team rituals", "status": "Scheduled", "detail": "Publish date set for next Tuesday."}, {"title": "Launch retrospective", "status": "Draft", "detail": "Interviews collected and outline approved."}, {"title": "Security checklist", "status": "Published", "detail": "Post added to the resource hub."}];
const insights = ["Long-form guides drive the highest returning traffic.", "SEO improvements are strongest on older posts.", "Editorial calendar is balanced across audience segments."];
const storageKey = 'vizvasanlya-blog-cms-items';
let saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
let filter = 'all';

const statsEl = document.querySelector('#stats');
const listEl = document.querySelector('#list');
const insightsEl = document.querySelector('#insights');
const form = document.querySelector('#add-item');
const input = document.querySelector('#itemInput');

function renderStats() {
  statsEl.innerHTML = cards.map((item) => `
    <article class="metric">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <em>${item.delta}</em>
    </article>
  `).join('');
}

function renderList() {
  const visible = rows.filter((row) => filter === 'all' || row.status.includes(filter));
  if (!visible.length) {
    listEl.innerHTML = '<p class="empty">No items match this filter yet.</p>';
    return;
  }
  listEl.innerHTML = visible.map((row) => `
    <article class="row">
      <div>
        <h3>${row.title}</h3>
        <p>${row.detail}</p>
      </div>
      <span class="badge">${row.status}</span>
    </article>
  `).join('');
}

function renderInsights() {
  insightsEl.innerHTML = insights.map((item) => `<li>${item}</li>`).join('');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  saved.unshift({ title: value, status: 'Active', detail: 'Added from the quick capture form.' });
  localStorage.setItem(storageKey, JSON.stringify(saved.slice(0, 10)));
  input.value = '';
  renderList();
});

document.querySelectorAll('.filters button').forEach((button) => {
  button.addEventListener('click', () => {
    filter = button.dataset.filter;
    document.querySelectorAll('.filters button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderList();
  });
});

renderStats();
renderList();
renderInsights();
