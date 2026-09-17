// =====================================================================
// НАСТРОЙКИ
// =====================================================================

// Дата первого понедельника, когда начинается 1-я неделя.
const START_DATE = new Date("2026-08-31"); // ← поменяйте на свою дату

// =====================================================================
// РАСПИСАНИЕ (week: 1 или 2, day: 0=Пн ... 5=Сб)
// =====================================================================

const schedule = [

  // ========== НЕДЕЛЯ 1 ==========
  { week: 1, day: 0, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "329 (С-20)",  group: "БСБО-24-25" },
  { week: 1, day: 0, time: "14:20 - 15:50", type: "ПР", subject: "Управление данными", room: "451 (С-20)",  group: "БСБО-21-25" },
  { week: 1, day: 0, time: "16:20 - 17:50", type: "ПР", subject: "Управление данными", room: "451 (С-20)",  group: "БСБО-22-25" },
  { week: 1, day: 0, time: "18:00 - 19:30", type: "ПР", subject: "Управление данными", room: "451 (С-20)",  group: "БСБО-23-25" },

  { week: 1, day: 1, time: "9:00 - 10:30",  type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-09-25" },
  { week: 1, day: 1, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-08-25" },
  { week: 1, day: 1, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-03-25" },
  { week: 1, day: 1, time: "14:20 - 15:50", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-10-25" },

  { week: 1, day: 2, time: "9:00 - 10:30",  type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-05-25" },
  { week: 1, day: 2, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-04-25" },
  { week: 1, day: 2, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-01-25" },

  { week: 1, day: 3, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "№20 (С-20)",  group: "БСБО-25-25" },
  { week: 1, day: 3, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "№20 (С-20)",  group: "БСБО-25-25" },
  { week: 1, day: 3, time: "14:20 - 15:50", type: "ПР", subject: "Управление данными", room: "324а (С-20)", group: "БСБО-26-25" },
  { week: 1, day: 3, time: "16:20 - 17:50", type: "ПР", subject: "Управление данными", room: "324а (С-20)", group: "БСБО-26-25" },

  { week: 1, day: 4, time: "9:00 - 10:30",  type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-06-25" },
  { week: 1, day: 4, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-07-25" },

  // ========== НЕДЕЛЯ 2 ==========
  { week: 2, day: 0, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "329 (С-20)",  group: "БСБО-24-25" },
  { week: 2, day: 0, time: "14:20 - 15:50", type: "ПР", subject: "Управление данными", room: "451 (С-20)",  group: "БСБО-21-25" },
  { week: 2, day: 0, time: "16:20 - 17:50", type: "ПР", subject: "Управление данными", room: "451 (С-20)",  group: "БСБО-22-25" },
  { week: 2, day: 0, time: "18:00 - 19:30", type: "ПР", subject: "Управление данными", room: "451 (С-20)",  group: "БСБО-23-25" },

  { week: 2, day: 1, time: "9:00 - 10:30",  type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-09-25" },
  { week: 2, day: 1, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-08-25" },
  { week: 2, day: 1, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-03-25" },
  { week: 2, day: 1, time: "14:20 - 15:50", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-10-25" },

  { week: 2, day: 2, time: "9:00 - 10:30",  type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-05-25" },
  { week: 2, day: 2, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-04-25" },
  { week: 2, day: 2, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-01-25" },

  { week: 2, day: 3, time: "10:40 - 12:10", type: "ПР", subject: "Разработка мобильных приложений", room: "333 (С-20)",  group: "БСБО-30-24" },
  { week: 2, day: 3, time: "12:40 - 14:10", type: "ПР", subject: "Разработка мобильных приложений", room: "333 (С-20)",  group: "БСБО-30-24" },
  { week: 2, day: 3, time: "14:20 - 15:50", type: "ПР", subject: "Разработка мобильных приложений", room: "145б (С-20)", group: "БСБО-31-24" },
  { week: 2, day: 3, time: "16:20 - 17:50", type: "ПР", subject: "Разработка мобильных приложений", room: "145б (С-20)", group: "БСБО-31-24" },

  { week: 2, day: 4, time: "9:00 - 10:30",  type: "ПР", subject: "Управление данными", room: "447 (С-20)", group: "БФБО-06-25" },
  { week: 2, day: 4, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)", group: "БФБО-07-25" },
  { week: 2, day: 4, time: "14:20 - 15:50", type: "ПР", subject: "Управление данными", room: "408 (С-20)", group: "БФБО-02-25" },
  { week: 2, day: 4, time: "16:20 - 17:50", type: "ПР", subject: "Управление данными", room: "408 (С-20)", group: "БФБО-02-25" },

];

// =====================================================================
// ЛОГИКА (менять не нужно)
// =====================================================================

const DAYS = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const TYPE_CLASS = { "ПР": "practice", "ЛК": "lecture", "ЛАБ": "lab" };

let currentMode = "auto";   // "auto" | "1" | "2"
let currentView = "week";   // "week" | "today"

function getAutoWeek() {
  const start = new Date(START_DATE);
  start.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const weeksPassed = Math.floor((today - start) / msPerWeek);
  return (weeksPassed % 2 === 0) ? 1 : 2;
}

function getActiveWeek() {
  if (currentMode === "auto") return getAutoWeek();
  return parseInt(currentMode, 10);
}

/**
 * Возвращает индекс сегодняшнего дня недели в формате:
 * 0 = Пн, 1 = Вт, ... 5 = Сб, 6 = Вс
 */
function getTodayIndex() {
  const jsDay = new Date().getDay(); // 0=Вс, 1=Пн, ... 6=Сб
  return (jsDay + 6) % 7;            // 0=Пн, ... 6=Вс
}

function timeToMinutes(str) {
  const start = str.split("-")[0].trim();
  const parts = start.split(":").map(Number);
  return parts[0] * 60 + (parts[1] || 0);
}

/**
 * Рисует карточку занятия.
 */
function renderCard(item) {
  const cls = TYPE_CLASS[item.type] || "practice";
  return `
    <div class="card ${cls}">
      <div class="subject">${item.subject}</div>
      <div class="meta">${item.group}</div>
      <div class="meta room">${item.room}</div>
      <div class="type">${item.type}</div>
    </div>`;
}

/**
 * Обычный вид: вся неделя.
 */
function renderWeek(weekItems) {
  const table = document.getElementById("scheduleTable");

  const times = [...new Set(weekItems.map(i => i.time))]
    .sort((a, b) => timeToMinutes(a) - timeToMinutes(b));

  let html = "<thead><tr><th class='time-col'>Время</th>";
  DAYS.slice(0, 6).forEach(day => html += `<th>${day}</th>`);
  html += "</tr></thead><tbody>";

  times.forEach(time => {
    html += `<tr><td class="time-cell">${time.replace(" - ", "<br>– ")}</td>`;
    for (let dayIndex = 0; dayIndex < 6; dayIndex++) {
      const items = weekItems.filter(i => i.time === time && i.day === dayIndex);
      if (items.length === 0) {
        html += "<td></td>";
      } else {
        html += "<td>" + items.map(renderCard).join("") + "</td>";
      }
    }
    html += "</tr>";
  });

  html += "</tbody>";
  table.innerHTML = html;
  table.classList.remove("today-view");
}

/**
 * Вид "Сегодня": одна колонка — только текущий день.
 */
function renderToday(weekItems) {
  const table = document.getElementById("scheduleTable");
  const today = getTodayIndex();

  // Воскресенье — занятий нет
  if (today === 6) {
    table.classList.add("today-view");
    table.innerHTML = `
      <tbody>
        <tr><td class="empty-day">Сегодня воскресенье — занятий нет 🌿</td></tr>
      </tbody>`;
    return;
  }

  const dayItems = weekItems
    .filter(i => i.day === today)
    .sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time));

  const dayName = DAYS[today];

  if (dayItems.length === 0) {
    table.classList.add("today-view");
    table.innerHTML = `
      <thead><tr><th colspan="2">${dayName} — занятий нет</th></tr></thead>
      <tbody>
        <tr><td class="empty-day">Свободный день 🎉</td></tr>
      </tbody>`;
    return;
  }

  let html = `<thead><tr><th colspan="2">Сегодня — ${dayName}</th></tr></thead><tbody>`;
  dayItems.forEach(item => {
    html += `
      <tr>
        <td class="time-cell">${item.time.replace(" - ", "<br>– ")}</td>
        <td>${renderCard(item)}</td>
      </tr>`;
  });
  html += "</tbody>";

  table.innerHTML = html;
  table.classList.add("today-view");
}

function buildTable() {
  const week = getActiveWeek();
  const weekItems = schedule.filter(item => item.week === week);

  if (currentView === "today") {
    renderToday(weekItems);
  } else {
    renderWeek(weekItems);
  }

  // Подпись
  const label = document.getElementById("currentWeekLabel");
  const todayName = DAYS[getTodayIndex()];
  label.textContent = `Показана: ${week}-я неделя · сегодня ${todayName.toLowerCase()}`;

  // Активные кнопки
  document.querySelectorAll(".week-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.week === String(currentMode));
  });
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === currentView);
  });
}

function setUpdated() {
  const now = new Date();
  document.getElementById("updated").textContent =
    now.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
}

// Обработчики
document.querySelectorAll(".week-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentMode = btn.dataset.week;
    buildTable();
  });
});

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentView = btn.dataset.view;
    buildTable();
  });
});

document.getElementById("printBtn").addEventListener("click", () => window.print());

// Инициализация
buildTable();
setUpdated();
