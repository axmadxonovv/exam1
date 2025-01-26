let contacts = [];
let contactForm = document.getElementById("contactForm");
let contactList = document.getElementById("contactList");
let renderContacts = () => {
  contactList.innerHTML = "";
  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${contact.name}  ${contact.phone} ${
      contact.email ? `${contact.email}` : ""
    }</span>
      <button onclick="deleteContact(${index})">O'chirish</button>
    `;
    contactList.appendChild(li);
  });
};
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  if (name && phone) {
    contacts.push({ name, phone, email });
    renderContacts();
    contactForm.reset();
  } else {
    alert("Ism va telefon raqami majburiy!");
  }
});
let deleteContact = (index) => {
  contacts.splice(index, 1);
  renderContacts();
};
renderContacts();
