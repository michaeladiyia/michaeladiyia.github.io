// Update contact information
document.getElementById('phone').textContent = '4164567890';
document.getElementById('address').textContent = '69 Pennyroyal Crescent Brampton, Ontario, Canada';
document.getElementById('email').textContent = 'mikequofi14@yahoo.com, michaeladiyia@gmail.com';

function toggleDropdown(id) {
    var content = document.getElementById(id);
    content.classList.toggle("active");
  }