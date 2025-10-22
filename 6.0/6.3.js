const kontakt = {
    contacts:[
        {name: 'John',mail: 'greussoquessouque-5620@yopmail.com',phone: 9611539510
        },
        {name: 'Karl',mail: 'yumeigujegou-5264@yopmail.com',phone: 147231
        },
        {name: 'Viliam',mail: 'trottoitafaummeu-6976@yopmail.com',phone: 91623925
        }
    ],
    findByName(name){
        const q = String(name).trim().toLowerCase();
        return this.contacts.find(c=> c.name.toLowerCase() === q);
    },
    addContact(contact){
        const {name,mail,phone} = contact;
        if (!name || !mail || !phone){
            throw new Error ('Введите все поля')
        }
        this.contacts.push({
            name: String(name),
            mail: String(mail),
            phone: String(phone)
        });
    }
};

const karl = kontakt.findByName('kArL');
console.log(karl);

kontakt.addContact({
name: 'Alice',
mail: 'alice@example.com',
phone: '380501112233'
});
console.log(kontakt.contacts);
