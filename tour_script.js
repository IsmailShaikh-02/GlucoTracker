window.addEventListener('DOMContentLoaded', () => {

  const driver = window.driver.js.driver({
    animate: true,
    opacity: 0.75,
    padding: 10,
    allowClose: true
  });

  driver.setSteps([
    {
      element: '#tourDate',
      popover: {
        title: 'Select Date',
        description: 'Choose the day for this reading. This helps keep your records organized over time.',
        position: 'right'
      }
    },
    {
      element: '#tourTime',
      popover: {
        title: 'Set Time',
        description: 'Pick the exact time the reading was taken for accurate tracking.',
        position: 'top'
      }
    },
    {
      element: '#tourRead',
      popover: {
        title: 'Enter Reading',
        description: 'Input your measurement here. Make sure the value is correct before saving.',
        position: 'top'
      }
    },
    {
      element: '#tourType',
      popover: {
        title: 'Reading Type',
        description: 'Select the type of reading you’re recording (e.g., fasting, post-meal).',
        position: 'top'
      }
    },
    {
      element: '#tourAdd',
      popover: {
        title: 'Save Reading',
        description: 'Click here to store your entry. It will be added to your history and charts.',
        position: 'top'
      }
    },
    {
      element: '#tourChart',
      popover: {
        title: 'Track Progress',
        description: 'Your readings appear here over time, helping you spot patterns and trends.',
        position: 'top'
      }
    },
    {
      element: '#tourLogs',
      popover: {
        title: 'History',
        description: 'All your past readings are listed here for quick review and reference.',
        position: 'top'
      }
    }
  ]);

  const modal = document.getElementById('tourModal');
  const startBtn = document.getElementById('startTour');
  const skipBtn = document.getElementById('skipTour');

  startBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    driver.drive(); // <-- also updated
  });

  skipBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.style.display = 'flex';
});