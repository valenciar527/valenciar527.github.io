const icons = document.querySelectorAll('.icon:not(#skip)');

async function showContent(iconElement) {
  const contentIcon = document.getElementById('contentIcon');
  const contentTitle = document.getElementById('contentTitle');
  const contentDetails = document.getElementById('contentDetails');
  const content = document.getElementById('content');

	for (const icon of icons) {
		icon.style.display = 'none';
	}

  const iconImg = iconElement.querySelector('img');
  const iconSrc = iconImg.src;
  const title = iconElement.querySelector('p').textContent;

  contentIcon.src = iconSrc;
  contentTitle.textContent = title;

  try {
    const response = await fetch('resume-content.html');
    const contentHtml = await response.text();

    // Parse the HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(contentHtml, 'text/html');

    // Select the appropriate section based on the icon
    let selectedContent;
    if (title === 'Icon 1') {
      selectedContent = doc.querySelector('#icon1-content');
    } else if (title === 'Icon 2') {
      selectedContent = doc.querySelector('#icon2-content');
    } else if (title === 'Icon 3') {
      selectedContent = doc.querySelector('#icon3-content');
    }

    // Set the selected content to the contentDetails div
    contentDetails.innerHTML = selectedContent.innerHTML;
  } catch (error) {
    console.error('Error loading content:', error);
  }

  content.style.display = 'block';
  contentIcon.style.display = 'block';

}

function closeContent() {
	const content = document.getElementById('content');

	for (const icon of icons) {
		icon.style.display = 'block';
	}

	content.style.display = 'none';
}
