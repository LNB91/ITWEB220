let contacts = [
    { name: "Andrew Anderson", address: "123 A St", phone: "123-456-7890" },
    { name: "Brandy Branson", address: "456 B St", phone: "333-444-5555" },
    { name: "Cathy Carter", address: "789 C St", phone: "555-123-4567" }
];

function addContact() {
    let name = prompt("Enter the contact's name:");
    let address = prompt("Enter the contact's address:");
    let phone = prompt("Enter the contact's phone number:");

    let newContact = { name: name, address: address, phone: phone };
    contacts.push(newContact);
}

function sortContacts() {
    contacts.sort(function(a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        return 0; 
    });
}

function displayContacts() {
    console.log("Contact List:");
    contacts.forEach(contact => {
        console.log(`Name: ${contact.name}, Address: ${contact.address}, Phone: ${contact.phone}`);
    });
}

function runAddressBook() {
    let addMore = true;

    while (contacts.length < 10 && addMore) {
        addContact();
        
        if (contacts.length < 10) {
            addMore = prompt("Would you like to add another contact? (yes/no)").toLowerCase() === "yes";
        }
    }

    if (contacts.length >= 10) {
        console.log("Maximum number of contacts reached.");
    }

    sortContacts();

    displayContacts();
}

runAddressBook();

}