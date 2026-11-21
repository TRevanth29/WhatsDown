// ===== 1. ROOM FORM ELEMENTS =====

// Find the form controls and the places where we show the result.
const roomForm = document.querySelector("#room-form");
const roomFields = document.querySelector("#room-fields");
const roomCodeInput = document.querySelector("#room-code");
const roomError = document.querySelector("#room-error");
const currentRoom = document.querySelector("#current-room");
const roomStatus = document.querySelector("#room-status");

// ===== 2. ROOM CODE VALIDATION =====

// Accept two groups of three letters or digits with an optional hyphen.
function formatRoomCode(value) {
  const match = value.trim().match(/^([a-z0-9]{3})-?([a-z0-9]{3})$/i);

  // An empty result tells the form that the input did not match.
  if (!match) {
    return "";
  }

  return `${match[1]}-${match[2]}`.toUpperCase();
}

// Remove an old error as soon as the visitor starts correcting the code.
function clearRoomError() {
  roomCodeInput.removeAttribute("aria-invalid");
  roomError.textContent = "";
}

// ===== 3. OPEN A ROOM PREVIEW =====

// Handle the form on this page so it does not reload or navigate.
function openRoom(event) {
  event.preventDefault();
  const code = formatRoomCode(roomCodeInput.value);

  // Explain invalid input and send keyboard focus back to the field.
  if (!code) {
    roomCodeInput.setAttribute("aria-invalid", "true");
    roomError.textContent = "Enter six letters or digits, like K7P-92X.";
    roomCodeInput.focus();
    return;
  }

  // Show the accepted code as text in the input and the room summary.
  clearRoomError();
  roomCodeInput.value = code;
  currentRoom.textContent = code;
  roomStatus.textContent = "Code accepted. Messaging is still under construction.";
}

// Listen for typing and submissions before enabling the controls.
roomCodeInput.addEventListener("input", clearRoomError);
roomForm.addEventListener("submit", openRoom);
roomFields.disabled = false;
