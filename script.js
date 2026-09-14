// =====================================================================
// НАСТРОЙКИ
// =====================================================================

// Дата, когда начинается ПЕРВАЯ неделя (понедельник).
// Поменяйте на реальную дату начала семестра.
const START_DATE = new Date("2026-08-31"); // в формате ГГГГ-ММ-ДД

// =====================================================================
// РАСПИСАНИЕ
// =====================================================================
// Формат каждой записи:
// {
//   week: 1 или 2 (какая неделя),
//   day:  0=Пн, 1=Вт, 2=Ср, 3=Чт, 4=Пт, 5=Сб,
//   time: "12:40 - 14:10",
//   type: "ПР" (практика),
//   subject: "Управление данными",
//   room: "329 (С-20)",
//   group: "БСБО-24-25"
// }

const schedule = [

  // ========== НЕДЕЛЯ 1 ==========

  // Понедельник
  { week: 1, day: 0, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "329 (С-20)",  group: "БСБО-24-25" },
  { week: 1, day: 0, time: "14:20 - 15:50", type: "ПР", subject: "Управление данными", room: "451 (С-20)",  group: "БСБО-21-25" },
  { week: 1, day: 0, time: "16:20 - 17:50", type: "ПР", subject: "Управление данными", room: "451 (С-20)",  group: "БСБО-22-25" },
  { week: 1, day: 0, time: "18:00 - 19:30", type: "ПР", subject: "Управление данными", room: "451 (С-20)",  group: "БСБО-23-25" },

  // Вторник
  { week: 1, day: 1, time: "9:00 - 10:30",  type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-09-25" },
  { week: 1, day: 1, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-08-25" },
  { week: 1, day: 1, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-03-25" },
  { week: 1, day: 1, time: "14:20 - 15:50", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-10-25" },

  // Среда
  { week: 1, day: 2, time: "9:00 - 10:30",  type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-05-25" },
  { week: 1, day: 2, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-04-25" },
  { week: 1, day: 2, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-01-25" },

  // Четверг
  { week: 1, day: 3, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "№20 (С-20)",  group: "БСБО-25-25" },
  { week: 1, day: 3, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "№20 (С-20)",  group: "БСБО-25-25" },
  { week: 1, day: 3, time: "14:20 - 15:50", type: "ПР", subject: "Управление данными", room: "324а (С-20)", group: "БСБО-26-25" },
  { week: 1, day: 3, time: "16:20 - 17:50", type: "ПР", subject: "Управление данными", room: "324а (С-20)", group: "БСБО-26-25" },

  // Пятница
  { week: 1, day: 4, time: "9:00 - 10:30",  type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-06-25" },
  { week: 1, day: 4, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-07-25" },

  // ========== НЕДЕЛЯ 2 ==========

  // Понедельник — совпадает с 1-й неделей
  { week: 2, day: 0, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "329 (С-20)",  group: "БСБО-24-25" },
  { week: 2, day: 0, time: "14:20 - 15:50", type: "ПР", subject: "Управление данными", room: "451 (С-20)",  group: "БСБО-21-25" },
  { week: 2, day: 0, time: "16:20 - 17:50", type: "ПР", subject: "Управление данными", room: "451 (С-20)",  group: "БСБО-22-25" },
  { week: 2, day: 0, time: "18:00 - 19:30", type: "ПР", subject: "Управление данными", room: "451 (С-20)",  group: "БСБО-23-25" },

  // Вторник — совпадает
  { week: 2, day: 1, time: "9:00 - 10:30",  type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-09-25" },
  { week: 2, day: 1, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-08-25" },
  { week: 2, day: 1, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-03-25" },
  { week: 2, day: 1, time: "14:20 - 15:50", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-10-25" },

  // Среда — совпадает
  { week: 2, day: 2, time: "9:00 - 10:30",  type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-05-25" },
  { week: 2, day: 2, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-04-25" },
  { week: 2, day: 2, time: "12:40 - 14:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)",  group: "БФБО-01-25" },

  // Четверг — ОТЛИЧАЕТСЯ (Разработка мобильных приложений)
  { week: 2, day: 3, time: "10:40 - 12:10", type: "ПР", subject: "Разработка мобильных приложений", room: "333 (С-20)",  group: "БСБО-30-24" },
  { week: 2, day: 3, time: "12:40 - 14:10", type: "ПР", subject: "Разработка мобильных приложений", room: "333 (С-20)",  group: "БСБО-30-24" },
  { week: 2, day: 3, time: "14:20 - 15:50", type: "ПР", subject: "Разработка мобильных приложений", room: "145б (С-20)", group: "БСБО-31-24" },
  { week: 2, day: 3, time: "16:20 - 17:50", type: "ПР", subject: "Разработка мобильных приложений", room: "145б (С-20)", group: "БСБО-31-24" },

  // Пятница — ОТЛИЧАЕТСЯ (добавились БФБО-02)
  { week: 2, day: 4, time: "9:00 - 10:30",  type: "ПР", subject: "Управление данными", room: "447 (С-20)", group: "БФБО-06-25" },
  { week: 2, day: 4, time: "10:40 - 12:10", type: "ПР", subject: "Управление данными", room: "447 (С-20)", group: "БФБО-07-25" },
  { week: 2, day: 4, time: "14:20 - 15:50", type: "ПР", subject: "Управление данными", room: "408 (С-20)", group: "БФБО-02-25" },
  { week: 2, day: 4, time: "16:20 - 17:50", type: "ПР", subject: "Управление данными", room: "408 (С-20)", group: "БФБО-02-25" },

];

// =====================================================================
// ДАЛЬШЕ — ЛОГИКА, МЕНЯТЬ НЕ НУЖНО
// =====================================================================

const DAYS = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const TYPE_CLASS = { "ПР": "practice", "ЛК": "lecture", "ЛАБ": "lab" };

let currentMode = "auto"; // "auto" | "1" | "2"

/**
 * Определяет номер учебной недели (1 или 2) по текущей дате
 * относительно START_DATE.
 */
function getAutoWeek() {
  const start = new Date(START_DATE);
  start.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const weeksPassed = Math.floor((today - start) / msPerWeek);

  // Чётное число прошедших недель → неделя 1, нечётное → неделя 2
  return (weeksPassed % 2 === 0) ? 1 : 2;
}

/**
 * Возвращает активный номер недели с учётом режима.
 */
function getActiveWeek() {
  if (currentMode === "auto") return getAutoWeek();
  return parseInt(currentMode, 10);
}

/**
 * Сортирует слоты времени по времени начала (например "9:00" < "12:40").
 */
function timeToMinutes(str) {
  const [h, m] = str.split(":")[0] ? str.split(":") : ["0", "0"];
  // Берём первый временной токен до дефиса
  const start = str.split("-")[0].trim();
  const parts = start.split(":").map(Number);
  return parts[0] * 60 + (parts[1] || 0);
}

/**
 * Строит таблицу расписания для активной недели.
 */
function buildTable() {
  const week = getActiveWeek();
  const table = document.getElementById("scheduleTable");

  const weekItems = schedule.filter(item => item.week === week);

  // Уникальные слоты времени в правильном порядке
  const times = [...new Set(weekItems.map(i => i.time))]
    .sort((a, b) => timeToMinutes(a) - timeToMinutes(b));

  let html = "<thead><tr><th class='time-col'>Время</th>";
  DAYS.forEach(day => html += `<th>${day}</th>`);
  html += "</tr></thead><tbody>";

  times.forEach(time => {
    html += `<tr><td class="time-cell">${time.replace(" - ", "<br>– ")}</td>`;
    DAYS.forEach((_, dayIndex) => {
      const items = weekItems.filter(i => i.time === time && i.day === dayIndex);
      if (items.length === 0) {
        html += "<td></td>";
      } else {
        html += "<td>";
        items.forEach(item => {
          const cls = TYPE_CLASS[item.type] || "practice";
          html += `
            <div class="card ${cls}">
              <div class="subject">${item.subject}</div>
              <div class="meta">${item.group}</div>
              <div class="meta room">${item.room}</div>
              <div class="type">${item.type}</div>
            </div>`;
        });
        html += "</td>";
      }
    });
    html += "</tr>";
  });

  html += "</tbody>";
  table.innerHTML = html;

  // Подпись «сейчас идёт …»
  const label = document.getElementById("currentWeekLabel");
  label.textContent = `Показана: ${week}-я неделя`;

  // Подсветка активной кнопки
  document.querySelectorAll(".week-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.week === String(currentMode));
  });
}

/**
 * Дата обновления
 */
function setUpdated() {
  const now = new Date();
  document.getElementById("updated").textContent =
    now.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
}

// Переключатель недель
document.querySelectorAll(".week-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentMode = btn.dataset.week;
    buildTable();
  });
});

// Печать
document.getElementById("printBtn").addEventListener("click", () => window.print());

// Инициализация
buildTable();
setUpdated();