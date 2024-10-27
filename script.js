// Event listener for profile form submission
document.getElementById('profileForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interests = document.getElementById('interests').value.split(',').map(item => item.trim());

    // Save profile to localStorage
    const profile = { name, email, interests };
    let profiles = JSON.parse(localStorage.getItem('profiles')) || [];
    profiles.push(profile);
    localStorage.setItem('profiles', JSON.stringify(profiles));

    alert('Profile created successfully!');
    document.getElementById('profileForm').reset();
});

// Event listener for finding a match
document.getElementById('findMatch').addEventListener('click', function () {
    const profiles = JSON.parse(localStorage.getItem('profiles')) || [];
    const lastProfile = profiles[profiles.length - 1];

    if (!lastProfile) {
        alert("No profiles available!");
        return;
    }

    // Find a match based on shared interests
    const match = profiles.find(profile => {
        return profile !== lastProfile && profile.interests.some(interest => lastProfile.interests.includes(interest));
    });

    if (match) {
        // Display match profile details
        document.getElementById('profileName1').textContent = match.name;
        document.getElementById('profileEmail1').textContent = match.email;
        document.getElementById('profileInterests1').textContent = match.interests.join(', ');

        // Show handshake animation
        const handshakeAnimation = document.getElementById('handshakeAnimation');
        handshakeAnimation.style.display = 'block';

        // Hide handshake animation after 3 seconds
        setTimeout(() => {
            handshakeAnimation.style.display = 'none';
        }, 3000);
    } else {
        alert("No matches found!");
    }
});
