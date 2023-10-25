const handleDownload = () => {
    // Create a text string with user details
    const userDetailsText = `
    User Profile
    Username: ${user.username}
    Email: ${user.email}
    About: ${user.about}

    Education:
    ${user.education.map((edu, index) => `
    School ${index + 1}: ${edu.school}
    Year of Passing: ${edu.yearOfPassing}
    Score: ${edu.score}`).join('\n')}
    `;

    // Create a Blob and generate a downloadable link
    const blob = new Blob([userDetailsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `user_details_${user.username}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };
export default handleDownload ;