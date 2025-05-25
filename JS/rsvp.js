
// Shows a “max 10 guests” error
function displayGuestLimitError() {
  const errorDiv = document.getElementById('guest-limit-error');
  errorDiv.textContent = "You can only RSVP for up to 10 guests.";
}

// Adds a new guest field (up to 10)
function addGuestField() {
  const container = document.getElementById('guest-names');
  const entries = container.querySelectorAll('.guest-entry');
  const currentCount = entries.length;

  // Limit check
  if (currentCount > 10) {
    displayGuestLimitError();
    return;
  }

  // Clear any previous limit error
  document.getElementById('guest-limit-error').textContent = "";

  const guestIndex = currentCount + 1;
  const guestDiv = document.createElement('div');
  guestDiv.className = 'guest-entry';

  // Label
  const label = document.createElement('label');
  label.textContent = `Guest ${guestIndex}:`;
  label.setAttribute('for', `guest_name_${guestIndex}`);

  // Input
  const input = document.createElement('input');
  input.type = "text";
  input.name = `guest_name_${guestIndex}`;
  input.id = `guest_name_${guestIndex}`;
  input.required = true;

    const attendingLabel = document.createElement('label');
    attendingLabel.textContent = 'attending? ';
    attendingLabel.setAttribute('for', `attending_${guestIndex}`); 

    const attendingSelect = document.createElement('select');
    attendingSelect.name = `attending_${guestIndex}`;
    attendingSelect.id = `attending_${guestIndex}`;
    attendingSelect.required = true;    

    const optionDefault = document.createElement('option');
    optionDefault.value = "";
    optionDefault.textContent = "Select an option";
    optionDefault.disabled = true;
    optionDefault.selected = true;  

    const optionYes = document.createElement('option');
    optionYes.value = "Yes";
    optionYes.textContent = "Yes";  

    const optionNo = document.createElement('option');
    optionNo.value = "No";
    optionNo.textContent = "No";    

    attendingSelect.appendChild(optionDefault);
    attendingSelect.appendChild(optionYes);
    attendingSelect.appendChild(optionNo);

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.textContent = "Remove";
  removeBtn.className = 'remove-guest btn';
  removeBtn.onclick = () => {
    guestDiv.remove();
    renumberGuestFields();
  };

  // Assemble
  guestDiv.appendChild(label);
  guestDiv.appendChild(document.createElement('br'));
  guestDiv.appendChild(input);
  guestDiv.appendChild(document.createElement('br'));
  guestDiv.appendChild(document.createElement('br'));
  guestDiv.appendChild(attendingLabel);
  guestDiv.appendChild(document.createElement('br'));
  guestDiv.appendChild(attendingSelect);
  guestDiv.appendChild(document.createElement('br'));
  guestDiv.appendChild(removeBtn);
  guestDiv.appendChild(document.createElement('br'));

  container.appendChild(guestDiv);
}

// Re-labels and re-names guest fields after one is removed
function renumberGuestFields() {
  const entries = document.querySelectorAll('.guest-entry');
  entries.forEach((entry, idx) => {
    const label = entry.querySelector('label');
    const input = entry.querySelector('input');
    label.textContent = `Guest Name ${idx + 1}:`;
    input.name = `guest_name_${idx + 1}`;
  });

  // Clear limit error if we're back under 10
  if (entries.length < 10) {
    document.getElementById('guest-limit-error').textContent = "";
  }
}




// Validates that no guest fields are empty before submission
function validateAndSubmit() {
    const form = document.getElementById('rsvp-form');
    const guestInputs = form.querySelectorAll('input[name^="guest_name_"]');
    const attendingSelects = form.querySelectorAll('select[name^="attending_"]');

    for (const input of guestInputs) {
        if (input.value.trim() === "") {
        document.getElementById('form-error').textContent = "You did not fill out all the guest names";
        input.focus();
        return false;
        }
        if (!attendingSelects[i] || attendingSelects[i].value === "") {
            document.getElementById('form-error').textContent = "Not all guests have selected if they are attending or not";
            attendingSelects[i].focus();
            return false;
        }
    }

    // Validate email presence
    const emailInput = form.querySelector('input[name="email"]');
        console.log(`Name: ${emailInput.name}, Value: "${emailInput.value}"`);
        if (!emailInput || emailInput.value.trim() === "") {
        document.getElementById('form-error').textContent = "Please enter your email";
        emailInput.focus();
        return false;
    }

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById('form-error').textContent = "Please enter a valid email address.";
        emailInput.focus();
        return false;
    }

  // Validate attending selection
    const attendingSelect = form.querySelector('select[name="attending"]');
    console.log(`Name: ${attendingSelect.name}, Value: "${attendingSelect.value}"`);
    if (!attendingSelect || attendingSelect.value === "") {
        document.getElementById('form-error').textContent = "Please select whether you will be attending.";
        attendingSelect.focus();
        return false;
    }

    return true;
}


