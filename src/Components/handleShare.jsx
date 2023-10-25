const handleShare = () => {
    // Create a shareable link to the current details page
    const shareableLink = window.location.href;

    // Use the Web Share API to share the link
    if (navigator.share) {
      navigator.share({
        title: `User Details: ${user.username}`,
        text: `Check out the profile of ${user.username}`,
        url: shareableLink,
      });
    } else {
      // Provide a fallback for browsers that don't support the Web Share API
      alert(`Shareable Link: ${shareableLink}`);
    }
  };
  export default handleShare;