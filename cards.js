// Reusable template generator to output standard UI card layouts
const CardGenerator = {
  createEventCard: (event) => {
    return `
      <div class="event-card">
        <div class="event-img-banner" style="background: url('${event.image}') center/cover;">
          <span class="event-badge">${event.category}</span>
        </div>
        <div class="event-details">
          <div class="event-meta">
            <span><i class="far fa-calendar-alt"></i> ${event.date}</span>
            <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
          </div>
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          <button class="btn-primary open-apply-btn" data-event="${event.title}">Apply to Volunteer</button>
        </div>
      </div>
    `;
  }
};
