$(document).ready(function () {
  var submitBtn = $('.submitBtn');

  // CONTACT FORM DATA VALIDATION AND SEND DATA API
  submitBtn.click(function sendContact() {
    var valid;
    valid = validateContact();
    if (valid) {
      $.ajax({
        url: 'https://formsubmit.co/ajax/info@ddschweisser.de',
        method: 'POST',
        data: {
          name: $('#userName').val(),
          email: $('#userEmail').val(),
          reason: $('#contactReason').val(),
          message: $('#content').val(),
        },
        dataType: 'json',

        success: function () {
          $('#mail-status').html("<p class='mailSuccess'>Nachricht gesendet. Wir werden so schnell wie möglich antworten.</p>");
          $('.submitBtn').fadeOut(100);
          $('#mail-status').fadeIn(500);
        },
        error: function () {
          $('#mail-status').html("<p class='mailError'>Error. Bitte kontaktieren Sie uns direkt über email info@ddschweisser.de(</p>");
          $('.submitBtn').fadeOut(100);
          $('#mail-status').fadeIn(500);
        },
      });
    }
  });
  // Validate eneterd data in contact form
  function validateContact() {
    var valid = true;
    $('.info').html('');
    if (!$('#userName').val() || !$('#userEmail').val() || !$('#contactReason').val() || !$('#content').val()) {
      $('#mail-status').html("<p class='mailError'>Alle Felder benötigt!</p>");
      $('#mail-status').fadeIn(500);
      valid = false;
    }
    if (
      !$('#userEmail')
        .val()
        .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
    ) {
      $('#mail-status').html("<p class='mailError'>E-Mail ungültig!</p>");
      $('#mail-status').fadeIn(500);
      valid = false;
    }
    return valid;
  }
});
