function filterInvitations() {
  const searchInput = document.getElementById('searchBar').value.toLowerCase();
  const invitations = document.querySelectorAll('.invitation-card');

  invitations.forEach(invitation => {
      const names = invitation.getAttribute('data-names').toLowerCase();
      if (names.includes(searchInput)) {
          invitation.style.display = 'block';
      } else {
          invitation.style.display = 'none';
      }
  });
}

function viewInvitation(invitationId) {
  // Navigate to the corresponding invitation page
  location.href = `./pages/sample/${invitationId}/${invitationId}.html`;
}
